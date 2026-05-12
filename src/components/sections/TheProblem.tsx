import React, { useEffect, useRef, useState } from 'react';

const TheProblem = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const [nums, setNums] = useState({
    percent: 0,
    ratio: 0,
    distance: 0,
    rank: 0,
    restrooms: 0,
    water: 0,
    ambulances: 0,
    cost: 0,
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

    animateTo('percent', 70, 1200);
    animateTo('ratio', 5000, 1400);
    animateTo('distance', 80, 1000);
    animateTo('restrooms', 24, 900);
    animateTo('water', 12, 800);
    animateTo('ambulances', 5, 600);
    animateTo('cost', 43, 1100);
    setTimeout(() => setNums(prev => ({ ...prev, rank: 6 })), 600);
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="tp-section">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');

        .tp-section {
          background: #FFFFFF;
          padding: 48px clamp(20px, 5vw, 56px);
          font-family: var(--font-body);
          color: var(--color-text);
        }

        .tp-inner {
          max-width: 1080px;
          margin: 0 auto;
        }

        /* ── Editorial header — Anton to match OurFocus ── */
        .tp-header {
          border-left: 5px solid var(--color-navy);
          padding-left: 20px;
          margin-bottom: 28px;
        }

        .tp-kicker {
          font-family: var(--font-body);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: var(--color-primary);
          margin: 0 0 10px;
        }

        .tp-headline {
          font-family: 'Anton', sans-serif;
          font-size: clamp(28px, 4vw, 48px);
          font-weight: 400;
          letter-spacing: 0.01em;
          text-transform: uppercase;
          line-height: 1.1;
          color: var(--color-navy);
          margin: 0;
        }

        /* ── Body — Inter to match OurFocus ── */
        .tp-body {
          font-family: var(--font-body);
          font-size: clamp(15px, 1.4vw, 17px);
          color: var(--color-text-muted);
          line-height: 1.8;
          max-width: 720px;
          margin: 0 0 52px;
          padding-left: 25px;
        }

        /* ── Section divider label ── */
        .tp-section-label {
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

        .tp-section-label::after {
          content: '';
          flex: 1;
          height: 1px;
          background: var(--color-border);
        }

        /* ── Stat rows ── */
        .tp-stats {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0;
          border-top: 2px solid var(--color-navy);
          margin-bottom: 40px;
        }

        .tp-stats-2 {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0;
          border-top: 1px solid var(--color-border);
        }

        .tp-stat {
          padding: 32px 28px 32px 0;
          border-right: 1px solid var(--color-border);
          display: flex;
          flex-direction: column;
          gap: 8px;
          transition: var(--transition);
        }

        .tp-stat:last-child {
          border-right: none;
          padding-right: 0;
        }

        .tp-stat:not(:first-child) {
          padding-left: 28px;
        }

        /* ── Icon chip ── */
        .tp-icon {
          width: 36px;
          height: 36px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 4px;
          flex-shrink: 0;
        }

        .tp-icon svg {
          width: 18px;
          height: 18px;
          fill: none;
          stroke-width: 2;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        /* Anton for stat numbers — matches focus-panel-title rhythm */
        .tp-num {
          font-family: 'Anton', sans-serif;
          font-size: clamp(26px, 3.2vw, 38px);
          font-weight: 400;
          letter-spacing: 0.02em;
          color: var(--color-navy);
          line-height: 1;
        }

        /* Inter for labels — matches focus-panel-description rhythm */
        .tp-lbl {
          font-family: var(--font-body);
          font-size: 13px;
          font-weight: 400;
          color: var(--color-text-muted);
          line-height: 1.5;
          max-width: 180px;
        }

        /* ── Source footnote ── */
        .tp-source {
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
          .tp-stats,
          .tp-stats-2 {
            grid-template-columns: repeat(2, 1fr);
          }
          .tp-stat {
            border-right: none;
            border-bottom: 1px solid var(--color-border);
            padding: 28px 0;
          }
          .tp-stat:not(:first-child) {
            padding-left: 0;
          }
          .tp-stat:last-child {
            border-bottom: none;
          }
        }

        @media (max-width: 480px) {
          .tp-stats,
          .tp-stats-2 {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="tp-inner">

        {/* Editorial header */}
        <div className="tp-header">
          <p className="tp-kicker">The Problem</p>
          <h2 className="tp-headline">
            The Healthcare Access Crisis<br />in Rural Nigeria
          </h2>
        </div>

        {/* Body */}
        <p className="tp-body">
          For too many families in rural Nigeria, basic and specialist healthcare
          remain dangerously out of reach — costing lives, deepening inequality,
          and leaving communities without the care they deserve.
        </p>

        {/* Row 1 */}
        <p className="tp-section-label">National &amp; regional statistics</p>

        <div className="tp-stats">

          <div className="tp-stat">
            <div className="tp-icon" style={{ background: 'var(--color-primary-light)' }}>
              <svg viewBox="0 0 24 24" style={{ stroke: 'var(--color-primary)' }}>
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <div className="tp-num">{nums.percent}%</div>
            <div className="tp-lbl">of rural Nigerians lack access to basic healthcare</div>
          </div>

          <div className="tp-stat">
            <div className="tp-icon" style={{ background: 'var(--color-primary-light)' }}>
              <svg viewBox="0 0 24 24" style={{ stroke: 'var(--color-primary)' }}>
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
              </svg>
            </div>
            <div className="tp-num">1:{nums.ratio.toLocaleString()}</div>
            <div className="tp-lbl">doctor-to-patient ratio in rural Southeast Nigeria</div>
          </div>

          <div className="tp-stat">
            <div className="tp-icon" style={{ background: 'var(--color-primary-light)' }}>
              <svg viewBox="0 0 24 24" style={{ stroke: 'var(--color-primary)' }}>
                <polygon points="3 11 22 2 13 21 11 13 3 11" />
              </svg>
            </div>
            <div className="tp-num">{nums.distance}km+</div>
            <div className="tp-lbl">average distance to nearest specialist care</div>
          </div>

          <div className="tp-stat">
            <div className="tp-icon" style={{ background: 'var(--color-primary-light)' }}>
              <svg viewBox="0 0 24 24" style={{ stroke: 'var(--color-primary)' }}>
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </div>
            <div className="tp-num">#{nums.rank}</div>
            <div className="tp-lbl">Nigeria ranks among highest maternal death rates globally</div>
          </div>

        </div>

        {/* Row 2 */}
        <p className="tp-section-label" style={{ marginTop: '36px' }}>
          Anambra state primary health centres — 66 facilities surveyed
        </p>

        <div className="tp-stats-2">

          <div className="tp-stat">
            <div className="tp-icon" style={{ background: 'var(--color-green-light)' }}>
              <svg viewBox="0 0 24 24" style={{ stroke: 'var(--color-green)' }}>
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                <line x1="8" y1="21" x2="16" y2="21" />
                <line x1="12" y1="17" x2="12" y2="21" />
              </svg>
            </div>
            <div className="tp-num">{nums.restrooms}/66</div>
            <div className="tp-lbl">PHCs with clean, functioning restrooms</div>
          </div>

          <div className="tp-stat">
            <div className="tp-icon" style={{ background: 'var(--color-navy-light)' }}>
              <svg viewBox="0 0 24 24" style={{ stroke: 'var(--color-navy-mid)' }}>
                <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
              </svg>
            </div>
            <div className="tp-num">{'< '}{nums.water}</div>
            <div className="tp-lbl">PHCs with reliable water supply</div>
          </div>

          <div className="tp-stat">
            <div className="tp-icon" style={{ background: 'var(--color-orange-light)' }}>
              <svg viewBox="0 0 24 24" style={{ stroke: 'var(--color-orange)' }}>
                <rect x="1" y="3" width="15" height="13" rx="2" />
                <path d="M16 8h4l3 3v5h-7V8z" />
                <circle cx="5.5" cy="18.5" r="2.5" />
                <circle cx="18.5" cy="18.5" r="2.5" />
              </svg>
            </div>
            <div className="tp-num">Only {nums.ambulances}</div>
            <div className="tp-lbl">PHCs with a functioning ambulance</div>
          </div>

          <div className="tp-stat">
            <div className="tp-icon" style={{ background: '#FEE2E2' }}>
              <svg viewBox="0 0 24 24" style={{ stroke: '#DC2626' }}>
                <line x1="12" y1="1" x2="12" y2="23" />
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
            </div>
            <div className="tp-num">{nums.cost}%</div>
            <div className="tp-lbl">of patients say cost prevents them from seeking care</div>
          </div>

        </div>



      </div>
    </section>
  );
};

export default TheProblem;