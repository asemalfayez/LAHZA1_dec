export type Role = 'guest' | 'user' | 'owner' | 'admin';

export interface Section {
  id: string;
  titleKey: string;
  icon: string;
  roles: Role[];
  subsections?: Section[];
}

export const sections: Section[] = [
  {
    id: 'sitemap',
    titleKey: 'sitemap.title',
    icon: '🗺️',
    roles: ['guest', 'user', 'owner', 'admin'],
  },
  {
    id: 'guest',
    titleKey: 'guest.title',
    icon: '👤',
    roles: ['guest'],
    subsections: [
      { id: 'guest-home', titleKey: 'guest.home.title', icon: '🏠', roles: ['guest'] },
      { id: 'guest-about', titleKey: 'guest.about.title', icon: 'ℹ️', roles: ['guest'] },
      { id: 'guest-contact', titleKey: 'guest.contact.title', icon: '📬', roles: ['guest'] },
      { id: 'guest-faq', titleKey: 'guest.faq.title', icon: '❓', roles: ['guest'] },
      { id: 'guest-terms', titleKey: 'guest.terms.title', icon: '📜', roles: ['guest'] },
      { id: 'guest-privacy', titleKey: 'guest.privacy.title', icon: '🔒', roles: ['guest'] },
      { id: 'guest-loyalty', titleKey: 'guest.loyalty.title', icon: '⭐', roles: ['guest'] },
      { id: 'guest-cta', titleKey: 'guest.cta.title', icon: '🚀', roles: ['guest'] },
    ],
  },
  {
    id: 'user',
    titleKey: 'user.title',
    icon: '👥',
    roles: ['user'],
    subsections: [
      { id: 'user-dashboard', titleKey: 'user.dashboard.overview', icon: '📊', roles: ['user'] },
      { id: 'user-profile', titleKey: 'user.profile.title', icon: '👤', roles: ['user'] },
      { id: 'user-bookings', titleKey: 'user.bookings.title', icon: '📅', roles: ['user'] },
      { id: 'user-farm', titleKey: 'user.farm.title', icon: '🏡', roles: ['user'] },
      { id: 'user-checkout', titleKey: 'user.checkout.title', icon: '✅', roles: ['user'] },
      { id: 'user-future', titleKey: 'user.future.title', icon: '🔮', roles: ['user'] },
    ],
  },
  {
    id: 'owner',
    titleKey: 'owner.title',
    icon: '🏠',
    roles: ['owner'],
    subsections: [
      { id: 'owner-dashboard', titleKey: 'owner.dashboard.title', icon: '📊', roles: ['owner'] },
      { id: 'owner-add', titleKey: 'owner.add.title', icon: '➕', roles: ['owner'] },
      { id: 'owner-manage', titleKey: 'owner.manage.title', icon: '⚙️', roles: ['owner'] },
      { id: 'owner-bookings', titleKey: 'owner.bookings.title', icon: '📋', roles: ['owner'] },
      { id: 'owner-future', titleKey: 'owner.future.title', icon: '🔮', roles: ['owner'] },
    ],
  },
  {
    id: 'admin',
    titleKey: 'admin.title',
    icon: '🛡️',
    roles: ['admin'],
    subsections: [
      { id: 'admin-users', titleKey: 'admin.users.title', icon: '👥', roles: ['admin'] },
      { id: 'admin-farms', titleKey: 'admin.farms.title', icon: '✅', roles: ['admin'] },
    ],
  },
];
