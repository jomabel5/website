import React from "react";
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');

        .hero-root {
          position: relative;
          width: 100%;
          min-height: 85vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%);
          overflow: hidden;
        }

        .hero-root::before {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.45);
          z-index: 1;
        }

        /* Animated Vector Icons */
        .hero-vectors {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 2;
        }

        .vector-1 { position: absolute; top: 15%; left: 5%;  opacity: 0.10; animation: float1 25s ease-in-out infinite; }
        .vector-2 { position: absolute; top: 60%; left: 85%; opacity: 0.08; animation: float2 20s ease-in-out infinite; }
        .vector-3 { position: absolute; top: 75%; left: 10%; opacity: 0.08; animation: float3 22s ease-in-out infinite; }
        .vector-4 { position: absolute; top: 20%; left: 75%; opacity: 0.06; animation: float1 18s ease-in-out infinite reverse; }
        .vector-5 { position: absolute; top: 40%; left: 15%; opacity: 0.08; animation: float2 30s ease-in-out infinite; }
        .vector-7 { position: absolute; bottom: 5%; right: 20%; opacity: 0.07; animation: float1 15s ease-in-out infinite; }

        @keyframes float1 {
          0%   { transform: translate(0, 0) rotate(0deg); }
          33%  { transform: translate(30px, -20px) rotate(5deg); }
          66%  { transform: translate(-15px, 25px) rotate(-3deg); }
          100% { transform: translate(0, 0) rotate(0deg); }
        }
        @keyframes float2 {
          0%   { transform: translate(0, 0) scale(1); }
          50%  { transform: translate(-25px, 15px) scale(1.05); }
          100% { transform: translate(0, 0) scale(1); }
        }
        @keyframes float3 {
          0%   { transform: translate(0, 0) rotate(0deg); }
          25%  { transform: translate(20px, 20px) rotate(8deg); }
          75%  { transform: translate(-10px, -15px) rotate(-5deg); }
          100% { transform: translate(0, 0) rotate(0deg); }
        }

        .hero-container {
          max-width: 1000px;
          margin: 0 auto;
          padding: 100px clamp(24px, 5vw, 48px) 80px;
          width: 100%;
          position: relative;
          z-index: 3;
          text-align: center;
          animation: fadeInUp 0.7s ease-out;
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* ── Stats ── */
        .hero-stats {
          display: flex;
          justify-content: center;
          gap: 64px;
          margin-bottom: 36px;
          flex-wrap: wrap;
        }

        .hero-stat { text-align: center; }

        .hero-stat-number {
          font-family: 'Anton', sans-serif;
          font-size: clamp(32px, 4vw, 52px);
          font-weight: 400;
          color: var(--color-white);
          line-height: 1.1;
          letter-spacing: 0.02em;
          margin-bottom: 6px;
        }

        .hero-stat-label {
          font-family: var(--font-body);
          font-size: clamp(13px, 1.2vw, 16px);
          color: rgba(255,255,255,0.80);
          font-weight: 400;
          letter-spacing: 0.03em;
        }

        /* ── Headline ── */
        .hero-headline {
          font-family: 'Anton', sans-serif;
          font-size: clamp(24px, 5.5vw, 48px);
          font-weight: 200;
          line-height: 1.05;
          color: var(--color-white);
          text-transform: uppercase;
          letter-spacing: 0.02em;
          margin: 0 auto 28px;
          max-width: 900px;
        }

        /* ── Description ── */
        .hero-description {
          font-family: var(--font-body);
          font-size: clamp(14px, 1.4vw, 17px);
          font-weight: 400;
          line-height: 1.7;
          color: rgba(255,255,255,0.85);
          margin: 0 auto 36px;
          max-width: 640px;
        }

        /* ── Buttons — square, brand colors ── */
        .hero-buttons {
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: 40px;
        }

        .hero-btn-primary {
          background: var(--color-green);
          color: var(--color-white);
          border: none;
          border-radius: 0;
          padding: 15px 36px;
          font-family: var(--font-body);
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 1.4px;
          text-transform: uppercase;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          transition: var(--transition);
        }

        .hero-btn-primary:hover {
          background: var(--color-green-dark);
          transform: translateY(-2px);
        }

        .hero-btn-secondary {
          background: transparent;
          color: var(--color-white);
          border: 1.5px solid rgba(255,255,255,0.65);
          border-radius: 0;
          padding: 15px 36px;
          font-family: var(--font-body);
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 1.4px;
          text-transform: uppercase;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          transition: var(--transition);
        }

        .hero-btn-secondary:hover {
          background: rgba(255,255,255,0.12);
          border-color: var(--color-white);
          transform: translateY(-2px);
        }

        /* ── Hashtag ── */
        .hero-hashtag {
          font-family: var(--font-body);
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.12em;
          color: rgba(255,255,255,0.50);
          text-transform: uppercase;
        }

        /* ── Responsive ── */
        @media (max-width: 768px) {
          .hero-root { min-height: 70vh; }
          .hero-container { padding: 60px 24px; }
          .hero-stats { gap: 28px; }
          .hero-buttons { flex-direction: column; align-items: center; }
          .hero-btn-primary, .hero-btn-secondary {
            width: 100%; max-width: 260px; justify-content: center;
          }
        }

        @media (max-width: 480px) {
          .hero-vectors { display: none; }
        }
      `}</style>

      <div className="hero-root">
        <div className="hero-vectors">
          <div className="vector-1">
            <svg width="60" height="60" viewBox="0 0 24 24" fill="none">
              <path d="M12 4V20M4 12H20" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>
          <div className="vector-2">
            <svg width="50" height="50" viewBox="0 0 24 24" fill="none">
              <path d="M12 21C12 21 3 14.5 3 8.5C3 5.42 5.42 3 8.5 3C10.24 3 11.8 3.85 12 5C12.2 3.85 13.76 3 15.5 3C18.58 3 21 5.42 21 8.5C21 14.5 12 21 12 21Z" stroke="white" strokeWidth="1.5"/>
            </svg>
          </div>
          <div className="vector-3">
            <svg width="70" height="70" viewBox="0 0 24 24" fill="none">
              <path d="M7 3v6a5 5 0 0010 0V3" stroke="white" strokeWidth="1.5"/>
              <path d="M17 14v1a4 4 0 01-4 4H9" stroke="white" strokeWidth="1.5"/>
              <circle cx="7.5" cy="19.5" r="2" stroke="white" strokeWidth="1.5"/>
            </svg>
          </div>
          <div className="vector-4">
            <svg width="45" height="45" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L3 6v6c0 5.5 9 10 9 10s9-4.5 9-10V6l-9-4z" stroke="white" strokeWidth="1.5"/>
            </svg>
          </div>
          <div className="vector-5">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
              <path d="M12 2.5C12 2.5 6 9.5 6 14c0 3.5 2.5 6 6 6s6-2.5 6-6c0-4.5-6-11.5-6-11.5z" stroke="white" strokeWidth="1.5"/>
            </svg>
          </div>
          <div className="vector-7">
            <svg width="55" height="55" viewBox="0 0 24 24" fill="none">
              <path d="M7 10v8c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-8" stroke="white" strokeWidth="1.5"/>
              <path d="M3 10h18M5 6h14" stroke="white" strokeWidth="1.5"/>
            </svg>
          </div>
        </div>

        <div className="hero-container">

          <h1 className="hero-headline">
           Bringing Life‑Saving Care to Rural Communities in Need
          </h1>

         <p className="hero-description">
  JoMabel Healthcare Foundation (JHF) is a Texas-based nonprofit committed to bringing dignified, compassionate healthcare to underserved families in Nigeria.
  <br /><br />
  In Ufuma and surrounding communities in Southeast Nigeria, many families travel long distances or delay care entirely due to poverty, limited infrastructure, and the absence of nearby quality medical facilities.
</p>

          <div className="hero-buttons">
            <button className="hero-btn-primary" onClick={() => navigate('/donate')}>
              Donate Now
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button className="hero-btn-secondary" onClick={() => navigate('/programs')}>
              Get Involved
            </button>
            <button className="hero-btn-secondary" onClick={() => navigate('/campaign')}>
              Learn More
            </button>
          </div>

          <div className="hero-hashtag">#HealingHopeCommunity</div>
        </div>
      </div>
    </>
  );
};

export default Hero;