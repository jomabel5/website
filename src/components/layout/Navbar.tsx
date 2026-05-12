import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import logo from '../../assests/images/logonavbar.png';
import AccessibilityWidget from '../common/AccessibilityWidget';
import TextToSpeech from './TextToSpeech';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen]   = useState(false);
  const [openDropdown, setOpenDropdown]       = useState<string | null>(null);
  const [mobileDropdowns, setMobileDropdowns] = useState<{ [key: string]: boolean }>({});
  const location = useLocation();

  const menuGroups = [
    {
      id: 'about-group',
      label: 'About',
      items: [
        { id: 'mission-vision', label: 'Mission & Vision',  path: '/mission-vision' },
        { id: 'our-story',      label: 'Our Story',         path: '/our-story' },
        { id: 'founders-story', label: "Founder's Story",   path: '/founder-story' },
        { id: 'leadership',     label: 'Leadership',        path: '/leadership' },
      ],
    },
    {
      id: 'work-group',
      label: 'Our Work',
      items: [
        { id: 'programs', label: 'Programs', path: '/programs' },
        { id: 'campaign', label: 'Campaign', path: '/campaign' },
        { id: 'impact',   label: 'Impact',   path: '/impact' },
        { id: 'roi',      label: 'ROI',       path: '/roi' },
      ],
    },
    {
      id: 'give-group',
      label: 'Give',
      items: [
        { id: 'donate', label: 'Donate Now',    path: '/donate' },
        { id: 'legacy', label: 'Legacy Giving', path: '/legacy' },
      ],
    },
    {
      id: 'connect-group',
      label: 'Connect',
      items: [
        { id: 'newsletters', label: 'Newsletters', path: '/newsletter' },
        { id: 'contact',     label: 'Contact',     path: '/contact' },
      ],
    },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  const isGroupActive = (items: { path: string }[]) =>
    items.some(item => location.pathname.startsWith(item.path));

  React.useEffect(() => {
    const close = () => setOpenDropdown(null);
    document.addEventListener('click', close);
    return () => document.removeEventListener('click', close);
  }, []);

  return (
    <>
      <a href="#main-content" className="nb-skip">Skip to main content</a>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=Inter:wght@500;600;700&display=swap');

        /* ─────────────────────────────────────────
           SKIP LINK
        ───────────────────────────────────────── */
        .nb-skip {
          position: absolute;
          top: -40px;
          left: 0;
          background: var(--color-primary);
          color: #fff;
          padding: 8px 16px;
          text-decoration: none;
          z-index: 10001;
          font-family: var(--font-body);
          font-size: 13px;
          font-weight: 600;
          border-radius: 0 0 4px 0;
          transition: top 0.2s;
        }
        .nb-skip:focus { top: 0; }

        /* ─────────────────────────────────────────
           ROOT
        ───────────────────────────────────────── */
        .nb-root {
          width: 100%;
          background: #ffffff;
          position: sticky;
          top: 0;
          z-index: 1000;
          border-bottom: 1px solid var(--color-border);
          box-shadow: 0 2px 8px rgba(0,0,0,0.06);
        }

        /* ─────────────────────────────────────────
           SINGLE ROW
        ───────────────────────────────────────── */
        .nb-inner {
          width: 100%;
          padding: 0 0 0 clamp(20px, 4vw, 48px);
          height: 80px;
          display: flex;
          align-items: center;
          gap: 0;
        }

        /* ── BRAND ── */
        .nb-brand {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
          flex-shrink: 0;
          margin-right: 40px;
        }
        .nb-brand img {
          height: 64px;
          width: auto;
          object-fit: contain;
        }
        .nb-brand-name {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 17px;
          font-weight: 800;
          color: var(--color-navy);
          line-height: 1;
          white-space: nowrap;
        }

        /* ── NAV LINKS ── */
        .nb-links {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 4px;
          list-style: none;
          margin: 0;
          padding: 0;
          flex: 1;
          height: 100%;
        }

        /* simple link */
        .nb-link {
          font-family: 'Inter', sans-serif;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.4px;
          text-transform: uppercase;
          text-decoration: none;
          color: var(--color-navy);
          padding: 0 12px;
          height: 80px;
          display: flex;
          align-items: center;
          border-bottom: 3px solid transparent;
          transition: var(--transition);
        }
        .nb-link:hover { color: var(--color-primary); border-bottom-color: var(--color-primary); }
        .nb-link.nb-active { color: var(--color-primary); border-bottom-color: var(--color-primary); }

        /* dropdown trigger */
        .nb-drop { position: relative; height: 100%; display: flex; align-items: center; }
        .nb-trigger {
          font-family: 'Inter', sans-serif;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.4px;
          text-transform: uppercase;
          color: var(--color-navy);
          padding: 0 12px;
          height: 80px;
          display: flex;
          align-items: center;
          gap: 4px;
          border: none;
          background: none;
          cursor: pointer;
          border-bottom: 3px solid transparent;
          transition: var(--transition);
        }
        .nb-trigger:hover { color: var(--color-primary); border-bottom-color: var(--color-primary); }
        .nb-trigger.nb-active { color: var(--color-primary); border-bottom-color: var(--color-primary); }
        .nb-trigger svg { transition: transform 0.2s; flex-shrink: 0; }
        .nb-trigger.nb-open svg { transform: rotate(180deg); }

        /* dropdown panel */
        .nb-dropdown {
          position: absolute;
          top: calc(100% + 0px);
          left: 0;
          background: #ffffff;
          border-top: 3px solid var(--color-primary);
          border-radius: 0 0 8px 8px;
          box-shadow: 0 8px 24px rgba(0,0,0,0.12);
          min-width: 220px;
          overflow: hidden;
          z-index: 200;
        }
        .nb-dropdown-item {
          display: block;
          padding: 13px 20px;
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          font-weight: 600;
          color: var(--color-text-muted);
          text-decoration: none;
          border-left: 3px solid transparent;
          transition: var(--transition);
        }
        .nb-dropdown-item:hover {
          background: var(--color-primary-light);
          color: var(--color-primary);
          border-left-color: var(--color-primary);
        }
        .nb-dropdown-item.nb-active {
          background: var(--color-primary-light);
          color: var(--color-primary);
          border-left-color: var(--color-primary);
          font-weight: 700;
        }

        /* ── RIGHT ACTIONS ── */
        .nb-actions {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-left: auto;
          flex-shrink: 0;
          height: 100%;
          padding-right: 0;
        }
        .nb-tts-wrap {
          display: flex;
          align-items: center;
          transform: scale(0.85);
          transform-origin: center;
          opacity: 0.75;
          transition: opacity 0.2s;
        }
        .nb-tts-wrap:hover { opacity: 1; }
        .nb-donate {
          background: var(--color-green);
          color: #ffffff;
          border: none;
          border-radius: 0;
          padding: 0 36px;
          height: 80px;
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          text-decoration: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: var(--transition);
          white-space: nowrap;
          flex-shrink: 0;
        }
        .nb-donate:hover { background: var(--color-green-dark); }
        .nb-donate-heart {
          font-size: 15px;
          line-height: 1;
        }

        /* mobile toggle */
        .nb-toggle {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          padding: 8px;
          color: var(--color-navy);
        }

        /* ─────────────────────────────────────────
           MOBILE MENU
        ───────────────────────────────────────── */
        .nb-mobile {
          background: #ffffff;
          border-top: 2px solid var(--color-primary);
          max-height: 85vh;
          overflow-y: auto;
        }
        .nb-mob-item { border-bottom: 1px solid var(--color-border); }
        .nb-mob-link {
          display: block;
          padding: 15px clamp(20px, 4vw, 48px);
          font-family: 'Inter', sans-serif;
          font-size: 15px;
          font-weight: 700;
          letter-spacing: 0.3px;
          text-transform: uppercase;
          color: var(--color-navy);
          text-decoration: none;
          border-left: 3px solid transparent;
          transition: var(--transition);
        }
        .nb-mob-link:hover, .nb-mob-link.nb-active {
          color: var(--color-primary);
          background: var(--color-primary-light);
          border-left-color: var(--color-primary);
        }
        .nb-mob-trigger {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          padding: 15px clamp(20px, 4vw, 48px);
          font-family: 'Inter', sans-serif;
          font-size: 15px;
          font-weight: 700;
          letter-spacing: 0.3px;
          text-transform: uppercase;
          color: var(--color-navy);
          background: none;
          border: none;
          border-left: 3px solid transparent;
          cursor: pointer;
          text-align: left;
          transition: var(--transition);
        }
        .nb-mob-trigger.nb-active {
          color: var(--color-primary);
          background: var(--color-primary-light);
          border-left-color: var(--color-primary);
        }
        .nb-mob-sub { background: var(--color-surface); }
        .nb-mob-subitem {
          display: block;
          padding: 12px clamp(20px, 4vw, 48px) 12px calc(clamp(20px, 4vw, 48px) + 20px);
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          font-weight: 600;
          color: var(--color-text-muted);
          text-decoration: none;
          border-left: 3px solid transparent;
          transition: var(--transition);
        }
        .nb-mob-subitem:hover, .nb-mob-subitem.nb-active {
          color: var(--color-primary);
          background: var(--color-primary-light);
          border-left-color: var(--color-primary);
        }
        .nb-mob-donate {
          display: block;
          margin: 16px clamp(20px, 4vw, 48px);
          background: var(--color-green);
          color: #ffffff;
          text-align: center;
          padding: 14px;
          font-family: 'Inter', sans-serif;
          font-size: 15px;
          font-weight: 700;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          text-decoration: none;
          border-radius: var(--btn-radius);
          transition: var(--transition);
        }
        .nb-mob-donate:hover { background: var(--color-green-dark); }
        .nb-mob-tts {
          padding: 8px clamp(20px, 4vw, 48px) 16px;
        }

        /* ─────────────────────────────────────────
           RESPONSIVE
        ───────────────────────────────────────── */
        @media (max-width: 960px) {
          .nb-links, .nb-tts-wrap, .nb-donate { display: none !important; }
          .nb-toggle { display: flex; }
        }
        @media (min-width: 961px) {
          .nb-mobile  { display: none !important; }
          .nb-toggle  { display: none !important; }
        }
        @media (max-width: 520px) {
          .nb-brand-name { display: none; }
          .nb-brand img  { height: 44px; }
        }
      `}</style>

      <header className="nb-root">
        <div className="nb-inner">

          {/* Brand */}
          <Link to="/" className="nb-brand">
            <img src={logo} alt="JoMabel Healthcare Foundation" />
            <span className="nb-brand-name">JoMabel Healthcare Foundation Inc.</span>
          </Link>

          {/* Nav Links */}
          <ul className="nb-links">
            <li>
              <Link to="/" className={`nb-link${isActive('/') ? ' nb-active' : ''}`}>
                Home
              </Link>
            </li>

            {menuGroups.map((group) => (
              <li key={group.id} className="nb-drop">
                <button
                  className={`nb-trigger${isGroupActive(group.items) ? ' nb-active' : ''}${openDropdown === group.id ? ' nb-open' : ''}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setOpenDropdown(openDropdown === group.id ? null : group.id);
                  }}
                >
                  {group.label}
                  <ChevronDown size={13} />
                </button>
                {openDropdown === group.id && (
                  <div className="nb-dropdown">
                    {group.items.map((item) => (
                      <Link
                        key={item.id}
                        to={item.path}
                        className={`nb-dropdown-item${isActive(item.path) ? ' nb-active' : ''}`}
                        onClick={() => setOpenDropdown(null)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>

          {/* Right Actions */}
          <div className="nb-actions">
            {/* TTS — smaller, subtle */}
            <div className="nb-tts-wrap">
              <TextToSpeech />
            </div>

            {/* Donate — flush right, full height */}
            <Link to="/donate" className="nb-donate">
              <span className="nb-donate-heart">♥</span>
              Donate
            </Link>

            {/* Mobile toggle */}
            <button
              className="nb-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="nb-mobile">
            <div className="nb-mob-item">
              <Link
                to="/"
                className={`nb-mob-link${isActive('/') ? ' nb-active' : ''}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
            </div>

            {menuGroups.map((group) => (
              <div key={group.id} className="nb-mob-item">
                <button
                  className={`nb-mob-trigger${mobileDropdowns[group.id] ? ' nb-active' : ''}`}
                  onClick={() => setMobileDropdowns(prev => ({ ...prev, [group.id]: !prev[group.id] }))}
                >
                  {group.label}
                  <ChevronDown
                    size={16}
                    style={{
                      transform: mobileDropdowns[group.id] ? 'rotate(180deg)' : 'none',
                      transition: 'transform 0.2s',
                      flexShrink: 0,
                    }}
                  />
                </button>
                {mobileDropdowns[group.id] && (
                  <div className="nb-mob-sub">
                    {group.items.map((item) => (
                      <Link
                        key={item.id}
                        to={item.path}
                        className={`nb-mob-subitem${isActive(item.path) ? ' nb-active' : ''}`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <Link to="/donate" className="nb-mob-donate" onClick={() => setMobileMenuOpen(false)}>
              ♥ Donate Now
            </Link>
            <div className="nb-mob-tts">
              <TextToSpeech />
            </div>
          </div>
        )}
      </header>

      <AccessibilityWidget />
    </>
  );
};

export default Navbar;