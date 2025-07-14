export interface Testimonial {
  id: string;
  name: string;
  role?: string;
  content: string;
  rating: number;
  image?: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Ayşe Yılmaz',
    role: 'Öğretmen',
    content: 'HydraFacial bakımı sonrası cildim çok daha canlı ve parlak görünüyor. Profesyonel ekip ve hijyenik ortam için teşekkürler!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330'
  },
  {
    id: '2',
    name: 'Mehmet Kaya',
    content: 'Lazer epilasyon seanslarım çok başarılı geçiyor. Sonuçlardan çok memnunum ve fiyatlar da gayet uygun.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e'
  },
  {
    id: '3',
    name: 'Zeynep Demir',
    role: 'Mimar',
    content: 'Cilt bakımı konusunda gerçekten uzman bir ekip. Her geldiğimde aynı kaliteli hizmeti alıyorum.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80'
  }
]; 