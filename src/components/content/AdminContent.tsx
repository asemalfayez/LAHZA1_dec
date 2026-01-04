import { useLanguage } from '@/hooks/useLanguage';
import {
  ContentSection,
  SectionTitle,
  SubsectionTitle,
  InfoCard,
  FeatureList,
  Screenshot,
} from '@/components/ContentSection';

export const AdminContent = () => {
  const { t } = useLanguage();

  return (
    <>
      {/* Admin Panel Introduction */}
      <ContentSection id="admin">
        <SectionTitle icon="🛡️" titleKey="admin.title" />
        <InfoCard>
          <p>{t('admin.intro')}</p>
        </InfoCard>
        <Screenshot src="/admin_dash.png" alt="Admin Dashboard" />
      </ContentSection>

      {/* Users Management */}
      <ContentSection id="admin-users">
        <SubsectionTitle icon="👥" titleKey="admin.users.title" descKey="admin.users.desc" />
        <InfoCard>
          <FeatureList items={['admin.users.view']} />
        </InfoCard>
        <InfoCard variant="tbd">
          <FeatureList
            items={[
              'admin.users.edit',
              'admin.users.disable',
            ]}
          />
        </InfoCard>
        <Screenshot src="/admin_manege user.png" alt="Users Management" />
      </ContentSection>

      {/* Farms Approval */}
      <ContentSection id="admin-farms">
        <SubsectionTitle icon="✅" titleKey="admin.farms.title" descKey="admin.farms.desc" />
        <InfoCard>
          <FeatureList
            items={[
              'admin.farms.pending',
              'admin.farms.review',
            ]}
          />
        </InfoCard>
        <InfoCard variant="tbd">
          <FeatureList items={['admin.farms.approve']} />
        </InfoCard>
        <Screenshot src="/admin_farm rev.png" alt="Farms Approval" />
      </ContentSection>
    </>
  );
};
