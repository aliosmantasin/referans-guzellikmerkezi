import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Service } from '@/types/services';

interface ServiceDetailProps {
  service: Service;
}

export function ServiceDetail({ service }: ServiceDetailProps) {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="relative h-[400px] rounded-2xl overflow-hidden mb-12">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{service.title}</h1>
          <p className="text-lg text-white/90 max-w-2xl">{service.description}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Benefits */}
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold mb-6">Faydaları</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {service.benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
              >
                <p className="text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Price Card */}
        <div className="lg:col-span-1">
          <div className="bg-primary/5 p-6 rounded-lg sticky top-4">
            <h3 className="text-xl font-semibold mb-4">Fiyatlandırma</h3>
            <p className="text-2xl font-bold text-primary mb-6">
              {service.price}
            </p>
            {/* Randevu Al butonu buraya eklenebilir */}
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Uygulama Süreci</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {service.process.map((step, index) => (
            <Card key={index} className="p-6">
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                  {index + 1}
                </div>
                <h3 className="font-semibold">Adım {index + 1}</h3>
              </div>
              <p className="text-muted-foreground">{step}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
} 