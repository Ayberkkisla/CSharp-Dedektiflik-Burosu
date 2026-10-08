# Changelog

## [2026-10-08]

### Yapı

- Tek dosyalık `index.html` bölündü: `style.css`, `app.js`, `data.js`, `firebase-config.js`.
- Firebase yapılandırması ve giriş mantığı `firebase-config.js` içinde; dosya repoda tutulmaz, `firebase-config.example.js` şablonu var.

### Araç zinciri

- Doğrulama script'i Node'a taşındı (`scripts/validate-questions.mjs`, sıfır bağımlılık).
- Python bağımlılığı kaldırıldı, `python -m http.server` yerine `npm start`.
- Soru verisi bütünlük testleri (`tests/data.test.mjs`).
- GitHub Actions CI: veri testleri + .NET doğrulama + Prettier.
- Prettier, `firestore.rules`, `CONTRIBUTING.md`, `LICENSE-CONTENT.md`, issue/PR şablonları, `CHANGELOG.md` eklendi.
- PWA: `sw.js` network-first, yalnızca `res.ok` önbellekleniyor.
- Erişilebilirlik: `aria-live` maskot balonunda, `:focus-visible` odak stili, `favicon.svg`.

### Güvenlik

- Firebase API key artık repoda tutulmuyor.
- Google Cloud'da key'e API (Identity Toolkit, Firestore) ve referrer kısıtlamaları uygulandı; eski key silindi.
- `firestore.rules`: kullanıcı yalnızca kendi belgesine yazabilir.
- API key'ler git geçmişinden temizlendi.
