import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Service, ServiceCategory } from '@/types/services';

interface ServiceHeroProps {
  service: Service;
  category?: ServiceCategory;
}

export function ServiceHero({ service, category }: ServiceHeroProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
      <div className="aspect-video relative rounded-2xl overflow-hidden shadow-xl">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover transition-transform hover:scale-105 duration-500"
          priority
        />
      </div>

      <div className="space-y-6">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Link
              href={`/hizmetler#${service.category}`}
              className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary/20 transition-colors"
            >
              {category?.name}
            </Link>
          </div>
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            {service.title}
          </h1>
          <p className="text-lg text-muted-foreground">{service.fullDescription}</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Card className="p-4 hover:shadow-md transition-shadow">
            <div className="text-sm text-muted-foreground">Süre</div>
            <div className="font-semibold">{service.duration}</div>
          </Card>
          <Card className="p-4 hover:shadow-md transition-shadow">
            <div className="text-sm text-muted-foreground">Fiyat</div>
            <div className="font-semibold">{service.price}</div>
          </Card>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Özellikler</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {service.benefits.map((benefit: string, index: number) => (
              <li key={index} className="flex items-center space-x-2">
                <span className="h-2 w-2 rounded-full bg-primary" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        <Button size="lg" className="w-full">
          Randevu Al
        </Button>
      </div>
    </div>
  );
} 