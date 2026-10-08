# C# Dedektiflik Bürosu — Dedektif Nokta

C# programlama öğrenmek için tarayıcı tabanlı, senaryo odaklı bir HTML/JS oyunu. Dedektif Nokta'nın masasında C#'ın temellerini 23 vakada çözersin: konsol, döngüler, metotlar, koleksiyonlar, stringler, OOP ve daha fazlası.

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

## Dosyalar

| Dosya                            | Ne işe yarar                                                                                                              |
| -------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `index.html`                     | Sayfa iskeleti, script ve stil bağlantıları                                                                               |
| `style.css`                      | Tüm görsel stiller                                                                                                        |
| `app.js`                         | Oyun motoru: vaka akışı, menü, hesap makinesi, soru gösterimi                                                             |
| `data.js`                        | Soru verisi: 23 vaka, 500 soru, boss soruları                                                                             |
| `firebase-config.js`             | Firebase yapılandırması + Google girişi + ilerleme senkronu (**repoda yok**, `firebase-config.example.js`'den kopyalanır) |
| `sw.js`                          | Service worker: çevrimdışı çalışma için önbellek                                                                          |
| `sw-register.js`                 | Service worker'ı sayfa açılışında başlatır                                                                                |
| `favicon.svg`                    | Site simgesi                                                                                                              |
| `scripts/validate-questions.mjs` | KOD TAMAMLA sorularını .NET ile derleyip beklenen çıktıyla karşılaştırır                                                  |
| `tests/data.test.mjs`            | Soru verisinin tutarlılığını denetler (cevap anahtarı, id tekliği, boşluk eşleşmesi)                                      |
| `tools/validator/`               | .NET doğrulama projesi (script her soru için geçici klasöre kopyalar)                                                     |
| `firestore.rules`                | Firestore kuralları: kullanıcı yalnızca kendi kaydına erişir                                                              |
| `netlify.toml`                   | Yayın ayarı (build gerekmez, statik dosyalar)                                                                             |

## Tasarım notları

**Vaka 20** ("Beceri Temelli Soru 2") yalnızca KOD TAMAMLA sorularından oluşur; çoktan seçmeli
ve boss sorusu bilinçli olarak yoktur. `tests/data.test.mjs` bu vakayı istisna olarak işaretler.

**Firebase API key'i** tarayıcıya inmesi gereken bir değerdir, gizlenemez. Repoda tutulmaz;
güvenlik Google Cloud'daki API/referrer kısıtlamaları ve `firestore.rules` ile sağlanır.

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
