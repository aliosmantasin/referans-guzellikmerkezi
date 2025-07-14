export const SITE_CONFIG = {
  name: 'Beatty Center',
  description: 'Antalya\'nın en modern güzellik merkezi',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://beattycenter.com',
  ogImage: '/og.jpg',
  links: {
    instagram: 'https://instagram.com/beattycenter',
    facebook: 'https://facebook.com/beattycenter',
  },
} as const;

export const CONTACT_INFO = {
  phone: '+90 242 123 45 67',
  email: 'info@beattycenter.com',
  address: 'Lara Cad. No:123, Muratpaşa/Antalya',
  workingHours: {
    weekday: '09:00 - 19:00',
    saturday: '10:00 - 18:00',
    sunday: 'Kapalı',
  },
} as const;

export const SEO_DEFAULTS = {
  titleTemplate: '%s | Beatty Center',
  defaultTitle: 'Beatty Center - Antalya\'nın Modern Güzellik Merkezi',
  description: 'Profesyonel ekibimiz ve son teknoloji cihazlarımızla güzelliğinize değer katıyoruz.',
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    siteName: SITE_CONFIG.name,
  },
} as const; 