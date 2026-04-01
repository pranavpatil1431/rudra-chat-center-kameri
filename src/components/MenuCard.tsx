import { useLang } from '@/contexts/LanguageContext';
import type { MenuItem } from '@/data/menuData';

interface MenuCardProps {
  item: MenuItem;
}

const MenuCard = ({ item }: MenuCardProps) => {
  const { lang } = useLang();
  const name = lang === 'en' ? item.nameEn : item.nameMr;
  const desc = lang === 'en' ? item.descEn : item.descMr;
  const tag = item.tag ? (lang === 'en' ? item.tag.en : item.tag.mr) : null;

  const whatsappMsg = encodeURIComponent(`Hi! I'd like to order ${item.nameEn} (₹${item.price}) from Rudraa Chat Center.`);
  const whatsappLink = `https://wa.me/919130867073?text=${whatsappMsg}`;

  return (
    <div className="group bg-card rounded-xl shadow-sm hover:shadow-lg border border-border overflow-hidden transition-all duration-300 hover:-translate-y-1">
      <div className="relative overflow-hidden">
        <img
          src={item.image}
          alt={name}
          loading="lazy"
          width={512}
          height={512}
          className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {tag && (
          <span className="absolute top-2 left-2 bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
            {tag}
          </span>
        )}
        <div className="absolute bottom-2 right-2 bg-card/90 backdrop-blur-sm text-foreground font-bold text-lg px-3 py-0.5 rounded-lg">
          ₹{item.price}
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-foreground text-base">{name}</h3>
        <p className="text-muted-foreground text-xs mt-1 leading-relaxed line-clamp-2">{desc}</p>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-flex items-center gap-1.5 bg-accent text-accent-foreground text-xs font-semibold px-4 py-2 rounded-full hover:opacity-90 transition-opacity"
        >
          <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.613.613l4.458-1.495A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.24 0-4.314-.731-5.992-1.967l-.418-.312-2.649.888.888-2.649-.312-.418A9.935 9.935 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"/></svg>
          {lang === 'en' ? 'Order' : 'ऑर्डर'}
        </a>
      </div>
    </div>
  );
};

export default MenuCard;
