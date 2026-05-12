import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { ArrowRight, TrendingUp, DollarSign, Target, Heart, Users, Building2 } from 'lucide-react';

// Hero image
import heroImage from '../assests/images/outreach5.jpeg';

const ROI = () => {
  const navigate = useNavigate();
  const [animatedTotal, setAnimatedTotal] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const targetTotal = 547500;
    let currentTotal = 0;
    
    const totalInterval = setInterval(() => {
      if (currentTotal < targetTotal) {
        currentTotal += 5000;
        if (currentTotal > targetTotal) currentTotal = targetTotal;
        setAnimatedTotal(currentTotal);
      } else {
        clearInterval(totalInterval);
      }
    }, 20);

    return () => clearInterval(totalInterval);
  }, []);

  const impactItems = [
    { label: 'Reduced travel cost', value: '$125,000', icon: DollarSign },
    { label: 'Productivity gains', value: '$80,000', icon: TrendingUp },
    { label: 'Hospitalization savings', value: '$37,500', icon: Heart },
    { label: 'Early detection savings', value: '$100,000', icon: Target },
    { label: 'Workforce development value', value: '$50,000', icon: Users },
    { label: 'Healthcare system savings', value: '$155,000', icon: Building2 },
  ];

  return (
    <div className="roi-page">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');

        .roi-page {
          font-family: var(--font-body);
          background: var(--color-bg);
          color: var(--color-text);
        }

        /* ══════════════════════════════════════
           HERO SECTION
        ══════════════════════════════════════ */
        .roi-hero {
          position: relative;
          padding: clamp(48px, 7vw, 80px) clamp(20px, 5vw, 64px);
          min-height: 480px;
          display: flex;
          align-items: center;
          overflow: hidden;
        }

        .roi-hero-image {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }

        .roi-hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to right,
            rgba(0,0,0,0.85) 0%,
            rgba(0,0,0,0.65) 60%,
            rgba(0,0,0,0.30) 100%
          );
        }

        .roi-hero-content {
          position: relative;
          z-index: 2;
          max-width: 650px;
        }

        .roi-hero-kicker {
          font-family: var(--font-body);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: #1D8FD4;
          margin: 0 0 16px;
          display: block;
        }

        .roi-hero h1 {
          font-family: 'Anton', sans-serif;
          font-size: clamp(36px, 5vw, 56px);
          font-weight: 400;
          letter-spacing: 0.01em;
          text-transform: uppercase;
          color: #ffffff;
          line-height: 1.1;
          margin: 0 0 20px;
        }

        .roi-hero p {
          font-family: var(--font-body);
          font-size: 18px;
          color: rgba(255,255,255,0.8);
          line-height: 1.6;
          max-width: 500px;
          margin: 0;
        }

        /* ══════════════════════════════════════
           ROI STATEMENT CARD
        ══════════════════════════════════════ */
        .roi-statement {
          padding: 64px clamp(20px, 5vw, 48px);
          background: #FFFFFF;
          text-align: center;
        }

        .roi-statement-card {
          max-width: 800px;
          margin: 0 auto;
          background: linear-gradient(135deg, #1D8FD4 0%, #1570A6 100%);
          border-radius: 20px;
          padding: 56px 48px;
          color: #ffffff;
        }

        .roi-statement-label {
          font-family: var(--font-body);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          opacity: 0.8;
          margin-bottom: 16px;
        }

        .roi-statement-value {
          font-family: 'Anton', sans-serif;
          font-size: clamp(48px, 6vw, 72px);
          font-weight: 400;
          letter-spacing: 0.01em;
          margin-bottom: 16px;
        }

        .roi-statement-text {
          font-family: var(--font-body);
          font-size: 17px;
          line-height: 1.6;
          opacity: 0.95;
        }

        /* ══════════════════════════════════════
           ECONOMIC IMPACT SECTION
        ══════════════════════════════════════ */
        .impact-section {
          background-color: #F9FAFB;
          padding: 80px clamp(20px, 5vw, 48px);
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
          color: #1D8FD4;
          background: #EBF5FB;
          padding: 5px 14px;
          border-radius: 4px;
          margin-bottom: 16px;
        }

        .section-title {
          font-family: 'Anton', sans-serif;
          font-size: clamp(28px, 4vw, 42px);
          font-weight: 400;
          letter-spacing: 0.01em;
          text-transform: uppercase;
          color: #111827;
          margin: 0 0 12px;
        }

        .section-description {
          font-family: var(--font-body);
          font-size: 17px;
          color: #4B5563;
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .impact-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
          max-width: 1000px;
          margin: 0 auto 48px;
        }

        .impact-item {
          background: #ffffff;
          border: 1px solid #E5E7EB;
          border-radius: 16px;
          padding: 24px;
          display: flex;
          align-items: center;
          gap: 20px;
          transition: all 0.2s ease;
        }

        .impact-item:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 24px rgba(0,0,0,0.08);
          border-color: #1D8FD4;
        }

        .impact-icon {
          width: 56px;
          height: 56px;
          background: #EBF5FB;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #1D8FD4;
          flex-shrink: 0;
        }

        .impact-content {
          flex: 1;
        }

        .impact-label {
          font-family: var(--font-body);
          font-size: 13px;
          color: #6B7280;
          margin-bottom: 4px;
        }

        .impact-value {
          font-family: 'Anton', sans-serif;
          font-size: 24px;
          font-weight: 400;
          letter-spacing: 0.01em;
          color: #1D8FD4;
        }

        /* Total Impact Card */
        .total-impact {
          max-width: 600px;
          margin: 0 auto;
          background: #ffffff;
          border: 2px solid #1D8FD4;
          border-radius: 20px;
          padding: 40px 32px;
          text-align: center;
          transition: all 0.2s ease;
        }

        .total-impact:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 24px rgba(0,0,0,0.1);
        }

        .total-label {
          font-family: var(--font-body);
          font-size: 13px;
          color: #6B7280;
          margin-bottom: 8px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .total-value {
          font-family: 'Anton', sans-serif;
          font-size: 52px;
          font-weight: 400;
          letter-spacing: 0.01em;
          color: #1D8FD4;
          margin-bottom: 8px;
        }

        .total-sub {
          font-family: var(--font-body);
          font-size: 13px;
          color: #4B5563;
        }

        /* ══════════════════════════════════════
           LONG TERM SECTION
        ══════════════════════════════════════ */
        .long-term-section {
          padding: 80px clamp(20px, 5vw, 48px);
          background: #FFFFFF;
        }

        .long-term-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
          max-width: 900px;
          margin: 48px auto 0;
        }

        .long-term-card {
          text-align: center;
          padding: 40px 24px;
          background: #F9FAFB;
          border: 1px solid #E5E7EB;
          border-radius: 16px;
          transition: all 0.2s ease;
        }

        .long-term-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 24px rgba(0,0,0,0.08);
          border-color: #1D8FD4;
        }

        .long-term-number {
          font-family: 'Anton', sans-serif;
          font-size: 40px;
          font-weight: 400;
          letter-spacing: 0.01em;
          color: #1D8FD4;
          margin-bottom: 12px;
        }

        .long-term-label {
          font-family: var(--font-body);
          font-size: 14px;
          color: #4B5563;
        }

        /* ══════════════════════════════════════
           CTA SECTION
        ══════════════════════════════════════ */
        .cta-section {
          background: linear-gradient(135deg, #111827 0%, #1F2937 100%);
          margin: 0 clamp(20px, 5vw, 48px) 64px;
          border-radius: 20px;
          padding: 56px 48px;
          text-align: center;
        }

        .cta-title {
          font-family: 'Anton', sans-serif;
          font-size: clamp(28px, 4vw, 38px);
          font-weight: 400;
          letter-spacing: 0.01em;
          text-transform: uppercase;
          color: #ffffff;
          margin: 0 0 16px;
        }

        .cta-description {
          font-family: var(--font-body);
          font-size: 17px;
          color: rgba(255,255,255,0.8);
          max-width: 500px;
          margin: 0 auto 32px;
          line-height: 1.6;
        }

        .cta-buttons {
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .btn-primary {
          background: #16A34A;
          color: #ffffff;
          border: none;
          border-radius: 8px;
          padding: 14px 32px;
          font-size: 14px;
          font-weight: 700;
          cursor: pointer;
          font-family: 'Inter', sans-serif;
          transition: all 0.2s ease;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          letter-spacing: 0.5px;
        }

        .btn-primary:hover {
          background: #15803D;
          transform: translateY(-2px);
        }

        .btn-outline {
          background: transparent;
          color: #ffffff;
          border: 1.5px solid rgba(255,255,255,0.4);
          border-radius: 8px;
          padding: 14px 32px;
          font-size: 14px;
          font-weight: 700;
          cursor: pointer;
          font-family: 'Inter', sans-serif;
          transition: all 0.2s ease;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          letter-spacing: 0.5px;
        }

        .btn-outline:hover {
          background: rgba(255,255,255,0.1);
          border-color: rgba(255,255,255,0.6);
        }

        /* Responsive */
        @media (max-width: 900px) {
          .impact-grid {
            grid-template-columns: 1fr;
          }
          .long-term-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .roi-hero {
            min-height: 400px;
            text-align: center;
          }
          .roi-hero-content {
            max-width: 100%;
          }
          .roi-hero p {
            max-width: 100%;
          }
          .roi-statement-card {
            padding: 40px 28px;
          }
          .cta-section {
            padding: 40px 28px;
            margin: 0 24px 48px;
          }
          .cta-buttons {
            flex-direction: column;
            align-items: center;
          }
          .btn-primary, .btn-outline {
            width: 100%;
            max-width: 260px;
            justify-content: center;
          }
        }
      `}</style>

      <Navbar />

      {/* Hero Section */}
      <div className="roi-hero">
        <img src={heroImage} alt="JoMabel Healthcare Foundation community outreach" className="roi-hero-image" />
        <div className="roi-hero-overlay" />
        <div className="roi-hero-content">
          <span className="roi-hero-kicker">Economic Impact</span>
          <h1>Return on Investment</h1>
          <p>Healthcare access that delivers measurable impact for communities and donors alike.</p>
        </div>
      </div>

      {/* ROI Statement Card */}
      <div className="roi-statement">
        <div className="roi-statement-card">
          <div className="roi-statement-label">ROI Statement</div>
          <div className="roi-statement-value">$1 = $2.7–$3.0</div>
          <p className="roi-statement-text">
            For every $1 invested in JoMabel Healthcare Foundation, approximately $2.7–$3.0 in economic and social value is created.
          </p>
        </div>
      </div>

      {/* Annual Economic Impact */}
      <div className="impact-section">
        <div className="section-header">
          <div className="section-label">Economic Impact</div>
          <h2 className="section-title">Annual Economic Impact</h2>
          <p className="section-description">
            JoMabel Healthcare Foundation generates measurable economic and social value by expanding healthcare access, reducing costs, and strengthening community health systems.
          </p>
        </div>

        <div className="impact-grid">
          {impactItems.map((item, i) => {
            const IconComponent = item.icon;
            return (
              <div key={i} className="impact-item">
                <div className="impact-icon">
                  <IconComponent />
                </div>
                <div className="impact-content">
                  <div className="impact-label">{item.label}</div>
                  <div className="impact-value">{item.value}</div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="total-impact">
          <div className="total-label">Total Annual Impact</div>
          <div className="total-value">${animatedTotal.toLocaleString()}</div>
          <div className="total-sub">Annual economic value generated by JHF programs</div>
        </div>
      </div>

      {/* Long Term Impact */}
      <div className="long-term-section">
        <div className="section-header">
          <div className="section-label">Long Term Value</div>
          <h2 className="section-title">Multi-Year Impact</h2>
        </div>
        <div className="long-term-grid">
          <div className="long-term-card">
            <div className="long-term-number">$547,500</div>
            <div className="long-term-label">Annual Impact</div>
          </div>
          <div className="long-term-card">
            <div className="long-term-number">$2.7M</div>
            <div className="long-term-label">5-Year Impact</div>
          </div>
          <div className="long-term-card">
            <div className="long-term-number">2.7x</div>
            <div className="long-term-label">ROI Multiplier</div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="cta-section">
        <h3 className="cta-title">Support Healthcare Access</h3>
        <p className="cta-description">
          Your investment creates lasting economic and social value for underserved communities in Nigeria.
        </p>
        <div className="cta-buttons">
          <button className="btn-primary" onClick={() => navigate('/donate')}>
            Donate Now
            <ArrowRight size={16} />
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

export default ROI;