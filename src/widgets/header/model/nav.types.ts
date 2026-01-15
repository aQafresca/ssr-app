import type { LucideIcon } from 'lucide-react';

export type TNavIcon =
  | { kind: 'lucide'; icon: LucideIcon }
  | { kind: 'src'; src: string };

interface IBaseNavItem {
  id: string;
  label: string;
}

export interface INavLinkItem extends IBaseNavItem {
  type: 'link';
  to: string;
  icon: TNavIcon;
}

export type TNavActionType = 'logout';

export interface INavActionItem extends IBaseNavItem {
  type: 'action';
  action: TNavActionType;
  icon: TNavIcon;
}

export interface INavTextLink extends IBaseNavItem {
  type: 'text-link';
  to: string;
}

export type TNavItem = INavLinkItem | INavActionItem | INavTextLink;

export interface INavLinkSelectProps {
  onSelect?: () => void;
}
