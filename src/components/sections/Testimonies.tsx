import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

import outreachImage from '../../assests/images/outreach2.jpeg';
import maternalImage from '../../assests/images/maternal-and-child-health-.jpg';
import roseImage     from '../../assests/images/Rose.jpg';

const testimonies = [
  {
    id: 1,
    quote: "I'm excited that JoMabel Medical & Training Center is bringing knowledge and hope to our forgotten town and villages, paving the way for a healthier future in Ufuma and surrounding communities.",
    name: "Chukwudi Okonkwo",
    role: "Community Member, Ufuma",
    image: outreachImage,
  },
  {
    id: 2,
    quote: "For vulnerable families in Ufuma, the upcoming medical and training center by JoMabel Healthcare Foundation is a blessing.",
    name: "Mercy Igwegbe",
    role: "Community Member",
    image: maternalImage,
  },
  {
    id: 3,
    quote: "JoMabel Healthcare Foundation is bringing care, healing, and renewed hope to struggling families in Ufuma.",
    name: "Hope Ilorah",
    role: "Community Member",
    image: roseImage,
  },
  {
    id: 4,
    quote: "In our village, accessing medical care has been tough for many of us. Thanks to JoMabel Healthcare Foundation's medical outreach on January 2, 2025, my family and many others were able to receive treatment that we couldn't have afforded on our own.",
    name: "Emma Chukwu",
    role: "Community Member",
    image: outreachImage,
  },
  {
    id: 5,
    quote: "JoMabel Healthcare Foundation in Ufuma is a game-changer for the poor, bringing trained professionals and new jobs to improve lives in Orumba North, Orumba South, and nearby communities.",
    name: "Engr. Samuel",
    role: "Community Chairman",
    image: maternalImage,
  },
];

const Testimonies = () => {
  const [isVisible, setIsVisible] = useState(false);
  const scrollRef  = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.innerWidth < 768) {
      const t = setTimeout(() => setIsVisible(true), 100);
      return () => clearTimeout(t);
    }
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const scroll = (dir: 'left' | 'right') => {
    scrollRef.current?.scrollBy({ left: dir === 'left' ? -400 : 400, behavior: 'smooth' });
  };

  return (
    <div ref={sectionRef} className={`tm-page ${isVisible ? 'tm-visible' : ''}`}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Anton&family=Playfair+Display:wght@700&display=swap');

        /* ─────────────────────────────────────────
           BASE
        ───────────────────────────────────────── */
        .tm-page {
          font-family: var(--font-body);
          background: var(--color-bg);
          width: 100%;
          overflow-x: hidden;
        }

        /* ─────────────────────────────────────────
           EDITORIAL HEADER
        ───────────────────────────────────────── */
        .tm-header {
          padding: 80px clamp(24px, 5vw, 72px) 56px;
          background: var(--color-bg);
        }
        .tm-header-inner {
          max-width: 1200px;
          margin: 0 auto;
          border-left: 4px solid var(--color-navy);
          padding-left: 20px;
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .tm-page.tm-visible .tm-header-inner {
          opacity: 1;
          transform: translateY(0);
        }
        .tm-kicker {
          font-family: var(--font-body);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: var(--color-primary);
          margin: 0 0 10px;
        }
        .tm-headline {
          font-family: 'Anton', sans-serif;
          font-size: clamp(28px, 4vw, 48px);
          font-weight: 400;
          letter-spacing: 0.01em;
          text-transform: uppercase;
          line-height: 1.1;
          color: var(--color-navy);
          margin: 0 0 14px;
        }
        .tm-subtext {
          font-family: var(--font-body);
          font-size: clamp(14px, 1.3vw, 16px);
          color: var(--color-text-muted);
          line-height: 1.75;
          max-width: 580px;
          margin: 0;
        }

        /* ─────────────────────────────────────────
           SCROLL TRACK
        ───────────────────────────────────────── */
        .tm-scroll-wrap {
          position: relative;
          padding: 0 clamp(24px, 5vw, 72px);
          margin-bottom: 0;
        }

        /* nav arrows */
        .tm-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: var(--color-bg);
          border: 1.5px solid var(--color-border-dark);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 10;
          box-shadow: var(--shadow-sm);
          transition: var(--transition);
        }
        .tm-arrow:hover {
          background: var(--color-navy);
          border-color: var(--color-navy);
          color: #ffffff;
        }
        .tm-arrow:hover svg { stroke: #ffffff; }
        .tm-arrow svg { stroke: var(--color-navy); transition: stroke 0.2s; }
        .tm-arrow-left  { left:  clamp(0px, 1vw, 16px); }
        .tm-arrow-right { right: clamp(0px, 1vw, 16px); }

        .tm-scroll {
          overflow-x: auto;
          scroll-behavior: smooth;
          scrollbar-width: thin;
          scrollbar-color: var(--color-primary) var(--color-surface-2);
          -webkit-overflow-scrolling: touch;
          padding: 8px 4px 32px;
        }
        .tm-scroll::-webkit-scrollbar       { height: 4px; }
        .tm-scroll::-webkit-scrollbar-track { background: var(--color-surface-2); border-radius: 10px; }
        .tm-scroll::-webkit-scrollbar-thumb { background: var(--color-primary); border-radius: 10px; }

        .tm-track {
          display: flex;
          gap: 0;
          width: max-content;
          border-top: 2px solid var(--color-navy);
        }

        /* ─────────────────────────────────────────
           TESTIMONY CARD
        ───────────────────────────────────────── */
        .tm-card {
          width: 380px;
          flex-shrink: 0;
          padding: 36px 32px 40px;
          border-right: 1px solid var(--color-border);
          display: flex;
          flex-direction: column;
          background: var(--color-bg);
          transition: background 0.25s ease;
          opacity: 0;
          transform: translateY(28px);
        }
        .tm-card:last-child { border-right: none; }
        .tm-card:hover { background: var(--color-surface); }

        /* animation */
        .tm-page.tm-visible .tm-card {
          opacity: 1;
          transform: translateY(0);
          transition: opacity 0.55s ease, transform 0.55s ease, background 0.25s ease;
        }
        .tm-page.tm-visible .tm-card:nth-child(1) { transition-delay: 0.15s; }
        .tm-page.tm-visible .tm-card:nth-child(2) { transition-delay: 0.25s; }
        .tm-page.tm-visible .tm-card:nth-child(3) { transition-delay: 0.35s; }
        .tm-page.tm-visible .tm-card:nth-child(4) { transition-delay: 0.45s; }
        .tm-page.tm-visible .tm-card:nth-child(5) { transition-delay: 0.55s; }

        .tm-card-quote-icon {
          color: var(--color-primary);
          opacity: 0.30;
          margin-bottom: 20px;
          flex-shrink: 0;
        }

        .tm-card-text {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(14px, 1.2vw, 16px);
          font-weight: 700;
          color: var(--color-navy);
          line-height: 1.65;
          margin: 0 0 28px;
          flex: 1;
          /* clamp to 5 lines */
          display: -webkit-box;
          -webkit-line-clamp: 5;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .tm-card-author {
          display: flex;
          align-items: center;
          gap: 14px;
          padding-top: 20px;
          border-top: 1px solid var(--color-border);
        }
        .tm-card-avatar {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          object-fit: cover;
          flex-shrink: 0;
          border: 2px solid var(--color-primary-light);
        }
        .tm-card-name {
          font-family: var(--font-body);
          font-size: 14px;
          font-weight: 700;
          color: var(--color-navy);
          margin: 0 0 3px;
        }
        .tm-card-role {
          font-family: var(--font-body);
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.5px;
          color: var(--color-text-light);
          text-transform: uppercase;
          margin: 0;
        }

        /* ─────────────────────────────────────────
           BOTTOM CTA — matches system style
        ───────────────────────────────────────── */
        .tm-cta {
          background: var(--color-surface);
          padding: 64px clamp(24px, 5vw, 72px);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 40px;
          flex-wrap: wrap;
          border-top: 1px solid var(--color-border);
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.6s ease, transform 0.6s ease;
          transition-delay: 0.6s;
        }
        .tm-page.tm-visible .tm-cta {
          opacity: 1;
          transform: translateY(0);
        }
        .tm-cta-left {}
        .tm-cta-kicker {
          font-family: var(--font-body);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: var(--color-primary);
          margin: 0 0 10px;
        }
        .tm-cta-title {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(20px, 2.4vw, 28px);
          font-weight: 700;
          color: var(--color-navy);
          margin: 0 0 10px;
          line-height: 1.2;
        }
        .tm-cta-desc {
          font-family: var(--font-body);
          font-size: 14px;
          color: var(--color-text-muted);
          line-height: 1.65;
          margin: 0;
          max-width: 420px;
        }
        .tm-cta-btn {
          background: var(--color-navy);
          color: #ffffff;
          border: none;
          border-radius: var(--btn-radius);
          padding: 16px 36px;
          font-family: var(--font-body);
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 0.3px;
          cursor: pointer;
          white-space: nowrap;
          flex-shrink: 0;
          transition: var(--transition);
        }
        .tm-cta-btn:hover {
          background: var(--color-primary);
          transform: translateY(-2px);
          box-shadow: var(--shadow-md);
        }

        /* ─────────────────────────────────────────
           RESPONSIVE
        ───────────────────────────────────────── */
        @media (max-width: 900px) {
          .tm-card { width: 320px; padding: 28px 24px 32px; }
        }
        @media (max-width: 768px) {
          .tm-cta  { flex-direction: column; align-items: flex-start; }
          .tm-cta-btn { width: 100%; text-align: center; justify-content: center; display: flex; align-items: center; }
          .tm-header { padding-top: 56px; }
        }
        @media (max-width: 480px) {
          .tm-card { width: 280px; padding: 24px 20px 28px; }
          .tm-scroll-wrap { padding: 0 16px; }
        }
      `}</style>

      {/* ── Editorial Header ── */}
      <div className="tm-header">
        <div className="tm-header-inner">
          <p className="tm-kicker">Testimonials</p>
          <h2 className="tm-headline">Voices of Hope<br />&amp; Healing</h2>
          <p className="tm-subtext">
            Real stories from community members who have experienced the life-changing
            impact of JoMabel Healthcare Foundation's work in Ufuma and surrounding communities.
          </p>
        </div>
      </div>

      {/* ── Scrollable Cards ── */}
      <div className="tm-scroll-wrap">
        <button className="tm-arrow tm-arrow-left" onClick={() => scroll('left')} aria-label="Scroll left">
          <ChevronLeft size={20} />
        </button>

        <div className="tm-scroll" ref={scrollRef}>
          <div className="tm-track">
            {testimonies.map((t) => (
              <div key={t.id} className="tm-card">
                <Quote size={32} className="tm-card-quote-icon" />
                <p className="tm-card-text">"{t.quote}"</p>
                <div className="tm-card-author">
                  <img src={t.image} alt={t.name} className="tm-card-avatar" />
                  <div>
                    <p className="tm-card-name">{t.name}</p>
                    <p className="tm-card-role">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button className="tm-arrow tm-arrow-right" onClick={() => scroll('right')} aria-label="Scroll right">
          <ChevronRight size={20} />
        </button>
      </div>

      {/* ── CTA Strip ── */}
      <div className="tm-cta">
        <div className="tm-cta-left">
          <p className="tm-cta-kicker">Share Your Story</p>
          <h3 className="tm-cta-title">Have You Been Impacted<br />by JoMabel?</h3>
          <p className="tm-cta-desc">
            We'd love to hear your story. Every testimony helps us show the world
            what community-centred healthcare can achieve.
          </p>
        </div>
        <button className="tm-cta-btn" onClick={() => window.location.href = '/contact'}>
          Share Your Experience
        </button>
      </div>

    </div>
  );
};

export default Testimonies;