# Changelog

## [2026-10-08 - 2]

### Güvenlik (gizli değerler artık git'e giremez)

- `scripts/check-secrets.mjs`: içerik taraması (Firebase/Google API key, private key, Telegram/GitHub/AWS/OpenAI token) + `.gitignore` kuralları doğrulaması + git'e girmiş yasaklı dosya kontrolü.
- `.githooks/pre-commit` ve `.githooks/pre-push`: `npm run install:hooks` ile etkinleşir (`core.hooksPath = ./.githooks`).
- GitHub Actions'a `security` job'ı eklendi; her push'ta `check:secrets` koşar.
- `tests/security.test.mjs`: denetim script'inin gerçekten yakaladığını sahte anahtar/tok yazarak sınar (11 test geçiyor).
- `.gitignore` sertleştirildi: `.env*`, `service-account.json`, `netlify.toml.local`, `dist/`.
- `netlify.toml`: `SECRETS_SCAN_OMIT_PATHS = "firebase-config.js"` — tarayıcıya inmesi zorunlu Firebase config'i Netlify taramasından çıkarıldı, loglarda maskeli kalıyor.
- `firestore.rules`: yalnızca `xp`, `seri`, `sonGun`, `biten`, `ses` alanlarına izin, tip/aralık kontrolleri, diğer yollar tamamen kapalı.
- `scripts/build-site.mjs` + `publish = "dist"`: testler, .NET projesi, CI tanımları ve dokümanlar canlıya çıkmıyor.
- `dist/_headers`: `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, `Referrer-Policy`, `Permissions-Policy`.

## [2026-10-08]

### Araç zinciri

- Python bağımlılığı kaldırıldı: doğrulama script'i Node'a taşındı (`scripts/validate-questions.mjs`, `node:vm` ile `data.js` okunuyor, sıfır bağımlılık).
- `python -m http.server` yerine `npm start` (`npx serve -l 8000`), port 8000 Firebase referrer kısıtlamasıyla uyumlu.
- Soru verisi bütünlük testleri eklendi (`tests/data.test.mjs`, `node:test`): cevap anahtarı `sec` içinde mi, id'ler tekil mi, boşluk/`kabul` sayıları eşit mi.
- `package.json` eklendi (`start`, `dev:config`, `test`, `validate`, `format`, `format:check`); CI bu scriptleri kullanıyor.

### Güvenlik

- **Gizli değerler artık git'e giremez.** `scripts/check-secrets.mjs` içerik taraması + `.gitignore` doğrulaması + yasaklı dosya kontrolü yapar; `.githooks/` (`pre-commit`, `pre-push`) `npm run install:hooks` ile etkinleşir, GitHub Actions'ta `security` job'ı her push'ta koşar. Testler `tests/security.test.mjs` bu denetimi sınar.
- Firebase API key artık repoda tutulmuyor: `firebase-config.js` `.gitignore`'da, `scripts/make-firebase-config.mjs` ile `FIREBASE_*` ortam değişkenlerinden üretiliyor.
- Giriş/senkron mantığı `firebase-config.js`'den `js/auth.js`'e taşındı; yapılandırma yoksa oyun "yerel mod"da çalışıyor, giriş kapalı.
- `firebase-config.example.js` şablon olarak eklendi. Netlify'da 6 `FIREBASE_*` değişkeni tanımlanmalı ve "Contains secret values" işaretlenmeli.
- `netlify.toml`: `publish = "dist"` — `scripts/build-site.mjs` yalnızca gereken dosyaları kopyalar, `tools/`/`tests/`/`docs/`/`.github/` canlıya çıkmaz. `SECRETS_SCAN_OMIT_PATHS = "firebase-config.js"` ile tarayıcıya inmesi zorunlu Firebase config'i Netlify taramasından çıkarılır, loglarda maskeli kalır.
- `firestore.rules` sertleştirildi: yalnızca `xp`, `seri`, `sonGun`, `biten`, `ses` alanları, tip ve aralık kontrolleriyle; diğer tüm yollar kapalı.
- `dist/` yayınlanırken `X-Content-Type-Options`, `X-Frame-Options: DENY`, `Referrer-Policy`, `Permissions-Policy` başlıkları eklenir.
- Geçmişten temizlik: iki Firebase API key'i `git filter-repo` ile tüm commit'lerden silindi, force-push yapıldı.

### Yayın

- `scripts/build-site.mjs` yalnızca gereken dosyaları `dist/` altına kopyalar; Netlify `publish = "dist"` kullanır. Testler, .NET projesi ve CI tanımları canlıya çıkmaz.
- `dist/_headers` ile güvenlik başlıkları ekleniyor (`X-Frame-Options: DENY`, `nosniff`, `Referrer-Policy`, `Permissions-Policy`).
- `google5af49ed490352552.html` site doğrulaması için `dist/` içinde tutulur.

### İçerik ve düzen

- Tek dosyalık `index.html` bölündü: `style.css`, `app.js`, `data.js` (soru verisi), `js/auth.js`, `sw.js`.
- `scripts/validate-questions.mjs` KOD TAMAMLA sorularını .NET ile derleyip çıktıyı karşılaştırır (geçici klasörde çalışır, repoyu kirletmez).
- GitHub Actions CI: veri testleri + dotnet doğrulama + Prettier kontrolü.
- PWA: `sw.js` network-first, yalnızca `res.ok` yanıtları önbellekleniyor, `skipWaiting` + `clients.claim()`.
- Erişilebilirlik: `aria-live` maskot balonunda, `:focus-visible` odak stili.
- `favicon.svg`, `README.md` ekran görüntüleri, `CONTRIBUTING.md`, `LICENSE-CONTENT.md` (içerik lisansı CC BY-SA 4.0), issue/PR şablonları eklendi.
- İçerik düzeltmesi: `style.css` içine sızmış kullanılmayan `NL_S` fonksiyonu kaldırıldı.
