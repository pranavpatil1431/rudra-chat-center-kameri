import { LanguageProvider, useLang } from '@/contexts/LanguageContext';
import MenuHeader from '@/components/MenuHeader';
import MenuCard from '@/components/MenuCard';
import MenuFooter from '@/components/MenuFooter';

import SectionHeader from '@/components/SectionHeader';
import { chaatItems, juiceItems } from '@/data/menuData';

const MenuContent = () => {
  const { t } = useLang();

  return (
    <div className="min-h-screen bg-background">
      <MenuHeader />

      <main className="max-w-2xl mx-auto px-4 pb-4">
        {/* Chaat Section */}
        <SectionHeader titleKey="chaatMenu" variant="warm" />
        <div className="grid grid-cols-2 gap-3 md:gap-4">
          {chaatItems.map((item, i) => (
            <MenuCard key={item.id} item={item} index={i} />
          ))}
        </div>

        {/* Juices Section */}
        <SectionHeader titleKey="juicesMenu" variant="cool" />
        <div className="grid grid-cols-2 gap-3 md:gap-4">
          {juiceItems.map((item, i) => (
            <MenuCard key={item.id} item={item} index={i} />
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
