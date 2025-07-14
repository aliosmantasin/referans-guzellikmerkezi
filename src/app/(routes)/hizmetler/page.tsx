import { Metadata } from 'next';
import { SERVICES, SERVICE_CATEGORIES } from './mock-data';
import { HeroSection } from './components/HeroSection';
import { CategoriesSection } from './components/CategoriesSection';
import { ServicesList } from './components/ServicesList';
import { CTASection } from './components/CTASection';

export const metadata: Metadata = {
  title: 'Hizmetlerimiz | Beatty Center',
  description: 'Beatty Center güzellik ve estetik merkezi hizmetleri. Cilt bakımı, lazer epilasyon ve daha fazlası.',
  openGraph: {
    title: 'Hizmetlerimiz | Beatty Center',
    description: 'Beatty Center güzellik ve estetik merkezi hizmetleri. Cilt bakımı, lazer epilasyon ve daha fazlası.',
    type: 'website',
  },
};

export default function ServicesPage() {
  return (
    <main>
      <HeroSection />
      <CategoriesSection categories={SERVICE_CATEGORIES} />
      {SERVICE_CATEGORIES.map((category) => (
        <ServicesList
          key={category.id}
          category={category}
          services={Object.values(SERVICES).filter((service) => service.category === category.id)}
        />
                ))}
      <CTASection />
      </main>
  );
} 