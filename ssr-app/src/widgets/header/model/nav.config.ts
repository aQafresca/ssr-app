import { Heart, LogIn, LogOut, ShoppingCart, User } from 'lucide-react';

import type { INavLinkItem } from '@/widgets/header/model';

import { navAction, navLink, navTextLink } from './nav.factories';

export const shopActionsLinks: INavLinkItem[] = [
  navLink('cart', '/cart', 'Cart', { kind: 'lucide', icon: ShoppingCart }),
  navLink('favorites', '/favorites', 'Favorites', {
    kind: 'lucide',
    icon: Heart,
  }),
];

export const navUserMenuLinks = (isAuth: boolean) =>
  isAuth
    ? [
        navLink('profile', '/profile', 'Profile', {
          kind: 'lucide',
          icon: User,
        }),
        navAction('logout', 'logout', 'Logout', {
          kind: 'lucide',
          icon: LogOut,
        }),
      ]
    : [
        navLink('login', '/login', 'Login', {
          kind: 'lucide',
          icon: LogIn,
        }),
      ];

export const commonNavLinks = [
  navTextLink('about', '/about', 'About'),
  navTextLink('shops', '/shops', 'All shops'),
  navTextLink('merchant', '/merchant', 'Become a merchant'),
];

export const navMobileMenuLinks = (isAuth: boolean) => [
  navLink('home', '/', 'Home', {
    kind: 'src',
    src: '/icons/logo.svg',
  }),
  ...navUserMenuLinks(isAuth),
  ...commonNavLinks,
];
