import type {
  INavActionItem,
  INavLinkItem,
  INavTextLink,
  TNavActionType,
  TNavIcon,
} from './nav.types';

export const navLink = (
  id: string,
  to: string,
  label: string,
  icon: TNavIcon,
): INavLinkItem => ({
  id,
  type: 'link',
  to,
  label,
  icon,
});

export const navAction = (
  id: string,
  action: TNavActionType,
  label: string,
  icon: TNavIcon,
): INavActionItem => ({
  id,
  type: 'action',
  action,
  label,
  icon,
});

export const navTextLink = (
  id: string,
  to: string,
  label: string,
): INavTextLink => ({
  id,
  type: 'text-link',
  to,
  label,
});
