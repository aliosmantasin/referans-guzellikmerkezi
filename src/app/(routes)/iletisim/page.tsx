import { Metadata } from 'next';
import ContactForm from './components/contact-form';
import ContactInfo from './components/contact-info';
import GoogleMap from './components/google-map';

export const metadata: Metadata = {
  title: 'İletişim | Beatty Center',
  description: 'Beatty Center ile iletişime geçin. Sorularınız için bize ulaşın, randevu alın veya lokasyonumuzu ziyaret edin.',
  openGraph: {
    title: 'İletişim | Beatty Center',
    description: 'Beatty Center ile iletişime geçin. Sorularınız için bize ulaşın, randevu alın veya lokasyonumuzu ziyaret edin.',
  }
};

export default function ContactPage() {
  return (
    <main className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">İletişime Geçin</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Sorularınız için bize ulaşın, randevu alın veya merkezimizi ziyaret edin. 
            Size yardımcı olmaktan mutluluk duyarız.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Contact Form */}
          <ContactForm />
          
          {/* Contact Information */}
          <ContactInfo />
        </div>

        {/* Google Maps */}
        <div className="rounded-xl overflow-hidden h-[400px]">
          <GoogleMap />
        </div>
      </div>
    </main>
  );
} 