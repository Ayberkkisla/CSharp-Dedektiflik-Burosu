(function(g){'use strict';
g.Unit1BoxInstructions=[
  {
    "problem": "İki rafta deliller var. İkisinde toplam kaç delil olduğunu bul. Kullanıcıdan önce ilk raftaki, sonra ikinci raftaki delil sayısını al.",
    "inputs": [
      [
        "ilkRaf",
        "İlk raftaki delil sayısı",
        "int"
      ],
      [
        "ikinciRaf",
        "İkinci raftaki delil sayısı",
        "int"
      ]
    ],
    "steps": [
      "ilkRaf ve ikinciRaf sayılarını + ile topla.",
      "Sonucu Console.WriteLine ile ekrana yaz."
    ],
    "example": "Bir rafta 12, diğerinde 8 delil var. 12 + 8 = 20. Ekranda 20 yazmalı.",
    "note": "12 ve 8 örnek sayılar. Koduna bu sayıları yazma; değişkenleri kullan. Sayılar değişse de hesabın çalışsın.",
    "checks": [
      "İki sayıyı int değişkenlerinde tut.",
      "Toplarken + kullan. Ekrana sadece sonucu yaz."
    ],
    "readStep": "İki sayıyı sırayla Console.ReadLine() ile oku. Convert.ToInt32(...) ile int sayıya çevirip ayrı değişkenlerde tut."
  },
  {
    "problem": "Bir isim kartı hazırlayalım. Kartta kişinin adı ve çalıştığı yer yan yana yazsın. Kullanıcıdan önce adını, sonra çalıştığı bölgeyi al.",
    "inputs": [
      [
        "ad",
        "Kişinin adı",
        "string"
      ],
      [
        "bolge",
        "Çalıştığı bölge",
        "string"
      ]
    ],
    "steps": [
      "ad ile bolge metinlerini + ile birleştir.",
      "Aralarına \" : \" koy. İki noktanın iki yanında birer boşluk olsun.",
      "Kartın yazısını Console.WriteLine ile ekrana yaz."
    ],
    "example": "Adı Ada, çalıştığı yer Arşiv. Ekranda Ada : Arşiv yazmalı.",
    "note": "İsim ve yer her seferinde değişebilir. Tırnaklar ekranda görünmesin.",
    "checks": [
      "Adı ve yeri ayrı string değişkenlerinde tut.",
      "Metinleri + ile birleştir."
    ],
    "readStep": "İki bilgiyi sırayla Console.ReadLine() ile oku. ad ve bolge adlı string değişkenlerinde tut; metinleri sayıya çevirmen gerekmiyor."
  },
  {
    "problem": "Depodaki mühürlerin bir kısmını kullandık. Kaç tane kaldı? Kullanıcıdan önce depodaki mühür sayısını, sonra kaç mühür kullanıldığını al.",
    "inputs": [
      [
        "stok",
        "Başlangıçtaki mühür sayısı",
        "int"
      ],
      [
        "kullanilan",
        "Kullanılan mühür sayısı",
        "int"
      ]
    ],
    "steps": [
      "stok sayısından kullanilan sayısını - ile çıkar.",
      "Kalan sayıyı Console.WriteLine ile ekrana yaz."
    ],
    "example": "30 mühür vardı, 7 tanesini kullandık. 30 − 7 = 23 mühür kaldı.",
    "note": "Ekrana sadece kalan sayıyı yaz.",
    "checks": [
      "İki sayıyı int değişkenlerinde tut.",
      "Hesapta - kullan."
    ],
    "readStep": "İki sayıyı sırayla Console.ReadLine() ile oku. Convert.ToInt32(...) ile int sayıya çevirip ayrı değişkenlerde tut."
  },
  {
    "problem": "Taksiye bindik. Açılış ücreti var, bir de gittiğimiz her kilometre için para ödüyoruz. Toplam kaç lira tutar? Kullanıcıdan sırayla açılış ücretini, gidilen kilometreyi ve kilometre başına ücreti al.",
    "inputs": [
      [
        "acilis",
        "Bir kez alınan açılış bedeli",
        "int"
      ],
      [
        "kilometre",
        "Gidilen yol, kilometre",
        "int"
      ],
      [
        "birimUcret",
        "Bir kilometrenin ücreti",
        "int"
      ]
    ],
    "steps": [
      "kilometre ile birimUcret sayılarını * ile çarp.",
      "Bulduğun tutara acilis ücretini + ile ekle.",
      "Toplamı Console.WriteLine ile ekrana yaz."
    ],
    "example": "Açılış 20 lira. 4 km gittik, kilometresi 6 lira. 4 × 6 = 24; açılışla birlikte 44 lira.",
    "note": "Açılış ücretini bir kere ekle. Ekrana sadece sayıyı yaz.",
    "checks": [
      "Üç sayıyı int değişkenlerinde tut.",
      "Hesapta * ve + kullan."
    ],
    "readStep": "Üç sayıyı ayrı Console.ReadLine() çağrılarıyla sırayla oku. Her birini Convert.ToInt32(...) ile int sayıya çevir."
  },
  {
    "problem": "Delilleri kutulara koyacağız. Kaç kutu tamamen dolar, kaç delil artar? Kullanıcıdan önce toplam delil sayısını, sonra bir kutuya kaç delil sığdığını al.",
    "inputs": [
      [
        "delil",
        "Toplam delil sayısı",
        "int"
      ],
      [
        "kapasite",
        "Bir kutunun aldığı delil sayısı",
        "int"
      ]
    ],
    "steps": [
      "delil / kapasite ile tam dolan kutu sayısını bul.",
      "delil % kapasite ile artan delil sayısını bul.",
      "İki Console.WriteLine kullan: önce kutu sayısını, alt satıra artan delil sayısını yaz."
    ],
    "example": "17 delil var. Her kutu 5 tane alıyor. 3 kutu dolar, 2 delil artar.",
    "note": "Burada iki sayı da int. / tam kutuları, % ise artanı bulur. Kutunun kapasitesi her zaman 0’dan büyük olacak.",
    "checks": [
      "İki sayıyı int değişkenlerinde tut.",
      "Hem / hem % kullan. Sonuçları iki ayrı satıra yaz."
    ],
    "readStep": "İki sayıyı sırayla Console.ReadLine() ile oku. Convert.ToInt32(...) ile int sayıya çevirip ayrı değişkenlerde tut."
  },
  {
    "problem": "Elimizde üç sayı var. Bu sayıların ortalamasını bulalım. Kullanıcıdan sırayla üç tam sayı al.",
    "inputs": [
      [
        "a",
        "Birinci ölçüm",
        "int"
      ],
      [
        "b",
        "İkinci ölçüm",
        "int"
      ],
      [
        "c",
        "Üçüncü ölçüm",
        "int"
      ]
    ],
    "steps": [
      "a, b ve c sayılarını + ile topla.",
      "Toplamı 3.0 ile böl. Böylece virgülden sonraki kısmı kaybetmezsin.",
      "Ortalamayı Console.WriteLine ile ekrana yaz."
    ],
    "example": "Sayılar 4, 5 ve 8. Toplamları 17. 17 / 3.0 = 5.666666…",
    "note": "int sayıları 3’e bölersen sonuç 5 olur. 3.0 kullanabilir veya bölmeden önce double’a çevirebilirsin. Sonucu yuvarlamadan yaz.",
    "checks": [
      "Üç sayıyı int değişkenlerinde tut.",
      "Hesapta + ve / kullan; sonuç ondalıklı olabilsin."
    ],
    "readStep": "Her sayı için bir Console.ReadLine() kullan. Convert.ToInt32(...) ile sayıya çevirip a, b ve c adlı int değişkenlerinde tut."
  },
  {
    "problem": "Eski kutulara da yeni kutulara da etiket yapıştıracağız. Her kutuya aynı sayıda etiket gerekiyor. Toplam kaç etiket lazım? Kullanıcıdan sırayla eski kutu sayısını, yeni kutu sayısını ve her kutuya kaç etiket gerektiğini al.",
    "inputs": [
      [
        "eski",
        "Eski kutu sayısı",
        "int"
      ],
      [
        "yeni",
        "Yeni kutu sayısı",
        "int"
      ],
      [
        "kutuBasina",
        "Her kutuya yapıştırılacak etiket sayısı",
        "int"
      ]
    ],
    "steps": [
      "eski ile yeni kutu sayılarını + ile topla.",
      "Toplam kutu sayısını kutuBasina ile * kullanarak çarp.",
      "Etiket sayısını Console.WriteLine ile ekrana yaz."
    ],
    "example": "3 eski, 5 yeni kutu var: toplam 8 kutu. Her birine 2 etiket: 8 × 2 = 16 etiket.",
    "note": "Tek satırda hesaplarsan önce kutuları toplamak için parantez kullan. İki grubu ayrı ayrı çarpıp toplaman da olur.",
    "checks": [
      "Üç sayıyı int değişkenlerinde tut.",
      "Hesapta + ve * kullan."
    ],
    "readStep": "Üç sayıyı ayrı Console.ReadLine() çağrılarıyla sırayla oku. Her birini Convert.ToInt32(...) ile int sayıya çevir."
  },
  {
    "problem": "Bilet indirime girdi. İndirimden sonra kaç lira ödeyeceğiz? Kullanıcıdan önce bilet fiyatını, sonra indirim yüzdesini al.",
    "inputs": [
      [
        "fiyat",
        "İndirim öncesi bilet fiyatı",
        "decimal"
      ],
      [
        "yuzde",
        "İndirim yüzdesi, 0–100 arası",
        "decimal"
      ]
    ],
    "steps": [
      "fiyat ile yuzde değerlerini çarp, 100’e böl. Bu kadar indirim var.",
      "İndirimi ilk fiyattan çıkar.",
      "Kalan fiyatı Console.WriteLine ile ekrana yaz."
    ],
    "example": "Bilet 150 lira, indirim %10. 15 lira indirim var. Ödeyeceğin para 135 lira.",
    "note": "Para hesabında decimal kullan. 100m yazabilirsin. Örneklerde ondalıklı sayıları noktayla yazıyoruz: 25.5 gibi.",
    "checks": [
      "Fiyatı ve yüzdeyi decimal değişkenlerinde tut.",
      "Çarpma ve çıkarma kullan. Ekrana ödenecek fiyatı yaz."
    ],
    "readStep": "İki sayıyı sırayla Console.ReadLine() ile oku. Convert.ToDecimal(...) ile decimal sayıya çevirip ayrı değişkenlerde tut."
  },
  {
    "problem": "Bir kaydın süresini biliyoruz. Saat, dakika ve saniyeyi tek bir sayıya çevirelim: toplam kaç saniye? Kullanıcıdan sırayla saat, dakika ve saniye değerlerini al.",
    "inputs": [
      [
        "saat",
        "Sürenin saat bölümü",
        "int"
      ],
      [
        "dakika",
        "Dakika bölümü",
        "int"
      ],
      [
        "saniye",
        "Saniye bölümü",
        "int"
      ]
    ],
    "steps": [
      "saat değerini 3600 ile çarp.",
      "dakika değerini 60 ile çarp.",
      "İkisini ve saniye değerini topla. Sonucu Console.WriteLine ile yaz."
    ],
    "example": "1 saat = 3600 saniye. 2 dakika = 120 saniye. 3 saniye daha ekle: toplam 3723.",
    "note": "Bir saat 3600, bir dakika 60 saniye. Ekrana sadece toplam saniyeyi yaz.",
    "checks": [
      "Üç sayıyı int değişkenlerinde tut.",
      "Hesapta * ve + kullan."
    ],
    "readStep": "Üç sayıyı ayrı Console.ReadLine() çağrılarıyla sırayla oku. Her birini Convert.ToInt32(...) ile int sayıya çevir."
  },
  {
    "problem": "Büroya birkaç ürün aldık. Ürünlerin parasına kargoyu da ekleyelim. Toplam kaç lira ödeyeceğiz? Kullanıcıdan sırayla ürün sayısını, bir ürünün fiyatını ve kargo ücretini al.",
    "inputs": [
      [
        "adet",
        "Alınan ürün sayısı",
        "int"
      ],
      [
        "birimFiyat",
        "Bir ürünün fiyatı",
        "decimal"
      ],
      [
        "kargo",
        "Sipariş başına bir kez alınan kargo",
        "decimal"
      ]
    ],
    "steps": [
      "adet ile birimFiyat değerlerini * ile çarp.",
      "Bulduğun tutara kargo ücretini + ile ekle.",
      "Toplamı Console.WriteLine ile ekrana yaz."
    ],
    "example": "4 ürün, tanesi 25.5 lira: 102 lira. Kargo 15 lira. Toplam 117 lira.",
    "note": "Kargoyu bir kere ekle. Bu soruda ürün sayısı 0 olsa da kargo ücreti ödeniyor.",
    "checks": [
      "Ürün sayısı int; fiyat ve kargo decimal olsun.",
      "Hesapta * ve + kullan."
    ],
    "readStep": "Her bilgi için bir Console.ReadLine() kullan. Ürün sayısını Convert.ToInt32(...), fiyatı ve kargoyu Convert.ToDecimal(...) ile sayıya çevir."
  }
];
})(window);
