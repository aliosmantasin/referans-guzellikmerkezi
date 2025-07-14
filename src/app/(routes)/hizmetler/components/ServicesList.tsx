import Image from 'next/image';
import Link from 'next/link';
import { Service, ServiceCategory } from '@/types/services';

interface ServicesListProps {
  category: ServiceCategory;
  services: Service[];
}

export function ServicesList({ category, services }: ServicesListProps) {
  return (
    <section
      id={category.id}
      className="py-20 odd:bg-white even:bg-muted/20"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{category.name}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {category.description}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/hizmetler/${service.slug}`}
              className="group"
            >
              <div className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="relative h-64">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {service.description}
                  </p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="bg-primary/10 text-primary px-4 py-1.5 rounded-full">
                      {service.duration}
                    </span>
                    <span className="font-semibold">
                      {service.price}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
} 