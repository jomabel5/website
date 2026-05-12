import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import founderPhoto from '../assests/images/founderphoto.jpeg';

const FounderStory = () => {
  const navigate = useNavigate();

  return (
    <div className="fsp-page">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');

        .fsp-page {
          font-family: var(--font-body);
          background: var(--color-bg);
          color: var(--color-text);
        }

        /* ══════════════════════════════════════
           HERO — original style, white overlay left,
           founder photo bleeds through on right
        ══════════════════════════════════════ */
        .fsp-hero {
          position: relative;
          padding: clamp(48px, 7vw, 80px) clamp(20px, 5vw, 64px);
          overflow: hidden;
        }

        .fsp-hero-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
        }

        .fsp-hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to right,
            rgba(255,255,255,0.97) 40%,
            rgba(255,255,255,0.75) 65%,
            rgba(255,255,255,0.10) 100%
          );
        }

        .fsp-hero-grid {
          position: relative;
          z-index: 2;
          max-width: 1080px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1px 1fr;
          align-items: center;
          min-height: 280px;
        }

        .fsp-hero-left {
          padding-right: 64px;
        }

        .fsp-hero-kicker {
          font-family: var(--font-body);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: var(--color-primary);
          margin: 0 0 14px;
          display: block;
        }

        .fsp-hero-title {
          font-family: 'Anton', sans-serif;
          font-size: clamp(32px, 5.5vw, 64px);
          font-weight: 400;
          letter-spacing: 0.01em;
          text-transform: uppercase;
          line-height: 1.0;
          color: var(--color-navy);
          margin: 0 0 20px;
        }

        .fsp-hero-sub {
          font-family: var(--font-body);
          font-size: clamp(14px, 1.3vw, 15px);
          color: var(--color-text-muted);
          line-height: 1.8;
          max-width: 400px;
          margin: 0;
        }

        .fsp-hero-divider-line {
          background: var(--color-border);
          width: 1px;
          align-self: stretch;
        }

        .fsp-hero-right {
          padding-left: 64px;
          display: flex;
          justify-content: center;
        }

        .fsp-hero-photo-box {
          border: 1px solid var(--color-border);
          border-radius: 16px;
          padding: 20px 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255,255,255,0.90);
          box-shadow: var(--shadow-md);
        }

        .fsp-hero-photo {
          width: 180px;
          height: 180px;
          border-radius: 50%;
          object-fit: cover;
          object-position: center top;
        }

        /* ══════════════════════════════════════
           IDENTITY STRIP — full-width navy band
           with name, title, and badge pills
        ══════════════════════════════════════ */
        .fsp-identity {
          background: var(--color-navy);
          padding: 32px clamp(20px, 5vw, 80px);
          display: flex;
          align-items: center;
          gap: 40px;
          flex-wrap: wrap;
        }

        .fsp-identity-photo {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          object-fit: cover;
          object-position: center top;
          border: 3px solid rgba(255,255,255,0.15);
          flex-shrink: 0;
        }

        .fsp-identity-text {
          flex: 1;
          min-width: 200px;
        }

        .fsp-identity-name {
          font-family: 'Anton', sans-serif;
          font-size: clamp(16px, 2vw, 22px);
          font-weight: 400;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          color: #ffffff;
          margin: 0 0 4px;
        }

        .fsp-identity-title {
          font-family: var(--font-body);
          font-size: 13px;
          color: rgba(255,255,255,0.55);
          margin: 0;
          letter-spacing: 0.3px;
        }

        /* Colored badge pills */
        .fsp-badges {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }

        .fsp-badge {
          font-family: var(--font-body);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.8px;
          text-transform: uppercase;
          padding: 6px 14px;
          border-radius: 4px;
        }

        .fsp-badge:nth-child(1) {
          background: var(--color-primary-light);
          color: var(--color-primary);
        }
        .fsp-badge:nth-child(2) {
          background: var(--color-green-light);
          color: var(--color-green);
        }
        .fsp-badge:nth-child(3) {
          background: var(--color-orange-light);
          color: var(--color-orange);
        }

        /* ══════════════════════════════════════
           MAIN CONTENT — two-col editorial layout
        ══════════════════════════════════════ */
        .fsp-body {
          padding: 64px clamp(20px, 5vw, 80px);
          max-width: 1080px;
          margin: 0 auto;
        }

        /* Editorial section header */
        .fsp-section-header {
          border-left: 5px solid var(--color-navy);
          padding-left: 20px;
          margin-bottom: 28px;
        }

        .fsp-section-kicker {
          font-family: var(--font-body);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: var(--color-primary);
          margin: 0 0 10px;
        }

        .fsp-section-headline {
          font-family: 'Anton', sans-serif;
          font-size: clamp(24px, 3.5vw, 40px);
          font-weight: 400;
          letter-spacing: 0.01em;
          text-transform: uppercase;
          line-height: 1.1;
          color: var(--color-navy);
          margin: 0;
        }

        /* Divider label */
        .fsp-divider {
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

        .fsp-divider::after {
          content: '';
          flex: 1;
          height: 1px;
          background: var(--color-border);
        }

        /* Content area below divider */
        .fsp-content {
          border-top: 2px solid var(--color-navy);
          padding-top: 40px;
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .fsp-text {
          font-family: var(--font-body);
          font-size: clamp(15px, 1.4vw, 17px);
          color: var(--color-text-muted);
          line-height: 1.85;
          margin: 0;
          max-width: 780px;
        }

        /* ── Pullquote — full-width centered colored band ── */
        .fsp-quote-wrap {
          background: var(--color-primary);
          padding: 64px clamp(20px, 5vw, 80px);
          text-align: center;
        }

        .fsp-quote-text {
          font-family: 'Anton', sans-serif;
          font-size: clamp(20px, 2.8vw, 32px);
          font-weight: 400;
          letter-spacing: 0.01em;
          text-transform: uppercase;
          line-height: 1.3;
          color: #ffffff;
          margin: 0 auto 16px;
          max-width: 780px;
        }

        .fsp-quote-author {
          font-family: var(--font-body);
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: rgba(255,255,255,0.65);
          margin: 0;
        }

        @media (max-width: 860px) {
          .fsp-hero-grid {
            grid-template-columns: 1fr;
            min-height: unset;
            gap: 32px;
          }
          .fsp-hero-divider-line { display: none; }
          .fsp-hero-left { padding-right: 0; }
          .fsp-hero-right { padding-left: 0; justify-content: flex-start; }
          .fsp-identity { gap: 24px; }
        }

        @media (max-width: 560px) {
          .fsp-hero-photo { width: 120px; height: 120px; }
          .fsp-badges { gap: 8px; }
        }
      `}</style>

      <Navbar />

      {/* ── Hero ── */}
      <div className="fsp-hero">
        <img src={founderPhoto} alt="Clara Ada Ogbaa — Founder" className="fsp-hero-img" />
        <div className="fsp-hero-overlay" />
        <div className="fsp-hero-grid">
          <div className="fsp-hero-left">
            <span className="fsp-hero-kicker">Our Founder</span>
            <h1 className="fsp-hero-title">Founder's<br />Story</h1>
            <p className="fsp-hero-sub">
              JoMabel Healthcare Foundation is a Texas-based U.S. nonprofit developing a
              world-class 16,000+ sq. meter medical and training center in Ufuma,
              Anambra State, Nigeria.
            </p>
          </div>
          <div className="fsp-hero-divider-line" />
          <div className="fsp-hero-right">
            <div className="fsp-hero-photo-box">
              <img src={founderPhoto} alt="Clara Ada Ogbaa" className="fsp-hero-photo" />
            </div>
          </div>
        </div>
      </div>

      {/* ── Identity strip ── */}
      <div className="fsp-identity">
        <img src={founderPhoto} alt="Clara Ada Ogbaa" className="fsp-identity-photo" />
        <div className="fsp-identity-text">
          <p className="fsp-identity-name">Clara Ada Ogbaa, Ed.D.</p>
          <p className="fsp-identity-title">Founder &amp; Executive Director · JoMabel Healthcare Foundation</p>
        </div>
        <div className="fsp-badges">
          <span className="fsp-badge">Breast Cancer Survivor</span>
          <span className="fsp-badge">Endometrial Cancer Survivor</span>
          <span className="fsp-badge">Kidney Transplant Recipient</span>
        </div>
      </div>

      {/* ── Main content ── */}
      <div className="fsp-body">

        <div className="fsp-section-header">
          <p className="fsp-section-kicker">Founder's Story</p>
          <h2 className="fsp-section-headline">A Mission Born<br />from Survival</h2>
        </div>

        <p className="fsp-divider">Her journey — faith, sacrifice, and purpose</p>

        <div className="fsp-content">
          <p className="fsp-text">
            Clara Ada Ogbaa is a Nigerian-American educator and humanitarian. Having experienced
            firsthand the life-saving power of quality healthcare, she made a profound decision
            to use her modest retirement savings to bring that same standard of care to her
            hometown of Ufuma, Anambra State, Nigeria.
          </p>

          <p className="fsp-text">
            A two-time cancer survivor and kidney transplant recipient, Clara knows what it means
            to be saved by medicine — and she refused to let geography or poverty be the reason
            others could not receive that same chance at life.
          </p>
        </div>

      </div>

      {/* ── Full-width pullquote ── */}
      <div className="fsp-quote-wrap">
        <p className="fsp-quote-text">
          "Healthcare should never be a privilege reserved for a few.
          It is a human right — and it is the legacy we are called to leave."
        </p>
        <p className="fsp-quote-author">— Clara Ada Ogbaa, Ed.D.</p>
      </div>

      {/* ── Continued story ── */}
      <div className="fsp-body" style={{ paddingTop: '48px' }}>
        <div className="fsp-content" style={{ borderTop: '1px solid var(--color-border)' }}>
          <p className="fsp-text">
            What began as one woman's act of personal sacrifice has grown into JoMabel Healthcare
            Foundation — a nonprofit now building a 16,000+ sq. meter medical and training center
            that will serve thousands of families for generations to come.
          </p>
          <p className="fsp-text">
            Today, Clara's vision is becoming reality. She cares for the sick, trains local healthcare
            workers, and is transforming healthcare in rural southeastern Nigeria — saving lives and
            building a movement toward health equity. We carry forward her legacy and vision.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default FounderStory;