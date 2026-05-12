import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import logo  from '../assests/images/logo.jpeg';
import logo2 from '../assests/images/logo2.png';
import logo3 from '../assests/images/logo3.png';
import heroImage    from '../assests/images/outreach1.jpeg';
import historyImage from '../assests/images/outreach3.jpeg';

const journey = [
  {
    num: '01',
    title: 'Rooted in Compassion & Family Legacy',
    text: "Inspired by the healing spirit and community service of Dr. Clara Ada Ogbaa's parents, JoMabel Healthcare Foundation began with a desire to serve people who lacked access to basic healthcare.",
  },
  {
    num: '02',
    title: 'Grassroots Medical Missions & Outreach',
    text: 'The Foundation started with small-scale medical missions, preventive health education, community outreach, and support for underserved families in rural communities.',
  },
  {
    num: '03',
    title: 'Expansion into Community Health Programs',
    text: 'JoMabel grew to include maternal and child health initiatives, youth empowerment, and community-based wellness programs — raising awareness about chronic diseases such as diabetes, malaria, hypertension, stroke, cancer, and kidney disease.',
  },
  {
    num: '04',
    title: 'Development of JoMabel Medical Center',
    text: "The Foundation's efforts evolved into the development of JoMabel Medical Center — a growing hub for primary care, diagnostics, maternal health, and workforce training in Ufuma, Anambra State.",
  },
  {
    num: '05',
    title: 'Building a Campus for Generational Impact',
    text: 'Today, JoMabel Healthcare Foundation is advancing a 16,000+ sq. meter medical and training campus combining compassionate healthcare, workforce development, youth training, and sustainable community transformation.',
  },
];

const centers = [
  {
    logo: logo2,
    title: 'JoMabel Medical Center',
    size: '6,000 sqm',
    progress: 70,
    desc: 'Primary care, diagnostics, maternal health & outpatient services.',
  },
  {
    logo: logo3,
    title: 'Skill Acquisition & Training Center',
    size: '10,000 sqm',
    progress: 30,
    desc: 'Youth training, healthcare leadership & workforce development.',
  },
];

const OurStory = () => {
  return (
    <div className="os-page">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Anton&family=Playfair+Display:wght@700;900&display=swap');

        .os-page {
          font-family: var(--font-body);
          background: var(--color-bg);
          width: 100%;
          overflow-x: hidden;
        }

        /* ─────────────────────────────────────────
           HERO — same beloved style, polished
        ───────────────────────────────────────── */
        .os-hero {
          position: relative;
          padding: clamp(56px, 8vw, 96px) clamp(24px, 5vw, 72px);
          overflow: hidden;
          min-height: 340px;
          display: flex;
          align-items: center;
        }
        .os-hero-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 40%;
        }
        .os-hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to right, rgba(255,255,255,0.97) 40%, rgba(255,255,255,0.70) 100%);
        }
        .os-hero-grid {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 1080px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1px 1fr;
          align-items: center;
          min-height: 280px;
        }
        .os-hero-left  { padding-right: 64px; }
        .os-hero-kicker {
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
        .os-hero-kicker::before {
          content: '';
          display: inline-block;
          width: 28px;
          height: 2px;
          background: var(--color-primary);
          flex-shrink: 0;
        }
        .os-hero-h1 {
          font-family: 'Anton', sans-serif;
          font-size: clamp(38px, 6vw, 68px);
          font-weight: 400;
          color: var(--color-navy);
          line-height: 1.0;
          letter-spacing: 0.01em;
          text-transform: uppercase;
          margin: 0 0 20px;
        }
        .os-hero-desc {
          font-family: var(--font-body);
          font-size: clamp(13px, 1.3vw, 15px);
          color: var(--color-text-muted);
          line-height: 1.8;
          max-width: 380px;
          margin: 0;
        }
        .os-hero-divider {
          background: var(--color-border);
          width: 1px;
          align-self: stretch;
        }
        .os-hero-right {
          padding-left: 64px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .os-logo-box {
          border: 1px solid var(--color-border);
          border-radius: var(--card-radius);
          padding: 40px 52px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255,255,255,0.92);
          box-shadow: var(--shadow-md);
        }
        .os-logo-box img { height: 120px; width: auto; }

        /* ─────────────────────────────────────────
           HISTORY — image left, text right
        ───────────────────────────────────────── */
        .os-history {
          display: grid;
          grid-template-columns: 1fr 1fr;
          border-top: 2px solid var(--color-navy);
          width: 100%;
          min-height: 520px;
        }
        .os-history-img-wrap {
          overflow: hidden;
          position: relative;
        }
        .os-history-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
          min-height: 420px;
        }
        .os-history-content {
          padding: 64px clamp(24px, 5vw, 64px);
          background: var(--color-bg);
          border-left: 1px solid var(--color-border);
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .os-history-kicker {
          font-family: var(--font-body);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: var(--color-primary);
          margin: 0 0 12px;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .os-history-kicker::before {
          content: '';
          display: inline-block;
          width: 18px;
          height: 2px;
          background: var(--color-primary);
          flex-shrink: 0;
        }
        .os-history-title {
          font-family: 'Anton', sans-serif;
          font-size: clamp(24px, 3vw, 38px);
          font-weight: 400;
          letter-spacing: 0.01em;
          text-transform: uppercase;
          line-height: 1.1;
          color: var(--color-navy);
          margin: 0 0 20px;
        }
        .os-history-p {
          font-family: var(--font-body);
          font-size: clamp(13px, 1.2vw, 15px);
          color: var(--color-text-muted);
          line-height: 1.8;
          margin: 0 0 14px;
          max-width: 520px;
        }
        .os-history-p:last-of-type { margin-bottom: 0; }

        /* ─────────────────────────────────────────
           JOURNEY TIMELINE — full bleed 5-col grid
        ───────────────────────────────────────── */
        .os-journey-header {
          padding: 72px clamp(24px, 5vw, 72px) 48px;
          background: var(--color-surface);
          border-top: 1px solid var(--color-border);
        }
        .os-journey-header-inner {
          max-width: 1200px;
          margin: 0 auto;
          border-left: 4px solid var(--color-navy);
          padding-left: 20px;
        }
        .os-journey-kicker {
          font-family: var(--font-body);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: var(--color-primary);
          margin: 0 0 10px;
        }
        .os-journey-headline {
          font-family: 'Anton', sans-serif;
          font-size: clamp(26px, 3.5vw, 44px);
          font-weight: 400;
          letter-spacing: 0.01em;
          text-transform: uppercase;
          line-height: 1.1;
          color: var(--color-navy);
          margin: 0 0 12px;
        }
        .os-journey-sub {
          font-family: var(--font-body);
          font-size: clamp(13px, 1.2vw, 15px);
          color: var(--color-text-muted);
          line-height: 1.75;
          max-width: 560px;
          margin: 0;
        }

        /* steps grid */
        .os-steps {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          width: 100%;
          border-top: 2px solid var(--color-navy);
          background: var(--color-surface);
        }
        .os-step {
          padding: 40px 28px 48px;
          border-right: 1px solid var(--color-border);
          display: flex;
          flex-direction: column;
          gap: 16px;
          transition: background 0.25s ease;
        }
        .os-step:last-child { border-right: none; }
        .os-step:hover { background: var(--color-bg); }

        .os-step-num {
          font-family: 'Anton', sans-serif;
          font-size: 48px;
          font-weight: 400;
          color: var(--color-border-dark);
          line-height: 1;
          letter-spacing: 0.02em;
        }
        .os-step-title {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(14px, 1.3vw, 16px);
          font-weight: 700;
          color: var(--color-navy);
          line-height: 1.3;
          margin: 0;
        }
        .os-step-text {
          font-family: var(--font-body);
          font-size: 13px;
          color: var(--color-text-muted);
          line-height: 1.65;
          margin: 0;
        }

        /* ─────────────────────────────────────────
           CENTERS — WHITE BACKGROUND + BIG LOGOS
        ───────────────────────────────────────── */
        .os-centers-header {
          padding: 72px clamp(24px, 5vw, 72px) 48px;
          background: var(--color-bg);
        }
        .os-centers-header-inner {
          max-width: 1200px;
          margin: 0 auto;
          border-left: 4px solid var(--color-primary);
          padding-left: 20px;
        }
        .os-centers-kicker {
          font-family: var(--font-body);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: var(--color-primary);
          margin: 0 0 10px;
        }
        .os-centers-headline {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(22px, 2.8vw, 34px);
          font-weight: 700;
          color: var(--color-navy);
          line-height: 1.2;
          margin: 0 0 10px;
        }
        .os-centers-sub {
          font-family: var(--font-body);
          font-size: 14px;
          color: var(--color-text-muted);
          line-height: 1.7;
          max-width: 520px;
          margin: 0;
        }

        .os-centers-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          border-top: 1px solid var(--color-border);
          width: 100%;
          background: var(--color-bg);
        }
        .os-center-card {
          padding: 52px clamp(24px, 5vw, 72px);
          border-right: 1px solid var(--color-border);
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .os-center-card:last-child { border-right: none; }

        /* BIG LOGO - 200px height as requested */
        .os-center-logo {
          height: 200px;
          width: auto;
          object-fit: contain;
          object-position: left;
        }
        .os-center-title {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(18px, 2vw, 22px);
          font-weight: 700;
          color: var(--color-navy);
          margin: 0;
          line-height: 1.2;
        }
        .os-center-desc {
          font-family: var(--font-body);
          font-size: 14px;
          color: var(--color-text-muted);
          line-height: 1.65;
          margin: 0;
        }
        .os-center-meta {
          display: flex;
          align-items: center;
          gap: 20px;
          flex-wrap: wrap;
          margin-top: 4px;
        }
        .os-center-size {
          font-family: 'Anton', sans-serif;
          font-size: 28px;
          font-weight: 400;
          color: var(--color-primary);
          letter-spacing: 0.02em;
          line-height: 1;
        }
        .os-center-size-label {
          font-family: var(--font-body);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: var(--color-text-light);
        }

        /* progress bar */
        .os-progress-wrap { flex: 1; min-width: 140px; }
        .os-progress-top {
          display: flex;
          justify-content: space-between;
          margin-bottom: 8px;
        }
        .os-progress-label {
          font-family: var(--font-body);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: var(--color-text-light);
        }
        .os-progress-pct {
          font-family: var(--font-body);
          font-size: 12px;
          font-weight: 700;
          color: var(--color-primary);
        }
        .os-progress-track {
          background: var(--color-border);
          border-radius: 100px;
          height: 6px;
          overflow: hidden;
        }
        .os-progress-fill {
          height: 100%;
          background: linear-gradient(90deg, var(--color-primary) 0%, var(--color-green) 100%);
          border-radius: 100px;
        }

        /* ─────────────────────────────────────────
           RESPONSIVE
        ───────────────────────────────────────── */
        @media (max-width: 1024px) {
          .os-steps { grid-template-columns: repeat(3, 1fr); }
          .os-step:nth-child(3) { border-right: none; }
          .os-step:nth-child(4),
          .os-step:nth-child(5) { border-top: 1px solid var(--color-border); }
          .os-step:nth-child(5) { border-right: none; }
        }
        @media (max-width: 900px) {
          .os-hero-grid      { grid-template-columns: 1fr; gap: 32px; min-height: unset; }
          .os-hero-divider   { display: none; }
          .os-hero-left      { padding-right: 0; }
          .os-hero-right     { padding-left: 0; justify-content: flex-start; }
          .os-history        { grid-template-columns: 1fr; }
          .os-history-img    { min-height: 300px; max-height: 360px; }
          .os-history-content { border-left: none; border-top: 1px solid var(--color-border); }
          .os-centers-grid   { grid-template-columns: 1fr; }
          .os-center-card    { border-right: none; border-bottom: 1px solid var(--color-border); }
          .os-center-card:last-child { border-bottom: none; }
          .os-center-logo    { height: 140px; }
        }
        @media (max-width: 640px) {
          .os-steps  { grid-template-columns: 1fr; }
          .os-step   { border-right: none; border-bottom: 1px solid var(--color-border); }
          .os-step:last-child { border-bottom: none; }
          .os-step:nth-child(3) { border-right: none; }
          .os-step:nth-child(4),
          .os-step:nth-child(5) { border-top: none; }
          .os-logo-box img   { height: 80px; }
          .os-logo-box       { padding: 28px 36px; }
          .os-center-logo    { height: 100px; }
        }
      `}</style>

      <Navbar />

      {/* ── Hero ── */}
      <div className="os-hero">
        <img src={heroImage} alt="Our Story" className="os-hero-img" />
        <div className="os-hero-overlay" />
        <div className="os-hero-grid">
          <div className="os-hero-left">
            <p className="os-hero-kicker">Our Journey</p>
            <h1 className="os-hero-h1">Our Story</h1>
            <p className="os-hero-desc">
              JoMabel Healthcare Foundation is a Texas-based U.S. nonprofit developing
              a world-class 16,000+ sq. meter medical and training center in Ufuma,
              Anambra State, Nigeria.
            </p>
          </div>
          <div className="os-hero-divider" />
          <div className="os-hero-right">
            <div className="os-logo-box">
              <img src={logo} alt="JoMabel Healthcare Foundation" />
            </div>
          </div>
        </div>
      </div>

      {/* ── History ── */}
      <div className="os-history">
        <div className="os-history-img-wrap">
          <img src={historyImage} alt="JoMabel team" className="os-history-img" />
        </div>
        <div className="os-history-content">
          <p className="os-history-kicker">Our History</p>
          <h2 className="os-history-title">How JoMabel<br />Healthcare Foundation Began</h2>
          <p className="os-history-p">
            JoMabel Healthcare Foundation was born from a deep personal calling to address
            the urgent healthcare needs of underserved communities in southeastern Nigeria.
            In rural places like Ufuma, Anambra State, families often live far from hospitals
            or clinics and struggle with poverty, inadequate facilities, and few trained
            healthcare workers.
          </p>
          <p className="os-history-p">
            The Foundation's inspiration springs from the legacy of Dr. Clara Ada Ogbaa's
            parents, whose lives exemplified compassion, local healing, and service to their
            community. As a Nigerian-American educator and healthcare advocate, Dr. Ogbaa
            believes that survival should not depend on geography or income.
          </p>
          <p className="os-history-p">
            Today, the Foundation is developing a 16,000+ square meter medical and training
            campus — a transformative investment designed to serve families, train local health
            workers, empower youth, and support long-term community development.
          </p>
        </div>
      </div>

      {/* ── Journey Timeline ── */}
      <div className="os-journey-header">
        <div className="os-journey-header-inner">
          <p className="os-journey-kicker">Our Journey</p>
          <h2 className="os-journey-headline">Five Chapters of Growth</h2>
          <p className="os-journey-sub">
            From a personal calling to a world-class campus — five defining steps
            that shaped JoMabel Healthcare Foundation into what it is today.
          </p>
        </div>
      </div>
      <div className="os-steps">
        {journey.map((step) => (
          <div className="os-step" key={step.num}>
            <div className="os-step-num">{step.num}</div>
            <h3 className="os-step-title">{step.title}</h3>
            <p className="os-step-text">{step.text}</p>
          </div>
        ))}
      </div>

      {/* ── Centers ── */}
      <div className="os-centers-header">
        <div className="os-centers-header-inner">
          <p className="os-centers-kicker">Our Centers</p>
          <h2 className="os-centers-headline">Two Facilities. One Integrated Vision.</h2>
          <p className="os-centers-sub">
            The JoMabel Medical Center and the Skill Acquisition & Training Center together
            form a world-class healthcare campus in Ufuma, Anambra State.
          </p>
        </div>
      </div>
      <div className="os-centers-grid">
        {centers.map((c) => (
          <div className="os-center-card" key={c.title}>
            <img src={c.logo} alt={c.title} className="os-center-logo" />
            <h3 className="os-center-title">{c.title}</h3>
            <p className="os-center-desc">{c.desc}</p>
            <div className="os-center-meta">
              <div>
                <div className="os-center-size">{c.size}</div>
                <div className="os-center-size-label">Total Area</div>
              </div>
              <div className="os-progress-wrap">
                <div className="os-progress-top">
                  <span className="os-progress-label">Progress</span>
                  <span className="os-progress-pct">{c.progress}%</span>
                </div>
                <div className="os-progress-track">
                  <div className="os-progress-fill" style={{ width: `${c.progress}%` }} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default OurStory;