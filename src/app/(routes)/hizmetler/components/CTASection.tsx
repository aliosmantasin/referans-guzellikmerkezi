import Link from 'next/link';

export function CTASection() {
  return (
    <section className="py-20 bg-primary/5">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Size Özel Hizmet Paketleri
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          İhtiyaçlarınıza uygun özel hizmet paketlerimiz hakkında bilgi almak için bizimle iletişime geçin.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/iletisim"
            className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-primary-foreground bg-primary hover:bg-primary/90 transition-colors"
          >
            Bize Ulaşın
          </Link>
          <Link
            href="/randevu"
            className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-primary border border-primary hover:bg-primary/10 transition-colors"
          >
            Randevu Alın
          </Link>
        </div>
      </div>
    </section>
  );
} 