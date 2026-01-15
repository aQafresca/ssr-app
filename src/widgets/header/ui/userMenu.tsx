import { User } from 'lucide-react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/shared/ui/dropdown-menu';

import { navUserMenuLinks } from '@/widgets/header/model';
import { NavActions } from '@/widgets/header/ui';
import { NavElement } from '@/widgets/header/ui';

interface IUserMenuProps {
  isAuth: boolean;
  logout: () => void;
}

export const UserMenu = ({ isAuth, logout }: IUserMenuProps) => {
  const links = navUserMenuLinks(isAuth);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-1">
        <User />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <div className="flex justify-center gap-1 lg:hidden mb-2 border-b">
          <NavActions />
        </div>
        {links.map((link) => (
          <NavElement
            key={link.id}
            link={link}
            onAction={logout}
            showIcon
            className={
              'flex items-center gap-3 w-full px-2 py-1.5 text-sm cursor-pointer hover:bg-accent hover:text-accent-foreground rounded-sm transition-colors'
            }
          />
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
