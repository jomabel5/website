import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import outreach4 from '../../assests/images/outreach4.jpeg';

const CampaignBanner = () => {
  const navigate = useNavigate();

  return (
    <section className="cb-wrap">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');

        .cb-wrap {
          display: flex;
          width: 100%;
          min-height: 340px;
          font-family: var(--font-body);
        }

        /* ── Left: photo half ── */
        .cb-image-half {
          flex: 1;
          min-width: 0;
        }
        .cb-bg {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        /* ── Right: solid text half ── */
        .cb-text-half {
          flex: 1;
          background: var(--color-primary-dark);
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 40px clamp(28px, 5vw, 72px);
        }

        .cb-kicker {
          font-family: var(--font-body);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: rgba(255,255,255,0.65);
          margin: 0 0 14px;
        }

        .cb-title {
          font-family: 'Anton', sans-serif;
          font-weight: 400;
          font-size: clamp(26px, 3.4vw, 36px);
          color: #ffffff;
          letter-spacing: 0.01em;
          line-height: 1.15;
          margin: 0 0 16px;
          max-width: 520px;
        }

        .cb-desc {
          font-family: var(--font-body);
          font-size: clamp(13px, 1.2vw, 15px);
          color: rgba(255,255,255,0.85);
          line-height: 1.65;
          max-width: 480px;
          margin: 0 0 24px;
        }

        .cb-btn-primary {
          background: #ffffff;
          color: var(--color-primary-dark);
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
          width: fit-content;
        }
        .cb-btn-primary:hover {
          background: rgba(255,255,255,0.88);
          transform: translateY(-1px);
        }

        /* ── Responsive: stack on mobile, tighter spacing ── */
        @media (max-width: 768px) {
          .cb-wrap { flex-direction: column; min-height: auto; }
          .cb-image-half { height: 160px; }
          .cb-text-half { padding: 24px clamp(20px, 6vw, 32px) 28px; }
          .cb-kicker { margin-bottom: 10px; }
          .cb-title { margin-bottom: 12px; }
          .cb-desc { margin-bottom: 18px; }
          .cb-btn-primary { width: 100%; justify-content: center; }
        }
      `}</style>

      <div className="cb-image-half">
        <img src={outreach4} alt="JoMabel Healthcare Foundation medical outreach" className="cb-bg" />
      </div>

      <div className="cb-text-half">
        <p className="cb-kicker">Active Campaign</p>
        <h2 className="cb-title">
          Help Us Complete and Activate the Healthcare Initiative Beginning in Ufuma
        </h2>
        <p className="cb-desc">
          Your support will help complete the facilities, equip the JoMabel Medical Center and Training Center, and
          launch a community-led rural health and workforce system that delivers compassionate care, trains local
          professionals, and supports long-term community health programs across Southeast Nigeria and beyond.
        </p>
        <button className="cb-btn-primary" onClick={() => navigate('/donate#payment-section')}>
          Donate Now <ArrowRight size={15} />
        </button>
      </div>
    </section>
  );
};

export default CampaignBanner;