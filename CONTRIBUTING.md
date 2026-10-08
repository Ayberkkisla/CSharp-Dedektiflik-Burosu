# Katkı Rehberi

## Geliştirme

1. Repoyu fork'la ve klonla
2. `npm install`
3. `npm start` → http://localhost:8000 (başka port kullanma, Firebase referrer kısıtlaması 8000'e izinli)
4. Firebase yapılandırması gerekliyse `.env` oluştur ve `npm run dev:config` çalıştır
5. `npm run install:hooks` → commit/push öncesi gizli değer denetimi açılır

## Kontrol

```bash
npm test              # soru verisi bütünlüğü + gizli değer denetimi testleri
npm run check:secrets # gizli değer taraması (commit/push öncesi)
npm run validate      # KOD TAMAMLA sorularını .NET ile derleyip çıktıları karşılaştırır
npm run format:check  # biçim kontrolü
```

PR açmadan önce hepsini koş. CI aynı komutları çalıştırır.

## İçerik kuralları

- Çoktan seçmeli sorularda `cevap`, `sec` içindeki seçenek anahtarlarından biri olmalı; `npm test` bunu denetler.
- KOD TAMAMLA sorularında boşluk sayısı ile `kabul` parçası sayısı eşit olmalı ve `cikti` gerçek .NET çıktısı olmalı (`npm run validate` derleyip karşılaştırır).
- Çıktı metinleri Türkçe karakter içeriyorsa konsol kodlamasının UTF-8 olduğu varsayılır.

## Güvenlik

- **Anahtar veya gizli değer commit'leme.** Firebase yapılandırması ortam değişkenlerinden üretilir, repoda durmaz.
- Yine de bir şüphe olursa `npm run check:secrets` çalıştır; API key, private key ve token kalıplarını tarar.
- Sızan bir değeri geçmişten temizlemek için `git filter-repo --replace-text <dosya> --force` kullan, sonra key'i Google Cloud'da sil.
