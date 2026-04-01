import { useLang } from '@/contexts/LanguageContext';
import type { MenuItem } from '@/data/menuData';

const MenuCard = ({ item, index }: { item: MenuItem; index: number }) => {
  const { lang } = useLang();
  const name = lang === 'en' ? item.nameEn : item.nameMr;
  const desc = lang === 'en' ? item.descEn : item.descMr;
  const tag = item.tag ? (lang === 'en' ? item.tag.en : item.tag.mr) : null;

  const isJuice = item.category === 'juice';

  return (
    <div
      className="animate-fade-in-up group bg-card rounded-2xl shadow-sm hover:shadow-xl border border-border/60 overflow-hidden transition-all duration-300 hover:-translate-y-1.5"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div className="relative overflow-hidden">
        <img
          src={item.image}
          alt={name}
          loading="lazy"
          width={512}
          height={512}
          className="w-full h-40 md:h-48 object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        {tag && (
          <span className={`absolute top-2.5 left-2.5 text-[10px] font-bold px-2.5 py-1 rounded-full backdrop-blur-sm shadow-sm ${isJuice ? 'bg-[hsl(var(--juice))]/90 text-[hsl(var(--juice-foreground))]' : 'bg-primary/90 text-primary-foreground'}`}>
            {tag}
          </span>
        )}
        <div className="absolute bottom-2.5 right-2.5 bg-card/95 backdrop-blur-sm text-foreground font-extrabold text-lg px-3 py-1 rounded-xl shadow-md">
          ₹{item.price}
        </div>
      </div>
      <div className="p-3.5">
        <h3 className="font-bold text-foreground text-sm md:text-base leading-tight">{name}</h3>
        <p className="text-muted-foreground text-[11px] md:text-xs mt-1 leading-relaxed line-clamp-2">{desc}</p>
      </div>
    </div>
  );
};

export default MenuCard;
