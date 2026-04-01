import { useLang } from '@/contexts/LanguageContext';
import { Leaf } from 'lucide-react';

const MenuHeader = () => {
  const { lang, setLang, t } = useLang();

  return (
    <header className="relative overflow-hidden">
      {/* Gradient background */}
      <div className="bg-gradient-to-br from-primary to-secondary py-8 px-4 text-center">
        {/* Language toggle */}
        <div className="absolute top-4 right-4 flex rounded-full bg-primary-foreground/20 backdrop-blur-sm overflow-hidden text-sm font-medium">
          <button
            onClick={() => setLang('en')}
            className={`px-4 py-1.5 transition-all ${lang === 'en' ? 'bg-primary-foreground text-primary font-semibold' : 'text-primary-foreground'}`}
          >
            EN
          </button>
          <button
            onClick={() => setLang('mr')}
            className={`px-4 py-1.5 transition-all ${lang === 'mr' ? 'bg-primary-foreground text-primary font-semibold' : 'text-primary-foreground'}`}
          >
            मराठी
          </button>
        </div>

        <div className="flex items-center justify-center gap-2 mb-2">
          <Leaf className="h-5 w-5 text-accent" />
          <span className="text-xs font-semibold tracking-widest uppercase text-accent bg-accent/20 px-3 py-1 rounded-full">
            {t('vegBadge')}
          </span>
        </div>

        <h1 className="text-3xl md:text-4xl font-extrabold text-primary-foreground tracking-tight">
          Rudraa Chat Center
        </h1>
        <p className="text-primary-foreground/80 text-sm md:text-base mt-1 italic font-light">
          "{t('tagline')}"
        </p>
      </div>

      {/* Curved bottom */}
      <svg className="w-full -mt-1" viewBox="0 0 1440 40" fill="none">
        <path d="M0 0H1440V10C1440 10 1200 40 720 40C240 40 0 10 0 10V0Z" fill="hsl(var(--secondary))" />
      </svg>
    </header>
  );
};

export default MenuHeader;
