import { useLang } from '@/contexts/LanguageContext';

interface SectionHeaderProps {
  titleKey: string;
  variant?: 'warm' | 'cool';
}

const SectionHeader = ({ titleKey, variant = 'warm' }: SectionHeaderProps) => {
  const { t } = useLang();

  return (
    <div className="flex items-center gap-3 mb-5 mt-8">
      <div className={`h-8 w-1.5 rounded-full ${variant === 'warm' ? 'bg-gradient-to-b from-primary to-secondary' : 'bg-gradient-to-b from-[hsl(var(--juice))] to-accent'}`} />
      <h2 className={`text-xl md:text-2xl font-extrabold ${variant === 'warm' ? 'text-gradient-warm' : 'text-gradient-cool'}`}>
        {t(titleKey)}
      </h2>
    </div>
  );
};

export default SectionHeader;
