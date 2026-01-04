import { useLanguage } from '@/hooks/useLanguage';
import {
  ContentSection,
  SectionTitle,
  SubsectionTitle,
  InfoCard,
  FeatureList,
  Screenshot,
} from '@/components/ContentSection';

export const OwnerContent = () => {
  const { t } = useLanguage();

  return (
    <>
      {/* Owner Dashboard Introduction */}
      <ContentSection id="owner">
        <SectionTitle icon="🏠" titleKey="owner.title" />
        <InfoCard>
          <p>{t('owner.intro')}</p>
        </InfoCard>
      </ContentSection>

      {/* Dashboard Overview */}
      <ContentSection id="owner-dashboard">
        <SubsectionTitle icon="📊" titleKey="owner.dashboard.title" descKey="owner.dashboard.desc" />
        <InfoCard>
          <FeatureList
            items={[
              'owner.dashboard.summary',
              'owner.dashboard.quick',
            ]}
          />
        </InfoCard>
        <Screenshot src="/ownar_dash.png" alt="Owner Dashboard" />
      </ContentSection>

      {/* Add Farm */}
      <ContentSection id="owner-add">
        <SubsectionTitle icon="➕" titleKey="owner.add.title" descKey="owner.add.desc" />
        <InfoCard>
          <h4 className="font-medium mb-3">{t('common.steps')}</h4>
          <FeatureList
            items={[
              'owner.add.details',
              'owner.add.images',
              'owner.add.amenities',
              'owner.add.pricing',
              'owner.add.submit',
            ]}
          />
        </InfoCard>
        <InfoCard variant="note">
          <p>{t('owner.add.note')}</p>
        </InfoCard>
        <Screenshot src="/ownar_addfarm.png" alt="Add Farm Form" />
      </ContentSection>

      {/* Farm Management */}
      <ContentSection id="owner-manage">
        <SubsectionTitle icon="⚙️" titleKey="owner.manage.title" descKey="owner.manage.desc" />
        <InfoCard>
          <FeatureList
            items={[
              'owner.manage.edit',
              'owner.manage.photos',
              'owner.manage.pricing',
            ]}
          />
        </InfoCard>
        <InfoCard variant="tbd">
          <p>{t('owner.manage.availability')}</p>
        </InfoCard>
        <Screenshot src="/ownar_Farm Management.png" alt="Farm Management" />
      </ContentSection>

      {/* Owner Bookings */}
      <ContentSection id="owner-bookings">
        <SubsectionTitle icon="📋" titleKey="owner.bookings.title" descKey="owner.bookings.desc" />
        <InfoCard>
          <FeatureList
            items={[
              'owner.bookings.view',
              'owner.bookings.details',
            ]}
          />
        </InfoCard>
        <InfoCard variant="tbd">
          <FeatureList
            items={[
              'owner.bookings.accept',
              'owner.bookings.followup',
            ]}
          />
        </InfoCard>
        <Screenshot src="/ownar_Booking Calendar.png" alt="Owner Bookings" />
      </ContentSection>

      {/* Future Features */}
      <ContentSection id="owner-future">
        <SubsectionTitle icon="🔮" titleKey="owner.future.title" />
        <InfoCard variant="future">
          <FeatureList
            items={[
              'owner.future.analytics',
              'owner.future.banners',
            ]}
          />
        </InfoCard>
      </ContentSection>
    </>
  );
};
