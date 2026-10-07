# Changelog

## [2026-10-08]

### Araç zinciri

- Python bağımlılığı kaldırıldı: doğrulama script'i Node'a taşındı (`scripts/validate-questions.mjs`, `node:vm` ile `data.js` okunuyor, sıfır bağımlılık).
- `python -m http.server` yerine `npm start` (`npx serve -l 8000`), port 8000 Firebase referrer kısıtlamasıyla uyumlu.
- Soru verisi bütünlük testleri eklendi (`tests/data.test.mjs`, `node:test`): cevap anahtarı `sec` içinde mi, id'ler tekil mi, boşluk/`kabul` sayıları eşit mi.
- `package.json` eklendi (`start`, `dev:config`, `test`, `validate`, `format`, `format:check`); CI bu scriptleri kullanıyor.

### Güvenlik

- Firebase API key artık repoda tutulmuyor: `firebase-config.js` `.gitignore`'da, `scripts/make-firebase-config.mjs` ile `FIREBASE_*` ortam değişkenlerinden üretiliyor.
- Giriş/senkron mantığı `firebase-config.js`'den `js/auth.js`'e taşındı; yapılandırma yoksa oyun "yerel mod"da çalışıyor, giriş kapalı.
- `firebase-config.example.js` şablon olarak eklendi. Netlify'da 6 `FIREBASE_*` değişkeni tanımlanmalı.
- `firestore.rules` repoda; kurallar yalnızca oturum açmış kullanıcının kendi belgesine yazmasına izin veriyor.

### İçerik ve düzen

- Tek dosyalık `index.html` bölündü: `style.css`, `app.js`, `data.js` (soru verisi), `js/auth.js`, `sw.js`.
- `scripts/validate-questions.mjs` KOD TAMAMLA sorularını .NET ile derleyip çıktıyı karşılaştırır (geçici klasörde çalışır, repoyu kirletmez).
- GitHub Actions CI: veri testleri + dotnet doğrulama + Prettier kontrolü.
- PWA: `sw.js` network-first, yalnızca `res.ok` yanıtları önbellekleniyor, `skipWaiting` + `clients.claim()`.
- Erişilebilirlik: `aria-live` maskot balonunda, `:focus-visible` odak stili.
- `favicon.svg`, `README.md` ekran görüntüleri, `CONTRIBUTING.md`, `LICENSE-CONTENT.md` (içerik lisansı CC BY-SA 4.0), issue/PR şablonları eklendi.
- İçerik düzeltmesi: `style.css` içine sızmış kullanılmayan `NL_S` fonksiyonu kaldırıldı.
