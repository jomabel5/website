import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Building2, GraduationCap, Users, Smartphone, TrendingUp } from 'lucide-react';
import solutionImage from '../../assests/images/outreach1.jpeg';

const pillars = [
  {
    icon: Building2,
    title: 'Medical Center',
    desc: 'A 6,000 sqm facility delivering primary care, maternal health, diagnostics, chronic disease management, and specialist services permanently rooted in Ufuma.',
  },
  {
    icon: GraduationCap,
    title: 'Medical Training Center',
    desc: 'A 10,000 sqm skills and training center building the next generation of local healthcare professionals through clinical training, mentorship, and leadership programs.',
  },
  {
    icon: Users,
    title: 'Community-Based Programs',
    desc: 'Outreach missions, maternal and child health initiatives, community health worker training, and health education taking care directly to the people who need it most.',
  },
  {
    icon: Smartphone,
    title: 'Digital Health & Telemedicine',
    desc: 'Connecting rural communities to specialist care through telemedicine infrastructure, remote diagnostics, and digital health tools built for the realities of rural Nigeria.',
  },
];

const TheSolution = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const [nums, setNums] = useState({
    campusSize: 0,
    livesImpacted: 0,
    medicalProgress: 0,
    trainingProgress: 0,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const animateTo = (key: keyof typeof nums, target: number, duration: number) => {
      const start = performance.now();
      const step = (now: number) => {
        const p = Math.min((now - start) / duration, 1);
        const ease = 1 - Math.pow(1 - p, 3);
        const val = Math.round(ease * target);
        setNums(prev => ({ ...prev, [key]: val }));
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };

    animateTo('campusSize', 16000, 1400);
    animateTo('livesImpacted', 50000, 1600);
    animateTo('medicalProgress', 75, 1200);
    animateTo('trainingProgress', 30, 1000);
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="sol-section">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');

        /* ── Wrapper ── */
        .sol-section {
          background: var(--color-bg);
          padding: 48px clamp(20px, 5vw, 56px);
          font-family: var(--font-body);
          color: var(--color-text);
        }

        .sol-inner {
          max-width: 1080px;
          margin: 0 auto;
        }

        /* ── Editorial header — right-aligned to contrast TheProblem's left ── */
        .sol-header {
          border-right: 5px solid var(--color-navy);
          padding-right: 20px;
          margin-bottom: 28px;
          text-align: right;
        }

        .sol-kicker {
          font-family: var(--font-body);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: var(--color-primary);
          margin: 0 0 10px;
        }

        /* Anton headline — matches TheProblem .tp-headline */
        .sol-headline {
          font-family: 'Anton', sans-serif;
          font-size: clamp(28px, 4vw, 48px);
          font-weight: 400;
          letter-spacing: 0.01em;
          text-transform: uppercase;
          line-height: 1.1;
          color: var(--color-navy);
          margin: 0;
        }

        /* Body copy — right-aligned, pushed to the right edge */
        .sol-intro {
          font-family: var(--font-body);
          font-size: clamp(15px, 1.4vw, 17px);
          color: var(--color-text-muted);
          line-height: 1.8;
          max-width: 720px;
          margin: 0 0 52px;
          padding-right: 25px;
          margin-left: auto;
          text-align: right;
        }

        /* ── Section divider label — mirrors TheProblem .tp-section-label ── */
        .sol-divider {
          font-family: var(--font-body);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--color-text-light);
          margin-bottom: 0;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .sol-divider::after {
          content: '';
          flex: 1;
          height: 1px;
          background: var(--color-border);
        }

        /* ── Two-column layout ── */
        .sol-two-col {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: center;
          border-top: 2px solid var(--color-navy);
          padding-top: 36px;
          margin-bottom: 56px;
        }

        .sol-subhead {
          font-family: 'Anton', sans-serif;
          font-size: clamp(22px, 2.8vw, 32px);
          font-weight: 400;
          letter-spacing: 0.01em;
          text-transform: uppercase;
          line-height: 1.15;
          color: var(--color-navy);
          margin: 0 0 20px;
        }

        .sol-body {
          font-family: var(--font-body);
          font-size: clamp(14px, 1.3vw, 16px);
          color: var(--color-text-muted);
          line-height: 1.8;
          margin: 0 0 16px;
        }

        /* ── Inline stats — Anton numbers, Inter labels ── */
        .sol-stats {
          display: flex;
          gap: 36px;
          margin: 28px 0 24px;
          padding-top: 20px;
          border-top: 1px solid var(--color-border);
        }

        .sol-stat-num {
          font-family: 'Anton', sans-serif;
          font-size: clamp(24px, 3vw, 34px);
          font-weight: 400;
          letter-spacing: 0.02em;
          color: var(--color-primary);
          line-height: 1;
          margin: 0 0 4px;
        }

        .sol-stat-lbl {
          font-family: var(--font-body);
          font-size: 12px;
          color: var(--color-text-muted);
          line-height: 1.4;
        }

        /* CTA button */
        .sol-btn {
          background: var(--color-primary);
          color: var(--color-white);
          border: none;
          border-radius: var(--btn-radius);
          padding: 13px 28px;
          font-family: var(--font-body);
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.5px;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: var(--transition);
        }

        .sol-btn:hover {
          background: var(--color-primary-dark);
          transform: translateY(-1px);
        }

        /* Image */
        .sol-image {
          width: 100%;
          height: auto;
          min-height: 360px;
          object-fit: cover;
          border-radius: var(--card-radius);
          box-shadow: var(--shadow-lg);
        }

        /* ── Progress cards ── */
        .sol-progress-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
          border-top: 1px solid var(--color-border);
          padding-top: 36px;
          margin-bottom: 56px;
        }

        .sol-progress-card {
          background: var(--color-surface);
          border: 1px solid var(--color-border);
          border-radius: var(--card-radius);
          padding: 28px;
          transition: var(--transition);
        }

        .sol-progress-card:hover {
          border-color: var(--color-primary);
          box-shadow: var(--shadow-md);
          transform: translateY(-3px);
        }

        .sol-progress-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 12px;
        }

        /* Anton for progress percentage */
        .sol-progress-pct {
          font-family: 'Anton', sans-serif;
          font-size: clamp(30px, 3.5vw, 40px);
          font-weight: 400;
          letter-spacing: 0.02em;
          color: var(--color-primary);
          line-height: 1;
        }

        .sol-progress-name {
          font-family: 'Anton', sans-serif;
          font-size: clamp(15px, 1.8vw, 19px);
          font-weight: 400;
          letter-spacing: 0.03em;
          text-transform: uppercase;
          color: var(--color-navy);
          margin: 0 0 4px;
        }

        .sol-progress-size {
          font-family: var(--font-body);
          font-size: 13px;
          color: var(--color-primary);
          font-weight: 600;
          margin: 0;
        }

        .sol-progress-detail {
          font-family: var(--font-body);
          font-size: 13px;
          color: var(--color-text-muted);
          line-height: 1.55;
          margin: 0 0 16px;
        }

        .sol-bar-track {
          height: 6px;
          border-radius: 3px;
          background: var(--color-border);
          overflow: hidden;
          margin-bottom: 10px;
        }

        .sol-bar-fill {
          height: 100%;
          border-radius: 3px;
          background: var(--color-primary);
          transition: width 1s ease-out;
        }

        .sol-bar-meta {
          display: flex;
          justify-content: space-between;
          font-family: var(--font-body);
          font-size: 11px;
          color: var(--color-text-light);
          letter-spacing: 0.3px;
        }

        /* ── Pillars grid ── */
        .sol-pillars-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0;
          border-top: 2px solid var(--color-navy);
        }

        .sol-pillar {
          padding: 32px 28px 32px 0;
          border-right: 1px solid var(--color-border);
          display: flex;
          flex-direction: column;
          gap: 10px;
          transition: var(--transition);
        }

        .sol-pillar:last-child {
          border-right: none;
          padding-right: 0;
        }

        .sol-pillar:not(:first-child) {
          padding-left: 28px;
        }

        .sol-pillar-icon {
          width: 40px;
          height: 40px;
          border-radius: 8px;
          background: var(--color-primary-light);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-primary);
          margin-bottom: 4px;
          flex-shrink: 0;
          transition: var(--transition);
        }

        .sol-pillar:hover .sol-pillar-icon {
          background: var(--color-primary);
          color: var(--color-white);
        }

        .sol-pillar-icon svg {
          width: 20px;
          height: 20px;
          stroke-width: 1.5;
        }

        /* Anton pillar title */
        .sol-pillar-title {
          font-family: 'Anton', sans-serif;
          font-size: clamp(14px, 1.5vw, 17px);
          font-weight: 400;
          letter-spacing: 0.03em;
          text-transform: uppercase;
          color: var(--color-navy);
          margin: 0;
          line-height: 1.2;
        }

        /* Inter pillar desc */
        .sol-pillar-desc {
          font-family: var(--font-body);
          font-size: 13px;
          color: var(--color-text-muted);
          line-height: 1.6;
          margin: 0;
        }

        /* ── Source footnote — mirrors TheProblem .tp-source ── */
        .sol-source {
          margin-top: 36px;
          padding-top: 20px;
          border-top: 1px solid var(--color-border);
          font-family: var(--font-body);
          font-size: 11px;
          color: var(--color-text-light);
          letter-spacing: 0.3px;
        }

        /* ── Responsive ── */
        @media (max-width: 860px) {
          .sol-two-col {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .sol-progress-grid {
            grid-template-columns: 1fr;
          }
          .sol-pillars-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .sol-pillar {
            border-right: none;
            border-bottom: 1px solid var(--color-border);
            padding: 28px 0;
          }
          .sol-pillar:not(:first-child) { padding-left: 0; }
          .sol-pillar:last-child { border-bottom: none; }
        }

        @media (max-width: 480px) {
          .sol-pillars-grid {
            grid-template-columns: 1fr;
          }
          .sol-stats {
            flex-direction: column;
            gap: 20px;
          }
        }
      `}</style>

      <div className="sol-inner">

        {/* ── Editorial header ── */}
        <div className="sol-header">
          <p className="sol-kicker">Our Solution</p>
          <h2 className="sol-headline">
            Building an Integrated<br />Healthcare System
          </h2>
        </div>

        <p className="sol-intro">
          This is more than a clinic — it is a lasting, self-sustaining center for care, training,
          and community health that will transform lives in Ufuma and surrounding communities
          for generations to come.
        </p>

        {/* ── Two-column: text + image ── */}
        <p className="sol-divider">The campus vision</p>

        <div className="sol-two-col">
          <div>
            <h3 className="sol-subhead">
              A Legacy of Care,<br />Built to Last
            </h3>
            <p className="sol-body">
              JoMabel Healthcare Foundation is not building a temporary clinic.
              We are building a permanent, integrated healthcare campus — a
              self-sustaining system of care, training, and community health
              that will serve Ufuma and surrounding communities for generations.
            </p>
            <p className="sol-body">
              When complete, the campus will bring specialist-level care,
              professional training, and preventive health programs to a region
              where these have never existed at scale.
            </p>

            <div className="sol-stats">
              <div>
                <div className="sol-stat-num">{nums.campusSize.toLocaleString()}+</div>
                <div className="sol-stat-lbl">sqm total campus</div>
              </div>
              <div>
                <div className="sol-stat-num">{nums.livesImpacted.toLocaleString()}+</div>
                <div className="sol-stat-lbl">lives impacted annually</div>
              </div>
            </div>

            <button className="sol-btn" onClick={() => navigate('/campaign')}>
              See the Full Campus Plan
              <TrendingUp size={14} />
            </button>
          </div>

          <div>
            <img
              src={solutionImage}
              alt="JoMabel Healthcare Foundation campus vision"
              className="sol-image"
            />
          </div>
        </div>

        {/* ── Progress cards ── */}
        <p className="sol-divider" style={{ marginBottom: '0' }}>
          Current construction progress — two phases underway
        </p>

        <div className="sol-progress-grid">
          <div className="sol-progress-card">
            <div className="sol-progress-top">
              <div>
                <p className="sol-progress-name">JoMabel Medical Center</p>
                <p className="sol-progress-size">6,000 sqm</p>
              </div>
              <div className="sol-progress-pct">{nums.medicalProgress}%</div>
            </div>
            <p className="sol-progress-detail">
              Primary care, diagnostics, maternal health &amp; specialist services
            </p>
            <div className="sol-bar-track">
              <div className="sol-bar-fill" style={{ width: `${nums.medicalProgress}%` }} />
            </div>
            <div className="sol-bar-meta">
              <span>Under active construction</span>
              <span>{nums.medicalProgress}% complete</span>
            </div>
          </div>

          <div className="sol-progress-card">
            <div className="sol-progress-top">
              <div>
                <p className="sol-progress-name">Skill &amp; Training Center</p>
                <p className="sol-progress-size">10,000 sqm</p>
              </div>
              <div className="sol-progress-pct">{nums.trainingProgress}%</div>
            </div>
            <p className="sol-progress-detail">
              Clinical training, community health worker programs &amp; mentorship
            </p>
            <div className="sol-bar-track">
              <div className="sol-bar-fill" style={{ width: `${nums.trainingProgress}%` }} />
            </div>
            <div className="sol-bar-meta">
              <span>Foundation stage underway</span>
              <span>{nums.trainingProgress}% complete</span>
            </div>
          </div>
        </div>

        {/* ── Four pillars ── */}
        <p className="sol-divider" style={{ marginBottom: '0' }}>
          The JHF model — four pillars of impact
        </p>

        <div className="sol-pillars-grid">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <div key={i} className="sol-pillar">
                <div className="sol-pillar-icon">
                  <Icon />
                </div>
                <p className="sol-pillar-title">{pillar.title}</p>
                <p className="sol-pillar-desc">{pillar.desc}</p>
              </div>
            );
          })}
        </div>



      </div>
    </section>
  );
};

export default TheSolution;