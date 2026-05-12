import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { ArrowRight, Play, Calendar, MapPin, Users } from 'lucide-react';

// ── Architectural Renders ──
import render1 from '../assests/images/an1.jpg';
import render2 from '../assests/images/an2.jpg';
import render3 from '../assests/images/an3.jpg';
import render4 from '../assests/images/an4.jpg';
import render5 from '../assests/images/an5.jpg';
import render6 from '../assests/images/an6.jpg';

// ── Construction Videos ──
import construction1 from '../assests/images/construction1.mp4';
import construction2 from '../assests/images/construction2.mp4';
import construction3 from '../assests/images/construction3.mp4';
import construction4 from '../assests/images/construction4.mp4';

// ── Real Outreach Photos ──
import outreach1 from '../assests/images/outreach1.jpeg';
import outreach2 from '../assests/images/outreach2.jpeg';
import outreach3 from '../assests/images/outreach3.jpeg';
import outreach4 from '../assests/images/outreach4.jpeg';
import outreach5 from '../assests/images/outreach5.jpeg';

// ─── CAMPAIGN HERO ───────────────────────────────────────────────────────────
const CampaignHero = () => {
  const navigate = useNavigate();
  return (
    <section className="campaign-hero">
      <img src={render1} alt="JoMabel Medical Center architectural render" className="campaign-hero-bg" />
      <div className="campaign-hero-overlay" />
      <div className="campaign-hero-content">
        <span className="hero-tag">Capital Campaign</span>
        <h1 className="hero-title">
          Join Us in Building<br />Nigeria's Next Generation<br />Healthcare Center
        </h1>
        <p className="hero-description">
          A 16,000+ sq. meter world-class medical and training center rising
          in Ufuma, Anambra State, Nigeria powered by compassion, designed
          for generational impact.
        </p>
        <div className="hero-buttons">
          <button className="btn-primary" onClick={() => navigate('/donate')}>
            Donate to the Campaign
            <ArrowRight size={16} />
          </button>
          <button className="btn-outline" onClick={() => { const el = document.getElementById('facilities-section'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }}>
            See the Facilities
          </button>
        </div>
      </div>
    </section>
  );
};

// ─── VISION STATS WITH COUNT-UP ──────────────────────────────────────────────
const VisionStats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedNumbers, setAnimatedNumbers] = useState({ size: 0, facilities: 0, programs: 0 });
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setIsVisible(true); observer.disconnect(); }
    }, { threshold: 0.3 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let s = 0; const si = setInterval(() => { if (s < 16000) { s += 500; setAnimatedNumbers(p => ({ ...p, size: s })); } else clearInterval(si); }, 15);
    let f = 0; const fi = setInterval(() => { if (f < 2) { f++; setAnimatedNumbers(p => ({ ...p, facilities: f })); } else clearInterval(fi); }, 100);
    let pr = 0; const pi = setInterval(() => { if (pr < 6) { pr++; setAnimatedNumbers(p => ({ ...p, programs: pr })); } else clearInterval(pi); }, 100);
  }, [isVisible]);

  return (
    <section ref={sectionRef} className={`vision-stats ${isVisible ? 'visible' : ''}`}>
      <div className="container">
        <div className="section-header">
          <span className="section-label">The Vision</span>
          <h2 className="section-title">A Center Built for Generations</h2>
        </div>
        <div className="stats-grid">
          {[
            { num: `${animatedNumbers.size.toLocaleString()}+`, label: 'Square Meters', sub: 'Total Center Size' },
            { num: animatedNumbers.facilities, label: 'Major Facilities', sub: 'Medical + Training Center' },
            { num: `${animatedNumbers.programs}+`, label: 'Program Areas', sub: 'Healthcare & Training' },
            { num: '∞', label: 'Generational Impact', sub: 'Ufuma, Anambra State' },
          ].map((s, i) => (
            <div key={i} className="stat-card">
              <p className="stat-number">{s.num}</p>
              <p className="stat-label">{s.label}</p>
              <p className="stat-sub">{s.sub}</p>
            </div>
          ))}
        </div>
        <div className="vision-description">
          <p>
            The JoMabel Medical and Training Center in Ufuma, Anambra State will serve as
            a transformative hub for healthcare delivery, professional training, and community
            empowerment bringing world-class facilities to southeastern Nigeria and creating
            a lasting legacy of health, dignity, and opportunity.
          </p>
        </div>
      </div>
    </section>
  );
};

// ─── FACILITIES BREAKDOWN ─────────────────────────────────────────────────────
const FacilitiesBreakdown = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [animatedProgress, setAnimatedProgress] = useState({ medical: 0, training: 0 });
  const sectionRef = useRef(null);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    if (isMobile) { setTimeout(() => setIsVisible(true), 100); return; }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setIsVisible(true); observer.disconnect(); }
    }, { threshold: 0.1, rootMargin: '50px' });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let m = 0; const mi = setInterval(() => { if (m < 70) { m++; setAnimatedProgress(p => ({ ...p, medical: m })); } else clearInterval(mi); }, 25);
    let t = 0; const ti = setInterval(() => { if (t < 30) { t++; setAnimatedProgress(p => ({ ...p, training: t })); } else clearInterval(ti); }, 40);
  }, [isVisible]);

  const facilities = [
    {
      name: 'JoMabel Medical Center', size: '6,000 sqm',
      status: `${animatedProgress.medical}% Completed`, pct: animatedProgress.medical,
      accentColor: 'var(--color-primary)', badge: 'Under Construction',
      badgeBg: 'var(--color-navy-light)', badgeColor: 'var(--color-navy-mid)',
      description: 'The operational heart of the JoMabel campus delivering primary care, diagnostics, and specialist services to Ufuma and surrounding communities.',
      services: ['Primary & Preventive Care', 'Maternal & Child Health', 'Chronic Disease Management', 'Diagnostic & Laboratory Services', 'Emergency & Trauma Care', 'Digital Health & Telemedicine'],
      render: render1,
    },
    {
      name: 'Skill Acquisition & Medical Training Center', size: '10,000 sqm',
      status: `${animatedProgress.training}% Completed`, pct: animatedProgress.training,
      accentColor: 'var(--color-green)', badge: 'Foundation Stage',
      badgeBg: 'var(--color-green-light)', badgeColor: 'var(--color-green-dark)',
      description: 'A world-class training facility investing in the next generation of healthcare professionals through hands-on clinical education and community health worker programs.',
      services: ['Community Health Worker Training', 'Clinical Skills & Simulation Labs', 'Nursing & Midwifery Programs', 'Health Leadership Development', 'Digital Health Training', 'Vocational & Skills Acquisition'],
      render: render6,
    },
  ];

  return (
    <section ref={sectionRef} id="facilities-section" className={`facilities-section ${isVisible ? 'visible' : ''}`}>
      <div className="container">
        <div className="section-header">
          <span className="section-label">The Center Facilities</span>
          <h2 className="section-title">Two Facilities. One Integrated Vision.</h2>
          <p className="section-description">
            Together, the Medical Center and Training Center form a fully integrated
            healthcare campus delivering care today while building the workforce of tomorrow.
          </p>
        </div>

        <div className="facilities-grid">
          {facilities.map((f, i) => (
            <div key={i} className="facility-card">
              <div className="facility-image-wrap">
                <img src={f.render} alt={f.name} className="facility-image" />
                <div className="facility-image-overlay" />
                <div className="facility-badges">
                  <span className="facility-badge" style={{ background: f.badgeBg, color: f.badgeColor }}>{f.badge}</span>
                  <span className="facility-size">{f.size}</span>
                </div>
              </div>
              <div className="facility-content">
                <h3 className="facility-name">{f.name}</h3>
                <p className="facility-description">{f.description}</p>
                <div className="progress-section">
                  <div className="progress-header">
                    <span className="progress-label">Construction Progress</span>
                    <span className="progress-status" style={{ color: f.accentColor }}>{f.status}</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: `${f.pct}%`, background: f.accentColor }} />
                  </div>
                </div>
                <div className="services-section">
                  <p className="services-label">Anticipated Services</p>
                  <div className="services-grid">
                    {f.services.map((s, j) => (
                      <div key={j} className="service-item">
                        <div className="service-dot" style={{ background: f.accentColor }} />
                        <span>{s}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <button className="facility-cta" style={{ background: f.accentColor }} onClick={() => navigate('/donate')}>
                  Help Complete This Center <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Why Ufuma */}
        <div className="why-ufuma">
          <div className="why-header">
            <span className="why-label">Why Ufuma</span>
            <h3 className="why-title">Bringing World-Class Care to Those Who Need It Most</h3>
          </div>
          <div className="why-grid">
            {[
              { icon: MapPin, title: 'No Nearby Hospital', desc: 'Ufuma and surrounding communities lack access to a fully equipped medical facility within a reasonable distance.' },
              { icon: Users, title: 'Workforce Gap', desc: 'Southeastern Nigeria faces a critical shortage of trained healthcare workers — the Training Center directly addresses this.' },
              { icon: Play, title: 'Scalable Model', desc: 'The JoMabel Center model is designed as a replicable approach for rural healthcare transformation across Nigeria and Africa.' },
            ].map((item, i) => (
              <div key={i} className="why-card">
                <item.icon size={28} className="why-icon" />
                <p className="why-card-title">{item.title}</p>
                <p className="why-card-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// ─── ARCHITECTURAL RENDERS GALLERY ───────────────────────────────────────────
const RendersGallery = () => {
  const [active, setActive] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setIsVisible(true); observer.disconnect(); }
    }, { threshold: 0.3 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const renders = [
    { src: render1, label: 'Main Entrance — Front View' },
    { src: render6, label: 'J&M Nursing Training Center, Ufuma' },
    { src: render4, label: 'Full Front Facade' },
    { src: render2, label: 'Side & Parking View' },
    { src: render5, label: 'Aerial Top-Down View' },
    { src: render3, label: 'Site Floor Plan' },
  ];

  return (
    <section ref={sectionRef} className={`gallery-section ${isVisible ? 'visible' : ''}`}>
      <div className="container">
        <div className="section-header">
          <span className="section-label">Architectural Plans</span>
          <h2 className="section-title">The Center Design</h2>
        </div>
        <div className="gallery-main">
          <img src={renders[active].src} alt={renders[active].label} />
          <div className="gallery-caption"><p>{renders[active].label}</p></div>
        </div>
        <div className="gallery-thumbs">
          {renders.map((r, i) => (
            <div key={i} className={`gallery-thumb ${i === active ? 'active' : ''}`} onClick={() => setActive(i)}>
              <img src={r.src} alt={r.label} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── CONSTRUCTION VIDEOS ─────────────────────────────────────────────────────
const ConstructionVideos = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setIsVisible(true); observer.disconnect(); }
    }, { threshold: 0.3 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className={`videos-section ${isVisible ? 'visible' : ''}`}>
      <div className="container">
        <div className="section-header">
          <span className="section-label">Watch It Rise</span>
          <h2 className="section-title">From Blueprint to Reality</h2>
          <p className="section-description">
            Watch our 16,000+ sq. meter medical center rising in Ufuma, Anambra State.
            Every brick is a step toward dignified healthcare for generations.
          </p>
        </div>
        <div className="videos-grid">
          {[
            { src: construction4, label: 'Construction Progress — Phase 1' },
            { src: construction2, label: 'Construction Progress — Phase 2' },
            { src: construction3, label: 'Construction Progress — Phase 3' },
            { src: construction1, label: 'Construction Progress — Phase 4' },
          ].map((v, i) => (
            <div key={i} className="video-card">
              <video src={v.src} controls muted playsInline className="video-player" />
              <div className="video-label"><p>{v.label}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── ONGOING OUTREACH CAMPAIGNS ──────────────────────────────────────────────
const OutreachCampaigns = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setIsVisible(true); observer.disconnect(); }
    }, { threshold: 0.3 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const campaigns = [
    { img: outreach5, title: 'Medical Outreach Mission — Ufuma', desc: 'Free consultations, screenings, medications and referrals delivered directly to community members in Ufuma, Anambra State — reaching hundreds of families in a single day.', tag: 'Outreach Mission' },
    { img: outreach1, title: 'Community Health Screenings', desc: 'Working alongside the Nigerian Red Cross, our teams deliver free health screenings and consultations to underserved communities, identifying critical health needs early.', tag: 'Health Screening' },
    { img: outreach4, title: 'Medical Outreach Team in Action', desc: 'Our dedicated Medical Outreach Team delivers essential services directly to the people who need them most.', tag: 'Community Impact' },
    { img: outreach3, title: 'Volunteer & Staff Network', desc: 'A growing team of committed volunteers, healthcare workers, and community leaders working together to expand JoMabel\'s reach across southeastern Nigeria.', tag: 'Volunteers' },
    { img: outreach2, title: 'Registration & Preventive Care', desc: 'Outreach stations provide registration, triage, and preventive care services — ensuring every community member receives the attention and follow-up they deserve.', tag: 'Preventive Care' },
  ];

  return (
    <section ref={sectionRef} className={`outreach-section ${isVisible ? 'visible' : ''}`}>
      <div className="container">
        <div className="section-header">
          <span className="section-label">On The Ground</span>
          <h2 className="section-title">Ongoing Outreach Campaigns</h2>
        </div>
        <div className="campaign-mosaic">
          <div className="campaign-large">
            <img src={campaigns[0].img} alt={campaigns[0].title} />
            <div className="campaign-large-overlay" />
            <div className="campaign-large-content">
              <span className="campaign-tag">{campaigns[0].tag}</span>
              <h3 className="campaign-title">{campaigns[0].title}</h3>
              <p className="campaign-desc">{campaigns[0].desc}</p>
            </div>
          </div>
          <div className="campaign-grid">
            {campaigns.slice(1).map((c, i) => (
              <div key={i} className="campaign-card">
                <img src={c.img} alt={c.title} className="campaign-card-image" />
                <div className="campaign-card-content">
                  <span className="campaign-card-tag">{c.tag}</span>
                  <h3 className="campaign-card-title">{c.title}</h3>
                  <p className="campaign-card-desc">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="outreach-cta">
          <button className="btn-green-large" onClick={() => navigate('/donate')}>
            Support Our Campaigns <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};

// ─── MAIN CAMPAIGN COMPONENT ──────────────────────────────────────────────────
const Campaign = () => (
  <div className="campaign-page">
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');

      /* ══ BASE ══ */
      .campaign-page {
        font-family: var(--font-body);
        background-color: var(--color-bg);
      }

      .container {
        max-width: 1200px;
        margin: 0 auto;
      }

      /* ══ SHARED SECTION HEADER ══ */
      .section-header {
        text-align: center;
        margin-bottom: 48px;
      }
      .section-label {
        display: inline-block;
        font-family: var(--font-body);
        font-size: 11px;
        font-weight: 700;
        letter-spacing: 2.5px;
        text-transform: uppercase;
        color: var(--color-primary);
        background: var(--color-primary-light);
        padding: 6px 16px;
        border-radius: 0;
      }
      .section-title {
        font-family: 'Anton', sans-serif;
        font-size: clamp(26px, 4vw, 40px);
        font-weight: 400;
        color: var(--color-navy);
        margin-top: 14px;
        text-transform: uppercase;
        letter-spacing: 0.02em;
        line-height: 1.05;
      }
      .section-description {
        font-family: var(--font-body);
        font-size: 15px;
        color: var(--color-text-muted);
        max-width: 600px;
        margin: 14px auto 0;
        line-height: 1.7;
      }

      /* ══ SHARED BUTTONS ══ */
      .btn-primary {
        background: var(--color-green);
        color: var(--color-white);
        border: none;
        border-radius: 0;
        padding: 14px 32px;
        font-family: var(--font-body);
        font-size: 13px;
        font-weight: 700;
        letter-spacing: 1.2px;
        text-transform: uppercase;
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        gap: 8px;
        transition: var(--transition);
      }
      .btn-primary:hover { background: var(--color-green-dark); transform: translateY(-1px); }

      .btn-outline {
        background: transparent;
        color: var(--color-white);
        border: 1.5px solid rgba(255,255,255,0.45);
        border-radius: 0;
        padding: 14px 32px;
        font-family: var(--font-body);
        font-size: 13px;
        font-weight: 600;
        letter-spacing: 1.2px;
        text-transform: uppercase;
        cursor: pointer;
        transition: var(--transition);
      }
      .btn-outline:hover { background: rgba(255,255,255,0.10); border-color: rgba(255,255,255,0.70); }

      .btn-green-large {
        background: var(--color-green);
        color: var(--color-white);
        border: none;
        border-radius: 0;
        padding: 16px 48px;
        font-family: var(--font-body);
        font-size: 14px;
        font-weight: 700;
        letter-spacing: 1.4px;
        text-transform: uppercase;
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        gap: 10px;
        transition: var(--transition);
      }
      .btn-green-large:hover { background: var(--color-green-dark); transform: translateY(-2px); }

      /* ══ HERO ══ */
      .campaign-hero {
        position: relative;
        min-height: 600px;
        display: flex;
        align-items: flex-end;
        overflow: hidden;
      }
      .campaign-hero-bg {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
      }
      .campaign-hero-overlay {
        position: absolute;
        inset: 0;
        background: linear-gradient(
          105deg,
          rgba(17,24,39,0.95) 0%,
          rgba(17,24,39,0.80) 55%,
          rgba(17,24,39,0.35) 100%
        );
      }
      .campaign-hero-content {
        position: relative;
        z-index: 2;
        padding: clamp(48px, 8vw, 100px) clamp(24px, 5vw, 80px);
        max-width: 740px;
        width: 100%;
      }
      .hero-tag {
        display: inline-block;
        background: rgba(29,143,212,0.20);
        border: 1px solid rgba(29,143,212,0.45);
        color: var(--color-primary);
        font-family: var(--font-body);
        font-size: 11px;
        font-weight: 700;
        letter-spacing: 2.5px;
        text-transform: uppercase;
        padding: 6px 16px;
        border-radius: 0;
        margin-bottom: 24px;
      }
      .hero-title {
        font-family: 'Anton', sans-serif;
        color: var(--color-white);
        font-size: clamp(36px, 6vw, 68px);
        font-weight: 400;
        line-height: 1.0;
        text-transform: uppercase;
        letter-spacing: 0.02em;
        margin-bottom: 20px;
      }
      .hero-description {
        font-family: var(--font-body);
        color: rgba(255,255,255,0.82);
        font-size: clamp(14px, 1.4vw, 17px);
        line-height: 1.75;
        margin-bottom: 36px;
        max-width: 520px;
      }
      .hero-buttons { display: flex; gap: 16px; flex-wrap: wrap; }

      /* ══ VISION STATS ══ */
      .vision-stats {
        background: var(--color-surface);
        padding: 80px clamp(20px, 5vw, 48px);
        border-top: 3px solid var(--color-navy);
      }
      .vision-stats .stat-card {
        opacity: 0; transform: translateY(30px);
        transition: opacity 0.6s ease-out, transform 0.6s ease-out;
      }
      .vision-stats.visible .stat-card:nth-child(1) { opacity:1; transform:translateY(0); transition-delay:0.1s; }
      .vision-stats.visible .stat-card:nth-child(2) { opacity:1; transform:translateY(0); transition-delay:0.2s; }
      .vision-stats.visible .stat-card:nth-child(3) { opacity:1; transform:translateY(0); transition-delay:0.3s; }
      .vision-stats.visible .stat-card:nth-child(4) { opacity:1; transform:translateY(0); transition-delay:0.4s; }
      .vision-stats .section-label,
      .vision-stats .section-title,
      .vision-stats .vision-description {
        opacity: 0; transform: translateY(20px);
        transition: opacity 0.6s ease-out, transform 0.6s ease-out;
      }
      .vision-stats.visible .section-label  { opacity:1; transform:translateY(0); transition-delay:0s; }
      .vision-stats.visible .section-title  { opacity:1; transform:translateY(0); transition-delay:0.05s; }
      .vision-stats.visible .vision-description { opacity:1; transform:translateY(0); transition-delay:0.5s; }

      .stats-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 2px;             /* tight seam */
        margin-bottom: 56px;
      }
      .stat-card {
        background: var(--color-bg);
        border-top: 4px solid var(--color-primary);
        padding: 32px 24px;
        text-align: center;
      }
      .stat-number {
        font-family: 'Anton', sans-serif;
        font-size: clamp(32px, 4vw, 52px);
        font-weight: 400;
        color: var(--color-primary);
        letter-spacing: 0.02em;
        margin-bottom: 8px;
        line-height: 1;
      }
      .stat-label {
        font-family: var(--font-body);
        font-size: 14px;
        font-weight: 700;
        color: var(--color-navy);
        margin-bottom: 4px;
      }
      .stat-sub {
        font-family: var(--font-body);
        font-size: 12px;
        color: var(--color-text-light);
      }
      .vision-description {
        max-width: 740px;
        margin: 0 auto;
        text-align: center;
        border-top: 1px solid var(--color-border);
        padding-top: 32px;
      }
      .vision-description p {
        font-family: var(--font-body);
        font-size: 16px;
        color: var(--color-text-muted);
        line-height: 1.8;
      }

      /* ══ FACILITIES SECTION ══ */
      .facilities-section {
        padding: 80px clamp(20px, 5vw, 48px);
        background: var(--color-bg);
      }
      .facilities-section .facility-card { opacity:1; transform:translateY(0); transition: opacity 0.6s ease-out, transform 0.6s ease-out; }
      .facilities-section .section-label,
      .facilities-section .section-title,
      .facilities-section .section-description { opacity:1; transform:translateY(0); transition: opacity 0.6s ease-out, transform 0.6s ease-out; }

      @media (min-width: 769px) {
        .facilities-section .facility-card { opacity:0; transform:translateY(30px); }
        .facilities-section .section-label,
        .facilities-section .section-title,
        .facilities-section .section-description { opacity:0; transform:translateY(20px); }
        .facilities-section.visible .facility-card:nth-child(1) { opacity:1; transform:translateY(0); transition-delay:0.2s; }
        .facilities-section.visible .facility-card:nth-child(2) { opacity:1; transform:translateY(0); transition-delay:0.4s; }
        .facilities-section.visible .section-label  { opacity:1; transform:translateY(0); transition-delay:0s; }
        .facilities-section.visible .section-title  { opacity:1; transform:translateY(0); transition-delay:0.1s; }
        .facilities-section.visible .section-description { opacity:1; transform:translateY(0); transition-delay:0.2s; }
      }

      .facilities-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2px;
        margin-bottom: 48px;
      }
      .facility-card {
        background: var(--color-bg);
        border: 1px solid var(--color-border);
        border-radius: 0;
        overflow: hidden;
        transition: var(--transition);
      }
      .facility-card:hover { transform: translateY(-3px); box-shadow: var(--shadow-lg); border-color: var(--color-primary); }
      .facility-image-wrap { position: relative; height: 260px; overflow: hidden; }
      .facility-image { width: 100%; height: 100%; object-fit: cover; }
      .facility-image-overlay {
        position: absolute; inset: 0;
        background: linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 55%);
      }
      .facility-badges { position: absolute; bottom: 16px; left: 16px; right: 16px; display: flex; justify-content: space-between; align-items: center; }
      .facility-badge {
        font-family: var(--font-body);
        font-size: 10px; font-weight: 700; letter-spacing: 1.2px; text-transform: uppercase;
        padding: 5px 12px; border-radius: 0;
      }
      .facility-size {
        background: rgba(0,0,0,0.55); color: var(--color-white);
        font-family: var(--font-body);
        font-size: 12px; font-weight: 600; padding: 4px 12px; border-radius: 0;
      }
      .facility-content { padding: 32px; }
      .facility-name {
        font-family: 'Anton', sans-serif;
        font-size: clamp(17px, 2vw, 22px); font-weight: 400;
        color: var(--color-navy); text-transform: uppercase;
        letter-spacing: 0.03em; margin-bottom: 12px; line-height: 1.1;
      }
      .facility-description {
        font-family: var(--font-body);
        font-size: 14px; color: var(--color-text-muted); line-height: 1.7; margin-bottom: 24px;
      }
      .progress-section {
        background: var(--color-surface);
        border-left: 3px solid var(--color-border);
        padding: 14px 16px; margin-bottom: 24px;
      }
      .progress-header { display: flex; justify-content: space-between; margin-bottom: 10px; }
      .progress-label { font-family: var(--font-body); font-size: 12px; color: var(--color-text-muted); font-weight: 600; }
      .progress-status { font-family: var(--font-body); font-size: 13px; font-weight: 700; }
      .progress-bar { height: 8px; background: var(--color-border); border-radius: 0; overflow: hidden; }
      .progress-fill { height: 100%; border-radius: 0; transition: width 0.5s ease; }
      .services-section { margin-bottom: 28px; }
      .services-label {
        font-family: var(--font-body);
        font-size: 10px; font-weight: 700; letter-spacing: 1.5px;
        text-transform: uppercase; color: var(--color-text-light); margin-bottom: 14px;
        display: flex; align-items: center; gap: 10px;
      }
      .services-label::after { content: ''; flex: 1; height: 1px; background: var(--color-border); }
      .services-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; }
      .service-item { display: flex; align-items: center; gap: 8px; font-family: var(--font-body); font-size: 12px; color: var(--color-text-muted); }
      .service-dot { width: 5px; height: 5px; border-radius: 0; flex-shrink: 0; }
      .facility-cta {
        width: 100%; border: none; border-radius: 0;
        padding: 14px; font-family: var(--font-body);
        font-size: 12px; font-weight: 700; letter-spacing: 1.4px; text-transform: uppercase;
        color: var(--color-white); cursor: pointer;
        display: inline-flex; align-items: center; justify-content: center; gap: 8px;
        transition: var(--transition);
      }
      .facility-cta:hover { opacity: 0.85; transform: translateY(-1px); }

      /* ── Why Ufuma ── */
      .why-ufuma {
        background: var(--color-primary-light);
        border-left: 5px solid var(--color-primary);
        padding: 48px;
        margin-top: 2px;
      }
      .why-header { text-align: center; margin-bottom: 36px; }
      .why-label {
        font-family: var(--font-body);
        font-size: 11px; font-weight: 700; letter-spacing: 2.5px;
        text-transform: uppercase; color: var(--color-primary);
      }
      .why-title {
        font-family: 'Anton', sans-serif;
        font-size: clamp(20px, 2.5vw, 28px); font-weight: 400;
        color: var(--color-navy); text-transform: uppercase;
        letter-spacing: 0.02em; margin-top: 10px;
      }
      .why-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 40px; }
      .why-card { text-align: center; }
      .why-icon { color: var(--color-primary); margin-bottom: 16px; }
      .why-card-title { font-family: 'Anton', sans-serif; font-size: 16px; font-weight: 400; text-transform: uppercase; color: var(--color-navy); margin-bottom: 10px; letter-spacing: 0.03em; }
      .why-card-desc { font-family: var(--font-body); font-size: 13px; color: var(--color-text-muted); line-height: 1.65; }

      /* ══ GALLERY SECTION ══ */
      .gallery-section {
        background: var(--color-surface);
        padding: 80px clamp(20px, 5vw, 48px);
        border-top: 3px solid var(--color-navy);
      }
      .gallery-section .gallery-main,
      .gallery-section .gallery-thumbs { opacity:0; transform:translateY(20px); transition: opacity 0.6s ease-out, transform 0.6s ease-out; }
      .gallery-section.visible .gallery-main { opacity:1; transform:translateY(0); transition-delay:0.2s; }
      .gallery-section.visible .gallery-thumbs { opacity:1; transform:translateY(0); transition-delay:0.4s; }
      .gallery-section .section-label,
      .gallery-section .section-title { opacity:0; transform:translateY(20px); transition: opacity 0.6s ease-out, transform 0.6s ease-out; }
      .gallery-section.visible .section-label { opacity:1; transform:translateY(0); }
      .gallery-section.visible .section-title { opacity:1; transform:translateY(0); transition-delay:0.1s; }

      .gallery-main {
        position: relative; border-radius: 0;
        overflow: hidden; margin-bottom: 4px;
        box-shadow: var(--shadow-xl);
      }
      .gallery-main img { width: 100%; height: clamp(280px, 45vw, 540px); object-fit: cover; display: block; }
      .gallery-caption {
        position: absolute; bottom: 0; left: 0; right: 0;
        background: linear-gradient(to top, rgba(0,0,0,0.75), transparent);
        padding: 24px 24px 20px;
      }
      .gallery-caption p { color: var(--color-white); font-family: var(--font-body); font-size: 14px; font-weight: 600; margin: 0; }
      .gallery-thumbs { display: grid; grid-template-columns: repeat(6, 1fr); gap: 4px; }
      .gallery-thumb {
        overflow: hidden; cursor: pointer;
        border: 2px solid transparent;
        border-radius: 0;
        transition: var(--transition); opacity: 0.55;
      }
      .gallery-thumb.active { border-color: var(--color-primary); opacity: 1; }
      .gallery-thumb:hover { opacity: 1; }
      .gallery-thumb img { width: 100%; height: 72px; object-fit: cover; display: block; }

      /* ══ VIDEOS SECTION ══ */
      .videos-section {
        padding: 80px clamp(20px, 5vw, 48px);
        background: var(--color-navy);
      }
      .videos-section .section-label { background: rgba(255,255,255,0.08); color: var(--color-primary); }
      .videos-section .section-title { color: var(--color-white); }
      .videos-section .section-description { color: rgba(255,255,255,0.65); }
      .videos-section .video-card { opacity:0; transform:translateY(30px); transition: opacity 0.6s ease-out, transform 0.6s ease-out; }
      .videos-section.visible .video-card:nth-child(1) { opacity:1; transform:translateY(0); transition-delay:0.2s; }
      .videos-section.visible .video-card:nth-child(2) { opacity:1; transform:translateY(0); transition-delay:0.3s; }
      .videos-section.visible .video-card:nth-child(3) { opacity:1; transform:translateY(0); transition-delay:0.4s; }
      .videos-section.visible .video-card:nth-child(4) { opacity:1; transform:translateY(0); transition-delay:0.5s; }
      .videos-section .section-label,
      .videos-section .section-title,
      .videos-section .section-description { opacity:0; transform:translateY(20px); transition: opacity 0.6s ease-out, transform 0.6s ease-out; }
      .videos-section.visible .section-label { opacity:1; transform:translateY(0); }
      .videos-section.visible .section-title { opacity:1; transform:translateY(0); transition-delay:0.1s; }
      .videos-section.visible .section-description { opacity:1; transform:translateY(0); transition-delay:0.2s; }

      .videos-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 2px; }
      .video-card { background: var(--color-text); border-radius: 0; overflow: hidden; }
      .video-player { width: 100%; display: block; max-height: 280px; object-fit: cover; }
      .video-label { padding: 14px 16px; border-top: 2px solid rgba(255,255,255,0.06); }
      .video-label p { font-family: var(--font-body); font-size: 13px; font-weight: 600; color: var(--color-white); margin: 0; }

      /* ══ OUTREACH SECTION ══ */
      .outreach-section {
        background: var(--color-surface);
        padding: 80px clamp(20px, 5vw, 48px);
        border-top: 3px solid var(--color-navy);
      }
      .outreach-section .campaign-large,
      .outreach-section .campaign-card { opacity:0; transform:translateY(30px); transition: opacity 0.6s ease-out, transform 0.6s ease-out; }
      .outreach-section.visible .campaign-large { opacity:1; transform:translateY(0); transition-delay:0.2s; }
      .outreach-section.visible .campaign-card:nth-child(1) { opacity:1; transform:translateY(0); transition-delay:0.3s; }
      .outreach-section.visible .campaign-card:nth-child(2) { opacity:1; transform:translateY(0); transition-delay:0.4s; }
      .outreach-section.visible .campaign-card:nth-child(3) { opacity:1; transform:translateY(0); transition-delay:0.5s; }
      .outreach-section.visible .campaign-card:nth-child(4) { opacity:1; transform:translateY(0); transition-delay:0.6s; }
      .outreach-section .section-label,
      .outreach-section .section-title { opacity:0; transform:translateY(20px); transition: opacity 0.6s ease-out, transform 0.6s ease-out; }
      .outreach-section.visible .section-label { opacity:1; transform:translateY(0); }
      .outreach-section.visible .section-title { opacity:1; transform:translateY(0); transition-delay:0.1s; }

      .campaign-mosaic { display: grid; grid-template-columns: 1fr 1fr; gap: 2px; margin-bottom: 48px; }
      .campaign-large { position: relative; border-radius: 0; overflow: hidden; height: 520px; }
      .campaign-large img { width: 100%; height: 100%; object-fit: cover; display: block; }
      .campaign-large-overlay { position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.88), transparent 55%); }
      .campaign-large-content { position: absolute; bottom: 0; left: 0; right: 0; padding: 32px; }
      .campaign-tag {
        display: inline-block; background: var(--color-primary); color: var(--color-white);
        font-family: var(--font-body); font-size: 10px; font-weight: 700;
        letter-spacing: 1.5px; text-transform: uppercase;
        padding: 4px 12px; border-radius: 0; margin-bottom: 12px;
      }
      .campaign-title { font-family: 'Anton', sans-serif; font-size: clamp(17px, 2vw, 22px); font-weight: 400; text-transform: uppercase; color: var(--color-white); margin-bottom: 8px; letter-spacing: 0.02em; }
      .campaign-desc { font-family: var(--font-body); font-size: 14px; color: rgba(255,255,255,0.78); line-height: 1.65; }

      .campaign-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 2px; }
      .campaign-card { background: var(--color-bg); border-radius: 0; overflow: hidden; border: 1px solid var(--color-border); transition: var(--transition); }
      .campaign-card:hover { transform: translateY(-3px); box-shadow: var(--shadow-lg); border-color: var(--color-primary); }
      .campaign-card-image { width: 100%; height: 150px; object-fit: cover; display: block; }
      .campaign-card-content { padding: 18px; }
      .campaign-card-tag {
        display: inline-block; background: var(--color-primary-light); color: var(--color-primary);
        font-family: var(--font-body); font-size: 10px; font-weight: 700;
        letter-spacing: 1.2px; text-transform: uppercase;
        padding: 3px 10px; border-radius: 0; margin-bottom: 10px;
      }
      .campaign-card-title { font-family: 'Anton', sans-serif; font-size: 14px; font-weight: 400; text-transform: uppercase; color: var(--color-navy); margin-bottom: 6px; letter-spacing: 0.03em; }
      .campaign-card-desc { font-family: var(--font-body); font-size: 12px; color: var(--color-text-muted); line-height: 1.55; }
      .outreach-cta { text-align: center; padding-top: 8px; }

      /* ══ RESPONSIVE ══ */
      @media (max-width: 900px) {
        .stats-grid { grid-template-columns: repeat(2, 1fr); }
        .facilities-grid,
        .why-grid,
        .videos-grid,
        .campaign-mosaic { grid-template-columns: 1fr; }
        .campaign-grid { grid-template-columns: 1fr 1fr; }
        .gallery-thumbs { grid-template-columns: repeat(3, 1fr); }
        .campaign-large { height: 380px; }
        .why-ufuma { padding: 36px 28px; }
      }
      @media (max-width: 600px) {
        .hero-buttons { flex-direction: column; }
        .stats-grid { grid-template-columns: 1fr 1fr; }
        .services-grid { grid-template-columns: 1fr; }
        .campaign-grid { grid-template-columns: 1fr; }
        .gallery-thumbs { grid-template-columns: repeat(3, 1fr); }
        .why-ufuma { padding: 28px 20px; }
      }
    `}</style>

    <Navbar />
    <CampaignHero />
    <VisionStats />
    <FacilitiesBreakdown />
    <RendersGallery />
    <ConstructionVideos />
    <OutreachCampaigns />
    <Footer />
  </div>
);

export default Campaign;