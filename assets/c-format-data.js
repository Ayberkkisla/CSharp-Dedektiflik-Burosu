(function(g){
// Each short note teaches precisely the decision asked on the following page.
const lessons={
 'basa':[
 ['Yeni düğüme veriyi koy','Yeni kutunun içine 7 yazalım. data sayı tutar; next adres tutar.','yeni->data = 7;','Yeni düğümün sayı alanı hangisi?','data',['next','head','malloc','free'],'Veri data’da, bağlantı next’te.'],
 ['Eski listeyi yeni düğüme bağla','Liste 10 → 20. Yeni düğümün devamı eski ilk düğüm olan 10 olmalı.','yeni->next = head;','Yeni düğümü eski ilk düğüme hangi satır bağlar?','yeni->next = head;',['head = yeni;','yeni->next = NULL;','head->next = yeni;','free(head);'],'Önce eski başın adresini yeni düğümde koru.'],
 ['Baş işaretini taşı','Yeni düğüm artık 10’a bağlı. Baş işaretini yeni düğüme taşıyabiliriz.','head = yeni;','Yeni düğümü listenin başı yapan satır hangisi?','head = yeni;',['head = NULL;','yeni = head;','head = head->next;','free(yeni);'],'Bağla, sonra başı değiştir.']
 ],
 'sona':[
 ['Yeni sonun devamı yok','Doğrusal listede son düğümden sonra hiçbir düğüm gelmez.','yeni->next = NULL;','Yeni sonun next alanına ne koyarız?','NULL',['head','yeni','deger','temp'],'Doğrusal listenin sonu NULL.'],
 ['Son düğümde dur','10 → 20 listesinde 20’nin next’i NULL. Gezici 20’de durmalı.','while (temp->next != NULL) temp = temp->next;','Son düğümde durmak için hangi koşul?','temp->next != NULL',['temp != NULL','temp == NULL','head == NULL','temp->next == head'],'Sonu bulurken bir sonraki bağlantıya bak.'],
 ['Yeni düğümü sona bağla','temp son düğümü, yeni eklenecek düğümü gösteriyor.','temp->next = yeni;','Eski sonu yeni düğüme hangi satır bağlar?','temp->next = yeni;',['head = yeni;','yeni->next = head;','temp = NULL;','free(temp);'],'Eski sonun oku yeni sona gider.']
 ],
 'yazdir':[
 ['İlk düğümden başla','Listeyi okumak için geziciyi ilk düğüme koyarız.','struct node *temp = head;','Gezici hangi adresten başlamalı?','head',['NULL','head->next','temp->next','0'],'Gezici başlangıçta ilk düğümde.'],
 ['Düğüm varsa oku','temp NULL değilse okunabilecek bir düğüm var. Son düğümü de okumalıyız.','while (temp != NULL) { /* oku */ }','Bütün düğümleri işleyen koşul hangisi?','temp != NULL',['temp->next != NULL','temp == NULL','head == NULL','temp->next == head'],'Düğüm var mı? temp != NULL.'],
 ['Oku ve ilerle','Önce mevcut sayıyı yazdır. Sonra oku izleyerek sonraki düğüme git.','printf("%d ", temp->data);\ntemp = temp->next;','Sonraki düğüme nasıl gideriz?','temp = temp->next;',['temp++;','temp = head;','temp = NULL;','free(temp);'],'Bağlı listede ilerlemek: next’i izle.']
 ],
 'ilk-sil':[
 ['Silinecek adresi sakla','10 → 20 listesindeki 10’u sileceğiz. Adresini temp’te tutalım.','struct node *temp = head;','Eski ilk düğümün adresini hangi değişken saklıyor?','temp',['data','NULL','next','free'],'Silinecek adres ayrı tutulur.'],
 ['Yeni başı seç','İlk düğümün devamı 20. Belleği bırakmadan önce başı 20’ye taşı.','head = head->next;','İlk düğüm silinince yeni head ne olmalı?','Eski head’in next adresi',['Her zaman NULL','Eski head’in data değeri','Eski head’in kendisi','Son düğümün data değeri'],'Devamı koru, sonra sil.'],
 ['Yalnızca eski başı bırak','head artık 20’yi, temp eski 10’u gösterir. Yalnızca temp’i bırak.','free(temp);','Hangi düğüm serbest bırakılmalı?','temp',['head','head->next','NULL','Listenin hepsi'],'Yeni baş değil, saklanan eski baş silinir.']
 ],
 'son-sil':[
 ['Tek düğüm özel durum','head var ama head->next NULL ise listede yalnızca bir düğüm vardır.','if (head->next == NULL) { free(head); return NULL; }','Tek düğüm silinince liste nasıl olur?','Boş liste',['Aynı düğüm kalır','İki düğüm olur','Dairesel olur','data sıfırlanır'],'Son düğüm aynı zamanda ilk olabilir.'],
 ['Sondan önce dur','10 → 20 → 30 listesinde 30’u silmek için 20’de dururuz.','while (temp->next->next != NULL) temp = temp->next;','30’u silerken hangi düğümün oku değişecek?','20',['10','30','NULL','Yeni düğüm'],'Silinecek düğümün öncesinde dur.'],
 ['Yeni sonu bitir','temp 20’yi, silinecek 30’u gösteriyor. 20 artık son olacak.','temp->next = NULL;\nfree(silinecek);','Yeni sonun next alanı ne olmalı?','NULL',['head','silinecek','temp','30'],'Yeni sonun devamı yok.']
 ],
 'deger-sil':[
 ['Değer ile konumu ayır','Hedef 30 ise sıra numarasına değil, düğümün data alanına bakarız.','temp->data == hedef','Hedef değeri hangi alanda ararız?','data',['next','head','sizeof','free'],'Değer data’dadır.'],
 ['Önceki düğümü tut','10 → 20 → 30 listesinde 20 silinecekse 10’un bağlantısı değişir.','onceki->next = temp->next;','20 silinince 10 hangi düğüme bağlanır?','30',['20','10','Her zaman NULL','Yeni düğüm'],'Önceki düğümü silinenin devamına bağla.'],
 ['Aradığın yoksa dur','Gezici NULL olursa liste bitti. Alanını okumadan önce bunu kontrol et.','temp != NULL && temp->data != hedef','Koşulda önce hangi kontrol yapılmalı?','temp != NULL',['temp->data != hedef','free(temp)','temp++','head = NULL'],'Önce düğüm var mı, sonra değerini oku.']
 ],
 'besinci':[
 ['Konum sayıyoruz','5. eleman, değeri 5 olan düğüm değildir. İlk düğümün konumu 1’dir.','11 → 22 → 33 → 44 → 55 → 66','Bu listede 5. düğümün değeri kaç?','55',['5','44','66','11'],'Konum ile data farklıdır.'],
 ['Önceki düğümde dur','5. düğümü atlatmak için 4. düğümün bağlantısını değiştiririz.','temp /* 4. düğüm */','5. düğümü silmeden önce nerede durmalıyız?','4. düğümde',['5. düğümde','6. düğümde','Son düğümde','NULL’da'],'k. düğümü silmek için k−1’de dur.'],
 ['Üç kez ilerle','head 1. düğümde. 1→2, 2→3, 3→4: üç hareket.','temp = temp->next; /* her hareket bir düğüm */','1. düğümden 4. düğüme kaç next hareketi?','3',['1','2','4','5'],'Başlangıç düğümünü hareket sayma.']
 ],
 'birlestir':[
 ['Listelerin sırasını koru','İlk liste 10 → 20; ikinci 30 → 40. İkinciyi birincinin sonuna bağlarız.','10 → 20 → 30 → 40 → NULL','Birleştirince ilk düğüm hangisi kalır?','10',['20','30','40','NULL'],'İkinci liste birincinin arkasına gelir.'],
 ['İlk listenin sonunu bul','temp ilk listenin son düğümünü gösterene kadar ilerler.','while (temp->next != NULL) temp = temp->next;','İlk listenin son düğümünün next’i şu an ne?','NULL',['head1','head2','temp','data'],'Bağlantı kurulacak yer ilk listenin sonu.'],
 ['Sonu ikinci başa bağla','temp 20’de, head2 30’da. 20’nin oku 30’a gitmeli.','temp->next = head2;','Birleştiren satır hangisi?','temp->next = head2;',['head1 = head2;','head2->next = head1;','free(head2);','temp->next = NULL;'],'Son1’in oku Baş2’ye gider.']
 ],
 'daire-basa':[
 ['Dairenin sonunu tanı','Dairesel listede son düğümün oku tekrar ilk düğüme döner.','10 → 20 → head','Son düğümün next’i neyi gösterir?','head',['NULL','data','free','Kendi kendisini zorunlu olarak'],'Dairede son, başa döner.'],
 ['Yeni başı eski başa bağla','Yeni düğüm 7, eski baş 10. Önce 7’yi 10’a bağla.','yeni->next = head;','Yeni düğümün devamı hangi düğüm?','Eski head',['NULL','Eski son','Kendisi','Hiçbiri'],'Yeni başın devamı eski baş.'],
 ['Dairenin son okunu düzelt','Yeni baş 7 olunca eski sonun da 7’ye dönmesi gerekir.','son->next = yeni;','Eski sonun oku nereye yönelmeli?','Yeni düğüme',['Eski head’e','NULL’a','data’ya','Serbest belleğe'],'Dairenin kapanışını unutma.']
 ],
 'daire-sona':[
 ['Yeni son başa döner','Dairede yeni sonun devamı NULL değil, mevcut ilk düğümdür.','yeni->next = head;','Yeni sonun next alanı ne olmalı?','head',['NULL','deger','son','free'],'Daireyi yeni son kapatır.'],
 ['Eski sonu bul','Son düğümü, next alanının head’e dönmesinden tanırız.','while (son->next != head) son = son->next;','Son düğümde durmayı sağlayan koşul hangisi?','son->next != head',['son != NULL','son->next != NULL','son == head','head == NULL'],'Dairede bitiş işareti head’e dönüş.'],
 ['Eski sonu yeni sona bağla','Eski sonun arkasına yeni düğümü ekle. head aynı kalır.','son->next = yeni;','Sona eklemede mevcut head değişir mi?','Hayır, liste boş değilse değişmez',['Her zaman değişir','NULL olur','Son düğüm olur','Serbest bırakılır'],'Sona ekleme, dolu listenin başını değiştirmez.']
 ],
 'daire-ilk-sil':[
 ['Tek düğümlü daire','Tek düğümün next’i kendisini gösterir. Silinince daire boşalır.','head->next == head','Tek düğümlü dairenin işareti hangisi?','head->next == head',['head->next == NULL','head == NULL','head->data == 1','head->next != head'],'Tek düğüm kendisine döner.'],
 ['Yeni başı al','10 → 20 → 30 → head dairesinde 10 silinecek. Yeni baş 20.','struct node *yeniBas = head->next;','İlk düğüm silinince yeni başın değeri kaç?','20',['10','30','0','NULL'],'Yeni baş eski başın devamı.'],
 ['Sonu yeni başa döndür','30 artık silinen 10’a dönmemeli. Sonun okunu 20’ye taşı.','son->next = yeniBas;','Son düğüm nereye bağlanmalı?','Yeni başa',['Silinen başa','NULL’a','Kendisine','data’ya'],'Silmeden önce daireyi yeni başa kapat.']
 ],
 'daire-deger-sil':[
 ['Hedef veriyi ara','Dairede de aranan sayı data alanındadır.','temp->data == hedef','Dairede hedef sayıyı nerede ararız?','data',['next','head','NULL','malloc'],'Liste biçimi değişse de veri data’dadır.'],
 ['Başlangıca dönünce dur','Dairede NULL’a ulaşmayız. Başlangıca döndüğümüzde bir tur bitmiştir.','temp == head /* bir turdan sonra */','Değer yoksa arama ne zaman bitmeli?','Başlangıca geri dönünce',['NULL’a ulaşınca','Sonsuza kadar sürmeli','İlk düğümden önce','malloc çağrılınca'],'Dairede bir tur yeter.'],
 ['Aradaki düğümü atlat','10 → 20 → 30 → head dairesinde 20’yi silince 10, 30’a bağlanır.','onceki->next = temp->next;\nfree(temp);','20 silinince 10’un next’i hangi düğüm?','30',['20','10','NULL','Yeni düğüm'],'Atlat, sonra belleği bırak.']
 ]
};
g.CFormatCases=g.CWritingTasks.map((t,i)=>({task:t,n:i+1,notes:lessons[t.id].map((x,j)=>({title:x[0],text:x[1],code:x[2],question:x[3],answer:x[4],options:[...x[5].slice(j),x[4],...x[5].slice(0,j)],memory:x[6]}))}));
})(window);
