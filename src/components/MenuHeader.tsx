import { useLang } from '@/contexts/LanguageContext';
import heroChaat from '@/assets/hero-chaat.jpg';

const MenuHeader = () => {
  const { lang, setLang, t } = useLang();

  return (
    <header className="relative overflow-hidden">
      {/* Hero image with overlay */}
      <div className="relative h-56 md:h-64">
        <img
          src={heroChaat}
          alt="Rudraa Chat Center"
          width={1280}
          height={720}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/50 to-foreground/80" />

        {/* Language toggle */}
        <div className="absolute top-4 right-4 z-10 flex rounded-full border border-card/30 overflow-hidden text-xs font-semibold backdrop-blur-md">
          <button
            onClick={() => setLang('en')}
            className={`px-4 py-2 transition-all ${lang === 'en' ? 'bg-card text-foreground' : 'text-card/90 hover:text-card'}`}
          >
            English
          </button>
          <button
            onClick={() => setLang('mr')}
            className={`px-4 py-2 transition-all ${lang === 'mr' ? 'bg-card text-foreground' : 'text-card/90 hover:text-card'}`}
          >
            मराठी
          </button>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-accent bg-accent/20 backdrop-blur-sm px-4 py-1.5 rounded-full mb-3 border border-accent/30">
            {t('vegBadge')}
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-black text-card tracking-tight drop-shadow-lg">
            Rudraa Chat Center
          </h1>
          <p className="text-card/70 text-sm md:text-base mt-2 italic font-light tracking-wide">
            "{t('tagline')}"
          </p>
        </div>
      </div>

      {/* Wave separator */}
      <svg className="w-full -mt-1 text-background" viewBox="0 0 1440 50" fill="currentColor" preserveAspectRatio="none">
        <path d="M0,0 C360,50 1080,50 1440,0 L1440,50 L0,50 Z" />
      </svg>
    </header>
  );
};

export default MenuHeader;
