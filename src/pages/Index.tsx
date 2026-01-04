import { useState, useEffect, useCallback } from 'react';
import { LanguageProvider } from '@/hooks/useLanguage';
import { Header } from '@/components/Header';
import { Sidebar } from '@/components/Sidebar';
import { SitemapContent } from '@/components/content/SitemapContent';
import { GuestContent } from '@/components/content/GuestContent';
import { UserContent } from '@/components/content/UserContent';
import { OwnerContent } from '@/components/content/OwnerContent';
import { AdminContent } from '@/components/content/AdminContent';
import { Role } from '@/types/manual';
import { useLanguage } from '@/hooks/useLanguage';

const ManualContent = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [role, setRole] = useState<Role>('guest');
  const [activeSection, setActiveSection] = useState('sitemap');
  const { t, dir } = useLanguage();

  // Scroll spy effect
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      let currentSection = 'sitemap';

      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop <= 150) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  const handleRoleChange = (newRole: Role) => {
    setRole(newRole);
    // Scroll to the main section for that role
    setTimeout(() => {
      if (newRole === 'guest') scrollToSection('guest');
      else if (newRole === 'user') scrollToSection('user');
      else if (newRole === 'owner') scrollToSection('owner');
      else if (newRole === 'admin') scrollToSection('admin');
    }, 100);
  };

  return (
    <div className="min-h-screen bg-background" dir={dir}>
      <Header
        onMenuClick={() => setSidebarOpen(true)}
        role={role}
        onRoleChange={handleRoleChange}
      />

      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        role={role}
        activeSection={activeSection}
        onSectionClick={scrollToSection}
      />

      {/* Main Content */}
      <main className="pt-16 md:pt-[88px] lg:pt-16 lg:pl-72 rtl:lg:pl-0 rtl:lg:pr-72">
        <div className="max-w-4xl mx-auto px-4 py-8 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm text-primary">LAHZA Platform</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
              <span className="gold-text-gradient">{t('site.title')}</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('site.subtitle')}
            </p>
          </div>

          {/* Sitemap - Always visible */}
          <SitemapContent />

          {/* Role-specific content */}
          {role === 'guest' && <GuestContent />}
          {role === 'user' && <UserContent />}
          {role === 'owner' && <OwnerContent />}
          {role === 'admin' && <AdminContent />}

          {/* Footer */}
          <footer className="mt-16 pt-8 border-t border-border text-center">
            <div className="glass-card rounded-xl p-6 inline-block">
              <p className="text-sm text-muted-foreground mb-2">
                {t('footer.version')}
              </p>
              <p className="text-sm text-muted-foreground">
                {t('footer.contact')}
              </p>
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
};

const Index = () => {
  return (
    <LanguageProvider>
      <ManualContent />
    </LanguageProvider>
  );
};

export default Index;
