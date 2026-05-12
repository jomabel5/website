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
          background: linear-gradient(135deg, #111827 0%, #1F2937 100%);
          box-shadow: 0 -2px 10px rgba(0,0,0,0.15);
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
          padding: 10px 20px;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
        }
        
        .cookie-text {
          flex: 3;
          display: flex;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
        }
        
        .cookie-title {
          font-family: var(--font-heading);
          font-size: 13px;
          font-weight: 600;
          color: #ffffff;
          white-space: nowrap;
        }
        
        .cookie-description {
          font-size: 11px;
          color: rgba(255,255,255,0.7);
          line-height: 1.4;
        }
        
        .cookie-link {
          color: #1D8FD4;
          text-decoration: underline;
          cursor: pointer;
          font-size: 11px;
          white-space: nowrap;
        }
        
        .cookie-link:hover {
          color: #29C5F6;
        }
        
        .cookie-buttons {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }
        
        .cookie-btn {
          padding: 6px 14px;
          border-radius: 6px;
          font-size: 12px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
          font-family: 'Inter', sans-serif;
          white-space: nowrap;
        }
        
        .cookie-btn-primary {
          background: #16A34A;
          color: #ffffff;
          border: none;
        }
        
        .cookie-btn-primary:hover {
          background: #15803D;
        }
        
        .cookie-btn-secondary {
          background: transparent;
          color: #ffffff;
          border: 1px solid rgba(255,255,255,0.3);
        }
        
        .cookie-btn-secondary:hover {
          background: rgba(255,255,255,0.1);
        }
        
        .cookie-btn-outline {
          background: transparent;
          color: #1D8FD4;
          border: 1px solid #1D8FD4;
        }
        
        .cookie-btn-outline:hover {
          background: rgba(29,143,212,0.1);
        }
        
        /* Preferences Modal */
        .preferences-modal {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0,0,0,0.7);
          z-index: 10000;
          display: flex;
          align-items: center;
          justify-content: center;
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
          background: #ffffff;
          border-radius: 20px;
          max-width: 500px;
          width: 90%;
          max-height: 80vh;
          overflow-y: auto;
          animation: scaleIn 0.3s ease-out;
        }
        
        @keyframes scaleIn {
          from {
            transform: scale(0.95);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
        
        .preferences-header {
          padding: 20px 24px;
          border-bottom: 1px solid #E5E7EB;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .preferences-header h3 {
          font-family: var(--font-heading);
          font-size: 20px;
          font-weight: 700;
          color: #111827;
          margin: 0;
        }
        
        .preferences-close {
          background: none;
          border: none;
          cursor: pointer;
          color: #6B7280;
          transition: color 0.2s;
        }
        
        .preferences-close:hover {
          color: #111827;
        }
        
        .preferences-body {
          padding: 24px;
        }
        
        .preference-item {
          margin-bottom: 20px;
          padding-bottom: 20px;
          border-bottom: 1px solid #F0F0F0;
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
          margin-bottom: 8px;
        }
        
        .preference-title {
          font-weight: 700;
          color: #111827;
          font-size: 15px;
        }
        
        .preference-title.necessary {
          color: #6B7280;
        }
        
        .preference-description {
          font-size: 13px;
          color: #6B7280;
          line-height: 1.5;
        }
        
        /* Toggle Switch */
        .toggle-switch {
          position: relative;
          display: inline-block;
          width: 44px;
          height: 24px;
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
          background-color: #ccc;
          transition: 0.3s;
          border-radius: 24px;
        }
        
        .toggle-slider:before {
          position: absolute;
          content: "";
          height: 18px;
          width: 18px;
          left: 3px;
          bottom: 3px;
          background-color: white;
          transition: 0.3s;
          border-radius: 50%;
        }
        
        input:checked + .toggle-slider {
          background-color: #1D8FD4;
        }
        
        input:checked + .toggle-slider:before {
          transform: translateX(20px);
        }
        
        input:disabled + .toggle-slider {
          opacity: 0.6;
          cursor: not-allowed;
        }
        
        .preferences-footer {
          padding: 20px 24px;
          border-top: 1px solid #E5E7EB;
          display: flex;
          gap: 12px;
          justify-content: flex-end;
        }
        
        /* Mobile Responsive */
        @media (max-width: 768px) {
          .cookie-container {
            flex-direction: column;
            text-align: center;
            padding: 12px 16px;
          }
          .cookie-text {
            flex-direction: column;
            gap: 6px;
          }
          .cookie-title {
            white-space: normal;
          }
          .cookie-link {
            white-space: normal;
          }
          .cookie-buttons {
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
              <Settings size={12} style={{ marginRight: '4px' }} />
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
              <button className="cookie-btn cookie-btn-secondary" onClick={() => setShowPreferences(false)}>
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