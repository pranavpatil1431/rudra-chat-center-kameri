import { createContext, useContext, useState, ReactNode } from 'react';

type Lang = 'en' | 'mr';

const translations: Record<string, { en: string; mr: string }> = {
  tagline: { en: 'The Taste of Hygiene', mr: 'स्वच्छतेची चव' },
  chaatMenu: { en: '🍽️ Chaat Menu', mr: '🍽️ चाट मेनू' },
  juicesMenu: { en: '🥤 Fresh Juices & Drinks', mr: '🥤 ताजे रस आणि पेये' },
  contact: { en: 'Contact Us', mr: 'संपर्क करा' },
  poweredBy: { en: 'Powered by Boutam Developers', mr: 'Powered by Boutam Developers' },
  allRights: { en: 'All Rights Reserved', mr: 'सर्व हक्क राखीव' },
  vegBadge: { en: '🌿 Pure Veg', mr: '🌿 शुद्ध शाकाहारी' },
};

interface LangContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LangContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>('en');
  const t = (key: string) => translations[key]?.[lang] ?? key;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLang = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLang must be within LanguageProvider');
  return ctx;
};
