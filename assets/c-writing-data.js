window.CWritingTasks = [
{
 id:'basa', title:'Doğrusal listeye başa ekleme', group:'Doğrusal liste', signature:'struct node *basaEkle(struct node *head, int deger)',
 prompt:'Tek yönlü, NULL ile biten bir bağlı listenin başına deger değerinde yeni düğüm ekleyen basaEkle fonksiyonunu sıfırdan yazınız. Boş listeyi ve bellek ayırma başarısızlığını ele alınız. Güncel head adresini döndürünüz.',
 before:'head → 10 → 20 → 30 → NULL', after:'7 ekle: head → 7 → 10 → 20 → 30 → NULL',
 plan:[['Ne döndüreceğim?','İlk düğüm değişeceği için fonksiyon struct node * döndürür. Çağıran taraf head = basaEkle(head, 7); yazmalıdır.'],['Yeni düğümü nasıl kurarım?','malloc(sizeof *yeni) bir düğümlük alan ayırır. NULL dönüyorsa eski head’i koruyup dön. Sonra yeni->data alanına deger yaz.'],['Hangi oku önce değiştiririm?','Önce yeni->next = head yap. Böylece eski listenin adresi yeni düğümde korunur.'],['Yeni baş hangisi?','Yeni düğüm artık listenin başıdır. return yeni ile adresini çağıran tarafa ver. head zaten NULL ise bağlantı doğal olarak NULL olur.']],
 hints:['Eski başı kaybetmeden önce yeni düğüme bağla.','Bellek ayır → NULL kontrolü → veri → yeni->next = head → yeni başı döndür.','Çağrı: head = basaEkle(head, 7);. NULL olan head için ayrıca düğüm dolaşmaya gerek yok.'],
 rubric:['malloc sonucu alanlara erişmeden kontrol edildi.','Yeni düğümün data alanına deger atandı.','Yeni düğüm eski head’e bağlandı ve yeni baş döndürüldü.','Boş liste ve malloc başarısızlığı düşünüldü.'],
 code:`struct node *basaEkle(struct node *head, int deger) {
    struct node *yeni = malloc(sizeof *yeni);
    if (yeni == NULL) return head;
    yeni->data = deger;
    yeni->next = head;
    return yeni;
}`,
 tests:[{a:[],value:7,out:[7]},{a:[10,20,30],value:7,out:[7,10,20,30]}],call:'basaEkle(head, deger)',explain:'İki listede de yeni->next eski başı tutar. Yeni başı döndürmek çağıranın head’ini güncellemesini sağlar. C’de malloc dönüşümünü zorunlu olarak cast etmene gerek yok; <stdlib.h> bildirimi gerekir.'
},
{
 id:'sona',title:'Doğrusal listeye sona ekleme',group:'Doğrusal liste',signature:'struct node *sonaEkle(struct node *head, int deger)',
 prompt:'Tek yönlü bağlı listenin sonuna deger değerinde yeni düğüm ekleyen sonaEkle fonksiyonunu yazınız. head NULL olabilsin. Yeni düğümün next alanı NULL olsun. Güncel başı döndürünüz.',before:'head → 10 → 20 → 5 → NULL',after:'35 ekle: head → 10 → 20 → 5 → 35 → NULL',
 plan:[['Önce yeni düğüm','Düğümü ayır, NULL sonucunu kontrol et, data = deger ve next = NULL yap. Yeni sonun devamı yoktur.'],['Liste boşsa','head NULL ise yeni düğüm hem ilk hem son olur. return yeni ile bitir.'],['Dolu listede nerede dururum?','temp = head ile başla. temp->next NULL olana kadar ilerle. Burada son düğümün üzerinde durmalısın.'],['Son bağlantı','temp->next = yeni ile son düğümü bağla. Eski head değişmediğinden return head yap.']],
 hints:['Dolaşma koşulun, son düğümün üzerinde durmanı sağlamalı.','Boş listede temp->next okuyamazsın; önce head == NULL durumunu ele al.','Son düğümü bulmak için while (temp->next != NULL) kullanabilirsin.'],
 rubric:['malloc kontrolü ve yeni->next = NULL var.','Boş listede yeni düğüm baş olarak döndürülüyor.','Dolu listede son düğüme kadar gidiliyor.','Eski son yeni düğüme bağlanıyor; head korunuyor.'],
 code:`struct node *sonaEkle(struct node *head, int deger) {
    struct node *yeni = malloc(sizeof *yeni);
    if (yeni == NULL) return head;
    yeni->data = deger;
    yeni->next = NULL;
    if (head == NULL) return yeni;
    struct node *temp = head;
    while (temp->next != NULL) temp = temp->next;
    temp->next = yeni;
    return head;
}`,
 tests:[{a:[],value:35,out:[35]},{a:[10],value:35,out:[10,35]},{a:[10,20,5],value:35,out:[10,20,5,35]}],call:'sonaEkle(head, deger)',explain:'while (temp != NULL) ile ilerlersen temp liste dışına çıkar. Bir bağlantı kurmak için son geçerli düğümü elinde tutmalısın.'
},
{
 id:'yazdir',title:'Bütün düğümleri yazdırma',group:'Doğrusal liste',signature:'void yazdir(struct node *head)',
 prompt:'Verilen tek yönlü bağlı listenin bütün data değerlerini sırayla, aralarında birer boşluk olacak şekilde yazdıran yazdir fonksiyonunu yazınız. Her sayıdan sonra boşluk yazabilirsiniz; boş liste hiçbir sayı yazdırmasın. Listeyi değiştirmeyiniz.',before:'head → 10 → 20 → 5 → NULL',after:'Ekran: 10 20 5',
 plan:[['Başı koru','temp = head ile geçici bir gezici oluştur. Bu görevde head’i değiştirmene gerek yok.'],['Ne zamana kadar?','temp NULL olmadığı sürece geçerli bir düğüm üzerindesin. while (temp != NULL) kullan.'],['Oku ve ilerle','printf("%d ", temp->data) ile tam sayıyı yazdır, sonra temp = temp->next ile ilerle.'],['Son düğümü kontrol et','Koşul temp->next != NULL olursa son düğüm döngüde işlenmez. temp != NULL koşulu sonu da işler.']],
 hints:['Veriyi okumadan önce gezicinin NULL olmadığından emin ol.','while (temp != NULL) içinde önce printf, sonra temp = temp->next.','printf için format gerekli: printf("%d ", temp->data);. Fonksiyonun dönüş tipi void.'],
 rubric:['Boş listede data veya next erişimi yapılmıyor.','Son düğüm de yazdırılıyor.','Her turda gezici ilerliyor.','head ve düğüm bağlantıları değiştirilmedi.'],
 code:`void yazdir(struct node *head) {
    struct node *temp = head;
    while (temp != NULL) {
        printf("%d ", temp->data);
        temp = temp->next;
    }
}`,
 tests:[{a:[],out:[]},{a:[12],out:[12]},{a:[10,20,5],out:[10,20,5]}],call:'yazdir(head)',explain:'Fotoğraftaki printf(data) kısa gösterimini C kodunda printf("%d ", data) olarak tamamlamak gerekir. Fonksiyon void döner; düğüm adresi döndürmesi gerekmez.'
},
{
 id:'ilk-sil',title:'İlk düğümü silme',group:'Doğrusal liste',signature:'struct node *ilkSil(struct node *head)',
 prompt:'Tek yönlü bağlı listenin ilk düğümünü silen ilkSil fonksiyonunu sıfırdan yazınız. Boş listede NULL döndürünüz; tek düğümlü listede düğümü serbest bırakıp NULL döndürünüz.',before:'head → 10 → 20 → 30 → NULL',after:'head → 20 → 30 → NULL; 10 düğümü serbest',
 plan:[['Boş liste','head NULL ise erişilecek düğüm yoktur; hemen dön.'],['Eski başı sakla','temp = head, silinecek düğümün adresini tutar.'],['Başın devamını koru','head = head->next satırı, serbest bırakma işleminden önce çalışmalıdır.'],['Belleği bırak ve dön','free(temp) çağır, güncel head’i döndür. temp->next = NULL yapmak zorunlu değildir; free’den sonra alana erişemezsin.']],
 hints:['Silinecek adres ile yeni başın adresini ayrı tut.','temp = head; head = head->next; free(temp); sırası güvenlidir.','Tek düğümde head->next zaten NULL’dır; güncel head NULL olur.'],
 rubric:['Boş liste kontrol edildi.','Yeni head, free’den önce alındı.','Eski ilk düğüm free ile serbest bırakıldı.','Güncel head döndürülüyor.'],
 code:`struct node *ilkSil(struct node *head) {
    if (head == NULL) return NULL;
    struct node *temp = head;
    head = head->next;
    free(temp);
    return head;
}`,
 tests:[{a:[],out:[]},{a:[10],out:[]},{a:[10,20,30],out:[20,30]}],call:'ilkSil(head)',explain:'free(head); head = head->next; sırası serbest bırakılmış belleği okur. Bağlantıyı önce koru. Çağırırken head = ilkSil(head); yaz.'
},
{
 id:'son-sil',title:'Son düğümü silme',group:'Doğrusal liste',signature:'struct node *sonSil(struct node *head)',
 prompt:'Tek yönlü bağlı listenin son düğümünü silen sonSil fonksiyonunu yazınız. Boş ve tek düğümlü listeyi ayrı ele alınız. Güncel head’i döndürünüz.',before:'head → 10 → 20 → 30 → NULL',after:'head → 10 → 20 → NULL; 30 düğümü serbest',
 plan:[['Boş liste','head NULL ise NULL döndür.'],['Tek düğüm','head->next NULL ise son düğüm aynı zamanda ilk düğümdür. free(head) yapıp NULL döndür.'],['Sondan önceki düğüm','Artık en az iki düğüm vardır. temp->next->next NULL olana kadar ilerleyerek sondan önceki düğümde dur.'],['Sonu kopar','Silinecek düğüm = temp->next. Önce temp->next = NULL; ardından free(silinecek); en son return head.']],
 hints:['Son düğümü silmek için onun öncesindeki düğümün bağlantısını değiştirmelisin.','Boş ve tek düğüm durumunu ayırmadan temp->next->next okuyamazsın.','En az iki düğüm varken while (temp->next->next != NULL) ile sondan önceki düğümü bul.'],
 rubric:['Boş ve tek düğümlü liste ayrı ele alındı.','Sondan önceki düğüm doğru bulunuyor.','Yeni sonun next alanı NULL oluyor.','Silinen düğüm free ediliyor; doğru head dönüyor.'],
 code:`struct node *sonSil(struct node *head) {
    if (head == NULL) return NULL;
    if (head->next == NULL) {
        free(head);
        return NULL;
    }
    struct node *temp = head;
    while (temp->next->next != NULL) temp = temp->next;
    struct node *silinecek = temp->next;
    temp->next = NULL;
    free(silinecek);
    return head;
}`,
 tests:[{a:[],out:[]},{a:[10],out:[]},{a:[10,20],out:[10]},{a:[10,20,30],out:[10,20]}],call:'sonSil(head)',explain:'Tahtadaki iki next kullanımı sondan önceki düğümü bulur. Önce boş ve tek düğüm kontrolleri eklenince bu erişim güvenli olur.'
},
{
 id:'deger-sil',title:'İlk eşleşen değeri silme',group:'Doğrusal liste',signature:'struct node *degerSil(struct node *head, int hedef)',
 prompt:'Tek yönlü bağlı listede data değeri hedef olan ilk düğümü silen degerSil fonksiyonunu yazınız. Değer bulunmazsa liste değişmesin. Hedef ilk veya son düğümde bulunabilsin.',before:'head → 10 → 20 → 30 → 40 → NULL',after:'30 sil: head → 10 → 20 → 40 → NULL',
 plan:[['Boş veya ilk düğüm','Boşsa dön. İlk düğüm eşleşiyorsa başı ilerlet, eski başı free et, yeni head’i döndür.'],['Önceki düğümü bul','temp gezicisi silinecek düğümün önceki düğümü olsun. temp->next NULL değilken sonraki data’yı hedefle karşılaştır.'],['Bulunmadıysa','temp->next NULL olduğunda hedef yoktur. Listeyi değiştirmeden dön.'],['Bulunduysa','silinecek = temp->next; temp->next = silinecek->next; free(silinecek). Bu sıra aradaki düğümü atlar.']],
 hints:['Değer, sıra numarası değildir. İlk eşleşmeyi arıyoruz.','Aramadan sonra temp->next NULL ise silinecek düğüm bulunmadı.','Bağlantı: önceki->next = silinecek->next. Sonra free(silinecek).'],
 rubric:['Başta bulunan hedef head güncellenerek siliniyor.','Arama NULL kontrolüyle sınırlı.','Bulunmayan hedef listede değişiklik yapmıyor.','İlk eşleşme atlanıyor ve yalnızca o düğüm free ediliyor.'],
 code:`struct node *degerSil(struct node *head, int hedef) {
    if (head == NULL) return NULL;
    if (head->data == hedef) {
        struct node *eski = head;
        head = head->next;
        free(eski);
        return head;
    }
    struct node *temp = head;
    while (temp->next != NULL && temp->next->data != hedef)
        temp = temp->next;
    if (temp->next == NULL) return head;
    struct node *silinecek = temp->next;
    temp->next = silinecek->next;
    free(silinecek);
    return head;
}`,
 tests:[{a:[],value:30,out:[]},{a:[10,20,30,40],value:30,out:[10,20,40]},{a:[10,20],value:10,out:[20]},{a:[10,20],value:20,out:[10]},{a:[10,20],value:99,out:[10,20]},{a:[30,30,40],value:30,out:[30,40]}],call:'degerSil(head, deger)',explain:'İlk eşleşmeyi silmek bir tane düğümü kaldırır. Tüm eşleşmeleri silme farklı bir görevdir; döngü ve head güncellemelerini ona göre tekrar düşünmek gerekir.'
},
{
 id:'besinci',title:'Hocanın ödevi: 5. elemanı sil',group:'Sınav görevi',signature:'struct node *besinciSil(struct node *head)',
 prompt:'n elemanlı tek yönlü bir bağlı listede 5. elemanı silen C fonksiyonunu sıfırdan yazınız (n > 6). İlk elemanın sıra numarası 1’dir. Güncel head’i döndürünüz. Ek olarak, 5’ten az düğüm varsa listeyi değiştirmeden döndürünüz.',before:'head → 11 → 22 → 33 → 44 → 55 → 66 → 77 → NULL',after:'head → 11 → 22 → 33 → 44 → 66 → 77 → NULL',
 plan:[['Soruyu ayır','5. eleman, data değeri 5 olan düğüm değildir. 1’den başlayan konum sayımı yapıyorsun. Silinecek düğümün önceki düğümü 4. düğümdür.'],['Kaç ilerleme?','temp başlangıçta 1. düğümde. 1→2, 2→3, 3→4: toplam üç next hareketi.'],['Adresi ve bağlantıyı koru','4. düğümde temp->next, 5. düğümdür. silinecek değişkenine al. temp->next = silinecek->next ile 4.’yü 6.’ya bağla.'],['Serbest bırak','free(silinecek) ile yalnızca 5. düğümü sil. Baştaki düğüm değişmediği için return head. Kısa liste için NULL kontrollerini düşün.']],
 hints:['Silinecek düğümde değil, onun önceki düğümünde dur.','head birinci düğümse dördüncüye ulaşmak için üç kez ilerlersin.','4. düğümün next’ini, 5. düğümün next’i ile değiştir; sonra 5. düğümü free et.'],
 rubric:['Sıra numarası 1’den başlıyor; data == 5 aranmadı.','Gezici 4. düğümde duruyor.','4. düğüm 6. düğüme bağlanıyor ve 5. düğüm free ediliyor.','Kısa listede geçersiz erişim yapılmıyor; head dönüyor.'],
 code:`struct node *besinciSil(struct node *head) {
    struct node *temp = head;
    for (int konum = 1; konum < 4 && temp != NULL; konum++)
        temp = temp->next;
    if (temp == NULL || temp->next == NULL) return head;
    struct node *silinecek = temp->next;
    temp->next = silinecek->next;
    free(silinecek);
    return head;
}`,
 tests:[{a:[11,22,33,44,55,66,77],out:[11,22,33,44,66,77]},{a:[],out:[]},{a:[11,22,33,44],out:[11,22,33,44]},{a:[11,22,33,44,55],out:[11,22,33,44]}],call:'besinciSil(head)',explain:'Fotoğraftaki ödev n > 6 varsayıyor. Ek kısa liste kontrolleri fonksiyonu daha genel kılar. n > 6 altında da 5. düğümün önceki düğümünü bulma mantığı aynıdır.'
},
{
 id:'birlestir',title:'İki doğrusal listeyi birleştir',group:'Doğrusal liste',signature:'struct node *birlestir(struct node *head1, struct node *head2)',
 prompt:'İki ayrı, NULL ile biten tek yönlü bağlı listeyi birleştiren birlestir fonksiyonunu yazınız. İkinci listeyi birinci listenin sonuna ekleyiniz. Yeni düğüm ayırmayınız; sıralama yapmayınız. Listeler ortak düğüm içermiyor.',before:'head1 → 10 → 20 → NULL   |   head2 → 30 → 40 → NULL',after:'head1 → 10 → 20 → 30 → 40 → NULL',
 plan:[['Boş ilk liste','head1 NULL ise bütün sonuç zaten head2’dir. Onu döndür.'],['İlk listenin sonu','temp = head1 ile başlayıp temp->next NULL olana kadar ilerle.'],['Bağlantıyı kur','İlk sonun next alanına head2 yaz. head2 NULL ise liste yine doğru biçimde biter.'],['Bellek sahipliği','İki liste artık aynı zincirdedir. Sonuç üzerinden bir kez temizlenmelidir; eski head2 üzerinden ayrıca free etmek aynı düğümleri iki kez siler.']],
 hints:['Birleştirmek burada peş peşe bağlamak demektir, sıralı merge değildir.','Yeni düğüm ve malloc gerekmez; mevcut bağlantıyı değiştir.','head1 boş değilse son1->next = head2; return head1.'],
 rubric:['Boş birinci liste head2 ile ele alınıyor.','Birinci listenin sonu güvenli bulunuyor.','Son1->next ikinci başa bağlanıyor.','Yeni düğüm ayrılmıyor ve ikinci liste ayrıca silinmiyor.'],
 code:`struct node *birlestir(struct node *head1, struct node *head2) {
    if (head1 == NULL) return head2;
    struct node *temp = head1;
    while (temp->next != NULL) temp = temp->next;
    temp->next = head2;
    return head1;
}`,
 tests:[{a:[10,20],b:[30,40],out:[10,20,30,40]},{a:[],b:[30,40],out:[30,40]},{a:[10,20],b:[],out:[10,20]},{a:[],b:[],out:[]}],call:'birlestir(head, ikinci)',explain:'Tahtadaki çizimde ilk listenin NULL bağlantısının yerini ikinci listenin başı alır. Fonksiyon sonucu, iki listenin birleşmiş başıdır.'
},
{
 id:'daire-basa',title:'Dairesel listeye başa ekleme',group:'Dairesel liste',circular:true,signature:'struct node *daireBasaEkle(struct node *head, int deger)',
 prompt:'Tek yönlü dairesel bağlı listenin başına deger değerinde yeni düğüm ekleyen daireBasaEkle fonksiyonunu yazınız. Boş liste head == NULL ile gösterilsin. Dolu listede son düğümün next alanı daima başı göstersin.',before:'head → 10 → 20 → 30 ↩ head',after:'7 ekle: head → 7 → 10 → 20 → 30 ↩ yeni head',
 plan:[['Bitiş farklı','Bu listede son->next NULL değil head’dir. Normal listenin NULL koşulunu burada kullanırsan dolaşma bitmez.'],['Boş liste','Yeni düğümü ayırıp kontrol et. Boş listede yeni->next = yeni: tek düğüm kendisini gösterir.'],['Eski sonu bul','temp->next != head oldukça ilerle. Yeni düğümün next alanını eski head’e bağla.'],['Çemberi kapat','Eski sonun next alanını yeni düğüme bağla; yeni baş olarak yeni’yi döndür. Sadece head’i değiştirmek çemberi güncellemez.']],
 hints:['Yeni baş hem eski ilk düğüme bağlanmalı hem de eski son tarafından gösterilmeli.','Boş dairede tek düğümün next alanı kendisidir.','Dolu listede son->next = yeni; yeni->next = eski head; return yeni.'],
 rubric:['malloc sonucu kontrol ediliyor.','Boş dairede yeni->next yeni’nin kendisini gösteriyor.','Son düğüm head’e göre bulunuyor.','Eski son yeni başa, yeni baş eski başa bağlanıyor.'],
 code:`struct node *daireBasaEkle(struct node *head, int deger) {
    struct node *yeni = malloc(sizeof *yeni);
    if (yeni == NULL) return head;
    yeni->data = deger;
    if (head == NULL) {
        yeni->next = yeni;
        return yeni;
    }
    struct node *temp = head;
    while (temp->next != head) temp = temp->next;
    yeni->next = head;
    temp->next = yeni;
    return yeni;
}`,
 tests:[{a:[],value:7,out:[7]},{a:[10],value:7,out:[7,10]},{a:[10,20,30],value:7,out:[7,10,20,30]}],call:'daireBasaEkle(head, deger)',explain:'Fotoğraftaki başa ekleme çiziminde son düğümün uzun dönüş oku da yeni düğüme taşınır. Boş ve tek düğüm kontrolleri, tahtadaki temel fikri tamamlar.'
},
{
 id:'daire-sona',title:'Dairesel listeye sona ekleme',group:'Dairesel liste',circular:true,signature:'struct node *daireSonaEkle(struct node *head, int deger)',
 prompt:'Tek yönlü dairesel listenin sonuna deger değerinde düğüm ekleyen daireSonaEkle fonksiyonunu yazınız. Liste boş değilse head değişmesin; yeni sonun next alanı head’i göstersin.',before:'head → 10 → 20 ↩ head',after:'50 ekle: head → 10 → 20 → 50 ↩ head',
 plan:[['Yeni düğüm','malloc kontrolü ve data atamasını yap.'],['Boş çember','Boş liste için yeni->next = yeni yazıp yeni’yi döndür.'],['Sonu bul','next’i head olan düğüm sondur. temp->next != head koşuluyla oraya git.'],['Yeni sonu bağla','yeni->next = head ve eski son->next = yeni yap. Dolu listede return head: baş değişmez.']],
 hints:['Yeni son NULL’a değil head’e bağlanır.','Baş aynı kalır; sadece eski sonun bağlantısı ve yeni düğümün next’i değişir.','while (temp->next != head) sonrası temp->next = yeni; yeni->next = head.'],
 rubric:['Bellek ayırma ve boş liste kontrolü yapıldı.','Tek düğümlü daire destekleniyor.','Son düğüm NULL yerine head’e göre bulunuyor.','Çember kapanıyor; dolu listede head aynı kalıyor.'],
 code:`struct node *daireSonaEkle(struct node *head, int deger) {
    struct node *yeni = malloc(sizeof *yeni);
    if (yeni == NULL) return head;
    yeni->data = deger;
    if (head == NULL) {
        yeni->next = yeni;
        return yeni;
    }
    struct node *temp = head;
    while (temp->next != head) temp = temp->next;
    yeni->next = head;
    temp->next = yeni;
    return head;
}`,
 tests:[{a:[],value:50,out:[50]},{a:[10],value:50,out:[10,50]},{a:[10,20],value:50,out:[10,20,50]}],call:'daireSonaEkle(head, deger)',explain:'Dairesel başa ve sona ekleme bağlantıları benzerdir; fark hangi düğümün head olarak döndürüldüğüdür.'
},
{
 id:'daire-ilk-sil',title:'Dairesel listenin ilk düğümünü sil',group:'Dairesel liste',circular:true,signature:'struct node *daireIlkSil(struct node *head)',
 prompt:'Tek yönlü dairesel listenin ilk düğümünü silen daireIlkSil fonksiyonunu yazınız. Boş listede NULL döndürünüz. Tek düğüm silinince liste boş olsun. Çok düğümlü listede son düğüm yeni başı göstersin.',before:'head → 10 → 20 → 30 ↩ head',after:'head → 20 → 30 ↩ yeni head; 10 serbest',
 plan:[['Boş ve tek düğüm','head NULL ise dön. head->next == head ise tek düğüm vardır; onu free et ve NULL döndür.'],['Eski sonu bul','Çemberin kapanışını değiştirmek için son düğümü bul: son->next == head.'],['Yeni başı bağla','Yeni baş head->next’tir. Eski sonun next alanını bu adrese bağla.'],['Eski başı sil','Eski head’i temp’de tut, head’i ilerlet ve temp’yi free et. Son düğüm artık yeni head’i gösterir.']],
 hints:['Doğrusal ilk silmeye ek olarak eski sonun bağlantısını değiştirmelisin.','Tek düğüm kontrolü head->next == head.','Son->next = head->next işlemi eski baş serbest bırakılmadan önce yapılmalı.'],
 rubric:['Boş ve tek düğümlü daire ele alındı.','Son düğüm bulundu.','Sonun next alanı yeni head’i gösteriyor.','Eski baş free ediliyor ve yeni head dönüyor.'],
 code:`struct node *daireIlkSil(struct node *head) {
    if (head == NULL) return NULL;
    if (head->next == head) {
        free(head);
        return NULL;
    }
    struct node *son = head;
    while (son->next != head) son = son->next;
    struct node *eski = head;
    head = head->next;
    son->next = head;
    free(eski);
    return head;
}`,
 tests:[{a:[],out:[]},{a:[10],out:[]},{a:[10,20],out:[20]},{a:[10,20,30],out:[20,30]}],call:'daireIlkSil(head)',explain:'Sadece head = head->next yapıp eski başı silmek yeterli değildir: son düğüm serbest bırakılmış eski başı göstermeye devam eder.'
},
{
 id:'daire-deger-sil',title:'Dairesel listede aradan silme',group:'Dairesel liste',circular:true,signature:'struct node *daireDegerSil(struct node *head, int hedef)',
 prompt:'Dairesel bağlı listede data değeri hedef olan ilk düğümü silen daireDegerSil fonksiyonunu sıfırdan yazınız. Hedef yoksa tam bir turdan sonra durunuz. Baş, son ve tek düğüm durumlarını ele alınız.',before:'head → 10 → 20 → 30 → 40 ↩ head',after:'30 sil: head → 10 → 20 → 40 ↩ head',
 plan:[['Önceki düğüm','Önce sonu bul. Baslangıçta onceki = son, simdiki = head olsun; böylece başı silerken de önceki bağlantı hazırdır.'],['Bir tur ara','do…while ile en az bir kez incele; başa geri döndüğünde aramayı bitir. NULL burada bitiş işareti değildir.'],['Eşleşme ve tek düğüm','Eşleşmede simdiki->next == simdiki ise tek düğümdür; free edip NULL döndür.'],['Çemberi güncelle','onceki->next = simdiki->next. Eğer simdiki baş ise head’i sonraki düğüme al. simdiki’yi free edip dön.']],
 hints:['Bulunamayan hedefte sonsuz dönmemek için başlangıca dönüşü kontrol et.','Başın önceki düğümü dairesel listede sondur.','Eşleşmede önceki->next = simdiki->next; baş değişirse head’i de güncelle.'],
 rubric:['Boş ve tek düğümlü durum güvenli.','Bulunmayan hedefte bir tur sonunda duruluyor.','Baş veya son silinse de çember kapanıyor.','Yalnızca ilk eşleşme serbest bırakılıyor.'],
 code:`struct node *daireDegerSil(struct node *head, int hedef) {
    if (head == NULL) return NULL;
    struct node *onceki = head;
    while (onceki->next != head) onceki = onceki->next;
    struct node *simdiki = head;
    do {
        if (simdiki->data == hedef) {
            if (simdiki->next == simdiki) {
                free(simdiki);
                return NULL;
            }
            onceki->next = simdiki->next;
            if (simdiki == head) head = simdiki->next;
            free(simdiki);
            return head;
        }
        onceki = simdiki;
        simdiki = simdiki->next;
    } while (simdiki != head);
    return head;
}`,
 tests:[{a:[],value:30,out:[]},{a:[30],value:30,out:[]},{a:[10],value:30,out:[10]},{a:[10,20,30,40],value:30,out:[10,20,40]},{a:[10,20,30],value:10,out:[20,30]},{a:[10,20,30],value:30,out:[10,20]},{a:[10,20,30],value:99,out:[10,20,30]}],call:'daireDegerSil(head, deger)',explain:'Tahtadaki aradan silme bağlantısı önceki düğümün next alanını değiştirir. Dairesel listede hedef bulunmadığında head’e dönüş koşulu da gerekir.'
}
];

// Yeni dosyalar yalnızca mevcut tahta işlemlerinin farklı girdilerini kullanır.
(function(g){
 const clone=(id,extra)=>({...g.CWritingTasks.find(t=>t.id===id),baseId:id,...extra});
 const fourth=clone('besinci',{
  id:'dorduncu',position:4,title:'Yanlış sıra: 4. düğümü çıkar',
  signature:'struct node *dorduncuSil(struct node *head)',call:'dorduncuSil(head)',
  prompt:'Delil zincirindeki 4. düğüm yanlış kaydedildi. İlk sıra numarası 1 olacak şekilde yalnızca 4. düğümü siliniz. data değeri 4 olan düğümü aramayınız. Dört düğümden kısa liste değişmesin; güncel head döndürülsün.',
  before:'head → 4 → 18 → 4 → 27 → 36 → NULL',after:'head → 4 → 18 → 4 → 36 → NULL',
  plan:[['Konum ile veri farklıdır','4 sayısını aramıyoruz. Baştan sayınca 4. kutu 27 taşır; iki adet 4 verisi yerinde kalır.'],['Öncesinde dur','temp ilk düğümde başlar. İki next hareketiyle 3. düğüme ulaşır; konum < 3 koşulu bunu sağlar.'],['Oku aktar','temp->next silinecek 4. düğümdür. Adresini sakla, temp->next alanına onun devamını aktar.'],['Belleği bırak','free yalnızca saklanan düğümü bırakır. Baş değişmez. Kısa listede NULL kontrolü işlemi durdurur.']],
  hints:['Sayı değil sıra numarası.','4. düğümün önceki düğümü 3. düğümdür.','İki kez ilerle; devamı koru, bağlantıyı değiştir, sonra free.'],
  rubric:['data karşılaştırılmadı.','Gezici 3. düğümde duruyor.','4. düğüm atlatılıp free ediliyor.','Kısa liste ve head korunuyor.'],
  tests:[{a:[4,18,4,27,36],out:[4,18,4,36]},{a:[9,4,12],out:[9,4,12]},{a:[2,7,11,19],out:[2,7,11]}],edgeIndex:1,
  explain:'Konum ile data birbirinden bağımsızdır. Bu görevde 4 verisini değil 4. düğümü sileriz. Gezici 3. düğümde durur; dördüncü son düğümse önceki next NULL olur.'
 });
 fourth.code=fourth.code.replaceAll('besinciSil','dorduncuSil').replace('konum < 4','konum < 3');
 const repeated=clone('deger-sil',{
  id:'tekrar-delil',title:'Çift kayıt: yalnızca ilk eşleşmeyi sil',signature:'struct node *ilkKaydiSil(struct node *head, int hedef)',call:'ilkKaydiSil(head, deger)',
  prompt:'Aynı delil numarası listede birden fazla kez bulunabilir. Verilen hedef sayının yalnızca ilk görüldüğü düğümü siliniz. Sonraki eşleşmeler kalsın. Hedef yoksa hiçbir bağlantıyı değiştirmeyiniz.',
  before:'head → 12 → 7 → 7 → 21 → NULL',after:'7 sil: head → 12 → 7 → 21 → NULL',
  tests:[{a:[12,7,7,21,7],value:7,out:[12,7,21,7]},{a:[7,7,21],value:7,out:[7,21]},{a:[12,7,21],value:99,out:[12,7,21]},{a:[],value:7,out:[]}],edgeIndex:1,
  explain:'İlk eşleşmede bağlantı değiştirilip fonksiyondan dönülür. Aynı sayıyı taşıyan diğer düğümler ayrı adreslerde yaşar ve silinmez. İlk eşleşme baştaysa yeni head sonraki eşleşmeyi gösterebilir.'
 });
 repeated.code=repeated.code.replaceAll('degerSil','ilkKaydiSil');
 const merge=clone('birlestir',{
  id:'bos-dosya',title:'Boş dosya: iki zinciri birleştir',signature:'struct node *dosyalariBirlestir(struct node *head1, struct node *head2)',call:'dosyalariBirlestir(head, ikinci)',
  prompt:'İki ayrı doğrusal delil listesini, ikinci liste birincinin devamı olacak şekilde birleştiriniz. Listelerden biri veya ikisi boş olabilir. Yeni düğüm ayırmayınız, sayı sıralamayınız, var olan düğümleri silmeyiniz.',
  before:'head1 → 8 → 3 → NULL | head2 → 3 → 14 → NULL',after:'head → 8 → 3 → 3 → 14 → NULL',
  tests:[{a:[8,3,3],b:[3,14],out:[8,3,3,3,14]},{a:[],b:[6,11],out:[6,11]},{a:[6,11],b:[],out:[6,11]},{a:[],b:[],out:[]}],edgeIndex:1,
  explain:'Birleştirme sıralama değildir; tekrar eden sayılar korunur. İlk baş NULL ise ikinci baş döner. İkinci baş NULL ise birincinin son next alanı NULL kalır. Her iki baş NULL ise sonuç boştur.'
 });
 merge.code=merge.code.replaceAll('birlestir','dosyalariBirlestir');
 const circle=clone('daire-deger-sil',{
  id:'daire-bas-delil',title:'Dairede çift iz: başı güvenle sil',signature:'struct node *daireKaydiSil(struct node *head, int hedef)',call:'daireKaydiSil(head, deger)',
  prompt:'Dairesel delil listesinde head’den başlayarak hedefin ilk eşleşmesini siliniz. Baş silinirse eski sonun dönüş okunu yeni başa taşıyınız. Aynı sayıyı taşıyan diğer düğümler kalsın; tek düğüm silinirse NULL dönsün.',
  before:'head → 9 → 15 → 9 → 24 ↩ head',after:'9 sil: head → 15 → 9 → 24 ↩ head',
  tests:[{a:[9,15,9,24,9],value:9,out:[15,9,24,9]},{a:[9],value:9,out:[]},{a:[9,9],value:9,out:[9]},{a:[9,15],value:99,out:[9,15]},{a:[],value:9,out:[]}],edgeIndex:2,
  explain:'Aynı data aynı adres demek değildir. İlk baş silindiğinde son düğümün oku yeni head’e bağlanır; kalan 9 düğümü korunur. İki eşit düğümden biri silinince kalan düğüm kendi adresine dönen tek düğümlü daire olur.'
 });
 circle.code=circle.code.replaceAll('daireDegerSil','daireKaydiSil');
 g.CWritingTasks.push(fourth,repeated,merge,circle);
})(window);
