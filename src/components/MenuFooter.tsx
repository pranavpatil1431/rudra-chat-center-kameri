import { useLang } from '@/contexts/LanguageContext';
import { Phone, Mail, MapPin } from 'lucide-react';

const MenuFooter = () => {
  const { t } = useLang();

  return (
    <footer className="relative mt-10">
      {/* Wave top */}
      <svg className="w-full text-foreground" viewBox="0 0 1440 50" fill="currentColor" preserveAspectRatio="none">
        <path d="M0,50 C360,0 1080,0 1440,50 L1440,50 L0,50 Z" />
      </svg>
      <div className="bg-foreground text-card px-4 pb-8 pt-4">
        <div className="max-w-lg mx-auto text-center space-y-5">
          <h3 className="font-display text-xl font-bold">{t('contact')}</h3>
          <div className="flex flex-col items-center gap-3 text-sm text-card/75">
            <a href="tel:9130867073" className="flex items-center gap-2.5 hover:text-card transition-colors group">
              <span className="p-2 rounded-full bg-card/10 group-hover:bg-primary/80 transition-colors">
                <Phone className="h-4 w-4" />
              </span>
              9130867073
            </a>
            <a href="mailto:mrpranavpatil11@gmail.com" className="flex items-center gap-2.5 hover:text-card transition-colors group">
              <span className="p-2 rounded-full bg-card/10 group-hover:bg-primary/80 transition-colors">
                <Mail className="h-4 w-4" />
              </span>
              mrpranavpatil11@gmail.com
            </a>
          </div>
          <div className="border-t border-card/15 pt-5 space-y-2">
            <p className="text-xs text-card/50 font-medium">{t('poweredBy')}</p>
            <div className="flex flex-col items-center gap-1.5 text-[11px] text-card/40">
              <a href="tel:9130867073" className="hover:text-card/70 transition-colors">📞 9130867073</a>
              <a href="mailto:mrpranavpatil11@gmail.com" className="hover:text-card/70 transition-colors">✉️ mrpranavpatil11@gmail.com</a>
            </div>
            <p className="text-[10px] text-card/30">© 2026 {t('allRights')}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MenuFooter;
