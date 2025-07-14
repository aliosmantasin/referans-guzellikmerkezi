'use client';

import { LocalBusiness, WithContext } from 'schema-dts';

export function AboutJsonLd() {
  const jsonLd: WithContext<LocalBusiness> = {
    '@context': 'https://schema.org',
    '@type': 'BeautySalon',
    name: 'Beatty Center',
    description: 'Antalya\'da profesyonel güzellik ve estetik hizmetleri sunan modern bir güzellik merkezi.',
    url: 'https://beattycenter.com',
    logo: 'https://beattycenter.com/images/logo.png',
    image: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=2070',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Fener Mah. Tekelioğlu Cad.',
      addressLocality: 'Muratpaşa',
      addressRegion: 'Antalya',
      postalCode: '07160',
      addressCountry: 'TR'
    },
    location: {
      '@type': 'Place',
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '36.8665',
        longitude: '30.7389'
      }
    },
    telephone: '+90-242-000-0000',
    email: 'info@beattycenter.com',
    sameAs: [
      'https://facebook.com/beattycenter',
      'https://instagram.com/beattycenter',
      'https://twitter.com/beattycenter'
    ],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:00',
        closes: '19:00'
      }
    ],
    founder: {
      '@type': 'Person',
      name: 'Dr. Ayşe Yılmaz',
      jobTitle: 'Medikal Estetik Uzmanı',
      image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=387'
    },
    numberOfEmployees: {
      '@type': 'QuantitativeValue',
      value: 15
    },
    foundingDate: '2015',
    areaServed: {
      '@type': 'City',
      name: 'Antalya'
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
} 