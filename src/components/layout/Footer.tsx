import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Youtube } from 'lucide-react';
import logo from '../../assests/images/logo.jpeg';

// #52a: six new programs, same order and anchors as the /programs page
const footerPrograms = [
  { label: 'Primary Care & Community Outreach',                     path: '/programs#primary-care-community-outreach' },
  { label: 'Blood Pressure, Diabetes & Kidney Health',              path: '/programs#blood-pressure-diabetes-kidney-health' },
  { label: 'Maternal & Child Health',                               path: '/programs#maternal-child-health' },
  { label: 'Eye Health & Vision Care',                              path: '/programs#eye-health-vision-care' },
  { label: 'Cancer Awareness, Early Detection & Patient Support',   path: '/programs#cancer-awareness-early-detection' },
  { label: 'Community Health Worker Training & Patient Navigation', path: '/programs#community-health-worker-training' },
];

const Footer = () => {
  return (
    <footer style={{ fontFamily: 'var(--font-body)' }}>
      <style>{`
        .footer-main {
          background-color: var(--color-navy);
          padding: clamp(36px, 5vw, 56px) clamp(20px, 5vw, 48px) clamp(32px, 4vw, 44px);
        }
        .footer-grid {
          max-width: 1080px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.6fr 1fr 1.2fr 1.2fr;
          gap: 40px;
          align-items: start;
        }
        .footer-col-heading {
          color: var(--color-white);
          font-family: var(--font-heading);
          font-size: 15px;
          font-weight: 700;
          margin-bottom: 18px;
          padding-bottom: 10px;
          border-bottom: 1px solid rgba(41,197,246,0.25);
        }
        .footer-link {
          color: rgba(255,255,255,0.65);
          font-size: 13px;
          text-decoration: none;
          transition: var(--transition);
          display: block;
        }
        .footer-link:hover { color: var(--color-primary); }
        .footer-donate-btn {
          background-color: var(--color-green);
          color: var(--color-white);
          font-weight: 700;
          font-size: 13px;
          padding: 10px 22px;
          border-radius: var(--btn-radius);
          text-decoration: none;
          display: inline-block;
          transition: var(--transition);
          margin-top: 20px;
        }
        .footer-donate-btn:hover {
          background-color: var(--color-green-dark);
          transform: translateY(-1px);
        }
        .footer-contact-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
        }
        .footer-contact-icon {
          width: 28px;
          height: 28px;
          border-radius: 6px;
          background-color: rgba(41,197,246,0.12);
          border: 1px solid rgba(41,197,246,0.20);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 1px;
        }
        .footer-divider {
          max-width: 1080px;
          margin: 32px auto 0;
          border: none;
          border-top: 1px solid rgba(255,255,255,0.08);
        }
        .footer-bottom {
          background-color: #0d1726;
          border-top: 1px solid rgba(41,197,246,0.15);
          padding: 18px clamp(20px, 5vw, 48px);
        }
        .footer-bottom-inner {
          max-width: 1080px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 12px;
        }
        .footer-social-icon {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background-color: rgba(255,255,255,0.10);
          border: 1px solid rgba(255,255,255,0.12);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          transition: var(--transition);
          cursor: pointer;
          flex-shrink: 0;
        }
        .footer-social-icon:hover {
          background-color: var(--color-primary-dark);
          border-color: var(--color-primary);
          transform: translateY(-2px);
        }
        .footer-disclaimer {
          background-color: rgba(0,0,0,0.2);
          padding: 12px clamp(20px, 5vw, 48px);
          text-align: center;
          font-size: 11px;
          color: rgba(255,255,255,0.5);
          line-height: 1.5;
        }
        .footer-disclaimer a {
          color: rgba(255,255,255,0.6);
          text-decoration: underline;
        }
        .footer-disclaimer a:hover {
          color: var(--color-primary);
        }

        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr 1fr; gap: 28px; }
        }
        @media (max-width: 540px) {
          .footer-grid { grid-template-columns: 1fr; gap: 24px; }
          .footer-bottom-inner { flex-direction: column; align-items: flex-start; gap: 16px; }
        }
      `}</style>

      {/* ── MAIN FOOTER ── */}
      <div className="footer-main">
        <div className="footer-grid">

          {/* Col 1 — Logo + About + Donate */}
          <div>
            <div style={{
              backgroundColor: '#ffffff', borderRadius: '8px',
              padding: '6px 8px', display: 'inline-block', marginBottom: '16px',
            }}>
              <img src={logo} alt="JoMabel Healthcare Foundation" style={{ height: '52px', width: 'auto', display: 'block' }} />
            </div>
            <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '12.5px', lineHeight: '1.8', margin: '0 0 6px' }}>
              JoMabel Healthcare Foundation is a nonprofit foundation
              developing a world-class 16,000+ sq. meter medical and training campus
              in Ufuma, Anambra State, Nigeria.
            </p>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '11.5px', lineHeight: '1.6', margin: '0 0 4px' }}>
              Website: jomabelhf.org
            </p>
            <a href="/donate" className="footer-donate-btn">Donate Now</a>
          </div>

          {/* Col 2 — Quick Links (#52b: Our Centers added) */}
          <div>
            <h4 className="footer-col-heading">Quick Links</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                { label: 'Home',           path: '/' },
                { label: 'Mission & Vision', path: '/mission-vision' },
                { label: 'Our Story',      path: '/our-story' },
                { label: "Founder's Story", path: '/founder-story' },
                { label: 'Leadership',     path: '/leadership' },
                { label: 'Programs',       path: '/programs' },
                { label: 'Our Centers',    path: '/our-centers' },
                { label: 'Capital Campaign',       path: '/campaign' },
                { label: 'Impact',         path: '/impact' },
                { label: 'Legacy Giving',  path: '/legacy' },
                { label: 'Newsletter',     path: '/newsletter' },
                { label: 'Contact Us',     path: '/contact' },
                { label: 'Donate',         path: '/donate' },
              ].map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="footer-link">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Programs (#52a) */}
          <div>
            <h4 className="footer-col-heading">Our Programs</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {footerPrograms.map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="footer-link">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contact (#42: phone number removed) */}
          <div>
            <h4 className="footer-col-heading">Contact Us</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>

              <div className="footer-contact-item">
                <div className="footer-contact-icon">
                  <Mail size={13} color="var(--color-primary)" />
                </div>
                <div>
                  <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '10px', fontWeight: '700', letterSpacing: '0.08em', textTransform: 'uppercase', margin: '0 0 2px' }}>Email</p>
                  <a href="mailto:foundation@jomabelhf.org" className="footer-link" style={{ fontSize: '12.5px' }}>
                    foundation@jomabelhf.org
                  </a>
                </div>
              </div>

              <div className="footer-contact-item">
                <div className="footer-contact-icon">
                  <MapPin size={13} color="var(--color-primary)" />
                </div>
                <div>
                  <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '10px', fontWeight: '700', letterSpacing: '0.08em', textTransform: 'uppercase', margin: '0 0 2px' }}>Location</p>
                  <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '12.5px', margin: 0, lineHeight: '1.6' }}>
                    Ufuma, Anambra State, Nigeria<br />
                    Texas, United States
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>

        <hr className="footer-divider" />
      </div>

      {/* ── DISCLAIMER SECTION (Medical & Educational) ── */}
      <div className="footer-disclaimer">
        <p>
          <strong>Medical Disclaimer:</strong> The information on this website is for educational and informational purposes only 
          and does not constitute medical advice. It is not a substitute for professional medical advice, diagnosis, or treatment. 
          Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
        </p>
        <p style={{ marginTop: '8px' }}>
          <Link to="/privacy-policy" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'underline' }}>Privacy Policy</Link>
          {' '}|{' '}
          <Link to="/terms" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'underline' }}>Terms of Service</Link>
        </p>
      </div>

      {/* ── BOTTOM BAR ── */}
      <div className="footer-bottom">
        <div className="footer-bottom-inner">
          {/* #24: year updates automatically */}
          <p style={{ color: 'rgba(255,255,255,0.70)', fontSize: '12px', margin: 0 }}>
            © {new Date().getFullYear()} JoMabel Healthcare Foundation. All rights reserved.
            &nbsp;·&nbsp; jomabelhf.org
          </p>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ color: 'rgba(255,255,255,0.70)', fontSize: '12px' }}>Follow us:</span>

            {/* Instagram (#46a) */}
            <a 
              href="https://www.instagram.com/jomabelhealthcarefoundation/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="footer-social-icon" 
              aria-label="Instagram"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="0.5" fill="#ffffff"/>
              </svg>
            </a>

            {/* X removed (#46b) until the account is renamed to a professional handle */}

            {/* YouTube (#46c) */}
            <a 
              href="https://youtube.com/@jomabelhealthcarefoundation" 
              target="_blank" 
              rel="noopener noreferrer"
              className="footer-social-icon" 
              aria-label="YouTube"
            >
              <Youtube size={14} color="#ffffff" />
            </a>

          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;