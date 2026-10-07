# Changelog

## [2026-10-08]

- Tek dosyalık `index.html` bölündü: `style.css`, `app.js`, `data.js` (soru verileri), `firebase-config.js`.
- `scripts/validate_questions.py`: tüm KOD TAMAMLA soruları dotnet ile derlenip doğrulanıyor.
- GitHub Actions CI: dotnet doğrulama + Prettier kontrolü.
- `firestore.rules` repoya eklendi.
- PWA destek: `sw.js` ve `sw-register.js` ile çevrimdışı önbellek.
- Erişilebilirlik: `aria-live` maskot balonunda, `:focus-visible` odak stili.
- İçerik düzeltmesi: `style.css` içine sızmış kullanılmayan `NL_S` fonksiyonu kaldırıldı.
- `favicon.svg` eklendi.
- Google API key sızıntısı bildirimi sonrası key rotate edildi; yeni key `firebase-config.js` ve eski kopyaya işlendi. API key'e Google Cloud'da kısıtlamalar uygulandı: yalnızca `Identity Toolkit API` + `Cloud Firestore API` + `Token Service API`, referrer kısıtlamaları `csharpdedektiflik.netlify.app/*`, `localhost:8000/*` ve `csharp-dedektiflik-3bcc0.firebaseapp.com/*`.
- Netlify deploy logları doğrulandı; her push'ta otomatik deploy aktif.
- README ekran görüntüleri galerisi güncellendi: ders notu 4., kanıt sorusu 5. sırada.
- `sw.js`: network-first stratejiye geçti; yalnızca başarılı (`res.ok`) GET yanıtları önbelleğe alınıyor, `skipWaiting`+`clients.claim()` ve cache `v2` ile deploy sonrası eski `app.js`/`data.js` sunulmuyor.
- `validate_questions.py`: derleme geçici klasörde yapılıyor, repodaki `tools/validator/Program.cs` kirlenmiyor.
- README: doğrulama iddiası netleştirildi — 46 KOD TAMAMLA sorusu ayrıca CI'da otomatik doğrulanıyor, diğer sorular elle gözden geçirilmiştir; yerel test `python -m http.server 8000` ile sabitlendi (API key referrer kısıtlaması `localhost:8000`'e izinli).
