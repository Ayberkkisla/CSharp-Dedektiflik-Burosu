(function(g){'use strict';
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const teaching=[
 ['shelf','5 raf var. 3. raf kapalı.','Kapalı rafın numarasını yazmadan geçeceğiz.'],
 ['boxes','4 kutu var: 3, 0, 2, 0 delil.','Delilleri toplama. Sadece dolu kutuları say.'],
 ['shelf','6 raf var. Delil 3. rafta.','1, 2 ve 3 yazılacak. Sonraki raflara gidilmeyecek.'],
 ['shelf','7 raf var. 2 kapalı; hedef 5.','2’yi atla. 5’i de yazdıktan sonra dur.'],
 ['doors','Oda kodu 2 geldi.','2, Laboratuvar demek. Yalnızca o kapı açılacak.'],
 ['doors','Teslim kodu 2 geldi.','1 ve 2 aynı yere gider: Arşiv.'],
 ['doors','Lambanın rengi sari.','Sarı ışık için ekrana Hazırlan yazacağız.'],
 ['doors','Tür 2, adet 3.','Hassas paketin tanesi 8 TL. 3 × 8 = 24.'],
 ['temperature','3 ölçüm var: -2, 0, 5 derece.','Her ölçümü ayrı değerlendir: 0 ve altı Soğuk.'],
 ['numbers','Sayılar: 4, -3, 2, 0.','4 ve 2’yi topla. -3’ü alma. 0 gelince bitir.'],
 ['numbers','Sayılar: 2, 3, 0, 6.','Çiftlerin adedini ve toplamını ayrı ayrı tut.'],
 ['battery','Pil 35. Hedef 80.','Her tur +20; son turda 80’i aşma.'],
 ['boxes','Hedef 7 delil. Kutular: 3, 0, 5.','Boş kutu da açılmış sayılır. Toplam 8 olunca dur.'],
 ['maximum','Ölçümler: -8, -3, -12, -5.','En büyük -3. Negatiflerde de karşılaştırma yap.'],
 ['stock','Başlangıçta 1 kutu var.','1 tuşu +3; 2 tuşu yeterliyse -2; 0 bitirir.']
];
function conditionOf(line){
 if(/\bfor\s*\(/.test(line))return line.split(';')[1]?.trim()||'';
 const found=/\b(?:if|while|switch)\s*\(/.exec(line);if(!found)return '';
 let start=found.index+found[0].length,depth=1,quote=false;
 for(let i=start;i<line.length;i++){const c=line[i];if(c==='"'&&line[i-1]!=='\\')quote=!quote;if(quote)continue;if(c==='(')depth++;if(c===')'&&--depth===0)return line.slice(start,i);}
 return '';
}
function substitute(expr,vars){
 return expr.replace(/"(?:\\.|[^"\\])*"|[\p{L}_][\p{L}\p{N}_]*/gu,k=>k.startsWith('"')?k:Object.hasOwn(vars,k)?(/^-?\d+(?:\.\d+)?$|^(?:True|False)$/.test(vars[k])?vars[k]:JSON.stringify(vars[k])):k);
}
function frameMessage(f,index,next,task){
 const v=f.variables,p=f.before,a=f.action,yes=f.value==='True',n=k=>v[k]??'…',line=f.code;
 if(f.phase==='intro')return {title:'Önce ne yapacağımızı anlayalım.',why:index>=4&&index<=7?'Kullanıcıdan gelen bilgiler: '+task.input.join(', ')+'.':teaching[index][1],effect:index>=4&&index<=7?'Değeri seçeneklerle karşılaştıracağız. Eşleşen bölüm çalışacak.':teaching[index][2]};
 if(f.phase==='setup')return {title:'Bilgiler hazır. Şimdi başlayabiliriz.',why:f.reads.map(r=>r.value).join(' · '),effect:teaching[index][2]};
 if(a==='Döngü koşulu'){
 let why=yes?'Koşul doğru; yeni bir tur açılıyor.':'Koşul yanlış; artık yeni tur yok.';
 if(index<4)why=yes?n('raf')+'. raf, son raf '+n('son')+' sınırını geçmedi.':'Son raf geçildi. Gezilecek raf kalmadı.';
 if([1,8,10].includes(index))why=yes?n('i')+' tanesi işlendi; toplam '+n('adet')+' tane var.':'İstenen '+n('adet')+' tanesinin hepsi işlendi.';
 if(index===9)why=yes?n('sayi')+' sıfır değil. Bu sayıyı değerlendireceğiz.':'0 geldi: yeni sayı okumayı bırakıyoruz.';
 if(index===11)why=yes?'Pil '+n('pil')+', hedef '+n('hedef')+'. Bir kez daha şarj edeceğiz.':'Pil hedefe ulaştı. Şarjı durduruyoruz.';
 if(index===12)why=yes?'Toplam '+n('toplam')+'; hedef '+n('hedef')+'. Bir kutu daha açmalıyız.':'Toplam hedefe ulaştı veya geçti. Yeni kutu açma.';
 if(index===13)why=yes?'Henüz bütün ölçümler karşılaştırılmadı.':'Bütün ölçümler karşılaştırıldı.';
 if(index===14)why=yes?'Komut '+n('komut')+'. 0 olmadığı için işlem yapılacak.':'0 geldi. Kumandayı kapatıyoruz.';
 return {title:yes?'Döngü bir tur daha çalışacak.':'Döngü burada bitiyor.',why,effect:yes?'Şimdi bu turun içindeki satırlara geç.':'Döngüden sonraki satırla devam et.'};
 }
 if(a==='Koşul'){
 let why='Koşul '+(yes?'doğru.':'yanlış.'),effect=yes?'if içindeki işlem çalışacak.':'else varsa o çalışacak; yoksa bu işlem atlanacak.';
 if(index===0||index===3&&line.includes('kapali')){why='Şu an raf '+n('raf')+'. Kapalı raf '+n('kapali')+'.';effect=yes?'Aynı raf: continue çalışacak; bu raf yazılmayacak.':'Farklı raf: continue çalışmayacak; bu raf yazılabilir.';}
 if(index===1){why='Bu kutuda '+n('sayi')+' delil var.';effect=yes?'Kutu boş: dolu sayısını artırmadan geçeceğiz.':'Kutu dolu: dolu sayısını bir artıracağız.';}
 if(index===2||index===3&&line.includes('hedef')){why='Şu an raf '+n('raf')+'. Hedef raf '+n('hedef')+'.';effect=yes?'Hedefe geldik. Bir sonraki komut break.':'Henüz hedef değil. Arama devam edecek.';}
 if(index===8){why='Sıcaklık '+n('derece')+' derece.';effect=yes?'0 veya altında: Soğuk yazacağız.':'0’dan büyük: else çalışacak, Normal yazacağız.';}
 if(index===9){why='Sıradaki sayı '+n('sayi')+'.';effect=yes?'Pozitif: toplama eklenecek.':'Pozitif değil: toplam değişmeyecek.';}
 if(index===10){why=n('sayi')+' sayısının 2’ye bölümünden kalan '+(Number(n('sayi'))%2)+'.';effect=yes?'Çift: hem adet bir artacak hem sayı toplama eklenecek.':'Tek: adet ve toplam aynı kalacak.';}
 if(index===11){why=n('pil')+' + 20 = '+(Number(n('pil'))+20)+'. Hedef '+n('hedef')+'.';effect=yes?'Hedefi aşıyor: pili doğrudan '+n('hedef')+' yapacağız.':'Hedefi aşmıyor: pile 20 ekleyeceğiz.';}
 if(index===12){why='Açılan kutuda '+n('sayi')+' delil var.';effect=yes?'Delilleri toplama ekle.':'Kutu boş: delil toplamı aynı kalır. Açılan kutu sayısı yine arttı.';}
 if(index===13){why='Yeni ölçüm '+n('olcum')+', eldeki en büyük '+n('enBuyuk')+'.';effect=yes?'Yeni ölçüm daha büyük: enBuyuk değişecek.':'Yeni ölçüm daha büyük değil: enBuyuk aynı kalacak.';}
 if(index===14){why='Stokta '+n('stok')+' kutu var; çıkarmak için en az 2 gerekiyor.';effect=yes?'Yeterli: stoktan 2 çıkaracağız.':'Yetmiyor: stok değişmeyecek.';}
 return {title:yes?'Şart sağlandı.':'Şart sağlanmadı.',why,effect};
 }
 if(a==='continue'){
 const current=n('raf');
 return {title:index===1?'Boş kutuyu saymadan geçiyoruz.':current+'. rafı yazmadan geçiyoruz.',
 why:index===1?'continue, aşağıdaki dolu++ satırını atlatır.':'continue, aşağıdaki Console.WriteLine satırını atlatır.',
 effect:index===1?'Dolu kutu sayısı '+n('dolu')+' olarak kaldı. Şimdi sonraki kutuya geç.':'Konsola '+current+' eklenmedi. Önce sayaç artacak, sonra sonraki rafa bakılacak.'};
 }
 if(a==='break')return f.switchBreak?
 {title:'Sadece switch bitti.',why:'Seçilen case tamamlandı. Diğer case’ler çalışmayacak.',effect:index===14?'while bitmedi. Şimdi stok yazılacak, sonra yeni komut okunacak.':'Seçilen sonuç yazıldı. Switch’in sonrasıyla devam ediyoruz.'}:
 {title:'Aramayı tamamen durdurduk.',why:'break döngüyü bitirdi. Artık sayaç artırılmayacak.',effect:n('raf')+'. raftan sonraki raflara hiç gidilmeyecek.'};
 if(a==='Switch seçimi')return {title:'Bu değer hangi seçeneğe uyuyor?',why:'switch içine gelen değer: '+f.value+'.',effect:'Seçeneklerdeki değerlerle karşılaştır. Eşleşme yoksa default seçilir.'};
 if(a==='Case seçildi')return {title:f.value==='default:'?'Hiçbiri uymadı: default.':'Eşleşen seçeneği bulduk.',
 why:'Gelen değer '+f.switchValue+'. Seçilen bölüm '+f.value+'.',
 effect:index===7?(f.value==='default:'?'Tür geçersiz: ücret hesaplamak yerine -1 yazılacak.':task.input[1]+' paket × '+(task.input[0]==='1'?5:8)+' TL = '+(Number(task.input[1])*(task.input[0]==='1'?5:8))+' TL. Bu tutar yazılacak.'):f.value==='default:'?'Diğer bütün case’ler elendi. Varsayılan sonuç kullanılacak.':'Yalnızca bu bölümdeki işlem çalışır. Diğer kapılar kapalı kalır.'};
 if(a==='Konsola yazıldı'){
 let effect='Önceki satırlar silinmedi. Yeni satır en alta eklendi.';
 if(index===0||index===2||index===3)effect=n('raf')+'. raf gerçekten yazıldı. Konsolda şimdi '+f.output.join(', ')+' var.';
 if(index===10)effect=f.output.length===1?'Bu ilk sonuç: çift sayı adedi. Sonraki satırda toplam yazılacak.':'Bu ikinci sonuç: çift sayıların toplamı.';
 return {title:'Ekrana '+f.value+' yazıldı.',why:'Console.WriteLine çalıştı.',effect};
 }
 if(f.phase==='read')return {title:'Sıradaki bilgiyi okuduk.',why:f.value+'.',effect:'Console.ReadLine her çağrıda sıradaki girdiyi alır. Aynı bilgi tekrar okunmaz.'};
 if(f.phase==='end')return {title:'Örneğin sonucu bu.',why:'Ekrana yazılanlar sağdaki konsolda duruyor.',effect:'Aynı mantığı şimdi sen kodla. Değerleri örnekteki sayılara sabitleme.'};
 const change=f.changes[0];
 if(change){
 const before=p[change]??'yok',after=v[change];
 let effect=change==='raf'?'Sonraki rafa geçtik. Yeni raf için koşulları tekrar kontrol edeceğiz.':change==='i'?'Bir sonraki tur için sayaç ilerledi.':'Bir sonraki işlem bu yeni değeri kullanacak.';
 if(index===1&&change==='dolu')effect='Bir kutu daha dolu çıktı. Kutudaki delil sayısını değil, kutuyu sayıyoruz.';
 if(index===11&&change==='pil')effect=Number(p.pil)+20>Number(v.hedef)?'95 yerine hedef olan 80’de kaldık. Hedef aşılmadı.':'Pil arttı. Şimdi yeni pil yüzdesi yazılacak.';
 return {title:change+' değişti.',why:before+' → '+after,effect};
 }
 return {title:'Bu satır çalışıyor.',why:f.value,effect:'Değeri ve sıradaki işlemi takip et.'};
}
function makeFrames(rows,src,index,task,custom=false){
 const lines=src.split('\n');let output=[],vars={},readCount=0,turn=0,selected='',switchValue='',list=[];
 for(let ri=0;ri<rows.length;ri++){
  const r=rows[ri],line=Math.max(0,r.line-1),code=lines[line]||'',a=r.action,before={...vars};vars={...r.variables};
  const changes=Object.keys(vars).filter(k=>vars[k]!==before[k]);
  const isRead=/ReadLine\s*\(/.test(code)&&['Değişken oluşturuldu','Değer güncellendi'].includes(a);
  if(isRead)readCount++;
  if(a==='Döngü koşulu'&&r.value==='True')turn++;
  if(a==='Konsola yazıldı')output.push(String(r.value));
  if(a==='Switch seçimi'){switchValue=r.value;selected='';}
  if(a==='Case seçildi')selected=r.value;
  let phase=isRead?'read':a==='Döngü koşulu'||a==='Koşul'?'check':a==='continue'?'skip':a==='break'?'stop':a==='Switch seçimi'||a==='Case seçildi'?'choose':a==='Konsola yazıldı'?'print':a==='Sayaç değişti'&&/\bfor\s*\(/.test(code)?'update':'work';
  const condition=phase==='check'?conditionOf(code):'';
  list.push({...r,line,code,phase,before,changes,readCount,turn,switchValue,selected,condition,evaluated:substitute(condition,vars),output:[...output],variables:{...vars},switchBreak:a==='break'&&r.value.startsWith('switch'),reads:isRead?[r]:[],custom});
 }
 // Initial declarations are one meaningful step instead of several flashes.
 let setupEnd=0;while(setupEnd<list.length&&list[setupEnd].action==='Değişken oluşturuldu')setupEnd++;
 if(setupEnd>1){const group=list.slice(0,setupEnd),last=group.at(-1);list.splice(0,setupEnd,{...last,phase:'setup',before:{},changes:Object.keys(last.variables),reads:group.flatMap(f=>f.reads),line:group[0].line,setupLines:group.map(f=>f.line)});}
 list.unshift({phase:'intro',line:-1,code:'',variables:{},before:{},changes:[],output:[],readCount:0,turn:0,reads:[],custom});
 const last=list.at(-1);
 list.push({...last,phase:'end',action:'',value:'',line:-1,code:'',changes:[],before:last.variables,custom});
 return list.map((f,i)=>{
  f.next=list[i+1]||null;f.explanation=custom?{title:f.phase==='intro'?'Şimdi senin kodunu izliyoruz.':f.phase==='end'?'Kodunun izlenen adımları bitti.':f.action||'Başlangıç',why:f.evaluated?f.evaluated+' → '+f.value:f.value||'Değişkenler ve gerçek çıktı adım adım gösterilecek.',effect:f.phase==='skip'?'Bu turun kalan satırları atlandı.':f.phase==='stop'?f.switchBreak?'Switch bitti; döngü devam edebilir.':'Döngü bitti; yeni tur yok.':'Alttaki değişiklikleri ve konsolu takip et.'}:frameMessage(f,index,list[i+1],task);
  return f;
 });
}

function sceneMarkup(index,task,groups,custom){
 const type=custom?'variables':teaching[index][0];
 let values=[],labels=[],kind=type;
 if(type==='shelf'){values=Array.from({length:Number(task.input[0])},(_,i)=>String(i+1));labels=values.map(v=>v+'. RAF');}
 if(type==='boxes'){values=task.input.slice(1);labels=values.map((v,i)=>(i+1)+'. KUTU');}
 if(type==='numbers'){values=index===10?task.input.slice(1):task.input;labels=values.map((v,i)=>(i+1)+'. SAYI');}
 if(type==='temperature'||type==='maximum'){values=task.input.slice(1);labels=values.map((v,i)=>(i+1)+'. ÖLÇÜM');}
 let body='',points=[];
 const gap=Math.min(140,710/Math.max(1,values.length)),start=410-(values.length-1)*gap/2;
 values.forEach((value,i)=>{
  const x=start+i*gap;points.push(x);
  let shape='';
  if(type==='shelf')shape='<path d="M-37 90V-4Q0-34 37-4V90Z" class="tt-object-shell"/><path d="M-40 45H40M-40 90H40" stroke="#b89c70" stroke-width="6"/><path d="M-17 17l15-9 15 9v20H-17Z" fill="#aabfb0"/><circle cx="-1" cy="24" r="3" fill="#233e43"/>';
  if(type==='boxes')shape='<path d="M-42 15L0-4l42 19v59L0 96l-42-22Z" class="tt-object-shell"/><path d="M0 35v61M-42 15L0 35l42-20" fill="none" stroke="#bdc5a6" stroke-width="2"/><path class="tt-box-lid" d="M-42 15L0-4l42 19L0 35Z" fill="#d8b77e" stroke="#f3dfb4" stroke-width="2"/><text y="69" class="tt-object-value">'+esc(value)+'</text>';
  if(type==='numbers')shape='<circle cy="42" r="41" class="tt-object-shell"/><circle cy="42" r="32" fill="none" stroke="#9bbaa82b" stroke-width="2"/><text y="52" class="tt-object-value">'+esc(value)+'</text>';
  if(type==='temperature')shape='<path d="M-13 55V-1a13 13 0 0 1 26 0v56a27 27 0 1 1-26 0" class="tt-object-shell"/><circle cy="77" r="17" fill="'+(+value<=0?'#8dccf0':'#edbd80')+'"/><path d="M0 64V'+(42-Math.min(50,Math.max(-10,+value))*2)+'" stroke="'+(+value<=0?'#8dccf0':'#edbd80')+'" stroke-width="11" stroke-linecap="round"/><text y="125" class="tt-object-value">'+esc(value)+'°</text>';
  if(type==='maximum')shape='<path d="M0 15v80M-25 95h50" stroke="#89aca8" stroke-width="3"/><circle cy="37" r="32" class="tt-object-shell"/><text y="47" class="tt-object-value">'+esc(value)+'</text><path class="tt-crown" d="M-24-15l-5-21 19 12L0-42l10 18 19-12-5 21Z" fill="#e4c280" opacity="0"/>';
  body+='<g class="tt-object" data-index="'+i+'" transform="translate('+x+' 72)"><ellipse cy="108" rx="48" ry="8" fill="#0004"/>'+shape+'<text y="-25" class="tt-object-label">'+esc(labels[i])+'</text><text y="153" class="tt-object-state">SIRADA</text><path class="tt-cross" d="M-30 5L30 80M30 5L-30 80" stroke="#eeae97" stroke-width="7" stroke-linecap="round" opacity="0"/></g>';
 });
 if(type==='doors'){
  const gap=770/groups.length,start=410-(groups.length-1)*gap/2;
  groups.forEach((group,i)=>{const x=start+i*gap;points.push(x);const key=group.keys.length?group.keys.join(' veya '):'diğerleri';
   body+='<g class="tt-door" data-index="'+i+'" transform="translate('+x+' 45)"><path d="M-57 141V29a57 57 0 0 1 114 0v112Z" fill="#0b171b" stroke="#71958f" stroke-width="3"/><path class="tt-room-light" d="M-49 138V29a49 49 0 0 1 98 0v109Z" fill="#b4edc514"/><g class="tt-door-leaf"><path d="M-49 138V29a49 49 0 0 1 98 0v109Z" fill="#315159" stroke="#a0beb0" stroke-width="2"/><circle cx="30" cy="82" r="4" fill="#e7c384"/></g><text y="-9" class="tt-door-key">'+esc(key)+'</text><text y="166" class="tt-door-name">'+esc(group.name)+'</text><text y="190" class="tt-door-state">KAPALI</text></g>';
  });
 }
 if(type==='battery')body='<g transform="translate(150 80)"><rect width="510" height="120" rx="22" fill="#11232b" stroke="#adc5b5" stroke-width="4"/><rect x="510" y="32" width="18" height="56" rx="5" fill="#adc5b5"/><rect class="tt-battery-fill" x="10" y="10" width="0" height="100" rx="14" fill="#8dd8b2"/><path class="tt-battery-target" d="M0-16V138" stroke="#e6bf79" stroke-width="3" stroke-dasharray="6 5"/><rect x="170" y="32" width="170" height="60" rx="10" fill="#11232b" opacity=".9"/><text class="tt-battery-text" x="255" y="76" text-anchor="middle" font-size="45" fill="#f7e8c8">35%</text><text class="tt-battery-goal" x="400" y="-24" text-anchor="middle" fill="#e6bf79" font-size="20">HEDEF 80</text></g>';
 if(type==='stock'){for(let i=0;i<15;i++)body+='<g class="tt-stock-box" data-index="'+i+'" transform="translate('+(170+i%8*65)+' '+(90+Math.floor(i/8)*70)+')"><path d="M-25 0L0-13 25 0V35L0 48l-25-13Z" fill="#a9c8af" stroke="#e6dfbc" stroke-width="2"/><path d="M0 12v36M-25 0L0 12 25 0" stroke="#54716b" fill="none" stroke-width="2"/></g>';body+='<text class="tt-stock-count" x="410" y="245" text-anchor="middle" fill="#e8d3a5" font-size="27">STOK: 1</text>';}
 if(type==='variables')body='<g transform="translate(280 50)"><rect width="260" height="155" rx="20" fill="#1a343c" stroke="#a1bbac" stroke-width="3"/><path d="M-20 170H280" stroke="#d9bd83" stroke-width="10" stroke-linecap="round"/><text x="130" y="85" text-anchor="middle" fill="#eddab0" font-size="25">SENİN KODUN</text><text x="130" y="119" text-anchor="middle" fill="#a8ccc0" font-size="17">Gerçek adımları izle</text></g>';
 return {type,points,markup:'<svg viewBox="0 0 820 285" role="img" aria-label="'+esc(type==='doors'?'Eşleşen seçeneğin kapısı açılır':type==='battery'?'Pil seviyesi hedefe kadar dolar':'Sorudaki nesnelerin hangi sırayla işlendiği gösterilir')+'"><path d="M40 200H780" stroke="#75968e22" stroke-width="2"/>'+body+'<g class="tt-pointer" opacity="0"><circle r="16" fill="#edc77b19" stroke="#edc77b" stroke-width="4"/><path d="M12 12l15 15" stroke="#edc77b" stroke-width="6" stroke-linecap="round"/></g></svg>'};
}
function mount(host,opt={}){
 let index=0,variant=0,frames=[],beat=0,source=[],task=null,custom=false,ownTrace=null,auto=false,reduced=!!opt.reduced,speed=1,timer=null,deadline=0,remaining=1800,animation=null,stage=null,previous=null,visual={x:100,power:0},seen=new Set(),skipped=new Set(),stopped=false;
 const $=s=>host.querySelector(s);
 host.innerHTML='<section class="teach14"><header class="tt-header"><div><small>CANLI ANLATIM · ÖNCE GÖR, SONRA YAZ</small><h2>Örneği birlikte çözelim.</h2></div><button class="tt-speed" type="button">Hız: 1×</button></header><div class="tt-toolbar"><label class="tt-examples">Başka değerle dene <select aria-label="Animasyondaki örneği değiştir"></select></label><span class="tt-manual">Adımları sen ilerlet. İstersen otomatik izle.</span><div><button class="tt-back" type="button">← Geri</button><b class="tt-step-count"></b><button class="tt-forward" type="button">Anlatımı ilerlet →</button></div></div><ol class="tt-inputs" aria-label="Örnek girdiler ve okunma sıraları"></ol><div class="tt-story-head"><small class="tt-phase"></small><h3 class="tt-title"></h3><p class="tt-why"></p></div><div class="tt-main"><div class="tt-live"><div class="tt-stage"></div><div class="tt-decision" hidden><small>KODDAKİ KONTROL</small><code></code><div><strong></strong><b></b></div></div><div class="tt-effect"><small>BU YÜZDEN</small><p></p></div><div class="tt-route" aria-label="Bu adımdan sonra izlenecek yol"></div><div class="tt-state-panels"><div class="tt-values"><small>DEĞİŞKENLER · ÖNCE → ŞİMDİ</small><div></div></div><div class="tt-console"><small>KONSOL · SADECE BURAYA YAZILANLAR ÇIKTIDIR</small><ol></ol><p></p></div></div></div><aside class="tt-side"><section class="tt-full-code" aria-label="Animasyonla birlikte takip edilen kodun tamamı"><div class="tt-code-heading"><h4>Örnek kodun tamamı</h4><b class="tt-code-status" aria-live="polite"></b></div><p class="tt-code-guide"><span>▶ Şu an çalışan satır</span><span>× Bu turda atlanan satır</span></p><ol></ol></section><div class="tt-current"><div><small>ÇALIŞAN KOD PARÇASI</small><b></b></div><pre class="tt-current-code"></pre><div class="tt-skip-code" hidden><small>BU SATIR ÇALIŞMADI</small><del></del></div></div></aside></div></section>';
 function stop(){clearTimeout(timer);timer=null;animation?.pause();animation=null;}
 function notify(){opt.onPlay?.(auto&&beat<frames.length-1);}
 function schedule(){if(auto&&!reduced&&beat<frames.length-1){deadline=performance.now()+remaining;timer=setTimeout(()=>{beat++;paint();},remaining);}}
 function route(items){$('.tt-route').innerHTML=items.map((v,i)=>(i?'<i>→</i>':'')+'<span>'+esc(v)+'</span>').join('');}
 function updateStage(f){
  const vars=f.variables,v=n=>Number(vars[n]),isDoor=stage.type==='doors';
  let focus=-1;
  if(stage.type==='shelf')focus=Number(vars.raf)-1;
  if(['boxes','temperature','numbers'].includes(stage.type)){
   if(index===12)focus=f.readCount-2;
   else if(index===9)focus=f.readCount-1;
   else focus=v('i');
  }
  if(stage.type==='maximum')focus=f.phase==='setup'?0:v('i'); 
  if(f.phase==='intro')focus=-1;
  if(f.phase==='end'&&stage.type!=='maximum')focus=-1;
  // Rebuild the visited state from the trace so stepping backwards is exact.
  seen=new Set();skipped=new Set();stopped=false;
  for(const past of frames.slice(0,beat+1)){
   if(past.action==='Konsola yazıldı'&&stage.type==='shelf')seen.add(Number(past.variables.raf)-1);
   if(past.action==='continue')skipped.add(stage.type==='shelf'?Number(past.variables.raf)-1:Number(past.variables.i));
   if(past.action==='break'&&!past.switchBreak)stopped=true;
  }
  const shelfStop=stopped?Number(frames.slice(0,beat+1).findLast(p=>p.action==='break'&&!p.switchBreak)?.variables.raf):Infinity;
  const objects=[...host.querySelectorAll('.tt-object')];
  objects.forEach((node,i)=>{
   const closed=stage.type==='shelf'&&Number(task.input[1])===i+1&&[0,3].includes(index);
   const cancelled=stage.type==='shelf'&&i+1>shelfStop;
   const done=stage.type==='shelf'?seen.has(i):i<(f.phase==='end'?stage.points.length:focus);
   const selected=i===focus&&!cancelled;
   node.classList.toggle('current',selected);node.classList.toggle('done',done);node.classList.toggle('skipped',skipped.has(i));node.classList.toggle('cancelled',cancelled);node.classList.toggle('closed',closed);
   const label=node.querySelector('.tt-object-state');
   label.textContent=index===9&&task.input[i]==='0'?'BİTİRME İŞARETİ':cancelled?'GİDİLMEDİ':skipped.has(i)?'ATLANDI':stage.type==='shelf'&&done?'YAZILDI':selected?'ŞU AN BURADA':done?'İŞLENDİ':closed?'KAPALI':'SIRADA';
   node.querySelector('.tt-cross').setAttribute('opacity',cancelled||skipped.has(i)?'1':'0');
   const crown=node.querySelector('.tt-crown');if(crown)crown.setAttribute('opacity',vars.enBuyuk===task.input[i+1]?'1':'0');
  });
  if(isDoor){
   const value=f.switchValue??vars[Object.keys(vars)[0]],hasChoice=!!f.selected;
   const chosen=stage.groups.findIndex(c=>c.keys.includes(String(value)));const picked=chosen<0?stage.groups.length-1:chosen;
   host.querySelectorAll('.tt-door').forEach((node,i)=>{node.classList.toggle('chosen',hasChoice&&i===picked);node.classList.toggle('rejected',hasChoice&&i!==picked);node.querySelector('.tt-door-state').textContent=hasChoice?(i===picked?'SEÇİLDİ · AÇIK':'EŞLEŞMEDİ'):'KAPALI';});
   focus=hasChoice?picked:-1;
  }
  let targetX=stage.points[focus]??visual.x,targetPower=stage.type==='battery'?Number(vars.pil??task.input[0]):visual.power;
  const pointer=$('.tt-pointer');pointer.setAttribute('opacity',focus>=0&&stage.points[focus]!=null?'1':'0');
  stage.focusX=targetX;const from={...visual},travel={t:0};
  const sync=()=>{pointer.setAttribute('transform','translate('+visual.x+' 241)');if(stage.type==='battery'){$('.tt-battery-fill').setAttribute('width',String(Math.max(0,Math.min(100,visual.power))*4.9));$('.tt-battery-text').textContent=Math.round(visual.power)+'%';const goal=Number(vars.hedef??task.input[1]);$('.tt-battery-target').setAttribute('transform','translate('+(10+goal*4.9)+' 0)');$('.tt-battery-goal').setAttribute('x',String(10+goal*4.9));$('.tt-battery-goal').textContent='HEDEF '+goal;}};
  if(!reduced&&g.anime?.createTimeline){animation=g.anime.createTimeline({autoplay:false});animation.add(travel,{t:[0,1],duration:460/speed,ease:'inOut(2)',onUpdate:()=>{visual.x=from.x+(targetX-from.x)*travel.t;visual.power=from.power+(targetPower-from.power)*travel.t;sync();}},0);animation.play();}else{visual.x=targetX;visual.power=targetPower;sync();}
  if(stage.type==='stock'){const stock=Number(vars.stok??task.input[0]);host.querySelectorAll('.tt-stock-box').forEach((node,i)=>node.style.opacity=i<stock?'1':'0');$('.tt-stock-count').textContent='STOK: '+stock+' KUTU';}
 }

 function paint(){
  stop();const f=frames[beat];if(!f)return;
  const e=f.explanation;
  $('.tt-step-count').textContent=(beat+1)+' / '+frames.length;
  $('.tt-back').disabled=beat===0;$('.tt-forward').disabled=beat===frames.length-1;
  $('.tt-forward').textContent=beat===0?'Örneği başlat →':beat===frames.length-1?'Örnek bitti':'Anlatımı ilerlet →';
  $('.tt-phase').textContent=({intro:'OLAYI ANLA',setup:'BİLGİLERİ HAZIRLA',read:'KULLANICIDAN YENİ BİLGİ',check:'ŞARTI GERÇEK DEĞERLERLE KONTROL ET',skip:'CONTINUE · SADECE BU TURU ATLA',stop:f.switchBreak?'BREAK · SWITCH’TEN ÇIK':'BREAK · DÖNGÜYÜ BİTİR',choose:'SWITCH · TEK BİR SEÇENEK',print:'ÇIKTIYA YENİ SATIR EKLE',update:'SONRAKİ TURA HAZIRLAN',work:'DEĞERİ DEĞİŞTİR',end:'SONUCU GÖR'})[f.phase];
  $('.tt-title').textContent=e.title;$('.tt-why').textContent=e.why;
  $('.tt-effect p').textContent=e.effect;$('.tt-effect').className='tt-effect '+f.phase;
  $('.tt-inputs').querySelectorAll('li').forEach((el,i)=>{el.classList.toggle('read',i<f.readCount);el.classList.toggle('next',i===f.readCount);el.querySelector('em').textContent=i<f.readCount?'okundu':i===f.readCount?'sıradaki':'bekliyor';});
  $('.tt-values>div').innerHTML=Object.entries(f.variables).map(([name,value])=>'<span class="'+(f.changes.includes(name)?'changed':'')+'"><small>'+esc(name)+'</small><strong>'+(f.changes.includes(name)?'<del>'+esc(f.before[name]??'—')+'</del><i>→</i>':'')+esc(value)+'</strong></span>').join('')||'<p>Bilgiler okununca burada görünecek.</p>';
  $('.tt-console ol').innerHTML=f.output.map((value,i)=>'<li class="'+(f.phase==='print'&&i===f.output.length-1?'new':'')+'">'+esc(value)+'</li>').join('');
  $('.tt-console p').textContent=f.phase==='skip'?'Bu turda konsola yeni satır eklenmedi.':f.output.length?'Yazılan satırlar burada kalır.':'Henüz ekrana bir şey yazılmadı.';
  $('.tt-current b').textContent=f.line<0?'':('SATIR '+(f.line+1));
  const setupCode=f.setupLines?.map(n=>{const line=source[n].trim();return /\bfor\s*\(/.test(line)?line.match(/for\s*\(([^;]+)/)?.[1]+';':line;}).join('\n');
  let activePart=f.code.trim();
  if(f.action==='continue')activePart='continue;';
  else if(f.action==='break')activePart='break;';
  else if(f.action==='Case seçildi')activePart=f.selected;
  else if(f.action==='Konsola yazıldı')activePart=f.code.match(/Console\s*\.\s*WriteLine\s*\((.*)\)\s*;/)?.[0]||activePart;
  else if(f.phase==='update'&&/\bfor\s*\(/.test(f.code))activePart=f.code.split(';')[2].split(')')[0].trim()+';';
  else if(f.action==='Koşul')activePart='if ('+f.condition+')';
  else if(f.action==='Döngü koşulu')activePart=/\bfor\s*\(/.test(f.code)?'for (...; '+f.condition+'; ...)':'while ('+f.condition+')';
  else if(f.action==='Değer güncellendi'&&/\bif\s*\(/.test(f.code)){const condition=conditionOf(f.code);activePart=f.code.slice(f.code.indexOf(condition)+condition.length+1).trim();}
  else if(f.action==='Değer güncellendi')activePart=activePart.replace(/^else\s+/,'');
  $('.tt-current-code').textContent=f.phase==='intro'?'Birlikte adım adım çalıştıracağız.':f.phase==='end'?'Şimdi sıra sende.':setupCode||activePart;
  const skipCode=$('.tt-skip-code');skipCode.hidden=f.phase!=='skip';
  if(f.phase==='skip'){skipCode.querySelector('del').textContent=source.slice(f.line+1).find(s=>s.trim()&&!/^[{}]/.test(s.trim()))?.trim()||'Bu turun kalan satırları';}
  $('.tt-decision').hidden=!['check','choose'].includes(f.phase);
  if(f.phase==='check'){
   $('.tt-decision code').textContent=f.condition;
   $('.tt-decision strong').textContent=f.evaluated;
   $('.tt-decision b').textContent=f.value==='True'?'DOĞRU':'YANLIŞ';
   $('.tt-decision').className='tt-decision '+(f.value==='True'?'true':'false');
  }else if(f.phase==='choose'){
   $('.tt-decision code').textContent=f.action==='Switch seçimi'?f.code.trim():f.selected;
   $('.tt-decision strong').textContent='Gelen değer: '+f.switchValue;
   $('.tt-decision b').textContent=f.selected?'SEÇİLDİ':'KARŞILAŞTIR';
   $('.tt-decision').className='tt-decision true';
  }
  if(f.phase==='skip'){
   const future=f.next?.variables?.raf??f.next?.variables?.i;
   route(index===1?['Boş kutu','dolu++ ATLANDI','Sonraki kutu']:[f.variables.raf+'. raf','Yazdırma ATLANDI','Sayaç artacak',future!=null?future+'. raf':'Sonraki tur']);
  }else if(f.phase==='stop')route(f.switchBreak?['Seçilen case','break','Switch sonrası']:[f.variables.raf?f.variables.raf+'. raf':'Bu tur','break','Döngü sonrası']);
  else if(f.phase==='check')route(f.value==='True'?['Kontrol','DOĞRU',f.action==='Döngü koşulu'?'Tura gir':'if içi']:['Kontrol','YANLIŞ',f.action==='Döngü koşulu'?'Döngü sonrası':/\belse\b/.test(source.join(' '))?'else veya sonraki satır':'if’i geç']);
  else if(f.phase==='print')route(['Console.WriteLine',String(f.value),'Konsola eklendi']);
  else route(f.phase==='end'?['Örnek tamam','Şimdi sen kodla']:['Sıradaki satır',f.next?.action||'Örnek sonu']);
  const skippedLine=f.phase==='skip'?source.findIndex((s,i)=>i>f.line&&s.trim()&&!/^[{}]/.test(s.trim())):-1;
  $('.tt-code-status').textContent=f.phase==='intro'?'Henüz başlamadı':f.phase==='end'?'Örnek tamamlandı':'Şimdi: '+(f.line+1)+'. satır';
  $('.tt-full-code ol').querySelectorAll('li').forEach((el,i)=>{const active=!['intro','end'].includes(f.phase)&&(i===f.line||!!f.setupLines?.includes(i));el.classList.toggle('active',active);el.classList.toggle('not-run',i===skippedLine);if(active)el.setAttribute('aria-current','step');else el.removeAttribute('aria-current');el.setAttribute('aria-label',(i+1)+'. satır'+(active?' · şu an çalışıyor':i===skippedLine?' · bu turda atlandı':'')+': '+source[i]);});
  updateStage(f);
  const stageHost=$('.tt-stage');if(stage.points.length&&stageHost.scrollWidth>stageHost.clientWidth){const x=stage.focusX/820*stageHost.querySelector('svg').getBoundingClientRect().width;stageHost.scrollTo({left:Math.max(0,x-stageHost.clientWidth/2),behavior:reduced?'instant':'smooth'});}
  opt.onCaption?.(custom?'SENİN KODUN':'BİRLİKTE İZLEYELİM',e.title+' '+e.why+' '+e.effect);
  opt.onBeat?.(beat,frames.length);
  if(beat===frames.length-1)auto=false;
  remaining=(f.phase==='intro'?2000:['check','skip','stop','choose'].includes(f.phase)?2500:1700)/speed;
  notify();schedule();previous=f;
 }
 function start(rows,src,input){
  stop();source=src.split('\n');const original=g.Case024Lessons[index];
  task={...original,input:input||original.input};
  frames=makeFrames(rows,src,index,task,custom);beat=0;auto=false;previous=null;
  const groups=g.Unit2MixScenes[index].groups||[];
  stage=sceneMarkup(index,task,groups,custom);stage.groups=groups;
  $('.tt-stage').innerHTML=stage.markup;$('.tt-stage').dataset.kind=stage.type;$('.tt-stage').scrollLeft=0;
  visual={x:stage.points[0]||100,power:0};
  $('.tt-inputs').innerHTML=task.input.map((value,i)=>'<li><small>'+(i+1)+'. girdi</small><strong>'+esc(value)+'</strong><em>bekliyor</em></li>').join('');
  $('.tt-full-code ol').innerHTML=source.map(s=>'<li><code>'+esc(s||' ')+'</code></li>').join('');
  $('.tt-full-code h4').textContent=custom?'Senin kodunun tamamı':'Örnek kodun tamamı';
  const select=$('.tt-examples select'),variants=g.Unit2MixScenes[index].variants;
  $('.tt-examples').hidden=custom||!variants;
  if(variants){select.innerHTML=variants.map((v,i)=>'<option value="'+i+'">'+esc(v.name)+'</option>').join('');select.value=String(variant);}
  paint();
 }
 function lesson(n){index=n;variant=0;custom=false;ownTrace=null;const s=g.Unit2MixScenes[n];start(s.trace,s.source);}
 function next(){if(beat>=frames.length-1)return;auto=false;beat++;paint();}
 function back(){if(beat===0)return;auto=false;beat--;paint();}
 $('.tt-back').onclick=back;$('.tt-forward').onclick=next;
 $('.tt-examples select').onchange=()=>{variant=Number($('.tt-examples select').value);const s=g.Unit2MixScenes[index];const chosen=s.variants[variant];custom=false;ownTrace=null;start(chosen.trace,s.source,chosen.input);};
 $('.tt-speed').onclick=()=>{const choices=[.75,1,1.5,2];speed=choices[(choices.indexOf(speed)+1)%choices.length];$('.tt-speed').textContent='Hız: '+speed+'×';};
 return {lesson,showTrace(rows){ownTrace=rows;custom=true;start(rows,opt.getCode?.()||'');},
  pause(){auto=false;clearTimeout(timer);notify();},
  play(){if(beat===frames.length-1)beat=0;auto=true;if(beat===0)beat=1;paint();},
  next,replay(){if(custom)start(ownTrace,opt.getCode?.()||'');else{const s=g.Unit2MixScenes[index],v=s.variants?.[variant];start(v?.trace||s.trace,s.source,v?.input);}},
  setReduced(v){reduced=v;auto=false;paint();},
  resolve(){stop();auto=false;$('.tt-phase').textContent='✓ KODUN FARKLI GİRDİLERDE ÇALIŞTI';notify();},
  destroy(){stop();auto=false;},get paused(){return !auto;}
 };
}
g.Case024Film={mount,makeFrames};
})(window);
