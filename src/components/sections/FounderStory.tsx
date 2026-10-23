import React from 'react';
import { useNavigate } from 'react-router-dom';
import founderPhoto from '../../assests/images/founderphoto.jpeg';

const FounderStory = () => {
  const navigate = useNavigate();

  return (
    <section className="fs-section">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');

        .fs-section {
          font-family: var(--font-body);
          background: var(--color-surface);
          padding: 72px clamp(24px, 5vw, 72px);
        }

        .fs-container {
          max-width: 640px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .fs-image-wrap {
          width: 100px;
          margin: 0 auto 28px;
        }
        .fs-img {
          width: 100%;
          aspect-ratio: 3 / 4;
          object-fit: cover;
          border-radius: 4px;
          box-shadow: 0 8px 24px rgba(0,0,0,0.10);
          display: block;
        }

      .fs-eyebrow {
          font-family: 'Anton', sans-serif;
          font-weight: 400;
          font-size: clamp(28px, 3.6vw, 38px);
          letter-spacing: 0.01em;
          text-align: center;
          color: var(--color-navy);
          margin: 0 0 20px;
        }

        .fs-name {
          font-family: 'Anton', sans-serif;
          font-weight: 400;
          font-size: clamp(28px, 3.6vw, 38px);
          letter-spacing: 0.01em;
          color: var(--color-navy);
          margin: 0 0 20px;
        }

        .fs-brief {
          font-family: var(--font-body);
          font-size: clamp(15px, 1.3vw, 17px);
          color: var(--color-text-muted);
          line-height: 1.7;
          margin: 0 0 28px;
        }

        .fs-btn {
          background: var(--color-primary);
          color: #ffffff;
          border: none;
          border-radius: var(--btn-radius);
          padding: 14px 32px;
          font-family: var(--font-body);
          font-size: 14px;
          font-weight: 700;
          cursor: pointer;
          transition: var(--transition);
        }
        .fs-btn:hover {
          background: var(--color-primary-dark);
        }
      `}</style>

    <div className="fs-container">
        <p className="fs-eyebrow">Founder's Story</p>

        <div className="fs-image-wrap">
          <img
            src={founderPhoto}
            alt="Dr. Clara Ada Ogbaa — Founder, JoMabel Healthcare Foundation"
            className="fs-img"
          />
        </div>

        <div>
        
         
          <p className="fs-brief">
            Dr. Clara Ada Ogbaa founded JoMabel Healthcare Foundation on the belief
            that everyone deserves quality healthcare, regardless of where they're
            born. A two-time cancer survivor herself, she's now turning that belief
            into a working healthcare campus in Ufuma, Nigeria.
          </p>
          <button className="fs-btn" onClick={() => navigate('/founder-story')}>
            Read Her Full Story
          </button>
        </div>
      </div>
    </section>
  );
};

export default FounderStory;