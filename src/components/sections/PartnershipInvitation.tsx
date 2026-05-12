import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Heart,
  Globe,
  Building2,
  Handshake,
  ArrowRight,
} from 'lucide-react';

import outreachImage from '../../assests/images/outreach2.jpeg';
import maternalImage from '../../assests/images/maternal-and-child-health-.jpg';
import roseImage     from '../../assests/images/Rose.jpg';

const partnerTypes = [
  {
    icon: Heart,
    tag: 'Individual',
    title: 'Individual Donors',
    desc: 'From $100 to $100,000+, every gift moves us closer to completion. Choose a giving level that reflects your commitment.',
    cta: 'Donate Now',
    path: '/donate',
    accentColor: 'var(--color-orange)',
  },
  {
    icon: Globe,
    tag: 'Diaspora',
    title: 'Diaspora Supporters',
    desc: 'Join Nigerians abroad who are investing in the healthcare transformation of their homeland. Your roots, your impact.',
    cta: 'Join the Campaign',
    path: '/donate',
    accentColor: 'var(--color-primary)',
  },
  {
    icon: Building2,
    tag: 'Institutional',
    title: 'Institutional Funders',
    desc: 'Foundations, grant-making bodies, and development organizations — we welcome strategic partnership conversations.',
    cta: 'Request a Briefing',
    path: '/contact',
    accentColor: 'var(--color-navy-mid)',
  },
  {
    icon: Handshake,
    tag: 'Corporate',
    title: 'Corporate Sponsors',
    desc: 'Align your brand with a credible, high-impact healthcare initiative. Naming rights, equipment sponsorship, and program funding available.',
    cta: 'Partner With JHF',
    path: '/contact',
    accentColor: 'var(--color-green)',
  },
];

const impactTiers = [
  { value: '$100',   label: 'Provides medical supplies for 50 patients' },
  { value: '$500',   label: 'Trains one community health worker' },
  { value: '$5,000', label: 'Funds a full outreach mission' },
];

const PartnershipInvitation = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.innerWidth < 768) {
      const t = setTimeout(() => setIsVisible(true), 100);
      return () => clearTimeout(t);
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setIsVisible(true); observer.disconnect(); }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className={`pi-page ${isVisible ? 'pi-visible' : ''}`}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Anton&family=Playfair+Display:wght@700&display=swap');

        /* ─────────────────────────────────────────
           BASE
        ───────────────────────────────────────── */
        .pi-page {
          font-family: var(--font-body);
          background: var(--color-bg);
          width: 100%;
          overflow-x: hidden;
        }

        /* ─────────────────────────────────────────
           WAYS TO GIVE — editorial header
        ───────────────────────────────────────── */
        .pi-intro {
          background: var(--color-bg);
          padding: 80px clamp(24px, 5vw, 72px) 56px;
        }
        .pi-intro-inner {
          max-width: 1200px;
          margin: 0 auto;
          border-left: 4px solid var(--color-navy);
          padding-left: 20px;
        }
        .pi-kicker {
          font-family: var(--font-body);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: var(--color-primary);
          margin: 0 0 10px;
        }
        .pi-headline {
          font-family: 'Anton', sans-serif;
          font-size: clamp(28px, 4vw, 48px);
          font-weight: 400;
          letter-spacing: 0.01em;
          text-transform: uppercase;
          line-height: 1.1;
          color: var(--color-navy);
          margin: 0 0 16px;
        }
        .pi-subtext {
          font-family: var(--font-body);
          font-size: clamp(14px, 1.3vw, 17px);
          color: var(--color-text-muted);
          line-height: 1.8;
          max-width: 640px;
          margin: 0;
        }

        /* animation */
        .pi-page:not(.pi-visible) .pi-intro-inner {
          opacity: 0;
          transform: translateY(24px);
        }
        .pi-page.pi-visible .pi-intro-inner {
          opacity: 1;
          transform: translateY(0);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }

        /* ─────────────────────────────────────────
           PARTNER CARDS — full bleed 4-col grid
        ───────────────────────────────────────── */
        .pi-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          width: 100%;
          border-top: 2px solid var(--color-navy);
        }
        .pi-card {
          background: var(--color-bg);
          border-right: 1px solid var(--color-border);
          padding: 40px 32px 44px;
          display: flex;
          flex-direction: column;
          gap: 0;
          transition: background 0.25s ease;
        }
        .pi-card:last-child { border-right: none; }
        .pi-card:hover { background: var(--color-surface); }

        /* animation */
        .pi-page:not(.pi-visible) .pi-card {
          opacity: 0;
          transform: translateY(28px);
        }
        .pi-page.pi-visible .pi-card {
          opacity: 1;
          transform: translateY(0);
          transition: opacity 0.55s ease, transform 0.55s ease, background 0.25s ease;
        }
        .pi-page.pi-visible .pi-card:nth-child(1) { transition-delay: 0.15s; }
        .pi-page.pi-visible .pi-card:nth-child(2) { transition-delay: 0.25s; }
        .pi-page.pi-visible .pi-card:nth-child(3) { transition-delay: 0.35s; }
        .pi-page.pi-visible .pi-card:nth-child(4) { transition-delay: 0.45s; }

        .pi-card-icon {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
          flex-shrink: 0;
        }
        .pi-card-tag {
          font-family: var(--font-body);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin: 0 0 10px;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .pi-card-tag::before {
          content: '';
          display: inline-block;
          width: 18px;
          height: 2px;
          flex-shrink: 0;
        }
        .pi-card-title {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(16px, 1.5vw, 19px);
          font-weight: 700;
          color: var(--color-navy);
          line-height: 1.25;
          margin: 0 0 14px;
        }
        .pi-card-desc {
          font-family: var(--font-body);
          font-size: 14px;
          color: var(--color-text-muted);
          line-height: 1.7;
          margin: 0 0 28px;
          flex: 1;
        }
        .pi-card-btn {
          background: none;
          border: none;
          padding: 0;
          cursor: pointer;
          font-family: var(--font-body);
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: var(--transition);
          border-bottom: 1.5px solid currentColor;
          padding-bottom: 3px;
          align-self: flex-start;
        }
        .pi-card-btn:hover { gap: 14px; }

        /* ─────────────────────────────────────────
           IMPACT TIERS — dark navy strip
        ───────────────────────────────────────── */
        .pi-impact {
          background: var(--color-navy);
          padding: 72px clamp(24px, 5vw, 72px);
        }
        .pi-impact-inner {
          max-width: 1200px;
          margin: 0 auto;
        }
        .pi-impact-header {
          border-left: 4px solid var(--color-primary);
          padding-left: 20px;
          margin-bottom: 52px;
        }
        .pi-impact-kicker {
          font-family: var(--font-body);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: var(--color-primary);
          margin: 0 0 10px;
        }
        .pi-impact-headline {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(22px, 2.8vw, 34px);
          font-weight: 700;
          color: #ffffff;
          line-height: 1.2;
          margin: 0;
        }
        .pi-tiers {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          border-top: 1px solid rgba(255,255,255,0.12);
        }
        .pi-tier {
          padding: 40px 36px 40px 0;
          border-right: 1px solid rgba(255,255,255,0.10);
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .pi-tier:last-child { border-right: none; }
        .pi-tier:not(:first-child) { padding-left: 36px; }
        .pi-tier-value {
          font-family: 'Anton', sans-serif;
          font-size: clamp(36px, 4.5vw, 56px);
          font-weight: 400;
          color: var(--color-primary);
          line-height: 1;
          letter-spacing: 0.02em;
        }
        .pi-tier-label {
          font-family: var(--font-body);
          font-size: 14px;
          color: rgba(255,255,255,0.55);
          line-height: 1.55;
          max-width: 200px;
        }

        /* animation */
        .pi-page:not(.pi-visible) .pi-impact-header,
        .pi-page:not(.pi-visible) .pi-tier {
          opacity: 0;
          transform: translateY(24px);
        }
        .pi-page.pi-visible .pi-impact-header {
          opacity: 1; transform: translateY(0);
          transition: opacity 0.6s ease, transform 0.6s ease;
          transition-delay: 0.5s;
        }
        .pi-page.pi-visible .pi-tier {
          opacity: 1; transform: translateY(0);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .pi-page.pi-visible .pi-tier:nth-child(1) { transition-delay: 0.6s; }
        .pi-page.pi-visible .pi-tier:nth-child(2) { transition-delay: 0.7s; }
        .pi-page.pi-visible .pi-tier:nth-child(3) { transition-delay: 0.8s; }

        /* ─────────────────────────────────────────
           CTA STRIP
        ───────────────────────────────────────── */
        .pi-cta {
          background: var(--color-primary);
          padding: 72px clamp(24px, 5vw, 72px);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 40px;
          flex-wrap: wrap;
        }
        .pi-cta-kicker {
          font-family: var(--font-body);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: rgba(255,255,255,0.60);
          margin: 0 0 10px;
        }
        .pi-cta-title {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(22px, 2.8vw, 34px);
          font-weight: 700;
          color: #ffffff;
          line-height: 1.2;
          margin: 0 0 12px;
          max-width: 500px;
        }
        .pi-cta-desc {
          font-family: var(--font-body);
          font-size: 15px;
          color: rgba(255,255,255,0.78);
          line-height: 1.65;
          max-width: 460px;
          margin: 0;
        }
        .pi-cta-btns {
          display: flex;
          gap: 14px;
          flex-shrink: 0;
          flex-wrap: wrap;
        }
        .pi-btn-primary {
          background: #ffffff;
          color: var(--color-primary);
          border: none;
          border-radius: var(--btn-radius);
          padding: 16px 36px;
          font-family: var(--font-body);
          font-size: 14px;
          font-weight: 700;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: var(--transition);
          white-space: nowrap;
        }
        .pi-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-lg);
        }
        .pi-btn-outline {
          background: transparent;
          color: #ffffff;
          border: 1.5px solid rgba(255,255,255,0.50);
          border-radius: var(--btn-radius);
          padding: 16px 36px;
          font-family: var(--font-body);
          font-size: 14px;
          font-weight: 700;
          cursor: pointer;
          transition: var(--transition);
          white-space: nowrap;
        }
        .pi-btn-outline:hover {
          background: rgba(255,255,255,0.12);
          border-color: rgba(255,255,255,0.80);
        }

        /* animation */
        .pi-page:not(.pi-visible) .pi-cta {
          opacity: 0;
          transform: translateY(24px);
        }
        .pi-page.pi-visible .pi-cta {
          opacity: 1; transform: translateY(0);
          transition: opacity 0.6s ease, transform 0.6s ease;
          transition-delay: 0.9s;
        }

        /* ─────────────────────────────────────────
           RESPONSIVE
        ───────────────────────────────────────── */
        @media (max-width: 1024px) {
          .pi-grid  { grid-template-columns: repeat(2, 1fr); }
          .pi-card:nth-child(2) { border-right: none; }
          .pi-card:nth-child(2),
          .pi-card:nth-child(3) { border-top: 1px solid var(--color-border); }
          .pi-tiers { grid-template-columns: 1fr; }
          .pi-tier  { border-right: none; border-bottom: 1px solid rgba(255,255,255,0.10); padding: 28px 0; }
          .pi-tier:not(:first-child) { padding-left: 0; }
          .pi-tier:last-child { border-bottom: none; }
        }
        @media (max-width: 768px) {
          .pi-grid  { grid-template-columns: 1fr; }
          .pi-card  { border-right: none; border-bottom: 1px solid var(--color-border); }
          .pi-card:last-child { border-bottom: none; }
          .pi-cta   { flex-direction: column; align-items: flex-start; }
          .pi-cta-btns { width: 100%; }
          .pi-btn-primary,
          .pi-btn-outline { flex: 1; justify-content: center; }
          .pi-intro { padding-top: 56px; }
        }
        @media (max-width: 480px) {
          .pi-card  { padding: 32px 20px 36px; }
          .pi-cta-btns { flex-direction: column; }
        }
      `}</style>

      {/* ── Editorial Intro ── */}
      <div className="pi-intro">
        <div className="pi-intro-inner">
          <p className="pi-kicker">Ways to Give</p>
          <h2 className="pi-headline">There's a Place<br />for You</h2>
          <p className="pi-subtext">
            JoMabel Healthcare Foundation is actively seeking partners at every level —
            from individual donors to global institutions. There is a role here for you.
          </p>
        </div>
      </div>

      {/* ── Partner Cards — full bleed grid ── */}
      <div className="pi-grid">
        {partnerTypes.map((partner, i) => {
          const IconComponent = partner.icon;
          return (
            <div key={i} className="pi-card">
              <div
                className="pi-card-icon"
                style={{ background: 'var(--color-surface-2)' }}
              >
                <IconComponent size={22} style={{ color: partner.accentColor }} />
              </div>
              <span
                className="pi-card-tag"
                style={{ color: partner.accentColor }}
              >
                <span style={{ display: 'none' }} />
                {partner.tag}
              </span>
              <h3 className="pi-card-title">{partner.title}</h3>
              <p className="pi-card-desc">{partner.desc}</p>
              <button
                className="pi-card-btn"
                style={{ color: partner.accentColor }}
                onClick={() => navigate(partner.path)}
              >
                {partner.cta} <ArrowRight size={13} />
              </button>
            </div>
          );
        })}
      </div>

      {/* ── Impact Tiers ── */}
      <div className="pi-impact">
        <div className="pi-impact-inner">
          <div className="pi-impact-header">
            <p className="pi-impact-kicker">Your Impact</p>
            <h2 className="pi-impact-headline">What Your Support Achieves</h2>
          </div>
          <div className="pi-tiers">
            {impactTiers.map(({ value, label }) => (
              <div className="pi-tier" key={value}>
                <div className="pi-tier-value">{value}</div>
                <div className="pi-tier-label">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── CTA Strip ── */}
      <div className="pi-cta">
        <div>
          <p className="pi-cta-kicker">Get Involved</p>
          <h2 className="pi-cta-title">Ready to Make History With Us?</h2>
          <p className="pi-cta-desc">
            Whether you give $100 or $100,000 — whether you're an individual, a foundation,
            or a corporation — JoMabel Healthcare Foundation has a place for your partnership.
          </p>
        </div>
        <div className="pi-cta-btns">
          <button className="pi-btn-primary" onClick={() => navigate('/donate')}>
            Donate Now <ArrowRight size={15} />
          </button>
          <button className="pi-btn-outline" onClick={() => navigate('/contact')}>
            Contact Us
          </button>
        </div>
      </div>

    </div>
  );
};

export default PartnershipInvitation;