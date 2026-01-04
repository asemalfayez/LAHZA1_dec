import { useLanguage } from '@/hooks/useLanguage';
import {
  ContentSection,
  SectionTitle,
  SubsectionTitle,
  InfoCard,
  FeatureList,
  ScreenshotPlaceholder,
  Screenshot,
} from '@/components/ContentSection';

export const GuestContent = () => {
  const { t } = useLanguage();

  return (
    <>
      {/* Guest Introduction */}
      <ContentSection id="guest">
        <SectionTitle icon="👤" titleKey="guest.title" />
        <InfoCard>
          <p>{t('guest.intro')}</p>
        </InfoCard>
      </ContentSection>

      {/* Home Page */}
      <ContentSection id="guest-home">
        <SubsectionTitle icon="🏠" titleKey="guest.home.title" descKey="guest.home.desc" />
        <InfoCard>
          <h4 className="font-medium mb-3">{t('guest.home.features')}</h4>
          <FeatureList
            items={[
              'guest.home.hero',
              'guest.home.curated',
              'guest.home.safe',
              'guest.home.nature',
              'guest.home.cta',
            ]}
          />
        </InfoCard>
        <Screenshot src="/gast_home.png" alt="Home Page Hero Section" />
      </ContentSection>

      {/* About Us */}
      <ContentSection id="guest-about">
        <SubsectionTitle icon="ℹ️" titleKey="guest.about.title" descKey="guest.about.desc" />
        <InfoCard>
          <FeatureList
            items={[
              'guest.about.story',
              'guest.about.achievements',
              'guest.about.values',
              'guest.about.team',
            ]}
          />
        </InfoCard>
        <Screenshot src="/gast_about.png" alt="About Us Page" />
      </ContentSection>

      {/* Contact Us */}
      <ContentSection id="guest-contact">
        <SubsectionTitle icon="📬" titleKey="guest.contact.title" descKey="guest.contact.desc" />
        <InfoCard>
          <FeatureList
            items={[
              'guest.contact.phone',
              'guest.contact.whatsapp',
              'guest.contact.email',
              'guest.contact.address',
              'guest.contact.hours',
              'guest.contact.form',
            ]}
          />
        </InfoCard>
        <Screenshot src="/gast_contat.png" alt="Contact Page" />
      </ContentSection>

      {/* FAQ */}
      <ContentSection id="guest-faq">
        <SubsectionTitle icon="❓" titleKey="guest.faq.title" descKey="guest.faq.desc" />
        <InfoCard>
          <FeatureList
            items={[
              'guest.faq.booking',
              'guest.faq.farms',
              'guest.faq.policies',
              'guest.faq.support',
            ]}
          />
        </InfoCard>
        <Screenshot src="/gast_fq.png" alt="FAQ Page" />
      </ContentSection>

      {/* Terms */}
      <ContentSection id="guest-terms">
        <SubsectionTitle icon="📜" titleKey="guest.terms.title" descKey="guest.terms.desc" />
        <InfoCard>
          <FeatureList
            items={[
              'guest.terms.general',
              'guest.terms.booking',
              'guest.terms.user',
            ]}
          />
        </InfoCard>
        <Screenshot src="/gast_tarm.png" alt="Terms & Conditions" />
      </ContentSection>

      {/* Privacy */}
      <ContentSection id="guest-privacy">
        <SubsectionTitle icon="🔒" titleKey="guest.privacy.title" descKey="guest.privacy.desc" />
        <InfoCard>
          <FeatureList
            items={[
              'guest.privacy.collect',
              'guest.privacy.usage',
              'guest.privacy.security',
            ]}
          />
        </InfoCard>
        <Screenshot src="/gast_polse.png" alt="Privacy Policy" />
      </ContentSection>

      {/* Loyalty */}
      <ContentSection id="guest-loyalty">
        <SubsectionTitle icon="⭐" titleKey="guest.loyalty.title" descKey="guest.loyalty.desc" />
        <InfoCard variant="note">
          <p>{t('guest.loyalty.note')}</p>
        </InfoCard>
      </ContentSection>

      {/* Login CTA */}
      <ContentSection id="guest-cta">
        <SubsectionTitle icon="🚀" titleKey="guest.cta.title" descKey="guest.cta.desc" />
        <InfoCard variant="tip">
          <FeatureList
            items={[
              'guest.cta.login',
              'guest.cta.register',
              'guest.cta.forgot',
            ]}
          />
        </InfoCard>
        <ScreenshotPlaceholder label="Screenshot: Login Page" />
      </ContentSection>
    </>
  );
};
