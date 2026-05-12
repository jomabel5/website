import React from 'react';

// Social links
const socialLinks = [
  {
    handle: 'Instagram',
    username: '@jhfoundation663',
    url: 'https://www.instagram.com/jhfoundation663/',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="url(#ig-gradient)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <defs>
          <linearGradient id="ig-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#f09433"/>
            <stop offset="50%" stopColor="#dc2743"/>
            <stop offset="100%" stopColor="#bc1888"/>
          </linearGradient>
        </defs>
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <circle cx="12" cy="12" r="4"/>
        <circle cx="17.5" cy="6.5" r="1" fill="#dc2743" stroke="none"/>
      </svg>
    ),
    description: 'Texas-based nonprofit foundation building a world-class medical & training campus in Nigeria. Healthcare. Dignity. Impact.',
  },
  {
    handle: 'X (Twitter)',
    username: '@jomabel176441',
    url: 'https://x.com/jomabel176441',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="#000000">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L2.25 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"/>
      </svg>
    ),
    description: 'Texas-based nonprofit foundation building a world-class medical & healthcare training campus in Nigeria. Dignity • Equity • Impact',
  },
  {
    handle: 'YouTube',
    username: '@jomabelhealthcarefoundation',
    url: 'https://youtube.com/@jomabelhealthcarefoundation',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="#FF0000">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/>
        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="#ffffff"/>
      </svg>
    ),
    description: 'Watch construction progress, outreach missions, and updates from JoMabel Healthcare Foundation.',
  },
];

const OurSocials = () => (
  <section className="socials-section">
    <style>{`
      .socials-section {
        background-color: #f9fafb;
        padding: clamp(40px, 6vw, 64px) clamp(16px, 5vw, 64px) clamp(48px, 7vw, 72px);
        font-family: 'Inter', 'Segoe UI', sans-serif;
        text-align: center;
      }
      .socials-heading {
        font-size: clamp(20px, 4vw, 24px);
        font-weight: 700;
        color: #111827;
        margin-bottom: 40px;
      }
      .socials-grid {
        border: 1px solid #e5e7eb;
        border-radius: 16px;
        padding: clamp(24px, 4vw, 40px) clamp(16px, 3vw, 32px);
        max-width: 1080px;
        margin: 0 auto;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        background-color: #ffffff;
      }
      .social-card {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 12px;
        padding: 16px 12px;
        border-right: 1px solid #f3f4f6;
        text-decoration: none;
        transition: all 0.2s ease;
        cursor: pointer;
      }
      .social-card:last-child {
        border-right: none;
      }
      .social-card:hover {
        transform: translateY(-4px);
        background-color: #fafafa;
      }
      .social-handle {
        font-size: 15px;
        font-weight: 700;
        color: #111827;
        margin: 0;
      }
      .social-username {
        font-size: 12px;
        color: #1D8FD4;
        margin: 0;
        text-decoration: none;
      }
      .social-description {
        font-size: 12.5px;
        color: #6b7280;
        line-height: 1.65;
        margin: 0;
        white-space: pre-line;
        text-align: center;
      }

      /* Tablet — 2×2 grid (3 items → 2 then 1) */
      @media (max-width: 760px) {
        .socials-grid {
          grid-template-columns: repeat(2, 1fr);
        }
        .social-card {
          border-right: none;
          border-bottom: 1px solid #f3f4f6;
        }
        .social-card:nth-child(odd) {
          border-right: 1px solid #f3f4f6;
        }
        .social-card:nth-child(2),
        .social-card:nth-child(3) {
          border-bottom: none;
        }
        .social-card:nth-child(3) {
          border-right: none;
        }
      }

      /* Mobile — single column */
      @media (max-width: 550px) {
        .socials-grid {
          grid-template-columns: 1fr;
        }
        .social-card {
          border-right: none !important;
          border-bottom: 1px solid #f3f4f6;
        }
        .social-card:last-child {
          border-bottom: none;
        }
      }
    `}</style>

    <h2 className="socials-heading">Follow Our Journey</h2>

    <div className="socials-grid">
      {socialLinks.map((social, i) => (
        <a
          key={i}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="social-card"
        >
          {social.icon}
          <h4 className="social-handle">{social.handle}</h4>
          <p className="social-username">{social.username}</p>
          <p className="social-description">{social.description}</p>
        </a>
      ))}
    </div>
  </section>
);

export default OurSocials;