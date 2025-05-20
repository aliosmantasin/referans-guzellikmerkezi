# Beatty Center - Geliştirme Kuralları

## Kod Standartları

### Genel Kurallar
1. Tüm kod TypeScript ile yazılmalıdır
2. Her komponent kendi dizininde bulunmalıdır
3. Her sayfanın SEO optimizasyonu yapılmalıdır
4. Tüm komponentler responsive olmalıdır
5. Dark/Light mode desteği sağlanmalıdır
6. Paket yöneticisi olarak pnpm kullanılmalıdır
7. pnpm workspace kullanılarak monorepo yapısı desteklenmelidir

### Dosya Yapısı
```
src/
├── app/
│   ├── (routes)/
│   ├── components/
│   ├── lib/
│   └── styles/
├── public/
└── docs/
```

### Komponent Kuralları
1. Her komponent için ayrı bir dizin oluşturulmalıdır
2. İlgili stil dosyaları komponent dizininde tutulmalıdır
3. Büyük komponentler daha küçük parçalara bölünmelidir
4. Props interface'leri tanımlanmalıdır
5. Gerekli JSDoc açıklamaları eklenmelidir

### Stil Kuralları
1. Tailwind CSS kullanılmalıdır
2. Global stiller `styles` dizininde tutulmalıdır
3. Renk paleti theme dosyasında tanımlanmalıdır
4. Responsive tasarım için Tailwind breakpoint'leri kullanılmalıdır

### SEO Kuralları
1. Her sayfa için meta etiketleri tanımlanmalıdır
2. Semantic HTML elementleri kullanılmalıdır
3. Alt etiketleri eksiksiz doldurulmalıdır
4. Sayfa başlıkları doğru hiyerarşide kullanılmalıdır

### Performans Kuralları
1. Büyük komponentler için lazy loading kullanılmalıdır
2. Görsel optimizasyonları yapılmalıdır
3. Bundle size kontrol edilmelidir
4. Gereksiz re-render'lar önlenmelidir

### Git Kuralları
1. Commit mesajları açıklayıcı olmalıdır
2. Feature branch'ler kullanılmalıdır
3. PR'lar küçük ve odaklı olmalıdır
4. Code review yapılmadan merge edilmemelidir

### Test Kuralları
1. Kritik komponentler için unit testler yazılmalıdır
2. E2E testleri eklenmelidir
3. Test coverage takip edilmelidir

### Güvenlik Kuralları
1. Input validasyonları yapılmalıdır
2. API endpointleri korunmalıdır
3. Hassas veriler env dosyasında tutulmalıdır
4. Dependency güvenlik kontrolleri yapılmalıdır

### Erişilebilirlik Kuralları
1. WCAG 2.1 standartlarına uyulmalıdır
2. Klavye navigasyonu desteklenmelidir
3. Screen reader uyumluluğu sağlanmalıdır
4. Renk kontrastları kontrol edilmelidir 