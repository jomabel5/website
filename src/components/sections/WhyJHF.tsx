import React, { useEffect, useRef, useState } from 'react';
import {
  Building2,
  UserCheck,
  Heart,
  MapPin,
  Globe2,
  TrendingUp,
} from 'lucide-react';

const differentiators = [
  {
    icon: Building2,
    title: 'Infrastructure Already Underway',
    desc: 'This is not a promise or a proposal. Two facilities are actively under construction — 70% and 30% complete. Donors can see real progress, real bricks, real buildings rising in Ufuma.',
  },
  {
    icon: UserCheck,
    title: 'Founder-Led Credibility',
    desc: 'Clara Ada Ogbaa launched this initiative from her own retirement savings. Her personal sacrifice, survival story, and decades of service give this foundation unmatched authenticity.',
  },
  {
    icon: Heart,
    title: 'Integrated Systems Approach',
    desc: 'We are not building a single clinic. We are building an ecosystem — medical center, training campus, outreach programs, digital health, and community education working as one.',
  },
  {
    icon: MapPin,
    title: 'Deeply Rooted Locally',
    desc: "Founded by someone from Ufuma, for Ufuma. Our work is driven by intimate knowledge of the community's needs, culture, and long-term vision — not outside assumptions.",
  },
  {
    icon: Globe2,
    title: 'Global Diaspora Network',
    desc: 'With a Texas-based 501(c)(3) foundation and strong ties to the Nigerian diaspora, JHF bridges global resources with local impact in ways few organizations can.',
  },
  {
    icon: TrendingUp,
    title: 'A Scalable Model',
    desc: 'The JHF campus model is designed to be replicated. What we build in Ufuma demonstrates what is possible for rural healthcare transformation across Nigeria and beyond.',
  },
];

const WhyJHF = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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

  return (
    <section ref={sectionRef} className="why-section">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');

        /* ── Wrapper ── */
        .why-section {
          background: var(--color-bg);
          padding: 48px clamp(20px, 5vw, 56px);
          font-family: var(--font-body);
          color: var(--color-text);
        }

        .why-inner {
          max-width: 1080px;
          margin: 0 auto;
        }

        /* ── Editorial header — left border, matches TheProblem ── */
        .why-header {
          border-left: 5px solid var(--color-navy);
          padding-left: 20px;
          margin-bottom: 28px;
        }

        .why-kicker {
          font-family: var(--font-body);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: var(--color-primary);
          margin: 0 0 10px;
        }

        /* Anton headline */
        .why-headline {
          font-family: 'Anton', sans-serif;
          font-size: clamp(28px, 4vw, 48px);
          font-weight: 400;
          letter-spacing: 0.01em;
          text-transform: uppercase;
          line-height: 1.1;
          color: var(--color-navy);
          margin: 0;
        }

        /* Body intro */
        .why-intro {
          font-family: var(--font-body);
          font-size: clamp(15px, 1.4vw, 17px);
          color: var(--color-text-muted);
          line-height: 1.8;
          max-width: 720px;
          margin: 0 0 52px;
          padding-left: 25px;
        }

        /* ── Section divider label — matches TheProblem .tp-section-label ── */
        .why-divider {
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

        .why-divider::after {
          content: '';
          flex: 1;
          height: 1px;
          background: var(--color-border);
        }

        /* ── Cards grid — 3 columns with vertical dividers ── */
        .why-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0;
          border-top: 2px solid var(--color-navy);
          margin-bottom: 0;
        }

        .why-card {
          padding: 36px 28px 36px 0;
          border-right: 1px solid var(--color-border);
          border-bottom: 1px solid var(--color-border);
          display: flex;
          flex-direction: column;
          gap: 10px;
          transition: var(--transition);
        }

        /* Remove right border on every 3rd card */
        .why-card:nth-child(3n) {
          border-right: none;
          padding-right: 0;
        }

        /* Remove border on every card that is not first child in row */
        .why-card:not(:nth-child(3n+1)) {
          padding-left: 28px;
        }

        /* Remove bottom border on last row */
        .why-card:nth-last-child(-n+3) {
          border-bottom: none;
        }

        /* ── Icon chip ── */
        .why-icon {
          width: 40px;
          height: 40px;
          border-radius: 8px;
          background: var(--color-primary-light);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-primary);
          flex-shrink: 0;
          margin-bottom: 4px;
          transition: var(--transition);
        }

        .why-card:hover .why-icon {
          background: var(--color-primary);
          color: var(--color-white);
        }

        .why-icon svg {
          width: 20px;
          height: 20px;
          stroke-width: 1.5;
        }

        /* Anton card title */
        .why-card-title {
          font-family: 'Anton', sans-serif;
          font-size: clamp(14px, 1.5vw, 17px);
          font-weight: 400;
          letter-spacing: 0.03em;
          text-transform: uppercase;
          color: var(--color-navy);
          margin: 0;
          line-height: 1.2;
          transition: var(--transition);
        }

        .why-card:hover .why-card-title {
          color: var(--color-primary);
        }

        /* Inter card desc */
        .why-card-desc {
          font-family: var(--font-body);
          font-size: 13px;
          font-weight: 400;
          color: var(--color-text-muted);
          line-height: 1.65;
          margin: 0;
        }

        /* ── Source footnote ── */
        .why-source {
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
          .why-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .why-card {
            padding: 28px 0;
            border-right: none;
            border-bottom: 1px solid var(--color-border);
          }
          .why-card:not(:nth-child(3n+1)) {
            padding-left: 0;
          }
          .why-card:nth-child(3n) {
            padding-right: 0;
          }
          /* Re-apply right border for 2-col layout — every odd card gets border */
          .why-card:nth-child(odd) {
            border-right: 1px solid var(--color-border);
            padding-right: 28px;
          }
          .why-card:nth-child(even) {
            padding-left: 28px;
          }
          /* Remove bottom border on last two */
          .why-card:nth-last-child(-n+2) {
            border-bottom: none;
          }
        }

        @media (max-width: 540px) {
          .why-grid {
            grid-template-columns: 1fr;
          }
          .why-card {
            border-right: none !important;
            padding-right: 0 !important;
            padding-left: 0 !important;
          }
          .why-card:nth-last-child(-n+2) {
            border-bottom: 1px solid var(--color-border);
          }
          .why-card:last-child {
            border-bottom: none;
          }
        }
      `}</style>

      <div className="why-inner">

        {/* ── Editorial header ── */}
        <div className="why-header">
          <p className="why-kicker">Why JHF</p>
          <h2 className="why-headline">
            More Than a Nonprofit.<br />A Movement Built to Last.
          </h2>
        </div>

        <p className="why-intro">
          JoMabel Healthcare Foundation stands apart from typical health organizations
          in ways that matter deeply to donors, partners, and the communities we serve.
        </p>

        {/* ── Divider label ── */}
        <p className="why-divider">What sets us apart — six reasons</p>

        {/* ── Cards grid ── */}
        <div className="why-grid">
          {differentiators.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="why-card">
                <div className="why-icon">
                  <Icon />
                </div>
                <h3 className="why-card-title">{item.title}</h3>
                <p className="why-card-desc">{item.desc}</p>
              </div>
            );
          })}
        </div>



      </div>
    </section>
  );
};

export default WhyJHF;