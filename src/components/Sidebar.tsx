import { useState, useEffect } from 'react';
import { Search, X, ChevronDown, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { sections, Role, Section } from '@/types/manual';
import { Input } from '@/components/ui/input';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  role: Role;
  activeSection: string;
  onSectionClick: (sectionId: string) => void;
}

export const Sidebar = ({ isOpen, onClose, role, activeSection, onSectionClick }: SidebarProps) => {
  const { t, dir } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedSections, setExpandedSections] = useState<string[]>([]);

  // Filter sections by role
  const filteredSections = sections.filter((section) =>
    section.roles.includes(role)
  );

  // Filter by search query
  const searchFilteredSections = filteredSections.filter((section) => {
    const sectionTitle = t(section.titleKey).toLowerCase();
    const query = searchQuery.toLowerCase();

    if (sectionTitle.includes(query)) return true;

    if (section.subsections) {
      return section.subsections.some((sub) =>
        t(sub.titleKey).toLowerCase().includes(query)
      );
    }

    return false;
  });

  // Auto-expand sections containing the active section
  useEffect(() => {
    filteredSections.forEach((section) => {
      if (section.subsections?.some((sub) => sub.id === activeSection)) {
        if (!expandedSections.includes(section.id)) {
          setExpandedSections((prev) => [...prev, section.id]);
        }
      }
    });
  }, [activeSection]);

  const toggleSection = (sectionId: string) => {
    setExpandedSections((prev) =>
      prev.includes(sectionId)
        ? prev.filter((id) => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const handleSectionClick = (sectionId: string) => {
    onSectionClick(sectionId);
    if (window.innerWidth < 1024) {
      onClose();
    }
  };

  const isActive = (id: string) => activeSection === id;

  const renderSection = (section: Section, isSubsection = false) => {
    const hasSubsections = section.subsections && section.subsections.length > 0;
    const isExpanded = expandedSections.includes(section.id);

    return (
      <div key={section.id} className={isSubsection ? 'ltr:ml-4 rtl:mr-4' : ''}>
        <button
          onClick={() => {
            if (hasSubsections) {
              toggleSection(section.id);
            }
            handleSectionClick(section.id);
          }}
          className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-all duration-200 group ${
            isActive(section.id)
              ? 'bg-primary/20 text-primary border-l-2 ltr:border-l-2 rtl:border-r-2 rtl:border-l-0 border-primary'
              : 'text-sidebar-foreground hover:bg-sidebar-accent hover:text-foreground'
          }`}
        >
          <span className="text-base">{section.icon}</span>
          <span className="flex-1 text-left rtl:text-right truncate">
            {t(section.titleKey)}
          </span>
          {hasSubsections && (
            <span className="text-muted-foreground">
              {isExpanded ? (
                <ChevronDown className="h-4 w-4" />
              ) : (
                <ChevronRight className="h-4 w-4 rtl:rotate-180" />
              )}
            </span>
          )}
        </button>

        {hasSubsections && isExpanded && (
          <div className="mt-1 space-y-1">
            {section.subsections!.map((sub) => renderSection(sub, true))}
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-16 md:top-[88px] lg:top-16 h-[calc(100vh-4rem)] md:h-[calc(100vh-88px)] lg:h-[calc(100vh-4rem)] w-72 bg-sidebar border-border z-50 transition-transform duration-300 ease-in-out overflow-hidden flex flex-col
          ${dir === 'ltr' ? 'left-0 border-r' : 'right-0 border-l'}
          ${isOpen
            ? 'translate-x-0'
            : dir === 'ltr'
            ? '-translate-x-full lg:translate-x-0'
            : 'translate-x-full lg:translate-x-0'
          }`}
      >
        {/* Search */}
        <div className="p-4 border-b border-sidebar-border">
          <div className="relative">
            <Search className="absolute left-3 rtl:left-auto rtl:right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder={t('sidebar.search')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9 rtl:pl-3 rtl:pr-9 bg-sidebar-accent border-sidebar-border text-sm"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 rtl:right-auto rtl:left-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto scrollbar-thin p-4 space-y-2">
          {searchFilteredSections.map((section) => renderSection(section))}

          {searchFilteredSections.length === 0 && (
            <div className="text-center text-muted-foreground text-sm py-8">
              No sections found
            </div>
          )}
        </nav>

        {/* Mobile close button */}
        <button
          onClick={onClose}
          className="lg:hidden absolute top-4 right-4 rtl:right-auto rtl:left-4 text-muted-foreground hover:text-foreground"
        >
          <X className="h-5 w-5" />
        </button>
      </aside>
    </>
  );
};
