import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import {
  Stethoscope,
  Activity,
  Baby,
  Eye,
  Heart,
  Users,
  ArrowRight,
  MapPin,
} from 'lucide-react';

// ─── SIX PRIORITY PROGRAMS (#48b) ────────────────────────────────────────────
// `id` is the anchor used by the OUR WORK menu (#47b): /programs#<id>
// `details` is the "Explore this program" expander text. It is ON HOLD (#49):
// leave as null until the founder confirms, and the expander stays hidden.
interface Program {
  id: string;
  icon: React.ComponentType<{ size?: number; strokeWidth?: number }>;
  title: string;
  description: string;
  details: string | null;
}

const programs: Program[] = [
  {
    id: 'primary-care-community-outreach',
    icon: Stethoscope,
    title: 'Primary Care & Community Outreach',
    description: 'Connecting families to basic care, prevention, and health education.',
    details: null,
  },
  {
    id: 'blood-pressure-diabetes-kidney-health',
    icon: Activity,
    title: 'Blood Pressure, Diabetes & Kidney Health',
    description: 'Helping people identify risks and stay connected to follow-up care.',
    details: null,
  },
  {
    id: 'maternal-child-health',
    icon: Baby,
    title: 'Maternal & Child Health',
    description: 'Supporting mothers, children, and access to timely care.',
    details: null,
  },
  {
    id: 'eye-health-vision-care',
    icon: Eye,
    title: 'Eye Health & Vision Care',
    description: 'Connecting communities to vision screening and specialist care.',
    details: null,
  },
  {
    id: 'cancer-awareness-early-detection',
    icon: Heart,
    title: 'Cancer Awareness, Early Detection & Patient Support',
    description: 'Helping people recognize concerns and reach appropriate care.',
    details: null,
  },
  {
    id: 'community-health-worker-training',
    icon: Users,
    title: 'Community Health Worker Training & Patient Navigation',
    description: 'Preparing local workers to educate, support, and guide families.',
    details: null,
  },
];

// ─── PROGRAM CARD ────────────────────────────────────────────────────────────
const ProgramCard = ({ program, index }: { program: Program; index: number }) => {
  const Icon = program.icon;
  return (
    <div className="pg-card" id={program.id}>
      <div className="pg-card-top">
        <div className="pg-card-icon"><Icon size={22} strokeWidth={1.75} /></div>
        <span className="pg-card-num">{index + 1}</span>
      </div>
      <h3 className="pg-card-title">{program.title}</h3>
      <p className="pg-card-desc">{program.description}</p>
      {program.details && (
        <details className="pg-card-expander">
          <summary>Explore this program</summary>
          <p>{program.details}</p>
        </details>
      )}
    </div>
  );
};

// ─── GEOGRAPHIC FOCUS (kept as is, #48e) ─────────────────────────────────────
const GeographicFocus = () => (
  <div className="geo-section">
    <div className="geo-content">
      <span className="geo-label">Where We Work</span>
      <h3 className="geo-title">Geographic Focus</h3>
      <p className="geo-description">
        Our primary work is rooted in southeastern Nigeria specifically
        Anambra State and surrounding regions with a growing diaspora
        network and global partnerships that amplify our reach and impact.
      </p>
    </div>
    <div className="geo-cards">
      <div className="geo-card">
        <MapPin size={20} className="geo-icon" />
        <div>
          <p className="geo-card-label">Primary</p>
          <p className="geo-card-value">Southeastern Nigeria (Anambra State & surrounding regions)</p>
        </div>
      </div>
      <div className="geo-card">
        <Users size={20} className="geo-icon" />
        <div>
          <p className="geo-card-label">Secondary</p>
          <p className="geo-card-value">Nigerian diaspora communities & global partners</p>
        </div>
      </div>
    </div>
  </div>
);

// ─── MAIN PROGRAMS PAGE (/programs, shown as "Our Work" in the menu) ─────────
const Programs = () => {
  const navigate = useNavigate();
  const { hash } = useLocation();

  // Menu links such as /programs#maternal-child-health scroll to their card
  useEffect(() => {
    if (!hash) return;
    const el = document.getElementById(hash.slice(1));
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [hash]);

  return (
    <div className="programs-page">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');

        .programs-page {
          font-family: var(--font-body);
          background-color: var(--color-bg);
        }

        /* ── Banner ── */
        .pg-banner {
          padding: clamp(56px, 8vw, 88px) clamp(24px, 5vw, 72px) clamp(32px, 4vw, 48px);
          max-width: 1200px;
          margin: 0 auto;
        }
        .pg-kicker {
          font-family: var(--font-body);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: var(--color-primary);
          margin: 0 0 14px;
        }
        .pg-title {
          font-family: 'Anton', sans-serif;
          font-size: clamp(34px, 5vw, 56px);
          font-weight: 400;
          line-height: 1.05;
          letter-spacing: 0.01em;
          color: var(--color-navy);
          margin: 0 0 16px;
        }
        .pg-intro {
          font-family: var(--font-body);
          font-size: clamp(14px, 1.3vw, 16px);
          line-height: 1.75;
          color: var(--color-text-muted);
          max-width: 560px;
          margin: 0;
        }

        /* ── Cards ── */
        .pg-grid-wrap {
          padding: 0 clamp(24px, 5vw, 72px) clamp(40px, 5vw, 64px);
          max-width: 1200px;
          margin: 0 auto;
        }
        .pg-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        .pg-card {
          background: var(--color-white);
          border: 1px solid var(--color-border);
          border-radius: 0;
          padding: 28px 24px;
          display: flex;
          flex-direction: column;
          scroll-margin-top: 110px;
          transition: var(--transition);
        }
        .pg-card:hover {
          box-shadow: var(--shadow-md);
          transform: translateY(-2px);
        }
        .pg-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 18px;
        }
        .pg-card-icon {
          width: 44px;
          height: 44px;
          background: var(--color-primary-light);
          color: var(--color-primary);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .pg-card-num {
          font-family: 'Anton', sans-serif;
          font-size: 22px;
          color: var(--color-primary);
          opacity: 0.55;
          line-height: 1;
        }
        .pg-card-title {
          font-family: var(--font-body);
          font-size: 17px;
          font-weight: 700;
          line-height: 1.3;
          color: var(--color-navy);
          margin: 0 0 10px;
        }
        .pg-card-desc {
          font-family: var(--font-body);
          font-size: 14px;
          line-height: 1.65;
          color: var(--color-text-muted);
          margin: 0;
        }
        .pg-card-expander {
          margin-top: 18px;
          padding-top: 14px;
          border-top: 1px solid var(--color-border);
        }
        .pg-card-expander summary {
          cursor: pointer;
          font-family: var(--font-body);
          font-size: 13px;
          font-weight: 700;
          color: var(--color-primary);
        }
        .pg-card-expander p {
          font-family: var(--font-body);
          font-size: 13.5px;
          line-height: 1.65;
          color: var(--color-text-muted);
          margin: 10px 0 0;
        }

        /* ── Closing band ── */
        .pg-band-wrap {
          padding: 0 clamp(24px, 5vw, 72px) clamp(56px, 7vw, 80px);
          max-width: 1200px;
          margin: 0 auto;
        }
        .pg-band {
          background: var(--color-navy);
          padding: 32px clamp(24px, 4vw, 40px);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          flex-wrap: wrap;
        }
        .pg-band-title {
          font-family: var(--font-body);
          font-size: clamp(18px, 2vw, 22px);
          font-weight: 700;
          color: #ffffff;
          margin: 0 0 6px;
        }
        .pg-band-line {
          font-family: var(--font-body);
          font-size: 14px;
          color: rgba(255,255,255,0.8);
          margin: 0;
        }
        .pg-band-btn {
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
        .pg-band-btn:hover { background: rgba(255,255,255,0.88); }

        /* ── Geographic Focus ── */
        .geo-wrap {
          padding: 0 clamp(24px, 5vw, 72px) clamp(56px, 7vw, 80px);
          max-width: 1200px;
          margin: 0 auto;
        }
        .geo-section {
          background: var(--color-primary-light);
          border-radius: 0;
          padding: 48px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          align-items: center;
        }
        .geo-label {
          font-family: var(--font-body);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: var(--color-primary);
        }
        .geo-title {
          font-family: 'Anton', sans-serif;
          font-size: clamp(28px, 3.6vw, 38px);
          font-weight: 400;
          color: var(--color-navy);
          text-transform: uppercase;
          letter-spacing: 0.02em;
          margin: 10px 0 16px;
        }
        .geo-description {
          font-family: var(--font-body);
          font-size: 15px;
          color: var(--color-text-muted);
          line-height: 1.7;
        }
        .geo-cards {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .geo-card {
          background: var(--color-white);
          border-radius: 0;
          padding: 20px 24px;
          display: flex;
          align-items: flex-start;
          gap: 14px;
          box-shadow: var(--shadow-sm);
          border-left: 4px solid var(--color-primary);
        }
        .geo-icon { color: var(--color-primary); flex-shrink: 0; }
        .geo-card-label {
          font-family: var(--font-body);
          font-size: 11px;
          font-weight: 700;
          color: var(--color-primary);
          text-transform: uppercase;
          letter-spacing: 1.5px;
          margin-bottom: 4px;
        }
        .geo-card-value {
          font-family: var(--font-body);
          font-size: 14px;
          font-weight: 600;
          color: var(--color-navy);
          margin: 0;
        }

        /* ── Responsive ── */
        @media (max-width: 960px) {
          .pg-grid { grid-template-columns: repeat(2, 1fr); }
          .geo-section { grid-template-columns: 1fr; padding: 36px 28px; gap: 32px; }
        }
        @media (max-width: 600px) {
          .pg-banner { padding-top: 40px; padding-bottom: 28px; }
          .pg-grid { grid-template-columns: 1fr; gap: 14px; }
          .pg-card { padding: 22px 20px; }
          .pg-band { padding: 24px 20px; }
          .pg-band-btn { width: 100%; justify-content: center; }
          .geo-section { padding: 28px 20px; }
        }
      `}</style>

      <Navbar />

      {/* ── Banner (#48a) ── */}
      <div className="pg-banner">
        <p className="pg-kicker">Our Work · Proposed Program Priorities</p>
        <h1 className="pg-title">Bringing healthcare closer to home.</h1>
        <p className="pg-intro">
          Six connected program areas guide our vision for Ufuma and surrounding
          rural communities in Nigeria.
        </p>
      </div>

      {/* ── Six program cards (#48b) ── */}
      <div className="pg-grid-wrap">
        <div className="pg-grid">
          {programs.map((program, i) => (
            <ProgramCard key={program.id} program={program} index={i} />
          ))}
        </div>
      </div>

      {/* ── Closing band (#48c). Goes live together with #50 (/our-centers). ── */}
      <div className="pg-band-wrap">
        <div className="pg-band">
          <div>
            <h2 className="pg-band-title">Building the facilities to support this work</h2>
            <p className="pg-band-line">
              Our Medical Center and Healthcare Training Center are under development.
            </p>
          </div>
          <button className="pg-band-btn" onClick={() => navigate('/our-centers')}>
            Explore Our Centers <ArrowRight size={15} />
          </button>
        </div>
      </div>

      {/* ── Where We Work / Geographic Focus (kept, #48e) ── */}
      <div className="geo-wrap">
        <GeographicFocus />
      </div>

      <Footer />
    </div>
  );
};

export default Programs;