import Image from 'next/image';

import { assertNever } from '@/shared/lib/assertNever';

import type { TNavIcon } from '@/widgets/header/model';

export const renderNavIcon = (
  icon: TNavIcon,
  alt: string,
  className?: string,
) => {
  switch (icon.kind) {
    case 'lucide': {
      const IconElement = icon.icon;

      return <IconElement className={className} role="img" aria-label={alt} />;
    }
    case 'src': {
      return (
        <Image
          src={icon.src}
          alt={alt}
          width={20}
          height={20}
          className={className}
        />
      );
    }
    default: {
      return assertNever(icon);
    }
  }
};
