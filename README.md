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

## Ekran Görüntüleri

| Dosya Arşivi / Rehber                                  | Vaka Açılışı                                          |
| ------------------------------------------------------ | ----------------------------------------------------- |
| ![Giriş rehberi](docs/screenshots/01-giris-rehber.png) | ![Vaka açılışı](docs/screenshots/02-vaka-acilisi.png) |

| Başvuru Kartı                                           | Ders Notu                                       |
| ------------------------------------------------------- | ----------------------------------------------- |
| ![Başvuru kartı](docs/screenshots/03-basvuru-karti.png) | ![Ders notu](docs/screenshots/04-ders-notu.png) |

| Kanıt Sorusu                                          |
| ----------------------------------------------------- |
| ![Kanıt sorusu](docs/screenshots/05-kanit-sorusu.png) |

## Proje Yapısı

```
index.html                    # Sayfa iskeleti
style.css                     # Tüm stiller
app.js                        # Oyun mantığı
data.js                       # DERSLER + KODTAMAMLALAR soru verisi
js/auth.js                    # Firebase giriş + kayıt senkronu
sw.js, sw-register.js         # Service worker (çevrimdışı)
firebase-config.example.js    # Firebase config şablonu (gerçek dosya repoda yok)
scripts/
  make-firebase-config.mjs    # FIREBASE_* env → firebase-config.js
  build-site.mjs              # dist/ altına yalnızca gereken dosyalar
  check-secrets.mjs           # gizli değer taraması (git guard)
  validate-questions.mjs      # KOD TAMAMLA sorularını .NET ile doğrular
  install-hooks.mjs           # core.hooksPath ayarlar (pre-commit/pre-push)
tests/
  data.test.mjs               # soru verisi bütünlüğü
  security.test.mjs           # gizli değer denetimini sınar
tools/validator/              # .NET doğrulama projesi
.githooks/                    # pre-commit / pre-push
firestore.rules               # Firestore güvenlik kuralları
netlify.toml                  # build + publish + gizli tarama ayarı
.github/workflows/ci.yml      # CI: security + veri + dotnet + biçim
```

## Teknolojiler

- HTML / CSS / JavaScript (frameworksüz)
- Firebase Authentication (Google) + Cloud Firestore
- .NET 10 SDK (içerik doğrulama)
- Netlify üzerinde yayınlanabilir (`netlify.toml`)

## Kurulum

```bash
npm install          # bağımlılık yok, sadece geliştirme araçları için
npm start            # http://localhost:8000
```

> Port 8000 şart: Firebase API key referrer kısıtlaması `localhost:8000`'e izin veriyor.
> Başka port kullanırsan Google girişi `Referer denied` hatası verir.

### Firebase yapılandırması

Gerçek `firebase-config.js` **repoda tutulmaz**; ortam değişkenlerinden üretilir.

```bash
# .env dosyası oluştur (gitignore'da), sonra:
npm run dev:config
```

Gerekli değişkenler: `FIREBASE_API_KEY`, `FIREBASE_AUTH_DOMAIN`, `FIREBASE_PROJECT_ID`, `FIREBASE_STORAGE_BUCKET`, `FIREBASE_MESSAGING_SENDER_ID`, `FIREBASE_APP_ID`.

Değişkenler tanımlı değilse site **yapılandırmasız modda** açılır: oyun tam çalışır, giriş ve cihazlar arası senkron kapalı olur.

Kendi Firebase projeni kullanacaksan: `Authentication > Google` ve `Firestore`'u aktif et, domain'i `Authorized domains`'e ekle, kuralları `firestore.rules` dosyasından kopyala.

### Netlify'da yayınlama

1. Klasörü Netlify'a sürükle veya GitHub'dan import et
2. **Site configuration > Environment variables** bölümüne yukarıdaki 6 değişkeni ekle
   - **Contains secret values** işaretle: değerler loglarda maskelenir
3. Deploy otomatik çalışır: `netlify.toml` sırasıyla
   - `scripts/make-firebase-config.mjs` → `firebase-config.js` üretir (ortam değişkenlerinden)
   - `scripts/build-site.mjs` → yalnızca gereken dosyaları `dist/` altına kopyalar
   - Netlify `dist/` klasörünü yayınlar; `tools/`, `tests/`, `docs/`, `.github/` canlıya çıkmaz

`SECRETS_SCAN_OMIT_PATHS = "firebase-config.js"` ayarı, Firebase config'inin tarayıcıya inmesi
gerektiği için tarama dışında tutulmasını sağlar. Firebase web API key'i zaten herkese açıktır
(tarayıcıdan okunabilir); asıl koruma Google Cloud kısıtlamaları ve `firestore.rules` ile sağlanır.

## Güvenlik

Gizli değerlerin repoya girmesini dört katman engeller:

| Katman                  | Ne yapar                                                                                                                                                            |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `.gitignore`            | `.env*`, `firebase-config.js`, `service-account.json`, `dist/` ignore edilir                                                                                        |
| `npm run check:secrets` | İçerik taraması (Firebase/Google API key, private key, koda gömülü şifre/token alanları) + `.gitignore` kuralları doğrulaması + git'e girmiş yasaklı dosya kontrolü |
| Git hook'ları           | `npm run install:hooks` sonrası `pre-commit` ve `pre-push` otomatik çalışır                                                                                         |
| GitHub Actions          | `security` job'ı her push'ta `check:secrets`'i koşar, key varsa kırmızıya döner                                                                                     |

Bir kez kur, sonra otomatik çalışır:

```bash
npm run install:hooks
```

Firebase API key'i istisnadır: tarayıcıda çalışan uygulamanın config'i olmak zorundadır, bu
yüzden repo'da **tutulmaz** (build sırasında ortam değişkenlerinden üretilir), GitHub'a hiç
girmez. Saldırgan key'i GitHub'dan alamaz; Google Cloud'daki API + referrer kısıtlamaları
ve `firestore.rules` (kullanıcı yalnızca kendi belgesine yazabilir) çalınsa bile veri
sızmasını engeller.

Sızan bir değeri geçmişten temizlemek için: `python -m git_filter_repo --replace-text <dosya> --force`

## Testler ve doğrulama

```bash
npm test              # veri bütünlüğü + güvenlik denetimi testleri
npm run check:secrets # gizli değer taraması
npm run validate      # KOD TAMAMLA sorularını .NET ile derleyip çıktıları karşılaştırır
npm run format:check  # biçim kontrolü
```

CI her push/PR'da `security`, `data-tests`, `dotnet-validate`, `format` işlerini koşar.

### Doğrulama kapsamı

`npm run validate` yalnızca KOD TAMAMLA tipindeki soruları derler (`satirlar` + `kabul` + `cikti` alanları makine-okunurdur); çoktan seçmeli ve nüanslı soruların doğruluğu `npm test` ile yapısal olarak, içerik olarak ise elle kontrol edilir.

## Katkı

`CONTRIBUTING.md` dosyasına bak. İçerik önerileri için issue şablonunu kullan.

## Kayıtlar / Lisans

- Proje kodu (`index.html`, `app.js`, `js/auth.js`, `style.css`, `sw.js` vb.): MIT (`LICENSE`).
- Soru verisi (`data.js`): tr.wikibooks _C#_ kaynaklarından (CC BY-SA 4.0) esinli hazırlanmıştır; içerik lisansı ayrıca `LICENSE-CONTENT.md`'de belirtilmiştir.
