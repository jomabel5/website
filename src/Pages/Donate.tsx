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

  /* ── section header: open, centered, no boxed border ── */
  .dn-section-header {
    text-align: center;
    max-width: 640px;
    margin: 0 auto 52px;
  }
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
    margin: 0 auto;
  }
  .dn-sub-light { color: rgba(255,255,255,0.55); }

  /* ── copy field ── */
  .dn-copy-row {
    display: flex; align-items: center; justify-content: space-between;
    background: var(--color-surface); border: 1px solid var(--color-border);
    border-radius: var(--card-radius); padding: 10px 14px; gap: 10px;
    flex-wrap: wrap;
  }
  .dn-copy-btn {
    background: var(--color-navy); color: #fff; border: none;
    border-radius: var(--btn-radius); padding: 6px 14px; font-size: 12px;
    font-weight: 700; cursor: pointer; white-space: nowrap;
    font-family: inherit; transition: var(--transition); flex-shrink: 0;
  }
  .dn-copy-btn:hover { background: var(--color-primary); }
  .dn-copy-btn.copied { background: var(--color-green); }

  /* ── form field ── */
  .dn-input {
    width: 100%; padding: 13px 16px;
    border: 1.5px solid var(--color-border); border-radius: var(--card-radius);
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
        font-size: clamp(28px, 3.6vw, 38px);
        font-weight: 400;
        color: #ffffff;
        line-height: 1.15;
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
        background: var(--color-primary);
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
  { amount: '$250',   title: 'Screening Sponsor',      accent: 'var(--color-navy-mid)',  desc: 'Sponsor health screenings for families who cannot afford basic medical checkups.' },
  { amount: '$500',   title: 'Patient Care Supporter', accent: 'var(--color-orange)',    desc: 'Provide direct patient care support: medications, supplies, and clinical services.' },
  { amount: '$1,000', title: 'Training Sponsor',       accent: 'var(--color-green)',     desc: 'Fund training for a community health worker, investing in the future of local healthcare.' },
];

const leadershipLevels = [
  { amount: '$5,000',    title: 'Founders Circle',           badge: 'Leadership', accent: 'var(--color-navy-mid)', desc: 'Join our founding circle of visionary donors committed to transforming rural healthcare in Nigeria.' },
  { amount: '$10,000',   title: 'Health Access Partner',     badge: 'Leadership', accent: 'var(--color-primary)',  desc: 'Partner directly with JHF to expand health access, recognised as a strategic foundation partner.' },
  { amount: '$25,000',   title: 'Community Impact Sponsor',  badge: 'Leadership', accent: 'var(--color-green)',    desc: 'Make a transformational impact: sponsor a full program area and receive naming recognition.' },
  { amount: '$100,000+', title: 'Legacy Donor',              badge: 'Legacy',     accent: 'var(--color-orange)',   desc: 'Secure your legacy: name a facility, department, or major initiative at the JoMabel campus.' },
];

const majorGifts = [
  { emoji: '🏫', title: 'Sponsor a Classroom',          amount: 'From $10,000', desc: 'Fund a dedicated training classroom at the Skill Acquisition & Medical Training Center.' },
  { emoji: '🩺', title: 'Sponsor Diagnostic Equipment', amount: 'From $5,000',  desc: 'Equip the Medical Center with life-saving diagnostic tools: ultrasound, labs, imaging.' },
  { emoji: '💻', title: 'Fund Telemedicine Systems',    amount: 'From $15,000', desc: 'Bring digital health infrastructure to connect Ufuma with global specialists.' },
  { emoji: '👶', title: 'Maternal & Child Health',      amount: 'From $7,500',  desc: 'Support safe deliveries, newborn care, immunization, and women\'s health programs.' },
  { emoji: '🎓', title: 'Fund Training Scholarships',   amount: 'From $1,000',  desc: 'Sponsor a student\'s healthcare training: clinical skills, nursing, community health.' },
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
    <section id="donor-levels" style={{ background: 'var(--color-surface)', padding: '80px 0' }}>
      <div style={{ padding: '0 clamp(24px,5vw,72px) 40px' }}>
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
        <div className="donor-grid-wrap">
          <div className="donor-grid">
            {communityLevels.map((l, i) => (
              <div key={i} className="donor-card" style={{ borderTop: `4px solid ${l.accent}` }}>
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
        </div>
      )}

      {/* leadership */}
      {tab === 'leadership' && (
        <div className="donor-grid-wrap">
          <div className="donor-grid">
            {leadershipLevels.map((l, i) => (
              <div key={i} className="donor-card" style={{ borderTop: `4px solid ${l.accent}` }}>
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
        </div>
      )}

      {/* major gifts */}
      {tab === 'major' && (
        <div className="donor-grid-wrap">
          <div className="donor-grid donor-grid-major">
            {majorGifts.map((g, i) => (
              <div key={i} className="donor-card">
                <span className="donor-emoji">{g.emoji}</span>
                <div className="donor-header-row">
                  <h3 className="donor-title">{g.title}</h3>
                  <span className="donor-amount-tag">{g.amount}</span>
                </div>
                <p className="donor-desc">{g.desc}</p>
                <a href="mailto:foundation@jomabel.org" className="donor-link">
                  Inquire Now <ArrowRight size={12} />
                </a>
              </div>
            ))}
          </div>
        </div>
      )}

      <style>{`
        .donor-tabs {
          display: flex;
          gap: 10px;
          justify-content: center;
          flex-wrap: wrap;
        }
        .donor-tab {
          font-family: var(--font-body);
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          padding: 12px 22px;
          background: var(--color-bg);
          border: 1.5px solid var(--color-border);
          border-radius: 999px;
          cursor: pointer;
          color: var(--color-text-muted);
          transition: var(--transition);
          white-space: nowrap;
        }
        .donor-tab.active {
          color: #ffffff;
          background: var(--color-navy);
          border-color: var(--color-navy);
        }
        .donor-grid-wrap {
          padding: 0 clamp(24px, 5vw, 72px);
          max-width: 1280px;
          margin: 40px auto 0;
        }
        .donor-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }
        .donor-card {
          padding: 32px 28px;
          border: 1px solid var(--color-border);
          border-radius: var(--card-radius);
          background: var(--color-bg);
          display: flex;
          flex-direction: column;
          gap: 14px;
          transition: var(--transition);
        }
        .donor-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-md);
        }
        .donor-amount {
          font-family: 'Anton', sans-serif;
          font-size: clamp(28px, 3.5vw, 40px);
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
          .donor-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 640px) {
          .donor-tab { padding: 10px 16px; font-size: 12px; }
          .donor-grid { grid-template-columns: 1fr; }
          .donor-card { padding: 28px 24px; }
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
    { amount: '$100',   desc: 'Funds a full day of medical consultations' },
    { amount: '$500',   desc: 'Equips a nurse with essential supplies for one month' },
    { amount: '$1,000', desc: 'Sponsors a full healthcare training scholarship' },
  ],
  ngn: [
    { amount: '₦5,000',   desc: 'Provides medications for 10 children at an outreach mission' },
    { amount: '₦25,000',  desc: 'Funds a full day of medical consultations' },
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
  const [isLoading, setIsLoading]       = useState(false);
  const [notice, setNotice]             = useState('');

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

  const handleContinue = async () => {
    // Name/email are optional at this stage. Donors can go straight to
    // payment details. Only notify the foundation if they filled both in.
    if (name && email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (emailRegex.test(email)) {
        setIsLoading(true);
        setNotice('');
        try {
          const formData = new URLSearchParams();
          formData.append('name', name);
          formData.append('email', email);
          formData.append('subject', 'Donation Intent');
          formData.append(
            'message',
            `Amount: ${display || 'Not selected'}\nFrequency: ${isRecurring ? 'Monthly' : 'One-Time'}\nCurrency: ${currency.toUpperCase()}\n\nThis donor viewed payment options and may be reaching out for bank/PayPal details.`
          );
          const response = await fetch('/contact-handler.php', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: formData.toString(),
          });
          const data = await response.json();
          setNotice(data.success ? '' : 'Could not notify our team, but you can still proceed below.');
        } catch (err) {
          console.error('Donation intent error:', err);
          setNotice('Could not notify our team, but you can still proceed below.');
        } finally {
          setIsLoading(false);
        }
      }
    }
    document.getElementById('payment-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="donation-form-section" id="donation-form-layout">
      <style>{`
        .donation-form-section {
          display: grid;
          grid-template-columns: 1fr 1fr;
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
          border-radius: var(--card-radius);
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
          border-radius: var(--card-radius);
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
        <div style={{ marginBottom: '40px' }}>
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

        <div style={{ marginTop: '36px', background: 'rgba(255,255,255,0.06)', borderRadius: 'var(--card-radius)', padding: '18px 20px' }}>
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
              style={{ padding: '14px 8px', borderRadius: 'var(--card-radius)', border: selected === amt ? '2px solid var(--color-navy)' : '1.5px solid var(--color-border)', background: selected === amt ? 'var(--color-navy-light)' : 'var(--color-bg)', fontFamily: 'var(--font-body)', fontSize: 'clamp(12px, 1.8vw, 14px)', fontWeight: 700, color: selected === amt ? 'var(--color-navy)' : 'var(--color-text-muted)', cursor: 'pointer' }}>
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
          <div style={{ background: 'var(--color-green-light)', border: '1px solid #BBF7D0', borderRadius: 'var(--card-radius)', padding: '12px 16px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <CheckCircle size={16} color="var(--color-green)" />
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: '#166534', margin: 0 }}>
              You are donating <strong>{display}</strong> {isRecurring ? 'monthly' : 'as a one-time gift'}.
            </p>
          </div>
        )}

        <button onClick={handleContinue} disabled={isLoading}
          style={{ background: 'var(--color-navy)', color: '#ffffff', border: 'none', borderRadius: 'var(--btn-radius)', padding: '16px', fontFamily: 'var(--font-body)', fontSize: '14px', fontWeight: 700, cursor: isLoading ? 'not-allowed' : 'pointer', opacity: isLoading ? 0.7 : 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', transition: 'var(--transition)' }}
          onMouseOver={e => { if (!isLoading) e.currentTarget.style.background = 'var(--color-primary)'; }}
          onMouseOut={e => { if (!isLoading) e.currentTarget.style.background = 'var(--color-navy)'; }}>
          {isLoading ? 'One moment...' : 'See Payment Options'} {!isLoading && <ArrowRight size={15} />}
        </button>
        {notice && (
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '11.5px', color: 'var(--color-text-light)', textAlign: 'center', margin: 0 }}>{notice}</p>
        )}
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '11px', color: 'var(--color-text-light)', textAlign: 'center', margin: 0 }}>🔒 JoMabel Healthcare Foundation Inc., Registered Nonprofit</p>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────────────────────────────────────
   PAYMENT METHODS
───────────────────────────────────────────────────────────────────────────── */
const paymentMethods = [
  { flag: '🇺🇸', country: 'US Donors', name: 'PayPal', desc: 'Send your gift via PayPal to the foundation\'s registered account.', fields: [{ label: 'PayPal Email', value: 'Coming Soon' }], note: 'JoMabel Healthcare Foundation', accent: '#003087' },
  { flag: '🇺🇸', country: 'US Donors', name: 'Zelle',  desc: 'Send directly from your US bank app using Zelle, which is fast, free, and instant.', fields: [{ label: 'Zelle Email', value: 'Coming Soon' }], note: 'JoMabel Healthcare Foundation', accent: '#6d1ed4' },
  { flag: '🇺🇸', country: 'US Donors', name: 'Cash App', desc: 'Use Cash App to send your gift using the foundation\'s $Cashtag.', fields: [{ label: '$Cashtag', value: '$Cashtag to be provided' }], note: 'JoMabel Healthcare Foundation', accent: '#00d632' },
  { flag: '🇳🇬', country: 'Nigeria Donors', name: 'First Bank Nigeria', desc: 'For your security, account details are no longer listed here. Please contact us directly and our team will verify your donation and share the correct account details.', fields: [], note: 'JoMabel Healthcare Foundation', accent: '#008751' },
];

const PaymentMethods = () => (
  <section id="payment-section" style={{ background: 'var(--color-surface)', padding: '80px 0' }}>
    <div style={{ padding: '0 clamp(24px, 5vw, 72px) 40px' }}>
      <div className="dn-section-header">
        <p className="dn-kicker">How to Give</p>
        <h2 className="dn-headline">Payment Options</h2>
        <p className="dn-sub">For your security, please contact us directly. Our team will confirm your donation and share verified account details before you send anything.</p>
      </div>
    </div>

    <div className="payment-grid-wrap">
      <div className="payment-grid">
        {paymentMethods.map((m, i) => (
          <div key={i} className="payment-card" style={{ borderTop: `4px solid ${m.accent}` }}>
            <div>
              <p className="payment-country">{m.flag} {m.country}</p>
              <h3 className="payment-name">{m.name}</h3>
            </div>
            <p className="payment-desc">{m.desc}</p>
            <div className="payment-fields">
              {m.fields.length > 0 ? (
                m.fields.map(f => (
                  <div key={f.label}>
                    <p className="payment-field-label">{f.label}</p>
                    <div className="dn-copy-row">
                      <span className="payment-field-value">{f.value}</span>
                      <CopyButton text={f.value} />
                    </div>
                  </div>
                ))
              ) : (
                <a
                  href="mailto:foundation@jomabel.org"
                  style={{ fontFamily: 'var(--font-body)', fontSize: '13px', fontWeight: 700, color: 'var(--color-primary)', textDecoration: 'none' }}
                >
                  Email Us for Account Details →
                </a>
              )}
            </div>
            <p className="payment-note">Account: <strong>{m.note}</strong></p>
          </div>
        ))}
      </div>
    </div>

    <div style={{ padding: '52px clamp(24px, 5vw, 72px) 0' }}>
      <div style={{ maxWidth: '640px', margin: '0 auto', background: 'var(--color-bg)', border: '1px solid var(--color-border)', borderRadius: 'var(--card-radius)', padding: '28px 32px' }}>
        <p style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '16px', fontWeight: 700, color: 'var(--color-navy)', margin: '0 0 8px' }}>Before You Give</p>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'var(--color-text-muted)', lineHeight: 1.8, margin: 0 }}>
          Please{' '}
          <a href="mailto:foundation@jomabel.org" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>email us</a>
          {' '}before sending a gift. Our team will confirm your intended amount and provide verified payment details directly.
        </p>
      </div>
    </div>

    <style>{`
      .payment-grid-wrap {
        padding: 0 clamp(24px, 5vw, 72px);
        max-width: 1280px;
        margin: 0 auto;
      }
      .payment-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 24px;
      }
      .payment-card {
        background: var(--color-bg);
        border: 1px solid var(--color-border);
        border-radius: var(--card-radius);
        padding: 32px 28px;
        display: flex;
        flex-direction: column;
        gap: 16px;
        transition: var(--transition);
      }
      .payment-card:hover {
        transform: translateY(-4px);
        box-shadow: var(--shadow-md);
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
        .payment-grid { grid-template-columns: repeat(2, 1fr); }
      }
      @media (max-width: 640px) {
        .payment-grid { grid-template-columns: 1fr; }
        .payment-card { padding: 28px 24px; }
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
  { q: 'Is my donation tax-deductible?', a: 'Yes. JoMabel Healthcare Foundation Inc. is a registered nonprofit. Donations are tax-deductible to the extent allowed by law. You will receive a receipt upon confirmation.' },
  { q: 'Can I set up a recurring monthly donation?', a: 'Yes! Simply select the "Monthly" option and choose your preferred monthly amount. Your support will provide sustainable funding for our programs.' },
  { q: 'How will my donation be used?', a: 'All donations go directly toward facility construction, medical equipment, and community health programs in Ufuma, Anambra State, Nigeria.' },
  { q: 'How do I confirm my transfer was received?', a: 'After completing your transfer, please email foundation@jomabel.org with your name, donation amount, and payment method. We will send a formal receipt within 2–3 business days.' },
  { q: 'Can I donate in honor or memory of someone?', a: 'Absolutely. Please include a tribute note in your payment reference or email us the details. We will acknowledge your memorial or honorary gift appropriately.' },
  { q: 'What if I have more questions?', a: 'Please reach out to Dr. Clara Ada Ogbaa at foundation@jomabel.org. We are always happy to speak personally with our donors.' },
];

const OtherWaysAndFAQ = () => {
  const [open, setOpen] = useState(-1);
  return (
    <>
      <div className="other-ways-wrap">
        <div className="other-ways-grid">
          {otherWays.map((w, i) => (
            <div key={i} className="other-way-card">
              <span className="other-way-emoji">{w.emoji}</span>
              <h3 className="other-way-title">{w.title}</h3>
              <p className="other-way-desc">{w.desc}</p>
              <a href="mailto:foundation@jomabel.org" className="other-way-link">
                Contact Us <ArrowRight size={12} />
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="faq-section">
        <div className="faq-header">
          <p className="dn-kicker dn-kicker-light">Questions & Answers</p>
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
        .other-ways-wrap {
          padding: 72px clamp(24px, 5vw, 72px);
        }
        .other-ways-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          max-width: 1280px;
          margin: 0 auto;
        }
        .other-way-card {
          padding: 40px 32px;
          border: 1px solid var(--color-border);
          border-radius: var(--card-radius);
          background: var(--color-bg);
          display: flex;
          flex-direction: column;
          gap: 16px;
          transition: var(--transition);
        }
        .other-way-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-md);
        }
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
          padding: 72px clamp(24px, 5vw, 72px);
        }
        .faq-header {
          max-width: 1200px;
          margin: 0 auto 52px;
          text-align: center;
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
          margin: 0 auto;
        }
        .faq-list {
          max-width: 900px;
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
        }
        @media (max-width: 900px) {
          .other-ways-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 640px) {
          .other-ways-grid { grid-template-columns: 1fr; }
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
    <Footer />
  </div>
);

export default Donate;