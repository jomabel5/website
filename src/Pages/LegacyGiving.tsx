import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { ArrowRight, Mail, Phone, Heart, Shield, Star, Check } from 'lucide-react';

import an1      from '../assests/images/an1.jpg';
import outreach3 from '../assests/images/outreach3.jpeg';

/* ─────────────────────────────────────────────────────────
   GLOBAL STYLES
───────────────────────────────────────────────────────── */
const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');

  /* ── Shared section wrapper ── */
  .lg-section {
    padding: 64px clamp(20px, 5vw, 64px);
    font-family: var(--font-body);
  }
  .lg-inner {
    max-width: 1080px;
    margin: 0 auto;
  }

  /* ── Editorial header block ── */
  .lg-edit-header {
    border-left: 5px solid var(--color-navy);
    padding-left: 20px;
    margin-bottom: 28px;
  }
  .lg-kicker {
    font-family: var(--font-body);
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 2.5px;
    text-transform: uppercase;
    color: var(--color-primary);
    margin: 0 0 10px;
  }
  .lg-headline {
    font-family: 'Anton', sans-serif;
    font-size: clamp(26px, 4vw, 44px);
    font-weight: 400;
    letter-spacing: 0.01em;
    text-transform: uppercase;
    line-height: 1.1;
    color: var(--color-navy);
    margin: 0;
  }

  /* ── Divider label ── */
  .lg-divider {
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
  .lg-divider::after {
    content: '';
    flex: 1;
    height: 1px;
    background: var(--color-border);
  }

  /* ── Body text ── */
  .lg-body {
    font-family: var(--font-body);
    font-size: clamp(14px, 1.3vw, 16px);
    color: var(--color-text-muted);
    line-height: 1.85;
    margin: 0 0 16px;
  }
  .lg-body:last-child { margin-bottom: 0; }

  /* ═══════════════════════════════════
     HERO
  ═══════════════════════════════════ */
  .lg-hero {
    position: relative;
    min-height: 520px;
    display: flex;
    align-items: flex-end;
    overflow: hidden;
    font-family: var(--font-body);
  }
  .lg-hero-img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
  .lg-hero-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to right,
      rgba(17,24,39,0.94) 0%,
      rgba(17,24,39,0.75) 55%,
      rgba(17,24,39,0.20) 100%
    );
  }
  .lg-hero-content {
    position: relative;
    z-index: 2;
    padding: clamp(40px, 6vw, 80px) clamp(20px, 5vw, 64px);
    max-width: 680px;
  }
  .lg-hero-kicker {
    font-family: var(--font-body);
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 2.5px;
    text-transform: uppercase;
    color: var(--color-primary-light);
    margin: 0 0 16px;
    display: block;
  }
  /* Anton hero title */
  .lg-hero-title {
    font-family: 'Anton', sans-serif;
    font-size: clamp(32px, 5.5vw, 60px);
    font-weight: 400;
    letter-spacing: 0.01em;
    text-transform: uppercase;
    line-height: 1.05;
    color: #ffffff;
    margin: 0 0 20px;
  }
  .lg-hero-title span { color: var(--color-primary-light); }
  .lg-hero-sub {
    font-family: var(--font-body);
    font-size: clamp(13px, 1.4vw, 15px);
    color: rgba(255,255,255,0.78);
    line-height: 1.85;
    margin: 0 0 32px;
    max-width: 500px;
  }
  .lg-hero-btns { display: flex; gap: 14px; flex-wrap: wrap; }

  /* ── CTA buttons ── */
  .lg-btn-primary {
    background: var(--color-green);
    color: #ffffff;
    border: none;
    border-radius: var(--btn-radius);
    padding: 13px 28px;
    font-family: var(--font-body);
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 0.5px;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    transition: var(--transition);
  }
  .lg-btn-primary:hover { background: var(--color-green-dark); transform: translateY(-1px); }

  .lg-btn-ghost {
    background: rgba(255,255,255,0.10);
    color: #ffffff;
    border: 1.5px solid rgba(255,255,255,0.40);
    border-radius: var(--btn-radius);
    padding: 13px 28px;
    font-family: var(--font-body);
    font-size: 13px;
    font-weight: 700;
    cursor: pointer;
    transition: var(--transition);
  }
  .lg-btn-ghost:hover { background: rgba(255,255,255,0.20); }

  .lg-btn-dark {
    background: var(--color-navy);
    color: #ffffff;
    border: none;
    border-radius: var(--btn-radius);
    padding: 14px 28px;
    font-family: var(--font-body);
    font-size: 13px;
    font-weight: 700;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    transition: var(--transition);
    width: 100%;
    justify-content: center;
  }
  .lg-btn-dark:hover { background: var(--color-primary); }

  .lg-btn-outline {
    background: transparent;
    border-radius: var(--btn-radius);
    padding: 11px 20px;
    font-family: var(--font-body);
    font-size: 13px;
    font-weight: 700;
    cursor: pointer;
    width: 100%;
    transition: var(--transition);
  }

  /* ═══════════════════════════════════
     INTRO — two col
  ═══════════════════════════════════ */
  .lg-intro-grid {
    display: grid;
    grid-template-columns: 1fr 1px 1fr;
    gap: 0;
    align-items: start;
    border-top: 2px solid var(--color-navy);
    padding-top: 36px;
  }
  .lg-intro-left  { padding-right: 56px; }
  .lg-intro-right { padding-left: 56px; display: flex; flex-direction: column; gap: 20px; }
  .lg-intro-divider { background: var(--color-border); width: 1px; align-self: stretch; }

  /* way-to-give item */
  .lg-way {
    display: flex;
    align-items: flex-start;
    gap: 14px;
  }
  .lg-way-icon {
    width: 38px;
    height: 38px;
    border-radius: 8px;
    background: var(--color-primary-light);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    color: var(--color-primary);
  }
  .lg-way-title {
    font-family: 'Anton', sans-serif;
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: var(--color-navy);
    margin: 0 0 4px;
  }
  .lg-way-desc {
    font-family: var(--font-body);
    font-size: 12.5px;
    color: var(--color-text-muted);
    line-height: 1.65;
    margin: 0;
  }

  /* ═══════════════════════════════════
     NAMING OPPORTUNITIES
  ═══════════════════════════════════ */
  .lg-naming-bg { background: var(--color-surface); }

  .lg-naming-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
    border-top: 2px solid var(--color-navy);
    padding-top: 32px;
  }
  .lg-naming-card {
    background: var(--color-bg);
    border: 1px solid var(--color-border);
    border-radius: var(--card-radius);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    transition: var(--transition);
  }
  .lg-naming-card:hover {
    transform: translateY(-3px);
    box-shadow: var(--shadow-lg);
  }
  .lg-naming-card-top { padding: 28px 28px 20px; flex: 1; }
  .lg-naming-card-footer {
    padding: 16px 28px 24px;
    border-top: 1px solid var(--color-border);
    background: var(--color-surface);
  }
  /* Anton naming tier title */
  .lg-naming-tier {
    font-family: 'Anton', sans-serif;
    font-size: clamp(15px, 1.6vw, 18px);
    font-weight: 400;
    letter-spacing: 0.03em;
    text-transform: uppercase;
    color: var(--color-navy);
    margin: 8px 0 6px;
  }
  .lg-naming-amount {
    font-family: 'Anton', sans-serif;
    font-size: clamp(22px, 2.8vw, 30px);
    font-weight: 400;
    letter-spacing: 0.02em;
    margin: 0 0 4px;
  }
  .lg-naming-ngn {
    font-family: var(--font-body);
    font-size: 12px;
    color: var(--color-text-light);
    margin: 0 0 18px;
  }
  .lg-perk {
    display: flex;
    align-items: flex-start;
    gap: 9px;
    margin-bottom: 8px;
  }
  .lg-perk-text {
    font-family: var(--font-body);
    font-size: 12.5px;
    color: var(--color-text-muted);
    line-height: 1.6;
    margin: 0;
  }

  /* ═══════════════════════════════════
     MEMORIAL BRICKS
  ═══════════════════════════════════ */
  .lg-bricks-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 64px;
    align-items: start;
    border-top: 2px solid var(--color-navy);
    padding-top: 36px;
  }
  .lg-brick-tier {
    background: var(--color-surface);
    border: 1px solid var(--color-border);
    border-left: 3px solid var(--color-primary);
    border-radius: var(--card-radius);
    padding: 14px 18px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
    margin-bottom: 12px;
  }
  .lg-brick-tier-name {
    font-family: 'Anton', sans-serif;
    font-size: 13px;
    font-weight: 400;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: var(--color-navy);
    margin: 0 0 3px;
  }
  .lg-brick-tier-desc {
    font-family: var(--font-body);
    font-size: 12px;
    color: var(--color-text-muted);
    margin: 0;
  }
  .lg-brick-price {
    font-family: 'Anton', sans-serif;
    font-size: 14px;
    font-weight: 400;
    color: var(--color-primary);
    flex-shrink: 0;
    white-space: nowrap;
  }
  .lg-brick-sample-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
  }
  .lg-brick-tile {
    aspect-ratio: 2/1;
    border-radius: 6px;
    background: var(--color-surface-2);
    border: 1px solid var(--color-border);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px;
    text-align: center;
    transition: var(--transition);
    cursor: default;
  }
  .lg-brick-tile:hover { background: var(--color-primary-light); border-color: var(--color-primary); }
  .lg-brick-tile.empty { opacity: 0.28; }
  .lg-brick-tile p {
    font-family: var(--font-body);
    color: var(--color-text);
    font-size: 10px;
    line-height: 1.5;
    margin: 0;
    font-weight: 600;
    white-space: pre-line;
  }

  /* ═══════════════════════════════════
     CIRCLE OF DIGNITY
  ═══════════════════════════════════ */
  .lg-cod-bg { background: var(--color-surface); }

  .lg-cod-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    border-top: 2px solid var(--color-navy);
    padding-top: 32px;
  }
  .lg-cod-tier {
    border-radius: var(--card-radius);
    padding: 28px 22px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    border: 2px solid transparent;
    transition: var(--transition);
  }
  .lg-cod-tier:hover { transform: translateY(-3px); box-shadow: var(--shadow-md); }
  /* Anton cod tier name */
  .lg-cod-name {
    font-family: 'Anton', sans-serif;
    font-size: clamp(13px, 1.4vw, 16px);
    font-weight: 400;
    letter-spacing: 0.03em;
    text-transform: uppercase;
    margin: 4px 0 0;
  }
  .lg-cod-amount {
    font-family: 'Anton', sans-serif;
    font-size: clamp(18px, 2.2vw, 24px);
    font-weight: 400;
    letter-spacing: 0.02em;
    margin: 0;
  }
  .lg-cod-ngn {
    font-family: var(--font-body);
    font-size: 11.5px;
    opacity: 0.7;
    margin: 0;
  }
  .lg-cod-perks { border-top: 1px solid; padding-top: 12px; margin-top: 4px; display: flex; flex-direction: column; gap: 8px; }
  .lg-cod-perk { display: flex; align-items: flex-start; gap: 8px; }
  .lg-cod-perk-text {
    font-family: var(--font-body);
    font-size: 12px;
    color: var(--color-text);
    line-height: 1.55;
    margin: 0;
  }

  /* ═══════════════════════════════════
     QUOTE STRIP
  ═══════════════════════════════════ */
  .lg-quote-strip {
    background: var(--color-bg);
    padding: 64px clamp(20px, 5vw, 64px);
    text-align: center;
  }
  .lg-quote-text {
    font-family: 'Anton', sans-serif;
    font-size: clamp(20px, 3vw, 32px);
    font-weight: 400;
    letter-spacing: 0.01em;
    text-transform: uppercase;
    line-height: 1.3;
    color: var(--color-navy);
    margin: 0 auto 20px;
    max-width: 780px;
  }
  .lg-quote-author {
    font-family: var(--font-body);
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: var(--color-primary);
    margin: 0;
  }

  /* ═══════════════════════════════════
     FORM
  ═══════════════════════════════════ */
  .lg-form-bg { background: var(--color-surface); }

  .lg-form-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 64px;
    align-items: start;
    border-top: 2px solid var(--color-navy);
    padding-top: 36px;
  }
  .lg-form-fields { display: flex; flex-direction: column; gap: 16px; }
  .lg-form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
  .lg-field { display: flex; flex-direction: column; gap: 6px; }
  .lg-label {
    font-family: var(--font-body);
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.8px;
    text-transform: uppercase;
    color: var(--color-text);
  }
  .lg-input, .lg-select, .lg-textarea {
    padding: 11px 14px;
    border: 1.5px solid var(--color-border);
    border-radius: var(--btn-radius);
    font-family: var(--font-body);
    font-size: 13.5px;
    color: var(--color-text);
    background: var(--color-bg);
    outline: none;
    transition: border-color 0.15s;
  }
  .lg-input:focus, .lg-select:focus, .lg-textarea:focus { border-color: var(--color-primary); }
  .lg-textarea { resize: vertical; min-height: 110px; }

  /* form right side */
  .lg-form-side { display: flex; flex-direction: column; gap: 24px; }
  .lg-next-steps {
    background: var(--color-primary-light);
    border: 1px solid var(--color-navy-light);
    border-radius: var(--card-radius);
    padding: 24px;
    display: flex;
    flex-direction: column;
    gap: 14px;
  }
  .lg-next-step { display: flex; align-items: flex-start; gap: 14px; }
  .lg-step-num {
    font-family: 'Anton', sans-serif;
    font-size: 13px;
    font-weight: 400;
    color: var(--color-primary);
    min-width: 24px;
    flex-shrink: 0;
  }
  .lg-step-text {
    font-family: var(--font-body);
    font-size: 13px;
    color: var(--color-navy-mid);
    line-height: 1.65;
    margin: 0;
  }
  .lg-contact-box {
    border: 1px solid var(--color-border);
    border-radius: var(--card-radius);
    padding: 24px;
    background: var(--color-bg);
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  .lg-contact-title {
    font-family: 'Anton', sans-serif;
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: var(--color-navy);
    margin: 0;
  }
  .lg-contact-link {
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--color-primary);
    font-family: var(--font-body);
    font-size: 13px;
    font-weight: 600;
    text-decoration: none;
    transition: var(--transition);
  }
  .lg-contact-link:hover { color: var(--color-primary-dark); }

  /* ═══════════════════════════════════
     RESPONSIVE
  ═══════════════════════════════════ */
  @media (max-width: 900px) {
    .lg-intro-grid { grid-template-columns: 1fr; }
    .lg-intro-divider { display: none; }
    .lg-intro-left { padding-right: 0; margin-bottom: 32px; }
    .lg-intro-right { padding-left: 0; }
    .lg-naming-grid { grid-template-columns: 1fr 1fr; }
    .lg-bricks-grid { grid-template-columns: 1fr; gap: 40px; }
    .lg-cod-grid { grid-template-columns: repeat(2, 1fr); }
    .lg-form-grid { grid-template-columns: 1fr; gap: 40px; }
  }
  @media (max-width: 560px) {
    .lg-naming-grid { grid-template-columns: 1fr; max-width: 420px; margin: 32px auto 0; }
    .lg-cod-grid { grid-template-columns: 1fr; max-width: 360px; margin: 32px auto 0; }
    .lg-brick-sample-grid { grid-template-columns: repeat(2, 1fr); }
    .lg-form-row { grid-template-columns: 1fr; }
    .lg-hero-btns { flex-direction: column; }
  }
`;

/* ─────────────────────────────────────────────────────────
   DATA
───────────────────────────────────────────────────────── */
const namingOpportunities = [
  {
    tier: 'Founding Benefactor',
    amount: '$250,000+',
    ngn: '₦400M+',
    color: '#b45309',
    bg: '#fef3c7',
    badge: 'Highest Honor',
    badgeColor: '#92400e',
    perks: [
      'Name a major facility or wing of the center',
      'Permanent engraved plaque at the main entrance',
      'Named in all official foundation publications',
      'Invited to the center dedication ceremony',
      'Recognized in the Foundation Hall of Honor',
    ],
  },
  {
    tier: 'Legacy Builder',
    amount: '$100,000+',
    ngn: '₦160M+',
    color: 'var(--color-navy-mid)',
    bg: 'var(--color-navy-light)',
    badge: 'Distinguished',
    badgeColor: 'var(--color-navy-mid)',
    perks: [
      'Name a clinic, ward, or training room',
      'Engraved recognition plaque in the facility',
      "Listed in the foundation's annual legacy report",
      'Invited to legacy donor events',
      'Recognized on the foundation website',
    ],
  },
  {
    tier: 'Community Pillar',
    amount: '$25,000+',
    ngn: '₦40M+',
    color: 'var(--color-green)',
    bg: 'var(--color-green-light)',
    badge: 'Honored',
    badgeColor: 'var(--color-green-dark)',
    perks: [
      'Name a piece of medical equipment or resource center',
      'Recognition on the Legacy Donors Wall',
      'Named in legacy giving publications',
      'Personal thank-you from Clara Ada Ogbaa',
      'Annual impact update on your named gift',
    ],
  },
];

const brickNames = [
  'In Memory of\nChukwuemeka Eze', 'In Honor of\nDr. & Mrs. Okafor',
  'The Adeyemi\nFamily', '', 'In Memory of\nChioma Nwosu',
  'In Honor of\nNurse Grace Ibe', 'The Obi\nFamily Legacy', '',
  'In Memory of\nProf. Emmanuel', '', '', 'In Honor of\nClara Ogbaa',
];

const circleTiers = [
  { name: 'Platinum Circle', amount: '$50,000+', ngn: '₦80M+', color: '#475569', bg: '#f1f5f9', border: '#94a3b8', icon: Star,
    perks: ['Lifetime honorary membership', 'Named in all foundation communications', 'Annual personal briefing from Clara Ada Ogbaa', 'Invited to all major foundation events', 'Prominent recognition on donors wall'] },
  { name: 'Gold Circle', amount: '$25,000+', ngn: '₦40M+', color: '#92400e', bg: '#fef3c7', border: '#d97706', icon: Star,
    perks: ['Founding member recognition', 'Named in annual reports', 'Invited to legacy donor reception', 'Quarterly foundation updates', 'Recognition on foundation website'] },
  { name: 'Silver Circle', amount: '$10,000+', ngn: '₦16M+', color: '#1e3a8a', bg: '#dbeafe', border: '#3b82f6', icon: Star,
    perks: ['Recognition in annual report', 'Named on legacy donors wall', 'Invited to annual legacy event', 'Regular impact updates', 'Certificate of appreciation'] },
  { name: 'Dignity Circle', amount: '$5,000+', ngn: '₦8M+', color: '#166534', bg: '#dcfce7', border: '#16a34a', icon: Heart,
    perks: ['Legacy donor recognition', 'Named in foundation newsletters', 'Annual update on your impact', 'Certificate of legacy commitment', 'Personal thank-you from Clara Ada Ogbaa'] },
];

const waysToGive = [
  { icon: Heart,   title: 'Bequest in Your Will or Trust',  desc: "Designate JoMabel Healthcare Foundation as a beneficiary in your will or living trust — a fixed amount, a percentage, or the residue of your estate." },
  { icon: Shield,  title: 'Beneficiary Designation',        desc: 'Name the foundation as a beneficiary on life insurance policies, retirement accounts (IRA, 401k), or investment accounts.' },
  { icon: Star,    title: 'Charitable Gift Annuity',        desc: "Make a gift and receive fixed income payments for life, with the remainder supporting JoMabel's mission upon your passing." },
  { icon: Heart,   title: 'Endowment Fund',                 desc: "Establish a named endowment in your honor or a loved one's — creating a permanent fund whose earnings support our programs in perpetuity." },
];

/* ─────────────────────────────────────────────────────────
   HERO
───────────────────────────────────────────────────────── */
const LegacyHero = () => (
  <section className="lg-hero">
    <img src={an1} alt="JoMabel Medical Center" className="lg-hero-img" />
    <div className="lg-hero-overlay" />
    <div className="lg-hero-content">
      <span className="lg-hero-kicker">Legacy Giving</span>
      <h1 className="lg-hero-title">
        Leave a Legacy<br />That <span>Heals Generations</span>
      </h1>
      <p className="lg-hero-sub">
        Your legacy gift to JoMabel Healthcare Foundation ensures that dignified,
        accessible healthcare reaches communities in Ufuma, Anambra State for generations to come.
      </p>
      <div className="lg-hero-btns">
        <button className="lg-btn-primary" onClick={() => document.getElementById('legacy-form')?.scrollIntoView({ behavior: 'smooth' })}>
          Express Your Intent <ArrowRight size={15} />
        </button>
        <button className="lg-btn-ghost" onClick={() => document.getElementById('naming-section')?.scrollIntoView({ behavior: 'smooth' })}>
          Explore Legacy Options
        </button>
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────
   INTRO
───────────────────────────────────────────────────────── */
const useVisible = (threshold = 0.25) => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<any>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
};

const LegacyIntro = () => {
  const { ref, visible } = useVisible();
  return (
    <section ref={ref} className="lg-section" style={{ background: 'var(--color-bg)' }}>
      <div className="lg-inner">
        <div className="lg-edit-header">
          <p className="lg-kicker">Why Legacy Giving</p>
          <h2 className="lg-headline">A Gift That Outlives a Lifetime</h2>
        </div>
        <p className="lg-divider">Two ways your legacy endures</p>
        <div className="lg-intro-grid">
          <div className="lg-intro-left">
            <p className="lg-body">
              A legacy gift is one of the most profound acts of generosity — it declares that your values,
              your compassion, and your commitment to human dignity will continue to shape the world
              long after you are gone.
            </p>
            <p className="lg-body">
              By including JoMabel Healthcare Foundation in your estate plans, you become part of a
              living legacy of healing — helping to build and sustain a world-class medical center
              that will serve thousands of families in southeastern Nigeria for generations.
            </p>
          </div>
          <div className="lg-intro-divider" />
          <div className="lg-intro-right">
            <p className="lg-kicker" style={{ marginBottom: 0 }}>Ways to Give a Legacy Gift</p>
            {waysToGive.map((w, i) => {
              const Icon = w.icon;
              return (
                <div key={i} className="lg-way">
                  <div className="lg-way-icon"><Icon size={18} /></div>
                  <div>
                    <p className="lg-way-title">{w.title}</p>
                    <p className="lg-way-desc">{w.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────────────────
   NAMING OPPORTUNITIES
───────────────────────────────────────────────────────── */
const NamingOpportunities = () => {
  const { ref, visible } = useVisible();
  return (
    <section ref={ref} id="naming-section" className="lg-section lg-naming-bg">
      <div className="lg-inner">
        <div className="lg-edit-header">
          <p className="lg-kicker">Naming Opportunities</p>
          <h2 className="lg-headline">Attach Your Name to a Lasting Legacy</h2>
        </div>
        <p className="lg-divider">Honor yourself, a loved one, or a cherished memory — permanently</p>
        <div className="lg-naming-grid">
          {namingOpportunities.map((opp, i) => (
            <div key={i} className="lg-naming-card">
              <div className="lg-naming-card-top">
                <span style={{ display: 'inline-block', background: opp.bg, color: opp.badgeColor, fontSize: '10px', fontWeight: '700', letterSpacing: '0.08em', textTransform: 'uppercase', padding: '3px 10px', borderRadius: '4px' }}>
                  {opp.badge}
                </span>
                <h3 className="lg-naming-tier" style={{ color: opp.color }}>{opp.tier}</h3>
                <p className="lg-naming-amount" style={{ color: opp.color }}>{opp.amount}</p>
                <p className="lg-naming-ngn">{opp.ngn}</p>
                {opp.perks.map((perk, j) => (
                  <div key={j} className="lg-perk">
                    <Check size={13} style={{ flexShrink: 0, marginTop: '2px', color: opp.color }} />
                    <p className="lg-perk-text">{perk}</p>
                  </div>
                ))}
              </div>
              <div className="lg-naming-card-footer">
                <button
                  className="lg-btn-outline"
                  style={{ borderColor: opp.color, color: opp.color }}
                  onClick={() => document.getElementById('legacy-form')?.scrollIntoView({ behavior: 'smooth' })}
                  onMouseOver={e => { (e.currentTarget as HTMLButtonElement).style.background = opp.bg; }}
                  onMouseOut={e => { (e.currentTarget as HTMLButtonElement).style.background = 'transparent'; }}
                >
                  Inquire About This Opportunity
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────────────────
   MEMORIAL BRICKS
───────────────────────────────────────────────────────── */
const MemorialBricks = () => {
  const { ref } = useVisible();
  return (
    <section ref={ref} className="lg-section" style={{ background: 'var(--color-bg)' }}>
      <div className="lg-inner">
        <div className="lg-edit-header">
          <p className="lg-kicker">Memorial Dedication Bricks</p>
          <h2 className="lg-headline">Engrave a Name. Preserve a Memory.</h2>
        </div>
        <p className="lg-divider">Permanently installed in the JoMabel Medical Center courtyard &amp; walkways</p>
        <div className="lg-bricks-grid">
          <div>
            <p className="lg-body">
              Dedication bricks will be permanently installed in the JoMabel Medical Center courtyard
              and walkways — a living memorial garden where patients, families, and visitors will walk
              for generations, reading the names of those who made this center possible.
            </p>
            {[
              { name: 'Standard Brick',   price: '$500 / ₦800K',  desc: 'Name + dedication — installed in the Memorial Walkway' },
              { name: 'Legacy Brick',     price: '$1,000 / ₦1.6M', desc: 'Name + dedication + family crest or symbol option' },
              { name: 'Foundation Stone', price: '$5,000 / ₦8M',   desc: 'Prominent courtyard placement + certificate of dedication' },
            ].map((tier, i) => (
              <div key={i} className="lg-brick-tier">
                <div>
                  <p className="lg-brick-tier-name">{tier.name}</p>
                  <p className="lg-brick-tier-desc">{tier.desc}</p>
                </div>
                <span className="lg-brick-price">{tier.price}</span>
              </div>
            ))}
            <button
              className="lg-btn-primary"
              style={{ marginTop: '20px' }}
              onClick={() => document.getElementById('legacy-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Dedicate a Brick <ArrowRight size={14} />
            </button>
          </div>

          <div>
            <p className="lg-divider" style={{ marginBottom: '16px' }}>Preview — memorial walkway</p>
            <div className="lg-brick-sample-grid">
              {brickNames.map((name, i) => (
                <div key={i} className={`lg-brick-tile${!name ? ' empty' : ''}`}>
                  {name && <p>{name}</p>}
                </div>
              ))}
            </div>
            <p style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-light)', fontSize: '11px', marginTop: '12px', fontStyle: 'italic' }}>
              * Sample names shown for illustration only.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────────────────
   CIRCLE OF DIGNITY
───────────────────────────────────────────────────────── */
const CircleOfDignity = () => {
  const { ref } = useVisible();
  return (
    <section ref={ref} className="lg-section lg-cod-bg">
      <div className="lg-inner">
        <div className="lg-edit-header">
          <p className="lg-kicker">Our Giving Society</p>
          <h2 className="lg-headline">The Circle of Dignity</h2>
        </div>
        <p className="lg-divider">Lifetime recognition tied to the very center your generosity helped build</p>
        <div className="lg-cod-grid">
          {circleTiers.map((tier, i) => {
            const Icon = tier.icon;
            return (
              <div key={i} className="lg-cod-tier" style={{ background: tier.bg, border: `2px solid ${tier.border}` }}>
                <Icon size={28} style={{ color: tier.color }} />
                <h3 className="lg-cod-name" style={{ color: tier.color }}>{tier.name}</h3>
                <p className="lg-cod-amount" style={{ color: tier.color }}>{tier.amount}</p>
                <p className="lg-cod-ngn" style={{ color: tier.color }}>{tier.ngn}</p>
                <div className="lg-cod-perks" style={{ borderColor: tier.border }}>
                  {tier.perks.map((perk, j) => (
                    <div key={j} className="lg-cod-perk">
                      <Check size={12} style={{ flexShrink: 0, marginTop: '3px', color: tier.color }} />
                      <p className="lg-cod-perk-text">{perk}</p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────────────────
   QUOTE STRIP
───────────────────────────────────────────────────────── */
const LegacyQuoteStrip = () => (
  <div className="lg-quote-strip">
    <Heart size={32} style={{ margin: '0 auto 20px', color: 'var(--color-primary)', display: 'block' }} />
    <p className="lg-quote-text">
      "Healthcare should never be a privilege reserved for a few.
      It is a human right — and it is the legacy we are called to leave."
    </p>
    <p className="lg-quote-author">— Clara Ada Ogbaa, Ed.D., Founder</p>
  </div>
);

/* ─────────────────────────────────────────────────────────
   FORM
───────────────────────────────────────────────────────── */
const LegacyForm = () => {
  const { ref } = useVisible();
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', phone: '', giftType: '', amount: '', dedication: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const update = (k: string, v: string) => setForm(f => ({ ...f, [k]: v }));

  if (submitted) return (
    <section id="legacy-form" className="lg-section lg-form-bg">
      <div className="lg-inner" style={{ textAlign: 'center', maxWidth: 600 }}>
        <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'var(--color-green-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
          <Check size={32} color="var(--color-green)" />
        </div>
        <h2 className="lg-headline" style={{ marginBottom: 14 }}>Thank You, {form.firstName}.</h2>
        <p className="lg-body" style={{ marginBottom: 20 }}>
          Your legacy intention has been received. Clara Ada Ogbaa or a member of the JoMabel team
          will reach out to you personally within 3–5 business days.
        </p>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--color-text-muted)' }}>
          Questions? Email us at <a href="mailto:claraogbaa2022@gmail.com" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>claraogbaa2022@gmail.com</a>
        </p>
      </div>
    </section>
  );

  return (
    <section ref={ref} id="legacy-form" className="lg-section lg-form-bg">
      <div className="lg-inner">
        <div className="lg-edit-header">
          <p className="lg-kicker">Express Your Intent</p>
          <h2 className="lg-headline">Begin Your Legacy Conversation</h2>
        </div>
        <p className="lg-divider">Complete this form — we will reach out personally to discuss your gift</p>
        <div className="lg-form-grid">
          <div className="lg-form-fields">
            <div className="lg-form-row">
              <div className="lg-field"><label className="lg-label">First Name *</label><input className="lg-input" placeholder="Clara" value={form.firstName} onChange={e => update('firstName', e.target.value)} /></div>
              <div className="lg-field"><label className="lg-label">Last Name *</label><input className="lg-input" placeholder="Ogbaa" value={form.lastName} onChange={e => update('lastName', e.target.value)} /></div>
            </div>
            <div className="lg-field"><label className="lg-label">Email Address *</label><input className="lg-input" type="email" placeholder="your@email.com" value={form.email} onChange={e => update('email', e.target.value)} /></div>
            <div className="lg-field"><label className="lg-label">Phone Number</label><input className="lg-input" placeholder="+1 (512) 000-0000" value={form.phone} onChange={e => update('phone', e.target.value)} /></div>
            <div className="lg-field">
              <label className="lg-label">Type of Legacy Gift</label>
              <select className="lg-select" value={form.giftType} onChange={e => update('giftType', e.target.value)}>
                <option value="">Select an option</option>
                <option value="bequest">Bequest in Will or Trust</option>
                <option value="beneficiary">Beneficiary Designation</option>
                <option value="annuity">Charitable Gift Annuity</option>
                <option value="endowment">Endowment Fund</option>
                <option value="brick">Memorial Dedication Brick</option>
                <option value="naming">Naming Opportunity</option>
                <option value="other">Other / Not Sure Yet</option>
              </select>
            </div>
            <div className="lg-field"><label className="lg-label">Approximate Gift Amount (Optional)</label><input className="lg-input" placeholder="e.g. $10,000 or ₦16,000,000" value={form.amount} onChange={e => update('amount', e.target.value)} /></div>
            <div className="lg-field"><label className="lg-label">Dedication / Honoree Name (if applicable)</label><input className="lg-input" placeholder="In memory of / In honor of…" value={form.dedication} onChange={e => update('dedication', e.target.value)} /></div>
            <div className="lg-field"><label className="lg-label">Message or Questions</label><textarea className="lg-textarea" placeholder="Tell us anything that would help us serve you better…" value={form.message} onChange={e => update('message', e.target.value)} /></div>
            <button className="lg-btn-dark" onClick={() => { if (!form.firstName || !form.email) return; setSubmitted(true); }}>
              Submit Legacy Intention <ArrowRight size={15} />
            </button>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '11.5px', color: 'var(--color-text-light)', textAlign: 'center', margin: 0 }}>
              Your information is confidential and will only be used to follow up on your legacy intentions.
            </p>
          </div>

          <div className="lg-form-side">
            <div style={{ borderRadius: 'var(--card-radius)', overflow: 'hidden', boxShadow: 'var(--shadow-md)' }}>
              <img src={outreach3} alt="JoMabel team" style={{ width: '100%', height: 220, objectFit: 'cover', display: 'block' }} />
            </div>
            <div className="lg-next-steps">
              <p className="lg-kicker" style={{ margin: 0 }}>What Happens Next</p>
              {[
                'We receive your legacy intention form confidentially.',
                'Clara Ada Ogbaa or a team member reaches out personally within 3–5 days.',
                'We work with you at your own pace — no pressure, no rush.',
                'Your legacy is confirmed, documented, and permanently honored.',
              ].map((text, i) => (
                <div key={i} className="lg-next-step">
                  <span className="lg-step-num">0{i + 1}</span>
                  <p className="lg-step-text">{text}</p>
                </div>
              ))}
            </div>
            <div className="lg-contact-box">
              <p className="lg-contact-title">Prefer to speak directly?</p>
              <p className="lg-body" style={{ margin: 0 }}>Clara Ada Ogbaa welcomes personal conversations about legacy giving.</p>
              <a href="mailto:claraogbaa2022@gmail.com" className="lg-contact-link"><Mail size={14} /> claraogbaa2022@gmail.com</a>
              <a href="tel:+15125080277" className="lg-contact-link"><Phone size={14} /> +1 (512) 508-0277</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────────────────
   PAGE ASSEMBLY
───────────────────────────────────────────────────────── */
const LegacyGiving = () => (
  <div style={{ fontFamily: 'var(--font-body)' }}>
    <style>{styles}</style>
    <Navbar />
    <LegacyHero />
    <LegacyIntro />
    <NamingOpportunities />
    <MemorialBricks />
    <CircleOfDignity />
    <LegacyQuoteStrip />
    <LegacyForm />
    <Footer />
  </div>
);

export default LegacyGiving;