import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import logo from '../assests/images/logo.jpeg';
import { Eye, Target, Shield, Heart, Users, Lightbulb, HandHeart } from 'lucide-react';
import heroImage from '../assests/images/outreach1.jpeg';
import WhyJHF from '../components/sections/WhyJHF';

const coreValues = [
  // #10
  { icon: HandHeart, title: 'Dignity',               desc: 'Every human being deserves respectful and compassionate care.' },
  // #11
  { icon: Shield,    title: 'Equity',                desc: 'We prioritize communities with limited access to quality healthcare.' },
  // #12
  { icon: Heart,     title: 'Service',               desc: 'We serve with humility, excellence, and a commitment to healing and wellness.' },
  { icon: Target,    title: 'Sustainability',         desc: 'We build systems that last beyond individual projects.' },
  { icon: Shield,    title: 'Integrity',              desc: 'We steward resources with transparency and accountability.' },
  { icon: Users,     title: 'Community Empowerment', desc: 'We invest in local leadership, youth, and families.' },
  { icon: Lightbulb, title: 'Innovation',             desc: 'We embrace modern solutions to long-standing healthcare challenges.' },
];

const MissionVision = () => {
  return (
    <div className="mv-page">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');

        .mv-page {
          font-family: var(--font-body);
          background: var(--color-bg);
          width: 100%;
          overflow-x: hidden;
        }

        /* ─────────────────────────────────────────
           HERO
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

        /* Hero — mobile / tablet fix: stack instead of squeezing 3 columns */
        @media (max-width: 900px) {
          .mv-hero-grid {
            grid-template-columns: 1fr;
            gap: 32px;
            min-height: unset;
            text-align: left;
          }
          .mv-hero-divider { display: none; }
          .mv-hero-left  { padding-right: 0; }
          .mv-hero-right { padding-left: 0; justify-content: flex-start; }
        }
        @media (max-width: 480px) {
          .mv-hero { padding: 48px 20px; }
          .mv-logo-box { padding: 28px 36px; }
          .mv-logo-box img { height: 80px; }
        }

        /* ─────────────────────────────────────────
           MISSION & VISION — side by side
        ───────────────────────────────────────── */
        .mv-mv-section {
          padding: 56px clamp(20px, 5vw, 56px);
        }
        .mv-mv-grid {
          max-width: 1000px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          align-items: stretch;
        }
        .mv-mv-card {
          background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-navy-mid) 100%);
          border-radius: var(--card-radius);
          padding: 48px 36px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          justify-content: center;
          color: #ffffff;
        }
        .mv-mv-card-icon {
          margin-bottom: 18px;
        }
        .mv-mv-card-title {
          font-family: 'Anton', sans-serif;
          font-weight: 400;
          font-size: clamp(28px, 3.6vw, 38px);
          letter-spacing: 0.01em;
          margin: 0 0 16px;
        }
        .mv-mv-card-text {
          font-family: var(--font-body);
          font-size: 14px;
          line-height: 1.7;
          margin: 0;
          opacity: 0.95;
        }

        @media (max-width: 760px) {
          .mv-mv-grid { grid-template-columns: 1fr; }
        }

        /* ─────────────────────────────────────────
           CORE VALUES — plain background, icon + text list
        ───────────────────────────────────────── */
        .mv-values-section {
          padding: 72px clamp(24px, 5vw, 72px);
          background: var(--color-bg);
        }
        .mv-values-header {
          max-width: 700px;
          margin: 0 auto 48px;
          text-align: center;
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
          font-weight: 400;
          font-size: clamp(28px, 3.6vw, 38px);
          letter-spacing: 0.01em;
          color: var(--color-navy);
          margin: 0 0 16px;
        }
        .mv-values-sub {
          font-family: var(--font-body);
          font-size: clamp(14px, 1.2vw, 16px);
          color: var(--color-text-muted);
          line-height: 1.7;
          margin: 0;
        }

        .mv-values-list {
          max-width: 780px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
        }

        .mv-value-row {
          display: flex;
          align-items: flex-start;
          gap: 18px;
          padding: 20px 0;
          border-bottom: 1px solid var(--color-border);
        }
        .mv-value-row:last-child {
          border-bottom: none;
        }

        .mv-value-icon {
          width: 44px;
          height: 44px;
          border-radius: 10px;
          background: var(--color-primary-light);
          color: var(--color-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .mv-value-text {
          font-family: var(--font-body);
          font-size: 15px;
          line-height: 1.65;
          color: var(--color-text-muted);
          margin: 0;
          padding-top: 8px;
        }
        .mv-value-text strong {
          color: var(--color-navy);
          font-weight: 700;
        }

        @media (max-width: 560px) {
          .mv-value-row { gap: 14px; }
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
            {/* #07 */}
            <p className="mv-hero-desc">
              JoMabel Healthcare Foundation is a nonprofit entity with a goal of
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

      {/* ── Mission & Vision — side by side ── */}
      <div className="mv-mv-section">
        <div className="mv-mv-grid">
          <div className="mv-mv-card">
            <Eye size={36} className="mv-mv-card-icon" />
            <h2 className="mv-mv-card-title">Our Vision</h2>
            <p className="mv-mv-card-text">
              To create a sustainable model of healthcare excellence in
              underserved communities in Nigeria that can be replicated across
              rural communities in Sub-Saharan Africa and beyond.
            </p>
          </div>

          <div className="mv-mv-card">
            <Target size={36} className="mv-mv-card-icon" />
            <h2 className="mv-mv-card-title">Our Mission</h2>
            <p className="mv-mv-card-text">
              To provide compassionate, accessible, and high-quality
              healthcare, strengthen community health systems, and build local
              healthcare capacity in underserved communities across
              Sub-Saharan Africa and beyond.
            </p>
          </div>
        </div>
      </div>

      {/* ── Why JHF — inserted directly under Mission & Vision (#08 lives in this component) ── */}
      <WhyJHF />

      {/* ── Core Values — plain background, icon + text list ── */}
      <div className="mv-values-section">
        <div className="mv-values-header">
          <p className="mv-values-kicker">What Guides Us</p>
          <h2 className="mv-values-headline">Our Core Values</h2>
          {/* #09 */}
          <p className="mv-values-sub">
            Seven principles shape every decision, every program, and every
            relationship we build in the communities we serve.
          </p>
        </div>

        <div className="mv-values-list">
          {coreValues.map((value, i) => {
            const Icon = value.icon;
            return (
              <div className="mv-value-row" key={i}>
                <div className="mv-value-icon"><Icon size={20} strokeWidth={1.75} /></div>
                <p className="mv-value-text">
                  <strong>{value.title}</strong> — {value.desc}
                </p>
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