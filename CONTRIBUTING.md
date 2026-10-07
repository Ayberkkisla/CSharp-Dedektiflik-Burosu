# Katkı Rehberi

## Geliştirme

1. Repoyu fork'la ve klonla.
2. `index.html`'i bir tarayıcıda açarak değişikliklerini test et.
3. Kod TAMAMLA sorularını düzenlersen doğrulamayı çalıştır:
   ```bash
   python scripts/validate_questions.py
   ```
   Bu script tüm doğru cevapları gerçekten `dotnet run` ile derleyip `cikti` alanıyla karşılaştırır.
4. Biçimlendirme:
   ```bash
   npx prettier --write .
   ```
5. PR aç; CI dotnet doğrulaması ve Prettier kontrolünü koşar.

## İçerik kuralları

- Her `cikti` alanı, doğru cevap kodunun gerçek .NET çıktısı olmalı.
- `yanlislar` seçenekleri mantıklı ve öğretici olmalı.
- Çıktıdaki metinler Türkçe karakter içeriyorsa `dotnet` konsol kodlamasının UTF-8 olduğunu varsay.
