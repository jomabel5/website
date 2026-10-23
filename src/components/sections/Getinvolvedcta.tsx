import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Gift, HandHelping, Handshake } from 'lucide-react';
import childrenImage from '../../assests/images/outreach2.jpeg';

const GetInvolvedCTA = () => {
  const navigate = useNavigate();

  return (
    <section className="gi-section">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');

        .gi-section {
          font-family: var(--font-body);
          background: var(--color-surface);
        }

        .gi-headline {
          font-family: 'Anton', sans-serif;
          font-weight: 400;
          font-size: clamp(28px, 3.6vw, 38px);
          color: var(--color-navy);
          text-align: center;
          letter-spacing: 0.01em;
          padding: 56px 24px 40px;
          margin: 0;
        }

        .gi-grid {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr;
        }

        .gi-image {
          min-height: 320px;
        }
        .gi-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .gi-panel {
          padding: 48px 32px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          color: #ffffff;
        }
        .gi-panel-donate     { background: var(--color-primary); }
        .gi-panel-volunteer  { background: linear-gradient(135deg, #dbe9f7 0%, #eaf2fb 100%); color: var(--color-navy); }
        .gi-panel-partner    { background: var(--color-primary-dark); }

        .gi-icon {
          width: 48px;
          height: 48px;
          margin-bottom: 18px;
        }

        .gi-panel-title {
          font-family: var(--font-body);
          font-size: 20px;
          font-weight: 700;
          margin: 0 0 14px;
        }

        .gi-panel-desc {
          font-family: var(--font-body);
          font-size: 14px;
          line-height: 1.6;
          margin: 0 0 18px;
          opacity: 0.92;
        }

        .gi-panel-link {
          background: none;
          border: none;
          padding: 0;
          cursor: pointer;
          font-family: var(--font-body);
          font-size: 14px;
          font-weight: 600;
          color: inherit;
          text-decoration: underline;
          text-underline-offset: 3px;
        }

        @media (max-width: 900px) {
          .gi-grid { grid-template-columns: 1fr 1fr; }
          .gi-image { min-height: 220px; grid-column: 1 / -1; }
        }
        @media (max-width: 560px) {
          .gi-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <h2 className="gi-headline">Building Hope Through Healthcare</h2>

      <div className="gi-grid">
        <div className="gi-image">
          <img src={childrenImage} alt="Children in the community JoMabel serves" />
        </div>

        <div className="gi-panel gi-panel-donate">
          <Gift className="gi-icon" />
          <h3 className="gi-panel-title">Donate</h3>
          <p className="gi-panel-desc">
            Help support healthcare services, construction progress, medical
            outreach, and healthcare education initiatives.
          </p>
          <button className="gi-panel-link" onClick={() => navigate('/donate#payment-section')}>
            Donate Now
          </button>
        </div>

        <div className="gi-panel gi-panel-volunteer">
          <HandHelping className="gi-icon" />
          <h3 className="gi-panel-title">Volunteer</h3>
          <p className="gi-panel-desc">
            Support community healthcare initiatives through volunteer
            opportunities and outreach programs.
          </p>
          <button className="gi-panel-link" onClick={() => navigate('/contact')}>
            Volunteer Today
          </button>
        </div>

        <div className="gi-panel gi-panel-partner">
          <Handshake className="gi-icon" />
          <h3 className="gi-panel-title">Partner With Us</h3>
          <p className="gi-panel-desc">
            Collaborate with JoMabel Healthcare Foundation through
            sponsorships, partnerships, and community initiatives.
          </p>
          <button className="gi-panel-link" onClick={() => navigate('/contact')}>
            Become a Health Partner
          </button>
        </div>
      </div>
    </section>
  );
};

export default GetInvolvedCTA;