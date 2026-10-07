# Katkı Rehberi

## Geliştirme

1. Repoyu fork'la ve klonla
2. `npm install`
3. `npm start` → http://localhost:8000 (başka port kullanma, Firebase referrer kısıtlaması 8000'e izinli)
4. Firebase yapılandırması gerekliyse `.env` oluştur ve `npm run dev:config` çalıştır

## Kontrol

```bash
npm test             # soru verisi bütünlüğü (cevap anahtarı, id tekliği, boşluk/kabul eşitliği)
npm run validate     # KOD TAMAMLA sorularını .NET ile derleyip çıktıları karşılaştırır
npm run format:check # biçim kontrolü
```

PR açmadan önce üçünü de koş. CI aynı komutları çalıştırır.

## İçerik kuralları

- Çoktan seçmeli sorularda `cevap`, `sec` içindeki seçenek anahtarlarından biri olmalı; `npm test` bunu denetler.
- KOD TAMAMLA sorularında boşluk sayısı ile `kabul` parçası sayısı eşit olmalı ve `cikti` gerçek .NET çıktısı olmalı (`npm run validate` derleyip karşılaştırır).
- Çıktı metinleri Türkçe karakter içeriyorsa konsol kodlamasının UTF-8 olduğu varsayılır.
- Anahtar veya gizli değer commit'leme. Firebase yapılandırması ortam değişkenlerinden üretilir, repoda durmaz.
