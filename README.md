# C# Dedektiflik Bürosu — Dedektif Nokta

C# programlama öğrenmek için tarayıcı tabanlı, senaryo odaklı bir HTML/JS oyunu. Dedektif Nokta'nın masasında C#'ın temellerini 23 vakada çözersin: konsol, döngüler, metotlar, koleksiyonlar, stringler, OOP ve daha fazlası.

## Özellikler

- 🎮 Birleşik senaryo tabanlı ilerlemeli 23 dosya (vaka)
- ✅ Soru kartları, kanıt sorusu, kod tamamlama, yapboz, boss dosya ve ekstralar
- 🔥 Günlük seri ve XP sistemi (`localStorage` + Firestore)
- 👤 Google hesabıyla giriş; save farklı cihazlarda senkron
- 🕵️‍♂️ Noir teması, yağmur/pencere/ofis arkaplan, maskot ipuçları
- 📱 Mobil ve masaüstü uyumlu arayüz
- ✔️ 46 KOD TAMAMLA sorusu her push'ta CI'da derlenip doğrulanır; diğer sorular elle gözden geçirilmiştir
- 📦 PWA: `sw.js` ile çevrimdışı önbellek

## Proje Yapısı

```
index.html              # Sayfa iskeleti
style.css               # Tüm stiller
app.js                  # Oyun mantığı
data.js                 # DERSLER + KODTAMAMLALAR soru verisi
firebase-config.js      # Firebase bağlantısı
sw.js, sw-register.js   # Service worker (çevrimdışı)
scripts/validate_questions.py  # dotnet doğrulama script'i
tools/validator/        # .NET doğrulama projesi
firestore.rules         # Firestore güvenlik kuralları
.github/workflows/ci.yml       # CI: dotnet doğrulama + Prettier
```

## Teknolojiler

- HTML / CSS / JavaScript (frameworksüz)
- Firebase Authentication (Google) + Cloud Firestore
- .NET 10 SDK (içerik doğrulama)
- Netlify üzerinde yayınlanabilir (`netlify.toml`)

## Kurulum

### Canlı bakış

1. Yerel bir sunucuyla aç (API key referrer kısıtlaması `localhost:8000`'e izinli):
   ```bash
   python -m http.server 8000
   # http://localhost:8000/ aç
   ```
2. Firebase'in giriş/firestore servisleri kendi env'inde; kendi projeni kullanmak istersen `firebase-config.js` içindeki anahtarları değiştir, `Authentication > Google` ve `Firestore`'u aktif et, domain'i `Authorized domains`'e ekle. Firestore kurallarını `firestore.rules` dosyasından kopyala.

### Netlify'da yayınlama

1. Klasörü Netlify'a sürükle veya GitHub'dan import et (`netlify.toml` hazır).

## Testler ve doğrulama

```bash
# KOD TAMAMLA sorularını dotnet ile derle ve çıktıları karşılaştır
python scripts/validate_questions.py

# Biçim kontrolü (CI'daki komutun aynısı)
npx prettier --check "**/*.{html,css,md,yml,yaml}" "app.js" "sw.js" "sw-register.js" "firebase-config.js"
```

CI her push/PR'da bu iki adımı koşar.

> Not: Script şu an yalnızca KOD TAMAMLA tipindeki 46 soruyu derler (`satirlar` + `kabul` + `cikti` alanları makine-okunurdur); çoktan seçmeli ve nüanslı sorular elle gözden geçirilmiştir.

## Katkı

`CONTRIBUTING.md` dosyasına bak. İçerik önerileri için issue şablonunu kullan.

## Kayıtlar / Lisans

- Proje kodu (`index.html`, `app.js`, `style.css`, `sw.js` vb.): MIT (`LICENSE`).
- Soru verisi (`data.js`): tr.wikibooks _C#_ kaynaklarından (CC BY-SA 4.0) esinli hazırlanmıştır; içerik lisansı ayrıca `LICENSE-CONTENT.md`'de belirtilmiştir.
