'use client';

import { Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface LoadingProps {
  className?: string;
  size?: number;
}

export function Loading({ className, size = 24 }: LoadingProps) {
  return (
    <div
      className={cn(
        'flex min-h-[200px] w-full items-center justify-center',
        className
      )}
    >
      <Loader2
        className="animate-spin text-muted-foreground"
        size={size}
        aria-label="Yükleniyor"
      />
    </div>
  );
}

export function LoadingPage() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <Loading size={32} />
    </div>
  );
}

export function LoadingSpinner({ className, size = 20 }: LoadingProps) {
  return (
    <Loader2
      className={cn('animate-spin text-muted-foreground', className)}
      size={size}
      aria-label="Yükleniyor"
    />
  );
} 