import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Building2, HeartPulse } from 'lucide-react';

const OurFocus = () => {
  const navigate = useNavigate();

  // #31 is ON HOLD: figures stay as they are until the founder sends
  // verified percentages, "As of [Month Year]" dates and sources.
  const stats = [
    {
      icon: Building2,
      percent: '50%',
      label: 'Medical Center Completed',
    },
    {
      icon: HeartPulse,
      percent: '30%',
      label: 'Healthcare Training Center Completed',
    },
  ];

  return (
    <section className="our-focus-section">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');

        .our-focus-section {
          font-family: var(--font-body);
        }

        /* ── Stats block ── */
        .focus-stats-block {
          background: linear-gradient(90deg, #dce9f6 0%, #e9f5ec 100%);
          padding: 64px 24px 72px;
          text-align: center;
        }

        .focus-stats-headline {
          font-family: 'Anton', sans-serif;
          font-weight: 400;
          font-size: clamp(28px, 3.6vw, 38px);
          color: var(--color-navy);
          margin: 0 0 10px;
          letter-spacing: 0.01em;
        }

        .focus-stats-subtext {
          font-family: var(--font-body);
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          color: var(--color-text-muted);
          margin: 0 0 48px;
        }

        .focus-stats-cards {
          display: flex;
          justify-content: center;
          gap: 32px;
          flex-wrap: wrap;
          max-width: 900px;
          margin: 0 auto 40px;
        }

        .focus-stat-card {
          background: var(--color-white);
          flex: 1;
          min-width: 220px;
          max-width: 380px;
          padding: 48px 32px 32px;
          position: relative;
          box-shadow: 0 4px 16px rgba(0,0,0,0.06);
        }

        .focus-stat-icon {
          width: 68px;
          height: 68px;
          border-radius: 50%;
          background: var(--color-primary);
          box-shadow: 0 0 0 6px rgba(59, 100, 158, 0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: -80px auto 20px;
        }

        .focus-stat-percent {
          font-family: var(--font-body);
          font-size: clamp(30px, 3.4vw, 40px);
          font-weight: 700;
          color: var(--color-primary);
          margin-bottom: 10px;
        }

        .focus-stat-label {
          font-family: var(--font-body);
          font-size: 15px;
          font-weight: 500;
          color: var(--color-text-muted);
        }

        /* ── Standard button size — used across the whole site ── */
        .focus-stats-btn {
          background: var(--color-primary);
          color: var(--color-white);
          border: none;
          border-radius: var(--btn-radius);
          padding: 14px 32px;
          font-family: var(--font-body);
          font-size: 14px;
          font-weight: 700;
          cursor: pointer;
          transition: var(--transition);
        }

        .focus-stats-btn:hover {
          background: var(--color-primary-dark);
        }

        /* ── Mobile: tighter spacing ── */
        @media (max-width: 640px) {
          .focus-stats-block { padding: 44px 20px 48px; }
          .focus-stats-subtext { margin-bottom: 36px; }
          .focus-stats-cards {
            flex-direction: column;
            align-items: center;
            gap: 44px;
            margin-bottom: 28px;
          }
          .focus-stat-card {
            width: 100%;
            max-width: 320px;
            padding: 44px 24px 24px;
          }
        }
      `}</style>

      <div className="focus-stats-block">
        <h3 className="focus-stats-headline">JoMabel Integrated Healthcare System</h3>
        <p className="focus-stats-subtext">Under Construction</p>

        <div className="focus-stats-cards">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="focus-stat-card">
                <div className="focus-stat-icon">
                  <Icon size={28} color="#ffffff" />
                </div>
                <div className="focus-stat-percent">{stat.percent}</div>
                <div className="focus-stat-label">{stat.label}</div>
              </div>
            );
          })}
        </div>

        <button className="focus-stats-btn" onClick={() => navigate('/impact')}>
          See Our Impact
        </button>
      </div>
    </section>
  );
};

export default OurFocus;