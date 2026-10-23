import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { ArrowRight } from 'lucide-react';

// ── Images (same assets already used on Campaign and old Programs pages) ──
import logo2 from '../assests/images/logo2.png';
import logo3 from '../assests/images/logo3.png';
import render1 from '../assests/images/an1.jpg';
import render6 from '../assests/images/an6.jpg';

// ─── CENTER DATA ─────────────────────────────────────────────────────────────
// #53 (center names) is ON HOLD: change the names here only, and they update on this page.
// #31 (progress figures) is ON HOLD: when the founder sends verified figures,
// fill in `asOf` (e.g. "October 2026") and `source` (e.g. "per contractor site report").
// While they are null, the "As of" line stays hidden.
interface Center {
  id: string;
  name: string;
  logo: string;
  image: string;
  tag: string;
  line: string;
  supportTitle: string;
  support: string;
  size: string;
  progress: number;
  asOf: string | null;
  source: string | null;
  services: string[];
  accent: string;
}

const centers: Center[] = [
  {
    id: 'community-medical-center',
    name: 'Community Medical Center',
    logo: logo2,
    image: render1,
    tag: 'Under development',
    line: 'A planned base for primary care and selected clinical services, supported by referral partnerships.',
    supportTitle: 'How it supports our work',
    support:
      'Designed to support primary care and chronic disease follow-up, with maternal, eye, and cancer-related services introduced according to capacity and partnerships.',
    size: '6,000 sqm',
    progress: 50,
    asOf: null,
    source: null,
    services: [
      'Primary & preventive care',
      'Maternal & child health',
      'Chronic disease management',
      'Diagnostic & laboratory services',
    ],
    accent: 'var(--color-primary)',
  },
  {
    id: 'healthcare-training-center',
    name: 'Healthcare Training Center',
    logo: logo3,
    image: render6,
    tag: 'Under development',
    line: 'A planned base for community health worker learning, practical skills, and community health education.',
    supportTitle: 'How it supports our work',
    support:
      'Designed to prepare community health workers and local staff to support all six programs, from outreach and screening connections to patient navigation and follow-up.',
    size: '10,000 sqm',
    progress: 30,
    asOf: null,
    source: null,
    services: [
      'Community health worker training',
      'Hands-on clinical skills',
      'Health leadership development',
      'Career mentorship',
    ],
    accent: 'var(--color-green)',
  },
];

// ─── CENTER CARD ─────────────────────────────────────────────────────────────
const CenterCard = ({ center }: { center: Center }) => (
  <div className="oc-card" id={center.id}>
    <div className="oc-card-image-wrap">
      <img src={center.image} alt={`${center.name} architectural render`} className="oc-card-image" />
      <span className="oc-card-tag">{center.tag}</span>
    </div>

    <div className="oc-card-body">
      <img src={center.logo} alt="" className="oc-card-logo" />
      <h3 className="oc-card-title">{center.name}</h3>
      <p className="oc-card-line">{center.line}</p>

      <div className="oc-card-meta">
        <span className="oc-card-size">{center.size}</span>
        <span className="oc-card-size-label">Total Area</span>
      </div>

      <div className="oc-progress">
        <div className="oc-progress-top">
          <span className="oc-progress-label">Construction progress</span>
          <span className="oc-progress-pct" style={{ color: center.accent }}>{center.progress}%</span>
        </div>
        <div className="oc-progress-track">
          <div className="oc-progress-fill" style={{ width: `${center.progress}%`, background: center.accent }} />
        </div>
        {center.asOf && (
          <p className="oc-progress-asof">
            As of {center.asOf}{center.source ? `, ${center.source}` : ''}
          </p>
        )}
      </div>

      <div className="oc-services">
        <p className="oc-services-label">Anticipated services</p>
        <ul className="oc-services-list">
          {center.services.map((s) => (
            <li key={s}>
              <span className="oc-service-dot" style={{ background: center.accent }} />
              {s}
            </li>
          ))}
        </ul>
      </div>

      <details className="oc-expander">
        <summary>{center.supportTitle}</summary>
        <p>{center.support}</p>
      </details>
    </div>
  </div>
);

// ─── PAGE ────────────────────────────────────────────────────────────────────
const OurCenters = () => {
  const navigate = useNavigate();
  const { hash } = useLocation();

  // Menu links such as /our-centers#healthcare-training-center scroll to their card
  useEffect(() => {
    if (!hash) return;
    const el = document.getElementById(hash.slice(1));
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [hash]);

  return (
    <div className="oc-page">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');

        .oc-page {
          font-family: var(--font-body);
          background: var(--color-bg);
        }

        /* ── Banner ── */
        .oc-banner {
          padding: clamp(56px, 8vw, 88px) clamp(24px, 5vw, 72px) clamp(32px, 4vw, 48px);
          max-width: 1200px;
          margin: 0 auto;
        }
        .oc-kicker {
          font-family: var(--font-body);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: var(--color-primary);
          margin: 0 0 14px;
        }
        .oc-title {
          font-family: 'Anton', sans-serif;
          font-size: clamp(34px, 5vw, 56px);
          font-weight: 400;
          line-height: 1.05;
          letter-spacing: 0.01em;
          color: var(--color-navy);
          margin: 0 0 16px;
        }
        .oc-intro {
          font-family: var(--font-body);
          font-size: clamp(14px, 1.3vw, 16px);
          line-height: 1.75;
          color: var(--color-text-muted);
          max-width: 600px;
          margin: 0;
        }

        /* ── Cards ── */
        .oc-list {
          padding: 0 clamp(24px, 5vw, 72px) clamp(40px, 5vw, 64px);
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 28px;
        }
        .oc-card {
          background: var(--color-white);
          border: 1px solid var(--color-border);
          border-radius: 0;
          display: grid;
          grid-template-columns: 5fr 6fr;
          scroll-margin-top: 110px;
        }
        .oc-card-image-wrap {
          position: relative;
          min-height: 340px;
        }
        .oc-card-image {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .oc-card-tag {
          position: absolute;
          top: 16px;
          left: 16px;
          background: #fff4d6;
          color: #8a5a00;
          font-family: var(--font-body);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 1.4px;
          text-transform: uppercase;
          padding: 6px 12px;
        }
        .oc-card-body {
          padding: 32px clamp(20px, 3vw, 36px);
          display: flex;
          flex-direction: column;
        }
        .oc-card-logo {
          height: 64px;
          width: auto;
          max-width: 100%;
          object-fit: contain;
          object-position: left;
          margin-bottom: 16px;
        }
        .oc-card-title {
          font-family: 'Anton', sans-serif;
          font-size: clamp(22px, 2.4vw, 28px);
          font-weight: 400;
          text-transform: uppercase;
          letter-spacing: 0.02em;
          color: var(--color-navy);
          line-height: 1.1;
          margin: 0 0 10px;
        }
        .oc-card-line {
          font-family: var(--font-body);
          font-size: 14.5px;
          line-height: 1.7;
          color: var(--color-text-muted);
          margin: 0 0 18px;
        }
        .oc-card-meta {
          display: flex;
          align-items: baseline;
          gap: 8px;
          margin-bottom: 16px;
        }
        .oc-card-size {
          font-family: 'Anton', sans-serif;
          font-size: 22px;
          letter-spacing: 0.02em;
          color: var(--color-navy);
          line-height: 1;
        }
        .oc-card-size-label {
          font-family: var(--font-body);
          font-size: 12px;
          color: var(--color-text-light);
        }

        /* progress */
        .oc-progress { margin-bottom: 20px; }
        .oc-progress-top {
          display: flex;
          justify-content: space-between;
          margin-bottom: 8px;
        }
        .oc-progress-label {
          font-family: var(--font-body);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: var(--color-text-light);
        }
        .oc-progress-pct {
          font-family: var(--font-body);
          font-size: 13px;
          font-weight: 700;
        }
        .oc-progress-track {
          background: var(--color-border);
          height: 8px;
          overflow: hidden;
        }
        .oc-progress-fill { height: 100%; }
        .oc-progress-asof {
          font-family: var(--font-body);
          font-size: 12px;
          color: var(--color-text-light);
          margin: 8px 0 0;
        }

        /* services */
        .oc-services { margin-bottom: 4px; }
        .oc-services-label {
          font-family: var(--font-body);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: var(--color-text-light);
          margin: 0 0 12px;
        }
        .oc-services-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px 16px;
        }
        .oc-services-list li {
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-body);
          font-size: 13px;
          color: var(--color-text-muted);
        }
        .oc-service-dot {
          width: 6px;
          height: 6px;
          flex-shrink: 0;
        }

        /* expander */
        .oc-expander {
          margin-top: 20px;
          padding-top: 16px;
          border-top: 1px solid var(--color-border);
        }
        .oc-expander summary {
          cursor: pointer;
          font-family: var(--font-body);
          font-size: 13px;
          font-weight: 700;
          color: var(--color-primary);
        }
        .oc-expander p {
          font-family: var(--font-body);
          font-size: 13.5px;
          line-height: 1.65;
          color: var(--color-text-muted);
          margin: 10px 0 0;
        }

        /* ── Closing band ── */
        .oc-band-wrap {
          padding: 0 clamp(24px, 5vw, 72px) clamp(56px, 7vw, 80px);
          max-width: 1200px;
          margin: 0 auto;
        }
        .oc-band {
          background: var(--color-navy);
          padding: 32px clamp(24px, 4vw, 40px);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          flex-wrap: wrap;
        }
        .oc-band-title {
          font-family: var(--font-body);
          font-size: clamp(18px, 2vw, 22px);
          font-weight: 700;
          color: #ffffff;
          margin: 0 0 6px;
        }
        .oc-band-line {
          font-family: var(--font-body);
          font-size: 14px;
          color: rgba(255,255,255,0.8);
          margin: 0;
        }
        .oc-band-btn {
          background: #ffffff;
          color: var(--color-navy);
          border: none;
          border-radius: 0;
          padding: 14px 28px;
          font-family: var(--font-body);
          font-size: 14px;
          font-weight: 700;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: var(--transition);
        }
        .oc-band-btn:hover { background: rgba(255,255,255,0.88); }

        /* ── Responsive ── */
        @media (max-width: 900px) {
          .oc-card { grid-template-columns: 1fr; }
          .oc-card-image-wrap { min-height: 220px; }
        }
        @media (max-width: 600px) {
          .oc-banner { padding-top: 40px; padding-bottom: 28px; }
          .oc-list { gap: 20px; }
          .oc-card-body { padding: 24px 20px; }
          .oc-card-image-wrap { min-height: 190px; }
          .oc-services-list { grid-template-columns: 1fr; }
          .oc-band { padding: 24px 20px; }
          .oc-band-btn { width: 100%; justify-content: center; }
        }
      `}</style>

      <Navbar />

      {/* ── Banner (#50a) ── */}
      <div className="oc-banner">
        <p className="oc-kicker">Our Centers · Facilities Under Development</p>
        <h1 className="oc-title">Two centers. One community mission.</h1>
        <p className="oc-intro">
          We are developing spaces for community healthcare and workforce training in
          Ufuma. Services will open in phases as staffing, funding, approvals, and
          infrastructure become ready.
        </p>
      </div>

      {/* ── Center cards (#50b, #50c, #50e) ── */}
      <div className="oc-list">
        {centers.map((center) => (
          <CenterCard key={center.id} center={center} />
        ))}
      </div>

      {/* ── Closing band (#50d) ── */}
      <div className="oc-band-wrap">
        <div className="oc-band">
          <div>
            <h2 className="oc-band-title">Help bring the centers to life</h2>
            <p className="oc-band-line">
              Support construction completion, essential equipment, or training partnerships.
            </p>
          </div>
          <button className="oc-band-btn" onClick={() => navigate('/programs')}>
            See the six programs <ArrowRight size={15} />
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default OurCenters;