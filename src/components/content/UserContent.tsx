import { useLanguage } from '@/hooks/useLanguage';
import {
  ContentSection,
  SectionTitle,
  SubsectionTitle,
  InfoCard,
  FeatureList,
  Screenshot,
} from '@/components/ContentSection';

export const UserContent = () => {
  const { t } = useLanguage();

  return (
    <>
      {/* User Dashboard Introduction */}
      <ContentSection id="user">
        <SectionTitle icon="👥" titleKey="user.title" />
        <InfoCard>
          <p>{t('user.intro')}</p>
        </InfoCard>

        <SubsectionTitle icon="📊" titleKey="user.dashboard.overview" />
        <InfoCard>
          <FeatureList
            items={[
              'user.dashboard.stats',
              'user.dashboard.recent',
              'user.dashboard.actions',
            ]}
          />
        </InfoCard>
        <Screenshot src="/user_dash.png" alt="User Dashboard" />
      </ContentSection>

      {/* Profile & Loyalty */}
      <ContentSection id="user-profile">
        <SubsectionTitle icon="👤" titleKey="user.profile.title" descKey="user.profile.desc" />
        <InfoCard>
          <FeatureList
            items={[
              'user.profile.info',
              'user.profile.loyalty',
              'user.profile.settings',
            ]}
          />
        </InfoCard>
        <InfoCard variant="tbd">
          <p>{t('user.profile.loyalty.tbd')}</p>
        </InfoCard>

        <Screenshot src="/user_prfale.png" alt="User Profile Details" />
      </ContentSection>

      {/* My Bookings */}
      <ContentSection id="user-bookings">
        <SubsectionTitle icon="📅" titleKey="user.bookings.title" descKey="user.bookings.desc" />
        <InfoCard>
          <FeatureList
            items={[
              'user.bookings.current',
              'user.bookings.past',
              'user.bookings.details',
            ]}
          />
        </InfoCard>
        <InfoCard variant="tbd">
          <p>{t('user.bookings.status')}</p>
        </InfoCard>
        <Screenshot src="/user_MyBooking.png" alt="My Bookings Page" />
      </ContentSection>

      {/* Browse & Farm Details */}
      <ContentSection id="user-farm">
        <SubsectionTitle icon="🏡" titleKey="user.farm.title" descKey="user.farm.desc" />
        <InfoCard>
          <FeatureList
            items={[
              'user.farm.search',
              'user.farm.images',
              'user.farm.info',
              'user.farm.location',
              'user.farm.reviews',
            ]}
          />
        </InfoCard>
        <Screenshot src="/user_brose.png" alt="Browse Farms Page" />
        <Screenshot src="/user_farm_dital.png" alt="Farm Details Page" />
      </ContentSection>

      {/* Checkout */}
      <ContentSection id="user-checkout">
        <SubsectionTitle icon="✅" titleKey="user.checkout.title" descKey="user.checkout.desc" />
        <InfoCard>
          <FeatureList
            items={[
              'user.checkout.date',
              'user.checkout.review',
              'user.checkout.confirm',
            ]}
          />
        </InfoCard>
        <InfoCard variant="future">
          <p>{t('user.checkout.payment')}</p>
        </InfoCard>
        <Screenshot src="/user_confarmFarm.png" alt="Checkout/Confirmation Page" />
      </ContentSection>

      {/* Future Features */}
      <ContentSection id="user-future">
        <SubsectionTitle icon="🔮" titleKey="user.future.title" />
        <InfoCard variant="future">
          <FeatureList
            items={[
              'user.future.notifications',
              'user.future.love',
              'user.future.reviews',
            ]}
          />
        </InfoCard>
      </ContentSection>
    </>
  );
};
