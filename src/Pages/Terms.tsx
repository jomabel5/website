import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { FileText, Shield, AlertCircle, CheckCircle, Users, Globe, Mail } from 'lucide-react';

const Terms = () => {
  return (
    <div className="terms-page">
      <style>{`
        .terms-page {
          font-family: var(--font-body);
          background-color: #FFFFFF;
        }
        
        .terms-hero {
          background: linear-gradient(135deg, #1D8FD4 0%, #0F5A8C 100%);
          padding: 60px clamp(20px, 5vw, 48px);
          text-align: center;
          color: #ffffff;
        }
        .terms-hero h1 {
          font-family: var(--font-heading);
          font-size: 48px;
          font-weight: 700;
          margin-bottom: 16px;
        }
        .terms-hero p {
          font-size: 18px;
          opacity: 0.9;
          max-width: 700px;
          margin: 0 auto;
        }
        
        .terms-container {
          max-width: 1000px;
          margin: 0 auto;
          padding: 64px clamp(20px, 5vw, 48px);
        }
        
        .terms-section {
          margin-bottom: 48px;
          padding-bottom: 32px;
          border-bottom: 1px solid #E5E7EB;
        }
        .terms-section:last-child {
          border-bottom: none;
        }
        .terms-section-title {
          font-family: var(--font-heading);
          font-size: 24px;
          font-weight: 700;
          color: #111827;
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .terms-section-title svg {
          color: #1D8FD4;
        }
        .terms-text {
          font-size: 16px;
          color: #4B5563;
          line-height: 1.7;
          margin-bottom: 16px;
        }
        .terms-list {
          margin: 16px 0;
          padding-left: 24px;
        }
        .terms-list li {
          font-size: 15px;
          color: #4B5563;
          line-height: 1.7;
          margin-bottom: 8px;
        }
        .terms-effective {
          background: #F9FAFB;
          border-left: 4px solid #1D8FD4;
          padding: 20px 24px;
          border-radius: 8px;
          margin-top: 32px;
        }
        
        @media (max-width: 768px) {
          .terms-hero h1 { font-size: 32px; }
          .terms-section-title { font-size: 20px; }
        }
      `}</style>

      <Navbar />

      <div className="terms-hero">
        <h1>Terms of Service</h1>
        <p>Please read these terms carefully before using our website.</p>
      </div>

      <div className="terms-container">
        
        <div className="terms-section">
          <h2 className="terms-section-title">
            <FileText size={28} />
            Acceptance of Terms
          </h2>
          <p className="terms-text">
            By accessing or using the JoMabel Healthcare Foundation website (jomabelhf.org), 
            you agree to be bound by these Terms of Service. If you do not agree to these terms, 
            please do not use our website.
          </p>
        </div>

        <div className="terms-section">
          <h2 className="terms-section-title">
            <Shield size={28} />
            Use of Website
          </h2>
          <p className="terms-text">You agree to use our website only for lawful purposes and in a way that does not infringe the rights of, restrict, or inhibit anyone else's use of the website.</p>
          <ul className="terms-list">
            <li>You must not misuse our website by introducing viruses or malicious code</li>
            <li>You must not attempt to gain unauthorized access to our systems</li>
            <li>You must not use our website to transmit offensive or harmful content</li>
          </ul>
        </div>

        <div className="terms-section">
          <h2 className="terms-section-title">
            <AlertCircle size={28} />
            Donations
          </h2>
          <p className="terms-text">
            All donations made to JoMabel Healthcare Foundation are voluntary and non-refundable. 
            We reserve the right to refuse or cancel any donation at our discretion.
          </p>
          <ul className="terms-list">
            <li>Donations are processed through secure payment gateways</li>
            <li>You must provide accurate and complete payment information</li>
            <li>You confirm that you have the legal authority to make the donation</li>
            <li>Receipts for tax-deductible donations will be provided</li>
          </ul>
        </div>

        <div className="terms-section">
          <h2 className="terms-section-title">
            <CheckCircle size={28} />
            Intellectual Property
          </h2>
          <p className="terms-text">
            All content on this website, including text, images, logos, and graphics, is the property 
            of JoMabel Healthcare Foundation and is protected by copyright laws. You may not reproduce, 
            distribute, or modify any content without our prior written consent.
          </p>
        </div>

        <div className="terms-section">
          <h2 className="terms-section-title">
            <Users size={28} />
            Third-Party Links
          </h2>
          <p className="terms-text">
            Our website may contain links to third-party websites. We are not responsible for the 
            content, privacy policies, or practices of any third-party sites. Your use of such websites 
            is at your own risk.
          </p>
        </div>

        <div className="terms-section">
          <h2 className="terms-section-title">
            <Globe size={28} />
            Limitation of Liability
          </h2>
          <p className="terms-text">
            To the fullest extent permitted by law, JoMabel Healthcare Foundation shall not be liable 
            for any indirect, incidental, special, consequential, or punitive damages arising from your 
            use of our website or any donations made through our platform.
          </p>
        </div>

        <div className="terms-section">
          <h2 className="terms-section-title">
            <Shield size={28} />
            Changes to Terms
          </h2>
          <p className="terms-text">
            We may revise these Terms of Service at any time. Any changes will be posted on this page, 
            and your continued use of our website constitutes acceptance of the updated terms.
          </p>
        </div>

        <div className="terms-section">
          <h2 className="terms-section-title">
            <Mail size={28} />
            Contact Us
          </h2>
          <p className="terms-text">
            If you have any questions about these Terms of Service, please contact us at:
          </p>
          <p className="terms-text" style={{ marginTop: '8px' }}>
            <strong>Email:</strong> Foundation@jomabel.org<br />
            <strong>Phone:</strong> +1 (512) 508-0277<br />
            <strong>Address:</strong> Ufuma, Anambra State, Nigeria / Texas, United States
          </p>
        </div>

        <div className="terms-effective">
          <p style={{ fontWeight: '700', marginBottom: '8px', color: '#111827' }}>Effective Date: April 12, 2026</p>
          <p style={{ fontSize: '14px', color: '#6B7280', margin: 0 }}>
            These Terms of Service were last updated on April 12, 2026.
          </p>
        </div>

      </div>

      <Footer />
    </div>
  );
};

export default Terms;