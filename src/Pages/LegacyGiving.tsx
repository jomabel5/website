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

  /* ── Open, centered section header — no boxed border ── */
  .lg-edit-header {
    text-align: center;
    max-width: 640px;
    margin: 0 auto 12px;
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

  /* ── Divider label — plain centered subline, no rule ── */
  .lg-divider {
    font-family: var(--font-body);
    font-size: 13px;
    font-weight: 400;
    color: var(--color-text-muted);
    text-align: center;
    margin: 0 0 40px;
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
     HERO — open photo-left / text-right
  ═══════════════════════════════════ */
  .lg-hero {
    padding: clamp(48px, 7vw, 80px) clamp(20px, 5vw, 64px);
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1.05fr 1fr;
    gap: clamp(32px, 5vw, 64px);
    align-items: center;
    font-family: var(--font-body);
  }
  .lg-hero-photo-wrap {
    border-radius: var(--card-radius);
    overflow: hidden;
  }
  .lg-hero-img {
    width: 100%;
    height: 100%;
    min-height: 340px;
    object-fit: cover;
    object-position: center;
    display: block;
  }
  .lg-hero-kicker {
    font-family: var(--font-body);
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 2.5px;
    text-transform: uppercase;
    color: var(--color-primary);
    margin: 0 0 14px;
    display: block;
  }
  .lg-hero-title {
    font-family: var(--font-body);
    font-size: clamp(28px, 3.6vw, 44px);
    font-weight: 700;
    letter-spacing: 0;
    text-transform: none;
    line-height: 1.15;
    color: var(--color-navy);
    margin: 0 0 20px;
  }
  .lg-hero-title span { color: var(--color-navy); }
  .lg-hero-sub {
    font-family: var(--font-body);
    font-size: clamp(14px, 1.3vw, 16px);
    color: var(--color-text-muted);
    line-height: 1.8;
    margin: 0 0 32px;
    max-width: 460px;
  }
  .lg-hero-btns { display: flex; gap: 14px; flex-wrap: wrap; }

  @media (max-width: 860px) {
    .lg-hero { grid-template-columns: 1fr; }
    .lg-hero-img { min-height: 280px; }
  }

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
    background: transparent;
    color: var(--color-green);
    border: 1.5px solid var(--color-green);
    border-radius: var(--btn-radius);
    padding: 13px 28px;
    font-family: var(--font-body);
    font-size: 13px;
    font-weight: 700;
    cursor: pointer;
    transition: var(--transition);
  }
  .lg-btn-ghost:hover { background: var(--color-green-light); }

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
     INTRO — two col, open (no divider line)
  ═══════════════════════════════════ */
  .lg-intro-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 64px;
    align-items: start;
  }
  .lg-intro-right { display: flex; flex-direction: column; gap: 20px; }
  .lg-intro-right-title {
    font-family: var(--font-body);
    font-size: clamp(20px, 2.2vw, 26px);
    font-weight: 700;
    color: var(--color-navy);
    margin: 0 0 8px;
    line-height: 1.25;
  }

  /* way-to-give item */
  .lg-way {
    display: flex;
    align-items: flex-start;
    gap: 14px;
  }
  .lg-way-icon {
    color: var(--color-green);
    flex-shrink: 0;
    margin-top: 2px;
  }
  .lg-way-title {
    font-family: var(--font-body);
    font-size: 15px;
    font-weight: 700;
    color: var(--color-navy);
    margin: 0 0 4px;
  }
  .lg-way-desc {
    font-family: var(--font-body);
    font-size: 13.5px;
    color: var(--color-text-muted);
    line-height: 1.65;
    margin: 0;
  }

  /* ═══════════════════════════════════
     NAMING OPPORTUNITIES — flat uniform cards
  ═══════════════════════════════════ */
  .lg-naming-bg { background: var(--color-bg); }

  .lg-naming-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
  }
  .lg-naming-card {
    background: var(--color-green-light);
    border-radius: var(--card-radius);
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }
  .lg-naming-card-top { padding: 32px 32px 24px; flex: 1; }
  .lg-naming-card-footer { padding: 0 32px 32px; }
  .lg-naming-badge {
    font-family: var(--font-body);
    font-size: 11px;
    font-weight: 600;
    color: var(--color-text-muted);
    text-transform: none;
    display: block;
    margin-bottom: 8px;
  }
  .lg-naming-tier {
    font-family: var(--font-body);
    font-size: clamp(18px, 2vw, 22px);
    font-weight: 700;
    color: var(--color-navy);
    margin: 0 0 6px;
  }
  .lg-naming-amount {
    font-family: var(--font-body);
    font-size: clamp(24px, 2.6vw, 30px);
    font-weight: 700;
    color: var(--color-green-dark);
    margin: 0 0 4px;
  }
.lg-naming-ngn {
  font-family: var(--font-body);
  font-size: 15px;
  font-weight: 600;
  color: var(--color-navy-mid);
  margin: 0 0 18px;
}
  .lg-perk {
    display: flex;
    align-items: flex-start;
    gap: 9px;
    margin-bottom: 10px;
  }
  .lg-perk-text {
    font-family: var(--font-body);
    font-size: 13.5px;
    color: var(--color-navy-mid);
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
  }
  .lg-brick-tier {
    background: var(--color-navy);
    border-radius: var(--card-radius);
    padding: 20px 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
    margin-bottom: 14px;
  }
  .lg-brick-tier-name {
    font-family: var(--font-body);
    font-size: 17px;
    font-weight: 700;
    color: #ffffff;
    margin: 0 0 4px;
  }
  .lg-brick-tier-desc {
    font-family: var(--font-body);
    font-size: 12.5px;
    color: rgba(255,255,255,0.65);
    margin: 0;
  }
  .lg-brick-price {
    font-family: var(--font-body);
    font-size: 15px;
    font-weight: 700;
    color: #ffffff;
    flex-shrink: 0;
    white-space: nowrap;
    text-align: right;
  }
  .lg-brick-sample-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
  }
  .lg-brick-tile {
    aspect-ratio: 2/1;
    border-radius: 8px;
    background: var(--color-surface);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px;
    text-align: center;
    transition: var(--transition);
    cursor: default;
  }
  .lg-brick-tile:hover { background: var(--color-primary-light); }
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
     CIRCLE OF DIGNITY — flat uniform cards
  ═══════════════════════════════════ */
  .lg-cod-bg { background: var(--color-bg); }

  .lg-cod-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
  }
  .lg-cod-tier {
    background: var(--color-green-light);
    border-radius: var(--card-radius);
    padding: 28px 24px;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .lg-cod-name {
    font-family: var(--font-body);
    font-size: clamp(15px, 1.5vw, 18px);
    font-weight: 700;
    color: var(--color-navy);
    margin: 4px 0 0;
  }
  .lg-cod-amount {
    font-family: var(--font-body);
    font-size: clamp(20px, 2.2vw, 24px);
    font-weight: 700;
    color: var(--color-green-dark);
    margin: 0;
  }
  .lg-cod-ngn {
    font-family: var(--font-body);
    font-size: 12px;
    color: var(--color-text-light);
    margin: 0;
  }
  .lg-cod-perks { padding-top: 14px; margin-top: 6px; display: flex; flex-direction: column; gap: 10px; }
  .lg-cod-perk { display: flex; align-items: flex-start; gap: 8px; }
  .lg-cod-perk-text {
    font-family: var(--font-body);
    font-size: 13px;
    color: var(--color-navy-mid);
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
  .lg-form-bg { background: var(--color-green-light); }

  .lg-form-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 64px;
    align-items: start;
  }
  .lg-form-card {
    background: #ffffff;
    border: 2px solid var(--color-green);
    border-radius: var(--card-radius);
    padding: 32px;
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
  .lg-form-side { display: flex; flex-direction: column; gap: 32px; }
  .lg-next-steps {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  .lg-next-steps-title {
    font-family: var(--font-body);
    font-size: clamp(19px, 2vw, 24px);
    font-weight: 700;
    color: var(--color-navy);
    margin: 0 0 4px;
  }
  .lg-next-step { display: flex; align-items: flex-start; gap: 14px; }
  .lg-step-num {
    font-family: var(--font-body);
    font-size: 14px;
    font-weight: 700;
    color: var(--color-green-dark);
    min-width: 20px;
    flex-shrink: 0;
  }
  .lg-step-text {
    font-family: var(--font-body);
    font-size: 14px;
    color: var(--color-navy-mid);
    line-height: 1.65;
    margin: 0;
  }
  .lg-contact-box {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .lg-contact-title {
    font-family: var(--font-body);
    font-size: clamp(18px, 1.8vw, 22px);
    font-weight: 700;
    color: var(--color-navy);
    margin: 0 0 4px;
  }
  .lg-contact-link {
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--color-green-dark);
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
    .lg-intro-grid { grid-template-columns: 1fr; gap: 40px; }
    .lg-naming-grid { grid-template-columns: 1fr 1fr; }
    .lg-bricks-grid { grid-template-columns: 1fr; gap: 40px; }
    .lg-cod-grid { grid-template-columns: repeat(2, 1fr); }
    .lg-form-grid { grid-template-columns: 1fr; gap: 40px; }
  }
  @media (max-width: 560px) {
    .lg-naming-grid { grid-template-columns: 1fr; max-width: 420px; margin: 0 auto; }
    .lg-cod-grid { grid-template-columns: 1fr; max-width: 360px; margin: 0 auto; }
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
    amount: '$50,000+',
    ngn: '₦75M+',
    badge: 'Highest Honor',
    perks: [
      'Name a major facility or wing of the center',
      'Permanent engraved plaque at the main entrance',
      'Named in all official foundation publications',
      'Invited to the center dedication ceremony',
      'Recognized in the Foundation Hall of Honor',
    ],
  },
  {
    tier: 'Distinguished Benefactor',
    amount: '$20,000+',
    ngn: '₦30M+',
    badge: 'Distinguished',
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
    amount: '$5,000+',
    ngn: '₦7.5M+',
    badge: 'Honored',
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
  { name: 'Platinum Circle', amount: '$50,000+', ngn: '₦80M+', icon: Star,
    perks: ['Lifetime honorary membership', 'Named in all foundation communications', 'Annual personal briefing from Clara Ada Ogbaa', 'Invited to all major foundation events', 'Prominent recognition on donors wall'] },
  { name: 'Gold Circle', amount: '$25,000+', ngn: '₦40M+', icon: Star,
    perks: ['Founding member recognition', 'Named in annual reports', 'Invited to legacy donor reception', 'Quarterly foundation updates', 'Recognition on foundation website'] },
  { name: 'Silver Circle', amount: '$10,000+', ngn: '₦16M+', icon: Star,
    perks: ['Recognition in annual report', 'Named on legacy donors wall', 'Invited to annual legacy event', 'Regular impact updates', 'Certificate of appreciation'] },
  { name: 'Dignity Circle', amount: '$5,000+', ngn: '₦8M+', icon: Heart,
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
    <div className="lg-hero-photo-wrap">
      <img src={an1} alt="JoMabel Medical Center" className="lg-hero-img" />
    </div>
    <div>
      <span className="lg-hero-kicker">Legacy Giving</span>
      <h1 className="lg-hero-title">Leave a Legacy That Heals Generations</h1>
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
          <div>
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
          <div className="lg-intro-right">
            <h3 className="lg-intro-right-title">Ways to Give a Legacy Gift</h3>
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
                <span className="lg-naming-badge">{opp.badge}</span>
                <h3 className="lg-naming-tier">{opp.tier}</h3>
                <p className="lg-naming-amount">{opp.amount}</p>
                <p className="lg-naming-ngn">{opp.ngn}</p>
                {opp.perks.map((perk, j) => (
                  <div key={j} className="lg-perk">
                    <Check size={15} style={{ flexShrink: 0, marginTop: '2px', color: 'var(--color-green-dark)' }} />
                    <p className="lg-perk-text">{perk}</p>
                  </div>
                ))}
              </div>
              <div className="lg-naming-card-footer">
                <button
                  className="lg-btn-primary"
                  style={{ width: '100%', justifyContent: 'center' }}
                  onClick={() => document.getElementById('legacy-form')?.scrollIntoView({ behavior: 'smooth' })}
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
  { name: 'Standard Brick',   price: '$200 / ₦300,000',   desc: 'Name + dedication — installed in the Memorial Walkway' },
  { name: 'Legacy Brick',     price: '$500 / ₦750,000',   desc: 'Name + dedication + family crest or symbol option' },
  { name: 'Foundation Stone', price: '$3,000 / ₦4,500,000', desc: 'Prominent courtyard placement + certificate of dedication' },
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
            <h3 className="lg-intro-right-title" style={{ marginBottom: '16px' }}>Preview — Memorial Walkway</h3>
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
          {circleTiers.map((tier, i) => (
            <div key={i} className="lg-cod-tier">
              <h3 className="lg-cod-name">{tier.name}</h3>
              <p className="lg-cod-amount">{tier.amount}</p>
              <p className="lg-cod-ngn">{tier.ngn}</p>
              <div className="lg-cod-perks">
                {tier.perks.map((perk, j) => (
                  <div key={j} className="lg-cod-perk">
                    <Check size={13} style={{ flexShrink: 0, marginTop: '3px', color: 'var(--color-green-dark)' }} />
                    <p className="lg-cod-perk-text">{perk}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
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
    <p className="lg-quote-text">
      "Healthcare should never be a privilege reserved for a few.
      It is a human right — and it is the legacy we are called to leave."
    </p>
    <p className="lg-quote-author">— Dr. Clara Ada Ogbaa - Founder</p>
  </div>
);

/* ─────────────────────────────────────────────────────────
   FORM
───────────────────────────────────────────────────────── */
const LegacyForm = () => {
  const { ref } = useVisible();
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', phone: '', giftType: '', amount: '', dedication: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const update = (k: string, v: string) => setForm(f => ({ ...f, [k]: v }));

  const handleSubmit = async () => {
    if (!form.firstName || !form.lastName || !form.email) {
      setError('Please fill in your name and email address.');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      setError('Please enter a valid email address.');
      return;
    }

    setIsLoading(true);
    setError('');

    const giftTypeLabel: Record<string, string> = {
      bequest: 'Bequest in Will or Trust',
      beneficiary: 'Beneficiary Designation',
      annuity: 'Charitable Gift Annuity',
      endowment: 'Endowment Fund',
      brick: 'Memorial Dedication Brick',
      naming: 'Naming Opportunity',
      other: 'Other / Not Sure Yet',
    };

    const messageLines = [
      `Phone: ${form.phone || 'Not provided'}`,
      `Type of Legacy Gift: ${giftTypeLabel[form.giftType] || 'Not specified'}`,
      `Approximate Gift Amount: ${form.amount || 'Not provided'}`,
      `Dedication / Honoree: ${form.dedication || 'Not provided'}`,
      '',
      `Message: ${form.message || 'None provided'}`,
    ].join('\n');

    try {
      const formData = new URLSearchParams();
      formData.append('name', `${form.firstName} ${form.lastName}`);
      formData.append('email', form.email);
      formData.append('subject', 'Legacy Giving Intent');
      formData.append('message', messageLines);

      const response = await fetch('/contact-handler.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: formData.toString(),
      });
      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
      } else {
        setError(data.message || 'Failed to send. Please try again.');
      }
    } catch (err) {
      console.error('Legacy form error:', err);
      setError('Network error. Please check your connection and try again.');
    } finally {
      setIsLoading(false);
    }
  };

  if (submitted) return (
    <section id="legacy-form" className="lg-section lg-form-bg">
      <div className="lg-inner" style={{ textAlign: 'center', maxWidth: 600 }}>
        <div style={{ width: 72, height: 72, borderRadius: '50%', background: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
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
          <div className="lg-form-card">
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
                  <option value="">Select</option>
                  <option value="bequest">Bequest in Will or Trust</option>
                  <option value="beneficiary">Beneficiary Designation</option>
                  <option value="annuity">Charitable Gift Annuity</option>
                  <option value="endowment">Endowment Fund</option>
                  <option value="brick">Memorial Dedication Brick</option>
                  <option value="naming">Naming Opportunity</option>
                  <option value="other">Other / Not Sure Yet</option>
                </select>
              </div>
              <div className="lg-form-row">
                <div className="lg-field"><label className="lg-label">Approximate Gift Amount (Optional)</label><input className="lg-input" placeholder="e.g. $10,000 or ₦16,000,000" value={form.amount} onChange={e => update('amount', e.target.value)} /></div>
                <div className="lg-field"><label className="lg-label">Dedication / Honoree Name (if applicable)</label><input className="lg-input" placeholder="In memory of / In honor of…" value={form.dedication} onChange={e => update('dedication', e.target.value)} /></div>
              </div>
              <div className="lg-field"><label className="lg-label">Message or Questions</label><textarea className="lg-textarea" placeholder="Tell us anything that would help us serve you better…" value={form.message} onChange={e => update('message', e.target.value)} disabled={isLoading} /></div>
              {error && (
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: '#991b1b', fontWeight: 600, margin: 0 }}>{error}</p>
              )}
              <button className="lg-btn-dark" onClick={handleSubmit} disabled={isLoading}>
                {isLoading ? 'Sending...' : 'Submit Legacy Intention'} {!isLoading && <ArrowRight size={15} />}
              </button>
            </div>
          </div>

          <div className="lg-form-side">
            <div className="lg-next-steps">
              <h3 className="lg-next-steps-title">What Happens Next</h3>
              {[
                'We receive your legacy intention form confidentially.',
                'Clara Ada Ogbaa or a team member reaches out personally within 3–5 days.',
                'We work with you at your own pace — no pressure, no rush.',
                'Your legacy is confirmed, documented, and permanently honored.',
              ].map((text, i) => (
                <div key={i} className="lg-next-step">
                  <span className="lg-step-num">{i + 1}</span>
                  <p className="lg-step-text">{text}</p>
                </div>
              ))}
            </div>
            <div className="lg-contact-box">
              <h3 className="lg-contact-title">Prefer to Speak Directly?</h3>
              <p className="lg-body" style={{ margin: 0 }}>Clara Ada Ogbaa welcomes personal conversations about legacy giving.</p>
              <a href="mailto:foundation@jomabelhealthcare.org" className="lg-contact-link"><Mail size={14} /> foundation@jomabelhealthcare.org</a>
              <a href="tel:+15125080277" className="lg-contact-link"><Phone size={14} /> (512) 508-0277</a>
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