'use client';

import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { usePixelSound } from '@/controllers/usePixelSound';

type Variant = 'green' | 'cyan' | 'pink' | 'purple';
type Size = 'sm' | 'md' | 'lg';

const VARIANT_CLASSES: Record<Variant, string> = {
  green: 'bg-neon-green text-black shadow-[4px_4px_0_0_#003300] hover:bg-[#00cc33]',
  cyan: 'bg-neon-cyan text-black shadow-[4px_4px_0_0_#003333] hover:bg-[#00cccc]',
  pink: 'bg-neon-pink text-white shadow-[4px_4px_0_0_#5c0026] hover:bg-[#cc0058]',
  purple: 'bg-neon-purple text-white shadow-[4px_4px_0_0_#3d1d5e] hover:bg-[#7a3caf]',
};

const SIZE_CLASSES: Record<Size, string> = {
  sm: 'text-[10px] px-3 py-2',
  md: 'text-xs px-4 py-3',
  lg: 'text-sm px-6 py-4',
};

type SharedProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
};

type AsButton = SharedProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className' | 'children'> & {
    href?: undefined;
  };

type AsAnchor = SharedProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'className' | 'children'> & {
    href: string;
    external?: boolean;
  };

type PixelButtonProps = AsButton | AsAnchor;

export default function PixelButton(props: PixelButtonProps) {
  const { variant = 'green', size = 'md', className, children, ...rest } = props;
  const { play } = usePixelSound();

  const baseClasses = cn(
    'inline-flex items-center justify-center font-pixel uppercase tracking-wider transition-transform duration-75',
    'active:translate-x-[4px] active:translate-y-[4px] active:shadow-none',
    VARIANT_CLASSES[variant],
    SIZE_CLASSES[size],
    className
  );

  if ('href' in rest && rest.href) {
    const anchor = rest as AsAnchor;
    const isExternal = anchor.external || /^https?:/i.test(anchor.href);

    if (!isExternal) {
      return (
        <Link
          href={anchor.href}
          onClick={(e) => {
            play('click');
            anchor.onClick?.(e as never);
          }}
          onMouseEnter={() => play('hover')}
          className={baseClasses}
        >
          {children}
        </Link>
      );
    }

    return (
      <a
        href={anchor.href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => {
          play('click');
          anchor.onClick?.(e);
        }}
        onMouseEnter={() => play('hover')}
        className={baseClasses}
      >
        {children}
      </a>
    );
  }

  const button = rest as AsButton;
  return (
    <button
      onClick={(e) => {
        play('click');
        button.onClick?.(e);
      }}
      onMouseEnter={() => play('hover')}
      className={baseClasses}
      {...button}
    >
      {children}
    </button>
  );
}