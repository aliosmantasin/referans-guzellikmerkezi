'use client';

import { WithContext, LocalBusiness } from 'schema-dts';

export function ServicesJsonLd() {
  const jsonLd: WithContext<LocalBusiness> = {
    '@context': 'https://schema.org',
    '@type': 'BeautySalon',
    name: 'Beatty Center',
    image: 'https://beattycenter.com/images/logo.png',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Fener Mah. Tekelioğlu Cad.',
      addressLocality: 'Muratpaşa',
      addressRegion: 'Antalya',
      postalCode: '07160',
      addressCountry: 'TR'
    },
    areaServed: {
      '@type': 'City',
      name: 'Antalya'
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Güzellik ve Estetik Hizmetleri',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'HydraFacial Bakımı',
            description: 'Cildinizi derinlemesine temizleyen ve nemlendiren ileri teknoloji yüz bakımı.',
            provider: {
              '@type': 'BeautySalon',
              name: 'Beatty Center'
            },
            offers: {
              '@type': 'Offer',
              price: '1200',
              priceCurrency: 'TRY'
            }
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Lazer Epilasyon',
            description: 'Alexandrite lazer ile güvenli ve etkili epilasyon.',
            provider: {
              '@type': 'BeautySalon',
              name: 'Beatty Center'
            },
            offers: {
              '@type': 'Offer',
              price: '800',
              priceCurrency: 'TRY'
            }
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Anti-Aging Bakım',
            description: 'Kırışıklık karşıtı ve cilt gençleştirici özel bakım.',
            provider: {
              '@type': 'BeautySalon',
              name: 'Beatty Center'
            },
            offers: {
              '@type': 'Offer',
              price: '1500',
              priceCurrency: 'TRY'
            }
          }
        }
      ]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
} 