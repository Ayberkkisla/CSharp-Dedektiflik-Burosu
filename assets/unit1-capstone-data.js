window.Unit1CapstoneTasks = [
  {
    "id": "dossier",
    "title": "Dosya kartını hazırla",
    "kind": "01 / KİMLİK MASASI",
    "intro": "Kayıp çanta dosyasının ilk işi, sahibini ve dosya numarasını kaydetmek.",
    "input": [
      "Ada",
      "42"
    ],
    "output": [
      "Dosya: Ada / 42"
    ],
    "reference": "string ad = Console.ReadLine();\nint numara = Convert.ToInt32(Console.ReadLine());\nstring kart = \"Dosya: \" + ad + \" / \" + numara;\nConsole.WriteLine(kart);",
    "frames": [
      {
        "line": 0,
        "phase": "ready",
        "caption": "Girdiler sırayla okunacak. Henüz hesap yapılmadı, konsola bir şey yazılmadı.",
        "vars": {},
        "output": [],
        "status": "ready"
      },
      {
        "line": 1,
        "caption": "İlk giriş Ada metni. ad değişkenine alınır.",
        "vars": {
          "ad": "Ada"
        },
        "output": [],
        "phase": "read",
        "status": "working"
      },
      {
        "line": 2,
        "caption": "42 metni Convert.ToInt32 ile tam sayıya çevrilir.",
        "vars": {
          "ad": "Ada",
          "numara": 42
        },
        "output": [],
        "phase": "read",
        "status": "working"
      },
      {
        "line": 3,
        "caption": "Ad, numara ve metin parçaları kart üzerinde birleşir. Buradaki + metin birleştirir.",
        "vars": {
          "ad": "Ada",
          "numara": 42,
          "kart": "Dosya: Ada / 42"
        },
        "output": [],
        "phase": "calculate",
        "status": "working"
      },
      {
        "line": 4,
        "caption": "Hazırlanan kart tek satır yazılır.",
        "vars": {
          "ad": "Ada",
          "numara": 42,
          "kart": "Dosya: Ada / 42"
        },
        "output": [
          "Dosya: Ada / 42"
        ],
        "phase": "print",
        "status": "print"
      }
    ],
    "lineHelp": {
      "1": "İlk giriş Ada metni. ad değişkenine alınır.",
      "2": "42 metni Convert.ToInt32 ile tam sayıya çevrilir.",
      "3": "Ad, numara ve metin parçaları kart üzerinde birleşir. Buradaki + metin birleştirir.",
      "4": "Hazırlanan kart tek satır yazılır."
    },
    "understand": [
      "Önce adı, sonra 1–9999 arasında tam sayı dosya numarasını girecek. Ad boş olmayacak; boşluk içerebilir.",
      "Adı string, numarayı int değişkende tut. Bilgileri örnekteki boşluklarla birleştir.",
      "Tek satır yaz: Dosya: Ada / 42. Ada ve 42 yerine girilen bilgileri kullan."
    ],
    "walkthrough": [
      "Ada ilk giriş; metin olarak saklanır.",
      "42 ikinci giriş; int değerine çevrilir.",
      "İki bilgi Dosya: Ada / 42 satırında birleşir."
    ],
    "concept": "string · int · metin birleştirme",
    "hint": "+ ile birleştirme veya $\"Dosya: {ad} / {numara}\" kullanabilirsin.",
    "theme": "green",
    "independent": false,
    "goal": "Adı string, numarayı int değişkende tut. Bilgileri örnekteki boşluklarla birleştir. Tek satır yaz: Dosya: Ada / 42. Ada ve 42 yerine girilen bilgileri kullan.",
    "rules": [
      "Girdileri verilen sırayla, her biri ayrı satırda oku.",
      "Girdilerin belirtilen tür ve aralıkta olduğu kabul edilir; hatalı metin kontrolü istenmiyor.",
      "İstem mesajı ekleme. Yalnızca istenen sonuçları, belirtilen sırayla yaz.",
      "Temel değişken ve işlemleri kullan. Bu finalde if/else, döngü, dizi veya metot gerekmiyor."
    ],
    "words": [
      [
        "Console.ReadLine()",
        "Kullanıcının bir satırını metin olarak alır. Her çağrı sıradaki girdiyi okur."
      ],
      [
        "Convert.ToInt32(...)",
        "Tam sayı metnini int değerine çevirir. Burada girdiler geçerli veriliyor."
      ],
      [
        "Console.WriteLine(...)",
        "Sonucu konsola yazar ve yeni satıra geçer. Örnek konsol da yalnızca bu satır çalışınca değişir."
      ]
    ],
    "themeName": "Yeşil"
  },
  {
    "id": "camera",
    "title": "Kamera saatini çöz",
    "kind": "02 / KAYIT ODASI",
    "intro": "Kamera, gece yarısından beri geçen süreyi saniye olarak saklıyor. Bu süreyi üç parçaya ayır.",
    "input": [
      "3671"
    ],
    "output": [
      "Saat: 1",
      "Dakika: 1",
      "Saniye: 11"
    ],
    "reference": "int toplam = Convert.ToInt32(Console.ReadLine());\nint saat = toplam / 3600;\nint dakika = toplam % 3600 / 60;\nint saniye = toplam % 60;\nConsole.WriteLine(\"Saat: \" + saat);\nConsole.WriteLine(\"Dakika: \" + dakika);\nConsole.WriteLine(\"Saniye: \" + saniye);",
    "frames": [
      {
        "line": 0,
        "phase": "ready",
        "caption": "Girdiler sırayla okunacak. Henüz hesap yapılmadı, konsola bir şey yazılmadı.",
        "vars": {},
        "output": [],
        "status": "ready"
      },
      {
        "line": 1,
        "caption": "3671 saniye toplam değişkenine alınır.",
        "vars": {
          "toplam": 3671
        },
        "output": [],
        "phase": "read",
        "status": "working"
      },
      {
        "line": 2,
        "caption": "3671 / 3600 tam sayı bölmesidir: bir tam saat bulunur.",
        "vars": {
          "toplam": 3671,
          "saat": 1
        },
        "output": [],
        "phase": "calculate",
        "status": "working"
      },
      {
        "line": 3,
        "caption": "3671 % 3600 ile 71 saniye kalır. 71 / 60 bir tam dakikadır.",
        "vars": {
          "toplam": 3671,
          "saat": 1,
          "dakika": 1
        },
        "output": [],
        "phase": "calculate",
        "status": "working"
      },
      {
        "line": 4,
        "caption": "3671 % 60, dakikaya tamamlanmayan 11 saniyeyi verir.",
        "vars": {
          "toplam": 3671,
          "saat": 1,
          "dakika": 1,
          "saniye": 11
        },
        "output": [],
        "phase": "calculate",
        "status": "working"
      },
      {
        "line": 5,
        "caption": "Saat ilk satıra yazılır.",
        "vars": {
          "toplam": 3671,
          "saat": 1,
          "dakika": 1,
          "saniye": 11
        },
        "output": [
          "Saat: 1"
        ],
        "phase": "print",
        "status": "print"
      },
      {
        "line": 6,
        "caption": "Dakika ikinci satıra yazılır.",
        "vars": {
          "toplam": 3671,
          "saat": 1,
          "dakika": 1,
          "saniye": 11
        },
        "output": [
          "Saat: 1",
          "Dakika: 1"
        ],
        "phase": "print",
        "status": "print"
      },
      {
        "line": 7,
        "caption": "Saniye son satıra yazılır.",
        "vars": {
          "toplam": 3671,
          "saat": 1,
          "dakika": 1,
          "saniye": 11
        },
        "output": [
          "Saat: 1",
          "Dakika: 1",
          "Saniye: 11"
        ],
        "phase": "print",
        "status": "print"
      }
    ],
    "lineHelp": {
      "1": "3671 saniye toplam değişkenine alınır.",
      "2": "3671 / 3600 tam sayı bölmesidir: bir tam saat bulunur.",
      "3": "3671 % 3600 ile 71 saniye kalır. 71 / 60 bir tam dakikadır.",
      "4": "3671 % 60, dakikaya tamamlanmayan 11 saniyeyi verir.",
      "5": "Saat ilk satıra yazılır.",
      "6": "Dakika ikinci satıra yazılır.",
      "7": "Saniye son satıra yazılır."
    },
    "understand": [
      "0–86399 arasında tek bir tam sayı: gece yarısından beri geçen toplam saniye.",
      "Kaç tam saat, kaç dakika ve kaç saniye olduğunu hesapla. Saat 3600, dakika 60 saniyedir.",
      "Üç satır yaz: Saat: X, Dakika: Y, Saniye: Z. Başına sıfır ekleme."
    ],
    "walkthrough": [
      "3671 saniyenin 3600 saniyesi 1 saattir.",
      "Kalan 71 saniyenin 60 saniyesi 1 dakikadır.",
      "Son 11 saniye kalır. Üç sonuç ayrı satırlara yazılır."
    ],
    "concept": "Tam sayı bölme · kalan · işlem sırası",
    "hint": "/ tam bölümü, % kalan süreyi bulmanı sağlar.",
    "theme": "blue",
    "independent": false,
    "goal": "Kaç tam saat, kaç dakika ve kaç saniye olduğunu hesapla. Saat 3600, dakika 60 saniyedir. Üç satır yaz: Saat: X, Dakika: Y, Saniye: Z. Başına sıfır ekleme.",
    "rules": [
      "Girdileri verilen sırayla, her biri ayrı satırda oku.",
      "Girdilerin belirtilen tür ve aralıkta olduğu kabul edilir; hatalı metin kontrolü istenmiyor.",
      "İstem mesajı ekleme. Yalnızca istenen sonuçları, belirtilen sırayla yaz.",
      "Temel değişken ve işlemleri kullan. Bu finalde if/else, döngü, dizi veya metot gerekmiyor."
    ],
    "words": [
      [
        "Console.ReadLine()",
        "Kullanıcının bir satırını metin olarak alır. Her çağrı sıradaki girdiyi okur."
      ],
      [
        "Convert.ToInt32(...)",
        "Tam sayı metnini int değerine çevirir. Burada girdiler geçerli veriliyor."
      ],
      [
        "Console.WriteLine(...)",
        "Sonucu konsola yazar ve yeni satıra geçer. Örnek konsol da yalnızca bu satır çalışınca değişir."
      ]
    ],
    "themeName": "Mavi"
  },
  {
    "id": "taxi",
    "title": "Taksimetreyi hesapla",
    "kind": "03 / GECE TAKSİSİ",
    "intro": "Tanığın izini sürerken yol ücretini hesaplayacağız. Açılış bedeli bir kez alınır.",
    "input": [
      "7",
      "30",
      "12"
    ],
    "output": [
      "Ucret: 114"
    ],
    "reference": "int km = Convert.ToInt32(Console.ReadLine());\nint acilis = Convert.ToInt32(Console.ReadLine());\nint birim = Convert.ToInt32(Console.ReadLine());\nint yol = km * birim;\nint toplam = acilis + yol;\nConsole.WriteLine(\"Ucret: \" + toplam);",
    "frames": [
      {
        "line": 0,
        "phase": "ready",
        "caption": "Girdiler sırayla okunacak. Henüz hesap yapılmadı, konsola bir şey yazılmadı.",
        "vars": {},
        "output": [],
        "status": "ready"
      },
      {
        "line": 1,
        "caption": "Tanık 7 kilometre gitmiş. km değişkeni 7 olur.",
        "vars": {
          "km": 7
        },
        "output": [],
        "phase": "read",
        "status": "working"
      },
      {
        "line": 2,
        "caption": "Açılış bedeli 30 TL olarak okunur.",
        "vars": {
          "km": 7,
          "acilis": 30
        },
        "output": [],
        "phase": "read",
        "status": "working"
      },
      {
        "line": 3,
        "caption": "Kilometre başına 12 TL okunur.",
        "vars": {
          "km": 7,
          "acilis": 30,
          "birim": 12
        },
        "output": [],
        "phase": "read",
        "status": "working"
      },
      {
        "line": 4,
        "caption": "7 × 12 ile yol bedeli 84 TL bulunur. Taksi yolun sonuna ilerler.",
        "vars": {
          "km": 7,
          "acilis": 30,
          "birim": 12,
          "yol": 84
        },
        "output": [],
        "phase": "calculate",
        "status": "working"
      },
      {
        "line": 5,
        "caption": "30 TL açılış ile 84 TL yol bedeli toplanır: 114 TL.",
        "vars": {
          "km": 7,
          "acilis": 30,
          "birim": 12,
          "yol": 84,
          "toplam": 114
        },
        "output": [],
        "phase": "calculate",
        "status": "working"
      },
      {
        "line": 6,
        "caption": "Toplam ücret yazılır.",
        "vars": {
          "km": 7,
          "acilis": 30,
          "birim": 12,
          "yol": 84,
          "toplam": 114
        },
        "output": [
          "Ucret: 114"
        ],
        "phase": "print",
        "status": "print"
      }
    ],
    "lineHelp": {
      "1": "Tanık 7 kilometre gitmiş. km değişkeni 7 olur.",
      "2": "Açılış bedeli 30 TL olarak okunur.",
      "3": "Kilometre başına 12 TL okunur.",
      "4": "7 × 12 ile yol bedeli 84 TL bulunur. Taksi yolun sonuna ilerler.",
      "5": "30 TL açılış ile 84 TL yol bedeli toplanır: 114 TL.",
      "6": "Toplam ücret yazılır."
    },
    "understand": [
      "Sırayla kilometre, açılış bedeli ve kilometre ücreti. Hepsi tam sayı; kilometre 0–100, bedeller 0–1000.",
      "Kilometreyi birim ücretle çarp, açılış bedelini bir kez ekle.",
      "Tek satır yaz: Ucret: X. X toplam TL tutarıdır."
    ],
    "walkthrough": [
      "7, 30 ve 12 sırayla girilir.",
      "7 × 12 = 84 TL yol bedeli.",
      "30 + 84 = 114 TL; çıktı Ucret: 114."
    ],
    "concept": "Çarpma · toplama · işlem önceliği",
    "hint": "Toplam = açılış + kilometre × birim ücret.",
    "theme": "amber",
    "independent": false,
    "goal": "Kilometreyi birim ücretle çarp, açılış bedelini bir kez ekle. Tek satır yaz: Ucret: X. X toplam TL tutarıdır.",
    "rules": [
      "Girdileri verilen sırayla, her biri ayrı satırda oku.",
      "Girdilerin belirtilen tür ve aralıkta olduğu kabul edilir; hatalı metin kontrolü istenmiyor.",
      "İstem mesajı ekleme. Yalnızca istenen sonuçları, belirtilen sırayla yaz.",
      "Temel değişken ve işlemleri kullan. Bu finalde if/else, döngü, dizi veya metot gerekmiyor."
    ],
    "words": [
      [
        "Console.ReadLine()",
        "Kullanıcının bir satırını metin olarak alır. Her çağrı sıradaki girdiyi okur."
      ],
      [
        "Convert.ToInt32(...)",
        "Tam sayı metnini int değerine çevirir. Burada girdiler geçerli veriliyor."
      ],
      [
        "Console.WriteLine(...)",
        "Sonucu konsola yazar ve yeni satıra geçer. Örnek konsol da yalnızca bu satır çalışınca değişir."
      ]
    ],
    "themeName": "Kehribar"
  },
  {
    "id": "crates",
    "title": "Delilleri kutulara ayır",
    "kind": "04 / DELİL DEPOSU",
    "intro": "Yalnızca tamamen dolan kutuları sayıyoruz. Artan deliller masada kalacak.",
    "input": [
      "29",
      "6"
    ],
    "output": [
      "Dolu kutu: 4",
      "Artan: 5"
    ],
    "reference": "int delil = Convert.ToInt32(Console.ReadLine());\nint kapasite = Convert.ToInt32(Console.ReadLine());\nint kutu = delil / kapasite;\nint artan = delil % kapasite;\nConsole.WriteLine(\"Dolu kutu: \" + kutu);\nConsole.WriteLine(\"Artan: \" + artan);",
    "frames": [
      {
        "line": 0,
        "phase": "ready",
        "caption": "Girdiler sırayla okunacak. Henüz hesap yapılmadı, konsola bir şey yazılmadı.",
        "vars": {},
        "output": [],
        "status": "ready"
      },
      {
        "line": 1,
        "caption": "29 delil sayısı alınır.",
        "vars": {
          "delil": 29
        },
        "output": [],
        "phase": "read",
        "status": "working"
      },
      {
        "line": 2,
        "caption": "Her kutuya 6 delil sığar.",
        "vars": {
          "delil": 29,
          "kapasite": 6
        },
        "output": [],
        "phase": "read",
        "status": "working"
      },
      {
        "line": 3,
        "caption": "29 / 6 tam sayı bölmesi 4 verir. Dört kutu tamamen dolar.",
        "vars": {
          "delil": 29,
          "kapasite": 6,
          "kutu": 4
        },
        "output": [],
        "phase": "calculate",
        "status": "working"
      },
      {
        "line": 4,
        "caption": "29 % 6 ile 5 delil kalır. Bunlar bir kutuyu dolduramaz.",
        "vars": {
          "delil": 29,
          "kapasite": 6,
          "kutu": 4,
          "artan": 5
        },
        "output": [],
        "phase": "calculate",
        "status": "working"
      },
      {
        "line": 5,
        "caption": "Dolu kutu sayısı yazılır.",
        "vars": {
          "delil": 29,
          "kapasite": 6,
          "kutu": 4,
          "artan": 5
        },
        "output": [
          "Dolu kutu: 4"
        ],
        "phase": "print",
        "status": "print"
      },
      {
        "line": 6,
        "caption": "Artan delil sayısı yazılır.",
        "vars": {
          "delil": 29,
          "kapasite": 6,
          "kutu": 4,
          "artan": 5
        },
        "output": [
          "Dolu kutu: 4",
          "Artan: 5"
        ],
        "phase": "print",
        "status": "print"
      }
    ],
    "lineHelp": {
      "1": "29 delil sayısı alınır.",
      "2": "Her kutuya 6 delil sığar.",
      "3": "29 / 6 tam sayı bölmesi 4 verir. Dört kutu tamamen dolar.",
      "4": "29 % 6 ile 5 delil kalır. Bunlar bir kutuyu dolduramaz.",
      "5": "Dolu kutu sayısı yazılır.",
      "6": "Artan delil sayısı yazılır."
    },
    "understand": [
      "Önce delil sayısı (0–1000), sonra kutu kapasitesi (1–100).",
      "Tamamen dolan kutu sayısını ve dışarıda kalan delilleri hesapla. Kısmen dolan kutuyu sayma.",
      "İki satır yaz: Dolu kutu: X ve Artan: Y."
    ],
    "walkthrough": [
      "29 delil, kutu başına 6 yer girilir.",
      "4 × 6 = 24 delil kutulara yerleşir.",
      "29 − 24 = 5 delil artar."
    ],
    "concept": "/ ile bölüm · % ile kalan",
    "hint": "int değerlerde / tam bölümü, % kalanı verir.",
    "theme": "teal",
    "independent": false,
    "goal": "Tamamen dolan kutu sayısını ve dışarıda kalan delilleri hesapla. Kısmen dolan kutuyu sayma. İki satır yaz: Dolu kutu: X ve Artan: Y.",
    "rules": [
      "Girdileri verilen sırayla, her biri ayrı satırda oku.",
      "Girdilerin belirtilen tür ve aralıkta olduğu kabul edilir; hatalı metin kontrolü istenmiyor.",
      "İstem mesajı ekleme. Yalnızca istenen sonuçları, belirtilen sırayla yaz.",
      "Temel değişken ve işlemleri kullan. Bu finalde if/else, döngü, dizi veya metot gerekmiyor."
    ],
    "words": [
      [
        "Console.ReadLine()",
        "Kullanıcının bir satırını metin olarak alır. Her çağrı sıradaki girdiyi okur."
      ],
      [
        "Convert.ToInt32(...)",
        "Tam sayı metnini int değerine çevirir. Burada girdiler geçerli veriliyor."
      ],
      [
        "Console.WriteLine(...)",
        "Sonucu konsola yazar ve yeni satıra geçer. Örnek konsol da yalnızca bu satır çalışınca değişir."
      ]
    ],
    "themeName": "Turkuaz yeşili"
  },
  {
    "id": "blueprint",
    "title": "Arşivin planını çıkar",
    "kind": "05 / ÖLÇÜM ATÖLYESİ",
    "intro": "Dikdörtgen arşivin zeminine kaplama, kenarlarına şerit gerekiyor.",
    "input": [
      "8",
      "5"
    ],
    "output": [
      "Alan: 40",
      "Cevre: 26"
    ],
    "reference": "int en = Convert.ToInt32(Console.ReadLine());\nint boy = Convert.ToInt32(Console.ReadLine());\nint alan = en * boy;\nint cevre = 2 * (en + boy);\nConsole.WriteLine(\"Alan: \" + alan);\nConsole.WriteLine(\"Cevre: \" + cevre);",
    "frames": [
      {
        "line": 0,
        "phase": "ready",
        "caption": "Girdiler sırayla okunacak. Henüz hesap yapılmadı, konsola bir şey yazılmadı.",
        "vars": {},
        "output": [],
        "status": "ready"
      },
      {
        "line": 1,
        "caption": "En 8 metre olarak okunur. Yatay ölçü belirir.",
        "vars": {
          "en": 8
        },
        "output": [],
        "phase": "read",
        "status": "working"
      },
      {
        "line": 2,
        "caption": "Boy 5 metre olarak okunur. Dikey ölçü belirir.",
        "vars": {
          "en": 8,
          "boy": 5
        },
        "output": [],
        "phase": "read",
        "status": "working"
      },
      {
        "line": 3,
        "caption": "8 × 5 = 40 metrekare. Odanın zemini kaplanır.",
        "vars": {
          "en": 8,
          "boy": 5,
          "alan": 40
        },
        "output": [],
        "phase": "calculate",
        "status": "working"
      },
      {
        "line": 4,
        "caption": "Önce 8 + 5, sonra 2 ile çarpma: çevre 26 metre. Dört kenar izlenir.",
        "vars": {
          "en": 8,
          "boy": 5,
          "alan": 40,
          "cevre": 26
        },
        "output": [],
        "phase": "calculate",
        "status": "working"
      },
      {
        "line": 5,
        "caption": "Alan yazılır.",
        "vars": {
          "en": 8,
          "boy": 5,
          "alan": 40,
          "cevre": 26
        },
        "output": [
          "Alan: 40"
        ],
        "phase": "print",
        "status": "print"
      },
      {
        "line": 6,
        "caption": "Çevre yazılır.",
        "vars": {
          "en": 8,
          "boy": 5,
          "alan": 40,
          "cevre": 26
        },
        "output": [
          "Alan: 40",
          "Cevre: 26"
        ],
        "phase": "print",
        "status": "print"
      }
    ],
    "lineHelp": {
      "1": "En 8 metre olarak okunur. Yatay ölçü belirir.",
      "2": "Boy 5 metre olarak okunur. Dikey ölçü belirir.",
      "3": "8 × 5 = 40 metrekare. Odanın zemini kaplanır.",
      "4": "Önce 8 + 5, sonra 2 ile çarpma: çevre 26 metre. Dört kenar izlenir.",
      "5": "Alan yazılır.",
      "6": "Çevre yazılır."
    },
    "understand": [
      "Odanın enini ve boyunu metre cinsinden iki tam sayı olarak girecek. Her biri 1–50 arasında.",
      "Alanı en × boy, çevreyi 2 × (en + boy) ile hesapla.",
      "İki satır yaz: Alan: X ve Cevre: Y. Çıktıya birim ekleme."
    ],
    "walkthrough": [
      "En 8, boy 5 girilir.",
      "Alan 8 × 5 = 40 olur.",
      "Çevre 2 × (8 + 5) = 26. Parantez önce hesaplanır."
    ],
    "concept": "Parantez · alan · çevre",
    "hint": "Çevrede önce en ile boyu topla, sonra 2 ile çarp.",
    "theme": "violet",
    "independent": false,
    "goal": "Alanı en × boy, çevreyi 2 × (en + boy) ile hesapla. İki satır yaz: Alan: X ve Cevre: Y. Çıktıya birim ekleme.",
    "rules": [
      "Girdileri verilen sırayla, her biri ayrı satırda oku.",
      "Girdilerin belirtilen tür ve aralıkta olduğu kabul edilir; hatalı metin kontrolü istenmiyor.",
      "İstem mesajı ekleme. Yalnızca istenen sonuçları, belirtilen sırayla yaz.",
      "Temel değişken ve işlemleri kullan. Bu finalde if/else, döngü, dizi veya metot gerekmiyor."
    ],
    "words": [
      [
        "Console.ReadLine()",
        "Kullanıcının bir satırını metin olarak alır. Her çağrı sıradaki girdiyi okur."
      ],
      [
        "Convert.ToInt32(...)",
        "Tam sayı metnini int değerine çevirir. Burada girdiler geçerli veriliyor."
      ],
      [
        "Console.WriteLine(...)",
        "Sonucu konsola yazar ve yeni satıra geçer. Örnek konsol da yalnızca bu satır çalışınca değişir."
      ]
    ],
    "themeName": "Mor"
  },
  {
    "id": "radio",
    "title": "Radyonun frekansını ayarla",
    "kind": "06 / TELSİZ TEZGAHI",
    "intro": "Ses kaydı, başlangıç frekansının üç ayar adımı ilerisinde. Her adım aynı miktarı ekliyor.",
    "input": [
      "98.5",
      "0.25"
    ],
    "output": [
      "99.25"
    ],
    "reference": "double baslangic = Convert.ToDouble(Console.ReadLine());\ndouble adim = Convert.ToDouble(Console.ReadLine());\ndouble fark = adim * 3;\ndouble hedef = baslangic + fark;\nConsole.WriteLine(hedef);",
    "frames": [
      {
        "line": 0,
        "phase": "ready",
        "caption": "Girdiler sırayla okunacak. Henüz hesap yapılmadı, konsola bir şey yazılmadı.",
        "vars": {},
        "output": [],
        "status": "ready"
      },
      {
        "line": 1,
        "caption": "98.5 başlangıç frekansı double değişkenine alınır.",
        "vars": {
          "baslangic": 98.5
        },
        "output": [],
        "phase": "read",
        "status": "working"
      },
      {
        "line": 2,
        "caption": "Bir adımın 0.25 olduğu okunur.",
        "vars": {
          "baslangic": 98.5,
          "adim": 0.25
        },
        "output": [],
        "phase": "read",
        "status": "working"
      },
      {
        "line": 3,
        "caption": "Üç adımın farkı 0.25 × 3 = 0.75. Kadranda üç eşit aralık gösterilir.",
        "vars": {
          "baslangic": 98.5,
          "adim": 0.25,
          "fark": 0.75
        },
        "output": [],
        "phase": "calculate",
        "status": "working"
      },
      {
        "line": 4,
        "caption": "İbre 98.5 değerinden 0.75 ileri gider. Hedef 99.25 olur.",
        "vars": {
          "baslangic": 98.5,
          "adim": 0.25,
          "fark": 0.75,
          "hedef": 99.25
        },
        "output": [],
        "phase": "calculate",
        "status": "working"
      },
      {
        "line": 5,
        "caption": "Yalnızca hedef frekans yazılır.",
        "vars": {
          "baslangic": 98.5,
          "adim": 0.25,
          "fark": 0.75,
          "hedef": 99.25
        },
        "output": [
          "99.25"
        ],
        "phase": "print",
        "status": "print"
      }
    ],
    "lineHelp": {
      "1": "98.5 başlangıç frekansı double değişkenine alınır.",
      "2": "Bir adımın 0.25 olduğu okunur.",
      "3": "Üç adımın farkı 0.25 × 3 = 0.75. Kadranda üç eşit aralık gösterilir.",
      "4": "İbre 98.5 değerinden 0.75 ileri gider. Hedef 99.25 olur.",
      "5": "Yalnızca hedef frekans yazılır."
    },
    "understand": [
      "Başlangıç frekansı ve bir ayar adımı. Başlangıç 80–105, adım 0.1–1 arasında ondalıklı sayılar; ayıraç nokta.",
      "Girdileri double değişkende tut. Başlangıca üç adım ekle.",
      "Yalnızca hedef sayıyı yaz. Birim, başlık veya sabit basamak biçimi ekleme; örnekte 99.25."
    ],
    "walkthrough": [
      "98.5 ve 0.25 girilir.",
      "Üç adım 0.25 × 3 = 0.75 eder.",
      "98.5 + 0.75 = 99.25 yazılır."
    ],
    "concept": "double · ondalıklı hesap",
    "hint": "Ondalıklı giriş için Convert.ToDouble kullan. Bu konsolda nokta kullanılır.",
    "theme": "cyan",
    "independent": false,
    "goal": "Girdileri double değişkende tut. Başlangıca üç adım ekle. Yalnızca hedef sayıyı yaz. Birim, başlık veya sabit basamak biçimi ekleme; örnekte 99.25.",
    "rules": [
      "Girdileri verilen sırayla, her biri ayrı satırda oku.",
      "Girdilerin belirtilen tür ve aralıkta olduğu kabul edilir; hatalı metin kontrolü istenmiyor.",
      "İstem mesajı ekleme. Yalnızca istenen sonuçları, belirtilen sırayla yaz.",
      "Temel değişken ve işlemleri kullan. Bu finalde if/else, döngü, dizi veya metot gerekmiyor."
    ],
    "words": [
      [
        "Console.ReadLine()",
        "Kullanıcının bir satırını metin olarak alır. Her çağrı sıradaki girdiyi okur."
      ],
      [
        "Convert.ToInt32(...)",
        "Tam sayı metnini int değerine çevirir. Burada girdiler geçerli veriliyor."
      ],
      [
        "Console.WriteLine(...)",
        "Sonucu konsola yazar ve yeni satıra geçer. Örnek konsol da yalnızca bu satır çalışınca değişir."
      ],
      [
        "double ve Convert.ToDouble",
        "Ondalıklı sayıları tutar. Bu konsolda ondalık ayıracı noktadır. Çok küçük hesaplama farkları kod kontrolünde kabul edilir."
      ]
    ],
    "themeName": "Camgöbeği"
  },
  {
    "id": "budget",
    "title": "Takip bütçesini ayır",
    "kind": "07 / BÜRO KASASI",
    "intro": "Ekip için aynı fiyattan bilet alınacak. Tutarı ve kasada kalanı hesapla.",
    "input": [
      "3",
      "12.5",
      "100"
    ],
    "output": [
      "37.5",
      "62.5"
    ],
    "reference": "int adet = Convert.ToInt32(Console.ReadLine());\ndecimal fiyat = Convert.ToDecimal(Console.ReadLine());\ndecimal butce = Convert.ToDecimal(Console.ReadLine());\ndecimal tutar = adet * fiyat;\ndecimal kalan = butce - tutar;\nConsole.WriteLine(tutar);\nConsole.WriteLine(kalan);",
    "frames": [
      {
        "line": 0,
        "phase": "ready",
        "caption": "Girdiler sırayla okunacak. Henüz hesap yapılmadı, konsola bir şey yazılmadı.",
        "vars": {},
        "output": [],
        "status": "ready"
      },
      {
        "line": 1,
        "caption": "3 bilet alınacak; adet int olarak okunur.",
        "vars": {
          "adet": 3
        },
        "output": [],
        "phase": "read",
        "status": "working"
      },
      {
        "line": 2,
        "caption": "Bilet fiyatı 12.5 TL; decimal değişkene alınır.",
        "vars": {
          "adet": 3,
          "fiyat": 12.5
        },
        "output": [],
        "phase": "read",
        "status": "working"
      },
      {
        "line": 3,
        "caption": "Bütçe 100 TL; decimal olarak okunur.",
        "vars": {
          "adet": 3,
          "fiyat": 12.5,
          "butce": 100
        },
        "output": [],
        "phase": "read",
        "status": "working"
      },
      {
        "line": 4,
        "caption": "Üç biletin bedeli aynı zarfta toplanır: 3 × 12.5 = 37.5 TL.",
        "vars": {
          "adet": 3,
          "fiyat": 12.5,
          "butce": 100,
          "tutar": 37.5
        },
        "output": [],
        "phase": "calculate",
        "status": "working"
      },
      {
        "line": 5,
        "caption": "100 − 37.5 = 62.5 TL kasada kalır.",
        "vars": {
          "adet": 3,
          "fiyat": 12.5,
          "butce": 100,
          "tutar": 37.5,
          "kalan": 62.5
        },
        "output": [],
        "phase": "calculate",
        "status": "working"
      },
      {
        "line": 6,
        "caption": "Bilet tutarı ilk satıra yazılır.",
        "vars": {
          "adet": 3,
          "fiyat": 12.5,
          "butce": 100,
          "tutar": 37.5,
          "kalan": 62.5
        },
        "output": [
          "37.5"
        ],
        "phase": "print",
        "status": "print"
      },
      {
        "line": 7,
        "caption": "Kalan bütçe ikinci satıra yazılır.",
        "vars": {
          "adet": 3,
          "fiyat": 12.5,
          "butce": 100,
          "tutar": 37.5,
          "kalan": 62.5
        },
        "output": [
          "37.5",
          "62.5"
        ],
        "phase": "print",
        "status": "print"
      }
    ],
    "lineHelp": {
      "1": "3 bilet alınacak; adet int olarak okunur.",
      "2": "Bilet fiyatı 12.5 TL; decimal değişkene alınır.",
      "3": "Bütçe 100 TL; decimal olarak okunur.",
      "4": "Üç biletin bedeli aynı zarfta toplanır: 3 × 12.5 = 37.5 TL.",
      "5": "100 − 37.5 = 62.5 TL kasada kalır.",
      "6": "Bilet tutarı ilk satıra yazılır.",
      "7": "Kalan bütçe ikinci satıra yazılır."
    },
    "understand": [
      "Sırayla bilet adedi (0–20), birim fiyat (0–100 TL), bütçe (0–5000 TL). Para ondalıklı olabilir; nokta kullanılır. Bütçe tutarı karşılar.",
      "Adedi int, fiyatı ve bütçeyi decimal tut. Toplam bilet tutarını ve kalan bütçeyi bul.",
      "İlk satıra tutarı, ikinci satıra kalanı yalnızca sayı olarak yaz; TL veya başlık ekleme."
    ],
    "walkthrough": [
      "3 bilet, 12.5 TL fiyat ve 100 TL bütçe girilir.",
      "3 × 12.5 = 37.5 TL tutar.",
      "100 − 37.5 = 62.5 TL kalır."
    ],
    "concept": "int ile decimal · para hesabı",
    "hint": "Para için Convert.ToDecimal kullan. decimal sabiti yazarsan 12.5m gibi m eki gerekir.",
    "theme": "orange",
    "independent": false,
    "goal": "Adedi int, fiyatı ve bütçeyi decimal tut. Toplam bilet tutarını ve kalan bütçeyi bul. İlk satıra tutarı, ikinci satıra kalanı yalnızca sayı olarak yaz; TL veya başlık ekleme.",
    "rules": [
      "Girdileri verilen sırayla, her biri ayrı satırda oku.",
      "Girdilerin belirtilen tür ve aralıkta olduğu kabul edilir; hatalı metin kontrolü istenmiyor.",
      "İstem mesajı ekleme. Yalnızca istenen sonuçları, belirtilen sırayla yaz.",
      "Temel değişken ve işlemleri kullan. Bu finalde if/else, döngü, dizi veya metot gerekmiyor."
    ],
    "words": [
      [
        "Console.ReadLine()",
        "Kullanıcının bir satırını metin olarak alır. Her çağrı sıradaki girdiyi okur."
      ],
      [
        "Convert.ToInt32(...)",
        "Tam sayı metnini int değerine çevirir. Burada girdiler geçerli veriliyor."
      ],
      [
        "Console.WriteLine(...)",
        "Sonucu konsola yazar ve yeni satıra geçer. Örnek konsol da yalnızca bu satır çalışınca değişir."
      ],
      [
        "decimal ve Convert.ToDecimal",
        "Para hesabında ondalıklı değerleri tutar. decimal sabitleri 12.5m gibi m ekiyle yazılır."
      ]
    ],
    "themeName": "Turuncu"
  },
  {
    "id": "battery",
    "title": "Kayıt cihazının pilini izle",
    "kind": "08 / TEKNİK SERVİS",
    "intro": "Cihaz önce enerji harcıyor, sonra şarj oluyor. Aynı değişkeni işlem sırasıyla güncelle.",
    "input": [
      "80",
      "25",
      "10"
    ],
    "output": [
      "65"
    ],
    "reference": "int pil = Convert.ToInt32(Console.ReadLine());\nint harcanan = Convert.ToInt32(Console.ReadLine());\nint eklenen = Convert.ToInt32(Console.ReadLine());\npil -= harcanan;\npil += eklenen;\nConsole.WriteLine(pil);",
    "frames": [
      {
        "line": 0,
        "phase": "ready",
        "caption": "Girdiler sırayla okunacak. Henüz hesap yapılmadı, konsola bir şey yazılmadı.",
        "vars": {},
        "output": [],
        "status": "ready"
      },
      {
        "line": 1,
        "caption": "Başlangıç pili yüzde 80. pil değişkeni 80 olur.",
        "vars": {
          "pil": 80
        },
        "output": [],
        "phase": "read",
        "status": "working"
      },
      {
        "line": 2,
        "caption": "25 puan harcanacağı okunur.",
        "vars": {
          "pil": 80,
          "harcanan": 25
        },
        "output": [],
        "phase": "read",
        "status": "working"
      },
      {
        "line": 3,
        "caption": "Şarjda 10 puan ekleneceği okunur.",
        "vars": {
          "pil": 80,
          "harcanan": 25,
          "eklenen": 10
        },
        "output": [],
        "phase": "read",
        "status": "working"
      },
      {
        "line": 4,
        "caption": "pil -= harcanan, pil = pil - harcanan demektir. Pil 80’den 55’e iner.",
        "vars": {
          "pil": 55,
          "harcanan": 25,
          "eklenen": 10
        },
        "output": [],
        "phase": "calculate",
        "status": "working"
      },
      {
        "line": 5,
        "caption": "pil += eklenen, pil = pil + eklenen demektir. Pil 55’ten 65’e yükselir.",
        "vars": {
          "pil": 65,
          "harcanan": 25,
          "eklenen": 10
        },
        "output": [],
        "phase": "calculate",
        "status": "working"
      },
      {
        "line": 6,
        "caption": "Güncel pil değeri 65 yazılır.",
        "vars": {
          "pil": 65,
          "harcanan": 25,
          "eklenen": 10
        },
        "output": [
          "65"
        ],
        "phase": "print",
        "status": "print"
      }
    ],
    "lineHelp": {
      "1": "Başlangıç pili yüzde 80. pil değişkeni 80 olur.",
      "2": "25 puan harcanacağı okunur.",
      "3": "Şarjda 10 puan ekleneceği okunur.",
      "4": "pil -= harcanan, pil = pil - harcanan demektir. Pil 80’den 55’e iner.",
      "5": "pil += eklenen, pil = pil + eklenen demektir. Pil 55’ten 65’e yükselir.",
      "6": "Güncel pil değeri 65 yazılır."
    },
    "understand": [
      "Başlangıç pili, harcanan ve eklenen miktar: üç tam sayı. İşlemlerin her aşamasında pil 0–100 arasında kalır.",
      "Başlangıçtan harcananı çıkar, sonra ekleneni ekle. pil değişkenini güncelle veya eşdeğer bir hesap kur.",
      "Yalnızca son pil değerini yaz; yüzde işareti veya başlık ekleme."
    ],
    "walkthrough": [
      "80, 25 ve 10 girilir.",
      "Önce 80 − 25 = 55.",
      "Sonra 55 + 10 = 65. Yalnızca 65 yazılır."
    ],
    "concept": "Atama · -= · +=",
    "hint": "Kısaltılmış atama veya normal atama kullanabilirsin.",
    "theme": "lime",
    "independent": false,
    "goal": "Başlangıçtan harcananı çıkar, sonra ekleneni ekle. pil değişkenini güncelle veya eşdeğer bir hesap kur. Yalnızca son pil değerini yaz; yüzde işareti veya başlık ekleme.",
    "rules": [
      "Girdileri verilen sırayla, her biri ayrı satırda oku.",
      "Girdilerin belirtilen tür ve aralıkta olduğu kabul edilir; hatalı metin kontrolü istenmiyor.",
      "İstem mesajı ekleme. Yalnızca istenen sonuçları, belirtilen sırayla yaz.",
      "Temel değişken ve işlemleri kullan. Bu finalde if/else, döngü, dizi veya metot gerekmiyor."
    ],
    "words": [
      [
        "Console.ReadLine()",
        "Kullanıcının bir satırını metin olarak alır. Her çağrı sıradaki girdiyi okur."
      ],
      [
        "Convert.ToInt32(...)",
        "Tam sayı metnini int değerine çevirir. Burada girdiler geçerli veriliyor."
      ],
      [
        "Console.WriteLine(...)",
        "Sonucu konsola yazar ve yeni satıra geçer. Örnek konsol da yalnızca bu satır çalışınca değişir."
      ]
    ],
    "themeName": "Limon yeşili"
  },
  {
    "id": "access",
    "title": "Erişim ışıklarını yak",
    "kind": "09 / ARŞİV KAPISI",
    "intro": "Kapının yeşil ve kırmızı ışıkları bool değerlerle çalışıyor. Koşul bloğu yazmadan değerlerini bul.",
    "input": [
      "true",
      "4"
    ],
    "output": [
      "True",
      "False"
    ],
    "reference": "bool kart = Convert.ToBoolean(Console.ReadLine());\nint seviye = Convert.ToInt32(Console.ReadLine());\nbool yesil = kart && seviye >= 3;\nbool kirmizi = !yesil;\nConsole.WriteLine(yesil);\nConsole.WriteLine(kirmizi);",
    "frames": [
      {
        "line": 0,
        "phase": "ready",
        "caption": "Girdiler sırayla okunacak. Henüz hesap yapılmadı, konsola bir şey yazılmadı.",
        "vars": {},
        "output": [],
        "status": "ready"
      },
      {
        "line": 1,
        "caption": "true metni Convert.ToBoolean ile bool true olur. Kart okuyucu kartı gösterir.",
        "vars": {
          "kart": true
        },
        "output": [],
        "phase": "read",
        "status": "working"
      },
      {
        "line": 2,
        "caption": "Yetki seviyesi 4 olarak okunur.",
        "vars": {
          "kart": true,
          "seviye": 4
        },
        "output": [],
        "phase": "read",
        "status": "working"
      },
      {
        "line": 3,
        "caption": "4 >= 3 true. Kart da true: true && true sonucu true. Yeşil ışık yanar.",
        "vars": {
          "kart": true,
          "seviye": 4,
          "yesil": true
        },
        "output": [],
        "phase": "calculate",
        "status": "working"
      },
      {
        "line": 4,
        "caption": "!yesil tersini alır. !true false; kırmızı ışık sönük kalır.",
        "vars": {
          "kart": true,
          "seviye": 4,
          "yesil": true,
          "kirmizi": false
        },
        "output": [],
        "phase": "calculate",
        "status": "working"
      },
      {
        "line": 5,
        "caption": "Yeşil değeri True yazılır. C# bool çıktısı büyük harfle başlar.",
        "vars": {
          "kart": true,
          "seviye": 4,
          "yesil": true,
          "kirmizi": false
        },
        "output": [
          "True"
        ],
        "phase": "print",
        "status": "print"
      },
      {
        "line": 6,
        "caption": "Kırmızı değeri False yazılır.",
        "vars": {
          "kart": true,
          "seviye": 4,
          "yesil": true,
          "kirmizi": false
        },
        "output": [
          "True",
          "False"
        ],
        "phase": "print",
        "status": "print"
      }
    ],
    "lineHelp": {
      "1": "true metni Convert.ToBoolean ile bool true olur. Kart okuyucu kartı gösterir.",
      "2": "Yetki seviyesi 4 olarak okunur.",
      "3": "4 >= 3 true. Kart da true: true && true sonucu true. Yeşil ışık yanar.",
      "4": "!yesil tersini alır. !true false; kırmızı ışık sönük kalır.",
      "5": "Yeşil değeri True yazılır. C# bool çıktısı büyük harfle başlar.",
      "6": "Kırmızı değeri False yazılır."
    },
    "understand": [
      "Önce kart bilgisini true veya false, sonra seviyeyi 0–5 arasında tam sayı olarak girecek.",
      "Kart varsa ve seviye en az 3 ise yesil true olsun. kirmizi bunun tersi olsun. if/else kullanmadan bool ifadeleri yaz.",
      "İlk satıra yesil, ikinci satıra kirmizi değerini yaz. Console.WriteLine(bool), True veya False yazar."
    ],
    "walkthrough": [
      "true kart var demektir; 4 yetki seviyesidir.",
      "4 >= 3 doğru. Kart da var; yeşil true.",
      "Kırmızı bunun tersi false. Çıktı sırayla True ve False."
    ],
    "concept": "bool · karşılaştırma · && · !",
    "hint": "bool yesil = kart && seviye >= 3; ile sonucu doğrudan saklayabilirsin.",
    "theme": "rose",
    "independent": false,
    "goal": "Kart varsa ve seviye en az 3 ise yesil true olsun. kirmizi bunun tersi olsun. if/else kullanmadan bool ifadeleri yaz. İlk satıra yesil, ikinci satıra kirmizi değerini yaz. Console.WriteLine(bool), True veya False yazar.",
    "rules": [
      "Girdileri verilen sırayla, her biri ayrı satırda oku.",
      "Girdilerin belirtilen tür ve aralıkta olduğu kabul edilir; hatalı metin kontrolü istenmiyor.",
      "İstem mesajı ekleme. Yalnızca istenen sonuçları, belirtilen sırayla yaz.",
      "Temel değişken ve işlemleri kullan. Bu finalde if/else, döngü, dizi veya metot gerekmiyor."
    ],
    "words": [
      [
        "Console.ReadLine()",
        "Kullanıcının bir satırını metin olarak alır. Her çağrı sıradaki girdiyi okur."
      ],
      [
        "Convert.ToInt32(...)",
        "Tam sayı metnini int değerine çevirir. Burada girdiler geçerli veriliyor."
      ],
      [
        "Console.WriteLine(...)",
        "Sonucu konsola yazar ve yeni satıra geçer. Örnek konsol da yalnızca bu satır çalışınca değişir."
      ],
      [
        "Convert.ToBoolean, && ve !",
        "true/false metni bool olur. && iki koşulun da doğru olmasını ister. ! sonucu tersine çevirir."
      ]
    ],
    "themeName": "Gül pembesi"
  },
  {
    "id": "report",
    "title": "İlk büyük dosyayı kapat",
    "kind": "10 / BAĞIMSIZ SON RAPOR",
    "intro": "Kutulama ve yol giderini tek raporda birleştir. Bu kez örnek çözümü sen kuracaksın.",
    "input": [
      "Ada",
      "29",
      "6",
      "7",
      "12",
      "200"
    ],
    "output": [
      "Dosya: Ada",
      "Dolu kutu: 4",
      "Artan: 5",
      "Yol: 84",
      "Kalan: 116"
    ],
    "reference": null,
    "frames": [
      {
        "line": 0,
        "phase": "ready",
        "caption": "Girdiler sırayla okunacak. Henüz hesap yapılmadı, konsola bir şey yazılmadı.",
        "vars": {},
        "output": [],
        "status": "ready"
      },
      {
        "line": 0,
        "caption": "Dosya sahibi Ada. Rapor adı belirlendi.",
        "vars": {
          "ad": "Ada"
        },
        "output": [],
        "phase": "read",
        "status": "working"
      },
      {
        "line": 0,
        "caption": "29 delil var.",
        "vars": {
          "ad": "Ada",
          "delil": 29
        },
        "output": [],
        "phase": "read",
        "status": "working"
      },
      {
        "line": 0,
        "caption": "Her kutu 6 delil alıyor.",
        "vars": {
          "ad": "Ada",
          "delil": 29,
          "kapasite": 6
        },
        "output": [],
        "phase": "read",
        "status": "working"
      },
      {
        "line": 0,
        "caption": "Yol 7 kilometre.",
        "vars": {
          "ad": "Ada",
          "delil": 29,
          "kapasite": 6,
          "km": 7
        },
        "output": [],
        "phase": "read",
        "status": "working"
      },
      {
        "line": 0,
        "caption": "Kilometre ücreti 12 TL.",
        "vars": {
          "ad": "Ada",
          "delil": 29,
          "kapasite": 6,
          "km": 7,
          "birim": 12
        },
        "output": [],
        "phase": "read",
        "status": "working"
      },
      {
        "line": 0,
        "caption": "200 TL bütçe var.",
        "vars": {
          "ad": "Ada",
          "delil": 29,
          "kapasite": 6,
          "km": 7,
          "birim": 12,
          "butce": 200
        },
        "output": [],
        "phase": "read",
        "status": "working"
      },
      {
        "line": 0,
        "caption": "Dört kutu tamamen doluyor.",
        "vars": {
          "ad": "Ada",
          "delil": 29,
          "kapasite": 6,
          "km": 7,
          "birim": 12,
          "butce": 200,
          "kutu": 4
        },
        "output": [],
        "phase": "calculate",
        "status": "working"
      },
      {
        "line": 0,
        "caption": "Beş delil artıyor.",
        "vars": {
          "ad": "Ada",
          "delil": 29,
          "kapasite": 6,
          "km": 7,
          "birim": 12,
          "butce": 200,
          "kutu": 4,
          "artan": 5
        },
        "output": [],
        "phase": "calculate",
        "status": "working"
      },
      {
        "line": 0,
        "caption": "Yol için 84 TL ayrılıyor. Bu görevde açılış bedeli yok.",
        "vars": {
          "ad": "Ada",
          "delil": 29,
          "kapasite": 6,
          "km": 7,
          "birim": 12,
          "butce": 200,
          "kutu": 4,
          "artan": 5,
          "yol": 84
        },
        "output": [],
        "phase": "calculate",
        "status": "working"
      },
      {
        "line": 0,
        "caption": "Bütçede 116 TL kalıyor.",
        "vars": {
          "ad": "Ada",
          "delil": 29,
          "kapasite": 6,
          "km": 7,
          "birim": 12,
          "butce": 200,
          "kutu": 4,
          "artan": 5,
          "yol": 84,
          "kalan": 116
        },
        "output": [],
        "phase": "calculate",
        "status": "working"
      },
      {
        "line": 0,
        "caption": "Dosya adı rapora yazılır.",
        "vars": {
          "ad": "Ada",
          "delil": 29,
          "kapasite": 6,
          "km": 7,
          "birim": 12,
          "butce": 200,
          "kutu": 4,
          "artan": 5,
          "yol": 84,
          "kalan": 116
        },
        "output": [
          "Dosya: Ada"
        ],
        "phase": "print",
        "status": "print"
      },
      {
        "line": 0,
        "caption": "Dolu kutu sayısı eklenir.",
        "vars": {
          "ad": "Ada",
          "delil": 29,
          "kapasite": 6,
          "km": 7,
          "birim": 12,
          "butce": 200,
          "kutu": 4,
          "artan": 5,
          "yol": 84,
          "kalan": 116
        },
        "output": [
          "Dosya: Ada",
          "Dolu kutu: 4"
        ],
        "phase": "print",
        "status": "print"
      },
      {
        "line": 0,
        "caption": "Artan deliller eklenir.",
        "vars": {
          "ad": "Ada",
          "delil": 29,
          "kapasite": 6,
          "km": 7,
          "birim": 12,
          "butce": 200,
          "kutu": 4,
          "artan": 5,
          "yol": 84,
          "kalan": 116
        },
        "output": [
          "Dosya: Ada",
          "Dolu kutu: 4",
          "Artan: 5"
        ],
        "phase": "print",
        "status": "print"
      },
      {
        "line": 0,
        "caption": "Yol tutarı eklenir.",
        "vars": {
          "ad": "Ada",
          "delil": 29,
          "kapasite": 6,
          "km": 7,
          "birim": 12,
          "butce": 200,
          "kutu": 4,
          "artan": 5,
          "yol": 84,
          "kalan": 116
        },
        "output": [
          "Dosya: Ada",
          "Dolu kutu: 4",
          "Artan: 5",
          "Yol: 84"
        ],
        "phase": "print",
        "status": "print"
      },
      {
        "line": 0,
        "caption": "Kalan bütçe yazılır, rapor tamamlanır.",
        "vars": {
          "ad": "Ada",
          "delil": 29,
          "kapasite": 6,
          "km": 7,
          "birim": 12,
          "butce": 200,
          "kutu": 4,
          "artan": 5,
          "yol": 84,
          "kalan": 116
        },
        "output": [
          "Dosya: Ada",
          "Dolu kutu: 4",
          "Artan: 5",
          "Yol: 84",
          "Kalan: 116"
        ],
        "phase": "print",
        "status": "print"
      }
    ],
    "lineHelp": {},
    "understand": [
      "Sırayla ad, delil sayısı (0–1000), kutu kapasitesi (1–100), kilometre (0–100), kilometre ücreti (0–100), bütçe (0–20000). Ad string, diğer beş bilgi int. Bütçe yolu karşılar.",
      "Tam dolu kutuyu, artan delili, kilometre × birim ücret ile yol giderini ve bütçeden kalanı hesapla. Açılış bedeli yok.",
      "Beş satır yaz: Dosya: ad, Dolu kutu: X, Artan: Y, Yol: Z, Kalan: K. Başlıkları ve sırayı koru."
    ],
    "walkthrough": [
      "Ada, 29 delil ve kutu başına 6 yer girilir.",
      "29 / 6 sonucu 4 dolu kutu, kalan 5 delil.",
      "7 × 12 = 84 TL yol gideri. Açılış bedeli eklenmez.",
      "200 − 84 = 116 TL kalır. Beş rapor satırı sırayla yazılır."
    ],
    "concept": "Bağımsız görev · bilgileri birleştir",
    "hint": "",
    "theme": "gold",
    "independent": true,
    "goal": "Tam dolu kutuyu, artan delili, kilometre × birim ücret ile yol giderini ve bütçeden kalanı hesapla. Açılış bedeli yok. Beş satır yaz: Dosya: ad, Dolu kutu: X, Artan: Y, Yol: Z, Kalan: K. Başlıkları ve sırayı koru.",
    "rules": [
      "Girdileri verilen sırayla, her biri ayrı satırda oku.",
      "Girdilerin belirtilen tür ve aralıkta olduğu kabul edilir; hatalı metin kontrolü istenmiyor.",
      "İstem mesajı ekleme. Yalnızca istenen sonuçları, belirtilen sırayla yaz.",
      "Temel değişken ve işlemleri kullan. Bu finalde if/else, döngü, dizi veya metot gerekmiyor."
    ],
    "words": [
      [
        "Console.ReadLine()",
        "Kullanıcının bir satırını metin olarak alır. Her çağrı sıradaki girdiyi okur."
      ],
      [
        "Convert.ToInt32(...)",
        "Tam sayı metnini int değerine çevirir. Burada girdiler geçerli veriliyor."
      ],
      [
        "Console.WriteLine(...)",
        "Sonucu konsola yazar ve yeni satıra geçer. Örnek konsol da yalnızca bu satır çalışınca değişir."
      ]
    ],
    "themeName": "Altın"
  }
];
