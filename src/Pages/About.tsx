import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Testimonies from '../components/sections/Testimonies';
import FounderQuote from '../components/sections/FounderQuote';
import { Heart, Eye, Target, Shield, Users, Lightbulb, HandHeart, MapPin, Calendar, Award, CheckCircle } from 'lucide-react';
import logo from '../assests/images/logo.jpeg';
import logo2 from '../assests/images/logo2.png';
import logo3 from '../assests/images/logo3.png';

// ── Real outreach photos ──
import outreach1 from '../assests/images/outreach1.jpeg';
import outreach3 from '../assests/images/outreach3.jpeg';

// ── Board Member Images ──
import ikeOgbaaImg from '../assests/images/ike-ogbaa.jpeg';
import nnekaOgbaaImg from '../assests/images/nneka-ogbaa.png';
import comfortObiImg from '../assests/images/comfort-obi.jpeg';
import doyinImg from '../assests/images/doyin.jpeg';

const aboutStyles = `
  /* ── ABOUT HERO ── */
  .about-hero {
    position: relative;
    padding: clamp(48px, 7vw, 80px) clamp(20px, 5vw, 64px);
    font-family: var(--font-body);
    overflow: hidden;
    animation: fadeIn 0.8s ease-out;
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  
  .about-hero-grid {
    position: relative;
    z-index: 2;
    max-width: 1080px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1px 1fr;
    align-items: center;
    min-height: 260px;
  }
  .about-hero-left { padding-right: 64px; }
  .about-hero-label {
    font-size: 11px;
    font-weight: 700;
    color: #1D8FD4;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    margin-bottom: 12px;
    display: block;
  }
  .about-hero-h1 {
    font-family: var(--font-heading);
    font-size: clamp(40px, 7vw, 64px);
    font-weight: 900;
    color: #111827;
    line-height: 1;
    margin-bottom: 20px;
    letter-spacing: -0.02em;
  }
  .about-hero-right {
    padding-left: 64px;
    display: flex;
    justify-content: center;
  }
  .about-hero-divider {
    background-color: #E5E7EB;
    width: 1px;
    align-self: stretch;
  }

  /* ── MISSION VISION SECTION ── */
  .mv-about-section {
    background-color: #F9FAFB;
    padding: var(--section-padding-y) var(--section-padding-x);
    font-family: var(--font-body);
  }
  .mv-about-grid {
    max-width: 1080px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1px 1fr;
    align-items: start;
    gap: 0;
  }
  .mv-about-divider { background-color: #E5E7EB; width: 1px; align-self: stretch; }

  /* ── CORE VALUES ── */
  .values-section {
    background: #ffffff;
    padding: var(--section-padding-y) var(--section-padding-x);
    font-family: var(--font-body);
  }
  .values-grid {
    max-width: 1080px;
    margin: 40px auto 0;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
  }
  .value-card {
    background: #F9FAFB;
    border: 1px solid #E5E7EB;
    border-radius: 12px;
    padding: 24px 20px;
    transition: all 0.3s ease;
    opacity: 0;
    transform: translateY(20px);
    animation: fadeInUp 0.5s ease forwards;
    animation-delay: calc(0.05s * var(--i, 0));
  }
  .value-card:hover {
    box-shadow: 0 4px 16px rgba(0,0,0,0.08);
    border-color: #1D8FD4;
    transform: translateY(-3px);
  }
  
  @keyframes fadeInUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* ── HISTORY SECTION ── */
  .history-section {
    background-color: #F9FAFB;
    padding: var(--section-padding-y) var(--section-padding-x);
    font-family: var(--font-body);
  }
  .history-grid {
    max-width: 1080px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 64px;
    align-items: center;
  }
  .history-image {
    width: 100%;
    height: 480px;
    object-fit: cover;
    border-radius: 16px;
    box-shadow: 0 8px 32px rgba(0,0,0,0.10);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  .history-image:hover {
    transform: scale(1.02);
    box-shadow: 0 12px 40px rgba(0,0,0,0.15);
  }

  /* ── CENTER LOGOS ── */
  .center-logos-wrap {
    max-width: 1080px;
    margin: 56px auto 0;
    border: 1px solid #E5E7EB;
    border-radius: 16px;
    padding: clamp(28px, 4vw, 48px);
    background-color: #ffffff;
    text-align: center;
    opacity: 0;
    transform: translateY(20px);
    animation: fadeInUp 0.5s ease forwards;
    animation-delay: 0.2s;
  }
  .center-logos-grid {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;
    flex-wrap: wrap;
    margin-top: 28px;
  }
  .center-logo-card {
    background: #F9FAFB;
    border: 1px solid #E5E7EB;
    border-radius: 12px;
    padding: 0 0 16px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    transition: all 0.3s ease;
    flex: 1 1 200px;
    max-width: 260px;
    overflow: hidden;
  }
  .center-logo-card:hover {
    box-shadow: 0 4px 16px rgba(0,0,0,0.08);
    border-color: #1D8FD4;
    transform: translateY(-3px);
  }

  /* ── ADVISORY BOARD SECTION ── */
  .advisory-section {
    background-color: #F9FAFB;
    padding: var(--section-padding-y) var(--section-padding-x);
    font-family: var(--font-body);
    text-align: center;
  }
  .advisory-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
    max-width: 1080px;
    margin: 40px auto 0;
  }
  .advisor-card {
    background: #ffffff;
    border-radius: 16px;
    border: 1px solid #E5E7EB;
    overflow: hidden;
    transition: all 0.3s ease;
    text-align: center;
    padding: 32px 24px;
    opacity: 0;
    transform: translateY(20px);
    animation: fadeInUp 0.5s ease forwards;
  }
  .advisor-card:nth-child(1) { animation-delay: 0.1s; }
  .advisor-card:nth-child(2) { animation-delay: 0.2s; }
  .advisor-card:nth-child(3) { animation-delay: 0.3s; }
  .advisor-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0,0,0,0.12);
    border-color: #1D8FD4;
  }
  .advisor-photo-placeholder {
    width: 120px;
    height: 120px;
    margin: 0 auto 20px;
    background: #F3F4F6;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .advisor-name {
    font-family: var(--font-heading);
    font-size: 18px;
    font-weight: 700;
    color: #111827;
    margin-bottom: 8px;
  }
  .advisor-title {
    font-size: 13px;
    color: #1D8FD4;
    font-weight: 600;
    margin-bottom: 12px;
  }
  .advisor-bio {
    font-size: 13px;
    color: #6B7280;
    line-height: 1.6;
  }

  /* ── GOVERNANCE SECTION (HEADER CENTERED) ── */
  .governance-section {
    background: #ffffff;
    padding: var(--section-padding-y) var(--section-padding-x);
    font-family: var(--font-body);
  }
  .governance-container {
    max-width: 1080px;
    margin: 0 auto;
  }
  .governance-header {
    text-align: center;
    margin-bottom: 48px;
  }
  .governance-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 48px;
    margin-top: 48px;
  }
  .governance-card {
    background: #F9FAFB;
    border: 1px solid #E5E7EB;
    border-radius: 20px;
    padding: 32px;
    transition: all 0.3s ease;
    opacity: 0;
    transform: translateY(20px);
    animation: fadeInUp 0.5s ease forwards;
  }
  .governance-card:nth-child(1) { animation-delay: 0.1s; }
  .governance-card:nth-child(2) { animation-delay: 0.2s; }
  .governance-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0,0,0,0.12);
    border-color: #1D8FD4;
  }
  .governance-title {
    font-family: var(--font-heading);
    font-size: 22px;
    font-weight: 700;
    color: #111827;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    gap: 12px;
  }
  .governance-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .governance-list li {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px 0;
    border-bottom: 1px solid #E5E7EB;
    font-size: 14px;
    color: #4B5563;
    transition: all 0.2s ease;
  }
  .governance-list li:hover {
    transform: translateX(4px);
    color: #1D8FD4;
  }
  .governance-list li:last-child {
    border-bottom: none;
  }

  /* ── TEAM SECTION ── */
  .team-section {
    background-color: #ffffff;
    padding: var(--section-padding-y) var(--section-padding-x);
    font-family: var(--font-body);
    text-align: center;
  }
  .team-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
    max-width: 1080px;
    margin: 0 auto;
  }
  .team-card {
    background: #F9FAFB;
    border-radius: 16px;
    border: 1px solid #E5E7EB;
    overflow: hidden;
    transition: all 0.3s ease;
    opacity: 0;
    transform: translateY(20px);
    animation: fadeInUp 0.5s ease forwards;
    animation-delay: calc(0.1s * var(--i, 0));
  }
  .team-card:hover {
    box-shadow: 0 8px 24px rgba(0,0,0,0.12);
    transform: translateY(-4px);
    border-color: #1D8FD4;
  }
  .team-photo {
    width: 100%;
    height: 260px;
    object-fit: cover;
    object-position: top;
    display: block;
    transition: transform 0.3s ease;
  }
  .team-card:hover .team-photo {
    transform: scale(1.02);
  }
  .team-info {
    padding: 20px 20px 24px;
    text-align: left;
  }
  .team-name {
    font-family: var(--font-heading);
    font-size: 16px;
    font-weight: 700;
    color: #111827;
    margin: 0 0 6px;
  }
  .team-position {
    font-size: 13px;
    color: #1D8FD4;
    font-weight: 600;
    margin: 0 0 12px;
  }
  .team-bio {
    font-size: 13px;
    color: #6B7280;
    line-height: 1.6;
    margin: 0;
  }
  .read-more-btn {
    background: none;
    border: none;
    color: #1D8FD4;
    font-size: 12px;
    font-weight: 600;
    margin-top: 12px;
    padding: 0;
    cursor: pointer;
    font-family: inherit;
    transition: all 0.2s ease;
    display: inline-block;
  }
  .read-more-btn:hover {
    color: #1570A6;
    transform: translateX(2px);
  }

  /* ── RESPONSIVE ── */
  @media (max-width: 900px) {
    .about-hero-grid { grid-template-columns: 1fr; min-height: unset; gap: 32px; }
    .about-hero-divider { display: none; }
    .about-hero-left { padding-right: 0; }
    .about-hero-right { padding-left: 0; justify-content: flex-start; }
    .history-grid { grid-template-columns: 1fr; gap: 32px; }
    .history-image { height: 300px; }
    .values-grid { grid-template-columns: repeat(2, 1fr); }
    .mv-about-grid { grid-template-columns: 1fr; gap: 24px; }
    .mv-about-divider { display: none; }
    .advisory-grid { grid-template-columns: repeat(2, 1fr); }
    .governance-grid { grid-template-columns: 1fr; }
    .team-grid { grid-template-columns: repeat(2, 1fr); gap: 20px; }
  }
  @media (max-width: 640px) {
    .advisory-grid { grid-template-columns: 1fr; }
    .team-grid { grid-template-columns: 1fr; max-width: 380px; margin: 0 auto; }
    .team-info { text-align: center; }
  }
  @media (max-width: 540px) {
    .about-hero-h1 { font-size: 36px; }
    .values-grid { grid-template-columns: 1fr; }
  }
`;

// ─── ABOUT HERO ──────────────────────────────────────────────────────────────
const AboutHero = () => (
  <section className="about-hero">
    <img
      src={outreach1}
      alt="JoMabel outreach mission"
      style={{
        position: 'absolute', inset: 0, width: '100%', height: '100%',
        objectFit: 'cover', objectPosition: 'center',
      }}
    />
    <div style={{
      position: 'absolute', inset: 0,
      background: 'linear-gradient(to right, rgba(255,255,255,0.97) 45%, rgba(255,255,255,0.82) 100%)',
    }} />
    <div className="about-hero-grid">
      <div className="about-hero-left">
        <span className="about-hero-label">Our Story</span>
        <h1 className="about-hero-h1">About Us</h1>
        <p style={{ fontSize: '14px', color: '#4B5563', lineHeight: '1.8', maxWidth: '360px' }}>
          JoMabel Healthcare Foundation is a faith-guided, U.S.-based nonprofit
          developing a world-class 16,000+ sq. meter medical and training center
          in Ufuma, Anambra State, Nigeria.
        </p>
      </div>
      <div className="about-hero-divider" />
      <div className="about-hero-right">
        <div style={{
          border: '1px solid #E5E7EB', borderRadius: '16px',
          padding: '40px 48px',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          backgroundColor: 'rgba(255,255,255,0.90)',
          backdropFilter: 'blur(8px)',
          boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
        }}>
          <img src={logo} alt="JoMabel Healthcare Foundation" style={{ height: '120px', width: 'auto' }} />
        </div>
      </div>
    </div>
  </section>
);

// ─── MISSION & VISION ────────────────────────────────────────────────────────
const MissionVisionSection = () => (
  <section className="mv-about-section">
    <div style={{ maxWidth: '1080px', margin: '0 auto', textAlign: 'center', marginBottom: '48px' }}>
      <span style={{
        display: 'inline-block', background: '#EBF5FB', color: '#1D8FD4',
        fontSize: '11px', fontWeight: '700', letterSpacing: '0.14em',
        textTransform: 'uppercase', padding: '5px 14px', borderRadius: '999px',
      }}>
        Our Purpose
      </span>
      <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: '700', color: '#111827', margin: '12px 0 0' }}>
        Mission & Vision
      </h2>
    </div>

    <div className="mv-about-grid">
      <div style={{ paddingRight: '48px' }}>
        <div style={{ border: '1px solid #E5E7EB', borderRadius: '12px', padding: '28px', borderLeft: '4px solid #1D8FD4', backgroundColor: '#ffffff', boxShadow: '0 1px 6px rgba(0,0,0,0.06)', transition: 'transform 0.3s ease' }}
             onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-3px)')}
             onMouseLeave={e => (e.currentTarget.style.transform = 'translateY(0)')}>
          <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#EBF5FB', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px', color: '#1D8FD4' }}>
            <Target size={26} />
          </div>
          <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '18px', fontWeight: '700', color: '#111827', marginBottom: '12px' }}>Our Mission</h3>
          <p style={{ fontSize: '14px', color: '#4B5563', lineHeight: '1.8', margin: 0 }}>
            To provide compassionate, accessible, and quality care and capacity building to underserved communities.
          </p>
        </div>
      </div>

      <div className="mv-about-divider" />

      <div style={{ paddingLeft: '48px' }}>
        <div style={{ border: '1px solid #E5E7EB', borderRadius: '12px', padding: '28px', borderRight: '4px solid #16A34A', backgroundColor: '#ffffff', boxShadow: '0 1px 6px rgba(0,0,0,0.06)', transition: 'transform 0.3s ease' }}
             onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-3px)')}
             onMouseLeave={e => (e.currentTarget.style.transform = 'translateY(0)')}>
          <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#DCFCE7', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px', color: '#16A34A' }}>
            <Eye size={26} />
          </div>
          <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '18px', fontWeight: '700', color: '#111827', marginBottom: '12px' }}>Our Vision</h3>
          <p style={{ fontSize: '14px', color: '#4B5563', lineHeight: '1.8', margin: 0 }}>
            A world where every person regardless of location, income, or social
            status has access to dignified, life-saving healthcare, supported by
            empowered communities, trained local professionals, and sustainable
            health infrastructure.
          </p>
        </div>
      </div>
    </div>
  </section>
);

// ─── CORE VALUES ─────────────────────────────────────────────────────────────
const coreValues = [
  { icon: HandHeart, title: 'Dignity', desc: 'Every human being deserves respectful, compassionate care.' },
  { icon: Shield, title: 'Equity', desc: 'We prioritize communities historically excluded from quality healthcare.' },
  { icon: Heart, title: 'Service', desc: 'We serve with humility, excellence, and a commitment to healing.' },
  { icon: Target, title: 'Sustainability', desc: 'We build systems that last beyond individual projects.' },
  { icon: Shield, title: 'Integrity', desc: 'We steward resources with transparency and accountability.' },
  { icon: Users, title: 'Community Empowerment', desc: 'We invest in local leadership, youth, and families.' },
  { icon: Lightbulb, title: 'Innovation', desc: 'We embrace modern solutions to long-standing healthcare challenges.' },
];

const CoreValues = () => (
  <section className="values-section">
    <div style={{ maxWidth: '1080px', margin: '0 auto', textAlign: 'center' }}>
      <span style={{
        display: 'inline-block', background: '#EBF5FB', color: '#1D8FD4',
        fontSize: '11px', fontWeight: '700', letterSpacing: '0.14em',
        textTransform: 'uppercase', padding: '5px 14px', borderRadius: '999px',
      }}>
        What Guides Us
      </span>
      <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: '700', color: '#111827', margin: '12px 0 0', lineHeight: '1.2' }}>
        Our Core Values
      </h2>
    </div>
    <div className="values-grid">
      {coreValues.map((v, i) => {
        const IconComponent = v.icon;
        return (
          <div key={i} className="value-card" style={{ '--i': i } as React.CSSProperties}>
            <div style={{ marginBottom: '12px', color: '#1D8FD4' }}>
              <IconComponent size={32} />
            </div>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '15px', fontWeight: '700', color: '#111827', margin: '0 0 8px' }}>{v.title}</h3>
            <p style={{ fontSize: '13px', color: '#4B5563', lineHeight: '1.7', margin: 0 }}>{v.desc}</p>
          </div>
        );
      })}
    </div>
  </section>
);

// ─── HISTORY & FOUNDING ──────────────────────────────────────────────────────
const HistorySection = () => (
  <section className="history-section">
    <div className="history-grid">
      <div>
        <img src={outreach3} alt="JoMabel team group photo" className="history-image" />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <span style={{ fontSize: '11px', fontWeight: '700', color: '#1D8FD4', letterSpacing: '0.14em', textTransform: 'uppercase' }}>
          Our History
        </span>
        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(24px, 3.5vw, 36px)', fontWeight: '700', color: '#111827', lineHeight: '1.2', margin: 0 }}>
          How JoMabel Healthcare Foundation Began
        </h2>
        <p style={{ fontSize: '14px', color: '#4B5563', lineHeight: '1.85', margin: 0 }}>
          JoMabel Healthcare Foundation was established in response to the persistent
          and urgent healthcare challenges facing communities in southeastern Nigeria,
          where access to quality medical services has long been limited by inadequate
          infrastructure, economic hardship, and geographic barriers.
        </p>
        <p style={{ fontSize: '14px', color: '#4B5563', lineHeight: '1.85', margin: 0 }}>
          The inspiration for the foundation is deeply rooted in the legacy of
          Clara Ada Ogbaa's parents, whose lives were defined by local healing
          missions, compassion, and unwavering service to their community. Their
          example instilled in her a profound understanding of what true healing
          requires: not only medical treatment, but also empathy, presence, and a
          commitment to uplifting the whole person.
        </p>
        <p style={{ fontSize: '14px', color: '#4B5563', lineHeight: '1.85', margin: 0 }}>
          Today, JoMabel Healthcare Foundation stands as a testament to vision,
          legacy, and sustained commitment — a bridge between past and future,
          tradition and innovation, compassion and strategic action.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '8px' }}>
          {[
            'Founded with small-scale medical missions and grassroots outreach',
            'Expanded into fully operational medical center in Ufuma',
            'Launched youth training, maternal health & community education programs',
            'Now developing 16,000+ sq. meter medical & training center',
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
              <div style={{
                width: '22px', height: '22px', borderRadius: '50%',
                background: '#1D8FD4', flexShrink: 0,
                display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '1px',
              }}>
                <span style={{ color: '#fff', fontSize: '11px', fontWeight: '700' }}>{i + 1}</span>
              </div>
              <p style={{ fontSize: '13.5px', color: '#4B5563', lineHeight: '1.7', margin: 0 }}>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

// ─── CENTER LOGOS SECTION ────────────────────────────────────────────────────
const CentersSection = () => (
  <div className="center-logos-wrap">
    <span style={{
      display: 'inline-block', background: '#EBF5FB', color: '#1D8FD4',
      fontSize: '11px', fontWeight: '700', letterSpacing: '0.14em',
      textTransform: 'uppercase', padding: '5px 14px', borderRadius: '999px',
      marginBottom: '12px',
    }}>
      Our Centers
    </span>
    <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '20px', fontWeight: '700', color: '#111827', marginBottom: '8px' }}>
      Two Facilities. One Integrated Vision.
    </h3>
    <p style={{ fontSize: '14px', color: '#6B7280', lineHeight: '1.75', maxWidth: '480px', margin: '0 auto 0' }}>
      The JoMabel Medical Center and the Skill Acquisition & Training Center 
      together forming a world-class healthcare campus in Ufuma, Anambra State.
    </p>
    <div className="center-logos-grid">
      <div className="center-logo-card">
        <img src={logo2} alt="JoMabel Medical Center" style={{ width: '100%', height: 'auto', objectFit: 'contain' }} />
        <p style={{ fontSize: '13px', fontWeight: '700', color: '#111827', margin: 0 }}>JoMabel Medical Center</p>
        <p style={{ fontSize: '12px', color: '#6B7280', margin: 0 }}>6,000 sqm · 70% Complete</p>
      </div>
      <div className="center-logo-card">
        <img src={logo3} alt="JoMabel Skills & Training Center" style={{ width: '100%', height: 'auto', objectFit: 'contain' }} />
        <p style={{ fontSize: '13px', fontWeight: '700', color: '#111827', margin: 0 }}>Skill Acquisition & Training Center</p>
        <p style={{ fontSize: '12px', color: '#6B7280', margin: 0 }}>10,000 sqm · 30% Complete</p>
      </div>
    </div>
  </div>
);

// ─── ADVISORY BOARD SECTION ─────────────────────────────────────────────────
const advisoryBoard = [
  {
    name: '',
    title: 'Public Health Advisor',
    bio: 'Public health expert with extensive experience in healthcare systems strengthening and community health programs in Nigeria.',
    img: null
  },
  {
    name: '',
    title: 'Healthcare Policy Advisor',
    bio: 'Healthcare policy specialist focused on health equity and access to care in underserved communities.',
    img: null
  },
  {
    name: '',
    title: 'Clinical Advisor',
    bio: 'Experienced physician with expertise in maternal and child health, and community-based healthcare delivery.',
    img: null
  }
];

const AdvisoryBoard = () => (
  <section className="advisory-section">
    <div className="section-header" style={{ marginBottom: '48px', textAlign: 'center' }}>
      <span style={{
        display: 'inline-block', background: '#EBF5FB', color: '#1D8FD4',
        fontSize: '11px', fontWeight: '700', letterSpacing: '0.14em',
        textTransform: 'uppercase', padding: '5px 14px', borderRadius: '999px',
      }}>
        Advisory Board
      </span>
      <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: '700', color: '#111827', margin: '12px 0 8px' }}>
        Trusted Guidance & Expertise
      </h2>
      <p style={{ fontSize: '14px', color: '#6B7280', maxWidth: '600px', margin: '0 auto', lineHeight: '1.7' }}>
        JoMabel Healthcare Foundation is supported by advisors providing guidance in healthcare, 
        public health, and community development.
      </p>
    </div>
    <div className="advisory-grid">
      {advisoryBoard.map((advisor, i) => (
        <div key={i} className="advisor-card">
          <div className="advisor-photo-placeholder">
            <Users size={48} color="#9CA3AF" />
          </div>
          <h3 className="advisor-name">{advisor.name}</h3>
          <p className="advisor-title">{advisor.title}</p>
          <p className="advisor-bio">{advisor.bio}</p>
        </div>
      ))}
    </div>
  </section>
);

// ─── GOVERNANCE SECTION (HEADER CENTERED) ────────────────────────────────────
const GovernanceSection = () => (
  <section className="governance-section">
    <div className="governance-container">
      <div className="governance-header">
        <span style={{
          display: 'inline-block', background: '#EBF5FB', color: '#1D8FD4',
          fontSize: '11px', fontWeight: '700', letterSpacing: '0.14em',
          textTransform: 'uppercase', padding: '5px 14px', borderRadius: '999px',
        }}>
          Governance & Transparency
        </span>
        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: '700', color: '#111827', margin: '12px 0 8px' }}>
          Commitment to Accountability
        </h2>
        <p style={{ fontSize: '14px', color: '#6B7280', maxWidth: '600px', margin: '0 auto', lineHeight: '1.7' }}>
          JoMabel Healthcare Foundation is committed to transparency, accountability, 
          and responsible stewardship of resources.
        </p>
      </div>
      <div className="governance-grid">
        <div className="governance-card">
          <h3 className="governance-title">
            <Shield size={24} color="#1D8FD4" />
            Governance Principles
          </h3>
          <ul className="governance-list">
            <li><CheckCircle size={16} color="#16A34A" /> Mission-driven leadership</li>
            <li><CheckCircle size={16} color="#16A34A" /> Financial accountability</li>
            <li><CheckCircle size={16} color="#16A34A" /> Community engagement</li>
            <li><CheckCircle size={16} color="#16A34A" /> Impact measurement</li>
            <li><CheckCircle size={16} color="#16A34A" /> Ethical operations</li>
          </ul>
        </div>
        <div className="governance-card">
          <h3 className="governance-title">
            <Users size={24} color="#1D8FD4" />
            Oversight Structure
          </h3>
          <ul className="governance-list">
            <li><CheckCircle size={16} color="#16A34A" /> Board of Directors</li>
            <li><CheckCircle size={16} color="#16A34A" /> Advisory Board</li>
            <li><CheckCircle size={16} color="#16A34A" /> Executive Leadership</li>
            <li><CheckCircle size={16} color="#16A34A" /> Financial Oversight Committee</li>
            <li><CheckCircle size={16} color="#16A34A" /> Program Evaluation Team</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

// ─── BOARD MEMBERS WITH EXPANDABLE BIOS (UPDATED WITH DOYIN AND IMAGE) ───────
const boardMembers = [
  { 
    name: 'Ike Ogbaa, MD', 
    bio: 'Ike Ogbaa, MD, is a physician, biopharmaceutical leader, and strong advocate for equitable healthcare innovation. With nearly 20 years of experience, he has dedicated his career to translating scientific breakthroughs into new drugs for patients with serious and life-threatening conditions. He has held leadership roles at Merck, Sanofi, GSK, and Bayer, focusing on cardiorenal, neurovascular and metabolic diseases. As Chief Medical Officer of Oxia Therapeutics, Dr. Ogbaa is advancing a new therapeutic approach focused on activating the body\'s natural repair systems. Through JoMabel Healthcare Foundation, he extends this mission beyond drug development—working to improve access, education, and health outcomes in underserved communities particularly in Subsaharan Africa.',
    img: ikeOgbaaImg
  },
  { 
    name: 'Dr. Comfort N. Obi', 
    bio: 'Dr. Comfort N Obi is an Associate Professor at one of the public universities in Georgia State, where she spends time teaching and molding future generations of healthcare workforce and leaders. A nurse for 50 years and more, Dr. Obi spent many years working in intensive care, community health settings, and in caring for women of all ages. She served as a consultant to World-Bank-assisted projects on healthcare. She also spent many years at Nursing and Midwifery Council of Nigeria (Nurses Board) supervising the education and licensure of nurses and midwives and monitoring the accreditation of nursing institutions. Before transitioning to academia, Dr. Obi was a director in Women and Infant Services at one of Atlanta\'s top hospitals where she supervised the care of pregnant and non-pregnant women, new mothers and their babies. Dr. Obi is a board-certified Nurse Executive and a Fellow of West Africa College of Nursing. She sits on many boards and has received awards and recognition for her work in healthcare and nursing.',
    img: comfortObiImg
  },
  { 
    name: 'Nneka Ogbaa', 
    bio: 'Nneka Ogbaa, is a clinical research and data management professional with over a decade of experience in the biopharmaceutical industry, leading and supporting clinical trial operations across diverse therapeutic areas with a focus on data integrity, regulatory compliance, and successful study execution. Prior to entering the industry, she attended medical school, gaining a strong clinical perspective that informs her work in research and development. With a unique blend of clinical knowledge and data expertise, she is committed to advancing research that improves patient outcomes and, as a board member of the JoMabel Healthcare Foundation, focuses on enhancing healthcare access, education, and quality of life for underserved populations in Nigeria.',
    img: nnekaOgbaaImg
  },
  { 
    name: 'Doyin Antiabong, MBA, PMP', 
    bio: 'Doyin Antiabong, MBA, PMP, is a strategy and transformation executive with 17 years of experience closing the gap between bold vision and measurable results — across four Fortune 500 companies: Accenture, Diageo, Amazon, and Microsoft — where she led digital transformation, cloud strategy, and global programs across some of the world\'s most complex organizations. She currently serves as Founder and CEO of Zarn Group, where she is building lifestyle and home products people reach for every day — without knowing they were waiting for something this good. As a Nigerian and a board member of the JoMabel Healthcare Foundation, she is focused on what she has always done best: designing the operational systems and governance frameworks that turn JHF\'s bold vision into a lasting institution — because in Nigeria, healthcare\'s greatest barrier has never been the absence of vision. It has always been the absence of the system to deliver it. Vision is common. Execution is rare. Doyin brings both.',
    img: doyinImg
  },
];

// Individual Team Card Component with Expand/Collapse
const TeamCard = ({ member, index }: { member: typeof boardMembers[0]; index: number }) => {
  const [expanded, setExpanded] = useState(false);
  const bioPreview = member.bio.length > 220 ? member.bio.substring(0, 220) + '...' : member.bio;
  
  return (
    <div className="team-card" style={{ '--i': index } as React.CSSProperties}>
      {member.img ? (
        <img 
          src={member.img} 
          alt={member.name} 
          className="team-photo"
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = 'none';
            const placeholder = (e.target as HTMLImageElement).nextElementSibling;
            if (placeholder) (placeholder as HTMLElement).style.display = 'flex';
          }}
        />
      ) : null}
      <div className="team-photo-placeholder" style={{ display: member.img ? 'none' : 'flex', height: '260px', background: '#F3F4F6', alignItems: 'center', justifyContent: 'center' }}>
        <Users size={48} color="#9CA3AF" />
      </div>
      <div className="team-info">
        <h3 className="team-name">{member.name}</h3>
        <p className="team-bio">
          {expanded ? member.bio : bioPreview}
        </p>
        {member.bio.length > 220 && (
          <button 
            className="read-more-btn"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? 'Read Less' : 'Read More'}
          </button>
        )}
      </div>
    </div>
  );
};

const OurTeam = () => (
  <section className="team-section">
    <span style={{
      display: 'inline-block', background: '#EBF5FB', color: '#1D8FD4',
      fontSize: '11px', fontWeight: '700', letterSpacing: '0.14em',
      textTransform: 'uppercase', padding: '5px 14px', borderRadius: '999px',
    }}>
      Leadership Team
    </span>
    <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: '700', color: '#111827', margin: '12px 0 8px' }}>
      Executive Board of Directors
    </h2>
    <p style={{ fontSize: '14px', color: '#6B7280', maxWidth: '600px', margin: '0 auto 48px', lineHeight: '1.7' }}>
      JoMabel Healthcare Foundation USA Inc. is governed by a dedicated executive board
      committed to transparency, accountability, and mission-driven leadership.
    </p>
    <div className="team-grid">
      {boardMembers.map((member, i) => (
        <TeamCard key={i} member={member} index={i} />
      ))}
    </div>
  </section>
);

// ─── ABOUT PAGE ──────────────────────────────────────────────────────────────
const About = () => (
  <div style={{ fontFamily: 'var(--font-body)' }}>
    <style>{aboutStyles}</style>
    <Navbar />
    <AboutHero />
    
    {/* 1. Mission & Vision */}
    <MissionVisionSection />
    
    {/* 2. Our Core Values */}
    <CoreValues />
    
    {/* 3. Our History */}
    <HistorySection />
    
    {/* 4. Founder's Story */}
    <FounderQuote />
    
    {/* 5. Our Centers */}
    <CentersSection />
    
    {/* 6. Advisory Board */}
    <AdvisoryBoard />
    
    {/* 7. Governance Section */}
    <GovernanceSection />
    
    {/* 8. Leadership Team (Board of Directors) */}
    <OurTeam />
    
    {/* 9. Testimonies */}
    <Testimonies />
    
    <Footer />
  </div>
);

export default About;