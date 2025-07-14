import { Mail, MapPin, Phone, Clock } from "lucide-react"

export function ContactInfo() {
  return (
    <div className="space-y-6">
      <div className="flex items-start gap-4">
        <MapPin className="w-6 h-6 text-primary mt-1" />
        <div>
          <h3 className="font-semibold mb-1">Adres</h3>
          <p className="text-muted-foreground">
            Atatürk Mah. Turgut Özal Bulvarı No:123
            <br />
            Ataşehir, İstanbul
          </p>
        </div>
      </div>

      <div className="flex items-start gap-4">
        <Phone className="w-6 h-6 text-primary mt-1" />
        <div>
          <h3 className="font-semibold mb-1">Telefon</h3>
          <p className="text-muted-foreground">
            <a href="tel:+902161234567" className="hover:text-primary transition-colors">
              +90 (216) 123 45 67
            </a>
          </p>
        </div>
      </div>

      <div className="flex items-start gap-4">
        <Mail className="w-6 h-6 text-primary mt-1" />
        <div>
          <h3 className="font-semibold mb-1">E-posta</h3>
          <p className="text-muted-foreground">
            <a href="mailto:info@beattycenter.com" className="hover:text-primary transition-colors">
              info@beattycenter.com
            </a>
          </p>
        </div>
      </div>

      <div className="flex items-start gap-4">
        <Clock className="w-6 h-6 text-primary mt-1" />
        <div>
          <h3 className="font-semibold mb-1">Çalışma Saatleri</h3>
          <div className="text-muted-foreground space-y-1">
            <p>Pazartesi - Cumartesi: 09:00 - 20:00</p>
            <p>Pazar: Kapalı</p>
          </div>
        </div>
      </div>
    </div>
  )
} 