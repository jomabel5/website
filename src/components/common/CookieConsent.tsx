import React, { useState, useEffect } from 'react';
import { X, Check, Settings } from 'lucide-react';

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    // Check if user has already consented
    const hasConsented = localStorage.getItem('cookieConsent');
    if (!hasConsented) {
      setIsVisible(true);
    } else {
      const savedPreferences = localStorage.getItem('cookiePreferences');
      if (savedPreferences) {
        setPreferences(JSON.parse(savedPreferences));
      }
    }
  }, []);

  const acceptAll = () => {
    const allPreferences = {
      necessary: true,
      analytics: true,
      marketing: true,
    };
    setPreferences(allPreferences);
    localStorage.setItem('cookieConsent', 'true');
    localStorage.setItem('cookiePreferences', JSON.stringify(allPreferences));
    setIsVisible(false);
    setShowPreferences(false);
    
    if (allPreferences.analytics) {
      console.log('Analytics enabled');
    }
  };

  const acceptSelected = () => {
    localStorage.setItem('cookieConsent', 'true');
    localStorage.setItem('cookiePreferences', JSON.stringify(preferences));
    setIsVisible(false);
    setShowPreferences(false);
    
    if (preferences.analytics) {
      console.log('Analytics enabled');
    }
  };

  const declineAll = () => {
    const declinedPreferences = {
      necessary: true,
      analytics: false,
      marketing: false,
    };
    setPreferences(declinedPreferences);
    localStorage.setItem('cookieConsent', 'false');
    localStorage.setItem('cookiePreferences', JSON.stringify(declinedPreferences));
    setIsVisible(false);
    setShowPreferences(false);
  };

  if (!isVisible) return null;

  return (
    <>
      <style>{`
        .cookie-overlay {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 9999;
          background: var(--color-navy);
          box-shadow: 0 -4px 20px rgba(0,0,0,0.20);
          animation: slideUp 0.3s ease-out;
        }
        
        @keyframes slideUp {
          from {
            transform: translateY(100%);
          }
          to {
            transform: translateY(0);
          }
        }
        
        .cookie-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 16px clamp(20px, 4vw, 32px);
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
        }
        
        .cookie-text {
          flex: 3;
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
          min-width: 260px;
        }
        
        .cookie-title {
          font-family: var(--font-body);
          font-size: 14px;
          font-weight: 700;
          color: #ffffff;
          white-space: nowrap;
        }
        
        .cookie-description {
          font-family: var(--font-body);
          font-size: 13px;
          color: rgba(255,255,255,0.75);
          line-height: 1.5;
        }
        
        .cookie-link {
          color: var(--color-primary);
          text-decoration: underline;
          text-underline-offset: 2px;
          cursor: pointer;
          font-size: 13px;
          font-weight: 600;
          white-space: nowrap;
        }
        
        .cookie-link:hover {
          color: #ffffff;
        }
        
        .cookie-buttons {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          flex-shrink: 0;
        }
        
        .cookie-btn {
          padding: 10px 20px;
          border-radius: var(--btn-radius);
          font-size: 13px;
          font-weight: 700;
          cursor: pointer;
          transition: var(--transition);
          font-family: var(--font-body);
          white-space: nowrap;
          display: inline-flex;
          align-items: center;
        }
        
        .cookie-btn-primary {
          background: var(--color-primary);
          color: #ffffff;
          border: none;
        }
        
        .cookie-btn-primary:hover {
          background: var(--color-primary-dark);
        }
        
        .cookie-btn-secondary {
          background: transparent;
          color: #ffffff;
          border: 1.5px solid rgba(255,255,255,0.30);
        }
        
        .cookie-btn-secondary:hover {
          background: rgba(255,255,255,0.10);
          border-color: rgba(255,255,255,0.5);
        }
        
        .cookie-btn-outline {
          background: transparent;
          color: rgba(255,255,255,0.85);
          border: 1.5px solid rgba(255,255,255,0.30);
        }
        
        .cookie-btn-outline:hover {
          background: rgba(255,255,255,0.10);
          border-color: rgba(255,255,255,0.5);
        }
        
        /* Preferences Modal */
        .preferences-modal {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(17,24,39,0.65);
          z-index: 10000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          animation: fadeIn 0.3s ease-out;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        .preferences-modal-content {
          background: var(--color-bg);
          border-radius: var(--card-radius);
          max-width: 480px;
          width: 100%;
          max-height: 82vh;
          overflow-y: auto;
          box-shadow: var(--shadow-xl);
          animation: scaleIn 0.3s ease-out;
        }
        
        @keyframes scaleIn {
          from {
            transform: scale(0.96);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
        
        .preferences-header {
          padding: 22px 26px;
          border-bottom: 1px solid var(--color-border);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .preferences-header h3 {
          font-family: var(--font-body);
          font-size: 18px;
          font-weight: 700;
          color: var(--color-navy);
          margin: 0;
        }
        
        .preferences-close {
          background: none;
          border: none;
          cursor: pointer;
          color: var(--color-text-light);
          padding: 4px;
          border-radius: var(--btn-radius);
          transition: var(--transition);
          display: flex;
        }
        
        .preferences-close:hover {
          color: var(--color-navy);
          background: var(--color-surface);
        }
        
        .preferences-body {
          padding: 22px 26px;
        }
        
        .preference-item {
          margin-bottom: 22px;
          padding-bottom: 22px;
          border-bottom: 1px solid var(--color-border);
        }
        
        .preference-item:last-child {
          border-bottom: none;
          margin-bottom: 0;
          padding-bottom: 0;
        }
        
        .preference-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
          margin-bottom: 8px;
        }
        
        .preference-title {
          font-family: var(--font-body);
          font-weight: 700;
          color: var(--color-navy);
          font-size: 14.5px;
        }
        
        .preference-title.necessary {
          color: var(--color-text-light);
        }
        
        .preference-description {
          font-family: var(--font-body);
          font-size: 13px;
          color: var(--color-text-muted);
          line-height: 1.6;
        }
        
        /* Toggle Switch */
        .toggle-switch {
          position: relative;
          display: inline-block;
          width: 42px;
          height: 24px;
          flex-shrink: 0;
        }
        
        .toggle-switch input {
          opacity: 0;
          width: 0;
          height: 0;
        }
        
        .toggle-slider {
          position: absolute;
          cursor: pointer;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: var(--color-border-dark);
          transition: var(--transition);
          border-radius: 999px;
        }
        
        .toggle-slider:before {
          position: absolute;
          content: "";
          height: 18px;
          width: 18px;
          left: 3px;
          bottom: 3px;
          background-color: #ffffff;
          transition: var(--transition);
          border-radius: 50%;
          box-shadow: var(--shadow-sm);
        }
        
        input:checked + .toggle-slider {
          background-color: var(--color-primary);
        }
        
        input:checked + .toggle-slider:before {
          transform: translateX(18px);
        }
        
        input:disabled + .toggle-slider {
          opacity: 0.6;
          cursor: not-allowed;
        }
        
        .preferences-footer {
          padding: 18px 26px;
          border-top: 1px solid var(--color-border);
          display: flex;
          gap: 12px;
          justify-content: flex-end;
        }
        
        /* Mobile Responsive */
        @media (max-width: 768px) {
          .cookie-container {
            flex-direction: column;
            align-items: stretch;
            text-align: left;
            padding: 18px 20px;
          }
          .cookie-text {
            flex-direction: column;
            align-items: flex-start;
            gap: 6px;
          }
          .cookie-title {
            white-space: normal;
          }
          .cookie-link {
            white-space: normal;
          }
          .cookie-buttons {
            justify-content: stretch;
          }
          .cookie-btn {
            flex: 1;
            justify-content: center;
          }
        }
      `}</style>

      <div className="cookie-overlay">
        <div className="cookie-container">
          <div className="cookie-text">
            <div className="cookie-title">We value your privacy</div>
            <div className="cookie-description">
              We use cookies to enhance your experience. By clicking "Accept All", you consent.
              {' '}
              <span className="cookie-link" onClick={() => setShowPreferences(true)}>
                Cookie Preferences
              </span>
            </div>
          </div>
          <div className="cookie-buttons">
            <button className="cookie-btn cookie-btn-secondary" onClick={declineAll}>
              Decline
            </button>
            <button className="cookie-btn cookie-btn-outline" onClick={() => setShowPreferences(true)}>
              <Settings size={13} style={{ marginRight: '6px' }} />
              Preferences
            </button>
            <button className="cookie-btn cookie-btn-primary" onClick={acceptAll}>
              Accept All
            </button>
          </div>
        </div>
      </div>

      {/* Preferences Modal */}
      {showPreferences && (
        <div className="preferences-modal" onClick={() => setShowPreferences(false)}>
          <div className="preferences-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="preferences-header">
              <h3>Cookie Preferences</h3>
              <button className="preferences-close" onClick={() => setShowPreferences(false)}>
                <X size={20} />
              </button>
            </div>
            <div className="preferences-body">
              <div className="preference-item">
                <div className="preference-header">
                  <span className="preference-title necessary">Necessary Cookies</span>
                  <label className="toggle-switch">
                    <input type="checkbox" checked disabled />
                    <span className="toggle-slider"></span>
                  </label>
                </div>
                <div className="preference-description">
                  Required for the website to function properly. These cannot be disabled.
                </div>
              </div>
              
              <div className="preference-item">
                <div className="preference-header">
                  <span className="preference-title">Analytics Cookies</span>
                  <label className="toggle-switch">
                    <input 
                      type="checkbox" 
                      checked={preferences.analytics}
                      onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                    />
                    <span className="toggle-slider"></span>
                  </label>
                </div>
                <div className="preference-description">
                  Help us understand how visitors interact with our website to improve user experience.
                </div>
              </div>
              
              <div className="preference-item">
                <div className="preference-header">
                  <span className="preference-title">Marketing Cookies</span>
                  <label className="toggle-switch">
                    <input 
                      type="checkbox" 
                      checked={preferences.marketing}
                      onChange={(e) => setPreferences({ ...preferences, marketing: e.target.checked })}
                    />
                    <span className="toggle-slider"></span>
                  </label>
                </div>
                <div className="preference-description">
                  Used to deliver relevant advertisements and track campaign performance.
                </div>
              </div>
            </div>
            <div className="preferences-footer">
              <button className="cookie-btn cookie-btn-secondary" style={{ color: 'var(--color-navy)', borderColor: 'var(--color-border)' }} onClick={() => setShowPreferences(false)}>
                Cancel
              </button>
              <button className="cookie-btn cookie-btn-primary" onClick={acceptSelected}>
                Save Preferences
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CookieConsent;