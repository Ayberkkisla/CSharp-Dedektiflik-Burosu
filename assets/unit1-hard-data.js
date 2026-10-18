(function(g){'use strict';g.Case018Lessons=[
  {
    "title": "Uzun süreyi saat, dakika ve saniye olarak yaz",
    "topic": "Ünite 1 · zor hesap",
    "lessonTitle": "Uzun süreyi saat, dakika ve saniye olarak yaz",
    "lesson": "Saat ve dakikayı saniyeye çevirip hepsini topla. 1 saat 3600, 1 dakika 60 saniyedir. Toplamın içinde kaç tam saat olduğunu bul. Saatleri çıkardıktan sonra kalan süreden tam dakikayı ve artan saniyeyi bul.",
    "example": "int toplam = 3670;\nint saat = toplam / 3600;\nint kalan = toplam % 3600;\nConsole.WriteLine(kalan / 60);",
    "explain": "Kullanıcı 1, 75 ve 90 girsin. Bu, “1 saat + 75 dakika + 90 saniye” demek. 75 dakika, 1 saat 15 dakikadır. 90 saniye de 1 dakika 30 saniyedir. Hepsi birlikte 2 saat 16 dakika 30 saniye eder. Bu yüzden çıktı alt alta 2, 16, 30 olur.",
    "rules": [
      "saat: int, dakika: int, saniye: int",
      "Sonuçta * + / % işlemlerini kullan."
    ],
    "input": [
      "1",
      "75",
      "90"
    ],
    "expected": [
      "2",
      "16",
      "30"
    ],
    "start": "int saat = Convert.ToInt32(Console.ReadLine());\nint dakika = Convert.ToInt32(Console.ReadLine());\nint saniye = Convert.ToInt32(Console.ReadLine());\n\n// Hesabı kur ve sonucu yazdır.\n",
    "hint": "Saatleri ayırdıktan sonra bütün toplamı değil, saatlerden kalan saniyeleri 60’a böl."
  },
  {
    "title": "Bütün deliller için kaç kutu gerekir?",
    "topic": "Ünite 1 · zor hesap",
    "lessonTitle": "Bütün deliller için kaç kutu gerekir?",
    "lesson": "Bütün delillerin sığacağı kadar kutu hesapla. Son kutu yarım dolsa da onu say. Açtığın kutuların toplam kapasitesinden delil sayısını çıkar. Bu, boş kalan yer sayısıdır.",
    "example": "int parca = 11;\nint kapasite = 4;\nint kutu = (parca + kapasite - 1) / kapasite;",
    "explain": "17 delil var ve her kutuya 5 delil sığıyor. İlk üç kutuya 5’er delil koyarsın; 2 delil kalır. Bu 2 delil için dördüncü kutuyu açarsın. O kutunun 3 yeri boş kalır. Cevap: 4 kutu, 3 boş yer. Çıktı alt alta 4 ve 3 olur.",
    "rules": [
      "delil: int, kapasite: int",
      "Sonuçta + - / * işlemlerini kullan."
    ],
    "input": [
      "17",
      "5"
    ],
    "expected": [
      "4",
      "3"
    ],
    "start": "int delil = Convert.ToInt32(Console.ReadLine());\nint kapasite = Convert.ToInt32(Console.ReadLine());\n\n// Hesabı kur ve sonucu yazdır.\n",
    "hint": "(delil + kapasite - 1) / kapasite hesabını düşün. Sonuç tam bölünende de 0 delilde de çalışmalı."
  },
  {
    "title": "Sayının rakamlarını tersten yaz",
    "topic": "Ünite 1 · zor hesap",
    "lessonTitle": "Sayının rakamlarını tersten yaz",
    "lesson": "Sayının yüzler, onlar ve birler basamağını ayrı ayrı bul. Birler basamağını yeni sayının yüzler yerine, yüzler basamağını birler yerine koy. Onlar basamağı aynı yerde kalsın.",
    "example": "int kod = 583;\nint son = kod % 10;\nint ilk = kod / 100;",
    "explain": "Kullanıcı 407 girerse sağdan sola rakamlar 7, 0, 4 olur. Yeni sayı 704’tür. Kullanıcı 120 girerse ters sıra 0, 2, 1 olur; sayıların başındaki sıfır yazılmadığı için cevap 21’dir.",
    "rules": [
      "numara: int",
      "Sonuçta / % * + işlemlerini kullan."
    ],
    "input": [
      "407"
    ],
    "expected": [
      "704"
    ],
    "start": "int numara = Convert.ToInt32(Console.ReadLine());\n\n// Hesabı kur ve sonucu yazdır.\n",
    "hint": "Onlar basamağı numara / 10 % 10 ile bulunur. Ters sayıyı metin birleştirerek değil, toplama ve çarpma ile oluştur."
  },
  {
    "title": "Depoda kaç dolu kutu kaldı?",
    "topic": "Ünite 1 · zor hesap",
    "lessonTitle": "Depoda kaç dolu kutu kaldı?",
    "lesson": "Başlangıçta toplam kaç delil olduğunu bul: dolu kutu sayısı ile bir kutudaki delil sayısını çarp. Alınan delilleri çıkar, yeni gelenleri ekle. Son sayıyı kutu kapasitesine böl; tam kutu sayısını ve kalanı ayrı bul.",
    "example": "int stok = 3 * 5;\nstok = stok - 4;\nstok = stok + 6;",
    "explain": "Başta 4 dolu kutu var, her birinde 6 delil: toplam 24 delil. 5 delil alınıyor, 9 delil geliyor; artık 28 delil var. Bunlarla 6’şarlı 4 kutu tamamen dolar. Bu kutuların dışında 4 delil kalır. Çıktı alt alta 4 ve 4 olur.",
    "rules": [
      "kutu: int, kapasite: int, kullanilan: int, gelen: int",
      "Sonuçta * - + / % işlemlerini kullan."
    ],
    "input": [
      "4",
      "6",
      "5",
      "9"
    ],
    "expected": [
      "4",
      "4"
    ],
    "start": "int kutu = Convert.ToInt32(Console.ReadLine());\nint kapasite = Convert.ToInt32(Console.ReadLine());\nint kullanilan = Convert.ToInt32(Console.ReadLine());\nint gelen = Convert.ToInt32(Console.ReadLine());\n\n// Hesabı kur ve sonucu yazdır.\n",
    "hint": "Önce son delil sayısını bul. Kutulamayı başlangıçtaki kutu sayısı üzerinden yapma."
  },
  {
    "title": "İki indirimden sonra kaç lira ödersin?",
    "topic": "Ünite 1 · zor hesap",
    "lessonTitle": "İki indirimden sonra kaç lira ödersin?",
    "lesson": "İlk indirim tutarını hesapla ve ürünün fiyatından çıkar. İkinci indirim tutarını kalan fiyat üzerinden hesapla. Onu da çıkar.",
    "example": "decimal para = 100m;\npara = para - para * 10m / 100m;\npara = para - para * 10m / 100m;",
    "explain": "Ürün 200 lira, indirimler %10 ve %20 olsun. İlk indirimle 20 lira düşer ve fiyat 180 lira olur. İkinci indirim artık 180 lira üzerinden yapılır: 36 lira daha düşer. Son fiyat 144 liradır. Çıktı 144 olur.",
    "rules": [
      "fiyat: decimal, ilkYuzde: decimal, ikinciYuzde: decimal",
      "Sonuçta * - / işlemlerini kullan."
    ],
    "input": [
      "200",
      "10",
      "20"
    ],
    "expected": [
      "144"
    ],
    "start": "decimal fiyat = Convert.ToDecimal(Console.ReadLine());\ndecimal ilkYuzde = Convert.ToDecimal(Console.ReadLine());\ndecimal ikinciYuzde = Convert.ToDecimal(Console.ReadLine());\n\n// Hesabı kur ve sonucu yazdır.\n",
    "hint": "İlk indirimden sonra kalan fiyat için bir ara değişken kullan. İkinci yüzde hesabında o değişkeni kullan."
  },
  {
    "title": "Siparişte bir ürün sana kaça geldi?",
    "topic": "Ünite 1 · zor hesap",
    "lessonTitle": "Siparişte bir ürün sana kaça geldi?",
    "lesson": "Ürün adedi ile bir ürünün fiyatını çarp. Bu toplama kargoyu bir kez ekle, kuponu bir kez çıkar. Ödediğin toplam parayı ürün adedine böl. Sonuç ondalıklı olabilir.",
    "example": "decimal toplam = 5 * 12m + 8m - 3m;\ndecimal kisiBasi = toplam / 5;",
    "explain": "3 ürün alıyorsun, her biri 20 lira: ürünler 60 lira tutar. 12 lira kargo eklenir, kuponla 6 lira düşer. Toplam 66 lira ödersin. 3 ürünün her birine eşit pay ayırınca bir ürün 22 liraya gelmiş olur. Çıktı 22’dir.",
    "rules": [
      "adet: int, birimFiyat: decimal, kargo: decimal, kupon: decimal",
      "Sonuçta * + - / işlemlerini kullan."
    ],
    "input": [
      "3",
      "20",
      "12",
      "6"
    ],
    "expected": [
      "22"
    ],
    "start": "int adet = Convert.ToInt32(Console.ReadLine());\ndecimal birimFiyat = Convert.ToDecimal(Console.ReadLine());\ndecimal kargo = Convert.ToDecimal(Console.ReadLine());\ndecimal kupon = Convert.ToDecimal(Console.ReadLine());\n\n// Hesabı kur ve sonucu yazdır.\n",
    "hint": "Parantez içindeki bütün tutar adede bölünmeli. Ara toplam değişkeni kullanmak parantez hatasını önler."
  },
  {
    "title": "İki ekibin birlikte not ortalaması kaç?",
    "topic": "Ünite 1 · zor hesap",
    "lessonTitle": "İki ekibin birlikte not ortalaması kaç?",
    "lesson": "Her ekibin toplam puanını bul: kişi sayısını o ekibin ortalamasıyla çarp. İki ekibin puanlarını topla. Bulduğun toplam puanı iki ekipteki toplam kişi sayısına böl. Sonucun ondalıklı kısmını kaybetme.",
    "example": "int puan = 1 * 40 + 3 * 80;\ndouble ortalama = (double)puan / 4;",
    "explain": "İlk ekip 2 kişi ve ortalaması 60. Bu ekibin toplam puanı 120’dir. İkinci ekip 3 kişi ve ortalaması 90; toplam puanı 270’tir. Birlikte 5 kişi, toplam 390 puan eder. Kişi başına ortalama 78 puan düşer. Çıktı 78 olur.",
    "rules": [
      "ilkKisi: int, ilkOrtalama: int, ikinciKisi: int, ikinciOrtalama: int",
      "Sonuçta * + / işlemlerini kullan."
    ],
    "input": [
      "2",
      "60",
      "3",
      "90"
    ],
    "expected": [
      "78"
    ],
    "start": "int ilkKisi = Convert.ToInt32(Console.ReadLine());\nint ilkOrtalama = Convert.ToInt32(Console.ReadLine());\nint ikinciKisi = Convert.ToInt32(Console.ReadLine());\nint ikinciOrtalama = Convert.ToInt32(Console.ReadLine());\n\n// Hesabı kur ve sonucu yazdır.\n",
    "hint": "Önce iki ekibin toplam puanını düşün. Dört kişinin toplam puanını ikiye değil, dört kişiye bölersin."
  },
  {
    "title": "Bu kadar dakika sonra saat kaç olur?",
    "topic": "Ünite 1 · zor hesap",
    "lessonTitle": "Bu kadar dakika sonra saat kaç olur?",
    "lesson": "Başlangıç saatini dakikaya çevir. Başlangıç dakikasını ve eklenecek süreyi bu sayıya ekle. Bir günün 1440 dakika olduğunu kullanarak kaç gün geçtiğini bul. Yeni gün içindeki saat ve dakikayı ayır.",
    "example": "int toplam = 22 * 60 + 150;\nint yeniSaat = toplam / 60 % 24;",
    "explain": "Başlangıç 23:50 olsun ve 95 dakika geçsin. İlk 10 dakika bizi 00:00’a getirir. Geriye kalan 85 dakika sonra saat 01:25 olur. Gece yarısını bir kez geçtiğimiz için geçen gün sayısı 1’dir. Çıktı alt alta 1, 25, 1 olur.",
    "rules": [
      "saat: int, dakika: int, sure: int",
      "Sonuçta * + / % işlemlerini kullan."
    ],
    "input": [
      "23",
      "50",
      "95"
    ],
    "expected": [
      "1",
      "25",
      "1"
    ],
    "start": "int saat = Convert.ToInt32(Console.ReadLine());\nint dakika = Convert.ToInt32(Console.ReadLine());\nint sure = Convert.ToInt32(Console.ReadLine());\n\n// Hesabı kur ve sonucu yazdır.\n",
    "hint": "Saat için / 60 tek başına yetmez; gün geçince 24 veya daha büyük çıkar. % 24 ile saat kısmını ayır."
  },
  {
    "title": "Otoparkta kaç lira ödersin?",
    "topic": "Ünite 1 · zor hesap",
    "lessonTitle": "Otoparkta kaç lira ödersin?",
    "lesson": "Toplam süreden ücretsiz süreyi çıkar. Yalnızca kalan dakikalar ücretli. Bu süre için kaç paket gerektiğini bul. Son paket tam kullanılmasa da ücretini ekle. Paket sayısı ile paket ücretini çarp.",
    "example": "int kalan = 46;\nint dilim = (kalan + 20 - 1) / 20;",
    "explain": "Toplam 76 dakika kaldın. İlk 15 dakika ücretsiz; geriye 61 ücretli dakika kalır. Her 30 dakika 20 lira. İlk 30 dakika 20 lira, ikinci 30 dakika 20 lira, son 1 dakika da yeni paketi başlattığı için 20 lira. Toplam 60 lira ödersin. Çıktı 60 olur.",
    "rules": [
      "toplamDakika: int, ucretsiz: int, blok: int, ucret: int",
      "Sonuçta - + / * işlemlerini kullan."
    ],
    "input": [
      "76",
      "15",
      "30",
      "20"
    ],
    "expected": [
      "60"
    ],
    "start": "int toplamDakika = Convert.ToInt32(Console.ReadLine());\nint ucretsiz = Convert.ToInt32(Console.ReadLine());\nint blok = Convert.ToInt32(Console.ReadLine());\nint ucret = Convert.ToInt32(Console.ReadLine());\n\n// Hesabı kur ve sonucu yazdır.\n",
    "hint": "Ücretsiz kısmı çıkardıktan sonra kutu sorusundaki yukarı yuvarlama fikrini uygula. Tam bölünende fazladan dilim sayma."
  },
  {
    "title": "Parayı eşit dağıt, artanı kasada bırak",
    "topic": "Ünite 1 · zor hesap",
    "lessonTitle": "Parayı eşit dağıt, artanı kasada bırak",
    "lesson": "Lira kısmını 100 ile çarpıp kuruş kısmını ekle. Artık paranın tamamı kuruş cinsinden. Toplam kuruşu kişi sayısına tam sayı olarak böl. Bir kişinin payını lira ve kuruş diye ayır. Bölüşümden artan kuruşları ayrıca bul.",
    "example": "int para = 725;\nint pay = para / 3;\nint kalan = para % 3;",
    "explain": "Kasada 10 lira 5 kuruş var; 4 kişiye dağıtılacak. Her birine 2 lira 51 kuruş verirsen toplam 10 lira 4 kuruş dağıtmış olursun. Kasada 1 kuruş kalır. Bu yüzden çıktı alt alta 2, 51, 1 olur. 51 kişinin aldığı kuruş kısmı, 1 ise kasada kalan kuruştur.",
    "rules": [
      "lira: int, kurus: int, kisi: int",
      "Sonuçta * + / % işlemlerini kullan."
    ],
    "input": [
      "10",
      "5",
      "4"
    ],
    "expected": [
      "2",
      "51",
      "1"
    ],
    "start": "int lira = Convert.ToInt32(Console.ReadLine());\nint kurus = Convert.ToInt32(Console.ReadLine());\nint kisi = Convert.ToInt32(Console.ReadLine());\n\n// Hesabı kur ve sonucu yazdır.\n",
    "hint": "İlk bölmeden sonra kalan kuruş ile kişi payının kuruş kısmı farklı şeyler. Birini toplamKurus % kisi, diğerini pay % 100 bulur."
  }
];g.Unit1HardInstructions=[
  {
    "problem": "Bir sürenin saat, dakika ve saniye bilgisi ayrı ayrı verilmiş. Dakika veya saniye 59’dan büyük olabilir. Örneğin 75 dakika, 1 saat 15 dakika demektir. Süreyi değiştirmeden, dakika ve saniye kısımları 0 ile 59 arasında olacak şekilde yeniden yazacağız.",
    "inputs": [
      [
        "saat",
        "Saat",
        "int"
      ],
      [
        "dakika",
        "Dakika",
        "int"
      ],
      [
        "saniye",
        "Saniye",
        "int"
      ]
    ],
    "steps": [
      "Saat ve dakikayı saniyeye çevirip hepsini topla. 1 saat 3600, 1 dakika 60 saniyedir.",
      "Toplamın içinde kaç tam saat olduğunu bul. Saatleri çıkardıktan sonra kalan süreden tam dakikayı ve artan saniyeyi bul."
    ],
    "example": "Kullanıcı 1, 75 ve 90 girsin. Bu, “1 saat + 75 dakika + 90 saniye” demek. 75 dakika, 1 saat 15 dakikadır. 90 saniye de 1 dakika 30 saniyedir. Hepsi birlikte 2 saat 16 dakika 30 saniye eder. Bu yüzden çıktı alt alta 2, 16, 30 olur.",
    "note": "Burada gün hesabı yok: sonuç 25 saat çıkarsa 25 yazabilirsin. Kullanıcıdan gelen sayılar negatif olmayacak. Ekrana “saat” gibi kelimeler değil, yalnızca üç sayıyı yaz.",
    "readStep": "Kullanıcıdan yukarıdaki sırayla bilgi al. Her bilgi için bir Console.ReadLine() kullan; int için Convert.ToInt32(...), decimal için Convert.ToDecimal(...) yaz.",
    "checks": [
      "saat: int, dakika: int, saniye: int",
      "Hesapta * + / % kullan. Sonuçları istenen sırayla yaz."
    ],
    "outputs": [
      "1. satır: Düzeltilmiş saat",
      "2. satır: Düzeltilmiş dakika (0–59)",
      "3. satır: Düzeltilmiş saniye (0–59)"
    ],
    "title": "Uzun süreyi saat, dakika ve saniye olarak yaz",
    "request": "Kullanıcıdan sırayla saat, dakika ve saniye al. Aynı sürenin kaç saat, kaç dakika ve kaç saniye ettiğini bul. Bu üç sayıyı ayrı satırlara yaz."
  },
  {
    "problem": "Delilleri kutulara yerleştiriyorsun. Her kutuya en fazla belli sayıda delil sığıyor. Dışarıda tek bir delil bile kalmamalı. Son kutu tamamen dolmasa da o kutuya ihtiyacın var.",
    "inputs": [
      [
        "delil",
        "Delil sayısı",
        "int"
      ],
      [
        "kapasite",
        "Bir kutunun kapasitesi",
        "int"
      ]
    ],
    "steps": [
      "Bütün delillerin sığacağı kadar kutu hesapla. Son kutu yarım dolsa da onu say.",
      "Açtığın kutuların toplam kapasitesinden delil sayısını çıkar. Bu, boş kalan yer sayısıdır."
    ],
    "example": "17 delil var ve her kutuya 5 delil sığıyor. İlk üç kutuya 5’er delil koyarsın; 2 delil kalır. Bu 2 delil için dördüncü kutuyu açarsın. O kutunun 3 yeri boş kalır. Cevap: 4 kutu, 3 boş yer. Çıktı alt alta 4 ve 3 olur.",
    "note": "Hiç delil yoksa kutu açma: iki satıra da 0 yaz. Bir kutunun kapasitesi her zaman 0’dan büyük. Bu soruyu if ve döngü kullanmadan çöz.",
    "readStep": "Kullanıcıdan yukarıdaki sırayla bilgi al. Her bilgi için bir Console.ReadLine() kullan; int için Convert.ToInt32(...), decimal için Convert.ToDecimal(...) yaz.",
    "checks": [
      "delil: int, kapasite: int",
      "Hesapta + - / * kullan. Sonuçları istenen sırayla yaz."
    ],
    "outputs": [
      "1. satır: Açılacak kutu sayısı",
      "2. satır: Bu kutularda toplam boş kalan yer sayısı"
    ],
    "title": "Bütün deliller için kaç kutu gerekir?",
    "request": "Kullanıcıdan önce toplam delil sayısını, sonra bir kutuya en fazla kaç delil sığdığını al. Bütün deliller için en az kaç kutu gerektiğini bul. Bir de açtığın kutularda toplam kaç boş yer kaldığını bul."
  },
  {
    "problem": "Bir dosyanın üç basamaklı numarası var. Bu numaranın rakamlarını sağdan sola okuyacağız. Örneğin 583 sayısını tersten okuyunca 385 olur.",
    "inputs": [
      [
        "numara",
        "Üç basamaklı numara",
        "int"
      ]
    ],
    "steps": [
      "Sayının yüzler, onlar ve birler basamağını ayrı ayrı bul.",
      "Birler basamağını yeni sayının yüzler yerine, yüzler basamağını birler yerine koy. Onlar basamağı aynı yerde kalsın."
    ],
    "example": "Kullanıcı 407 girerse sağdan sola rakamlar 7, 0, 4 olur. Yeni sayı 704’tür. Kullanıcı 120 girerse ters sıra 0, 2, 1 olur; sayıların başındaki sıfır yazılmadığı için cevap 21’dir.",
    "note": "Yalnızca yeni sayıyı yaz. Metin işlemi, dizi veya döngü kullanma. Ortadaki rakam yerinde kalır; ilk ve son rakam yer değiştirir.",
    "readStep": "Kullanıcıdan yukarıdaki sırayla bilgi al. Her bilgi için bir Console.ReadLine() kullan; int için Convert.ToInt32(...), decimal için Convert.ToDecimal(...) yaz.",
    "checks": [
      "numara: int",
      "Hesapta / % * + kullan. Sonuçları istenen sırayla yaz."
    ],
    "outputs": [
      "1. satır: Rakamları ters çevrilmiş sayı"
    ],
    "title": "Sayının rakamlarını tersten yaz",
    "request": "Kullanıcıdan 100 ile 999 arasında bir tam sayı al. Rakamları ters sırada olan yeni sayıyı bul ve tek satıra yaz. Sayıyı metne çevirmeden, / ve % gibi sayı işlemleriyle çöz."
  },
  {
    "problem": "Depodaki kutular başlangıçta tamamen dolu. İçlerinden bazı deliller alınıyor. Sonra depoya yeni deliller geliyor. Elinde kalan delilleri aynı büyüklükteki kutulara yeniden yerleştiriyorsun.",
    "inputs": [
      [
        "kutu",
        "Başlangıçta dolu kutu sayısı",
        "int"
      ],
      [
        "kapasite",
        "Kutudaki delil sayısı",
        "int"
      ],
      [
        "kullanilan",
        "Kullanılan delil sayısı",
        "int"
      ],
      [
        "gelen",
        "Sonradan gelen tekli delil sayısı",
        "int"
      ]
    ],
    "steps": [
      "Başlangıçta toplam kaç delil olduğunu bul: dolu kutu sayısı ile bir kutudaki delil sayısını çarp.",
      "Alınan delilleri çıkar, yeni gelenleri ekle. Son sayıyı kutu kapasitesine böl; tam kutu sayısını ve kalanı ayrı bul."
    ],
    "example": "Başta 4 dolu kutu var, her birinde 6 delil: toplam 24 delil. 5 delil alınıyor, 9 delil geliyor; artık 28 delil var. Bunlarla 6’şarlı 4 kutu tamamen dolar. Bu kutuların dışında 4 delil kalır. Çıktı alt alta 4 ve 4 olur.",
    "note": "Yarım dolu kutuyu “dolu kutu” sayma. Dışarıda kalan delilleri ikinci satırda belirt. Bir kutuya en az 1 delil sığar; alınan miktar başlangıçtaki delil sayısını aşmaz.",
    "readStep": "Kullanıcıdan yukarıdaki sırayla bilgi al. Her bilgi için bir Console.ReadLine() kullan; int için Convert.ToInt32(...), decimal için Convert.ToDecimal(...) yaz.",
    "checks": [
      "kutu: int, kapasite: int, kullanilan: int, gelen: int",
      "Hesapta * - + / % kullan. Sonuçları istenen sırayla yaz."
    ],
    "outputs": [
      "1. satır: Tamamen dolan kutu sayısı",
      "2. satır: Tam kutuların dışında kalan delil sayısı"
    ],
    "title": "Depoda kaç dolu kutu kaldı?",
    "request": "Kullanıcıdan sırayla başlangıçtaki dolu kutu sayısını, bir kutuya kaç delil sığdığını, alınan delil sayısını ve yeni gelen delil sayısını al. Son durumda kaç kutunun tamamen dolduğunu ve bunların dışında kaç delil kaldığını bul."
  },
  {
    "problem": "Bir mağaza ürüne iki kez indirim yapıyor. Önce ilk indirim yapılıp fiyat düşüyor. Sonra ikinci indirim, bu düşmüş fiyat üzerinden yapılıyor.",
    "inputs": [
      [
        "fiyat",
        "İlk fiyat",
        "decimal"
      ],
      [
        "ilkYuzde",
        "İlk indirim yüzdesi",
        "decimal"
      ],
      [
        "ikinciYuzde",
        "İkinci indirim yüzdesi",
        "decimal"
      ]
    ],
    "steps": [
      "İlk indirim tutarını hesapla ve ürünün fiyatından çıkar.",
      "İkinci indirim tutarını kalan fiyat üzerinden hesapla. Onu da çıkar."
    ],
    "example": "Ürün 200 lira, indirimler %10 ve %20 olsun. İlk indirimle 20 lira düşer ve fiyat 180 lira olur. İkinci indirim artık 180 lira üzerinden yapılır: 36 lira daha düşer. Son fiyat 144 liradır. Çıktı 144 olur.",
    "note": "Yüzde olarak %10 için 10 girilir; 0.10 girilmez. İki yüzdeyi toplayıp tek indirim yapma. Üç bilgiyi de decimal olarak al; ekrana yalnızca son fiyatı yaz.",
    "readStep": "Kullanıcıdan yukarıdaki sırayla bilgi al. Her bilgi için bir Console.ReadLine() kullan; int için Convert.ToInt32(...), decimal için Convert.ToDecimal(...) yaz.",
    "checks": [
      "fiyat: decimal, ilkYuzde: decimal, ikinciYuzde: decimal",
      "Hesapta * - / kullan. Sonuçları istenen sırayla yaz."
    ],
    "outputs": [
      "1. satır: İki indirimden sonra ödenecek fiyat"
    ],
    "title": "İki indirimden sonra kaç lira ödersin?",
    "request": "Kullanıcıdan sırayla ürünün ilk fiyatını, ilk indirim yüzdesini ve ikinci indirim yüzdesini al. İki indirim de yapıldıktan sonra ödenecek fiyatı bul ve tek satıra yaz."
  },
  {
    "problem": "Aynı üründen birkaç tane satın alıyorsun. Ürünlerin toplam fiyatına sipariş için bir kez kargo ekleniyor. Ardından bir kuponla toplam ödemeden belli bir miktar düşülüyor. Kargo ve indirimi ürünlere eşit paylaştıracağız.",
    "inputs": [
      [
        "adet",
        "Ürün sayısı",
        "int"
      ],
      [
        "birimFiyat",
        "Bir ürünün fiyatı",
        "decimal"
      ],
      [
        "kargo",
        "Kargo ücreti",
        "decimal"
      ],
      [
        "kupon",
        "Siparişten düşülecek kupon",
        "decimal"
      ]
    ],
    "steps": [
      "Ürün adedi ile bir ürünün fiyatını çarp. Bu toplama kargoyu bir kez ekle, kuponu bir kez çıkar.",
      "Ödediğin toplam parayı ürün adedine böl. Sonuç ondalıklı olabilir."
    ],
    "example": "3 ürün alıyorsun, her biri 20 lira: ürünler 60 lira tutar. 12 lira kargo eklenir, kuponla 6 lira düşer. Toplam 66 lira ödersin. 3 ürünün her birine eşit pay ayırınca bir ürün 22 liraya gelmiş olur. Çıktı 22’dir.",
    "note": "Kargo ve kupon siparişin tamamı içindir; her ürüne ayrı ayrı uygulanmaz. Kupon yüzdelik değil, lira tutarıdır. Ürün adedi int, diğer bilgiler decimal olmalı. Ürün adedi en az 1 olacak; kupon toplam ödemeyi aşmayacak.",
    "readStep": "Kullanıcıdan yukarıdaki sırayla bilgi al. Her bilgi için bir Console.ReadLine() kullan; int için Convert.ToInt32(...), decimal için Convert.ToDecimal(...) yaz.",
    "checks": [
      "adet: int, birimFiyat: decimal, kargo: decimal, kupon: decimal",
      "Hesapta * + - / kullan. Sonuçları istenen sırayla yaz."
    ],
    "outputs": [
      "1. satır: Kargo ve kupon payı dahil bir ürünün maliyeti"
    ],
    "title": "Siparişte bir ürün sana kaça geldi?",
    "request": "Kullanıcıdan sırayla ürün adedini, tek ürünün fiyatını, siparişin kargo ücretini ve kuponun kaç lira indirim yaptığını al. Bütün ödeme hesaba katıldığında bir ürünün sana kaça geldiğini bul."
  },
  {
    "problem": "İki ekip aynı sınava girmiş. Her ekibin kaç kişi olduğunu ve kendi not ortalamasını biliyorsun. Şimdi bu iki ekibi tek bir grup olarak düşün: herkesin birlikte not ortalaması kaç olur?",
    "inputs": [
      [
        "ilkKisi",
        "İlk ekipteki kişi sayısı",
        "int"
      ],
      [
        "ilkOrtalama",
        "İlk ekibin puan ortalaması",
        "int"
      ],
      [
        "ikinciKisi",
        "İkinci ekipteki kişi sayısı",
        "int"
      ],
      [
        "ikinciOrtalama",
        "İkinci ekibin puan ortalaması",
        "int"
      ]
    ],
    "steps": [
      "Her ekibin toplam puanını bul: kişi sayısını o ekibin ortalamasıyla çarp.",
      "İki ekibin puanlarını topla. Bulduğun toplam puanı iki ekipteki toplam kişi sayısına böl. Sonucun ondalıklı kısmını kaybetme."
    ],
    "example": "İlk ekip 2 kişi ve ortalaması 60. Bu ekibin toplam puanı 120’dir. İkinci ekip 3 kişi ve ortalaması 90; toplam puanı 270’tir. Birlikte 5 kişi, toplam 390 puan eder. Kişi başına ortalama 78 puan düşer. Çıktı 78 olur.",
    "note": "İki ekipteki kişi sayısı farklı olabileceği için yalnızca iki ortalamayı toplayıp 2’ye bölme. Dört girdiyi int olarak al. Sonuç kesirli çıkarsa ondalıklı kısmını koru. Her ekipte en az 1 kişi var.",
    "readStep": "Kullanıcıdan yukarıdaki sırayla bilgi al. Her bilgi için bir Console.ReadLine() kullan; int için Convert.ToInt32(...), decimal için Convert.ToDecimal(...) yaz.",
    "checks": [
      "ilkKisi: int, ilkOrtalama: int, ikinciKisi: int, ikinciOrtalama: int",
      "Hesapta * + / kullan. Sonuçları istenen sırayla yaz."
    ],
    "outputs": [
      "1. satır: Bütün kişilerin birlikte not ortalaması"
    ],
    "title": "İki ekibin birlikte not ortalaması kaç?",
    "request": "Kullanıcıdan sırayla ilk ekibin kişi sayısını ve not ortalamasını, ardından ikinci ekibin kişi sayısını ve not ortalamasını al. İki ekipteki bütün kişilerin ortak not ortalamasını bul ve tek satıra yaz."
  },
  {
    "problem": "Şu an saatin kaç olduğunu biliyorsun. Üzerinden belli sayıda dakika geçecek. O zaman saatin kaç olacağını bulacağız. Gece yarısını geçince saat tekrar 00:00’dan devam eder.",
    "inputs": [
      [
        "saat",
        "Başlangıç saati",
        "int"
      ],
      [
        "dakika",
        "Başlangıç dakikası",
        "int"
      ],
      [
        "sure",
        "Geçen dakika",
        "int"
      ]
    ],
    "steps": [
      "Başlangıç saatini dakikaya çevir. Başlangıç dakikasını ve eklenecek süreyi bu sayıya ekle.",
      "Bir günün 1440 dakika olduğunu kullanarak kaç gün geçtiğini bul. Yeni gün içindeki saat ve dakikayı ayır."
    ],
    "example": "Başlangıç 23:50 olsun ve 95 dakika geçsin. İlk 10 dakika bizi 00:00’a getirir. Geriye kalan 85 dakika sonra saat 01:25 olur. Gece yarısını bir kez geçtiğimiz için geçen gün sayısı 1’dir. Çıktı alt alta 1, 25, 1 olur.",
    "note": "Saati, dakikayı ve geçen gün sayısını üç ayrı satıra yaz; “01:25” şeklinde tek satıra yazma. Başlangıç saati 0–23, dakikası 0–59 arasında. Geçecek süre 0 veya daha büyük olabilir; birkaç gün de sürebilir.",
    "readStep": "Kullanıcıdan yukarıdaki sırayla bilgi al. Her bilgi için bir Console.ReadLine() kullan; int için Convert.ToInt32(...), decimal için Convert.ToDecimal(...) yaz.",
    "checks": [
      "saat: int, dakika: int, sure: int",
      "Hesapta * + / % kullan. Sonuçları istenen sırayla yaz."
    ],
    "outputs": [
      "1. satır: Yeni saat (0–23)",
      "2. satır: Yeni dakika (0–59)",
      "3. satır: Başlangıç gününden sonra geçen gün sayısı"
    ],
    "title": "Bu kadar dakika sonra saat kaç olur?",
    "request": "Kullanıcıdan sırayla şu anki saati, şu anki dakikayı ve kaç dakika geçeceğini al. Sonraki saati ve dakikayı bul. Bir de başlangıçtan itibaren kaç kez gece yarısını geçtiğini bul; bunu geçen gün sayısı olarak yaz."
  },
  {
    "problem": "Otoparkta ilk birkaç dakika ücretsiz. Sonrası belli uzunlukta paketlerle ücretli. Örneğin bir paket 30 dakikaysa 1 dakika da kalsan 30 dakika da kalsan bir paket parası ödersin. 31 dakika kalırsan ikinci pakete de ödeme yaparsın.",
    "inputs": [
      [
        "toplamDakika",
        "Toplam kalınan dakika",
        "int"
      ],
      [
        "ucretsiz",
        "Ücretsiz dakika",
        "int"
      ],
      [
        "blok",
        "Bir ücret diliminin dakikası",
        "int"
      ],
      [
        "ucret",
        "Her dilimin ücreti",
        "int"
      ]
    ],
    "steps": [
      "Toplam süreden ücretsiz süreyi çıkar. Yalnızca kalan dakikalar ücretli.",
      "Bu süre için kaç paket gerektiğini bul. Son paket tam kullanılmasa da ücretini ekle. Paket sayısı ile paket ücretini çarp."
    ],
    "example": "Toplam 76 dakika kaldın. İlk 15 dakika ücretsiz; geriye 61 ücretli dakika kalır. Her 30 dakika 20 lira. İlk 30 dakika 20 lira, ikinci 30 dakika 20 lira, son 1 dakika da yeni paketi başlattığı için 20 lira. Toplam 60 lira ödersin. Çıktı 60 olur.",
    "note": "Toplam kalış süresi ücretsiz süreden az olmayacak. İkisi eşitse ödeme 0 olur. Bir paket en az 1 dakika sürecek. Dakika başına ücret hesaplama; kullanılan paketlerin parasını hesapla. if ve döngü kullanmadan çöz.",
    "readStep": "Kullanıcıdan yukarıdaki sırayla bilgi al. Her bilgi için bir Console.ReadLine() kullan; int için Convert.ToInt32(...), decimal için Convert.ToDecimal(...) yaz.",
    "checks": [
      "toplamDakika: int, ucretsiz: int, blok: int, ucret: int",
      "Hesapta - + / * kullan. Sonuçları istenen sırayla yaz."
    ],
    "outputs": [
      "1. satır: Ödenecek toplam ücret"
    ],
    "title": "Otoparkta kaç lira ödersin?",
    "request": "Kullanıcıdan sırayla otoparkta toplam kaç dakika kalındığını, ilk kaç dakikanın ücretsiz olduğunu, bir ücretli paketin kaç dakika sürdüğünü ve bir paketin kaç lira olduğunu al. Ödenecek toplam parayı bul ve tek satıra yaz."
  },
  {
    "problem": "Kasadaki parayı birkaç kişiye eşit dağıtacaksın. Herkes aynı miktarda para almalı. Bir kuruşu bölemeyiz: herkese eşit verilemeyen birkaç kuruş olursa bunlar kasada kalacak.",
    "inputs": [
      [
        "lira",
        "Kasadaki lira",
        "int"
      ],
      [
        "kurus",
        "Liraya ek kuruş",
        "int"
      ],
      [
        "kisi",
        "Paylaşacak kişi sayısı",
        "int"
      ]
    ],
    "steps": [
      "Lira kısmını 100 ile çarpıp kuruş kısmını ekle. Artık paranın tamamı kuruş cinsinden.",
      "Toplam kuruşu kişi sayısına tam sayı olarak böl. Bir kişinin payını lira ve kuruş diye ayır. Bölüşümden artan kuruşları ayrıca bul."
    ],
    "example": "Kasada 10 lira 5 kuruş var; 4 kişiye dağıtılacak. Her birine 2 lira 51 kuruş verirsen toplam 10 lira 4 kuruş dağıtmış olursun. Kasada 1 kuruş kalır. Bu yüzden çıktı alt alta 2, 51, 1 olur. 51 kişinin aldığı kuruş kısmı, 1 ise kasada kalan kuruştur.",
    "note": "Üç ayrı satır kullan: kişinin lira kısmı, kişinin kuruş kısmı, kasada kalan kuruş. Girilen kuruş 0–99 arasında, kişi sayısı en az 1 olacak. Parayı tam kuruşlarla hesapla; bu görevde decimal kullanma.",
    "readStep": "Kullanıcıdan yukarıdaki sırayla bilgi al. Her bilgi için bir Console.ReadLine() kullan; int için Convert.ToInt32(...), decimal için Convert.ToDecimal(...) yaz.",
    "checks": [
      "lira: int, kurus: int, kisi: int",
      "Hesapta * + / % kullan. Sonuçları istenen sırayla yaz."
    ],
    "outputs": [
      "1. satır: Bir kişinin alacağı paranın lira kısmı",
      "2. satır: Aynı kişinin alacağı paranın kuruş kısmı",
      "3. satır: Dağıtılmadan kasada kalan kuruş"
    ],
    "title": "Parayı eşit dağıt, artanı kasada bırak",
    "request": "Kullanıcıdan sırayla paranın lira kısmını, kuruş kısmını ve kişi sayısını al. Bir kişinin kaç lira ve kaç kuruş alacağını bul. Son olarak kasada kaç kuruş kaldığını bul."
  }
];})(window);
