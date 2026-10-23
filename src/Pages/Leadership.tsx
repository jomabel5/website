import React, { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import logo from '../assests/images/logo.jpeg';
import { Shield, Users, CheckCircle } from 'lucide-react';

// Board Member Images
import ikeOgbaaImg      from '../assests/images/ike-ogbaa.jpeg';
import nnekaOgbaaImg    from '../assests/images/nneka-ogbaa.png';
import comfortObiImg    from '../assests/images/comfort-obi.jpeg';
import doyinImg         from '../assests/images/doyin.jpeg';

// Advisory Member Images
import chiamakaImg      from '../assests/images/chiamaka-ezeokonkwo.jpeg';
import justinaImg       from '../assests/images/justina-osa.jpeg';
import lynneImg         from '../assests/images/lynne-ikwuagwu.jpeg';
import sharonbilletImg  from '../assests/images/sharonbillet-otah.jpeg';
import akinolaTaiwoImg   from '../assests/images/AkinolaA.Taiwo.jpeg';

// Hero image
import heroImage from '../assests/images/outreach1.jpeg';

/* ─────────────────────────────────────────
   DATA
───────────────────────────────────────── */
const boardMembers = [
  {
    name: 'Ike Ogbaa, MD',
    title: 'Board Member',
    img: ikeOgbaaImg,
    bio: 'Ike Ogbaa, MD, is a physician, biopharmaceutical leader, and strong advocate for equitable healthcare innovation. With nearly 20 years of experience, he has dedicated his career to translating scientific breakthroughs into new drugs for patients with serious and life-threatening conditions. He has held leadership roles at Merck, Sanofi, GSK, and Bayer, focusing on cardiorenal, neurovascular and metabolic diseases. As Chief Medical Officer of Oxia Therapeutics, Dr. Ogbaa is advancing a new therapeutic approach focused on activating the body\'s natural repair systems.',
  },
  {
    name: 'Dr. Comfort N. Obi',
    title: 'Board Member',
    img: comfortObiImg,
    bio: 'Dr. Comfort N Obi is an Associate Professor at one of the public universities in Georgia State, where she spends time teaching and molding future generations of healthcare workforce and leaders. A nurse for 50 years and more, Dr. Obi spent many years working in intensive care, community health settings, and in caring for women of all ages. She served as a consultant to World-Bank-assisted projects on healthcare. She also spent many years at Nursing and Midwifery Council of Nigeria supervising the education and licensure of nurses and midwives.',
  },
  {
    name: 'Nneka Ogbaa',
    title: 'Board Member',
    img: nnekaOgbaaImg,
    bio: 'Nneka Ogbaa is a clinical research and data management professional with over a decade of experience in the biopharmaceutical industry, leading and supporting clinical trial operations across diverse therapeutic areas with a focus on data integrity, regulatory compliance, and successful study execution. Prior to entering the industry, she attended medical school, gaining a strong clinical perspective that informs her work in research and development.',
  },
  {
    name: 'Doyin Antiabong, MBA, PMP',
    title: 'Board Member',
    img: doyinImg,
    bio: 'Doyin Antiabong is a strategy and transformation executive with 17 years of experience closing the gap between bold vision and measurable results — across four Fortune 500 companies: Accenture, Diageo, Amazon, and Microsoft. She currently serves as Founder and CEO of Zarn Group, where she is building lifestyle and home products. As a board member of JoMabel Healthcare Foundation, she focuses on designing operational systems and governance frameworks that turn bold vision into lasting institution.',
  },
  {
  name: 'Akinola A. Taiwo, BSc, FCA, ACIT',
  title: 'Board Member',
  img: akinolaTaiwoImg,
  bio: 'Akinola A. Taiwo is an accomplished financial professional, technocrat, consultant, and corporate leader with extensive experience spanning Nigeria\u2019s public and private sectors. A Fellow of the Institute of Chartered Accountants of Nigeria (FCA) and Associate of the Institute of Taxation of Nigeria (ACIT), he has held senior leadership positions in finance, economic development, infrastructure, investment, audit, and corporate governance. He previously served as Ogun State Commissioner for Finance and Economic Development and has provided consulting leadership on projects involving the World Bank, African Development Bank, Shelter Afrique, and Nigerian government institutions. His experience is particularly relevant to JHF through his four years as a Director of the College of Medicine, Enugu, service on the Council of the University of Nigeria, Nsukka, and extensive board and infrastructure oversight experience. Mr. Taiwo also has a longstanding commitment to philanthropy, education, mentorship, and support for underserved communities. He brings to JHF valuable expertise in financial stewardship, governance, infrastructure, strategic planning, and institutional development.',
},
];

const advisoryMembers = [
  {
    name: 'Dr. Chiamaka U. Ezeokonkwo',
    title: 'Clinical Advisor',
    img: chiamakaImg,
    bio: 'Dr. Chiamaka U. Ezeokonkwo serves as a Clinical Advisor at Jomabel Medical Center, Ufuma, Anambra State, Nigeria, where she supports the Center\'s mission to expand access to quality, community-based primary care, particularly for underserved and rural populations. She is a pediatrician dedicated to improving child health outcomes through preventive care, early intervention, and family-centered medical services. Dr. Ezeokonkwo earned her Bachelor of Medicine and Bachelor of Surgery from Nnamdi Azikiwe University College of Health Sciences, Anambra, Nigeria, and completed her pediatric residency at Driscoll Children\'s Hospital, Texas A&M College of Medicine.',
  },
  {
    name: 'Dr. Justina O. Osa',
    title: 'Quality Assurance & Performance Improvement Advisor',
    img: justinaImg,
    bio: 'Dr. Justina O. Osa is an accomplished Director of Institutional Assessment with demonstrated expertise in performance measurement, data analytics, and organizational improvement. She has led institution-wide assessment initiatives, developed key performance indicators, and partnered with leadership to evaluate effectiveness, ensure accountability, and drive continuous improvement. Through extensive experience in analyzing complex data, identifying systemic gaps, and implementing targeted improvement strategies, Dr. Osa has built a strong foundation that directly supports quality assurance and performance improvement in healthcare environments.',
  },
  {
    name: 'Mrs. Lynne Ikwuagwu, DrPH(c), MPH',
    title: 'Public Health Advisor',
    img: lynneImg,
    bio: 'Lynne Ikwuagwu is a Doctor of Public Health candidate and accomplished public health professional with over 8 years of experience in healthcare consulting, early intervention systems, and population health program development. She is the Co-Owner of Triumph Healthcare Solutions Early Intervention and Founder and Principal Consultant of Triumph Healthcare Solutions, where she leads national efforts supporting the development, licensing, and operational scaling of healthcare organizations across multiple states.',
  },
  {
    name: 'Barr. Sharonbillet Nnennaya Otah',
    title: 'Legal & Mental Health Advisor',
    img: sharonbilletImg,
    bio: 'Barr. Sharonbillet Nnennaya Otah is a Nigerian lawyer, corporate counsel, activist, and certified counselor specializing in mental health and addiction. She was called to the Nigeria Bar in 2011 after studying law at the University of Calabar and attending the Nigeria Law School. Her legal career spans public and private practice: former Legal Officer at the ECOWAS Community Court of Justice, Abuja; Principal Head of Chambers at Maryland Chambers, Abuja; and Corporate Lawyer/Legal Counsel & Company Secretary advising on commercial and regulatory matters.',
  },
];

const governancePrinciples = [
  'Mission-driven leadership',
  'Financial accountability',
  'Community engagement',
  'Impact measurement',
  'Ethical operations',
];

const oversightStructure = [
  'Board of Directors',
  'Advisory Board',
  'Executive Leadership',
  'Financial Oversight Committee',
  'Program Evaluation Team',
];

/* ─────────────────────────────────────────
   PERSON CARD — photo top, name, title,
   truncated bio, Read More button
───────────────────────────────────────── */
type PersonMember = {
  name: string;
  title?: string;
  img: string;
  bio: string;
};

type PersonCardProps = {
  member: PersonMember;
};

const PersonCard = ({ member }: PersonCardProps) => {
  const [expanded, setExpanded] = useState(false);
  const LIMIT = 140;
  const isLong = member.bio.length > LIMIT;
  const preview = isLong ? member.bio.substring(0, LIMIT) + '…' : member.bio;

  return (
    <div className="ld-card">
      <div className="ld-card-photo-wrap">
        <img src={member.img} alt={member.name} className="ld-card-photo" />
      </div>
      <div className="ld-card-body">
        <h3 className="ld-card-name">{member.name}</h3>
        {member.title && <span className="ld-card-title">{member.title}</span>}
        <p className="ld-card-bio">{expanded ? member.bio : preview}</p>
        {isLong && (
          <button className="ld-card-btn" onClick={() => setExpanded(!expanded)}>
            {expanded ? 'Read Less' : 'Read More'}
          </button>
        )}
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────
   PAGE
───────────────────────────────────────── */
const Leadership = () => {
  return (
    <div className="ld-page">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');

        /* ══ PAGE BASE ══ */
        .ld-page {
          font-family: var(--font-body);
          background: var(--color-bg);
          color: var(--color-text);
        }

        /* ══ HERO ══ */
        .ld-hero {
          position: relative;
          padding: clamp(56px, 8vw, 100px) clamp(20px, 5vw, 64px);
          overflow: hidden;
          min-height: 320px;
          display: flex;
          align-items: center;
        }
        .ld-hero-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 30%;
        }
        .ld-hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to right,
            rgba(17,24,39,0.88) 0%,
            rgba(17,24,39,0.72) 55%,
            rgba(17,24,39,0.30) 100%
          );
        }
        .ld-hero-content {
          position: relative;
          z-index: 2;
          max-width: 1080px;
          margin: 0 auto;
          width: 100%;
        }
        .ld-hero-kicker {
          font-family: var(--font-body);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--color-primary);
          display: block;
          margin-bottom: 14px;
        }
        .ld-hero-title {
          font-family: 'Anton', sans-serif;
          font-size: clamp(40px, 7vw, 80px);
          font-weight: 400;
          letter-spacing: 0.02em;
          text-transform: uppercase;
          line-height: 0.95;
          color: #ffffff;
          margin: 0 0 20px;
        }
        .ld-hero-sub {
          font-family: var(--font-body);
          font-size: clamp(13px, 1.3vw, 15px);
          color: rgba(255,255,255,0.75);
          line-height: 1.8;
          max-width: 480px;
          margin: 0;
        }

        /* ══ CONTENT WRAPPER ══ */
        .ld-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 clamp(20px, 5vw, 56px) 80px;
        }

        /* ══ SECTION BLOCK ══ */
        .ld-block {
          padding-top: 64px;
          margin-bottom: 16px;
        }

        /* ══ EDITORIAL SECTION HEADER ══ */
        .ld-section-head {
          margin-bottom: 40px;
          text-align: center;
        }
        .ld-section-kicker {
          font-family: var(--font-body);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: var(--color-primary);
          display: block;
          margin-bottom: 6px;
        }
        .ld-section-title {
          font-family: 'Anton', sans-serif;
          font-size: clamp(28px, 3.6vw, 38px);
          font-weight: 400;
          text-transform: none;
          letter-spacing: 0.01em;
          line-height: 1.15;
          color: var(--color-navy);
          margin: 0 0 10px;
        }
        .ld-section-desc {
          font-family: var(--font-body);
          font-size: 14px;
          color: var(--color-text-muted);
          line-height: 1.7;
          max-width: 620px;
          margin: 0 auto;
        }

        /* ══ MEMBER CARD GRID ══ */
        .ld-card-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
        }
        .ld-card {
          background: var(--color-surface);
          border-radius: var(--card-radius);
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }
        .ld-card-photo-wrap {
          width: 90px;
          height: 90px;
          border-radius: 50%;
          overflow: hidden;
          margin: 28px auto 0;
          flex-shrink: 0;
        }
        .ld-card-photo {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          display: block;
        }
        .ld-card-body {
          padding: 20px 28px 28px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          flex: 1;
        }
        .ld-card-name {
          font-family: var(--font-body);
          font-size: 19px;
          font-weight: 700;
          color: var(--color-navy);
          margin: 0 0 6px;
          line-height: 1.25;
        }
        .ld-card-title {
          font-family: var(--font-body);
          font-size: 12.5px;
          font-weight: 600;
          color: var(--color-text-light);
          margin: 0 0 14px;
          display: block;
        }
        .ld-card-bio {
          font-family: var(--font-body);
          font-size: 13.5px;
          color: var(--color-text-muted);
          line-height: 1.7;
          margin: 0 0 18px;
          flex: 1;
        }
        .ld-card-btn {
          background: var(--color-primary);
          color: #ffffff;
          border: none;
          border-radius: var(--btn-radius);
          padding: 10px 20px;
          font-family: var(--font-body);
          font-size: 12.5px;
          font-weight: 700;
          letter-spacing: 0.4px;
          cursor: pointer;
          width: fit-content;
          margin: 0 auto;
          transition: var(--transition);
        }
        .ld-card-btn:hover {
          background: var(--color-primary-dark);
        }

        /* ══ GOVERNANCE CARDS ══ */
        .ld-gov-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
          padding-top: 32px;
        }
        .ld-gov-card {
          background: var(--color-surface);
          border: 1px solid var(--color-border);
          border-radius: var(--card-radius);
          padding: 32px;
          transition: var(--transition);
        }
        .ld-gov-card:hover {
          border-color: var(--color-primary);
          box-shadow: var(--shadow-md);
        }
        .ld-gov-title {
          font-family: 'Anton', sans-serif;
          font-size: clamp(15px, 1.5vw, 18px);
          font-weight: 400;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          color: var(--color-navy);
          margin: 0 0 20px;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .ld-gov-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .ld-gov-list li {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 11px 0;
          border-bottom: 1px solid var(--color-border);
          font-family: var(--font-body);
          font-size: 14px;
          color: var(--color-text-muted);
        }
        .ld-gov-list li:last-child { border-bottom: none; }

        /* ══ BOTTOM CTA STRIP ══ */
        .ld-cta-strip {
          background: var(--color-navy);
          padding: 40px clamp(20px, 5vw, 64px);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          flex-wrap: wrap;
        }
        .ld-cta-text {
          font-family: var(--font-body);
          font-size: clamp(13px, 1.3vw, 15px);
          color: rgba(255,255,255,0.80);
          line-height: 1.7;
          max-width: 680px;
        }
        .ld-cta-text strong {
          color: #ffffff;
          font-weight: 700;
        }
        .ld-cta-btn {
          background: var(--color-primary);
          color: #ffffff;
          border: none;
          border-radius: var(--btn-radius);
          padding: 14px 32px;
          font-family: var(--font-body);
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          cursor: pointer;
          white-space: nowrap;
          transition: var(--transition);
          flex-shrink: 0;
        }
        .ld-cta-btn:hover {
          background: var(--color-primary-dark);
        }

        /* ══ RESPONSIVE ══ */
        @media (max-width: 900px) {
          .ld-card-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 720px) {
          .ld-card-grid { grid-template-columns: 1fr; }
          .ld-gov-grid { grid-template-columns: 1fr; }
          .ld-cta-strip {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>

      <Navbar />

      {/* ── Hero ── */}
      <div className="ld-hero">
        <img src={heroImage} alt="Leadership" className="ld-hero-img" />
        <div className="ld-hero-overlay" />
        <div className="ld-hero-content">
          <span className="ld-hero-kicker">Our Leaders</span>
          <h1 className="ld-hero-title">Leadership</h1>
          <p className="ld-hero-sub">
            JoMabel Healthcare Foundation is a nonprofit developing a
            world-class 16,000+ sq. meter medical and training center in Ufuma, Anambra State, Nigeria.
          </p>
        </div>
      </div>

      <div className="ld-content">

        {/* ── Board of Directors ── */}
        <div className="ld-block">
          <div className="ld-section-head">
            <span className="ld-section-kicker">Leadership Team</span>
            <h2 className="ld-section-title">Meet the Board of Directors</h2>
            <p className="ld-section-desc">
              The JoMabel Healthcare Foundation board oversees our work to deliver on our mission —
              bringing quality, compassionate healthcare to communities in need. We are committed
              to transparency and accountability to our supporters, partners, and all we serve.
            </p>
          </div>

          <div className="ld-card-grid">
            {boardMembers.map((member, i) => (
              <PersonCard key={i} member={member} />
            ))}
          </div>
        </div>

        {/* ── Advisory Board ── */}
        <div className="ld-block">
          <div className="ld-section-head">
            <span className="ld-section-kicker">Advisory Board</span>
            <h2 className="ld-section-title">Meet the Advisory Board</h2>
            <p className="ld-section-desc">
              Specialists providing clinical, legal, public health and quality assurance
              leadership — drawn from a wide field of experience including children's rights,
              healthcare, strategy, law and business.
            </p>
          </div>

          <div className="ld-card-grid">
            {advisoryMembers.map((member, i) => (
              <PersonCard key={i} member={member} />
            ))}
          </div>
        </div>

        {/* ── Governance ── */}
        <div className="ld-block">
          <div className="ld-section-head">
            <span className="ld-section-kicker">Governance & Transparency</span>
            <h2 className="ld-section-title">Commitment to Accountability</h2>
            <p className="ld-section-desc">
              Responsible stewardship of resources and mission-driven operations at every level of our organisation.
            </p>
          </div>

          <div className="ld-gov-grid">
            <div className="ld-gov-card">
              <h3 className="ld-gov-title">
                <Shield size={20} color="var(--color-primary)" />
                Governance Principles
              </h3>
              <ul className="ld-gov-list">
                {governancePrinciples.map((item, i) => (
                  <li key={i}><CheckCircle size={15} color="var(--color-green)" /> {item}</li>
                ))}
              </ul>
            </div>
            <div className="ld-gov-card">
              <h3 className="ld-gov-title">
                <Users size={20} color="var(--color-primary)" />
                Oversight Structure
              </h3>
              <ul className="ld-gov-list">
                {oversightStructure.map((item, i) => (
                  <li key={i}><CheckCircle size={15} color="var(--color-green)" /> {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

      </div>

      {/* ── Bottom CTA Strip ── */}
      <div className="ld-cta-strip">
        <p className="ld-cta-text">
          <strong>Support JoMabel Healthcare Foundation</strong> — help us bring life-saving
          healthcare closer to families in underserved communities in Ufuma, Anambra State, Nigeria.
        </p>
        <button className="ld-cta-btn" onClick={() => window.location.href = '/donate#payment-section'}>
          ♥ Donate Now
        </button>
      </div>

      <Footer />
    </div>
  );
};

export default Leadership;