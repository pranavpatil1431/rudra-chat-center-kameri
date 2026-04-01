import { createContext, useContext, useState, ReactNode } from 'react';

type Lang = 'en' | 'mr';

interface Translations {
  [key: string]: { en: string; mr: string };
}

const translations: Translations = {
  tagline: { en: 'The Taste of Hygiene', mr: 'स्वच्छतेची चव' },
  menu: { en: 'Our Menu', mr: 'आमचा मेनू' },
  contact: { en: 'Contact Us', mr: 'संपर्क करा' },
  call: { en: 'Call Us', mr: 'कॉल करा' },
  email: { en: 'Email', mr: 'ईमेल' },
  poweredBy: { en: 'Powered by Pranav Tech Solutions', mr: 'Powered by Pranav Tech Solutions' },
  allRights: { en: 'All Rights Reserved', mr: 'सर्व हक्क राखीव' },
  orderNow: { en: 'Order on WhatsApp', mr: 'WhatsApp वर ऑर्डर करा' },
  vegBadge: { en: 'Pure Veg', mr: 'शुद्ध शाकाहारी' },
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
