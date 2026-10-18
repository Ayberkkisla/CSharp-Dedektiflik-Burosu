window.Unit3CapstoneTasks = [
  {
    "id": "dispatch",
    "title": "Delilleri teslim bandından geçir",
    "theme": "green",
    "themeName": "Zümrüt yeşili",
    "color": "#9bdfad",
    "scene": "Teslim bandı",
    "kind": "ÜNİTE 3 / BİTİRME PROJESİ",
    "intro": "Arşivdeki teslim bandı seni bekliyor. Diziyi uygun araçla işle.",
    "goal": "Bir int[] parametre alan void metot yaz. Metot dizinin bütün elemanlarını baştan sona, her birini ayrı satırda yazdırsın. Ana koddan bir kez çağır.",
    "concept": "Teslim bandı · dizi ve metot birlikte",
    "rules": [
      "Önce n, sonra n tane tam sayı oku. Her giriş ayrı satırda.",
      "n 1–5 arasında, dizi değerleri -20 ile 20 arasında. ",
      "Metot ve değişken adlarını kendin seçebilirsin. İstenen dönüş ve parametre türlerini koru.",
      "Metotları ana kodun altında tanımla; using veya class ekleme. Hazır LINQ/Sum/Reverse kullanmadan öğrendiğin döngülerle çöz."
    ],
    "understand": [
      "Önce delil sayısı n, sonra n delil puanı. Başka giriş yok.",
      "Bir int[] parametre alan void metot yaz. Metot dizinin bütün elemanlarını baştan sona, her birini ayrı satırda yazdırsın. Ana koddan bir kez çağır.",
      "Her delil değeri giriş sırasıyla ayrı satırda. Başlık ekleme."
    ],
    "input": [
      "3",
      "4",
      "7",
      "2"
    ],
    "output": [
      "4",
      "7",
      "2"
    ],
    "reference": "int n = Convert.ToInt32(Console.ReadLine());\nint[] deliller = new int[n];\nfor (int i = 0; i < n; i++)\n    deliller[i] = Convert.ToInt32(Console.ReadLine());\nYazdir(deliller);\n\nstatic void Yazdir(int[] d)\n{\n    for (int i = 0; i < d.Length; i++)\n        Console.WriteLine(d[i]);\n}",
    "hint": "Diziyi metoda parametre olarak gönder. Döngü ve istenen işlem metodun içinde olsun.",
    "walkthrough": [
      "İlk giriş 3: 3 elemanlı dizi oluşturulur.",
      "2. giriş 4, deliller[0] içine konur.",
      "3. giriş 7, deliller[1] içine konur.",
      "4. giriş 2, deliller[2] içine konur.",
      "Bir int[] parametre alan void metot yaz. Metot dizinin bütün elemanlarını baştan sona, her birini ayrı satırda yazdırsın. Ana koddan bir kez çağır.",
      "Bu örneğin çıktısı: 4 / 7 / 2."
    ],
    "words": [
      [
        "int[] parametre",
        "Metoda tek bir sayı yerine dizinin tamamı gönderilir. Parametrenin Length özelliği eleman sayısını verir. İndeksler 0’dan başlar."
      ],
      [
        "Dizi paylaşılır",
        "Dizi parametresi aynı elemanlara erişir. Metotta d[i] değişirse çağıran kodda da değişir. Parametreye yeni dizi atamak ise çağıranın değişkenini değiştirmez."
      ],
      [
        "return ve void",
        "return bir sonucu çağırana verir. void sonuç değeri vermez. Ekrana yazmak için ayrıca Console.WriteLine çalışmalıdır."
      ]
    ],
    "lineHelp": {
      "1": "Bir giriş satırı okunur ve Convert.ToInt32 ile tam sayıya çevrilir. Bu görevde girişler geçerli sayılardır.",
      "2": "n elemanlı dizi oluşturulur. Başlangıçta bütün elemanları 0’dır.",
      "3": "Dizinin elemanları sırayla gezilir. Geçerli indeksler 0 ile Length - 1 arasındadır.",
      "4": "Bir giriş satırı okunur ve Convert.ToInt32 ile tam sayıya çevrilir. Bu görevde girişler geçerli sayılardır.",
      "5": "Bu satırdaki değer hesaplanır ve soldaki değişkende tutulur. Animasyondaki değerlerle karşılaştır.",
      "6": "Bu boş satır yalnızca kodu okumayı kolaylaştırır.",
      "7": "Bu metot tanımıdır. Parantezdeki d, çağrıda gönderilen diziyi alır. Gövde çağrı yapılınca çalışır.",
      "8": "Metodun veya bloğun başlangıcı.",
      "9": "Dizinin elemanları sırayla gezilir. Geçerli indeksler 0 ile Length - 1 arasındadır.",
      "10": "İçindeki değer şimdi konsola yeni bir satır olarak eklenir.",
      "11": "Metodun veya bloğun sonu."
    },
    "frames": [
      {
        "line": 0,
        "caption": "Arşiv görevi başlıyor. Önce sayı dizisini hazırlayacağız.",
        "phase": "ready",
        "active": -1,
        "metric": "Bekleniyor",
        "result": null,
        "method": "Yazdir",
        "array": [
          0,
          0,
          0
        ],
        "output": [],
        "vars": {
          "n": 3,
          "durum": "Bekleniyor"
        }
      },
      {
        "line": 1,
        "caption": "İlk giriş 3. n, dizinin eleman sayısıdır.",
        "phase": "read",
        "active": -1,
        "metric": "Bekleniyor",
        "result": null,
        "method": "Yazdir",
        "array": [
          0,
          0,
          0
        ],
        "output": [],
        "vars": {
          "n": 3,
          "durum": "Bekleniyor"
        }
      },
      {
        "line": 2,
        "caption": "3 elemanlı dizi oluşturulur. Elemanlar başlangıçta 0.",
        "phase": "allocate",
        "active": -1,
        "metric": "Bekleniyor",
        "result": null,
        "method": "Yazdir",
        "array": [
          0,
          0,
          0
        ],
        "output": [],
        "vars": {
          "n": 3,
          "durum": "Bekleniyor"
        }
      },
      {
        "line": 4,
        "caption": "Girdi 4, deliller[0] içine yerleşir.",
        "phase": "read",
        "active": 0,
        "metric": "Bekleniyor",
        "result": null,
        "method": "Yazdir",
        "array": [
          4,
          0,
          0
        ],
        "output": [],
        "vars": {
          "n": 3,
          "indeks": 0,
          "deger": 4,
          "durum": "Bekleniyor"
        }
      },
      {
        "line": 4,
        "caption": "Girdi 7, deliller[1] içine yerleşir.",
        "phase": "read",
        "active": 1,
        "metric": "Bekleniyor",
        "result": null,
        "method": "Yazdir",
        "array": [
          4,
          7,
          0
        ],
        "output": [],
        "vars": {
          "n": 3,
          "indeks": 1,
          "deger": 7,
          "durum": "Bekleniyor"
        }
      },
      {
        "line": 4,
        "caption": "Girdi 2, deliller[2] içine yerleşir.",
        "phase": "read",
        "active": 2,
        "metric": "Bekleniyor",
        "result": null,
        "method": "Yazdir",
        "array": [
          4,
          7,
          2
        ],
        "output": [],
        "vars": {
          "n": 3,
          "indeks": 2,
          "deger": 2,
          "durum": "Bekleniyor"
        }
      },
      {
        "line": 5,
        "caption": "Yazdir çağrısına dizinin tamamı gönderilir.",
        "phase": "call",
        "active": -1,
        "metric": "Bekleniyor",
        "result": null,
        "method": "Yazdir",
        "array": [
          4,
          7,
          2
        ],
        "output": [],
        "vars": {
          "n": 3,
          "durum": "Bekleniyor"
        }
      },
      {
        "line": 7,
        "caption": "Metodun d parametresi aynı dizi elemanlarına erişir.",
        "phase": "bind",
        "active": -1,
        "metric": "Bekleniyor",
        "result": null,
        "method": "Yazdir",
        "array": [
          4,
          7,
          2
        ],
        "output": [],
        "vars": {
          "n": 3,
          "durum": "Bekleniyor"
        }
      },
      {
        "line": 9,
        "caption": "Döngü indeksi 0. Bu eleman 4.",
        "phase": "inspect",
        "active": 0,
        "metric": "i = 0",
        "result": null,
        "method": "Yazdir",
        "array": [
          4,
          7,
          2
        ],
        "output": [],
        "vars": {
          "n": 3,
          "indeks": 0,
          "deger": 4,
          "durum": "i = 0"
        }
      },
      {
        "line": 10,
        "caption": "4 konsola eklenir.",
        "phase": "print",
        "active": 0,
        "metric": "i = 0",
        "result": null,
        "method": "Yazdir",
        "array": [
          4,
          7,
          2
        ],
        "output": [
          "4"
        ],
        "vars": {
          "n": 3,
          "indeks": 0,
          "deger": 4,
          "durum": "i = 0"
        },
        "print": 4
      },
      {
        "line": 9,
        "caption": "Döngü indeksi 1. Bu eleman 7.",
        "phase": "inspect",
        "active": 1,
        "metric": "i = 1",
        "result": null,
        "method": "Yazdir",
        "array": [
          4,
          7,
          2
        ],
        "output": [
          "4"
        ],
        "vars": {
          "n": 3,
          "indeks": 1,
          "deger": 7,
          "durum": "i = 1"
        }
      },
      {
        "line": 10,
        "caption": "7 konsola eklenir.",
        "phase": "print",
        "active": 1,
        "metric": "i = 1",
        "result": null,
        "method": "Yazdir",
        "array": [
          4,
          7,
          2
        ],
        "output": [
          "4",
          "7"
        ],
        "vars": {
          "n": 3,
          "indeks": 1,
          "deger": 7,
          "durum": "i = 1"
        },
        "print": 7
      },
      {
        "line": 9,
        "caption": "Döngü indeksi 2. Bu eleman 2.",
        "phase": "inspect",
        "active": 2,
        "metric": "i = 2",
        "result": null,
        "method": "Yazdir",
        "array": [
          4,
          7,
          2
        ],
        "output": [
          "4",
          "7"
        ],
        "vars": {
          "n": 3,
          "indeks": 2,
          "deger": 2,
          "durum": "i = 2"
        }
      },
      {
        "line": 10,
        "caption": "2 konsola eklenir.",
        "phase": "print",
        "active": 2,
        "metric": "i = 2",
        "result": null,
        "method": "Yazdir",
        "array": [
          4,
          7,
          2
        ],
        "output": [
          "4",
          "7",
          "2"
        ],
        "vars": {
          "n": 3,
          "indeks": 2,
          "deger": 2,
          "durum": "i = 2"
        },
        "print": 2
      },
      {
        "line": 5,
        "caption": "void metot bitti. Çağıran koda dönülür; sonuç değeri yok.",
        "phase": "finish",
        "active": -1,
        "metric": "i = 2",
        "result": null,
        "method": "Yazdir",
        "array": [
          4,
          7,
          2
        ],
        "output": [
          "4",
          "7",
          "2"
        ],
        "vars": {
          "n": 3,
          "durum": "i = 2"
        }
      }
    ]
  },
  {
    "id": "scale",
    "title": "Delil puanlarını tart",
    "theme": "amber",
    "themeName": "Kehribar",
    "color": "#f1c06e",
    "scene": "Delil terazisi",
    "kind": "ÜNİTE 3 / BİTİRME PROJESİ",
    "intro": "Arşivdeki delil terazisi seni bekliyor. Diziyi uygun araçla işle.",
    "goal": "Bir int[] parametre alan int metot yaz. Dizinin toplamını metotta hesapla ve return ile döndür. Ana kod sonucu yazsın.",
    "concept": "Delil terazisi · dizi ve metot birlikte",
    "rules": [
      "Önce n, sonra n tane tam sayı oku. Her giriş ayrı satırda.",
      "n 1–5 arasında, dizi değerleri -20 ile 20 arasında. ",
      "Metot ve değişken adlarını kendin seçebilirsin. İstenen dönüş ve parametre türlerini koru.",
      "Metotları ana kodun altında tanımla; using veya class ekleme. Hazır LINQ/Sum/Reverse kullanmadan öğrendiğin döngülerle çöz."
    ],
    "understand": [
      "Önce delil sayısı n, sonra n delil puanı. Başka giriş yok.",
      "Bir int[] parametre alan int metot yaz. Dizinin toplamını metotta hesapla ve return ile döndür. Ana kod sonucu yazsın.",
      "Toplam tek satırda. Negatif değerler de toplama katılır."
    ],
    "input": [
      "3",
      "4",
      "7",
      "-2"
    ],
    "output": [
      "9"
    ],
    "reference": "int n = Convert.ToInt32(Console.ReadLine());\nint[] deliller = new int[n];\nfor (int i = 0; i < n; i++)\n    deliller[i] = Convert.ToInt32(Console.ReadLine());\nConsole.WriteLine(Topla(deliller));\n\nstatic int Topla(int[] d)\n{\n    int toplam = 0;\n    foreach (int puan in d)\n        toplam += puan;\n    return toplam;\n}",
    "hint": "Diziyi metoda parametre olarak gönder. Döngü ve istenen işlem metodun içinde olsun.",
    "walkthrough": [
      "İlk giriş 3: 3 elemanlı dizi oluşturulur.",
      "2. giriş 4, deliller[0] içine konur.",
      "3. giriş 7, deliller[1] içine konur.",
      "4. giriş -2, deliller[2] içine konur.",
      "Bir int[] parametre alan int metot yaz. Dizinin toplamını metotta hesapla ve return ile döndür. Ana kod sonucu yazsın.",
      "Bu örneğin çıktısı: 9."
    ],
    "words": [
      [
        "int[] parametre",
        "Metoda tek bir sayı yerine dizinin tamamı gönderilir. Parametrenin Length özelliği eleman sayısını verir. İndeksler 0’dan başlar."
      ],
      [
        "Dizi paylaşılır",
        "Dizi parametresi aynı elemanlara erişir. Metotta d[i] değişirse çağıran kodda da değişir. Parametreye yeni dizi atamak ise çağıranın değişkenini değiştirmez."
      ],
      [
        "return ve void",
        "return bir sonucu çağırana verir. void sonuç değeri vermez. Ekrana yazmak için ayrıca Console.WriteLine çalışmalıdır."
      ]
    ],
    "lineHelp": {
      "1": "Bir giriş satırı okunur ve Convert.ToInt32 ile tam sayıya çevrilir. Bu görevde girişler geçerli sayılardır.",
      "2": "n elemanlı dizi oluşturulur. Başlangıçta bütün elemanları 0’dır.",
      "3": "Dizinin elemanları sırayla gezilir. Geçerli indeksler 0 ile Length - 1 arasındadır.",
      "4": "Bir giriş satırı okunur ve Convert.ToInt32 ile tam sayıya çevrilir. Bu görevde girişler geçerli sayılardır.",
      "5": "İçindeki değer şimdi konsola yeni bir satır olarak eklenir.",
      "6": "Bu boş satır yalnızca kodu okumayı kolaylaştırır.",
      "7": "Bu metot tanımıdır. Parantezdeki d, çağrıda gönderilen diziyi alır. Gövde çağrı yapılınca çalışır.",
      "8": "Metodun veya bloğun başlangıcı.",
      "9": "Bu satırdaki değer hesaplanır ve soldaki değişkende tutulur. Animasyondaki değerlerle karşılaştır.",
      "10": "Dizinin elemanları sırayla gezilir. Geçerli indeksler 0 ile Length - 1 arasındadır.",
      "11": "Sağdaki değer soldaki değişkene veya dizi elemanına eklenir.",
      "12": "İfade hesaplanır, sonuç çağıran yere geri verilir ve metot biter. Bu satır tek başına ekrana yazmaz.",
      "13": "Metodun veya bloğun sonu."
    },
    "frames": [
      {
        "line": 0,
        "caption": "Arşiv görevi başlıyor. Önce sayı dizisini hazırlayacağız.",
        "phase": "ready",
        "active": -1,
        "metric": "Bekleniyor",
        "result": null,
        "method": "Topla",
        "array": [
          0,
          0,
          0
        ],
        "output": [],
        "vars": {
          "n": 3,
          "durum": "Bekleniyor"
        }
      },
      {
        "line": 1,
        "caption": "İlk giriş 3. n, dizinin eleman sayısıdır.",
        "phase": "read",
        "active": -1,
        "metric": "Bekleniyor",
        "result": null,
        "method": "Topla",
        "array": [
          0,
          0,
          0
        ],
        "output": [],
        "vars": {
          "n": 3,
          "durum": "Bekleniyor"
        }
      },
      {
        "line": 2,
        "caption": "3 elemanlı dizi oluşturulur. Elemanlar başlangıçta 0.",
        "phase": "allocate",
        "active": -1,
        "metric": "Bekleniyor",
        "result": null,
        "method": "Topla",
        "array": [
          0,
          0,
          0
        ],
        "output": [],
        "vars": {
          "n": 3,
          "durum": "Bekleniyor"
        }
      },
      {
        "line": 4,
        "caption": "Girdi 4, deliller[0] içine yerleşir.",
        "phase": "read",
        "active": 0,
        "metric": "Bekleniyor",
        "result": null,
        "method": "Topla",
        "array": [
          4,
          0,
          0
        ],
        "output": [],
        "vars": {
          "n": 3,
          "indeks": 0,
          "deger": 4,
          "durum": "Bekleniyor"
        }
      },
      {
        "line": 4,
        "caption": "Girdi 7, deliller[1] içine yerleşir.",
        "phase": "read",
        "active": 1,
        "metric": "Bekleniyor",
        "result": null,
        "method": "Topla",
        "array": [
          4,
          7,
          0
        ],
        "output": [],
        "vars": {
          "n": 3,
          "indeks": 1,
          "deger": 7,
          "durum": "Bekleniyor"
        }
      },
      {
        "line": 4,
        "caption": "Girdi -2, deliller[2] içine yerleşir.",
        "phase": "read",
        "active": 2,
        "metric": "Bekleniyor",
        "result": null,
        "method": "Topla",
        "array": [
          4,
          7,
          -2
        ],
        "output": [],
        "vars": {
          "n": 3,
          "indeks": 2,
          "deger": -2,
          "durum": "Bekleniyor"
        }
      },
      {
        "line": 5,
        "caption": "Topla çağrısına dizinin tamamı gönderilir.",
        "phase": "call",
        "active": -1,
        "metric": "Bekleniyor",
        "result": null,
        "method": "Topla",
        "array": [
          4,
          7,
          -2
        ],
        "output": [],
        "vars": {
          "n": 3,
          "durum": "Bekleniyor"
        }
      },
      {
        "line": 7,
        "caption": "Metodun d parametresi aynı dizi elemanlarına erişir.",
        "phase": "bind",
        "active": -1,
        "metric": "Bekleniyor",
        "result": null,
        "method": "Topla",
        "array": [
          4,
          7,
          -2
        ],
        "output": [],
        "vars": {
          "n": 3,
          "durum": "Bekleniyor"
        }
      },
      {
        "line": 9,
        "caption": "Toplam 0 ile başlar.",
        "phase": "calculate",
        "active": -1,
        "metric": "toplam = 0",
        "result": null,
        "method": "Topla",
        "array": [
          4,
          7,
          -2
        ],
        "output": [],
        "vars": {
          "n": 3,
          "durum": "toplam = 0"
        }
      },
      {
        "line": 11,
        "caption": "0 + 4 = 4. Toplam güncellenir.",
        "phase": "inspect",
        "active": 0,
        "metric": "toplam = 4",
        "result": null,
        "method": "Topla",
        "array": [
          4,
          7,
          -2
        ],
        "output": [],
        "vars": {
          "n": 3,
          "indeks": 0,
          "deger": 4,
          "durum": "toplam = 4"
        }
      },
      {
        "line": 11,
        "caption": "4 + 7 = 11. Toplam güncellenir.",
        "phase": "inspect",
        "active": 1,
        "metric": "toplam = 11",
        "result": null,
        "method": "Topla",
        "array": [
          4,
          7,
          -2
        ],
        "output": [],
        "vars": {
          "n": 3,
          "indeks": 1,
          "deger": 7,
          "durum": "toplam = 11"
        }
      },
      {
        "line": 11,
        "caption": "11 + -2 = 9. Toplam güncellenir.",
        "phase": "inspect",
        "active": 2,
        "metric": "toplam = 9",
        "result": null,
        "method": "Topla",
        "array": [
          4,
          7,
          -2
        ],
        "output": [],
        "vars": {
          "n": 3,
          "indeks": 2,
          "deger": -2,
          "durum": "toplam = 9"
        }
      },
      {
        "line": 12,
        "caption": "9 değeri return ile ana koda döner. Konsol hâlâ değişmez.",
        "phase": "return",
        "active": -1,
        "metric": "toplam = 9",
        "result": 9,
        "method": "Topla",
        "array": [
          4,
          7,
          -2
        ],
        "output": [],
        "vars": {
          "n": 3,
          "durum": "toplam = 9"
        }
      },
      {
        "line": 5,
        "caption": "Ana kod dönen 9 sonucunu yazar.",
        "phase": "print",
        "active": -1,
        "metric": "toplam = 9",
        "result": 9,
        "method": "Topla",
        "array": [
          4,
          7,
          -2
        ],
        "output": [
          "9"
        ],
        "vars": {
          "n": 3,
          "durum": "toplam = 9"
        },
        "print": 9
      }
    ]
  },
  {
    "id": "level",
    "title": "Ortalama sinyal seviyesini bul",
    "theme": "blue",
    "themeName": "Gece mavisi",
    "color": "#8cbef3",
    "scene": "Sinyal seviyesi",
    "kind": "ÜNİTE 3 / BİTİRME PROJESİ",
    "intro": "Arşivdeki sinyal seviyesi seni bekliyor. Diziyi uygun araçla işle.",
    "goal": "Bir int[] parametre alan double metot yaz. Toplamı eleman sayısına bölerek ortalamayı döndür. Kesirli kısmı kaybetme. Ana kod sonucu yazsın.",
    "concept": "Sinyal seviyesi · dizi ve metot birlikte",
    "rules": [
      "Önce n, sonra n tane tam sayı oku. Her giriş ayrı satırda.",
      "n 1–5 arasında, dizi değerleri -20 ile 20 arasında. ",
      "Metot ve değişken adlarını kendin seçebilirsin. İstenen dönüş ve parametre türlerini koru.",
      "Metotları ana kodun altında tanımla; using veya class ekleme. Hazır LINQ/Sum/Reverse kullanmadan öğrendiğin döngülerle çöz."
    ],
    "understand": [
      "Önce delil sayısı n, sonra n delil puanı. Başka giriş yok.",
      "Bir int[] parametre alan double metot yaz. Toplamı eleman sayısına bölerek ortalamayı döndür. Kesirli kısmı kaybetme. Ana kod sonucu yazsın.",
      "Ortalama tek satırda. Ondalık ayırıcı nokta; örnekte 5 ve 8 için 6.5. Yuvarlama yapma."
    ],
    "input": [
      "2",
      "5",
      "8"
    ],
    "output": [
      "6.5"
    ],
    "reference": "int n = Convert.ToInt32(Console.ReadLine());\nint[] deliller = new int[n];\nfor (int i = 0; i < n; i++)\n    deliller[i] = Convert.ToInt32(Console.ReadLine());\nConsole.WriteLine(Ortalama(deliller));\n\nstatic double Ortalama(int[] d)\n{\n    int toplam = 0;\n    foreach (int puan in d)\n        toplam += puan;\n    return (double)toplam / d.Length;\n}",
    "hint": "Bölmeden önce toplamı (double) ile dönüştür. int / int kesirli kısmı kaybeder.",
    "walkthrough": [
      "İlk giriş 2: 2 elemanlı dizi oluşturulur.",
      "2. giriş 5, deliller[0] içine konur.",
      "3. giriş 8, deliller[1] içine konur.",
      "Bir int[] parametre alan double metot yaz. Toplamı eleman sayısına bölerek ortalamayı döndür. Kesirli kısmı kaybetme. Ana kod sonucu yazsın.",
      "Bu örneğin çıktısı: 6.5."
    ],
    "words": [
      [
        "int[] parametre",
        "Metoda tek bir sayı yerine dizinin tamamı gönderilir. Parametrenin Length özelliği eleman sayısını verir. İndeksler 0’dan başlar."
      ],
      [
        "Dizi paylaşılır",
        "Dizi parametresi aynı elemanlara erişir. Metotta d[i] değişirse çağıran kodda da değişir. Parametreye yeni dizi atamak ise çağıranın değişkenini değiştirmez."
      ],
      [
        "return ve void",
        "return bir sonucu çağırana verir. void sonuç değeri vermez. Ekrana yazmak için ayrıca Console.WriteLine çalışmalıdır."
      ]
    ],
    "lineHelp": {
      "1": "Bir giriş satırı okunur ve Convert.ToInt32 ile tam sayıya çevrilir. Bu görevde girişler geçerli sayılardır.",
      "2": "n elemanlı dizi oluşturulur. Başlangıçta bütün elemanları 0’dır.",
      "3": "Dizinin elemanları sırayla gezilir. Geçerli indeksler 0 ile Length - 1 arasındadır.",
      "4": "Bir giriş satırı okunur ve Convert.ToInt32 ile tam sayıya çevrilir. Bu görevde girişler geçerli sayılardır.",
      "5": "İçindeki değer şimdi konsola yeni bir satır olarak eklenir.",
      "6": "Bu boş satır yalnızca kodu okumayı kolaylaştırır.",
      "7": "Bu metot tanımıdır. Parantezdeki d, çağrıda gönderilen diziyi alır. Gövde çağrı yapılınca çalışır.",
      "8": "Metodun veya bloğun başlangıcı.",
      "9": "Bu satırdaki değer hesaplanır ve soldaki değişkende tutulur. Animasyondaki değerlerle karşılaştır.",
      "10": "Dizinin elemanları sırayla gezilir. Geçerli indeksler 0 ile Length - 1 arasındadır.",
      "11": "Sağdaki değer soldaki değişkene veya dizi elemanına eklenir.",
      "12": "İfade hesaplanır, sonuç çağıran yere geri verilir ve metot biter. Bu satır tek başına ekrana yazmaz.",
      "13": "Metodun veya bloğun sonu."
    },
    "frames": [
      {
        "line": 0,
        "caption": "Arşiv görevi başlıyor. Önce sayı dizisini hazırlayacağız.",
        "phase": "ready",
        "active": -1,
        "metric": "Bekleniyor",
        "result": null,
        "method": "Ortalama",
        "array": [
          0,
          0
        ],
        "output": [],
        "vars": {
          "n": 2,
          "durum": "Bekleniyor"
        }
      },
      {
        "line": 1,
        "caption": "İlk giriş 2. n, dizinin eleman sayısıdır.",
        "phase": "read",
        "active": -1,
        "metric": "Bekleniyor",
        "result": null,
        "method": "Ortalama",
        "array": [
          0,
          0
        ],
        "output": [],
        "vars": {
          "n": 2,
          "durum": "Bekleniyor"
        }
      },
      {
        "line": 2,
        "caption": "2 elemanlı dizi oluşturulur. Elemanlar başlangıçta 0.",
        "phase": "allocate",
        "active": -1,
        "metric": "Bekleniyor",
        "result": null,
        "method": "Ortalama",
        "array": [
          0,
          0
        ],
        "output": [],
        "vars": {
          "n": 2,
          "durum": "Bekleniyor"
        }
      },
      {
        "line": 4,
        "caption": "Girdi 5, deliller[0] içine yerleşir.",
        "phase": "read",
        "active": 0,
        "metric": "Bekleniyor",
        "result": null,
        "method": "Ortalama",
        "array": [
          5,
          0
        ],
        "output": [],
        "vars": {
          "n": 2,
          "indeks": 0,
          "deger": 5,
          "durum": "Bekleniyor"
        }
      },
      {
        "line": 4,
        "caption": "Girdi 8, deliller[1] içine yerleşir.",
        "phase": "read",
        "active": 1,
        "metric": "Bekleniyor",
        "result": null,
        "method": "Ortalama",
        "array": [
          5,
          8
        ],
        "output": [],
        "vars": {
          "n": 2,
          "indeks": 1,
          "deger": 8,
          "durum": "Bekleniyor"
        }
      },
      {
        "line": 5,
        "caption": "Ortalama çağrısına dizinin tamamı gönderilir.",
        "phase": "call",
        "active": -1,
        "metric": "Bekleniyor",
        "result": null,
        "method": "Ortalama",
        "array": [
          5,
          8
        ],
        "output": [],
        "vars": {
          "n": 2,
          "durum": "Bekleniyor"
        }
      },
      {
        "line": 7,
        "caption": "Metodun d parametresi aynı dizi elemanlarına erişir.",
        "phase": "bind",
        "active": -1,
        "metric": "Bekleniyor",
        "result": null,
        "method": "Ortalama",
        "array": [
          5,
          8
        ],
        "output": [],
        "vars": {
          "n": 2,
          "durum": "Bekleniyor"
        }
      },
      {
        "line": 9,
        "caption": "Toplam 0 ile başlar.",
        "phase": "calculate",
        "active": -1,
        "metric": "toplam = 0",
        "result": null,
        "method": "Ortalama",
        "array": [
          5,
          8
        ],
        "output": [],
        "vars": {
          "n": 2,
          "durum": "toplam = 0"
        }
      },
      {
        "line": 11,
        "caption": "0 + 5 = 5. Toplam güncellenir.",
        "phase": "inspect",
        "active": 0,
        "metric": "toplam = 5",
        "result": null,
        "method": "Ortalama",
        "array": [
          5,
          8
        ],
        "output": [],
        "vars": {
          "n": 2,
          "indeks": 0,
          "deger": 5,
          "durum": "toplam = 5"
        }
      },
      {
        "line": 11,
        "caption": "5 + 8 = 13. Toplam güncellenir.",
        "phase": "inspect",
        "active": 1,
        "metric": "toplam = 13",
        "result": null,
        "method": "Ortalama",
        "array": [
          5,
          8
        ],
        "output": [],
        "vars": {
          "n": 2,
          "indeks": 1,
          "deger": 8,
          "durum": "toplam = 13"
        }
      },
      {
        "line": 12,
        "caption": "(double) dönüşümü kesirli sonucu korur: 13 / 2 = 6.5.",
        "phase": "calculate",
        "active": 1,
        "metric": "ortalama = 6.5",
        "result": 6.5,
        "method": "Ortalama",
        "array": [
          5,
          8
        ],
        "output": [],
        "vars": {
          "n": 2,
          "indeks": 1,
          "deger": 8,
          "durum": "ortalama = 6.5"
        }
      },
      {
        "line": 12,
        "caption": "6.5 değeri return ile ana koda döner. Konsol hâlâ değişmez.",
        "phase": "return",
        "active": -1,
        "metric": "ortalama = 6.5",
        "result": 6.5,
        "method": "Ortalama",
        "array": [
          5,
          8
        ],
        "output": [],
        "vars": {
          "n": 2,
          "durum": "ortalama = 6.5"
        }
      },
      {
        "line": 5,
        "caption": "Ana kod dönen 6.5 sonucunu yazar.",
        "phase": "print",
        "active": -1,
        "metric": "ortalama = 6.5",
        "result": 6.5,
        "method": "Ortalama",
        "array": [
          5,
          8
        ],
        "output": [
          "6.5"
        ],
        "vars": {
          "n": 2,
          "durum": "ortalama = 6.5"
        },
        "print": 6.5
      }
    ]
  },
  {
    "id": "antenna",
    "title": "En güçlü izi yakala",
    "theme": "violet",
    "themeName": "Mor",
    "color": "#c3a5f2",
    "scene": "Çatı anteni",
    "kind": "ÜNİTE 3 / BİTİRME PROJESİ",
    "intro": "Arşivdeki çatı anteni seni bekliyor. Diziyi uygun araçla işle.",
    "goal": "Bir int[] parametre alan int metot yaz. Dizinin en büyük elemanını döndür. Bütün değerler negatifken de çalışsın. Ana kod sonucu yazsın.",
    "concept": "Çatı anteni · dizi ve metot birlikte",
    "rules": [
      "Önce n, sonra n tane tam sayı oku. Her giriş ayrı satırda.",
      "n 1–5 arasında, dizi değerleri -20 ile 20 arasında. ",
      "Metot ve değişken adlarını kendin seçebilirsin. İstenen dönüş ve parametre türlerini koru.",
      "Metotları ana kodun altında tanımla; using veya class ekleme. Hazır LINQ/Sum/Reverse kullanmadan öğrendiğin döngülerle çöz."
    ],
    "understand": [
      "Önce delil sayısı n, sonra n delil puanı. Başka giriş yok.",
      "Bir int[] parametre alan int metot yaz. Dizinin en büyük elemanını döndür. Bütün değerler negatifken de çalışsın. Ana kod sonucu yazsın.",
      "En büyük değer tek satırda. Dizi en az bir elemanlı."
    ],
    "input": [
      "3",
      "-4",
      "-1",
      "-7"
    ],
    "output": [
      "-1"
    ],
    "reference": "int n = Convert.ToInt32(Console.ReadLine());\nint[] deliller = new int[n];\nfor (int i = 0; i < n; i++)\n    deliller[i] = Convert.ToInt32(Console.ReadLine());\nConsole.WriteLine(EnBuyuk(deliller));\n\nstatic int EnBuyuk(int[] d)\n{\n    int en = d[0];\n    for (int i = 1; i < d.Length; i++)\n        if (d[i] > en)\n            en = d[i];\n    return en;\n}",
    "hint": "en değerini 0 değil ilk elemanla başlat; bütün puanlar negatif olabilir.",
    "walkthrough": [
      "İlk giriş 3: 3 elemanlı dizi oluşturulur.",
      "2. giriş -4, deliller[0] içine konur.",
      "3. giriş -1, deliller[1] içine konur.",
      "4. giriş -7, deliller[2] içine konur.",
      "Bir int[] parametre alan int metot yaz. Dizinin en büyük elemanını döndür. Bütün değerler negatifken de çalışsın. Ana kod sonucu yazsın.",
      "Bu örneğin çıktısı: -1."
    ],
    "words": [
      [
        "int[] parametre",
        "Metoda tek bir sayı yerine dizinin tamamı gönderilir. Parametrenin Length özelliği eleman sayısını verir. İndeksler 0’dan başlar."
      ],
      [
        "Dizi paylaşılır",
        "Dizi parametresi aynı elemanlara erişir. Metotta d[i] değişirse çağıran kodda da değişir. Parametreye yeni dizi atamak ise çağıranın değişkenini değiştirmez."
      ],
      [
        "return ve void",
        "return bir sonucu çağırana verir. void sonuç değeri vermez. Ekrana yazmak için ayrıca Console.WriteLine çalışmalıdır."
      ]
    ],
    "lineHelp": {
      "1": "Bir giriş satırı okunur ve Convert.ToInt32 ile tam sayıya çevrilir. Bu görevde girişler geçerli sayılardır.",
      "2": "n elemanlı dizi oluşturulur. Başlangıçta bütün elemanları 0’dır.",
      "3": "Dizinin elemanları sırayla gezilir. Geçerli indeksler 0 ile Length - 1 arasındadır.",
      "4": "Bir giriş satırı okunur ve Convert.ToInt32 ile tam sayıya çevrilir. Bu görevde girişler geçerli sayılardır.",
      "5": "İçindeki değer şimdi konsola yeni bir satır olarak eklenir.",
      "6": "Bu boş satır yalnızca kodu okumayı kolaylaştırır.",
      "7": "Bu metot tanımıdır. Parantezdeki d, çağrıda gönderilen diziyi alır. Gövde çağrı yapılınca çalışır.",
      "8": "Metodun veya bloğun başlangıcı.",
      "9": "Bu satırdaki değer hesaplanır ve soldaki değişkende tutulur. Animasyondaki değerlerle karşılaştır.",
      "10": "Dizinin elemanları sırayla gezilir. Geçerli indeksler 0 ile Length - 1 arasındadır.",
      "11": "Koşul doğruysa altındaki satır çalışır; yanlışsa o satır atlanır.",
      "12": "Bu satırdaki değer hesaplanır ve soldaki değişkende tutulur. Animasyondaki değerlerle karşılaştır.",
      "13": "İfade hesaplanır, sonuç çağıran yere geri verilir ve metot biter. Bu satır tek başına ekrana yazmaz.",
      "14": "Metodun veya bloğun sonu."
    },
    "frames": [
      {
        "line": 0,
        "caption": "Arşiv görevi başlıyor. Önce sayı dizisini hazırlayacağız.",
        "phase": "ready",
        "active": -1,
        "metric": "Bekleniyor",
        "result": null,
        "method": "EnBuyuk",
        "array": [
          0,
          0,
          0
        ],
        "output": [],
        "vars": {
          "n": 3,
          "durum": "Bekleniyor"
        }
      },
      {
        "line": 1,
        "caption": "İlk giriş 3. n, dizinin eleman sayısıdır.",
        "phase": "read",
        "active": -1,
        "metric": "Bekleniyor",
        "result": null,
        "method": "EnBuyuk",
        "array": [
          0,
          0,
          0
        ],
        "output": [],
        "vars": {
          "n": 3,
          "durum": "Bekleniyor"
        }
      },
      {
        "line": 2,
        "caption": "3 elemanlı dizi oluşturulur. Elemanlar başlangıçta 0.",
        "phase": "allocate",
        "active": -1,
        "metric": "Bekleniyor",
        "result": null,
        "method": "EnBuyuk",
        "array": [
          0,
          0,
          0
        ],
        "output": [],
        "vars": {
          "n": 3,
          "durum": "Bekleniyor"
        }
      },
      {
        "line": 4,
        "caption": "Girdi -4, deliller[0] içine yerleşir.",
        "phase": "read",
        "active": 0,
        "metric": "Bekleniyor",
        "result": null,
        "method": "EnBuyuk",
        "array": [
          -4,
          0,
          0
        ],
        "output": [],
        "vars": {
          "n": 3,
          "indeks": 0,
          "deger": -4,
          "durum": "Bekleniyor"
        }
      },
      {
        "line": 4,
        "caption": "Girdi -1, deliller[1] içine yerleşir.",
        "phase": "read",
        "active": 1,
        "metric": "Bekleniyor",
        "result": null,
        "method": "EnBuyuk",
        "array": [
          -4,
          -1,
          0
        ],
        "output": [],
        "vars": {
          "n": 3,
          "indeks": 1,
          "deger": -1,
          "durum": "Bekleniyor"
        }
      },
      {
        "line": 4,
        "caption": "Girdi -7, deliller[2] içine yerleşir.",
        "phase": "read",
        "active": 2,
        "metric": "Bekleniyor",
        "result": null,
        "method": "EnBuyuk",
        "array": [
          -4,
          -1,
          -7
        ],
        "output": [],
        "vars": {
          "n": 3,
          "indeks": 2,
          "deger": -7,
          "durum": "Bekleniyor"
        }
      },
      {
        "line": 5,
        "caption": "EnBuyuk çağrısına dizinin tamamı gönderilir.",
        "phase": "call",
        "active": -1,
        "metric": "Bekleniyor",
        "result": null,
        "method": "EnBuyuk",
        "array": [
          -4,
          -1,
          -7
        ],
        "output": [],
        "vars": {
          "n": 3,
          "durum": "Bekleniyor"
        }
      },
      {
        "line": 7,
        "caption": "Metodun d parametresi aynı dizi elemanlarına erişir.",
        "phase": "bind",
        "active": -1,
        "metric": "Bekleniyor",
        "result": null,
        "method": "EnBuyuk",
        "array": [
          -4,
          -1,
          -7
        ],
        "output": [],
        "vars": {
          "n": 3,
          "durum": "Bekleniyor"
        }
      },
      {
        "line": 9,
        "caption": "en, ilk eleman -4 ile başlar. 0 ile başlamak burada yanlış olur.",
        "phase": "inspect",
        "active": 0,
        "metric": "en = -4",
        "result": null,
        "method": "EnBuyuk",
        "array": [
          -4,
          -1,
          -7
        ],
        "output": [],
        "vars": {
          "n": 3,
          "indeks": 0,
          "deger": -4,
          "durum": "en = -4"
        }
      },
      {
        "line": 11,
        "caption": "-1 > -4 → true.",
        "phase": "inspect",
        "active": 1,
        "metric": "en = -4",
        "result": null,
        "method": "EnBuyuk",
        "array": [
          -4,
          -1,
          -7
        ],
        "output": [],
        "vars": {
          "n": 3,
          "indeks": 1,
          "deger": -1,
          "durum": "en = -4"
        }
      },
      {
        "line": 12,
        "caption": "Daha güçlü değer bulundu; en = -1.",
        "phase": "inspect",
        "active": 1,
        "metric": "en = -1",
        "result": null,
        "method": "EnBuyuk",
        "array": [
          -4,
          -1,
          -7
        ],
        "output": [],
        "vars": {
          "n": 3,
          "indeks": 1,
          "deger": -1,
          "durum": "en = -1"
        }
      },
      {
        "line": 11,
        "caption": "-7 > -1 → false.",
        "phase": "inspect",
        "active": 2,
        "metric": "en = -1",
        "result": null,
        "method": "EnBuyuk",
        "array": [
          -4,
          -1,
          -7
        ],
        "output": [],
        "vars": {
          "n": 3,
          "indeks": 2,
          "deger": -7,
          "durum": "en = -1"
        }
      },
      {
        "line": 13,
        "caption": "-1 değeri geri döner.",
        "phase": "return",
        "active": -1,
        "metric": "en = -1",
        "result": -1,
        "method": "EnBuyuk",
        "array": [
          -4,
          -1,
          -7
        ],
        "output": [],
        "vars": {
          "n": 3,
          "durum": "en = -1"
        }
      },
      {
        "line": 5,
        "caption": "Ana kod -1 yazar.",
        "phase": "print",
        "active": -1,
        "metric": "en = -1",
        "result": -1,
        "method": "EnBuyuk",
        "array": [
          -4,
          -1,
          -7
        ],
        "output": [
          "-1"
        ],
        "vars": {
          "n": 3,
          "durum": "en = -1"
        },
        "print": -1
      }
    ]
  },
  {
    "id": "gate",
    "title": "Eşiği geçen delilleri say",
    "theme": "orange",
    "themeName": "Bakır turuncu",
    "color": "#f0ae7d",
    "scene": "Kontrol kapısı",
    "kind": "ÜNİTE 3 / BİTİRME PROJESİ",
    "intro": "Arşivdeki kontrol kapısı seni bekliyor. Diziyi uygun araçla işle.",
    "goal": "Bir int[] ve bir int eşik alan int metot yaz. Eşiğe eşit veya büyük elemanları sayıp döndür. Ana kod sayıyı yazsın.",
    "concept": "Kontrol kapısı · dizi ve metot birlikte",
    "rules": [
      "Önce n, sonra n tane tam sayı oku. Her giriş ayrı satırda.",
      "n 1–5 arasında, dizi değerleri -20 ile 20 arasında. Son satırdaki esik de -20 ile 20 arasında.",
      "Metot ve değişken adlarını kendin seçebilirsin. İstenen dönüş ve parametre türlerini koru.",
      "Metotları ana kodun altında tanımla; using veya class ekleme. Hazır LINQ/Sum/Reverse kullanmadan öğrendiğin döngülerle çöz."
    ],
    "understand": [
      "Önce delil sayısı n, sonra n delil puanı. En son esik değeri.",
      "Bir int[] ve bir int eşik alan int metot yaz. Eşiğe eşit veya büyük elemanları sayıp döndür. Ana kod sayıyı yazsın.",
      "Uygun delil sayısı tek satırda. Eşiğe eşit değerler de sayılır."
    ],
    "input": [
      "4",
      "3",
      "5",
      "8",
      "1",
      "5"
    ],
    "output": [
      "2"
    ],
    "reference": "int n = Convert.ToInt32(Console.ReadLine());\nint[] deliller = new int[n];\nfor (int i = 0; i < n; i++)\n    deliller[i] = Convert.ToInt32(Console.ReadLine());\nint esik = Convert.ToInt32(Console.ReadLine());\nConsole.WriteLine(Say(deliller, esik));\n\nstatic int Say(int[] d, int esik)\n{\n    int adet = 0;\n    foreach (int puan in d)\n        if (puan >= esik)\n            adet++;\n    return adet;\n}",
    "hint": "Diziyi metoda parametre olarak gönder. Döngü ve istenen işlem metodun içinde olsun.",
    "walkthrough": [
      "İlk giriş 4: 4 elemanlı dizi oluşturulur.",
      "2. giriş 3, deliller[0] içine konur.",
      "3. giriş 5, deliller[1] içine konur.",
      "4. giriş 8, deliller[2] içine konur.",
      "5. giriş 1, deliller[3] içine konur.",
      "Son giriş 5, esik değişkenine alınır.",
      "Bir int[] ve bir int eşik alan int metot yaz. Eşiğe eşit veya büyük elemanları sayıp döndür. Ana kod sayıyı yazsın.",
      "Bu örneğin çıktısı: 2."
    ],
    "words": [
      [
        "int[] parametre",
        "Metoda tek bir sayı yerine dizinin tamamı gönderilir. Parametrenin Length özelliği eleman sayısını verir. İndeksler 0’dan başlar."
      ],
      [
        "Dizi paylaşılır",
        "Dizi parametresi aynı elemanlara erişir. Metotta d[i] değişirse çağıran kodda da değişir. Parametreye yeni dizi atamak ise çağıranın değişkenini değiştirmez."
      ],
      [
        "return ve void",
        "return bir sonucu çağırana verir. void sonuç değeri vermez. Ekrana yazmak için ayrıca Console.WriteLine çalışmalıdır."
      ]
    ],
    "lineHelp": {
      "1": "Bir giriş satırı okunur ve Convert.ToInt32 ile tam sayıya çevrilir. Bu görevde girişler geçerli sayılardır.",
      "2": "n elemanlı dizi oluşturulur. Başlangıçta bütün elemanları 0’dır.",
      "3": "Dizinin elemanları sırayla gezilir. Geçerli indeksler 0 ile Length - 1 arasındadır.",
      "4": "Bir giriş satırı okunur ve Convert.ToInt32 ile tam sayıya çevrilir. Bu görevde girişler geçerli sayılardır.",
      "5": "Bir giriş satırı okunur ve Convert.ToInt32 ile tam sayıya çevrilir. Bu görevde girişler geçerli sayılardır.",
      "6": "İçindeki değer şimdi konsola yeni bir satır olarak eklenir.",
      "7": "Bu boş satır yalnızca kodu okumayı kolaylaştırır.",
      "8": "Bu metot tanımıdır. Parantezdeki d, çağrıda gönderilen diziyi alır. Gövde çağrı yapılınca çalışır.",
      "9": "Metodun veya bloğun başlangıcı.",
      "10": "Bu satırdaki değer hesaplanır ve soldaki değişkende tutulur. Animasyondaki değerlerle karşılaştır.",
      "11": "Dizinin elemanları sırayla gezilir. Geçerli indeksler 0 ile Length - 1 arasındadır.",
      "12": "Koşul doğruysa altındaki satır çalışır; yanlışsa o satır atlanır.",
      "13": "Sayaç 1 artırılır.",
      "14": "İfade hesaplanır, sonuç çağıran yere geri verilir ve metot biter. Bu satır tek başına ekrana yazmaz.",
      "15": "Metodun veya bloğun sonu."
    },
    "frames": [
      {
        "line": 0,
        "caption": "Arşiv görevi başlıyor. Önce sayı dizisini hazırlayacağız.",
        "phase": "ready",
        "active": -1,
        "metric": "Bekleniyor",
        "result": null,
        "method": "Say",
        "array": [
          0,
          0,
          0,
          0
        ],
        "output": [],
        "vars": {
          "n": 4,
          "esik": 5,
          "durum": "Bekleniyor"
        }
      },
      {
        "line": 1,
        "caption": "İlk giriş 4. n, dizinin eleman sayısıdır.",
        "phase": "read",
        "active": -1,
        "metric": "Bekleniyor",
        "result": null,
        "method": "Say",
        "array": [
          0,
          0,
          0,
          0
        ],
        "output": [],
        "vars": {
          "n": 4,
          "esik": 5,
          "durum": "Bekleniyor"
        }
      },
      {
        "line": 2,
        "caption": "4 elemanlı dizi oluşturulur. Elemanlar başlangıçta 0.",
        "phase": "allocate",
        "active": -1,
        "metric": "Bekleniyor",
        "result": null,
        "method": "Say",
        "array": [
          0,
          0,
          0,
          0
        ],
        "output": [],
        "vars": {
          "n": 4,
          "esik": 5,
          "durum": "Bekleniyor"
        }
      },
      {
        "line": 4,
        "caption": "Girdi 3, deliller[0] içine yerleşir.",
        "phase": "read",
        "active": 0,
        "metric": "Bekleniyor",
        "result": null,
        "method": "Say",
        "array": [
          3,
          0,
          0,
          0
        ],
        "output": [],
        "vars": {
          "n": 4,
          "esik": 5,
          "indeks": 0,
          "deger": 3,
          "durum": "Bekleniyor"
        }
      },
      {
        "line": 4,
        "caption": "Girdi 5, deliller[1] içine yerleşir.",
        "phase": "read",
        "active": 1,
        "metric": "Bekleniyor",
        "result": null,
        "method": "Say",
        "array": [
          3,
          5,
          0,
          0
        ],
        "output": [],
        "vars": {
          "n": 4,
          "esik": 5,
          "indeks": 1,
          "deger": 5,
          "durum": "Bekleniyor"
        }
      },
      {
        "line": 4,
        "caption": "Girdi 8, deliller[2] içine yerleşir.",
        "phase": "read",
        "active": 2,
        "metric": "Bekleniyor",
        "result": null,
        "method": "Say",
        "array": [
          3,
          5,
          8,
          0
        ],
        "output": [],
        "vars": {
          "n": 4,
          "esik": 5,
          "indeks": 2,
          "deger": 8,
          "durum": "Bekleniyor"
        }
      },
      {
        "line": 4,
        "caption": "Girdi 1, deliller[3] içine yerleşir.",
        "phase": "read",
        "active": 3,
        "metric": "Bekleniyor",
        "result": null,
        "method": "Say",
        "array": [
          3,
          5,
          8,
          1
        ],
        "output": [],
        "vars": {
          "n": 4,
          "esik": 5,
          "indeks": 3,
          "deger": 1,
          "durum": "Bekleniyor"
        }
      },
      {
        "line": 5,
        "caption": "Son giriş 5, esik değişkenine alınır.",
        "phase": "read",
        "active": -1,
        "metric": "Bekleniyor",
        "result": null,
        "method": "Say",
        "array": [
          3,
          5,
          8,
          1
        ],
        "output": [],
        "vars": {
          "n": 4,
          "esik": 5,
          "durum": "Bekleniyor"
        }
      },
      {
        "line": 6,
        "caption": "Say çağrısına dizinin tamamı gönderilir.",
        "phase": "call",
        "active": -1,
        "metric": "Bekleniyor",
        "result": null,
        "method": "Say",
        "array": [
          3,
          5,
          8,
          1
        ],
        "output": [],
        "vars": {
          "n": 4,
          "esik": 5,
          "durum": "Bekleniyor"
        }
      },
      {
        "line": 8,
        "caption": "Metodun d parametresi aynı dizi elemanlarına erişir.",
        "phase": "bind",
        "active": -1,
        "metric": "Bekleniyor",
        "result": null,
        "method": "Say",
        "array": [
          3,
          5,
          8,
          1
        ],
        "output": [],
        "vars": {
          "n": 4,
          "esik": 5,
          "durum": "Bekleniyor"
        }
      },
      {
        "line": 10,
        "caption": "Uygun delil sayısı 0 ile başlar.",
        "phase": "bind",
        "active": -1,
        "metric": "adet = 0",
        "result": null,
        "method": "Say",
        "array": [
          3,
          5,
          8,
          1
        ],
        "output": [],
        "vars": {
          "n": 4,
          "esik": 5,
          "durum": "adet = 0"
        }
      },
      {
        "line": 12,
        "caption": "3 >= 5 → false. Eşitlik de kabul edilir.",
        "phase": "inspect",
        "active": 0,
        "metric": "adet = 0",
        "result": null,
        "method": "Say",
        "array": [
          3,
          5,
          8,
          1
        ],
        "output": [],
        "vars": {
          "n": 4,
          "esik": 5,
          "indeks": 0,
          "deger": 3,
          "durum": "adet = 0"
        }
      },
      {
        "line": 12,
        "caption": "5 >= 5 → true. Eşitlik de kabul edilir.",
        "phase": "inspect",
        "active": 1,
        "metric": "adet = 0",
        "result": null,
        "method": "Say",
        "array": [
          3,
          5,
          8,
          1
        ],
        "output": [],
        "vars": {
          "n": 4,
          "esik": 5,
          "indeks": 1,
          "deger": 5,
          "durum": "adet = 0"
        }
      },
      {
        "line": 13,
        "caption": "Uygun eleman bulundu. adet 1 artar.",
        "phase": "inspect",
        "active": 1,
        "metric": "adet = 1",
        "result": null,
        "method": "Say",
        "array": [
          3,
          5,
          8,
          1
        ],
        "output": [],
        "vars": {
          "n": 4,
          "esik": 5,
          "indeks": 1,
          "deger": 5,
          "durum": "adet = 1"
        }
      },
      {
        "line": 12,
        "caption": "8 >= 5 → true. Eşitlik de kabul edilir.",
        "phase": "inspect",
        "active": 2,
        "metric": "adet = 1",
        "result": null,
        "method": "Say",
        "array": [
          3,
          5,
          8,
          1
        ],
        "output": [],
        "vars": {
          "n": 4,
          "esik": 5,
          "indeks": 2,
          "deger": 8,
          "durum": "adet = 1"
        }
      },
      {
        "line": 13,
        "caption": "Uygun eleman bulundu. adet 1 artar.",
        "phase": "inspect",
        "active": 2,
        "metric": "adet = 2",
        "result": null,
        "method": "Say",
        "array": [
          3,
          5,
          8,
          1
        ],
        "output": [],
        "vars": {
          "n": 4,
          "esik": 5,
          "indeks": 2,
          "deger": 8,
          "durum": "adet = 2"
        }
      },
      {
        "line": 12,
        "caption": "1 >= 5 → false. Eşitlik de kabul edilir.",
        "phase": "inspect",
        "active": 3,
        "metric": "adet = 2",
        "result": null,
        "method": "Say",
        "array": [
          3,
          5,
          8,
          1
        ],
        "output": [],
        "vars": {
          "n": 4,
          "esik": 5,
          "indeks": 3,
          "deger": 1,
          "durum": "adet = 2"
        }
      },
      {
        "line": 14,
        "caption": "2 sayısı döndürülür.",
        "phase": "return",
        "active": -1,
        "metric": "adet = 2",
        "result": 2,
        "method": "Say",
        "array": [
          3,
          5,
          8,
          1
        ],
        "output": [],
        "vars": {
          "n": 4,
          "esik": 5,
          "durum": "adet = 2"
        }
      },
      {
        "line": 6,
        "caption": "Ana kod 2 yazar.",
        "phase": "print",
        "active": -1,
        "metric": "adet = 2",
        "result": 2,
        "method": "Say",
        "array": [
          3,
          5,
          8,
          1
        ],
        "output": [
          "2"
        ],
        "vars": {
          "n": 4,
          "esik": 5,
          "durum": "adet = 2"
        },
        "print": 2
      }
    ]
  },
  {
    "id": "radar",
    "title": "Aranan delilin ilk yerini bul",
    "theme": "cyan",
    "themeName": "Buz mavisi",
    "color": "#83dcec",
    "scene": "Arama radarı",
    "kind": "ÜNİTE 3 / BİTİRME PROJESİ",
    "intro": "Arşivdeki arama radarı seni bekliyor. Diziyi uygun araçla işle.",
    "goal": "Bir int[] ve bir int hedef alan int metot yaz. Hedefin ilk bulunduğu indeksi döndür. Hiç yoksa -1 döndür. Ana kod sonucu yazsın.",
    "concept": "Arama radarı · dizi ve metot birlikte",
    "rules": [
      "Önce n, sonra n tane tam sayı oku. Her giriş ayrı satırda.",
      "n 1–5 arasında, dizi değerleri -20 ile 20 arasında. Son satırdaki hedef de -20 ile 20 arasında.",
      "Metot ve değişken adlarını kendin seçebilirsin. İstenen dönüş ve parametre türlerini koru.",
      "Metotları ana kodun altında tanımla; using veya class ekleme. Hazır LINQ/Sum/Reverse kullanmadan öğrendiğin döngülerle çöz."
    ],
    "understand": [
      "Önce delil sayısı n, sonra n delil puanı. En son hedef değeri.",
      "Bir int[] ve bir int hedef alan int metot yaz. Hedefin ilk bulunduğu indeksi döndür. Hiç yoksa -1 döndür. Ana kod sonucu yazsın.",
      "Sıra numarası değil, 0’dan başlayan indeks yazılır. Birden çok eşleşmede ilki."
    ],
    "input": [
      "4",
      "4",
      "7",
      "7",
      "2",
      "7"
    ],
    "output": [
      "1"
    ],
    "reference": "int n = Convert.ToInt32(Console.ReadLine());\nint[] deliller = new int[n];\nfor (int i = 0; i < n; i++)\n    deliller[i] = Convert.ToInt32(Console.ReadLine());\nint hedef = Convert.ToInt32(Console.ReadLine());\nConsole.WriteLine(Bul(deliller, hedef));\n\nstatic int Bul(int[] d, int hedef)\n{\n    for (int i = 0; i < d.Length; i++)\n        if (d[i] == hedef)\n            return i;\n    return -1;\n}",
    "hint": "Eşleşmede return i metodu hemen bitirir. Döngü biterse return -1.",
    "walkthrough": [
      "İlk giriş 4: 4 elemanlı dizi oluşturulur.",
      "2. giriş 4, deliller[0] içine konur.",
      "3. giriş 7, deliller[1] içine konur.",
      "4. giriş 7, deliller[2] içine konur.",
      "5. giriş 2, deliller[3] içine konur.",
      "Son giriş 7, hedef değişkenine alınır.",
      "Bir int[] ve bir int hedef alan int metot yaz. Hedefin ilk bulunduğu indeksi döndür. Hiç yoksa -1 döndür. Ana kod sonucu yazsın.",
      "Bu örneğin çıktısı: 1."
    ],
    "words": [
      [
        "int[] parametre",
        "Metoda tek bir sayı yerine dizinin tamamı gönderilir. Parametrenin Length özelliği eleman sayısını verir. İndeksler 0’dan başlar."
      ],
      [
        "Dizi paylaşılır",
        "Dizi parametresi aynı elemanlara erişir. Metotta d[i] değişirse çağıran kodda da değişir. Parametreye yeni dizi atamak ise çağıranın değişkenini değiştirmez."
      ],
      [
        "return ve void",
        "return bir sonucu çağırana verir. void sonuç değeri vermez. Ekrana yazmak için ayrıca Console.WriteLine çalışmalıdır."
      ]
    ],
    "lineHelp": {
      "1": "Bir giriş satırı okunur ve Convert.ToInt32 ile tam sayıya çevrilir. Bu görevde girişler geçerli sayılardır.",
      "2": "n elemanlı dizi oluşturulur. Başlangıçta bütün elemanları 0’dır.",
      "3": "Dizinin elemanları sırayla gezilir. Geçerli indeksler 0 ile Length - 1 arasındadır.",
      "4": "Bir giriş satırı okunur ve Convert.ToInt32 ile tam sayıya çevrilir. Bu görevde girişler geçerli sayılardır.",
      "5": "Bir giriş satırı okunur ve Convert.ToInt32 ile tam sayıya çevrilir. Bu görevde girişler geçerli sayılardır.",
      "6": "İçindeki değer şimdi konsola yeni bir satır olarak eklenir.",
      "7": "Bu boş satır yalnızca kodu okumayı kolaylaştırır.",
      "8": "Bu metot tanımıdır. Parantezdeki d, çağrıda gönderilen diziyi alır. Gövde çağrı yapılınca çalışır.",
      "9": "Metodun veya bloğun başlangıcı.",
      "10": "Dizinin elemanları sırayla gezilir. Geçerli indeksler 0 ile Length - 1 arasındadır.",
      "11": "Koşul doğruysa altındaki satır çalışır; yanlışsa o satır atlanır.",
      "12": "İfade hesaplanır, sonuç çağıran yere geri verilir ve metot biter. Bu satır tek başına ekrana yazmaz.",
      "13": "İfade hesaplanır, sonuç çağıran yere geri verilir ve metot biter. Bu satır tek başına ekrana yazmaz.",
      "14": "Metodun veya bloğun sonu."
    },
    "frames": [
      {
        "line": 0,
        "caption": "Arşiv görevi başlıyor. Önce sayı dizisini hazırlayacağız.",
        "phase": "ready",
        "active": -1,
        "metric": "Bekleniyor",
        "result": null,
        "method": "Bul",
        "array": [
          0,
          0,
          0,
          0
        ],
        "output": [],
        "vars": {
          "n": 4,
          "hedef": 7,
          "durum": "Bekleniyor"
        }
      },
      {
        "line": 1,
        "caption": "İlk giriş 4. n, dizinin eleman sayısıdır.",
        "phase": "read",
        "active": -1,
        "metric": "Bekleniyor",
        "result": null,
        "method": "Bul",
        "array": [
          0,
          0,
          0,
          0
        ],
        "output": [],
        "vars": {
          "n": 4,
          "hedef": 7,
          "durum": "Bekleniyor"
        }
      },
      {
        "line": 2,
        "caption": "4 elemanlı dizi oluşturulur. Elemanlar başlangıçta 0.",
        "phase": "allocate",
        "active": -1,
        "metric": "Bekleniyor",
        "result": null,
        "method": "Bul",
        "array": [
          0,
          0,
          0,
          0
        ],
        "output": [],
        "vars": {
          "n": 4,
          "hedef": 7,
          "durum": "Bekleniyor"
        }
      },
      {
        "line": 4,
        "caption": "Girdi 4, deliller[0] içine yerleşir.",
        "phase": "read",
        "active": 0,
        "metric": "Bekleniyor",
        "result": null,
        "method": "Bul",
        "array": [
          4,
          0,
          0,
          0
        ],
        "output": [],
        "vars": {
          "n": 4,
          "hedef": 7,
          "indeks": 0,
          "deger": 4,
          "durum": "Bekleniyor"
        }
      },
      {
        "line": 4,
        "caption": "Girdi 7, deliller[1] içine yerleşir.",
        "phase": "read",
        "active": 1,
        "metric": "Bekleniyor",
        "result": null,
        "method": "Bul",
        "array": [
          4,
          7,
          0,
          0
        ],
        "output": [],
        "vars": {
          "n": 4,
          "hedef": 7,
          "indeks": 1,
          "deger": 7,
          "durum": "Bekleniyor"
        }
      },
      {
        "line": 4,
        "caption": "Girdi 7, deliller[2] içine yerleşir.",
        "phase": "read",
        "active": 2,
        "metric": "Bekleniyor",
        "result": null,
        "method": "Bul",
        "array": [
          4,
          7,
          7,
          0
        ],
        "output": [],
        "vars": {
          "n": 4,
          "hedef": 7,
          "indeks": 2,
          "deger": 7,
          "durum": "Bekleniyor"
        }
      },
      {
        "line": 4,
        "caption": "Girdi 2, deliller[3] içine yerleşir.",
        "phase": "read",
        "active": 3,
        "metric": "Bekleniyor",
        "result": null,
        "method": "Bul",
        "array": [
          4,
          7,
          7,
          2
        ],
        "output": [],
        "vars": {
          "n": 4,
          "hedef": 7,
          "indeks": 3,
          "deger": 2,
          "durum": "Bekleniyor"
        }
      },
      {
        "line": 5,
        "caption": "Son giriş 7, hedef değişkenine alınır.",
        "phase": "read",
        "active": -1,
        "metric": "Bekleniyor",
        "result": null,
        "method": "Bul",
        "array": [
          4,
          7,
          7,
          2
        ],
        "output": [],
        "vars": {
          "n": 4,
          "hedef": 7,
          "durum": "Bekleniyor"
        }
      },
      {
        "line": 6,
        "caption": "Bul çağrısına dizinin tamamı gönderilir.",
        "phase": "call",
        "active": -1,
        "metric": "Bekleniyor",
        "result": null,
        "method": "Bul",
        "array": [
          4,
          7,
          7,
          2
        ],
        "output": [],
        "vars": {
          "n": 4,
          "hedef": 7,
          "durum": "Bekleniyor"
        }
      },
      {
        "line": 8,
        "caption": "Metodun d parametresi aynı dizi elemanlarına erişir.",
        "phase": "bind",
        "active": -1,
        "metric": "Bekleniyor",
        "result": null,
        "method": "Bul",
        "array": [
          4,
          7,
          7,
          2
        ],
        "output": [],
        "vars": {
          "n": 4,
          "hedef": 7,
          "durum": "Bekleniyor"
        }
      },
      {
        "line": 11,
        "caption": "4 == 7 → false.",
        "phase": "inspect",
        "active": 0,
        "metric": "aranan = 7",
        "result": null,
        "method": "Bul",
        "array": [
          4,
          7,
          7,
          2
        ],
        "output": [],
        "vars": {
          "n": 4,
          "hedef": 7,
          "indeks": 0,
          "deger": 4,
          "durum": "aranan = 7"
        }
      },
      {
        "line": 11,
        "caption": "7 == 7 → true.",
        "phase": "inspect",
        "active": 1,
        "metric": "aranan = 7",
        "result": null,
        "method": "Bul",
        "array": [
          4,
          7,
          7,
          2
        ],
        "output": [],
        "vars": {
          "n": 4,
          "hedef": 7,
          "indeks": 1,
          "deger": 7,
          "durum": "aranan = 7"
        }
      },
      {
        "line": 12,
        "caption": "İlk eşleşme indeks 1. return metodu bitirir; sonraki eşleşmeye gidilmez.",
        "phase": "return",
        "active": 1,
        "metric": "aranan = 7",
        "result": 1,
        "method": "Bul",
        "array": [
          4,
          7,
          7,
          2
        ],
        "output": [],
        "vars": {
          "n": 4,
          "hedef": 7,
          "indeks": 1,
          "deger": 7,
          "durum": "aranan = 7"
        }
      },
      {
        "line": 6,
        "caption": "Ana kod indeks 1 yazar.",
        "phase": "print",
        "active": 1,
        "metric": "aranan = 7",
        "result": 1,
        "method": "Bul",
        "array": [
          4,
          7,
          7,
          2
        ],
        "output": [
          "1"
        ],
        "vars": {
          "n": 4,
          "hedef": 7,
          "indeks": 1,
          "deger": 7,
          "durum": "aranan = 7"
        },
        "print": 1
      }
    ]
  },
  {
    "id": "vault",
    "title": "Kasayı açmadan kontrol et",
    "theme": "rose",
    "themeName": "Gül kurusu",
    "color": "#eea0bc",
    "scene": "Arşiv kasası",
    "kind": "ÜNİTE 3 / BİTİRME PROJESİ",
    "intro": "Arşivdeki arşiv kasası seni bekliyor. Diziyi uygun araçla işle.",
    "goal": "Bir int[] parametre alan bool metot yaz. Bütün elemanlar 0 veya daha büyükse true, en az biri negatifse false döndür. Ana kod sonucu yazsın.",
    "concept": "Arşiv kasası · dizi ve metot birlikte",
    "rules": [
      "Önce n, sonra n tane tam sayı oku. Her giriş ayrı satırda.",
      "n 1–5 arasında, dizi değerleri -20 ile 20 arasında. ",
      "Metot ve değişken adlarını kendin seçebilirsin. İstenen dönüş ve parametre türlerini koru.",
      "Metotları ana kodun altında tanımla; using veya class ekleme. Hazır LINQ/Sum/Reverse kullanmadan öğrendiğin döngülerle çöz."
    ],
    "understand": [
      "Önce delil sayısı n, sonra n delil puanı. Başka giriş yok.",
      "Bir int[] parametre alan bool metot yaz. Bütün elemanlar 0 veya daha büyükse true, en az biri negatifse false döndür. Ana kod sonucu yazsın.",
      "Yalnızca True veya False. 0 geçerli bir değerdir."
    ],
    "input": [
      "3",
      "4",
      "0",
      "-2"
    ],
    "output": [
      "False"
    ],
    "reference": "int n = Convert.ToInt32(Console.ReadLine());\nint[] deliller = new int[n];\nfor (int i = 0; i < n; i++)\n    deliller[i] = Convert.ToInt32(Console.ReadLine());\nConsole.WriteLine(GuvenliMi(deliller));\n\nstatic bool GuvenliMi(int[] d)\n{\n    foreach (int puan in d)\n        if (puan < 0)\n            return false;\n    return true;\n}",
    "hint": "Diziyi metoda parametre olarak gönder. Döngü ve istenen işlem metodun içinde olsun.",
    "walkthrough": [
      "İlk giriş 3: 3 elemanlı dizi oluşturulur.",
      "2. giriş 4, deliller[0] içine konur.",
      "3. giriş 0, deliller[1] içine konur.",
      "4. giriş -2, deliller[2] içine konur.",
      "Bir int[] parametre alan bool metot yaz. Bütün elemanlar 0 veya daha büyükse true, en az biri negatifse false döndür. Ana kod sonucu yazsın.",
      "Bu örneğin çıktısı: False."
    ],
    "words": [
      [
        "int[] parametre",
        "Metoda tek bir sayı yerine dizinin tamamı gönderilir. Parametrenin Length özelliği eleman sayısını verir. İndeksler 0’dan başlar."
      ],
      [
        "Dizi paylaşılır",
        "Dizi parametresi aynı elemanlara erişir. Metotta d[i] değişirse çağıran kodda da değişir. Parametreye yeni dizi atamak ise çağıranın değişkenini değiştirmez."
      ],
      [
        "return ve void",
        "return bir sonucu çağırana verir. void sonuç değeri vermez. Ekrana yazmak için ayrıca Console.WriteLine çalışmalıdır."
      ]
    ],
    "lineHelp": {
      "1": "Bir giriş satırı okunur ve Convert.ToInt32 ile tam sayıya çevrilir. Bu görevde girişler geçerli sayılardır.",
      "2": "n elemanlı dizi oluşturulur. Başlangıçta bütün elemanları 0’dır.",
      "3": "Dizinin elemanları sırayla gezilir. Geçerli indeksler 0 ile Length - 1 arasındadır.",
      "4": "Bir giriş satırı okunur ve Convert.ToInt32 ile tam sayıya çevrilir. Bu görevde girişler geçerli sayılardır.",
      "5": "İçindeki değer şimdi konsola yeni bir satır olarak eklenir.",
      "6": "Bu boş satır yalnızca kodu okumayı kolaylaştırır.",
      "7": "Bu metot tanımıdır. Parantezdeki d, çağrıda gönderilen diziyi alır. Gövde çağrı yapılınca çalışır.",
      "8": "Metodun veya bloğun başlangıcı.",
      "9": "Dizinin elemanları sırayla gezilir. Geçerli indeksler 0 ile Length - 1 arasındadır.",
      "10": "Koşul doğruysa altındaki satır çalışır; yanlışsa o satır atlanır.",
      "11": "İfade hesaplanır, sonuç çağıran yere geri verilir ve metot biter. Bu satır tek başına ekrana yazmaz.",
      "12": "İfade hesaplanır, sonuç çağıran yere geri verilir ve metot biter. Bu satır tek başına ekrana yazmaz.",
      "13": "Metodun veya bloğun sonu."
    },
    "frames": [
      {
        "line": 0,
        "caption": "Arşiv görevi başlıyor. Önce sayı dizisini hazırlayacağız.",
        "phase": "ready",
        "active": -1,
        "metric": "Bekleniyor",
        "result": null,
        "method": "GuvenliMi",
        "array": [
          0,
          0,
          0
        ],
        "output": [],
        "vars": {
          "n": 3,
          "durum": "Bekleniyor"
        }
      },
      {
        "line": 1,
        "caption": "İlk giriş 3. n, dizinin eleman sayısıdır.",
        "phase": "read",
        "active": -1,
        "metric": "Bekleniyor",
        "result": null,
        "method": "GuvenliMi",
        "array": [
          0,
          0,
          0
        ],
        "output": [],
        "vars": {
          "n": 3,
          "durum": "Bekleniyor"
        }
      },
      {
        "line": 2,
        "caption": "3 elemanlı dizi oluşturulur. Elemanlar başlangıçta 0.",
        "phase": "allocate",
        "active": -1,
        "metric": "Bekleniyor",
        "result": null,
        "method": "GuvenliMi",
        "array": [
          0,
          0,
          0
        ],
        "output": [],
        "vars": {
          "n": 3,
          "durum": "Bekleniyor"
        }
      },
      {
        "line": 4,
        "caption": "Girdi 4, deliller[0] içine yerleşir.",
        "phase": "read",
        "active": 0,
        "metric": "Bekleniyor",
        "result": null,
        "method": "GuvenliMi",
        "array": [
          4,
          0,
          0
        ],
        "output": [],
        "vars": {
          "n": 3,
          "indeks": 0,
          "deger": 4,
          "durum": "Bekleniyor"
        }
      },
      {
        "line": 4,
        "caption": "Girdi 0, deliller[1] içine yerleşir.",
        "phase": "read",
        "active": 1,
        "metric": "Bekleniyor",
        "result": null,
        "method": "GuvenliMi",
        "array": [
          4,
          0,
          0
        ],
        "output": [],
        "vars": {
          "n": 3,
          "indeks": 1,
          "deger": 0,
          "durum": "Bekleniyor"
        }
      },
      {
        "line": 4,
        "caption": "Girdi -2, deliller[2] içine yerleşir.",
        "phase": "read",
        "active": 2,
        "metric": "Bekleniyor",
        "result": null,
        "method": "GuvenliMi",
        "array": [
          4,
          0,
          -2
        ],
        "output": [],
        "vars": {
          "n": 3,
          "indeks": 2,
          "deger": -2,
          "durum": "Bekleniyor"
        }
      },
      {
        "line": 5,
        "caption": "GuvenliMi çağrısına dizinin tamamı gönderilir.",
        "phase": "call",
        "active": -1,
        "metric": "Bekleniyor",
        "result": null,
        "method": "GuvenliMi",
        "array": [
          4,
          0,
          -2
        ],
        "output": [],
        "vars": {
          "n": 3,
          "durum": "Bekleniyor"
        }
      },
      {
        "line": 7,
        "caption": "Metodun d parametresi aynı dizi elemanlarına erişir.",
        "phase": "bind",
        "active": -1,
        "metric": "Bekleniyor",
        "result": null,
        "method": "GuvenliMi",
        "array": [
          4,
          0,
          -2
        ],
        "output": [],
        "vars": {
          "n": 3,
          "durum": "Bekleniyor"
        }
      },
      {
        "line": 10,
        "caption": "4 < 0 → false.",
        "phase": "inspect",
        "active": 0,
        "metric": "Şimdilik uygun",
        "result": null,
        "method": "GuvenliMi",
        "array": [
          4,
          0,
          -2
        ],
        "output": [],
        "vars": {
          "n": 3,
          "indeks": 0,
          "deger": 4,
          "durum": "Şimdilik uygun"
        }
      },
      {
        "line": 10,
        "caption": "0 < 0 → false.",
        "phase": "inspect",
        "active": 1,
        "metric": "Şimdilik uygun",
        "result": null,
        "method": "GuvenliMi",
        "array": [
          4,
          0,
          -2
        ],
        "output": [],
        "vars": {
          "n": 3,
          "indeks": 1,
          "deger": 0,
          "durum": "Şimdilik uygun"
        }
      },
      {
        "line": 10,
        "caption": "-2 < 0 → true.",
        "phase": "inspect",
        "active": 2,
        "metric": "Negatif bulundu",
        "result": null,
        "method": "GuvenliMi",
        "array": [
          4,
          0,
          -2
        ],
        "output": [],
        "vars": {
          "n": 3,
          "indeks": 2,
          "deger": -2,
          "durum": "Negatif bulundu"
        }
      },
      {
        "line": 11,
        "caption": "Negatif var: False. Sonuç geri döner.",
        "phase": "return",
        "active": -1,
        "metric": "Negatif bulundu",
        "result": "False",
        "method": "GuvenliMi",
        "array": [
          4,
          0,
          -2
        ],
        "output": [],
        "vars": {
          "n": 3,
          "durum": "Negatif bulundu"
        }
      },
      {
        "line": 5,
        "caption": "Ana kod False yazar.",
        "phase": "print",
        "active": -1,
        "metric": "Negatif bulundu",
        "result": "False",
        "method": "GuvenliMi",
        "array": [
          4,
          0,
          -2
        ],
        "output": [
          "False"
        ],
        "vars": {
          "n": 3,
          "durum": "Negatif bulundu"
        },
        "print": "False"
      }
    ]
  },
  {
    "id": "uv",
    "title": "Etiketleri ışık odasında güncelle",
    "theme": "teal",
    "themeName": "Turkuaz",
    "color": "#86d8be",
    "scene": "Işık odası",
    "kind": "ÜNİTE 3 / BİTİRME PROJESİ",
    "intro": "Arşivdeki ışık odası seni bekliyor. Diziyi uygun araçla işle.",
    "goal": "Bir int[] ve bir int artış alan void metot yaz. Metodun içinde her dizi elemanına artışı ekle. Metot bittiğinde ana kod güncel diziyi baştan sona yazsın.",
    "concept": "Işık odası · dizi ve metot birlikte",
    "rules": [
      "Önce n, sonra n tane tam sayı oku. Her giriş ayrı satırda.",
      "n 1–5 arasında, dizi değerleri -20 ile 20 arasında. Son satırdaki artis de -20 ile 20 arasında.",
      "Metot ve değişken adlarını kendin seçebilirsin. İstenen dönüş ve parametre türlerini koru.",
      "Metotları ana kodun altında tanımla; using veya class ekleme. Hazır LINQ/Sum/Reverse kullanmadan öğrendiğin döngülerle çöz."
    ],
    "understand": [
      "Önce delil sayısı n, sonra n delil puanı. En son artis değeri.",
      "Bir int[] ve bir int artış alan void metot yaz. Metodun içinde her dizi elemanına artışı ekle. Metot bittiğinde ana kod güncel diziyi baştan sona yazsın.",
      "Güncel değerler ayrı satırlarda. Metodun içinde yazdırma. Artış negatif veya 0 olabilir."
    ],
    "input": [
      "3",
      "2",
      "5",
      "1",
      "3"
    ],
    "output": [
      "5",
      "8",
      "4"
    ],
    "reference": "int n = Convert.ToInt32(Console.ReadLine());\nint[] deliller = new int[n];\nfor (int i = 0; i < n; i++)\n    deliller[i] = Convert.ToInt32(Console.ReadLine());\nint artis = Convert.ToInt32(Console.ReadLine());\nGuncelle(deliller, artis);\nforeach (int puan in deliller)\n    Console.WriteLine(puan);\n\nstatic void Guncelle(int[] d, int artis)\n{\n    for (int i = 0; i < d.Length; i++)\n        d[i] += artis;\n}",
    "hint": "Dizi parametresi aynı elemanlara ulaşır. d[i] değişince ana koddaki deliller[i] de değişir. return gerekmez.",
    "walkthrough": [
      "İlk giriş 3: 3 elemanlı dizi oluşturulur.",
      "2. giriş 2, deliller[0] içine konur.",
      "3. giriş 5, deliller[1] içine konur.",
      "4. giriş 1, deliller[2] içine konur.",
      "Son giriş 3, artis değişkenine alınır.",
      "Bir int[] ve bir int artış alan void metot yaz. Metodun içinde her dizi elemanına artışı ekle. Metot bittiğinde ana kod güncel diziyi baştan sona yazsın.",
      "Bu örneğin çıktısı: 5 / 8 / 4."
    ],
    "words": [
      [
        "int[] parametre",
        "Metoda tek bir sayı yerine dizinin tamamı gönderilir. Parametrenin Length özelliği eleman sayısını verir. İndeksler 0’dan başlar."
      ],
      [
        "Dizi paylaşılır",
        "Dizi parametresi aynı elemanlara erişir. Metotta d[i] değişirse çağıran kodda da değişir. Parametreye yeni dizi atamak ise çağıranın değişkenini değiştirmez."
      ],
      [
        "return ve void",
        "return bir sonucu çağırana verir. void sonuç değeri vermez. Ekrana yazmak için ayrıca Console.WriteLine çalışmalıdır."
      ]
    ],
    "lineHelp": {
      "1": "Bir giriş satırı okunur ve Convert.ToInt32 ile tam sayıya çevrilir. Bu görevde girişler geçerli sayılardır.",
      "2": "n elemanlı dizi oluşturulur. Başlangıçta bütün elemanları 0’dır.",
      "3": "Dizinin elemanları sırayla gezilir. Geçerli indeksler 0 ile Length - 1 arasındadır.",
      "4": "Bir giriş satırı okunur ve Convert.ToInt32 ile tam sayıya çevrilir. Bu görevde girişler geçerli sayılardır.",
      "5": "Bir giriş satırı okunur ve Convert.ToInt32 ile tam sayıya çevrilir. Bu görevde girişler geçerli sayılardır.",
      "6": "Bu satırdaki değer hesaplanır ve soldaki değişkende tutulur. Animasyondaki değerlerle karşılaştır.",
      "7": "Dizinin elemanları sırayla gezilir. Geçerli indeksler 0 ile Length - 1 arasındadır.",
      "8": "İçindeki değer şimdi konsola yeni bir satır olarak eklenir.",
      "9": "Bu boş satır yalnızca kodu okumayı kolaylaştırır.",
      "10": "Bu metot tanımıdır. Parantezdeki d, çağrıda gönderilen diziyi alır. Gövde çağrı yapılınca çalışır.",
      "11": "Metodun veya bloğun başlangıcı.",
      "12": "Dizinin elemanları sırayla gezilir. Geçerli indeksler 0 ile Length - 1 arasındadır.",
      "13": "Sağdaki değer soldaki değişkene veya dizi elemanına eklenir.",
      "14": "Metodun veya bloğun sonu."
    },
    "frames": [
      {
        "line": 0,
        "caption": "Arşiv görevi başlıyor. Önce sayı dizisini hazırlayacağız.",
        "phase": "ready",
        "active": -1,
        "metric": "Bekleniyor",
        "result": null,
        "method": "Guncelle",
        "array": [
          0,
          0,
          0
        ],
        "output": [],
        "vars": {
          "n": 3,
          "artis": 3,
          "durum": "Bekleniyor"
        }
      },
      {
        "line": 1,
        "caption": "İlk giriş 3. n, dizinin eleman sayısıdır.",
        "phase": "read",
        "active": -1,
        "metric": "Bekleniyor",
        "result": null,
        "method": "Guncelle",
        "array": [
          0,
          0,
          0
        ],
        "output": [],
        "vars": {
          "n": 3,
          "artis": 3,
          "durum": "Bekleniyor"
        }
      },
      {
        "line": 2,
        "caption": "3 elemanlı dizi oluşturulur. Elemanlar başlangıçta 0.",
        "phase": "allocate",
        "active": -1,
        "metric": "Bekleniyor",
        "result": null,
        "method": "Guncelle",
        "array": [
          0,
          0,
          0
        ],
        "output": [],
        "vars": {
          "n": 3,
          "artis": 3,
          "durum": "Bekleniyor"
        }
      },
      {
        "line": 4,
        "caption": "Girdi 2, deliller[0] içine yerleşir.",
        "phase": "read",
        "active": 0,
        "metric": "Bekleniyor",
        "result": null,
        "method": "Guncelle",
        "array": [
          2,
          0,
          0
        ],
        "output": [],
        "vars": {
          "n": 3,
          "artis": 3,
          "indeks": 0,
          "deger": 2,
          "durum": "Bekleniyor"
        }
      },
      {
        "line": 4,
        "caption": "Girdi 5, deliller[1] içine yerleşir.",
        "phase": "read",
        "active": 1,
        "metric": "Bekleniyor",
        "result": null,
        "method": "Guncelle",
        "array": [
          2,
          5,
          0
        ],
        "output": [],
        "vars": {
          "n": 3,
          "artis": 3,
          "indeks": 1,
          "deger": 5,
          "durum": "Bekleniyor"
        }
      },
      {
        "line": 4,
        "caption": "Girdi 1, deliller[2] içine yerleşir.",
        "phase": "read",
        "active": 2,
        "metric": "Bekleniyor",
        "result": null,
        "method": "Guncelle",
        "array": [
          2,
          5,
          1
        ],
        "output": [],
        "vars": {
          "n": 3,
          "artis": 3,
          "indeks": 2,
          "deger": 1,
          "durum": "Bekleniyor"
        }
      },
      {
        "line": 5,
        "caption": "Son giriş 3, artis değişkenine alınır.",
        "phase": "read",
        "active": -1,
        "metric": "Bekleniyor",
        "result": null,
        "method": "Guncelle",
        "array": [
          2,
          5,
          1
        ],
        "output": [],
        "vars": {
          "n": 3,
          "artis": 3,
          "durum": "Bekleniyor"
        }
      },
      {
        "line": 6,
        "caption": "Guncelle çağrısına dizinin tamamı gönderilir.",
        "phase": "call",
        "active": -1,
        "metric": "Bekleniyor",
        "result": null,
        "method": "Guncelle",
        "array": [
          2,
          5,
          1
        ],
        "output": [],
        "vars": {
          "n": 3,
          "artis": 3,
          "durum": "Bekleniyor"
        }
      },
      {
        "line": 10,
        "caption": "Metodun d parametresi aynı dizi elemanlarına erişir.",
        "phase": "bind",
        "active": -1,
        "metric": "Bekleniyor",
        "result": null,
        "method": "Guncelle",
        "array": [
          2,
          5,
          1
        ],
        "output": [],
        "vars": {
          "n": 3,
          "artis": 3,
          "durum": "Bekleniyor"
        }
      },
      {
        "line": 12,
        "caption": "İndeks 0 seçildi. Eski değer 2.",
        "phase": "inspect",
        "active": 0,
        "metric": "artış = 3",
        "result": null,
        "method": "Guncelle",
        "array": [
          2,
          5,
          1
        ],
        "output": [],
        "vars": {
          "n": 3,
          "artis": 3,
          "indeks": 0,
          "deger": 2,
          "durum": "artış = 3"
        }
      },
      {
        "line": 13,
        "caption": "2 + 3 = 5. Aynı dizinin elemanı değişti.",
        "phase": "update",
        "active": 0,
        "metric": "güncel = 5",
        "result": null,
        "method": "Guncelle",
        "array": [
          5,
          5,
          1
        ],
        "output": [],
        "vars": {
          "n": 3,
          "artis": 3,
          "indeks": 0,
          "deger": 5,
          "durum": "güncel = 5"
        },
        "oldValue": 2
      },
      {
        "line": 12,
        "caption": "İndeks 1 seçildi. Eski değer 5.",
        "phase": "inspect",
        "active": 1,
        "metric": "artış = 3",
        "result": null,
        "method": "Guncelle",
        "array": [
          5,
          5,
          1
        ],
        "output": [],
        "vars": {
          "n": 3,
          "artis": 3,
          "indeks": 1,
          "deger": 5,
          "durum": "artış = 3"
        }
      },
      {
        "line": 13,
        "caption": "5 + 3 = 8. Aynı dizinin elemanı değişti.",
        "phase": "update",
        "active": 1,
        "metric": "güncel = 8",
        "result": null,
        "method": "Guncelle",
        "array": [
          5,
          8,
          1
        ],
        "output": [],
        "vars": {
          "n": 3,
          "artis": 3,
          "indeks": 1,
          "deger": 8,
          "durum": "güncel = 8"
        },
        "oldValue": 5
      },
      {
        "line": 12,
        "caption": "İndeks 2 seçildi. Eski değer 1.",
        "phase": "inspect",
        "active": 2,
        "metric": "artış = 3",
        "result": null,
        "method": "Guncelle",
        "array": [
          5,
          8,
          1
        ],
        "output": [],
        "vars": {
          "n": 3,
          "artis": 3,
          "indeks": 2,
          "deger": 1,
          "durum": "artış = 3"
        }
      },
      {
        "line": 13,
        "caption": "1 + 3 = 4. Aynı dizinin elemanı değişti.",
        "phase": "update",
        "active": 2,
        "metric": "güncel = 4",
        "result": null,
        "method": "Guncelle",
        "array": [
          5,
          8,
          4
        ],
        "output": [],
        "vars": {
          "n": 3,
          "artis": 3,
          "indeks": 2,
          "deger": 4,
          "durum": "güncel = 4"
        },
        "oldValue": 1
      },
      {
        "line": 6,
        "caption": "void metot bitti. Ana kod aynı dizinin güncel elemanlarını görüyor.",
        "phase": "finish",
        "active": -1,
        "metric": "güncel = 4",
        "result": null,
        "method": "Guncelle",
        "array": [
          5,
          8,
          4
        ],
        "output": [],
        "vars": {
          "n": 3,
          "artis": 3,
          "durum": "güncel = 4"
        }
      },
      {
        "line": 8,
        "caption": "Ana kod güncel deliller[0] değerini yazar.",
        "phase": "print",
        "active": 0,
        "metric": "güncel = 4",
        "result": null,
        "method": "Guncelle",
        "array": [
          5,
          8,
          4
        ],
        "output": [
          "5"
        ],
        "vars": {
          "n": 3,
          "artis": 3,
          "indeks": 0,
          "deger": 5,
          "durum": "güncel = 4"
        },
        "print": 5
      },
      {
        "line": 8,
        "caption": "Ana kod güncel deliller[1] değerini yazar.",
        "phase": "print",
        "active": 1,
        "metric": "güncel = 4",
        "result": null,
        "method": "Guncelle",
        "array": [
          5,
          8,
          4
        ],
        "output": [
          "5",
          "8"
        ],
        "vars": {
          "n": 3,
          "artis": 3,
          "indeks": 1,
          "deger": 8,
          "durum": "güncel = 4"
        },
        "print": 8
      },
      {
        "line": 8,
        "caption": "Ana kod güncel deliller[2] değerini yazar.",
        "phase": "print",
        "active": 2,
        "metric": "güncel = 4",
        "result": null,
        "method": "Guncelle",
        "array": [
          5,
          8,
          4
        ],
        "output": [
          "5",
          "8",
          "4"
        ],
        "vars": {
          "n": 3,
          "artis": 3,
          "indeks": 2,
          "deger": 4,
          "durum": "güncel = 4"
        },
        "print": 4
      }
    ]
  },
  {
    "id": "reel",
    "title": "Kamera kaydını geriye sar",
    "theme": "lime",
    "themeName": "Fıstık yeşili",
    "color": "#c6df84",
    "scene": "Kamera makarası",
    "kind": "ÜNİTE 3 / BİTİRME PROJESİ",
    "intro": "Arşivdeki kamera makarası seni bekliyor. Diziyi uygun araçla işle.",
    "goal": "Bir int[] parametre alan void metot yaz. Dizi elemanlarını son elemandan ilk elemana doğru yazdırsın. Diziyi değiştirme. Ana koddan bir kez çağır.",
    "concept": "Kamera makarası · dizi ve metot birlikte",
    "rules": [
      "Önce n, sonra n tane tam sayı oku. Her giriş ayrı satırda.",
      "n 1–5 arasında, dizi değerleri -20 ile 20 arasında. ",
      "Metot ve değişken adlarını kendin seçebilirsin. İstenen dönüş ve parametre türlerini koru.",
      "Metotları ana kodun altında tanımla; using veya class ekleme. Hazır LINQ/Sum/Reverse kullanmadan öğrendiğin döngülerle çöz."
    ],
    "understand": [
      "Önce delil sayısı n, sonra n delil puanı. Başka giriş yok.",
      "Bir int[] parametre alan void metot yaz. Dizi elemanlarını son elemandan ilk elemana doğru yazdırsın. Diziyi değiştirme. Ana koddan bir kez çağır.",
      "Her eleman ters sırayla ayrı satırda. İlk yazılacak elemanın indeksi Length - 1."
    ],
    "input": [
      "3",
      "2",
      "8",
      "4"
    ],
    "output": [
      "4",
      "8",
      "2"
    ],
    "reference": "int n = Convert.ToInt32(Console.ReadLine());\nint[] deliller = new int[n];\nfor (int i = 0; i < n; i++)\n    deliller[i] = Convert.ToInt32(Console.ReadLine());\nTersYaz(deliller);\n\nstatic void TersYaz(int[] d)\n{\n    for (int i = d.Length - 1; i >= 0; i--)\n        Console.WriteLine(d[i]);\n}",
    "hint": "Diziyi metoda parametre olarak gönder. Döngü ve istenen işlem metodun içinde olsun.",
    "walkthrough": [
      "İlk giriş 3: 3 elemanlı dizi oluşturulur.",
      "2. giriş 2, deliller[0] içine konur.",
      "3. giriş 8, deliller[1] içine konur.",
      "4. giriş 4, deliller[2] içine konur.",
      "Bir int[] parametre alan void metot yaz. Dizi elemanlarını son elemandan ilk elemana doğru yazdırsın. Diziyi değiştirme. Ana koddan bir kez çağır.",
      "Bu örneğin çıktısı: 4 / 8 / 2."
    ],
    "words": [
      [
        "int[] parametre",
        "Metoda tek bir sayı yerine dizinin tamamı gönderilir. Parametrenin Length özelliği eleman sayısını verir. İndeksler 0’dan başlar."
      ],
      [
        "Dizi paylaşılır",
        "Dizi parametresi aynı elemanlara erişir. Metotta d[i] değişirse çağıran kodda da değişir. Parametreye yeni dizi atamak ise çağıranın değişkenini değiştirmez."
      ],
      [
        "return ve void",
        "return bir sonucu çağırana verir. void sonuç değeri vermez. Ekrana yazmak için ayrıca Console.WriteLine çalışmalıdır."
      ]
    ],
    "lineHelp": {
      "1": "Bir giriş satırı okunur ve Convert.ToInt32 ile tam sayıya çevrilir. Bu görevde girişler geçerli sayılardır.",
      "2": "n elemanlı dizi oluşturulur. Başlangıçta bütün elemanları 0’dır.",
      "3": "Dizinin elemanları sırayla gezilir. Geçerli indeksler 0 ile Length - 1 arasındadır.",
      "4": "Bir giriş satırı okunur ve Convert.ToInt32 ile tam sayıya çevrilir. Bu görevde girişler geçerli sayılardır.",
      "5": "Bu satırdaki değer hesaplanır ve soldaki değişkende tutulur. Animasyondaki değerlerle karşılaştır.",
      "6": "Bu boş satır yalnızca kodu okumayı kolaylaştırır.",
      "7": "Bu metot tanımıdır. Parantezdeki d, çağrıda gönderilen diziyi alır. Gövde çağrı yapılınca çalışır.",
      "8": "Metodun veya bloğun başlangıcı.",
      "9": "Dizinin elemanları sırayla gezilir. Geçerli indeksler 0 ile Length - 1 arasındadır.",
      "10": "İçindeki değer şimdi konsola yeni bir satır olarak eklenir.",
      "11": "Metodun veya bloğun sonu."
    },
    "frames": [
      {
        "line": 0,
        "caption": "Arşiv görevi başlıyor. Önce sayı dizisini hazırlayacağız.",
        "phase": "ready",
        "active": -1,
        "metric": "Bekleniyor",
        "result": null,
        "method": "TersYaz",
        "array": [
          0,
          0,
          0
        ],
        "output": [],
        "vars": {
          "n": 3,
          "durum": "Bekleniyor"
        }
      },
      {
        "line": 1,
        "caption": "İlk giriş 3. n, dizinin eleman sayısıdır.",
        "phase": "read",
        "active": -1,
        "metric": "Bekleniyor",
        "result": null,
        "method": "TersYaz",
        "array": [
          0,
          0,
          0
        ],
        "output": [],
        "vars": {
          "n": 3,
          "durum": "Bekleniyor"
        }
      },
      {
        "line": 2,
        "caption": "3 elemanlı dizi oluşturulur. Elemanlar başlangıçta 0.",
        "phase": "allocate",
        "active": -1,
        "metric": "Bekleniyor",
        "result": null,
        "method": "TersYaz",
        "array": [
          0,
          0,
          0
        ],
        "output": [],
        "vars": {
          "n": 3,
          "durum": "Bekleniyor"
        }
      },
      {
        "line": 4,
        "caption": "Girdi 2, deliller[0] içine yerleşir.",
        "phase": "read",
        "active": 0,
        "metric": "Bekleniyor",
        "result": null,
        "method": "TersYaz",
        "array": [
          2,
          0,
          0
        ],
        "output": [],
        "vars": {
          "n": 3,
          "indeks": 0,
          "deger": 2,
          "durum": "Bekleniyor"
        }
      },
      {
        "line": 4,
        "caption": "Girdi 8, deliller[1] içine yerleşir.",
        "phase": "read",
        "active": 1,
        "metric": "Bekleniyor",
        "result": null,
        "method": "TersYaz",
        "array": [
          2,
          8,
          0
        ],
        "output": [],
        "vars": {
          "n": 3,
          "indeks": 1,
          "deger": 8,
          "durum": "Bekleniyor"
        }
      },
      {
        "line": 4,
        "caption": "Girdi 4, deliller[2] içine yerleşir.",
        "phase": "read",
        "active": 2,
        "metric": "Bekleniyor",
        "result": null,
        "method": "TersYaz",
        "array": [
          2,
          8,
          4
        ],
        "output": [],
        "vars": {
          "n": 3,
          "indeks": 2,
          "deger": 4,
          "durum": "Bekleniyor"
        }
      },
      {
        "line": 5,
        "caption": "TersYaz çağrısına dizinin tamamı gönderilir.",
        "phase": "call",
        "active": -1,
        "metric": "Bekleniyor",
        "result": null,
        "method": "TersYaz",
        "array": [
          2,
          8,
          4
        ],
        "output": [],
        "vars": {
          "n": 3,
          "durum": "Bekleniyor"
        }
      },
      {
        "line": 7,
        "caption": "Metodun d parametresi aynı dizi elemanlarına erişir.",
        "phase": "bind",
        "active": -1,
        "metric": "Bekleniyor",
        "result": null,
        "method": "TersYaz",
        "array": [
          2,
          8,
          4
        ],
        "output": [],
        "vars": {
          "n": 3,
          "durum": "Bekleniyor"
        }
      },
      {
        "line": 9,
        "caption": "Döngü indeksi 2. Bu eleman 4.",
        "phase": "inspect",
        "active": 2,
        "metric": "i = 2",
        "result": null,
        "method": "TersYaz",
        "array": [
          2,
          8,
          4
        ],
        "output": [],
        "vars": {
          "n": 3,
          "indeks": 2,
          "deger": 4,
          "durum": "i = 2"
        }
      },
      {
        "line": 10,
        "caption": "4 konsola eklenir.",
        "phase": "print",
        "active": 2,
        "metric": "i = 2",
        "result": null,
        "method": "TersYaz",
        "array": [
          2,
          8,
          4
        ],
        "output": [
          "4"
        ],
        "vars": {
          "n": 3,
          "indeks": 2,
          "deger": 4,
          "durum": "i = 2"
        },
        "print": 4
      },
      {
        "line": 9,
        "caption": "Döngü indeksi 1. Bu eleman 8.",
        "phase": "inspect",
        "active": 1,
        "metric": "i = 1",
        "result": null,
        "method": "TersYaz",
        "array": [
          2,
          8,
          4
        ],
        "output": [
          "4"
        ],
        "vars": {
          "n": 3,
          "indeks": 1,
          "deger": 8,
          "durum": "i = 1"
        }
      },
      {
        "line": 10,
        "caption": "8 konsola eklenir.",
        "phase": "print",
        "active": 1,
        "metric": "i = 1",
        "result": null,
        "method": "TersYaz",
        "array": [
          2,
          8,
          4
        ],
        "output": [
          "4",
          "8"
        ],
        "vars": {
          "n": 3,
          "indeks": 1,
          "deger": 8,
          "durum": "i = 1"
        },
        "print": 8
      },
      {
        "line": 9,
        "caption": "Döngü indeksi 0. Bu eleman 2.",
        "phase": "inspect",
        "active": 0,
        "metric": "i = 0",
        "result": null,
        "method": "TersYaz",
        "array": [
          2,
          8,
          4
        ],
        "output": [
          "4",
          "8"
        ],
        "vars": {
          "n": 3,
          "indeks": 0,
          "deger": 2,
          "durum": "i = 0"
        }
      },
      {
        "line": 10,
        "caption": "2 konsola eklenir.",
        "phase": "print",
        "active": 0,
        "metric": "i = 0",
        "result": null,
        "method": "TersYaz",
        "array": [
          2,
          8,
          4
        ],
        "output": [
          "4",
          "8",
          "2"
        ],
        "vars": {
          "n": 3,
          "indeks": 0,
          "deger": 2,
          "durum": "i = 0"
        },
        "print": 2
      },
      {
        "line": 5,
        "caption": "void metot bitti. Çağıran koda dönülür; sonuç değeri yok.",
        "phase": "finish",
        "active": -1,
        "metric": "i = 0",
        "result": null,
        "method": "TersYaz",
        "array": [
          2,
          8,
          4
        ],
        "output": [
          "4",
          "8",
          "2"
        ],
        "vars": {
          "n": 3,
          "durum": "i = 0"
        }
      }
    ]
  },
  {
    "id": "archive",
    "title": "Son arşiv raporunu hazırla",
    "theme": "gold",
    "themeName": "Açık altın",
    "color": "#e4d6a0",
    "scene": "Mühür masası",
    "kind": "ÜNİTE 3 / BİTİRME PROJESİ",
    "intro": "Arşivdeki mühür masası seni bekliyor. Diziyi uygun araçla işle.",
    "goal": "İki ayrı int metot yaz. Her biri bir int[] alsın: biri toplamı, diğeri en büyük değeri döndürsün. İkisini aynı diziyle çağır. Ana kod iki sonucu aşağıdaki başlıklarla yazsın.",
    "concept": "Mühür masası · dizi ve metot birlikte",
    "rules": [
      "Önce n, sonra n tane tam sayı oku. Her giriş ayrı satırda.",
      "n 1–5 arasında, dizi değerleri -20 ile 20 arasında. ",
      "Metot ve değişken adlarını kendin seçebilirsin. İstenen dönüş ve parametre türlerini koru.",
      "Metotları ana kodun altında tanımla; using veya class ekleme. Hazır LINQ/Sum/Reverse kullanmadan öğrendiğin döngülerle çöz."
    ],
    "understand": [
      "Önce delil sayısı n, sonra n delil puanı. Başka giriş yok.",
      "İki ayrı int metot yaz. Her biri bir int[] alsın: biri toplamı, diğeri en büyük değeri döndürsün. İkisini aynı diziyle çağır. Ana kod iki sonucu aşağıdaki başlıklarla yazsın.",
      "İlk satır Toplam: X, ikinci satır En yüksek: Y. İki noktadan sonra bir boşluk olsun."
    ],
    "input": [
      "3",
      "4",
      "-2",
      "9"
    ],
    "output": [
      "Toplam: 11",
      "En yüksek: 9"
    ],
    "reference": "int n = Convert.ToInt32(Console.ReadLine());\nint[] deliller = new int[n];\nfor (int i = 0; i < n; i++)\n    deliller[i] = Convert.ToInt32(Console.ReadLine());\nint toplam = Topla(deliller);\nint buyuk = EnBuyuk(deliller);\nConsole.WriteLine(\"Toplam: \" + toplam);\nConsole.WriteLine(\"En yüksek: \" + buyuk);\n\nstatic int Topla(int[] d)\n{\n    int toplam = 0;\n    foreach (int puan in d)\n        toplam += puan;\n    return toplam;\n}\n\nstatic int EnBuyuk(int[] d)\n{\n    int en = d[0];\n    for (int i = 1; i < d.Length; i++)\n        if (d[i] > en)\n            en = d[i];\n    return en;\n}",
    "hint": "Topla ve EnBuyuk ayrı metotlar olsun. Return sonuçlarını ana kodda sakla ve başlıkları orada ekle.",
    "walkthrough": [
      "İlk giriş 3: 3 elemanlı dizi oluşturulur.",
      "2. giriş 4, deliller[0] içine konur.",
      "3. giriş -2, deliller[1] içine konur.",
      "4. giriş 9, deliller[2] içine konur.",
      "İki ayrı int metot yaz. Her biri bir int[] alsın: biri toplamı, diğeri en büyük değeri döndürsün. İkisini aynı diziyle çağır. Ana kod iki sonucu aşağıdaki başlıklarla yazsın.",
      "Bu örneğin çıktısı: Toplam: 11 / En yüksek: 9."
    ],
    "words": [
      [
        "int[] parametre",
        "Metoda tek bir sayı yerine dizinin tamamı gönderilir. Parametrenin Length özelliği eleman sayısını verir. İndeksler 0’dan başlar."
      ],
      [
        "Dizi paylaşılır",
        "Dizi parametresi aynı elemanlara erişir. Metotta d[i] değişirse çağıran kodda da değişir. Parametreye yeni dizi atamak ise çağıranın değişkenini değiştirmez."
      ],
      [
        "return ve void",
        "return bir sonucu çağırana verir. void sonuç değeri vermez. Ekrana yazmak için ayrıca Console.WriteLine çalışmalıdır."
      ]
    ],
    "lineHelp": {
      "1": "Bir giriş satırı okunur ve Convert.ToInt32 ile tam sayıya çevrilir. Bu görevde girişler geçerli sayılardır.",
      "2": "n elemanlı dizi oluşturulur. Başlangıçta bütün elemanları 0’dır.",
      "3": "Dizinin elemanları sırayla gezilir. Geçerli indeksler 0 ile Length - 1 arasındadır.",
      "4": "Bir giriş satırı okunur ve Convert.ToInt32 ile tam sayıya çevrilir. Bu görevde girişler geçerli sayılardır.",
      "5": "Bu satırdaki değer hesaplanır ve soldaki değişkende tutulur. Animasyondaki değerlerle karşılaştır.",
      "6": "Bu satırdaki değer hesaplanır ve soldaki değişkende tutulur. Animasyondaki değerlerle karşılaştır.",
      "7": "İçindeki değer şimdi konsola yeni bir satır olarak eklenir.",
      "8": "İçindeki değer şimdi konsola yeni bir satır olarak eklenir.",
      "9": "Bu boş satır yalnızca kodu okumayı kolaylaştırır.",
      "10": "Bu metot tanımıdır. Parantezdeki d, çağrıda gönderilen diziyi alır. Gövde çağrı yapılınca çalışır.",
      "11": "Metodun veya bloğun başlangıcı.",
      "12": "Bu satırdaki değer hesaplanır ve soldaki değişkende tutulur. Animasyondaki değerlerle karşılaştır.",
      "13": "Dizinin elemanları sırayla gezilir. Geçerli indeksler 0 ile Length - 1 arasındadır.",
      "14": "Sağdaki değer soldaki değişkene veya dizi elemanına eklenir.",
      "15": "İfade hesaplanır, sonuç çağıran yere geri verilir ve metot biter. Bu satır tek başına ekrana yazmaz.",
      "16": "Metodun veya bloğun sonu.",
      "17": "Bu boş satır yalnızca kodu okumayı kolaylaştırır.",
      "18": "Bu metot tanımıdır. Parantezdeki d, çağrıda gönderilen diziyi alır. Gövde çağrı yapılınca çalışır.",
      "19": "Metodun veya bloğun başlangıcı.",
      "20": "Bu satırdaki değer hesaplanır ve soldaki değişkende tutulur. Animasyondaki değerlerle karşılaştır.",
      "21": "Dizinin elemanları sırayla gezilir. Geçerli indeksler 0 ile Length - 1 arasındadır.",
      "22": "Koşul doğruysa altındaki satır çalışır; yanlışsa o satır atlanır.",
      "23": "Bu satırdaki değer hesaplanır ve soldaki değişkende tutulur. Animasyondaki değerlerle karşılaştır.",
      "24": "İfade hesaplanır, sonuç çağıran yere geri verilir ve metot biter. Bu satır tek başına ekrana yazmaz.",
      "25": "Metodun veya bloğun sonu."
    },
    "frames": [
      {
        "line": 0,
        "caption": "Arşiv görevi başlıyor. Önce sayı dizisini hazırlayacağız.",
        "phase": "ready",
        "active": -1,
        "metric": "Bekleniyor",
        "result": null,
        "method": "Topla",
        "array": [
          0,
          0,
          0
        ],
        "output": [],
        "vars": {
          "n": 3,
          "durum": "Bekleniyor"
        }
      },
      {
        "line": 1,
        "caption": "İlk giriş 3. n, dizinin eleman sayısıdır.",
        "phase": "read",
        "active": -1,
        "metric": "Bekleniyor",
        "result": null,
        "method": "Topla",
        "array": [
          0,
          0,
          0
        ],
        "output": [],
        "vars": {
          "n": 3,
          "durum": "Bekleniyor"
        }
      },
      {
        "line": 2,
        "caption": "3 elemanlı dizi oluşturulur. Elemanlar başlangıçta 0.",
        "phase": "allocate",
        "active": -1,
        "metric": "Bekleniyor",
        "result": null,
        "method": "Topla",
        "array": [
          0,
          0,
          0
        ],
        "output": [],
        "vars": {
          "n": 3,
          "durum": "Bekleniyor"
        }
      },
      {
        "line": 4,
        "caption": "Girdi 4, deliller[0] içine yerleşir.",
        "phase": "read",
        "active": 0,
        "metric": "Bekleniyor",
        "result": null,
        "method": "Topla",
        "array": [
          4,
          0,
          0
        ],
        "output": [],
        "vars": {
          "n": 3,
          "indeks": 0,
          "deger": 4,
          "durum": "Bekleniyor"
        }
      },
      {
        "line": 4,
        "caption": "Girdi -2, deliller[1] içine yerleşir.",
        "phase": "read",
        "active": 1,
        "metric": "Bekleniyor",
        "result": null,
        "method": "Topla",
        "array": [
          4,
          -2,
          0
        ],
        "output": [],
        "vars": {
          "n": 3,
          "indeks": 1,
          "deger": -2,
          "durum": "Bekleniyor"
        }
      },
      {
        "line": 4,
        "caption": "Girdi 9, deliller[2] içine yerleşir.",
        "phase": "read",
        "active": 2,
        "metric": "Bekleniyor",
        "result": null,
        "method": "Topla",
        "array": [
          4,
          -2,
          9
        ],
        "output": [],
        "vars": {
          "n": 3,
          "indeks": 2,
          "deger": 9,
          "durum": "Bekleniyor"
        }
      },
      {
        "line": 5,
        "caption": "Topla çağrısına dizinin tamamı gönderilir.",
        "phase": "call",
        "active": -1,
        "metric": "Bekleniyor",
        "result": null,
        "method": "Topla",
        "array": [
          4,
          -2,
          9
        ],
        "output": [],
        "vars": {
          "n": 3,
          "durum": "Bekleniyor"
        }
      },
      {
        "line": 10,
        "caption": "Metodun d parametresi aynı dizi elemanlarına erişir.",
        "phase": "bind",
        "active": -1,
        "metric": "Bekleniyor",
        "result": null,
        "method": "Topla",
        "array": [
          4,
          -2,
          9
        ],
        "output": [],
        "vars": {
          "n": 3,
          "durum": "Bekleniyor"
        }
      },
      {
        "line": 12,
        "caption": "Toplam 0 ile başlar.",
        "phase": "calculate",
        "active": -1,
        "metric": "toplam = 0",
        "result": null,
        "method": "Topla",
        "array": [
          4,
          -2,
          9
        ],
        "output": [],
        "vars": {
          "n": 3,
          "durum": "toplam = 0"
        }
      },
      {
        "line": 14,
        "caption": "0 + 4 = 4. Toplam güncellenir.",
        "phase": "inspect",
        "active": 0,
        "metric": "toplam = 4",
        "result": null,
        "method": "Topla",
        "array": [
          4,
          -2,
          9
        ],
        "output": [],
        "vars": {
          "n": 3,
          "indeks": 0,
          "deger": 4,
          "durum": "toplam = 4"
        }
      },
      {
        "line": 14,
        "caption": "4 + -2 = 2. Toplam güncellenir.",
        "phase": "inspect",
        "active": 1,
        "metric": "toplam = 2",
        "result": null,
        "method": "Topla",
        "array": [
          4,
          -2,
          9
        ],
        "output": [],
        "vars": {
          "n": 3,
          "indeks": 1,
          "deger": -2,
          "durum": "toplam = 2"
        }
      },
      {
        "line": 14,
        "caption": "2 + 9 = 11. Toplam güncellenir.",
        "phase": "inspect",
        "active": 2,
        "metric": "toplam = 11",
        "result": null,
        "method": "Topla",
        "array": [
          4,
          -2,
          9
        ],
        "output": [],
        "vars": {
          "n": 3,
          "indeks": 2,
          "deger": 9,
          "durum": "toplam = 11"
        }
      },
      {
        "line": 15,
        "caption": "11 değeri return ile ana koda döner. Konsol hâlâ değişmez.",
        "phase": "return",
        "active": -1,
        "metric": "toplam = 11",
        "result": 11,
        "method": "Topla",
        "array": [
          4,
          -2,
          9
        ],
        "output": [],
        "vars": {
          "n": 3,
          "durum": "toplam = 11"
        }
      },
      {
        "line": 5,
        "caption": "Dönen toplam 11, toplam değişkeninde tutulur.",
        "phase": "receive",
        "active": -1,
        "metric": "toplam = 11",
        "result": 11,
        "method": "Topla",
        "array": [
          4,
          -2,
          9
        ],
        "output": [],
        "vars": {
          "n": 3,
          "durum": "toplam = 11"
        }
      },
      {
        "line": 6,
        "caption": "Şimdi aynı dizi EnBuyuk metoduna gönderilir.",
        "phase": "call",
        "active": -1,
        "metric": "toplam = 11",
        "result": null,
        "method": "EnBuyuk",
        "array": [
          4,
          -2,
          9
        ],
        "output": [],
        "vars": {
          "n": 3,
          "durum": "toplam = 11"
        }
      },
      {
        "line": 18,
        "caption": "İkinci metodun d parametresi aynı diziyi alır.",
        "phase": "bind",
        "active": -1,
        "metric": "toplam = 11",
        "result": null,
        "method": "EnBuyuk",
        "array": [
          4,
          -2,
          9
        ],
        "output": [],
        "vars": {
          "n": 3,
          "durum": "toplam = 11"
        }
      },
      {
        "line": 20,
        "caption": "en, ilk eleman 4 ile başlar.",
        "phase": "inspect",
        "active": 0,
        "metric": "en = 4",
        "result": null,
        "method": "EnBuyuk",
        "array": [
          4,
          -2,
          9
        ],
        "output": [],
        "vars": {
          "n": 3,
          "indeks": 0,
          "deger": 4,
          "durum": "en = 4"
        }
      },
      {
        "line": 22,
        "caption": "-2 > 4 → yanlış; en korunur.",
        "phase": "inspect",
        "active": 1,
        "metric": "en = 4",
        "result": null,
        "method": "EnBuyuk",
        "array": [
          4,
          -2,
          9
        ],
        "output": [],
        "vars": {
          "n": 3,
          "indeks": 1,
          "deger": -2,
          "durum": "en = 4"
        }
      },
      {
        "line": 22,
        "caption": "9 > 4 → doğru.",
        "phase": "inspect",
        "active": 2,
        "metric": "en = 4",
        "result": null,
        "method": "EnBuyuk",
        "array": [
          4,
          -2,
          9
        ],
        "output": [],
        "vars": {
          "n": 3,
          "indeks": 2,
          "deger": 9,
          "durum": "en = 4"
        }
      },
      {
        "line": 23,
        "caption": "Daha büyük değer bulundu: en = 9.",
        "phase": "inspect",
        "active": 2,
        "metric": "en = 9",
        "result": null,
        "method": "EnBuyuk",
        "array": [
          4,
          -2,
          9
        ],
        "output": [],
        "vars": {
          "n": 3,
          "indeks": 2,
          "deger": 9,
          "durum": "en = 9"
        }
      },
      {
        "line": 24,
        "caption": "9 en büyük değer olarak geri döner.",
        "phase": "return",
        "active": -1,
        "metric": "en = 9",
        "result": 9,
        "method": "EnBuyuk",
        "array": [
          4,
          -2,
          9
        ],
        "output": [],
        "vars": {
          "n": 3,
          "durum": "en = 9"
        }
      },
      {
        "line": 7,
        "caption": "Ana kod ilk rapor satırını yazar.",
        "phase": "print",
        "active": -1,
        "metric": "en = 9",
        "result": 9,
        "method": "EnBuyuk",
        "array": [
          4,
          -2,
          9
        ],
        "output": [
          "Toplam: 11"
        ],
        "vars": {
          "n": 3,
          "durum": "en = 9"
        },
        "print": "Toplam: 11"
      },
      {
        "line": 8,
        "caption": "Ana kod ikinci satırı yazar. Arşiv raporu tamam.",
        "phase": "print",
        "active": -1,
        "metric": "en = 9",
        "result": 9,
        "method": "EnBuyuk",
        "array": [
          4,
          -2,
          9
        ],
        "output": [
          "Toplam: 11",
          "En yüksek: 9"
        ],
        "vars": {
          "n": 3,
          "durum": "en = 9"
        },
        "print": "En yüksek: 9"
      }
    ]
  }
];
