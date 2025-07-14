import Image from 'next/image';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1633681926035-ec1ac984418a?q=80&w=2070"
          alt="Beatty Center"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
      </div>
      
      <div className="relative container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Antalya&rsquo;nın Modern Güzellik Merkezi
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8">
            Profesyonel ekibimiz ve son teknoloji cihazlarımızla size özel bakım deneyimi sunuyoruz.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/iletisim"
              className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full font-medium transition-colors"
            >
              Hemen Randevu Al
            </Link>
            <Link
              href="/hizmetler"
              className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-full font-medium transition-colors"
            >
              Hizmetlerimiz
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
} 