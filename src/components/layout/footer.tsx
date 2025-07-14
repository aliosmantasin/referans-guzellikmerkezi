'use client';

import Link from 'next/link';
import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';

const footerLinks = {
  company: [
    { title: 'Hakkımızda', href: '/hakkimizda' },
    { title: 'Hizmetlerimiz', href: '/hizmetler' },
    { title: 'Blog', href: '/blog' },
    { title: 'İletişim', href: '/iletisim' },
  ],
  services: [
    { title: 'HydraFacial Bakımı', href: '/hizmetler/hydrafacial' },
    { title: 'Lazer Epilasyon', href: '/hizmetler/laser-hair-removal' },
    { title: 'Anti-Aging Bakım', href: '/hizmetler/anti-aging' },
  ],
  contact: [
    {
      icon: <Phone className="h-4 w-4" />,
      text: '+90 242 123 45 67',
      href: 'tel:+902421234567',
    },
    {
      icon: <Mail className="h-4 w-4" />,
      text: 'info@beattycenter.com',
      href: 'mailto:info@beattycenter.com',
    },
    {
      icon: <MapPin className="h-4 w-4" />,
      text: 'Lara Cad. No:123, Muratpaşa/Antalya',
      href: 'https://maps.google.com',
    },
  ],
  social: [
    {
      icon: <Facebook className="h-5 w-5" />,
      href: 'https://facebook.com',
      label: 'Facebook',
    },
    {
      icon: <Instagram className="h-5 w-5" />,
      href: 'https://instagram.com',
      label: 'Instagram',
    },
  ],
};

export function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container grid gap-8 py-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <h2 className="text-lg font-semibold">Beatty Center</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Antalya&rsquo;nın en modern güzellik merkezi. Profesyonel ekibimiz ve son
            teknoloji cihazlarımızla hizmetinizdeyiz.
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold">Kurumsal</h3>
          <ul className="space-y-2">
            {footerLinks.company.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold">Hizmetlerimiz</h3>
          <ul className="space-y-2">
            {footerLinks.services.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold">İletişim</h3>
          <ul className="space-y-4">
            {footerLinks.contact.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
                >
                  {item.icon}
                  <span>{item.text}</span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-6">
            <h3 className="mb-4 text-sm font-semibold">Sosyal Medya</h3>
            <div className="flex gap-4">
              {footerLinks.social.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary"
                >
                  <span className="sr-only">{item.label}</span>
                  {item.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t">
        <div className="container flex items-center justify-between py-6">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Beatty Center. Tüm hakları saklıdır.
          </p>
          <Link
            href="/privacy"
            className="text-sm text-muted-foreground hover:text-primary"
          >
            Gizlilik Politikası
          </Link>
        </div>
      </div>
    </footer>
  );
} 