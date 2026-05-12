import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Shield, Lock, Eye, Users, Mail, FileText } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-page">
      <style>{`
        .privacy-page {
          font-family: var(--font-body);
          background-color: #FFFFFF;
        }
        
        .privacy-hero {
          background: linear-gradient(135deg, #1D8FD4 0%, #0F5A8C 100%);
          padding: 60px clamp(20px, 5vw, 48px);
          text-align: center;
          color: #ffffff;
        }
        .privacy-hero h1 {
          font-family: var(--font-heading);
          font-size: 48px;
          font-weight: 700;
          margin-bottom: 16px;
        }
        .privacy-hero p {
          font-size: 18px;
          opacity: 0.9;
          max-width: 700px;
          margin: 0 auto;
        }
        
        .privacy-container {
          max-width: 1000px;
          margin: 0 auto;
          padding: 64px clamp(20px, 5vw, 48px);
        }
        
        .privacy-section {
          margin-bottom: 48px;
          padding-bottom: 32px;
          border-bottom: 1px solid #E5E7EB;
        }
        .privacy-section:last-child {
          border-bottom: none;
        }
        .privacy-section-title {
          font-family: var(--font-heading);
          font-size: 24px;
          font-weight: 700;
          color: #111827;
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .privacy-section-title svg {
          color: #1D8FD4;
        }
        .privacy-text {
          font-size: 16px;
          color: #4B5563;
          line-height: 1.7;
          margin-bottom: 16px;
        }
        .privacy-list {
          margin: 16px 0;
          padding-left: 24px;
        }
        .privacy-list li {
          font-size: 15px;
          color: #4B5563;
          line-height: 1.7;
          margin-bottom: 8px;
        }
        .privacy-effective {
          background: #F9FAFB;
          border-left: 4px solid #1D8FD4;
          padding: 20px 24px;
          border-radius: 8px;
          margin-top: 32px;
        }
        
        @media (max-width: 768px) {
          .privacy-hero h1 { font-size: 32px; }
          .privacy-section-title { font-size: 20px; }
        }
      `}</style>

      <Navbar />

      <div className="privacy-hero">
        <h1>Privacy Policy</h1>
        <p>Your privacy matters. We are committed to protecting the personal information you share with us.</p>
      </div>

      <div className="privacy-container">
        
        <div className="privacy-section">
          <h2 className="privacy-section-title">
            <Shield size={28} />
            Our Commitment
          </h2>
          <p className="privacy-text">
            JoMabel Healthcare Foundation ("JHF", "we", "us", or "our") is committed to protecting 
            your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard 
            your information when you visit our website or interact with us as a donor, partner, or community member.
          </p>
        </div>

        <div className="privacy-section">
          <h2 className="privacy-section-title">
            <Mail size={28} />
            Information We Collect
          </h2>
          <p className="privacy-text">We may collect the following types of information:</p>
          <ul className="privacy-list">
            <li><strong>Personal Information:</strong> Name, email address, phone number, mailing address</li>
            <li><strong>Donation Information:</strong> Payment details, donation amount, and giving history</li>
            <li><strong>Communication Data:</strong> Messages you send us via contact forms or email</li>
            <li><strong>Website Usage Data:</strong> Pages visited, time spent, and referral sources</li>
          </ul>
        </div>

        <div className="privacy-section">
          <h2 className="privacy-section-title">
            <Eye size={28} />
            How We Use Your Information
          </h2>
          <ul className="privacy-list">
            <li>Process donations and issue tax receipts</li>
            <li>Respond to your inquiries and requests</li>
            <li>Send updates about our programs, impact, and events</li>
            <li>Improve our website and donor experience</li>
            <li>Comply with legal and regulatory requirements</li>
          </ul>
        </div>

        <div className="privacy-section">
          <h2 className="privacy-section-title">
            <Users size={28} />
            Sharing Your Information
          </h2>
          <p className="privacy-text">
            We do not sell, trade, or rent your personal information to third parties. 
            We may share your information only in the following circumstances:
          </p>
          <ul className="privacy-list">
            <li>With service providers who assist us in processing donations</li>
            <li>When required by law or to protect our legal rights</li>
            <li>With your explicit consent</li>
          </ul>
        </div>

        <div className="privacy-section">
          <h2 className="privacy-section-title">
            <Lock size={28} />
            Data Security
          </h2>
          <p className="privacy-text">
            We implement appropriate technical and organizational measures to protect your 
            personal information against unauthorized access, alteration, disclosure, or destruction. 
            All donation transactions are processed through secure, encrypted connections.
          </p>
        </div>

        <div className="privacy-section">
          <h2 className="privacy-section-title">
            <FileText size={28} />
            Your Rights
          </h2>
          <p className="privacy-text">You have the right to:</p>
          <ul className="privacy-list">
            <li>Access the personal information we hold about you</li>
            <li>Request correction of inaccurate information</li>
            <li>Request deletion of your information (subject to legal requirements)</li>
            <li>Opt out of marketing communications at any time</li>
          </ul>
          <p className="privacy-text">
            To exercise these rights, please contact us at <strong>Foundation@jomabel.org</strong>.
          </p>
        </div>

        <div className="privacy-effective">
          <p style={{ fontWeight: '700', marginBottom: '8px', color: '#111827' }}>Effective Date: April 12, 2026</p>
          <p style={{ fontSize: '14px', color: '#6B7280', margin: 0 }}>
            We may update this Privacy Policy from time to time. Any changes will be posted on this page.
          </p>
        </div>

      </div>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;