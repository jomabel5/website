import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Stethoscope,
  Activity,
  Baby,
  Eye,
  Heart,
  Users,
  ArrowRight,
} from 'lucide-react';

// Six new programs (#48b), same order and anchors as the /programs page.
// Photos were removed on purpose: use one only where it genuinely shows that
// program (founder to supply), by adding an `image` field and rendering it here.
const programs = [
  { id: 'primary-care-community-outreach',        icon: Stethoscope, title: 'Primary Care & Community Outreach' },
  { id: 'blood-pressure-diabetes-kidney-health',  icon: Activity,    title: 'Blood Pressure, Diabetes & Kidney Health' },
  { id: 'maternal-child-health',                  icon: Baby,        title: 'Maternal & Child Health' },
  { id: 'eye-health-vision-care',                 icon: Eye,         title: 'Eye Health & Vision Care' },
  { id: 'cancer-awareness-early-detection',       icon: Heart,       title: 'Cancer Awareness, Early Detection & Patient Support' },
  { id: 'community-health-worker-training',       icon: Users,       title: 'Community Health Worker Training & Patient Navigation' },
];

const OurPrograms = () => {
  const navigate = useNavigate();

  return (
    <section className="op-section">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');

        .op-section {
          font-family: var(--font-body);
          background: var(--color-bg);
          padding: 72px clamp(24px, 5vw, 72px) 80px;
        }

        .op-headline {
          font-family: 'Anton', sans-serif;
          font-weight: 400;
          font-size: clamp(28px, 3.6vw, 38px);
          color: var(--color-navy);
          text-align: center;
          letter-spacing: 0.01em;
          margin: 0 0 48px;
        }

        .op-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          max-width: 1200px;
          margin: 0 auto 48px;
        }

        .op-card {
          background: var(--color-white);
          border: 1px solid var(--color-border);
          border-radius: 0;
          padding: 32px 24px;
          min-height: 190px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: space-between;
          gap: 24px;
          text-decoration: none;
          transition: var(--transition);
        }
        .op-card:hover {
          border-color: var(--color-primary);
          box-shadow: var(--shadow-md);
          transform: translateY(-2px);
        }
        .op-card-icon {
          width: 48px;
          height: 48px;
          flex-shrink: 0;
          background: var(--color-primary-light);
          color: var(--color-primary);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .op-card-title {
          font-family: var(--font-body);
          font-size: 18px;
          font-weight: 700;
          color: var(--color-navy);
          line-height: 1.3;
          margin: 0;
        }

        .op-cta-wrap {
          display: flex;
          justify-content: center;
        }
        .op-cta-btn {
          background: var(--color-primary);
          color: #ffffff;
          border: none;
          border-radius: var(--btn-radius);
          padding: 14px 32px;
          font-family: var(--font-body);
          font-size: 14px;
          font-weight: 700;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: var(--transition);
        }
        .op-cta-btn:hover {
          background: var(--color-primary-dark);
        }

        @media (max-width: 900px) {
          .op-grid { grid-template-columns: repeat(2, 1fr); }
        }
        /* Mobile: compact rows (icon left, title right) to keep the homepage short */
        @media (max-width: 560px) {
          .op-section { padding: 48px 20px 52px; }
          .op-headline { margin-bottom: 28px; }
          .op-grid { grid-template-columns: 1fr; gap: 12px; margin-bottom: 32px; }
          .op-card {
            flex-direction: row;
            align-items: center;
            justify-content: flex-start;
            min-height: 0;
            padding: 16px 18px;
            gap: 16px;
          }
          .op-card-title { font-size: 16px; }
          .op-cta-btn { width: 100%; justify-content: center; }
        }
      `}</style>

      <h2 className="op-headline">Our Programs</h2>

      <div className="op-grid">
        {programs.map((program) => {
          const Icon = program.icon;
          return (
            <Link key={program.id} to={`/programs#${program.id}`} className="op-card">
              <div className="op-card-icon"><Icon size={24} strokeWidth={1.75} /></div>
              <h3 className="op-card-title">{program.title}</h3>
            </Link>
          );
        })}
      </div>

      <div className="op-cta-wrap">
        <button className="op-cta-btn" onClick={() => navigate('/programs')}>
          Explore Our Work <ArrowRight size={15} />
        </button>
      </div>
    </section>
  );
};

export default OurPrograms;