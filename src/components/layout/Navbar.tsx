import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Menu, X, ChevronDown, Instagram, Youtube,
} from 'lucide-react';
import logo from '../../assests/images/logonavbar.png';
import AccessibilityWidget from '../common/AccessibilityWidget';
import TextToSpeech from './TextToSpeech';
import { useLanguage } from '../../context/LanguageContext';

// #46: Instagram link updated. The X (Twitter) icon is removed until the
// account is renamed to a professional handle; then add it back with the new link.
const socialLinks = [
  { id: 'instagram', label: 'Instagram', href: 'https://www.instagram.com/jomabelhealthcarefoundation/', Icon: Instagram },
  { id: 'youtube',   label: 'YouTube', href: 'https://youtube.com/@jomabelhealthcarefoundation', Icon: Youtube },
];

type NavLinkItem  = { type: 'link';  id: string; label: string; path: string };
type NavGroupItem = { type: 'group'; id: string; label: string; items: { id: string; label: string; path: string }[] };
type NavEntry = NavLinkItem | NavGroupItem;

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen]   = useState(false);
  const [openDropdown, setOpenDropdown]       = useState<string | null>(null);
  const [mobileDropdowns, setMobileDropdowns] = useState<{ [key: string]: boolean }>({});
  const [langOpen, setLangOpen]               = useState(false);
  const [mobileLangOpen, setMobileLangOpen]   = useState(false);
  const location = useLocation();
  const { language, setLanguage, languages } = useLanguage();
  const currentLang = languages.find((l) => l.code === language)!;

  // #47: main menu. "Our Work" and "Our Centers" are plain links because each
  // one leads to a single page; Campaign moved to Give and Impact moved to About.
  const navEntries: NavEntry[] = [
    {
      type: 'group',
      id: 'about-group',
      label: 'About',
      items: [
        { id: 'mission-vision', label: 'Mission & Vision',  path: '/mission-vision' },
        { id: 'our-story',      label: 'Our Story',         path: '/our-story' },
        { id: 'founders-story', label: "Founder's Story",   path: '/founder-story' },
        { id: 'leadership',     label: 'Board Of Directors', path: '/leadership' },
        { id: 'our-impact',     label: 'Our Impact',        path: '/impact' },
      ],
    },
    { type: 'link', id: 'work',    label: 'Our Work',    path: '/programs' },
    { type: 'link', id: 'centers', label: 'Our Centers', path: '/our-centers' },
    {
      type: 'group',
      id: 'give-group',
      label: 'Give',
      items: [
        { id: 'donate',   label: 'Donate Now',       path: '/donate' },
        { id: 'campaign', label: 'Capital Campaign', path: '/campaign' },
        { id: 'legacy',   label: 'Legacy Giving',    path: '/legacy' },
      ],
    },
    {
      type: 'group',
      id: 'connect-group',
      label: 'Connect',
      items: [
        { id: 'blog',        label: 'Blog',        path: '/blog' },
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
    const close = () => {
      setOpenDropdown(null);
      setLangOpen(false);
    };
    document.addEventListener('click', close);
    return () => document.removeEventListener('click', close);
  }, []);

  return (
    <>
      <a href="#main-content" className="nb-skip">Skip to main content</a>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=Inter:wght@500;600;700&display=swap');

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

        .nb-root {
          width: 100%;
          background: #ffffff;
          position: sticky;
          top: 0;
          z-index: 1000;
          border-bottom: 1px solid var(--color-border);
          box-shadow: 0 2px 8px rgba(0,0,0,0.06);
        }

        /* TOP STRIP: socials, language */
        .nb-topbar {
          background: var(--color-surface, #f8f9fa);
          border-bottom: 1px solid var(--color-border);
        }
        .nb-topbar-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 6px clamp(20px, 4vw, 48px);
          display: flex;
          align-items: center;
          justify-content: flex-end;
          height: 34px;
        }
        .nb-topbar-right {
          display: flex;
          align-items: center;
          gap: 16px;
        }
        .nb-topbar-socials {
          display: flex;
          align-items: center;
          gap: 12px;
          color: var(--color-text-muted);
        }
        .nb-topbar-socials a {
          display: flex;
          color: inherit;
          cursor: pointer;
          transition: var(--transition);
        }
        .nb-topbar-socials a:hover { color: var(--color-primary); }
        .nb-topbar-divider {
          width: 1px;
          height: 16px;
          background: var(--color-border);
        }

        .nb-lang { position: relative; }
        .nb-lang-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          background: none;
          border: none;
          cursor: pointer;
          font-family: 'Inter', sans-serif;
          font-size: 12.5px;
          font-weight: 600;
          color: var(--color-navy);
        }
        .nb-lang-btn:hover { color: var(--color-primary); }
        .nb-lang-btn svg { transition: transform 0.2s; }
        .nb-lang-btn.nb-open svg { transform: rotate(180deg); }
        .nb-lang-menu {
          position: absolute;
          right: 0;
          top: calc(100% + 8px);
          background: #ffffff;
          border-top: 3px solid var(--color-primary);
          border-radius: 0 0 8px 8px;
          box-shadow: 0 8px 24px rgba(0,0,0,0.12);
          min-width: 170px;
          overflow: hidden;
          z-index: 1200;
        }
        .nb-lang-item {
          display: flex;
          align-items: center;
          gap: 8px;
          width: 100%;
          padding: 10px 16px;
          background: none;
          border: none;
          cursor: pointer;
          text-align: left;
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          font-weight: 600;
          color: var(--color-text-muted);
          transition: var(--transition);
        }
        .nb-lang-item:hover { background: var(--color-primary-light); color: var(--color-primary); }
        .nb-lang-item.nb-active { color: var(--color-primary); background: var(--color-primary-light); }

        .nb-inner {
          width: 100%;
          padding: 0 0 0 clamp(20px, 4vw, 48px);
          height: 80px;
          display: flex;
          align-items: center;
          gap: 0;
        }

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
          background: var(--color-primary);
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
        .nb-donate:hover { background: var(--color-primary-dark); }
        .nb-donate-heart {
          font-size: 15px;
          line-height: 1;
        }

        .nb-toggle {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          padding: 8px;
          color: var(--color-navy);
        }

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
          background: var(--color-primary);
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
        .nb-mob-donate:hover { background: var(--color-primary-dark); }

        /* mobile socials + language, inside the mobile menu */
        .nb-mob-topbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px clamp(20px, 4vw, 48px);
          border-top: 1px solid var(--color-border);
        }
        .nb-mob-topbar .nb-topbar-socials a svg { width: 18px; height: 18px; }
        .nb-mob-lang-menu {
          position: absolute;
          right: clamp(20px, 4vw, 48px);
          background: #ffffff;
          border-top: 3px solid var(--color-primary);
          box-shadow: 0 8px 24px rgba(0,0,0,0.12);
          border-radius: 0 0 8px 8px;
          min-width: 170px;
          margin-top: 8px;
          z-index: 1200;
        }

        @media (max-width: 960px) {
          .nb-links, .nb-donate { display: none !important; }
          .nb-toggle { display: flex; }
        }
        @media (min-width: 961px) {
          .nb-mobile  { display: none !important; }
          .nb-toggle  { display: none !important; }
        }
        @media (max-width: 600px) {
          .nb-topbar-inner {
            height: auto;
            flex-wrap: wrap;
            gap: 8px;
            padding: 8px clamp(16px, 4vw, 24px);
          }
          .nb-topbar-right { gap: 10px; }
          .nb-tts-wrap { transform: scale(0.75); }
        }
        @media (max-width: 520px) {
          .nb-brand-name { display: none; }
          .nb-brand img  { height: 44px; }
        }
      `}</style>

      <header className="nb-root">
        {/* Top strip: socials, language (#42: phone number removed) */}
        <div className="nb-topbar">
          <div className="nb-topbar-inner">
            <div className="nb-topbar-right">
              <div className="nb-topbar-socials">
                {socialLinks.map(({ id, label, href, Icon }) => (
                  <a key={id} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                    <Icon size={15} />
                  </a>
                ))}
              </div>
              <div className="nb-topbar-divider" />
              <div className="nb-lang">
                <button
                  className={`nb-lang-btn${langOpen ? ' nb-open' : ''}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setLangOpen(!langOpen);
                  }}
                >
                  <span>{currentLang.flag}</span>
                  {currentLang.name}
                  <ChevronDown size={12} />
                </button>
                {langOpen && (
                  <div className="nb-lang-menu">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        className={`nb-lang-item${lang.code === language ? ' nb-active' : ''}`}
                        onClick={() => {
                          setLanguage(lang.code);
                          setLangOpen(false);
                        }}
                      >
                        <span>{lang.flag}</span>
                        {lang.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="nb-inner">

          {/* Brand */}
          <Link to="/" className="nb-brand">
            <img src={logo} alt="JoMabel Healthcare Foundation" />
          </Link>

          {/* Nav Links */}
          <ul className="nb-links">
            <li>
              <Link to="/" className={`nb-link${isActive('/') ? ' nb-active' : ''}`}>
                Home
              </Link>
            </li>

            {navEntries.map((entry) =>
              entry.type === 'link' ? (
                <li key={entry.id}>
                  <Link to={entry.path} className={`nb-link${isActive(entry.path) ? ' nb-active' : ''}`}>
                    {entry.label}
                  </Link>
                </li>
              ) : (
                <li key={entry.id} className="nb-drop">
                  <button
                    className={`nb-trigger${isGroupActive(entry.items) ? ' nb-active' : ''}${openDropdown === entry.id ? ' nb-open' : ''}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setOpenDropdown(openDropdown === entry.id ? null : entry.id);
                    }}
                  >
                    {entry.label}
                    <ChevronDown size={13} />
                  </button>
                  {openDropdown === entry.id && (
                    <div className="nb-dropdown">
                      {entry.items.map((item) => (
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
              )
            )}
          </ul>

          {/* Right Actions */}
          <div className="nb-actions">
            <div className="nb-tts-wrap">
              <TextToSpeech />
            </div>

            <Link to="/donate" className="nb-donate">
              <span className="nb-donate-heart">♥</span>
              Donate
            </Link>

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

            {navEntries.map((entry) =>
              entry.type === 'link' ? (
                <div key={entry.id} className="nb-mob-item">
                  <Link
                    to={entry.path}
                    className={`nb-mob-link${isActive(entry.path) ? ' nb-active' : ''}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {entry.label}
                  </Link>
                </div>
              ) : (
                <div key={entry.id} className="nb-mob-item">
                  <button
                    className={`nb-mob-trigger${mobileDropdowns[entry.id] ? ' nb-active' : ''}`}
                    onClick={() => setMobileDropdowns(prev => ({ ...prev, [entry.id]: !prev[entry.id] }))}
                  >
                    {entry.label}
                    <ChevronDown
                      size={16}
                      style={{
                        transform: mobileDropdowns[entry.id] ? 'rotate(180deg)' : 'none',
                        transition: 'transform 0.2s',
                        flexShrink: 0,
                      }}
                    />
                  </button>
                  {mobileDropdowns[entry.id] && (
                    <div className="nb-mob-sub">
                      {entry.items.map((item) => (
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
              )
            )}

            <Link to="/donate" className="nb-mob-donate" onClick={() => setMobileMenuOpen(false)}>
              ♥ Donate Now
            </Link>

            <div className="nb-mob-topbar">
              <div className="nb-topbar-socials">
                {socialLinks.map(({ id, label, href, Icon }) => (
                  <a key={id} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                    <Icon size={18} />
                  </a>
                ))}
              </div>
              <div className="nb-lang" style={{ position: 'relative' }}>
                <button
                  className={`nb-lang-btn${mobileLangOpen ? ' nb-open' : ''}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setMobileLangOpen(!mobileLangOpen);
                  }}
                >
                  <span>{currentLang.flag}</span>
                  {currentLang.name}
                  <ChevronDown size={12} />
                </button>
                {mobileLangOpen && (
                  <div className="nb-mob-lang-menu">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        className={`nb-lang-item${lang.code === language ? ' nb-active' : ''}`}
                        onClick={() => {
                          setLanguage(lang.code);
                          setMobileLangOpen(false);
                        }}
                      >
                        <span>{lang.flag}</span>
                        {lang.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </header>

      <AccessibilityWidget />
    </>
  );
};

export default Navbar;