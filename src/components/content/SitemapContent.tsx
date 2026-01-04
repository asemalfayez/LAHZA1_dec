import { useLanguage } from '@/hooks/useLanguage';
import { ContentSection, SectionTitle, InfoCard } from '@/components/ContentSection';

export const SitemapContent = () => {
  const { t } = useLanguage();

  const publicRoutes = [
    'route.home',
    'route.about',
    'route.contact',
    'route.faq',
    'route.terms',
    'route.privacy',
    'route.login',
    'route.register',
    'route.forgot',
  ];

  const protectedRoutes = [
    'route.dashboard',
    'route.profile',
    'route.bookings',
    'route.farms.details',
    'route.checkout',
    'route.admin',
  ];

  return (
    <ContentSection id="sitemap">
      <SectionTitle icon="🗺️" titleKey="sitemap.title" descKey="sitemap.desc" />

      <div className="grid md:grid-cols-2 gap-6">
        {/* Public Routes */}
        <InfoCard>
          <h4 className="font-display font-semibold text-lg mb-4 text-primary">
            {t('sitemap.public')}
          </h4>
          <ul className="space-y-2">
            {publicRoutes.map((route) => (
              <li
                key={route}
                className="flex items-center gap-2 text-foreground/80 font-mono text-sm"
              >
                <span className="w-2 h-2 rounded-full bg-green-500" />
                {t(route)}
              </li>
            ))}
          </ul>
        </InfoCard>

        {/* Protected Routes */}
        <InfoCard>
          <h4 className="font-display font-semibold text-lg mb-4 text-primary">
            {t('sitemap.protected')}
          </h4>
          <ul className="space-y-2">
            {protectedRoutes.map((route) => (
              <li
                key={route}
                className="flex items-center gap-2 text-foreground/80 font-mono text-sm"
              >
                <span className="w-2 h-2 rounded-full bg-amber-500" />
                {t(route)}
              </li>
            ))}
          </ul>
        </InfoCard>
      </div>
    </ContentSection>
  );
};
