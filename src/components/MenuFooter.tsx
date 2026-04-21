import { useLang } from '@/contexts/LanguageContext';
import { Phone } from 'lucide-react';

const MenuFooter = () => {
  const { t } = useLang();
  const ownerNumber = '8722718365';
  const devName = 'Pranav Patil';
  const devNumber = '9130867073';
  const devEmail = 'mrpranavpatil11@gmail.com';
  const whatsappBase = 'https://wa.me/918722718365?text=';
  const inquiryLink = `${whatsappBase}${encodeURIComponent('Hi! I want to make an inquiry at Rudraa Chat Center.')}`;
  const partyOrderLink = `${whatsappBase}${encodeURIComponent('Hi! I want to place a party order at Rudraa Chat Center.')}`;

  return (
    <footer className="relative mt-10">
      {/* Wave top */}
      <svg className="w-full text-foreground" viewBox="0 0 1440 50" fill="currentColor" preserveAspectRatio="none">
        <path d="M0,50 C360,0 1080,0 1440,50 L1440,50 L0,50 Z" />
      </svg>
      <div className="bg-foreground text-card px-4 pb-8 pt-4">
        <div className="max-w-lg mx-auto text-center space-y-5">
          <h3 className="font-display text-xl font-bold">{t('contact')}</h3>
          <p className="text-sm text-card/80">Owner: Yogesh Chougule</p>
          <div className="flex flex-col items-center gap-3 text-sm text-card/75">
            <a href={`tel:${ownerNumber}`} className="flex items-center gap-2.5 hover:text-card transition-colors group">
              <span className="p-2 rounded-full bg-card/10 group-hover:bg-primary/80 transition-colors">
                <Phone className="h-4 w-4" />
              </span>
              {ownerNumber}
            </a>
          </div>
          <div className="flex flex-col gap-2 pt-1">
            <a
              href={inquiryLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold rounded-lg bg-card/10 px-4 py-2 hover:bg-card/20 transition-colors"
            >
              WhatsApp Inquiry
            </a>
            <a
              href={partyOrderLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold rounded-lg bg-card/10 px-4 py-2 hover:bg-card/20 transition-colors"
            >
              WhatsApp Party Order
            </a>
          </div>
          <div className="border-t border-card/15 pt-5 space-y-2">
            <p className="text-xs text-card/50 font-medium">{t('poweredBy')}</p>
            <div className="flex flex-col items-center gap-1.5 text-[11px] text-card/40">
              <span>{devName}</span>
              <a href={`tel:${devNumber}`} className="hover:text-card/70 transition-colors">Phone: {devNumber}</a>
              <a href={`mailto:${devEmail}`} className="hover:text-card/70 transition-colors">Email: {devEmail}</a>
            </div>
            <p className="text-[10px] text-card/30">© 2026 {t('allRights')}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MenuFooter;
