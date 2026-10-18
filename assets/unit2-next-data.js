(function(g){'use strict';g.Case021Lessons=[
  {
    "title": "İki sayıdan büyüğünü seç",
    "lessonTitle": "İki sayıdan büyüğünü seç",
    "lesson": "if / else içinde yalnızca sabit metin değil, değişken de yazdırabilirsin.",
    "example": "if (sayi > 10)\n    Console.WriteLine(\"Büyük\");\nelse\n    Console.WriteLine(\"Diğer\");",
    "explain": "if / else içinde yalnızca sabit metin değil, değişken de yazdırabilirsin.",
    "rules": [
      "ilk: int, ikinci: int",
      "if / else kullan; sonuçları sorudaki biçimde yaz."
    ],
    "input": [
      "8",
      "3"
    ],
    "expected": [
      "8"
    ],
    "start": "int ilk = Convert.ToInt32(Console.ReadLine());\nint ikinci = Convert.ToInt32(Console.ReadLine());\n\n// Koşulları kur ve seçilen sonucu yazdır.\n",
    "hint": "Koşul: ilk >= ikinci. Her yolda farklı değişkeni yazdır."
  },
  {
    "title": "İki şartın da tutması gerekiyor",
    "lessonTitle": "İki şartın da tutması gerekiyor",
    "lesson": "&& ve demektir. İki şartın da doğru olması gerekir; birinin tutması yetmez.",
    "example": "if (sayi >= 10 && sayi <= 20)\n    Console.WriteLine(\"Aralıkta\");\nelse\n    Console.WriteLine(\"Aralık dışında\");",
    "explain": "&& ve demektir. İki şartın da doğru olması gerekir; birinin tutması yetmez.",
    "rules": [
      "puan: int, devam: int",
      "if / else kullan; sonuçları sorudaki biçimde yaz."
    ],
    "input": [
      "60",
      "80"
    ],
    "expected": [
      "Geçti"
    ],
    "start": "int puan = Convert.ToInt32(Console.ReadLine());\nint devam = Convert.ToInt32(Console.ReadLine());\n\n// Koşulları kur ve seçilen sonucu yazdır.\n",
    "hint": "puan >= 50 && devam >= 70"
  },
  {
    "title": "İki yoldan biri yeterli",
    "lessonTitle": "İki yoldan biri yeterli",
    "lesson": "|| veya demektir. En az bir koşul doğruysa if çalışır. Ancak ikisi de yanlışsa else çalışır.",
    "example": "if (anahtar == 1 || sifre == 1)\n    Console.WriteLine(\"Aç\");\nelse\n    Console.WriteLine(\"Kapalı\");",
    "explain": "|| veya demektir. En az bir koşul doğruysa if çalışır. Ancak ikisi de yanlışsa else çalışır.",
    "rules": [
      "kart: int, izin: int",
      "if / else kullan; sonuçları sorudaki biçimde yaz."
    ],
    "input": [
      "0",
      "1"
    ],
    "expected": [
      "Açık"
    ],
    "start": "int kart = Convert.ToInt32(Console.ReadLine());\nint izin = Convert.ToInt32(Console.ReadLine());\n\n// Koşulları kur ve seçilen sonucu yazdır.\n",
    "hint": "kart == 1 || izin == 1"
  },
  {
    "title": "Sıcaklık aralıkta mı?",
    "lessonTitle": "Sıcaklık aralıkta mı?",
    "lesson": "Bir aralıkta olmak, alt sınırın üstünde ve üst sınırın altında olmayı birlikte gerektirir.",
    "example": "if (sayi >= 10 && sayi <= 20)\n    Console.WriteLine(\"Aralıkta\");\nelse\n    Console.WriteLine(\"Aralık dışında\");",
    "explain": "Bir aralıkta olmak, alt sınırın üstünde ve üst sınırın altında olmayı birlikte gerektirir.",
    "rules": [
      "sicaklik: int",
      "if / else kullan; sonuçları sorudaki biçimde yaz."
    ],
    "input": [
      "22"
    ],
    "expected": [
      "Uygun"
    ],
    "start": "int sicaklik = Convert.ToInt32(Console.ReadLine());\n\n// Koşulları kur ve seçilen sonucu yazdır.\n",
    "hint": "sicaklik >= 20 && sicaklik <= 25"
  },
  {
    "title": "Bu kez üç farklı sonuç var",
    "lessonTitle": "Bu kez üç farklı sonuç var",
    "lesson": "else if, ilk koşul tutmayınca yeni bir soru sorar. İlk doğru yol seçilince kalanlar atlanır.",
    "example": "if (sayi > 10)\n    Console.WriteLine(\"Büyük\");\nelse if (sayi > 0)\n    Console.WriteLine(\"Küçük pozitif\");\nelse\n    Console.WriteLine(\"Diğer\");",
    "explain": "else if, ilk koşul tutmayınca yeni bir soru sorar. İlk doğru yol seçilince kalanlar atlanır.",
    "rules": [
      "puan: int",
      "if / else kullan; sonuçları sorudaki biçimde yaz."
    ],
    "input": [
      "70"
    ],
    "expected": [
      "Geçti"
    ],
    "start": "int puan = Convert.ToInt32(Console.ReadLine());\n\n// Koşulları kur ve seçilen sonucu yazdır.\n",
    "hint": "Sıra: >= 85, sonra >= 50, en son else."
  },
  {
    "title": "Pozitif, negatif veya sıfır",
    "lessonTitle": "Pozitif, negatif veya sıfır",
    "lesson": "İlk koşul yanlışsa bu, sayının mutlaka negatif olduğu anlamına gelmez; sıfır da olabilir. İkinci koşul bu ayrımı yapar.",
    "example": "if (sayi > 10)\n    Console.WriteLine(\"Büyük\");\nelse if (sayi > 0)\n    Console.WriteLine(\"Küçük pozitif\");\nelse\n    Console.WriteLine(\"Diğer\");",
    "explain": "İlk koşul yanlışsa bu, sayının mutlaka negatif olduğu anlamına gelmez; sıfır da olabilir. İkinci koşul bu ayrımı yapar.",
    "rules": [
      "sayi: int",
      "if / else kullan; sonuçları sorudaki biçimde yaz."
    ],
    "input": [
      "-3"
    ],
    "expected": [
      "Negatif"
    ],
    "start": "int sayi = Convert.ToInt32(Console.ReadLine());\n\n// Koşulları kur ve seçilen sonucu yazdır.\n",
    "hint": "Önce > 0, sonra < 0. Son else sıfırı kapsar."
  },
  {
    "title": "Koşula göre kargo hesabı",
    "lessonTitle": "Koşula göre kargo hesabı",
    "lesson": "Koşulun seçtiği yolda hesap da yapabilirsin. decimal sayı okurken Convert.ToDecimal kullan.",
    "example": "if (sayi > 10)\n    Console.WriteLine(\"Büyük\");\nelse\n    Console.WriteLine(\"Diğer\");",
    "explain": "Koşulun seçtiği yolda hesap da yapabilirsin. decimal sayı okurken Convert.ToDecimal kullan.",
    "rules": [
      "tutar: decimal, kargo: decimal",
      "if / else kullan; sonuçları sorudaki biçimde yaz."
    ],
    "input": [
      "120",
      "15"
    ],
    "expected": [
      "120"
    ],
    "start": "decimal tutar = Convert.ToDecimal(Console.ReadLine());\ndecimal kargo = Convert.ToDecimal(Console.ReadLine());\n\n// Koşulları kur ve seçilen sonucu yazdır.\n",
    "hint": "Ücretsiz yolda yalnızca tutar, diğer yolda tutar + kargo yazılır."
  },
  {
    "title": "Hem pozitif hem çift",
    "lessonTitle": "Hem pozitif hem çift",
    "lesson": "&& ile birleştirilen koşulların biri hesap içerebilir. Önce % işlemi, sonra karşılaştırma yapılır.",
    "example": "if (sayi >= 10 && sayi <= 20)\n    Console.WriteLine(\"Aralıkta\");\nelse\n    Console.WriteLine(\"Aralık dışında\");",
    "explain": "&& ile birleştirilen koşulların biri hesap içerebilir. Önce % işlemi, sonra karşılaştırma yapılır.",
    "rules": [
      "sayi: int",
      "if / else kullan; sonuçları sorudaki biçimde yaz."
    ],
    "input": [
      "6"
    ],
    "expected": [
      "Uygun"
    ],
    "start": "int sayi = Convert.ToInt32(Console.ReadLine());\n\n// Koşulları kur ve seçilen sonucu yazdır.\n",
    "hint": "sayi > 0 && sayi % 2 == 0"
  },
  {
    "title": "Önce yaş, sonra kart",
    "lessonTitle": "Önce yaş, sonra kart",
    "lesson": "Bir if’in içinde başka bir if olabilir. İçteki karar yalnızca dıştaki yol seçildiyse çalışır.",
    "example": "if (stok > 0) {\n    if (siparis <= stok)\n        Console.WriteLine(\"Hazır\");\n    else\n        Console.WriteLine(\"Yetersiz\");\n} else {\n    Console.WriteLine(\"Stok yok\");\n}",
    "explain": "Bir if’in içinde başka bir if olabilir. İçteki karar yalnızca dıştaki yol seçildiyse çalışır.",
    "rules": [
      "yas: int, kart: int",
      "if / else kullan; sonuçları sorudaki biçimde yaz."
    ],
    "input": [
      "20",
      "0"
    ],
    "expected": [
      "Kart gerekli"
    ],
    "start": "int yas = Convert.ToInt32(Console.ReadLine());\nint kart = Convert.ToInt32(Console.ReadLine());\n\n// Koşulları kur ve seçilen sonucu yazdır.\n",
    "hint": "Önce yaş kararını kur. Kart kararını yalnızca yaşın yeterli olduğu bloğun içine koy."
  },
  {
    "title": "Küçük teslimat kararı",
    "lessonTitle": "Küçük teslimat kararı",
    "lesson": "Önce daha özel olan kuralı kontrol ediyoruz. Ücretsiz kural tutmazsa sıradaki daha genel mesafe kuralına geçiyoruz.",
    "example": "if (sayi >= 10 && sayi <= 20)\n    Console.WriteLine(\"Aralıkta\");\nelse\n    Console.WriteLine(\"Aralık dışında\");",
    "explain": "Önce daha özel olan kuralı kontrol ediyoruz. Ücretsiz kural tutmazsa sıradaki daha genel mesafe kuralına geçiyoruz.",
    "rules": [
      "tutar: int, mesafe: int",
      "if / else kullan; sonuçları sorudaki biçimde yaz."
    ],
    "input": [
      "220",
      "3"
    ],
    "expected": [
      "0"
    ],
    "start": "int tutar = Convert.ToInt32(Console.ReadLine());\nint mesafe = Convert.ToInt32(Console.ReadLine());\n\n// Koşulları kur ve seçilen sonucu yazdır.\n",
    "hint": "Sıra: ücretsiz kuralı, yakın mesafe, son else uzak mesafe."
  },
  {
    "title": "Müze bileti",
    "independent": true,
    "lessonTitle": "",
    "lesson": "",
    "example": "",
    "explain": "",
    "rules": [],
    "input": [
      "16",
      "1"
    ],
    "expected": [
      "20"
    ],
    "start": "",
    "hint": ""
  },
  {
    "title": "Arşivin ziyaret saati",
    "independent": true,
    "lessonTitle": "",
    "lesson": "",
    "example": "",
    "explain": "",
    "rules": [],
    "input": [
      "1",
      "10"
    ],
    "expected": [
      "Giriş var"
    ],
    "start": "",
    "hint": ""
  },
  {
    "title": "Kırılacak paket",
    "independent": true,
    "lessonTitle": "",
    "lesson": "",
    "example": "",
    "explain": "",
    "rules": [],
    "input": [
      "7",
      "1"
    ],
    "expected": [
      "45"
    ],
    "start": "",
    "hint": ""
  },
  {
    "title": "Ekibi tamamla",
    "independent": true,
    "lessonTitle": "",
    "lesson": "",
    "example": "",
    "explain": "",
    "rules": [],
    "input": [
      "1",
      "0",
      "1"
    ],
    "expected": [
      "Hazır"
    ],
    "start": "",
    "hint": ""
  },
  {
    "title": "Geciken teslim",
    "independent": true,
    "lessonTitle": "",
    "lesson": "",
    "example": "",
    "explain": "",
    "rules": [],
    "input": [
      "4"
    ],
    "expected": [
      "32"
    ],
    "start": "",
    "hint": ""
  }
];g.Unit2NextInstructions=[
  {
    "problem": "Kullanıcıdan iki tam sayı al. Büyük olanı tek satırda yaz. Eşitlerse aynı sayıyı bir kez yazman yeterli.",
    "inputs": [
      [
        "ilk",
        "İlk sayı",
        "int"
      ],
      [
        "ikinci",
        "İkinci sayı",
        "int"
      ]
    ],
    "steps": [
      "İlk sayının ikinciye büyük veya eşit olup olmadığını kontrol et.",
      "Doğruysa ilk sayıyı, değilse ikinciyi yaz."
    ],
    "example": "Örnek: 8, 3 → 8. Diğer örnek: 2, 7 → 7.",
    "note": "Sayıları sabitleme. Eksi sayılar da gelebilir. Bu kez bir mesaj seçmek yerine sayının kendisini seçiyoruz.",
    "readStep": "Sayıları verilen sırayla Convert.ToInt32(Console.ReadLine()) ile int olarak oku.",
    "checks": [
      "ilk: int, ikinci: int",
      "if / else ile karar ver. Bir sonuç yaz."
    ]
  },
  {
    "problem": "Geçmek için puan en az 50, devam en az %70 olmalı. Kullanıcıdan sırayla puanı ve devam yüzdesini al. İki şart da tutarsa Geçti, diğer durumlarda Kaldı yaz.",
    "inputs": [
      [
        "puan",
        "Sınav puanı",
        "int"
      ],
      [
        "devam",
        "Devam yüzdesi",
        "int"
      ]
    ],
    "steps": [
      "İki karşılaştırmayı ayrı ayrı düşün.",
      "Koşulları && ile birleştir. Sonuca göre tek mesaj yaz."
    ],
    "example": "Örnek: 60, 80 → Geçti. Diğer örnek: 90, 60 → Kaldı.",
    "note": "Puan ve devam 0–100 arasında. 50 ve 70 sınırları da geçerli.",
    "readStep": "Sayıları verilen sırayla Convert.ToInt32(Console.ReadLine()) ile int olarak oku.",
    "checks": [
      "puan: int, devam: int",
      "if / else ile karar ver. && kullan."
    ]
  },
  {
    "problem": "Kartı olan veya özel izni olan içeri girebilir. Kullanıcıdan sırayla kart ve izin bilgisini 1 ya da 0 olarak al. Giriş varsa Açık, yoksa Kapalı yaz.",
    "inputs": [
      [
        "kart",
        "Kart var mı? 1: var, 0: yok",
        "int"
      ],
      [
        "izin",
        "Özel izin var mı? 1: var, 0: yok",
        "int"
      ]
    ],
    "steps": [
      "Kartın 1 olmasını ve iznin 1 olmasını ayrı ayrı kontrol et.",
      "Koşulları || ile birleştir. Birinin doğru olması yeterli."
    ],
    "example": "Örnek: 0, 1 → Açık. Diğer örnek: 0, 0 → Kapalı.",
    "note": "İki değer de 0 veya 1 olacak. İkisinin de 1 olmasını istemiyoruz.",
    "readStep": "Sayıları verilen sırayla Convert.ToInt32(Console.ReadLine()) ile int olarak oku.",
    "checks": [
      "kart: int, izin: int",
      "if / else ile karar ver. || kullan."
    ]
  },
  {
    "problem": "Arşiv odası 20 ile 25 derece arasında olmalı. Kullanıcıdan sıcaklığı al. Bu aralıktaysa Uygun, değilse Uygun değil yaz.",
    "inputs": [
      [
        "sicaklik",
        "Oda sıcaklığı",
        "int"
      ]
    ],
    "steps": [
      "Sıcaklığın en az 20 ve en fazla 25 olmasını birlikte kontrol et.",
      "İki karşılaştırmayı && ile bağla."
    ],
    "example": "Örnek: 22 → Uygun. Diğer örnek: 27 → Uygun değil.",
    "note": "20 ve 25 de aralığın içinde. C#’ta 20 <= sicaklik <= 25 yazılmaz; iki karşılaştırma gerekir.",
    "readStep": "Sayıları verilen sırayla Convert.ToInt32(Console.ReadLine()) ile int olarak oku.",
    "checks": [
      "sicaklik: int",
      "if / else ile karar ver. && kullan."
    ]
  },
  {
    "problem": "Kullanıcıdan 0–100 arasında bir puan al. 85 ve üzeri Pekiyi, 50–84 arası Geçti, daha düşük puan Kaldı olsun.",
    "inputs": [
      [
        "puan",
        "Sınav puanı",
        "int"
      ]
    ],
    "steps": [
      "Önce if ile 85 sınırını kontrol et.",
      "Tutmazsa else if ile 50 sınırına bak.",
      "İkisi de tutmazsa else çalışsın."
    ],
    "example": "Örnek: 70 → Geçti. Diğer örnek: 40 → Kaldı.",
    "note": "Sadece bir mesaj yazılmalı. Büyük sınırı önce kontrol et.",
    "readStep": "Sayıları verilen sırayla Convert.ToInt32(Console.ReadLine()) ile int olarak oku.",
    "checks": [
      "puan: int",
      "if / else ile karar ver. Bir sonuç yaz."
    ]
  },
  {
    "problem": "Kullanıcıdan bir tam sayı al. Pozitifse Pozitif, negatifse Negatif, sıfırsa Sıfır yaz.",
    "inputs": [
      [
        "sayi",
        "Bir tam sayı",
        "int"
      ]
    ],
    "steps": [
      "Önce sayının 0’dan büyük olup olmadığını kontrol et.",
      "Tutmazsa else if ile 0’dan küçük mü diye bak.",
      "Geriye kalan tek durum sıfırdır."
    ],
    "example": "Örnek: -3 → Negatif. Diğer örnek: 0 → Sıfır.",
    "note": "Üç ayrı if yerine if / else if / else zinciri kullanabilirsin. Tek mesaj yaz.",
    "readStep": "Sayıları verilen sırayla Convert.ToInt32(Console.ReadLine()) ile int olarak oku.",
    "checks": [
      "sayi: int",
      "if / else ile karar ver. Bir sonuç yaz."
    ]
  },
  {
    "problem": "Kullanıcıdan önce ürün tutarını, sonra kargo ücretini al. Ürün tutarı en az 100 liraysa kargo ücretsiz. Değilse kargoyu ekle. Ödenecek toplamı yaz.",
    "inputs": [
      [
        "tutar",
        "Ürünlerin toplam tutarı",
        "decimal"
      ],
      [
        "kargo",
        "Kargo ücreti",
        "decimal"
      ]
    ],
    "steps": [
      "İki bilgiyi decimal olarak oku.",
      "tutar >= 100m koşuluna göre kargonun eklenip eklenmeyeceğine karar ver.",
      "Sadece ödenecek sayıyı yaz."
    ],
    "example": "Örnek: 120, 15 → 120. Diğer örnek: 60, 15 → 75.",
    "note": "Tutar ve kargo negatif değil. Tam 100 lirada da kargo ücretsiz.",
    "readStep": "İki tutarı sırayla Convert.ToDecimal(Console.ReadLine()) ile decimal olarak oku.",
    "checks": [
      "tutar: decimal, kargo: decimal",
      "if / else ile karar ver. Bir sonuç yaz."
    ]
  },
  {
    "problem": "Kullanıcıdan bir tam sayı al. Hem pozitif hem çiftse Uygun, diğer durumlarda Uygun değil yaz.",
    "inputs": [
      [
        "sayi",
        "Bir tam sayı",
        "int"
      ]
    ],
    "steps": [
      "Pozitiflik için > 0 koşulunu kur.",
      "Çiftlik için % 2 == 0 koşulunu kur.",
      "İkisini && ile birleştir."
    ],
    "example": "Örnek: 6 → Uygun. Diğer örnek: -4 → Uygun değil.",
    "note": "0 ve negatif çift sayılar uygun değil. Burada iki şart birden gerekiyor.",
    "readStep": "Sayıları verilen sırayla Convert.ToInt32(Console.ReadLine()) ile int olarak oku.",
    "checks": [
      "sayi: int",
      "if / else ile karar ver. && kullan."
    ]
  },
  {
    "problem": "Kullanıcıdan önce yaşını, sonra kart bilgisini al. Yaş 18’den küçükse Yaş yetmiyor yaz. Yaş yeterliyse karta bak: kart 1 ise Girebilir, değilse Kart gerekli yaz.",
    "inputs": [
      [
        "yas",
        "Yaş",
        "int"
      ],
      [
        "kart",
        "Kart var mı? 1: var, 0: yok",
        "int"
      ]
    ],
    "steps": [
      "Dıştaki if ile yaşı kontrol et.",
      "Yaş yeterliyse onun içinde ikinci if ile kartı kontrol et.",
      "Her durumda tek bir mesaj yaz."
    ],
    "example": "Örnek: 20, 0 → Kart gerekli. Diğer örnek: 17, 1 → Yaş yetmiyor.",
    "note": "Kart yalnızca 0 veya 1. Yaşı yetmeyen birinin kartına bakıp giriş verme.",
    "readStep": "Sayıları verilen sırayla Convert.ToInt32(Console.ReadLine()) ile int olarak oku.",
    "checks": [
      "yas: int, kart: int",
      "if / else ile karar ver. Bir sonuç yaz."
    ]
  },
  {
    "problem": "Kullanıcıdan önce sipariş tutarını, sonra mesafeyi al. Tutar en az 200 ve mesafe en fazla 5 km ise teslimat ücretsiz: 0 yaz. Bu olmazsa, mesafe en fazla 5 km ise 15; daha uzaksa 30 yaz.",
    "inputs": [
      [
        "tutar",
        "Sipariş tutarı",
        "int"
      ],
      [
        "mesafe",
        "Teslimat mesafesi, km",
        "int"
      ]
    ],
    "steps": [
      "Önce ücretsiz teslimatın iki şartını && ile kontrol et.",
      "Tutmazsa else if ile mesafenin 5 veya daha küçük olmasına bak.",
      "Son else daha uzak teslimatların ücretini yazsın."
    ],
    "example": "Örnek: 220, 3 → 0. Diğer örnek: 100, 8 → 30.",
    "note": "Tutar ve mesafe negatif değil. Sadece teslimat ücretini yaz; ürün tutarını bu ücrete ekleme.",
    "readStep": "Sayıları verilen sırayla Convert.ToInt32(Console.ReadLine()) ile int olarak oku.",
    "checks": [
      "tutar: int, mesafe: int",
      "if / else ile karar ver. && kullan."
    ]
  },
  {
    "problem": "Müzede 12 yaşından küçükler ücretsiz giriyor. Diğer ziyaretçilerden öğrenci olanlar 20 lira, öğrenci olmayanlar 35 lira ödüyor. Kullanıcıdan sırayla yaşı ve öğrenci bilgisini al. Ödenecek bilet ücretini tek satırda yaz.",
    "inputs": [
      [
        "yas",
        "Ziyaretçinin yaşı",
        "int"
      ],
      [
        "ogrenci",
        "Öğrenci mi? 1: evet, 0: hayır",
        "int"
      ]
    ],
    "steps": [],
    "example": "",
    "note": "Yaş 0–100 arasında. Öğrenci bilgisi yalnızca 0 veya 1. Ekrana sadece ücretin sayısını yaz.",
    "readStep": "",
    "checks": []
  },
  {
    "problem": "Arşiv ziyaretçilere sabah 9’da açılıyor, akşam 18’de kapanıyor. Yalnızca kartı olanlar açık saatlerde girebilir. Kullanıcıdan önce kart bilgisini, sonra saati al. Girebiliyorsa Giriş var, diğer durumlarda Giriş yok yaz.",
    "inputs": [
      [
        "kart",
        "Kart var mı? 1: var, 0: yok",
        "int"
      ],
      [
        "saat",
        "Giriş saati",
        "int"
      ]
    ],
    "steps": [],
    "example": "",
    "note": "Saat 0–23 arasında. Tam 9’da giriş yapılabilir; tam 18’de arşiv kapanmıştır. Kart bilgisi 0 veya 1.",
    "readStep": "",
    "checks": []
  },
  {
    "problem": "Kargo şirketi 5 kg ve altındaki paketler için 20 lira, daha ağır paketler için 35 lira alıyor. Pakette kırılacak eşya varsa bunlara ek 10 lira alınıyor. Kullanıcıdan önce ağırlığı, sonra kırılacak eşya bilgisini al. Toplam kargo ücretini yaz.",
    "inputs": [
      [
        "agirlik",
        "Paketin ağırlığı, kg",
        "int"
      ],
      [
        "kirilir",
        "Kırılacak eşya var mı? 1: var, 0: yok",
        "int"
      ]
    ],
    "steps": [],
    "example": "",
    "note": "Ağırlık 1–50 arasında bir tam sayı. Kırılacak eşya bilgisi 0 veya 1. Sadece ücretin sayısını yaz.",
    "readStep": "",
    "checks": []
  },
  {
    "problem": "Bir saha görevine en az iki dedektif hazırsa çıkılabiliyor. Kullanıcıdan üç dedektifin hazır olup olmadığını sırayla al. Ekip göreve çıkabiliyorsa Hazır, çıkamıyorsa Eksik yaz.",
    "inputs": [
      [
        "ilk",
        "İlk dedektif hazır mı? 1: evet, 0: hayır",
        "int"
      ],
      [
        "ikinci",
        "İkinci dedektif hazır mı? 1: evet, 0: hayır",
        "int"
      ],
      [
        "ucuncu",
        "Üçüncü dedektif hazır mı? 1: evet, 0: hayır",
        "int"
      ]
    ],
    "steps": [],
    "example": "",
    "note": "Her bilgi 1 (hazır) veya 0 (hazır değil) olarak giriliyor. Üçünün de hazır olması şart değil.",
    "readStep": "",
    "checks": []
  },
  {
    "problem": "Bir dosya geç teslim edilirse ücret ödeniyor. Hiç gecikme yoksa ücret 0. Gecikme 1–3 gün arasındaysa her gecikme günü için 5 lira, 4 gün veya daha fazlaysa bütün gecikme günlerinin her biri için 8 lira alınıyor. Kullanıcıdan gecikme gününü al ve toplam ücreti yaz.",
    "inputs": [
      [
        "gun",
        "Gecikme günü",
        "int"
      ]
    ],
    "steps": [],
    "example": "",
    "note": "Gecikme 0–30 gün arasında. 4 gün için ücret 32 liradır. Yalnızca toplam ücretin sayısını yaz.",
    "readStep": "",
    "checks": []
  }
];})(window);