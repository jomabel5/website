import React, { useState, useEffect } from 'react';

const TextToSpeech = () => {
  const [speaking, setSpeaking] = useState(false);
  const [supported, setSupported] = useState(false);

  useEffect(() => {
    setSupported('speechSynthesis' in window);
    // Stop speech when user navigates away
    return () => window.speechSynthesis.cancel();
  }, []);

  const getPageText = () => {
    // Prefer #main-content (used in App.jsx), fall back to <main> if present, then body.
    const container =
      document.querySelector('#main-content') ||
      document.querySelector('main') ||
      document.body;

    // Work on a detached clone so we never touch the real page.
    const clone = container.cloneNode(true) as HTMLElement;

    // Navbar is rendered per-page (not once globally), so excluding it means
    // stripping it out of the clone rather than relying on a container boundary.
    // Same for the footer, cookie banner, and the floating accessibility widget —
    // none of that is "page content" a reader should hear.
    const selectorsToStrip = [
      'nav',
      'header',
      'footer',
      'script',
      'style',
      '.nb-root',      // Navbar wrapper
      '.cookie-overlay', // Cookie consent banner
      '.accessibility-widget', // Floating accessibility widget
      '[aria-hidden="true"]',
    ];
    selectorsToStrip.forEach((sel) => {
      clone.querySelectorAll(sel).forEach((el) => el.remove());
    });

    // textContent (not innerText) because innerText needs the element to be
    // rendered/visible, which a detached clone isn't.
    return (clone.textContent || '').replace(/\s+/g, ' ').trim();
  };

  const handlePlay = () => {
    if (speaking) {
      window.speechSynthesis.cancel();
      setSpeaking(false);
      return;
    }
    const utterance = new SpeechSynthesisUtterance(getPageText());
    utterance.rate = 0.95;
    utterance.pitch = 1;
    utterance.lang = 'en-US';
    utterance.onend = () => setSpeaking(false);
    window.speechSynthesis.speak(utterance);
    setSpeaking(true);
  };

  if (!supported) return null;

  return (
    <button onClick={handlePlay} title={speaking ? 'Stop reading' : 'Read page aloud'}
      style={{
        display: 'flex', alignItems: 'center', gap: '6px',
        backgroundColor: speaking ? 'var(--color-primary-dark)' : 'var(--color-primary-light)',
        color: speaking ? '#ffffff' : 'var(--color-primary-dark)',
        border: '1px solid var(--color-primary-light)',
        borderRadius: '999px', padding: '6px 14px',
        fontSize: '12px', fontWeight: '600', cursor: 'pointer',
        fontFamily: 'inherit', transition: 'var(--transition)',
      }}>
      {speaking ? (
        <>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
            <rect x="6" y="4" width="4" height="16" rx="1"/>
            <rect x="14" y="4" width="4" height="16" rx="1"/>
          </svg>
          Stop
        </>
      ) : (
        <>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
            <path d="M5 3l14 9-14 9V3z"/>
          </svg>
          Listen
        </>
      )}
    </button>
  );
};

export default TextToSpeech;