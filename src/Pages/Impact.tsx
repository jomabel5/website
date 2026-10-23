import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { ArrowRight, Heart, Users, Building2, Activity, TrendingUp, Target, Globe } from 'lucide-react';

// Images
import heroImage from '../assests/images/outreach5.jpeg';
import outreachImage from '../assests/images/outreach2.jpeg';
import maternalImage from '../assests/images/maternal-and-child-health-.jpg';

const Impact = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  // Animated numbers
  const [animatedStats, setAnimatedStats] = useState({
    patients: 0,
    workers: 0,
    campus: 0,
    communities: 0
  });
  
  const [animatedEconomic, setAnimatedEconomic] = useState({
    annual: 0,
    fiveYear: 0
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      let startPatients = 0;
      const patientsInterval = setInterval(() => {
        if (startPatients < 5000) {
          startPatients += 100;
          setAnimatedStats(prev => ({ ...prev, patients: startPatients }));
        } else {
          clearInterval(patientsInterval);
        }
      }, 15);

      let startWorkers = 0;
      const workersInterval = setInterval(() => {
        if (startWorkers < 250) {
          startWorkers += 5;
          setAnimatedStats(prev => ({ ...prev, workers: startWorkers }));
        } else {
          clearInterval(workersInterval);
        }
      }, 20);

      let startCampus = 0;
      const campusInterval = setInterval(() => {
        if (startCampus < 16000) {
          startCampus += 500;
          setAnimatedStats(prev => ({ ...prev, campus: startCampus }));
        } else {
          clearInterval(campusInterval);
        }
      }, 15);

      let startCommunities = 0;
      const communitiesInterval = setInterval(() => {
        if (startCommunities < 25) {
          startCommunities++;
          setAnimatedStats(prev => ({ ...prev, communities: startCommunities }));
        } else {
          clearInterval(communitiesInterval);
        }
      }, 40);

      let startAnnual = 0;
      const annualInterval = setInterval(() => {
        if (startAnnual < 547500) {
          startAnnual += 5000;
          setAnimatedEconomic(prev => ({ ...prev, annual: startAnnual }));
        } else {
          clearInterval(annualInterval);
        }
      }, 15);

      let startFiveYear = 0;
      const fiveYearInterval = setInterval(() => {
        if (startFiveYear < 2700000) {
          startFiveYear += 25000;
          setAnimatedEconomic(prev => ({ ...prev, fiveYear: startFiveYear }));
        } else {
          clearInterval(fiveYearInterval);
        }
      }, 15);
    }
  }, [isVisible]);

  const impactMetrics = [
    { icon: Heart, number: animatedStats.patients.toLocaleString(), suffix: '+', label: 'Patients Served Annually' },
    { icon: Users, number: animatedStats.workers.toLocaleString(), suffix: '+', label: 'Health Workers Trained' },
    { icon: Building2, number: animatedStats.campus.toLocaleString(), suffix: '+ sqm', label: 'Healthcare Campus' },
    { icon: Globe, number: animatedStats.communities.toLocaleString(), suffix: '+', label: 'Communities Served' },
  ];

  const impactAreas = [
    { icon: Activity, title: 'Primary & Preventive Care', description: 'Delivering essential healthcare services to underserved populations.', image: heroImage },
    { icon: Heart, title: 'Maternal & Child Health', description: 'Safe pregnancy, delivery services, newborn care, and immunization.', image: maternalImage },
    { icon: Target, title: 'Community Outreach', description: 'Mobile medical missions bringing free consultations to remote communities.', image: outreachImage },
    { icon: Users, title: 'Workforce Development', description: 'Training community health workers to build sustainable local capacity.', image: heroImage },
  ];

  return (
    <div ref={sectionRef} className="impact-page">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');

        .impact-page {
          font-family: var(--font-body);
          background: var(--color-bg);
          color: var(--color-text);
        }

        /* ══════════════════════════════════════
           HERO — original style with overlay
        ══════════════════════════════════════ */
        .impact-hero {
          position: relative;
          padding: clamp(48px, 7vw, 80px) clamp(20px, 5vw, 64px);
          min-height: 480px;
          display: flex;
          align-items: center;
          overflow: hidden;
        }

        .impact-hero-image {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }

        .impact-hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to right,
            rgba(0,0,0,0.85) 0%,
            rgba(0,0,0,0.65) 60%,
            rgba(0,0,0,0.30) 100%
          );
        }

        .impact-hero-content {
          position: relative;
          z-index: 2;
          max-width: 700px;
        }

        .impact-hero-kicker {
          font-family: var(--font-body);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: var(--color-primary);
          margin: 0 0 16px;
          display: block;
        }

        .impact-hero h1 {
          font-family: 'Anton', sans-serif;
          font-size: clamp(36px, 5vw, 56px);
          font-weight: 400;
          letter-spacing: 0.01em;
          text-transform: uppercase;
          color: #ffffff;
          line-height: 1.1;
          margin: 0 0 20px;
        }

        .impact-hero p {
          font-family: var(--font-body);
          font-size: 18px;
          color: rgba(255,255,255,0.8);
          line-height: 1.6;
          max-width: 500px;
          margin: 0;
        }

        /* ══════════════════════════════════════
           METRICS SECTION — editorial style
        ══════════════════════════════════════ */
        .metrics-section {
          padding: 80px clamp(20px, 5vw, 64px);
          background: var(--color-surface);
        }

        .metrics-header {
          text-align: center;
          margin-bottom: 48px;
        }

        .metrics-label {
          display: inline-block;
          font-family: var(--font-body);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: var(--color-primary);
          background: var(--color-primary-light);
          padding: 5px 14px;
          border-radius: 999px;
          margin-bottom: 16px;
        }

        .metrics-title {
          font-family: 'Anton', sans-serif;
          font-size: clamp(28px, 4vw, 42px);
          font-weight: 400;
          letter-spacing: 0.01em;
          text-transform: uppercase;
          color: var(--color-navy);
          margin: 0 0 12px;
        }

        .metrics-description {
          font-family: var(--font-body);
          font-size: 17px;
          color: var(--color-text-muted);
          max-width: 650px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .metrics-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          max-width: 1200px;
          margin: 48px auto 0;
        }

        .metric-card {
          background: var(--color-bg);
          border-top: 4px solid var(--color-primary);
          border-radius: var(--card-radius);
          padding: 32px 20px;
          text-align: center;
          border: 1px solid var(--color-border);
          border-top: 4px solid var(--color-primary);
          transition: var(--transition);
        }

        .metric-card:hover {
          transform: translateY(-3px);
          box-shadow: var(--shadow-md);
        }

        .metric-icon {
          width: 56px;
          height: 56px;
          margin: 0 auto 16px;
          background: var(--color-primary-light);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-primary);
        }

        .metric-number {
          font-family: 'Anton', sans-serif;
          font-size: 42px;
          font-weight: 400;
          letter-spacing: 0.01em;
          color: var(--color-primary);
          margin-bottom: 8px;
        }

        .metric-label {
          font-family: var(--font-body);
          font-size: 14px;
          font-weight: 600;
          color: var(--color-navy);
        }

        /* ══════════════════════════════════════
           AREAS SECTION — editorial cards
        ══════════════════════════════════════ */
        .areas-section {
          padding: 80px clamp(20px, 5vw, 64px);
          background: var(--color-bg);
        }

        .section-header {
          text-align: center;
          margin-bottom: 56px;
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
          padding: 5px 14px;
          border-radius: 999px;
          margin-bottom: 16px;
        }

        .section-title {
          font-family: 'Anton', sans-serif;
          font-size: clamp(28px, 4vw, 42px);
          font-weight: 400;
          letter-spacing: 0.01em;
          text-transform: uppercase;
          color: var(--color-navy);
          margin: 0 0 12px;
        }

        .section-description {
          font-family: var(--font-body);
          font-size: 17px;
          color: var(--color-text-muted);
          max-width: 650px;
          margin: 0 auto;
        }

        .areas-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 32px;
          max-width: 1100px;
          margin: 0 auto;
        }

        .area-card {
          display: flex;
          gap: 24px;
          background: var(--color-surface);
          border: 1px solid var(--color-border);
          border-radius: var(--card-radius);
          overflow: hidden;
          transition: var(--transition);
        }

        .area-card:hover {
          transform: translateY(-3px);
          box-shadow: var(--shadow-md);
          border-color: var(--color-primary);
        }

        .area-image {
          width: 40%;
          object-fit: cover;
        }

        .area-content {
          flex: 1;
          padding: 28px 24px 28px 0;
        }

        .area-icon {
          width: 48px;
          height: 48px;
          background: var(--color-primary-light);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-primary);
          margin-bottom: 16px;
        }

        .area-title {
          font-family: 'Anton', sans-serif;
          font-size: 20px;
          font-weight: 400;
          letter-spacing: 0.01em;
          text-transform: uppercase;
          color: var(--color-navy);
          margin-bottom: 12px;
        }

        .area-description {
          font-family: var(--font-body);
          font-size: 14px;
          color: var(--color-text-muted);
          line-height: 1.6;
        }

        /* ══════════════════════════════════════
           ECONOMIC SECTION — dark band with stats
        ══════════════════════════════════════ */
        .economic-section {
          background: var(--color-navy);
          padding: 80px clamp(20px, 5vw, 64px);
          text-align: center;
        }

        .economic-header {
          margin-bottom: 48px;
        }

        .economic-label {
          display: inline-block;
          font-family: var(--font-body);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: var(--color-primary);
          background: rgba(255,255,255,0.15);
          padding: 5px 14px;
          border-radius: 999px;
          margin-bottom: 16px;
        }

        .economic-title {
          font-family: 'Anton', sans-serif;
          font-size: clamp(28px, 4vw, 42px);
          font-weight: 400;
          letter-spacing: 0.01em;
          text-transform: uppercase;
          color: #ffffff;
          margin: 0;
        }

        .economic-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
          max-width: 900px;
          margin: 48px auto 0;
        }

        .economic-card {
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.15);
          border-radius: var(--card-radius);
          padding: 32px 24px;
          transition: var(--transition);
        }

        .economic-card:hover {
          transform: translateY(-3px);
          background: rgba(255,255,255,0.12);
        }

        .economic-number {
          font-family: 'Anton', sans-serif;
          font-size: 40px;
          font-weight: 400;
          letter-spacing: 0.01em;
          color: var(--color-primary);
          margin-bottom: 12px;
        }

        .economic-label-text {
          font-family: var(--font-body);
          font-size: 14px;
          color: rgba(255,255,255,0.7);
        }

        /* ══════════════════════════════════════
           CTA SECTION
        ══════════════════════════════════════ */
        .cta-section {
          padding: 80px clamp(20px, 5vw, 64px);
          text-align: center;
          background: var(--color-bg);
          border-top: 1px solid var(--color-border);
        }

        .cta-title {
          font-family: 'Anton', sans-serif;
          font-size: clamp(28px, 4vw, 38px);
          font-weight: 400;
          letter-spacing: 0.01em;
          text-transform: uppercase;
          color: var(--color-navy);
          margin: 0 0 16px;
        }

        .cta-description {
          font-family: var(--font-body);
          font-size: 17px;
          color: var(--color-text-muted);
          max-width: 600px;
          margin: 0 auto 32px;
        }

        .cta-buttons {
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .btn-primary {
          background: var(--color-green);
          color: #ffffff;
          border: none;
          border-radius: var(--btn-radius);
          padding: 14px 32px;
          font-family: var(--font-body);
          font-size: 14px;
          font-weight: 700;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: var(--transition);
          letter-spacing: 0.5px;
        }

        .btn-primary:hover {
          background: var(--color-green-dark);
          transform: translateY(-2px);
        }

        .btn-outline {
          background: transparent;
          color: var(--color-primary);
          border: 1.5px solid var(--color-primary);
          border-radius: var(--btn-radius);
          padding: 14px 32px;
          font-family: var(--font-body);
          font-size: 14px;
          font-weight: 700;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: var(--transition);
          letter-spacing: 0.5px;
        }

        .btn-outline:hover {
          background: var(--color-primary-light);
          transform: translateY(-2px);
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .metrics-grid { grid-template-columns: repeat(2, 1fr); }
          .economic-grid { grid-template-columns: repeat(3, 1fr); }
        }

        @media (max-width: 900px) {
          .areas-grid { grid-template-columns: 1fr; }
          .area-card { flex-direction: column; }
          .area-image { width: 100%; height: 220px; }
          .area-content { padding: 24px; }
        }

        @media (max-width: 768px) {
          .impact-hero { min-height: 400px; text-align: center; }
          .impact-hero-content { max-width: 100%; }
          .impact-hero p { max-width: 100%; }
          .metrics-grid { grid-template-columns: 1fr; }
          .economic-grid { grid-template-columns: 1fr; gap: 20px; }
          .cta-buttons { flex-direction: column; align-items: center; }
          .btn-primary, .btn-outline { width: 100%; max-width: 260px; justify-content: center; }
        }
      `}</style>

      <Navbar />

      {/* Hero Section */}
      <div className="impact-hero">
        <img src={heroImage} alt="Impact" className="impact-hero-image" />
        <div className="impact-hero-overlay" />
        <div className="impact-hero-content">
          <span className="impact-hero-kicker">Our Impact</span>
          <h1>Transforming Healthcare Access</h1>
          <p>Measurable impact across communities in southeastern Nigeria</p>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="metrics-section">
        <div className="metrics-header">
          <div className="metrics-label">By The Numbers</div>
          <h2 className="metrics-title">Measurable Outcomes, Tangible Change</h2>
          <p className="metrics-description">Every number represents a life touched, a family supported, and a community strengthened.</p>
        </div>
        <div className="metrics-grid">
          {impactMetrics.map((metric, i) => {
            const IconComponent = metric.icon;
            return (
              <div key={i} className="metric-card">
                <div className="metric-icon"><IconComponent /></div>
                <div className="metric-number">{metric.number}{metric.suffix}</div>
                <div className="metric-label">{metric.label}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Impact Areas */}
      <div className="areas-section">
        <div className="section-header">
          <div className="section-label">Our Impact</div>
          <h2 className="section-title">How We Make a Difference</h2>
          <p className="section-description">Creating lasting change in healthcare delivery</p>
        </div>
        <div className="areas-grid">
          {impactAreas.map((area, i) => {
            const IconComponent = area.icon;
            return (
              <div key={i} className="area-card">
                <img src={area.image} alt={area.title} className="area-image" />
                <div className="area-content">
                  <div className="area-icon"><IconComponent /></div>
                  <h3 className="area-title">{area.title}</h3>
                  <p className="area-description">{area.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Economic Impact */}
      <div className="economic-section">
        <div className="economic-header">
          <div className="economic-label">Economic Impact</div>
          <h2 className="economic-title">Return on Investment</h2>
        </div>
        <div className="economic-grid">
          <div className="economic-card">
            <div className="economic-number">${animatedEconomic.annual.toLocaleString()}</div>
            <div className="economic-label-text">Annual Impact</div>
          </div>
          <div className="economic-card">
            <div className="economic-number">${(animatedEconomic.fiveYear / 1000000).toFixed(1)}M</div>
            <div className="economic-label-text">5-Year Impact</div>
          </div>
          <div className="economic-card">
            <div className="economic-number">2.7x</div>
            <div className="economic-label-text">ROI Multiplier</div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="cta-section">
        <h3 className="cta-title">Help Us Scale Our Impact</h3>
        <p className="cta-description">Your support enables us to reach more communities and save more lives.</p>
        <div className="cta-buttons">
          <button className="btn-primary" onClick={() => navigate('/donate#payment-section')}>
            Donate Now <ArrowRight size={16} />
          </button>
          <button className="btn-outline" onClick={() => navigate('/contact')}>
            Partner With Us
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Impact;