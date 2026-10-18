(function(g){'use strict';g.Case020Lessons=[
  {
    "title": "Sayı pozitif mi?",
    "lessonTitle": "Bir koşul, iki yol",
    "lesson": "if, bir sorunun cevabına göre yol seçer. Buradaki soru: sayı 0’dan büyük mü?",
    "example": "int sayi = Convert.ToInt32(Console.ReadLine());\nif (sayi > 10) {\n    Console.WriteLine(\"Büyük\");\n} else {\n    Console.WriteLine(\"Büyük değil\");\n}",
    "explain": "Koşul doğruysa if içindeki satır, yanlışsa else içindeki satır çalışır. İki mesaj birden yazılmaz.",
    "rules": [
      "sayi: int",
      "Tek bir if ve else ile karar ver. İstenen mesajı yaz."
    ],
    "input": [
      "3"
    ],
    "expected": [
      "Pozitif"
    ],
    "start": "int sayi = Convert.ToInt32(Console.ReadLine());\n\n// Önce if koşulunu yaz. Sonra iki yolun mesajlarını ekle.\n",
    "hint": "Koşul: sayi > 0. Doğruysa \"Pozitif\", yanlışsa \"Pozitif değil\" yaz."
  },
  {
    "title": "Yaşın yeterli mi?",
    "lessonTitle": "Bir koşul, iki yol",
    "lesson": "Bu kez sınır değeri de kabul ediyoruz. >= işareti büyük veya eşit anlamına gelir.",
    "example": "int sayi = Convert.ToInt32(Console.ReadLine());\nif (sayi > 10) {\n    Console.WriteLine(\"Büyük\");\n} else {\n    Console.WriteLine(\"Büyük değil\");\n}",
    "explain": "Koşul doğruysa if içindeki satır, yanlışsa else içindeki satır çalışır. İki mesaj birden yazılmaz.",
    "rules": [
      "yas: int",
      "Tek bir if ve else ile karar ver. İstenen mesajı yaz."
    ],
    "input": [
      "18"
    ],
    "expected": [
      "Girebilir"
    ],
    "start": "int yas = Convert.ToInt32(Console.ReadLine());\n\n// Önce if koşulunu yaz. Sonra iki yolun mesajlarını ekle.\n",
    "hint": "Koşul: yas >= 18. Doğruysa \"Girebilir\", yanlışsa \"Giremez\" yaz."
  },
  {
    "title": "Sınavdan geçti mi?",
    "lessonTitle": "Bir koşul, iki yol",
    "lesson": "Koşul yanlış olduğunda da bir yol var: else. İki yol aynı anda çalışmaz.",
    "example": "int sayi = Convert.ToInt32(Console.ReadLine());\nif (sayi > 10) {\n    Console.WriteLine(\"Büyük\");\n} else {\n    Console.WriteLine(\"Büyük değil\");\n}",
    "explain": "Koşul doğruysa if içindeki satır, yanlışsa else içindeki satır çalışır. İki mesaj birden yazılmaz.",
    "rules": [
      "puan: int",
      "Tek bir if ve else ile karar ver. İstenen mesajı yaz."
    ],
    "input": [
      "45"
    ],
    "expected": [
      "Kaldı"
    ],
    "start": "int puan = Convert.ToInt32(Console.ReadLine());\n\n// Önce if koşulunu yaz. Sonra iki yolun mesajlarını ekle.\n",
    "hint": "Koşul: puan >= 50. Doğruysa \"Geçti\", yanlışsa \"Kaldı\" yaz."
  },
  {
    "title": "Kutu boş mu?",
    "lessonTitle": "Bir koşul, iki yol",
    "lesson": "== iki değerin eşit olup olmadığını kontrol eder. Burada kutuda hiç delil var mı diye bakıyoruz.",
    "example": "int sayi = Convert.ToInt32(Console.ReadLine());\nif (sayi > 10) {\n    Console.WriteLine(\"Büyük\");\n} else {\n    Console.WriteLine(\"Büyük değil\");\n}",
    "explain": "Koşul doğruysa if içindeki satır, yanlışsa else içindeki satır çalışır. İki mesaj birden yazılmaz.",
    "rules": [
      "adet: int",
      "Tek bir if ve else ile karar ver. İstenen mesajı yaz."
    ],
    "input": [
      "0"
    ],
    "expected": [
      "Boş"
    ],
    "start": "int adet = Convert.ToInt32(Console.ReadLine());\n\n// Önce if koşulunu yaz. Sonra iki yolun mesajlarını ekle.\n",
    "hint": "Koşul: adet == 0. Doğruysa \"Boş\", yanlışsa \"Dolu\" yaz."
  },
  {
    "title": "Hava donacak kadar soğuk mu?",
    "lessonTitle": "Bir koşul, iki yol",
    "lesson": "<=, küçük veya eşit anlamına gelir. Eksi sayılar 0’dan küçüktür.",
    "example": "int sayi = Convert.ToInt32(Console.ReadLine());\nif (sayi > 10) {\n    Console.WriteLine(\"Büyük\");\n} else {\n    Console.WriteLine(\"Büyük değil\");\n}",
    "explain": "Koşul doğruysa if içindeki satır, yanlışsa else içindeki satır çalışır. İki mesaj birden yazılmaz.",
    "rules": [
      "sicaklik: int",
      "Tek bir if ve else ile karar ver. İstenen mesajı yaz."
    ],
    "input": [
      "-3"
    ],
    "expected": [
      "Donabilir"
    ],
    "start": "int sicaklik = Convert.ToInt32(Console.ReadLine());\n\n// Önce if koşulunu yaz. Sonra iki yolun mesajlarını ekle.\n",
    "hint": "Koşul: sicaklik <= 0. Doğruysa \"Donabilir\", yanlışsa \"Donmaz\" yaz."
  },
  {
    "title": "Şifre aynı mı?",
    "lessonTitle": "Bir koşul, iki yol",
    "lesson": "Metinleri de == ile karşılaştırabiliriz. Değişken tırnaksız, karşılaştırdığımız sabit metin tırnak içinde yazılır.",
    "example": "string cevap = Console.ReadLine();\nif (cevap == \"evet\") {\n    Console.WriteLine(\"Tamam\");\n} else {\n    Console.WriteLine(\"Tekrar\");\n}",
    "explain": "Koşul doğruysa if içindeki satır, yanlışsa else içindeki satır çalışır. İki mesaj birden yazılmaz.",
    "rules": [
      "sifre: string",
      "Tek bir if ve else ile karar ver. İstenen mesajı yaz."
    ],
    "input": [
      "mavi"
    ],
    "expected": [
      "Doğru"
    ],
    "start": "string sifre = Console.ReadLine();\n\n// Önce if koşulunu yaz. Sonra iki yolun mesajlarını ekle.\n",
    "hint": "Koşul: sifre == \"mavi\". Doğruysa \"Doğru\", yanlışsa \"Yanlış\" yaz."
  },
  {
    "title": "Bütçe alışverişe yetiyor mu?",
    "lessonTitle": "Bir koşul, iki yol",
    "lesson": "Koşulun iki tarafında da değişken olabilir. Bu kez sabit bir sınıra değil, kullanıcının verdiği fiyata bakıyoruz.",
    "example": "int sayi = Convert.ToInt32(Console.ReadLine());\nif (sayi > 10) {\n    Console.WriteLine(\"Büyük\");\n} else {\n    Console.WriteLine(\"Büyük değil\");\n}",
    "explain": "Koşul doğruysa if içindeki satır, yanlışsa else içindeki satır çalışır. İki mesaj birden yazılmaz.",
    "rules": [
      "butce: int, fiyat: int",
      "Tek bir if ve else ile karar ver. İstenen mesajı yaz."
    ],
    "input": [
      "40",
      "50"
    ],
    "expected": [
      "Yetersiz"
    ],
    "start": "int butce = Convert.ToInt32(Console.ReadLine());\nint fiyat = Convert.ToInt32(Console.ReadLine());\n\n// Önce if koşulunu yaz. Sonra iki yolun mesajlarını ekle.\n",
    "hint": "Koşul: butce >= fiyat. Doğruysa \"Yeterli\", yanlışsa \"Yetersiz\" yaz."
  },
  {
    "title": "Sipariş için stok var mı?",
    "lessonTitle": "Bir koşul, iki yol",
    "lesson": "Önceki sorudaki aynı fikri başka bir yerde kullanıyoruz: elimizdeki miktar istenene yetiyor mu?",
    "example": "int sayi = Convert.ToInt32(Console.ReadLine());\nif (sayi > 10) {\n    Console.WriteLine(\"Büyük\");\n} else {\n    Console.WriteLine(\"Büyük değil\");\n}",
    "explain": "Koşul doğruysa if içindeki satır, yanlışsa else içindeki satır çalışır. İki mesaj birden yazılmaz.",
    "rules": [
      "stok: int, istenen: int",
      "Tek bir if ve else ile karar ver. İstenen mesajı yaz."
    ],
    "input": [
      "8",
      "3"
    ],
    "expected": [
      "Hazır"
    ],
    "start": "int stok = Convert.ToInt32(Console.ReadLine());\nint istenen = Convert.ToInt32(Console.ReadLine());\n\n// Önce if koşulunu yaz. Sonra iki yolun mesajlarını ekle.\n",
    "hint": "Koşul: stok >= istenen. Doğruysa \"Hazır\", yanlışsa \"Eksik\" yaz."
  },
  {
    "title": "Hedef numara geldi mi?",
    "lessonTitle": "Bir koşul, iki yol",
    "lesson": "İki kullanıcı değerini eşitlik açısından karşılaştırıyoruz. Tek bir if ve bir else yeterli.",
    "example": "int sayi = Convert.ToInt32(Console.ReadLine());\nif (sayi > 10) {\n    Console.WriteLine(\"Büyük\");\n} else {\n    Console.WriteLine(\"Büyük değil\");\n}",
    "explain": "Koşul doğruysa if içindeki satır, yanlışsa else içindeki satır çalışır. İki mesaj birden yazılmaz.",
    "rules": [
      "girilen: int, hedef: int",
      "Tek bir if ve else ile karar ver. İstenen mesajı yaz."
    ],
    "input": [
      "12",
      "7"
    ],
    "expected": [
      "Aramaya devam"
    ],
    "start": "int girilen = Convert.ToInt32(Console.ReadLine());\nint hedef = Convert.ToInt32(Console.ReadLine());\n\n// Önce if koşulunu yaz. Sonra iki yolun mesajlarını ekle.\n",
    "hint": "Koşul: girilen == hedef. Doğruysa \"Bulundu\", yanlışsa \"Aramaya devam\" yaz."
  },
  {
    "title": "Sayı çift mi?",
    "lessonTitle": "Bir koşul, iki yol",
    "lesson": "Ünite 1’deki % işlemini bir kararın içinde kullanabiliriz. Önce kalan hesaplanır, sonra 0’a eşit mi diye bakılır.",
    "example": "int sayi = Convert.ToInt32(Console.ReadLine());\nif (sayi > 10) {\n    Console.WriteLine(\"Büyük\");\n} else {\n    Console.WriteLine(\"Büyük değil\");\n}",
    "explain": "Koşul doğruysa if içindeki satır, yanlışsa else içindeki satır çalışır. İki mesaj birden yazılmaz.",
    "rules": [
      "sayi: int",
      "Tek bir if ve else ile karar ver. İstenen mesajı yaz."
    ],
    "input": [
      "6"
    ],
    "expected": [
      "Çift"
    ],
    "start": "int sayi = Convert.ToInt32(Console.ReadLine());\n\n// Önce if koşulunu yaz. Sonra iki yolun mesajlarını ekle.\n",
    "hint": "Koşul: sayi % 2 == 0. Doğruysa \"Çift\", yanlışsa \"Tek\" yaz."
  }
];g.Unit2FlowInstructions=[
  {
    "problem": "Kullanıcıdan bir tam sayı al. Sayı 0’dan büyükse Pozitif, değilse Pozitif değil yaz.",
    "inputs": [
      [
        "sayi",
        "Bir tam sayı",
        "int"
      ]
    ],
    "steps": [
      "if parantezine sayi > 0 koşulunu yaz.",
      "if içine \"Pozitif\" mesajını yazdır.",
      "else içine \"Pozitif değil\" mesajını yazdır."
    ],
    "example": "Örnek: 3 → Pozitif. Diğer örnek: -2 → Pozitif değil.",
    "note": "0, pozitif sayılmaz. Bu soruda yalnızca > karşılaştırmasını ve if / else kullanacağız.",
    "readStep": "Kullanıcıdan istenen sayıları sırayla oku. Convert.ToInt32(Console.ReadLine()) ile int değişkenlerinde tut.",
    "checks": [
      "sayi: int",
      "if / else kullan. Ekrana yalnızca seçilen mesajı yaz."
    ]
  },
  {
    "problem": "Kullanıcıdan yaşını al. 18 yaş ve üzerindeyse Girebilir, daha küçükse Giremez yaz.",
    "inputs": [
      [
        "yas",
        "Yaş",
        "int"
      ]
    ],
    "steps": [
      "if parantezine yas >= 18 koşulunu yaz.",
      "if içine \"Girebilir\" mesajını yazdır.",
      "else içine \"Giremez\" mesajını yazdır."
    ],
    "example": "Örnek: 18 → Girebilir. Diğer örnek: 16 → Giremez.",
    "note": ">= büyük veya eşit demek. 18 yaş da içeri girebilir.",
    "readStep": "Kullanıcıdan istenen sayıları sırayla oku. Convert.ToInt32(Console.ReadLine()) ile int değişkenlerinde tut.",
    "checks": [
      "yas: int",
      "if / else kullan. Ekrana yalnızca seçilen mesajı yaz."
    ]
  },
  {
    "problem": "Kullanıcıdan sınav puanını al. Puan en az 50 ise Geçti, değilse Kaldı yaz.",
    "inputs": [
      [
        "puan",
        "Sınav puanı",
        "int"
      ]
    ],
    "steps": [
      "if parantezine puan >= 50 koşulunu yaz.",
      "if içine \"Geçti\" mesajını yazdır.",
      "else içine \"Kaldı\" mesajını yazdır."
    ],
    "example": "Örnek: 45 → Kaldı. Diğer örnek: 50 → Geçti.",
    "note": "Puan 0–100 arasında. Her çalıştırmada yalnızca bir sonuç yaz.",
    "readStep": "Kullanıcıdan istenen sayıları sırayla oku. Convert.ToInt32(Console.ReadLine()) ile int değişkenlerinde tut.",
    "checks": [
      "puan: int",
      "if / else kullan. Ekrana yalnızca seçilen mesajı yaz."
    ]
  },
  {
    "problem": "Kullanıcıdan kutudaki delil sayısını al. Sayı 0 ise Boş, değilse Dolu yaz.",
    "inputs": [
      [
        "adet",
        "Kutudaki delil sayısı",
        "int"
      ]
    ],
    "steps": [
      "if parantezine adet == 0 koşulunu yaz.",
      "if içine \"Boş\" mesajını yazdır.",
      "else içine \"Dolu\" mesajını yazdır."
    ],
    "example": "Örnek: 0 → Boş. Diğer örnek: 4 → Dolu.",
    "note": "Delil sayısı negatif gelmeyecek. == eşit mi diye sorar; tek = ise değer atar.",
    "readStep": "Kullanıcıdan istenen sayıları sırayla oku. Convert.ToInt32(Console.ReadLine()) ile int değişkenlerinde tut.",
    "checks": [
      "adet: int",
      "if / else kullan. Ekrana yalnızca seçilen mesajı yaz."
    ]
  },
  {
    "problem": "Kullanıcıdan sıcaklığı al. Sıcaklık 0 veya daha düşükse Donabilir, yüksekse Donmaz yaz.",
    "inputs": [
      [
        "sicaklik",
        "Hava sıcaklığı",
        "int"
      ]
    ],
    "steps": [
      "if parantezine sicaklik <= 0 koşulunu yaz.",
      "if içine \"Donabilir\" mesajını yazdır.",
      "else içine \"Donmaz\" mesajını yazdır."
    ],
    "example": "Örnek: -3 → Donabilir. Diğer örnek: 5 → Donmaz.",
    "note": "Bu soruda basit bir eşik kullanıyoruz: 0 da soğuk tarafa dahil. <= küçük veya eşit demek.",
    "readStep": "Kullanıcıdan istenen sayıları sırayla oku. Convert.ToInt32(Console.ReadLine()) ile int değişkenlerinde tut.",
    "checks": [
      "sicaklik: int",
      "if / else kullan. Ekrana yalnızca seçilen mesajı yaz."
    ]
  },
  {
    "problem": "Kullanıcıdan bir şifre al. Şifre tam olarak mavi ise Doğru, başka bir şeyse Yanlış yaz.",
    "inputs": [
      [
        "sifre",
        "Girilen şifre",
        "string"
      ]
    ],
    "steps": [
      "if parantezine sifre == \"mavi\" koşulunu yaz.",
      "if içine \"Doğru\" mesajını yazdır.",
      "else içine \"Yanlış\" mesajını yazdır."
    ],
    "example": "Örnek: mavi → Doğru. Diğer örnek: Mavi → Yanlış.",
    "note": "Metni Console.ReadLine() ile string olarak al; sayıya çevirme. Büyük ve küçük harfler farklı: Mavi, mavi ile aynı değil.",
    "readStep": "Kullanıcının yazdığını Console.ReadLine() ile string değişkeninde tut.",
    "checks": [
      "sifre: string",
      "if / else kullan. Ekrana yalnızca seçilen mesajı yaz."
    ]
  },
  {
    "problem": "Kullanıcıdan önce bütçeyi, sonra ürün fiyatını al. Bütçe fiyatı karşılıyorsa Yeterli, karşılamıyorsa Yetersiz yaz.",
    "inputs": [
      [
        "butce",
        "Eldeki para",
        "int"
      ],
      [
        "fiyat",
        "Ürünün fiyatı",
        "int"
      ]
    ],
    "steps": [
      "if parantezine butce >= fiyat koşulunu yaz.",
      "if içine \"Yeterli\" mesajını yazdır.",
      "else içine \"Yetersiz\" mesajını yazdır."
    ],
    "example": "Örnek: 40, 50 → Yetersiz. Diğer örnek: 50, 50 → Yeterli.",
    "note": "İki sayı da negatif değil. Parası tam yetiyorsa da Yeterli yazılmalı.",
    "readStep": "Kullanıcıdan istenen sayıları sırayla oku. Convert.ToInt32(Console.ReadLine()) ile int değişkenlerinde tut.",
    "checks": [
      "butce: int, fiyat: int",
      "if / else kullan. Ekrana yalnızca seçilen mesajı yaz."
    ]
  },
  {
    "problem": "Kullanıcıdan önce stoktaki, sonra istenen ürün sayısını al. Stok yeterliyse Hazır, yetmiyorsa Eksik yaz.",
    "inputs": [
      [
        "stok",
        "Stoktaki ürün sayısı",
        "int"
      ],
      [
        "istenen",
        "İstenen ürün sayısı",
        "int"
      ]
    ],
    "steps": [
      "if parantezine stok >= istenen koşulunu yaz.",
      "if içine \"Hazır\" mesajını yazdır.",
      "else içine \"Eksik\" mesajını yazdır."
    ],
    "example": "Örnek: 8, 3 → Hazır. Diğer örnek: 2, 3 → Eksik.",
    "note": "Sayılar negatif değil. Stok ile istenen sayı eşitse sipariş hazırlanabilir.",
    "readStep": "Kullanıcıdan istenen sayıları sırayla oku. Convert.ToInt32(Console.ReadLine()) ile int değişkenlerinde tut.",
    "checks": [
      "stok: int, istenen: int",
      "if / else kullan. Ekrana yalnızca seçilen mesajı yaz."
    ]
  },
  {
    "problem": "Kullanıcıdan önce girilen dosya numarasını, sonra aranan numarayı al. İkisi aynıysa Bulundu, farklıysa Aramaya devam yaz.",
    "inputs": [
      [
        "girilen",
        "Girilen dosya numarası",
        "int"
      ],
      [
        "hedef",
        "Aranan dosya numarası",
        "int"
      ]
    ],
    "steps": [
      "if parantezine girilen == hedef koşulunu yaz.",
      "if içine \"Bulundu\" mesajını yazdır.",
      "else içine \"Aramaya devam\" mesajını yazdır."
    ],
    "example": "Örnek: 12, 7 → Aramaya devam. Diğer örnek: 7, 7 → Bulundu.",
    "note": "Burada döngü yazmıyoruz. Aramaya devam yalnızca ekrana yazılacak bir mesaj.",
    "readStep": "Kullanıcıdan istenen sayıları sırayla oku. Convert.ToInt32(Console.ReadLine()) ile int değişkenlerinde tut.",
    "checks": [
      "girilen: int, hedef: int",
      "if / else kullan. Ekrana yalnızca seçilen mesajı yaz."
    ]
  },
  {
    "problem": "Kullanıcıdan bir tam sayı al. Sayı çiftse Çift, değilse Tek yaz.",
    "inputs": [
      [
        "sayi",
        "Bir tam sayı",
        "int"
      ]
    ],
    "steps": [
      "if parantezine sayi % 2 == 0 koşulunu yaz.",
      "if içine \"Çift\" mesajını yazdır.",
      "else içine \"Tek\" mesajını yazdır."
    ],
    "example": "Örnek: 6 → Çift. Diğer örnek: 7 → Tek.",
    "note": "% bölümden kalanı bulur. 2’ye bölümünden kalan 0 ise sayı çifttir. 0 da çifttir. Yine if / else kullan.",
    "readStep": "Kullanıcıdan istenen sayıları sırayla oku. Convert.ToInt32(Console.ReadLine()) ile int değişkenlerinde tut.",
    "checks": [
      "sayi: int",
      "if / else kullan. Ekrana yalnızca seçilen mesajı yaz."
    ]
  }
];})(window);