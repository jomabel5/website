import React, { useState, useEffect } from 'react';
import testimonialBg from '../../assests/images/testimonial-bg.avif';

// Photos: when a real photo of the person arrives (used with their permission),
// import it and add it as `image` on that person's entry below.
// Until then the card shows the person's initials in a circle.

interface Testimony {
  id: number;
  quote: string;
  name: string;
  role: string;
  image?: string;
}

const testimonies: Testimony[] = [
  {
    id: 1,
    quote: "I'm excited that JoMabel Medical & Training Center is bringing knowledge and hope to our forgotten town and villages, paving the way for a healthier future in Ufuma and surrounding communities.",
    name: "Chukwudi Okonkwo",
    role: "Community Member, Ufuma",
  },
  {
    id: 2,
    quote: "For vulnerable families in Ufuma, the upcoming medical and training center by JoMabel Healthcare Foundation is a blessing.",
    name: "Mercy Igwegbe",
    role: "Community Member",
  },
  {
    id: 3,
    quote: "JoMabel Healthcare Foundation is bringing care, healing, and renewed hope to struggling families in Ufuma.",
    name: "Hope Ilorah",
    role: "Community Member",
  },
  {
    id: 4,
    quote: "In our village, accessing medical care has been tough for many of us. Thanks to JoMabel Healthcare Foundation's medical outreach on January 2, 2025, my family and many others were able to receive treatment that we couldn't have afforded on our own.",
    name: "Emma Chukwu",
    role: "Community Member",
  },
  {
    id: 5,
    quote: "JoMabel Healthcare Foundation in Ufuma is a game-changer for the poor, bringing trained professionals and new jobs to improve lives in Orumba North, Orumba South, and nearby communities.",
    name: "Engr. Samuel",
    role: "Community Chairman",
  },
];

const TITLES: string[] = ['engr', 'dr', 'mr', 'mrs', 'ms', 'prof', 'chief', 'barr', 'rev', 'pastor'];

const getInitials = (name: string): string => {
  const parts: string[] = name
    .split(/\s+/)
    .filter((p: string) => !TITLES.includes(p.replace(/\./g, '').toLowerCase()));
  return parts
    .slice(0, 2)
    .map((p: string) => p.charAt(0).toUpperCase())
    .join('');
};

const Testimonies = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonies.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const current = testimonies[index];

  return (
    <section className="tm-section">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');

        .tm-section {
          position: relative;
          font-family: var(--font-body);
          min-height: 460px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background-image: url(${testimonialBg});
          background-size: cover;
          background-position: center;
        }

        .tm-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(17,24,39,0.78) 0%, rgba(29,143,212,0.55) 100%);
        }

        .tm-content {
          position: relative;
          z-index: 2;
          max-width: 720px;
          margin: 0 auto;
          padding: 64px 24px;
          text-align: center;
        }

        .tm-headline {
          font-family: 'Anton', sans-serif;
          font-weight: 400;
          font-size: clamp(28px, 3.6vw, 38px);
          color: #ffffff;
          line-height: 1.25;
          margin: 0 0 32px;
        }

        .tm-avatar {
          width: 68px;
          height: 68px;
          border-radius: 50%;
          object-fit: cover;
          border: 3px solid rgba(255,255,255,0.8);
          margin: 0 auto 18px;
          display: block;
        }

        .tm-initials {
          width: 68px;
          height: 68px;
          border-radius: 50%;
          border: 3px solid rgba(255,255,255,0.8);
          background: rgba(255,255,255,0.18);
          color: #ffffff;
          font-family: var(--font-body);
          font-size: 22px;
          font-weight: 700;
          letter-spacing: 0.04em;
          margin: 0 auto 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          user-select: none;
        }

        .tm-name {
          font-family: var(--font-body);
          font-size: 18px;
          font-weight: 700;
          color: #ffffff;
          margin: 0 0 4px;
        }

        .tm-role {
          font-family: var(--font-body);
          font-size: 13px;
          font-weight: 600;
          color: rgba(255,255,255,0.85);
          margin: 0 0 20px;
        }

        .tm-quote {
          font-family: var(--font-body);
          font-size: clamp(14px, 1.3vw, 16px);
          color: rgba(255,255,255,0.92);
          line-height: 1.75;
          margin: 0 0 28px;
        }

        .tm-dots {
          display: flex;
          justify-content: center;
          gap: 8px;
        }
        .tm-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(255,255,255,0.4);
          border: none;
          padding: 0;
          cursor: pointer;
          transition: background 0.25s ease, transform 0.25s ease;
        }
        .tm-dot.active {
          background: #ffffff;
          transform: scale(1.2);
        }

        @media (max-width: 600px) {
          .tm-content { padding: 48px 20px; }
        }
      `}</style>

      <div className="tm-overlay" />

      <div className="tm-content">
        <h2 className="tm-headline">Stories From the Ground <br></br>Where Care Meets Real Lives</h2>

        {current.image ? (
          <img src={current.image} alt={current.name} className="tm-avatar" />
        ) : (
          <div className="tm-initials" aria-hidden="true">
            {getInitials(current.name)}
          </div>
        )}
        <p className="tm-name">{current.name}</p>
        <p className="tm-role">{current.role}</p>
        <p className="tm-quote">"{current.quote}"</p>

        <div className="tm-dots">
          {testimonies.map((t, i) => (
            <button
              key={t.id}
              className={`tm-dot ${i === index ? 'active' : ''}`}
              onClick={() => setIndex(i)}
              aria-label={`Show testimonial from ${t.name}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonies;