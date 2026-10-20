(function(g){
 'use strict';
 const structure='struct node {\n    int data;\n    struct node *prev;\n    struct node *next;\n};';
 const code=`struct node *ciftKaydiSil(struct node *head, int hedef) {
    struct node *temp = head;
    while (temp != NULL && temp->data != hedef) {
        temp = temp->next;
    }
    if (temp == NULL) return head;
    if (temp->prev != NULL) {
        temp->prev->next = temp->next;
    }
    if (temp->prev == NULL) {
        head = temp->next;
    }
    if (temp->next != NULL) {
        temp->next->prev = temp->prev;
    }
    free(temp);
    return head;
}`;
 const annotations=[
  'Fonksiyon çift bağlı doğrusal listenin başını ve silinecek sayıyı alır; güncel baş adresini döndürür. Çağrı: head = ciftKaydiSil(head, hedef);',
  'Gezici ilk düğümden başlar. Yeni düğüm oluşturulmaz; yalnızca adres kopyalanır.',
  'Önce temp NULL mı kontrol edilir. Geçerli ve hedef değilse aramaya devam edilir. && kısa devresi boş işaretçinin data alanının okunmasını önler.',
  'Gezici next bağlantısını izler. İlk eşleşmede durulduğu için sonraki tekrarlar korunur.',
  'Arama döngüsünün sonu.',
  'Liste boşsa veya hedef yoksa temp NULL olur. Hiçbir bağlantıya dokunmadan eski baş döner.',
  'Hedefin önceki komşusu var mı? Baş düğümde prev NULL olur; o zaman bu blok atlanır.',
  'Önceki komşunun next oku hedefi atlayıp hedefin sonrasına bağlanır. Hedef sondaysa bu alan NULL olur.',
  'İleri bağlantıyı düzeltme bloğunun sonu.',
  'Önceki düğüm yoksa silinecek düğüm head’dir.',
  'Baş, hedefin sonrasına taşınır. Tek düğüm varsa temp->next NULL olduğu için liste boşalır.',
  'Baş güncelleme bloğunun sonu.',
  'Hedefin sonraki komşusu var mı? Son düğüm silinirken bu blok atlanır.',
  'Sonraki komşunun prev oku hedefin öncesine bağlanır. Baş siliniyorsa yeni başın prev alanı NULL olur.',
  'Geri bağlantıyı düzeltme bloğunun sonu.',
  'Her iki yöndeki komşu bağlantıları düzeltildikten sonra hedefin belleği bırakılır. Bundan sonra temp üzerinden alan okunamaz.',
  'Güncel baş adresi döndürülür. Fonksiyonda ayrı bir tail tutulmaz; son düğüm next üzerinden bulunabilir.',
  'Fonksiyonun sonu.'
 ];
 g.CWritingTasks.push({
  id:'cift-deger-sil',doubly:true,structure,title:'Çift yönlü iz: doğrusal listeden sil',group:'Çift bağlı doğrusal liste',
  signature:'struct node *ciftKaydiSil(struct node *head, int hedef)',call:'ciftKaydiSil(head, deger)',code,
  prompt:'Çift bağlı doğrusal delil listesinde hedef sayının ilk eşleşmesini siliniz. Hem next hem prev bağlantılarını koruyunuz. Baş, ara, son, tek düğüm, boş liste ve bulunamayan hedef durumlarını ele alınız. Bekçi düğüm ve ayrı tail işaretçisi kullanılmaz; ilk düğümün prev ve son düğümün next alanı NULL’dır. Güncel head adresini döndürünüz.',
  before:'NULL ← 10 ⇄ 20 ⇄ 30 → NULL',after:'20 sil: NULL ← 10 ⇄ 30 → NULL',
  plan:[['İlk eşleşmeyi bul','temp = head ile başla. temp NULL değilken ve data hedef değilken next ile ilerle. Hedef yoksa listeyi değiştirmeden dön.'],['İleri oku düzelt','Önceki komşu varsa onun next alanını temp->next yap. Önceki komşu yoksa hedef baştır; head’i temp->next’e taşı.'],['Geri oku düzelt','Sonraki komşu varsa onun prev alanını temp->prev yap. Böylece baş silindiğinde yeni başın prev alanı da NULL olur.'],['Belleği en son bırak','İki yöndeki bağlantılar tamamlandıktan sonra free(temp) yap ve güncel head’i döndür. Hedefin komşu adreslerini free sonrasında okuma.']],
  hints:['Çift bağlı listede bir düğümü atlamak için iki komşunun da bağlantısını düşün.','temp->prev yoksa head değişir; temp->next yoksa geri ok düzeltme bloğu atlanır.','Önce next, sonra prev bağlantısını düzelt; free en sonda.'],
  rubric:['Arama NULL kontrolüyle güvenli ve yalnızca ilk eşleşmeyi siliyor.','Önceki komşunun next bağlantısı veya head güncelleniyor.','Sonraki komşunun prev bağlantısı düzeltiliyor.','Boş, tek, baş, ara, son ve bulunamayan hedef durumları korunuyor; free en son.'],
  tests:[{a:[10,20,30,20,40],value:20,out:[10,30,20,40]},{a:[20,30,40],value:20,out:[30,40]},{a:[10,20,30],value:30,out:[10,20]},{a:[20],value:20,out:[]},{a:[],value:20,out:[]},{a:[10,30],value:20,out:[10,30]},{a:[20,20],value:20,out:[20]},{a:[10],value:20,out:[10]}],edgeIndex:6,
  wanted:['temp->prev->next = temp->next;','temp->next->prev = temp->prev;','free(temp);'],
  annotations,
  explain:'Tek yönlü listeden farklı olarak geri bağlantı da düzeltilir. Ara düğüm çıkarılınca A.next = C ve C.prev = A olur. Başın prev ve sonun next alanı NULL kalır. Çift bağlı, dairesel demek değildir; uçlar birbirine bağlanmaz. Arama O(n), düğüm bulunduktan sonraki bağlantı güncellemeleri O(1) sürer.'
 });
 g.CWritingTasks.push({
  id:'cift-basa-ekle',doubly:true,structure:'struct node {\n    struct node *next;\n    struct node *prev;\n    int data;\n};',art:'assets/case-loops/case-c-18',
  title:'Yeni baş delil: çift bağlı listeye ekle',group:'Çift bağlı doğrusal liste',
  signature:'struct node *basaEkle(struct node *head, int data)',call:'basaEkle(head, deger)',
  code:`struct node *basaEkle(struct node *head, int data) {
    struct node *yeni = malloc(sizeof *yeni);
    if (yeni == NULL) return head;
    yeni->data = data;
    yeni->prev = NULL;
    yeni->next = head;
    if (head != NULL) {
        head->prev = yeni;
    }
    head = yeni;
    return head;
}`,
  prompt:'Hocanın tahtadaki sırasını izleyerek çift bağlı doğrusal listenin başına data sayısını taşıyan bir düğüm ekleyiniz. Yeni düğümün prev alanı NULL, next alanı eski head olsun. Eski baş varsa prev bağlantısını düzeltiniz; ardından head = yeni yapıp head’i döndürünüz. Liste boş olabilir; malloc başarısızsa eski listeyi koruyunuz. Bekçi düğüm ve ayrı tail işaretçisi kullanılmaz.',
  before:'NULL ← 10 ⇄ 20 ⇄ 30 → NULL',after:'7 ekle: NULL ← 7 ⇄ 10 ⇄ 20 ⇄ 30 → NULL',
  plan:[['Önce bellek ayır','malloc(sizeof *yeni) ile bir düğümlük alan ayır. Sonuç NULL ise hiçbir alana erişmeden eski head’i döndür.'],['Yeni düğümün alanlarını kur','yeni->data = data ile parametredeki sayıyı düğümün data alanına yaz. Yeni başın öncesi olmayacağı için prev = NULL yap; next = head ile eski zincirin başlangıcını koru.'],['Eski başın geri okunu bağla','head NULL değilse head->prev = yeni yap. Boş listede olmayan düğümün prev alanına erişme.'],['Başı değiştir ve döndür','Hocanın kırmızı satırı: head = yeni. Ardından return head ile adresi döndür. Çağıran head = basaEkle(head, deger); yazmalıdır; fonksiyondaki head parametresi adresin kopyasıdır. Ekleme O(1) sürer.']],
  hints:['Tek yönlü başa eklemeye ek olarak eski başın prev oku da değişir.','yeni->prev = NULL; yeni->next = head; sonra varsa head->prev = yeni.','Eski başı yeni düğümün next alanına bağlamadan kaybetme. Çağrıda dönen adresi head’e ata.'],
  rubric:['malloc sonucu alanlara erişmeden kontrol edildi.','Yeni düğümün data, prev ve next alanları başlatıldı.','Eski head varsa prev alanı yeni düğüme bağlandı.','Boş liste güvenli; yeni baş döndürülüyor ve işlem sabit zamanda bitiyor.'],
  tests:[{a:[],value:7,out:[7]},{a:[10,20,30],value:7,out:[7,10,20,30]},{a:[10],value:5,out:[5,10]},{a:[7,7],value:7,out:[7,7,7]},{a:[0,-3,12],value:-8,out:[-8,0,-3,12]}],edgeIndex:0,
  wanted:['yeni->prev = NULL;','yeni->next = head;','head->prev = yeni;'],
  annotations:[
   'Hocanın basaEkle fonksiyonu eski başın adresini ve data adlı sayı parametresini alır. Çağrı: head = basaEkle(head, deger);',
   'malloc bir çift bağlı düğüm kadar alan ayırır. sizeof *yeni veri okumaz; düğüm türünün boyutunu hesaplar. stdlib.h gerekir.',
   'Bellek ayrılamadıysa yeni NULL olur. Alanlarına dokunmadan eski baş döndürülür; mevcut liste korunur.',
   'Soldaki yeni->data düğümün alanı, sağdaki data fonksiyonun sayı parametresidir. İsimleri aynı olsa da farklı yerleri ifade ederler.',
   'Yeni başın önceki komşusu olmayacağı için prev NULL yapılır. Doğrusal liste başlangıcı budur.',
   'Yeni düğümün next oku eski başa bağlanır. Liste boşsa bu alan da NULL olur.',
   'Eski baş var mı kontrol edilir. head NULL olduğunda head->prev okumak veya yazmak geçersizdir.',
   'Eski başın prev oku yeni düğüme döner. Böylece yeni düğüm ile eski baş iki yönde bağlanır.',
   'Eski başın geri bağlantısını güncelleyen koşul bloğunun sonu.',
   'Hocanın kırmızı yazdığı satır: head artık yeni düğümün adresini tutar. Eski başın adresi yeni->next alanında korunmuştur.',
   'Güncel başı çağırana döndürür. C’de head parametresini değiştirmek çağıranın head değişkenini kendiliğinden değiştirmez; çağıran dönüşü kendi head’ine atamalıdır.',
   'Fonksiyonun sonu.'
  ],
  boardNotes:[{title:'Hocanın tahtasıyla aynı bağlantı sırası',intro:'Fotoğraftaki yeni->data = data, yeni->prev = NULL, yeni->next = head, head->prev = yeni ve head = yeni sırası korunur. Uygulamadaki sürüm boş listeyi ve bellek ayırma başarısızlığını da ele alır.',rows:[['head->prev = yeni;','Tahtadaki bu satır dolu liste varsayar. Boş listeyi de desteklemek için if (head != NULL) içinde kullanılır.'],['head = yeni;','Fonksiyonun yerel head parametresini yeni düğüme taşır. Bu işlem düğümleri kopyalamaz.'],['return head;','Fotoğrafta dönüş satırı görünmüyor. struct node * döndüren bu fonksiyonda güncel başı çağırana vermek için eklenir.'],['head = basaEkle(head, data);','Çağıranın head değişkenini de günceller. Yalnızca basaEkle(head, data); yazılırsa dönüş değeri kaybolur.']]}],
  explain:'Hocanın sırası: veri → prev NULL → next eski baş → eski başın prev oku → head = yeni → return head. Boş listede yeni düğümün iki bağlantısı da NULL olur. data parametresi ile yeni->data alanını ayır: sağdaki sayı, soldaki düğümün alanıdır. Ekleme O(1) sürer; malloc başarısız olursa liste korunur.'
 });
 g.CWritingTasks.push({
  id:'cift-son-sil',doubly:true,structure,art:'assets/case-loops/case-c-19',
  title:'Son iz: çift bağlı listenin sonunu sil',group:'Çift bağlı doğrusal liste',
  signature:'struct node *sonSil(struct node *head)',call:'sonSil(head)',
  code:`struct node *sonSil(struct node *head) {
    if (head == NULL) return NULL;
    struct node *temp = head;
    while (temp->next != NULL) {
        temp = temp->next;
    }
    if (temp->prev == NULL) {
        free(temp);
        return NULL;
    }
    temp->prev->next = NULL;
    free(temp);
    return head;
}`,
  prompt:'Çift bağlı doğrusal listenin son düğümünü silen sonSil fonksiyonunu yazınız. Son düğümü next bağlantılarıyla bulunuz; prev üzerinden önceki düğümün next alanını NULL yapınız. Silinen düğümün belleğini free ile bırakınız. Boş listeyi ve tek düğümlü listeyi ele alınız; güncel head adresini döndürünüz. Bekçi düğüm ve ayrı tail işaretçisi kullanılmaz.',
  before:'NULL ← 10 ⇄ 20 ⇄ 30 → NULL',after:'Son düğümü sil: NULL ← 10 ⇄ 20 → NULL',
  plan:[['Boş listeyi ayır','head NULL ise silinecek düğüm yoktur. head->next veya head->prev okumadan NULL döndür.'],['Son düğümde dur','temp = head ile başla. temp->next NULL olana kadar next ile ilerle. Döngü bittiğinde temp NULL değil, son düğümdür.'],['Tek düğümü kontrol et','Son düğümün prev alanı da NULL ise listede yalnızca bir düğüm vardır. Onu free ile bırakıp NULL döndür; çağıran head’i NULL yapar.'],['Önce bağlantıyı kes, sonra belleği bırak','Çok düğümlü listede temp->prev->next = NULL ile önceki düğümü yeni son yap. Sonra free(temp) yapıp aynı head’i döndür. free sonrasında temp->prev okuma.']],
  hints:['Son düğümün next alanı NULL’dır; temp NULL olana kadar ilerleme.','Son düğümün prev alanından önceki düğüme doğrudan erişebilirsin.','Önce temp->prev->next = NULL; sonra free(temp). Tek düğümde prev NULL olduğu için ayrı işlem gerekir.'],
  rubric:['Boş liste kontrolü düğüm alanlarını okumadan yapılıyor.','Gezici son düğümde duruyor.','Tek düğüm free edilip NULL döndürülüyor.','Çok düğümlü listede yeni sonun next alanı NULL yapılıyor; bellek en son bırakılıyor.'],
  tests:[{a:[10,20,30,40],out:[10,20,30]},{a:[],out:[]},{a:[7],out:[]},{a:[7,7],out:[7]},{a:[-3,0,12],out:[-3,0]}],edgeIndex:2,
  wanted:['temp = temp->next;','temp->prev->next = NULL;','return head;'],
  annotations:[
   'Fonksiyon çift bağlı doğrusal listenin başını alır ve güncel baş adresini döndürür. Çağrı: head = sonSil(head);',
   'Liste boşsa hiçbir düğüm alanına erişmeden NULL döndürülür.',
   'Gezici baş düğümün adresini alır. Ayrı tail işaretçisi kullanılmıyor.',
   'Gezicinin sonraki düğümü varsa ilerlenir. Amaç son düğümün üzerinde durmaktır; temp’yi NULL yapmak değildir.',
   'Gezici bir next oku ilerler. Düğümlerin veri alanları değişmez.',
   'Sonu bulma döngüsünün sonu. temp artık son düğümü gösterir.',
   'Son düğümün önceki komşusu yoksa bu düğüm aynı zamanda ilk düğümdür; listede yalnızca bir düğüm vardır.',
   'Tek düğümün dinamik belleği bırakılır. Bu düğümden sonra hiçbir alan okunmaz.',
   'Tek düğüm silindi; boş listeyi temsil eden NULL döndürülür. Çağıran dönüşü head’e atamalıdır.',
   'Tek düğüm kontrolünün sonu. Buraya devam edildiyse temp’nin önceki komşusu vardır.',
   'temp->prev önceki düğümdür. Onun next alanını NULL yapmak son düğümü zincirden ayırır; önceki düğüm yeni son olur.',
   'Zincirden ayrılan son düğümün belleği bırakılır. Bundan sonra temp veya temp->prev kullanılmaz.',
   'Çok düğümlü listede ilk düğüm değişmedi; aynı baş adresi döndürülür.',
   'Fonksiyonun sonu.'
  ],
  explain:'Çok düğümlü listede yalnızca yeni sonun next bağlantısı NULL yapılır; kalan düğümlerin prev bağlantıları değişmez. Tek düğüm silinirse head NULL olur. Son düğümü baştan bulmak O(n), bulduktan sonra bağlantıyı kesip silmek O(1) sürer. Son düğümün data değerini sıfırlamak düğümü silmek değildir.'
 });
 g.CWritingTasks.push({
  id:'cift-altinci-sil',doubly:true,structure,art:'assets/case-loops/case-c-20',
  title:'Altıncı iz: sıradaki düğümü sil',group:'Çift bağlı doğrusal liste',
  signature:'struct node *altinciSil(struct node *head)',call:'altinciSil(head)',
  assumption:'Ön koşul: eleman sayısı > 8 (en az 9 düğüm). İlk düğümün sıra numarası 1’dir.',
  code:`struct node *altinciSil(struct node *head) {
    struct node *temp = head;
    for (int i = 1; i < 6; i++) {
        temp = temp->next;
    }
    temp->prev->next = temp->next;
    temp->next->prev = temp->prev;
    free(temp);
    return head;
}`,
  prompt:'Çift bağlı doğrusal listenin 6. elemanını silen kodu yazınız. Eleman sayısı > 8 kabul edilir. Baştan 1’den sayınız; data değeri 6 olan düğümü değil, sıra numarası 6 olan düğümü siliniz. 5. düğümün next ve 7. düğümün prev bağlantılarını birbirine bağlayınız; sonra 6. düğümü free ile bırakınız. Güncel head adresini döndürünüz. Bekçi düğüm ve ayrı tail işaretçisi kullanılmaz.',
  before:'10 ⇄ 20 ⇄ 30 ⇄ 40 ⇄ 50 ⇄ 60 ⇄ 70 ⇄ 80 ⇄ 90',after:'6. düğüm silinir: 10 ⇄ 20 ⇄ 30 ⇄ 40 ⇄ 50 ⇄ 70 ⇄ 80 ⇄ 90',
  plan:[['Ön koşulu ve sırayı ayır','Listede en az 9 düğüm var. 6. düğümün hem 5. hem 7. komşusu kesinlikle vardır. Silme işlemi sayıya göre değil, baştan sayılan konuma göre yapılır.'],['Beş next hareketi yap','temp başlangıçta 1. düğümdür. i = 1 ile başlayan i < 6 döngüsü beş kez çalışır: 1 → 2 → 3 → 4 → 5 → 6.'],['İki yöndeki bağlantıyı değiştir','temp->prev->next = temp->next ile 5’i 7’ye bağla. temp->next->prev = temp->prev ile 7’nin geri okunu 5’e bağla. temp’nin kendi prev/next alanları değişmediği için iki satırda da komşular okunabilir.'],['Belleği en son bırak','İki bağlantı tamamlandıktan sonra free(temp) yap. İlk düğüm değişmediği için return head ile aynı başı döndür.']],
  hints:['temp = head iken zaten 1. düğümdesin; 6’ya ulaşmak için 5 kez ilerlemelisin.','6 değeri aranmaz; 6. kutu sayılır. data karşılaştırması gerekmiyor.','5.next = 7 ve 7.prev = 5; sonra free(6. düğüm).'],
  rubric:['Eleman sayısı > 8 ve 1 tabanlı sıra varsayımları kullanıldı.','Beş next hareketiyle 6. düğüme ulaşıldı; data aranmadı.','Hem önceki next hem sonraki prev bağlantısı düzeltildi.','Yalnızca 6. düğüm free edildi; head ve kalan düğümler korundu.'],
  tests:[{a:[10,20,30,40,50,60,70,80,90],out:[10,20,30,40,50,70,80,90]},{a:[6,12,6,24,30,99,42,48,54,60],out:[6,12,6,24,30,42,48,54,60]},{a:[4,4,4,4,4,4,4,4,4],out:[4,4,4,4,4,4,4,4]},{a:[-5,0,7,12,18,-9,23,31,44,52,67],out:[-5,0,7,12,18,23,31,44,52,67]}],edgeIndex:1,
  edgeIntro:'Konum ile veri farklıdır: 6 verisi iki ayrı düğümde bulunsa da yalnızca sıra numarası 6 olan düğümü sileceğiz.',
  edgeNextPrompt:'Şimdi içinde 6 sayısı da bulunan, 8’den fazla düğümlü başka bir listede yalnızca 6. sıradaki düğümü belirle.',
  edgePrompt:'Eleman sayısı > 8. Listede 6 sayısının görünmesine aldanma: baştan sayarak 6. düğümü silince sonuç ne olur?',
  wanted:['temp->prev->next = temp->next;','temp->next->prev = temp->prev;','free(temp);'],
  annotations:[
   'Fonksiyon çift bağlı doğrusal listenin başını alır. Sözleşme: eleman sayısı 8’den büyüktür, yani en az 9 düğüm vardır.',
   'Gezici 1. düğümden başlar. Henüz hiçbir next hareketi yapılmadı.',
   'i = 1, 2, 3, 4, 5 için gövde çalışır: toplam beş hareket. i, veriyi değil hareket sırasını sayar.',
   'Bir sonraki düğüme geçilir. Beşinci hareketin sonunda temp, 6. düğümdedir.',
   'Döngü sonu: temp 6. düğümü gösterir. data değeri ne olursa olsun silinecek düğüm budur.',
   'temp->prev 5. düğümdür. Onun next alanına temp->next, yani 7. düğümün adresi yazılır.',
   'temp->next 7. düğümdür. Onun prev alanına temp->prev, yani 5. düğümün adresi yazılır. Geri bağlantı da 6’yı atlar.',
   'İki komşunun bağlantıları tamamlandı; yalnızca 6. düğümün belleği bırakılır. free sonrasında temp üzerinden alan okunmaz.',
   'İlk düğüm silinmedi; baş adresi korunur. Çağrı: head = altinciSil(head);',
   'Fonksiyonun sonu.'
  ],
  explain:'Eleman sayısı > 8 varsayımı 6. düğümün iki komşusunun da varlığını garanti eder. Bu soru için boş/kısa liste kontrolü gerekmez; fonksiyon bu ön koşulla kullanılmalıdır. 6. düğüm, data değeri 6 olan düğüm demek değildir. Beş next hareketi ve iki bağlantı atamasından sonra free yapılır. Konum sabit olduğundan işlem liste uzunluğundan bağımsız O(1) sürer.'
 });
 function frames(t,input){
  const nodes=input.a.map((value,i)=>({id:'a'+i,value,alive:true})),edges={},prev={},pointers={},out=[];
  let head=nodes[0]?.id||null;
  nodes.forEach((n,i)=>{edges[n.id]=nodes[i+1]?.id||null;prev[n.id]=nodes[i-1]?.id||null;});
  function push(title,caption,code,focus=[],changed=[],changedPrev=[]){out.push(JSON.parse(JSON.stringify({title,caption,code,nodes,edges,prev,head,second:null,pointers,focus,changed,changedPrev,circular:false,doubly:true})));}
  push('İki yönlü delil zinciri','Her kutuda prev, data ve next var. Mavi next ileriye, mor prev geriye gider. İki uç NULL ile biter.','',head?[head]:[]);
  if(t.id==='cift-basa-ekle'){
   if(input.mallocFail){pointers.yeni=null;push('Bellek ayrılamadı','malloc NULL döndürdü. Hiçbir düğüm alanına erişmeden eski başı döndürüyoruz.','if (yeni == NULL) return head;');return out;}
   const node={id:'new',value:'?',alive:true};nodes.push(node);edges.new='unset';prev.new='unset';pointers.yeni='new';
   push('Yeni düğüm için yer ayır','malloc ayrı bir düğüm ayırdı. Alanlar henüz başlatılmadı; soru işaretleri atanacak adresleri gösteriyor.','struct node *yeni = malloc(sizeof *yeni);',['new']);
   push('Bellek kontrolü','yeni NULL değil; düğümün alanlarını güvenle başlatabiliriz.','if (yeni == NULL) return head;',['new']);
   node.value=input.value;push('Veriyi yerleştir','Sağdaki data parametresindeki sayıyı soldaki yeni->data alanına yazıyoruz. Eski düğümlerin verileri korunur.','yeni->data = data;',['new']);
   prev.new=null;push('Yeni başın öncesi yok','Yeni düğümün mor prev oku NULL olur.','yeni->prev = NULL;',['new'],[],['new']);
   edges.new=head;push('Eski zinciri koru',head?'Yeni düğümün next oku eski başı gösterir. head hâlâ eski düğümdedir.':'Eski liste boş; yeni düğümün next alanı da NULL olur.','yeni->next = head;',['new',...(head?[head]:[])],['new']);
   if(head){prev[head]='new';push('Geri bağlantıyı kur','Eski başın prev oku yeni düğüme döner. İleri ve geri bağlantı artık birbirini tamamlıyor.','head->prev = yeni;',[head,'new'],[],[head]);}
   else push('Boş listeyi güvenle geç','head NULL; head->prev alanına erişmiyoruz. Yeni düğüm hem ilk hem sondur.','if (head != NULL) {',['new']);
   head='new';push('Hocanın kırmızı satırı: başı taşı','head artık yeni düğümü gösterir. Eski baş yeni->next üzerinden korunur.','head = yeni;',['new']);
   push('Yeni başı çağırana döndür','return head güncel adresi verir. Çağıran da head = basaEkle(head, data); ile kendi başını günceller.','return head;',['new']);return out;
  }
  if(t.id==='cift-altinci-sil'){
   if(input.a.length<=8)throw new Error('altinciSil ön koşulu: eleman sayısı > 8 olmalıdır.');
   let p=head;pointers.temp=p;push('Birinci düğümden başla','Eleman sayısı > 8. Sıra 1’den sayılır; temp başlangıçta ilk düğümü gösterir.','struct node *temp = head;',[p]);
   for(let i=1;i<6;i++){push('Hareket '+i+' / 5','i = '+i+' < 6; bir sonraki next bağlantısını izleyeceğiz.','for (int i = 1; i < 6; i++) {',[p]);p=edges[p];pointers.temp=p;push((i+1)+'. düğüme geldik',i===5?'Beş next hareketi bitti: data değerinden bağımsız olarak 6. düğümdeyiz.':'temp artık '+(i+1)+'. düğümü gösteriyor.','temp = temp->next;',[p]);}
   const before=prev[p],after=edges[p];
   edges[before]=after;push('İleri oku değiştir','5. düğümün next oku 7. düğüme bağlandı. 7. düğümün geri oku bir sonraki adımda düzeltilecek.','temp->prev->next = temp->next;',[before,p,after],[before]);
   prev[after]=before;push('Geri oku değiştir','7. düğümün prev oku 5. düğüme döndü. İki yön de 6. düğümü atlıyor.','temp->next->prev = temp->prev;',[before,after],[],[after]);
   nodes.find(n=>n.id===p).alive=false;delete edges[p];delete prev[p];delete pointers.temp;
   push('Altıncı düğümü serbest bırak','Komşu bağlantıları tamamlandı; yalnızca sıra numarası 6 olan düğümün belleği bırakılıyor.','free(temp);',[p]);
   push('Başı koru','İlk düğüm ve diğer düğümlerin sırası değişmedi. İleri ve geri bağlantılar tutarlı.','return head;',[head]);return out;
  }
  if(t.id==='cift-son-sil'){
   if(head===null){push('Boş liste','Silinecek düğüm yok; next veya prev okunmadan NULL döndürülür.','if (head == NULL) return NULL;');return out;}
   let last=head;pointers.temp=last;push('Gezici başta','temp ilk düğümü gösterir; son düğümü next oklarıyla bulacağız.','struct node *temp = head;',[last]);
   while(edges[last]!==null){push('Son düğüm mü?','next NULL değil; son düğüme henüz ulaşmadık.','while (temp->next != NULL) {',[last]);last=edges[last];pointers.temp=last;push('İleri git','temp bir sonraki düğüme geçti. Mor prev okları önceki düğümleri göstermeye devam eder.','temp = temp->next;',[last]);}
   const before=prev[last];push('Son düğüm bulundu','temp->next NULL. temp hâlâ geçerli son düğümü gösterir.','while (temp->next != NULL) {',[last]);
   if(before===null){
    push('Tek düğümlü liste','temp->prev de NULL; önceki düğüm yok. temp->prev->next alanına erişemeyiz.','if (temp->prev == NULL) {',[last]);
    nodes.find(n=>n.id===last).alive=false;delete edges[last];delete prev[last];delete pointers.temp;
    push('Tek düğümü serbest bırak','Bellek bırakılır; temp üzerinden artık alan okunmaz.','free(temp);',[last]);
    head=null;push('Boş listeyi döndür','Çağıran head = sonSil(head); ile başı NULL yapar.','return NULL;');return out;
   }
   edges[before]=null;push('Yeni sonu belirle','Son düğümün prev adresine git ve bu önceki düğümün next alanını NULL yap. Diğer geri bağlantılar korunur.','temp->prev->next = NULL;',[before,last],[before]);
   nodes.find(n=>n.id===last).alive=false;delete edges[last];delete prev[last];delete pointers.temp;
   push('Eski sonun belleğini bırak','Zincirden ayrılan düğüm free ile söner. Yeni sonun next alanı NULL’dır.','free(temp);',[last]);
   push('Güncel başı döndür','Baş aynı kaldı; kalan düğümler iki yönde tutarlı.','return head;',[head]);return out;
  }
  let p=head;pointers.temp=p;push('Arama başlıyor','temp ilk düğümün adresini alır.','struct node *temp = head;',p?[p]:[]);
  while(p!==null&&nodes.find(n=>n.id===p).value!==input.value){
   push('Değeri karşılaştır','Bu düğüm hedef değil; bir sonraki next oku izlenecek.','while (temp != NULL && temp->data != hedef) {',[p]);
   p=edges[p];pointers.temp=p;push('Gezici ilerliyor',p?'temp sonraki düğüme geçti.':'temp NULL oldu; hedef bulunamadı.','temp = temp->next;',p?[p]:[]);
  }
  if(p===null){push('Liste korunur','Liste boş veya hedef yok. Hiçbir bağlantı değiştirilmez.','if (temp == NULL) return head;');return out;}
  const before=prev[p],after=edges[p];
  push('İlk eşleşme bulundu','Bu düğüm silinecek; aynı sayıyı taşıyan diğer düğümler korunur. Belleği henüz bırakmıyoruz.','if (temp == NULL) return head;',[p]);
  if(before!==null){edges[before]=after;push('İleri bağlantıyı aktar','Önceki komşunun next oku hedefi atlar. Mor geri ok henüz eski adresi gösteriyor.','temp->prev->next = temp->next;',[before,p,...(after?[after]:[])],[before]);}
  else{head=after;push('Yeni başı belirle',head?'head sonraki düğüme taşınır; geri oku bir sonraki adımda düzeltilecek.':'Tek düğüm çıkıyor; head NULL olur.','head = temp->next;',head?[head,p]:[p]);}
  if(after!==null){prev[after]=before;push('Geri bağlantıyı aktar',before?'Sonraki komşunun prev oku hedefin öncesine taşınır. Artık iki yön de hedefi atlar.':'Yeni başın prev alanı NULL yapılır. Doğrusal başlangıç korunur.','temp->next->prev = temp->prev;',[after,...(before?[before]:[])],[],[after]);}
  else push('Sonraki komşu yok','Hedef son düğüm; olmayan komşunun prev alanı okunmaz.','if (temp->next != NULL) {',[p]);
  nodes.find(n=>n.id===p).alive=false;delete edges[p];delete prev[p];delete pointers.temp;
  push('Belleği güvenle bırak','Komşuların bağlantıları tamamlandı. Hedef düğüm free ile söner; adresi artık kullanılamaz.','free(temp);',[p]);
  push('İki yön de tutarlı','İleri next ve geri prev bağlantıları aynı zinciri ters yönlerde izler. İlk prev ve son next NULL’dır.','return head;',head?[head]:[]);
  return out;
 }
 g.CDoubly={structure,frames};
})(window);
