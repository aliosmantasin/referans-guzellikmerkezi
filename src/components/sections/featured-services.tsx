import Image from 'next/image';
import Link from 'next/link';
import { FEATURED_SERVICES, Service } from '@/constants/services';

export function FeaturedServices() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Öne Çıkan Hizmetlerimiz
          </h2>
          <p className="text-gray-600 text-lg">
            En çok tercih edilen güzellik ve bakım hizmetlerimizi keşfedin
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURED_SERVICES.map((service: Service) => (
            <Link
              key={service.id}
              href={`/hizmetler#${service.id}`}
              className="group"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
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
                  <p className="text-gray-600 mb-4">
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