import React from 'react';

const BuildingIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <rect x="3" y="10" width="18" height="11" rx="1" stroke="#ffffff" strokeWidth="1.5"/>
    <path d="M9 21V14h6v7" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M3 10l9-7 9 7" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const StethoscopeIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <path d="M7 3v6a5 5 0 0010 0V3" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M17 14v1a4 4 0 01-4 4H9" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="7.5" cy="19.5" r="2" stroke="#ffffff" strokeWidth="1.5"/>
    <line x1="7" y1="3" x2="7" y2="5" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="17" y1="3" x2="17" y2="5" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const CommunityIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <circle cx="9" cy="7" r="3" stroke="#ffffff" strokeWidth="1.5"/>
    <circle cx="17" cy="7" r="3" stroke="#ffffff" strokeWidth="1.5"/>
    <path d="M3 21v-1a6 6 0 0112 0v1" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M19 21v-1a5.96 5.96 0 00-2-4.47" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const YouthIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="7" r="4" stroke="#ffffff" strokeWidth="1.5"/>
    <path d="M7 21v-2a5 5 0 0110 0v2" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M12 13v4" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M9 17l3 3 3-3" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const stats = [
  { icon: <BuildingIcon />,    number: '16k+', line1: 'Square Meters',      line2: 'Medical Campus' },
  { icon: <StethoscopeIcon />, number: '100+', line1: 'Healthcare',         line2: 'Professionals Trained' },
  { icon: <CommunityIcon />,   number: '5k+',  line1: 'Community Members',  line2: 'Served Annually' },
  { icon: <YouthIcon />,       number: '50+',  line1: 'Youth Empowered',    line2: 'Through Skills Training' },
];

const PriorityStats = () => {
  return (
    <section style={{
      background: 'linear-gradient(135deg, var(--color-navy) 0%, var(--color-navy-mid) 50%, var(--color-navy) 100%)',
      padding: 'var(--section-padding-y) var(--section-padding-x)',
      fontFamily: 'var(--font-body)',
      position: 'relative',
      overflow: 'hidden',
    }}>

      {/* Subtle radial glow using primary blue */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse at 60% 40%, rgba(41,197,246,0.12) 0%, transparent 70%)',
      }} />

      <style>{`
        .stats-heading {
          text-align: center;
          margin-bottom: 48px;
          position: relative;
        }
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          max-width: 1080px;
          margin: 0 auto;
          position: relative;
        }
        .stat-card {
          background-color: rgba(255,255,255,0.07);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: var(--card-radius);
          padding: 30px 26px 34px;
          display: flex;
          flex-direction: column;
          gap: 16px;
          transition: var(--transition);
        }
        .stat-card:hover {
          background-color: rgba(255,255,255,0.11);
          border-color: rgba(41,197,246,0.35);
          transform: translateY(-3px);
          box-shadow: 0 8px 24px rgba(41,197,246,0.15);
        }
        .stat-number {
          color: var(--color-primary);
          font-size: 44px;
          font-weight: 800;
          line-height: 1;
          letter-spacing: -0.02em;
        }
        @media (max-width: 900px) {
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 480px) {
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 12px !important; }
          .stats-heading h2 { font-size: 17px !important; }
          .stats-heading p  { font-size: 13px !important; }
          .stat-number      { font-size: 32px !important; }
          .stat-card        { padding: 20px 18px 24px !important; }
        }
      `}</style>

      {/* Heading */}
      <div className="stats-heading">
        <h2 style={{
          fontFamily: 'var(--font-heading)',
          color: '#ffffff',
          fontSize: 'clamp(20px, 2.5vw, 28px)',
          fontWeight: '700',
          marginBottom: '14px',
        }}>
          Building Healthier Communities
        </h2>
        <p style={{
          color: 'rgba(255,255,255,0.70)',
          fontSize: '15px',
          lineHeight: '1.8',
          maxWidth: '560px',
          margin: '0 auto',
        }}>
          Through our medical center, outreach missions, and partnerships, we serve
          thousands of individuals each year bringing hope, healing, and dignity
          to communities in need.
        </p>
      </div>

      {/* Stat Cards */}
      <div className="stats-grid">
        {stats.map((stat, i) => (
          <div key={i} className="stat-card">

            {/* Icon bubble */}
            <div style={{
              width: '44px', height: '44px', borderRadius: '50%',
              backgroundColor: 'rgba(41,197,246,0.15)',
              border: '1px solid rgba(41,197,246,0.25)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0,
            }}>
              {stat.icon}
            </div>

            {/* Number */}
            <div className="stat-number">{stat.number}</div>

            {/* Label */}
            <div>
              <p style={{ color: 'rgba(255,255,255,0.90)', fontSize: '13px', fontWeight: '600', margin: '0 0 2px' }}>
                {stat.line1}
              </p>
              <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '13px', margin: 0 }}>
                {stat.line2}
              </p>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
};

export default PriorityStats;