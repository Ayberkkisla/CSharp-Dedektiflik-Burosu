# Katkı Rehberi

## Geliştirme

```bash
npm install
npm start          # http://localhost:8000
```

Firebase yapılandırması gerekliyse `firebase-config.example.js` dosyasını
`firebase-config.js` olarak kopyala ve değerleri kendi projenle değiştir.

## Kontrol

```bash
npm test              # soru verisi bütünlüğü
npm run validate      # KOD TAMAMLA sorularını .NET ile doğrular
npm run format:check  # biçim
```

PR açmadan önce üçünü de koş. CI aynı komutları çalıştırır.

## İçerik kuralları

- Çoktan seçmeli sorularda `cevap`, `sec` içindeki seçenek anahtarlarından biri olmalı (`npm test` denetler).
- KOD TAMAMLA sorularında boşluk sayısı ile `kabul` parçası sayısı eşit olmalı, `cikti` gerçek .NET çıktısı olmalı (`npm run validate` derleyip karşılaştırır).
- API key veya gizli değer commit'leme. `firebase-config.js` `.gitignore`'da tutulur.
