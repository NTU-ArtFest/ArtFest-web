// src/contexts/LanguageContext.tsx
'use client';
import React, { createContext, useContext, useState } from 'react';
import zh from './zh.json';
import en from './en.json';

type Dictionary = Record<string, string>;
const dictionaries: Record<'zh' | 'en', Dictionary> = { zh, en };

const LanguageContext = createContext<{
  lang: 'zh' | 'en';
  setLang: (lang: 'zh' | 'en') => void;
  t: (key: string) => string;
}>({
  lang: 'zh',
  setLang: () => {},
  t: (key: string) => key
});

export const LanguageProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const [lang, setLang] = useState<'zh' | 'en'>('zh');
  const t = (key: string) => dictionaries[lang][key] || key;
  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
