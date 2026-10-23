import React, { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Download, Eye, FileText, ArrowRight } from 'lucide-react';

import heroImage from '../assests/images/outreach5.jpeg';
import archiveImage from '../assests/images/outreach2.jpeg';

const inauguralPDF = '/JHF_Inaugural_Newsletter_IRS..pdf';

// #41: the "Spring 2026 Update" card is removed. The "Construction Progress
// Report" card stays hidden until the founder confirms a report is planned.
// Set this to true once she confirms.
const SHOW_CONSTRUCTION_REPORT_CARD = false;

const Newsletter = () => {
  const [showPdf, setShowPdf] = useState(false);
  const [subName, setSubName] = useState('');
  const [subEmail, setSubEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [subLoading, setSubLoading] = useState(false);
  const [subError, setSubError] = useState('');

  const handleSubscribe = async () => {
    if (!subName || !subEmail) {
      setSubError('Please enter your name and email.');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(subEmail)) {
      setSubError('Please enter a valid email address.');
      return;
    }

    setSubLoading(true);
    setSubError('');

    try {
      const formData = new URLSearchParams();
      formData.append('name', subName);
      formData.append('email', subEmail);
      formData.append('subject', 'Newsletter Signup');
      formData.append('message', `${subName} (${subEmail}) would like to join the JoMabel Healthcare Foundation mailing list.`);

      const response = await fetch('/contact-handler.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: formData.toString(),
      });
      const data = await response.json();

      if (data.success) {
        setSubscribed(true);
        setSubName('');
        setSubEmail('');
      } else {
        setSubError(data.message || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      console.error('Newsletter signup error:', err);
      setSubError('Network error. Please check your connection and try again.');
    } finally {
      setSubLoading(false);
    }
  };

  return (
    <div className="nl-page">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');

        .nl-page {
          font-family: var(--font-body);
          background: var(--color-bg);
          color: var(--color-text);
        }

        /* ══ HERO: open, photo right / text left ══ */
        .nl-hero {
          max-width: 1200px;
          margin: 0 auto;
          padding: clamp(48px, 7vw, 80px) clamp(20px, 5vw, 64px);
          display: grid;
          grid-template-columns: 1fr 1.1fr;
          gap: clamp(32px, 5vw, 64px);
          align-items: center;
        }
        .nl-hero-kicker {
          font-family: var(--font-body);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: var(--color-primary);
          margin: 0 0 14px;
          display: block;
        }
        .nl-hero-title {
          font-family: var(--font-body);
          font-size: clamp(30px, 4vw, 46px);
          font-weight: 700;
          letter-spacing: 0;
          text-transform: none;
          line-height: 1.1;
          color: var(--color-navy);
          margin: 0 0 20px;
        }
        .nl-hero-sub {
          font-family: var(--font-body);
          font-size: clamp(14px, 1.3vw, 16px);
          color: var(--color-text-muted);
          line-height: 1.8;
          max-width: 420px;
          margin: 0;
        }
        .nl-hero-photo-wrap {
          border-radius: var(--card-radius);
          overflow: hidden;
        }
        .nl-hero-photo {
          width: 100%;
          height: 100%;
          min-height: 320px;
          object-fit: cover;
          display: block;
        }

        @media (max-width: 860px) {
          .nl-hero { grid-template-columns: 1fr; }
          .nl-hero-photo { min-height: 260px; }
        }

        /* ══ INNER ══ */
        .nl-inner {
          max-width: 1080px;
          margin: 0 auto;
          padding: 0 clamp(20px, 5vw, 56px) 64px;
        }

        /* ══ OPEN, CENTERED SECTION HEADER ══ */
        .nl-section-header {
          text-align: center;
          max-width: 560px;
          margin: 0 auto 8px;
        }
        .nl-section-header.left { text-align: left; margin: 0 0 8px; }
        .nl-kicker {
          font-family: var(--font-body);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: var(--color-primary);
          margin: 0 0 10px;
        }
        .nl-headline {
          font-family: var(--font-body);
          font-size: clamp(26px, 3.5vw, 40px);
          font-weight: 700;
          letter-spacing: 0;
          text-transform: none;
          line-height: 1.15;
          color: var(--color-navy);
          margin: 0;
        }

        .nl-divider {
          font-family: var(--font-body);
          font-size: 13px;
          color: var(--color-text-muted);
          text-align: center;
          margin: 0 0 8px;
        }
        .nl-divider.left { text-align: left; }

        /* ══ CURRENT ISSUE: centered gradient block ══ */
        .nl-issue-block {
          background: linear-gradient(90deg, #dce9f6 0%, #e9f5ec 100%);
          border-radius: var(--card-radius);
          padding: 56px clamp(24px, 5vw, 64px);
          margin-bottom: 56px;
          text-align: center;
        }
        .nl-issue-title {
          font-family: var(--font-body);
          font-size: clamp(22px, 2.8vw, 30px);
          font-weight: 700;
          color: var(--color-navy);
          margin: 32px 0 8px;
        }
        .nl-issue-subtitle {
          font-family: var(--font-body);
          font-size: clamp(14px, 1.4vw, 16px);
          color: var(--color-text);
          font-weight: 600;
          margin: 0 0 8px;
          line-height: 1.5;
        }
        .nl-issue-meta {
          font-family: var(--font-body);
          font-size: 13px;
          color: var(--color-text-muted);
          margin: 0 0 28px;
        }

        /* ══ ACTION BUTTONS ══ */
        .nl-actions {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          justify-content: center;
          margin-bottom: 0;
        }
        .nl-btn-primary {
          background: var(--color-green);
          color: #ffffff;
          border: none;
          border-radius: var(--btn-radius);
          padding: 13px 32px;
          font-family: var(--font-body);
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.5px;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: var(--transition);
          text-decoration: none;
        }
        .nl-btn-primary:hover { background: var(--color-green-dark); transform: translateY(-1px); }
        .nl-btn-primary.active { background: var(--color-green-dark); }

        .nl-btn-outline {
          background: #ffffff;
          color: var(--color-navy);
          border: 1.5px solid var(--color-border);
          border-radius: var(--btn-radius);
          padding: 13px 32px;
          font-family: var(--font-body);
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.5px;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: var(--transition);
          text-decoration: none;
        }
        .nl-btn-outline:hover { border-color: var(--color-primary); color: var(--color-primary); }

        /* ══ PDF VIEWER ══ */
        .nl-pdf-wrap {
          background: #ffffff;
          border: 1px solid var(--color-border);
          border-radius: var(--card-radius);
          overflow: hidden;
          margin-top: 32px;
          box-shadow: var(--shadow-md);
          text-align: left;
        }
        .nl-pdf-wrap iframe {
          width: 100%;
          height: 80vh;
          min-height: 600px;
          border: none;
          display: block;
        }

        /* ══ ARCHIVE: text+photo left/right, navy bars ══ */
        .nl-archive-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          align-items: start;
        }
        .nl-archive-list {
          display: flex;
          flex-direction: column;
          gap: 14px;
          margin-top: 24px;
        }
        .nl-archive-bar {
          background: var(--color-navy);
          border-radius: var(--card-radius);
          padding: 22px 26px;
        }
        .nl-archive-title {
          font-family: var(--font-body);
          font-size: 18px;
          font-weight: 700;
          color: #ffffff;
          margin: 0 0 4px;
        }
        .nl-archive-meta {
          font-family: var(--font-body);
          font-size: 13px;
          color: rgba(255,255,255,0.65);
          margin: 0;
        }
        .nl-archive-photo-wrap {
          border-radius: var(--card-radius);
          overflow: hidden;
        }
        .nl-archive-photo {
          width: 100%;
          height: 100%;
          min-height: 260px;
          object-fit: cover;
          display: block;
        }

        @media (max-width: 860px) {
          .nl-archive-grid { grid-template-columns: 1fr; }
          .nl-archive-photo-wrap { order: -1; }
        }

        /* ══ MAILING LIST SIGNUP ══ */
        .nl-signup-section {
          background: var(--color-green-light);
          padding: 64px clamp(20px, 5vw, 56px);
          margin-top: 64px;
        }
        .nl-signup-inner {
          max-width: 700px;
          margin: 0 auto;
          text-align: center;
        }
        .nl-signup-title {
          font-family: var(--font-body);
          font-size: clamp(24px, 3vw, 34px);
          font-weight: 700;
          color: var(--color-navy);
          margin: 0 0 28px;
        }
        .nl-signup-row {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }
        .nl-signup-input {
          flex: 1;
          min-width: 180px;
          padding: 13px 16px;
          border: 1.5px solid var(--color-border);
          border-radius: var(--btn-radius);
          font-family: var(--font-body);
          font-size: 14px;
          color: var(--color-text);
          background: #ffffff;
          outline: none;
          transition: var(--transition);
        }
        .nl-signup-input:focus { border-color: var(--color-primary); }
        .nl-signup-btn {
          background: var(--color-green);
          color: #ffffff;
          border: none;
          border-radius: var(--btn-radius);
          padding: 13px 32px;
          font-family: var(--font-body);
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.5px;
          cursor: pointer;
          transition: var(--transition);
          white-space: nowrap;
        }
        .nl-signup-btn:hover { background: var(--color-green-dark); }
        .nl-signup-success {
          font-family: var(--font-body);
          font-size: 14px;
          color: var(--color-green-dark);
          font-weight: 600;
        }
        .nl-signup-error {
          font-family: var(--font-body);
          font-size: 13px;
          color: #991b1b;
          font-weight: 600;
          margin: 0 0 14px;
        }
        .nl-signup-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        /* ══ RESPONSIVE ══ */
        @media (max-width: 560px) {
          .nl-actions { flex-direction: column; }
          .nl-btn-primary, .nl-btn-outline { justify-content: center; }
          .nl-signup-row { flex-direction: column; }
        }
      `}</style>

      <Navbar />

      {/* ── Hero ── */}
      <div className="nl-hero">
        <div>
          <span className="nl-hero-kicker">Stay Informed</span>
          <h1 className="nl-hero-title">Newsletter</h1>
          <p className="nl-hero-sub">
            JoMabel Healthcare Foundation is a Texas-based U.S. nonprofit foundation
            developing a world-class 16,000+ sq. meter medical and training center
            in Ufuma, Anambra State, Nigeria.
          </p>
        </div>
        <div className="nl-hero-photo-wrap">
          <img src={heroImage} alt="Newsletter" className="nl-hero-photo" />
        </div>
      </div>

      <div className="nl-inner">

        {/* ── Current Issue ── */}
        <div className="nl-issue-block">
          <div className="nl-section-header">
            <p className="nl-kicker">Latest Release</p>
            <h2 className="nl-headline">Current Issue</h2>
          </div>
          <p className="nl-divider">Volume 1, Issue 1, April 2025</p>

          <h3 className="nl-issue-title">Inaugural Newsletter</h3>
          <p className="nl-issue-subtitle">Building Systems. Restoring Health. Empowering Communities.</p>
          <p className="nl-issue-meta">Volume 1, Issue 1, April 2025</p>

          <div className="nl-actions">
            <button
              className={`nl-btn-primary${showPdf ? ' active' : ''}`}
              onClick={() => setShowPdf(v => !v)}
            >
              <Eye size={15} />
              {showPdf ? 'Close Viewer' : 'Read Now'}
            </button>
            <a
              href={inauguralPDF}
              target="_blank"
              rel="noopener noreferrer"
              className="nl-btn-outline"
            >
              <Download size={15} />
              Download PDF
            </a>
          </div>

          {showPdf && (
            <div className="nl-pdf-wrap">
              <iframe
                src={`${inauguralPDF}#toolbar=0&navpanes=0`}
                title="JoMabel Healthcare Foundation Inaugural Newsletter"
              />
            </div>
          )}
        </div>

        {/* ── Archive ── */}
        <div className="nl-archive-grid">
          <div>
            <div className="nl-section-header left">
              <p className="nl-kicker">Archive</p>
              <h2 className="nl-headline">Past Issues</h2>
            </div>
            <p className="nl-divider left">More editions coming as the foundation grows</p>

            {SHOW_CONSTRUCTION_REPORT_CARD && (
              <div className="nl-archive-list">
                <div className="nl-archive-bar">
                  <h4 className="nl-archive-title">Construction Progress Report</h4>
                  <p className="nl-archive-meta">Coming Soon</p>
                </div>
              </div>
            )}
          </div>

          <div className="nl-archive-photo-wrap">
            <img src={archiveImage} alt="JoMabel healthcare team" className="nl-archive-photo" />
          </div>
        </div>

      </div>

      {/* ── Mailing List Signup ── */}
      <div className="nl-signup-section">
        <div className="nl-signup-inner">
          <h2 className="nl-signup-title">Join Our Mailing List</h2>
          {subscribed ? (
            <p className="nl-signup-success">✓ Thanks for subscribing. We'll keep you posted.</p>
          ) : (
            <>
              {subError && <p className="nl-signup-error">{subError}</p>}
              <div className="nl-signup-row">
                <input
                  className="nl-signup-input"
                  placeholder="Name*"
                  value={subName}
                  onChange={e => setSubName(e.target.value)}
                  disabled={subLoading}
                />
                <input
                  className="nl-signup-input"
                  type="email"
                  placeholder="Email*"
                  value={subEmail}
                  onChange={e => setSubEmail(e.target.value)}
                  disabled={subLoading}
                />
                <button className="nl-signup-btn" onClick={handleSubscribe} disabled={subLoading}>
                  {subLoading ? 'Subscribing...' : 'Subscribe'}
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Newsletter;