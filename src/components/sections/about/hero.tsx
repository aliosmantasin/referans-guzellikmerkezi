import React from 'react';
import Image from 'next/image';

export function AboutHero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070"
          alt="Beatty Center Hakkımızda"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
      </div>
      
      <div className="relative container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Hakkımızda
            </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8">
              Beatty Center olarak, sağlık ve güzellik alanında profesyonel hizmetler sunuyoruz. 
              Deneyimli ekibimiz ve modern teknolojilerimizle müşterilerimize en iyi deneyimi yaşatmayı hedefliyoruz.
            </p>
          </div>
        </div>
    </section>
  );
} 