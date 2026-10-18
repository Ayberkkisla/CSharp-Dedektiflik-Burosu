window.Unit3MethodTasks = [
  {
    "id": "message",
    "title": "Büronun ışığını yak",
    "kind": "ÜNİTE 3 / KOLAY METOT GÖREVİ",
    "intro": "İlk aracın hazır mesajını veren küçük bir metot olsun.",
    "input": [],
    "output": [
      "Dosya açıldı"
    ],
    "reference": "MesajYaz();\n\nstatic void MesajYaz()\n{\n    Console.WriteLine(\"Dosya açıldı\");\n}",
    "understand": [
      "Bu soruda kullanıcı hiçbir giriş yapmayacak. Console.ReadLine kullanma.",
      "Parametresiz bir void metot yaz. Metot Dosya açıldı mesajını yazsın. Ana koddan bu metodu bir kez çağır.",
      "Yalnızca Dosya açıldı satırı yazılacak."
    ],
    "walkthrough": [
      "Ana kod MesajYaz() çağrısına gelir.",
      "Çağrı, metodun içindeki WriteLine satırını çalıştırır.",
      "Dosya açıldı yazılır. void olduğu için sayı veya metin sonucu geri verilmez."
    ],
    "concept": "Parametresiz void · tanım ve çağrı",
    "hint": "Önce MesajYaz(); çağrısı, altta static void MesajYaz() tanımı. Yazdırmayı metodun içine koy.",
    "theme": "blue",
    "themeName": "Gece mavisi",
    "lineHelp": {
      "1": "Sağdaki metot çağrısı önce çalışır. Dönen sonuç soldaki değişkene atanır; sonraki satır bu sonucu kullanabilir.",
      "2": "Okumayı kolaylaştıran boş satır; çalışan bir komut değil.",
      "3": "Bu bir metot tanımı. Üstteki çağrı buraya yönlenir. Parantezdeki parametreler gelen değerleri tutar; baştaki tür döndürülecek değeri söyler. void değer döndürmez.",
      "4": "Metodun veya bu bloğun komutları burada başlar.",
      "5": "Parantezdeki değer konsola yazılır. Parantezde metot çağrısı varsa önce metot çalışır ve sonucu beklenir.",
      "6": "Blok sona erer. void metodun sonuna gelindiyse değer vermeden çağıran koda dönülür."
    },
    "independent": false,
    "rules": [
      "Girdi varsa belirtilen sırayla oku. Tam sayı girişleri geçerlidir.",
      "Metot adları ve parametre adları serbest; istenen dönüş türü ve parametre sayısını koru.",
      "Metotları örnekteki gibi doğrudan kodun altında tanımla. using veya class ekleme.",
      "Sadece istenen çıktıyı yaz. return ile Console.WriteLine aynı iş değildir.",
      "Bu kolay vakada recursion istenmiyor."
    ],
    "goal": "Parametresiz bir void metot yaz. Metot Dosya açıldı mesajını yazsın. Ana koddan bu metodu bir kez çağır. Yalnızca Dosya açıldı satırı yazılacak.",
    "words": [
      [
        "Parametre ile gönderilen değer",
        "Çağıran yerdeki değer, metodun parantezindeki parametreye aktarılır. İsimlerinin aynı olması gerekmez. int parametreye değer kopyalanır."
      ],
      [
        "return",
        "Bir sonucu çağıran koda geri verir ve metodu bitirir. Sonucu ekrana yazmak ayrı bir iştir."
      ],
      [
        "void",
        "Metot değer döndürmez. Kendi içinde Console.WriteLine çalıştırabilir. void çağrısını sonuç değişkenine atayamazsın."
      ],
      [
        "static ve metot tanımı",
        "Örnekler, üst düzey programın altında static yerel metot kullanır. Aynı işi yapan normal yerel metot da kabul edilir. Metot tanımı, çağrı gelmeden gövdesini çalıştırmaz."
      ]
    ],
    "frames": [
      {
        "line": 0,
        "caption": "Bu görevde kullanıcıdan giriş alınmaz. İlk çağrı satırı metodu çalıştıracak.",
        "vars": {},
        "output": [],
        "phase": "ready",
        "context": "main",
        "method": {
          "name": "MesajYaz",
          "type": "void",
          "params": []
        },
        "caller": [],
        "expression": "",
        "result": null,
        "callNumber": 0,
        "returnType": "void"
      },
      {
        "line": 1,
        "caption": "MesajYaz çağrısı başladı. Bu çağrı bir sonuç değeri vermeyecek.",
        "vars": {},
        "output": [],
        "phase": "call",
        "context": "main",
        "method": {
          "name": "MesajYaz",
          "type": "void",
          "params": []
        },
        "caller": [],
        "expression": "",
        "result": null,
        "callNumber": 1,
        "returnType": "void"
      },
      {
        "line": 3,
        "caption": "Parametre yok. Metodun içine girilir.",
        "vars": {},
        "output": [],
        "phase": "bind",
        "context": "method",
        "method": {
          "name": "MesajYaz",
          "type": "void",
          "params": []
        },
        "caller": [],
        "expression": "",
        "result": null,
        "callNumber": 1,
        "returnType": "void"
      },
      {
        "line": 5,
        "caption": "Metodun içindeki Console.WriteLine “Dosya açıldı” satırını doğrudan konsola ekler.",
        "vars": {},
        "output": [
          "Dosya açıldı"
        ],
        "phase": "print",
        "context": "method",
        "method": {
          "name": "MesajYaz",
          "type": "void",
          "params": []
        },
        "caller": [],
        "expression": "Console.WriteLine",
        "result": null,
        "callNumber": 1,
        "returnType": "void"
      },
      {
        "line": 1,
        "caption": "void metot bitti. Çağıran koda geri dönülür; geri verilen bir değer yok.",
        "vars": {},
        "output": [
          "Dosya açıldı"
        ],
        "phase": "finish",
        "context": "main",
        "method": {
          "name": "MesajYaz",
          "type": "void",
          "params": []
        },
        "caller": [],
        "expression": "",
        "result": null,
        "callNumber": 1,
        "returnType": "void"
      }
    ]
  },
  {
    "id": "welcome",
    "title": "Dedektifi karşıla",
    "kind": "ÜNİTE 3 / KOLAY METOT GÖREVİ",
    "intro": "Karşılama aracına bir ad gönder. Mesajı metot yazdırsın.",
    "input": [
      "Ada"
    ],
    "output": [
      "Dedektif: Ada"
    ],
    "reference": "string ad = Console.ReadLine();\nKarsila(ad);\n\nstatic void Karsila(string isim)\n{\n    Console.WriteLine(\"Dedektif: \" + isim);\n}",
    "understand": [
      "Tek satırda bir ad girecek. Ad boş olmayacak; içinde boşluk olabilir.",
      "Bir string parametre alan void metot yaz. Ana kodda okuduğun adı metoda gönder. Metot Dedektif: ve adı birleştirip yazsın.",
      "Örnekte Dedektif: Ada tek satır yazılır. Başlıktan sonra bir boşluk olsun."
    ],
    "walkthrough": [
      "Ada, ana koddaki ad değişkenine alınır.",
      "Karsila(ad) çağrısında Ada, isim parametresine geçer.",
      "Metodun WriteLine satırı Dedektif: Ada yazar. Ana kodda ikinci kez yazdırma."
    ],
    "concept": "string parametre · void içinde çıktı",
    "hint": "Gönderilen değişkenin adı ad, parametrenin adı isim olabilir. Değer aktarılır.",
    "theme": "blue",
    "themeName": "Gece mavisi",
    "lineHelp": {
      "1": "Sıradaki girdi okunur. Metin girişinde string, tam sayıda Convert.ToInt32 kullanılır. Bu değer henüz metoda gönderilmedi.",
      "2": "Sağdaki metot çağrısı önce çalışır. Dönen sonuç soldaki değişkene atanır; sonraki satır bu sonucu kullanabilir.",
      "3": "Okumayı kolaylaştıran boş satır; çalışan bir komut değil.",
      "4": "Bu bir metot tanımı. Üstteki çağrı buraya yönlenir. Parantezdeki parametreler gelen değerleri tutar; baştaki tür döndürülecek değeri söyler. void değer döndürmez.",
      "5": "Metodun veya bu bloğun komutları burada başlar.",
      "6": "Parantezdeki değer konsola yazılır. Parantezde metot çağrısı varsa önce metot çalışır ve sonucu beklenir.",
      "7": "Blok sona erer. void metodun sonuna gelindiyse değer vermeden çağıran koda dönülür."
    },
    "independent": false,
    "rules": [
      "Girdileri belirtilen sırayla oku. Tam sayı girişleri geçerlidir.",
      "Metot adları ve parametre adları serbest; istenen dönüş türü ve parametre sayısını koru.",
      "Metotları örnekteki gibi doğrudan kodun altında tanımla. using veya class ekleme.",
      "Sadece istenen çıktıyı yaz. return ile Console.WriteLine aynı iş değildir.",
      "Bu kolay vakada recursion istenmiyor."
    ],
    "goal": "Bir string parametre alan void metot yaz. Ana kodda okuduğun adı metoda gönder. Metot Dedektif: ve adı birleştirip yazsın. Örnekte Dedektif: Ada tek satır yazılır. Başlıktan sonra bir boşluk olsun.",
    "words": [
      [
        "Parametre ile gönderilen değer",
        "Çağıran yerdeki değer, metodun parantezindeki parametreye aktarılır. İsimlerinin aynı olması gerekmez. int parametreye değer kopyalanır."
      ],
      [
        "return",
        "Bir sonucu çağıran koda geri verir ve metodu bitirir. Sonucu ekrana yazmak ayrı bir iştir."
      ],
      [
        "void",
        "Metot değer döndürmez. Kendi içinde Console.WriteLine çalıştırabilir. void çağrısını sonuç değişkenine atayamazsın."
      ],
      [
        "static ve metot tanımı",
        "Örnekler, üst düzey programın altında static yerel metot kullanır. Aynı işi yapan normal yerel metot da kabul edilir. Metot tanımı, çağrı gelmeden gövdesini çalıştırmaz."
      ]
    ],
    "frames": [
      {
        "line": 0,
        "caption": "Önce girdiler alınacak. Metot, çağrı satırına gelince çalışacak.",
        "vars": {},
        "output": [],
        "phase": "ready",
        "context": "main",
        "method": {
          "name": "Karsila",
          "type": "void",
          "params": [
            {
              "name": "isim",
              "type": "string",
              "value": "—"
            }
          ]
        },
        "caller": [],
        "expression": "",
        "result": null,
        "callNumber": 0,
        "returnType": "void"
      },
      {
        "line": 1,
        "caption": "“Ada” metni okunur. ad çağıran kodda tutulur.",
        "vars": {
          "ad (çağıran)": "Ada"
        },
        "output": [],
        "phase": "read",
        "context": "main",
        "method": {
          "name": "Karsila",
          "type": "void",
          "params": [
            {
              "name": "isim",
              "type": "string",
              "value": "—"
            }
          ]
        },
        "caller": [
          {
            "name": "ad",
            "value": "Ada"
          }
        ],
        "expression": "",
        "result": null,
        "callNumber": 0,
        "returnType": "void"
      },
      {
        "line": 2,
        "caption": "Karsila çağrısı başladı. Bu çağrı bir sonuç değeri vermeyecek.",
        "vars": {
          "ad (çağıran)": "Ada"
        },
        "output": [],
        "phase": "call",
        "context": "main",
        "method": {
          "name": "Karsila",
          "type": "void",
          "params": [
            {
              "name": "isim",
              "type": "string",
              "value": "Ada"
            }
          ]
        },
        "caller": [
          {
            "name": "ad",
            "value": "Ada"
          }
        ],
        "expression": "",
        "result": null,
        "callNumber": 1,
        "returnType": "void"
      },
      {
        "line": 4,
        "caption": "isim = Ada. Değerler metodun kendi parametrelerine geçti.",
        "vars": {
          "ad (çağıran)": "Ada",
          "isim (parametre)": "Ada"
        },
        "output": [],
        "phase": "bind",
        "context": "method",
        "method": {
          "name": "Karsila",
          "type": "void",
          "params": [
            {
              "name": "isim",
              "type": "string",
              "value": "Ada"
            }
          ]
        },
        "caller": [
          {
            "name": "ad",
            "value": "Ada"
          }
        ],
        "expression": "",
        "result": null,
        "callNumber": 1,
        "returnType": "void"
      },
      {
        "line": 6,
        "caption": "Metodun içindeki Console.WriteLine “Dedektif: Ada” satırını doğrudan konsola ekler.",
        "vars": {
          "ad (çağıran)": "Ada",
          "isim (parametre)": "Ada"
        },
        "output": [
          "Dedektif: Ada"
        ],
        "phase": "print",
        "context": "method",
        "method": {
          "name": "Karsila",
          "type": "void",
          "params": [
            {
              "name": "isim",
              "type": "string",
              "value": "Ada"
            }
          ]
        },
        "caller": [
          {
            "name": "ad",
            "value": "Ada"
          }
        ],
        "expression": "Console.WriteLine",
        "result": null,
        "callNumber": 1,
        "returnType": "void"
      },
      {
        "line": 2,
        "caption": "void metot bitti. Çağıran koda geri dönülür; geri verilen bir değer yok.",
        "vars": {
          "ad (çağıran)": "Ada"
        },
        "output": [
          "Dedektif: Ada"
        ],
        "phase": "finish",
        "context": "main",
        "method": {
          "name": "Karsila",
          "type": "void",
          "params": [
            {
              "name": "isim",
              "type": "string",
              "value": "Ada"
            }
          ]
        },
        "caller": [
          {
            "name": "ad",
            "value": "Ada"
          }
        ],
        "expression": "",
        "result": null,
        "callNumber": 1,
        "returnType": "void"
      }
    ]
  },
  {
    "id": "double",
    "title": "Puanı ikiye katla",
    "kind": "ÜNİTE 3 / KOLAY METOT GÖREVİ",
    "intro": "Bir araç puanı hesaplayıp geri versin. Ekrana yazma işi çağıran kodda kalsın.",
    "input": [
      "7"
    ],
    "output": [
      "14"
    ],
    "reference": "int giris = Convert.ToInt32(Console.ReadLine());\nConsole.WriteLine(IkiKat(giris));\n\nstatic int IkiKat(int sayi)\n{\n    return sayi * 2;\n}",
    "understand": [
      "-50 ile 50 arasında bir tam sayı girecek.",
      "Bir int parametre alıp iki katını int olarak döndüren metot yaz. Okunan sayıyı bu metoda gönder. Metodun içinde WriteLine kullanma.",
      "Dönen sonucu ana kodda tek satır olarak yaz. Örnekte 7 için 14."
    ],
    "walkthrough": [
      "7, giris değişkenine alınır.",
      "IkiKat çağrısı 7’yi sayi parametresine aktarır.",
      "return 7 × 2 = 14 sonucunu geri verir; bu satır tek başına yazdırmaz.",
      "Bekleyen WriteLine 14’ü yazar."
    ],
    "concept": "int dönüş · return · çağrı sonucu",
    "hint": "Metot return sayi * 2; ile sonuç verir. Console.WriteLine metodun dışında olur.",
    "theme": "blue",
    "themeName": "Gece mavisi",
    "lineHelp": {
      "1": "Sıradaki girdi okunur. Metin girişinde string, tam sayıda Convert.ToInt32 kullanılır. Bu değer henüz metoda gönderilmedi.",
      "2": "Parantezdeki değer konsola yazılır. Parantezde metot çağrısı varsa önce metot çalışır ve sonucu beklenir.",
      "3": "Okumayı kolaylaştıran boş satır; çalışan bir komut değil.",
      "4": "Bu bir metot tanımı. Üstteki çağrı buraya yönlenir. Parantezdeki parametreler gelen değerleri tutar; baştaki tür döndürülecek değeri söyler. void değer döndürmez.",
      "5": "Metodun veya bu bloğun komutları burada başlar.",
      "6": "Önce return yanındaki ifade hesaplanır. Sonuç çağıran yere geri verilir ve metot biter. return tek başına konsola yazı yazmaz.",
      "7": "Blok sona erer. void metodun sonuna gelindiyse değer vermeden çağıran koda dönülür."
    },
    "independent": false,
    "rules": [
      "Girdileri belirtilen sırayla oku. Tam sayı girişleri geçerlidir.",
      "Metot adları ve parametre adları serbest; istenen dönüş türü ve parametre sayısını koru.",
      "Metotları örnekteki gibi doğrudan kodun altında tanımla. using veya class ekleme.",
      "Sadece istenen çıktıyı yaz. return ile Console.WriteLine aynı iş değildir.",
      "Bu kolay vakada recursion istenmiyor."
    ],
    "goal": "Bir int parametre alıp iki katını int olarak döndüren metot yaz. Okunan sayıyı bu metoda gönder. Metodun içinde WriteLine kullanma. Dönen sonucu ana kodda tek satır olarak yaz. Örnekte 7 için 14.",
    "words": [
      [
        "Parametre ile gönderilen değer",
        "Çağıran yerdeki değer, metodun parantezindeki parametreye aktarılır. İsimlerinin aynı olması gerekmez. int parametreye değer kopyalanır."
      ],
      [
        "return",
        "Bir sonucu çağıran koda geri verir ve metodu bitirir. Sonucu ekrana yazmak ayrı bir iştir."
      ],
      [
        "void",
        "Metot değer döndürmez. Kendi içinde Console.WriteLine çalıştırabilir. void çağrısını sonuç değişkenine atayamazsın."
      ],
      [
        "static ve metot tanımı",
        "Örnekler, üst düzey programın altında static yerel metot kullanır. Aynı işi yapan normal yerel metot da kabul edilir. Metot tanımı, çağrı gelmeden gövdesini çalıştırmaz."
      ]
    ],
    "frames": [
      {
        "line": 0,
        "caption": "Önce girdiler alınacak. Metot, çağrı satırına gelince çalışacak.",
        "vars": {},
        "output": [],
        "phase": "ready",
        "context": "main",
        "method": {
          "name": "IkiKat",
          "type": "int",
          "params": [
            {
              "name": "sayi",
              "type": "int",
              "value": "—"
            }
          ]
        },
        "caller": [],
        "expression": "",
        "result": null,
        "callNumber": 0,
        "returnType": "int"
      },
      {
        "line": 1,
        "caption": "Girdi 7 tam sayıya çevrilir. giris çağıran kodda tutulur.",
        "vars": {
          "giris (çağıran)": "7"
        },
        "output": [],
        "phase": "read",
        "context": "main",
        "method": {
          "name": "IkiKat",
          "type": "int",
          "params": [
            {
              "name": "sayi",
              "type": "int",
              "value": "—"
            }
          ]
        },
        "caller": [
          {
            "name": "giris",
            "value": "7"
          }
        ],
        "expression": "",
        "result": null,
        "callNumber": 0,
        "returnType": "int"
      },
      {
        "line": 2,
        "caption": "IkiKat çağrısı başladı. Çağıran satır, sonuç dönene kadar bekliyor.",
        "vars": {
          "giris (çağıran)": "7"
        },
        "output": [],
        "phase": "call",
        "context": "main",
        "method": {
          "name": "IkiKat",
          "type": "int",
          "params": [
            {
              "name": "sayi",
              "type": "int",
              "value": "7"
            }
          ]
        },
        "caller": [
          {
            "name": "giris",
            "value": "7"
          }
        ],
        "expression": "",
        "result": null,
        "callNumber": 1,
        "returnType": "int"
      },
      {
        "line": 4,
        "caption": "sayi = 7. Değerler metodun kendi parametrelerine geçti.",
        "vars": {
          "giris (çağıran)": "7",
          "sayi (parametre)": "7"
        },
        "output": [],
        "phase": "bind",
        "context": "method",
        "method": {
          "name": "IkiKat",
          "type": "int",
          "params": [
            {
              "name": "sayi",
              "type": "int",
              "value": "7"
            }
          ]
        },
        "caller": [
          {
            "name": "giris",
            "value": "7"
          }
        ],
        "expression": "",
        "result": null,
        "callNumber": 1,
        "returnType": "int"
      },
      {
        "line": 6,
        "caption": "7 × 2 hesaplanır: 14.",
        "vars": {
          "giris (çağıran)": "7",
          "sayi (parametre)": "7"
        },
        "output": [],
        "phase": "calculate",
        "context": "method",
        "method": {
          "name": "IkiKat",
          "type": "int",
          "params": [
            {
              "name": "sayi",
              "type": "int",
              "value": "7"
            }
          ]
        },
        "caller": [
          {
            "name": "giris",
            "value": "7"
          }
        ],
        "expression": "7 × 2 = 14",
        "result": "14",
        "callNumber": 1,
        "returnType": "int"
      },
      {
        "line": 6,
        "caption": "return 14 değerini çağıran satıra geri gönderir. Henüz konsola yeni satır eklenmez.",
        "vars": {
          "giris (çağıran)": "7",
          "sayi (parametre)": "7"
        },
        "output": [],
        "phase": "return",
        "context": "method",
        "method": {
          "name": "IkiKat",
          "type": "int",
          "params": [
            {
              "name": "sayi",
              "type": "int",
              "value": "7"
            }
          ]
        },
        "caller": [
          {
            "name": "giris",
            "value": "7"
          }
        ],
        "expression": "return 14",
        "result": "14",
        "callNumber": 1,
        "returnType": "int"
      },
      {
        "line": 2,
        "caption": "Çağıran koddaki Console.WriteLine şimdi 14 yazar.",
        "vars": {
          "giris (çağıran)": "7"
        },
        "output": [
          "14"
        ],
        "phase": "print",
        "context": "main",
        "method": {
          "name": "IkiKat",
          "type": "int",
          "params": [
            {
              "name": "sayi",
              "type": "int",
              "value": "7"
            }
          ]
        },
        "caller": [
          {
            "name": "giris",
            "value": "7"
          }
        ],
        "expression": "",
        "result": "14",
        "callNumber": 1,
        "returnType": "int"
      }
    ]
  },
  {
    "id": "sum",
    "title": "İki delilin puanını birleştir",
    "kind": "ÜNİTE 3 / KOLAY METOT GÖREVİ",
    "intro": "İki ayrı puanı bir araca gönder, dönen toplamı değişkende sakla.",
    "input": [
      "8",
      "5"
    ],
    "output": [
      "13"
    ],
    "reference": "int ilk = Convert.ToInt32(Console.ReadLine());\nint ikinci = Convert.ToInt32(Console.ReadLine());\nint sonuc = Topla(ilk, ikinci);\nConsole.WriteLine(sonuc);\n\nstatic int Topla(int a, int b)\n{\n    return a + b;\n}",
    "understand": [
      "Sırayla iki tam sayı girecek. Her biri -50 ile 50 arasında.",
      "İki int parametre alan ve toplamını int döndüren bir metot yaz. Dönen sonucu ana kodda bir değişkende tut.",
      "Yalnızca toplamı tek satırda yaz. Örnekte 8 + 5 için 13."
    ],
    "walkthrough": [
      "İlk giriş 8, ikinci giriş 5.",
      "Çağrıda ilk değer a’ya, ikinci değer b’ye geçer. İsimleri aynı olmak zorunda değil.",
      "Metot 13 döndürür; sonuc değişkeni 13 olur.",
      "Ana kod sonuc değerini yazar."
    ],
    "concept": "İki parametre · dönen sonucu saklama",
    "hint": "Parametre sırası önemlidir: Topla(ilk, ikinci) → a = ilk, b = ikinci.",
    "theme": "blue",
    "themeName": "Gece mavisi",
    "lineHelp": {
      "1": "Sıradaki girdi okunur. Metin girişinde string, tam sayıda Convert.ToInt32 kullanılır. Bu değer henüz metoda gönderilmedi.",
      "2": "Sıradaki girdi okunur. Metin girişinde string, tam sayıda Convert.ToInt32 kullanılır. Bu değer henüz metoda gönderilmedi.",
      "3": "Sağdaki metot çağrısı önce çalışır. Dönen sonuç soldaki değişkene atanır; sonraki satır bu sonucu kullanabilir.",
      "4": "Parantezdeki değer konsola yazılır. Parantezde metot çağrısı varsa önce metot çalışır ve sonucu beklenir.",
      "5": "Okumayı kolaylaştıran boş satır; çalışan bir komut değil.",
      "6": "Bu bir metot tanımı. Üstteki çağrı buraya yönlenir. Parantezdeki parametreler gelen değerleri tutar; baştaki tür döndürülecek değeri söyler. void değer döndürmez.",
      "7": "Metodun veya bu bloğun komutları burada başlar.",
      "8": "Önce return yanındaki ifade hesaplanır. Sonuç çağıran yere geri verilir ve metot biter. return tek başına konsola yazı yazmaz.",
      "9": "Blok sona erer. void metodun sonuna gelindiyse değer vermeden çağıran koda dönülür."
    },
    "independent": false,
    "rules": [
      "Girdileri belirtilen sırayla oku. Tam sayı girişleri geçerlidir.",
      "Metot adları ve parametre adları serbest; istenen dönüş türü ve parametre sayısını koru.",
      "Metotları örnekteki gibi doğrudan kodun altında tanımla. using veya class ekleme.",
      "Sadece istenen çıktıyı yaz. return ile Console.WriteLine aynı iş değildir.",
      "Bu kolay vakada recursion istenmiyor."
    ],
    "goal": "İki int parametre alan ve toplamını int döndüren bir metot yaz. Dönen sonucu ana kodda bir değişkende tut. Yalnızca toplamı tek satırda yaz. Örnekte 8 + 5 için 13.",
    "words": [
      [
        "Parametre ile gönderilen değer",
        "Çağıran yerdeki değer, metodun parantezindeki parametreye aktarılır. İsimlerinin aynı olması gerekmez. int parametreye değer kopyalanır."
      ],
      [
        "return",
        "Bir sonucu çağıran koda geri verir ve metodu bitirir. Sonucu ekrana yazmak ayrı bir iştir."
      ],
      [
        "void",
        "Metot değer döndürmez. Kendi içinde Console.WriteLine çalıştırabilir. void çağrısını sonuç değişkenine atayamazsın."
      ],
      [
        "static ve metot tanımı",
        "Örnekler, üst düzey programın altında static yerel metot kullanır. Aynı işi yapan normal yerel metot da kabul edilir. Metot tanımı, çağrı gelmeden gövdesini çalıştırmaz."
      ]
    ],
    "frames": [
      {
        "line": 0,
        "caption": "Önce girdiler alınacak. Metot, çağrı satırına gelince çalışacak.",
        "vars": {},
        "output": [],
        "phase": "ready",
        "context": "main",
        "method": {
          "name": "Topla",
          "type": "int",
          "params": [
            {
              "name": "a",
              "type": "int",
              "value": "—"
            },
            {
              "name": "b",
              "type": "int",
              "value": "—"
            }
          ]
        },
        "caller": [],
        "expression": "",
        "result": null,
        "callNumber": 0,
        "returnType": "int"
      },
      {
        "line": 1,
        "caption": "Girdi 8 tam sayıya çevrilir. ilk çağıran kodda tutulur.",
        "vars": {
          "ilk (çağıran)": "8"
        },
        "output": [],
        "phase": "read",
        "context": "main",
        "method": {
          "name": "Topla",
          "type": "int",
          "params": [
            {
              "name": "a",
              "type": "int",
              "value": "—"
            },
            {
              "name": "b",
              "type": "int",
              "value": "—"
            }
          ]
        },
        "caller": [
          {
            "name": "ilk",
            "value": "8"
          }
        ],
        "expression": "",
        "result": null,
        "callNumber": 0,
        "returnType": "int"
      },
      {
        "line": 2,
        "caption": "Girdi 5 tam sayıya çevrilir. ikinci çağıran kodda tutulur.",
        "vars": {
          "ilk (çağıran)": "8",
          "ikinci (çağıran)": "5"
        },
        "output": [],
        "phase": "read",
        "context": "main",
        "method": {
          "name": "Topla",
          "type": "int",
          "params": [
            {
              "name": "a",
              "type": "int",
              "value": "—"
            },
            {
              "name": "b",
              "type": "int",
              "value": "—"
            }
          ]
        },
        "caller": [
          {
            "name": "ilk",
            "value": "8"
          },
          {
            "name": "ikinci",
            "value": "5"
          }
        ],
        "expression": "",
        "result": null,
        "callNumber": 0,
        "returnType": "int"
      },
      {
        "line": 3,
        "caption": "Topla çağrısı başladı. Çağıran satır, sonuç dönene kadar bekliyor.",
        "vars": {
          "ilk (çağıran)": "8",
          "ikinci (çağıran)": "5"
        },
        "output": [],
        "phase": "call",
        "context": "main",
        "method": {
          "name": "Topla",
          "type": "int",
          "params": [
            {
              "name": "a",
              "type": "int",
              "value": "8"
            },
            {
              "name": "b",
              "type": "int",
              "value": "5"
            }
          ]
        },
        "caller": [
          {
            "name": "ilk",
            "value": "8"
          },
          {
            "name": "ikinci",
            "value": "5"
          }
        ],
        "expression": "",
        "result": null,
        "callNumber": 1,
        "returnType": "int"
      },
      {
        "line": 6,
        "caption": "a = 8, b = 5. Değerler metodun kendi parametrelerine geçti.",
        "vars": {
          "ilk (çağıran)": "8",
          "ikinci (çağıran)": "5",
          "a (parametre)": "8",
          "b (parametre)": "5"
        },
        "output": [],
        "phase": "bind",
        "context": "method",
        "method": {
          "name": "Topla",
          "type": "int",
          "params": [
            {
              "name": "a",
              "type": "int",
              "value": "8"
            },
            {
              "name": "b",
              "type": "int",
              "value": "5"
            }
          ]
        },
        "caller": [
          {
            "name": "ilk",
            "value": "8"
          },
          {
            "name": "ikinci",
            "value": "5"
          }
        ],
        "expression": "",
        "result": null,
        "callNumber": 1,
        "returnType": "int"
      },
      {
        "line": 8,
        "caption": "İki parametre toplanır: 8 + 5 = 13.",
        "vars": {
          "ilk (çağıran)": "8",
          "ikinci (çağıran)": "5",
          "a (parametre)": "8",
          "b (parametre)": "5"
        },
        "output": [],
        "phase": "calculate",
        "context": "method",
        "method": {
          "name": "Topla",
          "type": "int",
          "params": [
            {
              "name": "a",
              "type": "int",
              "value": "8"
            },
            {
              "name": "b",
              "type": "int",
              "value": "5"
            }
          ]
        },
        "caller": [
          {
            "name": "ilk",
            "value": "8"
          },
          {
            "name": "ikinci",
            "value": "5"
          }
        ],
        "expression": "8 + 5 = 13",
        "result": "13",
        "callNumber": 1,
        "returnType": "int"
      },
      {
        "line": 8,
        "caption": "return 13 değerini çağıran satıra geri gönderir. Henüz konsola yeni satır eklenmez.",
        "vars": {
          "ilk (çağıran)": "8",
          "ikinci (çağıran)": "5",
          "a (parametre)": "8",
          "b (parametre)": "5"
        },
        "output": [],
        "phase": "return",
        "context": "method",
        "method": {
          "name": "Topla",
          "type": "int",
          "params": [
            {
              "name": "a",
              "type": "int",
              "value": "8"
            },
            {
              "name": "b",
              "type": "int",
              "value": "5"
            }
          ]
        },
        "caller": [
          {
            "name": "ilk",
            "value": "8"
          },
          {
            "name": "ikinci",
            "value": "5"
          }
        ],
        "expression": "return 13",
        "result": "13",
        "callNumber": 1,
        "returnType": "int"
      },
      {
        "line": 3,
        "caption": "Dönen 13 değeri, çağıran koddaki sonuc değişkenine atanır.",
        "vars": {
          "ilk (çağıran)": "8",
          "ikinci (çağıran)": "5",
          "sonuc (çağıran)": "13"
        },
        "output": [],
        "phase": "receive",
        "context": "main",
        "method": {
          "name": "Topla",
          "type": "int",
          "params": [
            {
              "name": "a",
              "type": "int",
              "value": "8"
            },
            {
              "name": "b",
              "type": "int",
              "value": "5"
            }
          ]
        },
        "caller": [
          {
            "name": "ilk",
            "value": "8"
          },
          {
            "name": "ikinci",
            "value": "5"
          },
          {
            "name": "sonuc",
            "value": "13"
          }
        ],
        "expression": "",
        "result": "13",
        "callNumber": 1,
        "returnType": "int"
      },
      {
        "line": 4,
        "caption": "Çağıran koddaki Console.WriteLine şimdi 13 yazar.",
        "vars": {
          "ilk (çağıran)": "8",
          "ikinci (çağıran)": "5",
          "sonuc (çağıran)": "13"
        },
        "output": [
          "13"
        ],
        "phase": "print",
        "context": "main",
        "method": {
          "name": "Topla",
          "type": "int",
          "params": [
            {
              "name": "a",
              "type": "int",
              "value": "8"
            },
            {
              "name": "b",
              "type": "int",
              "value": "5"
            }
          ]
        },
        "caller": [
          {
            "name": "ilk",
            "value": "8"
          },
          {
            "name": "ikinci",
            "value": "5"
          },
          {
            "name": "sonuc",
            "value": "13"
          }
        ],
        "expression": "",
        "result": "13",
        "callNumber": 1,
        "returnType": "int"
      }
    ]
  },
  {
    "id": "even",
    "title": "Çift sayı kontrolü yap",
    "kind": "ÜNİTE 3 / KOLAY METOT GÖREVİ",
    "intro": "Araç yalnızca evet/hayır bilgisi dönsün. bool sonucu ana kod yazdırsın.",
    "input": [
      "8"
    ],
    "output": [
      "True"
    ],
    "reference": "int giris = Convert.ToInt32(Console.ReadLine());\nbool sonuc = CiftMi(giris);\nConsole.WriteLine(sonuc);\n\nstatic bool CiftMi(int sayi)\n{\n    return sayi % 2 == 0;\n}",
    "understand": [
      "-50 ile 50 arasında bir tam sayı girecek.",
      "Bir int parametre alıp sayı çiftse true, değilse false döndüren bool metot yaz. Yazdırmayı ana kodda yap.",
      "Yalnızca True veya False yaz. Console.WriteLine(bool) büyük harfle başlar. 0 da çifttir."
    ],
    "walkthrough": [
      "8, giris değişkenine alınır ve metoda gönderilir.",
      "8 % 2 sonucu 0. 0 == 0 doğru, yani true.",
      "Metot bool true döndürür.",
      "Ana kod True yazar."
    ],
    "concept": "bool dönüş · koşulun sonucunu döndürme",
    "hint": "return sayi % 2 == 0; bir bool sonuç üretir. Metot içinde True metni yazdırma.",
    "theme": "blue",
    "themeName": "Gece mavisi",
    "lineHelp": {
      "1": "Sıradaki girdi okunur. Metin girişinde string, tam sayıda Convert.ToInt32 kullanılır. Bu değer henüz metoda gönderilmedi.",
      "2": "Sağdaki metot çağrısı önce çalışır. Dönen sonuç soldaki değişkene atanır; sonraki satır bu sonucu kullanabilir.",
      "3": "Parantezdeki değer konsola yazılır. Parantezde metot çağrısı varsa önce metot çalışır ve sonucu beklenir.",
      "4": "Okumayı kolaylaştıran boş satır; çalışan bir komut değil.",
      "5": "Bu bir metot tanımı. Üstteki çağrı buraya yönlenir. Parantezdeki parametreler gelen değerleri tutar; baştaki tür döndürülecek değeri söyler. void değer döndürmez.",
      "6": "Metodun veya bu bloğun komutları burada başlar.",
      "7": "Önce return yanındaki ifade hesaplanır. Sonuç çağıran yere geri verilir ve metot biter. return tek başına konsola yazı yazmaz.",
      "8": "Blok sona erer. void metodun sonuna gelindiyse değer vermeden çağıran koda dönülür."
    },
    "independent": false,
    "rules": [
      "Girdileri belirtilen sırayla oku. Tam sayı girişleri geçerlidir.",
      "Metot adları ve parametre adları serbest; istenen dönüş türü ve parametre sayısını koru.",
      "Metotları örnekteki gibi doğrudan kodun altında tanımla. using veya class ekleme.",
      "Sadece istenen çıktıyı yaz. return ile Console.WriteLine aynı iş değildir.",
      "Bu kolay vakada recursion istenmiyor."
    ],
    "goal": "Bir int parametre alıp sayı çiftse true, değilse false döndüren bool metot yaz. Yazdırmayı ana kodda yap. Yalnızca True veya False yaz. Console.WriteLine(bool) büyük harfle başlar. 0 da çifttir.",
    "words": [
      [
        "Parametre ile gönderilen değer",
        "Çağıran yerdeki değer, metodun parantezindeki parametreye aktarılır. İsimlerinin aynı olması gerekmez. int parametreye değer kopyalanır."
      ],
      [
        "return",
        "Bir sonucu çağıran koda geri verir ve metodu bitirir. Sonucu ekrana yazmak ayrı bir iştir."
      ],
      [
        "void",
        "Metot değer döndürmez. Kendi içinde Console.WriteLine çalıştırabilir. void çağrısını sonuç değişkenine atayamazsın."
      ],
      [
        "static ve metot tanımı",
        "Örnekler, üst düzey programın altında static yerel metot kullanır. Aynı işi yapan normal yerel metot da kabul edilir. Metot tanımı, çağrı gelmeden gövdesini çalıştırmaz."
      ]
    ],
    "frames": [
      {
        "line": 0,
        "caption": "Önce girdiler alınacak. Metot, çağrı satırına gelince çalışacak.",
        "vars": {},
        "output": [],
        "phase": "ready",
        "context": "main",
        "method": {
          "name": "CiftMi",
          "type": "bool",
          "params": [
            {
              "name": "sayi",
              "type": "int",
              "value": "—"
            }
          ]
        },
        "caller": [],
        "expression": "",
        "result": null,
        "callNumber": 0,
        "returnType": "bool"
      },
      {
        "line": 1,
        "caption": "Girdi 8 tam sayıya çevrilir. giris çağıran kodda tutulur.",
        "vars": {
          "giris (çağıran)": "8"
        },
        "output": [],
        "phase": "read",
        "context": "main",
        "method": {
          "name": "CiftMi",
          "type": "bool",
          "params": [
            {
              "name": "sayi",
              "type": "int",
              "value": "—"
            }
          ]
        },
        "caller": [
          {
            "name": "giris",
            "value": "8"
          }
        ],
        "expression": "",
        "result": null,
        "callNumber": 0,
        "returnType": "bool"
      },
      {
        "line": 2,
        "caption": "CiftMi çağrısı başladı. Çağıran satır, sonuç dönene kadar bekliyor.",
        "vars": {
          "giris (çağıran)": "8"
        },
        "output": [],
        "phase": "call",
        "context": "main",
        "method": {
          "name": "CiftMi",
          "type": "bool",
          "params": [
            {
              "name": "sayi",
              "type": "int",
              "value": "8"
            }
          ]
        },
        "caller": [
          {
            "name": "giris",
            "value": "8"
          }
        ],
        "expression": "",
        "result": null,
        "callNumber": 1,
        "returnType": "bool"
      },
      {
        "line": 5,
        "caption": "sayi = 8. Değerler metodun kendi parametrelerine geçti.",
        "vars": {
          "giris (çağıran)": "8",
          "sayi (parametre)": "8"
        },
        "output": [],
        "phase": "bind",
        "context": "method",
        "method": {
          "name": "CiftMi",
          "type": "bool",
          "params": [
            {
              "name": "sayi",
              "type": "int",
              "value": "8"
            }
          ]
        },
        "caller": [
          {
            "name": "giris",
            "value": "8"
          }
        ],
        "expression": "",
        "result": null,
        "callNumber": 1,
        "returnType": "bool"
      },
      {
        "line": 7,
        "caption": "8 % 2 = 0. Eşitlik doğru: true.",
        "vars": {
          "giris (çağıran)": "8",
          "sayi (parametre)": "8"
        },
        "output": [],
        "phase": "calculate",
        "context": "method",
        "method": {
          "name": "CiftMi",
          "type": "bool",
          "params": [
            {
              "name": "sayi",
              "type": "int",
              "value": "8"
            }
          ]
        },
        "caller": [
          {
            "name": "giris",
            "value": "8"
          }
        ],
        "expression": "8 % 2 == 0 → True",
        "result": "True",
        "callNumber": 1,
        "returnType": "bool"
      },
      {
        "line": 7,
        "caption": "return True değerini çağıran satıra geri gönderir. Henüz konsola yeni satır eklenmez.",
        "vars": {
          "giris (çağıran)": "8",
          "sayi (parametre)": "8"
        },
        "output": [],
        "phase": "return",
        "context": "method",
        "method": {
          "name": "CiftMi",
          "type": "bool",
          "params": [
            {
              "name": "sayi",
              "type": "int",
              "value": "8"
            }
          ]
        },
        "caller": [
          {
            "name": "giris",
            "value": "8"
          }
        ],
        "expression": "return True",
        "result": "True",
        "callNumber": 1,
        "returnType": "bool"
      },
      {
        "line": 2,
        "caption": "Dönen True değeri, çağıran koddaki sonuc değişkenine atanır.",
        "vars": {
          "giris (çağıran)": "8",
          "sonuc (çağıran)": "True"
        },
        "output": [],
        "phase": "receive",
        "context": "main",
        "method": {
          "name": "CiftMi",
          "type": "bool",
          "params": [
            {
              "name": "sayi",
              "type": "int",
              "value": "8"
            }
          ]
        },
        "caller": [
          {
            "name": "giris",
            "value": "8"
          },
          {
            "name": "sonuc",
            "value": "True"
          }
        ],
        "expression": "",
        "result": "True",
        "callNumber": 1,
        "returnType": "bool"
      },
      {
        "line": 3,
        "caption": "Çağıran koddaki Console.WriteLine şimdi True yazar.",
        "vars": {
          "giris (çağıran)": "8",
          "sonuc (çağıran)": "True"
        },
        "output": [
          "True"
        ],
        "phase": "print",
        "context": "main",
        "method": {
          "name": "CiftMi",
          "type": "bool",
          "params": [
            {
              "name": "sayi",
              "type": "int",
              "value": "8"
            }
          ]
        },
        "caller": [
          {
            "name": "giris",
            "value": "8"
          },
          {
            "name": "sonuc",
            "value": "True"
          }
        ],
        "expression": "",
        "result": "True",
        "callNumber": 1,
        "returnType": "bool"
      }
    ]
  },
  {
    "id": "label",
    "title": "Delil etiketi üret",
    "kind": "ÜNİTE 3 / KOLAY METOT GÖREVİ",
    "intro": "Etiket hazırlayan araç metni geri versin; ekrana ne zaman yazılacağına ana kod karar versin.",
    "input": [
      "42"
    ],
    "output": [
      "DELIL-42"
    ],
    "reference": "int numara = Convert.ToInt32(Console.ReadLine());\nstring etiket = EtiketOlustur(numara);\nConsole.WriteLine(etiket);\n\nstatic string EtiketOlustur(int kod)\n{\n    return \"DELIL-\" + kod;\n}",
    "understand": [
      "0–999 arasında bir tam sayı delil numarası girecek.",
      "Bir int parametre alıp DELIL- ve numarayı birleştiren string metot yaz. Metot metni döndürsün; kendisi yazdırmasın.",
      "Ana kod dönen etiketi tek satırda yazsın. Örnekte DELIL-42."
    ],
    "walkthrough": [
      "42 numara değişkenine alınır.",
      "Çağrıda kod parametresi 42 olur.",
      "Metot DELIL-42 metnini return ile geri verir.",
      "etiket değişkenindeki metin ana kodda yazılır."
    ],
    "concept": "string dönüş · metin üretme",
    "hint": "Dönüş türü string olabilir; parametrenin türü yine int kalır.",
    "theme": "blue",
    "themeName": "Gece mavisi",
    "lineHelp": {
      "1": "Sıradaki girdi okunur. Metin girişinde string, tam sayıda Convert.ToInt32 kullanılır. Bu değer henüz metoda gönderilmedi.",
      "2": "Sağdaki metot çağrısı önce çalışır. Dönen sonuç soldaki değişkene atanır; sonraki satır bu sonucu kullanabilir.",
      "3": "Parantezdeki değer konsola yazılır. Parantezde metot çağrısı varsa önce metot çalışır ve sonucu beklenir.",
      "4": "Okumayı kolaylaştıran boş satır; çalışan bir komut değil.",
      "5": "Bu bir metot tanımı. Üstteki çağrı buraya yönlenir. Parantezdeki parametreler gelen değerleri tutar; baştaki tür döndürülecek değeri söyler. void değer döndürmez.",
      "6": "Metodun veya bu bloğun komutları burada başlar.",
      "7": "Önce return yanındaki ifade hesaplanır. Sonuç çağıran yere geri verilir ve metot biter. return tek başına konsola yazı yazmaz.",
      "8": "Blok sona erer. void metodun sonuna gelindiyse değer vermeden çağıran koda dönülür."
    },
    "independent": false,
    "rules": [
      "Girdileri belirtilen sırayla oku. Tam sayı girişleri geçerlidir.",
      "Metot adları ve parametre adları serbest; istenen dönüş türü ve parametre sayısını koru.",
      "Metotları örnekteki gibi doğrudan kodun altında tanımla. using veya class ekleme.",
      "Sadece istenen çıktıyı yaz. return ile Console.WriteLine aynı iş değildir.",
      "Bu kolay vakada recursion istenmiyor."
    ],
    "goal": "Bir int parametre alıp DELIL- ve numarayı birleştiren string metot yaz. Metot metni döndürsün; kendisi yazdırmasın. Ana kod dönen etiketi tek satırda yazsın. Örnekte DELIL-42.",
    "words": [
      [
        "Parametre ile gönderilen değer",
        "Çağıran yerdeki değer, metodun parantezindeki parametreye aktarılır. İsimlerinin aynı olması gerekmez. int parametreye değer kopyalanır."
      ],
      [
        "return",
        "Bir sonucu çağıran koda geri verir ve metodu bitirir. Sonucu ekrana yazmak ayrı bir iştir."
      ],
      [
        "void",
        "Metot değer döndürmez. Kendi içinde Console.WriteLine çalıştırabilir. void çağrısını sonuç değişkenine atayamazsın."
      ],
      [
        "static ve metot tanımı",
        "Örnekler, üst düzey programın altında static yerel metot kullanır. Aynı işi yapan normal yerel metot da kabul edilir. Metot tanımı, çağrı gelmeden gövdesini çalıştırmaz."
      ]
    ],
    "frames": [
      {
        "line": 0,
        "caption": "Önce girdiler alınacak. Metot, çağrı satırına gelince çalışacak.",
        "vars": {},
        "output": [],
        "phase": "ready",
        "context": "main",
        "method": {
          "name": "EtiketOlustur",
          "type": "string",
          "params": [
            {
              "name": "kod",
              "type": "int",
              "value": "—"
            }
          ]
        },
        "caller": [],
        "expression": "",
        "result": null,
        "callNumber": 0,
        "returnType": "string"
      },
      {
        "line": 1,
        "caption": "Girdi 42 tam sayıya çevrilir. numara çağıran kodda tutulur.",
        "vars": {
          "numara (çağıran)": "42"
        },
        "output": [],
        "phase": "read",
        "context": "main",
        "method": {
          "name": "EtiketOlustur",
          "type": "string",
          "params": [
            {
              "name": "kod",
              "type": "int",
              "value": "—"
            }
          ]
        },
        "caller": [
          {
            "name": "numara",
            "value": "42"
          }
        ],
        "expression": "",
        "result": null,
        "callNumber": 0,
        "returnType": "string"
      },
      {
        "line": 2,
        "caption": "EtiketOlustur çağrısı başladı. Çağıran satır, sonuç dönene kadar bekliyor.",
        "vars": {
          "numara (çağıran)": "42"
        },
        "output": [],
        "phase": "call",
        "context": "main",
        "method": {
          "name": "EtiketOlustur",
          "type": "string",
          "params": [
            {
              "name": "kod",
              "type": "int",
              "value": "42"
            }
          ]
        },
        "caller": [
          {
            "name": "numara",
            "value": "42"
          }
        ],
        "expression": "",
        "result": null,
        "callNumber": 1,
        "returnType": "string"
      },
      {
        "line": 5,
        "caption": "kod = 42. Değerler metodun kendi parametrelerine geçti.",
        "vars": {
          "numara (çağıran)": "42",
          "kod (parametre)": "42"
        },
        "output": [],
        "phase": "bind",
        "context": "method",
        "method": {
          "name": "EtiketOlustur",
          "type": "string",
          "params": [
            {
              "name": "kod",
              "type": "int",
              "value": "42"
            }
          ]
        },
        "caller": [
          {
            "name": "numara",
            "value": "42"
          }
        ],
        "expression": "",
        "result": null,
        "callNumber": 1,
        "returnType": "string"
      },
      {
        "line": 7,
        "caption": "Metin ile sayı birleştirilir.",
        "vars": {
          "numara (çağıran)": "42",
          "kod (parametre)": "42"
        },
        "output": [],
        "phase": "calculate",
        "context": "method",
        "method": {
          "name": "EtiketOlustur",
          "type": "string",
          "params": [
            {
              "name": "kod",
              "type": "int",
              "value": "42"
            }
          ]
        },
        "caller": [
          {
            "name": "numara",
            "value": "42"
          }
        ],
        "expression": "\"DELIL-\" + 42",
        "result": "DELIL-42",
        "callNumber": 1,
        "returnType": "string"
      },
      {
        "line": 7,
        "caption": "return DELIL-42 değerini çağıran satıra geri gönderir. Henüz konsola yeni satır eklenmez.",
        "vars": {
          "numara (çağıran)": "42",
          "kod (parametre)": "42"
        },
        "output": [],
        "phase": "return",
        "context": "method",
        "method": {
          "name": "EtiketOlustur",
          "type": "string",
          "params": [
            {
              "name": "kod",
              "type": "int",
              "value": "42"
            }
          ]
        },
        "caller": [
          {
            "name": "numara",
            "value": "42"
          }
        ],
        "expression": "return DELIL-42",
        "result": "DELIL-42",
        "callNumber": 1,
        "returnType": "string"
      },
      {
        "line": 2,
        "caption": "Dönen DELIL-42 değeri, çağıran koddaki etiket değişkenine atanır.",
        "vars": {
          "numara (çağıran)": "42",
          "etiket (çağıran)": "DELIL-42"
        },
        "output": [],
        "phase": "receive",
        "context": "main",
        "method": {
          "name": "EtiketOlustur",
          "type": "string",
          "params": [
            {
              "name": "kod",
              "type": "int",
              "value": "42"
            }
          ]
        },
        "caller": [
          {
            "name": "numara",
            "value": "42"
          },
          {
            "name": "etiket",
            "value": "DELIL-42"
          }
        ],
        "expression": "",
        "result": "DELIL-42",
        "callNumber": 1,
        "returnType": "string"
      },
      {
        "line": 3,
        "caption": "Çağıran koddaki Console.WriteLine şimdi DELIL-42 yazar.",
        "vars": {
          "numara (çağıran)": "42",
          "etiket (çağıran)": "DELIL-42"
        },
        "output": [
          "DELIL-42"
        ],
        "phase": "print",
        "context": "main",
        "method": {
          "name": "EtiketOlustur",
          "type": "string",
          "params": [
            {
              "name": "kod",
              "type": "int",
              "value": "42"
            }
          ]
        },
        "caller": [
          {
            "name": "numara",
            "value": "42"
          },
          {
            "name": "etiket",
            "value": "DELIL-42"
          }
        ],
        "expression": "",
        "result": "DELIL-42",
        "callNumber": 1,
        "returnType": "string"
      }
    ]
  },
  {
    "id": "max",
    "title": "Büyük puanı geri ver",
    "kind": "ÜNİTE 3 / KOLAY METOT GÖREVİ",
    "intro": "Araç iki puanı karşılaştırsın. Hangi yolu izlerse izlesin bir sonuç dönsün.",
    "input": [
      "4",
      "9"
    ],
    "output": [
      "9"
    ],
    "reference": "int ilk = Convert.ToInt32(Console.ReadLine());\nint ikinci = Convert.ToInt32(Console.ReadLine());\nConsole.WriteLine(BuyukOlan(ilk, ikinci));\n\nstatic int BuyukOlan(int a, int b)\n{\n    if (a > b)\n        return a;\n    return b;\n}",
    "understand": [
      "Sırayla -50 ile 50 arasında iki tam sayı girecek.",
      "İki int parametre alan ve büyük değeri int döndüren metot yaz. Eşitlerse bu ortak değeri döndür.",
      "Ana kod yalnızca dönen büyük değeri tek satırda yazsın."
    ],
    "walkthrough": [
      "4 ve 9 metoda gönderilir; a = 4, b = 9.",
      "4 > 9 yanlış, bu yüzden return a çalışmaz.",
      "return b sonucu 9 döndürür.",
      "Ana kod 9 yazar."
    ],
    "concept": "Metot içinde if · her yolda return",
    "hint": "if doğruysa ilk değeri döndür. Değilse aşağıdaki return ikinci değeri döndürebilir.",
    "theme": "blue",
    "themeName": "Gece mavisi",
    "lineHelp": {
      "1": "Sıradaki girdi okunur. Metin girişinde string, tam sayıda Convert.ToInt32 kullanılır. Bu değer henüz metoda gönderilmedi.",
      "2": "Sıradaki girdi okunur. Metin girişinde string, tam sayıda Convert.ToInt32 kullanılır. Bu değer henüz metoda gönderilmedi.",
      "3": "Parantezdeki değer konsola yazılır. Parantezde metot çağrısı varsa önce metot çalışır ve sonucu beklenir.",
      "4": "Okumayı kolaylaştıran boş satır; çalışan bir komut değil.",
      "5": "Bu bir metot tanımı. Üstteki çağrı buraya yönlenir. Parantezdeki parametreler gelen değerleri tutar; baştaki tür döndürülecek değeri söyler. void değer döndürmez.",
      "6": "Metodun veya bu bloğun komutları burada başlar.",
      "7": "Koşul doğruysa sonraki komut çalışır. Yanlışsa o komut atlanır; metot aşağıdan devam eder.",
      "8": "Önce return yanındaki ifade hesaplanır. Sonuç çağıran yere geri verilir ve metot biter. return tek başına konsola yazı yazmaz.",
      "9": "Önce return yanındaki ifade hesaplanır. Sonuç çağıran yere geri verilir ve metot biter. return tek başına konsola yazı yazmaz.",
      "10": "Blok sona erer. void metodun sonuna gelindiyse değer vermeden çağıran koda dönülür."
    },
    "independent": false,
    "rules": [
      "Girdileri belirtilen sırayla oku. Tam sayı girişleri geçerlidir.",
      "Metot adları ve parametre adları serbest; istenen dönüş türü ve parametre sayısını koru.",
      "Metotları örnekteki gibi doğrudan kodun altında tanımla. using veya class ekleme.",
      "Sadece istenen çıktıyı yaz. return ile Console.WriteLine aynı iş değildir.",
      "Bu kolay vakada recursion istenmiyor."
    ],
    "goal": "İki int parametre alan ve büyük değeri int döndüren metot yaz. Eşitlerse bu ortak değeri döndür. Ana kod yalnızca dönen büyük değeri tek satırda yazsın.",
    "words": [
      [
        "Parametre ile gönderilen değer",
        "Çağıran yerdeki değer, metodun parantezindeki parametreye aktarılır. İsimlerinin aynı olması gerekmez. int parametreye değer kopyalanır."
      ],
      [
        "return",
        "Bir sonucu çağıran koda geri verir ve metodu bitirir. Sonucu ekrana yazmak ayrı bir iştir."
      ],
      [
        "void",
        "Metot değer döndürmez. Kendi içinde Console.WriteLine çalıştırabilir. void çağrısını sonuç değişkenine atayamazsın."
      ],
      [
        "static ve metot tanımı",
        "Örnekler, üst düzey programın altında static yerel metot kullanır. Aynı işi yapan normal yerel metot da kabul edilir. Metot tanımı, çağrı gelmeden gövdesini çalıştırmaz."
      ]
    ],
    "frames": [
      {
        "line": 0,
        "caption": "Önce girdiler alınacak. Metot, çağrı satırına gelince çalışacak.",
        "vars": {},
        "output": [],
        "phase": "ready",
        "context": "main",
        "method": {
          "name": "BuyukOlan",
          "type": "int",
          "params": [
            {
              "name": "a",
              "type": "int",
              "value": "—"
            },
            {
              "name": "b",
              "type": "int",
              "value": "—"
            }
          ]
        },
        "caller": [],
        "expression": "",
        "result": null,
        "callNumber": 0,
        "returnType": "int"
      },
      {
        "line": 1,
        "caption": "Girdi 4 tam sayıya çevrilir. ilk çağıran kodda tutulur.",
        "vars": {
          "ilk (çağıran)": "4"
        },
        "output": [],
        "phase": "read",
        "context": "main",
        "method": {
          "name": "BuyukOlan",
          "type": "int",
          "params": [
            {
              "name": "a",
              "type": "int",
              "value": "—"
            },
            {
              "name": "b",
              "type": "int",
              "value": "—"
            }
          ]
        },
        "caller": [
          {
            "name": "ilk",
            "value": "4"
          }
        ],
        "expression": "",
        "result": null,
        "callNumber": 0,
        "returnType": "int"
      },
      {
        "line": 2,
        "caption": "Girdi 9 tam sayıya çevrilir. ikinci çağıran kodda tutulur.",
        "vars": {
          "ilk (çağıran)": "4",
          "ikinci (çağıran)": "9"
        },
        "output": [],
        "phase": "read",
        "context": "main",
        "method": {
          "name": "BuyukOlan",
          "type": "int",
          "params": [
            {
              "name": "a",
              "type": "int",
              "value": "—"
            },
            {
              "name": "b",
              "type": "int",
              "value": "—"
            }
          ]
        },
        "caller": [
          {
            "name": "ilk",
            "value": "4"
          },
          {
            "name": "ikinci",
            "value": "9"
          }
        ],
        "expression": "",
        "result": null,
        "callNumber": 0,
        "returnType": "int"
      },
      {
        "line": 3,
        "caption": "BuyukOlan çağrısı başladı. Çağıran satır, sonuç dönene kadar bekliyor.",
        "vars": {
          "ilk (çağıran)": "4",
          "ikinci (çağıran)": "9"
        },
        "output": [],
        "phase": "call",
        "context": "main",
        "method": {
          "name": "BuyukOlan",
          "type": "int",
          "params": [
            {
              "name": "a",
              "type": "int",
              "value": "4"
            },
            {
              "name": "b",
              "type": "int",
              "value": "9"
            }
          ]
        },
        "caller": [
          {
            "name": "ilk",
            "value": "4"
          },
          {
            "name": "ikinci",
            "value": "9"
          }
        ],
        "expression": "",
        "result": null,
        "callNumber": 1,
        "returnType": "int"
      },
      {
        "line": 5,
        "caption": "a = 4, b = 9. Değerler metodun kendi parametrelerine geçti.",
        "vars": {
          "ilk (çağıran)": "4",
          "ikinci (çağıran)": "9",
          "a (parametre)": "4",
          "b (parametre)": "9"
        },
        "output": [],
        "phase": "bind",
        "context": "method",
        "method": {
          "name": "BuyukOlan",
          "type": "int",
          "params": [
            {
              "name": "a",
              "type": "int",
              "value": "4"
            },
            {
              "name": "b",
              "type": "int",
              "value": "9"
            }
          ]
        },
        "caller": [
          {
            "name": "ilk",
            "value": "4"
          },
          {
            "name": "ikinci",
            "value": "9"
          }
        ],
        "expression": "",
        "result": null,
        "callNumber": 1,
        "returnType": "int"
      },
      {
        "line": 7,
        "caption": "4 > 9 yanlış. return a atlanır.",
        "vars": {
          "ilk (çağıran)": "4",
          "ikinci (çağıran)": "9",
          "a (parametre)": "4",
          "b (parametre)": "9"
        },
        "output": [],
        "phase": "condition",
        "context": "method",
        "method": {
          "name": "BuyukOlan",
          "type": "int",
          "params": [
            {
              "name": "a",
              "type": "int",
              "value": "4"
            },
            {
              "name": "b",
              "type": "int",
              "value": "9"
            }
          ]
        },
        "caller": [
          {
            "name": "ilk",
            "value": "4"
          },
          {
            "name": "ikinci",
            "value": "9"
          }
        ],
        "expression": "4 > 9 → False",
        "result": null,
        "callNumber": 1,
        "returnType": "int"
      },
      {
        "line": 9,
        "caption": "Alt satıra geçilir: b değeri 9.",
        "vars": {
          "ilk (çağıran)": "4",
          "ikinci (çağıran)": "9",
          "a (parametre)": "4",
          "b (parametre)": "9"
        },
        "output": [],
        "phase": "calculate",
        "context": "method",
        "method": {
          "name": "BuyukOlan",
          "type": "int",
          "params": [
            {
              "name": "a",
              "type": "int",
              "value": "4"
            },
            {
              "name": "b",
              "type": "int",
              "value": "9"
            }
          ]
        },
        "caller": [
          {
            "name": "ilk",
            "value": "4"
          },
          {
            "name": "ikinci",
            "value": "9"
          }
        ],
        "expression": "b = 9",
        "result": "9",
        "callNumber": 1,
        "returnType": "int"
      },
      {
        "line": 9,
        "caption": "return 9 değerini çağıran satıra geri gönderir. Henüz konsola yeni satır eklenmez.",
        "vars": {
          "ilk (çağıran)": "4",
          "ikinci (çağıran)": "9",
          "a (parametre)": "4",
          "b (parametre)": "9"
        },
        "output": [],
        "phase": "return",
        "context": "method",
        "method": {
          "name": "BuyukOlan",
          "type": "int",
          "params": [
            {
              "name": "a",
              "type": "int",
              "value": "4"
            },
            {
              "name": "b",
              "type": "int",
              "value": "9"
            }
          ]
        },
        "caller": [
          {
            "name": "ilk",
            "value": "4"
          },
          {
            "name": "ikinci",
            "value": "9"
          }
        ],
        "expression": "return 9",
        "result": "9",
        "callNumber": 1,
        "returnType": "int"
      },
      {
        "line": 3,
        "caption": "Çağıran koddaki Console.WriteLine şimdi 9 yazar.",
        "vars": {
          "ilk (çağıran)": "4",
          "ikinci (çağıran)": "9"
        },
        "output": [
          "9"
        ],
        "phase": "print",
        "context": "main",
        "method": {
          "name": "BuyukOlan",
          "type": "int",
          "params": [
            {
              "name": "a",
              "type": "int",
              "value": "4"
            },
            {
              "name": "b",
              "type": "int",
              "value": "9"
            }
          ]
        },
        "caller": [
          {
            "name": "ilk",
            "value": "4"
          },
          {
            "name": "ikinci",
            "value": "9"
          }
        ],
        "expression": "",
        "result": "9",
        "callNumber": 1,
        "returnType": "int"
      }
    ]
  },
  {
    "id": "repeat",
    "title": "Mesajı araçla tekrar yaz",
    "kind": "ÜNİTE 3 / KOLAY METOT GÖREVİ",
    "intro": "Kaç kez yazılacağını da metoda gönder. Tekrar işi metodun içinde yapılsın.",
    "input": [
      "İz bulundu",
      "3"
    ],
    "output": [
      "İz bulundu",
      "İz bulundu",
      "İz bulundu"
    ],
    "reference": "string mesaj = Console.ReadLine();\nint adet = Convert.ToInt32(Console.ReadLine());\nTekrarYaz(mesaj, adet);\n\nstatic void TekrarYaz(string metin, int kac)\n{\n    for (int i = 0; i < kac; i++)\n    {\n        Console.WriteLine(metin);\n    }\n}",
    "understand": [
      "Önce bir mesaj, sonra 0–4 arasında tekrar adedi girecek. Mesaj boş olmayacak; boşluk içerebilir.",
      "Bir string ve bir int parametre alan void metot yaz. Metot mesajı istenen adet kadar yazsın. Tekrar döngüsünü metot içinde kur.",
      "Mesaj her tekrarda ayrı satıra yazılır. Adet 0 ise hiç çıktı olmaz."
    ],
    "walkthrough": [
      "İz bulundu metni ve 3 adedi okunur.",
      "Metotta metin = İz bulundu, kac = 3 olur.",
      "Sayaç 0, 1 ve 2 iken WriteLine çalışır.",
      "Sayaç 3 olunca döngü biter. void bir sonuç değeri döndürmez."
    ],
    "concept": "İki farklı parametre türü · void içinde döngü",
    "hint": "Döngüyü metodun içine koy. Ana kod yalnızca mesajı ve adedi okuyup metodu çağırır.",
    "theme": "blue",
    "themeName": "Gece mavisi",
    "lineHelp": {
      "1": "Sıradaki girdi okunur. Metin girişinde string, tam sayıda Convert.ToInt32 kullanılır. Bu değer henüz metoda gönderilmedi.",
      "2": "Sıradaki girdi okunur. Metin girişinde string, tam sayıda Convert.ToInt32 kullanılır. Bu değer henüz metoda gönderilmedi.",
      "3": "Sağdaki metot çağrısı önce çalışır. Dönen sonuç soldaki değişkene atanır; sonraki satır bu sonucu kullanabilir.",
      "4": "Okumayı kolaylaştıran boş satır; çalışan bir komut değil.",
      "5": "Bu bir metot tanımı. Üstteki çağrı buraya yönlenir. Parantezdeki parametreler gelen değerleri tutar; baştaki tür döndürülecek değeri söyler. void değer döndürmez.",
      "6": "Metodun veya bu bloğun komutları burada başlar.",
      "7": "Sayaç başlatılır ve koşul her turda kontrol edilir. Her turun sonunda sayaç artırılır.",
      "8": "Metodun veya bu bloğun komutları burada başlar.",
      "9": "Parantezdeki değer konsola yazılır. Parantezde metot çağrısı varsa önce metot çalışır ve sonucu beklenir.",
      "10": "Blok sona erer. void metodun sonuna gelindiyse değer vermeden çağıran koda dönülür.",
      "11": "Blok sona erer. void metodun sonuna gelindiyse değer vermeden çağıran koda dönülür."
    },
    "independent": false,
    "rules": [
      "Girdileri belirtilen sırayla oku. Tam sayı girişleri geçerlidir.",
      "Metot adları ve parametre adları serbest; istenen dönüş türü ve parametre sayısını koru.",
      "Metotları örnekteki gibi doğrudan kodun altında tanımla. using veya class ekleme.",
      "Sadece istenen çıktıyı yaz. return ile Console.WriteLine aynı iş değildir.",
      "Bu kolay vakada recursion istenmiyor."
    ],
    "goal": "Bir string ve bir int parametre alan void metot yaz. Metot mesajı istenen adet kadar yazsın. Tekrar döngüsünü metot içinde kur. Mesaj her tekrarda ayrı satıra yazılır. Adet 0 ise hiç çıktı olmaz.",
    "words": [
      [
        "Parametre ile gönderilen değer",
        "Çağıran yerdeki değer, metodun parantezindeki parametreye aktarılır. İsimlerinin aynı olması gerekmez. int parametreye değer kopyalanır."
      ],
      [
        "return",
        "Bir sonucu çağıran koda geri verir ve metodu bitirir. Sonucu ekrana yazmak ayrı bir iştir."
      ],
      [
        "void",
        "Metot değer döndürmez. Kendi içinde Console.WriteLine çalıştırabilir. void çağrısını sonuç değişkenine atayamazsın."
      ],
      [
        "static ve metot tanımı",
        "Örnekler, üst düzey programın altında static yerel metot kullanır. Aynı işi yapan normal yerel metot da kabul edilir. Metot tanımı, çağrı gelmeden gövdesini çalıştırmaz."
      ]
    ],
    "frames": [
      {
        "line": 0,
        "caption": "Önce girdiler alınacak. Metot, çağrı satırına gelince çalışacak.",
        "vars": {},
        "output": [],
        "phase": "ready",
        "context": "main",
        "method": {
          "name": "TekrarYaz",
          "type": "void",
          "params": [
            {
              "name": "metin",
              "type": "string",
              "value": "—"
            },
            {
              "name": "kac",
              "type": "int",
              "value": "—"
            }
          ]
        },
        "caller": [],
        "expression": "",
        "result": null,
        "callNumber": 0,
        "returnType": "void"
      },
      {
        "line": 1,
        "caption": "“İz bulundu” metni okunur. mesaj çağıran kodda tutulur.",
        "vars": {
          "mesaj (çağıran)": "İz bulundu"
        },
        "output": [],
        "phase": "read",
        "context": "main",
        "method": {
          "name": "TekrarYaz",
          "type": "void",
          "params": [
            {
              "name": "metin",
              "type": "string",
              "value": "—"
            },
            {
              "name": "kac",
              "type": "int",
              "value": "—"
            }
          ]
        },
        "caller": [
          {
            "name": "mesaj",
            "value": "İz bulundu"
          }
        ],
        "expression": "",
        "result": null,
        "callNumber": 0,
        "returnType": "void"
      },
      {
        "line": 2,
        "caption": "Girdi 3 tam sayıya çevrilir. adet çağıran kodda tutulur.",
        "vars": {
          "mesaj (çağıran)": "İz bulundu",
          "adet (çağıran)": "3"
        },
        "output": [],
        "phase": "read",
        "context": "main",
        "method": {
          "name": "TekrarYaz",
          "type": "void",
          "params": [
            {
              "name": "metin",
              "type": "string",
              "value": "—"
            },
            {
              "name": "kac",
              "type": "int",
              "value": "—"
            }
          ]
        },
        "caller": [
          {
            "name": "mesaj",
            "value": "İz bulundu"
          },
          {
            "name": "adet",
            "value": "3"
          }
        ],
        "expression": "",
        "result": null,
        "callNumber": 0,
        "returnType": "void"
      },
      {
        "line": 3,
        "caption": "TekrarYaz çağrısı başladı. Bu çağrı bir sonuç değeri vermeyecek.",
        "vars": {
          "mesaj (çağıran)": "İz bulundu",
          "adet (çağıran)": "3"
        },
        "output": [],
        "phase": "call",
        "context": "main",
        "method": {
          "name": "TekrarYaz",
          "type": "void",
          "params": [
            {
              "name": "metin",
              "type": "string",
              "value": "İz bulundu"
            },
            {
              "name": "kac",
              "type": "int",
              "value": "3"
            }
          ]
        },
        "caller": [
          {
            "name": "mesaj",
            "value": "İz bulundu"
          },
          {
            "name": "adet",
            "value": "3"
          }
        ],
        "expression": "",
        "result": null,
        "callNumber": 1,
        "returnType": "void"
      },
      {
        "line": 5,
        "caption": "metin = İz bulundu, kac = 3. Değerler metodun kendi parametrelerine geçti.",
        "vars": {
          "mesaj (çağıran)": "İz bulundu",
          "adet (çağıran)": "3",
          "metin (parametre)": "İz bulundu",
          "kac (parametre)": "3"
        },
        "output": [],
        "phase": "bind",
        "context": "method",
        "method": {
          "name": "TekrarYaz",
          "type": "void",
          "params": [
            {
              "name": "metin",
              "type": "string",
              "value": "İz bulundu"
            },
            {
              "name": "kac",
              "type": "int",
              "value": "3"
            }
          ]
        },
        "caller": [
          {
            "name": "mesaj",
            "value": "İz bulundu"
          },
          {
            "name": "adet",
            "value": "3"
          }
        ],
        "expression": "",
        "result": null,
        "callNumber": 1,
        "returnType": "void"
      },
      {
        "line": 7,
        "caption": "i = 0. 0 < 3 doğru; mesaj yazılacak.",
        "vars": {
          "mesaj (çağıran)": "İz bulundu",
          "adet (çağıran)": "3",
          "metin (parametre)": "İz bulundu",
          "kac (parametre)": "3",
          "i (metot)": "0"
        },
        "output": [],
        "phase": "loop",
        "context": "method",
        "method": {
          "name": "TekrarYaz",
          "type": "void",
          "params": [
            {
              "name": "metin",
              "type": "string",
              "value": "İz bulundu"
            },
            {
              "name": "kac",
              "type": "int",
              "value": "3"
            }
          ]
        },
        "caller": [
          {
            "name": "mesaj",
            "value": "İz bulundu"
          },
          {
            "name": "adet",
            "value": "3"
          }
        ],
        "expression": "",
        "result": null,
        "callNumber": 1,
        "returnType": "void"
      },
      {
        "line": 9,
        "caption": "Metodun içindeki Console.WriteLine “İz bulundu” satırını doğrudan konsola ekler.",
        "vars": {
          "mesaj (çağıran)": "İz bulundu",
          "adet (çağıran)": "3",
          "metin (parametre)": "İz bulundu",
          "kac (parametre)": "3",
          "i (metot)": "0"
        },
        "output": [
          "İz bulundu"
        ],
        "phase": "print",
        "context": "method",
        "method": {
          "name": "TekrarYaz",
          "type": "void",
          "params": [
            {
              "name": "metin",
              "type": "string",
              "value": "İz bulundu"
            },
            {
              "name": "kac",
              "type": "int",
              "value": "3"
            }
          ]
        },
        "caller": [
          {
            "name": "mesaj",
            "value": "İz bulundu"
          },
          {
            "name": "adet",
            "value": "3"
          }
        ],
        "expression": "Console.WriteLine",
        "result": null,
        "callNumber": 1,
        "returnType": "void"
      },
      {
        "line": 7,
        "caption": "i = 1. 1 < 3 doğru; mesaj yazılacak.",
        "vars": {
          "mesaj (çağıran)": "İz bulundu",
          "adet (çağıran)": "3",
          "metin (parametre)": "İz bulundu",
          "kac (parametre)": "3",
          "i (metot)": "1"
        },
        "output": [
          "İz bulundu"
        ],
        "phase": "loop",
        "context": "method",
        "method": {
          "name": "TekrarYaz",
          "type": "void",
          "params": [
            {
              "name": "metin",
              "type": "string",
              "value": "İz bulundu"
            },
            {
              "name": "kac",
              "type": "int",
              "value": "3"
            }
          ]
        },
        "caller": [
          {
            "name": "mesaj",
            "value": "İz bulundu"
          },
          {
            "name": "adet",
            "value": "3"
          }
        ],
        "expression": "",
        "result": null,
        "callNumber": 1,
        "returnType": "void"
      },
      {
        "line": 9,
        "caption": "Metodun içindeki Console.WriteLine “İz bulundu” satırını doğrudan konsola ekler.",
        "vars": {
          "mesaj (çağıran)": "İz bulundu",
          "adet (çağıran)": "3",
          "metin (parametre)": "İz bulundu",
          "kac (parametre)": "3",
          "i (metot)": "1"
        },
        "output": [
          "İz bulundu",
          "İz bulundu"
        ],
        "phase": "print",
        "context": "method",
        "method": {
          "name": "TekrarYaz",
          "type": "void",
          "params": [
            {
              "name": "metin",
              "type": "string",
              "value": "İz bulundu"
            },
            {
              "name": "kac",
              "type": "int",
              "value": "3"
            }
          ]
        },
        "caller": [
          {
            "name": "mesaj",
            "value": "İz bulundu"
          },
          {
            "name": "adet",
            "value": "3"
          }
        ],
        "expression": "Console.WriteLine",
        "result": null,
        "callNumber": 1,
        "returnType": "void"
      },
      {
        "line": 7,
        "caption": "i = 2. 2 < 3 doğru; mesaj yazılacak.",
        "vars": {
          "mesaj (çağıran)": "İz bulundu",
          "adet (çağıran)": "3",
          "metin (parametre)": "İz bulundu",
          "kac (parametre)": "3",
          "i (metot)": "2"
        },
        "output": [
          "İz bulundu",
          "İz bulundu"
        ],
        "phase": "loop",
        "context": "method",
        "method": {
          "name": "TekrarYaz",
          "type": "void",
          "params": [
            {
              "name": "metin",
              "type": "string",
              "value": "İz bulundu"
            },
            {
              "name": "kac",
              "type": "int",
              "value": "3"
            }
          ]
        },
        "caller": [
          {
            "name": "mesaj",
            "value": "İz bulundu"
          },
          {
            "name": "adet",
            "value": "3"
          }
        ],
        "expression": "",
        "result": null,
        "callNumber": 1,
        "returnType": "void"
      },
      {
        "line": 9,
        "caption": "Metodun içindeki Console.WriteLine “İz bulundu” satırını doğrudan konsola ekler.",
        "vars": {
          "mesaj (çağıran)": "İz bulundu",
          "adet (çağıran)": "3",
          "metin (parametre)": "İz bulundu",
          "kac (parametre)": "3",
          "i (metot)": "2"
        },
        "output": [
          "İz bulundu",
          "İz bulundu",
          "İz bulundu"
        ],
        "phase": "print",
        "context": "method",
        "method": {
          "name": "TekrarYaz",
          "type": "void",
          "params": [
            {
              "name": "metin",
              "type": "string",
              "value": "İz bulundu"
            },
            {
              "name": "kac",
              "type": "int",
              "value": "3"
            }
          ]
        },
        "caller": [
          {
            "name": "mesaj",
            "value": "İz bulundu"
          },
          {
            "name": "adet",
            "value": "3"
          }
        ],
        "expression": "Console.WriteLine",
        "result": null,
        "callNumber": 1,
        "returnType": "void"
      },
      {
        "line": 7,
        "caption": "i = 3. 3 < 3 yanlış; döngü bitti.",
        "vars": {
          "mesaj (çağıran)": "İz bulundu",
          "adet (çağıran)": "3",
          "metin (parametre)": "İz bulundu",
          "kac (parametre)": "3",
          "i (metot)": "3"
        },
        "output": [
          "İz bulundu",
          "İz bulundu",
          "İz bulundu"
        ],
        "phase": "loop",
        "context": "method",
        "method": {
          "name": "TekrarYaz",
          "type": "void",
          "params": [
            {
              "name": "metin",
              "type": "string",
              "value": "İz bulundu"
            },
            {
              "name": "kac",
              "type": "int",
              "value": "3"
            }
          ]
        },
        "caller": [
          {
            "name": "mesaj",
            "value": "İz bulundu"
          },
          {
            "name": "adet",
            "value": "3"
          }
        ],
        "expression": "",
        "result": null,
        "callNumber": 1,
        "returnType": "void"
      },
      {
        "line": 3,
        "caption": "void metot bitti. Çağıran koda geri dönülür; geri verilen bir değer yok.",
        "vars": {
          "mesaj (çağıran)": "İz bulundu",
          "adet (çağıran)": "3"
        },
        "output": [
          "İz bulundu",
          "İz bulundu",
          "İz bulundu"
        ],
        "phase": "finish",
        "context": "main",
        "method": {
          "name": "TekrarYaz",
          "type": "void",
          "params": [
            {
              "name": "metin",
              "type": "string",
              "value": "İz bulundu"
            },
            {
              "name": "kac",
              "type": "int",
              "value": "3"
            }
          ]
        },
        "caller": [
          {
            "name": "mesaj",
            "value": "İz bulundu"
          },
          {
            "name": "adet",
            "value": "3"
          }
        ],
        "expression": "",
        "result": null,
        "callNumber": 1,
        "returnType": "void"
      }
    ]
  },
  {
    "id": "reuse",
    "title": "Aynı aracı iki kez kullan",
    "kind": "ÜNİTE 3 / KOLAY METOT GÖREVİ",
    "intro": "Aynı metot iki farklı girdiyle çalışabilir. Parametre her çağrıda yeniden değer alır.",
    "input": [
      "3",
      "5"
    ],
    "output": [
      "9",
      "25"
    ],
    "reference": "int ilk = Convert.ToInt32(Console.ReadLine());\nint ikinci = Convert.ToInt32(Console.ReadLine());\nConsole.WriteLine(Kare(ilk));\nConsole.WriteLine(Kare(ikinci));\n\nstatic int Kare(int sayi)\n{\n    return sayi * sayi;\n}",
    "understand": [
      "Sırayla -20 ile 20 arasında iki tam sayı girecek.",
      "Bir int parametre alıp karesini int döndüren tek bir metot yaz. Aynı metodu her giriş için ayrı çağır.",
      "Önce ilk sayının karesini, sonra ikincinin karesini iki ayrı satırda yaz."
    ],
    "walkthrough": [
      "3 ve 5 okunur.",
      "İlk Kare çağrısında sayi 3; sonuç 9. İlk satıra yazılır.",
      "İkinci çağrıda sayi yeniden 5 olur; önceki 3 saklanmaz.",
      "İkinci sonuç 25 yazılır."
    ],
    "concept": "Metodu yeniden kullanma · çağrıya özel parametre",
    "hint": "İki ayrı Kare metodu yazma; tek tanımı farklı değerlerle iki kez çağır.",
    "theme": "blue",
    "themeName": "Gece mavisi",
    "lineHelp": {
      "1": "Sıradaki girdi okunur. Metin girişinde string, tam sayıda Convert.ToInt32 kullanılır. Bu değer henüz metoda gönderilmedi.",
      "2": "Sıradaki girdi okunur. Metin girişinde string, tam sayıda Convert.ToInt32 kullanılır. Bu değer henüz metoda gönderilmedi.",
      "3": "Parantezdeki değer konsola yazılır. Parantezde metot çağrısı varsa önce metot çalışır ve sonucu beklenir.",
      "4": "Parantezdeki değer konsola yazılır. Parantezde metot çağrısı varsa önce metot çalışır ve sonucu beklenir.",
      "5": "Okumayı kolaylaştıran boş satır; çalışan bir komut değil.",
      "6": "Bu bir metot tanımı. Üstteki çağrı buraya yönlenir. Parantezdeki parametreler gelen değerleri tutar; baştaki tür döndürülecek değeri söyler. void değer döndürmez.",
      "7": "Metodun veya bu bloğun komutları burada başlar.",
      "8": "Önce return yanındaki ifade hesaplanır. Sonuç çağıran yere geri verilir ve metot biter. return tek başına konsola yazı yazmaz.",
      "9": "Blok sona erer. void metodun sonuna gelindiyse değer vermeden çağıran koda dönülür."
    },
    "independent": false,
    "rules": [
      "Girdileri belirtilen sırayla oku. Tam sayı girişleri geçerlidir.",
      "Metot adları ve parametre adları serbest; istenen dönüş türü ve parametre sayısını koru.",
      "Metotları örnekteki gibi doğrudan kodun altında tanımla. using veya class ekleme.",
      "Sadece istenen çıktıyı yaz. return ile Console.WriteLine aynı iş değildir.",
      "Bu kolay vakada recursion istenmiyor."
    ],
    "goal": "Bir int parametre alıp karesini int döndüren tek bir metot yaz. Aynı metodu her giriş için ayrı çağır. Önce ilk sayının karesini, sonra ikincinin karesini iki ayrı satırda yaz.",
    "words": [
      [
        "Parametre ile gönderilen değer",
        "Çağıran yerdeki değer, metodun parantezindeki parametreye aktarılır. İsimlerinin aynı olması gerekmez. int parametreye değer kopyalanır."
      ],
      [
        "return",
        "Bir sonucu çağıran koda geri verir ve metodu bitirir. Sonucu ekrana yazmak ayrı bir iştir."
      ],
      [
        "void",
        "Metot değer döndürmez. Kendi içinde Console.WriteLine çalıştırabilir. void çağrısını sonuç değişkenine atayamazsın."
      ],
      [
        "static ve metot tanımı",
        "Örnekler, üst düzey programın altında static yerel metot kullanır. Aynı işi yapan normal yerel metot da kabul edilir. Metot tanımı, çağrı gelmeden gövdesini çalıştırmaz."
      ]
    ],
    "frames": [
      {
        "line": 0,
        "caption": "Önce girdiler alınacak. Metot, çağrı satırına gelince çalışacak.",
        "vars": {},
        "output": [],
        "phase": "ready",
        "context": "main",
        "method": {
          "name": "Kare",
          "type": "int",
          "params": [
            {
              "name": "sayi",
              "type": "int",
              "value": "—"
            }
          ]
        },
        "caller": [],
        "expression": "",
        "result": null,
        "callNumber": 0,
        "returnType": "int"
      },
      {
        "line": 1,
        "caption": "Girdi 3 tam sayıya çevrilir. ilk çağıran kodda tutulur.",
        "vars": {
          "ilk (çağıran)": "3"
        },
        "output": [],
        "phase": "read",
        "context": "main",
        "method": {
          "name": "Kare",
          "type": "int",
          "params": [
            {
              "name": "sayi",
              "type": "int",
              "value": "—"
            }
          ]
        },
        "caller": [
          {
            "name": "ilk",
            "value": "3"
          }
        ],
        "expression": "",
        "result": null,
        "callNumber": 0,
        "returnType": "int"
      },
      {
        "line": 2,
        "caption": "Girdi 5 tam sayıya çevrilir. ikinci çağıran kodda tutulur.",
        "vars": {
          "ilk (çağıran)": "3",
          "ikinci (çağıran)": "5"
        },
        "output": [],
        "phase": "read",
        "context": "main",
        "method": {
          "name": "Kare",
          "type": "int",
          "params": [
            {
              "name": "sayi",
              "type": "int",
              "value": "—"
            }
          ]
        },
        "caller": [
          {
            "name": "ilk",
            "value": "3"
          },
          {
            "name": "ikinci",
            "value": "5"
          }
        ],
        "expression": "",
        "result": null,
        "callNumber": 0,
        "returnType": "int"
      },
      {
        "line": 3,
        "caption": "Kare çağrısı başladı. Çağıran satır, sonuç dönene kadar bekliyor.",
        "vars": {
          "ilk (çağıran)": "3",
          "ikinci (çağıran)": "5"
        },
        "output": [],
        "phase": "call",
        "context": "main",
        "method": {
          "name": "Kare",
          "type": "int",
          "params": [
            {
              "name": "sayi",
              "type": "int",
              "value": "3"
            }
          ]
        },
        "caller": [
          {
            "name": "ilk",
            "value": "3"
          },
          {
            "name": "ikinci",
            "value": "5"
          }
        ],
        "expression": "",
        "result": null,
        "callNumber": 1,
        "returnType": "int"
      },
      {
        "line": 6,
        "caption": "sayi = 3. Değerler metodun kendi parametrelerine geçti.",
        "vars": {
          "ilk (çağıran)": "3",
          "ikinci (çağıran)": "5",
          "sayi (parametre)": "3"
        },
        "output": [],
        "phase": "bind",
        "context": "method",
        "method": {
          "name": "Kare",
          "type": "int",
          "params": [
            {
              "name": "sayi",
              "type": "int",
              "value": "3"
            }
          ]
        },
        "caller": [
          {
            "name": "ilk",
            "value": "3"
          },
          {
            "name": "ikinci",
            "value": "5"
          }
        ],
        "expression": "",
        "result": null,
        "callNumber": 1,
        "returnType": "int"
      },
      {
        "line": 8,
        "caption": "İlk çağrıda sayi 3; kare 9.",
        "vars": {
          "ilk (çağıran)": "3",
          "ikinci (çağıran)": "5",
          "sayi (parametre)": "3"
        },
        "output": [],
        "phase": "calculate",
        "context": "method",
        "method": {
          "name": "Kare",
          "type": "int",
          "params": [
            {
              "name": "sayi",
              "type": "int",
              "value": "3"
            }
          ]
        },
        "caller": [
          {
            "name": "ilk",
            "value": "3"
          },
          {
            "name": "ikinci",
            "value": "5"
          }
        ],
        "expression": "3 × 3 = 9",
        "result": "9",
        "callNumber": 1,
        "returnType": "int"
      },
      {
        "line": 8,
        "caption": "return 9 değerini çağıran satıra geri gönderir. Henüz konsola yeni satır eklenmez.",
        "vars": {
          "ilk (çağıran)": "3",
          "ikinci (çağıran)": "5",
          "sayi (parametre)": "3"
        },
        "output": [],
        "phase": "return",
        "context": "method",
        "method": {
          "name": "Kare",
          "type": "int",
          "params": [
            {
              "name": "sayi",
              "type": "int",
              "value": "3"
            }
          ]
        },
        "caller": [
          {
            "name": "ilk",
            "value": "3"
          },
          {
            "name": "ikinci",
            "value": "5"
          }
        ],
        "expression": "return 9",
        "result": "9",
        "callNumber": 1,
        "returnType": "int"
      },
      {
        "line": 3,
        "caption": "Çağıran koddaki Console.WriteLine şimdi 9 yazar.",
        "vars": {
          "ilk (çağıran)": "3",
          "ikinci (çağıran)": "5"
        },
        "output": [
          "9"
        ],
        "phase": "print",
        "context": "main",
        "method": {
          "name": "Kare",
          "type": "int",
          "params": [
            {
              "name": "sayi",
              "type": "int",
              "value": "3"
            }
          ]
        },
        "caller": [
          {
            "name": "ilk",
            "value": "3"
          },
          {
            "name": "ikinci",
            "value": "5"
          }
        ],
        "expression": "",
        "result": "9",
        "callNumber": 1,
        "returnType": "int"
      },
      {
        "line": 4,
        "caption": "Kare çağrısı başladı. Çağıran satır, sonuç dönene kadar bekliyor.",
        "vars": {
          "ilk (çağıran)": "3",
          "ikinci (çağıran)": "5"
        },
        "output": [
          "9"
        ],
        "phase": "call",
        "context": "main",
        "method": {
          "name": "Kare",
          "type": "int",
          "params": [
            {
              "name": "sayi",
              "type": "int",
              "value": "5"
            }
          ]
        },
        "caller": [
          {
            "name": "ilk",
            "value": "3"
          },
          {
            "name": "ikinci",
            "value": "5"
          }
        ],
        "expression": "",
        "result": null,
        "callNumber": 2,
        "returnType": "int"
      },
      {
        "line": 6,
        "caption": "sayi = 5. Değerler metodun kendi parametrelerine geçti.",
        "vars": {
          "ilk (çağıran)": "3",
          "ikinci (çağıran)": "5",
          "sayi (parametre)": "5"
        },
        "output": [
          "9"
        ],
        "phase": "bind",
        "context": "method",
        "method": {
          "name": "Kare",
          "type": "int",
          "params": [
            {
              "name": "sayi",
              "type": "int",
              "value": "5"
            }
          ]
        },
        "caller": [
          {
            "name": "ilk",
            "value": "3"
          },
          {
            "name": "ikinci",
            "value": "5"
          }
        ],
        "expression": "",
        "result": null,
        "callNumber": 2,
        "returnType": "int"
      },
      {
        "line": 8,
        "caption": "İkinci çağrıda sayi 5; kare 25. Önceki parametre değeri kullanılmaz.",
        "vars": {
          "ilk (çağıran)": "3",
          "ikinci (çağıran)": "5",
          "sayi (parametre)": "5"
        },
        "output": [
          "9"
        ],
        "phase": "calculate",
        "context": "method",
        "method": {
          "name": "Kare",
          "type": "int",
          "params": [
            {
              "name": "sayi",
              "type": "int",
              "value": "5"
            }
          ]
        },
        "caller": [
          {
            "name": "ilk",
            "value": "3"
          },
          {
            "name": "ikinci",
            "value": "5"
          }
        ],
        "expression": "5 × 5 = 25",
        "result": "25",
        "callNumber": 2,
        "returnType": "int"
      },
      {
        "line": 8,
        "caption": "return 25 değerini çağıran satıra geri gönderir. Henüz konsola yeni satır eklenmez.",
        "vars": {
          "ilk (çağıran)": "3",
          "ikinci (çağıran)": "5",
          "sayi (parametre)": "5"
        },
        "output": [
          "9"
        ],
        "phase": "return",
        "context": "method",
        "method": {
          "name": "Kare",
          "type": "int",
          "params": [
            {
              "name": "sayi",
              "type": "int",
              "value": "5"
            }
          ]
        },
        "caller": [
          {
            "name": "ilk",
            "value": "3"
          },
          {
            "name": "ikinci",
            "value": "5"
          }
        ],
        "expression": "return 25",
        "result": "25",
        "callNumber": 2,
        "returnType": "int"
      },
      {
        "line": 4,
        "caption": "Çağıran koddaki Console.WriteLine şimdi 25 yazar.",
        "vars": {
          "ilk (çağıran)": "3",
          "ikinci (çağıran)": "5"
        },
        "output": [
          "9",
          "25"
        ],
        "phase": "print",
        "context": "main",
        "method": {
          "name": "Kare",
          "type": "int",
          "params": [
            {
              "name": "sayi",
              "type": "int",
              "value": "5"
            }
          ]
        },
        "caller": [
          {
            "name": "ilk",
            "value": "3"
          },
          {
            "name": "ikinci",
            "value": "5"
          }
        ],
        "expression": "",
        "result": "25",
        "callNumber": 2,
        "returnType": "int"
      }
    ]
  },
  {
    "id": "combine",
    "title": "İki aracı birlikte çalıştır",
    "kind": "ÜNİTE 3 / KOLAY METOT GÖREVİ",
    "intro": "Bir araç yol tutarını, diğeri kalan bütçeyi hesaplasın. İlk aracın sonucu ikincisine gitsin.",
    "input": [
      "7",
      "12",
      "200"
    ],
    "output": [
      "84",
      "116"
    ],
    "reference": "int km = Convert.ToInt32(Console.ReadLine());\nint birim = Convert.ToInt32(Console.ReadLine());\nint butce = Convert.ToInt32(Console.ReadLine());\nint yol = YolHesapla(km, birim);\nint kalan = KalanPara(butce, yol);\nConsole.WriteLine(yol);\nConsole.WriteLine(kalan);\n\nstatic int YolHesapla(int mesafe, int ucret)\n{\n    return mesafe * ucret;\n}\n\nstatic int KalanPara(int para, int gider)\n{\n    return para - gider;\n}",
    "understand": [
      "Sırayla kilometre (0–50), kilometre ücreti (0–20) ve bütçe (0–2000) girecek. Hepsi int; bütçe yol giderini karşılar.",
      "İki ayrı, ikişer int parametreli int metot yaz. Biri kilometre × ücret ile yol giderini, diğeri bütçe − gider ile kalanı döndürsün. İkisinin sonucunu da kullan.",
      "İlk satıra yol giderini, ikinci satıra kalan bütçeyi yalnızca sayı olarak yaz. Açılış bedeli ekleme."
    ],
    "walkthrough": [
      "7 km, kilometre başına 12 TL ve 200 TL bütçe okunur.",
      "İlk araç 7 × 12 = 84 döndürür. yol değişkeni 84 olur.",
      "İkinci araca 200 ve ilk aracın sonucu 84 gönderilir. 116 döner.",
      "Ana kod önce 84, sonra 116 yazar."
    ],
    "concept": "İki metot · bir sonucun diğer çağrıya gitmesi",
    "hint": "YolHesapla sonucunu önce sakla. KalanPara çağrısında gider olarak bu sonucu kullan.",
    "theme": "blue",
    "themeName": "Gece mavisi",
    "lineHelp": {
      "1": "Sıradaki girdi okunur. Metin girişinde string, tam sayıda Convert.ToInt32 kullanılır. Bu değer henüz metoda gönderilmedi.",
      "2": "Sıradaki girdi okunur. Metin girişinde string, tam sayıda Convert.ToInt32 kullanılır. Bu değer henüz metoda gönderilmedi.",
      "3": "Sıradaki girdi okunur. Metin girişinde string, tam sayıda Convert.ToInt32 kullanılır. Bu değer henüz metoda gönderilmedi.",
      "4": "Sağdaki metot çağrısı önce çalışır. Dönen sonuç soldaki değişkene atanır; sonraki satır bu sonucu kullanabilir.",
      "5": "Sağdaki metot çağrısı önce çalışır. Dönen sonuç soldaki değişkene atanır; sonraki satır bu sonucu kullanabilir.",
      "6": "Parantezdeki değer konsola yazılır. Parantezde metot çağrısı varsa önce metot çalışır ve sonucu beklenir.",
      "7": "Parantezdeki değer konsola yazılır. Parantezde metot çağrısı varsa önce metot çalışır ve sonucu beklenir.",
      "8": "Okumayı kolaylaştıran boş satır; çalışan bir komut değil.",
      "9": "Bu bir metot tanımı. Üstteki çağrı buraya yönlenir. Parantezdeki parametreler gelen değerleri tutar; baştaki tür döndürülecek değeri söyler. void değer döndürmez.",
      "10": "Metodun veya bu bloğun komutları burada başlar.",
      "11": "Önce return yanındaki ifade hesaplanır. Sonuç çağıran yere geri verilir ve metot biter. return tek başına konsola yazı yazmaz.",
      "12": "Blok sona erer. void metodun sonuna gelindiyse değer vermeden çağıran koda dönülür.",
      "13": "Okumayı kolaylaştıran boş satır; çalışan bir komut değil.",
      "14": "Bu bir metot tanımı. Üstteki çağrı buraya yönlenir. Parantezdeki parametreler gelen değerleri tutar; baştaki tür döndürülecek değeri söyler. void değer döndürmez.",
      "15": "Metodun veya bu bloğun komutları burada başlar.",
      "16": "Önce return yanındaki ifade hesaplanır. Sonuç çağıran yere geri verilir ve metot biter. return tek başına konsola yazı yazmaz.",
      "17": "Blok sona erer. void metodun sonuna gelindiyse değer vermeden çağıran koda dönülür."
    },
    "independent": false,
    "rules": [
      "Girdileri belirtilen sırayla oku. Tam sayı girişleri geçerlidir.",
      "Metot adları ve parametre adları serbest; istenen dönüş türü ve parametre sayısını koru.",
      "Metotları örnekteki gibi doğrudan kodun altında tanımla. using veya class ekleme.",
      "Sadece istenen çıktıyı yaz. return ile Console.WriteLine aynı iş değildir.",
      "Bu kolay vakada recursion istenmiyor."
    ],
    "goal": "İki ayrı, ikişer int parametreli int metot yaz. Biri kilometre × ücret ile yol giderini, diğeri bütçe − gider ile kalanı döndürsün. İkisinin sonucunu da kullan. İlk satıra yol giderini, ikinci satıra kalan bütçeyi yalnızca sayı olarak yaz. Açılış bedeli ekleme.",
    "words": [
      [
        "Parametre ile gönderilen değer",
        "Çağıran yerdeki değer, metodun parantezindeki parametreye aktarılır. İsimlerinin aynı olması gerekmez. int parametreye değer kopyalanır."
      ],
      [
        "return",
        "Bir sonucu çağıran koda geri verir ve metodu bitirir. Sonucu ekrana yazmak ayrı bir iştir."
      ],
      [
        "void",
        "Metot değer döndürmez. Kendi içinde Console.WriteLine çalıştırabilir. void çağrısını sonuç değişkenine atayamazsın."
      ],
      [
        "static ve metot tanımı",
        "Örnekler, üst düzey programın altında static yerel metot kullanır. Aynı işi yapan normal yerel metot da kabul edilir. Metot tanımı, çağrı gelmeden gövdesini çalıştırmaz."
      ]
    ],
    "frames": [
      {
        "line": 0,
        "caption": "Önce girdiler alınacak. Metot, çağrı satırına gelince çalışacak.",
        "vars": {},
        "output": [],
        "phase": "ready",
        "context": "main",
        "method": {
          "name": "YolHesapla",
          "type": "int",
          "params": [
            {
              "name": "mesafe",
              "type": "int",
              "value": "—"
            },
            {
              "name": "ucret",
              "type": "int",
              "value": "—"
            }
          ]
        },
        "caller": [],
        "expression": "",
        "result": null,
        "callNumber": 0,
        "returnType": "int"
      },
      {
        "line": 1,
        "caption": "Girdi 7 tam sayıya çevrilir. km çağıran kodda tutulur.",
        "vars": {
          "km (çağıran)": "7"
        },
        "output": [],
        "phase": "read",
        "context": "main",
        "method": {
          "name": "YolHesapla",
          "type": "int",
          "params": [
            {
              "name": "mesafe",
              "type": "int",
              "value": "—"
            },
            {
              "name": "ucret",
              "type": "int",
              "value": "—"
            }
          ]
        },
        "caller": [
          {
            "name": "km",
            "value": "7"
          }
        ],
        "expression": "",
        "result": null,
        "callNumber": 0,
        "returnType": "int"
      },
      {
        "line": 2,
        "caption": "Girdi 12 tam sayıya çevrilir. birim çağıran kodda tutulur.",
        "vars": {
          "km (çağıran)": "7",
          "birim (çağıran)": "12"
        },
        "output": [],
        "phase": "read",
        "context": "main",
        "method": {
          "name": "YolHesapla",
          "type": "int",
          "params": [
            {
              "name": "mesafe",
              "type": "int",
              "value": "—"
            },
            {
              "name": "ucret",
              "type": "int",
              "value": "—"
            }
          ]
        },
        "caller": [
          {
            "name": "km",
            "value": "7"
          },
          {
            "name": "birim",
            "value": "12"
          }
        ],
        "expression": "",
        "result": null,
        "callNumber": 0,
        "returnType": "int"
      },
      {
        "line": 3,
        "caption": "Girdi 200 tam sayıya çevrilir. butce çağıran kodda tutulur.",
        "vars": {
          "km (çağıran)": "7",
          "birim (çağıran)": "12",
          "butce (çağıran)": "200"
        },
        "output": [],
        "phase": "read",
        "context": "main",
        "method": {
          "name": "YolHesapla",
          "type": "int",
          "params": [
            {
              "name": "mesafe",
              "type": "int",
              "value": "—"
            },
            {
              "name": "ucret",
              "type": "int",
              "value": "—"
            }
          ]
        },
        "caller": [
          {
            "name": "km",
            "value": "7"
          },
          {
            "name": "birim",
            "value": "12"
          },
          {
            "name": "butce",
            "value": "200"
          }
        ],
        "expression": "",
        "result": null,
        "callNumber": 0,
        "returnType": "int"
      },
      {
        "line": 4,
        "caption": "YolHesapla çağrısı başladı. Çağıran satır, sonuç dönene kadar bekliyor.",
        "vars": {
          "km (çağıran)": "7",
          "birim (çağıran)": "12",
          "butce (çağıran)": "200"
        },
        "output": [],
        "phase": "call",
        "context": "main",
        "method": {
          "name": "YolHesapla",
          "type": "int",
          "params": [
            {
              "name": "mesafe",
              "type": "int",
              "value": "7"
            },
            {
              "name": "ucret",
              "type": "int",
              "value": "12"
            }
          ]
        },
        "caller": [
          {
            "name": "km",
            "value": "7"
          },
          {
            "name": "birim",
            "value": "12"
          },
          {
            "name": "butce",
            "value": "200"
          }
        ],
        "expression": "",
        "result": null,
        "callNumber": 1,
        "returnType": "int"
      },
      {
        "line": 9,
        "caption": "mesafe = 7, ucret = 12. Değerler metodun kendi parametrelerine geçti.",
        "vars": {
          "km (çağıran)": "7",
          "birim (çağıran)": "12",
          "butce (çağıran)": "200",
          "mesafe (parametre)": "7",
          "ucret (parametre)": "12"
        },
        "output": [],
        "phase": "bind",
        "context": "method",
        "method": {
          "name": "YolHesapla",
          "type": "int",
          "params": [
            {
              "name": "mesafe",
              "type": "int",
              "value": "7"
            },
            {
              "name": "ucret",
              "type": "int",
              "value": "12"
            }
          ]
        },
        "caller": [
          {
            "name": "km",
            "value": "7"
          },
          {
            "name": "birim",
            "value": "12"
          },
          {
            "name": "butce",
            "value": "200"
          }
        ],
        "expression": "",
        "result": null,
        "callNumber": 1,
        "returnType": "int"
      },
      {
        "line": 11,
        "caption": "İlk araç yol tutarını hesaplar.",
        "vars": {
          "km (çağıran)": "7",
          "birim (çağıran)": "12",
          "butce (çağıran)": "200",
          "mesafe (parametre)": "7",
          "ucret (parametre)": "12"
        },
        "output": [],
        "phase": "calculate",
        "context": "method",
        "method": {
          "name": "YolHesapla",
          "type": "int",
          "params": [
            {
              "name": "mesafe",
              "type": "int",
              "value": "7"
            },
            {
              "name": "ucret",
              "type": "int",
              "value": "12"
            }
          ]
        },
        "caller": [
          {
            "name": "km",
            "value": "7"
          },
          {
            "name": "birim",
            "value": "12"
          },
          {
            "name": "butce",
            "value": "200"
          }
        ],
        "expression": "7 × 12 = 84",
        "result": "84",
        "callNumber": 1,
        "returnType": "int"
      },
      {
        "line": 11,
        "caption": "return 84 değerini çağıran satıra geri gönderir. Henüz konsola yeni satır eklenmez.",
        "vars": {
          "km (çağıran)": "7",
          "birim (çağıran)": "12",
          "butce (çağıran)": "200",
          "mesafe (parametre)": "7",
          "ucret (parametre)": "12"
        },
        "output": [],
        "phase": "return",
        "context": "method",
        "method": {
          "name": "YolHesapla",
          "type": "int",
          "params": [
            {
              "name": "mesafe",
              "type": "int",
              "value": "7"
            },
            {
              "name": "ucret",
              "type": "int",
              "value": "12"
            }
          ]
        },
        "caller": [
          {
            "name": "km",
            "value": "7"
          },
          {
            "name": "birim",
            "value": "12"
          },
          {
            "name": "butce",
            "value": "200"
          }
        ],
        "expression": "return 84",
        "result": "84",
        "callNumber": 1,
        "returnType": "int"
      },
      {
        "line": 4,
        "caption": "Dönen 84 değeri, çağıran koddaki yol değişkenine atanır.",
        "vars": {
          "km (çağıran)": "7",
          "birim (çağıran)": "12",
          "butce (çağıran)": "200",
          "yol (çağıran)": "84"
        },
        "output": [],
        "phase": "receive",
        "context": "main",
        "method": {
          "name": "YolHesapla",
          "type": "int",
          "params": [
            {
              "name": "mesafe",
              "type": "int",
              "value": "7"
            },
            {
              "name": "ucret",
              "type": "int",
              "value": "12"
            }
          ]
        },
        "caller": [
          {
            "name": "km",
            "value": "7"
          },
          {
            "name": "birim",
            "value": "12"
          },
          {
            "name": "butce",
            "value": "200"
          },
          {
            "name": "yol",
            "value": "84"
          }
        ],
        "expression": "",
        "result": "84",
        "callNumber": 1,
        "returnType": "int"
      },
      {
        "line": 5,
        "caption": "KalanPara çağrısı başladı. Çağıran satır, sonuç dönene kadar bekliyor.",
        "vars": {
          "km (çağıran)": "7",
          "birim (çağıran)": "12",
          "butce (çağıran)": "200",
          "yol (çağıran)": "84"
        },
        "output": [],
        "phase": "call",
        "context": "main",
        "method": {
          "name": "KalanPara",
          "type": "int",
          "params": [
            {
              "name": "para",
              "type": "int",
              "value": "200"
            },
            {
              "name": "gider",
              "type": "int",
              "value": "84"
            }
          ]
        },
        "caller": [
          {
            "name": "km",
            "value": "7"
          },
          {
            "name": "birim",
            "value": "12"
          },
          {
            "name": "butce",
            "value": "200"
          },
          {
            "name": "yol",
            "value": "84"
          }
        ],
        "expression": "",
        "result": null,
        "callNumber": 2,
        "returnType": "int"
      },
      {
        "line": 14,
        "caption": "para = 200, gider = 84. Değerler metodun kendi parametrelerine geçti.",
        "vars": {
          "km (çağıran)": "7",
          "birim (çağıran)": "12",
          "butce (çağıran)": "200",
          "yol (çağıran)": "84",
          "para (parametre)": "200",
          "gider (parametre)": "84"
        },
        "output": [],
        "phase": "bind",
        "context": "method",
        "method": {
          "name": "KalanPara",
          "type": "int",
          "params": [
            {
              "name": "para",
              "type": "int",
              "value": "200"
            },
            {
              "name": "gider",
              "type": "int",
              "value": "84"
            }
          ]
        },
        "caller": [
          {
            "name": "km",
            "value": "7"
          },
          {
            "name": "birim",
            "value": "12"
          },
          {
            "name": "butce",
            "value": "200"
          },
          {
            "name": "yol",
            "value": "84"
          }
        ],
        "expression": "",
        "result": null,
        "callNumber": 2,
        "returnType": "int"
      },
      {
        "line": 16,
        "caption": "İlk sonuç 84, ikinci aracın gider parametresidir.",
        "vars": {
          "km (çağıran)": "7",
          "birim (çağıran)": "12",
          "butce (çağıran)": "200",
          "yol (çağıran)": "84",
          "para (parametre)": "200",
          "gider (parametre)": "84"
        },
        "output": [],
        "phase": "calculate",
        "context": "method",
        "method": {
          "name": "KalanPara",
          "type": "int",
          "params": [
            {
              "name": "para",
              "type": "int",
              "value": "200"
            },
            {
              "name": "gider",
              "type": "int",
              "value": "84"
            }
          ]
        },
        "caller": [
          {
            "name": "km",
            "value": "7"
          },
          {
            "name": "birim",
            "value": "12"
          },
          {
            "name": "butce",
            "value": "200"
          },
          {
            "name": "yol",
            "value": "84"
          }
        ],
        "expression": "200 − 84 = 116",
        "result": "116",
        "callNumber": 2,
        "returnType": "int"
      },
      {
        "line": 16,
        "caption": "return 116 değerini çağıran satıra geri gönderir. Henüz konsola yeni satır eklenmez.",
        "vars": {
          "km (çağıran)": "7",
          "birim (çağıran)": "12",
          "butce (çağıran)": "200",
          "yol (çağıran)": "84",
          "para (parametre)": "200",
          "gider (parametre)": "84"
        },
        "output": [],
        "phase": "return",
        "context": "method",
        "method": {
          "name": "KalanPara",
          "type": "int",
          "params": [
            {
              "name": "para",
              "type": "int",
              "value": "200"
            },
            {
              "name": "gider",
              "type": "int",
              "value": "84"
            }
          ]
        },
        "caller": [
          {
            "name": "km",
            "value": "7"
          },
          {
            "name": "birim",
            "value": "12"
          },
          {
            "name": "butce",
            "value": "200"
          },
          {
            "name": "yol",
            "value": "84"
          }
        ],
        "expression": "return 116",
        "result": "116",
        "callNumber": 2,
        "returnType": "int"
      },
      {
        "line": 5,
        "caption": "Dönen 116 değeri, çağıran koddaki kalan değişkenine atanır.",
        "vars": {
          "km (çağıran)": "7",
          "birim (çağıran)": "12",
          "butce (çağıran)": "200",
          "yol (çağıran)": "84",
          "kalan (çağıran)": "116"
        },
        "output": [],
        "phase": "receive",
        "context": "main",
        "method": {
          "name": "KalanPara",
          "type": "int",
          "params": [
            {
              "name": "para",
              "type": "int",
              "value": "200"
            },
            {
              "name": "gider",
              "type": "int",
              "value": "84"
            }
          ]
        },
        "caller": [
          {
            "name": "km",
            "value": "7"
          },
          {
            "name": "birim",
            "value": "12"
          },
          {
            "name": "butce",
            "value": "200"
          },
          {
            "name": "yol",
            "value": "84"
          },
          {
            "name": "kalan",
            "value": "116"
          }
        ],
        "expression": "",
        "result": "116",
        "callNumber": 2,
        "returnType": "int"
      },
      {
        "line": 6,
        "caption": "Çağıran koddaki Console.WriteLine şimdi 84 yazar.",
        "vars": {
          "km (çağıran)": "7",
          "birim (çağıran)": "12",
          "butce (çağıran)": "200",
          "yol (çağıran)": "84",
          "kalan (çağıran)": "116"
        },
        "output": [
          "84"
        ],
        "phase": "print",
        "context": "main",
        "method": {
          "name": "KalanPara",
          "type": "int",
          "params": [
            {
              "name": "para",
              "type": "int",
              "value": "200"
            },
            {
              "name": "gider",
              "type": "int",
              "value": "84"
            }
          ]
        },
        "caller": [
          {
            "name": "km",
            "value": "7"
          },
          {
            "name": "birim",
            "value": "12"
          },
          {
            "name": "butce",
            "value": "200"
          },
          {
            "name": "yol",
            "value": "84"
          },
          {
            "name": "kalan",
            "value": "116"
          }
        ],
        "expression": "",
        "result": "84",
        "callNumber": 2,
        "returnType": "int"
      },
      {
        "line": 7,
        "caption": "Çağıran koddaki Console.WriteLine şimdi 116 yazar.",
        "vars": {
          "km (çağıran)": "7",
          "birim (çağıran)": "12",
          "butce (çağıran)": "200",
          "yol (çağıran)": "84",
          "kalan (çağıran)": "116"
        },
        "output": [
          "84",
          "116"
        ],
        "phase": "print",
        "context": "main",
        "method": {
          "name": "KalanPara",
          "type": "int",
          "params": [
            {
              "name": "para",
              "type": "int",
              "value": "200"
            },
            {
              "name": "gider",
              "type": "int",
              "value": "84"
            }
          ]
        },
        "caller": [
          {
            "name": "km",
            "value": "7"
          },
          {
            "name": "birim",
            "value": "12"
          },
          {
            "name": "butce",
            "value": "200"
          },
          {
            "name": "yol",
            "value": "84"
          },
          {
            "name": "kalan",
            "value": "116"
          }
        ],
        "expression": "",
        "result": "116",
        "callNumber": 2,
        "returnType": "int"
      }
    ]
  }
];
