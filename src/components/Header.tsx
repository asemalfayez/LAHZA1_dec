import { Globe, Menu, ChevronDown } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { Button } from '@/components/ui/button';
import { Role } from '@/types/manual';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface HeaderProps {
  onMenuClick: () => void;
  role: Role;
  onRoleChange: (role: Role) => void;
}

export const Header = ({ onMenuClick, role, onRoleChange }: HeaderProps) => {
  const { language, setLanguage, t } = useLanguage();

  const roles: { value: Role; labelKey: string }[] = [
    { value: 'guest', labelKey: 'role.guest' },
    { value: 'user', labelKey: 'role.user' },
    { value: 'owner', labelKey: 'role.owner' },
    { value: 'admin', labelKey: 'role.admin' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border h-16">
      <div className="flex items-center justify-between h-full px-4 lg:px-6">
        {/* Left: Menu + Logo */}
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-foreground hover:text-primary"
            onClick={onMenuClick}
          >
            <Menu className="h-5 w-5" />
          </Button>

          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="LAHZA" className="w-10 h-10 rounded-full object-cover" />
            <div className="hidden sm:block">
              <h1 className="text-lg font-display font-semibold gold-text-gradient">
                {t('site.title')}
              </h1>
              <p className="text-xs text-muted-foreground">
                {t('site.subtitle')}
              </p>
            </div>
          </div>
        </div>

        {/* Center: Role Switcher */}
        <div className="hidden md:flex items-center gap-1 bg-secondary/50 p-1 rounded-lg">
          {roles.map((r) => (
            <button
              key={r.value}
              onClick={() => onRoleChange(r.value)}
              className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200 ${role === r.value
                  ? 'bg-primary text-primary-foreground shadow-md'
                  : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
                }`}
            >
              {t(r.labelKey)}
            </button>
          ))}
        </div>

        {/* Right: Language Toggle */}
        <Button
          variant="outline"
          size="sm"
          onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
          className="flex items-center gap-2 border-primary/30 hover:border-primary hover:bg-primary/10"
        >
          <Globe className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium">{t('language.toggle')}</span>
        </Button>
      </div>

      {/* Mobile Role Switcher */}
      <div className="md:hidden flex items-center gap-1 px-4 pb-3 overflow-x-auto scrollbar-thin">
        {roles.map((r) => (
          <button
            key={r.value}
            onClick={() => onRoleChange(r.value)}
            className={`px-3 py-1.5 rounded-md text-xs font-medium whitespace-nowrap transition-all duration-200 ${role === r.value
                ? 'bg-primary text-primary-foreground shadow-md'
                : 'bg-secondary/50 text-muted-foreground hover:text-foreground'
              }`}
          >
            {t(r.labelKey)}
          </button>
        ))}
      </div>
    </header>
  );
};
