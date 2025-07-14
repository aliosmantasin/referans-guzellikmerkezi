# Beatty Center - Özellikler

## 1. Layout ve Navigasyon
- Header/Navbar
  - Responsive tasarım
  - Logo ve marka kimliği
  - Dinamik navigasyon menüsü
  - Tema değiştirici (Dark/Light mode)
  - Call-to-action butonu (Randevu Al)
  
- Mobil Menü (Sheet Component)
  - Sağdan açılır menü yapısı
  - Animasyonlu geçişler
  - Backdrop blur efekti
  - Otomatik kapanma özelliği
  - Kolay erişilebilir navigasyon
  
- Footer
  - Kurumsal bilgiler
  - Hızlı erişim linkleri
  - İletişim bilgileri
  - Sosyal medya bağlantıları

## 2. Ana Sayfa Özellikleri
- Hero Section
  - Tam ekran slider
  - Çarpıcı görsellerle desteklenmiş başlıklar
  - Call-to-action butonları
  
- Öne Çıkan Hizmetler
  - Grid layout ile hizmet kartları
  - Hover efektleri
  - Hızlı rezervasyon bağlantıları
  
- Müşteri Yorumları
  - Carousel slider
  - Yıldız değerlendirme sistemi
  - Müşteri fotoğrafları
  
- İstatistikler
  - Animasyonlu sayaçlar
  - Başarı hikayesi
  - Müşteri memnuniyet oranları

## 3. Hakkımızda Sayfası
- Merkez Tanıtımı
  - Paralaks efektli başlık
  - Zengin içerik
  - Galeri bölümü
  
- Ekip Bilgileri
  - Uzman profilleri
  - Uzmanlık alanları
  - Deneyim bilgileri
  
- Misyon ve Vizyon
  - İnfografik tasarım
  - Animasyonlu içerik
  - Değerler listesi

## 4. Hizmetler Sayfası
- Hizmet Kategorileri
  - Filtreleme sistemi
  - Detaylı açıklamalar
  - Fiyat bilgileri
  
- Hizmet Detayları
  - Öncesi/sonrası görseller
  - Süreç açıklamaları
  - SSS bölümü
  
- Rezervasyon Sistemi
  - Online randevu alma
  - Takvim entegrasyonu
  - SMS/Email bilgilendirme

## 5. İletişim Sayfası
- İletişim Formu
  - Akıllı form validasyonu
  - Otomatik yanıt sistemi
  - Dosya yükleme desteği
  
- Harita
  - Google Maps entegrasyonu
  - Yol tarifi
  - Sokak görünümü
  
- İletişim Bilgileri
  - Çalışma saatleri
  - Sosyal medya bağlantıları
  - WhatsApp iletişim butonu

## 6. Blog Sayfası
- Makale Listesi
  - Grid/Liste görünümü
  - Kategori filtreleme
  - Arama fonksiyonu
  
- Makale Detay
  - Zengin içerik editörü
  - Sosyal medya paylaşım
  - İlgili makaleler
  
- Blog Sidebar
  - Popüler yazılar
  - Kategori listesi
  - Etiket bulutu

## 7. Genel Özellikler
- Dark/Light Mode
  - Otomatik tema değişimi
  - Sistem teması uyumu
  - Tema tercihi kaydetme
  - Header ve mobil menüde tema değiştirici
  
- SEO Optimizasyonu
  - Meta etiketleri
  - Sitemap
  - Robots.txt
  
- Performans
  - Lazy loading
  - Image optimization
  - Caching stratejisi
  - Component bazlı kod bölünmesi
  
- Responsive Tasarım
  - Mobile-first yaklaşım
  - Breakpoint optimizasyonu (sm, md, lg, xl)
  - Touch-friendly UI
  - Özelleştirilmiş mobil navigasyon

## 8. Yönetim Paneli
- İçerik Yönetimi
  - Blog yönetimi
  - Hizmet yönetimi
  - Medya kütüphanesi
  
- Randevu Yönetimi
  - Takvim görünümü
  - Müşteri bilgileri
  - Durum takibi
  
- Analitik
  - Ziyaretçi istatistikleri
  - Dönüşüm takibi
  - Raporlama sistemi

## 9. Proje Dosya Yapısı
- `src/` - Ana kaynak kod dizini
  - `app/` - Next.js uygulama yönlendirmeleri ve sayfa bileşenleri
    - `(routes)/` - Sayfa rotaları
      - `hakkimizda/` - Hakkımızda sayfası
      - `hizmetler/` - Hizmetler sayfası
      - `iletisim/` - İletişim sayfası
      - `blog/` - Blog sayfası ve makale detayları
    - `layout.tsx` - Ana uygulama düzeni
    - `page.tsx` - Ana sayfa
  
  - `components/` - Yeniden kullanılabilir bileşenler
    - `sections/` - Sayfa bölümleri
      - `about/` - Hakkımızda sayfası bileşenleri
      - `home/` - Ana sayfa bileşenleri
      - `services/` - Hizmetler sayfası bileşenleri
    - `ui/` - Genel UI bileşenleri (butonlar, kartlar, vb.)
    - `shared/` - Paylaşılan bileşenler (header, footer, vb.)
  
  - `lib/` - Yardımcı kütüphaneler ve yapılandırmalar
    - `seo/` - SEO ile ilgili yapılandırmalar
      - `structured-data/` - JSON-LD yapılandırmaları
    - `utils/` - Yardımcı fonksiyonlar
  
  - `types/` - TypeScript tip tanımlamaları
    - `api.ts` - API yanıt tipleri
    - `components.ts` - Bileşen prop tipleri
    - `common.ts` - Genel tipler
  
  - `constants/` - Sabit değerler
    - `routes.ts` - Rota sabitleri
    - `navigation.ts` - Navigasyon öğeleri
    - `config.ts` - Site yapılandırması
  
  - `styles/` - Global stil dosyaları
    - `globals.css` - Global CSS
    - `tailwind.css` - Tailwind yapılandırması

- `public/` - Statik dosyalar
  - `images/` - Görsel dosyaları
  - `fonts/` - Font dosyaları
  - `icons/` - İkon dosyaları

- `docs/` - Proje dokümantasyonu
  - `features.md` - Özellik listesi
  - `TASK.md` - Görev takibi
  - `CHANGELOG.md` - Değişiklik günlüğü

- Kök Dizin Dosyaları
  - `package.json` - Proje bağımlılıkları ve scriptler
  - `tsconfig.json` - TypeScript yapılandırması
  - `tailwind.config.js` - Tailwind yapılandırması
  - `next.config.js` - Next.js yapılandırması
  - `README.md` - Proje açıklaması 