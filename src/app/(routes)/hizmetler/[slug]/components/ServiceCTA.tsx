import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function ServiceCTA() {
  return (
    <div className="bg-primary/5 rounded-2xl p-8 text-center">
      <h2 className="text-2xl font-bold mb-4">
        Bu hizmet hakkında detaylı bilgi almak ister misiniz?
      </h2>
      <p className="text-muted-foreground mb-6">
        Uzman ekibimiz sorularınızı yanıtlamak için hazır.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button size="lg" variant="outline" asChild>
          <Link href="/iletisim">
            Bize Ulaşın
          </Link>
        </Button>
        <Button size="lg" asChild>
          <Link href="/randevu">
            Hemen Randevu Alın
          </Link>
        </Button>
      </div>
    </div>
  );
} 