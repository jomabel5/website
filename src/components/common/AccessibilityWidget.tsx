import React, { useState, useEffect, useRef } from 'react';
import { Accessibility, Type, Contrast, ZoomIn, ZoomOut, Volume2, X } from 'lucide-react';

const AccessibilityWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(100);
  const [highContrast, setHighContrast] = useState(false);
  const [readableFont, setReadableFont] = useState(false);

  // Capture the site's real body font once, so turning "readable font" off
  // restores whatever the pages actually use — not a hardcoded guess.
  const originalFontRef = useRef<string | null>(null);
  useEffect(() => {
    if (originalFontRef.current === null) {
      const computed = getComputedStyle(document.documentElement)
        .getPropertyValue('--font-body')
        .trim();
      originalFontRef.current = computed || "'Inter', 'Segoe UI', sans-serif";
    }
  }, []);

  useEffect(() => {
    // Text size: use zoom on <html> instead of font-size.
    // font-size only scales rem/em values — this site's pages are built with
    // px and clamp(px, vw, px), which never respond to a root font-size change.
    // zoom scales the whole rendered page uniformly, so it works everywhere
    // regardless of what unit any individual page happens to use.
    document.documentElement.style.zoom = zoomLevel !== 100 ? `${zoomLevel}%` : '';

    // High contrast
    document.documentElement.style.filter = highContrast ? 'contrast(1.5) brightness(1.1)' : '';

    // Readable font — restore the captured original instead of a hardcoded value
    if (readableFont) {
      document.documentElement.style.setProperty('--font-body', "'Open Dyslexic', 'Comic Neue', 'Inter', sans-serif");
    } else if (originalFontRef.current) {
      document.documentElement.style.setProperty('--font-body', originalFontRef.current);
    }

    return () => {
      document.documentElement.style.zoom = '';
      document.documentElement.style.filter = '';
    };
  }, [zoomLevel, highContrast, readableFont]);

  const increaseFont = () => {
    if (zoomLevel < 150) {
      setZoomLevel(prev => prev + 10);
    }
  };

  const decreaseFont = () => {
    if (zoomLevel > 70) {
      setZoomLevel(prev => prev - 10);
    }
  };

  const resetAll = () => {
    setZoomLevel(100);
    setHighContrast(false);
    setReadableFont(false);
  };

  return (
    <>
      <style>{`
        .accessibility-widget {
          position: fixed;
          bottom: 24px;
          left: 24px;
          z-index: 9998;
        }
        
        .accessibility-toggle {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: linear-gradient(135deg, #1D8FD4 0%, #1570A6 100%);
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 16px rgba(0,0,0,0.2);
          transition: all 0.2s;
          color: #ffffff;
        }
        
        .accessibility-toggle:hover {
          transform: scale(1.05);
          box-shadow: 0 6px 20px rgba(0,0,0,0.25);
        }
        
        .accessibility-panel {
          position: absolute;
          bottom: 70px;
          left: 0;
          width: 300px;
          background: #ffffff;
          border-radius: 20px;
          box-shadow: 0 8px 32px rgba(0,0,0,0.15);
          overflow: hidden;
          animation: slideInLeft 0.3s ease-out;
        }
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .accessibility-header {
          background: linear-gradient(135deg, #111827 0%, #1F2937 100%);
          padding: 16px 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .accessibility-header h3 {
          color: #ffffff;
          font-size: 16px;
          font-weight: 700;
          margin: 0;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        
        .accessibility-close {
          background: none;
          border: none;
          cursor: pointer;
          color: rgba(255,255,255,0.7);
          transition: color 0.2s;
        }
        
        .accessibility-close:hover {
          color: #ffffff;
        }
        
        .accessibility-body {
          padding: 20px;
        }
        
        .accessibility-item {
          margin-bottom: 20px;
        }
        
        .accessibility-item:last-child {
          margin-bottom: 0;
        }
        
        .accessibility-item-label {
          font-size: 13px;
          font-weight: 600;
          color: #111827;
          margin-bottom: 10px;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        
        .font-controls {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        
        .font-btn {
          flex: 1;
          background: #F3F4F6;
          border: 1px solid #E5E7EB;
          border-radius: 10px;
          padding: 8px;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
        }
        
        .font-btn:hover {
          background: #EBF5FB;
          border-color: #1D8FD4;
        }
        
        .font-btn:disabled {
          opacity: 0.4;
          cursor: not-allowed;
        }
        
        .font-size-value {
          font-size: 14px;
          font-weight: 600;
          color: #1D8FD4;
          min-width: 50px;
          text-align: center;
        }
        
        .toggle-btn {
          width: 100%;
          background: #F3F4F6;
          border: 1px solid #E5E7EB;
          border-radius: 10px;
          padding: 10px;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        
        .toggle-btn.active {
          background: #EBF5FB;
          border-color: #1D8FD4;
          color: #1D8FD4;
        }
        
        .reset-btn {
          width: 100%;
          background: #F9FAFB;
          border: 1px solid #E5E7EB;
          border-radius: 10px;
          padding: 10px;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
          margin-top: 16px;
        }
        
        .reset-btn:hover {
          background: #F0F0F0;
        }
        
        @media (max-width: 768px) {
          .accessibility-panel {
            width: 280px;
          }
        }
      `}</style>

      <div className="accessibility-widget">
        <button className="accessibility-toggle" onClick={() => setIsOpen(!isOpen)}>
          <Accessibility size={24} />
        </button>
        
        {isOpen && (
          <div className="accessibility-panel">
            <div className="accessibility-header">
              <h3>
                <Accessibility size={18} />
                Accessibility Options
              </h3>
              <button className="accessibility-close" onClick={() => setIsOpen(false)}>
                <X size={18} />
              </button>
            </div>
            <div className="accessibility-body">
              <div className="accessibility-item">
                <div className="accessibility-item-label">
                  <Type size={16} />
                  Text Size
                </div>
                <div className="font-controls">
                  <button className="font-btn" onClick={decreaseFont} disabled={zoomLevel <= 70}>
                    <ZoomOut size={14} />
                    A-
                  </button>
                  <span className="font-size-value">{zoomLevel}%</span>
                  <button className="font-btn" onClick={increaseFont} disabled={zoomLevel >= 150}>
                    <ZoomIn size={14} />
                    A+
                  </button>
                </div>
              </div>
              
              <div className="accessibility-item">
                <div className="accessibility-item-label">
                  <Contrast size={16} />
                  High Contrast
                </div>
                <button 
                  className={`toggle-btn ${highContrast ? 'active' : ''}`}
                  onClick={() => setHighContrast(!highContrast)}
                >
                  <span>Enable High Contrast</span>
                  <span>{highContrast ? 'ON' : 'OFF'}</span>
                </button>
              </div>
              
              <div className="accessibility-item">
                <div className="accessibility-item-label">
                  <Volume2 size={16} />
                  Readable Font
                </div>
                <button 
                  className={`toggle-btn ${readableFont ? 'active' : ''}`}
                  onClick={() => setReadableFont(!readableFont)}
                >
                  <span>Dyslexia-Friendly Font</span>
                  <span>{readableFont ? 'ON' : 'OFF'}</span>
                </button>
              </div>
              
              <button className="reset-btn" onClick={resetAll}>
                Reset All Settings
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default AccessibilityWidget;