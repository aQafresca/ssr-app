import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/shared/ui/navigation-menu';

import {
  commonNavLinks,
  type INavLinkSelectProps,
} from '@/widgets/header/model';
import { NavElement } from '@/widgets/header/ui/navElement';

export const NavLinks = ({ onSelect }: INavLinkSelectProps) => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {commonNavLinks.map((link) => (
          <NavigationMenuItem key={link.id}>
            <NavigationMenuLink asChild>
              <NavElement link={link} onSelect={onSelect} showIcon={false} />
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};
