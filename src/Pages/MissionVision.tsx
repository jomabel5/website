import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import logo from '../assests/images/logo.jpeg';
import { Heart, Eye, Target, Shield, Users, Lightbulb, HandHeart } from 'lucide-react';
import heroImage from '../assests/images/outreach1.jpeg';

const coreValues = [
  { icon: HandHeart, title: 'Dignity',               desc: 'Every human being deserves respectful, compassionate care.' },
  { icon: Shield,    title: 'Equity',                desc: 'We prioritize communities historically excluded from quality healthcare.' },
  { icon: Heart,     title: 'Service',               desc: 'We serve with humility, excellence, and a commitment to healing.' },
  { icon: Target,    title: 'Sustainability',         desc: 'We build systems that last beyond individual projects.' },
  { icon: Shield,    title: 'Integrity',              desc: 'We steward resources with transparency and accountability.' },
  { icon: Users,     title: 'Community Empowerment', desc: 'We invest in local leadership, youth, and families.' },
  { icon: Lightbulb, title: 'Innovation',             desc: 'We embrace modern solutions to long-standing healthcare challenges.' },
];

const MissionVision = () => {
  return (
    <div className="mv-page">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Anton&family=Playfair+Display:wght@700;900&display=swap');

        .mv-page {
          font-family: var(--font-body);
          background: var(--color-bg);
          width: 100%;
          overflow-x: hidden;
        }

        /* ─────────────────────────────────────────
           HERO — kept as loved, lightly polished
        ───────────────────────────────────────── */
        .mv-hero {
          position: relative;
          padding: clamp(56px, 8vw, 96px) clamp(24px, 5vw, 72px);
          overflow: hidden;
          min-height: 340px;
          display: flex;
          align-items: center;
        }
        .mv-hero-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 40%;
        }
        .mv-hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to right, rgba(255,255,255,0.97) 40%, rgba(255,255,255,0.70) 100%);
        }
        .mv-hero-grid {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 1080px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1px 1fr;
          align-items: center;
          min-height: 280px;
          gap: 0;
        }
        .mv-hero-left { padding-right: 64px; }
        .mv-hero-kicker {
          font-family: var(--font-body);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: var(--color-primary);
          margin: 0 0 14px;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .mv-hero-kicker::before {
          content: '';
          display: inline-block;
          width: 28px;
          height: 2px;
          background: var(--color-primary);
          flex-shrink: 0;
        }
        .mv-hero-h1 {
          font-family: 'Anton', sans-serif;
          font-size: clamp(38px, 6vw, 68px);
          font-weight: 400;
          color: var(--color-navy);
          line-height: 1.0;
          letter-spacing: 0.01em;
          text-transform: uppercase;
          margin: 0 0 20px;
        }
        .mv-hero-desc {
          font-family: var(--font-body);
          font-size: clamp(13px, 1.3vw, 15px);
          color: var(--color-text-muted);
          line-height: 1.8;
          max-width: 380px;
          margin: 0;
        }
        .mv-hero-divider {
          background: var(--color-border);
          width: 1px;
          align-self: stretch;
        }
        .mv-hero-right {
          padding-left: 64px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .mv-logo-box {
          border: 1px solid var(--color-border);
          border-radius: var(--card-radius);
          padding: 40px 52px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255,255,255,0.92);
          box-shadow: var(--shadow-md);
        }
        .mv-logo-box img {
          height: 120px;
          width: auto;
        }

        /* ─────────────────────────────────────────
           MISSION & VISION — full bleed two-col
        ───────────────────────────────────────── */
        .mv-mv-section {
          display: grid;
          grid-template-columns: 1fr 1fr;
          border-top: 2px solid var(--color-navy);
          width: 100%;
        }
        .mv-mv-card {
          padding: 64px clamp(24px, 5vw, 72px);
          border-right: 1px solid var(--color-border);
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .mv-mv-card:last-child { border-right: none; }
        .mv-mv-card:nth-child(2) { background: var(--color-surface); }

        .mv-mv-icon {
          width: 52px;
          height: 52px;
          border-radius: 12px;
          background: var(--color-primary-light);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-primary);
          flex-shrink: 0;
        }
        .mv-mv-label {
          font-family: var(--font-body);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--color-primary);
          margin: 0;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .mv-mv-label::before {
          content: '';
          display: inline-block;
          width: 18px;
          height: 2px;
          background: var(--color-primary);
          flex-shrink: 0;
        }
        .mv-mv-title {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(24px, 2.8vw, 34px);
          font-weight: 700;
          color: var(--color-navy);
          line-height: 1.15;
          margin: 0;
        }
        .mv-mv-text {
          font-family: var(--font-body);
          font-size: clamp(14px, 1.3vw, 16px);
          color: var(--color-text-muted);
          line-height: 1.8;
          margin: 0;
          max-width: 480px;
        }

        /* ─────────────────────────────────────────
           CORE VALUES
        ───────────────────────────────────────── */
        .mv-values-section {
          padding: 80px clamp(24px, 5vw, 72px);
          background: var(--color-bg);
        }
        .mv-values-header {
          max-width: 1200px;
          margin: 0 auto 56px;
          border-left: 4px solid var(--color-navy);
          padding-left: 20px;
        }
        .mv-values-kicker {
          font-family: var(--font-body);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: var(--color-primary);
          margin: 0 0 10px;
        }
        .mv-values-headline {
          font-family: 'Anton', sans-serif;
          font-size: clamp(26px, 3.5vw, 44px);
          font-weight: 400;
          letter-spacing: 0.01em;
          text-transform: uppercase;
          line-height: 1.1;
          color: var(--color-navy);
          margin: 0 0 12px;
        }
        .mv-values-sub {
          font-family: var(--font-body);
          font-size: clamp(13px, 1.2vw, 15px);
          color: var(--color-text-muted);
          line-height: 1.75;
          max-width: 560px;
          margin: 0;
        }

        /* values grid — full bleed flush */
        .mv-values-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          width: 100%;
          border-top: 2px solid var(--color-navy);
          max-width: 1200px;
          margin: 0 auto;
        }
        /* last row — 3 cards, center them */
        .mv-value-card {
          padding: 36px 28px 40px;
          border-right: 1px solid var(--color-border);
          border-bottom: 1px solid var(--color-border);
          display: flex;
          flex-direction: column;
          gap: 14px;
          transition: background 0.25s ease;
        }
        .mv-value-card:hover { background: var(--color-surface); }
        /* remove right border on every 4th */
        .mv-value-card:nth-child(4n) { border-right: none; }
        /* last row bottom borders off */
        .mv-value-card:nth-last-child(-n+3) { border-bottom: none; }

        .mv-value-icon {
          width: 44px;
          height: 44px;
          border-radius: 10px;
          background: var(--color-primary-light);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-primary);
          flex-shrink: 0;
        }
        .mv-value-title {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(15px, 1.4vw, 17px);
          font-weight: 700;
          color: var(--color-navy);
          margin: 0;
          line-height: 1.2;
        }
        .mv-value-desc {
          font-family: var(--font-body);
          font-size: 13px;
          color: var(--color-text-muted);
          line-height: 1.65;
          margin: 0;
        }

        /* ─────────────────────────────────────────
           RESPONSIVE
        ───────────────────────────────────────── */
        @media (max-width: 900px) {
          .mv-hero-grid         { grid-template-columns: 1fr; gap: 32px; min-height: unset; }
          .mv-hero-divider      { display: none; }
          .mv-hero-left         { padding-right: 0; }
          .mv-hero-right        { padding-left: 0; justify-content: flex-start; }
          .mv-mv-section        { grid-template-columns: 1fr; }
          .mv-mv-card           { border-right: none; border-bottom: 1px solid var(--color-border); }
          .mv-mv-card:last-child { border-bottom: none; }
          .mv-values-grid       { grid-template-columns: repeat(2, 1fr); }
          .mv-value-card:nth-child(4n)       { border-right: 1px solid var(--color-border); }
          .mv-value-card:nth-child(2n)       { border-right: none; }
          .mv-value-card:nth-last-child(-n+3) { border-bottom: 1px solid var(--color-border); }
          .mv-value-card:nth-last-child(-n+2) { border-bottom: none; }
        }
        @media (max-width: 600px) {
          .mv-values-grid       { grid-template-columns: 1fr; }
          .mv-value-card        { border-right: none !important; }
          .mv-value-card:not(:last-child) { border-bottom: 1px solid var(--color-border) !important; }
          .mv-logo-box          { padding: 28px 36px; }
          .mv-logo-box img      { height: 80px; }
        }
      `}</style>

      <Navbar />

      {/* ── Hero ── */}
      <div className="mv-hero">
        <img src={heroImage} alt="Mission & Vision" className="mv-hero-img" />
        <div className="mv-hero-overlay" />
        <div className="mv-hero-grid">
          <div className="mv-hero-left">
            <p className="mv-hero-kicker">Our Purpose</p>
            <h1 className="mv-hero-h1">Mission<br />&amp; Vision</h1>
            <p className="mv-hero-desc">
              JoMabel Healthcare Foundation is a Texas-based U.S. nonprofit
              developing a world-class 16,000+ sq. meter medical and training
              center in Ufuma, Anambra State, Nigeria.
            </p>
          </div>
          <div className="mv-hero-divider" />
          <div className="mv-hero-right">
            <div className="mv-logo-box">
              <img src={logo} alt="JoMabel Healthcare Foundation" />
            </div>
          </div>
        </div>
      </div>

      {/* ── Mission & Vision — full bleed ── */}
      <div className="mv-mv-section">
        <div className="mv-mv-card">
          <div className="mv-mv-icon"><Target size={26} /></div>
          <p className="mv-mv-label">Our Mission</p>
          <h2 className="mv-mv-title">Compassionate,<br />Accessible Care</h2>
          <p className="mv-mv-text">
            To provide compassionate, accessible, and quality care and capacity
            building to underserved communities — ensuring no family is left behind
            because of where they live or what they earn.
          </p>
        </div>
        <div className="mv-mv-card">
          <div className="mv-mv-icon"><Eye size={26} /></div>
          <p className="mv-mv-label">Our Vision</p>
          <h2 className="mv-mv-title">Healthcare for<br />Every Person</h2>
          <p className="mv-mv-text">
            A world where every person — regardless of location, income, or social
            status — has access to dignified, life-saving healthcare, supported by
            empowered communities, trained local professionals, and sustainable
            health infrastructure.
          </p>
        </div>
      </div>

      {/* ── Core Values ── */}
      <div className="mv-values-section">
        <div className="mv-values-header">
          <p className="mv-values-kicker">What Guides Us</p>
          <h2 className="mv-values-headline">Our Core Values</h2>
          <p className="mv-values-sub">
            Seven principles that shape every decision, every program, and every
            relationship we build in the communities we serve.
          </p>
        </div>

        <div className="mv-values-grid">
          {coreValues.map((value, i) => {
            const Icon = value.icon;
            return (
              <div className="mv-value-card" key={i}>
                <div className="mv-value-icon"><Icon size={22} /></div>
                <h3 className="mv-value-title">{value.title}</h3>
                <p className="mv-value-desc">{value.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MissionVision;