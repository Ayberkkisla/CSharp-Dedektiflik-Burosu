# C# Dedektiflik Bürosu — Dedektif Nokta

C# programlama öğrenmek için tarayıcı tabanlı, senaryo odanlı bir HTML/JS oyunu. Dedektif Nokta'nın masasında C#'ın temellerini 23 vakada çözersin: konsol, döngüler, metotlar, koleksiyonlar, stringler, OOP ve daha fazlası.

## Özellikler

- 🎮 Senaryo tabanlı ilerlemeli 23 dosya (vaka), 4 ünite
- ✅ 500 soru: çoktan seçmeli, KOD TAMAMLA, yapboz, boss soruları
- 🔥 Günlük seri ve XP sistemi (`localStorage` + Firestore)
- 👤 Google hesabıyla giriş; ilerleme cihazlar arası senkronlanır
- 🕵️‍♂️ Noir teması, yağmur/pencere/ofis arkaplan, maskot ipuçları
- 📱 Mobil ve masaüstü uyumlu
- 📦 PWA: `sw.js` ile çevrimdışı önbellek
- ✔️ KOD TAMAMLA sorularının doğru cevapları CI'da .NET ile derlenip doğrulanır

## Ekran Görüntüleri

| Dosya Arşivi / Rehber                                  | Vaka Açılışı                                          |
| ------------------------------------------------------ | ----------------------------------------------------- |
| ![Giriş rehberi](docs/screenshots/01-giris-rehber.png) | ![Vaka açılışı](docs/screenshots/02-vaka-acilisi.png) |

| Başvuru Kartı                                           | Ders Notu                                       |
| ------------------------------------------------------- | ----------------------------------------------- |
| ![Başvuru kartı](docs/screenshots/03-basvuru-karti.png) | ![Ders notu](docs/screenshots/04-ders-notu.png) |

| Kanıt Sorusu                                          |
| ----------------------------------------------------- |
| ![Kanıt sorusu](docs/screenshots/05-kanit-sorusu.png) |

## Kurulum

```bash
npm install
npm start        # http://localhost:8000
```

> Port 8000 şart: Firebase API key referrer kısıtlaması `localhost:8000`'e izin veriyor.

### Firebase yapılandırması

`firebase-config.js` repoda **tutulmaz** (`.gitignore`'da). Şablondan oluştur:

```bash
copy firebase-config.example.js firebase-config.js
```

Sonra `firebase-config.js` içindeki değerleri kendi Firebase projenle değiştir.
Firebase konsolundan: **Proje ayarları → Web uygulamaları → SDK kurulum**.

Kendi projeni kullanacaksan: `Authentication > Google` ve `Firestore`'u aktif et, domain'i
`Authorized domains`'e ekle, kuralları `firestore.rules` dosyasından kopyala.

### Yayınlama

Klasörü Netlify'a sürükle-bırak yap. Build gerekmez, statik dosyalardır.
`firebase-config.js` publish edilen klasörde bulunmalı.

## Proje Yapısı

```
index.html     # sayfa iskeleti
style.css      # stiller
app.js         # oyun mantığı
data.js        # soru verisi (23 vaka)
firebase-config.js  # Firebase + giriş mantığı (repoda yok)
sw.js          # service worker
scripts/validate-questions.mjs  # soruları .NET ile doğrular
tests/data.test.mjs            # veri bütünlüğü testleri
firestore.rules  # Firestore güvenlik kuralları
```

## Testler

```bash
npm test              # soru verisi bütünlüğü
npm run validate      # KOD TAMAMLA sorularını .NET ile derleyip karşılaştırır
npm run format:check  # biçim kontrolü
```

CI her push'ta bu üçünü koşar.

## Katkı

`CONTRIBUTING.md` dosyasına bak.

## Lisans

- Uygulama kodu: MIT (`LICENSE`)
- Soru verisi (`data.js`): tr.wikibooks _C#_ kaynaklarından esinli, CC BY-SA 4.0
