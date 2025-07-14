'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { useState } from 'react';
import { NAV_ITEMS } from '@/constants/routes';
import { SITE_CONFIG } from '@/constants/config';

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-8">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold">{SITE_CONFIG.name}</span>
          </Link>
        </div>
        {/* Desktop Navigation */}
        <nav className="hidden flex-1 items-center justify-between md:flex">
          <ul className="flex gap-6">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    'text-sm font-medium transition-colors hover:text-primary',
                    pathname === item.href
                      ? 'text-foreground'
                      : 'text-foreground/60'
                  )}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-4">
            <Link
              href="/iletisim"
              className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            >
              Randevu Al
            </Link>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <nav className="flex flex-1 items-center justify-end md:hidden">
          <div className="flex items-center gap-4">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Menü</span>
                </Button>
              </SheetTrigger>
              <SheetContent className="flex w-full flex-col justify-between sm:max-w-md">
                <div>
                  <SheetHeader className="text-left">
                    <SheetTitle className="text-xl">{SITE_CONFIG.name}</SheetTitle>
                  </SheetHeader>
                  <div className="mt-8 flex flex-col space-y-4">
                    {NAV_ITEMS.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={cn(
                          'text-lg font-medium transition-colors hover:text-primary',
                          pathname === item.href
                            ? 'text-foreground'
                            : 'text-foreground/60'
                        )}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="mt-auto border-t py-4">
                  <Link
                    href="/iletisim"
                    onClick={() => setIsOpen(false)}
                    className="inline-flex h-11 w-full items-center justify-center rounded-md bg-primary px-8 text-base font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  >
                    Randevu Al
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </header>
  );
} 