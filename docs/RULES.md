# Beatty Center - Geliştirme ve IDE Kuralları

## IDE ve Tooling Konfigürasyonları 🛠️

### Editör Ayarları
```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "editor.tabSize": 2,
  "editor.insertSpaces": true,
  "editor.rulers": [80, 100],
  "editor.wordWrap": "on",
  "files.trimTrailingWhitespace": true,
  "files.insertFinalNewline": true
}
```

### ESLint Ayarları
```json
{
  "extends": [
    "next/core-web-vitals",
    "prettier"
  ],
  "rules": {
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/no-explicit-any": "warn",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn"
  }
}
```

### Prettier Ayarları
```json
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": true,
  "printWidth": 80,
  "tabWidth": 2,
  "useTabs": false,
  "bracketSpacing": true,
  "arrowParens": "always"
}
```

### TypeScript Ayarları
```json
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx"],
  "exclude": ["node_modules"]
}
```

### Git Ayarları
```gitignore
# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# local env files
.env*.local

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts
```

### VS Code Eklentileri
- ESLint
- Prettier
- Tailwind CSS IntelliSense
- TypeScript and JavaScript Language Features
- Git Lens
- Error Lens
- Auto Close Tag
- Auto Rename Tag
- Path Intellisense
- Import Cost

## Beatty Center - Geliştirme Kuralları

## Pre-Coding Checklist ✅
Her yeni kod değişikliğinden önce kontrol edilecek maddeler:

1. [ ] İlgili bileşenin tüm bağımlılıklarını kontrol et
2. [ ] TypeScript tip tanımlamalarını doğrula
3. [ ] Mevcut dosya yapısına uygunluğunu kontrol et
4. [ ] SEO gereksinimlerini gözden geçir
5. [ ] Responsive tasarım gereksinimlerini kontrol et
6. [ ] Performance optimizasyonlarını unutma
7. [ ] Erişilebilirlik standartlarına uygunluğu kontrol et

## Kod Yazım Kuralları 📝

### 1. Dosya Organizasyonu
- Her bileşen kendi klasöründe olmalı
- İlgili tipler `types/` altında tanımlanmalı
- Sabitler `constants/` altında tutulmalı
- SEO yapılandırmaları `lib/seo/` altında olmalı

### 2. Naming Conventions
- Bileşen isimleri PascalCase
- Fonksiyon isimleri camelCase
- Sabit değişkenler UPPER_SNAKE_CASE
- Dosya isimleri kebab-case

### 3. TypeScript Kullanımı
- Her prop için tip tanımlaması zorunlu
- any kullanımından kaçın
- Interface isimleri I prefix'i ile başlamalı
- Generic tipleri anlamlı isimlerle tanımla

### 4. Component Yapısı
- Tek sorumluluk prensibi
- Props interface'i component üstünde tanımlanmalı
- Default props kullanımı
- Prop drilling'den kaçın

### 5. Stil Kuralları
- Tailwind class'ları organize edilmeli
- Custom class'lar modül CSS ile yazılmalı
- Responsive tasarım mobile-first yaklaşımı
- Theme değişkenleri kullanımı

### 6. SEO ve Performans
- Her sayfa için meta tags
- JSON-LD yapılandırması
- Image optimization
- Lazy loading implementasyonu

### 7. Git Commit Kuralları
- Conventional commits kullan
- Her commit tek bir değişiklik içermeli
- Branch isimleri feature/, bugfix/ prefix'i ile başlamalı
- PR template'ini kullan

## Hata Önleme Stratejileri 🛡️

### Kod Değişikliği Öncesi
1. İlgili dokümantasyonu gözden geçir
2. Mevcut implementasyonu analiz et
3. Gerekli testleri planla
4. Code review checklist'i hazırla

### Kod Değişikliği Sırasında
1. Küçük, test edilebilir değişiklikler yap
2. Sık commit at
3. TypeScript errors'ları çözümle
4. Console.log'ları temizle

### Kod Değişikliği Sonrası
1. Self code review yap
2. Linter hatalarını kontrol et
3. Test coverage'ı doğrula
4. Dokümantasyonu güncelle

## Önemli Notlar 📌
- Her değişiklik öncesi bu listeyi gözden geçir
- Karmaşık değişikliklerde pair programming yap
- Düzenli olarak knowledge sharing oturumları düzenle
- Technical debt'i yönet ve dokümante et

## Yardımcı Kaynaklar 📚
- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Best Practices](https://reactjs.org/docs/thinking-in-react.html)

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
│   │   ├── hizmetler/
│   │   │   ├── [slug]/
│   │   │   └── page.tsx
│   │   ├── hakkimizda/
│   │   ├── blog/
│   │   └── iletisim/
│   ├── components/
│   ├── lib/
│   └── styles/
├── public/
└── docs/
```

### Klasör Yapısı Kuralları
1. Her özellik kendi route klasöründe olmalıdır
2. Dinamik sayfalar için [parametre] formatında klasör kullanılmalıdır
3. Sayfa bileşenleri ilgili route klasöründe tutulmalıdır
4. Paylaşılan bileşenler components/ altında organize edilmelidir
5. Her route için ayrı bir types.ts dosyası oluşturulmalıdır
6. Her route için ayrı bir utils.ts dosyası oluşturulmalıdır (gerektiğinde)
7. Her route için ayrı bir constants.ts dosyası oluşturulmalıdır (gerektiğinde)
8. Aynı isimde klasör oluşturmadan önce mevcut yapı kontrol edilmelidir
9. Route'lar arası paylaşılan tipler ve utils'ler lib/ altında tutulmalıdır

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

## AI Assistant Kontrol Noktaları 🤖
Her yeni görev veya sayfa geliştirmesi öncesinde AI Assistant'ın kontrol etmesi gereken maddeler:

### Her Yeni Göreve Başlamadan Önce
1. [ ] TASK.md dosyasını kontrol et ve mevcut görevi doğrula
2. [ ] Önceki görevlerin tamamlanma durumunu gözden geçir
3. [ ] Proje yapısını (docs/features.md) tekrar incele
4. [ ] Mevcut branch ve commit geçmişini kontrol et

### Her Sayfa/Component Değişikliğinde
1. [ ] RULES.md dosyasındaki standartları gözden geçir
2. [ ] Dosya organizasyonunu kontrol et
3. [ ] Önceki implementasyonlarla tutarlılığı doğrula
4. [ ] TypeScript tip kontrollerini yap

### Her Oturum Başlangıcında
1. [ ] Son commit'leri ve değişiklikleri gözden geçir
2. [ ] Proje bağlamını yeniden değerlendir
3. [ ] Kullanıcının son talimatlarını tekrar oku
4. [ ] Geliştirme önceliklerini doğrula

### Hata Durumunda
1. [ ] Önceki başarılı implementasyonlara geri dön
2. [ ] Kullanıcıdan açıklama iste
3. [ ] Dokümantasyonu tekrar gözden geçir
4. [ ] Basit ve test edilebilir adımlarla ilerle

### Düzenli Kontroller
1. [ ] Her 3 değişiklikte bir TASK.md kontrolü
2. [ ] Her yeni sayfada features.md kontrolü
3. [ ] Her major değişiklikte RULES.md kontrolü
4. [ ] Her oturum sonunda progress kontrolü 