import { LanguageProvider, useLang } from '@/contexts/LanguageContext';
import MenuHeader from '@/components/MenuHeader';
import MenuCard from '@/components/MenuCard';
import MenuFooter from '@/components/MenuFooter';
import WhatsAppButton from '@/components/WhatsAppButton';
import { menuItems } from '@/data/menuData';

const MenuContent = () => {
  const { t } = useLang();

  return (
    <div className="min-h-screen bg-background">
      <MenuHeader />

      <main className="max-w-2xl mx-auto px-4 pb-8 -mt-4">
        <h2 className="text-xl font-bold text-foreground mb-4">{t('menu')}</h2>
        <div className="grid grid-cols-2 gap-3 md:gap-4">
          {menuItems.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>
      </main>

      <MenuFooter />
      <WhatsAppButton />
    </div>
  );
};

const Index = () => (
  <LanguageProvider>
    <MenuContent />
  </LanguageProvider>
);

export default Index;
