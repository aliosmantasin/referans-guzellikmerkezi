'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

interface ErrorBoundaryProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export function ErrorBoundary({ error, reset }: ErrorBoundaryProps) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Error:', error);
  }, [error]);

  return (
    <div className="flex min-h-[400px] flex-col items-center justify-center text-center">
      <h2 className="mb-2 text-2xl font-semibold">Bir Hata Oluştu</h2>
      <p className="mb-6 text-muted-foreground">
        Üzgünüz, bir şeyler yanlış gitti. Lütfen tekrar deneyin.
      </p>
      <Button onClick={reset} variant="outline">
        Tekrar Dene
      </Button>
    </div>
  );
}

export function NotFound() {
  return (
    <div className="flex min-h-[400px] flex-col items-center justify-center text-center">
      <h2 className="mb-2 text-2xl font-semibold">Sayfa Bulunamadı</h2>
      <p className="mb-6 text-muted-foreground">
        Aradığınız sayfa bulunamadı veya taşınmış olabilir.
      </p>
      <Link href="/">
        <Button variant="outline">Ana Sayfaya Dön</Button>
      </Link>
    </div>
  );
} 