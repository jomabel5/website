import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, MapPin, Clock, Send, CheckCircle, AlertCircle } from "lucide-react";
import outreachImage from '../../assests/images/outreach2.jpeg';

const contactDetails = [
  {
    icon: Mail,
    label: 'Email Us',
    value: 'foundation@jomabel.org',
    href: 'mailto:foundation@jomabel.org',
  },
  {
    icon: MapPin,
    label: 'Our Location',
    value: 'Ufuma, Anambra State, Nigeria\nTexas, United States',
    href: null,
  },
  {
    icon: Clock,
    label: 'Office Hours',
    value: 'Monday – Friday\n9:00 AM – 5:00 PM (US Central Time)',
    href: null,
  },
];

const subjectOptions = [
  'General Inquiry',
  'Donations',
  'Partnership',
  'Volunteer',
  'Legacy Giving',
  'Media & Press',
];

const Contact = () => {
  const [form, setForm] = useState({ 
    name: '', 
    email: '', 
    subject: '', 
    message: '' 
  });
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [turnstileToken, setTurnstileToken] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    // Clear error when user starts typing
    if (error) setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!form.name || !form.email || !form.subject || !form.message) {
      setError('Please fill in all fields');
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      setError('Please enter a valid email address');
      return;
    }
    
    setIsLoading(true);
    setError('');
    
    try {
      // Create form data
      const formData = new URLSearchParams();
      formData.append('name', form.name);
      formData.append('email', form.email);
      formData.append('subject', form.subject);
      formData.append('message', form.message);
      
      // Send to PHP handler
      const response = await fetch('/contact-handler.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formData.toString()
      });
      
      const data = await response.json();
      
      if (data.success) {
        // Success: reset form and show success message
        setSubmitted(true);
        setForm({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        // Show error message
        setError(data.message || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setError('Network error. Please check your connection and try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="ct-page">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Anton&family=Playfair+Display:wght@700&display=swap');

        /* ─────────────────────────────────────────
           BASE
        ───────────────────────────────────────── */
        .ct-page {
          font-family: var(--font-body);
          background: var(--color-bg);
          width: 100%;
          overflow-x: hidden;
        }

        /* ─────────────────────────────────────────
           HERO: bottom-anchored like OurPrograms
        ───────────────────────────────────────── */
        .ct-hero {
          position: relative;
          height: 52vh;
          min-height: 400px;
          display: flex;
          align-items: flex-end;
          overflow: hidden;
        }
        .ct-hero-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 40%;
        }
        .ct-hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(0,0,0,0.85) 0%,
            rgba(0,0,0,0.35) 55%,
            rgba(0,0,0,0.10) 100%
          );
        }
        .ct-hero-content {
          position: relative;
          z-index: 2;
          padding: 0 clamp(24px, 5vw, 72px) 52px;
          max-width: 760px;
        }
        .ct-hero-kicker {
          font-family: var(--font-body);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--color-primary);
          margin: 0 0 14px;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .ct-hero-kicker::before {
          content: '';
          display: inline-block;
          width: 28px;
          height: 2px;
          background: var(--color-primary);
          flex-shrink: 0;
        }
        .ct-hero h1 {
          font-family: 'Anton', sans-serif;
          font-size: clamp(32px, 5vw, 58px);
          font-weight: 400;
          color: #ffffff;
          line-height: 1.08;
          letter-spacing: 0.01em;
          text-transform: uppercase;
          margin: 0 0 16px;
        }
        .ct-hero p {
          font-family: var(--font-body);
          font-size: clamp(13px, 1.3vw, 16px);
          color: rgba(255,255,255,0.78);
          line-height: 1.75;
          max-width: 520px;
          margin: 0;
        }

        /* ─────────────────────────────────────────
           BODY: two-col grid
        ───────────────────────────────────────── */
        .ct-body {
          display: grid;
          grid-template-columns: 1fr 1.35fr;
          min-height: 600px;
        }

        /* ── LEFT: info panel ── */
        .ct-info {
          background: var(--color-navy);
          padding: 56px clamp(24px, 4vw, 52px) 56px;
          display: flex;
          flex-direction: column;
        }
        .ct-info-kicker {
          font-family: var(--font-body);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: var(--color-primary);
          margin: 0 0 12px;
        }
        .ct-info-title {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(22px, 2.6vw, 30px);
          font-weight: 700;
          color: #ffffff;
          line-height: 1.2;
          margin: 0 0 12px;
        }
        .ct-info-desc {
          font-family: var(--font-body);
          font-size: 14px;
          color: rgba(255,255,255,0.55);
          line-height: 1.75;
          margin: 0 0 44px;
          max-width: 340px;
        }

        /* detail items */
        .ct-details {
          display: flex;
          flex-direction: column;
          gap: 28px;
          flex: 1;
        }
        .ct-detail {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          padding-bottom: 28px;
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }
        .ct-detail:last-child { border-bottom: none; padding-bottom: 0; }
        .ct-detail-icon {
          width: 40px;
          height: 40px;
          border-radius: var(--card-radius);
          background: rgba(255,255,255,0.07);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          color: var(--color-primary);
        }
        .ct-detail-label {
          font-family: var(--font-body);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: rgba(255,255,255,0.40);
          margin: 0 0 5px;
        }
        .ct-detail-value {
          font-family: var(--font-body);
          font-size: 14px;
          color: rgba(255,255,255,0.85);
          line-height: 1.55;
          margin: 0;
          white-space: pre-line;
          text-decoration: none;
          transition: var(--transition);
        }
        a.ct-detail-value:hover { color: var(--color-primary); }

        /* map */
        .ct-map {
          margin-top: 40px;
          border-radius: var(--card-radius);
          overflow: hidden;
          height: 180px;
          border: 1px solid rgba(255,255,255,0.10);
          flex-shrink: 0;
        }
        .ct-map iframe {
          width: 100%;
          height: 100%;
          border: 0;
          display: block;
          filter: grayscale(30%);
        }

        /* ── RIGHT: form panel ── */
        .ct-form-panel {
          background: var(--color-bg);
          padding: 56px clamp(24px, 4vw, 60px) 56px;
        }
        .ct-form-kicker {
          font-family: var(--font-body);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: var(--color-primary);
          margin: 0 0 10px;
        }
        .ct-form-title {
          font-family: 'Anton', sans-serif;
          font-size: clamp(22px, 2.5vw, 34px);
          font-weight: 400;
          letter-spacing: 0.01em;
          text-transform: uppercase;
          line-height: 1.1;
          color: var(--color-navy);
          margin: 0 0 6px;
        }
        .ct-form-subtitle {
          font-family: var(--font-body);
          font-size: 13px;
          color: var(--color-text-light);
          margin: 0 0 36px;
        }

        /* success & error messages */
        .ct-success {
          background: var(--color-green-light);
          color: #166534;
          padding: 14px 18px;
          border-radius: var(--card-radius);
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 24px;
        }
        .ct-error {
          background: #fee2e2;
          color: #991b1b;
          padding: 14px 18px;
          border-radius: var(--card-radius);
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 24px;
        }

        /* form fields */
        .ct-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 18px;
        }
        .ct-group {
          margin-bottom: 20px;
        }
        .ct-label {
          display: block;
          font-family: var(--font-body);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: var(--color-text-muted);
          margin-bottom: 8px;
        }
        .ct-input,
        .ct-select,
        .ct-textarea {
          width: 100%;
          padding: 13px 16px;
          border: 1.5px solid var(--color-border);
          border-radius: var(--btn-radius);
          font-family: var(--font-body);
          font-size: 14px;
          color: var(--color-text);
          outline: none;
          background: var(--color-bg);
          transition: var(--transition);
          box-sizing: border-box;
        }
        .ct-input:focus,
        .ct-select:focus,
        .ct-textarea:focus {
          border-color: var(--color-primary);
          box-shadow: 0 0 0 3px rgba(29,143,212,0.10);
        }
        .ct-input::placeholder,
        .ct-textarea::placeholder { color: var(--color-text-light); }
        .ct-textarea {
          resize: vertical;
          min-height: 130px;
        }
        .ct-select { cursor: pointer; }

        /* submit button */
        .ct-submit {
          background: var(--color-navy);
          color: #ffffff;
          border: none;
          border-radius: var(--btn-radius);
          padding: 16px 28px;
          width: 100%;
          font-family: var(--font-body);
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 0.5px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          transition: var(--transition);
          margin-top: 4px;
        }
        .ct-submit:hover:not(:disabled) {
          background: var(--color-primary);
          transform: translateY(-1px);
          box-shadow: var(--shadow-md);
        }
        .ct-submit:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        /* privacy notice (#40) */
        .ct-privacy {
          font-family: var(--font-body);
          font-size: 11.5px;
          color: var(--color-text-light);
          line-height: 1.6;
          text-align: center;
          margin: 14px 0 0;
        }
        .ct-privacy a {
          color: var(--color-primary);
          font-weight: 600;
          text-decoration: underline;
          text-underline-offset: 2px;
        }

        /* ─────────────────────────────────────────
           RESPONSIVE
        ───────────────────────────────────────── */
        @media (max-width: 900px) {
          .ct-body { grid-template-columns: 1fr; }
          .ct-info  { padding: 48px clamp(24px, 5vw, 48px); }
          .ct-form-panel { padding: 48px clamp(24px, 5vw, 48px); }
          .ct-map  { height: 200px; }
        }
        @media (max-width: 600px) {
          .ct-row  { grid-template-columns: 1fr; gap: 0; }
          .ct-hero { min-height: 340px; }
        }
      `}</style>

      {/* Hero Section */}
      <div className="ct-hero">
        <img src={outreachImage} alt="JoMabel Healthcare Foundation" className="ct-hero-img" />
        <div className="ct-hero-overlay" />
        <div className="ct-hero-content">
          <p className="ct-hero-kicker">Contact Us</p>
          <h1>Let's Connect</h1>
          <p>
            Have questions, want to donate, volunteer, or partner with us?
            We'd love to hear from you.
          </p>
        </div>
      </div>

      {/* Body Grid */}
      <div className="ct-body">
        {/* Left: Contact Info */}
        <div className="ct-info">
          <p className="ct-info-kicker">Get In Touch</p>
          <h2 className="ct-info-title">Reach Out<br />to Our Team</h2>
          <p className="ct-info-desc">
            We're here to answer your questions and discuss how you
            can be part of our mission to transform healthcare in Nigeria.
          </p>

          <div className="ct-details">
            {contactDetails.map(({ icon: Icon, label, value, href }) => (
              <div className="ct-detail" key={label}>
                <div className="ct-detail-icon">
                  <Icon size={18} />
                </div>
                <div>
                  <p className="ct-detail-label">{label}</p>
                  {href
                    ? <a href={href} className="ct-detail-value">{value}</a>
                    : <p className="ct-detail-value">{value}</p>
                  }
                </div>
              </div>
            ))}
          </div>

          <div className="ct-map">
            <iframe
              title="Ufuma Anambra Nigeria"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15877.834034512345!2d6.985!3d6.034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1043f3b0b0b0b0b1%3A0x0!2sUfuma%2C%20Anambra%20State%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1700000000000"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="ct-form-panel">
          <p className="ct-form-kicker">Send a Message</p>
          <h3 className="ct-form-title">We'd Love to<br />Hear From You</h3>
          <p className="ct-form-subtitle">We'll get back to you within 24–48 hours.</p>

          {/* Success Message */}
          {submitted && (
            <div className="ct-success">
              <CheckCircle size={18} />
              Thank you! Your message has been sent successfully. We'll get back to you soon.
            </div>
          )}

          {/* Error Message */}
          {error && (
            <div className="ct-error">
              <AlertCircle size={18} />
              {error}
            </div>
          )}

          {/* Contact Form */}
          <form onSubmit={handleSubmit}>
            <div className="ct-row">
              <div className="ct-group">
                <label className="ct-label">Full Name *</label>
                <input
                  name="name"
                  type="text"
                  placeholder="Your full name"
                  value={form.name}
                  onChange={handleChange}
                  className="ct-input"
                  required
                  disabled={isLoading}
                />
              </div>
              <div className="ct-group">
                <label className="ct-label">Email Address *</label>
                <input
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={handleChange}
                  className="ct-input"
                  required
                  disabled={isLoading}
                />
              </div>
            </div>

            <div className="ct-group">
              <label className="ct-label">Subject *</label>
              <select
                name="subject"
                value={form.subject}
                onChange={handleChange}
                className="ct-select"
                required
                disabled={isLoading}
              >
                <option value="">Select a topic</option>
                {subjectOptions.map(o => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            </div>

            <div className="ct-group">
              <label className="ct-label">Message *</label>
              <textarea
                name="message"
                placeholder="Write your message here..."
                value={form.message}
                onChange={handleChange}
                className="ct-textarea"
                required
                disabled={isLoading}
              />
            </div>

            <button type="submit" className="ct-submit" disabled={isLoading}>
              {isLoading ? 'Sending...' : 'Send Message'}
              {!isLoading && <Send size={15} />}
            </button>

            <p className="ct-privacy">
              By sending this message, you agree that JoMabel Healthcare Foundation may use
              your details to respond to you. We never sell or share your information. See
              our <Link to="/privacy-policy">Privacy Policy</Link>.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;