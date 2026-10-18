(function(g){'use strict';
const escape=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&apos;'}[c]));
const cases=[
  {
    "vars": [
      [
        "int",
        "saat",
        "1"
      ],
      [
        "int",
        "dakika",
        "75"
      ],
      [
        "int",
        "saniye",
        "90"
      ]
    ],
    "op": "* + / %",
    "formula": "toplam = saat * 3600 + dakika * 60 + saniye",
    "result": "2 | 16 | 30",
    "output": [
      "2",
      "16",
      "30"
    ],
    "type": "int",
    "code": [
      "int saat; int dakika; int saniye;",
      "int saat = Convert.ToInt32(Console.ReadLine()); // Diğer girdileri de sırayla oku.",
      "int toplam = saat * 3600 + dakika * 60 + saniye;",
      "Console.WriteLine(toplam / 3600); Console.WriteLine(toplam % 3600 / 60); Console.WriteLine(toplam % 60);"
    ],
    "words": [
      "Bir sürenin saat, dakika ve saniye bilgisi ayrı ayrı verilmiş. Dakika veya saniye 59’dan büyük olabilir. Örneğin 75 dakika, 1 saat 15 dakika demektir. Süreyi değiştirmeden, dakika ve saniye kısımları 0 ile 59 arasında olacak şekilde yeniden yazacağız.",
      "Kullanıcıdan sırayla saat, dakika ve saniye al. Aynı sürenin kaç saat, kaç dakika ve kaç saniye ettiğini bul. Bu üç sayıyı ayrı satırlara yaz. Örnekte girilen bilgiler: Saat: 1; Dakika: 75; Saniye: 90.",
      "Kullanıcı 1, 75 ve 90 girsin. Bu, “1 saat + 75 dakika + 90 saniye” demek. 75 dakika, 1 saat 15 dakikadır. 90 saniye de 1 dakika 30 saniyedir. Hepsi birlikte 2 saat 16 dakika 30 saniye eder. Bu yüzden çıktı alt alta 2, 16, 30 olur.",
      "1. satır: Düzeltilmiş saat. 2. satır: Düzeltilmiş dakika (0–59). 3. satır: Düzeltilmiş saniye (0–59). Burada gün hesabı yok: sonuç 25 saat çıkarsa 25 yazabilirsin. Kullanıcıdan gelen sayılar negatif olmayacak. Ekrana “saat” gibi kelimeler değil, yalnızca üç sayıyı yaz."
    ]
  },
  {
    "vars": [
      [
        "int",
        "delil",
        "17"
      ],
      [
        "int",
        "kapasite",
        "5"
      ]
    ],
    "op": "+ - / *",
    "formula": "kutu = (delil + kapasite - 1) / kapasite",
    "result": "4 | 3",
    "output": [
      "4",
      "3"
    ],
    "type": "int",
    "code": [
      "int delil; int kapasite;",
      "int delil = Convert.ToInt32(Console.ReadLine()); // Diğer girdileri de sırayla oku.",
      "int kutu = (delil + kapasite - 1) / kapasite;",
      "Console.WriteLine(kutu); Console.WriteLine(kutu * kapasite - delil);"
    ],
    "words": [
      "Delilleri kutulara yerleştiriyorsun. Her kutuya en fazla belli sayıda delil sığıyor. Dışarıda tek bir delil bile kalmamalı. Son kutu tamamen dolmasa da o kutuya ihtiyacın var.",
      "Kullanıcıdan önce toplam delil sayısını, sonra bir kutuya en fazla kaç delil sığdığını al. Bütün deliller için en az kaç kutu gerektiğini bul. Bir de açtığın kutularda toplam kaç boş yer kaldığını bul. Örnekte girilen bilgiler: Delil sayısı: 17; Bir kutunun kapasitesi: 5.",
      "17 delil var ve her kutuya 5 delil sığıyor. İlk üç kutuya 5’er delil koyarsın; 2 delil kalır. Bu 2 delil için dördüncü kutuyu açarsın. O kutunun 3 yeri boş kalır. Cevap: 4 kutu, 3 boş yer. Çıktı alt alta 4 ve 3 olur.",
      "1. satır: Açılacak kutu sayısı. 2. satır: Bu kutularda toplam boş kalan yer sayısı. Hiç delil yoksa kutu açma: iki satıra da 0 yaz. Bir kutunun kapasitesi her zaman 0’dan büyük. Bu soruyu if ve döngü kullanmadan çöz."
    ]
  },
  {
    "vars": [
      [
        "int",
        "numara",
        "407"
      ]
    ],
    "op": "/ % * +",
    "formula": "ters = birler * 100 + onlar * 10 + yuzler",
    "result": "704",
    "output": [
      "704"
    ],
    "type": "int",
    "code": [
      "int numara;",
      "int numara = Convert.ToInt32(Console.ReadLine()); // Diğer girdileri de sırayla oku.",
      "int yuzler = numara / 100;",
      "Console.WriteLine(ters);"
    ],
    "words": [
      "Bir dosyanın üç basamaklı numarası var. Bu numaranın rakamlarını sağdan sola okuyacağız. Örneğin 583 sayısını tersten okuyunca 385 olur.",
      "Kullanıcıdan 100 ile 999 arasında bir tam sayı al. Rakamları ters sırada olan yeni sayıyı bul ve tek satıra yaz. Sayıyı metne çevirmeden, / ve % gibi sayı işlemleriyle çöz. Örnekte girilen bilgiler: Üç basamaklı numara: 407.",
      "Kullanıcı 407 girerse sağdan sola rakamlar 7, 0, 4 olur. Yeni sayı 704’tür. Kullanıcı 120 girerse ters sıra 0, 2, 1 olur; sayıların başındaki sıfır yazılmadığı için cevap 21’dir.",
      "1. satır: Rakamları ters çevrilmiş sayı. Yalnızca yeni sayıyı yaz. Metin işlemi, dizi veya döngü kullanma. Ortadaki rakam yerinde kalır; ilk ve son rakam yer değiştirir."
    ]
  },
  {
    "vars": [
      [
        "int",
        "kutu",
        "4"
      ],
      [
        "int",
        "kapasite",
        "6"
      ],
      [
        "int",
        "kullanilan",
        "5"
      ],
      [
        "int",
        "gelen",
        "9"
      ]
    ],
    "op": "* - + / %",
    "formula": "stok = kutu * kapasite - kullanilan + gelen",
    "result": "4 | 4",
    "output": [
      "4",
      "4"
    ],
    "type": "int",
    "code": [
      "int kutu; int kapasite; int kullanilan; int gelen;",
      "int kutu = Convert.ToInt32(Console.ReadLine()); // Diğer girdileri de sırayla oku.",
      "int stok = kutu * kapasite - kullanilan + gelen;",
      "Console.WriteLine(stok / kapasite); Console.WriteLine(stok % kapasite);"
    ],
    "words": [
      "Depodaki kutular başlangıçta tamamen dolu. İçlerinden bazı deliller alınıyor. Sonra depoya yeni deliller geliyor. Elinde kalan delilleri aynı büyüklükteki kutulara yeniden yerleştiriyorsun.",
      "Kullanıcıdan sırayla başlangıçtaki dolu kutu sayısını, bir kutuya kaç delil sığdığını, alınan delil sayısını ve yeni gelen delil sayısını al. Son durumda kaç kutunun tamamen dolduğunu ve bunların dışında kaç delil kaldığını bul. Örnekte girilen bilgiler: Başlangıçta dolu kutu sayısı: 4; Kutudaki delil sayısı: 6; Kullanılan delil sayısı: 5; Sonradan gelen tekli delil sayısı: 9.",
      "Başta 4 dolu kutu var, her birinde 6 delil: toplam 24 delil. 5 delil alınıyor, 9 delil geliyor; artık 28 delil var. Bunlarla 6’şarlı 4 kutu tamamen dolar. Bu kutuların dışında 4 delil kalır. Çıktı alt alta 4 ve 4 olur.",
      "1. satır: Tamamen dolan kutu sayısı. 2. satır: Tam kutuların dışında kalan delil sayısı. Yarım dolu kutuyu “dolu kutu” sayma. Dışarıda kalan delilleri ikinci satırda belirt. Bir kutuya en az 1 delil sığar; alınan miktar başlangıçtaki delil sayısını aşmaz."
    ]
  },
  {
    "vars": [
      [
        "decimal",
        "fiyat",
        "200"
      ],
      [
        "decimal",
        "ilkYuzde",
        "10"
      ],
      [
        "decimal",
        "ikinciYuzde",
        "20"
      ]
    ],
    "op": "* - /",
    "formula": "son = ilkKalan - ilkKalan * ikinciYuzde / 100m",
    "result": "144",
    "output": [
      "144"
    ],
    "type": "decimal",
    "code": [
      "decimal fiyat; decimal ilkYuzde; decimal ikinciYuzde;",
      "decimal fiyat = Convert.ToDecimal(Console.ReadLine()); // Diğer girdileri de sırayla oku.",
      "decimal ilkKalan = fiyat - fiyat * ilkYuzde / 100m;",
      "Console.WriteLine(son);"
    ],
    "words": [
      "Bir mağaza ürüne iki kez indirim yapıyor. Önce ilk indirim yapılıp fiyat düşüyor. Sonra ikinci indirim, bu düşmüş fiyat üzerinden yapılıyor.",
      "Kullanıcıdan sırayla ürünün ilk fiyatını, ilk indirim yüzdesini ve ikinci indirim yüzdesini al. İki indirim de yapıldıktan sonra ödenecek fiyatı bul ve tek satıra yaz. Örnekte girilen bilgiler: İlk fiyat: 200; İlk indirim yüzdesi: 10; İkinci indirim yüzdesi: 20.",
      "Ürün 200 lira, indirimler %10 ve %20 olsun. İlk indirimle 20 lira düşer ve fiyat 180 lira olur. İkinci indirim artık 180 lira üzerinden yapılır: 36 lira daha düşer. Son fiyat 144 liradır. Çıktı 144 olur.",
      "1. satır: İki indirimden sonra ödenecek fiyat. Yüzde olarak %10 için 10 girilir; 0.10 girilmez. İki yüzdeyi toplayıp tek indirim yapma. Üç bilgiyi de decimal olarak al; ekrana yalnızca son fiyatı yaz."
    ]
  },
  {
    "vars": [
      [
        "int",
        "adet",
        "3"
      ],
      [
        "decimal",
        "birimFiyat",
        "20"
      ],
      [
        "decimal",
        "kargo",
        "12"
      ],
      [
        "decimal",
        "kupon",
        "6"
      ]
    ],
    "op": "* + - /",
    "formula": "gercekBirim = (adet * birimFiyat + kargo - kupon) / adet",
    "result": "22",
    "output": [
      "22"
    ],
    "type": "decimal",
    "code": [
      "int adet; decimal birimFiyat; decimal kargo; decimal kupon;",
      "int adet = Convert.ToInt32(Console.ReadLine()); // Diğer girdileri de sırayla oku.",
      "decimal toplam = adet * birimFiyat + kargo - kupon;",
      "Console.WriteLine(gercekBirim);"
    ],
    "words": [
      "Aynı üründen birkaç tane satın alıyorsun. Ürünlerin toplam fiyatına sipariş için bir kez kargo ekleniyor. Ardından bir kuponla toplam ödemeden belli bir miktar düşülüyor. Kargo ve indirimi ürünlere eşit paylaştıracağız.",
      "Kullanıcıdan sırayla ürün adedini, tek ürünün fiyatını, siparişin kargo ücretini ve kuponun kaç lira indirim yaptığını al. Bütün ödeme hesaba katıldığında bir ürünün sana kaça geldiğini bul. Örnekte girilen bilgiler: Ürün sayısı: 3; Bir ürünün fiyatı: 20; Kargo ücreti: 12; Siparişten düşülecek kupon: 6.",
      "3 ürün alıyorsun, her biri 20 lira: ürünler 60 lira tutar. 12 lira kargo eklenir, kuponla 6 lira düşer. Toplam 66 lira ödersin. 3 ürünün her birine eşit pay ayırınca bir ürün 22 liraya gelmiş olur. Çıktı 22’dir.",
      "1. satır: Kargo ve kupon payı dahil bir ürünün maliyeti. Kargo ve kupon siparişin tamamı içindir; her ürüne ayrı ayrı uygulanmaz. Kupon yüzdelik değil, lira tutarıdır. Ürün adedi int, diğer bilgiler decimal olmalı. Ürün adedi en az 1 olacak; kupon toplam ödemeyi aşmayacak."
    ]
  },
  {
    "vars": [
      [
        "int",
        "ilkKisi",
        "2"
      ],
      [
        "int",
        "ilkOrtalama",
        "60"
      ],
      [
        "int",
        "ikinciKisi",
        "3"
      ],
      [
        "int",
        "ikinciOrtalama",
        "90"
      ]
    ],
    "op": "* + /",
    "formula": "ortalama = (ilkKisi * ilkOrtalama + ikinciKisi * ikinciOrtalama) / (double)(ilkKisi + ikinciKisi)",
    "result": "78",
    "output": [
      "78"
    ],
    "type": "double",
    "code": [
      "int ilkKisi; int ilkOrtalama; int ikinciKisi; int ikinciOrtalama;",
      "int ilkKisi = Convert.ToInt32(Console.ReadLine()); // Diğer girdileri de sırayla oku.",
      "int puan = ilkKisi * ilkOrtalama + ikinciKisi * ikinciOrtalama;",
      "Console.WriteLine(ortalama);"
    ],
    "words": [
      "İki ekip aynı sınava girmiş. Her ekibin kaç kişi olduğunu ve kendi not ortalamasını biliyorsun. Şimdi bu iki ekibi tek bir grup olarak düşün: herkesin birlikte not ortalaması kaç olur?",
      "Kullanıcıdan sırayla ilk ekibin kişi sayısını ve not ortalamasını, ardından ikinci ekibin kişi sayısını ve not ortalamasını al. İki ekipteki bütün kişilerin ortak not ortalamasını bul ve tek satıra yaz. Örnekte girilen bilgiler: İlk ekipteki kişi sayısı: 2; İlk ekibin puan ortalaması: 60; İkinci ekipteki kişi sayısı: 3; İkinci ekibin puan ortalaması: 90.",
      "İlk ekip 2 kişi ve ortalaması 60. Bu ekibin toplam puanı 120’dir. İkinci ekip 3 kişi ve ortalaması 90; toplam puanı 270’tir. Birlikte 5 kişi, toplam 390 puan eder. Kişi başına ortalama 78 puan düşer. Çıktı 78 olur.",
      "1. satır: Bütün kişilerin birlikte not ortalaması. İki ekipteki kişi sayısı farklı olabileceği için yalnızca iki ortalamayı toplayıp 2’ye bölme. Dört girdiyi int olarak al. Sonuç kesirli çıkarsa ondalıklı kısmını koru. Her ekipte en az 1 kişi var."
    ]
  },
  {
    "vars": [
      [
        "int",
        "saat",
        "23"
      ],
      [
        "int",
        "dakika",
        "50"
      ],
      [
        "int",
        "sure",
        "95"
      ]
    ],
    "op": "* + / %",
    "formula": "toplam = saat * 60 + dakika + sure",
    "result": "1 | 25 | 1",
    "output": [
      "1",
      "25",
      "1"
    ],
    "type": "int",
    "code": [
      "int saat; int dakika; int sure;",
      "int saat = Convert.ToInt32(Console.ReadLine()); // Diğer girdileri de sırayla oku.",
      "int toplam = saat * 60 + dakika + sure;",
      "Console.WriteLine(toplam / 60 % 24); Console.WriteLine(toplam % 60); Console.WriteLine(toplam / 1440);"
    ],
    "words": [
      "Şu an saatin kaç olduğunu biliyorsun. Üzerinden belli sayıda dakika geçecek. O zaman saatin kaç olacağını bulacağız. Gece yarısını geçince saat tekrar 00:00’dan devam eder.",
      "Kullanıcıdan sırayla şu anki saati, şu anki dakikayı ve kaç dakika geçeceğini al. Sonraki saati ve dakikayı bul. Bir de başlangıçtan itibaren kaç kez gece yarısını geçtiğini bul; bunu geçen gün sayısı olarak yaz. Örnekte girilen bilgiler: Başlangıç saati: 23; Başlangıç dakikası: 50; Geçen dakika: 95.",
      "Başlangıç 23:50 olsun ve 95 dakika geçsin. İlk 10 dakika bizi 00:00’a getirir. Geriye kalan 85 dakika sonra saat 01:25 olur. Gece yarısını bir kez geçtiğimiz için geçen gün sayısı 1’dir. Çıktı alt alta 1, 25, 1 olur.",
      "1. satır: Yeni saat (0–23). 2. satır: Yeni dakika (0–59). 3. satır: Başlangıç gününden sonra geçen gün sayısı. Saati, dakikayı ve geçen gün sayısını üç ayrı satıra yaz; “01:25” şeklinde tek satıra yazma. Başlangıç saati 0–23, dakikası 0–59 arasında. Geçecek süre 0 veya daha büyük olabilir; birkaç gün de sürebilir."
    ]
  },
  {
    "vars": [
      [
        "int",
        "toplamDakika",
        "76"
      ],
      [
        "int",
        "ucretsiz",
        "15"
      ],
      [
        "int",
        "blok",
        "30"
      ],
      [
        "int",
        "ucret",
        "20"
      ]
    ],
    "op": "- + / *",
    "formula": "dilim = (toplamDakika - ucretsiz + blok - 1) / blok",
    "result": "60",
    "output": [
      "60"
    ],
    "type": "int",
    "code": [
      "int toplamDakika; int ucretsiz; int blok; int ucret;",
      "int toplamDakika = Convert.ToInt32(Console.ReadLine()); // Diğer girdileri de sırayla oku.",
      "int ucretli = toplamDakika - ucretsiz;",
      "Console.WriteLine(dilim * ucret);"
    ],
    "words": [
      "Otoparkta ilk birkaç dakika ücretsiz. Sonrası belli uzunlukta paketlerle ücretli. Örneğin bir paket 30 dakikaysa 1 dakika da kalsan 30 dakika da kalsan bir paket parası ödersin. 31 dakika kalırsan ikinci pakete de ödeme yaparsın.",
      "Kullanıcıdan sırayla otoparkta toplam kaç dakika kalındığını, ilk kaç dakikanın ücretsiz olduğunu, bir ücretli paketin kaç dakika sürdüğünü ve bir paketin kaç lira olduğunu al. Ödenecek toplam parayı bul ve tek satıra yaz. Örnekte girilen bilgiler: Toplam kalınan dakika: 76; Ücretsiz dakika: 15; Bir ücret diliminin dakikası: 30; Her dilimin ücreti: 20.",
      "Toplam 76 dakika kaldın. İlk 15 dakika ücretsiz; geriye 61 ücretli dakika kalır. Her 30 dakika 20 lira. İlk 30 dakika 20 lira, ikinci 30 dakika 20 lira, son 1 dakika da yeni paketi başlattığı için 20 lira. Toplam 60 lira ödersin. Çıktı 60 olur.",
      "1. satır: Ödenecek toplam ücret. Toplam kalış süresi ücretsiz süreden az olmayacak. İkisi eşitse ödeme 0 olur. Bir paket en az 1 dakika sürecek. Dakika başına ücret hesaplama; kullanılan paketlerin parasını hesapla. if ve döngü kullanmadan çöz."
    ]
  },
  {
    "vars": [
      [
        "int",
        "lira",
        "10"
      ],
      [
        "int",
        "kurus",
        "5"
      ],
      [
        "int",
        "kisi",
        "4"
      ]
    ],
    "op": "* + / %",
    "formula": "toplamKurus = lira * 100 + kurus",
    "result": "2 | 51 | 1",
    "output": [
      "2",
      "51",
      "1"
    ],
    "type": "int",
    "code": [
      "int lira; int kurus; int kisi;",
      "int lira = Convert.ToInt32(Console.ReadLine()); // Diğer girdileri de sırayla oku.",
      "int toplamKurus = lira * 100 + kurus;",
      "Console.WriteLine(pay / 100); Console.WriteLine(pay % 100); Console.WriteLine(toplamKurus % kisi);"
    ],
    "words": [
      "Kasadaki parayı birkaç kişiye eşit dağıtacaksın. Herkes aynı miktarda para almalı. Bir kuruşu bölemeyiz: herkese eşit verilemeyen birkaç kuruş olursa bunlar kasada kalacak.",
      "Kullanıcıdan sırayla paranın lira kısmını, kuruş kısmını ve kişi sayısını al. Bir kişinin kaç lira ve kaç kuruş alacağını bul. Son olarak kasada kaç kuruş kaldığını bul. Örnekte girilen bilgiler: Kasadaki lira: 10; Liraya ek kuruş: 5; Paylaşacak kişi sayısı: 4.",
      "Kasada 10 lira 5 kuruş var; 4 kişiye dağıtılacak. Her birine 2 lira 51 kuruş verirsen toplam 10 lira 4 kuruş dağıtmış olursun. Kasada 1 kuruş kalır. Bu yüzden çıktı alt alta 2, 51, 1 olur. 51 kişinin aldığı kuruş kısmı, 1 ise kasada kalan kuruştur.",
      "1. satır: Bir kişinin alacağı paranın lira kısmı. 2. satır: Aynı kişinin alacağı paranın kuruş kısmı. 3. satır: Dağıtılmadan kasada kalan kuruş. Üç ayrı satır kullan: kişinin lira kısmı, kişinin kuruş kısmı, kasada kalan kuruş. Girilen kuruş 0–99 arasında, kişi sayısı en az 1 olacak. Parayı tam kuruşlarla hesapla; bu görevde decimal kullanma."
    ]
  }
];
function mount(host,options={}){
 let reduced=!!options.reduced,paused=false,index=0,beat=0,steps=[],nodes={},motions=[],raf=null,timer=null,remaining=2800,started=0,pausedAt=0,delayed=[],trace=null;
 const text=(x,y,s,size=16,color='#e9e0c8')=>`<text x="${x}" y="${y}" text-anchor="middle" font-family="Consolas,monospace" font-size="${size}" fill="${color}">${escape(s)}</text>`;
 function group(id,x,y,html,a=1){nodes[id]={x,y,a,s:1};return `<g data-box="${id}" transform="translate(${x} ${y})" opacity="${a}">${html}</g>`;}
 function box(type,name,value,color='#d3b274'){return `<rect x="-85" y="-44" width="170" height="88" rx="9" fill="#1f2923" stroke="${color}" stroke-width="2"/><path d="M-84-14H84" stroke="${color}" opacity=".4"/>${text(0,-24,type+' '+name,13,color)}${text(0,23,value,25)}`;}
 function chip(value,color='#e3bf7c'){const width=Math.max(70,Math.min(220,String(value).length*12+20));return `<rect x="${-width/2}" y="-20" width="${width}" height="40" rx="7" fill="${color}"/>${text(0,8,value,19,'#1b2119')}`;}
 function render(body){host.innerHTML=`<svg viewBox="0 0 1000 360" preserveAspectRatio="xMidYMid meet" role="img" aria-label="Değişken kutuları, işlem ve konsol arasında hareket eden değerler"><defs><pattern id="b8-grid" width="25" height="25" patternUnits="userSpaceOnUse"><path d="M25 0H0v25" fill="none" stroke="#bec59d" opacity=".035"/></pattern><marker id="b8-arrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="m0 0 8 4-8 4" fill="#7c8a66"/></marker></defs><rect width="1000" height="360" fill="#111a14"/><rect width="1000" height="360" fill="url(#b8-grid)"/>${body}<rect x="45" y="323" width="910" height="30" rx="5" fill="#080f0b" stroke="#43543b"/>${text(500,344,'',15,'#ccdab4').replace('<text ','<text id="b8-live-code" ')}</svg>`;}
 function sync(id){const e=host.querySelector(`[data-box="${id}"]`),v=nodes[id];if(e&&v){e.setAttribute('transform',`translate(${v.x} ${v.y}) scale(${v.s})`);e.setAttribute('opacity',v.a);}}
 function move(id,to,duration=850,delay=0){if(!nodes[id])return;motions=motions.filter(m=>m.id!==id);if(reduced||paused){Object.assign(nodes[id],to);sync(id);return;}motions.push({id,from:{...nodes[id]},to,start:performance.now()+delay,duration});if(!raf&&!paused)raf=requestAnimationFrame(tick);}
 function tick(now){raf=null;motions=motions.filter(m=>{const p=Math.max(0,Math.min(1,(now-m.start)/m.duration)),ease=p<.5?4*p*p*p:1-Math.pow(-2*p+2,3)/2;for(const[k,v]of Object.entries(m.to))nodes[m.id][k]=m.from[k]+(v-m.from[k])*ease;sync(m.id);return p<1;});if(motions.length&&!paused)raf=requestAnimationFrame(tick);}
 function instant(id,to){if(nodes[id]){Object.assign(nodes[id],to);sync(id);}}
 function stop(){clearTimeout(timer);delayed.forEach(clearTimeout);delayed=[];cancelAnimationFrame(raf);raf=null;motions=[];}
 function code(s){const node=host.querySelector('#b8-live-code');node.textContent=s;node.setAttribute('font-size',Math.min(15,850/Math.max(1,s.length)*1.6));}
 function draw(n){nodes={};const c=cases[n],xs=c.vars.length===1?[500]:c.vars.length===2?[300,700]:c.vars.length===3?[220,500,780]:[140,380,620,860];let body=text(500,16,'DEĞİŞKENLER · DEĞERLER BURADA SAKLANIR',11,'#9caa8c');c.vars.forEach(([type,name,value],i)=>{const color=['#dfbb78','#a8c697','#9dbbc6'][i];body+=`<path d="M${xs[i]} 119 Q${xs[i]} 167 500 170" fill="none" stroke="#697c56" opacity=".6" marker-end="url(#b8-arrow)"/>`;body+=group('input'+i,xs[i],70,box(type,name,'?',color),0);});body+=`<path d="M500 200v20" stroke="#697c56" stroke-width="2" marker-end="url(#b8-arrow)"/><path d="M590 265H735" stroke="#697c56" stroke-width="2" marker-end="url(#b8-arrow)"/>`;
  body+=group('op',500,170,`<rect x="-90" y="-25" width="180" height="50" rx="9" fill="#403a24" stroke="#cfb571"/>${text(0,8,c.op,24,'#f0dba6')}`);
  body+=group('formula',500,208,text(0,0,'',12,'#c8d8b5'));
  body+=group('result',500,265,box(c.type,c.output?'sonuclar':'sonuc','?'));
  body+=group('console',845,265,`<rect x="-105" y="-45" width="210" height="90" rx="8" fill="#070e0b" stroke="#759060"/>${text(0,-23,'KONSOL',11,'#9eb38c')}<text id="b8-console" x="0" y="15" text-anchor="middle" font-family="Consolas,monospace" font-size="22" fill="#d7e7b9">_</text>`);
  c.vars.forEach((v,i)=>{body+=group('read'+i,xs[i],-25,chip(v[2]),0);body+=group('copy'+i,xs[i],70,chip(v[2]),0);});body+=group('out',500,265,chip(c.result),0);render(body);
 }
 function changeValue(id,value){const e=host.querySelector(`[data-box="${id}"] text:last-child`);if(e)e.textContent=value;}
 function consoleValue(lines){const e=host.querySelector('#b8-console');if(!e)return;e.setAttribute('y',lines.length>1?'-7':'15');e.setAttribute('font-size',lines.length>2?'18':'22');e.replaceChildren();lines.forEach((s,i)=>{const t=document.createElementNS('http://www.w3.org/2000/svg','tspan');t.setAttribute('x','0');t.setAttribute('dy',i?'22':'0');t.textContent=s;e.append(t);});}
 function stringAction(b){const c=cases[1];options.onCaption?.('METİNLERİ BİRLEŞTİRELİM · '+(b+1)+' / 7',c.words[b]);code(c.code[b]);if(b>0)c.vars.forEach((_,i)=>instant('input'+i,{a:1}));
 if(b===0){c.vars.forEach((_,i)=>move('input'+i,{a:1},550,i*140));}
 if(b===1||b===2){const i=b-1;instant('read'+i,{a:1});move('read'+i,{y:70},900);changeValue('input'+i,c.vars[i][2]);}
 if(b===3){c.vars.forEach((_,i)=>instant('read'+i,{a:0}));const formulaNode=host.querySelector('[data-box="formula"] text');formulaNode.textContent=c.formula;formulaNode.setAttribute('font-size',Math.min(14,850/Math.max(1,c.formula.length)*1.6));}
 if(b===4){c.vars.forEach((_,i)=>{instant('copy'+i,{a:1});move('copy'+i,{x:435+i*130,y:170,s:.72},1100,i*200);});}
 if(b===5){c.vars.forEach((_,i)=>instant('copy'+i,{a:0}));changeValue('result',c.result);move('result',{s:1.08},850);}
 if(b===6){instant('out',{a:1});move('out',{x:845,y:265,s:1},1000);consoleValue([c.result]);move('result',{s:1},700);}
 }
 function action(n,b){const c=cases[n];if(b>0)c.vars.forEach((_,i)=>instant('input'+i,{a:1}));options.onCaption?.('VAKA 8 / HESABI KURALIM',c.words[b]);code(c.code[b]);if(b===0){c.vars.forEach((_,i)=>move('input'+i,{a:1,s:1},550,i*140));}
  if(b===1){c.vars.forEach((v,i)=>{instant('read'+i,{a:1});move('read'+i,{y:70},900,i*100);changeValue('input'+i,v[2]);});}
  if(b===2){c.vars.forEach((v,i)=>{instant('read'+i,{a:0});instant('copy'+i,{a:1});move('copy'+i,{x:440+i*60,y:170,s:.72},950,i*120);});host.querySelector('[data-box="formula"] text').textContent=c.formula;changeValue('result',c.result);move('result',{s:1.08},850);}
  if(b===3){c.vars.forEach((_,i)=>instant('copy'+i,{a:0}));instant('out',{a:1});move('out',{x:845,y:265,s:1},950);consoleValue(c.output||[c.result]);move('result',{s:1},700);}
 }
 function schedule(){clearTimeout(timer);if(!paused&&!reduced&&beat<steps.length-1)timer=setTimeout(()=>{beat++;run();},remaining);}
 function run(){remaining=3600;started=performance.now();steps[beat]?.();options.onBeat?.(beat,steps.length);options.onPlay?.(!paused);schedule();if(beat===steps.length-1)options.onEnd?.();}
 function start(sequence){stop();steps=sequence;beat=0;paused=reduced;pausedAt=performance.now();run();}
 function lesson(n){index=n;trace=null;draw(n);start(cases[n].words.map((_,b)=>()=>action(n,b)));}
 function showTrace(rows){trace=rows;start(rows.map(row=>()=>{nodes={};let body=text(500,20,'SENİN KODUN · DEĞİŞKEN BELLEĞİ',12,'#acbe95');const entries=Object.entries(row.variables).slice(0,8);entries.forEach(([name,value],i)=>{body+=group('trace'+i,170+(i%4)*220,90+Math.floor(i/4)*105,box('değer',name,value),0);});render(body);entries.forEach((_,i)=>move('trace'+i,{a:1},500,i*90));code('Satır '+row.line+' · '+row.action+': '+row.value);options.onCaption?.('SENİN KODUN / SATIR '+row.line,row.action+': '+row.value);}));}
 return {lesson,intro:()=>lesson(0),showTrace,next(){if(beat<steps.length-1){clearTimeout(timer);beat++;run();}},pause(){if(paused)return;paused=true;pausedAt=performance.now();remaining=Math.max(0,remaining-(pausedAt-started));clearTimeout(timer);cancelAnimationFrame(raf);raf=null;options.onPlay?.(false);},play(){if(!paused)return;const now=performance.now(),gap=now-pausedAt;motions.forEach(m=>m.start+=gap);paused=false;started=now;if(motions.length)raf=requestAnimationFrame(tick);options.onPlay?.(true);schedule();},replay(){trace?showTrace(trace):lesson(index);},setReduced(v){reduced=v;if(v){clearTimeout(timer);motions.forEach(m=>{Object.assign(nodes[m.id],m.to);sync(m.id);});motions=[];cancelAnimationFrame(raf);raf=null;}},resolve(value){clearTimeout(timer);consoleValue(String(value).split(' / '));code('✓ Kodun farklı girdilerle kontrol edildi.');},destroy:stop,get paused(){return paused;}};
}
g.Case018Film={mount};
})(window);
