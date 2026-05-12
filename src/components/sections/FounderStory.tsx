import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import founderPhoto from '../../assests/images/founderphoto.jpeg';

const FounderStory = () => {
  const navigate = useNavigate();

  return (
    <section className="fs-section">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');

        /* ── Wrapper ── */
        .fs-section {
          background: var(--color-bg);
          padding: 48px clamp(20px, 5vw, 56px);
          font-family: var(--font-body);
          color: var(--color-text);
        }

        .fs-inner {
          max-width: 1080px;
          margin: 0 auto;
        }

        /* ── Editorial header — left border, matches TheProblem ── */
        .fs-header {
          border-left: 5px solid var(--color-navy);
          padding-left: 20px;
          margin-bottom: 28px;
        }

        .fs-kicker {
          font-family: var(--font-body);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: var(--color-primary);
          margin: 0 0 10px;
        }

        .fs-headline {
          font-family: 'Anton', sans-serif;
          font-size: clamp(28px, 4vw, 48px);
          font-weight: 400;
          letter-spacing: 0.01em;
          text-transform: uppercase;
          line-height: 1.1;
          color: var(--color-navy);
          margin: 0;
        }

        /* ── Section divider label ── */
        .fs-divider {
          font-family: var(--font-body);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--color-text-light);
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 0;
        }

        .fs-divider::after {
          content: '';
          flex: 1;
          height: 1px;
          background: var(--color-border);
        }

        /* ── Two-column layout ── */
        .fs-layout {
          display: grid;
          grid-template-columns: auto 1fr;
          gap: 48px;
          align-items: flex-start;
          border-top: 2px solid var(--color-navy);
          padding-top: 36px;
        }

        /* ── Left: image column ── */
        .fs-image-col {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          padding-right: 48px;
          border-right: 1px solid var(--color-border);
        }

        .fs-image-wrap {
          width: 110px;
          height: 110px;
          border-radius: 50%;
          overflow: hidden;
          box-shadow: var(--shadow-md);
          flex-shrink: 0;
        }

        .fs-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
        }

        .fs-name {
          font-family: 'Anton', sans-serif;
          font-size: 13px;
          font-weight: 400;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          color: var(--color-navy);
          text-align: center;
          line-height: 1.3;
          margin: 0;
        }

        .fs-title {
          font-family: var(--font-body);
          font-size: 11px;
          color: var(--color-text-light);
          text-align: center;
          letter-spacing: 0.3px;
          margin: 0;
        }

        /* ── Right: text column ── */
        .fs-content-col {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .fs-text {
          font-family: var(--font-body);
          font-size: clamp(15px, 1.4vw, 17px);
          color: var(--color-text-muted);
          line-height: 1.8;
          margin: 0;
        }

        /* ── CTA link ── */
        .fs-btn {
          background: transparent;
          color: var(--color-primary);
          border: none;
          padding: 0;
          font-family: var(--font-body);
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: var(--transition);
          margin-top: 8px;
        }

        .fs-btn:hover {
          gap: 14px;
          color: var(--color-primary-dark);
        }

        /* ── Responsive ── */
        @media (max-width: 700px) {
          .fs-layout {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          .fs-image-col {
            flex-direction: row;
            align-items: center;
            padding-right: 0;
            border-right: none;
            border-bottom: 1px solid var(--color-border);
            padding-bottom: 24px;
            gap: 20px;
          }
          .fs-name,
          .fs-title {
            text-align: left;
          }
        }
      `}</style>

      <div className="fs-inner">

        {/* ── Editorial header ── */}
        <div className="fs-header">
          <p className="fs-kicker">Founder's Story</p>
          <h2 className="fs-headline">A Mission Born<br />from Survival</h2>
        </div>

        {/* ── Divider ── */}
        <p className="fs-divider">Dr. Clara Ada Ogbaa, Ed.D. — Founder, JoMabel Healthcare Foundation</p>

        {/* ── Layout ── */}
        <div className="fs-layout">

          {/* Left: photo + name */}
          <div className="fs-image-col">
            <div className="fs-image-wrap">
              <img
                src={founderPhoto}
                alt="Clara Ada Ogbaa, Ed.D. — Founder, JoMabel Healthcare Foundation"
                className="fs-img"
              />
            </div>
            <p className="fs-name">Clara Ada<br />Ogbaa, Ed.D.</p>
            <p className="fs-title">Founder & Executive Director</p>
          </div>

          {/* Right: text */}
          <div className="fs-content-col">
            <p className="fs-text">
              Dr. Clara Ada Ogbaa founded JoMabel Healthcare Foundation based on the belief
              that every person deserves access to quality healthcare regardless of where
              they are born or what they can afford. A two-time cancer survivor and kidney
              transplant recipient, Clara has experienced firsthand the life-saving power of
              quality medical care and, as a result, began building a healthcare center in
              Ufuma, Anambra State, using her own retirement and personal funds.
            </p>
            <p className="fs-text">
              Today, Clara's vision is becoming reality. She cares for the sick, trains
              local healthcare workers, and is transforming healthcare in rural southeastern
              Nigeria — saving lives and building a movement toward health equity. We carry
              forward her legacy and vision.
            </p>
            <button className="fs-btn" onClick={() => navigate('/founder-story')}>
              Read Her Full Story
              <ArrowRight size={14} />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};

export default FounderStory;