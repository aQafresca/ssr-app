import Link from 'next/link';

import { assertNever } from '@/shared/lib/assertNever';

import type { TNavItem } from '@/widgets/header/model';
import { renderNavIcon } from '@/widgets/header/ui/renderNavIcon';

interface NavElementProps {
  link: TNavItem;
  onAction?: (action: string) => void;
  onSelect?: () => void;
  className?: string;
  showIcon: boolean;
  showLabel?: boolean;
}

export const NavElement = ({
  link,
  onAction,
  onSelect,
  className,
  showIcon,
  showLabel = true,
}: NavElementProps) => {
  const content = (
    <>
      {showIcon && link.type !== 'text-link'
        ? renderNavIcon(link.icon, link.label, 'w-4 h-4')
        : null}
      {showLabel ? <span>{link.label}</span> : null}
    </>
  );

  switch (link.type) {
    case 'link':
      return (
        <Link href={link.to} className={className} onClick={onSelect}>
          {content}
        </Link>
      );
    case 'action':
      return (
        <button
          type="button"
          onClick={() => {
            onAction?.(link.action);
            onSelect?.();
          }}
          className={className}
        >
          {content}
        </button>
      );
    case 'text-link':
      return (
        <Link href={link.to} className={className} onClick={onSelect}>
          {content}
        </Link>
      );
    default:
      return assertNever(link);
  }
};
