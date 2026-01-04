import { useLanguage } from '@/hooks/useLanguage';

interface ContentSectionProps {
  id: string;
  children: React.ReactNode;
}

export const ContentSection = ({ id, children }: ContentSectionProps) => {
  return (
    <section id={id} className="scroll-mt-24 mb-12 animate-fade-in">
      {children}
    </section>
  );
};

interface SectionTitleProps {
  icon: string;
  titleKey: string;
  descKey?: string;
}

export const SectionTitle = ({ icon, titleKey, descKey }: SectionTitleProps) => {
  const { t } = useLanguage();

  return (
    <div className="mb-6">
      <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground flex items-center gap-3">
        <span className="text-3xl">{icon}</span>
        <span className="gold-text-gradient">{t(titleKey)}</span>
      </h2>
      {descKey && (
        <p className="mt-2 text-muted-foreground text-base ltr:ml-12 rtl:mr-12">
          {t(descKey)}
        </p>
      )}
    </div>
  );
};

interface SubsectionTitleProps {
  icon: string;
  titleKey: string;
  descKey?: string;
}

export const SubsectionTitle = ({ icon, titleKey, descKey }: SubsectionTitleProps) => {
  const { t } = useLanguage();

  return (
    <div className="mb-4">
      <h3 className="text-xl font-display font-medium text-foreground flex items-center gap-2">
        <span className="text-xl">{icon}</span>
        {t(titleKey)}
      </h3>
      {descKey && (
        <p className="mt-1 text-muted-foreground text-sm ltr:ml-8 rtl:mr-8">
          {t(descKey)}
        </p>
      )}
    </div>
  );
};

interface InfoCardProps {
  children: React.ReactNode;
  variant?: 'default' | 'tip' | 'note' | 'future' | 'tbd';
}

export const InfoCard = ({ children, variant = 'default' }: InfoCardProps) => {
  const { t } = useLanguage();

  const variantStyles = {
    default: 'border-border bg-card',
    tip: 'border-primary/30 bg-primary/5',
    note: 'border-blue-500/30 bg-blue-500/5',
    future: 'border-purple-500/30 bg-purple-500/5',
    tbd: 'border-orange-500/30 bg-orange-500/5',
  };

  const variantLabels = {
    default: null,
    tip: t('common.tip'),
    note: t('common.note'),
    future: t('common.future'),
    tbd: t('common.tbd'),
  };

  return (
    <div className={`rounded-xl border p-4 mb-4 ${variantStyles[variant]}`}>
      {variantLabels[variant] && (
        <div className="text-sm font-medium mb-2 text-foreground">
          {variantLabels[variant]}
        </div>
      )}
      <div className="text-foreground/90">{children}</div>
    </div>
  );
};

interface FeatureListProps {
  items: string[];
}

export const FeatureList = ({ items }: FeatureListProps) => {
  const { t } = useLanguage();

  return (
    <ul className="space-y-2 mb-4">
      {items.map((itemKey, index) => (
        <li key={index} className="flex items-start gap-3 text-foreground/80">
          <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
          <span>{t(itemKey)}</span>
        </li>
      ))}
    </ul>
  );
};

interface ScreenshotPlaceholderProps {
  label?: string;
}

export const ScreenshotPlaceholder = ({ label }: ScreenshotPlaceholderProps) => {
  const { t } = useLanguage();

  return (
    <div className="border-2 border-dashed border-border rounded-xl p-8 text-center bg-muted/20 mb-4">
      <div className="text-muted-foreground text-sm">
        📸 {label || t('common.screenshot')}
      </div>
    </div>
  );
};

interface ScreenshotProps {
  src: string;
  alt: string;
}

export const Screenshot = ({ src, alt }: ScreenshotProps) => {
  return (
    <div className="rounded-xl border border-border overflow-hidden shadow-sm mb-4">
      <img src={src} alt={alt} className="w-full h-auto" />
    </div>
  );
};
