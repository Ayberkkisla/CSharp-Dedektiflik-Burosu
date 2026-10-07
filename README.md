# C# Dedektiflik Bürosu — Dedektif Nokta

C# programlama öğrenmek için tek dosyalık bir HTML/JS oyunu. Dedektif Nokta'nın masasında C#'ın temellerini 23 vakada çözersin: konsol, döngüler, metotlar, koleksiyonlar, stringler, OOP ve daha fazlası.

## Özellikler

- 🎮 Birleşik senaryo tabanlı ilerlemeli 23 dosya (vaka)
- ✅ Soru kartları, kanıt sorusu, kod tamamlama, yapboz, boss dosya ve ekstralar
- 🔥 Günlük seri ve XP sistemi (`localStorage` + Firestore)
- 👤 Google hesabıyla giriş; save farklı cihazlarda senkron
- 🕵️‍♂️ Noir teması, yagmur/pencere/ofis arkaplan, maskot ipuçları
- 📱 Mobil ve masaüstü uyumlu arayüz
- ✔️ Sorulardaki tüm kod örnekleri ve çıktılar `dotnet` ile derlenip doğrulandı

## Teknolojiler

- HTML / CSS / JavaScript (frameworksüz, tek dosyada)
- Firebase Authentication (Google) + Cloud Firestore
- Netlify üzerinde yayınlanabilir

## Kurulum

### Canlı bakış
1. Siteyi yerelde aç: `index.html`'i bir tarayıcıda sürükle-bırak
2. Firebase'in giriş/firestore servisleri kullanıcı kendi env'indedir; kendi firebase projenle çalışmak istersen `index.html` içindeki firebaseConfig bölümünü kendi proje anahtarıyla değiştir, `Authentication > Google` ve `Firestore`'u aktif et, domain'i `Authorized domains`'e ekle.

### Netlify'da yayınlama
1. `index.html`'i ve (gerekiyorsa) `google5af49ed490352552.html`'i aynı klasöre koy
2. Netlify'da klasötü sürükle veya GitHub'dan import et

### Firestore kuralları
```js
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /kayitlar/{uid} {
      allow read, write: if request.auth != null && request.auth.uid == uid;
    }
  }
}
```

## Kayıtlar / Lisans

Ders içeriği: tr.wikibooks *C#* kaynaklarından (CC BY-SA 4.0) esintilidir. Proje kodu: MIT.
