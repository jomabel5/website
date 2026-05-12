import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import CampaignBanner from '../components/sections/CampaignBanner';
import { 
  Stethoscope, 
  Heart, 
  Megaphone, 
  Building2,
  ArrowRight,
  MapPin,
  Users,
  GraduationCap,
  Baby,
  BookOpen
} from 'lucide-react';

// ─── YOUR AUTHENTIC IMAGES ───
import logo2 from '../assests/images/logo2.png';
import logo3 from '../assests/images/logo3.png';
import outreach1 from '../assests/images/outreach1.jpeg';
import outreach2 from '../assests/images/outreach2.jpeg';
import outreach4 from '../assests/images/outreach4.jpeg';
import outreach5 from '../assests/images/outreach5.jpeg';


// ─── PROGRAMS HERO ───────────────────────────────────────────────────────────
const ProgramsHero = () => {
  const navigate = useNavigate();
  return (
    <section className="programs-hero">
      <img
        src={outreach5}
        alt="JoMabel outreach mission in Ufuma"
        className="programs-hero-bg"
      />
      <div className="programs-hero-overlay" />
      <div className="programs-hero-content">
        <span className="hero-tag">JoMabel Healthcare Foundation</span>
        <h1 className="hero-title">
          Our Programs & Services
        </h1>
        <p className="hero-description">
          Through our two facilities and six program areas, JoMabel Healthcare
          Foundation delivers healthcare, training, and lasting community
          transformation across Nigeria.
        </p>
        <div className="hero-buttons">
          <button className="btn-primary" onClick={() => navigate('/campaign')}>
            Join The Campaign
            <ArrowRight size={16} />
          </button>
          <button className="btn-outline" onClick={() => navigate('/about')}>
            Learn Our Story
          </button>
        </div>
      </div>
    </section>
  );
};

// ─── FACILITY CARDS ──────────────────────────────────────────────────────────
interface FacilityCardProps {
  logo: string;
  title: string;
  description: string;
  features: string[];
  gradient: string;
}

const FacilityCard = ({ logo, title, description, features, gradient }: FacilityCardProps) => {
  const navigate = useNavigate();
  return (
    <div className="facility-card" style={{ background: gradient }}>
      <div className="facility-logo-wrap">
        <img src={logo} alt={title} className="facility-logo" />
      </div>
      <h3 className="facility-title">{title}</h3>
      <p className="facility-description">{description}</p>
      <ul className="facility-features">
        {features.map((item, i) => (
          <li key={i}>
            <div className="feature-dot" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <button className="facility-link" onClick={() => navigate('/campaign')}>
        Learn More
        <ArrowRight size={14} />
      </button>
    </div>
  );
};

// ─── PROGRAM CARD ────────────────────────────────────────────────────────────
interface ProgramCardProps {
  icon: React.ComponentType<{size?: number}>;
  category: string;
  title: string;
  description: string;
  bullets: string[];
  image: string;
  color: string;
}

const ProgramCard = ({ icon: Icon, category, title, description, bullets, image, color }: ProgramCardProps) => {
  const navigate = useNavigate();
  return (
    <div className="program-card">
      <div className="program-card-image-wrap">
        <img src={image} alt={title} className="program-card-image" />
        <div className="program-card-icon">
          <Icon size={24} />
        </div>
      </div>
      <div className="program-card-content">
        <span className="program-category" style={{ background: `${color}15`, color: color }}>
          {category}
        </span>
        <h3 className="program-title">{title}</h3>
        <p className="program-description">{description}</p>
        <ul className="program-bullets">
          {bullets.map((bullet, i) => (
            <li key={i}>
              <div className="bullet-dot" style={{ background: color }} />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
        <button className="program-link" onClick={() => navigate('/donate')}>
          Support This Program
          <ArrowRight size={14} />
        </button>
      </div>
    </div>
  );
};

// ─── GEOGRAPHIC FOCUS ────────────────────────────────────────────────────────
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

// ─── MAIN PROGRAMS COMPONENT ─────────────────────────────────────────────────
const Programs = () => {
  const navigate = useNavigate();

  const medicalCenterFeatures = [
    'Primary care & diagnostics',
    'Maternal & child health services',
    'Chronic disease management',
    'Preventive health education',
  ];

  const trainingCenterFeatures = [
    'Hands-on clinical training',
    'Leadership development',
    'Community service opportunities',
    'Career mentorship programs',
  ];

  const programCards = [
    {
      icon: Stethoscope,
      category: 'Medical Outreach',
      title: 'Medical Outreach Missions',
      description: 'Regular medical missions providing free consultations, medications, screenings, and referrals reaching rural and underserved communities.',
      bullets: ['Free consultations & medications', 'Health screenings & referrals', 'Reaching rural communities'],
      image: outreach1,
      color: '#1D8FD4',
    },
    {
      icon: Baby,
      category: 'Maternal & Child Health',
      title: 'Maternal & Child Health Initiative',
      description: 'Programs focused on safe pregnancy and delivery, newborn care, immunization, nutrition support, and women\'s health education.',
      bullets: ['Safe pregnancy & delivery', 'Newborn care & immunization', 'Nutrition & women\'s health'],
      image: outreach2,
      color: '#16A34A',
    },
    {
      icon: BookOpen,
      category: 'Community Education',
      title: 'Community Health Education',
      description: 'Workshops and campaigns addressing hygiene and sanitation, disease prevention, mental and emotional wellness, and nutrition.',
      bullets: ['Hygiene & sanitation workshops', 'Disease prevention campaigns', 'Mental & emotional wellness'],
      image: outreach4,
      color: '#EA580C',
    },
    {
      icon: Building2,
      category: 'Infrastructure',
      title: 'Healthcare Infrastructure Development',
      description: 'Building and equipping facilities that anchor long-term community health including clinics, diagnostic centers, and water systems.',
      bullets: ['Clinics & diagnostic centers', 'Water & sanitation systems', 'Youth training complexes'],
      image: outreach5,
      color: '#1D4ED8',
    },
  ];

  return (
    <div className="programs-page">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');

        .programs-page {
          font-family: var(--font-body);
          background-color: var(--color-bg);
        }

        /* ── Hero ── */
        .programs-hero {
          position: relative;
          min-height: 500px;
          display: flex;
          align-items: center;
          overflow: hidden;
        }
        .programs-hero-bg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }
        .programs-hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to right, rgba(17,24,39,0.92) 0%, rgba(17,24,39,0.75) 60%, rgba(17,24,39,0.4) 100%);
        }
        .programs-hero-content {
          position: relative;
          z-index: 2;
          padding: clamp(48px, 8vw, 80px) clamp(24px, 5vw, 64px);
          max-width: 700px;
        }
        .hero-tag {
          display: inline-block;
          background: rgba(29,143,212,0.2);
          border: 1px solid rgba(29,143,212,0.4);
          color: var(--color-primary);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          padding: 6px 16px;
          border-radius: 0;           /* square */
          margin-bottom: 24px;
        }
        .hero-title {
          font-family: 'Anton', sans-serif;
          color: var(--color-white);
          font-size: clamp(36px, 5.5vw, 64px);
          font-weight: 400;
          line-height: 1.0;
          text-transform: uppercase;
          letter-spacing: 0.02em;
          margin-bottom: 20px;
        }
        .hero-description {
          color: rgba(255,255,255,0.85);
          font-family: var(--font-body);
          font-size: clamp(14px, 1.4vw, 17px);
          line-height: 1.7;
          margin-bottom: 32px;
          max-width: 520px;
        }
        .hero-buttons {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
        }

        /* ── Buttons — all square ── */
        .btn-primary {
          background-color: var(--color-green);
          color: var(--color-white);
          border: none;
          border-radius: 0;           /* square */
          padding: 14px 32px;
          font-family: var(--font-body);
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 1.2px;
          text-transform: uppercase;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: var(--transition);
        }
        .btn-primary:hover {
          background-color: var(--color-green-dark);
          transform: translateY(-1px);
        }
        .btn-outline {
          background: transparent;
          color: var(--color-white);
          border: 1.5px solid rgba(255,255,255,0.45);
          border-radius: 0;           /* square */
          padding: 14px 32px;
          font-family: var(--font-body);
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 1.2px;
          text-transform: uppercase;
          cursor: pointer;
          transition: var(--transition);
        }
        .btn-outline:hover {
          background: rgba(255,255,255,0.10);
          border-color: rgba(255,255,255,0.70);
        }

        /* ── Overview wrapper ── */
        .programs-overview {
          padding: 80px clamp(24px, 5vw, 48px);
          max-width: 1280px;
          margin: 0 auto;
        }

        /* ── Section header ── */
        .section-header {
          text-align: center;
          margin-bottom: 56px;
        }
        .section-label {
          font-family: var(--font-body);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: var(--color-primary);
        }
        .section-title {
          font-family: 'Anton', sans-serif;
          font-size: clamp(28px, 4vw, 42px);
          font-weight: 400;
          color: var(--color-navy);
          margin-top: 10px;
          text-transform: uppercase;
          letter-spacing: 0.02em;
          line-height: 1.05;
        }

        /* ── Facility Cards Row ── */
        .facility-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2px;                   /* tight seam between cards */
          margin-bottom: 48px;
        }
        .facility-card {
          border-radius: 0;           /* square */
          overflow: hidden;
          padding: 40px 36px;
          transition: var(--transition);
        }
        .facility-card:hover {
          transform: translateY(-3px);
          box-shadow: var(--shadow-xl);
        }
        .facility-logo-wrap {
          background: var(--color-white);
          border-radius: 0;           /* square */
          padding: 28px 32px;
          margin-bottom: 28px;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 120px;
        }
        .facility-logo {
          height: auto;
          width: 300px;               /* big logo */
          object-fit: contain;
        }
        .facility-title {
          font-family: 'Anton', sans-serif;
          color: var(--color-white);
          font-size: clamp(18px, 2vw, 24px);
          font-weight: 400;
          text-transform: uppercase;
          letter-spacing: 0.03em;
          margin-bottom: 12px;
        }
        .facility-description {
          color: rgba(255,255,255,0.80);
          font-family: var(--font-body);
          font-size: 14px;
          line-height: 1.7;
          margin-bottom: 20px;
        }
        .facility-features {
          list-style: none;
          padding: 0;
          margin: 0 0 28px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .facility-features li {
          display: flex;
          align-items: center;
          gap: 10px;
          color: rgba(255,255,255,0.75);
          font-family: var(--font-body);
          font-size: 13px;
        }
        .feature-dot {
          width: 6px;
          height: 6px;
          border-radius: 0;           /* square dot */
          background-color: var(--color-primary);
          flex-shrink: 0;
        }
        .facility-link {
          background: none;
          border: none;
          color: var(--color-white);
          font-family: var(--font-body);
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 0;
          transition: var(--transition);
        }
        .facility-link:hover {
          gap: 10px;
          opacity: 0.80;
        }

        /* ── Program Cards Grid ── */
        .programs-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2px;                   /* tight seam */
          margin: 48px 0;
        }
        .program-card {
          background: var(--color-bg);
          border: 1px solid var(--color-border);
          border-radius: 0;           /* square */
          overflow: hidden;
          transition: var(--transition);
        }
        .program-card:hover {
          transform: translateY(-3px);
          box-shadow: var(--shadow-lg);
          border-color: var(--color-primary);
        }
        .program-card-image-wrap {
          position: relative;
          height: 220px;
          overflow: hidden;
        }
      .program-card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 20%;
}
        .program-card-icon {
          position: absolute;
          bottom: 12px;
          left: 12px;
          background: rgba(255,255,255,0.95);
          border-radius: 0;           /* square */
          padding: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: var(--shadow-sm);
        }
        .program-card-content {
          padding: 28px;
        }
        .program-category {
          display: inline-block;
          font-family: var(--font-body);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1.2px;
          text-transform: uppercase;
          padding: 4px 10px;
          border-radius: 0;           /* square */
          margin-bottom: 14px;
        }
        .program-title {
          font-family: 'Anton', sans-serif;
          font-size: clamp(16px, 1.8vw, 20px);
          font-weight: 400;
          color: var(--color-navy);
          text-transform: uppercase;
          letter-spacing: 0.02em;
          margin-bottom: 12px;
          line-height: 1.1;
        }
        .program-description {
          font-family: var(--font-body);
          font-size: 14px;
          color: var(--color-text-muted);
          line-height: 1.65;
          margin-bottom: 16px;
        }
        .program-bullets {
          list-style: none;
          padding: 0;
          margin: 0 0 20px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .program-bullets li {
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-body);
          font-size: 13px;
          color: var(--color-text-muted);
        }
        .bullet-dot {
          width: 5px;
          height: 5px;
          border-radius: 0;           /* square */
          flex-shrink: 0;
        }
        .program-link {
          background: none;
          border: none;
          color: var(--color-primary);
          font-family: var(--font-body);
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 1.2px;
          text-transform: uppercase;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          transition: var(--transition);
        }
        .program-link:hover {
          color: var(--color-primary-dark);
          gap: 10px;
        }

        /* ── Geographic Focus ── */
        .geo-section {
          background: var(--color-primary-light);
          border-radius: 0;           /* square */
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
          font-size: clamp(22px, 2.5vw, 30px);
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
          border-radius: 0;           /* square */
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
        @media (max-width: 900px) {
          .facility-row,
          .programs-grid,
          .geo-section {
            grid-template-columns: 1fr;
            gap: 2px;
          }
          .geo-section { padding: 36px 28px; gap: 32px; }
        }
        @media (max-width: 600px) {
          .hero-buttons { flex-direction: column; }
          .btn-primary, .btn-outline { justify-content: center; }
          .facility-logo { width: 220px; }
          .geo-section { padding: 28px 20px; }
        }
      `}</style>

      <Navbar />
      <ProgramsHero />

      <div className="programs-overview">
        <div className="section-header">
          <div className="section-label">What We Do</div>
          <h2 className="section-title">Programs Overview</h2>
        </div>

        {/* Two Main Facility Cards */}
        <div className="facility-row">
          <FacilityCard
            logo={logo2}
            title="JoMabel Medical Center"
            description="Our operational hub offering primary care, maternal and child health services, diagnostic and laboratory services, chronic disease management, and preventive health education in Ufuma, Anambra State, Nigeria."
            features={medicalCenterFeatures}
            gradient="linear-gradient(160deg, #111827 0%, #1D4ED8 100%)"
          />
          <FacilityCard
            logo={logo3}
            title="Youth Training & Skills Center"
            description="Investing in the next generation of healthcare professionals through hands-on clinical training, leadership development, community service opportunities, and career mentorship programs."
            features={trainingCenterFeatures}
            gradient="linear-gradient(160deg, #1D4ED8 0%, #1D8FD4 100%)"
          />
        </div>

        {/* Four Program Cards */}
        <div className="programs-grid">
          {programCards.map((program, i) => (
            <ProgramCard key={i} {...program} />
          ))}
        </div>

        {/* Geographic Focus */}
        <GeographicFocus />
      </div>

      <CampaignBanner />
      <Footer />
    </div>
  );
};

export default Programs;