import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import founderPhoto from '../assests/images/founderphoto.jpeg';

const FounderStory = () => {
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
           HERO — full-bleed founder photo, overlay,
           kicker/title left, circular photo right
        ══════════════════════════════════════ */
        .fsp-hero {
          position: relative;
          padding: clamp(48px, 7vw, 80px) clamp(20px, 5vw, 64px);
          background: var(--color-surface);
        }

        .fsp-hero-grid {
          position: relative;
          z-index: 2;
          max-width: 780px;
          margin: 0 auto;
          min-height: 220px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .fsp-hero-left {
          padding-right: 0;
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

        @media (max-width: 860px) {
          .fsp-hero-grid {
            min-height: unset;
          }
        }

        /* ══════════════════════════════════════
           INTRO — open two-column: photo + name left,
           kicker / headline / story text right
        ══════════════════════════════════════ */
        .fsp-intro {
          padding: clamp(56px, 8vw, 96px) clamp(20px, 5vw, 72px);
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 0.7fr 1.3fr;
          gap: clamp(32px, 5vw, 72px);
          align-items: center;
        }

        .fsp-intro-photo-col {
          max-width: 300px;
        }

        .fsp-intro-photo-wrap {
          border-radius: var(--card-radius);
          overflow: hidden;
        }

        .fsp-intro-photo {
          width: 100%;
          height: 100%;
          min-height: 300px;
          object-fit: cover;
          object-position: center top;
          display: block;
        }

        .fsp-intro-text {
          display: flex;
          flex-direction: column;
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

        .fsp-section-headline {
          font-family: 'Anton', sans-serif;
          font-size: clamp(28px, 3.6vw, 38px);
          font-weight: 400;
          letter-spacing: 0.01em;
          text-transform: uppercase;
          line-height: 1.1;
          color: var(--color-navy);
          margin: 0 0 18px;
        }

        .fsp-hero-sub {
          font-family: var(--font-body);
          font-size: clamp(14px, 1.3vw, 15px);
          color: var(--color-text-muted);
          line-height: 1.8;
          max-width: 460px;
          margin: 0 0 24px;
        }

        .fsp-divider {
          font-family: var(--font-body);
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 1px;
          color: var(--color-text-light);
          margin: 0 0 20px;
        }

        .fsp-text {
          font-family: var(--font-body);
          font-size: clamp(15px, 1.4vw, 17px);
          color: var(--color-text-muted);
          line-height: 1.85;
          margin: 0 0 20px;
          max-width: 560px;
        }
        .fsp-text:last-of-type { margin-bottom: 0; }
        .fsp-text strong { color: var(--color-navy); font-weight: 700; }

        .fsp-intro-credit {
          font-family: var(--font-body);
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.3px;
          color: var(--color-navy);
          margin: 16px 0 0;
          text-align: center;
        }
        .fsp-intro-credit span {
          display: block;
          font-weight: 400;
          color: var(--color-text-light);
          margin-top: 2px;
        }

        /* ══════════════════════════════════════
           MAIN BODY — remaining sections
        ══════════════════════════════════════ */
        .fsp-body {
          padding: 64px clamp(20px, 5vw, 80px);
          max-width: 1080px;
          margin: 0 auto;
        }

        .fsp-content {
          display: flex;
          flex-direction: column;
          gap: 24px;
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
          .fsp-intro {
            grid-template-columns: 1fr;
          }
          .fsp-intro-photo { min-height: 320px; }
        }
      `}</style>

      <Navbar />

      {/* ── Hero ── */}
      <div className="fsp-hero">
        <div className="fsp-hero-grid">
          <div className="fsp-hero-left">
            <span className="fsp-hero-kicker">Our Founder</span>
            <h1 className="fsp-hero-title">Founder's<br />Story</h1>
          </div>
        </div>
      </div>

      {/* ── Intro: photo + name (left), Founder's Story (right) ── */}
      <div className="fsp-intro">
        <div className="fsp-intro-photo-col">
          <div className="fsp-intro-photo-wrap">
            <img src={founderPhoto} alt="Clara Ada Ogbaa, Founder" className="fsp-intro-photo" />
          </div>

          <p className="fsp-intro-credit">
            Dr. Clara Ada Ogbaa
            <span>Founder &amp; Executive Director · JoMabel Healthcare Foundation</span>
          </p>
        </div>

        <div className="fsp-intro-text">
          <span className="fsp-hero-kicker">Founder's Story</span>
          <h1 className="fsp-section-headline">A Life Shaped<br />by Service</h1>

          <p className="fsp-divider">Her journey — faith, sacrifice, and purpose</p>

          <p className="fsp-text">
            <strong>Dr. Clara Ada Ogbaa</strong> is a Nigerian-American educator, humanitarian, and founder of <strong>JoMabel Healthcare Foundation</strong>.
          </p>

          <p className="fsp-text">
            A two-time cancer survivor and kidney transplant recipient, she experienced firsthand the life-saving power of quality healthcare in the United States. Those experiences transformed her life's purpose and inspired a commitment to ensure that others — regardless of geography or financial circumstances — have access to compassionate, quality healthcare.
          </p>

          <p className="fsp-text">
            While raising six children and serving for more than four decades in higher education, Dr. Ogbaa remained devoted to education, leadership, and community service.
          </p>

          <p className="fsp-text">
            Today, she has invested a significant portion of her personal retirement savings to establish JoMabel Healthcare Foundation. Its <strong>flagship initiative</strong> is the development of the <strong>JoMabel Medical Center</strong> and <strong>Healthcare Training Center</strong> in <strong>Ufuma, Anambra State, Nigeria</strong>, a sustainable model designed to improve healthcare access while preparing the next generation of healthcare professionals.
          </p>
        </div>
      </div>

      {/* ── Full-width pullquote ── */}
      <div className="fsp-quote-wrap">
        <p className="fsp-quote-text">
          "Healthcare should never depend on where someone is born or what they can afford."
        </p>
        <p className="fsp-quote-author">— Dr. Clara Ada Ogbaa</p>
      </div>

      {/* ── Continued story ── */}
      <div className="fsp-body">
        <div className="fsp-content">

          <h2 className="fsp-section-headline">Our Name. Our Legacy.</h2>
          <p className="fsp-text">
            The name <strong>JoMabel</strong> is a tribute to Clara Ogbaa's parents, <strong>Joshua and Mabel Nwankwo</strong>, whose lives were defined by faith, compassion, integrity, and service to others.
          </p>
          <p className="fsp-text">
            Her mother, <strong>Mabel</strong>, was widely respected as a spiritual leader and healer in Ufuma and Enugu. Her father, <strong>Joshua</strong>, was a devoted family man and faithful member of <strong>Holy Trinity Anglican Church, Ufuma</strong>, who raised his daughter with resilience, discipline, and faith after her mother's passing.
          </p>
          <p className="fsp-text">
          Their legacy lives on through the Foundation that bears their names. Every patient cared for, every healthcare worker trained, and every community served is a continuation of their legacy.
          </p>
          <p className="fsp-text">
            "JoMabel is more than a name. It is a living tribute to two extraordinary people whose compassion continues to inspire every life we touch."
          </p>

        </div>
      </div>

      {/* ── Join the Legacy: colored quote band, same style as the earlier pull-quote ── */}
      <div className="fsp-quote-wrap">
        <p className="fsp-quote-text">
          Join the Legacy — Help Build Something That Will Outlive Us All
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default FounderStory;