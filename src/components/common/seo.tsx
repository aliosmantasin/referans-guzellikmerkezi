'use client';

import Head from 'next/head';
import Script from 'next/script';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  canonical?: string;
  schema?: object;
}

export function SEO({
  title = 'Beatty Center - Antalya Güzellik Merkezi',
  description = 'Antalya\'nın en modern güzellik merkezi. Profesyonel ekibimiz ve son teknoloji cihazlarımızla cilt bakımı, lazer epilasyon, medikal estetik ve daha fazlası için hizmetinizdeyiz.',
  keywords = 'güzellik merkezi, antalya, cilt bakımı, lazer epilasyon, medikal estetik, hydrafacial, anti aging, bölgesel incelme, kalıcı makyaj',
  ogImage = '/images/og-image.jpg',
  ogType = 'website',
  canonical,
  schema,
}: SEOProps) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://beattycenter.com';
  const fullTitle = title.includes('Beatty Center') ? title : `${title} | Beatty Center`;

  // Default schema for the beauty center
  const defaultSchema = {
    '@context': 'https://schema.org',
    '@type': 'BeautySalon',
    name: 'Beatty Center',
    image: `${siteUrl}${ogImage}`,
    '@id': siteUrl,
    url: siteUrl,
    telephone: '+90 242 XXX XX XX',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Fener Mah. Tekelioğlu Cad.',
      addressLocality: 'Muratpaşa',
      addressRegion: 'Antalya',
      postalCode: '07160',
      addressCountry: 'TR'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 36.8665,
      longitude: 30.7289
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
      ],
      opens: '09:00',
      closes: '19:00'
    },
    sameAs: [
      'https://www.facebook.com/beattycenter',
      'https://www.instagram.com/beattycenter',
      'https://www.twitter.com/beattycenter'
    ]
  };

  return (
    <>
      <Head>
        <title>{fullTitle}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        
        {/* Open Graph */}
        <meta property="og:title" content={fullTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content={ogType} />
        <meta property="og:image" content={`${siteUrl}${ogImage}`} />
        <meta property="og:site_name" content="Beatty Center" />
        <meta property="og:locale" content="tr_TR" />
        <meta property="og:url" content={canonical || siteUrl} />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={fullTitle} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={`${siteUrl}${ogImage}`} />
        
        {/* Canonical URL */}
        {canonical && <link rel="canonical" href={canonical} />}
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Additional Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="language" content="Turkish" />
        <meta name="revisit-after" content="7 days" />
        <meta name="author" content="Beatty Center" />
        
        {/* Alternative Languages */}
        <link rel="alternate" hrefLang="tr" href={`${siteUrl}`} />
        <link rel="alternate" hrefLang="x-default" href={`${siteUrl}`} />
      </Head>

      {/* Structured Data */}
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema || defaultSchema)
        }}
      />
    </>
  );
} 