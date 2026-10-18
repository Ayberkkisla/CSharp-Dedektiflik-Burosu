window.Unit2CapstoneTasks = [
  {
    "id": "signal",
    "title": "Doğru frekansı bul",
    "theme": "amber",
    "kind": "Giriş kontrol masası",
    "intro": "Telsiz bağlantısı için 1 ile 5 arasında bir kanal gerekiyor. Kullanıcı bazen harf veya aralık dışında sayı yazıyor.",
    "goal": "Kullanıcının yazdığı kanalı kontrol eden bir program yaz. 1, 2, 3, 4 veya 5 kabul edilecek. Kabul edilemeyen her girişte Geçersiz yazıp yeniden giriş al. İlk kabul edilen sayıda Hat ve sayıyı yaz (örneğin Hat 3), sonra programı bitir.",
    "rules": [
      "Her denemede Console.ReadLine() ile yeni bir satır oku.",
      "Geçerli sınırlar 1 ve 5 dahil. İlk uygun sayıda okumayı bitir.",
      "İstem mesajı ekleme. Yalnızca Geçersiz veya Hat X satırlarını yaz."
    ],
    "input": [
      "abc",
      "8",
      "3"
    ],
    "output": [
      "Geçersiz",
      "Geçersiz",
      "Hat 3"
    ],
    "concept": "Yanlış girişi reddet · 1–5 arasındaki ilk kanalı seç",
    "hint": "TryParse dönüşü false ise giriş sayı değildir. Başarılıysa ayrıca kanal >= 1 && kanal <= 5 kontrolü yap.",
    "reference": "while (true)\n{\n    string giris = Console.ReadLine();\n    if (int.TryParse(giris, out int kanal) && kanal >= 1 && kanal <= 5)\n    {\n        Console.WriteLine($\"Hat {kanal}\");\n        break;\n    }\n    Console.WriteLine(\"Geçersiz\");\n}",
    "frames": [
      {
        "caption": "Bu döngü, doğru kanal bulunana kadar tekrar giriş alacak.",
        "token": "—",
        "status": "bekliyor",
        "vars": {
          "giris": "henüz okunmadı",
          "kanal": "henüz tanımlanmadı"
        },
        "line": 1,
        "angle": -110,
        "output": [],
        "attempt": -1,
        "focus": "read"
      },
      {
        "caption": "ReadLine, kullanıcının yazdığı abc metnini giris değişkenine alır.",
        "token": "abc",
        "status": "reading",
        "vars": {
          "giris": "abc",
          "kanal": "henüz tanımlanmadı"
        },
        "line": 3,
        "angle": -70,
        "output": [],
        "attempt": 0,
        "focus": "read"
      },
      {
        "caption": "abc sayıya çevrilemedi. TryParse false döner; if bloğuna girilmez.",
        "token": "abc",
        "status": "invalid",
        "vars": {
          "giris": "abc",
          "kanal": 0
        },
        "line": 4,
        "angle": -40,
        "output": [],
        "attempt": 0,
        "focus": "parse"
      },
      {
        "caption": "Bu WriteLine satırı konsola Geçersiz ekler. Sonra döngü yeni giriş için başa döner.",
        "token": "abc",
        "status": "reject",
        "vars": {
          "giris": "abc",
          "kanal": 0
        },
        "line": 9,
        "angle": -40,
        "output": [
          "Geçersiz"
        ],
        "attempt": 0,
        "focus": "output"
      },
      {
        "caption": "ReadLine, kullanıcının yazdığı 8 metnini giris değişkenine alır.",
        "token": "8",
        "status": "reading",
        "vars": {
          "giris": "8",
          "kanal": "bu tur henüz atanmadı"
        },
        "line": 3,
        "angle": 0,
        "output": [
          "Geçersiz"
        ],
        "attempt": 1,
        "focus": "read"
      },
      {
        "caption": "“8” metni 8 sayısına çevrildi. kanal bu sayıyı tutar; TryParse true döner.",
        "token": "8",
        "status": "invalid",
        "vars": {
          "giris": "8",
          "kanal": 8
        },
        "line": 4,
        "angle": 30,
        "output": [
          "Geçersiz"
        ],
        "attempt": 1,
        "focus": "parse"
      },
      {
        "caption": "8, alt sınırı geçiyor ama 5’ten büyük. İkinci koşul yanlış; if bloğuna girilmez.",
        "token": "8",
        "status": "invalid",
        "vars": {
          "giris": "8",
          "kanal": 8
        },
        "line": 4,
        "angle": 30,
        "output": [
          "Geçersiz"
        ],
        "attempt": 1,
        "focus": "range"
      },
      {
        "caption": "Bu WriteLine satırı konsola Geçersiz ekler. Sonra döngü yeni giriş için başa döner.",
        "token": "8",
        "status": "reject",
        "vars": {
          "giris": "8",
          "kanal": 8
        },
        "line": 9,
        "angle": 30,
        "output": [
          "Geçersiz",
          "Geçersiz"
        ],
        "attempt": 1,
        "focus": "output"
      },
      {
        "caption": "ReadLine, kullanıcının yazdığı 3 metnini giris değişkenine alır.",
        "token": "3",
        "status": "reading",
        "vars": {
          "giris": "3",
          "kanal": "bu tur henüz atanmadı"
        },
        "line": 3,
        "angle": 70,
        "output": [
          "Geçersiz",
          "Geçersiz"
        ],
        "attempt": 2,
        "focus": "read"
      },
      {
        "caption": "“3” metni 3 sayısına çevrildi. kanal bu sayıyı tutar; TryParse true döner.",
        "token": "3",
        "status": "valid",
        "vars": {
          "giris": "3",
          "kanal": 3
        },
        "line": 4,
        "angle": 100,
        "output": [
          "Geçersiz",
          "Geçersiz"
        ],
        "attempt": 2,
        "focus": "parse"
      },
      {
        "caption": "3 hem 1’den küçük değil hem de 5’ten büyük değil. İki koşul doğru; if bloğuna girilir.",
        "token": "3",
        "status": "valid",
        "vars": {
          "giris": "3",
          "kanal": 3
        },
        "line": 4,
        "angle": 100,
        "output": [
          "Geçersiz",
          "Geçersiz"
        ],
        "attempt": 2,
        "focus": "range"
      },
      {
        "caption": "Bu WriteLine satırı kanalın değerini metne yerleştirir: Hat 3.",
        "token": "3",
        "status": "accept",
        "vars": {
          "giris": "3",
          "kanal": 3
        },
        "line": 6,
        "angle": 100,
        "output": [
          "Geçersiz",
          "Geçersiz",
          "Hat 3"
        ],
        "attempt": 2,
        "focus": "output"
      },
      {
        "caption": "break döngüden çıkar. Artık ReadLine’a dönmeyiz; başka giriş alınmaz.",
        "token": "3",
        "status": "complete",
        "vars": {
          "giris": "3",
          "kanal": 3
        },
        "line": 7,
        "angle": 100,
        "output": [
          "Geçersiz",
          "Geçersiz",
          "Hat 3"
        ],
        "attempt": 2,
        "focus": "exit"
      }
    ],
    "understand": [
      "Kullanıcı her denemede bir şey yazacak: örneğin abc, sonra 8, sonra 3. Her değer ayrı satırda gelir.",
      "Yazılan şey bir tam sayı mı? Sayıysa 1 ile 5 arasında mı? İkisi de doğruysa kabul et. Değilse yeniden giriş al.",
      "abc için Geçersiz; 8 için Geçersiz; 3 için Hat 3 yaz. 3 kabul edilince program dursun."
    ],
    "walkthrough": [
      "abc: Sayı değil. Geçersiz yaz ve bir sonraki satırı oku.",
      "8: Sayı ama 1–5 arasında değil. Geçersiz yaz ve tekrar oku.",
      "3: Sayı ve izin verilen aralıkta. Hat 3 yaz, artık giriş alma."
    ],
    "lineHelp": {
      "1": "Kaç deneme yapılacağını bilmiyoruz. while (true) bu işi tekrar tekrar yapar. Doğru kanal bulunduğunda break ile durduracağız.",
      "3": "Kullanıcının bir satır yazmasını bekle. Yazdığı şeyi giris adlı değişkende metin olarak sakla. Kullanıcı 8 yazsa bile ReadLine bize önce \"8\" metnini verir.",
      "4": "Üç şeyi birlikte soruyoruz: Metin tam sayıya çevrildi mi? Sayı en az 1 mi? En fazla 5 mi? &&, bu şartların HEPSİNİN doğru olması gerektiğini söyler. out int kanal, çevrilen sayıyı kanal adlı değişkende tutar.",
      "6": "Kabul edilen sayıyı ekrana yaz. kanal 3 ise çıktı Hat 3 olur. $ işareti ve {kanal}, değişkenin değerini yazının içine yerleştirir.",
      "7": "En yakındaki döngüyü bitir. Böylece doğru kanal bulunduğunda tekrar ReadLine çalışmaz.",
      "9": "Bu satıra ancak kanal kabul edilmediyse geliriz; kabul edilince yukarıdaki break ile çıkmış oluruz. Geçersiz yazdıktan sonra döngü yeniden giriş alır."
    },
    "words": [
      [
        "int.TryParse",
        "Metni tam sayıya çevirmeyi dener. Olursa true (doğru), olmazsa false (yanlış) verir. Harf yazılması programı bu noktada durdurmaz."
      ],
      [
        "out int kanal",
        "Çevirme başarılıysa bulunan sayıyı kanal adlı int değişkeninde saklar. Başarısızsa bu örnekte kanal 0 olur; bu değer kabul edilmez."
      ],
      [
        "&& ve >= / <=",
        "&&: hepsi doğru olmalı. >=: büyük veya eşit. <=: küçük veya eşit. 1 ve 5 de kabul edilir."
      ]
    ]
  },
  {
    "id": "vault",
    "title": "Üç denemeli kasa",
    "theme": "red",
    "kind": "Kasa mekanizması",
    "intro": "Arşiv kasasının şifresi 2468. Görevlinin en fazla üç deneme hakkı var.",
    "goal": "Kullanıcıya en fazla üç şifre denemesi ver. Doğru şifre 2468. Her yanlış denemede Yanlış yaz. Doğru şifrede Açıldı yaz ve başka deneme alma. Üç deneme de yanlışsa en son Kilitli yaz.",
    "rules": [
      "Şifreyi string olarak karşılaştır. 2468 ile birebir aynı olmalı.",
      "Başarılı olunca yeni satır okuma. En fazla 3 giriş oku.",
      "Üçüncü yanlış girişte de Yanlış yazılır; ardından Kilitli gelir."
    ],
    "input": [
      "1111",
      "0000",
      "2468"
    ],
    "output": [
      "Yanlış",
      "Yanlış",
      "Açıldı"
    ],
    "concept": "Sınırlı döngü + if/else + erken çıkış",
    "hint": "Başarıyı bool ile tutabilirsin. Döngü bitince hâlâ başarılı değilsen Kilitli yaz.",
    "reference": "bool acildi = false;\nfor (int hak = 1; hak <= 3; hak++)\n{\n    string sifre = Console.ReadLine();\n    if (sifre == \"2468\")\n    {\n        Console.WriteLine(\"Açıldı\");\n        acildi = true;\n        break;\n    }\n    Console.WriteLine(\"Yanlış\");\n}\nif (!acildi) Console.WriteLine(\"Kilitli\");",
    "frames": [
      {
        "caption": "Kasa kapalı. Üç hak var. Her ışık bir denemeyi temsil ediyor.",
        "token": "1111",
        "status": "bekliyor",
        "vars": {
          "kullanilan": 0,
          "kalan": 3,
          "acildi": false
        },
        "line": 1,
        "output": []
      },
      {
        "caption": "1111 yanlış. İlk hak kullanıldı; Yanlış yazılır. İki hak kaldı.",
        "token": "1111",
        "status": "reject",
        "vars": {
          "kullanilan": 1,
          "kalan": 2,
          "acildi": false
        },
        "line": 11,
        "output": [
          "Yanlış"
        ]
      },
      {
        "caption": "0000 da yanlış. İkinci ışık söndü. Son bir deneme var.",
        "token": "0000",
        "status": "reject",
        "vars": {
          "kullanilan": 2,
          "kalan": 1,
          "acildi": false
        },
        "line": 11,
        "output": [
          "Yanlış",
          "Yanlış"
        ]
      },
      {
        "caption": "2468 doğru. Açıldı yazılır, başarı bilgisi tutulur ve döngü biter. Kilitli yazılmaz.",
        "token": "2468",
        "status": "accept",
        "vars": {
          "kullanilan": 3,
          "kalan": 0,
          "acildi": true
        },
        "line": 9,
        "output": [
          "Yanlış",
          "Yanlış",
          "Açıldı"
        ]
      }
    ],
    "understand": [
      "Kullanıcı her denemede bir şifre yazacak. Doğru şifre 2468; en fazla üç kez deneyebilir.",
      "Her şifreyi kontrol et. Doğruysa hemen dur. Yanlışsa bir hakkı kullanıp sıradaki denemeye geç.",
      "Yanlış denemede Yanlış, doğru denemede Açıldı yaz. Üçü de yanlışsa üçüncü Yanlış satırından sonra Kilitli yaz."
    ],
    "walkthrough": [
      "1111: Yanlış yaz. İki deneme hakkı kaldı.",
      "0000: Yanlış yaz. Bir deneme hakkı kaldı.",
      "2468: Açıldı yaz ve bitir. Son hakta doğru bildiği için Kilitli yazılmaz."
    ],
    "lineHelp": {
      "1": "Kasayı henüz açmadık. Bunu unutmamak için acildi adlı bool değişkenini false (hayır) yapıyoruz.",
      "2": "hak önce 1 olur. hak 3 veya daha küçükse bir deneme yapılır. Her turdan sonra hak++ değeri 1 artırır: 1, 2, 3. Böylece en fazla üç deneme olur.",
      "4": "Kullanıcıdan bu denemenin şifresini oku. Şifreyi hesapta kullanmayacağımız için string, yani metin olarak tutuyoruz.",
      "5": "== iki değerin aynı olup olmadığını sorar. Yazılan şifre \"2468\" ile aynıysa süslü parantez içindeki başarı satırları çalışır.",
      "7": "Doğru şifre geldiği için ekrana Açıldı yaz.",
      "8": "Kasayı açtığımızı kaydet: acildi artık true (evet). Döngüden sonra Kilitli yazıp yazmayacağımıza bu bilgiyle karar vereceğiz.",
      "9": "Şifre bulundu. for döngüsünden hemen çık; kalan haklar için yeni şifre isteme.",
      "11": "Şifre doğru olsaydı break ile çıkmıştık. Buraya geldiysek yanlış şifre yazılmıştır; ekrana Yanlış yaz.",
      "13": "!acildi, \"kasa açılmadıysa\" demek. Üç deneme bitti ve hiç doğru şifre bulunmadıysa Kilitli yaz."
    },
    "words": [
      [
        "bool / true / false",
        "bool bir evet-hayır bilgisi tutar. true: evet/doğru, false: hayır/yanlış. Burada kasanın açılıp açılmadığını hatırlar."
      ],
      [
        "= ve ==",
        "Tek = bir değer atar: acildi = true. Çift == karşılaştırır: sifre == \"2468\"."
      ],
      [
        "!acildi",
        "acildi bilgisinin tersini sorar. acildi false ise !acildi true olur; yani kasa açılmamış demektir."
      ]
    ]
  },
  {
    "id": "belt",
    "title": "Bozuk kayıtları ayır",
    "theme": "cyan",
    "kind": "Ayırma bandı",
    "intro": "Banta gelen kayıtlardan yalnızca 1–100 aralığındaki tam sayıları kabul edeceksin. Hatalı kayıtlar hedef adedi doldurmaz.",
    "goal": "Önce kullanıcıdan kaç geçerli sayı istediğini oku. Ardından bu sayıda geçerli sayı bulana kadar giriş almaya devam et. Yalnızca 1–100 arasındaki tam sayılar kabul edilir. Her hatalı girişte Atlandı yaz. Hedef dolunca toplamı ve kabul edilen sayı adedini yaz.",
    "rules": [
      "İlk satırdaki hedef adet geçerli bir int olarak verilecek.",
      "Hatalı giriş toplamı ve kabul edilen adedi artırmaz.",
      "Hedefe ulaşınca okumayı bırak. Geçerli sayıların kendisini ayrıca yazdırma."
    ],
    "input": [
      "3",
      "10",
      "abc",
      "0",
      "20",
      "30"
    ],
    "output": [
      "Atlandı",
      "Atlandı",
      "Toplam: 60",
      "Adet: 3"
    ],
    "concept": "TryParse + continue mantığı + toplam ve sayaç",
    "hint": "Kabul edilen adet ile okunan satır sayısı farklıdır. Sayacı yalnızca geçerli girişte artır.",
    "reference": "int hedef = Convert.ToInt32(Console.ReadLine());\nint adet = 0, toplam = 0;\nwhile (adet < hedef)\n{\n    string giris = Console.ReadLine();\n    if (!int.TryParse(giris, out int sayi) || sayi < 1 || sayi > 100)\n    {\n        Console.WriteLine(\"Atlandı\");\n        continue;\n    }\n    toplam += sayi;\n    adet++;\n}\nConsole.WriteLine($\"Toplam: {toplam}\");\nConsole.WriteLine($\"Adet: {adet}\");",
    "frames": [
      {
        "caption": "İlk girdi 3: üç geçerli kayıt gerekiyor. Sayaç henüz 0; toplam da 0.",
        "token": "3",
        "status": "bekliyor",
        "vars": {
          "hedef": 3,
          "adet": 0,
          "toplam": 0
        },
        "line": 1,
        "output": []
      },
      {
        "caption": "10 geçerli. Kabul kutusuna gider. Adet 1, toplam 10 olur.",
        "token": "10",
        "status": "accept",
        "vars": {
          "hedef": 3,
          "adet": 1,
          "toplam": 10
        },
        "line": 12,
        "output": []
      },
      {
        "caption": "abc sayı değildir. Atlandı yazılır. Adet hâlâ 1, toplam hâlâ 10.",
        "token": "abc",
        "status": "reject",
        "vars": {
          "hedef": 3,
          "adet": 1,
          "toplam": 10
        },
        "line": 9,
        "output": [
          "Atlandı"
        ]
      },
      {
        "caption": "0 sayıdır ama izin verilen aralıkta değildir. Yine Atlandı yazılır; sayaç ilerlemez.",
        "token": "0",
        "status": "reject",
        "vars": {
          "hedef": 3,
          "adet": 1,
          "toplam": 10
        },
        "line": 9,
        "output": [
          "Atlandı",
          "Atlandı"
        ]
      },
      {
        "caption": "20 kabul edilir. Artık iki geçerli kayıt ve 30 toplam var. Bir kayıt daha gerekiyor.",
        "token": "20",
        "status": "accept",
        "vars": {
          "hedef": 3,
          "adet": 2,
          "toplam": 30
        },
        "line": 12,
        "output": [
          "Atlandı",
          "Atlandı"
        ]
      },
      {
        "caption": "30 da kabul edildi: adet 3, toplam 60. Döngü durur ve iki özet satırı yazılır.",
        "token": "30",
        "status": "complete",
        "vars": {
          "hedef": 3,
          "adet": 3,
          "toplam": 60
        },
        "line": 14,
        "output": [
          "Atlandı",
          "Atlandı",
          "Toplam: 60",
          "Adet: 3"
        ]
      }
    ],
    "understand": [
      "İlk satır kaç geçerli sayı toplayacağını söyler. Örnekte 3. Sonra kullanıcı sayıları veya yanlışlıkla metinleri ayrı satırlarda yazar.",
      "Yalnızca 1–100 arasındaki tam sayıları topla ve bunları say. Hatalı girişleri sayma. Üç geçerli sayı bulmak için üçten fazla satır okuman gerekebilir.",
      "Her hatalı girişte Atlandı yaz. Hedefe ulaşınca toplamı ve kaç sayı kabul ettiğini iki ayrı satırda yaz."
    ],
    "walkthrough": [
      "İlk 3, toplanacak bir sayı değil: üç geçerli sayı istediğimizi anlatır.",
      "10 kabul: toplam 10, adet 1. abc ve 0 reddedilir: her biri için Atlandı yaz; toplam ve adet değişmez.",
      "20 kabul: toplam 30, adet 2. 30 kabul: toplam 60, adet 3. Hedef doldu; Toplam: 60 ve Adet: 3 yaz."
    ],
    "lineHelp": {
      "1": "İlk satırı oku ve sayıya çevir: hedef, kaç tane geçerli sayı istediğimizdir. Örnekte 3. Bu ilk değeri toplama eklemiyoruz.",
      "2": "İki ayrı bilgi tutuyoruz: adet kaç geçerli sayı bulduğumuz, toplam bunların toplamı. Başlangıçta ikisi de 0.",
      "3": "Yeterli geçerli sayı bulmadıysak devam et. Örneğin adet 1 ve hedef 3 ise yeni giriş gerekir. adet 3 olduğunda koşul yanlış olur ve döngü biter.",
      "5": "Sıradaki kullanıcı girişini metin olarak oku. Harf de gelebileceği için hemen Convert.ToInt32 kullanmıyoruz.",
      "6": "Bu giriş hatalı mı? Sayıya çevrilemiyorsa VEYA 1’den küçükse VEYA 100’den büyükse reddet. ||, bu durumlardan BİRİNİN doğru olmasının yeterli olduğunu söyler. !TryParse, \"sayıya çevrilemedi\" anlamına gelir.",
      "8": "Hatalı bir giriş geldi. Yalnızca Atlandı yaz.",
      "9": "Bu turun kalanını atla ve yeni giriş al. Aşağıdaki toplama ve adet++ satırları bu hatalı giriş için çalışmaz.",
      "11": "Geçerli sayıyı eski toplamın üzerine ekle. toplam += sayi, toplam = toplam + sayi ile aynı. Örneğin 10 + 20 = 30.",
      "12": "Bir geçerli sayı daha bulduk. adet++ sayacı 1 artırır. Sayının büyüklüğünü değil, kaç tane kabul ettiğimizi sayıyoruz.",
      "14": "Hedef dolduğu için döngü bitti. Kabul edilen sayıların toplamını yaz: örnekte Toplam: 60.",
      "15": "Kaç geçerli sayı kabul ettiğimizi yaz: örnekte Adet: 3."
    },
    "words": [
      [
        "toplam ve adet farkı",
        "10 ile 20 kabul edildiyse toplam 30, adet 2 olur. Birisi değerleri toplar, diğeri kaç sayı olduğunu sayar."
      ],
      [
        "continue",
        "Döngüyü tamamen bitirmez. Sadece bu turun kalanını atlar; koşul uygunsa yeni tura geçer."
      ],
      [
        "|| ve !",
        "||: şartlardan biri yeterli. !: sonucu tersine çevirir. !TryParse, dönüştürme başarısız mı diye sorar."
      ]
    ]
  },
  {
    "id": "metro",
    "title": "Hat seçme merkezi",
    "theme": "violet",
    "kind": "Demiryolu makası",
    "intro": "Bir menüden arşiv veya liman hattı seçiliyor. Her seçimden sonra menü yeniden kullanılabiliyor; 0 bağlantıyı kapatıyor.",
    "goal": "Kullanıcıdan tekrar tekrar seçim al. 1 gelirse Arşiv, 2 gelirse Liman yaz ve yeniden seçim al. 0 gelirse Bitti yazıp bitir. Bunların dışındaki her girişte Geçersiz yaz; program açık kalsın.",
    "rules": [
      "Menü başlığı veya seçenekleri ekrana yazma; test yalnızca sonuç satırlarını bekler.",
      "0 geldikten sonra yeni giriş okuma.",
      "Kararları switch veya if/else ile kurabilirsin."
    ],
    "input": [
      "1",
      "abc",
      "2",
      "9",
      "0"
    ],
    "output": [
      "Arşiv",
      "Geçersiz",
      "Liman",
      "Geçersiz",
      "Bitti"
    ],
    "concept": "Giriş doğrulama + tekrarlanan menü + switch",
    "hint": "switch içindeki break yalnızca switch’i bitirir. Menü döngüsünü bitirmek için ayrıca bir çalışma koşulu tutabilirsin.",
    "reference": "bool devam = true;\nwhile (devam)\n{\n    string giris = Console.ReadLine();\n    if (!int.TryParse(giris, out int secim))\n    {\n        Console.WriteLine(\"Geçersiz\");\n        continue;\n    }\n    switch (secim)\n    {\n        case 1: Console.WriteLine(\"Arşiv\"); break;\n        case 2: Console.WriteLine(\"Liman\"); break;\n        case 0: Console.WriteLine(\"Bitti\"); devam = false; break;\n        default: Console.WriteLine(\"Geçersiz\"); break;\n    }\n}",
    "frames": [
      {
        "caption": "Merkez seçim bekliyor. Menüde 1 arşiv, 2 liman, 0 çıkış demek.",
        "token": "—",
        "status": "bekliyor",
        "vars": {
          "secim": "—",
          "devam": true
        },
        "line": 2,
        "output": []
      },
      {
        "caption": "1 seçildi. Arşiv hattına gidilir, Arşiv yazılır. Switch biter ama menü döngüsü sürer.",
        "token": "1",
        "status": "archive",
        "vars": {
          "secim": 1,
          "devam": true
        },
        "line": 12,
        "output": [
          "Arşiv"
        ]
      },
      {
        "caption": "abc sayıya çevrilemedi. Hiçbir hat seçilmez. Geçersiz yazıp yeniden okuruz.",
        "token": "abc",
        "status": "reject",
        "vars": {
          "secim": "geçersiz",
          "devam": true
        },
        "line": 8,
        "output": [
          "Arşiv",
          "Geçersiz"
        ]
      },
      {
        "caption": "2 liman hattını seçer. Liman yazıldıktan sonra menü yine açık kalır.",
        "token": "2",
        "status": "harbor",
        "vars": {
          "secim": 2,
          "devam": true
        },
        "line": 13,
        "output": [
          "Arşiv",
          "Geçersiz",
          "Liman"
        ]
      },
      {
        "caption": "9 bir tam sayı ama menü seçeneği değil. default kolu Geçersiz yazar.",
        "token": "9",
        "status": "reject",
        "vars": {
          "secim": 9,
          "devam": true
        },
        "line": 15,
        "output": [
          "Arşiv",
          "Geçersiz",
          "Liman",
          "Geçersiz"
        ]
      },
      {
        "caption": "0 geldi. Bitti yazılır ve devam false olur. Sonraki döngü kontrolünde yeni tur başlamaz.",
        "token": "0",
        "status": "complete",
        "vars": {
          "secim": 0,
          "devam": false
        },
        "line": 14,
        "output": [
          "Arşiv",
          "Geçersiz",
          "Liman",
          "Geçersiz",
          "Bitti"
        ]
      }
    ],
    "understand": [
      "Kullanıcı her satırda bir seçim yazar. 1 = Arşiv, 2 = Liman, 0 = programı kapat.",
      "Her seçime uygun cevabı ver. 1 veya 2 seçilince program kapanmaz; yeniden seçim al. 0 gelince bitir.",
      "1 için Arşiv, 2 için Liman, 0 için Bitti yaz. Diğer sayılar ve abc gibi metinler için Geçersiz yaz."
    ],
    "walkthrough": [
      "1 → Arşiv yaz, yeni seçim al. abc → Geçersiz yaz, yeni seçim al.",
      "2 → Liman yaz, yeni seçim al. 9 → seçenek yok; Geçersiz yaz, yeni seçim al.",
      "0 → Bitti yaz ve dur. Bu girişten sonra başka satır okuma."
    ],
    "lineHelp": {
      "1": "Menü açık kalsın diye devam değişkenini true yap. Bu değişken programın yeniden seçim isteyip istemeyeceğini tutacak.",
      "2": "devam true olduğu sürece yeni seçim al. devam false olunca yeni tur başlamaz.",
      "4": "Kullanıcının sıradaki seçimini bir metin olarak oku.",
      "5": "Metin tam sayıya çevrilemiyor mu? Başındaki ! bunu soruyor. Örneğin abc için bu koşul doğru olur ve hata bölümüne gireriz.",
      "7": "Sayı olmayan bir seçim geldiği için Geçersiz yaz.",
      "8": "Bu girişle switch kısmına gitme. Yeni seçim almak için döngünün sonraki turuna geç.",
      "10": "secim değerine bak ve onunla eşleşen case bölümünü çalıştır.",
      "12": "Seçim 1 ise Arşiv yaz. Buradaki break yalnızca switch bölümünü bitirir. while devam ettiği için program tekrar seçim alır.",
      "13": "Seçim 2 ise Liman yaz. switch biter ama program kapanmaz; yeni seçim alınır.",
      "14": "Seçim 0 ise Bitti yaz ve devam = false yap. break switch bölümünden çıkar; while da devam artık false olduğu için bir daha başlamaz.",
      "15": "Sayı var ama 0, 1 veya 2 değilse bu bölüm çalışır. Örneğin 9 için Geçersiz yaz."
    },
    "words": [
      [
        "switch / case / default",
        "switch değere bakar. case 1, değer 1 ise çalışır. default, hiçbir case eşleşmediğinde çalışır."
      ],
      [
        "Buradaki break neden programı kapatmıyor?",
        "break en yakın döngüden veya switch bölümünden çıkar. Bu örnekte en yakındaki yapı switch. Menüyü durduran şey devam = false satırıdır."
      ],
      [
        "continue ile break farkı",
        "continue while döngüsünün yeni turuna geçer. Buradaki break ise switch bölümünü bitirir."
      ]
    ]
  },
  {
    "id": "control",
    "title": "Büroyu sen yönet",
    "theme": "final",
    "kind": "Gece vardiyası kontrol odası",
    "independent": true,
    "intro": "Bu bağımsız görevde menüyü, giriş kontrolünü ve kasa hesabını tek programda birleştiriyorsun. Kasa ve başarılı işlem sayısı 0’dan başlar.",
    "goal": "Bir kasa programı yaz. 1 seçilirse bir sonraki satırdan tutarı oku; 1–1000 arasındaki tam sayıyı kasaya ekleyip Eklendi yaz. Tutar hatalıysa Geçersiz tutar yaz. 2 seçilirse Kasa: X yaz. 0 seçilirse Kasa: X ve İşlem: N satırlarını yazıp bitir. Başka seçimde Geçersiz seçim yaz. X kasa toplamı, N yalnızca başarılı para eklemelerin sayısıdır.",
    "rules": [
      "Sayı olmayan menü seçimi de Geçersiz seçim sayılır.",
      "Tutar yalnızca 1 seçildikten sonra okunur. Yanlış tutardan sonra tekrar menü seçimi beklenir.",
      "İşlem sayısı yalnızca başarılı para eklemede 1 artar. Kasa sorgulama sayılmaz.",
      "Çıkıştan sonra başka giriş okuma. Ek istem veya menü metni yazma. Girdiler kasayı int sınırında tutar."
    ],
    "input": [
      "1",
      "100",
      "1",
      "abc",
      "2",
      "9",
      "1",
      "50",
      "0"
    ],
    "output": [
      "Eklendi",
      "Geçersiz tutar",
      "Kasa: 100",
      "Geçersiz seçim",
      "Eklendi",
      "Kasa: 150",
      "İşlem: 2"
    ],
    "concept": "Menü ve kasa hesabı · bağımsız görev",
    "hint": "Önce kâğıtta seçim → okunacak bilgi → yapılacak işlem tablosu çiz. Sonra çalışan bir menü kur; en son tutar kontrolünü ekle.",
    "frames": [
      {
        "caption": "Vardiya başlıyor: kasa 0, başarılı işlem 0. Bu sahne örneğin davranışını gösteriyor; çözüm kodunu sen kuracaksın.",
        "token": "—",
        "status": "bekliyor",
        "vars": {
          "kasa": 0,
          "islem": 0
        },
        "output": []
      },
      {
        "caption": "Seçim 1, ardından tutar 100. Geçerli para eklendi: kasa 100, işlem 1.",
        "token": "1 → 100",
        "status": "accept",
        "vars": {
          "kasa": 100,
          "islem": 1
        },
        "output": [
          "Eklendi"
        ]
      },
      {
        "caption": "Seçim 1, tutar abc. Tutar reddedilir. Kasa ve işlem sayısı değişmez; sıradaki satır yeniden menü seçimidir.",
        "token": "1 → abc",
        "status": "reject",
        "vars": {
          "kasa": 100,
          "islem": 1
        },
        "output": [
          "Eklendi",
          "Geçersiz tutar"
        ]
      },
      {
        "caption": "Seçim 2: kasaya yalnızca bakıyoruz. Kasa: 100 yazılır; işlem sayısı artmaz.",
        "token": "2",
        "status": "report",
        "vars": {
          "kasa": 100,
          "islem": 1
        },
        "output": [
          "Eklendi",
          "Geçersiz tutar",
          "Kasa: 100"
        ]
      },
      {
        "caption": "Seçim 9 tanımsız. Geçersiz seçim yazılır; para okunmaz.",
        "token": "9",
        "status": "reject",
        "vars": {
          "kasa": 100,
          "islem": 1
        },
        "output": [
          "Eklendi",
          "Geçersiz tutar",
          "Kasa: 100",
          "Geçersiz seçim"
        ]
      },
      {
        "caption": "Seçim 1, tutar 50. İkinci başarılı ekleme: kasa 150, işlem 2.",
        "token": "1 → 50",
        "status": "accept",
        "vars": {
          "kasa": 150,
          "islem": 2
        },
        "output": [
          "Eklendi",
          "Geçersiz tutar",
          "Kasa: 100",
          "Geçersiz seçim",
          "Eklendi"
        ]
      },
      {
        "caption": "Seçim 0. İki satırlık kapanış raporu yazılır: Kasa: 150 ve İşlem: 2. Program burada biter.",
        "token": "0",
        "status": "complete",
        "vars": {
          "kasa": 150,
          "islem": 2
        },
        "output": [
          "Eklendi",
          "Geçersiz tutar",
          "Kasa: 100",
          "Geçersiz seçim",
          "Eklendi",
          "Kasa: 150",
          "İşlem: 2"
        ]
      }
    ],
    "understand": [
      "Kullanıcı önce bir seçim yazar: 1 para eklemek, 2 kasaya bakmak, 0 çıkmak demek. Yalnızca 1 seçilirse sonraki satır bir tutardır.",
      "Kasa 0’dan başlar. Geçerli para eklenince kasayı artır ve başarılı ekleme sayısını 1 artır. Kasaya bakmak veya hatalı giriş yapmak bu sayıyı artırmaz.",
      "Para eklenince Eklendi; tutar hatalıysa Geçersiz tutar yaz. 2’de Kasa: X yaz. 0’da Kasa: X ve İşlem: N yazıp dur. Tanımsız seçimde Geçersiz seçim yaz."
    ],
    "walkthrough": [
      "1 ardından 100: 1 seçimdir, 100 tutardır. 100 kasaya eklenir. Kasa 100, başarılı ekleme sayısı 1 olur. Eklendi yazılır.",
      "1 ardından abc: Tutar hatalı. Geçersiz tutar yazılır; kasa 100 ve ekleme sayısı 1 kalır. Sonraki giriş artık yeni bir seçimdir.",
      "2: Kasa: 100 yazılır. 9: Geçersiz seçim yazılır. Bu iki seçim için tutar okunmaz.",
      "1 ardından 50: Kasa 150, başarılı ekleme sayısı 2 olur. 0: Kasa: 150 ve İşlem: 2 yazılır; program biter."
    ],
    "lineHelp": {},
    "words": []
  },
  {
    "id": "lift",
    "title": "Asansörün yükünü koru",
    "theme": "amber",
    "kind": "KAPASİTE KONTROLÜ",
    "intro": "Asansöre gruplar sırayla geliyor. Bir grubu bölmeden ya tamamen alacaksın ya da bekleteceksin.",
    "goal": "Önce asansörün kaç kişi alabildiğini oku. Sonra gelen gruplardaki kişi sayılarını tek tek oku. Grup mevcut yolcularla birlikte kapasiteyi aşmıyorsa tamamını al ve Alındı yaz. Aşıyorsa Bekletildi yaz; doluluk değişmesin. Grup yerine 0 girilince Doluluk: X yazıp bitir.",
    "rules": [
      "Kapasite ve grup büyüklükleri 1–20 arasında tam sayılardır. Yalnızca 0 çıkış işaretidir; sayı olmayan giriş gelmez.",
      "Asansör dolsa bile 0 gelene kadar okumaya devam et; sığmayan her grup bekletilir.",
      "Kişiler inmiyor. Her kabul edilen grup mevcut doluluğa eklenir."
    ],
    "input": [
      "5",
      "2",
      "4",
      "3",
      "0"
    ],
    "output": [
      "Alındı",
      "Bekletildi",
      "Alındı",
      "Doluluk: 5"
    ],
    "concept": "Bir grubu kabul etmeden önce yeni doluluğu hesapla.",
    "hint": "Önce doluluk + grup değerine bak. Bu değer kapasiteyi aşmıyorsa doluluğu artır.",
    "reference": "int kapasite = Convert.ToInt32(Console.ReadLine());\nint doluluk = 0;\nwhile (true)\n{\n    int grup = Convert.ToInt32(Console.ReadLine());\n    if (grup == 0) break;\n    if (doluluk + grup <= kapasite)\n    {\n        doluluk += grup;\n        Console.WriteLine(\"Alındı\");\n    }\n    else Console.WriteLine(\"Bekletildi\");\n}\nConsole.WriteLine($\"Doluluk: {doluluk}\");",
    "understand": [
      "İlk sayı kapasite: örnekte 5 kişi. Sonrakiler gelen gruplar: 2, 4, 3. Son 0, artık grup gelmediğini söyler.",
      "Her grubu mevcut yolcuların üzerine ekleyince kaç kişi olacağını düşün. Sığıyorsa al; sığmıyorsa mevcut yolcuları değiştirme.",
      "Her grupta Alındı veya Bekletildi yaz. 0 gelince yalnızca son doluluğu yaz."
    ],
    "walkthrough": [
      "Kapasite 5. İlk grup 2: 0 + 2 = 2, sığar. Alındı yaz; doluluk 2.",
      "Grup 4: 2 + 4 = 6, kapasiteyi aşar. Bekletildi yaz; doluluk hâlâ 2.",
      "Grup 3: 2 + 3 = 5, tam sığar. Alındı yaz. 0 geldiğinde Doluluk: 5 yaz ve dur."
    ],
    "lineHelp": {
      "1": "İlk giriş kapasitedir: asansöre en fazla kaç kişi alınabilir?",
      "2": "Henüz yolcu yok. doluluk 0’dan başlar.",
      "3": "Kaç grup geleceğini bilmiyoruz. 0 gelene kadar tekrar tekrar okuyacağız.",
      "5": "Sıradaki grubun kişi sayısını kullanıcıdan al.",
      "6": "Grup 0 ise bu bir yolcu grubu değil, çıkış işaretidir. Döngüyü bitir.",
      "7": "Grubu daha eklemeden doluluk + grup hesabını yap. Sonuç kapasiteden küçük veya ona eşitse tüm grup sığar.",
      "9": "Sığan grubu mevcut doluluğa ekle. doluluk += grup, doluluk = doluluk + grup demek.",
      "10": "Grup kabul edildiğini ekrana Alındı yazarak bildir.",
      "12": "Grup sığmadıysa yalnızca Bekletildi yaz. doluluk değişkenini artırma.",
      "14": "0 ile döngü bittikten sonra içeride kaç yolcu kaldığını yaz."
    },
    "words": [
      [
        "<= kapasite",
        "Eşitlik de kabul edilir. Kapasite 5 ve yeni doluluk 5 ise grup tam sığar."
      ],
      [
        "Önce kontrol, sonra ekleme",
        "Grubu önce ekleyip sonra sığmadığını fark etmek yerine, olası yeni toplamı karşılaştır."
      ]
    ],
    "frames": [
      {
        "line": 2,
        "caption": "Kapasite 5 kişi. Henüz kimse binmedi; doluluk 0.",
        "vars": {
          "kapasite": 5,
          "doluluk": 0
        },
        "output": [],
        "visual": {
          "max": 5,
          "load": 0,
          "group": 0
        },
        "status": "ready",
        "token": ""
      },
      {
        "line": 7,
        "caption": "Önce kontrol: 0 + 2 = 2. Kapasite 5.",
        "vars": {
          "kapasite": 5,
          "doluluk": 0,
          "grup": 2
        },
        "output": [],
        "visual": {
          "max": 5,
          "load": 0,
          "group": 2
        },
        "status": "check",
        "token": "2"
      },
      {
        "line": 10,
        "caption": "Grup bindi. İçeride artık 2 kişi var.",
        "vars": {
          "kapasite": 5,
          "doluluk": 2,
          "grup": 2
        },
        "output": [
          "Alındı"
        ],
        "visual": {
          "max": 5,
          "load": 2,
          "group": 2
        },
        "status": "accept",
        "token": "2"
      },
      {
        "line": 7,
        "caption": "Önce kontrol: 2 + 4 = 6. Kapasite 5.",
        "vars": {
          "kapasite": 5,
          "doluluk": 2,
          "grup": 4
        },
        "output": [
          "Alındı"
        ],
        "visual": {
          "max": 5,
          "load": 2,
          "group": 4
        },
        "status": "check",
        "token": "4"
      },
      {
        "line": 12,
        "caption": "Grup sığmadı, dışarıda bekliyor. Doluluk hâlâ 2.",
        "vars": {
          "kapasite": 5,
          "doluluk": 2,
          "grup": 4
        },
        "output": [
          "Alındı",
          "Bekletildi"
        ],
        "visual": {
          "max": 5,
          "load": 2,
          "group": 4
        },
        "status": "reject",
        "token": "4"
      },
      {
        "line": 7,
        "caption": "Önce kontrol: 2 + 3 = 5. Kapasite 5.",
        "vars": {
          "kapasite": 5,
          "doluluk": 2,
          "grup": 3
        },
        "output": [
          "Alındı",
          "Bekletildi"
        ],
        "visual": {
          "max": 5,
          "load": 2,
          "group": 3
        },
        "status": "check",
        "token": "3"
      },
      {
        "line": 10,
        "caption": "Grup bindi. İçeride artık 5 kişi var.",
        "vars": {
          "kapasite": 5,
          "doluluk": 5,
          "grup": 3
        },
        "output": [
          "Alındı",
          "Bekletildi",
          "Alındı"
        ],
        "visual": {
          "max": 5,
          "load": 5,
          "group": 3
        },
        "status": "accept",
        "token": "3"
      },
      {
        "line": 14,
        "caption": "0 geldi. Yeni grup alma; son doluluk 5 kişiyi yaz.",
        "vars": {
          "kapasite": 5,
          "doluluk": 5
        },
        "output": [
          "Alındı",
          "Bekletildi",
          "Alındı",
          "Doluluk: 5"
        ],
        "visual": {
          "max": 5,
          "load": 5,
          "group": 0
        },
        "status": "complete",
        "token": "0"
      }
    ]
  },
  {
    "id": "antenna",
    "title": "En güçlü sinyali bul",
    "theme": "cyan",
    "kind": "ANTEN İSTASYONU",
    "intro": "Anten farklı noktalardan ölçüm alıyor. En yüksek gücü ve bu gücün ilk kaçıncı ölçümde görüldüğünü bulacaksın.",
    "goal": "Önce kaç ölçüm yapılacağını oku. Sonra o kadar güç değeri al. En büyük gücü ve bu değerin ilk görüldüğü ölçüm sırasını yaz. Ölçümler 1’den başlayarak numaralanır. Aynı en büyük değer tekrar gelirse ilk sırayı koru.",
    "rules": [
      "Ölçüm adedi 1–6, güç değerleri 0–100 arasında tam sayıdır. Bütün girişler geçerlidir.",
      "Önce Güç: X, sonra Sıra: N yaz. Her ölçüm için ayrıca çıktı üretme.",
      "Aynı en yüksek güç tekrarlandığında sıra değişmez."
    ],
    "input": [
      "4",
      "20",
      "70",
      "70",
      "40"
    ],
    "output": [
      "Güç: 70",
      "Sıra: 2"
    ],
    "concept": "Şimdiye kadar gördüğün en büyük değeri hatırla.",
    "hint": "Yeni güç eskisinden büyükse hem en büyük gücü hem o anki sırayı değiştir. Eşitse değiştirme.",
    "reference": "int adet = Convert.ToInt32(Console.ReadLine());\nint enGuclu = -1, sira = 0;\nfor (int i = 1; i <= adet; i++)\n{\n    int guc = Convert.ToInt32(Console.ReadLine());\n    if (guc > enGuclu)\n    {\n        enGuclu = guc;\n        sira = i;\n    }\n}\nConsole.WriteLine($\"Güç: {enGuclu}\");\nConsole.WriteLine($\"Sıra: {sira}\");",
    "understand": [
      "İlk 4, dört ölçüm yapılacağını söyler. Sonraki güçler: 20, 70, 70, 40.",
      "Her yeni değeri şu ana kadarki en büyükle karşılaştır. Daha büyükse yeni rekoru ve sırasını sakla.",
      "En yüksek güç 70. İlk kez 2. ölçümde geldi. Güç: 70 ve Sıra: 2 yaz."
    ],
    "walkthrough": [
      "1. ölçüm 20: henüz daha büyük değer yok; en güçlü 20, sıra 1.",
      "2. ölçüm 70: 20’den büyük; en güçlü 70, sıra 2.",
      "3. ölçüm 70: eşit, ilk sırayı koru. 4. ölçüm 40: daha küçük; hiçbirini değiştirme."
    ],
    "lineHelp": {
      "1": "Kullanıcı kaç ölçüm yapacağını söylüyor. Bu değer güç değil, tekrar sayısıdır.",
      "2": "Güçler 0 veya daha büyük olduğu için enGuclu değerini -1’den başlatıyoruz. Böylece ilk ölçüm mutlaka saklanır. sira henüz 0.",
      "3": "i, şu an kaçıncı ölçümde olduğumuzdur. 1’den adet değerine kadar ilerler.",
      "5": "Sıradaki güç değerini oku.",
      "6": "Yeni güç eski rekordan BÜYÜK mü? Eşitlikte girmiyoruz; ilk görülen sırayı böyle koruruz.",
      "8": "Daha büyük ölçüm bulundu. Rekor gücü yeni değerle değiştir.",
      "9": "Bu rekorun hangi ölçümde geldiğini de sakla. i o anki ölçüm sırasıdır.",
      "12": "Bütün ölçümler bitti. Hatırladığımız en büyük gücü yaz.",
      "13": "En büyük gücün ilk görüldüğü sırayı yaz."
    },
    "words": [
      [
        "Neden >= değil >?",
        ">= kullanırsan eşit güç tekrar geldiğinde sırayı da değiştirirsin. Bu soru ilk görüldüğü sırayı istiyor."
      ],
      [
        "En büyük değeri hatırlamak",
        "Tüm ölçümleri bir dizide saklaman gerekmiyor. Şu ana kadarki rekoru ve sırasını iki değişkende tutabilirsin."
      ]
    ],
    "frames": [
      {
        "line": 2,
        "caption": "Dört ölçüm alacağız. Henüz bir rekor yok.",
        "vars": {
          "enGuclu": -1,
          "sira": 0
        },
        "output": [],
        "visual": {
          "values": [],
          "best": -1,
          "bestAt": 0
        },
        "status": "ready",
        "token": ""
      },
      {
        "line": 9,
        "caption": "1. ölçüm 20. Yeni en büyük güç; sırayı da 1 yap.",
        "vars": {
          "guc": 20,
          "enGuclu": 20,
          "sira": 1
        },
        "output": [],
        "visual": {
          "values": [
            20
          ],
          "best": 20,
          "bestAt": 1
        },
        "status": "accept",
        "token": "20"
      },
      {
        "line": 9,
        "caption": "2. ölçüm 70. Yeni en büyük güç; sırayı da 2 yap.",
        "vars": {
          "guc": 70,
          "enGuclu": 70,
          "sira": 2
        },
        "output": [],
        "visual": {
          "values": [
            20,
            70
          ],
          "best": 70,
          "bestAt": 2
        },
        "status": "accept",
        "token": "70"
      },
      {
        "line": 6,
        "caption": "3. ölçüm 70. Rekoru geçmedi. Güç 70, ilk sıra 2 olarak kalsın.",
        "vars": {
          "guc": 70,
          "enGuclu": 70,
          "sira": 2
        },
        "output": [],
        "visual": {
          "values": [
            20,
            70,
            70
          ],
          "best": 70,
          "bestAt": 2
        },
        "status": "hold",
        "token": "70"
      },
      {
        "line": 6,
        "caption": "4. ölçüm 40. Rekoru geçmedi. Güç 70, ilk sıra 2 olarak kalsın.",
        "vars": {
          "guc": 40,
          "enGuclu": 70,
          "sira": 2
        },
        "output": [],
        "visual": {
          "values": [
            20,
            70,
            70,
            40
          ],
          "best": 70,
          "bestAt": 2
        },
        "status": "hold",
        "token": "40"
      },
      {
        "line": 13,
        "caption": "Sonuç: en yüksek güç 70, ilk görüldüğü ölçüm 2.",
        "vars": {
          "enGuclu": 70,
          "sira": 2
        },
        "output": [
          "Güç: 70",
          "Sıra: 2"
        ],
        "visual": {
          "values": [
            20,
            70,
            70,
            40
          ],
          "best": 70,
          "bestAt": 2
        },
        "status": "complete",
        "token": ""
      }
    ]
  },
  {
    "id": "rooms",
    "title": "Katları tek tek tara",
    "theme": "violet",
    "kind": "BİNA TARAMASI",
    "intro": "Binayı kat kat geziyorsun. Her katta odaları sırayla kontrol edeceksin; bir kat kapalıysa o kattaki hiçbir odaya girmeyeceksin.",
    "goal": "Kullanıcıdan sırasıyla kat sayısını, her kattaki oda sayısını ve kapalı kat numarasını oku. Katları 1’den başlayarak gez. Açık katlardaki her oda için Kat K / Oda O yaz. Kapalı katın tamamını atla. En sonunda Taranan: N yaz; N gerçekten kontrol edilen oda sayısıdır.",
    "rules": [
      "Kat ve oda sayısı 1–4 arasında tam sayıdır. Her katta aynı sayıda oda var.",
      "Kapalı kat 0 ise bütün katlar açıktır. Diğer durumda var olan bir kat numarası verilir.",
      "Önce küçük kat, o kat içinde küçük oda gelir. Örneğin Kat 1 / Oda 1, sonra Kat 1 / Oda 2."
    ],
    "input": [
      "2",
      "3",
      "1"
    ],
    "output": [
      "Kat 2 / Oda 1",
      "Kat 2 / Oda 2",
      "Kat 2 / Oda 3",
      "Taranan: 3"
    ],
    "concept": "Dış döngü katı, iç döngü o katın odalarını değiştirir.",
    "hint": "Bir kat kapalıysa oda döngüsüne hiç girme. Açık kat için oda sayacını yeniden 1’den başlat.",
    "reference": "int katSayisi = Convert.ToInt32(Console.ReadLine());\nint odaSayisi = Convert.ToInt32(Console.ReadLine());\nint kapaliKat = Convert.ToInt32(Console.ReadLine());\nint taranan = 0;\nfor (int kat = 1; kat <= katSayisi; kat++)\n{\n    if (kat == kapaliKat) continue;\n    for (int oda = 1; oda <= odaSayisi; oda++)\n    {\n        Console.WriteLine($\"Kat {kat} / Oda {oda}\");\n        taranan++;\n    }\n}\nConsole.WriteLine($\"Taranan: {taranan}\");",
    "understand": [
      "2 kat, her katta 3 oda var. Kapalı kat numarası 1. Bu üç bilgi ayrı satırlarda gelir.",
      "1. katı tamamen atla. 2. katta 1, 2 ve 3 numaralı odaları sırayla kontrol et.",
      "Yalnızca açık kattaki odaları yaz. Örnekte 3 oda kontrol edildiği için en son Taranan: 3 yaz."
    ],
    "walkthrough": [
      "Kat sayısı 2, oda sayısı 3, kapalı kat 1. İlk üç girdi görev ayarlarıdır; oda numaraları değildir.",
      "1. kat kapalı: odalarının hiçbiri için çıktı yazma.",
      "2. kat açık: Oda 1, sonra Oda 2, sonra Oda 3. Her kontrolde taranan sayısı 1 artar; sonunda 3 olur."
    ],
    "lineHelp": {
      "1": "Kaç kat olduğunu oku.",
      "2": "Her katta kaç oda olduğunu oku.",
      "3": "Hangi katın kapalı olduğunu oku. 0 ise hiçbir kat kapalı değil.",
      "4": "Henüz oda taranmadı. Sayaç 0.",
      "5": "Dış döngü katları sırayla seçer: 1, 2, … Kat bitmeden sonraki kata geçilmez.",
      "7": "Seçilen kat kapalıysa continue dış döngünün sonraki katına geçer. Bu kattaki oda döngüsüne hiç girilmez.",
      "8": "Açık katın odalarını sırayla gez. Yeni kata geldiğimizde oda yeniden 1’den başlar.",
      "10": "Şu anki kat ve oda numarasını birlikte yaz. Kat sabitken oda numarası değişir.",
      "11": "Gerçekten bir oda kontrol ettik; taranan sayısını 1 artır.",
      "14": "Bütün açık katların odaları bitti. Kaç oda kontrol edildiğini yaz."
    },
    "words": [
      [
        "İç içe döngü",
        "Örneğin 2. katta oda 1, 2 ve 3 tamamlanır; sonra dış döngü sonraki kata geçer. İç döngü her yeni katta baştan başlar."
      ],
      [
        "continue hangi döngüye etki eder?",
        "Bu örnekte continue oda döngüsünün dışında, kat döngüsünün içinde. Bu yüzden tek bir odayı değil, bütün katı atlar."
      ]
    ],
    "frames": [
      {
        "line": 4,
        "caption": "2 kat var, her katta 3 oda. 1. kat kapalı; taranan oda henüz 0.",
        "vars": {
          "kat": 0,
          "oda": 0,
          "taranan": 0
        },
        "output": [],
        "visual": {
          "floor": 0,
          "room": 0,
          "scanned": 0
        },
        "status": "ready",
        "token": ""
      },
      {
        "line": 7,
        "caption": "1. kat kapalı. Oda döngüsüne girme; doğrudan 2. kata geç.",
        "vars": {
          "kat": 1,
          "oda": 0,
          "taranan": 0
        },
        "output": [],
        "visual": {
          "floor": 1,
          "room": 0,
          "scanned": 0
        },
        "status": "reject",
        "token": ""
      },
      {
        "line": 11,
        "caption": "2. kat açık. 1. odayı kontrol et; şimdi 1 oda tarandı.",
        "vars": {
          "kat": 2,
          "oda": 1,
          "taranan": 1
        },
        "output": [
          "Kat 2 / Oda 1"
        ],
        "visual": {
          "floor": 2,
          "room": 1,
          "scanned": 1
        },
        "status": "accept",
        "token": ""
      },
      {
        "line": 11,
        "caption": "2. kat açık. 2. odayı kontrol et; şimdi 2 oda tarandı.",
        "vars": {
          "kat": 2,
          "oda": 2,
          "taranan": 2
        },
        "output": [
          "Kat 2 / Oda 1",
          "Kat 2 / Oda 2"
        ],
        "visual": {
          "floor": 2,
          "room": 2,
          "scanned": 2
        },
        "status": "accept",
        "token": ""
      },
      {
        "line": 11,
        "caption": "2. kat açık. 3. odayı kontrol et; şimdi 3 oda tarandı.",
        "vars": {
          "kat": 2,
          "oda": 3,
          "taranan": 3
        },
        "output": [
          "Kat 2 / Oda 1",
          "Kat 2 / Oda 2",
          "Kat 2 / Oda 3"
        ],
        "visual": {
          "floor": 2,
          "room": 3,
          "scanned": 3
        },
        "status": "accept",
        "token": ""
      },
      {
        "line": 14,
        "caption": "Açık katın bütün odaları bitti. Kapalı kattaki 3 oda sayılmadı; sonuç 3.",
        "vars": {
          "kat": 2,
          "oda": 3,
          "taranan": 3
        },
        "output": [
          "Kat 2 / Oda 1",
          "Kat 2 / Oda 2",
          "Kat 2 / Oda 3",
          "Taranan: 3"
        ],
        "visual": {
          "floor": 2,
          "room": 3,
          "scanned": 3
        },
        "status": "complete",
        "token": ""
      }
    ]
  },
  {
    "id": "tickets",
    "title": "Bilet makinesini çalıştır",
    "theme": "amber",
    "kind": "BİLET GİŞESİ",
    "intro": "Gişeye farklı bilet istekleri geliyor. Her seçimden fiyatı bulacak, yalnızca geçerli biletleri hesaba ekleyeceksin.",
    "goal": "Önce kaç bilet isteği geleceğini oku. Sonra o kadar seçim al. 1 için fiyat 10, 2 için 15, 3 için 20 TL. Diğer seçimlerde Geçersiz yaz ve o isteği hesaba katma. Bütün isteklerden sonra Toplam: X ve Bilet: N yaz.",
    "rules": [
      "İstek adedi 1–5 arasında; seçimler tam sayıdır. Sayı olmayan giriş gelmez.",
      "Hatalı seçim de bir istek sayılır. Yerine tekrar seçim isteme.",
      "Geçerli seçim için tek başına çıktı yazma; fiyatı toplama, bileti adede ekle."
    ],
    "input": [
      "4",
      "1",
      "9",
      "3",
      "2"
    ],
    "output": [
      "Geçersiz",
      "Toplam: 45",
      "Bilet: 3"
    ],
    "concept": "Seçimden fiyatı bul, sonra toplam ve adedi güncelle.",
    "hint": "Her isteğin başında fiyatı 0 yap. Geçerli seçim bir fiyat versin; fiyat hâlâ 0 ise toplamı ve bilet sayısını artırma.",
    "reference": "int istek = Convert.ToInt32(Console.ReadLine());\nint toplam = 0, bilet = 0;\nfor (int i = 0; i < istek; i++)\n{\n    int secim = Convert.ToInt32(Console.ReadLine());\n    int fiyat = 0;\n    switch (secim)\n    {\n        case 1: fiyat = 10; break;\n        case 2: fiyat = 15; break;\n        case 3: fiyat = 20; break;\n        default: Console.WriteLine(\"Geçersiz\"); break;\n    }\n    if (fiyat > 0)\n    {\n        toplam += fiyat;\n        bilet++;\n    }\n}\nConsole.WriteLine($\"Toplam: {toplam}\");\nConsole.WriteLine($\"Bilet: {bilet}\");",
    "understand": [
      "İlk 4, dört istek geleceğini söyler. Seçimler 1, 9, 3 ve 2.",
      "1 → 10 TL, 2 → 15 TL, 3 → 20 TL. 9 gibi başka bir seçim bilet üretmez.",
      "9 için Geçersiz yaz. Üç geçerli biletin toplamı 10 + 20 + 15 = 45. Son iki satır Toplam: 45 ve Bilet: 3."
    ],
    "walkthrough": [
      "Seçim 1: 10 TL’lik bilet. Toplam 10, bilet 1.",
      "Seçim 9: Geçersiz yaz. Toplam 10 ve bilet 1 olarak kalır; bu istek tüketildi.",
      "Seçim 3: toplam 30, bilet 2. Seçim 2: toplam 45, bilet 3. Dört istek bitti; sonucu yaz."
    ],
    "lineHelp": {
      "1": "Kaç istek okunacağını belirle. Hatalı seçimler de bu sayıya dahildir.",
      "2": "Gelir toplamı ve üretilen bilet sayısı henüz 0.",
      "3": "Tam olarak istek kadar seçim al. i 0’dan başladığı için i < istek kullanılıyor.",
      "5": "Bu isteğin bilet seçimini oku.",
      "6": "Bu istek için henüz geçerli bir fiyat yok. Her turda 0’dan başlat; önceki biletin fiyatını kullanma.",
      "7": "Seçim numarasına göre fiyat belirle.",
      "9": "Seçim 1: fiyatı 10 yap. break switch bölümünü bitirir; aşağıdaki fiyat kontrolüne devam edilir.",
      "10": "Seçim 2: fiyatı 15 yap.",
      "11": "Seçim 3: fiyatı 20 yap.",
      "12": "Başka seçim varsa Geçersiz yaz. fiyat 0 kalır; bu istek toplamı artırmaz.",
      "14": "Gerçek bir fiyat bulundu mu? Yalnızca geçerli bileti hesaba kat.",
      "16": "Bu biletin fiyatını eski toplama ekle.",
      "17": "Bir bilet daha üretildi. bilet sayısını 1 artır.",
      "20": "Bütün istekler bitti. Geçerli biletlerden gelen toplam tutarı yaz.",
      "21": "Kaç geçerli bilet üretildiğini yaz."
    },
    "words": [
      [
        "İstek sayısı ve bilet sayısı",
        "4 istekten biri hatalıysa yine 4 giriş okursun ama 3 bilet üretirsin. Bu iki sayıyı karıştırma."
      ],
      [
        "Her turda fiyat = 0",
        "Önceki seçim 20 TL olsa bile yeni istek ayrı bir işlemdir. Hatalı seçim eski fiyatla bilet üretmemeli."
      ]
    ],
    "frames": [
      {
        "line": 2,
        "caption": "Dört istek bekleniyor. Toplam 0 TL, üretilen bilet 0.",
        "vars": {
          "toplam": 0,
          "bilet": 0
        },
        "output": [],
        "visual": {
          "choice": 0,
          "total": 0,
          "count": 0,
          "price": 0
        },
        "status": "ready",
        "token": ""
      },
      {
        "line": 17,
        "caption": "1 seçildi. 10 TL’lik bilet üret. Toplam 10 TL, bilet sayısı 1.",
        "vars": {
          "secim": 1,
          "fiyat": 10,
          "toplam": 10,
          "bilet": 1
        },
        "output": [],
        "visual": {
          "choice": 1,
          "total": 10,
          "count": 1,
          "price": 10
        },
        "status": "accept",
        "token": "1"
      },
      {
        "line": 12,
        "caption": "9 seçildi. Böyle bir bilet yok. Geçersiz yaz; toplam ve adet değişmesin.",
        "vars": {
          "secim": 9,
          "fiyat": 0,
          "toplam": 10,
          "bilet": 1
        },
        "output": [
          "Geçersiz"
        ],
        "visual": {
          "choice": 9,
          "total": 10,
          "count": 1,
          "price": 0
        },
        "status": "reject",
        "token": "9"
      },
      {
        "line": 17,
        "caption": "3 seçildi. 20 TL’lik bilet üret. Toplam 30 TL, bilet sayısı 2.",
        "vars": {
          "secim": 3,
          "fiyat": 20,
          "toplam": 30,
          "bilet": 2
        },
        "output": [
          "Geçersiz"
        ],
        "visual": {
          "choice": 3,
          "total": 30,
          "count": 2,
          "price": 20
        },
        "status": "accept",
        "token": "3"
      },
      {
        "line": 17,
        "caption": "2 seçildi. 15 TL’lik bilet üret. Toplam 45 TL, bilet sayısı 3.",
        "vars": {
          "secim": 2,
          "fiyat": 15,
          "toplam": 45,
          "bilet": 3
        },
        "output": [
          "Geçersiz"
        ],
        "visual": {
          "choice": 2,
          "total": 45,
          "count": 3,
          "price": 15
        },
        "status": "accept",
        "token": "2"
      },
      {
        "line": 21,
        "caption": "Dört istek işlendi, üç bilet üretildi. Toplam 45 TL.",
        "vars": {
          "toplam": 45,
          "bilet": 3
        },
        "output": [
          "Geçersiz",
          "Toplam: 45",
          "Bilet: 3"
        ],
        "visual": {
          "choice": 0,
          "total": 45,
          "count": 3,
          "price": 0
        },
        "status": "complete",
        "token": ""
      }
    ]
  },
  {
    "id": "delivery",
    "title": "Üç teslimatı tamamla",
    "theme": "final",
    "kind": "SON GÖREV · TESLİMAT AĞI",
    "independent": true,
    "intro": "Üç yere birer paket götürülecek: 1 Arşiv, 2 Liman, 3 Depo. Aynı yere ikinci kez gitmek yeni teslimat sayılmaz.",
    "goal": "Kullanıcıdan yer seçimleri al. 1, 2 veya 3 ilk kez seçiliyorsa o yere teslim et ve Teslim edildi: Yer yaz. Aynı yer tekrar seçilirse Zaten teslim edildi yaz. Diğer tam sayılarda Geçersiz seçim yaz. Üç farklı yere de teslim yapılınca Tamamlandı yaz ve hemen bitir.",
    "rules": [
      "Girişlerin hepsi tam sayıdır. Harf veya ondalık sayı gelmez.",
      "Yer adlarını Arşiv, Liman ve Depo olarak yaz. Örnek çıktıdaki boşluk ve iki noktayı koru.",
      "Aynı yere ikinci teslimat yapılamaz; başarı sayısı artmaz.",
      "Üç farklı yere teslimden sonra yeni giriş okuma. Bitiş için ayrıca 0 bekleme."
    ],
    "input": [
      "1",
      "1",
      "9",
      "3",
      "2"
    ],
    "output": [
      "Teslim edildi: Arşiv",
      "Zaten teslim edildi",
      "Geçersiz seçim",
      "Teslim edildi: Depo",
      "Teslim edildi: Liman",
      "Tamamlandı"
    ],
    "concept": "Döngü, seçim ve daha önce yapılan işi hatırlama bir arada.",
    "hint": "",
    "understand": [
      "Kullanıcı yer numaralarını tek tek yazar. Örnekte sırasıyla 1, 1, 9, 3, 2.",
      "Her yere yalnızca bir kez teslim et. Daha önce teslim edilen yerleri hatırla. Yanlış seçim ve tekrarlar işi ilerletmez.",
      "İlk teslimlerde yer adını yaz. Tekrarda Zaten teslim edildi, hatalı seçimde Geçersiz seçim yaz. Üç yer tamamlanınca Tamamlandı yazıp dur."
    ],
    "walkthrough": [
      "1: Arşiv’e ilk teslim. Teslim edildi: Arşiv yaz; tamamlanan yer sayısı 1.",
      "Tekrar 1: Arşiv zaten tamam. Zaten teslim edildi yaz; sayı hâlâ 1. 9: geçersiz; sayı yine 1.",
      "3: Depo tamamlandı, sayı 2. 2: Liman da tamamlandı, sayı 3. Tamamlandı yaz ve dur."
    ],
    "lineHelp": {},
    "words": [],
    "frames": [
      {
        "caption": "Üç noktanın da teslimatı bekliyor. Henüz tamamlanan yer yok.",
        "vars": {
          "teslim": 0
        },
        "output": [],
        "visual": {
          "done": [],
          "choice": 0
        },
        "status": "ready",
        "token": ""
      },
      {
        "caption": "Arşiv için ilk teslimat yapıldı. Tamamlanan farklı yer sayısı 1.",
        "vars": {
          "teslim": 1
        },
        "output": [
          "Teslim edildi: Arşiv"
        ],
        "visual": {
          "done": [
            1
          ],
          "choice": 1
        },
        "status": "accept",
        "token": "1"
      },
      {
        "caption": "Arşiv zaten tamamlandı. Yeni teslimat sayılmaz; sayı 1 olarak kalır.",
        "vars": {
          "teslim": 1
        },
        "output": [
          "Teslim edildi: Arşiv",
          "Zaten teslim edildi"
        ],
        "visual": {
          "done": [
            1
          ],
          "choice": 1
        },
        "status": "reject",
        "token": "1"
      },
      {
        "caption": "9 numaralı yer yok. Hiçbir teslimat değişmez.",
        "vars": {
          "teslim": 1
        },
        "output": [
          "Teslim edildi: Arşiv",
          "Zaten teslim edildi",
          "Geçersiz seçim"
        ],
        "visual": {
          "done": [
            1
          ],
          "choice": 9
        },
        "status": "reject",
        "token": "9"
      },
      {
        "caption": "Depo için ilk teslimat yapıldı. Tamamlanan farklı yer sayısı 2.",
        "vars": {
          "teslim": 2
        },
        "output": [
          "Teslim edildi: Arşiv",
          "Zaten teslim edildi",
          "Geçersiz seçim",
          "Teslim edildi: Depo"
        ],
        "visual": {
          "done": [
            1,
            3
          ],
          "choice": 3
        },
        "status": "accept",
        "token": "3"
      },
      {
        "caption": "Liman için ilk teslimat yapıldı. Tamamlanan farklı yer sayısı 3.",
        "vars": {
          "teslim": 3
        },
        "output": [
          "Teslim edildi: Arşiv",
          "Zaten teslim edildi",
          "Geçersiz seçim",
          "Teslim edildi: Depo",
          "Teslim edildi: Liman"
        ],
        "visual": {
          "done": [
            1,
            3,
            2
          ],
          "choice": 2
        },
        "status": "accept",
        "token": "2"
      },
      {
        "caption": "Arşiv, Liman ve Depo tamamlandı. Tamamlandı yazılır; artık seçim okunmaz.",
        "vars": {
          "teslim": 3
        },
        "output": [
          "Teslim edildi: Arşiv",
          "Zaten teslim edildi",
          "Geçersiz seçim",
          "Teslim edildi: Depo",
          "Teslim edildi: Liman",
          "Tamamlandı"
        ],
        "visual": {
          "done": [
            1,
            2,
            3
          ],
          "choice": 0
        },
        "status": "complete",
        "token": ""
      }
    ]
  }
];
