import Image from 'next/image';

export function HeroSection() {
  return (
    <section className="relative h-[60vh] min-h-[500px] flex items-center">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070"
          alt="Hizmetlerimiz"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="container mx-auto px-4 relative">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Hizmetlerimiz
          </h1>
          <p className="text-lg text-white/90">
            Profesyonel ekibimiz ve son teknoloji cihazlarımızla, size en iyi hizmeti sunmak için buradayız.
          </p>
        </div>
      </div>
    </section>
  );
} 