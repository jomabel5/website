import React, { useEffect } from 'react';
import { languages } from './LanguageContext';

declare global {
  interface Window {
    google: any;
    googleTranslateElementInit: () => void;
  }
}

// Mount this ONCE, near the top of the app (see App.tsx). It injects
// Google's translate engine and a hidden control element that
// LanguageContext's setLanguage() drives programmatically.
const GoogleTranslate = () => {
  useEffect(() => {
    if (document.getElementById('google-translate-script')) return;

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'en',
          includedLanguages: languages
            .map((l) => l.code)
            .filter((c) => c !== 'en')
            .join(','),
          autoDisplay: false,
        },
        'google_translate_element'
      );
    };

    const script = document.createElement('script');
    script.id = 'google-translate-script';
    script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <>
      {/* Hide Google's own UI chrome — we drive it with our own dropdown instead */}
      <style>{`
        #google_translate_element { display: none !important; }
        .goog-te-banner-frame { display: none !important; }
        .goog-te-gadget { height: 0; overflow: hidden; }
        body { top: 0 !important; }
      `}</style>
      <div id="google_translate_element" className="notranslate" />
    </>
  );
};

export default GoogleTranslate;