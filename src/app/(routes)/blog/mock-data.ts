import { IBlogPost } from "@/types/blog";

export const MOCK_POSTS: IBlogPost[] = [
  {
    id: "1",
    title: "Cilt Bakımında Doğal Yöntemler",
    slug: "cilt-bakiminda-dogal-yontemler",
    excerpt: "Cildinizi doğal yöntemlerle nasıl koruyabilir ve bakımını yapabilirsiniz? İşte size özel ipuçları...",
    content: `
# Cilt Bakımında Doğal Yöntemler

Cilt bakımı, sağlıklı ve güzel bir görünüm için oldukça önemlidir. Doğal yöntemlerle yapılan cilt bakımı, hem ekonomik hem de sağlıklı bir alternatif sunar.

## Doğal Yüz Maskeleri

### 1. Bal ve Yoğurt Maskesi
- 1 yemek kaşığı bal
- 1 yemek kaşığı yoğurt

Karışımı cildinize uygulayın ve 15-20 dakika bekletin. Ilık su ile durulayın.

### 2. Avokado Maskesi
- 1/2 olgun avokado
- 1 tatlı kaşığı zeytinyağı

Karışımı cildinize uygulayın ve 20 dakika bekletin. Ilık su ile durulayın.

## Günlük Cilt Bakım Rutini

1. Temizleme
2. Tonlama
3. Nemlendirme
4. Güneş Koruyucu

## Önemli İpuçları

- Bol su için
- Düzenli uyuyun
- Sağlıklı beslenin
- Stresten uzak durun`,
    coverImage: "https://images.unsplash.com/photo-1596178065887-1198b6148b2b",
    category: {
      id: "1",
      name: "Cilt Bakımı",
      slug: "cilt-bakimi"
    },
    author: {
      id: "1",
      name: "Dr. Ayşe Yılmaz",
      avatar: "https://ui-avatars.com/api/?name=Ayşe+Yılmaz&background=random",
      role: "Dermatolog"
    },
    publishedAt: "2024-03-20T10:00:00Z",
    readingTime: 5,
    tags: ["cilt bakımı", "doğal bakım", "güzellik"]
  },
  {
    id: "2",
    title: "Sağlıklı Saçlar İçin Beslenme Önerileri",
    slug: "saglikli-saclar-icin-beslenme-onerileri",
    excerpt: "Saç sağlığını destekleyen besinler ve beslenme önerileri...",
    content: `
# Sağlıklı Saçlar İçin Beslenme Önerileri

Saç sağlığı, sadece dışarıdan bakımla değil, aynı zamanda doğru beslenme ile de desteklenmelidir. İşte sağlıklı saçlar için beslenme önerileri ve püf noktaları.

## Saç Sağlığını Destekleyen Besinler

### 1. Protein Kaynakları
- Yumurta
- Balık
- Kırmızı et
- Bakliyat

Protein, saç tellerinin ana yapı taşıdır. Yeterli protein alımı, saç büyümesi ve onarımı için esastır.

### 2. Vitamin ve Mineraller

#### A Vitamini
- Havuç
- Ispanak
- Tatlı patates

Saç foliküllerinin sağlığı için önemlidir.

#### B Vitaminleri
- Tam tahıllar
- Yeşil yapraklı sebzeler
- Kuruyemişler

Saç büyümesini destekler ve saç dökülmesini önler.

#### C Vitamini
- Turunçgiller
- Çilek
- Kivi

Kolajen üretimini destekleyerek saç yapısını güçlendirir.

### 3. Omega-3 Yağ Asitleri
- Somon
- Chia tohumu
- Ceviz
- Keten tohumu

Saç derisini nemlendirir ve saç parlaklığını artırır.

## Günlük Beslenme Önerileri

1. Kahvaltı:
   - Yumurta
   - Tam tahıllı ekmek
   - Avokado
   - Yeşil çay

2. Öğle:
   - Izgara balık
   - Yeşil salata
   - Kinoa
   - Zeytinyağı

3. Akşam:
   - Mercimek çorbası
   - Tavuk göğsü
   - Buharda sebzeler
   - Yoğurt

## Önemli İpuçları

- Günde en az 2 litre su için
- İşlenmiş gıdalardan uzak durun
- Düzenli öğün saatleri belirleyin
- Şeker tüketimini sınırlayın
- Alkol ve sigaradan uzak durun

## Takviyeler

Doktor kontrolünde kullanılması gereken takviyeler:
- Biotin
- Demir
- Çinko
- D vitamini

Not: Herhangi bir takviye kullanmadan önce mutlaka bir sağlık uzmanına danışın.`,
    coverImage: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e",
    category: {
      id: "2",
      name: "Saç Bakımı",
      slug: "sac-bakimi"
    },
    author: {
      id: "2",
      name: "Uzm. Dyt. Mehmet Demir",
      avatar: "https://ui-avatars.com/api/?name=Mehmet+Demir&background=random",
      role: "Beslenme Uzmanı"
    },
    publishedAt: "2024-03-18T14:30:00Z",
    readingTime: 4,
    tags: ["saç bakımı", "beslenme", "sağlık"]
  }
]; 