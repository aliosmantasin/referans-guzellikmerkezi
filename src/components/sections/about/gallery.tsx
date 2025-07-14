import React from 'react';
import Image from 'next/image';
import { Container } from '@/components/ui/container';

const images = [
  {
    src: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&auto=format&fit=crop&q=60',
    alt: 'Spa Treatment',
  },
  {
    src: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=800&auto=format&fit=crop&q=60',
    alt: 'Facial Treatment',
  },
  {
    src: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=800&auto=format&fit=crop&q=60',
    alt: 'Massage Therapy',
  },
  {
    src: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&auto=format&fit=crop&q=60',
    alt: 'Beauty Treatment',
  },
  {
    src: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=800&auto=format&fit=crop&q=60',
    alt: 'Wellness Center',
  },
  {
    src: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&auto=format&fit=crop&q=60',
    alt: 'Relaxation Room',
  },
];

export function Gallery() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Merkezimizden Görüntüler
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Modern ve konforlu ortamımızda kendinizi evinizde gibi hissedin.
          </p>
        </div>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative aspect-[4/3] overflow-hidden rounded-xl"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform hover:scale-105"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
} 