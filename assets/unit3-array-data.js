window.Unit3ArrayTasks = [
  {
    "id": "edge",
    "title": "İlk ve son delili oku",
    "kind": "ÜNİTE 3 / KOLAY DİZİ GÖREVİ",
    "intro": "Üç delil numarası sırayla rafa konuyor. İlk ve son numarayı görmek istiyoruz.",
    "input": [
      "12",
      "7",
      "25"
    ],
    "output": [
      "12",
      "25"
    ],
    "reference": "int[] raf = new int[3];\nraf[0] = Convert.ToInt32(Console.ReadLine());\nraf[1] = Convert.ToInt32(Console.ReadLine());\nraf[2] = Convert.ToInt32(Console.ReadLine());\nConsole.WriteLine(raf[0]);\nConsole.WriteLine(raf[2]);",
    "understand": [
      "Üç tam sayı girecek. Her biri ayrı satırda; değerler -50 ile 50 arasında.",
      "Üç sayıyı int[] dizisinde sakla. İndeks 0’daki ilk elemanı ve indeks 2’deki son elemanı oku.",
      "Önce ilk, sonra son elemanı iki ayrı satırda yaz. Ortadaki elemanı yazma."
    ],
    "walkthrough": [
      "1. giriş 12, raf[0] olur.",
      "2. giriş 7, raf[1] olur.",
      "3. giriş 25, raf[2] olur.",
      "İlk ve son değer sırayla 12 ve 25 yazılır."
    ],
    "concept": "Dizi oluştur · 0’dan başlayan indeks",
    "hint": "İlk eleman raf[0], üç elemanlı dizinin son elemanı raf[2] olur.",
    "theme": "teal",
    "themeName": "Petrol yeşili",
    "lineHelp": {
      "1": "Bu uzunlukta bir int dizisi oluşturulur. İlk değerler 0 olur. İndeksler 0’dan başlar.",
      "2": "Sıradaki giriş okunur. Convert.ToInt32 metni tam sayıya çevirir; atamanın solundaki değişken veya dizi elemanı bu değeri alır.",
      "3": "Sıradaki giriş okunur. Convert.ToInt32 metni tam sayıya çevirir; atamanın solundaki değişken veya dizi elemanı bu değeri alır.",
      "4": "Sıradaki giriş okunur. Convert.ToInt32 metni tam sayıya çevirir; atamanın solundaki değişken veya dizi elemanı bu değeri alır.",
      "5": "Parantezdeki değer konsola tek satır yazılır. Yalnızca bu komutta örnek konsola yeni satır eklenir.",
      "6": "Parantezdeki değer konsola tek satır yazılır. Yalnızca bu komutta örnek konsola yeni satır eklenir."
    },
    "rules": [
      "Girdileri verilen sırayla, her biri ayrı satırda oku.",
      "Tam sayı girişleri geçerlidir; hatalı metin kontrolü istenmiyor.",
      "Değerleri int[] dizisinde tut. İndeksler 0’dan başlar.",
      "Yalnızca istenen sayıları, her birini ayrı satırda yaz. Başlık veya istem mesajı ekleme.",
      "Değişken adları ve uygun çözüm yolu serbest. Örnekteki sonucu sabit yazma."
    ],
    "goal": "Üç sayıyı int[] dizisinde sakla. İndeks 0’daki ilk elemanı ve indeks 2’deki son elemanı oku. Önce ilk, sonra son elemanı iki ayrı satırda yaz. Ortadaki elemanı yazma.",
    "independent": false,
    "words": [
      [
        "İndeks ile eleman sayısı aynı şey değil",
        "İndeks, elemanın yeridir ve 0’dan başlar. 3 elemanın indeksleri 0, 1, 2 olur."
      ],
      [
        "raf.Length",
        "Dizide kaç eleman olduğunu verir. Son geçerli indeks raf.Length - 1 olur."
      ],
      [
        "raf[i] = değer",
        "Yalnızca i numaralı elemanın değerini değiştirir. raf[1], ikinci elemandır."
      ]
    ],
    "frames": [
      {
        "line": 0,
        "caption": "Örneği adım adım izle. Önce dizi kurulacak, sonra elemanlar üzerinde işlem yapılacak.",
        "vars": {},
        "output": [],
        "array": [],
        "active": -1,
        "operation": "ready"
      },
      {
        "line": 1,
        "caption": "Dizi oluşturulur. 3 eleman var; ilk değerler 0.",
        "vars": {
          "raf": "[0, 0, 0]"
        },
        "output": [],
        "array": [
          0,
          0,
          0
        ],
        "active": -1,
        "operation": "create",
        "packet": null,
        "metric": null,
        "old": null
      },
      {
        "line": 2,
        "caption": "1. giriş 12. İndeks 0 olan 1. elemana yazılır.",
        "vars": {
          "raf": "[12, 0, 0]"
        },
        "output": [],
        "array": [
          12,
          0,
          0
        ],
        "active": 0,
        "operation": "read",
        "packet": "12",
        "metric": null,
        "old": 0
      },
      {
        "line": 3,
        "caption": "2. giriş 7. İndeks 1 olan 2. elemana yazılır.",
        "vars": {
          "raf": "[12, 7, 0]"
        },
        "output": [],
        "array": [
          12,
          7,
          0
        ],
        "active": 1,
        "operation": "read",
        "packet": "7",
        "metric": null,
        "old": 0
      },
      {
        "line": 4,
        "caption": "3. giriş 25. İndeks 2 olan 3. elemana yazılır.",
        "vars": {
          "raf": "[12, 7, 25]"
        },
        "output": [],
        "array": [
          12,
          7,
          25
        ],
        "active": 2,
        "operation": "read",
        "packet": "25",
        "metric": null,
        "old": 0
      },
      {
        "line": 5,
        "caption": "raf[0] ilk elemandır. Konsola 12 yazılır.",
        "vars": {
          "raf": "[12, 7, 25]"
        },
        "output": [
          "12"
        ],
        "array": [
          12,
          7,
          25
        ],
        "active": 0,
        "operation": "output",
        "packet": null,
        "metric": null,
        "old": null
      },
      {
        "line": 6,
        "caption": "raf[2] üçüncü ve son elemandır. Konsola 25 yazılır.",
        "vars": {
          "raf": "[12, 7, 25]"
        },
        "output": [
          "12",
          "25"
        ],
        "array": [
          12,
          7,
          25
        ],
        "active": 2,
        "operation": "output",
        "packet": null,
        "metric": null,
        "old": null
      }
    ]
  },
  {
    "id": "index",
    "title": "Seçilen rafa bak",
    "kind": "ÜNİTE 3 / KOLAY DİZİ GÖREVİ",
    "intro": "Dört delil yerinde duruyor. Kullanıcı hangi indeksi görmek istediğini söyleyecek.",
    "input": [
      "12",
      "7",
      "25",
      "4",
      "2"
    ],
    "output": [
      "25"
    ],
    "reference": "int[] raf = new int[4];\nraf[0] = Convert.ToInt32(Console.ReadLine());\nraf[1] = Convert.ToInt32(Console.ReadLine());\nraf[2] = Convert.ToInt32(Console.ReadLine());\nraf[3] = Convert.ToInt32(Console.ReadLine());\nint indeks = Convert.ToInt32(Console.ReadLine());\nConsole.WriteLine(raf[indeks]);",
    "understand": [
      "Önce dört tam sayı (-50–50), sonra 0–3 arasında bir indeks girecek.",
      "İlk dört sayıyı int[] dizisinde sakla. Son girişteki indeksi kullanarak bir elemanı seç.",
      "Yalnızca seçilen elemanın değerini bir satırda yaz."
    ],
    "walkthrough": [
      "12, 7, 25, 4 sırayla raf[0], raf[1], raf[2], raf[3] olur.",
      "Son giriş 2: indeks 2, üçüncü elemanı seçer.",
      "Üçüncü elemanın değeri 25 yazılır."
    ],
    "concept": "Değişkenle indeks seçme",
    "hint": "İndeksin kendisini değil, raf[indeks] değerini yazdır.",
    "theme": "teal",
    "themeName": "Petrol yeşili",
    "lineHelp": {
      "1": "Bu uzunlukta bir int dizisi oluşturulur. İlk değerler 0 olur. İndeksler 0’dan başlar.",
      "2": "Sıradaki giriş okunur. Convert.ToInt32 metni tam sayıya çevirir; atamanın solundaki değişken veya dizi elemanı bu değeri alır.",
      "3": "Sıradaki giriş okunur. Convert.ToInt32 metni tam sayıya çevirir; atamanın solundaki değişken veya dizi elemanı bu değeri alır.",
      "4": "Sıradaki giriş okunur. Convert.ToInt32 metni tam sayıya çevirir; atamanın solundaki değişken veya dizi elemanı bu değeri alır.",
      "5": "Sıradaki giriş okunur. Convert.ToInt32 metni tam sayıya çevirir; atamanın solundaki değişken veya dizi elemanı bu değeri alır.",
      "6": "Sıradaki giriş okunur. Convert.ToInt32 metni tam sayıya çevirir; atamanın solundaki değişken veya dizi elemanı bu değeri alır.",
      "7": "Parantezdeki değer konsola tek satır yazılır. Yalnızca bu komutta örnek konsola yeni satır eklenir."
    },
    "rules": [
      "Girdileri verilen sırayla, her biri ayrı satırda oku.",
      "Tam sayı girişleri geçerlidir; hatalı metin kontrolü istenmiyor.",
      "Değerleri int[] dizisinde tut. İndeksler 0’dan başlar.",
      "Yalnızca istenen sayıları, her birini ayrı satırda yaz. Başlık veya istem mesajı ekleme.",
      "Değişken adları ve uygun çözüm yolu serbest. Örnekteki sonucu sabit yazma."
    ],
    "goal": "İlk dört sayıyı int[] dizisinde sakla. Son girişteki indeksi kullanarak bir elemanı seç. Yalnızca seçilen elemanın değerini bir satırda yaz.",
    "independent": false,
    "words": [
      [
        "İndeks ile eleman sayısı aynı şey değil",
        "İndeks, elemanın yeridir ve 0’dan başlar. 3 elemanın indeksleri 0, 1, 2 olur."
      ],
      [
        "raf.Length",
        "Dizide kaç eleman olduğunu verir. Son geçerli indeks raf.Length - 1 olur."
      ],
      [
        "raf[i] = değer",
        "Yalnızca i numaralı elemanın değerini değiştirir. raf[1], ikinci elemandır."
      ]
    ],
    "frames": [
      {
        "line": 0,
        "caption": "Örneği adım adım izle. Önce dizi kurulacak, sonra elemanlar üzerinde işlem yapılacak.",
        "vars": {},
        "output": [],
        "array": [],
        "active": -1,
        "operation": "ready"
      },
      {
        "line": 1,
        "caption": "Dizi oluşturulur. 4 eleman var; ilk değerler 0.",
        "vars": {
          "raf": "[0, 0, 0, 0]"
        },
        "output": [],
        "array": [
          0,
          0,
          0,
          0
        ],
        "active": -1,
        "operation": "create",
        "packet": null,
        "metric": null,
        "old": null
      },
      {
        "line": 2,
        "caption": "1. giriş 12. İndeks 0 olan 1. elemana yazılır.",
        "vars": {
          "raf": "[12, 0, 0, 0]"
        },
        "output": [],
        "array": [
          12,
          0,
          0,
          0
        ],
        "active": 0,
        "operation": "read",
        "packet": "12",
        "metric": null,
        "old": 0
      },
      {
        "line": 3,
        "caption": "2. giriş 7. İndeks 1 olan 2. elemana yazılır.",
        "vars": {
          "raf": "[12, 7, 0, 0]"
        },
        "output": [],
        "array": [
          12,
          7,
          0,
          0
        ],
        "active": 1,
        "operation": "read",
        "packet": "7",
        "metric": null,
        "old": 0
      },
      {
        "line": 4,
        "caption": "3. giriş 25. İndeks 2 olan 3. elemana yazılır.",
        "vars": {
          "raf": "[12, 7, 25, 0]"
        },
        "output": [],
        "array": [
          12,
          7,
          25,
          0
        ],
        "active": 2,
        "operation": "read",
        "packet": "25",
        "metric": null,
        "old": 0
      },
      {
        "line": 5,
        "caption": "4. giriş 4. İndeks 3 olan 4. elemana yazılır.",
        "vars": {
          "raf": "[12, 7, 25, 4]"
        },
        "output": [],
        "array": [
          12,
          7,
          25,
          4
        ],
        "active": 3,
        "operation": "read",
        "packet": "4",
        "metric": null,
        "old": 0
      },
      {
        "line": 6,
        "caption": "Son giriş 2. Seçilen indeks 2; bu, üçüncü elemandır.",
        "vars": {
          "indeks": 2,
          "raf": "[12, 7, 25, 4]"
        },
        "output": [],
        "array": [
          12,
          7,
          25,
          4
        ],
        "active": 2,
        "operation": "select",
        "packet": "2",
        "metric": null,
        "old": null
      },
      {
        "line": 7,
        "caption": "raf[2] içindeki 25 yazılır. İndeks 2 yazılmaz.",
        "vars": {
          "indeks": 2,
          "raf": "[12, 7, 25, 4]"
        },
        "output": [
          "25"
        ],
        "array": [
          12,
          7,
          25,
          4
        ],
        "active": 2,
        "operation": "output",
        "packet": null,
        "metric": null,
        "old": null
      }
    ]
  },
  {
    "id": "replace",
    "title": "Yanlış etiketi düzelt",
    "kind": "ÜNİTE 3 / KOLAY DİZİ GÖREVİ",
    "intro": "İkinci delilin etiketi yanlış yazılmış. Yalnızca o elemanı değiştireceğiz.",
    "input": [
      "8",
      "3",
      "6",
      "20"
    ],
    "output": [
      "8",
      "20",
      "6"
    ],
    "reference": "int[] raf = new int[3];\nraf[0] = Convert.ToInt32(Console.ReadLine());\nraf[1] = Convert.ToInt32(Console.ReadLine());\nraf[2] = Convert.ToInt32(Console.ReadLine());\nint yeni = Convert.ToInt32(Console.ReadLine());\nraf[1] = yeni;\nConsole.WriteLine(raf[0]);\nConsole.WriteLine(raf[1]);\nConsole.WriteLine(raf[2]);",
    "understand": [
      "Önce üç tam sayı, sonra ikinci elemanın yeni değeri. Bütün sayılar -50–50 arasında.",
      "Üç sayıyı dizide sakla. İkinci elemanı, yani raf[1] değerini son girişle değiştir. Diğer elemanlar aynı kalsın.",
      "Dizinin son halindeki üç elemanı sırayla, ayrı satırlarda yaz."
    ],
    "walkthrough": [
      "8, 3, 6 rafa yerleşir.",
      "Son giriş 20, yeni etikettir.",
      "İndeks 1’deki 3 silinir; yerine 20 yazılır.",
      "Son hal 8, 20, 6 olur."
    ],
    "concept": "Eleman atama · ikinci eleman indeks 1",
    "hint": "raf[1] = yeni; ikinci elemanın eski değerinin yerine yenisini koyar.",
    "theme": "teal",
    "themeName": "Petrol yeşili",
    "lineHelp": {
      "1": "Bu uzunlukta bir int dizisi oluşturulur. İlk değerler 0 olur. İndeksler 0’dan başlar.",
      "2": "Sıradaki giriş okunur. Convert.ToInt32 metni tam sayıya çevirir; atamanın solundaki değişken veya dizi elemanı bu değeri alır.",
      "3": "Sıradaki giriş okunur. Convert.ToInt32 metni tam sayıya çevirir; atamanın solundaki değişken veya dizi elemanı bu değeri alır.",
      "4": "Sıradaki giriş okunur. Convert.ToInt32 metni tam sayıya çevirir; atamanın solundaki değişken veya dizi elemanı bu değeri alır.",
      "5": "Sıradaki giriş okunur. Convert.ToInt32 metni tam sayıya çevirir; atamanın solundaki değişken veya dizi elemanı bu değeri alır.",
      "6": "İndeks 1, ikinci elemandır. Yeni değer eski değerin yerine yazılır; diğer elemanlar değişmez.",
      "7": "Parantezdeki değer konsola tek satır yazılır. Yalnızca bu komutta örnek konsola yeni satır eklenir.",
      "8": "Parantezdeki değer konsola tek satır yazılır. Yalnızca bu komutta örnek konsola yeni satır eklenir.",
      "9": "Parantezdeki değer konsola tek satır yazılır. Yalnızca bu komutta örnek konsola yeni satır eklenir."
    },
    "rules": [
      "Girdileri verilen sırayla, her biri ayrı satırda oku.",
      "Tam sayı girişleri geçerlidir; hatalı metin kontrolü istenmiyor.",
      "Değerleri int[] dizisinde tut. İndeksler 0’dan başlar.",
      "Yalnızca istenen sayıları, her birini ayrı satırda yaz. Başlık veya istem mesajı ekleme.",
      "Değişken adları ve uygun çözüm yolu serbest. Örnekteki sonucu sabit yazma."
    ],
    "goal": "Üç sayıyı dizide sakla. İkinci elemanı, yani raf[1] değerini son girişle değiştir. Diğer elemanlar aynı kalsın. Dizinin son halindeki üç elemanı sırayla, ayrı satırlarda yaz.",
    "independent": false,
    "words": [
      [
        "İndeks ile eleman sayısı aynı şey değil",
        "İndeks, elemanın yeridir ve 0’dan başlar. 3 elemanın indeksleri 0, 1, 2 olur."
      ],
      [
        "raf.Length",
        "Dizide kaç eleman olduğunu verir. Son geçerli indeks raf.Length - 1 olur."
      ],
      [
        "raf[i] = değer",
        "Yalnızca i numaralı elemanın değerini değiştirir. raf[1], ikinci elemandır."
      ]
    ],
    "frames": [
      {
        "line": 0,
        "caption": "Örneği adım adım izle. Önce dizi kurulacak, sonra elemanlar üzerinde işlem yapılacak.",
        "vars": {},
        "output": [],
        "array": [],
        "active": -1,
        "operation": "ready"
      },
      {
        "line": 1,
        "caption": "Dizi oluşturulur. 3 eleman var; ilk değerler 0.",
        "vars": {
          "raf": "[0, 0, 0]"
        },
        "output": [],
        "array": [
          0,
          0,
          0
        ],
        "active": -1,
        "operation": "create",
        "packet": null,
        "metric": null,
        "old": null
      },
      {
        "line": 2,
        "caption": "1. giriş 8. İndeks 0 olan 1. elemana yazılır.",
        "vars": {
          "raf": "[8, 0, 0]"
        },
        "output": [],
        "array": [
          8,
          0,
          0
        ],
        "active": 0,
        "operation": "read",
        "packet": "8",
        "metric": null,
        "old": 0
      },
      {
        "line": 3,
        "caption": "2. giriş 3. İndeks 1 olan 2. elemana yazılır.",
        "vars": {
          "raf": "[8, 3, 0]"
        },
        "output": [],
        "array": [
          8,
          3,
          0
        ],
        "active": 1,
        "operation": "read",
        "packet": "3",
        "metric": null,
        "old": 0
      },
      {
        "line": 4,
        "caption": "3. giriş 6. İndeks 2 olan 3. elemana yazılır.",
        "vars": {
          "raf": "[8, 3, 6]"
        },
        "output": [],
        "array": [
          8,
          3,
          6
        ],
        "active": 2,
        "operation": "read",
        "packet": "6",
        "metric": null,
        "old": 0
      },
      {
        "line": 5,
        "caption": "Yeni etiket 20 olarak okunur. Henüz dizideki 3 değişmedi.",
        "vars": {
          "yeni": 20,
          "raf": "[8, 3, 6]"
        },
        "output": [],
        "array": [
          8,
          3,
          6
        ],
        "active": 1,
        "operation": "select",
        "packet": "20",
        "metric": null,
        "old": null
      },
      {
        "line": 6,
        "caption": "Yalnızca raf[1] değişir: 3 yerine 20 yazılır.",
        "vars": {
          "yeni": 20,
          "raf": "[8, 20, 6]"
        },
        "output": [],
        "array": [
          8,
          20,
          6
        ],
        "active": 1,
        "operation": "update",
        "packet": "20",
        "metric": null,
        "old": 3
      },
      {
        "line": 7,
        "caption": "raf[0] = 8 konsola yazılır.",
        "vars": {
          "yeni": 20,
          "raf": "[8, 20, 6]"
        },
        "output": [
          "8"
        ],
        "array": [
          8,
          20,
          6
        ],
        "active": 0,
        "operation": "output",
        "packet": null,
        "metric": null,
        "old": null
      },
      {
        "line": 8,
        "caption": "raf[1] = 20 konsola yazılır.",
        "vars": {
          "yeni": 20,
          "raf": "[8, 20, 6]"
        },
        "output": [
          "8",
          "20"
        ],
        "array": [
          8,
          20,
          6
        ],
        "active": 1,
        "operation": "output",
        "packet": null,
        "metric": null,
        "old": null
      },
      {
        "line": 9,
        "caption": "raf[2] = 6 konsola yazılır.",
        "vars": {
          "yeni": 20,
          "raf": "[8, 20, 6]"
        },
        "output": [
          "8",
          "20",
          "6"
        ],
        "array": [
          8,
          20,
          6
        ],
        "active": 2,
        "operation": "output",
        "packet": null,
        "metric": null,
        "old": null
      }
    ]
  },
  {
    "id": "walk",
    "title": "Rafları sırayla gez",
    "kind": "ÜNİTE 3 / KOLAY DİZİ GÖREVİ",
    "intro": "Bütün delil numaralarını yerlerini değiştirmeden sırayla kontrol et.",
    "input": [
      "3",
      "12",
      "7",
      "20"
    ],
    "output": [
      "12",
      "7",
      "20"
    ],
    "reference": "int adet = Convert.ToInt32(Console.ReadLine());\nint[] raf = new int[adet];\nfor (int i = 0; i < raf.Length; i++)\n{\n    raf[i] = Convert.ToInt32(Console.ReadLine());\n}\nfor (int i = 0; i < raf.Length; i++)\n{\n    Console.WriteLine(raf[i]);\n}",
    "understand": [
      "İlk satır eleman sayısı: 1–6 arasında. Sonra bu sayıda tam sayı (-50 ile 50 arasında) girilecek.",
      "Sayıları int[] dizisinde sakla. Diziyi ilk elemandan son elemana kadar gez.",
      "Bütün elemanları giriş sırasıyla, her birini ayrı satırda yaz."
    ],
    "walkthrough": [
      "İlk giriş 3, eleman sayısıdır; çıktı değildir.",
      "Sonraki 12, 7, 20 dizinin elemanlarıdır.",
      "İndeks 0, 1, 2 sırasıyla gezilir; 12, 7, 20 yazılır."
    ],
    "concept": "for · Length · sırayla okuma",
    "hint": "Sayaç 0’dan başlar. Koşul i < raf.Length olmalı; <= son sınırı aşar.",
    "theme": "teal",
    "themeName": "Petrol yeşili",
    "lineHelp": {
      "1": "Sıradaki giriş okunur. Convert.ToInt32 metni tam sayıya çevirir; atamanın solundaki değişken veya dizi elemanı bu değeri alır.",
      "2": "Bu uzunlukta bir int dizisi oluşturulur. İlk değerler 0 olur. İndeksler 0’dan başlar.",
      "3": "Önce sayaç başlar, koşul kontrol edilir. Her turun sonunda sayaç güncellenir. Length eleman sayısıdır; son indeks Length - 1 olur.",
      "4": "Bu bloktaki komutlar birlikte çalışır.",
      "5": "Sıradaki giriş okunur. Convert.ToInt32 metni tam sayıya çevirir; atamanın solundaki değişken veya dizi elemanı bu değeri alır.",
      "6": "Bu blok bitti; döngü varsa koşul tekrar kontrol edilir.",
      "7": "Önce sayaç başlar, koşul kontrol edilir. Her turun sonunda sayaç güncellenir. Length eleman sayısıdır; son indeks Length - 1 olur.",
      "8": "Bu bloktaki komutlar birlikte çalışır.",
      "9": "Parantezdeki değer konsola tek satır yazılır. Yalnızca bu komutta örnek konsola yeni satır eklenir.",
      "10": "Bu blok bitti; döngü varsa koşul tekrar kontrol edilir."
    },
    "rules": [
      "Girdileri verilen sırayla, her biri ayrı satırda oku.",
      "Tam sayı girişleri geçerlidir; hatalı metin kontrolü istenmiyor.",
      "Değerleri int[] dizisinde tut. İndeksler 0’dan başlar.",
      "Yalnızca istenen sayıları, her birini ayrı satırda yaz. Başlık veya istem mesajı ekleme.",
      "Değişken adları ve uygun çözüm yolu serbest. Örnekteki sonucu sabit yazma."
    ],
    "goal": "Sayıları int[] dizisinde sakla. Diziyi ilk elemandan son elemana kadar gez. Bütün elemanları giriş sırasıyla, her birini ayrı satırda yaz.",
    "independent": false,
    "words": [
      [
        "İndeks ile eleman sayısı aynı şey değil",
        "İndeks, elemanın yeridir ve 0’dan başlar. 3 elemanın indeksleri 0, 1, 2 olur."
      ],
      [
        "raf.Length",
        "Dizide kaç eleman olduğunu verir. Son geçerli indeks raf.Length - 1 olur."
      ],
      [
        "raf[i] = değer",
        "Yalnızca i numaralı elemanın değerini değiştirir. raf[1], ikinci elemandır."
      ]
    ],
    "frames": [
      {
        "line": 0,
        "caption": "Örneği adım adım izle. Önce dizi kurulacak, sonra elemanlar üzerinde işlem yapılacak.",
        "vars": {},
        "output": [],
        "array": [],
        "active": -1,
        "operation": "ready"
      },
      {
        "line": 1,
        "caption": "İlk giriş 3: dizi 3 elemanlı olacak.",
        "vars": {
          "adet": 3
        },
        "output": [],
        "array": [],
        "active": -1,
        "operation": "count",
        "packet": "3",
        "metric": null,
        "old": null
      },
      {
        "line": 2,
        "caption": "Dizi oluşturulur. Her eleman başlangıçta 0.",
        "vars": {
          "adet": 3,
          "raf": "[0, 0, 0]"
        },
        "output": [],
        "array": [
          0,
          0,
          0
        ],
        "active": -1,
        "operation": "create",
        "packet": null,
        "metric": null,
        "old": null
      },
      {
        "line": 3,
        "caption": "i = 0. 0 < 3 doğru; sıradaki eleman okunacak.",
        "vars": {
          "adet": 3,
          "i": 0,
          "raf": "[0, 0, 0]"
        },
        "output": [],
        "array": [
          0,
          0,
          0
        ],
        "active": 0,
        "operation": "scan",
        "packet": null,
        "metric": null,
        "old": null
      },
      {
        "line": 5,
        "caption": "Sıradaki giriş 12. raf[0] içine yazılır.",
        "vars": {
          "adet": 3,
          "i": 0,
          "raf": "[12, 0, 0]"
        },
        "output": [],
        "array": [
          12,
          0,
          0
        ],
        "active": 0,
        "operation": "read",
        "packet": "12",
        "metric": null,
        "old": 0
      },
      {
        "line": 3,
        "caption": "i = 1. 1 < 3 doğru; sıradaki eleman okunacak.",
        "vars": {
          "adet": 3,
          "i": 1,
          "raf": "[12, 0, 0]"
        },
        "output": [],
        "array": [
          12,
          0,
          0
        ],
        "active": 1,
        "operation": "scan",
        "packet": null,
        "metric": null,
        "old": null
      },
      {
        "line": 5,
        "caption": "Sıradaki giriş 7. raf[1] içine yazılır.",
        "vars": {
          "adet": 3,
          "i": 1,
          "raf": "[12, 7, 0]"
        },
        "output": [],
        "array": [
          12,
          7,
          0
        ],
        "active": 1,
        "operation": "read",
        "packet": "7",
        "metric": null,
        "old": 0
      },
      {
        "line": 3,
        "caption": "i = 2. 2 < 3 doğru; sıradaki eleman okunacak.",
        "vars": {
          "adet": 3,
          "i": 2,
          "raf": "[12, 7, 0]"
        },
        "output": [],
        "array": [
          12,
          7,
          0
        ],
        "active": 2,
        "operation": "scan",
        "packet": null,
        "metric": null,
        "old": null
      },
      {
        "line": 5,
        "caption": "Sıradaki giriş 20. raf[2] içine yazılır.",
        "vars": {
          "adet": 3,
          "i": 2,
          "raf": "[12, 7, 20]"
        },
        "output": [],
        "array": [
          12,
          7,
          20
        ],
        "active": 2,
        "operation": "read",
        "packet": "20",
        "metric": null,
        "old": 0
      },
      {
        "line": 3,
        "caption": "i = 3. 3 < 3 yanlış. Bütün elemanlar okundu.",
        "vars": {
          "adet": 3,
          "i": 3,
          "raf": "[12, 7, 20]"
        },
        "output": [],
        "array": [
          12,
          7,
          20
        ],
        "active": -1,
        "operation": "endread",
        "packet": null,
        "metric": null,
        "old": null
      },
      {
        "line": 7,
        "caption": "i = 0. Sıradaki eleman raf[0].",
        "vars": {
          "adet": 3,
          "i": 0,
          "raf": "[12, 7, 20]"
        },
        "output": [],
        "array": [
          12,
          7,
          20
        ],
        "active": 0,
        "operation": "scan",
        "packet": null,
        "metric": null,
        "old": null
      },
      {
        "line": 9,
        "caption": "12 yazılır. Sonra sayaç ilerler.",
        "vars": {
          "adet": 3,
          "i": 0,
          "raf": "[12, 7, 20]"
        },
        "output": [
          "12"
        ],
        "array": [
          12,
          7,
          20
        ],
        "active": 0,
        "operation": "output",
        "packet": null,
        "metric": null,
        "old": null
      },
      {
        "line": 7,
        "caption": "i = 1. Sıradaki eleman raf[1].",
        "vars": {
          "adet": 3,
          "i": 1,
          "raf": "[12, 7, 20]"
        },
        "output": [
          "12"
        ],
        "array": [
          12,
          7,
          20
        ],
        "active": 1,
        "operation": "scan",
        "packet": null,
        "metric": null,
        "old": null
      },
      {
        "line": 9,
        "caption": "7 yazılır. Sonra sayaç ilerler.",
        "vars": {
          "adet": 3,
          "i": 1,
          "raf": "[12, 7, 20]"
        },
        "output": [
          "12",
          "7"
        ],
        "array": [
          12,
          7,
          20
        ],
        "active": 1,
        "operation": "output",
        "packet": null,
        "metric": null,
        "old": null
      },
      {
        "line": 7,
        "caption": "i = 2. Sıradaki eleman raf[2].",
        "vars": {
          "adet": 3,
          "i": 2,
          "raf": "[12, 7, 20]"
        },
        "output": [
          "12",
          "7"
        ],
        "array": [
          12,
          7,
          20
        ],
        "active": 2,
        "operation": "scan",
        "packet": null,
        "metric": null,
        "old": null
      },
      {
        "line": 9,
        "caption": "20 yazılır. Sonra sayaç ilerler.",
        "vars": {
          "adet": 3,
          "i": 2,
          "raf": "[12, 7, 20]"
        },
        "output": [
          "12",
          "7",
          "20"
        ],
        "array": [
          12,
          7,
          20
        ],
        "active": 2,
        "operation": "output",
        "packet": null,
        "metric": null,
        "old": null
      },
      {
        "line": 7,
        "caption": "i = 3. 3 < 3 yanlış; bütün elemanlar yazıldı.",
        "vars": {
          "adet": 3,
          "i": 3,
          "raf": "[12, 7, 20]"
        },
        "output": [
          "12",
          "7",
          "20"
        ],
        "array": [
          12,
          7,
          20
        ],
        "active": -1,
        "operation": "scan",
        "packet": null,
        "metric": null,
        "old": null
      }
    ]
  },
  {
    "id": "sum",
    "title": "Delil puanlarını topla",
    "kind": "ÜNİTE 3 / KOLAY DİZİ GÖREVİ",
    "intro": "Raflardaki her delilin bir puanı var. Hepsinin toplamını bul.",
    "input": [
      "3",
      "8",
      "5",
      "2"
    ],
    "output": [
      "15"
    ],
    "reference": "int adet = Convert.ToInt32(Console.ReadLine());\nint[] raf = new int[adet];\nfor (int i = 0; i < raf.Length; i++)\n{\n    raf[i] = Convert.ToInt32(Console.ReadLine());\n}\nint toplam = 0;\nfor (int i = 0; i < raf.Length; i++)\n{\n    toplam += raf[i];\n}\nConsole.WriteLine(toplam);",
    "understand": [
      "İlk satır eleman sayısı: 1–6 arasında. Sonra bu sayıda tam sayı (-50 ile 50 arasında) girilecek.",
      "Puanları dizide sakla. Bütün elemanları toplayan bir toplam değişkeni kullan.",
      "Yalnızca toplamı tek satırda yaz."
    ],
    "walkthrough": [
      "3 eleman okunacak: 8, 5 ve 2.",
      "Toplam 0’dan başlar: önce 8, sonra 13, sonra 15 olur.",
      "Döngü bitince yalnızca 15 yazılır."
    ],
    "concept": "Biriktirme · dizi toplamı",
    "hint": "Toplamı döngüden önce 0 yap. Her elemanı bir kez ekle.",
    "theme": "teal",
    "themeName": "Petrol yeşili",
    "lineHelp": {
      "1": "Sıradaki giriş okunur. Convert.ToInt32 metni tam sayıya çevirir; atamanın solundaki değişken veya dizi elemanı bu değeri alır.",
      "2": "Bu uzunlukta bir int dizisi oluşturulur. İlk değerler 0 olur. İndeksler 0’dan başlar.",
      "3": "Önce sayaç başlar, koşul kontrol edilir. Her turun sonunda sayaç güncellenir. Length eleman sayısıdır; son indeks Length - 1 olur.",
      "4": "Bu bloktaki komutlar birlikte çalışır.",
      "5": "Sıradaki giriş okunur. Convert.ToInt32 metni tam sayıya çevirir; atamanın solundaki değişken veya dizi elemanı bu değeri alır.",
      "6": "Bu blok bitti; döngü varsa koşul tekrar kontrol edilir.",
      "7": "Bu satır, hesapta kullanılacak değişkeni oluşturur veya değerini günceller.",
      "8": "Önce sayaç başlar, koşul kontrol edilir. Her turun sonunda sayaç güncellenir. Length eleman sayısıdır; son indeks Length - 1 olur.",
      "9": "Bu bloktaki komutlar birlikte çalışır.",
      "10": "Sıradaki dizi elemanı biriken toplama eklenir.",
      "11": "Bu blok bitti; döngü varsa koşul tekrar kontrol edilir.",
      "12": "Parantezdeki değer konsola tek satır yazılır. Yalnızca bu komutta örnek konsola yeni satır eklenir."
    },
    "rules": [
      "Girdileri verilen sırayla, her biri ayrı satırda oku.",
      "Tam sayı girişleri geçerlidir; hatalı metin kontrolü istenmiyor.",
      "Değerleri int[] dizisinde tut. İndeksler 0’dan başlar.",
      "Yalnızca istenen sayıları, her birini ayrı satırda yaz. Başlık veya istem mesajı ekleme.",
      "Değişken adları ve uygun çözüm yolu serbest. Örnekteki sonucu sabit yazma."
    ],
    "goal": "Puanları dizide sakla. Bütün elemanları toplayan bir toplam değişkeni kullan. Yalnızca toplamı tek satırda yaz.",
    "independent": false,
    "words": [
      [
        "İndeks ile eleman sayısı aynı şey değil",
        "İndeks, elemanın yeridir ve 0’dan başlar. 3 elemanın indeksleri 0, 1, 2 olur."
      ],
      [
        "raf.Length",
        "Dizide kaç eleman olduğunu verir. Son geçerli indeks raf.Length - 1 olur."
      ],
      [
        "raf[i] = değer",
        "Yalnızca i numaralı elemanın değerini değiştirir. raf[1], ikinci elemandır."
      ]
    ],
    "frames": [
      {
        "line": 0,
        "caption": "Örneği adım adım izle. Önce dizi kurulacak, sonra elemanlar üzerinde işlem yapılacak.",
        "vars": {},
        "output": [],
        "array": [],
        "active": -1,
        "operation": "ready"
      },
      {
        "line": 1,
        "caption": "İlk giriş 3: dizi 3 elemanlı olacak.",
        "vars": {
          "adet": 3
        },
        "output": [],
        "array": [],
        "active": -1,
        "operation": "count",
        "packet": "3",
        "metric": null,
        "old": null
      },
      {
        "line": 2,
        "caption": "Dizi oluşturulur. Her eleman başlangıçta 0.",
        "vars": {
          "adet": 3,
          "raf": "[0, 0, 0]"
        },
        "output": [],
        "array": [
          0,
          0,
          0
        ],
        "active": -1,
        "operation": "create",
        "packet": null,
        "metric": null,
        "old": null
      },
      {
        "line": 3,
        "caption": "i = 0. 0 < 3 doğru; sıradaki eleman okunacak.",
        "vars": {
          "adet": 3,
          "i": 0,
          "raf": "[0, 0, 0]"
        },
        "output": [],
        "array": [
          0,
          0,
          0
        ],
        "active": 0,
        "operation": "scan",
        "packet": null,
        "metric": null,
        "old": null
      },
      {
        "line": 5,
        "caption": "Sıradaki giriş 8. raf[0] içine yazılır.",
        "vars": {
          "adet": 3,
          "i": 0,
          "raf": "[8, 0, 0]"
        },
        "output": [],
        "array": [
          8,
          0,
          0
        ],
        "active": 0,
        "operation": "read",
        "packet": "8",
        "metric": null,
        "old": 0
      },
      {
        "line": 3,
        "caption": "i = 1. 1 < 3 doğru; sıradaki eleman okunacak.",
        "vars": {
          "adet": 3,
          "i": 1,
          "raf": "[8, 0, 0]"
        },
        "output": [],
        "array": [
          8,
          0,
          0
        ],
        "active": 1,
        "operation": "scan",
        "packet": null,
        "metric": null,
        "old": null
      },
      {
        "line": 5,
        "caption": "Sıradaki giriş 5. raf[1] içine yazılır.",
        "vars": {
          "adet": 3,
          "i": 1,
          "raf": "[8, 5, 0]"
        },
        "output": [],
        "array": [
          8,
          5,
          0
        ],
        "active": 1,
        "operation": "read",
        "packet": "5",
        "metric": null,
        "old": 0
      },
      {
        "line": 3,
        "caption": "i = 2. 2 < 3 doğru; sıradaki eleman okunacak.",
        "vars": {
          "adet": 3,
          "i": 2,
          "raf": "[8, 5, 0]"
        },
        "output": [],
        "array": [
          8,
          5,
          0
        ],
        "active": 2,
        "operation": "scan",
        "packet": null,
        "metric": null,
        "old": null
      },
      {
        "line": 5,
        "caption": "Sıradaki giriş 2. raf[2] içine yazılır.",
        "vars": {
          "adet": 3,
          "i": 2,
          "raf": "[8, 5, 2]"
        },
        "output": [],
        "array": [
          8,
          5,
          2
        ],
        "active": 2,
        "operation": "read",
        "packet": "2",
        "metric": null,
        "old": 0
      },
      {
        "line": 3,
        "caption": "i = 3. 3 < 3 yanlış. Bütün elemanlar okundu.",
        "vars": {
          "adet": 3,
          "i": 3,
          "raf": "[8, 5, 2]"
        },
        "output": [],
        "array": [
          8,
          5,
          2
        ],
        "active": -1,
        "operation": "endread",
        "packet": null,
        "metric": null,
        "old": null
      },
      {
        "line": 7,
        "caption": "Toplam başlangıçta 0. Dizinin elemanları henüz eklenmedi.",
        "vars": {
          "adet": 3,
          "toplam": 0,
          "raf": "[8, 5, 2]"
        },
        "output": [],
        "array": [
          8,
          5,
          2
        ],
        "active": -1,
        "operation": "scan",
        "packet": null,
        "metric": {
          "label": "TOPLAM",
          "value": 0
        },
        "old": null
      },
      {
        "line": 8,
        "caption": "İndeks 0 okunacak; toplam henüz 0.",
        "vars": {
          "adet": 3,
          "toplam": 0,
          "i": 0,
          "raf": "[8, 5, 2]"
        },
        "output": [],
        "array": [
          8,
          5,
          2
        ],
        "active": 0,
        "operation": "scan",
        "packet": null,
        "metric": {
          "label": "TOPLAM",
          "value": 0
        },
        "old": null
      },
      {
        "line": 10,
        "caption": "8 toplama eklenir. Yeni toplam 8.",
        "vars": {
          "adet": 3,
          "toplam": 8,
          "i": 0,
          "raf": "[8, 5, 2]"
        },
        "output": [],
        "array": [
          8,
          5,
          2
        ],
        "active": 0,
        "operation": "collect",
        "packet": "8",
        "metric": {
          "label": "TOPLAM",
          "value": 8
        },
        "old": null
      },
      {
        "line": 8,
        "caption": "İndeks 1 okunacak; toplam henüz 8.",
        "vars": {
          "adet": 3,
          "toplam": 8,
          "i": 1,
          "raf": "[8, 5, 2]"
        },
        "output": [],
        "array": [
          8,
          5,
          2
        ],
        "active": 1,
        "operation": "scan",
        "packet": null,
        "metric": {
          "label": "TOPLAM",
          "value": 8
        },
        "old": null
      },
      {
        "line": 10,
        "caption": "5 toplama eklenir. Yeni toplam 13.",
        "vars": {
          "adet": 3,
          "toplam": 13,
          "i": 1,
          "raf": "[8, 5, 2]"
        },
        "output": [],
        "array": [
          8,
          5,
          2
        ],
        "active": 1,
        "operation": "collect",
        "packet": "5",
        "metric": {
          "label": "TOPLAM",
          "value": 13
        },
        "old": null
      },
      {
        "line": 8,
        "caption": "İndeks 2 okunacak; toplam henüz 13.",
        "vars": {
          "adet": 3,
          "toplam": 13,
          "i": 2,
          "raf": "[8, 5, 2]"
        },
        "output": [],
        "array": [
          8,
          5,
          2
        ],
        "active": 2,
        "operation": "scan",
        "packet": null,
        "metric": {
          "label": "TOPLAM",
          "value": 13
        },
        "old": null
      },
      {
        "line": 10,
        "caption": "2 toplama eklenir. Yeni toplam 15.",
        "vars": {
          "adet": 3,
          "toplam": 15,
          "i": 2,
          "raf": "[8, 5, 2]"
        },
        "output": [],
        "array": [
          8,
          5,
          2
        ],
        "active": 2,
        "operation": "collect",
        "packet": "2",
        "metric": {
          "label": "TOPLAM",
          "value": 15
        },
        "old": null
      },
      {
        "line": 12,
        "caption": "Döngü bitti. Toplam 15 konsola bir kez yazılır.",
        "vars": {
          "adet": 3,
          "toplam": 15,
          "raf": "[8, 5, 2]"
        },
        "output": [
          "15"
        ],
        "array": [
          8,
          5,
          2
        ],
        "active": -1,
        "operation": "output",
        "packet": null,
        "metric": {
          "label": "TOPLAM",
          "value": 15
        },
        "old": null
      }
    ]
  },
  {
    "id": "count",
    "title": "Dolu rafları say",
    "kind": "ÜNİTE 3 / KOLAY DİZİ GÖREVİ",
    "intro": "0 yazan raf boştur. Pozitif sayı yazan raf doludur; içindeki miktarı değil, dolu rafları say.",
    "input": [
      "4",
      "0",
      "3",
      "0",
      "5"
    ],
    "output": [
      "2"
    ],
    "reference": "int adet = Convert.ToInt32(Console.ReadLine());\nint[] raf = new int[adet];\nfor (int i = 0; i < raf.Length; i++)\n{\n    raf[i] = Convert.ToInt32(Console.ReadLine());\n}\nint dolu = 0;\nfor (int i = 0; i < raf.Length; i++)\n{\n    if (raf[i] > 0)\n    {\n        dolu++;\n    }\n}\nConsole.WriteLine(dolu);",
    "understand": [
      "İlk satır 1–6 arasında eleman sayısı. Sonra bu sayıda, 0–50 arasında raf miktarı.",
      "Miktarları dizide sakla. Değeri 0’dan büyük olan elemanları say. Miktarları toplama.",
      "Yalnızca dolu raf sayısını bir satırda yaz."
    ],
    "walkthrough": [
      "4 raf var; miktarlar 0, 3, 0, 5.",
      "İndeks 0 ve 2 boş. İndeks 1 ve 3 dolu.",
      "Dolu iki raf olduğu için 2 yazılır; 3 + 5 hesaplanmaz."
    ],
    "concept": "Koşul · sayaç · toplamdan farkı",
    "hint": "Her pozitif elemanda sayacı yalnızca 1 artır.",
    "theme": "teal",
    "themeName": "Petrol yeşili",
    "lineHelp": {
      "1": "Sıradaki giriş okunur. Convert.ToInt32 metni tam sayıya çevirir; atamanın solundaki değişken veya dizi elemanı bu değeri alır.",
      "2": "Bu uzunlukta bir int dizisi oluşturulur. İlk değerler 0 olur. İndeksler 0’dan başlar.",
      "3": "Önce sayaç başlar, koşul kontrol edilir. Her turun sonunda sayaç güncellenir. Length eleman sayısıdır; son indeks Length - 1 olur.",
      "4": "Bu bloktaki komutlar birlikte çalışır.",
      "5": "Sıradaki giriş okunur. Convert.ToInt32 metni tam sayıya çevirir; atamanın solundaki değişken veya dizi elemanı bu değeri alır.",
      "6": "Bu blok bitti; döngü varsa koşul tekrar kontrol edilir.",
      "7": "Bu satır, hesapta kullanılacak değişkeni oluşturur veya değerini günceller.",
      "8": "Önce sayaç başlar, koşul kontrol edilir. Her turun sonunda sayaç güncellenir. Length eleman sayısıdır; son indeks Length - 1 olur.",
      "9": "Bu bloktaki komutlar birlikte çalışır.",
      "10": "Koşul doğruysa hemen sonraki blok çalışır; yanlışsa blok atlanır.",
      "11": "Bu bloktaki komutlar birlikte çalışır.",
      "12": "Koşulu geçen dolu raf sayısı bir artırılır.",
      "13": "Bu blok bitti; döngü varsa koşul tekrar kontrol edilir.",
      "14": "Bu blok bitti; döngü varsa koşul tekrar kontrol edilir.",
      "15": "Parantezdeki değer konsola tek satır yazılır. Yalnızca bu komutta örnek konsola yeni satır eklenir."
    },
    "rules": [
      "Girdileri verilen sırayla, her biri ayrı satırda oku.",
      "Tam sayı girişleri geçerlidir; hatalı metin kontrolü istenmiyor.",
      "Değerleri int[] dizisinde tut. İndeksler 0’dan başlar.",
      "Yalnızca istenen sayıları, her birini ayrı satırda yaz. Başlık veya istem mesajı ekleme.",
      "Değişken adları ve uygun çözüm yolu serbest. Örnekteki sonucu sabit yazma."
    ],
    "goal": "Miktarları dizide sakla. Değeri 0’dan büyük olan elemanları say. Miktarları toplama. Yalnızca dolu raf sayısını bir satırda yaz.",
    "independent": false,
    "words": [
      [
        "İndeks ile eleman sayısı aynı şey değil",
        "İndeks, elemanın yeridir ve 0’dan başlar. 3 elemanın indeksleri 0, 1, 2 olur."
      ],
      [
        "raf.Length",
        "Dizide kaç eleman olduğunu verir. Son geçerli indeks raf.Length - 1 olur."
      ],
      [
        "raf[i] = değer",
        "Yalnızca i numaralı elemanın değerini değiştirir. raf[1], ikinci elemandır."
      ]
    ],
    "frames": [
      {
        "line": 0,
        "caption": "Örneği adım adım izle. Önce dizi kurulacak, sonra elemanlar üzerinde işlem yapılacak.",
        "vars": {},
        "output": [],
        "array": [],
        "active": -1,
        "operation": "ready"
      },
      {
        "line": 1,
        "caption": "İlk giriş 4: dizi 4 elemanlı olacak.",
        "vars": {
          "adet": 4
        },
        "output": [],
        "array": [],
        "active": -1,
        "operation": "count",
        "packet": "4",
        "metric": null,
        "old": null
      },
      {
        "line": 2,
        "caption": "Dizi oluşturulur. Her eleman başlangıçta 0.",
        "vars": {
          "adet": 4,
          "raf": "[0, 0, 0, 0]"
        },
        "output": [],
        "array": [
          0,
          0,
          0,
          0
        ],
        "active": -1,
        "operation": "create",
        "packet": null,
        "metric": null,
        "old": null
      },
      {
        "line": 3,
        "caption": "i = 0. 0 < 4 doğru; sıradaki eleman okunacak.",
        "vars": {
          "adet": 4,
          "i": 0,
          "raf": "[0, 0, 0, 0]"
        },
        "output": [],
        "array": [
          0,
          0,
          0,
          0
        ],
        "active": 0,
        "operation": "scan",
        "packet": null,
        "metric": null,
        "old": null
      },
      {
        "line": 5,
        "caption": "Sıradaki giriş 0. raf[0] içine yazılır.",
        "vars": {
          "adet": 4,
          "i": 0,
          "raf": "[0, 0, 0, 0]"
        },
        "output": [],
        "array": [
          0,
          0,
          0,
          0
        ],
        "active": 0,
        "operation": "read",
        "packet": "0",
        "metric": null,
        "old": 0
      },
      {
        "line": 3,
        "caption": "i = 1. 1 < 4 doğru; sıradaki eleman okunacak.",
        "vars": {
          "adet": 4,
          "i": 1,
          "raf": "[0, 0, 0, 0]"
        },
        "output": [],
        "array": [
          0,
          0,
          0,
          0
        ],
        "active": 1,
        "operation": "scan",
        "packet": null,
        "metric": null,
        "old": null
      },
      {
        "line": 5,
        "caption": "Sıradaki giriş 3. raf[1] içine yazılır.",
        "vars": {
          "adet": 4,
          "i": 1,
          "raf": "[0, 3, 0, 0]"
        },
        "output": [],
        "array": [
          0,
          3,
          0,
          0
        ],
        "active": 1,
        "operation": "read",
        "packet": "3",
        "metric": null,
        "old": 0
      },
      {
        "line": 3,
        "caption": "i = 2. 2 < 4 doğru; sıradaki eleman okunacak.",
        "vars": {
          "adet": 4,
          "i": 2,
          "raf": "[0, 3, 0, 0]"
        },
        "output": [],
        "array": [
          0,
          3,
          0,
          0
        ],
        "active": 2,
        "operation": "scan",
        "packet": null,
        "metric": null,
        "old": null
      },
      {
        "line": 5,
        "caption": "Sıradaki giriş 0. raf[2] içine yazılır.",
        "vars": {
          "adet": 4,
          "i": 2,
          "raf": "[0, 3, 0, 0]"
        },
        "output": [],
        "array": [
          0,
          3,
          0,
          0
        ],
        "active": 2,
        "operation": "read",
        "packet": "0",
        "metric": null,
        "old": 0
      },
      {
        "line": 3,
        "caption": "i = 3. 3 < 4 doğru; sıradaki eleman okunacak.",
        "vars": {
          "adet": 4,
          "i": 3,
          "raf": "[0, 3, 0, 0]"
        },
        "output": [],
        "array": [
          0,
          3,
          0,
          0
        ],
        "active": 3,
        "operation": "scan",
        "packet": null,
        "metric": null,
        "old": null
      },
      {
        "line": 5,
        "caption": "Sıradaki giriş 5. raf[3] içine yazılır.",
        "vars": {
          "adet": 4,
          "i": 3,
          "raf": "[0, 3, 0, 5]"
        },
        "output": [],
        "array": [
          0,
          3,
          0,
          5
        ],
        "active": 3,
        "operation": "read",
        "packet": "5",
        "metric": null,
        "old": 0
      },
      {
        "line": 3,
        "caption": "i = 4. 4 < 4 yanlış. Bütün elemanlar okundu.",
        "vars": {
          "adet": 4,
          "i": 4,
          "raf": "[0, 3, 0, 5]"
        },
        "output": [],
        "array": [
          0,
          3,
          0,
          5
        ],
        "active": -1,
        "operation": "endread",
        "packet": null,
        "metric": null,
        "old": null
      },
      {
        "line": 7,
        "caption": "Henüz dolu raf sayılmadı; dolu 0.",
        "vars": {
          "adet": 4,
          "dolu": 0,
          "raf": "[0, 3, 0, 5]"
        },
        "output": [],
        "array": [
          0,
          3,
          0,
          5
        ],
        "active": -1,
        "operation": "scan",
        "packet": null,
        "metric": {
          "label": "DOLU RAF",
          "value": 0
        },
        "old": null
      },
      {
        "line": 8,
        "caption": "İndeks 0 kontrol edilecek.",
        "vars": {
          "adet": 4,
          "dolu": 0,
          "i": 0,
          "raf": "[0, 3, 0, 5]"
        },
        "output": [],
        "array": [
          0,
          3,
          0,
          5
        ],
        "active": 0,
        "operation": "scan",
        "packet": null,
        "metric": {
          "label": "DOLU RAF",
          "value": 0
        },
        "old": null
      },
      {
        "line": 10,
        "caption": "0 > 0 yanlış. Bu raf boş; sayaç artmaz.",
        "vars": {
          "adet": 4,
          "dolu": 0,
          "i": 0,
          "raf": "[0, 3, 0, 5]"
        },
        "output": [],
        "array": [
          0,
          3,
          0,
          5
        ],
        "active": 0,
        "operation": "scan",
        "packet": null,
        "metric": {
          "label": "DOLU RAF",
          "value": 0
        },
        "old": null
      },
      {
        "line": 8,
        "caption": "İndeks 1 kontrol edilecek.",
        "vars": {
          "adet": 4,
          "dolu": 0,
          "i": 1,
          "raf": "[0, 3, 0, 5]"
        },
        "output": [],
        "array": [
          0,
          3,
          0,
          5
        ],
        "active": 1,
        "operation": "scan",
        "packet": null,
        "metric": {
          "label": "DOLU RAF",
          "value": 0
        },
        "old": null
      },
      {
        "line": 10,
        "caption": "3 > 0 doğru. Bu raf dolu.",
        "vars": {
          "adet": 4,
          "dolu": 0,
          "i": 1,
          "raf": "[0, 3, 0, 5]"
        },
        "output": [],
        "array": [
          0,
          3,
          0,
          5
        ],
        "active": 1,
        "operation": "scan",
        "packet": null,
        "metric": {
          "label": "DOLU RAF",
          "value": 0
        },
        "old": null
      },
      {
        "line": 12,
        "caption": "Dolu raf sayısı 1 artar; şimdi 1.",
        "vars": {
          "adet": 4,
          "dolu": 1,
          "i": 1,
          "raf": "[0, 3, 0, 5]"
        },
        "output": [],
        "array": [
          0,
          3,
          0,
          5
        ],
        "active": 1,
        "operation": "collect",
        "packet": "1",
        "metric": {
          "label": "DOLU RAF",
          "value": 1
        },
        "old": null
      },
      {
        "line": 8,
        "caption": "İndeks 2 kontrol edilecek.",
        "vars": {
          "adet": 4,
          "dolu": 1,
          "i": 2,
          "raf": "[0, 3, 0, 5]"
        },
        "output": [],
        "array": [
          0,
          3,
          0,
          5
        ],
        "active": 2,
        "operation": "scan",
        "packet": null,
        "metric": {
          "label": "DOLU RAF",
          "value": 1
        },
        "old": null
      },
      {
        "line": 10,
        "caption": "0 > 0 yanlış. Bu raf boş; sayaç artmaz.",
        "vars": {
          "adet": 4,
          "dolu": 1,
          "i": 2,
          "raf": "[0, 3, 0, 5]"
        },
        "output": [],
        "array": [
          0,
          3,
          0,
          5
        ],
        "active": 2,
        "operation": "scan",
        "packet": null,
        "metric": {
          "label": "DOLU RAF",
          "value": 1
        },
        "old": null
      },
      {
        "line": 8,
        "caption": "İndeks 3 kontrol edilecek.",
        "vars": {
          "adet": 4,
          "dolu": 1,
          "i": 3,
          "raf": "[0, 3, 0, 5]"
        },
        "output": [],
        "array": [
          0,
          3,
          0,
          5
        ],
        "active": 3,
        "operation": "scan",
        "packet": null,
        "metric": {
          "label": "DOLU RAF",
          "value": 1
        },
        "old": null
      },
      {
        "line": 10,
        "caption": "5 > 0 doğru. Bu raf dolu.",
        "vars": {
          "adet": 4,
          "dolu": 1,
          "i": 3,
          "raf": "[0, 3, 0, 5]"
        },
        "output": [],
        "array": [
          0,
          3,
          0,
          5
        ],
        "active": 3,
        "operation": "scan",
        "packet": null,
        "metric": {
          "label": "DOLU RAF",
          "value": 1
        },
        "old": null
      },
      {
        "line": 12,
        "caption": "Dolu raf sayısı 1 artar; şimdi 2.",
        "vars": {
          "adet": 4,
          "dolu": 2,
          "i": 3,
          "raf": "[0, 3, 0, 5]"
        },
        "output": [],
        "array": [
          0,
          3,
          0,
          5
        ],
        "active": 3,
        "operation": "collect",
        "packet": "1",
        "metric": {
          "label": "DOLU RAF",
          "value": 2
        },
        "old": null
      },
      {
        "line": 15,
        "caption": "Dolu raf sayısı 2 yazılır.",
        "vars": {
          "adet": 4,
          "dolu": 2,
          "raf": "[0, 3, 0, 5]"
        },
        "output": [
          "2"
        ],
        "array": [
          0,
          3,
          0,
          5
        ],
        "active": -1,
        "operation": "output",
        "packet": null,
        "metric": {
          "label": "DOLU RAF",
          "value": 2
        },
        "old": null
      }
    ]
  },
  {
    "id": "maximum",
    "title": "En yüksek puanı bul",
    "kind": "ÜNİTE 3 / KOLAY DİZİ GÖREVİ",
    "intro": "Delil puanları negatif de olabilir. En yüksek değeri diziden bul.",
    "input": [
      "4",
      "-8",
      "-3",
      "-12",
      "-5"
    ],
    "output": [
      "-3"
    ],
    "reference": "int adet = Convert.ToInt32(Console.ReadLine());\nint[] raf = new int[adet];\nfor (int i = 0; i < raf.Length; i++)\n{\n    raf[i] = Convert.ToInt32(Console.ReadLine());\n}\nint enBuyuk = raf[0];\nfor (int i = 1; i < raf.Length; i++)\n{\n    if (raf[i] > enBuyuk)\n    {\n        enBuyuk = raf[i];\n    }\n}\nConsole.WriteLine(enBuyuk);",
    "understand": [
      "İlk satır eleman sayısı: 1–6 arasında. Sonra bu sayıda tam sayı (-50 ile 50 arasında) girilecek.",
      "Sayıları dizide sakla ve en büyük değeri bul. Sayılar negatif olabileceği için başlangıç adayını bir dizi elemanından al.",
      "Yalnızca en büyük değeri bir satırda yaz. İndeksini yazma."
    ],
    "walkthrough": [
      "4 puan girilir: -8, -3, -12, -5.",
      "İlk aday -8. -3 daha büyük olduğu için yeni aday olur.",
      "-12 ve -5, -3’ten küçüktür. Sonuç -3 yazılır."
    ],
    "concept": "En büyük aday · negatif sayılar",
    "hint": "enBuyuk = raf[0] ile başla. 0 ile başlamak tüm değerler negatifken yanlış sonuç verir.",
    "theme": "teal",
    "themeName": "Petrol yeşili",
    "lineHelp": {
      "1": "Sıradaki giriş okunur. Convert.ToInt32 metni tam sayıya çevirir; atamanın solundaki değişken veya dizi elemanı bu değeri alır.",
      "2": "Bu uzunlukta bir int dizisi oluşturulur. İlk değerler 0 olur. İndeksler 0’dan başlar.",
      "3": "Önce sayaç başlar, koşul kontrol edilir. Her turun sonunda sayaç güncellenir. Length eleman sayısıdır; son indeks Length - 1 olur.",
      "4": "Bu bloktaki komutlar birlikte çalışır.",
      "5": "Sıradaki giriş okunur. Convert.ToInt32 metni tam sayıya çevirir; atamanın solundaki değişken veya dizi elemanı bu değeri alır.",
      "6": "Bu blok bitti; döngü varsa koşul tekrar kontrol edilir.",
      "7": "En büyük adayını ilk elemandan başlat. Böylece bütün değerler negatif olsa da sonuç doğru olur.",
      "8": "Önce sayaç başlar, koşul kontrol edilir. Her turun sonunda sayaç güncellenir. Length eleman sayısıdır; son indeks Length - 1 olur.",
      "9": "Bu bloktaki komutlar birlikte çalışır.",
      "10": "Koşul doğruysa hemen sonraki blok çalışır; yanlışsa blok atlanır.",
      "11": "Bu bloktaki komutlar birlikte çalışır.",
      "12": "Daha büyük değer bulundu; enBuyuk bu elemanın değerini alır.",
      "13": "Bu blok bitti; döngü varsa koşul tekrar kontrol edilir.",
      "14": "Bu blok bitti; döngü varsa koşul tekrar kontrol edilir.",
      "15": "Parantezdeki değer konsola tek satır yazılır. Yalnızca bu komutta örnek konsola yeni satır eklenir."
    },
    "rules": [
      "Girdileri verilen sırayla, her biri ayrı satırda oku.",
      "Tam sayı girişleri geçerlidir; hatalı metin kontrolü istenmiyor.",
      "Değerleri int[] dizisinde tut. İndeksler 0’dan başlar.",
      "Yalnızca istenen sayıları, her birini ayrı satırda yaz. Başlık veya istem mesajı ekleme.",
      "Değişken adları ve uygun çözüm yolu serbest. Örnekteki sonucu sabit yazma."
    ],
    "goal": "Sayıları dizide sakla ve en büyük değeri bul. Sayılar negatif olabileceği için başlangıç adayını bir dizi elemanından al. Yalnızca en büyük değeri bir satırda yaz. İndeksini yazma.",
    "independent": false,
    "words": [
      [
        "İndeks ile eleman sayısı aynı şey değil",
        "İndeks, elemanın yeridir ve 0’dan başlar. 3 elemanın indeksleri 0, 1, 2 olur."
      ],
      [
        "raf.Length",
        "Dizide kaç eleman olduğunu verir. Son geçerli indeks raf.Length - 1 olur."
      ],
      [
        "raf[i] = değer",
        "Yalnızca i numaralı elemanın değerini değiştirir. raf[1], ikinci elemandır."
      ]
    ],
    "frames": [
      {
        "line": 0,
        "caption": "Örneği adım adım izle. Önce dizi kurulacak, sonra elemanlar üzerinde işlem yapılacak.",
        "vars": {},
        "output": [],
        "array": [],
        "active": -1,
        "operation": "ready"
      },
      {
        "line": 1,
        "caption": "İlk giriş 4: dizi 4 elemanlı olacak.",
        "vars": {
          "adet": 4
        },
        "output": [],
        "array": [],
        "active": -1,
        "operation": "count",
        "packet": "4",
        "metric": null,
        "old": null
      },
      {
        "line": 2,
        "caption": "Dizi oluşturulur. Her eleman başlangıçta 0.",
        "vars": {
          "adet": 4,
          "raf": "[0, 0, 0, 0]"
        },
        "output": [],
        "array": [
          0,
          0,
          0,
          0
        ],
        "active": -1,
        "operation": "create",
        "packet": null,
        "metric": null,
        "old": null
      },
      {
        "line": 3,
        "caption": "i = 0. 0 < 4 doğru; sıradaki eleman okunacak.",
        "vars": {
          "adet": 4,
          "i": 0,
          "raf": "[0, 0, 0, 0]"
        },
        "output": [],
        "array": [
          0,
          0,
          0,
          0
        ],
        "active": 0,
        "operation": "scan",
        "packet": null,
        "metric": null,
        "old": null
      },
      {
        "line": 5,
        "caption": "Sıradaki giriş -8. raf[0] içine yazılır.",
        "vars": {
          "adet": 4,
          "i": 0,
          "raf": "[-8, 0, 0, 0]"
        },
        "output": [],
        "array": [
          -8,
          0,
          0,
          0
        ],
        "active": 0,
        "operation": "read",
        "packet": "-8",
        "metric": null,
        "old": 0
      },
      {
        "line": 3,
        "caption": "i = 1. 1 < 4 doğru; sıradaki eleman okunacak.",
        "vars": {
          "adet": 4,
          "i": 1,
          "raf": "[-8, 0, 0, 0]"
        },
        "output": [],
        "array": [
          -8,
          0,
          0,
          0
        ],
        "active": 1,
        "operation": "scan",
        "packet": null,
        "metric": null,
        "old": null
      },
      {
        "line": 5,
        "caption": "Sıradaki giriş -3. raf[1] içine yazılır.",
        "vars": {
          "adet": 4,
          "i": 1,
          "raf": "[-8, -3, 0, 0]"
        },
        "output": [],
        "array": [
          -8,
          -3,
          0,
          0
        ],
        "active": 1,
        "operation": "read",
        "packet": "-3",
        "metric": null,
        "old": 0
      },
      {
        "line": 3,
        "caption": "i = 2. 2 < 4 doğru; sıradaki eleman okunacak.",
        "vars": {
          "adet": 4,
          "i": 2,
          "raf": "[-8, -3, 0, 0]"
        },
        "output": [],
        "array": [
          -8,
          -3,
          0,
          0
        ],
        "active": 2,
        "operation": "scan",
        "packet": null,
        "metric": null,
        "old": null
      },
      {
        "line": 5,
        "caption": "Sıradaki giriş -12. raf[2] içine yazılır.",
        "vars": {
          "adet": 4,
          "i": 2,
          "raf": "[-8, -3, -12, 0]"
        },
        "output": [],
        "array": [
          -8,
          -3,
          -12,
          0
        ],
        "active": 2,
        "operation": "read",
        "packet": "-12",
        "metric": null,
        "old": 0
      },
      {
        "line": 3,
        "caption": "i = 3. 3 < 4 doğru; sıradaki eleman okunacak.",
        "vars": {
          "adet": 4,
          "i": 3,
          "raf": "[-8, -3, -12, 0]"
        },
        "output": [],
        "array": [
          -8,
          -3,
          -12,
          0
        ],
        "active": 3,
        "operation": "scan",
        "packet": null,
        "metric": null,
        "old": null
      },
      {
        "line": 5,
        "caption": "Sıradaki giriş -5. raf[3] içine yazılır.",
        "vars": {
          "adet": 4,
          "i": 3,
          "raf": "[-8, -3, -12, -5]"
        },
        "output": [],
        "array": [
          -8,
          -3,
          -12,
          -5
        ],
        "active": 3,
        "operation": "read",
        "packet": "-5",
        "metric": null,
        "old": 0
      },
      {
        "line": 3,
        "caption": "i = 4. 4 < 4 yanlış. Bütün elemanlar okundu.",
        "vars": {
          "adet": 4,
          "i": 4,
          "raf": "[-8, -3, -12, -5]"
        },
        "output": [],
        "array": [
          -8,
          -3,
          -12,
          -5
        ],
        "active": -1,
        "operation": "endread",
        "packet": null,
        "metric": null,
        "old": null
      },
      {
        "line": 7,
        "caption": "İlk aday raf[0] = -8. 0’dan başlatmıyoruz.",
        "vars": {
          "adet": 4,
          "enBuyuk": -8,
          "raf": "[-8, -3, -12, -5]"
        },
        "output": [],
        "array": [
          -8,
          -3,
          -12,
          -5
        ],
        "active": 0,
        "operation": "collect",
        "packet": "-8",
        "metric": {
          "label": "EN BÜYÜK",
          "value": -8
        },
        "old": null
      },
      {
        "line": 8,
        "caption": "İndeks 1 kontrol edilecek.",
        "vars": {
          "adet": 4,
          "enBuyuk": -8,
          "i": 1,
          "raf": "[-8, -3, -12, -5]"
        },
        "output": [],
        "array": [
          -8,
          -3,
          -12,
          -5
        ],
        "active": 1,
        "operation": "scan",
        "packet": null,
        "metric": {
          "label": "EN BÜYÜK",
          "value": -8
        },
        "old": null
      },
      {
        "line": 10,
        "caption": "-3 > -8 doğru; aday değişecek.",
        "vars": {
          "adet": 4,
          "enBuyuk": -8,
          "i": 1,
          "raf": "[-8, -3, -12, -5]"
        },
        "output": [],
        "array": [
          -8,
          -3,
          -12,
          -5
        ],
        "active": 1,
        "operation": "scan",
        "packet": null,
        "metric": {
          "label": "EN BÜYÜK",
          "value": -8
        },
        "old": null
      },
      {
        "line": 12,
        "caption": "Yeni en büyük değer -3.",
        "vars": {
          "adet": 4,
          "enBuyuk": -3,
          "i": 1,
          "raf": "[-8, -3, -12, -5]"
        },
        "output": [],
        "array": [
          -8,
          -3,
          -12,
          -5
        ],
        "active": 1,
        "operation": "collect",
        "packet": "-3",
        "metric": {
          "label": "EN BÜYÜK",
          "value": -3
        },
        "old": null
      },
      {
        "line": 8,
        "caption": "İndeks 2 kontrol edilecek.",
        "vars": {
          "adet": 4,
          "enBuyuk": -3,
          "i": 2,
          "raf": "[-8, -3, -12, -5]"
        },
        "output": [],
        "array": [
          -8,
          -3,
          -12,
          -5
        ],
        "active": 2,
        "operation": "scan",
        "packet": null,
        "metric": {
          "label": "EN BÜYÜK",
          "value": -3
        },
        "old": null
      },
      {
        "line": 10,
        "caption": "-12 > -3 yanlış; aday korunur.",
        "vars": {
          "adet": 4,
          "enBuyuk": -3,
          "i": 2,
          "raf": "[-8, -3, -12, -5]"
        },
        "output": [],
        "array": [
          -8,
          -3,
          -12,
          -5
        ],
        "active": 2,
        "operation": "scan",
        "packet": null,
        "metric": {
          "label": "EN BÜYÜK",
          "value": -3
        },
        "old": null
      },
      {
        "line": 8,
        "caption": "İndeks 3 kontrol edilecek.",
        "vars": {
          "adet": 4,
          "enBuyuk": -3,
          "i": 3,
          "raf": "[-8, -3, -12, -5]"
        },
        "output": [],
        "array": [
          -8,
          -3,
          -12,
          -5
        ],
        "active": 3,
        "operation": "scan",
        "packet": null,
        "metric": {
          "label": "EN BÜYÜK",
          "value": -3
        },
        "old": null
      },
      {
        "line": 10,
        "caption": "-5 > -3 yanlış; aday korunur.",
        "vars": {
          "adet": 4,
          "enBuyuk": -3,
          "i": 3,
          "raf": "[-8, -3, -12, -5]"
        },
        "output": [],
        "array": [
          -8,
          -3,
          -12,
          -5
        ],
        "active": 3,
        "operation": "scan",
        "packet": null,
        "metric": {
          "label": "EN BÜYÜK",
          "value": -3
        },
        "old": null
      },
      {
        "line": 15,
        "caption": "En büyük değer -3 yazılır.",
        "vars": {
          "adet": 4,
          "enBuyuk": -3,
          "raf": "[-8, -3, -12, -5]"
        },
        "output": [
          "-3"
        ],
        "array": [
          -8,
          -3,
          -12,
          -5
        ],
        "active": -1,
        "operation": "output",
        "packet": null,
        "metric": {
          "label": "EN BÜYÜK",
          "value": -3
        },
        "old": null
      }
    ]
  },
  {
    "id": "find",
    "title": "Aranan delilin yerini bul",
    "kind": "ÜNİTE 3 / KOLAY DİZİ GÖREVİ",
    "intro": "Aynı numara birden fazla rafta olabilir. İlk eşleşmenin indeksini bul.",
    "input": [
      "4",
      "12",
      "7",
      "12",
      "20",
      "12"
    ],
    "output": [
      "0"
    ],
    "reference": "int adet = Convert.ToInt32(Console.ReadLine());\nint[] raf = new int[adet];\nfor (int i = 0; i < raf.Length; i++)\n{\n    raf[i] = Convert.ToInt32(Console.ReadLine());\n}\nint aranan = Convert.ToInt32(Console.ReadLine());\nint bulunan = -1;\nfor (int i = 0; i < raf.Length; i++)\n{\n    if (raf[i] == aranan)\n    {\n        bulunan = i;\n        break;\n    }\n}\nConsole.WriteLine(bulunan);",
    "understand": [
      "İlk satır eleman sayısı: 1–6 arasında. Sonra bu sayıda tam sayı (-50 ile 50 arasında) girilecek. Son satır aranan sayı (-50–50).",
      "Sayıları dizide sakla. Aranan değerin ilk bulunduğu indeksi bul. Hiç yoksa sonuç -1 olsun.",
      "Yalnızca ilk eşleşmenin indeksini, yoksa -1 yaz. Elemanın değerini veya kaçıncı sırada olduğunu yazma."
    ],
    "walkthrough": [
      "4 eleman 12, 7, 12, 20 olarak yerleşir.",
      "Son giriş 12, aranan değerdir.",
      "İndeks 0 zaten 12. İlk eşleşmede durulur; indeks 2’ye gidilmez.",
      "Çıktı 0 olur. Bu, birinci elemanın indeksidir."
    ],
    "concept": "Arama · ilk eşleşme · break",
    "hint": "Sonucu önce -1 yap. Eşleşmede indeksi sakla ve break ile dur.",
    "theme": "teal",
    "themeName": "Petrol yeşili",
    "lineHelp": {
      "1": "Sıradaki giriş okunur. Convert.ToInt32 metni tam sayıya çevirir; atamanın solundaki değişken veya dizi elemanı bu değeri alır.",
      "2": "Bu uzunlukta bir int dizisi oluşturulur. İlk değerler 0 olur. İndeksler 0’dan başlar.",
      "3": "Önce sayaç başlar, koşul kontrol edilir. Her turun sonunda sayaç güncellenir. Length eleman sayısıdır; son indeks Length - 1 olur.",
      "4": "Bu bloktaki komutlar birlikte çalışır.",
      "5": "Sıradaki giriş okunur. Convert.ToInt32 metni tam sayıya çevirir; atamanın solundaki değişken veya dizi elemanı bu değeri alır.",
      "6": "Bu blok bitti; döngü varsa koşul tekrar kontrol edilir.",
      "7": "Sıradaki giriş okunur. Convert.ToInt32 metni tam sayıya çevirir; atamanın solundaki değişken veya dizi elemanı bu değeri alır.",
      "8": "Bu satır, hesapta kullanılacak değişkeni oluşturur veya değerini günceller.",
      "9": "Önce sayaç başlar, koşul kontrol edilir. Her turun sonunda sayaç güncellenir. Length eleman sayısıdır; son indeks Length - 1 olur.",
      "10": "Bu bloktaki komutlar birlikte çalışır.",
      "11": "Koşul doğruysa hemen sonraki blok çalışır; yanlışsa blok atlanır.",
      "12": "Bu bloktaki komutlar birlikte çalışır.",
      "13": "Eşleşen değerin kendisini değil, bulunduğu indeksi sakla.",
      "14": "Aranan ilk eşleşme bulundu. Döngü biter; sonraki eşleşmeler incelenmez.",
      "15": "Bu blok bitti; döngü varsa koşul tekrar kontrol edilir.",
      "16": "Bu blok bitti; döngü varsa koşul tekrar kontrol edilir.",
      "17": "Parantezdeki değer konsola tek satır yazılır. Yalnızca bu komutta örnek konsola yeni satır eklenir."
    },
    "rules": [
      "Girdileri verilen sırayla, her biri ayrı satırda oku.",
      "Tam sayı girişleri geçerlidir; hatalı metin kontrolü istenmiyor.",
      "Değerleri int[] dizisinde tut. İndeksler 0’dan başlar.",
      "Yalnızca istenen sayıları, her birini ayrı satırda yaz. Başlık veya istem mesajı ekleme.",
      "Değişken adları ve uygun çözüm yolu serbest. Örnekteki sonucu sabit yazma."
    ],
    "goal": "Sayıları dizide sakla. Aranan değerin ilk bulunduğu indeksi bul. Hiç yoksa sonuç -1 olsun. Yalnızca ilk eşleşmenin indeksini, yoksa -1 yaz. Elemanın değerini veya kaçıncı sırada olduğunu yazma.",
    "independent": false,
    "words": [
      [
        "İndeks ile eleman sayısı aynı şey değil",
        "İndeks, elemanın yeridir ve 0’dan başlar. 3 elemanın indeksleri 0, 1, 2 olur."
      ],
      [
        "raf.Length",
        "Dizide kaç eleman olduğunu verir. Son geçerli indeks raf.Length - 1 olur."
      ],
      [
        "raf[i] = değer",
        "Yalnızca i numaralı elemanın değerini değiştirir. raf[1], ikinci elemandır."
      ]
    ],
    "frames": [
      {
        "line": 0,
        "caption": "Örneği adım adım izle. Önce dizi kurulacak, sonra elemanlar üzerinde işlem yapılacak.",
        "vars": {},
        "output": [],
        "array": [],
        "active": -1,
        "operation": "ready"
      },
      {
        "line": 1,
        "caption": "İlk giriş 4: dizi 4 elemanlı olacak.",
        "vars": {
          "adet": 4
        },
        "output": [],
        "array": [],
        "active": -1,
        "operation": "count",
        "packet": "4",
        "metric": null,
        "old": null
      },
      {
        "line": 2,
        "caption": "Dizi oluşturulur. Her eleman başlangıçta 0.",
        "vars": {
          "adet": 4,
          "raf": "[0, 0, 0, 0]"
        },
        "output": [],
        "array": [
          0,
          0,
          0,
          0
        ],
        "active": -1,
        "operation": "create",
        "packet": null,
        "metric": null,
        "old": null
      },
      {
        "line": 3,
        "caption": "i = 0. 0 < 4 doğru; sıradaki eleman okunacak.",
        "vars": {
          "adet": 4,
          "i": 0,
          "raf": "[0, 0, 0, 0]"
        },
        "output": [],
        "array": [
          0,
          0,
          0,
          0
        ],
        "active": 0,
        "operation": "scan",
        "packet": null,
        "metric": null,
        "old": null
      },
      {
        "line": 5,
        "caption": "Sıradaki giriş 12. raf[0] içine yazılır.",
        "vars": {
          "adet": 4,
          "i": 0,
          "raf": "[12, 0, 0, 0]"
        },
        "output": [],
        "array": [
          12,
          0,
          0,
          0
        ],
        "active": 0,
        "operation": "read",
        "packet": "12",
        "metric": null,
        "old": 0
      },
      {
        "line": 3,
        "caption": "i = 1. 1 < 4 doğru; sıradaki eleman okunacak.",
        "vars": {
          "adet": 4,
          "i": 1,
          "raf": "[12, 0, 0, 0]"
        },
        "output": [],
        "array": [
          12,
          0,
          0,
          0
        ],
        "active": 1,
        "operation": "scan",
        "packet": null,
        "metric": null,
        "old": null
      },
      {
        "line": 5,
        "caption": "Sıradaki giriş 7. raf[1] içine yazılır.",
        "vars": {
          "adet": 4,
          "i": 1,
          "raf": "[12, 7, 0, 0]"
        },
        "output": [],
        "array": [
          12,
          7,
          0,
          0
        ],
        "active": 1,
        "operation": "read",
        "packet": "7",
        "metric": null,
        "old": 0
      },
      {
        "line": 3,
        "caption": "i = 2. 2 < 4 doğru; sıradaki eleman okunacak.",
        "vars": {
          "adet": 4,
          "i": 2,
          "raf": "[12, 7, 0, 0]"
        },
        "output": [],
        "array": [
          12,
          7,
          0,
          0
        ],
        "active": 2,
        "operation": "scan",
        "packet": null,
        "metric": null,
        "old": null
      },
      {
        "line": 5,
        "caption": "Sıradaki giriş 12. raf[2] içine yazılır.",
        "vars": {
          "adet": 4,
          "i": 2,
          "raf": "[12, 7, 12, 0]"
        },
        "output": [],
        "array": [
          12,
          7,
          12,
          0
        ],
        "active": 2,
        "operation": "read",
        "packet": "12",
        "metric": null,
        "old": 0
      },
      {
        "line": 3,
        "caption": "i = 3. 3 < 4 doğru; sıradaki eleman okunacak.",
        "vars": {
          "adet": 4,
          "i": 3,
          "raf": "[12, 7, 12, 0]"
        },
        "output": [],
        "array": [
          12,
          7,
          12,
          0
        ],
        "active": 3,
        "operation": "scan",
        "packet": null,
        "metric": null,
        "old": null
      },
      {
        "line": 5,
        "caption": "Sıradaki giriş 20. raf[3] içine yazılır.",
        "vars": {
          "adet": 4,
          "i": 3,
          "raf": "[12, 7, 12, 20]"
        },
        "output": [],
        "array": [
          12,
          7,
          12,
          20
        ],
        "active": 3,
        "operation": "read",
        "packet": "20",
        "metric": null,
        "old": 0
      },
      {
        "line": 3,
        "caption": "i = 4. 4 < 4 yanlış. Bütün elemanlar okundu.",
        "vars": {
          "adet": 4,
          "i": 4,
          "raf": "[12, 7, 12, 20]"
        },
        "output": [],
        "array": [
          12,
          7,
          12,
          20
        ],
        "active": -1,
        "operation": "endread",
        "packet": null,
        "metric": null,
        "old": null
      },
      {
        "line": 7,
        "caption": "Son giriş 12: aranan delil numarası.",
        "vars": {
          "adet": 4,
          "aranan": 12,
          "raf": "[12, 7, 12, 20]"
        },
        "output": [],
        "array": [
          12,
          7,
          12,
          20
        ],
        "active": -1,
        "operation": "query",
        "packet": "12",
        "metric": null,
        "old": null
      },
      {
        "line": 8,
        "caption": "Henüz eşleşme yok. bulunan = -1.",
        "vars": {
          "adet": 4,
          "aranan": 12,
          "bulunan": -1,
          "raf": "[12, 7, 12, 20]"
        },
        "output": [],
        "array": [
          12,
          7,
          12,
          20
        ],
        "active": -1,
        "operation": "scan",
        "packet": null,
        "metric": {
          "label": "BULUNAN İNDEKS",
          "value": -1
        },
        "old": null
      },
      {
        "line": 9,
        "caption": "İndeks 0’dan aramaya başlanır.",
        "vars": {
          "adet": 4,
          "aranan": 12,
          "bulunan": -1,
          "i": 0,
          "raf": "[12, 7, 12, 20]"
        },
        "output": [],
        "array": [
          12,
          7,
          12,
          20
        ],
        "active": 0,
        "operation": "scan",
        "packet": null,
        "metric": {
          "label": "BULUNAN İNDEKS",
          "value": -1
        },
        "old": null
      },
      {
        "line": 11,
        "caption": "raf[0] = 12. Aranan 12 ile eşit.",
        "vars": {
          "adet": 4,
          "aranan": 12,
          "bulunan": -1,
          "i": 0,
          "raf": "[12, 7, 12, 20]"
        },
        "output": [],
        "array": [
          12,
          7,
          12,
          20
        ],
        "active": 0,
        "operation": "match",
        "packet": null,
        "metric": {
          "label": "ARANAN",
          "value": 12
        },
        "old": null
      },
      {
        "line": 13,
        "caption": "İlk eşleşmenin indeksi 0 saklanır.",
        "vars": {
          "adet": 4,
          "aranan": 12,
          "bulunan": 0,
          "i": 0,
          "raf": "[12, 7, 12, 20]"
        },
        "output": [],
        "array": [
          12,
          7,
          12,
          20
        ],
        "active": 0,
        "operation": "collect",
        "packet": "0",
        "metric": {
          "label": "BULUNAN İNDEKS",
          "value": 0
        },
        "old": null
      },
      {
        "line": 14,
        "caption": "break döngüyü bitirir. İkinci 12 incelenmez.",
        "vars": {
          "adet": 4,
          "aranan": 12,
          "bulunan": 0,
          "i": 0,
          "raf": "[12, 7, 12, 20]"
        },
        "output": [],
        "array": [
          12,
          7,
          12,
          20
        ],
        "active": 0,
        "operation": "match",
        "packet": null,
        "metric": {
          "label": "BULUNAN İNDEKS",
          "value": 0
        },
        "old": null
      },
      {
        "line": 17,
        "caption": "İlk eşleşmenin indeksi 0 yazılır.",
        "vars": {
          "adet": 4,
          "aranan": 12,
          "bulunan": 0,
          "raf": "[12, 7, 12, 20]"
        },
        "output": [
          "0"
        ],
        "array": [
          12,
          7,
          12,
          20
        ],
        "active": 0,
        "operation": "output",
        "packet": null,
        "metric": {
          "label": "BULUNAN İNDEKS",
          "value": 0
        },
        "old": null
      }
    ]
  },
  {
    "id": "reverse",
    "title": "Rafları sondan oku",
    "kind": "ÜNİTE 3 / KOLAY DİZİ GÖREVİ",
    "intro": "Rafların içeriğini değiştirmeden son elemandan ilk elemana doğru oku.",
    "input": [
      "4",
      "10",
      "20",
      "30",
      "40"
    ],
    "output": [
      "40",
      "30",
      "20",
      "10"
    ],
    "reference": "int adet = Convert.ToInt32(Console.ReadLine());\nint[] raf = new int[adet];\nfor (int i = 0; i < raf.Length; i++)\n{\n    raf[i] = Convert.ToInt32(Console.ReadLine());\n}\nfor (int i = raf.Length - 1; i >= 0; i--)\n{\n    Console.WriteLine(raf[i]);\n}",
    "understand": [
      "İlk satır eleman sayısı: 1–6 arasında. Sonra bu sayıda tam sayı (-50 ile 50 arasında) girilecek.",
      "Sayıları dizide sakla. Son geçerli indeks olan Length - 1’den başla ve ilk elemana doğru gez.",
      "Elemanları ters sırayla, her birini ayrı satırda yaz. Diziyi küçükten büyüğe sıralama."
    ],
    "walkthrough": [
      "4 eleman: 10, 20, 30, 40.",
      "Son indeks 4 değil 3’tür. Okuma sırası 3, 2, 1, 0 olur.",
      "Çıktılar 40, 30, 20, 10 olur; raftaki değerlerin yeri değişmez."
    ],
    "concept": "Geriye sayan döngü · Length - 1",
    "hint": "i-- ile geriye git. İndeks 0 da yazılmalı; koşul i >= 0.",
    "theme": "teal",
    "themeName": "Petrol yeşili",
    "lineHelp": {
      "1": "Sıradaki giriş okunur. Convert.ToInt32 metni tam sayıya çevirir; atamanın solundaki değişken veya dizi elemanı bu değeri alır.",
      "2": "Bu uzunlukta bir int dizisi oluşturulur. İlk değerler 0 olur. İndeksler 0’dan başlar.",
      "3": "Önce sayaç başlar, koşul kontrol edilir. Her turun sonunda sayaç güncellenir. Length eleman sayısıdır; son indeks Length - 1 olur.",
      "4": "Bu bloktaki komutlar birlikte çalışır.",
      "5": "Sıradaki giriş okunur. Convert.ToInt32 metni tam sayıya çevirir; atamanın solundaki değişken veya dizi elemanı bu değeri alır.",
      "6": "Bu blok bitti; döngü varsa koşul tekrar kontrol edilir.",
      "7": "Önce sayaç başlar, koşul kontrol edilir. Her turun sonunda sayaç güncellenir. Length eleman sayısıdır; son indeks Length - 1 olur.",
      "8": "Bu bloktaki komutlar birlikte çalışır.",
      "9": "Parantezdeki değer konsola tek satır yazılır. Yalnızca bu komutta örnek konsola yeni satır eklenir.",
      "10": "Bu blok bitti; döngü varsa koşul tekrar kontrol edilir."
    },
    "rules": [
      "Girdileri verilen sırayla, her biri ayrı satırda oku.",
      "Tam sayı girişleri geçerlidir; hatalı metin kontrolü istenmiyor.",
      "Değerleri int[] dizisinde tut. İndeksler 0’dan başlar.",
      "Yalnızca istenen sayıları, her birini ayrı satırda yaz. Başlık veya istem mesajı ekleme.",
      "Değişken adları ve uygun çözüm yolu serbest. Örnekteki sonucu sabit yazma."
    ],
    "goal": "Sayıları dizide sakla. Son geçerli indeks olan Length - 1’den başla ve ilk elemana doğru gez. Elemanları ters sırayla, her birini ayrı satırda yaz. Diziyi küçükten büyüğe sıralama.",
    "independent": false,
    "words": [
      [
        "İndeks ile eleman sayısı aynı şey değil",
        "İndeks, elemanın yeridir ve 0’dan başlar. 3 elemanın indeksleri 0, 1, 2 olur."
      ],
      [
        "raf.Length",
        "Dizide kaç eleman olduğunu verir. Son geçerli indeks raf.Length - 1 olur."
      ],
      [
        "raf[i] = değer",
        "Yalnızca i numaralı elemanın değerini değiştirir. raf[1], ikinci elemandır."
      ]
    ],
    "frames": [
      {
        "line": 0,
        "caption": "Örneği adım adım izle. Önce dizi kurulacak, sonra elemanlar üzerinde işlem yapılacak.",
        "vars": {},
        "output": [],
        "array": [],
        "active": -1,
        "operation": "ready"
      },
      {
        "line": 1,
        "caption": "İlk giriş 4: dizi 4 elemanlı olacak.",
        "vars": {
          "adet": 4
        },
        "output": [],
        "array": [],
        "active": -1,
        "operation": "count",
        "packet": "4",
        "metric": null,
        "old": null
      },
      {
        "line": 2,
        "caption": "Dizi oluşturulur. Her eleman başlangıçta 0.",
        "vars": {
          "adet": 4,
          "raf": "[0, 0, 0, 0]"
        },
        "output": [],
        "array": [
          0,
          0,
          0,
          0
        ],
        "active": -1,
        "operation": "create",
        "packet": null,
        "metric": null,
        "old": null
      },
      {
        "line": 3,
        "caption": "i = 0. 0 < 4 doğru; sıradaki eleman okunacak.",
        "vars": {
          "adet": 4,
          "i": 0,
          "raf": "[0, 0, 0, 0]"
        },
        "output": [],
        "array": [
          0,
          0,
          0,
          0
        ],
        "active": 0,
        "operation": "scan",
        "packet": null,
        "metric": null,
        "old": null
      },
      {
        "line": 5,
        "caption": "Sıradaki giriş 10. raf[0] içine yazılır.",
        "vars": {
          "adet": 4,
          "i": 0,
          "raf": "[10, 0, 0, 0]"
        },
        "output": [],
        "array": [
          10,
          0,
          0,
          0
        ],
        "active": 0,
        "operation": "read",
        "packet": "10",
        "metric": null,
        "old": 0
      },
      {
        "line": 3,
        "caption": "i = 1. 1 < 4 doğru; sıradaki eleman okunacak.",
        "vars": {
          "adet": 4,
          "i": 1,
          "raf": "[10, 0, 0, 0]"
        },
        "output": [],
        "array": [
          10,
          0,
          0,
          0
        ],
        "active": 1,
        "operation": "scan",
        "packet": null,
        "metric": null,
        "old": null
      },
      {
        "line": 5,
        "caption": "Sıradaki giriş 20. raf[1] içine yazılır.",
        "vars": {
          "adet": 4,
          "i": 1,
          "raf": "[10, 20, 0, 0]"
        },
        "output": [],
        "array": [
          10,
          20,
          0,
          0
        ],
        "active": 1,
        "operation": "read",
        "packet": "20",
        "metric": null,
        "old": 0
      },
      {
        "line": 3,
        "caption": "i = 2. 2 < 4 doğru; sıradaki eleman okunacak.",
        "vars": {
          "adet": 4,
          "i": 2,
          "raf": "[10, 20, 0, 0]"
        },
        "output": [],
        "array": [
          10,
          20,
          0,
          0
        ],
        "active": 2,
        "operation": "scan",
        "packet": null,
        "metric": null,
        "old": null
      },
      {
        "line": 5,
        "caption": "Sıradaki giriş 30. raf[2] içine yazılır.",
        "vars": {
          "adet": 4,
          "i": 2,
          "raf": "[10, 20, 30, 0]"
        },
        "output": [],
        "array": [
          10,
          20,
          30,
          0
        ],
        "active": 2,
        "operation": "read",
        "packet": "30",
        "metric": null,
        "old": 0
      },
      {
        "line": 3,
        "caption": "i = 3. 3 < 4 doğru; sıradaki eleman okunacak.",
        "vars": {
          "adet": 4,
          "i": 3,
          "raf": "[10, 20, 30, 0]"
        },
        "output": [],
        "array": [
          10,
          20,
          30,
          0
        ],
        "active": 3,
        "operation": "scan",
        "packet": null,
        "metric": null,
        "old": null
      },
      {
        "line": 5,
        "caption": "Sıradaki giriş 40. raf[3] içine yazılır.",
        "vars": {
          "adet": 4,
          "i": 3,
          "raf": "[10, 20, 30, 40]"
        },
        "output": [],
        "array": [
          10,
          20,
          30,
          40
        ],
        "active": 3,
        "operation": "read",
        "packet": "40",
        "metric": null,
        "old": 0
      },
      {
        "line": 3,
        "caption": "i = 4. 4 < 4 yanlış. Bütün elemanlar okundu.",
        "vars": {
          "adet": 4,
          "i": 4,
          "raf": "[10, 20, 30, 40]"
        },
        "output": [],
        "array": [
          10,
          20,
          30,
          40
        ],
        "active": -1,
        "operation": "endread",
        "packet": null,
        "metric": null,
        "old": null
      },
      {
        "line": 7,
        "caption": "İndeks 3 okunacak. Rafın içeriği değişmiyor.",
        "vars": {
          "adet": 4,
          "i": 3,
          "raf": "[10, 20, 30, 40]"
        },
        "output": [],
        "array": [
          10,
          20,
          30,
          40
        ],
        "active": 3,
        "operation": "scan",
        "packet": null,
        "metric": null,
        "old": null
      },
      {
        "line": 9,
        "caption": "40 konsola yazılır.",
        "vars": {
          "adet": 4,
          "i": 3,
          "raf": "[10, 20, 30, 40]"
        },
        "output": [
          "40"
        ],
        "array": [
          10,
          20,
          30,
          40
        ],
        "active": 3,
        "operation": "output",
        "packet": null,
        "metric": null,
        "old": null
      },
      {
        "line": 7,
        "caption": "İndeks 2 okunacak. Rafın içeriği değişmiyor.",
        "vars": {
          "adet": 4,
          "i": 2,
          "raf": "[10, 20, 30, 40]"
        },
        "output": [
          "40"
        ],
        "array": [
          10,
          20,
          30,
          40
        ],
        "active": 2,
        "operation": "scan",
        "packet": null,
        "metric": null,
        "old": null
      },
      {
        "line": 9,
        "caption": "30 konsola yazılır.",
        "vars": {
          "adet": 4,
          "i": 2,
          "raf": "[10, 20, 30, 40]"
        },
        "output": [
          "40",
          "30"
        ],
        "array": [
          10,
          20,
          30,
          40
        ],
        "active": 2,
        "operation": "output",
        "packet": null,
        "metric": null,
        "old": null
      },
      {
        "line": 7,
        "caption": "İndeks 1 okunacak. Rafın içeriği değişmiyor.",
        "vars": {
          "adet": 4,
          "i": 1,
          "raf": "[10, 20, 30, 40]"
        },
        "output": [
          "40",
          "30"
        ],
        "array": [
          10,
          20,
          30,
          40
        ],
        "active": 1,
        "operation": "scan",
        "packet": null,
        "metric": null,
        "old": null
      },
      {
        "line": 9,
        "caption": "20 konsola yazılır.",
        "vars": {
          "adet": 4,
          "i": 1,
          "raf": "[10, 20, 30, 40]"
        },
        "output": [
          "40",
          "30",
          "20"
        ],
        "array": [
          10,
          20,
          30,
          40
        ],
        "active": 1,
        "operation": "output",
        "packet": null,
        "metric": null,
        "old": null
      },
      {
        "line": 7,
        "caption": "İndeks 0 okunacak. Rafın içeriği değişmiyor.",
        "vars": {
          "adet": 4,
          "i": 0,
          "raf": "[10, 20, 30, 40]"
        },
        "output": [
          "40",
          "30",
          "20"
        ],
        "array": [
          10,
          20,
          30,
          40
        ],
        "active": 0,
        "operation": "scan",
        "packet": null,
        "metric": null,
        "old": null
      },
      {
        "line": 9,
        "caption": "10 konsola yazılır.",
        "vars": {
          "adet": 4,
          "i": 0,
          "raf": "[10, 20, 30, 40]"
        },
        "output": [
          "40",
          "30",
          "20",
          "10"
        ],
        "array": [
          10,
          20,
          30,
          40
        ],
        "active": 0,
        "operation": "output",
        "packet": null,
        "metric": null,
        "old": null
      },
      {
        "line": 7,
        "caption": "i = -1. -1 >= 0 yanlış; okuma bitti.",
        "vars": {
          "adet": 4,
          "i": -1,
          "raf": "[10, 20, 30, 40]"
        },
        "output": [
          "40",
          "30",
          "20",
          "10"
        ],
        "array": [
          10,
          20,
          30,
          40
        ],
        "active": -1,
        "operation": "scan",
        "packet": null,
        "metric": null,
        "old": null
      }
    ]
  },
  {
    "id": "increase",
    "title": "Bütün etiketleri güncelle",
    "kind": "ÜNİTE 3 / KOLAY DİZİ GÖREVİ",
    "intro": "Her delilin puanına aynı artış uygulanacak. Dizinin yeni halini göster.",
    "input": [
      "3",
      "4",
      "7",
      "2",
      "5"
    ],
    "output": [
      "9",
      "12",
      "7"
    ],
    "reference": "int adet = Convert.ToInt32(Console.ReadLine());\nint[] raf = new int[adet];\nfor (int i = 0; i < raf.Length; i++)\n{\n    raf[i] = Convert.ToInt32(Console.ReadLine());\n}\nint artis = Convert.ToInt32(Console.ReadLine());\nfor (int i = 0; i < raf.Length; i++)\n{\n    raf[i] += artis;\n}\nfor (int i = 0; i < raf.Length; i++)\n{\n    Console.WriteLine(raf[i]);\n}",
    "understand": [
      "İlk satır eleman sayısı: 1–6 arasında. Sonra bu sayıda tam sayı (-50 ile 50 arasında) girilecek. Son satır 0–10 arasında artış miktarı.",
      "Sayıları dizide sakla. Her elemanın değerine artış miktarını ekle. Sonuçları dizide tut.",
      "Güncellenmiş bütün elemanları ilkten sona, her birini ayrı satırda yaz."
    ],
    "walkthrough": [
      "3 eleman 4, 7, 2 olarak girilir.",
      "Son giriş 5, her elemana eklenecek miktardır.",
      "4 → 9, 7 → 12, 2 → 7 olur.",
      "Yeni değerler 9, 12, 7 sırayla yazılır."
    ],
    "concept": "Döngüde eleman güncelleme · +=",
    "hint": "raf[i] += artis; yalnızca o turdaki elemanı değiştirir. Sonra güncel diziyi yazdır.",
    "theme": "teal",
    "themeName": "Petrol yeşili",
    "lineHelp": {
      "1": "Sıradaki giriş okunur. Convert.ToInt32 metni tam sayıya çevirir; atamanın solundaki değişken veya dizi elemanı bu değeri alır.",
      "2": "Bu uzunlukta bir int dizisi oluşturulur. İlk değerler 0 olur. İndeksler 0’dan başlar.",
      "3": "Önce sayaç başlar, koşul kontrol edilir. Her turun sonunda sayaç güncellenir. Length eleman sayısıdır; son indeks Length - 1 olur.",
      "4": "Bu bloktaki komutlar birlikte çalışır.",
      "5": "Sıradaki giriş okunur. Convert.ToInt32 metni tam sayıya çevirir; atamanın solundaki değişken veya dizi elemanı bu değeri alır.",
      "6": "Bu blok bitti; döngü varsa koşul tekrar kontrol edilir.",
      "7": "Sıradaki giriş okunur. Convert.ToInt32 metni tam sayıya çevirir; atamanın solundaki değişken veya dizi elemanı bu değeri alır.",
      "8": "Önce sayaç başlar, koşul kontrol edilir. Her turun sonunda sayaç güncellenir. Length eleman sayısıdır; son indeks Length - 1 olur.",
      "9": "Bu bloktaki komutlar birlikte çalışır.",
      "10": "i indeksindeki elemanın eski değerine artış eklenir; sonuç aynı elemana geri yazılır.",
      "11": "Bu blok bitti; döngü varsa koşul tekrar kontrol edilir.",
      "12": "Önce sayaç başlar, koşul kontrol edilir. Her turun sonunda sayaç güncellenir. Length eleman sayısıdır; son indeks Length - 1 olur.",
      "13": "Bu bloktaki komutlar birlikte çalışır.",
      "14": "Parantezdeki değer konsola tek satır yazılır. Yalnızca bu komutta örnek konsola yeni satır eklenir.",
      "15": "Bu blok bitti; döngü varsa koşul tekrar kontrol edilir."
    },
    "rules": [
      "Girdileri verilen sırayla, her biri ayrı satırda oku.",
      "Tam sayı girişleri geçerlidir; hatalı metin kontrolü istenmiyor.",
      "Değerleri int[] dizisinde tut. İndeksler 0’dan başlar.",
      "Yalnızca istenen sayıları, her birini ayrı satırda yaz. Başlık veya istem mesajı ekleme.",
      "Değişken adları ve uygun çözüm yolu serbest. Örnekteki sonucu sabit yazma."
    ],
    "goal": "Sayıları dizide sakla. Her elemanın değerine artış miktarını ekle. Sonuçları dizide tut. Güncellenmiş bütün elemanları ilkten sona, her birini ayrı satırda yaz.",
    "independent": false,
    "words": [
      [
        "İndeks ile eleman sayısı aynı şey değil",
        "İndeks, elemanın yeridir ve 0’dan başlar. 3 elemanın indeksleri 0, 1, 2 olur."
      ],
      [
        "raf.Length",
        "Dizide kaç eleman olduğunu verir. Son geçerli indeks raf.Length - 1 olur."
      ],
      [
        "raf[i] = değer",
        "Yalnızca i numaralı elemanın değerini değiştirir. raf[1], ikinci elemandır."
      ]
    ],
    "frames": [
      {
        "line": 0,
        "caption": "Örneği adım adım izle. Önce dizi kurulacak, sonra elemanlar üzerinde işlem yapılacak.",
        "vars": {},
        "output": [],
        "array": [],
        "active": -1,
        "operation": "ready"
      },
      {
        "line": 1,
        "caption": "İlk giriş 3: dizi 3 elemanlı olacak.",
        "vars": {
          "adet": 3
        },
        "output": [],
        "array": [],
        "active": -1,
        "operation": "count",
        "packet": "3",
        "metric": null,
        "old": null
      },
      {
        "line": 2,
        "caption": "Dizi oluşturulur. Her eleman başlangıçta 0.",
        "vars": {
          "adet": 3,
          "raf": "[0, 0, 0]"
        },
        "output": [],
        "array": [
          0,
          0,
          0
        ],
        "active": -1,
        "operation": "create",
        "packet": null,
        "metric": null,
        "old": null
      },
      {
        "line": 3,
        "caption": "i = 0. 0 < 3 doğru; sıradaki eleman okunacak.",
        "vars": {
          "adet": 3,
          "i": 0,
          "raf": "[0, 0, 0]"
        },
        "output": [],
        "array": [
          0,
          0,
          0
        ],
        "active": 0,
        "operation": "scan",
        "packet": null,
        "metric": null,
        "old": null
      },
      {
        "line": 5,
        "caption": "Sıradaki giriş 4. raf[0] içine yazılır.",
        "vars": {
          "adet": 3,
          "i": 0,
          "raf": "[4, 0, 0]"
        },
        "output": [],
        "array": [
          4,
          0,
          0
        ],
        "active": 0,
        "operation": "read",
        "packet": "4",
        "metric": null,
        "old": 0
      },
      {
        "line": 3,
        "caption": "i = 1. 1 < 3 doğru; sıradaki eleman okunacak.",
        "vars": {
          "adet": 3,
          "i": 1,
          "raf": "[4, 0, 0]"
        },
        "output": [],
        "array": [
          4,
          0,
          0
        ],
        "active": 1,
        "operation": "scan",
        "packet": null,
        "metric": null,
        "old": null
      },
      {
        "line": 5,
        "caption": "Sıradaki giriş 7. raf[1] içine yazılır.",
        "vars": {
          "adet": 3,
          "i": 1,
          "raf": "[4, 7, 0]"
        },
        "output": [],
        "array": [
          4,
          7,
          0
        ],
        "active": 1,
        "operation": "read",
        "packet": "7",
        "metric": null,
        "old": 0
      },
      {
        "line": 3,
        "caption": "i = 2. 2 < 3 doğru; sıradaki eleman okunacak.",
        "vars": {
          "adet": 3,
          "i": 2,
          "raf": "[4, 7, 0]"
        },
        "output": [],
        "array": [
          4,
          7,
          0
        ],
        "active": 2,
        "operation": "scan",
        "packet": null,
        "metric": null,
        "old": null
      },
      {
        "line": 5,
        "caption": "Sıradaki giriş 2. raf[2] içine yazılır.",
        "vars": {
          "adet": 3,
          "i": 2,
          "raf": "[4, 7, 2]"
        },
        "output": [],
        "array": [
          4,
          7,
          2
        ],
        "active": 2,
        "operation": "read",
        "packet": "2",
        "metric": null,
        "old": 0
      },
      {
        "line": 3,
        "caption": "i = 3. 3 < 3 yanlış. Bütün elemanlar okundu.",
        "vars": {
          "adet": 3,
          "i": 3,
          "raf": "[4, 7, 2]"
        },
        "output": [],
        "array": [
          4,
          7,
          2
        ],
        "active": -1,
        "operation": "endread",
        "packet": null,
        "metric": null,
        "old": null
      },
      {
        "line": 7,
        "caption": "Artış miktarı 5 olarak okunur.",
        "vars": {
          "adet": 3,
          "artis": 5,
          "raf": "[4, 7, 2]"
        },
        "output": [],
        "array": [
          4,
          7,
          2
        ],
        "active": -1,
        "operation": "query",
        "packet": "5",
        "metric": null,
        "old": null
      },
      {
        "line": 8,
        "caption": "İndeks 0 güncellenecek. Eski değer 4.",
        "vars": {
          "adet": 3,
          "artis": 5,
          "i": 0,
          "raf": "[4, 7, 2]"
        },
        "output": [],
        "array": [
          4,
          7,
          2
        ],
        "active": 0,
        "operation": "scan",
        "packet": null,
        "metric": null,
        "old": null
      },
      {
        "line": 10,
        "caption": "4 + 5 = 9. Yeni değer aynı elemana yazılır.",
        "vars": {
          "adet": 3,
          "artis": 5,
          "i": 0,
          "raf": "[9, 7, 2]"
        },
        "output": [],
        "array": [
          9,
          7,
          2
        ],
        "active": 0,
        "operation": "update",
        "packet": "9",
        "metric": null,
        "old": 4
      },
      {
        "line": 8,
        "caption": "İndeks 1 güncellenecek. Eski değer 7.",
        "vars": {
          "adet": 3,
          "artis": 5,
          "i": 1,
          "raf": "[9, 7, 2]"
        },
        "output": [],
        "array": [
          9,
          7,
          2
        ],
        "active": 1,
        "operation": "scan",
        "packet": null,
        "metric": null,
        "old": null
      },
      {
        "line": 10,
        "caption": "7 + 5 = 12. Yeni değer aynı elemana yazılır.",
        "vars": {
          "adet": 3,
          "artis": 5,
          "i": 1,
          "raf": "[9, 12, 2]"
        },
        "output": [],
        "array": [
          9,
          12,
          2
        ],
        "active": 1,
        "operation": "update",
        "packet": "12",
        "metric": null,
        "old": 7
      },
      {
        "line": 8,
        "caption": "İndeks 2 güncellenecek. Eski değer 2.",
        "vars": {
          "adet": 3,
          "artis": 5,
          "i": 2,
          "raf": "[9, 12, 2]"
        },
        "output": [],
        "array": [
          9,
          12,
          2
        ],
        "active": 2,
        "operation": "scan",
        "packet": null,
        "metric": null,
        "old": null
      },
      {
        "line": 10,
        "caption": "2 + 5 = 7. Yeni değer aynı elemana yazılır.",
        "vars": {
          "adet": 3,
          "artis": 5,
          "i": 2,
          "raf": "[9, 12, 7]"
        },
        "output": [],
        "array": [
          9,
          12,
          7
        ],
        "active": 2,
        "operation": "update",
        "packet": "7",
        "metric": null,
        "old": 2
      },
      {
        "line": 12,
        "caption": "Güncel raf[0] okunur.",
        "vars": {
          "adet": 3,
          "artis": 5,
          "i": 0,
          "raf": "[9, 12, 7]"
        },
        "output": [],
        "array": [
          9,
          12,
          7
        ],
        "active": 0,
        "operation": "scan",
        "packet": null,
        "metric": null,
        "old": null
      },
      {
        "line": 14,
        "caption": "9 konsola yazılır.",
        "vars": {
          "adet": 3,
          "artis": 5,
          "i": 0,
          "raf": "[9, 12, 7]"
        },
        "output": [
          "9"
        ],
        "array": [
          9,
          12,
          7
        ],
        "active": 0,
        "operation": "output",
        "packet": null,
        "metric": null,
        "old": null
      },
      {
        "line": 12,
        "caption": "Güncel raf[1] okunur.",
        "vars": {
          "adet": 3,
          "artis": 5,
          "i": 1,
          "raf": "[9, 12, 7]"
        },
        "output": [
          "9"
        ],
        "array": [
          9,
          12,
          7
        ],
        "active": 1,
        "operation": "scan",
        "packet": null,
        "metric": null,
        "old": null
      },
      {
        "line": 14,
        "caption": "12 konsola yazılır.",
        "vars": {
          "adet": 3,
          "artis": 5,
          "i": 1,
          "raf": "[9, 12, 7]"
        },
        "output": [
          "9",
          "12"
        ],
        "array": [
          9,
          12,
          7
        ],
        "active": 1,
        "operation": "output",
        "packet": null,
        "metric": null,
        "old": null
      },
      {
        "line": 12,
        "caption": "Güncel raf[2] okunur.",
        "vars": {
          "adet": 3,
          "artis": 5,
          "i": 2,
          "raf": "[9, 12, 7]"
        },
        "output": [
          "9",
          "12"
        ],
        "array": [
          9,
          12,
          7
        ],
        "active": 2,
        "operation": "scan",
        "packet": null,
        "metric": null,
        "old": null
      },
      {
        "line": 14,
        "caption": "7 konsola yazılır.",
        "vars": {
          "adet": 3,
          "artis": 5,
          "i": 2,
          "raf": "[9, 12, 7]"
        },
        "output": [
          "9",
          "12",
          "7"
        ],
        "array": [
          9,
          12,
          7
        ],
        "active": 2,
        "operation": "output",
        "packet": null,
        "metric": null,
        "old": null
      }
    ]
  }
];
