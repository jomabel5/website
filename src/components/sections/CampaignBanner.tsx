import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import outreach4 from '../../assests/images/outreach4.jpeg';

const raised     = 7500000;
const goal       = 10000000;
const percentage = Math.round((raised / goal) * 100);

const formatNaira = (amount: number): string =>
  '₦' + amount.toLocaleString('en-NG');

const CampaignBanner = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible]             = useState(false);
  const [animatedRaised, setAnimatedRaised]   = useState(0);
  const [animatedPct, setAnimatedPct]         = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  /* ── Intersection observer ── */
  useEffect(() => {
    if (window.innerWidth < 768) {
      const t = setTimeout(() => setIsVisible(true), 100);
      return () => clearTimeout(t);
    }
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.disconnect(); } },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  /* ── Count-up ── */
  useEffect(() => {
    if (!isVisible) return;
    const duration = 1400;

    // Raised amount
    const startR = performance.now();
    const stepR = (now: number) => {
      const p    = Math.min((now - startR) / duration, 1);
      const ease = 1 - Math.pow(1 - p, 3);
      setAnimatedRaised(Math.round(ease * raised));
      if (p < 1) requestAnimationFrame(stepR);
    };
    requestAnimationFrame(stepR);

    // Percentage
    const startP = performance.now();
    const stepP = (now: number) => {
      const p    = Math.min((now - startP) / (duration * 1.1), 1);
      const ease = 1 - Math.pow(1 - p, 3);
      setAnimatedPct(Math.round(ease * percentage));
      if (p < 1) requestAnimationFrame(stepP);
    };
    requestAnimationFrame(stepP);
  }, [isVisible]);

  return (
    <div ref={sectionRef} className={`cb-wrap ${isVisible ? 'cb-visible' : ''}`}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');

        /* ─────────────────────────────────────────
           OUTER WRAPPER — full bleed image
        ───────────────────────────────────────── */
        .cb-wrap {
          position: relative;
          min-height: 580px;
          display: flex;
          align-items: flex-end;
          font-family: var(--font-body);
          overflow: hidden;
        }
        .cb-bg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 20%;
        }
        .cb-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(0,0,0,0.82) 0%,
            rgba(0,0,0,0.35) 50%,
            rgba(0,0,0,0.10) 100%
          );
        }

        /* ─────────────────────────────────────────
           CONTENT — left-aligned editorial
        ───────────────────────────────────────── */
        .cb-content {
          position: relative;
          z-index: 2;
          width: 100%;
          padding: 0 clamp(24px, 5vw, 72px) 64px;
          display: flex;
          align-items: center;
          gap: 64px;
          flex-wrap: wrap;
        }

        /* Left: headline block */
        .cb-left {
          flex: 1;
          min-width: 280px;
        }
        .cb-kicker {
          font-family: var(--font-body);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--color-primary);
          margin: 0 0 14px;
          display: flex;
          align-items: center;
          gap: 10px;
          opacity: 0;
          transform: translateY(16px);
          transition: opacity 0.5s ease, transform 0.5s ease;
        }
        .cb-kicker::before {
          content: '';
          display: inline-block;
          width: 28px;
          height: 2px;
          background: var(--color-primary);
          flex-shrink: 0;
        }
        .cb-title {
          font-family: 'Anton', sans-serif;
          font-size: clamp(30px, 4.5vw, 54px);
          font-weight: 400;
          color: #ffffff;
          line-height: 1.08;
          letter-spacing: 0.01em;
          text-transform: uppercase;
          margin: 0 0 20px;
          max-width: 560px;
          opacity: 0;
          transform: translateY(16px);
          transition: opacity 0.5s ease, transform 0.5s ease;
          transition-delay: 0.1s;
        }
        .cb-desc {
          font-family: var(--font-body);
          font-size: clamp(13px, 1.3vw, 16px);
          color: rgba(255,255,255,0.75);
          line-height: 1.75;
          max-width: 480px;
          margin: 0 0 28px;
          opacity: 0;
          transform: translateY(16px);
          transition: opacity 0.5s ease, transform 0.5s ease;
          transition-delay: 0.2s;
        }

        /* Right: progress card */
        .cb-right {
          flex-shrink: 0;
          width: 340px;
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.6s ease, transform 0.6s ease;
          transition-delay: 0.35s;
        }

        /* ── Progress card ── */
        .cb-card {
          background: rgba(255,255,255,0.97);
          border-radius: 4px;
          padding: 32px 28px 32px;
          border-top: 3px solid var(--color-primary);
        }
        .cb-card-kicker {
          font-family: var(--font-body);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--color-text-light);
          margin: 0 0 16px;
        }
        .cb-pct-row {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          margin-bottom: 12px;
          gap: 8px;
          flex-wrap: wrap;
        }
        .cb-pct {
          font-family: 'Anton', sans-serif;
          font-size: 44px;
          font-weight: 400;
          color: var(--color-primary);
          line-height: 1;
          letter-spacing: 0.02em;
        }
        .cb-pct-label {
          font-family: var(--font-body);
          font-size: 12px;
          color: var(--color-text-light);
          text-transform: uppercase;
          letter-spacing: 1px;
          font-weight: 600;
        }
        .cb-bar-track {
          background: var(--color-surface-2);
          border-radius: 100px;
          height: 8px;
          overflow: hidden;
          margin-bottom: 20px;
        }
        .cb-bar-fill {
          height: 100%;
          background: linear-gradient(90deg, var(--color-primary) 0%, var(--color-green) 100%);
          border-radius: 100px;
          transition: width 1.2s cubic-bezier(0.22, 1, 0.36, 1);
          width: 0%;
        }
        .cb-bar-fill.cb-animated {
          width: ${percentage}%;
        }
        .cb-amounts {
          display: flex;
          flex-direction: column;
          gap: 6px;
          padding-top: 4px;
          border-top: 1px solid var(--color-border);
        }
        .cb-amount-row {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
        }
        .cb-amount-label {
          font-family: var(--font-body);
          font-size: 11px;
          color: var(--color-text-light);
          text-transform: uppercase;
          letter-spacing: 1px;
          font-weight: 600;
        }
        .cb-amount-value {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 16px;
          font-weight: 700;
        }

        /* card buttons */
        .cb-card-btns {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-top: 24px;
        }
        .cb-btn-primary {
          background: var(--color-green);
          color: #ffffff;
          border: none;
          border-radius: var(--btn-radius);
          padding: 14px 20px;
          font-family: var(--font-body);
          font-size: 14px;
          font-weight: 700;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          transition: var(--transition);
          letter-spacing: 0.2px;
        }
        .cb-btn-primary:hover {
          background: var(--color-green-dark);
          transform: translateY(-1px);
          box-shadow: var(--shadow-md);
        }
        .cb-btn-outline {
          background: transparent;
          color: var(--color-navy);
          border: 1.5px solid var(--color-border-dark);
          border-radius: var(--btn-radius);
          padding: 13px 20px;
          font-family: var(--font-body);
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          transition: var(--transition);
        }
        .cb-btn-outline:hover {
          background: var(--color-surface-2);
          border-color: var(--color-navy);
        }

        /* ── Visible state ── */
        .cb-wrap.cb-visible .cb-kicker,
        .cb-wrap.cb-visible .cb-title,
        .cb-wrap.cb-visible .cb-desc,
        .cb-wrap.cb-visible .cb-right {
          opacity: 1;
          transform: translateY(0);
        }

        /* ─────────────────────────────────────────
           RESPONSIVE
        ───────────────────────────────────────── */
        @media (max-width: 900px) {
          .cb-content  { flex-direction: column; align-items: flex-start; gap: 36px; padding-bottom: 48px; }
          .cb-right    { width: 100%; max-width: 460px; }
          .cb-wrap     { min-height: 640px; }
        }
        @media (max-width: 600px) {
          .cb-right    { max-width: 100%; }
          .cb-pct      { font-size: 36px; }
        }
      `}</style>

      {/* Background - adjusted object-position to show the face */}
      <img src={outreach4} alt="JoMabel Healthcare Foundation medical outreach" className="cb-bg" />
      <div className="cb-overlay" />

      {/* Content */}
      <div className="cb-content">

        {/* Left — headline */}
        <div className="cb-left">
          <p className="cb-kicker">Active Campaign</p>
          <h2 className="cb-title">Complete the JoMabel Medical Campus</h2>
          <p className="cb-desc">
            Help us finish the 16,000+ sq. meter medical and training center in
            Ufuma, Anambra State — bringing dignified healthcare to thousands of families.
          </p>
        </div>

        {/* Right — progress card */}
        <div className="cb-right">
          <div className="cb-card">
            <p className="cb-card-kicker">Fundraising Progress</p>
            <div className="cb-pct-row">
             
            </div>
            <div className="cb-card-btns">
              <button className="cb-btn-primary" onClick={() => navigate('/donate')}>
                Donate Now <ArrowRight size={15} />
              </button>
              <button className="cb-btn-outline" onClick={() => navigate('/contact')}>
                Partner With Us
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CampaignBanner;