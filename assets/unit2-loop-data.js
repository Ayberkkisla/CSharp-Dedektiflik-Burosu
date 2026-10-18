(function(g){'use strict';g.Case022Lessons=[
  {
    "title": "Aynı mesajı tekrar yaz",
    "kind": "for",
    "input": [
      "3"
    ],
    "expected": [
      "Delil bulundu",
      "Delil bulundu",
      "Delil bulundu"
    ],
    "inputs": [
      [
        "adet",
        "Kaç kez yazılacak?",
        "int"
      ]
    ],
    "problem": "Dedektif her bulduğu delil için ekrana “Delil bulundu” yazıyor. Aynı satırı tek tek kopyalamak yerine döngüyle tekrar yazdıracağız.",
    "request": "Kullanıcıdan tekrar sayısını al. for kullanarak “Delil bulundu” mesajını tam bu sayıda, her defasında yeni satıra yaz.",
    "note": "Tekrar sayısı 0–20 arasında. 0 girilirse ekrana hiçbir şey yazma. Mesajı örnekteki gibi, büyük D ile yaz.",
    "exampleMeaning": "3 girilirse mesaj üç satırda görünür. 1 girilirse yalnızca bir kez yazılır. Döngünün tur sayısını kullanıcının verdiği sayı belirler.",
    "steps": [
      "Önce adet bilgisini oku.",
      "Sayacı 0’dan başlat. Sayaç adetten küçük olduğu sürece mesajı yaz.",
      "Her tur sonunda sayacı 1 artır. Sayaç adede ulaşınca dur."
    ],
    "checks": [
      "Tekrar sayısını int olarak oku.",
      "Bu görevde for kullan. Mesajı döngünün içinde yaz."
    ],
    "start": "int adet = Convert.ToInt32(Console.ReadLine());\n\n",
    "example": "for (int i = 0; i < adet; i++)\n{\n    Console.WriteLine(\"Delil bulundu\");\n}",
    "id": 0,
    "lessonTitle": "Aynı mesajı tekrar yaz",
    "topic": "Ünite 2 · Döngüler",
    "explain": "3 girilirse mesaj üç satırda görünür. 1 girilirse yalnızca bir kez yazılır. Döngünün tur sayısını kullanıcının verdiği sayı belirler.",
    "hint": "Önce adet bilgisini oku.",
    "rules": [
      "Tekrar sayısını int olarak oku.",
      "Bu görevde for kullan. Mesajı döngünün içinde yaz."
    ],
    "lesson": "Önce adet bilgisini oku. Sayacı 0’dan başlat. Sayaç adetten küçük olduğu sürece mesajı yaz. Her tur sonunda sayacı 1 artır. Sayaç adede ulaşınca dur.",
    "readStep": "Bilgileri Console.ReadLine() ile sırayla al. Sayılar için Convert.ToInt32(...) kullan.",
    "readNote": "Bu görevde kullanıcıdan yalnızca başlangıç bilgisi alınır; döngü yeni girdi okumaz."
  },
  {
    "title": "Delilleri 1’den başlayarak numarala",
    "kind": "for",
    "input": [
      "4"
    ],
    "expected": [
      "1",
      "2",
      "3",
      "4"
    ],
    "inputs": [
      [
        "adet",
        "Numaralanacak delil sayısı",
        "int"
      ]
    ],
    "problem": "Yeni delillere 1, 2, 3 diye sıra numarası veriyorsun. Son delilin numarası, toplam delil sayısına eşit olacak.",
    "request": "Kullanıcıdan delil sayısını al. for ile 1’den bu sayıya kadar bütün tam sayıları, son sayı dahil, alt alta yaz.",
    "note": "Delil sayısı 0–20 arasında. 0 girilirse çıktı yok. Sayıların yanına açıklama ekleme.",
    "exampleMeaning": "4 delil varsa numaralar 1, 2, 3 ve 4 olur. Ekranda dört ayrı sayı satırı görünür.",
    "steps": [
      "Sayaç 1’den başlasın.",
      "Sayaç adetten küçük veya eşitken sayacı yaz.",
      "Yazdıktan sonra 1 artır."
    ],
    "checks": [
      "Girdiyi int olarak oku.",
      "for kullan; son sayıyı da yazdır."
    ],
    "start": "int adet = Convert.ToInt32(Console.ReadLine());\n\n",
    "example": "for (int i = 1; i <= adet; i++)\n{\n    Console.WriteLine(i);\n}",
    "id": 1,
    "lessonTitle": "Delilleri 1’den başlayarak numarala",
    "topic": "Ünite 2 · Döngüler",
    "explain": "4 delil varsa numaralar 1, 2, 3 ve 4 olur. Ekranda dört ayrı sayı satırı görünür.",
    "hint": "Sayaç 1’den başlasın.",
    "rules": [
      "Girdiyi int olarak oku.",
      "for kullan; son sayıyı da yazdır."
    ],
    "lesson": "Sayaç 1’den başlasın. Sayaç adetten küçük veya eşitken sayacı yaz. Yazdıktan sonra 1 artır.",
    "readStep": "Bilgileri Console.ReadLine() ile sırayla al. Sayılar için Convert.ToInt32(...) kullan.",
    "readNote": "Bu görevde kullanıcıdan yalnızca başlangıç bilgisi alınır; döngü yeni girdi okumaz."
  },
  {
    "title": "Geri sayımı başlat",
    "kind": "for",
    "input": [
      "3"
    ],
    "expected": [
      "3",
      "2",
      "1"
    ],
    "inputs": [
      [
        "baslangic",
        "Geri sayımın başladığı sayı",
        "int"
      ]
    ],
    "problem": "Operasyon başlamadan önce geriye doğru sayacağız. Örneğin 3’ten başlayan geri sayım 3, 2, 1 diye gider.",
    "request": "Kullanıcıdan başlangıç sayısını al. for ile bu sayıdan 1’e kadar geriye doğru sayıları alt alta yaz.",
    "note": "Başlangıç 1–20 arasında. 1’i yazdıktan sonra dur; 0 veya “Başla” yazma.",
    "exampleMeaning": "3 girilirse önce 3, sonra 2, sonra 1 yazılır. Her turda sayı büyümek yerine 1 azalır.",
    "steps": [
      "Sayacı kullanıcının verdiği sayıyla başlat.",
      "Sayaç en az 1 olduğu sürece onu yaz.",
      "Her turun sonunda sayacı 1 azalt."
    ],
    "checks": [
      "Başlangıcı int olarak oku.",
      "for kullan ve sayacı azalt."
    ],
    "start": "int baslangic = Convert.ToInt32(Console.ReadLine());\n\n",
    "example": "for (int i = baslangic; i >= 1; i--)\n{\n    Console.WriteLine(i);\n}",
    "id": 2,
    "lessonTitle": "Geri sayımı başlat",
    "topic": "Ünite 2 · Döngüler",
    "explain": "3 girilirse önce 3, sonra 2, sonra 1 yazılır. Her turda sayı büyümek yerine 1 azalır.",
    "hint": "Sayacı kullanıcının verdiği sayıyla başlat.",
    "rules": [
      "Başlangıcı int olarak oku.",
      "for kullan ve sayacı azalt."
    ],
    "lesson": "Sayacı kullanıcının verdiği sayıyla başlat. Sayaç en az 1 olduğu sürece onu yaz. Her turun sonunda sayacı 1 azalt.",
    "readStep": "Bilgileri Console.ReadLine() ile sırayla al. Sayılar için Convert.ToInt32(...) kullan.",
    "readNote": "Bu görevde kullanıcıdan yalnızca başlangıç bilgisi alınır; döngü yeni girdi okumaz."
  },
  {
    "title": "Bu raflar arasını dolaş",
    "kind": "for",
    "input": [
      "3",
      "6"
    ],
    "expected": [
      "3",
      "4",
      "5",
      "6"
    ],
    "inputs": [
      [
        "ilk",
        "İlk raf numarası",
        "int"
      ],
      [
        "son",
        "Son raf numarası",
        "int"
      ]
    ],
    "problem": "Arşivde yalnızca belirli rafları inceleyeceksin. Başlangıç ve bitiş rafları da incelemeye dahil.",
    "request": "Kullanıcıdan önce ilk, sonra son raf numarasını al. for ile ilk raftan son rafa kadar bütün raf numaralarını alt alta yaz.",
    "note": "İlk raf son raftan büyük gelmeyecek. Numaralar 1–30 arasında. İki sayı aynıysa o rafı bir kez yaz.",
    "exampleMeaning": "İlk raf 3, son raf 6 ise 3, 4, 5 ve 6 numaralı raflara bakarsın. 1’den başlamazsın; 6’yı da atlamazsın.",
    "steps": [
      "Başlangıç sayacını ilk raf numarası yap.",
      "Son raf dahil olacak şekilde koşulu kur.",
      "Her tur raf numarasını yazıp 1 artır."
    ],
    "checks": [
      "İki girdiyi sırayla int olarak oku.",
      "for kullan; iki sınır da dahil."
    ],
    "start": "int ilk = Convert.ToInt32(Console.ReadLine());\nint son = Convert.ToInt32(Console.ReadLine());\n\n",
    "example": "for (int raf = ilk; raf <= son; raf++)\n{\n    Console.WriteLine(raf);\n}",
    "id": 3,
    "lessonTitle": "Bu raflar arasını dolaş",
    "topic": "Ünite 2 · Döngüler",
    "explain": "İlk raf 3, son raf 6 ise 3, 4, 5 ve 6 numaralı raflara bakarsın. 1’den başlamazsın; 6’yı da atlamazsın.",
    "hint": "Başlangıç sayacını ilk raf numarası yap.",
    "rules": [
      "İki girdiyi sırayla int olarak oku.",
      "for kullan; iki sınır da dahil."
    ],
    "lesson": "Başlangıç sayacını ilk raf numarası yap. Son raf dahil olacak şekilde koşulu kur. Her tur raf numarasını yazıp 1 artır.",
    "readStep": "Bilgileri Console.ReadLine() ile sırayla al. Sayılar için Convert.ToInt32(...) kullan.",
    "readNote": "Bu görevde kullanıcıdan yalnızca başlangıç bilgisi alınır; döngü yeni girdi okumaz."
  },
  {
    "title": "Yalnızca çift numaralı dolaplar",
    "kind": "for",
    "input": [
      "7"
    ],
    "expected": [
      "2",
      "4",
      "6"
    ],
    "inputs": [
      [
        "son",
        "Son dolap numarası",
        "int"
      ]
    ],
    "problem": "Dolaplar 1’den başlayarak numaralanmış. Sen yalnızca çift numaralı dolapları, yani 2, 4, 6 diye gidenleri kontrol edeceksin.",
    "request": "Kullanıcıdan son dolap numarasını al. for kullanarak 2’den bu sınıra kadar olan çift sayıları alt alta yaz.",
    "note": "Son numara 0–30 arasında. Sınırı aşma: 7 için 8 yazılmaz. 0 veya 1 girilirse çıktı yok.",
    "exampleMeaning": "Son dolap 7 ise kontrol edilecek çift dolaplar 2, 4 ve 6’dır. 7 tek olduğu için yazılmaz.",
    "steps": [
      "Sayacı 2’den başlatabilirsin.",
      "Son dolabı aşmadığın sürece sayacı yaz.",
      "Sayacı 2 artırarak sıradaki çift dolaba geç."
    ],
    "checks": [
      "Son numarayı int olarak oku.",
      "for kullan. Yalnızca çift numaraları yaz."
    ],
    "start": "int son = Convert.ToInt32(Console.ReadLine());\n\n",
    "example": "for (int dolap = 2; dolap <= son; dolap += 2)\n{\n    Console.WriteLine(dolap);\n}",
    "id": 4,
    "lessonTitle": "Yalnızca çift numaralı dolaplar",
    "topic": "Ünite 2 · Döngüler",
    "explain": "Son dolap 7 ise kontrol edilecek çift dolaplar 2, 4 ve 6’dır. 7 tek olduğu için yazılmaz.",
    "hint": "Sayacı 2’den başlatabilirsin.",
    "rules": [
      "Son numarayı int olarak oku.",
      "for kullan. Yalnızca çift numaraları yaz."
    ],
    "lesson": "Sayacı 2’den başlatabilirsin. Son dolabı aşmadığın sürece sayacı yaz. Sayacı 2 artırarak sıradaki çift dolaba geç.",
    "readStep": "Bilgileri Console.ReadLine() ile sırayla al. Sayılar için Convert.ToInt32(...) kullan.",
    "readNote": "Bu görevde kullanıcıdan yalnızca başlangıç bilgisi alınır; döngü yeni girdi okumaz."
  },
  {
    "title": "Numaraları tek toplamda biriktir",
    "kind": "for",
    "input": [
      "4"
    ],
    "expected": [
      "10"
    ],
    "inputs": [
      [
        "son",
        "Toplanacak son sayı",
        "int"
      ]
    ],
    "problem": "Bu kez sayıları tek tek ekrana yazmayacağız. 1’den son sayıya kadar olan sayıların hepsini toplayıp yalnızca toplamı yazacağız.",
    "request": "Kullanıcıdan son sayıyı al. for ile 1’den bu sayıya kadar bütün sayıları, son sayı dahil, topla. Sonucu tek satırda yaz.",
    "note": "Son sayı 0–20 arasında. 0 için toplam 0’dır. Ara toplamları yazma.",
    "exampleMeaning": "4 girilirse 1 + 2 + 3 + 4 = 10 eder. Ekranda yalnızca 10 görünmeli; 1, 3, 6 gibi ara toplamlar görünmemeli.",
    "steps": [
      "Döngüden önce toplam değişkenini 0 yap.",
      "Her turdaki sayıyı toplamın üzerine ekle.",
      "Console.WriteLine komutunu döngü bittikten sonra kullan."
    ],
    "checks": [
      "Son sayıyı int olarak oku.",
      "for ile toplama yap; toplamı bir kez yaz."
    ],
    "start": "int son = Convert.ToInt32(Console.ReadLine());\n\n",
    "example": "int toplam = 0;\nfor (int i = 1; i <= son; i++)\n{\n    toplam += i;\n}\nConsole.WriteLine(toplam);",
    "id": 5,
    "lessonTitle": "Numaraları tek toplamda biriktir",
    "topic": "Ünite 2 · Döngüler",
    "explain": "4 girilirse 1 + 2 + 3 + 4 = 10 eder. Ekranda yalnızca 10 görünmeli; 1, 3, 6 gibi ara toplamlar görünmemeli.",
    "hint": "Döngüden önce toplam değişkenini 0 yap.",
    "rules": [
      "Son sayıyı int olarak oku.",
      "for ile toplama yap; toplamı bir kez yaz."
    ],
    "lesson": "Döngüden önce toplam değişkenini 0 yap. Her turdaki sayıyı toplamın üzerine ekle. Console.WriteLine komutunu döngü bittikten sonra kullan.",
    "readStep": "Bilgileri Console.ReadLine() ile sırayla al. Sayılar için Convert.ToInt32(...) kullan.",
    "readNote": "Bu görevde kullanıcıdan yalnızca başlangıç bilgisi alınır; döngü yeni girdi okumaz."
  },
  {
    "title": "Her raftaki delilleri topla",
    "kind": "for",
    "input": [
      "3",
      "4",
      "2",
      "5"
    ],
    "expected": [
      "11"
    ],
    "inputs": [
      [
        "rafSayisi",
        "Kaç raf var?",
        "int"
      ],
      [
        "delil",
        "1. raftaki delil sayısı",
        "int"
      ],
      [
        "delil",
        "2. raftaki delil sayısı",
        "int"
      ],
      [
        "delil",
        "3. raftaki delil sayısı",
        "int"
      ]
    ],
    "problem": "Rafların her birinde farklı sayıda delil var. Önce kaç raf olduğunu öğreneceksin. Sonra her raf için bir sayı okuyacaksın.",
    "request": "İlk girdiden raf sayısını al. Ardından for içinde her tur bir rafın delil sayısını kullanıcıdan oku. Bütün raflardaki delillerin toplamını bir kez yaz.",
    "note": "Raf sayısı 0–10, her raftaki delil sayısı 0–100 arasında. Raf sayısı 0 ise başka sayı okuma ve toplam 0 yaz. Örnekteki üç raf sayısı sabit değil.",
    "exampleMeaning": "Girdiler 3, 4, 2, 5 olsun. Baştaki 3 raf sayısıdır; toplama katılmaz. Sonraki sayılar üç rafın delilleridir: 4 + 2 + 5 = 11.",
    "steps": [
      "Önce raf sayısını, döngüden önce oku.",
      "Toplamı 0 yap. Her turda Console.ReadLine ile yeni bir raf sayısı okuyup toplama ekle.",
      "Raf sayısı kadar tur tamamlanınca toplamı yaz."
    ],
    "checks": [
      "Bütün girdiler int.",
      "for içinde yeni değer oku; raf sayısını toplama ekleme."
    ],
    "start": "int rafSayisi = Convert.ToInt32(Console.ReadLine());\n\n",
    "example": "int toplam = 0;\nfor (int i = 0; i < rafSayisi; i++)\n{\n    int delil = Convert.ToInt32(Console.ReadLine());\n    toplam += delil;\n}\nConsole.WriteLine(toplam);",
    "id": 6,
    "lessonTitle": "Her raftaki delilleri topla",
    "topic": "Ünite 2 · Döngüler",
    "explain": "Girdiler 3, 4, 2, 5 olsun. Baştaki 3 raf sayısıdır; toplama katılmaz. Sonraki sayılar üç rafın delilleridir: 4 + 2 + 5 = 11.",
    "hint": "Önce raf sayısını, döngüden önce oku.",
    "rules": [
      "Bütün girdiler int.",
      "for içinde yeni değer oku; raf sayısını toplama ekleme."
    ],
    "lesson": "Önce raf sayısını, döngüden önce oku. Toplamı 0 yap. Her turda Console.ReadLine ile yeni bir raf sayısı okuyup toplama ekle. Raf sayısı kadar tur tamamlanınca toplamı yaz.",
    "readStep": "Bilgileri Console.ReadLine() ile sırayla al. Sayılar için Convert.ToInt32(...) kullan.",
    "readNote": "Tekrarlanan yeni bilgileri döngünün içinde oku. Kaç girdi geleceği sorunun durma kuralına bağlı."
  },
  {
    "title": "Geçen öğrencileri say",
    "kind": "for",
    "input": [
      "4",
      "45",
      "50",
      "80",
      "20"
    ],
    "expected": [
      "2"
    ],
    "inputs": [
      [
        "kisiSayisi",
        "Kaç öğrenci var?",
        "int"
      ],
      [
        "puan",
        "1. öğrencinin puanı",
        "int"
      ],
      [
        "puan",
        "2. öğrencinin puanı",
        "int"
      ],
      [
        "puan",
        "3. öğrencinin puanı",
        "int"
      ],
      [
        "puan",
        "4. öğrencinin puanı",
        "int"
      ]
    ],
    "problem": "Notu en az 50 olan öğrenci geçiyor. Kaç öğrencinin geçtiğini bulacağız; puanları toplamayacağız.",
    "request": "Önce öğrenci sayısını al. Sonra for ile her öğrencinin puanını sırayla oku. if ile puanı en az 50 olanları say. En sonunda geçen öğrenci sayısını yaz.",
    "note": "Öğrenci sayısı 0–10, puanlar 0–100 arasında. Tam 50 alan geçer. İlk girdi öğrenci sayısıdır, bir öğrencinin notu değildir.",
    "exampleMeaning": "4 öğrenci var; puanları 45, 50, 80 ve 20. Yalnızca 50 ve 80 alanlar geçti. Çıktı 2 olur.",
    "steps": [
      "Geçen öğrenci sayısını başlangıçta 0 yap.",
      "Her tur bir puan oku. Puan >= 50 ise geçen sayısını 1 artır.",
      "Döngü bitince geçen sayısını tek satıra yaz."
    ],
    "checks": [
      "Girdileri int olarak oku.",
      "Bu görevde for ve if kullan."
    ],
    "start": "int kisiSayisi = Convert.ToInt32(Console.ReadLine());\n\n",
    "example": "int gecen = 0;\nfor (int i = 0; i < kisiSayisi; i++)\n{\n    int puan = Convert.ToInt32(Console.ReadLine());\n    if (puan >= 50) gecen++;\n}\nConsole.WriteLine(gecen);",
    "id": 7,
    "lessonTitle": "Geçen öğrencileri say",
    "topic": "Ünite 2 · Döngüler",
    "explain": "4 öğrenci var; puanları 45, 50, 80 ve 20. Yalnızca 50 ve 80 alanlar geçti. Çıktı 2 olur.",
    "hint": "Geçen öğrenci sayısını başlangıçta 0 yap.",
    "rules": [
      "Girdileri int olarak oku.",
      "Bu görevde for ve if kullan."
    ],
    "lesson": "Geçen öğrenci sayısını başlangıçta 0 yap. Her tur bir puan oku. Puan >= 50 ise geçen sayısını 1 artır. Döngü bitince geçen sayısını tek satıra yaz.",
    "readStep": "Bilgileri Console.ReadLine() ile sırayla al. Sayılar için Convert.ToInt32(...) kullan.",
    "readNote": "Tekrarlanan yeni bilgileri döngünün içinde oku. Kaç girdi geleceği sorunun durma kuralına bağlı."
  },
  {
    "title": "Bant boşalana kadar devam et",
    "kind": "while",
    "input": [
      "3"
    ],
    "expected": [
      "3",
      "2",
      "1"
    ],
    "inputs": [
      [
        "kalan",
        "Banttaki paket sayısı",
        "int"
      ]
    ],
    "problem": "Banttaki paketleri birer birer işliyorsun. Her paketten önce bantta kaç paket kaldığını yazacağız. Bant boşalınca duracağız.",
    "request": "Kullanıcıdan paket sayısını al. while ile kalan sayı 0’dan büyük olduğu sürece önce kalan sayıyı yaz, sonra 1 azalt.",
    "note": "Paket sayısı 0–20 arasında. Başlangıçta 0 paket varsa döngü hiç çalışmaz ve çıktı olmaz. Sonunda 0 yazma.",
    "exampleMeaning": "3 paket varsa önce 3 yazılır, bir paket işlenir. Sonra 2, ardından 1 yazılır. Son paket de işlenince kalan 0 olur ve while durur.",
    "steps": [
      "kalan değişkenini kullanıcıdan al.",
      "while (kalan > 0) koşuluyla çalış.",
      "Gövdenin içinde kalan sayıyı yaz ve 1 azalt; azaltmazsan döngü bitmez."
    ],
    "checks": [
      "Paket sayısını int olarak oku.",
      "Bu görevde while kullan."
    ],
    "start": "int kalan = Convert.ToInt32(Console.ReadLine());\n\n",
    "example": "while (kalan > 0)\n{\n    Console.WriteLine(kalan);\n    kalan--;\n}",
    "id": 8,
    "lessonTitle": "Bant boşalana kadar devam et",
    "topic": "Ünite 2 · Döngüler",
    "explain": "3 paket varsa önce 3 yazılır, bir paket işlenir. Sonra 2, ardından 1 yazılır. Son paket de işlenince kalan 0 olur ve while durur.",
    "hint": "kalan değişkenini kullanıcıdan al.",
    "rules": [
      "Paket sayısını int olarak oku.",
      "Bu görevde while kullan."
    ],
    "lesson": "kalan değişkenini kullanıcıdan al. while (kalan > 0) koşuluyla çalış. Gövdenin içinde kalan sayıyı yaz ve 1 azalt; azaltmazsan döngü bitmez.",
    "readStep": "Bilgileri Console.ReadLine() ile sırayla al. Sayılar için Convert.ToInt32(...) kullan.",
    "readNote": "Bu görevde kullanıcıdan yalnızca başlangıç bilgisi alınır; döngü yeni girdi okumaz."
  },
  {
    "title": "Pili doldurana kadar şarj et",
    "kind": "while",
    "input": [
      "60"
    ],
    "expected": [
      "70",
      "80",
      "90",
      "100"
    ],
    "inputs": [
      [
        "pil",
        "Başlangıç pil yüzdesi",
        "int"
      ]
    ],
    "problem": "Dedektifin cihazı her şarj turunda 10 puan doluyor. Pil 100 olunca şarj duracak. Her turun sonunda yeni pil seviyesini göstereceğiz.",
    "request": "Kullanıcıdan başlangıç pilini al. while ile pil 100’den küçükken önce 10 artır, sonra yeni seviyeyi yaz.",
    "note": "Girdi yalnızca 0, 10, 20, …, 100 değerlerinden biri olacak. Başlangıç değeri yazılmaz. Pil zaten 100 ise döngü çalışmaz, çıktı olmaz.",
    "exampleMeaning": "Pil 60 ise ilk turda 70 olur ve 70 yazılır. Sonra 80, 90, 100 yazılır. 100’e ulaşınca koşul yanlış olur ve durur.",
    "steps": [
      "Pili kullanıcıdan oku.",
      "Pil 100’den küçükken 10 ekle.",
      "Artırılmış değeri yaz; koşulu yeniden kontrol et."
    ],
    "checks": [
      "Pili int olarak oku.",
      "while kullan; önce artır, sonra yaz."
    ],
    "start": "int pil = Convert.ToInt32(Console.ReadLine());\n\n",
    "example": "while (pil < 100)\n{\n    pil += 10;\n    Console.WriteLine(pil);\n}",
    "id": 9,
    "lessonTitle": "Pili doldurana kadar şarj et",
    "topic": "Ünite 2 · Döngüler",
    "explain": "Pil 60 ise ilk turda 70 olur ve 70 yazılır. Sonra 80, 90, 100 yazılır. 100’e ulaşınca koşul yanlış olur ve durur.",
    "hint": "Pili kullanıcıdan oku.",
    "rules": [
      "Pili int olarak oku.",
      "while kullan; önce artır, sonra yaz."
    ],
    "lesson": "Pili kullanıcıdan oku. Pil 100’den küçükken 10 ekle. Artırılmış değeri yaz; koşulu yeniden kontrol et.",
    "readStep": "Bilgileri Console.ReadLine() ile sırayla al. Sayılar için Convert.ToInt32(...) kullan.",
    "readNote": "Bu görevde kullanıcıdan yalnızca başlangıç bilgisi alınır; döngü yeni girdi okumaz."
  },
  {
    "title": "Doğru şifre gelene kadar sor",
    "kind": "while",
    "input": [
      "kirmizi",
      "sari",
      "mavi"
    ],
    "expected": [
      "Tekrar dene",
      "Tekrar dene",
      "Giriş açıldı"
    ],
    "inputs": [
      [
        "sifre",
        "1. denemedeki şifre",
        "string"
      ],
      [
        "sifre",
        "2. denemedeki şifre",
        "string"
      ],
      [
        "sifre",
        "3. denemedeki şifre",
        "string"
      ]
    ],
    "problem": "Arşiv kapısının şifresi küçük harflerle “mavi”. Yanlış şifre geldikçe yeniden denenecek. Kaç deneme yapılacağını baştan bilmiyoruz.",
    "request": "İlk şifreyi kullanıcıdan al. while ile şifre “mavi” olmadığı sürece “Tekrar dene” yaz ve yeni bir şifre oku. Doğru şifre gelince bir kez “Giriş açıldı” yaz.",
    "note": "Test girdilerinde eninde sonunda mavi gelecek. mavi okunduktan sonra başka girdi okuma. Şifreyi string olarak tut; büyük-küçük harf fark eder.",
    "exampleMeaning": "kirmizi yanlış: Tekrar dene. sari yanlış: Tekrar dene. mavi doğru: döngü biter ve Giriş açıldı yazılır. İlk girdi mavi olursa yalnızca Giriş açıldı görünür.",
    "steps": [
      "İlk şifreyi döngüden önce oku.",
      "while (sifre != \"mavi\") içinde mesajı yaz ve sonraki şifreyi oku.",
      "Giriş açıldı mesajını döngüden sonra yaz."
    ],
    "checks": [
      "Şifreleri string olarak oku.",
      "while kullan; yeni şifreyi döngü içinde de oku."
    ],
    "start": "string sifre = Console.ReadLine();\n\n",
    "example": "while (sifre != \"mavi\")\n{\n    Console.WriteLine(\"Tekrar dene\");\n    sifre = Console.ReadLine();\n}\nConsole.WriteLine(\"Giriş açıldı\");",
    "id": 10,
    "lessonTitle": "Doğru şifre gelene kadar sor",
    "topic": "Ünite 2 · Döngüler",
    "explain": "kirmizi yanlış: Tekrar dene. sari yanlış: Tekrar dene. mavi doğru: döngü biter ve Giriş açıldı yazılır. İlk girdi mavi olursa yalnızca Giriş açıldı görünür.",
    "hint": "İlk şifreyi döngüden önce oku.",
    "rules": [
      "Şifreleri string olarak oku.",
      "while kullan; yeni şifreyi döngü içinde de oku."
    ],
    "lesson": "İlk şifreyi döngüden önce oku. while (sifre != \"mavi\") içinde mesajı yaz ve sonraki şifreyi oku. Giriş açıldı mesajını döngüden sonra yaz.",
    "readStep": "Bilgileri Console.ReadLine() ile sırayla al. Şifreler metin; string kullan.",
    "readNote": "Tekrarlanan yeni bilgileri döngünün içinde oku. Kaç girdi geleceği sorunun durma kuralına bağlı."
  },
  {
    "title": "0 gelene kadar sayıları topla",
    "kind": "while",
    "input": [
      "4",
      "3",
      "0"
    ],
    "expected": [
      "7"
    ],
    "inputs": [
      [
        "sayi",
        "1. girilen sayı",
        "int"
      ],
      [
        "sayi",
        "2. girilen sayı",
        "int"
      ],
      [
        "sayi",
        "Bitirme işareti",
        "int"
      ]
    ],
    "problem": "Kullanıcı istediği kadar sayı girecek. İşinin bittiğini 0 girerek söyleyecek. 0 bir veri değil, “artık dur” işareti.",
    "request": "Sayıları kullanıcıdan sırayla oku. while kullanarak 0’dan önce gelen sayıları topla. 0 okununca dur ve yalnızca toplamı yaz.",
    "note": "Sayılar negatif de olabilir. Girdiler mutlaka 0 ile bitecek. 0’dan sonra başka sayı okuma. İlk sayı 0 ise toplam 0 yaz.",
    "exampleMeaning": "4, 3, 0 girilirse 4 + 3 = 7 olur. 0 gelince dururuz. Ekrana yalnızca 7 yazılır.",
    "steps": [
      "Toplamı 0 yap ve ilk sayıyı oku.",
      "Sayı 0 değilken toplama ekle, sonra yeni sayıyı oku.",
      "Döngü bitince toplamı yaz."
    ],
    "checks": [
      "Sayıları int olarak oku.",
      "while kullan; yeni sayıyı döngü içinde oku."
    ],
    "start": "int sayi = Convert.ToInt32(Console.ReadLine());\n\n",
    "example": "int toplam = 0;\nwhile (sayi != 0)\n{\n    toplam += sayi;\n    sayi = Convert.ToInt32(Console.ReadLine());\n}\nConsole.WriteLine(toplam);",
    "id": 11,
    "lessonTitle": "0 gelene kadar sayıları topla",
    "topic": "Ünite 2 · Döngüler",
    "explain": "4, 3, 0 girilirse 4 + 3 = 7 olur. 0 gelince dururuz. Ekrana yalnızca 7 yazılır.",
    "hint": "Toplamı 0 yap ve ilk sayıyı oku.",
    "rules": [
      "Sayıları int olarak oku.",
      "while kullan; yeni sayıyı döngü içinde oku."
    ],
    "lesson": "Toplamı 0 yap ve ilk sayıyı oku. Sayı 0 değilken toplama ekle, sonra yeni sayıyı oku. Döngü bitince toplamı yaz.",
    "readStep": "Bilgileri Console.ReadLine() ile sırayla al. Sayılar için Convert.ToInt32(...) kullan.",
    "readNote": "Tekrarlanan yeni bilgileri döngünün içinde oku. Kaç girdi geleceği sorunun durma kuralına bağlı."
  },
  {
    "title": "Kapıyı en az bir kez çal",
    "kind": "do while",
    "input": [
      "2"
    ],
    "expected": [
      "Tak",
      "Tak"
    ],
    "inputs": [
      [
        "adet",
        "İstenen kapı çalma sayısı",
        "int"
      ]
    ],
    "problem": "Kapıyı çalmadan dönmek yok: istenen sayı 0 bile olsa kapıyı bir kez çalacağız. Bu, koşulu işten sonra kontrol eden do while için bir örnek.",
    "request": "Kullanıcıdan istenen tekrar sayısını al. do while kullanarak her tur “Tak” yaz. Pozitif sayıda o kadar kez; 0 girilirse yine bir kez yaz.",
    "note": "Girdi 0–10 arasında. 0 için bir satır Tak olmalı. Sayıyı ekrana yazma.",
    "exampleMeaning": "2 girilirse Tak iki kez yazılır. 0 girilirse do bloğu önce çalıştığı için Tak yine bir kez yazılır; sonra koşul yanlış çıkıp durur.",
    "steps": [
      "Sayacı 0 yap.",
      "do bloğunda Tak yaz ve sayacı 1 artır.",
      "Bloğun sonundaki while ile sayacın istenen sayıya ulaşıp ulaşmadığını kontrol et."
    ],
    "checks": [
      "Tekrar sayısını int olarak oku.",
      "Bu görevde do while kullan."
    ],
    "start": "int adet = Convert.ToInt32(Console.ReadLine());\n\n",
    "example": "int i = 0;\ndo\n{\n    Console.WriteLine(\"Tak\");\n    i++;\n} while (i < adet);",
    "id": 12,
    "lessonTitle": "Kapıyı en az bir kez çal",
    "topic": "Ünite 2 · Döngüler",
    "explain": "2 girilirse Tak iki kez yazılır. 0 girilirse do bloğu önce çalıştığı için Tak yine bir kez yazılır; sonra koşul yanlış çıkıp durur.",
    "hint": "Sayacı 0 yap.",
    "rules": [
      "Tekrar sayısını int olarak oku.",
      "Bu görevde do while kullan."
    ],
    "lesson": "Sayacı 0 yap. do bloğunda Tak yaz ve sayacı 1 artır. Bloğun sonundaki while ile sayacın istenen sayıya ulaşıp ulaşmadığını kontrol et.",
    "readStep": "Bilgileri Console.ReadLine() ile sırayla al. Sayılar için Convert.ToInt32(...) kullan.",
    "readNote": "Bu görevde kullanıcıdan yalnızca başlangıç bilgisi alınır; döngü yeni girdi okumaz."
  },
  {
    "title": "Bitirene kadar kaç sayı girildi?",
    "kind": "do while",
    "input": [
      "8",
      "4",
      "0"
    ],
    "expected": [
      "2"
    ],
    "inputs": [
      [
        "sayi",
        "1. girilen sayı",
        "int"
      ],
      [
        "sayi",
        "2. girilen sayı",
        "int"
      ],
      [
        "sayi",
        "Bitirme işareti",
        "int"
      ]
    ],
    "problem": "Kullanıcı sayı girmeye başlayacak. 0 girince iş bitecek. Sen sayıların toplamını değil, 0’dan önce kaç sayı girildiğini bulacaksın.",
    "request": "do while içinde kullanıcıdan bir sayı oku. Sayı 0 değilse sayacı 1 artır. 0 gelince dur ve girilen sayı adedini tek satırda yaz.",
    "note": "Son girdi mutlaka 0 olacak. Bitirme işareti olan 0 sayaca katılmaz. İlk girdi 0 ise sonuç 0. Negatif sayılar da birer sayı olarak sayılır.",
    "exampleMeaning": "8, 4, 0 girildi. 8 bir sayı, 4 bir sayı; 0 dur demek. Bu yüzden sonuç 2’dir. 8 + 4 hesabı yapmıyoruz.",
    "steps": [
      "Adet sayacını 0 yap.",
      "do içinde bir sayı oku. if ile 0 değilse sayacı artır.",
      "while (sayi != 0) ile devam et; bitince sayacı yaz."
    ],
    "checks": [
      "Sayıları int olarak oku.",
      "Bu görevde do while ve if kullan."
    ],
    "start": "int sayi;\n\n",
    "readExample": "int sayi = Convert.ToInt32(Console.ReadLine());",
    "example": "int sayac = 0;\ndo\n{\n    sayi = Convert.ToInt32(Console.ReadLine());\n    if (sayi != 0) sayac++;\n} while (sayi != 0);\nConsole.WriteLine(sayac);",
    "id": 13,
    "lessonTitle": "Bitirene kadar kaç sayı girildi?",
    "topic": "Ünite 2 · Döngüler",
    "explain": "8, 4, 0 girildi. 8 bir sayı, 4 bir sayı; 0 dur demek. Bu yüzden sonuç 2’dir. 8 + 4 hesabı yapmıyoruz.",
    "hint": "Adet sayacını 0 yap.",
    "rules": [
      "Sayıları int olarak oku.",
      "Bu görevde do while ve if kullan."
    ],
    "lesson": "Adet sayacını 0 yap. do içinde bir sayı oku. if ile 0 değilse sayacı artır. while (sayi != 0) ile devam et; bitince sayacı yaz.",
    "readStep": "Bilgileri Console.ReadLine() ile sırayla al. Sayılar için Convert.ToInt32(...) kullan.",
    "readNote": "Tekrarlanan yeni bilgileri döngünün içinde oku. Kaç girdi geleceği sorunun durma kuralına bağlı."
  },
  {
    "title": "Kasayı en fazla üç denemede aç",
    "kind": "for + break",
    "input": [
      "2",
      "7"
    ],
    "expected": [
      "Açıldı"
    ],
    "inputs": [
      [
        "deneme",
        "1. denenen kod",
        "int"
      ],
      [
        "deneme",
        "2. denenen kod",
        "int"
      ]
    ],
    "problem": "Kasanın kodu 7. Kullanıcının en fazla üç deneme hakkı var. Doğru kod gelirse hemen açılacak; kalan denemeler okunmayacak.",
    "request": "for ile en fazla üç kod oku. Bir kod 7 ise kasanın açıldığını kaydet ve break ile döngüden hemen çık. Sonunda başarılıysa “Açıldı”, üç deneme de yanlışsa “Kilitlendi” yaz.",
    "note": "Doğru kod gelene kadar en fazla 3 girdi verilir. İlk denemede 7 gelirse yalnızca bir girdi oku. Sonuç mesajını bir kez yaz.",
    "exampleMeaning": "2 ve 7 girilirse ilk kod yanlış, ikincisi doğrudur. İkinci denemede dururuz; üçüncü sayı okunmaz. Çıktı Açıldı olur. 1, 2, 3 girilirse Kilitlendi olur.",
    "steps": [
      "acildi adında bir bool değişkenini false başlatabilirsin.",
      "Her for turunda bir kod oku. Doğruysa acildi = true yapıp break kullan.",
      "Döngüden sonra if/else ile yalnızca bir sonuç mesajı yaz."
    ],
    "checks": [
      "Kod denemelerini int olarak oku.",
      "Bu görevde for, if ve break kullan."
    ],
    "start": "bool acildi = false;\n\n",
    "readExample": "int deneme = Convert.ToInt32(Console.ReadLine());",
    "example": "for (int i = 0; i < 3; i++)\n{\n    int kod = Convert.ToInt32(Console.ReadLine());\n    if (kod == 7) { acildi = true; break; }\n}\nif (acildi) Console.WriteLine(\"Açıldı\");\nelse Console.WriteLine(\"Kilitlendi\");",
    "id": 14,
    "lessonTitle": "Kasayı en fazla üç denemede aç",
    "topic": "Ünite 2 · Döngüler",
    "explain": "2 ve 7 girilirse ilk kod yanlış, ikincisi doğrudur. İkinci denemede dururuz; üçüncü sayı okunmaz. Çıktı Açıldı olur. 1, 2, 3 girilirse Kilitlendi olur.",
    "hint": "acildi adında bir bool değişkenini false başlatabilirsin.",
    "rules": [
      "Kod denemelerini int olarak oku.",
      "Bu görevde for, if ve break kullan."
    ],
    "lesson": "acildi adında bir bool değişkenini false başlatabilirsin. Her for turunda bir kod oku. Doğruysa acildi = true yapıp break kullan. Döngüden sonra if/else ile yalnızca bir sonuç mesajı yaz.",
    "readStep": "Bilgileri Console.ReadLine() ile sırayla al. Sayılar için Convert.ToInt32(...) kullan.",
    "readNote": "Tekrarlanan yeni bilgileri döngünün içinde oku. Kaç girdi geleceği sorunun durma kuralına bağlı."
  }
];g.Unit2LoopInstructions=g.Case022Lessons.map(t=>({...t}));})(window);
