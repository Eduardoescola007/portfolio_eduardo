import { cn } from '@/lib/utils';

interface PixelDividerProps {
  className?: string;
  color?: 'green' | 'cyan' | 'pink';
}

const COLOR = {
  green: 'text-neon-green',
  cyan: 'text-neon-cyan',
  pink: 'text-neon-pink',
};

export default function PixelDivider({ className, color = 'green' }: PixelDividerProps) {
  return (
    <div className={cn('flex items-center justify-center gap-2 my-8', COLOR[color], className)}>
      <span className="h-1 w-8 bg-current" />
      <span className="h-2 w-2 bg-current" />
      <span className="h-3 w-3 bg-current" />
      <span className="h-2 w-2 bg-current" />
      <span className="h-1 w-8 bg-current" />
    </div>
  );
}