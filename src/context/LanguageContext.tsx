import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface Language {
  code: string; // Google Translate language code
  name: string;
  flag: string;
}

export const languages: Language[] = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'yo', name: 'Yorùbá', flag: '🇳🇬' },
  { code: 'ig', name: 'Igbo', flag: '🇳🇬' },
  { code: 'ha', name: 'Hausa', flag: '🇳🇬' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'zh-CN', name: '中文', flag: '🇨🇳' },
  { code: 'nl', name: 'Nederlands', flag: '🇳🇱' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
];

interface LanguageContextValue {
  language: string;
  setLanguage: (code: string) => void;
  languages: Language[];
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

const COOKIE_NAME = 'googtrans';

function readLanguageFromCookie(): string {
  const match = document.cookie.match(/googtrans=\/en\/([a-zA-Z-]+)/);
  return match ? match[1] : 'en';
}

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState('en');

  useEffect(() => {
    setLanguageState(readLanguageFromCookie());
  }, []);

  // Switches the live page language via the hidden Google Translate <select>.
  // Falls back to setting the googtrans cookie + reload if the widget
  // hasn't finished loading yet (e.g. very first click after page load).
  const setLanguage = (code: string) => {
    setLanguageState(code);

    if (code === 'en') {
      document.cookie = `${COOKIE_NAME}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
      document.cookie = `${COOKIE_NAME}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.${window.location.hostname}`;
      window.location.reload();
      return;
    }

    const select = document.querySelector<HTMLSelectElement>('.goog-te-combo');
    if (select) {
      select.value = code;
      select.dispatchEvent(new Event('change'));
    } else {
      document.cookie = `${COOKIE_NAME}=/en/${code}; path=/;`;
      document.cookie = `${COOKIE_NAME}=/en/${code}; path=/; domain=.${window.location.hostname}`;
      window.location.reload();
    }
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, languages }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextValue => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used inside a <LanguageProvider>');
  }
  return context;
};