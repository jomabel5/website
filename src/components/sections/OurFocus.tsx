import React from 'react';
import { useNavigate } from 'react-router-dom';

const OurFocus = () => {
  const navigate = useNavigate();

  const focusCards = [
    {
      title: "Our History",
      description: "Look at our history at JoMabel Healthcare Foundation",
      buttonText: "LEARN MORE",
      buttonLink: "/our-story",
      bgVar: "var(--color-primary)"
    },
    {
      title: "Get Involved",
      description: "Join us in bringing life-saving healthcare closer to families in need",
      buttonText: "LEARN MORE",
      buttonLink: "/campaign",
      bgVar: "var(--color-primary-dark)"
    },
    {
      title: "Leadership",
      description: "Meet our board of directors who oversee JoMabel Healthcare Foundation",
      buttonText: "LEARN MORE",
      buttonLink: "/leadership",
      bgVar: "var(--color-navy-mid)"
    }
  ];

  return (
    <section className="our-focus-section">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');

        .our-focus-section {
          font-family: var(--font-body);
        }

        /* ── Top white intro ── */
        .focus-intro {
          background-color: var(--color-bg);
          padding: var(--section-padding-y) var(--section-padding-x);
          text-align: center;
        }

        .focus-headline {
          font-family: 'Anton', sans-serif;
          font-size: clamp(26px, 3.5vw, 44px);
          font-weight: 400;
          color: var(--color-navy);
          margin: 0 auto 28px;
          max-width: 700px;
          line-height: 1.15;
          letter-spacing: 0.01em;
          text-transform: uppercase;
        }

        .focus-mission {
          font-family: var(--font-body);
          font-size: clamp(15px, 1.4vw, 18px);
          color: var(--color-text-muted);
          max-width: 680px;
          margin: 0 auto;
          line-height: 1.8;
          font-weight: 400;
        }

        /* ── Three-panel strip ── */
        .focus-panels {
          display: flex;
          width: 100%;
        }

        .focus-panel {
          flex: 1;
          padding: 56px 40px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .focus-panel-title {
          font-family: 'Anton', sans-serif;
          font-size: clamp(17px, 1.8vw, 22px);
          font-weight: 400;
          color: var(--color-white);
          margin: 0 0 18px;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }

        .focus-panel-description {
          font-family: var(--font-body);
          font-size: clamp(13px, 1.2vw, 15px);
          color: rgba(255,255,255,0.88);
          line-height: 1.65;
          margin: 0 0 32px;
          max-width: 280px;
          font-weight: 400;
        }

        .focus-panel-btn {
          background: transparent;
          border: 1.5px solid rgba(255,255,255,0.80);
          border-radius: 0;
          color: var(--color-white);
          font-family: var(--font-body);
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 1.8px;
          text-transform: uppercase;
          cursor: pointer;
          padding: 12px 28px;
          transition: var(--transition);
        }

        .focus-panel-btn:hover {
          background: rgba(255,255,255,0.15);
          border-color: var(--color-white);
        }

        /* ── Responsive ── */
        @media (max-width: 768px) {
          .focus-panels { flex-direction: column; }
          .focus-panel  { padding: 48px 32px; }
        }
      `}</style>

      <div className="focus-intro">
        <h1 className="focus-headline">
          Welcome to JoMabel Healthcare Foundation
        </h1>
        <p className="focus-mission">
          Our mission is to promote the physical health, mental wellness, and healthcare access
          of people living in underserved communities, with a primary focus on Ufuma,
          Anambra State, Nigeria, and surrounding regions.
        </p>
      </div>

      <div className="focus-panels">
        {focusCards.map((card, index) => (
          <div
            key={index}
            className="focus-panel"
            style={{ background: card.bgVar }}
          >
            <h3 className="focus-panel-title">{card.title}</h3>
            <p className="focus-panel-description">{card.description}</p>
            <button
              className="focus-panel-btn"
              onClick={() => navigate(card.buttonLink)}
            >
              {card.buttonText}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurFocus;