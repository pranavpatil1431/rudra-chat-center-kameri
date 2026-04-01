import { useLang } from '@/contexts/LanguageContext';
import { Phone, Mail } from 'lucide-react';

const MenuFooter = () => {
  const { t } = useLang();

  return (
    <footer className="bg-foreground text-background py-8 px-4 mt-8">
      <div className="max-w-lg mx-auto text-center space-y-4">
        <h3 className="font-bold text-lg">{t('contact')}</h3>
        <div className="flex flex-col items-center gap-2 text-sm text-background/80">
          <a href="tel:9130867073" className="flex items-center gap-2 hover:text-background transition-colors">
            <Phone className="h-4 w-4" /> 9130867073
          </a>
          <a href="mailto:mrpranavpatil11@gmail.com" className="flex items-center gap-2 hover:text-background transition-colors">
            <Mail className="h-4 w-4" /> mrpranavpatil11@gmail.com
          </a>
        </div>
        <div className="border-t border-background/20 pt-4 space-y-1">
          <p className="text-xs text-background/60">{t('poweredBy')}</p>
          <p className="text-[10px] text-background/40">© 2026 {t('allRights')}</p>
        </div>
      </div>
    </footer>
  );
};

export default MenuFooter;
