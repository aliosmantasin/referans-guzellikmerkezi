import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SERVICES, SERVICE_CATEGORIES } from '../mock-data';
import { ServiceCategory } from '@/types/services';
import { Breadcrumb } from './components/Breadcrumb';
import { ServiceHero } from './components/ServiceHero';
import { ProcessSection } from './components/ProcessSection';
import { ServiceCTA } from './components/ServiceCTA';

interface Props {
  params: {
    slug: string;
  };
  }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = SERVICES[params.slug];
  
  if (!service) {
    return {
      title: 'Hizmet Bulunamadı | Beatty Center',
      description: 'Aradığınız hizmet bulunamadı.',
    };
  }

  return {
    title: `${service.title} | Beatty Center`,
    description: service.description,
    openGraph: {
      title: `${service.title} | Beatty Center`,
      description: service.description,
      type: 'website',
    },
  };
}

export default function ServiceDetailPage({ params }: Props) {
  const service = SERVICES[params.slug];

  if (!service) {
    notFound();
  }

  const category = SERVICE_CATEGORIES.find((c: ServiceCategory) => c.id === service.category);

  return (
    <main className="min-h-screen py-12 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <Breadcrumb category={category} />
        <ServiceHero service={service} category={category} />
        <ProcessSection process={service.process} />
        <ServiceCTA />
      </div>
    </main>
  );
} 