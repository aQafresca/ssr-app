import { Badge } from '@/shared/ui/badge';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/shared/ui/navigation-menu';

import type { INavLinkSelectProps } from '@/widgets/header/model';
import { shopActionsLinks } from '@/widgets/header/model';
import { NavElement } from '@/widgets/header/ui/navElement';

interface NavActionsProps extends INavLinkSelectProps {
  counts?: Record<string, number>;
}

export const NavActions = ({ onSelect, counts }: NavActionsProps) => {
  return (
    <NavigationMenu>
      <NavigationMenuList className="flex gap-2">
        {shopActionsLinks.map((link) => (
          <NavigationMenuItem key={link.id}>
            <NavigationMenuLink asChild className="flex-row items-center gap-2">
              <div className="flex items-center gap-2">
                <NavElement
                  link={link}
                  showIcon
                  onSelect={onSelect}
                  showLabel={false}
                />
                <Badge variant="secondary">{counts?.[link.id] ?? 0}</Badge>
              </div>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};
