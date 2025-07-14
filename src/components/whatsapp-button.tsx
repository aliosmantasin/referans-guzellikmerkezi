import { FaWhatsapp } from 'react-icons/fa';

export function WhatsAppButton() {
  const phoneNumber = '05437214839';
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-transform hover:scale-110 hover:bg-green-600"
      aria-label="WhatsApp ile iletişime geç"
    >
      <FaWhatsapp className="h-8 w-8" />
    </a>
  );
} 