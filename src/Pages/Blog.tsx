import React, { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Download, Eye, FileText } from 'lucide-react';

import heroImage from '../assests/images/outreach5.jpeg';

const inauguralPDF = '/JHF_Inaugural_Newsletter_IRS..pdf';

const Newsletter = () => {
  const [showPdf, setShowPdf] = useState(false);

  return (
    <div className="nl-page">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');

        .nl-page {
          font-family: var(--font-body);
          background: var(--color-bg);
          color: var(--color-text);
        }

        /* ══ HERO ══ */
        .nl-hero {
          position: relative;
          padding: clamp(48px, 7vw, 80px) clamp(20px, 5vw, 64px);
          overflow: hidden;
        }
        .nl-hero-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }
        .nl-hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to right,
            rgba(255,255,255,0.97) 45%,
            rgba(255,255,255,0.75) 70%,
            rgba(255,255,255,0.10) 100%
          );
        }
        .nl-hero-grid {
          position: relative;
          z-index: 2;
          max-width: 1080px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1px 1fr;
          align-items: center;
          min-height: 260px;
        }
        .nl-hero-left { padding-right: 64px; }
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
          font-family: 'Anton', sans-serif;
          font-size: clamp(36px, 6vw, 64px);
          font-weight: 400;
          letter-spacing: 0.01em;
          text-transform: uppercase;
          line-height: 1.0;
          color: var(--color-navy);
          margin: 0 0 20px;
        }
        .nl-hero-sub {
          font-family: var(--font-body);
          font-size: clamp(13px, 1.3vw, 15px);
          color: var(--color-text-muted);
          line-height: 1.8;
          max-width: 360px;
          margin: 0;
        }
        .nl-hero-divider { background: var(--color-border); width: 1px; align-self: stretch; }
        .nl-hero-right { padding-left: 64px; display: flex; justify-content: center; }
        .nl-hero-icon-box {
          border: 1px solid var(--color-border);
          border-radius: 16px;
          padding: 40px 56px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255,255,255,0.90);
          box-shadow: var(--shadow-md);
        }

        /* ══ INNER ══ */
        .nl-inner {
          max-width: 1080px;
          margin: 0 auto;
          padding: 64px clamp(20px, 5vw, 56px);
        }

        /* ══ EDITORIAL SECTION HEADER ══ */
        .nl-section-header {
          border-left: 5px solid var(--color-navy);
          padding-left: 20px;
          margin-bottom: 28px;
        }
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
          font-family: 'Anton', sans-serif;
          font-size: clamp(24px, 3.5vw, 40px);
          font-weight: 400;
          letter-spacing: 0.01em;
          text-transform: uppercase;
          line-height: 1.1;
          color: var(--color-navy);
          margin: 0;
        }

        /* ══ DIVIDER LABEL ══ */
        .nl-divider {
          font-family: var(--font-body);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--color-text-light);
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 0;
        }
        .nl-divider::after {
          content: '';
          flex: 1;
          height: 1px;
          background: var(--color-border);
        }

        /* ══ CURRENT ISSUE ══ */
        .nl-issue-block {
          border-top: 2px solid var(--color-navy);
          padding-top: 36px;
          margin-bottom: 56px;
        }

        /* Anton issue title */
        .nl-issue-title {
          font-family: 'Anton', sans-serif;
          font-size: clamp(20px, 2.8vw, 32px);
          font-weight: 400;
          letter-spacing: 0.02em;
          text-transform: uppercase;
          color: var(--color-navy);
          margin: 0 0 8px;
        }
        .nl-issue-subtitle {
          font-family: var(--font-body);
          font-size: clamp(14px, 1.4vw, 16px);
          color: var(--color-primary);
          font-weight: 600;
          margin: 0 0 16px;
          line-height: 1.5;
        }
        .nl-issue-meta {
          display: flex;
          gap: 24px;
          flex-wrap: wrap;
          margin-bottom: 28px;
        }
        .nl-meta-item {
          font-family: var(--font-body);
          font-size: 13px;
          color: var(--color-text-light);
          display: flex;
          align-items: center;
          gap: 6px;
        }

        /* ══ ACTION BUTTONS ══ */
        .nl-actions {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          margin-bottom: 36px;
        }
        .nl-btn-primary {
          background: var(--color-primary);
          color: #ffffff;
          border: none;
          border-radius: var(--btn-radius);
          padding: 12px 28px;
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
        .nl-btn-primary:hover { background: var(--color-primary-dark); transform: translateY(-1px); }
        .nl-btn-primary.active { background: var(--color-primary-dark); }

        .nl-btn-outline {
          background: var(--color-bg);
          color: var(--color-primary);
          border: 1.5px solid var(--color-primary);
          border-radius: var(--btn-radius);
          padding: 12px 28px;
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
        .nl-btn-outline:hover { background: var(--color-primary-light); transform: translateY(-1px); }

        /* ══ PDF VIEWER ══ */
        .nl-pdf-wrap {
          background: var(--color-surface);
          border: 1px solid var(--color-border);
          border-radius: var(--card-radius);
          overflow: hidden;
          margin-bottom: 48px;
          box-shadow: var(--shadow-md);
        }
        .nl-pdf-wrap iframe {
          width: 100%;
          height: 80vh;
          min-height: 600px;
          border: none;
          display: block;
        }

        /* ══ ARCHIVE ══ */
        .nl-archive-block {
          border-top: 1px solid var(--color-border);
          padding-top: 36px;
        }

        .nl-archive-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
          border-top: 2px solid var(--color-navy);
          padding-top: 32px;
        }
        .nl-archive-card {
          background: var(--color-surface);
          border: 1px solid var(--color-border);
          border-radius: var(--card-radius);
          padding: 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
          transition: var(--transition);
        }
        .nl-archive-card:not(.disabled):hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-md);
          border-color: var(--color-primary);
        }
        .nl-archive-card.disabled { opacity: 0.6; cursor: default; }

        /* Anton archive card title */
        .nl-archive-title {
          font-family: 'Anton', sans-serif;
          font-size: clamp(13px, 1.4vw, 16px);
          font-weight: 400;
          letter-spacing: 0.03em;
          text-transform: uppercase;
          color: var(--color-navy);
          margin: 0 0 5px;
        }
        .nl-archive-meta {
          font-family: var(--font-body);
          font-size: 12px;
          color: var(--color-text-light);
          margin: 0;
        }
        .nl-archive-badge {
          font-family: var(--font-body);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: var(--color-text-light);
          background: var(--color-surface-2);
          padding: 4px 10px;
          border-radius: 4px;
          flex-shrink: 0;
        }
        .nl-archive-icon {
          color: var(--color-primary);
          flex-shrink: 0;
          cursor: pointer;
          transition: var(--transition);
        }
        .nl-archive-icon:hover { color: var(--color-primary-dark); }

        /* ══ RESPONSIVE ══ */
        @media (max-width: 860px) {
          .nl-hero-grid { grid-template-columns: 1fr; min-height: unset; gap: 32px; }
          .nl-hero-divider { display: none; }
          .nl-hero-left { padding-right: 0; }
          .nl-hero-right { padding-left: 0; justify-content: flex-start; }
          .nl-archive-grid { grid-template-columns: 1fr; }
          .nl-pdf-wrap iframe { height: 55vh; min-height: 400px; }
        }
        @media (max-width: 560px) {
          .nl-actions { flex-direction: column; }
          .nl-btn-primary, .nl-btn-outline { justify-content: center; }
          .nl-hero-icon-box { padding: 28px 40px; }
        }
      `}</style>

      <Navbar />

      {/* ── Hero ── */}
      <div className="nl-hero">
        <img src={heroImage} alt="Newsletter" className="nl-hero-img" />
        <div className="nl-hero-overlay" />
        <div className="nl-hero-grid">
          <div className="nl-hero-left">
            <span className="nl-hero-kicker">Stay Informed</span>
            <h1 className="nl-hero-title">Newsletter</h1>
            <p className="nl-hero-sub">
              JoMabel Healthcare Foundation is a Texas-based U.S. nonprofit foundation
              developing a world-class 16,000+ sq. meter medical and training center
              in Ufuma, Anambra State, Nigeria.
            </p>
          </div>
          <div className="nl-hero-divider" />
          <div className="nl-hero-right">
            <div className="nl-hero-icon-box">
              <FileText size={72} color="var(--color-primary)" strokeWidth={1.2} />
            </div>
          </div>
        </div>
      </div>

      <div className="nl-inner">

        {/* ── Current Issue ── */}
        <div className="nl-section-header">
          <p className="nl-kicker">Latest Release</p>
          <h2 className="nl-headline">Current Issue</h2>
        </div>
        <p className="nl-divider">Volume 1, Issue 1 — April 2025</p>

        <div className="nl-issue-block">
          <h3 className="nl-issue-title">Inaugural Newsletter</h3>
          <p className="nl-issue-subtitle">
            Building Systems. Restoring Health. Empowering Communities.
          </p>
          <div className="nl-issue-meta">
            <span className="nl-meta-item">
              <FileText size={13} color="var(--color-text-light)" />
              Volume 1, Issue 1
            </span>
            <span className="nl-meta-item">
              <Eye size={13} color="var(--color-text-light)" />
              April 2025
            </span>
          </div>

          <div className="nl-actions">
            <button
              className={`nl-btn-primary${showPdf ? ' active' : ''}`}
              onClick={() => setShowPdf(v => !v)}
            >
              <Eye size={15} />
              {showPdf ? 'Close Viewer' : 'Read Online'}
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
                title="JoMabel Healthcare Foundation — Inaugural Newsletter"
              />
            </div>
          )}
        </div>

        {/* ── Archive ── */}
        <div className="nl-archive-block">
          <div className="nl-section-header" style={{ borderLeft: '5px solid var(--color-navy)' }}>
            <p className="nl-kicker">Archive</p>
            <h2 className="nl-headline">Past Issues</h2>
          </div>
          <p className="nl-divider">More editions coming as the foundation grows</p>

          <div className="nl-archive-grid">
            <div className="nl-archive-card disabled">
              <div>
                <h4 className="nl-archive-title">Spring 2026 Update</h4>
                <p className="nl-archive-meta">Coming Soon</p>
              </div>
              <span className="nl-archive-badge">Coming Soon</span>
            </div>
            <div className="nl-archive-card disabled">
              <div>
                <h4 className="nl-archive-title">Construction Progress Report</h4>
                <p className="nl-archive-meta">Coming Soon</p>
              </div>
              <span className="nl-archive-badge">Coming Soon</span>
            </div>
          </div>
        </div>

      </div>

      <Footer />
    </div>
  );
};

export default Newsletter;