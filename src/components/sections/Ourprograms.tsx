import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Building2,
  Heart,
  GraduationCap,
  Baby,
  HardHat,
  BookOpen,
  ArrowRight
} from 'lucide-react';

import roseImage        from '../../assests/images/Rose.jpg';
import outreachImage    from '../../assests/images/outreach2.jpeg';
import maternalImage    from '../../assests/images/maternal-and-child-health-.jpg';
import infrastructureImage from '../../assests/images/IMG_3338.png';
import educationImage   from '../../assests/images/imag1.png';
import an2Image         from '../../assests/images/an2.jpg';
import heroImage        from '../../assests/images/outreach2.jpeg';

const programs = [
  {
    id: 1,
    icon: Building2,
    tag: 'Facility',
    title: 'JoMabel Medical Center',
    description:
      'Our operational hub offering primary care, maternal and child health services, diagnostic and laboratory services, chronic disease management, and preventive health education in Ufuma, Nigeria.',
    image: an2Image,
  },
  {
    id: 2,
    icon: Heart,
    tag: 'Outreach',
    title: 'Medical Outreach Missions',
    description:
      'Regular medical missions providing free consultations, medications, screenings, and referrals reaching rural and underserved communities where healthcare access is limited or nonexistent.',
    image: outreachImage,
  },
  {
    id: 3,
    icon: GraduationCap,
    tag: 'Training',
    title: 'Youth Training & Empowerment',
    description:
      'Investing in the next generation of healthcare professionals through hands-on clinical training, leadership development, community service opportunities, and career mentorship.',
    image: roseImage,
  },
  {
    id: 4,
    icon: Baby,
    tag: 'Child Health',
    title: 'Maternal & Child Health Initiative',
    description:
      "Programs focused on safe pregnancy and delivery, newborn care, immunization, nutrition support, and women's health education for families across our communities.",
    image: maternalImage,
  },
  {
    id: 5,
    icon: HardHat,
    tag: 'Infrastructure',
    title: 'Infrastructure Development',
    description:
      'Building and equipping facilities that anchor long-term community health including clinics, diagnostic centers, water and sanitation systems, and youth training complexes.',
    image: infrastructureImage,
  },
  {
    id: 6,
    icon: BookOpen,
    tag: 'Education',
    title: 'Community Health Education',
    description:
      'Workshops and campaigns addressing hygiene and sanitation, disease prevention, mental and emotional wellness, and nutrition and healthy lifestyle for individuals and families.',
    image: educationImage,
  },
];

const stats = [
  { key: 'campus',   target: 16000, suffix: '+', label: 'sqm medical & training campus under construction' },
  { key: 'patients', target: 5000,  suffix: '+', label: 'patients served through outreach missions' },
  { key: 'workers',  target: 200,   suffix: '+', label: 'community health workers trained' },
  { key: 'maternal', target: 1000,  suffix: '+', label: 'women & children receiving maternal health services' },
];

const OurPrograms = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible]   = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const [animatedStats, setAnimatedStats] = useState<Record<string, number>>({
    campus: 0, patients: 0, workers: 0, maternal: 0,
  });

  /* ── Intersection observer ── */
  useEffect(() => {
    if (window.innerWidth < 768) {
      const t = setTimeout(() => { setIsVisible(true); setHasAnimated(true); }, 100);
      return () => clearTimeout(t);
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          setHasAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  /* ── Count-up animation ── */
  useEffect(() => {
    if (!isVisible) return;
    stats.forEach(({ key, target }) => {
      const start = performance.now();
      const duration = 1400;
      const step = (now: number) => {
        const p    = Math.min((now - start) / duration, 1);
        const ease = 1 - Math.pow(1 - p, 3);
        setAnimatedStats(prev => ({ ...prev, [key]: Math.round(ease * target) }));
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    });
  }, [isVisible]);

  return (
    <div ref={sectionRef} className={`op-page ${isVisible ? 'op-visible' : ''}`}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Anton&family=Playfair+Display:wght@700&display=swap');

        /* ─────────────────────────────────────────
           BASE
        ───────────────────────────────────────── */
        .op-page {
          font-family: var(--font-body);
          background: var(--color-bg);
          width: 100%;
          overflow-x: hidden;
        }

        /* ─────────────────────────────────────────
           HERO
        ───────────────────────────────────────── */
        .op-hero {
          position: relative;
          height: 72vh;
          min-height: 480px;
          display: flex;
          align-items: flex-end;
          overflow: hidden;
        }
        .op-hero-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
        }
        .op-hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(0,0,0,0.82) 0%,
            rgba(0,0,0,0.30) 55%,
            rgba(0,0,0,0.10) 100%
          );
        }
        .op-hero-content {
          position: relative;
          z-index: 2;
          width: 100%;
          padding: 0 clamp(24px, 5vw, 72px) 56px;
          max-width: 860px;
        }
        .op-hero-kicker {
          font-family: var(--font-body);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--color-primary);
          margin: 0 0 14px;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .op-hero-kicker::before {
          content: '';
          display: inline-block;
          width: 32px;
          height: 2px;
          background: var(--color-primary);
          flex-shrink: 0;
        }
        .op-hero h1 {
          font-family: 'Anton', sans-serif;
          font-size: clamp(34px, 5.5vw, 64px);
          font-weight: 400;
          color: #ffffff;
          line-height: 1.08;
          letter-spacing: 0.01em;
          text-transform: uppercase;
          margin: 0 0 20px;
        }
        .op-hero p {
          font-family: var(--font-body);
          font-size: clamp(14px, 1.4vw, 17px);
          color: rgba(255,255,255,0.82);
          line-height: 1.75;
          max-width: 580px;
          margin: 0;
        }

        /* ─────────────────────────────────────────
           IMPACT STATS
        ───────────────────────────────────────── */
        .op-impact {
          background: var(--color-navy);
          padding: 64px clamp(24px, 5vw, 72px);
        }
        .op-impact-inner {
          max-width: 1200px;
          margin: 0 auto;
        }
        .op-impact-header {
          border-left: 4px solid var(--color-primary);
          padding-left: 20px;
          margin-bottom: 48px;
        }
        .op-impact-kicker {
          font-family: var(--font-body);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: var(--color-primary);
          margin: 0 0 10px;
        }
        .op-impact-headline {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(24px, 3vw, 36px);
          font-weight: 700;
          color: #ffffff;
          line-height: 1.2;
          margin: 0;
        }
        .op-stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          border-top: 1px solid rgba(255,255,255,0.12);
        }
        .op-stat {
          padding: 36px 32px 36px 0;
          border-right: 1px solid rgba(255,255,255,0.10);
          display: flex;
          flex-direction: column;
          gap: 10px;
          transition: var(--transition);
        }
        .op-stat:last-child { border-right: none; }
        .op-stat:not(:first-child) { padding-left: 32px; }
        .op-stat-num {
          font-family: 'Anton', sans-serif;
          font-size: clamp(32px, 3.8vw, 52px);
          font-weight: 400;
          color: var(--color-primary);
          line-height: 1;
          letter-spacing: 0.02em;
        }
        .op-stat-label {
          font-family: var(--font-body);
          font-size: 13px;
          color: rgba(255,255,255,0.55);
          line-height: 1.5;
          max-width: 180px;
        }

        /* animation */
        .op-page:not(.op-visible) .op-impact-header,
        .op-page:not(.op-visible) .op-stat {
          opacity: 0;
          transform: translateY(24px);
        }
        .op-page.op-visible .op-impact-header {
          opacity: 1; transform: translateY(0);
          transition: opacity 0.6s ease, transform 0.6s ease;
          transition-delay: 0s;
        }
        .op-page.op-visible .op-stat {
          opacity: 1; transform: translateY(0);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .op-page.op-visible .op-stat:nth-child(1) { transition-delay: 0.1s; }
        .op-page.op-visible .op-stat:nth-child(2) { transition-delay: 0.2s; }
        .op-page.op-visible .op-stat:nth-child(3) { transition-delay: 0.3s; }
        .op-page.op-visible .op-stat:nth-child(4) { transition-delay: 0.4s; }

        /* ─────────────────────────────────────────
           PROGRAMS SECTION — editorial header
        ───────────────────────────────────────── */
        .op-programs {
          background: var(--color-bg);
          padding: 80px clamp(24px, 5vw, 72px) 0;
        }
        .op-programs-header {
          max-width: 1200px;
          margin: 0 auto 56px;
          border-left: 4px solid var(--color-navy);
          padding-left: 20px;
        }
        .op-programs-kicker {
          font-family: var(--font-body);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: var(--color-primary);
          margin: 0 0 10px;
        }
        .op-programs-headline {
          font-family: 'Anton', sans-serif;
          font-size: clamp(28px, 4vw, 48px);
          font-weight: 400;
          letter-spacing: 0.01em;
          text-transform: uppercase;
          line-height: 1.1;
          color: var(--color-navy);
          margin: 0 0 14px;
        }
        .op-programs-sub {
          font-family: var(--font-body);
          font-size: clamp(14px, 1.3vw, 16px);
          color: var(--color-text-muted);
          line-height: 1.75;
          max-width: 640px;
          margin: 0;
        }

        /* section label divider — matches TheProblem */
        .op-section-label {
          max-width: 1200px;
          margin: 0 auto 0;
          padding: 0 0 0 0;
          font-family: var(--font-body);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--color-text-light);
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 0 0 0 0;
        }
        .op-section-label::after {
          content: '';
          flex: 1;
          height: 1px;
          background: var(--color-border);
        }

        /* animation */
        .op-page:not(.op-visible) .op-programs-header {
          opacity: 0;
          transform: translateY(24px);
        }
        .op-page.op-visible .op-programs-header {
          opacity: 1; transform: translateY(0);
          transition: opacity 0.6s ease, transform 0.6s ease;
          transition-delay: 0.45s;
        }

        /* ─────────────────────────────────────────
           PROGRAM CARDS GRID — full bleed, 3-col
        ───────────────────────────────────────── */
        .op-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          width: 100%;
          border-top: 2px solid var(--color-navy);
          margin-top: 32px;
        }
        .op-card {
          background: var(--color-bg);
          border-right: 1px solid var(--color-border);
          border-bottom: 1px solid var(--color-border);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          transition: background 0.25s ease;
        }
        .op-card:nth-child(3n) { border-right: none; }

        /* animation */
        .op-page:not(.op-visible) .op-card {
          opacity: 0;
          transform: translateY(28px);
        }
        .op-page.op-visible .op-card {
          opacity: 1; transform: translateY(0);
          transition: opacity 0.55s ease, transform 0.55s ease;
        }
        .op-page.op-visible .op-card:nth-child(1) { transition-delay: 0.55s; }
        .op-page.op-visible .op-card:nth-child(2) { transition-delay: 0.65s; }
        .op-page.op-visible .op-card:nth-child(3) { transition-delay: 0.75s; }
        .op-page.op-visible .op-card:nth-child(4) { transition-delay: 0.85s; }
        .op-page.op-visible .op-card:nth-child(5) { transition-delay: 0.95s; }
        .op-page.op-visible .op-card:nth-child(6) { transition-delay: 1.05s; }

        .op-card-img-wrap {
          overflow: hidden;
          height: 240px;
          flex-shrink: 0;
        }
        .op-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.45s ease;
        }
        .op-card:hover .op-card-img { transform: scale(1.04); }

        .op-card-body {
          padding: 28px 32px 32px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }
        .op-card-tag {
          font-family: var(--font-body);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--color-primary);
          margin: 0 0 12px;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .op-card-tag::before {
          content: '';
          display: inline-block;
          width: 20px;
          height: 2px;
          background: var(--color-primary);
          flex-shrink: 0;
        }
        .op-card-title {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(17px, 1.6vw, 20px);
          font-weight: 700;
          color: var(--color-navy);
          line-height: 1.25;
          margin: 0 0 14px;
        }
        .op-card-desc {
          font-family: var(--font-body);
          font-size: 14px;
          color: var(--color-text-muted);
          line-height: 1.7;
          margin: 0 0 24px;
          flex: 1;
        }
        .op-card-link {
          background: none;
          border: none;
          padding: 0;
          cursor: pointer;
          font-family: var(--font-body);
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: var(--color-navy);
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: var(--transition);
          border-bottom: 1.5px solid var(--color-navy);
          padding-bottom: 3px;
          align-self: flex-start;
        }
        .op-card-link:hover {
          color: var(--color-primary);
          border-color: var(--color-primary);
          gap: 14px;
        }

        /* ─────────────────────────────────────────
           CTA STRIP
        ───────────────────────────────────────── */
        .op-cta {
          background: var(--color-primary);
          padding: 72px clamp(24px, 5vw, 72px);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 40px;
          flex-wrap: wrap;
        }
        .op-cta-text {}
        .op-cta-kicker {
          font-family: var(--font-body);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: rgba(255,255,255,0.65);
          margin: 0 0 10px;
        }
        .op-cta-title {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(22px, 2.8vw, 34px);
          font-weight: 700;
          color: #ffffff;
          margin: 0 0 12px;
          line-height: 1.2;
          max-width: 540px;
        }
        .op-cta-desc {
          font-family: var(--font-body);
          font-size: 15px;
          color: rgba(255,255,255,0.80);
          line-height: 1.65;
          max-width: 480px;
          margin: 0;
        }
        .op-cta-btn {
          background: #ffffff;
          color: var(--color-primary);
          border: none;
          border-radius: var(--btn-radius);
          padding: 16px 40px;
          font-family: var(--font-body);
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 0.5px;
          cursor: pointer;
          white-space: nowrap;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: var(--transition);
          flex-shrink: 0;
        }
        .op-cta-btn:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-lg);
        }

        /* animation */
        .op-page:not(.op-visible) .op-cta {
          opacity: 0;
          transform: translateY(24px);
        }
        .op-page.op-visible .op-cta {
          opacity: 1; transform: translateY(0);
          transition: opacity 0.6s ease, transform 0.6s ease;
          transition-delay: 1.1s;
        }

        /* ─────────────────────────────────────────
           RESPONSIVE
        ───────────────────────────────────────── */
        @media (max-width: 1024px) {
          .op-grid          { grid-template-columns: repeat(2, 1fr); }
          .op-card:nth-child(3n)   { border-right: 1px solid var(--color-border); }
          .op-card:nth-child(2n)   { border-right: none; }
          .op-stats-grid    { grid-template-columns: repeat(2, 1fr); }
          .op-stat          { border-right: none; border-bottom: 1px solid rgba(255,255,255,0.10); padding: 28px 0; }
          .op-stat:not(:first-child) { padding-left: 0; }
          .op-stat:last-child { border-bottom: none; }
        }
        @media (max-width: 768px) {
          .op-hero          { height: auto; min-height: 420px; padding-top: 80px; align-items: flex-end; }
          .op-grid          { grid-template-columns: 1fr; }
          .op-card          { border-right: none !important; }
          .op-card-img-wrap { height: 200px; }
          .op-cta           { flex-direction: column; align-items: flex-start; }
          .op-programs      { padding-top: 56px; }
          .op-impact        { padding: 48px 24px; }
        }
        @media (max-width: 480px) {
          .op-card-body     { padding: 20px 20px 24px; }
          .op-stat-num      { font-size: 36px; }
        }
      `}</style>

      {/* ── Hero ── */}
      <div className="op-hero">
        <img src={heroImage} alt="JoMabel Healthcare Foundation medical outreach" className="op-hero-img" />
        <div className="op-hero-overlay" />
        <div className="op-hero-content">
          <p className="op-hero-kicker">Our Programs</p>
          <h1>Healthcare That<br />Transforms Communities</h1>
          <p>
            Through six program areas, JoMabel Healthcare Foundation delivers care,
            training, and lasting impact — from a growing 16,000+ sq.m medical campus
            to outreach missions that reach the most vulnerable.
          </p>
        </div>
      </div>

      {/* ── Impact Stats ── */}
      <div className="op-impact">
        <div className="op-impact-inner">
          <div className="op-impact-header">
            <p className="op-impact-kicker">Our Impact</p>
            <h2 className="op-impact-headline">
              Making Healthcare Accessible<br />to Those Who Need It Most
            </h2>
          </div>
          <div className="op-stats-grid">
            {stats.map(({ key, suffix, label }) => (
              <div className="op-stat" key={key}>
                <div className="op-stat-num">
                  {animatedStats[key].toLocaleString()}{suffix}
                </div>
                <div className="op-stat-label">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Programs Grid ── */}
      <div className="op-programs">
        <div className="op-programs-header">
          <p className="op-programs-kicker">Programs &amp; Services</p>
          <h2 className="op-programs-headline">Six Ways We Serve</h2>
          <p className="op-programs-sub">
            Every program area is purpose-built to address a critical gap in healthcare
            access — from facility-based care to community outreach, training, and
            infrastructure that lasts.
          </p>
        </div>
      </div>

      {/* Full-bleed grid outside padded container */}
      <div className="op-grid">
        {programs.map((program) => (
          <div key={program.id} className="op-card">
            <div className="op-card-img-wrap">
              <img src={program.image} alt={program.title} className="op-card-img" />
            </div>
            <div className="op-card-body">
              <span className="op-card-tag">{program.tag}</span>
              <h3 className="op-card-title">{program.title}</h3>
              <p className="op-card-desc">{program.description}</p>
              <button className="op-card-link" onClick={() => navigate('/programs')}>
                Learn more <ArrowRight size={13} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* ── CTA Strip ── */}
      <div className="op-cta">
        <div className="op-cta-text">
          <p className="op-cta-kicker">Get Involved</p>
          <h2 className="op-cta-title">Ready to Make a Difference?</h2>
          <p className="op-cta-desc">
            Your support helps us expand programs, reach more families,
            and build the healthcare infrastructure rural Nigeria deserves.
          </p>
        </div>
        <button className="op-cta-btn" onClick={() => navigate('/get-involved')}>
          Support Our Work <ArrowRight size={15} />
        </button>
      </div>

    </div>
  );
};

export default OurPrograms;