export const ROUTES = {
  HOME: '/',
  ABOUT: '/hakkimizda',
  SERVICES: '/hizmetler',
  CONTACT: '/iletisim',
  BLOG: '/blog',
} as const;

export const NAV_ITEMS = [
  { title: 'Ana Sayfa', href: ROUTES.HOME },
  { title: 'Hakkımızda', href: ROUTES.ABOUT },
  { title: 'Hizmetlerimiz', href: ROUTES.SERVICES },
  { title: 'İletişim', href: ROUTES.CONTACT },
  { title: 'Blog', href: ROUTES.BLOG },
] as const; 