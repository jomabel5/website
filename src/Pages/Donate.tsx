import React, { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import CampaignBanner from '../components/sections/CampaignBanner';
import { CheckCircle, RefreshCw, ArrowRight } from 'lucide-react';

/* ─────────────────────────────────────────────────────────────────────────────
   SHARED STYLES
───────────────────────────────────────────────────────────────────────────── */
const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Anton&family=Playfair+Display:wght@700&display=swap');

  .dn-page { font-family: var(--font-body); background: var(--color-bg); width: 100%; overflow-x: hidden; }

  /* ── shared section label ── */
  .dn-kicker {
    font-family: var(--font-body);
    font-size: 11px; font-weight: 700;
    letter-spacing: 2.5px; text-transform: uppercase;
    color: var(--color-primary); margin: 0 0 10px;
  }
  .dn-kicker-light { color: rgba(255,255,255,0.55); }

  /* ── section editorial header ── */
  .dn-section-header {
    border-left: 4px solid var(--color-navy);
    padding-left: 20px;
    margin-bottom: 52px;
  }
  .dn-section-header-light { border-left-color: var(--color-primary); }

  .dn-headline {
    font-family: 'Anton', sans-serif;
    font-size: clamp(26px, 3.5vw, 44px);
    font-weight: 400; letter-spacing: 0.01em;
    text-transform: uppercase; line-height: 1.1;
    color: var(--color-navy); margin: 0 0 12px;
  }
  .dn-headline-light { color: #ffffff; }

  .dn-sub {
    font-family: var(--font-body);
    font-size: clamp(13px, 1.2vw, 15px);
    color: var(--color-text-muted); line-height: 1.75;
    max-width: 560px; margin: 0;
  }
  .dn-sub-light { color: rgba(255,255,255,0.55); }

  /* ── copy field ── */
  .dn-copy-row {
    display: flex; align-items: center; justify-content: space-between;
    background: var(--color-surface); border: 1px solid var(--color-border);
    border-radius: 6px; padding: 10px 14px; gap: 10px;
    flex-wrap: wrap;
  }
  .dn-copy-btn {
    background: var(--color-navy); color: #fff; border: none;
    border-radius: 4px; padding: 6px 14px; font-size: 12px;
    font-weight: 700; cursor: pointer; white-space: nowrap;
    font-family: inherit; transition: var(--transition); flex-shrink: 0;
  }
  .dn-copy-btn:hover { background: var(--color-primary); }
  .dn-copy-btn.copied { background: var(--color-green); }

  /* ── form field ── */
  .dn-input {
    width: 100%; padding: 13px 16px;
    border: 1.5px solid var(--color-border); border-radius: 6px;
    font-family: var(--font-body); font-size: 14px;
    color: var(--color-text); outline: none;
    background: var(--color-bg); transition: var(--transition);
    box-sizing: border-box;
  }
  .dn-input:focus { border-color: var(--color-primary); box-shadow: 0 0 0 3px rgba(29,143,212,0.10); }
  .dn-input::placeholder { color: var(--color-text-light); }
  .dn-label {
    display: block; font-family: var(--font-body); font-size: 11px;
    font-weight: 700; letter-spacing: 1px; text-transform: uppercase;
    color: var(--color-text-muted); margin-bottom: 8px;
  }

  /* Responsive overrides */
  @media (max-width: 768px) {
    .dn-copy-row { flex-direction: column; align-items: stretch; }
    .dn-copy-btn { justify-content: center; }
  }
`;

/* ─────────────────────────────────────────────────────────────────────────────
   COPY BUTTON
───────────────────────────────────────────────────────────────────────────── */
const CopyButton = ({ text }: { text: string }) => {
  const [copied, setCopied] = useState(false);
  return (
    <button
      className={`dn-copy-btn${copied ? ' copied' : ''}`}
      onClick={() => { navigator.clipboard.writeText(text); setCopied(true); setTimeout(() => setCopied(false), 2000); }}
    >
      {copied ? '✓ Copied' : 'Copy'}
    </button>
  );
};

/* ─────────────────────────────────────────────────────────────────────────────
   HERO
───────────────────────────────────────────────────────────────────────────── */
const DonationHero = () => (
  <section className="donation-hero-section">
    <style>{`
      .donation-hero-section {
        position: relative;
        min-height: 520px;
        display: flex;
        align-items: flex-end;
        overflow: hidden;
      }
      .donation-hero-section img {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center 40%;
      }
      .donation-hero-section .hero-overlay {
        position: absolute;
        inset: 0;
        background: linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.40) 55%, rgba(0,0,0,0.10) 100%);
      }
      .donation-hero-section .hero-content {
        position: relative;
        z-index: 2;
        padding: 0 clamp(24px, 5vw, 72px) 64px;
        max-width: 720px;
        width: 100%;
      }
      .hero-kicker {
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
      .hero-kicker span {
        display: inline-block;
        width: 28px;
        height: 2px;
        background: var(--color-primary);
        flex-shrink: 0;
      }
      .donation-hero-section h1 {
        font-family: 'Anton', sans-serif;
        font-size: clamp(34px, 5.5vw, 64px);
        font-weight: 400;
        color: #ffffff;
        line-height: 1.08;
        letter-spacing: 0.01em;
        text-transform: uppercase;
        margin: 0 0 20px;
      }
      .donation-hero-section .hero-desc {
        font-family: var(--font-body);
        font-size: clamp(13px, 1.3vw, 16px);
        color: rgba(255,255,255,0.78);
        line-height: 1.75;
        margin: 0 0 32px;
        max-width: 520px;
      }
      .hero-buttons {
        display: flex;
        gap: 14px;
        flex-wrap: wrap;
      }
      .hero-btn-primary {
        background: var(--color-green);
        color: #fff;
        border: none;
        border-radius: var(--btn-radius);
        padding: 15px 32px;
        font-family: var(--font-body);
        font-size: 14px;
        font-weight: 700;
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 8px;
        transition: var(--transition);
      }
      .hero-btn-secondary {
        background: transparent;
        color: #fff;
        border: 1.5px solid rgba(255,255,255,0.45);
        border-radius: var(--btn-radius);
        padding: 15px 32px;
        font-family: var(--font-body);
        font-size: 14px;
        font-weight: 700;
        cursor: pointer;
        transition: var(--transition);
      }
      @media (max-width: 640px) {
        .donation-hero-section { min-height: 480px; }
        .donation-hero-section .hero-content { padding: 0 clamp(20px, 4vw, 24px) 48px; }
        .hero-buttons { flex-direction: column; }
        .hero-btn-primary, .hero-btn-secondary { justify-content: center; width: 100%; }
      }
    `}</style>
    <img
      src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1600&q=80"
      alt="Healthcare training"
    />
    <div className="hero-overlay" />
    <div className="hero-content">
      <div className="hero-kicker">
        <span />
        JoMabel Healthcare Foundation
      </div>
      <h1>
        Your Gift Builds<br />
        <span style={{ color: 'var(--color-primary)' }}>Generational Healthcare</span>
      </h1>
      <p className="hero-desc">
        Every dollar goes directly toward building Nigeria&apos;s next world-class medical
        and training campus in Ufuma, Anambra State.
      </p>
      <div className="hero-buttons">
        <button className="hero-btn-primary" onClick={() => document.getElementById('donor-levels')?.scrollIntoView({ behavior: 'smooth' })}>
          See Giving Levels <ArrowRight size={15} />
        </button>
        <button className="hero-btn-secondary" onClick={() => document.getElementById('payment-section')?.scrollIntoView({ behavior: 'smooth' })}>
          Donate Now
        </button>
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────────────────────────
   DONOR LEVELS
───────────────────────────────────────────────────────────────────────────── */
type Tab = 'community' | 'leadership' | 'major';

const communityLevels = [
  { amount: '$100',   title: 'Community Supporter',    accent: 'var(--color-primary)',   desc: 'Help fund community health education and outreach missions across southeastern Nigeria.' },
  { amount: '$250',   title: 'Screening Sponsor',      accent: 'var(--color-navy-mid)',  desc: 'Sponsor free health screenings for families who cannot afford basic medical checkups.' },
  { amount: '$500',   title: 'Patient Care Supporter', accent: 'var(--color-orange)',    desc: 'Provide direct patient care support — medications, supplies, and clinical services.' },
  { amount: '$1,000', title: 'Training Sponsor',       accent: 'var(--color-green)',     desc: 'Fund training for a community health worker, investing in the future of local healthcare.' },
];

const leadershipLevels = [
  { amount: '$5,000',    title: 'Founders Circle',           badge: 'Leadership', accent: 'var(--color-navy-mid)', desc: 'Join our founding circle of visionary donors committed to transforming rural healthcare in Nigeria.' },
  { amount: '$10,000',   title: 'Health Access Partner',     badge: 'Leadership', accent: 'var(--color-primary)',  desc: 'Partner directly with JHF to expand health access — recognised as a strategic foundation partner.' },
  { amount: '$25,000',   title: 'Community Impact Sponsor',  badge: 'Leadership', accent: 'var(--color-green)',    desc: 'Make a transformational impact — sponsor a full program area and receive naming recognition.' },
  { amount: '$100,000+', title: 'Legacy Donor',              badge: 'Legacy',     accent: 'var(--color-orange)',   desc: 'Secure your legacy — name a facility, department, or major initiative at the JoMabel campus.' },
];

const majorGifts = [
  { emoji: '🏫', title: 'Sponsor a Classroom',          amount: 'From $10,000', desc: 'Fund a dedicated training classroom at the Skill Acquisition & Medical Training Center.' },
  { emoji: '🩺', title: 'Sponsor Diagnostic Equipment', amount: 'From $5,000',  desc: 'Equip the Medical Center with life-saving diagnostic tools — ultrasound, labs, imaging.' },
  { emoji: '💻', title: 'Fund Telemedicine Systems',    amount: 'From $15,000', desc: 'Bring digital health infrastructure to connect Ufuma with global specialists.' },
  { emoji: '👶', title: 'Maternal & Child Health',      amount: 'From $7,500',  desc: 'Support safe deliveries, newborn care, immunization, and women\'s health programs.' },
  { emoji: '🎓', title: 'Fund Training Scholarships',   amount: 'From $1,000',  desc: 'Sponsor a student\'s healthcare training — clinical skills, nursing, community health.' },
  { emoji: '🏛️', title: 'Name a Facility',              amount: 'From $25,000', desc: 'Permanently attach your name or a loved one\'s legacy to a ward, clinic, or department.' },
];

const tabs: { id: Tab; label: string }[] = [
  { id: 'community',  label: 'Community Giving' },
  { id: 'leadership', label: 'Leadership Giving' },
  { id: 'major',      label: 'Major Gift / Institutional' },
];

const DonorLevels = () => {
  const [tab, setTab] = useState<Tab>('community');
  return (
    <section id="donor-levels" style={{ background: 'var(--color-surface)', padding: '80px 0 0', borderTop: '2px solid var(--color-navy)' }}>
      <div style={{ padding: '0 clamp(24px,5vw,72px) 52px' }}>
        <div className="dn-section-header">
          <p className="dn-kicker">Giving Levels</p>
          <h2 className="dn-headline">Find Your Level of Impact</h2>
          <p className="dn-sub">Every gift at every level directly funds the completion of a healthcare campus that will serve thousands of families for generations.</p>
        </div>
        <div className="donor-tabs">
          {tabs.map(t => (
            <button key={t.id} onClick={() => setTab(t.id)}
              className={`donor-tab ${tab === t.id ? 'active' : ''}`}>
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {/* community */}
      {tab === 'community' && (
        <div className="donor-grid">
          {communityLevels.map((l, i) => (
            <div key={i} className="donor-card">
              <div className="donor-amount" style={{ color: l.accent }}>{l.amount}</div>
              <h3 className="donor-title">{l.title}</h3>
              <p className="donor-desc">{l.desc}</p>
              <button onClick={() => document.getElementById('payment-section')?.scrollIntoView({ behavior: 'smooth' })}
                className="donor-btn" style={{ color: l.accent, borderBottomColor: l.accent }}>
                Give {l.amount} <ArrowRight size={12} />
              </button>
            </div>
          ))}
        </div>
      )}

      {/* leadership */}
      {tab === 'leadership' && (
        <div className="donor-grid">
          {leadershipLevels.map((l, i) => (
            <div key={i} className="donor-card">
              <span className="donor-badge" style={{ color: l.accent }}>{l.badge}</span>
              <div className="donor-amount" style={{ color: l.accent }}>{l.amount}</div>
              <h3 className="donor-title">{l.title}</h3>
              <p className="donor-desc">{l.desc}</p>
              <button onClick={() => document.getElementById('payment-section')?.scrollIntoView({ behavior: 'smooth' })}
                className="donor-btn" style={{ color: l.accent, borderBottomColor: l.accent }}>
                Give {l.amount} <ArrowRight size={12} />
              </button>
            </div>
          ))}
        </div>
      )}

      {/* major gifts */}
      {tab === 'major' && (
        <div className="donor-grid donor-grid-major">
          {majorGifts.map((g, i) => (
            <div key={i} className="donor-card">
              <span className="donor-emoji">{g.emoji}</span>
              <div className="donor-header-row">
                <h3 className="donor-title">{g.title}</h3>
                <span className="donor-amount-tag">{g.amount}</span>
              </div>
              <p className="donor-desc">{g.desc}</p>
              <a href="mailto:foundation@jomabelhealthcare.org" className="donor-link">
                Inquire Now <ArrowRight size={12} />
              </a>
            </div>
          ))}
        </div>
      )}

      <style>{`
        .donor-tabs {
          display: flex;
          gap: 0;
          border-bottom: 2px solid var(--color-border);
          margin-bottom: 0;
          flex-wrap: wrap;
        }
        .donor-tab {
          font-family: var(--font-body);
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          padding: 14px 24px;
          background: none;
          border: none;
          border-bottom: 3px solid transparent;
          margin-bottom: -2px;
          cursor: pointer;
          color: var(--color-text-light);
          transition: var(--transition);
          white-space: nowrap;
        }
        .donor-tab.active {
          color: var(--color-navy);
          border-bottom-color: var(--color-navy);
        }
        .donor-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          width: 100%;
          border-top: 1px solid var(--color-border);
        }
        .donor-card {
          padding: 40px 32px 44px;
          border-right: 1px solid var(--color-border);
          background: var(--color-bg);
          display: flex;
          flex-direction: column;
          gap: 14px;
          transition: background 0.25s;
        }
        .donor-card:hover { background: var(--color-surface); }
        .donor-grid-major .donor-card { border-bottom: 1px solid var(--color-border); }
        .donor-amount {
          font-family: 'Anton', sans-serif;
          font-size: clamp(28px, 3.5vw, 44px);
          font-weight: 400;
          line-height: 1;
          letter-spacing: 0.02em;
        }
        .donor-title {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(15px, 1.4vw, 18px);
          font-weight: 700;
          color: var(--color-navy);
          margin: 0;
          line-height: 1.2;
        }
        .donor-desc {
          font-family: var(--font-body);
          font-size: 13px;
          color: var(--color-text-muted);
          line-height: 1.7;
          margin: 0;
          flex: 1;
        }
        .donor-btn {
          background: none;
          border: none;
          padding: 0;
          font-family: var(--font-body);
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          border-bottom: 1.5px solid;
          padding-bottom: 3px;
          align-self: flex-start;
          transition: var(--transition);
        }
        .donor-badge {
          font-family: var(--font-body);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .donor-badge::before {
          content: '';
          display: inline-block;
          width: 14px;
          height: 2px;
          background: currentColor;
          flex-shrink: 0;
        }
        .donor-emoji { font-size: 32px; line-height: 1; }
        .donor-header-row {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 8px;
          flex-wrap: wrap;
        }
        .donor-amount-tag {
          font-family: var(--font-body);
          font-size: 11px;
          font-weight: 700;
          color: var(--color-orange);
          background: var(--color-orange-light);
          padding: 3px 10px;
          border-radius: 999px;
          flex-shrink: 0;
          white-space: nowrap;
        }
        .donor-link {
          font-family: var(--font-body);
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: var(--color-navy);
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 8px;
          border-bottom: 1.5px solid var(--color-navy);
          padding-bottom: 3px;
          align-self: flex-start;
        }
        @media (max-width: 1024px) {
          .donor-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .donor-card { border-right: none; }
          .donor-card:nth-child(odd) { border-right: 1px solid var(--color-border); }
          .donor-card:nth-child(3), .donor-card:nth-child(4) { border-bottom: none; }
        }
        @media (max-width: 640px) {
          .donor-tab { padding: 12px 16px; font-size: 12px; white-space: normal; text-align: center; flex: 1; }
          .donor-grid { grid-template-columns: 1fr !important; }
          .donor-card { border-right: none !important; border-bottom: 1px solid var(--color-border) !important; }
          .donor-card:last-child { border-bottom: none !important; }
          .donor-card { padding: 32px 24px; }
          .donor-header-row { flex-direction: column; align-items: flex-start; }
        }
      `}</style>
    </section>
  );
};

/* ─────────────────────────────────────────────────────────────────────────────
   DONATION FORM
───────────────────────────────────────────────────────────────────────────── */
const usdOne  = [25, 50, 100, 250, 500, 1000];
const ngnOne  = [5000, 10000, 25000, 50000, 100000, 250000];
const usdMon  = [10, 25, 50, 100, 250, 500];
const ngnMon  = [2000, 5000, 10000, 25000, 50000, 100000];

const impacts = {
  usd: [
    { amount: '$50',    desc: 'Provides medications for 10 children at an outreach mission' },
    { amount: '$100',   desc: 'Funds a full day of free medical consultations' },
    { amount: '$500',   desc: 'Equips a nurse with essential supplies for one month' },
    { amount: '$1,000', desc: 'Sponsors a full healthcare training scholarship' },
  ],
  ngn: [
    { amount: '₦5,000',   desc: 'Provides medications for 10 children at an outreach mission' },
    { amount: '₦25,000',  desc: 'Funds a full day of free medical consultations' },
    { amount: '₦50,000',  desc: 'Equips a nurse with essential supplies for one month' },
    { amount: '₦250,000', desc: 'Sponsors a full healthcare training scholarship' },
  ],
};

const DonationForm = () => {
  const [currency, setCurrency]         = useState<'usd' | 'ngn'>('usd');
  const [isRecurring, setIsRecurring]   = useState(false);
  const [selected, setSelected]         = useState<number | null>(50);
  const [custom, setCustom]             = useState('');
  const [name, setName]                 = useState('');
  const [email, setEmail]               = useState('');

  const sym     = currency === 'usd' ? '$' : '₦';
  const amounts = isRecurring ? (currency === 'usd' ? usdMon : ngnMon) : (currency === 'usd' ? usdOne : ngnOne);
  const fmt     = (n: number) => `${sym}${n.toLocaleString()}`;
  const display = selected ? fmt(selected) : custom ? `${sym}${custom}` : '';

  const switchCurrency = (c: 'usd' | 'ngn') => {
    setCurrency(c);
    setSelected(c === 'usd' ? (isRecurring ? 25 : 50) : (isRecurring ? 5000 : 10000));
    setCustom('');
  };
  const switchRecurring = (r: boolean) => {
    setIsRecurring(r);
    setSelected(r ? (currency === 'usd' ? 25 : 5000) : (currency === 'usd' ? 50 : 10000));
    setCustom('');
  };

  return (
    <section className="donation-form-section" id="donation-form-layout">
      <style>{`
        .donation-form-section {
          display: grid;
          grid-template-columns: 1fr 1fr;
          border-top: 2px solid var(--color-navy);
          width: 100%;
        }
        .form-left {
          background: var(--color-navy);
          padding: 64px clamp(24px, 5vw, 64px);
        }
        .form-right {
          background: var(--color-bg);
          padding: 64px clamp(24px, 5vw, 64px);
          display: flex;
          flex-direction: column;
          gap: 22px;
        }
        .form-currency-row {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
        }
        .currency-buttons { display: flex; gap: 8px; flex-wrap: wrap; }
        .currency-btn {
          padding: 8px 16px;
          border-radius: 6px;
          font-family: var(--font-body);
          font-size: 12px;
          font-weight: 700;
          cursor: pointer;
          transition: var(--transition);
        }
        .recurring-toggle {
          display: flex;
          gap: 0;
          border: 1.5px solid var(--color-border);
          border-radius: 6px;
          overflow: hidden;
        }
        .recurring-option {
          flex: 1;
          padding: 12px;
          font-family: var(--font-body);
          font-size: 13px;
          font-weight: 700;
          border: none;
          cursor: pointer;
          transition: var(--transition);
          text-align: center;
        }
        .amount-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
        }
        .name-email-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }
        @media (max-width: 860px) {
          .donation-form-section { grid-template-columns: 1fr !important; }
          .name-email-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 560px) {
          .form-left, .form-right { padding: 40px 24px !important; }
          .amount-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .form-currency-row { flex-direction: column; align-items: flex-start; }
        }
      `}</style>
      <div className="form-left">
        <div style={{ borderLeft: '4px solid var(--color-primary)', paddingLeft: '20px', marginBottom: '40px' }}>
          <p className="dn-kicker">Your Impact</p>
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'clamp(22px, 2.8vw, 32px)', fontWeight: 700, color: '#ffffff', lineHeight: 1.2, margin: '0 0 14px' }}>
            Every Gift Directly Funds<br />Healthcare in Ufuma
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'rgba(255,255,255,0.55)', lineHeight: 1.75, margin: 0 }}>
            Your donation funds facility construction, medical equipment, and life-changing community health programs for families in southeastern Nigeria.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0', borderTop: '1px solid rgba(255,255,255,0.10)' }}>
          {impacts[currency].map((item, i) => (
            <div key={i} style={{ padding: '20px 0', borderBottom: '1px solid rgba(255,255,255,0.08)', display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
              <span style={{ fontFamily: "'Anton', sans-serif", fontSize: '22px', fontWeight: 400, color: 'var(--color-primary)', letterSpacing: '0.02em', lineHeight: 1, flexShrink: 0, minWidth: '80px' }}>{item.amount}</span>
              <span style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'rgba(255,255,255,0.55)', lineHeight: 1.65 }}>{item.desc}</span>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '36px', borderLeft: '3px solid var(--color-green)', paddingLeft: '16px' }}>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '11px', fontWeight: 700, color: 'rgba(134,239,172,0.9)', margin: '0 0 4px', letterSpacing: '1px', textTransform: 'uppercase' }}>✓ Tax-Exempt Nonprofit</p>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '12px', color: 'rgba(255,255,255,0.45)', lineHeight: 1.65, margin: 0 }}>
            All donations are tax-deductible to the extent allowed by law.
          </p>
        </div>
      </div>

      <div className="form-right">
        <div>
          <p className="dn-kicker">Make a Gift</p>
          <h3 style={{ fontFamily: "'Anton', sans-serif", fontSize: 'clamp(20px, 2.5vw, 30px)', fontWeight: 400, letterSpacing: '0.01em', textTransform: 'uppercase', color: 'var(--color-navy)', margin: 0 }}>Choose Your Amount</h3>
        </div>

        <div className="form-currency-row">
          <span style={{ fontFamily: 'var(--font-body)', fontSize: '11px', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', color: 'var(--color-text-light)' }}>Currency</span>
          <div className="currency-buttons">
            {(['usd','ngn'] as const).map(c => (
              <button key={c} onClick={() => switchCurrency(c)}
                className="currency-btn" style={{ border: currency === c ? '2px solid var(--color-navy)' : '1.5px solid var(--color-border)', background: currency === c ? 'var(--color-navy-light)' : 'var(--color-bg)', color: currency === c ? 'var(--color-navy)' : 'var(--color-text-muted)' }}>
                {c === 'usd' ? '🇺🇸 USD $' : '🇳🇬 NGN ₦'}
              </button>
            ))}
          </div>
          <span style={{ fontFamily: 'var(--font-body)', fontSize: '11px', color: 'var(--color-text-light)' }}>USD $100 ≈ ₦150,000</span>
        </div>

        <div className="recurring-toggle">
          <button onClick={() => switchRecurring(false)} className="recurring-option" style={{ background: !isRecurring ? 'var(--color-navy)' : 'var(--color-bg)', color: !isRecurring ? '#ffffff' : 'var(--color-text-muted)' }}>
            💝 One-Time
          </button>
          <button onClick={() => switchRecurring(true)} className="recurring-option" style={{ background: isRecurring ? 'var(--color-navy)' : 'var(--color-bg)', color: isRecurring ? '#ffffff' : 'var(--color-text-muted)' }}>
            🔁 Monthly
          </button>
        </div>

        <div className="amount-grid">
          {amounts.map(amt => (
            <button key={amt} onClick={() => { setSelected(amt); setCustom(''); }}
              style={{ padding: '14px 8px', borderRadius: '6px', border: selected === amt ? '2px solid var(--color-navy)' : '1.5px solid var(--color-border)', background: selected === amt ? 'var(--color-navy-light)' : 'var(--color-bg)', fontFamily: 'var(--font-body)', fontSize: 'clamp(12px, 1.8vw, 14px)', fontWeight: 700, color: selected === amt ? 'var(--color-navy)' : 'var(--color-text-muted)', cursor: 'pointer' }}>
              {fmt(amt)}{isRecurring ? '/mo' : ''}
            </button>
          ))}
        </div>

        <div style={{ position: 'relative' }}>
          <span style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-light)', fontSize: '14px', fontWeight: 600, pointerEvents: 'none' }}>{sym}</span>
          <input type="number" placeholder={`Custom ${isRecurring ? 'monthly ' : ''}amount`} value={custom}
            onChange={e => { setCustom(e.target.value); setSelected(null); }}
            className="dn-input" style={{ paddingLeft: '28px' }} />
        </div>

        <div className="name-email-grid">
          <div><label className="dn-label">Full Name</label><input placeholder="Your name" value={name} onChange={e => setName(e.target.value)} className="dn-input" /></div>
          <div><label className="dn-label">Email Address</label><input placeholder="your@email.com" value={email} onChange={e => setEmail(e.target.value)} className="dn-input" /></div>
        </div>

        {display && (
          <div style={{ background: 'var(--color-green-light)', border: '1px solid #BBF7D0', borderRadius: '6px', padding: '12px 16px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <CheckCircle size={16} color="var(--color-green)" />
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: '#166534', margin: 0 }}>
              You are donating <strong>{display}</strong> {isRecurring ? 'monthly' : 'as a one-time gift'}.
            </p>
          </div>
        )}

        <button onClick={() => document.getElementById('payment-section')?.scrollIntoView({ behavior: 'smooth' })}
          style={{ background: 'var(--color-navy)', color: '#ffffff', border: 'none', borderRadius: 'var(--btn-radius)', padding: '16px', fontFamily: 'var(--font-body)', fontSize: '14px', fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', transition: 'var(--transition)' }}
          onMouseOver={e => (e.currentTarget.style.background = 'var(--color-primary)')}
          onMouseOut={e => (e.currentTarget.style.background = 'var(--color-navy)')}>
          See Payment Options <ArrowRight size={15} />
        </button>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '11px', color: 'var(--color-text-light)', textAlign: 'center', margin: 0 }}>🔒 JoMabel Healthcare Foundation USA INC. — Registered Nonprofit</p>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────────────────────────────────────
   PAYMENT METHODS
───────────────────────────────────────────────────────────────────────────── */
const paymentMethods = [
  { flag: '🇺🇸', country: 'US Donors', name: 'PayPal', desc: 'Send your gift via PayPal to the foundation\'s registered account.', fields: [{ label: 'PayPal Email', value: 'foundation@jomabelhealthcare.org' }], note: 'JoMabel Healthcare Foundation', accent: '#003087' },
  { flag: '🇺🇸', country: 'US Donors', name: 'Zelle',  desc: 'Send directly from your US bank app using Zelle — fast, free, and instant.', fields: [{ label: 'Zelle Email', value: 'foundation@jomabelhealthcare.org' }], note: 'JoMabel Healthcare Foundation', accent: '#6d1ed4' },
  { flag: '🇺🇸', country: 'US Donors', name: 'Cash App', desc: 'Use Cash App to send your gift using the foundation\'s $Cashtag.', fields: [{ label: '$Cashtag', value: '$Cashtag — to be provided' }], note: 'JoMabel Healthcare Foundation', accent: '#00d632' },
  { flag: '🇳🇬', country: 'Nigeria Donors', name: 'First Bank Nigeria', desc: 'Transfer directly to the foundation\'s First Bank account.', fields: [{ label: 'Account Number', value: '2048034193' }, { label: 'Account Name', value: 'JOMABEL HEALTHCARE FOUNDATION' }], note: 'First Bank of Nigeria', accent: '#008751' },
];

const PaymentMethods = () => (
  <section id="payment-section" style={{ background: 'var(--color-surface)', borderTop: '2px solid var(--color-navy)', padding: '0' }}>
    <div style={{ padding: '72px clamp(24px, 5vw, 72px) 52px' }}>
      <div className="dn-section-header" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <p className="dn-kicker">How to Give</p>
        <h2 className="dn-headline">Payment Options</h2>
        <p className="dn-sub">All accounts are registered under the foundation name. Choose your preferred method and use the details below to complete your gift.</p>
      </div>
    </div>

    <div className="payment-grid">
      {paymentMethods.map((m, i) => (
        <div key={i} className="payment-card" style={{ borderTop: `3px solid ${m.accent}` }}>
          <div>
            <p className="payment-country">{m.flag} {m.country}</p>
            <h3 className="payment-name">{m.name}</h3>
          </div>
          <p className="payment-desc">{m.desc}</p>
          <div className="payment-fields">
            {m.fields.map(f => (
              <div key={f.label}>
                <p className="payment-field-label">{f.label}</p>
                <div className="dn-copy-row">
                  <span className="payment-field-value">{f.value}</span>
                  <CopyButton text={f.value} />
                </div>
              </div>
            ))}
          </div>
          <p className="payment-note">Account: <strong>{m.note}</strong></p>
        </div>
      ))}
    </div>

    <div style={{ padding: '52px clamp(24px, 5vw, 72px)' }}>
      <div style={{ maxWidth: '640px', margin: '0 auto', background: 'var(--color-bg)', border: '1px solid var(--color-border)', borderLeft: '4px solid var(--color-primary)', borderRadius: '6px', padding: '28px 32px' }}>
        <p style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '16px', fontWeight: 700, color: 'var(--color-navy)', margin: '0 0 8px' }}>After Your Transfer</p>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'var(--color-text-muted)', lineHeight: 1.8, margin: 0 }}>
          Please send a confirmation to{' '}
          <a href="mailto:foundation@jomabelhealthcare.org" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>foundation@jomabelhealthcare.org</a>
          {' '}with your name, amount, and payment method so we can acknowledge your gift and issue a receipt. For questions, call{' '}
          <a href="tel:+15125080277" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>1-512-508-0277</a>.
        </p>
      </div>
    </div>

    <style>{`
      .payment-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        width: 100%;
        border-top: 1px solid var(--color-border);
      }
      .payment-card {
        background: var(--color-bg);
        padding: 40px 32px 44px;
        border-right: 1px solid var(--color-border);
        display: flex;
        flex-direction: column;
        gap: 16px;
      }
      .payment-country {
        font-family: var(--font-body);
        font-size: 10px;
        font-weight: 700;
        letter-spacing: 2px;
        text-transform: uppercase;
        color: var(--color-text-light);
        margin: 0 0 6px;
      }
      .payment-name {
        font-family: 'Playfair Display', Georgia, serif;
        font-size: clamp(17px, 1.8vw, 22px);
        font-weight: 700;
        color: var(--color-navy);
        margin: 0;
      }
      .payment-desc {
        font-family: var(--font-body);
        font-size: 13px;
        color: var(--color-text-muted);
        line-height: 1.7;
        margin: 0;
      }
      .payment-fields {
        display: flex;
        flex-direction: column;
        gap: 10px;
        flex: 1;
      }
      .payment-field-label {
        font-family: var(--font-body);
        font-size: 11px;
        font-weight: 700;
        letter-spacing: 1px;
        text-transform: uppercase;
        color: var(--color-text-muted);
        margin: 0 0 6px;
      }
      .payment-field-value {
        font-family: var(--font-body);
        font-size: 13px;
        font-weight: 600;
        color: var(--color-primary);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .payment-note {
        font-family: var(--font-body);
        font-size: 11px;
        color: var(--color-text-light);
        margin: 0;
      }
      @media (max-width: 1024px) {
        .payment-grid { grid-template-columns: repeat(2, 1fr) !important; }
        .payment-card { border-right: none; }
        .payment-card:nth-child(odd) { border-right: 1px solid var(--color-border); }
      }
      @media (max-width: 640px) {
        .payment-grid { grid-template-columns: 1fr !important; }
        .payment-card { border-right: none !important; border-bottom: 1px solid var(--color-border) !important; }
        .payment-card:last-child { border-bottom: none !important; }
        .payment-card { padding: 32px 24px; }
        .payment-field-value { white-space: normal; word-break: break-all; }
      }
    `}</style>
  </section>
);

/* ─────────────────────────────────────────────────────────────────────────────
   OTHER WAYS + FAQ
───────────────────────────────────────────────────────────────────────────── */
const otherWays = [
  { emoji: '✈️', title: 'Wire Transfer',       desc: 'Contact us for international wire transfer details to give securely from anywhere in the world.' },
  { emoji: '📜', title: 'Legacy Giving',        desc: 'Include JoMabel Healthcare Foundation in your estate or long-term charitable plans.' },
  { emoji: '🤝', title: 'Corporate Partners',   desc: 'Partner through corporate giving, sponsorships, or employee matching gift programs.' },
];

const faqs = [
  { q: 'Is my donation tax-deductible?', a: 'Yes. JoMabel Healthcare Foundation USA INC. is a registered nonprofit. Donations are tax-deductible to the extent allowed by law. You will receive a receipt upon confirmation.' },
  { q: 'Can I set up a recurring monthly donation?', a: 'Yes! Simply select the "Monthly" option and choose your preferred monthly amount. Your support will provide sustainable funding for our programs.' },
  { q: 'How will my donation be used?', a: 'All donations go directly toward facility construction, medical equipment, and community health programs in Ufuma, Anambra State, Nigeria.' },
  { q: 'How do I confirm my transfer was received?', a: 'After completing your transfer, please email foundation@jomabelhealthcare.org with your name, donation amount, and payment method. We will send a formal receipt within 2–3 business days.' },
  { q: 'Can I donate in honor or memory of someone?', a: 'Absolutely. Please include a tribute note in your payment reference or email us the details. We will acknowledge your memorial or honorary gift appropriately.' },
  { q: 'What if I have more questions?', a: 'Please reach out to Dr. Clara Ada Ogbaa at foundation@jomabelhealthcare.org or by phone at 1-512-508-0277. We are always happy to speak personally with our donors.' },
];

const OtherWaysAndFAQ = () => {
  const [open, setOpen] = useState(-1);
  return (
    <>
      <div className="other-ways-grid">
        {otherWays.map((w, i) => (
          <div key={i} className={`other-way-card ${i === 1 ? 'highlight' : ''}`}>
            <span className="other-way-emoji">{w.emoji}</span>
            <h3 className="other-way-title">{w.title}</h3>
            <p className="other-way-desc">{w.desc}</p>
            <a href="mailto:foundation@jomabelhealthcare.org" className="other-way-link">
              Contact Us <ArrowRight size={12} />
            </a>
          </div>
        ))}
      </div>

      <div className="faq-section">
        <div className="faq-header">
          <p className="dn-kicker">Questions & Answers</p>
          <h2 className="faq-title">Frequently Asked Questions</h2>
          <p className="faq-sub">Clear answers about giving, how funds are used, and how to reach us.</p>
        </div>
        <div className="faq-list">
          {faqs.map((faq, i) => (
            <div key={i} className="faq-item">
              <button onClick={() => setOpen(open === i ? -1 : i)} className="faq-question">
                <span>{faq.q}</span>
                <span className="faq-icon">{open === i ? '−' : '+'}</span>
              </button>
              {open === i && (
                <div className="faq-answer">
                  <p>{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .other-ways-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          border-top: 2px solid var(--color-navy);
          width: 100%;
        }
        .other-way-card {
          padding: 52px 40px;
          border-right: 1px solid var(--color-border);
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .other-way-card.highlight { background: var(--color-surface); }
        .other-way-card:last-child { border-right: none; }
        .other-way-emoji { font-size: 32px; line-height: 1; }
        .other-way-title {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(17px, 1.8vw, 22px);
          font-weight: 700;
          color: var(--color-navy);
          margin: 0;
        }
        .other-way-desc {
          font-family: var(--font-body);
          font-size: 14px;
          color: var(--color-text-muted);
          line-height: 1.7;
          margin: 0;
          flex: 1;
        }
        .other-way-link {
          font-family: var(--font-body);
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: var(--color-navy);
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 8px;
          border-bottom: 1.5px solid var(--color-navy);
          padding-bottom: 3px;
          align-self: flex-start;
        }
        .faq-section {
          background: var(--color-navy);
          border-top: 2px solid rgba(255,255,255,0.10);
          padding: 72px clamp(24px, 5vw, 72px);
        }
        .faq-header {
          max-width: 1200px;
          margin: 0 auto 52px;
          border-left: 4px solid var(--color-primary);
          padding-left: 20px;
        }
        .faq-title {
          font-family: 'Anton', sans-serif;
          font-size: clamp(28px, 3.5vw, 44px);
          font-weight: 400;
          letter-spacing: 0.01em;
          text-transform: uppercase;
          line-height: 1.1;
          color: #ffffff;
          margin: 0 0 12px;
        }
        .faq-sub {
          font-family: var(--font-body);
          font-size: clamp(13px, 1.2vw, 15px);
          color: rgba(255,255,255,0.45);
          line-height: 1.75;
          max-width: 560px;
          margin: 0;
        }
        .faq-list {
          max-width: 1200px;
          margin: 0 auto;
        }
        .faq-item {
          border-bottom: 1px solid rgba(255,255,255,0.10);
        }
        .faq-question {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 22px 0;
          background: none;
          border: none;
          cursor: pointer;
          text-align: left;
          gap: 16px;
        }
        .faq-question span:first-child {
          font-family: var(--font-body);
          font-size: clamp(13px, 1.3vw, 15px);
          font-weight: 600;
          color: #ffffff;
        }
        .faq-icon {
          flex-shrink: 0;
          color: var(--color-primary);
          font-size: 18px;
          line-height: 1;
          transition: transform 0.2s;
        }
        .faq-answer {
          padding: 4px 0 24px;
        }
        .faq-answer p {
          font-family: var(--font-body);
          font-size: 14px;
          color: rgba(255,255,255,0.55);
          line-height: 1.8;
          margin: 0;
          max-width: 680px;
          border-left: 3px solid var(--color-primary);
          padding-left: 16px;
        }
        @media (max-width: 900px) {
          .other-ways-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .other-way-card { border-right: none; }
          .other-way-card:nth-child(odd) { border-right: 1px solid var(--color-border); }
          .other-way-card:nth-child(3) { grid-column: span 2; border-right: none; }
        }
        @media (max-width: 640px) {
          .other-ways-grid { grid-template-columns: 1fr !important; }
          .other-way-card { border-right: none !important; border-bottom: 1px solid var(--color-border) !important; }
          .other-way-card:last-child { border-bottom: none !important; }
          .other-way-card:nth-child(3) { grid-column: auto; }
          .other-way-card { padding: 32px 24px; }
          .faq-section { padding: 48px 24px; }
          .faq-question { padding: 18px 0; }
        }
      `}</style>
    </>
  );
};

/* ─────────────────────────────────────────────────────────────────────────────
   PAGE ASSEMBLY
───────────────────────────────────────────────────────────────────────────── */
const Donate = () => (
  <div className="dn-page">
    <style>{globalStyles}</style>
    <Navbar />
    <DonationHero />
    <DonorLevels />
    <DonationForm />
    <PaymentMethods />
    <OtherWaysAndFAQ />
    <CampaignBanner />
    <Footer />
  </div>
);

export default Donate;