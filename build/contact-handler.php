<?php
/**
 * contact-handler.php
 *
 * Shared form handler for JoMabel Healthcare Foundation's website.
 * Every form on the site (Contact, Newsletter signup, Legacy Giving intent,
 * Donation intent) POSTs the same four fields here:
 *
 *   name    - sender's name
 *   email   - sender's email (used as Reply-To)
 *   subject - short label identifying which form this came from
 *   message - the body content (already formatted by the frontend)
 *
 * Response is always JSON: { "success": true|false, "message": "..." }
 */

header('Content-Type: application/json');

// ── Where all form submissions get delivered ──
const RECIPIENT_EMAIL = 'foundation@jomabelhf.org';
const SITE_NAME       = 'JoMabel Healthcare Foundation Website';

// ── Only accept POST ──
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed.']);
    exit;
}

// ── Simple honeypot spam trap (optional field, ignored by real users) ──
// If a form ever adds a hidden input named "website", bots that auto-fill
// every field will get caught here. Real visitors never see or fill it.
if (!empty($_POST['website'])) {
    // Pretend success so bots don't learn anything, but don't actually send.
    echo json_encode(['success' => true, 'message' => 'Thank you.']);
    exit;
}

// ── Pull and sanitize input ──
$name    = trim(strip_tags($_POST['name']    ?? ''));
$email   = trim($_POST['email']   ?? '');
$subject = trim(strip_tags($_POST['subject'] ?? 'Website Form Submission'));
$message = trim(strip_tags($_POST['message'] ?? ''));

// ── Validate required fields ──
if ($name === '' || $email === '' || $message === '') {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Please fill in all required fields.']);
    exit;
}

// ── Validate email format ──
$email = filter_var($email, FILTER_SANITIZE_EMAIL);
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Please enter a valid email address.']);
    exit;
}

// ── Build the email ──
$emailSubject = "[$subject] New submission from $name";

$emailBody  = "You have a new submission from the JoMabel website.\n\n";
$emailBody .= "Form: $subject\n";
$emailBody .= "Name: $name\n";
$emailBody .= "Email: $email\n";
$emailBody .= str_repeat('-', 40) . "\n";
$emailBody .= "$message\n";
$emailBody .= str_repeat('-', 40) . "\n";
$emailBody .= "Sent: " . date('Y-m-d H:i:s') . " (server time)\n";
$emailBody .= "IP: " . ($_SERVER['REMOTE_ADDR'] ?? 'unknown') . "\n";

// Headers: From must be a domain the server is allowed to send as
// (using a no-reply address on your own domain avoids most spam filters).
// Reply-To is set to the visitor's email so you can hit "Reply" directly.
$fromAddress = 'no-reply@jomabelhf.org'; 

$headers  = "From: " . SITE_NAME . " <$fromAddress>\r\n";
$headers .= "Reply-To: $name <$email>\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// ── Send ──
$sent = mail(RECIPIENT_EMAIL, $emailSubject, $emailBody, $headers);

if ($sent) {
    echo json_encode(['success' => true, 'message' => 'Thank you! Your message has been sent.']);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Failed to send message. Please try again or email us directly.']);
}