import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import logo  from '../assests/images/logo.jpeg';
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
    text: 'JoMabel grew to include maternal and child health initiatives, youth empowerment, and community-based wellness programs, raising awareness about chronic diseases such as diabetes, malaria, hypertension, stroke, cancer, and kidney disease.',
  },
  {
    num: '04',
    title: 'Development of JoMabel Medical Center',
    text: "The Foundation's efforts evolved into the development of JoMabel Medical Center, a planned hub for primary care, diagnostics, maternal health, and workforce training in Ufuma, Anambra State, now under construction.",
  },
  {
    num: '05',
    title: 'Building a Campus for Generational Impact',
    text: 'Today, JoMabel Healthcare Foundation is advancing a 16,000+ sq. meter medical and training campus combining compassionate healthcare, workforce development, youth training, and sustainable community transformation.',
  },
];

const OurStory = () => {
  const navigate = useNavigate();

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
           HERO
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
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          align-items: center;
          min-height: 280px;
        }
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
          margin: 0;
        }
        .os-hero-right {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .os-logo-box img { height: 120px; width: auto; }

        /* ─────────────────────────────────────────
           HISTORY — image left, text right, open layout
        ───────────────────────────────────────── */
        .os-history {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(32px, 5vw, 72px);
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: clamp(56px, 8vw, 96px) clamp(24px, 5vw, 72px);
          align-items: center;
        }
        .os-history-img-wrap {
          overflow: hidden;
          border-radius: var(--card-radius);
        }
        .os-history-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
          min-height: 420px;
          border-radius: var(--card-radius);
        }
        .os-history-content {
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
        }
        .os-history-title {
          font-family: 'Anton', sans-serif;
          font-size: clamp(28px, 3.6vw, 38px);
          font-weight: 400;
          letter-spacing: 0.01em;
          text-transform: uppercase;
          line-height: 1.1;
          color: var(--color-navy);
          margin: 0 0 24px;
        }
        .os-history-p {
          font-family: var(--font-body);
          font-size: clamp(13px, 1.2vw, 15px);
          color: var(--color-text-muted);
          line-height: 1.85;
          margin: 0 0 18px;
          max-width: 540px;
        }
        .os-history-p:last-of-type { margin-bottom: 0; }

        /* ─────────────────────────────────────────
           JOURNEY TIMELINE — open 3-column grid, no dividers
        ───────────────────────────────────────── */
        .os-journey {
          background: var(--color-surface);
          padding: clamp(64px, 8vw, 96px) clamp(24px, 5vw, 72px);
        }
        .os-journey-inner {
          max-width: 1200px;
          margin: 0 auto;
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
          font-size: clamp(28px, 3.6vw, 38px);
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
          max-width: 620px;
          margin: 0 0 48px;
        }

        .os-steps {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          column-gap: 56px;
          row-gap: 48px;
        }
        .os-step {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .os-step-num {
          font-family: 'Anton', sans-serif;
          font-size: 30px;
          font-weight: 400;
          color: var(--color-primary);
          line-height: 1;
          letter-spacing: 0.02em;
        }
        .os-step-title {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(15px, 1.3vw, 17px);
          font-weight: 700;
          color: var(--color-navy);
          line-height: 1.3;
          margin: 0;
        }
        .os-step-text {
          font-family: var(--font-body);
          font-size: 13.5px;
          color: var(--color-text-muted);
          line-height: 1.7;
          margin: 0;
        }

        /* ─────────────────────────────────────────
           CENTERS — short summary + link (#55)
        ───────────────────────────────────────── */
        .os-centers {
          padding: clamp(64px, 8vw, 96px) clamp(24px, 5vw, 72px);
          background: var(--color-bg);
        }
        .os-centers-inner {
          max-width: 1200px;
          margin: 0 auto;
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
          font-family: 'Anton', sans-serif;
          font-size: clamp(28px, 3.6vw, 38px);
          font-weight: 400;
          letter-spacing: 0.01em;
          text-transform: uppercase;
          color: var(--color-navy);
          line-height: 1.1;
          margin: 0 0 10px;
        }
        .os-centers-sub {
          font-family: var(--font-body);
          font-size: 14px;
          color: var(--color-text-muted);
          line-height: 1.7;
          max-width: 560px;
          margin: 0 0 28px;
        }
        .os-centers-btn {
          background: var(--color-primary);
          color: var(--color-white);
          border: none;
          border-radius: var(--btn-radius);
          padding: 14px 32px;
          font-family: var(--font-body);
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 0.4px;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          transition: var(--transition);
        }
        .os-centers-btn:hover {
          background: var(--color-primary-dark);
          transform: translateY(-2px);
        }

        /* ─────────────────────────────────────────
           CLOSING — simple centered paragraph
        ───────────────────────────────────────── */
        .os-closing {
          padding: 0 clamp(24px, 5vw, 72px) clamp(64px, 8vw, 96px);
          background: var(--color-bg);
        }
        .os-closing-inner {
          max-width: 780px;
          margin: 0 auto;
          text-align: center;
        }
        .os-closing-p {
          font-family: var(--font-body);
          font-size: clamp(14px, 1.3vw, 16px);
          color: var(--color-text-muted);
          line-height: 1.85;
          margin: 0;
        }

        /* ─────────────────────────────────────────
           RESPONSIVE
        ───────────────────────────────────────── */
        @media (max-width: 900px) {
          .os-hero-grid      { grid-template-columns: 1fr; gap: 32px; min-height: unset; }
          .os-hero-right     { justify-content: flex-start; }
          .os-history        { grid-template-columns: 1fr; }
          .os-history-img    { min-height: 300px; max-height: 360px; }
          .os-steps          { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 640px) {
          .os-steps  { grid-template-columns: 1fr; }
          .os-logo-box img { height: 80px; }
        }
      `}</style>

      <Navbar />

      {/* ── Hero (#13: paragraph removed, heading kept) ── */}
      <div className="os-hero">
        <img src={heroImage} alt="Our Story" className="os-hero-img" />
        <div className="os-hero-overlay" />
        <div className="os-hero-grid">
          <div className="os-hero-left">
            <p className="os-hero-kicker">Our Journey</p>
            <h1 className="os-hero-h1">Our Story</h1>
          </div>
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
          <h2 className="os-history-title">How JoMabel Healthcare Foundation Began</h2>
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
            campus, a transformative investment designed to serve families, train local health
            workers, empower youth, and support long-term community development.
          </p>
        </div>
      </div>

      {/* ── Journey Timeline ── */}
      <div className="os-journey">
        <div className="os-journey-inner">
          <p className="os-journey-kicker">Our Journey</p>
          <h2 className="os-journey-headline">Five Chapters of Growth</h2>
          <p className="os-journey-sub">
            From a personal calling to a world-class campus, five defining steps
            that shaped JoMabel Healthcare Foundation into what it is today.
          </p>
          <div className="os-steps">
            {journey.map((step) => (
              <div className="os-step" key={step.num}>
                <div className="os-step-num">{step.num}</div>
                <h3 className="os-step-title">{step.title}</h3>
                <p className="os-step-text">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Centers (#55: short summary + link to /our-centers) ── */}
      <div className="os-centers">
        <div className="os-centers-inner">
          <p className="os-centers-kicker">Our Centers</p>
          <h2 className="os-centers-headline">Two Facilities. One Integrated System.</h2>
          <p className="os-centers-sub">
            Our Medical Center and Healthcare Training Center are under development in Ufuma.
          </p>
          <button className="os-centers-btn" onClick={() => navigate('/our-centers')}>
            Explore Our Centers →
          </button>
        </div>
      </div>

      {/* ── Closing ── */}
      <div className="os-closing">
        <div className="os-closing-inner">
          <p className="os-closing-p">
            JoMabel Healthcare Foundation is more than a construction project. It is a long-term
            investment in healthier families, stronger communities, and future generations. When
            completed, the JoMabel Medical Center and Healthcare Training Center will provide
            quality healthcare, train local healthcare professionals, and serve as a model for
            expanding healthcare access across underserved communities in Nigeria. We cannot
            build this vision alone. We invite individuals, families, churches, corporations,
            foundations, and community partners to become part of this legacy.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default OurStory;