'use client';

import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageCircle,
  ExternalLink
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const contactInfo = {
  address: 'Atatürk Caddesi No:123, Alsancak, İzmir',
  phone: '+90 (232) 123 45 67',
  email: 'info@beattycenter.com',
  whatsapp: '+90 532 123 45 67',
  instagram: '@beattycenter',
  workingHours: {
    weekdays: '09:00 - 20:00',
    saturday: '10:00 - 18:00',
    sunday: 'Kapalı'
  }
};

export default function ContactInfo() {
  return (
    <div className="bg-card p-6 rounded-xl space-y-8">
      <h2 className="text-2xl font-semibold mb-6">İletişim Bilgileri</h2>
      
      {/* Address */}
      <div className="flex items-start space-x-4">
        <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
        <div>
          <h3 className="font-medium mb-1">Adres</h3>
          <p className="text-muted-foreground">{contactInfo.address}</p>
          <a 
            href={`https://maps.google.com/?q=${encodeURIComponent(contactInfo.address)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-primary hover:underline inline-flex items-center mt-2"
          >
            Yol Tarifi Al
            <ExternalLink className="w-4 h-4 ml-1" />
          </a>
        </div>
      </div>

      {/* Phone */}
      <div className="flex items-start space-x-4">
        <Phone className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
        <div>
          <h3 className="font-medium mb-1">Telefon</h3>
          <a 
            href={`tel:${contactInfo.phone.replace(/\D/g, '')}`}
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            {contactInfo.phone}
          </a>
        </div>
      </div>

      {/* Email */}
      <div className="flex items-start space-x-4">
        <Mail className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
        <div>
          <h3 className="font-medium mb-1">Email</h3>
          <a 
            href={`mailto:${contactInfo.email}`}
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            {contactInfo.email}
          </a>
        </div>
      </div>

      {/* Working Hours */}
      <div className="flex items-start space-x-4">
        <Clock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
        <div>
          <h3 className="font-medium mb-1">Çalışma Saatleri</h3>
          <div className="text-muted-foreground space-y-1">
            <p>Hafta içi: {contactInfo.workingHours.weekdays}</p>
            <p>Cumartesi: {contactInfo.workingHours.saturday}</p>
            <p>Pazar: {contactInfo.workingHours.sunday}</p>
          </div>
        </div>
      </div>

      {/* Social & Contact Buttons */}
      <div className="flex flex-col sm:flex-row gap-3">
        <Button 
          className="flex-1 flex items-center justify-center space-x-2"
          onClick={() => window.open(`https://wa.me/${contactInfo.whatsapp.replace(/\D/g, '')}`, '_blank')}
        >
          <MessageCircle className="w-4 h-4" />
          <span>WhatsApp</span>
        </Button>
        <Button 
          variant="outline"
          className="flex-1 flex items-center justify-center space-x-2"
          onClick={() => window.open(`https://instagram.com/${contactInfo.instagram.replace('@', '')}`, '_blank')}
        >
          <span>Instagram</span>
          <ExternalLink className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
} 