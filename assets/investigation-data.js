(function(g){'use strict';
const hole=(answer,...wrong)=>({answer,choices:[answer,...wrong]});
const suspects=[
 {id:'ada',name:'Ada Yalın',role:'Restoratör',initial:'A',color:'#b9987e',statement:'Kontrol için uğradım. On bire on kala ayrıldım.',activity:'Restorasyon teslimi',age:32,card:'R',raw:38,stay:4,distance:900,speed:90,mask:6,km:8,stamp:'482',count:17},
 {id:'bora',name:'Bora Keskin',role:'Sanat taşıyıcısı',initial:'B',color:'#93a8ac',statement:'Yük kapısındaydım. Galeriye hiç gitmedim.',activity:'Sandık teslimi',age:41,card:'T',raw:41,stay:10,distance:1200,speed:100,mask:6,km:10,stamp:'48X',count:23},
 {id:'cem',name:'Cem Aras',role:'Güvenlik teknisyeni',initial:'C',color:'#b5ac8d',statement:'Kartımı okuttum, teknik odaya geçtim. Eseri görmedim.',activity:'Sensör bakımı',age:29,card:'G',raw:40,stay:12,distance:360,speed:120,mask:6,km:12,stamp:'486',count:31},
 {id:'deniz',name:'Deniz Sarp',role:'Gece fotoğrafçısı',initial:'D',color:'#b3a1bd',statement:'Sergi için fotoğraf çekecektim. Girişte beklettiler.',activity:'Katalog çekimi',age:35,card:'F',raw:47,stay:7,distance:700,speed:100,mask:6,km:6,stamp:'488',count:12},
 {id:'ece',name:'Ece Demir',role:'Müzayede danışmanı',initial:'E',color:'#90aa99',statement:'Fuayede bir görüşmem vardı. Üst kata çıkmadım.',activity:'Müşteri görüşmesi',age:38,card:'M',raw:42,stay:9,distance:600,speed:100,mask:2,km:9,stamp:'490',count:26}
];
const task=(id,title,place,topic,message,evidence,rows,input,clue,meaning)=>({id,title,place,topic,message,evidence,rows,input,clue,meaning});
const tasks=[
task('identity','Beş kişinin izi','MÜZE · ANA GİRİŞ','string · char · byte · bool',
'Yardımcım, gece girişlerini topladım. Beş kişi de içerideymiş. İsim, kart sınıfı, yaş ve giriş onayını ayrı kutularda tut. Türleri karıştırırsak kayıtları yanlış okuruz.',
'Turnike kaydı dört satır gönderiyor: ad, tek harfli kart sınıfı, yaş, onay. Bu ilk kayıt beş kişinin de müzeye girişini doğrular.',[
hole('string ad = Console.ReadLine();','char ad = Console.ReadLine();','int ad = Console.ReadLine();'),
hole('char kart = Convert.ToChar(Console.ReadLine());','string kart = Convert.ToInt32(Console.ReadLine());','char kart = "G";'),
hole('byte yas = Convert.ToByte(Console.ReadLine());','sbyte yas = 300;','byte yas = Console.ReadLine();'),
hole('bool giris = bool.Parse(Console.ReadLine());','bool giris = "true";','string giris = bool.Parse(Console.ReadLine());'),
'Console.WriteLine(ad + " | " + kart + " | " + yas + " | " + giris);'],s=>[s.name,s.card,s.age,'true'],
'Beş kişinin de giriş kaydı gerçek. Meslek ve yaş bir suç kanıtı değil; zaman ve konum kayıtlarına geçmeliyiz.',()=> 'Giriş kaydı doğrulandı'),
task('archive','Kayıtların parmak izi','GÜVENLİK · SUNUCU ODASI','sbyte · short · ushort · uint · long · ulong',
'Sunucunun iki kaydı birbirine çok benziyor. Büyük kimlik numarasının son hanesini kaybetme. Sıcaklık farkı negatif, port numarası ise 443; küçük bir kutu burada yetmez.',
'Kaynak: kat −2 · sıcaklık farkı −5 · port 443 · paket 4.000.000.000 · zaman damgası 1.792.102.400.000 · cihaz kimliği 9.007.199.254.740.993. İki son sayı farklı tür ve büyüklük gerektiriyor.',[
hole('short kat = -2;','ushort kat = -2;','byte kat = -2;'),hole('sbyte fark = -5;','byte fark = -5;','sbyte fark = 255;'),
hole('ushort port = 443;','byte port = 443;','sbyte port = 443;'),hole('uint paket = 4000000000U;','int paket = 4000000000U;','short paket = 4000000000U;'),
hole('long zaman = 1792102400000L;','int zaman = 1792102400000L;','long zaman = "1792102400000";'),
hole('ulong cihaz = 9007199254740993UL;','uint cihaz = 9007199254740993UL;','ulong cihaz = 9007199254740992UL;'),
'Console.WriteLine(kat + " | " + fark + " | " + port);','Console.WriteLine(paket);','Console.WriteLine(zaman);','Console.WriteLine(cihaz);'],()=>[],
'Kayıtlar aynı güvenlik cihazından geliyor. Cihaz kimliğinin son hanesi 3; yuvarlanmış kopya 2 ile bitiyordu. Asıl kayıtları ayırdık.',()=> 'Asıl sunucu kaydı'),
task('route','Galeriye kaç dakika?','MÜZE · SERVİS KORİDORU','float · double · bölme · açık dönüşüm',
'Girişler farklı kapılardan yapılmış. Sana her kapının galeriye uzaklığını ve yürüyüş hızını gönderiyorum. Kameraya göre herkes kendi girişinden kesintisiz yürümüş. En erken ne zaman galeriye ulaşabilirler?',
'İlk giriş haritada ölçülen birim, ikinci giriş metre/dakika. Bir harita birimi 1.5f metre. Önce gerçek mesafeyi, sonra yol süresini hesapla. Sonucu tam dakika raporuna dönüştür.',[
hole('float olcek = 1.5f;','float olcek = 1.5;','int olcek = 1.5f;'),
hole('double mesafe = double.Parse(Console.ReadLine());','int mesafe = Console.ReadLine();','byte mesafe = Convert.ToByte(Console.ReadLine());'),
'double hiz = double.Parse(Console.ReadLine());',hole('double sure = mesafe * olcek / hiz;','double sure = mesafe / hiz;','double sure = mesafe * hiz / olcek;'),
hole('int dakika = (int)sure;','int dakika = sure;','int dakika = (int)mesafe / 60;'),
'Console.WriteLine(dakika);'],s=>[s.distance/1.5,s.speed],
'Girişte görünmek, galeriye ulaşmak demek değil. Bulduğun süreler olay çizelgesine eklendi.',out=>out[0]+' dakika yol'),
task('clock','Yedi dakikalık sapma','GÜVENLİK · KAMERA KAYDI','Convert · + · * · / · % · parantez',
'Kamera yedi dakika geriymiş. Saatleri düzeltip tek bir dakika eksenine taşı. Sonra çıkış saatini bul. Eserin alındığı aralık 22.50–22.56.',
'Girişler: kamera saati, kamera dakikası, gecikme, içeride kalış süresi. Zamanı saat × 60 + dakika olarak tut. Sonuç satırları: giriş dakikası, çıkış dakikası, okunur saat.',[
'int saat = Convert.ToInt32(Console.ReadLine());','int dakika = Convert.ToInt32(Console.ReadLine());','int gecikme = Convert.ToInt32(Console.ReadLine());','int kalis = Convert.ToInt32(Console.ReadLine());',
hole('int giris = saat * 60 + dakika + gecikme;','int giris = saat * (60 + dakika) + gecikme;','int giris = saat * 60 + dakika - gecikme;'),
hole('int cikis = giris + kalis;','int cikis = giris - kalis;','int cikis = kalis;'),
'Console.WriteLine(giris);','Console.WriteLine(cikis);',hole('Console.WriteLine(giris / 60 + ":" + giris % 60);','Console.WriteLine(giris % 60 + ":" + giris / 60);','Console.WriteLine(giris / 60 + giris % 60);')],s=>[22,s.raw,7,s.stay],
'Saatler düzeltildi. Ada 22.49’da çıkmış. Diğerleri için yalnızca binada bulunmak yeterli kanıt değil.',out=>{const n=Number(out[1]);return out[2]+'–'+Math.floor(n/60)+':'+String(n%60).padStart(2,'0');}),
task('money','Üç parçalı taksi fişi','RIHTIM · TAKSİ DURAĞI','decimal · öncelik · -= · *= · /= · +=',
'Fişin yalnızca son taksidi okunuyor. Açılış 27,50; kilometre 5 lira. Beş lira kupon düşülmüş, yüzde yirmi vergi eklenmiş ve üç takside ayrılmış. Sıralamayı koru. Fişler giriş kapılarını doğruluyor.',
'Girdi kilometre. Fiş kuralı: açılış + kilometre × birim ücret → kupon → vergi → üç eşit taksit. Para için decimal ve m soneki kullan.',[
'decimal km = decimal.Parse(Console.ReadLine());',hole('decimal tutar = 27.50m + km * 5m;','decimal tutar = (27.50m + km) * 5m;','decimal tutar = 27.50 + km * 5;'),
hole('tutar -= 5m;','tutar += 5m;','tutar = 5m;'),hole('tutar *= 1.20m;','tutar += 1.20m;','tutar *= 0.20m;'),
hole('tutar /= 3m;','tutar *= 3m;','tutar -= 3m;'),'decimal rapor = 0m;',hole('rapor += tutar;','rapor -= tutar;','rapor = km;'),
'Console.WriteLine(rapor.ToString("F2"));'],s=>[s.km],
'Fişler doğrulandı. Taksi ücretleri farklı kapılara yapılan yolculuklarla uyuşuyor. Artık koridor mesafelerini güvenle kullanabiliriz.',out=>out[0]+' TL / taksit'),
task('stamp','Bozuk mühür','ARŞİV · TESLİM MASASI','TryParse · out · bool · kısa devre',
'Teslim defterinde bir mühür kodu leke yüzünden okunamıyor. Her bozuk kaydı suç delili sayamayız. Önce sayıya çevrilebildiğini kontrol et; güvenli olmayan hesap çalışmasın.',
'Girdi mühür metni. Önce int değişkeni tanımla. TryParse başarı durumunu ve sayıyı verir. Yalnızca geçerli, sıfırdan farklı değerle bölme yap.',[
'string ham = Console.ReadLine();','int numara;',hole('bool gecerli = int.TryParse(ham, out numara);','bool gecerli = int.Parse(ham);','bool gecerli = ham == "486";'),
hole('bool okunur = gecerli && numara != 0 && 1000 / numara > 0;','bool okunur = 1000 / numara > 0 && gecerli;','bool okunur = !gecerli;'),
'Console.WriteLine(gecerli);','Console.WriteLine(okunur);'],s=>[s.stamp],
'Bora’nın mühür kodu okunamıyor. Bu bir veri eksikliği; onu otomatik suçlu ya da masum yapmıyoruz. Zaman ve erişim kanıtı daha güçlü.',out=>out[0]==='True'?'Mühür okunuyor':'Eksik kayıt · hüküm yok'),
task('counter','Turnikenin iki yüzü','MÜZE · TURNİKE','postfix · prefix · ++ · --',
'Cihaz her geçişte önce eski sayacı, sonra artırılmış sayacı yazmış. Ardından servis sayacı bir azaltılmış. Eski ve yeni değeri karıştırırsak başka kişinin geçişini eşleştiririz.',
'Girdi geçiş sayacı. İlk rapor eski değer, ikinci rapor iki artış sonrası değer, üçüncü rapor bir azaltma sonrası son değer olmalı.',[
'int sayac = int.Parse(Console.ReadLine());',hole('int once = sayac++;','int once = ++sayac;','int once = sayac--;'),
hole('int sonra = ++sayac;','int sonra = sayac++;','int sonra = --sayac;'),hole('--sayac;','++sayac;','sayac += 2;'),
'Console.WriteLine(once);','Console.WriteLine(sonra);','Console.WriteLine(sayac);'],s=>[s.count],
'Sayaçlar kamera sırasıyla eşleşti. Beş girişin de zaman kayıtları doğru kişiye ait.',out=>'Geçiş '+out[0]+' → '+out[1]+' → '+out[2]),
task('access','Kapının bitleri','GALERİ · KİLİTLİ KAPI','& · | · ^ · ~ · << · >> · &=',
'Galeriye geçmek için hem koridor hem galeri yetkisi gerekli. Kartın ikinci ve üçüncü biti bunları tutuyor. Diğer işaretler bakım bayrakları. Ece’nin kartı kapıyı gerçekten açabiliyor mu?',
'Koridor biti 1 << 1, galeri biti 1 << 2. Girdi kart maskesi. İki yetkiyi birlikte ara; maskede biri varsa yeterli sayma. Sonraki satırlar bakım bayrağını açıp kaldırmanın kaydıdır.',[
'int kart = int.Parse(Console.ReadLine());',hole('int koridor = 1 << 1;','int koridor = 1 >> 1;','int koridor = 1 << 2;'),
hole('int galeri = 1 << 2;','int galeri = 1 >> 2;','int galeri = 1 << 1;'),hole('int gereken = koridor | galeri;','int gereken = koridor & galeri;','int gereken = koridor;'),
hole('bool yetki = (kart & gereken) == gereken;','bool yetki = (kart | gereken) == gereken;','bool yetki = (kart & gereken) != 0;'),
'int bakim = kart | 8;',hole('bakim &= ~8;','bakim &= 8;','bakim |= 8;'),
'int fark = bakim ^ kart;','int galeriBiti = (kart >> 2) & 1;','Console.WriteLine(yetki);','Console.WriteLine(fark);','Console.WriteLine(galeriBiti);'],s=>[s.mask],
'Ece’nin kartı koridoru açıyor; galeri yetkisi yok. Kapı kaydında zorlama ya da başka bir kartla giriş de görünmüyor.',out=>out[0]==='True'?'Galeri yetkisi var':'Galeri yetkisi yok'),
task('boxing','Etiketin içindeki tür','LABORATUVAR · KANIT TORBASI','object · is · as · char · == · !=',
'Kanıt torbasının etiketi genel bir object alanında tutulmuş. İçindeki değerin metin olup olmadığını doğrula; yanlış türü zorla metne dönüştürmek kayıt hatasını gizler.',
'Girdiler: ifade etiketi ve kart harfi. object içindeki metni is ile kontrol et, as ile güvenli al. Harf tek karakter olmalı.',[
'object etiket = Console.ReadLine();',hole('bool metinMi = etiket is string;','bool metinMi = etiket is int;','bool metinMi = etiket == null;'),
hole('string aciklama = etiket as string;','string aciklama = etiket as int;','int aciklama = (int)etiket;'),
'char sinif = Convert.ToChar(Console.ReadLine());','bool teknik = sinif == \'G\';','bool bosDegil = aciklama != null;',
'Console.WriteLine(metinMi && bosDegil);','Console.WriteLine(aciklama + " | " + sinif);','Console.WriteLine(teknik);'],s=>[s.activity,s.card],
'Torba etiketleri sağlam. Cem’in teknik personel oluşu tek başına suç kanıtı değil; yalnızca kart sınıfını doğruluyor.',out=>out[1]),
task('radio','Merkeze temiz rapor','BÜRO · TELSİZ MASASI','Write · WriteLine · ReadKey · interpolasyon',
'Sonuçları tek raporda birleştirip gönder. Onay için E tuşunu bekle. Write aynı satırda kalır; WriteLine satırı bitirir. Başlık ve değerleri yanlış birleştirme.',
'İlk giriş ad, ikinci giriş geçiş sayısı. Onay tuşu E. İlk satır “ad: N geçiş”, ikinci satır “GÖNDERİLDİ” olmalı.',[
'string ad = Console.ReadLine();','int adet = Convert.ToInt32(Console.ReadLine());',hole('Console.Write(ad + ": ");','Console.WriteLine(ad + ": ");','Console.Write(ad + adet);'),
hole('Console.WriteLine($"{adet} geçiş");','Console.WriteLine("adet geçiş");','Console.Write(adet + " geçiş");'),
'char tus = Console.ReadKey().KeyChar;',hole('Console.WriteLine(tus == \'E\' ? "GÖNDERİLDİ" : "BEKLİYOR");','Console.WriteLine(tus == "E" ? "GÖNDERİLDİ" : "BEKLİYOR");','Console.WriteLine(tus != \'E\' ? "GÖNDERİLDİ" : "BEKLİYOR");')],s=>[s.name,s.count],
'Rapor ulaştı. Nokta şimdi bütün kayıtları aynı zaman çizelgesinde karşılaştırabilir.',()=> 'Merkeze gönderildi'),
task('window','Aynı yerde, aynı anda','GALERİ · ZAMAN ÇİZELGESİ','< · > · <= · >= · && · || · ! · ternary',
'Şimdi asıl soru: galerinin yolunu bitirdiğinde olay aralığına yetişiyor mu? Olay 22.50 ile 22.56 arasında. 22.50’den önce çıkmış ya da 22.56’dan sonra ulaşmış biri bu kayıtlara göre orada olamaz.',
'Girdiler önceki kanıtlardan geliyor: gerçek giriş, çıkış, yol süresi. Galeriye varış = giriş + yol. Çıkış en az 22.50 (1370), varış en geç 22.56 (1376) olmalı. Bina içinde kalış ve yolun çıkıştan önce bitmesi de gerekli.',[
'int giris = int.Parse(Console.ReadLine());','int cikis = int.Parse(Console.ReadLine());','int yol = int.Parse(Console.ReadLine());',hole('int varis = giris + yol;','int varis = giris - yol;','int varis = cikis + yol;'),
hole('bool disarida = cikis < 1370 || varis > 1376;','bool disarida = cikis < 1370 && varis > 1376;','bool disarida = cikis > 1370 || varis < 1376;'),
hole('bool zamanUyuyor = !disarida && varis <= cikis && cikis >= giris;','bool zamanUyuyor = disarida || varis <= cikis;','bool zamanUyuyor = !disarida;'),
'Console.WriteLine(varis);',hole('Console.WriteLine(zamanUyuyor ? "UYUYOR" : "UYMUYOR");','Console.WriteLine(zamanUyuyor ? "UYMUYOR" : "UYUYOR");','Console.WriteLine("UYUYOR");')],s=>{const a=1320+s.raw+7;return[a,a+s.stay,s.distance/s.speed];},
'Zaman hesabında Cem ve Ece kalıyor. Ece’nin galeri yetkisi yoktu. Son raporda bağımsız kanıtları birleştir; yalnızca zamana bakıp hüküm verme.',out=>out[1]+' · varış '+Math.floor(Number(out[0])/60)+':'+String(Number(out[0])%60).padStart(2,'0')),
task('verdict','Parçaları birleştir','BÜRO · SONUÇ PANOSU','bütünleşik kanıt · bool · && · rapor',
'Yardımcım, tek bir şüpheli tüm koşulları sağlıyor. Zaman raporunu, kart yetkisini ve doğrulanmış turnike kaydını aynı programda birleştir. Sonra bana kimi, hangi kanıtlarla işaret ettiğini söyle.',
'Girdiler: ad, zaman uyumu, galeri yetkisi, kayıt doğrulaması. Bir şüpheliyi olayla ilişkilendirmek için üçünün de doğru olması gerekli. Bu vakada gizli geçit veya kayıtsız kart paylaşımı yok; çözüm verilen kanıtlardan çıkar.',[
'string ad = Console.ReadLine();','bool zaman = bool.Parse(Console.ReadLine());','bool yetki = bool.Parse(Console.ReadLine());','bool kayit = bool.Parse(Console.ReadLine());',
hole('bool eslesme = zaman && yetki && kayit;','bool eslesme = zaman || yetki || kayit;','bool eslesme = zaman && kayit;'),
hole('Console.WriteLine(ad + ": " + (eslesme ? "EŞLEŞİYOR" : "ELENDİ"));','Console.WriteLine(ad + ": " + (eslesme ? "ELENDİ" : "EŞLEŞİYOR"));','Console.WriteLine(ad + ": EŞLEŞİYOR");')],s=>{const a=1320+s.raw+7,v=a+s.distance/s.speed;return[s.name,String(a+s.stay>=1370&&v<=1376&&v<=a+s.stay),String((s.mask&6)===6),'true'];},
'Üç bağımsız kayıt Cem Aras’ta birleşiyor. Suçlamayı tamamlamak için doğru kişiyi ve üç belirleyici kanıtı seç.',out=>out[0])
];
const checks={route:[{input:[725,100]}],stamp:[{input:['0']},{input:['2147483648']}],access:[{input:[0]},{input:[4]},{input:[15]}],radio:[{input:['Kontrol',2],keys:['H']}],window:[{input:[1369,1372,7]},{input:[1371,1370,0]},{input:[1367,1379,9]}]};
tasks.forEach(t=>t.checks=checks[t.id]||[]);
g.NoirInvestigationData={suspects,tasks,culprit:'cem',proofs:[
 {id:'time',label:'Düzeltilmiş kamera: 22.47–22.59 arasında içeride.',correct:true},
 {id:'route',label:'360 metre / 120 metre-dakika: galeriye 22.50’de varabiliyor.',correct:true},
 {id:'access',label:'Kart maskesi 6: hem koridor hem galeri yetkisi var.',correct:true},
 {id:'job',label:'Güvenlik teknisyeni olması.',correct:false},
 {id:'stamp',label:'Bora’nın mühür kaydının bozuk olması.',correct:false},
 {id:'age',label:'Beş kişinin en genci olması.',correct:false}
]};
})(typeof window==='undefined'?globalThis:window);
