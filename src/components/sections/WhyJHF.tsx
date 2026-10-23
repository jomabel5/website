import React from 'react';
import { CheckCheck } from 'lucide-react';
import whyImage from '../../assests/images/outreach2.jpeg';

const reasons = [
  { title: 'Infrastructure Already Underway', desc: 'Two facilities are actively under construction — real progress, not just a proposal.' },
  { title: 'Founder-Led Credibility', desc: "Clara Ada Ogbaa launched this from her own retirement savings and personal survival story." },
  { title: 'Integrated Systems Approach', desc: 'A full ecosystem — medical center, training campus, outreach, digital health, and education working as one.' },
  { title: 'Deeply Rooted Locally', desc: 'Founded by someone from Ufuma, for Ufuma, driven by intimate knowledge of the community.' },
  { title: 'Global Diaspora Network', desc: 'A Texas-based 501(c)(3) with strong ties to the Nigerian diaspora, bridging global resources with local impact.' },
  { title: 'A Scalable Model', desc: 'Designed to be replicated across rural healthcare communities in Nigeria and beyond.' },
];

const WhyJHF = () => {
  return (
    <section className="why-section">
      <style>{`
        .why-section {
          font-family: var(--font-body);
          background: var(--color-bg);
          padding: 72px clamp(24px, 5vw, 72px);
        }

        .why-container {
          max-width: 1160px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 460px 1fr;
          gap: 64px;
          align-items: start;
        }

        .why-image {
          width: 100%;
          height: auto;
          aspect-ratio: 4 / 3;
          object-fit: cover;
          border-radius: 4px;
          display: block;
        }

        .why-headline {
          font-family: var(--font-body);
          font-size: clamp(26px, 3vw, 38px);
          font-weight: 700;
          color: var(--color-navy);
          margin: 0 0 20px;
        }

        .why-intro {
          font-family: var(--font-body);
          font-size: clamp(15px, 1.3vw, 17px);
          color: var(--color-text-muted);
          line-height: 1.7;
          margin: 0 0 28px;
        }

        .why-list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 18px;
        }
        .why-list li {
          display: flex;
          align-items: flex-start;
          gap: 12px;
        }
        .why-check {
          color: var(--color-green);
          flex-shrink: 0;
          margin-top: 2px;
        }
        .why-item-title {
          font-family: var(--font-body);
          font-size: clamp(14px, 1.2vw, 16px);
          font-weight: 700;
          color: var(--color-navy);
          margin: 0 0 2px;
        }
        .why-item-desc {
          font-family: var(--font-body);
          font-size: clamp(13px, 1.1vw, 15px);
          color: var(--color-text-muted);
          line-height: 1.55;
          margin: 0;
        }

        @media (max-width: 860px) {
          .why-container {
            grid-template-columns: 1fr;
            gap: 32px;
          }
        }
      `}</style>

      <div className="why-container">
        <img src={whyImage} alt="Community in Ufuma" className="why-image" />

        <div>
          <h2 className="why-headline">Why JHF?</h2>
          <p className="why-intro">
            JoMabel Healthcare Foundation stands apart from typical health
            organizations in ways that matter deeply to donors, partners, and
            the communities we serve.
          </p>

          <ul className="why-list">
            {reasons.map((reason, i) => (
              <li key={i}>
                <CheckCheck size={18} className="why-check" />
                <div>
                  <p className="why-item-title">{reason.title}</p>
                  <p className="why-item-desc">{reason.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhyJHF;