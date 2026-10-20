(function(g){
'use strict';
const single=g.CWriting.structure,double='struct node {\n    int data;\n    struct node *prev;\n    struct node *next;\n};';
const specs=[
 ["ikiz-bilet","Öncelikli iki hasta","","Hasta kabul","#78b7ed","Hastaların kayıt numaraları tek yönlü bağlı listede tutuluyor. Kabul görevlisi deger ve deger + 1 numaralı iki hastayı listenin önüne alacak. İlk sırada deger, ikinci sırada deger + 1 olsun; eski hastaların sırası değişmesin. İki yeni düğüm ayır. Bellek ayrılamazsa eski listeyi koru.",
 'struct node *oncelikliKayitEkle(struct node *head, int deger)',
 `struct node *oncelikliKayitEkle(struct node *head, int deger) {
    struct node *a = malloc(sizeof *a);
    if (a == NULL) return head;
    struct node *b = malloc(sizeof *b);
    if (b == NULL) { free(a); return head; }
    a->data = deger;
    b->data = deger + 1;
    a->next = b;
    b->next = head;
    return a;
 }`,[{a:[],value:7,out:[7,8]},{a:[20,30],value:4,out:[4,5,20,30]},{a:[4],value:4,out:[4,5,4]}],
 ['İki yeni düğüm ayır; ikinci ayırma başarısızsa ilkini free et.','İlk yeni düğüm ikinciye, ikinci eski head’e bağlanmalı.','Yeni baş deger değerini taşıyan düğümdür.']],
 ["fener-devri","Sırasını kaçıran müşteri","","Banka sırası","#78b7ed","Bankanın müşteri sırası tek yönlü bağlı listede tutuluyor. Gişeye gelmeyen ilk müşterinin kaydını sıranın sonuna taşı. Yeni kayıt oluşturma ve müşteriyi silme; mevcut düğümü taşı. Boş veya tek müşterili sıra değişmesin.",
 'struct node *sirayiDevret(struct node *head)',
 `struct node *sirayiDevret(struct node *head) {
    if (head == NULL || head->next == NULL) return head;
    struct node *ilk = head;
    struct node *son = head;
    while (son->next != NULL) son = son->next;
    head = head->next;
    son->next = ilk;
    ilk->next = NULL;
    return head;
 }`,[{a:[],out:[]},{a:[5],out:[5]},{a:[8,3],out:[3,8]},{a:[10,20,30,40],out:[20,30,40,10]}],
 ['Önce boş ve tek düğümlü durumu ayır.','Eski ilk düğümü sakla, sonra son düğümü bul.','Başı ilerlet; sonu eski ilke bağla ve eski ilkin next alanını NULL yap.']],
 ["iki-muhur","İptal edilen iki gönderi","","Kargo listesi","#78b7ed","Kargo aracının teslimat sırası tek yönlü bağlı listede tutuluyor. İptal edilen ilk iki gönderinin düğümünü listeden çıkar ve belleklerini bırak. Kalan gönderilerin sırası değişmesin. Liste iki kayıttan kısaysa yalnızca var olan kayıtları sil.",
 'struct node *iptalGonderileriSil(struct node *head)',
 `struct node *iptalGonderileriSil(struct node *head) {
    for (int i = 0; i < 2 && head != NULL; i++) {
        struct node *eski = head;
        head = head->next;
        free(eski);
    }
    return head;
 }`,[{a:[],out:[]},{a:[9],out:[]},{a:[9,8],out:[]},{a:[9,8,7,6],out:[7,6]}],
 ['İlk düğüm silme işlemini en fazla iki kez yap.','Her turda head NULL mı kontrol et.','Devam adresini free işleminden önce head’e aktar.']],
 ["radyo-parazit","Hatalı sınav kaydı","","Sınav salonu","#78b7ed","Sınav giriş kayıtları tek yönlü bağlı listede. hedef numarasının ilk görüldüğü kayıt geçerli, onun hemen arkasındaki kayıt hatalı. Yalnızca bu sonraki düğümü sil; hedef kaydı koru. Hedef bulunmazsa veya zaten son kayıtsa liste değişmesin.",
 'struct node *hataliKaydiSil(struct node *head, int hedef)',
 `struct node *hataliKaydiSil(struct node *head, int hedef) {
    struct node *p = head;
    while (p != NULL && p->data != hedef) p = p->next;
    if (p == NULL || p->next == NULL) return head;
    struct node *eski = p->next;
    p->next = eski->next;
    free(eski);
    return head;
 }`,[{a:[],value:8,out:[]},{a:[4,8,12,16],value:8,out:[4,8,16]},{a:[8,8,3],value:8,out:[8,3]},{a:[4,8],value:8,out:[4,8]},{a:[4,8],value:99,out:[4,8]}],
 ['Hedefin kendisini silmiyoruz; onun next düğümünü arıyoruz.','Hedef bulunmadığında veya sonda olduğunda değişiklik yapma.','p->next = eski->next bağlantısından sonra free(eski) yap.']],
 ["liman-konvoy","İki şubenin siparişleri","","Sipariş aktarımı","#78b7ed","Birinci ve ikinci şubenin siparişleri iki ayrı tek yönlü bağlı listede tutuluyor. Birinci listeyi ikinci listenin sonuna bağla; sonuç ikinci listenin başından başlasın. Şubelerin kendi içindeki sırayı koru. Yeni düğüm ayırma, kayıt silme ve sıralama yapma. Listeler boş olabilir.",
 'struct node *siparisleriBirlestir(struct node *head1, struct node *head2)',
 `struct node *siparisleriBirlestir(struct node *head1, struct node *head2) {
    if (head2 == NULL) return head1;
    struct node *p = head2;
    while (p->next != NULL) p = p->next;
    p->next = head1;
    return head2;
 }`,[{a:[1,2],b:[7,8],out:[7,8,1,2]},{a:[],b:[7],out:[7]},{a:[1],b:[],out:[1]},{a:[],b:[],out:[]}],
 ['Sonuç ikinci listenin başından başlayacak.','İkinci liste boşsa birinci başı döndür.','İkinci listenin son next alanına head1 yaz.']],
 ["muzayede-qr","Müzayedede hatalı QR kaydı","","Müzayede","#78b7ed","Bir müzayedede 8 eserin QR numarası tek yönlü bağlı listede tutuluyor. Baştan 1 diye sayıldığında 6. QR kaydı hatalı. Yalnızca bu düğümü çıkar ve belleğini bırak; diğer yedi kaydın sırası değişmesin. QR numarası 6 olanı arama. Fonksiyon başka uzunluklarla da çalışsın; altıdan az kayıt varsa listeyi değiştirme.",
 'struct node *hataliQrSil(struct node *head)',
 `struct node *hataliQrSil(struct node *head) {
    struct node *p = head;
    for (int i = 1; i < 5 && p != NULL; i++) p = p->next;
    if (p == NULL || p->next == NULL) return head;
    struct node *eski = p->next;
    p->next = eski->next;
    free(eski);
    return head;
 }`,[{a:[101,104,108,112,115,119,123,128],out:[101,104,108,112,115,123,128]},{a:[],out:[]},{a:[6,12,18,24,30],out:[6,12,18,24,30]},{a:[6,12,18,24,30,36],out:[6,12,18,24,30]},{a:[6,12,18,24,30,36,42,48],out:[6,12,18,24,30,42,48]}],
 ['Altıncı kaydı silmek için önce beşinci kaydın üzerinde dur.','head ilk kayıttır; beşinciye ulaşmak için dört kez next ile ilerle.','Beşinci kaydın next alanına altıncının next adresini yaz; ardından altıncıyı free et.']],
 ["sera-kapanis","Kapanan kurs kontenjanı","","Kurs kaydı","#78b7ed","Başvurular tek yönlü bağlı listede başvuru sırasına göre tutuluyor. hedef numarasının ilk görüldüğü kayıt ve öncesindeki kayıtlar kalsın. Bu kaydın arkasındaki bütün düğümleri sil ve belleklerini bırak. Hedef bulunmazsa listeyi koru.",
 'struct node *kayitlariSinirla(struct node *head, int hedef)',
 `struct node *kayitlariSinirla(struct node *head, int hedef) {
    struct node *p = head;
    while (p != NULL && p->data != hedef) p = p->next;
    if (p == NULL) return head;
    struct node *sil = p->next;
    p->next = NULL;
    while (sil != NULL) {
        struct node *sonraki = sil->next;
        free(sil);
        sil = sonraki;
    }
    return head;
 }`,[{a:[],value:8,out:[]},{a:[4,8,12,16],value:8,out:[4,8]},{a:[8,4,8],value:8,out:[8]},{a:[4,8],value:8,out:[4,8]},{a:[4,8],value:99,out:[4,8]}],
 ['Önce hedefi ara; yoksa dön.','Hedefin next alanını NULL yapmadan önce devam adresini sakla.','Kalan zinciri free ederken her tur sonraki adresi önce al.']],
 ["uzay-kapsul","Otoparkta ek araç kaydı","","Otopark girişi","#78b7ed","Otopark giriş sırası tek yönlü bağlı listede. deger plakalı aracın yeni düğümünü ilk kaydın hemen sonrasına ekle. Eski ikinci araç ve devamı yerinde kalsın. Liste boşsa yeni araç ilk kayıt olsun. Bellek ayrılamazsa liste değişmesin.",
 'struct node *aracEkle(struct node *head, int deger)',
 `struct node *aracEkle(struct node *head, int deger) {
    struct node *yeni = malloc(sizeof *yeni);
    if (yeni == NULL) return head;
    yeni->data = deger;
    if (head == NULL) { yeni->next = NULL; return yeni; }
    yeni->next = head->next;
    head->next = yeni;
    return head;
 }`,[{a:[],value:7,out:[7]},{a:[10],value:7,out:[10,7]},{a:[10,20,30],value:7,out:[10,7,20,30]}],
 ['Bir düğüm ayır ve NULL sonucunu kontrol et.','Yeni düğümün next alanında eski ikinci düğümün adresini koru.','Sonra head->next alanını yeni düğüme bağla.']],
 ["otel-iptal","İptal edilen yazdırma işi","","Yazıcı kuyruğu","#78b7ed","Yazdırma işleri tek yönlü bağlı listede tutuluyor. İlk düğümün iş numarası hedef ile eşleşiyorsa bu düğümü sil ve belleğini bırak. Eşleşmiyorsa diğer işlerde arama yapma; listeyi aynen döndür. Boş kuyruk güvenle ele alınsın.",
 'struct node *isiIptalEt(struct node *head, int hedef)',
 `struct node *isiIptalEt(struct node *head, int hedef) {
    if (head == NULL || head->data != hedef) return head;
    struct node *eski = head;
    head = head->next;
    free(eski);
    return head;
 }`,[{a:[],value:7,out:[]},{a:[7],value:7,out:[]},{a:[7,9,7],value:7,out:[9,7]},{a:[9,7],value:7,out:[9,7]}],
 ['Bu soruda dolaşma döngüsü gerekmiyor.','Önce boş listeyi, sonra ilk data değerini kontrol et.','Eşleşmede başı ilerlet; eski başın belleğini bırak.']],
 ["firin-son","Son paketin yanlış etiketi","","Paketleme hattı","#78b7ed","Paketler tek yönlü bağlı listede. Eski son düğümü listeden çıkarıp free et ve deger ürün numarasını taşıyan yeni düğümü sona ekle. Yalnızca eski düğümün data alanını değiştirme. Boş listede tek düğüm oluştur. Bellek ayrılamazsa eski liste korunsun.",
 'struct node *sonPaketiDegistir(struct node *head, int deger)',
 `struct node *sonPaketiDegistir(struct node *head, int deger) {
    struct node *yeni = malloc(sizeof *yeni);
    if (yeni == NULL) return head;
    yeni->data = deger;
    yeni->next = NULL;
    if (head == NULL) return yeni;
    if (head->next == NULL) { free(head); return yeni; }
    struct node *p = head;
    while (p->next->next != NULL) p = p->next;
    free(p->next);
    p->next = yeni;
    return head;
 }`,[{a:[],value:7,out:[7]},{a:[10],value:7,out:[7]},{a:[10,20,30],value:7,out:[10,20,7]}],
 ['Bellek başarısızlığında eski zinciri korumak için önce yeni düğümü ayır.','Boş ve tek düğümlü durumu ayrı ele al.','Sondan önceki düğümü bul; eski sonu bırak ve yeni sonu bağla.']],
 ["metro-ilk","Geçersiz ilk sayfa","","Tarayıcı geçmişi","#78b7ed","Sayfa kayıtları çift bağlı doğrusal listede tutuluyor. İlk düğümü sil ve belleğini bırak. Yeni ilk kayıt varsa prev alanı NULL olsun; sonraki sayfaların sırası korunsun. Boş ve tek kayıtlı geçmişte de geçerli bir baş adresi döndür.",
 'struct node *ilkSayfayiSil(struct node *head)',
 `struct node *ilkSayfayiSil(struct node *head) {
    if (head == NULL) return NULL;
    struct node *eski = head;
    head = head->next;
    if (head != NULL) head->prev = NULL;
    free(eski);
    return head;
 }`,[{a:[],out:[]},{a:[6],out:[]},{a:[6,12,18],out:[12,18]}],
 ['İlk düğümün adresini sakla ve head’i ilerlet.','Yeni head NULL değilse prev alanını NULL yap.','Eski ilk düğümü free et.']],
 ["saat-devir","Acil reçeteyi öne alma","","Eczane sırası","#78b7ed","Reçete sırası çift bağlı doğrusal listede tutuluyor. Son düğümü başa taşı; yeni düğüm ayırma ve var olan bir düğümü free etme. Diğer reçeteler aynı sırada kalsın. next ve prev bağlantılarını iki yönde düzelt. Boş veya tek kayıtlı sıra değişmesin.",
 'struct node *aciliOneAl(struct node *head)',
 `struct node *aciliOneAl(struct node *head) {
    if (head == NULL || head->next == NULL) return head;
    struct node *son = head;
    while (son->next != NULL) son = son->next;
    son->prev->next = NULL;
    son->prev = NULL;
    son->next = head;
    head->prev = son;
    return son;
 }`,[{a:[],out:[]},{a:[4],out:[4]},{a:[4,8],out:[8,4]},{a:[4,8,12,16],out:[16,4,8,12]}],
 ['Boş ve tek düğümlü liste değişmez.','Sonu bul; eski öncekinin next alanını NULL yap.','Sonun prev alanı NULL, next alanı eski head olur; eski head’in prev alanını da düzelt.']],
 ["tiyatro-koltuk","Eksik koltuk kaydı","","Sinema rezervasyonu","#78b7ed","Rezervasyonlar çift bağlı doğrusal listede. deger numaralı rezervasyon için yeni düğüm oluşturup ilk kaydın hemen sonrasına ekle. Eski ikinci kayıt varsa onun prev bağlantısını da düzelt. Liste boşsa yeni kayıt baş olsun. Bellek ayrılamazsa mevcut sıra korunsun.",
 'struct node *rezervasyonEkle(struct node *head, int deger)',
 `struct node *rezervasyonEkle(struct node *head, int deger) {
    struct node *yeni = malloc(sizeof *yeni);
    if (yeni == NULL) return head;
    yeni->data = deger;
    yeni->prev = head;
    if (head == NULL) { yeni->next = NULL; return yeni; }
    yeni->next = head->next;
    if (head->next != NULL) head->next->prev = yeni;
    head->next = yeni;
    return head;
 }`,[{a:[],value:7,out:[7]},{a:[10],value:7,out:[10,7]},{a:[10,20,30],value:7,out:[10,7,20,30]}],
 ['Yeni düğümün prev alanı eski ilk düğümdür; liste boşsa NULL olur.','Yeni düğümün next alanına eski ikincinin adresini yaz.','Eski ikinci varsa onun prev alanını, ardından head->next alanını güncelle.']],
 ["dag-ucuncu","Servis dışı üçüncü makine","","Atölye hattı","#78b7ed","Makine kayıtları çift bağlı doğrusal listede tutuluyor. Baştan 1 diye sayarak üçüncü düğümü çıkar ve belleğini bırak. Önceki ve sonraki makineler birbirine hem next hem prev ile bağlansın. Üçten az kayıt varsa liste değişmesin; makine numarası 3 olanı arama.",
 'struct node *ucuncuMakineyiSil(struct node *head)',
 `struct node *ucuncuMakineyiSil(struct node *head) {
    if (head == NULL || head->next == NULL) return head;
    struct node *p = head->next->next;
    if (p == NULL) return head;
    p->prev->next = p->next;
    if (p->next != NULL) p->next->prev = p->prev;
    free(p);
    return head;
 }`,[{a:[],out:[]},{a:[3],out:[3]},{a:[3,6],out:[3,6]},{a:[3,6,9],out:[3,6]},{a:[3,6,9,12],out:[3,6,12]}],
 ['Üçüncü düğümü data değerine göre değil konuma göre bul.','Önceki komşunun next alanı p->next olmalı.','Sonraki komşu varsa prev alanını da düzelt; sonra p’yi free et.']],
 ["arsiv-uclar","Deneme duraklarını kaldırma","","Dağıtım rotası","#78b7ed","Duraklar çift bağlı doğrusal listede. İlk ve son düğümleri çıkarıp belleklerini bırak, ortadaki durakların sırasını koru. Boş listede işlem yapma. Tek düğümü yalnızca bir kez sil; iki düğümlü liste boşalsın. Yeni başın prev ve yeni sonun next alanları NULL olsun.",
 'struct node *denemeDuraklariniSil(struct node *head)',
 `struct node *denemeDuraklariniSil(struct node *head) {
    if (head == NULL) return NULL;
    struct node *eski = head;
    head = head->next;
    free(eski);
    if (head == NULL) return NULL;
    head->prev = NULL;
    struct node *son = head;
    while (son->next != NULL) son = son->next;
    if (son->prev == NULL) { free(son); return NULL; }
    son->prev->next = NULL;
    free(son);
    return head;
 }`,[{a:[],out:[]},{a:[5],out:[]},{a:[5,10],out:[]},{a:[5,10,15],out:[10]},{a:[5,10,15,20,25],out:[10,15,20]}],
 ['Önce ilk düğümü güvenle sil. Boşaldıysa dön.','Yeni başın prev alanını NULL yap ve kalan listenin sonunu bul.','Kalan liste tek düğümse onu da sil; değilse sondan önceki next alanını NULL yap.']]
];
const palettes=[{"id":"blue","name":"Mavi","hue":212},{"id":"forest","name":"Yeşil","hue":142},{"id":"orange","name":"Turuncu","hue":26},{"id":"violet","name":"Mor","hue":270},{"id":"teal","name":"Turkuaz","hue":173},{"id":"burgundy","name":"Bordo","hue":344},{"id":"amber","name":"Kehribar","hue":39},{"id":"cyan","name":"Camgöbeği","hue":190},{"id":"indigo","name":"İndigo","hue":239},{"id":"copper","name":"Bakır","hue":18},{"id":"petrol","name":"Petrol","hue":201},{"id":"olive","name":"Zeytin","hue":75},{"id":"rose","name":"Gül","hue":321},{"id":"terracotta","name":"Kiremit","hue":7},{"id":"plum","name":"Erik","hue":291}];
g.CFinalLessons=specs.map((s,i)=>{
 const [id,title,unusedIcon,theme,color,prompt,signature,code,tests,hints]=s,doubly=i>=10;const context=["Hasta kabul sırasında iki acil kayıt, mevcut bekleme listesinin önüne alınacak.","Bankada ilk sıradaki müşteri çağrıldığında gişeye gelmedi.","Dağıtım listesinin ilk iki gönderisi, araç çıkmadan önce iptal edildi.","Gözetmen bir öğrenci numarasını doğruladı; hemen sonraki taramanın hatalı olduğunu gördü.","İkinci şubenin siparişleri daha önce alındığı için önce hazırlanacak.","Müzayededeki sekiz eserin QR kayıtları sırayla tutuluyor. Altıncı kayıt hatalı taranmış.","Kurs kayıtları belirli bir başvuru numarasında kapatıldı; sonraki başvurular iptal edilecek.","İlk aracın hemen ardından girmesi gereken bir araç, listeye alınmamış.","Kullanıcı bir işi iptal etti; yazıcı yalnızca sıranın başındaki işi değiştirebiliyor.","Paketleme sırasının son kaydı yanlış ürüne ait; doğru ürün için yeni kayıt oluşturulacak.","Tarayıcı geçmişindeki ilk adres artık geçerli değil; gezinme iki yönde de devam edebilmeli.","Eczane sırasının sonundaki reçete acil olarak işaretlendi.","Gişede ilk müşteriden sonra alınan bir rezervasyonun kaydı unutulmuş.","Atölyedeki makineler işlem sırasına göre bağlı; üçüncü makine geçici olarak devre dışı bırakılacak.","Dağıtım rotasının ilk ve son durağı test için eklenmiş; araç yalnızca gerçek adreslere gidecek."][i];
 const task={id:'final-'+id,title,signature,code,tests,prompt,doubly,structure:doubly?double:single,group:doubly?'Çift yönlü final':'Tek yönlü final',story:[title,context,color],context,theme,final:true,
  call:signature.match(/\*(\w+)\(/)[1]+(tests.some(t=>t.b)?'(head, ikinci)':tests.some(t=>t.value!==undefined)?'(head, deger)':'(head)'),
  hints,plan:hints.map((text,j)=>['Adım '+(j+1),text]),rubric:['İstenen kayıt sırası korunsun; boş ve kısa listeler güvenli olsun.',doubly?'next ve prev bağlantıları iki yönde tutarlı olsun.':'Son düğümün next alanı NULL olsun.','Kopan düğümler free edilsin; serbest bırakılan adres okunmasın.']};
 task.palette=palettes[i];task.legacyFunction=["biletEkle","nobetDevret","muhurleriSil","parazitiSil","konvoyBirlestir","hataliQrSil","serayiKapat","kapsulEkle","rezervasyonIptal","tepsiDegistir","ilkVagonuSil","sonuBasaTasi","koltukEkle","duragiSil","uclariSil"][i];task.fileName=signature.match(/\*(\w+)\(/)[1]+'.c';
 if(id==='liman-konvoy')task.baseId='birlestir';
 const annotation=code.split('\n').map((line,j)=>({line,why:j===0?'Fonksiyon liste başını ve varsa işlem değerini alır; güncel baş adresini döndürür.':line.includes('for (')?'Sayaç ile gezici birlikte ilerler. Döngü koşulu işlem sayısını sınırlar; NULL kontrolü kısa listelerde durmayı sağlar.':line.includes('malloc(')?'Bir düğüm için bellek ayır; dönen adresi soldaki işaretçide sakla. Bellek ayrılamazsa sonuç NULL olur.':g.CCaseTools.explain(line,j,task)}));
 return {task,annotation,variant:id==='muzayede-qr'?tests[0]:tests.reduce((a,b)=>a.a.length+(a.b?.length||0)>b.a.length+(b.b?.length||0)?a:b),vocabulary:[['head','İlk düğümün adresi; boş listede NULL.'],['data ve next','data sayı, next sonraki düğümün adresidir.'],...(doubly?[['prev','Önceki düğümün adresi; başta NULL.']]:[]),['malloc / free','Alan ayır; bağlantıları koruduktan sonra gereken düğümü bırak.']],kicker:(doubly?'ÇİFT YÖNLÜ':'TEK YÖNLÜ')+' FİNAL · SORU '+(doubly?i-9:i+1)+' / '+(doubly?5:10)};
});
})(window);
