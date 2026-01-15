'use client';

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from '@/shared/ui/sheet';

import { ThemeSwitcher } from '@/features/theme-switcher/ui';
import { navMobileMenuLinks } from '@/widgets/header/model';
import { NavActions, NavElement } from '@/widgets/header/ui';

interface IMobileMenuProps {
  isOpen: boolean;
  onClose: (open: boolean) => void;
  isAuth: boolean;
  logout: () => void;
}

export const MobileMenu = ({
  isOpen,
  onClose,
  isAuth,
  logout,
}: IMobileMenuProps) => {
  const links = navMobileMenuLinks(isAuth);
  const handleSelect = () => {
    onClose(false);
  };

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="right" className="w-[85vw] sm:max-w-[400px]">
        <SheetHeader className="flex">
          <div className="flex items-center gap-4">
            <SheetTitle>Menu</SheetTitle>
            <SheetDescription className="sr-only">
              Navigation menu for mobile users
            </SheetDescription>
            <ThemeSwitcher />
            <NavActions onSelect={handleSelect} />
          </div>
        </SheetHeader>

        <nav className="mt-8 flex flex-col gap-4 text-center px-4">
          {links.map((link) => (
            <NavElement
              key={link.id}
              link={link}
              onAction={logout}
              onSelect={handleSelect}
              showIcon={false}
              className={
                'flex items-center gap-3 w-full px-2 py-1.5 text-lg cursor-pointer hover:bg-accent hover:text-accent-foreground rounded-sm transition-colors'
              }
            />
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};
