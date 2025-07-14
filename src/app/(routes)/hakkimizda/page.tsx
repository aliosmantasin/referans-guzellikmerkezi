import type { Metadata } from 'next';

import { AboutJsonLd } from '@/lib/seo/structured-data/about-jsonld';
import { AboutHero } from '@/components/sections/about/hero';
import { MissionVision } from '@/components/sections/about/mission-vision';
import { Team } from '@/components/sections/about/team';
import { Gallery } from '@/components/sections/about/gallery';

export const metadata: Metadata = {
  title: 'Hakkımızda | Beatty Center - Güzellik ve Estetik Merkezi',
  description: 'Beatty Center olarak, 2015\'ten bu yana Antalya\'da güzellik ve estetik alanında uzman kadromuz ve son teknoloji ekipmanlarımızla profesyonel hizmet veriyoruz.',
  openGraph: {
    title: 'Hakkımızda | Beatty Center - Güzellik ve Estetik Merkezi',
    description: 'Beatty Center olarak, 2015\'ten bu yana Antalya\'da güzellik ve estetik alanında uzman kadromuz ve son teknoloji ekipmanlarımızla profesyonel hizmet veriyoruz.',
    type: 'website',
    locale: 'tr_TR',
    siteName: 'Beatty Center',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=2070',
        width: 2070,
        height: 1380,
        alt: 'Beatty Center İç Mekan',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hakkımızda | Beatty Center - Güzellik ve Estetik Merkezi',
    description: 'Beatty Center olarak, 2015\'ten bu yana Antalya\'da güzellik ve estetik alanında uzman kadromuz ve son teknoloji ekipmanlarımızla profesyonel hizmet veriyoruz.',
    images: ['https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=2070'],
  },
  alternates: {
    canonical: 'https://beattycenter.com/about',
  },
  keywords: [
    'güzellik merkezi antalya',
    'estetik merkezi',
    'cilt bakımı',
    'lazer epilasyon',
    'medikal estetik',
    'profesyonel güzellik hizmetleri',
    'beatty center hakkında',
    'güzellik merkezi ekibi',
  ],
};

export default function AboutPage() {
  return (
    <>
      <AboutJsonLd />
      <main className="flex-1">
        <AboutHero />
        <MissionVision />
        <Team />
        <Gallery />
      </main>
    </>
  );
} 