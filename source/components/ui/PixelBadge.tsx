import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface PixelBadgeProps {
  children: ReactNode;
  color?: 'green' | 'cyan' | 'pink' | 'purple' | 'yellow';
  className?: string;
}

const COLOR = {
  green: 'border-neon-green text-neon-green',
  cyan: 'border-neon-cyan text-neon-cyan',
  pink: 'border-neon-pink text-neon-pink',
  purple: 'border-neon-purple text-neon-purple',
  yellow: 'border-neon-yellow text-neon-yellow',
};

export default function PixelBadge({ children, color = 'green', className }: PixelBadgeProps) {
  return (
    <span
      className={cn(
        'inline-block border-2 px-2 py-1 font-pixel text-[9px] uppercase tracking-wider',
        COLOR[color],
        className
      )}
    >
      {children}
    </span>
  );
}