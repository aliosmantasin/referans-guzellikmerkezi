import { Service, ServiceCategory } from "@/types/services";

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: "cilt-bakimi",
    name: "Cilt Bakımı",
    description: "Cildinizin ihtiyacına özel profesyonel bakım uygulamaları",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070",
  },
  {
    id: "lazer-epilasyon",
    name: "Lazer Epilasyon",
    description: "Son teknoloji lazer cihazlarla kalıcı tüy alma işlemleri",
    image: "https://vr3j8vmadakibxk6.public.blob.vercel-storage.com/referanssites-folder/referansBeautyCenter/lazer-epilasyon.webp",
  },
  {
    id: "vucut-bakimi",
    name: "Vücut Bakımı",
    description: "Vücudunuzu yenileyen ve canlandıran özel bakım uygulamaları",
    image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=2070",
  }
];

export const SERVICES: Record<string, Service> = {
  "hydrafacial": {
    id: 'hydrafacial',
    slug: 'hydrafacial',
    title: "HydraFacial Bakımı",
    description: "Cildinizi derinlemesine temizleyen ve nemlendiren 6 aşamalı özel bakım uygulaması.",
    fullDescription: "HydraFacial, cildinizi derinlemesine temizleyen, nemlendiren ve yenileyen 6 aşamalı özel bir bakım uygulamasıdır. Cilt tipinize özel olarak seçilen serumlarla, cildinizin ihtiyacı olan bakımı almasını sağlar.",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070",
    duration: "45 dk",
    price: "1.200 ₺",
    category: "cilt-bakimi",
    benefits: [
      "Derinlemesine temizlik",
      "Cilt tonu eşitleme",
      "Nem dengesi sağlama",
      "Gözenek sıkılaştırma",
      "Cilt bariyerini güçlendirme"
    ],
    process: [
      "Cilt analizi ve temizlik",
      "Peeling uygulaması",
      "Vakum ile siyah nokta temizliği",
      "Serum uygulaması",
      "Nemlendirme ve koruma"
    ]
  },
  "lazer-epilasyon": {
    id: 'lazer-epilasyon',
    slug: 'lazer-epilasyon',
    title: "Lazer Epilasyon",
    description: "Son teknoloji cihazlarla kalıcı tüy alma işlemi",
    fullDescription: "Son teknoloji lazer cihazlarımızla, güvenli ve etkili bir şekilde kalıcı tüy alma işlemi uyguluyoruz. Cilt tipinize uygun lazer teknolojisi ile maksimum sonuç almanızı sağlıyoruz.",
    image: "https://vr3j8vmadakibxk6.public.blob.vercel-storage.com/referanssites-folder/referansBeautyCenter/lazer-epilasyon.webp",
    duration: "30-60 dk",
    price: "500 ₺'den başlayan",
    category: "lazer-epilasyon",
    benefits: [
      "Kalıcı tüy azalması",
      "Hızlı ve etkili sonuç",
      "Tüm cilt tiplerine uygun",
      "Minimum ağrı",
      "Güvenli uygulama"
    ],
    process: [
      "Cilt analizi",
      "Lazer ayarlarının belirlenmesi",
      "Test uygulaması",
      "Lazer epilasyon işlemi",
      "Soğutma ve bakım"
    ]
  },
  "anti-aging-bakim": {
    id: 'anti-aging-bakim',
    slug: 'anti-aging-bakim',
    title: "Anti-Aging Bakım",
    description: "Cildinizin yaşlanma belirtileriyle profesyonel şekilde mücadele ediyoruz.",
    fullDescription: "Cildinizin yaşlanma belirtileriyle profesyonel şekilde mücadele ediyoruz. İleri teknoloji cihazlar ve etkisi kanıtlanmış ürünlerle, kişiye özel anti-aging bakım programları sunuyoruz.",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070",
    duration: "60-90 dk",
    price: "Konsültasyon Sonrası Belirlenecektir",
    category: "cilt-bakimi",
    benefits: [
      "Kırışıklıkların azaltılması",
      "Cilt elastikiyetinin artırılması",
      "Cilt tonunun dengelenmesi",
      "Kollajen üretiminin uyarılması",
      "Nem dengesinin sağlanması",
      "Cilt dokusunun iyileştirilmesi"
    ],
    process: [
      "Detaylı cilt analizi ve yaşlanma belirtilerinin değerlendirilmesi",
      "Kişiye özel anti-aging protokolünün belirlenmesi",
      "Derin temizlik ve peeling uygulaması",
      "Özel serum ve maskeler ile bakım",
      "LED terapi ve stimülasyon",
      "Nemlendirme ve koruyucu bakım"
    ]
  },
  "vucut-bakimi": {
    id: 'vucut-bakimi',
    slug: 'vucut-bakimi',
    title: "Vücut Bakımı",
    description: "Vücudunuzu yenileyen ve canlandıran özel bakım uygulamaları",
    fullDescription: "Vücudunuzu yenileyen ve canlandıran özel bakım uygulamalarımızla, cildinizin doğal güzelliğini ortaya çıkarıyoruz. Selülit tedavisi, vücut sıkılaştırma ve daha fazlası.",
    image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=2070",
    duration: "60-90 dk",
    price: "800 ₺'den başlayan",
    category: "vucut-bakimi",
    benefits: [
      "Selülit görünümünün azaltılması",
      "Vücut sıkılaştırma",
      "Cilt tonu eşitleme",
      "Nem dengesi sağlama",
      "Kan dolaşımının artırılması"
    ],
    process: [
      "Vücut analizi",
      "Derin temizlik",
      "Masaj uygulaması",
      "Özel bakım ürünleri ile bakım",
      "Soğutma ve koruma"
    ]
  }
}; 