import React from "react";
import { useNavigate } from 'react-router-dom';
import heroImage from '../../assests/images/bgg5.jpg';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');

        .hero-root {
          position: relative;
          width: 100%;
          min-height: 100vh;
          display: flex;
          align-items: center;
          overflow: hidden;
        }

        .hero-image {
          position: absolute;
          inset: 0;
          background-image: url(${heroImage});
          background-size: cover;
          background-position: center;
          z-index: 0;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            90deg,
            rgba(0,0,0,0.72) 0%,
            rgba(0,0,0,0.50) 38%,
            rgba(0,0,0,0.15) 65%,
            rgba(0,0,0,0.05) 100%
          );
          z-index: 1;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 clamp(24px, 6vw, 64px);
          width: 100%;
          animation: fadeInUp 0.7s ease-out;
        }

        .hero-inner {
          max-width: 700px;
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* Headline: Anton display font, one consistent size for both lines */
        .hero-headline {
          margin: 0 0 26px;
          line-height: 1.15;
        }
        .hero-headline-light {
          display: block;
          font-family: 'Anton', sans-serif;
          font-weight: 400;
          font-size: clamp(28px, 3.6vw, 38px);
          color: var(--color-white);
          letter-spacing: 0.01em;
          margin-bottom: 6px;
        }
        .hero-headline-bold {
          display: block;
          font-family: 'Anton', sans-serif;
          font-weight: 400;
          font-size: clamp(28px, 3.6vw, 38px);
          color: var(--color-white);
          letter-spacing: 0.01em;
        }

        .hero-subtitle {
          font-family: var(--font-body);
          font-size: clamp(16px, 1.6vw, 20px);
          font-weight: 400;
          line-height: 1.65;
          color: rgba(255,255,255,0.88);
          margin: 0 0 36px;
          max-width: 580px;
        }

        .hero-actions {
          display: flex;
          align-items: center;
          gap: 26px;
          flex-wrap: wrap;
          margin-bottom: 30px;
        }

        .hero-btn-primary {
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
        .hero-btn-primary:hover {
          background: var(--color-primary-dark);
          transform: translateY(-2px);
        }

        .hero-secondary-links {
          display: flex;
          align-items: center;
          gap: 20px;
        }
        .hero-link {
          background: none;
          border: none;
          padding: 0;
          cursor: pointer;
          font-family: var(--font-body);
          font-size: 15px;
          font-weight: 600;
          color: var(--color-white);
          text-decoration: underline;
          text-underline-offset: 3px;
          text-decoration-color: rgba(255,255,255,0.5);
          transition: var(--transition);
        }
        .hero-link:hover { text-decoration-color: var(--color-white); }

        .hero-hashtag {
          font-family: var(--font-body);
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.12em;
          color: rgba(255,255,255,0.55);
          text-transform: uppercase;
        }

        @media (max-width: 768px) {
          .hero-root {
            flex-direction: column;
            align-items: stretch;
            min-height: auto;
          }
          .hero-image {
            position: relative;
            inset: auto;
            width: 100%;
            height: 92vw;
            max-height: 420px;
          }
          .hero-overlay { display: none; }
          .hero-content {
            position: relative;
            background: var(--color-primary-dark);
            padding: 40px clamp(20px, 6vw, 40px) 48px;
          }
          .hero-inner { max-width: 100%; }
          .hero-actions { flex-direction: column; align-items: flex-start; gap: 16px; }
        }
      `}</style>

      <div className="hero-root">
        <div className="hero-image" />
        <div className="hero-overlay" />
        <div className="hero-content">
          <div className="hero-inner">
            <h1 className="hero-headline">
              <span className="hero-headline-light">Bringing Life-Saving Care</span>
              <span className="hero-headline-bold">To Rural Communities In Need</span>
            </h1>

            <p className="hero-subtitle">
              JoMabel Healthcare Foundation (JHF) is a nonprofit bringing dignified,
              compassionate healthcare to underserved families across Ufuma and
              Southeast Nigeria.
            </p>

            <div className="hero-actions">
              <button className="hero-btn-primary" onClick={() => navigate('/donate')}>
                Donate Now
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              <div className="hero-secondary-links">
                <button className="hero-link" onClick={() => navigate('/programs')}>
                  Explore Our Work
                </button>
                <button className="hero-link" onClick={() => navigate('/contact')}>
                  Contact Us
                </button>
              </div>
            </div>

            <div className="hero-hashtag">#HealingHopeCommunity</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;