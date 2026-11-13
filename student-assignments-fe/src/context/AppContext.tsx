'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import vi from '@/locales/vi.json';
import en from '@/locales/en.json';

export type Language = 'vi' | 'en';
export type Dictionary = typeof vi;

const DICTIONARIES: Record<Language, Dictionary> = {
  vi,
  en,
};

interface AppContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
  toggleLang: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>('vi');
  const toggleLang = () => setLang((prev) => (prev === 'vi' ? 'en' : 'vi'));

  useEffect(() => {
    const root = document.documentElement;
    root.lang = lang;
  }, [lang]);

  const translate = (key: string) => {
    const dict = DICTIONARIES[lang];
    const keys = key.split('.');
    let value: any = dict;

    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return key;
      }
    }
    return typeof value === 'string' ? value : key;
  };

  return (
    <AppContext.Provider
      value={{
        lang,
        setLang,
        t: translate,
        toggleLang,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}
