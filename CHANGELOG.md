# Changelog

## [2026-10-08]

- Tek dosyalık `index.html` bölündü: `style.css`, `app.js`, `data.js` (soru verileri), `firebase-config.js`.
- `scripts/validate_questions.py`: tüm KOD TAMAMLA soruları dotnet ile derlenip doğrulanıyor.
- GitHub Actions CI: dotnet doğrulama + Prettier kontrolü.
- `firestore.rules` repoya eklendi.
- PWA destek: `sw.js` ve `sw-register.js` ile çevrimdışı önbellek.
- Erişilebilirlik: `aria-live` maskot balonunda, `:focus-visible` odak stili.
- İçerik düzeltmesi: `style.css` içine sızmış kullanılmayan `NL_S` fonksiyonu kaldırıldı.
