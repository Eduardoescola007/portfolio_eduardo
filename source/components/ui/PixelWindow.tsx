import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface PixelWindowProps {
  title: string;
  children: ReactNode;
  className?: string;
  accent?: 'green' | 'cyan' | 'pink' | 'purple' | 'yellow';
}

const ACCENT = {
  green: { border: 'border-neon-green', bg: 'bg-neon-green' },
  cyan: { border: 'border-neon-cyan', bg: 'bg-neon-cyan' },
  pink: { border: 'border-neon-pink', bg: 'bg-neon-pink' },
  purple: { border: 'border-neon-purple', bg: 'bg-neon-purple' },
  yellow: { border: 'border-neon-yellow', bg: 'bg-neon-yellow' },
};

export default function PixelWindow({
  title,
  children,
  className,
  accent = 'green',
}: PixelWindowProps) {
  const { border, bg } = ACCENT[accent];

  return (
    <div className={cn('relative border-4 bg-bg-base shadow-pixel', border, className)}>
      <div className={cn('flex items-center justify-between px-3 py-2 border-b-4', bg, border)}>
        <span className="font-pixel text-[10px] text-black uppercase tracking-wider">
          {title}
        </span>
        <div className="flex gap-1">
          <span className="w-2 h-2 bg-black" />
          <span className="w-2 h-2 bg-black/50" />
          <span className="w-2 h-2 bg-black/30" />
        </div>
      </div>
      <div className="p-4 md:p-6">{children}</div>
    </div>
  );
}