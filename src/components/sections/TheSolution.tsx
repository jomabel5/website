import React from 'react';
import { CheckCheck } from 'lucide-react';
import solutionImage from '../../assests/images/outreach1.jpeg';

const checklist = [
  'Two major facilities are already under active construction the JoMabel Medical Center (6,000 sqm) and the Skill & Training Center (10,000 sqm).',
  'The Medical Center is rapidly advancing, with core structures approximately 50% complete on-site in Ufuma.',
  'The Training Center is underway, with foundation work laying the groundwork for long-term medical education and local workforce development.',
  'Every stage completed is a direct step toward expanding healthcare access for underserved communities.',
];

const TheSolution = () => {
  return (
    <section className="sol-section">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');

        .sol-section {
          font-family: var(--font-body);
          background: linear-gradient(90deg, #dce9f6 0%, #e9f5ec 100%);
          padding: 72px clamp(24px, 5vw, 72px);
        }

        .sol-container {
          max-width: 1160px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 460px 1fr;
          gap: 64px;
          align-items: start;
        }

        .sol-image-wrap {
          width: 100%;
        }
        .sol-image {
          width: 100%;
          height: auto;
          aspect-ratio: 1 / 1;
          object-fit: cover;
          border-radius: 4px;
          box-shadow: 0 8px 24px rgba(0,0,0,0.12);
          display: block;
        }

       .sol-kicker {
  font-family: var(--font-body);
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  color: var(--color-primary);
  margin: 0 0 12px;
}

       .sol-headline {
  font-family: 'Anton', sans-serif;
  font-weight: 400;
  font-size: clamp(24px, 3vw, 32px);
  color: var(--color-navy);
  line-height: 1.15;
  letter-spacing: 0.01em;
  margin: 0 0 20px;
}

        .sol-intro {
          font-family: var(--font-body);
          font-size: clamp(15px, 1.3vw, 17px);
          color: var(--color-text-muted);
          line-height: 1.7;
          margin: 0 0 28px;
        }

        .sol-checklist {
          list-style: none;
          margin: 0 0 28px;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 18px;
        }
        .sol-checklist li {
          display: flex;
          align-items: flex-start;
          gap: 12px;
        }
        .sol-check-icon {
          color: var(--color-primary);
          flex-shrink: 0;
          margin-top: 2px;
        }
        .sol-checklist span {
          font-family: var(--font-body);
          font-size: clamp(14px, 1.2vw, 16px);
          color: var(--color-text-muted);
          line-height: 1.6;
        }

        .sol-closing {
          font-family: var(--font-body);
          font-size: clamp(14px, 1.2vw, 16px);
          color: var(--color-text-muted);
          line-height: 1.7;
          margin: 0;
        }

        @media (max-width: 860px) {
          .sol-container {
            grid-template-columns: 1fr;
            gap: 36px;
          }
          .sol-image-wrap {
            max-width: 420px;
            margin: 0 auto;
          }
        }
      `}</style>

      <div className="sol-container">
        <div className="sol-image-wrap">
          <img
            src={solutionImage}
            alt="JoMabel Healthcare Foundation campus in Ufuma"
            className="sol-image"
          />
        </div>

        <div>
          <p className="sol-kicker">The Solution</p>
          <h2 className="sol-headline">From Blueprint to Bricks: Healthcare Development in Ufuma</h2>
          <p className="sol-intro">
            What was once a vision on paper is now a healthcare campus under
            development for rural communities.
          </p>

          <ul className="sol-checklist">
            {checklist.map((item, i) => (
              <li key={i}>
                <CheckCheck size={18} className="sol-check-icon" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <p className="sol-closing">
            Construction and development are currently underway.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TheSolution;