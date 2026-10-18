(function(g){
'use strict';
const tasks=g.Unit2CapstoneTasks;if(!tasks)return;
const qa=new URLSearchParams(location.search).get('deneme')==='bitirme';
const store=g.NoirProgress||localStorage,key='cnoir-u2-final-v1'+(qa?'-qa':'');
let state={current:0,done:[],drafts:{}};try{Object.assign(state,JSON.parse(store.getItem(key)||'{}'));}catch(_){}
state.current=Math.max(0,Math.min(tasks.length-1,Number(state.current)||0));state.done=Array.isArray(state.done)?[...new Set(state.done.filter(n=>Number.isInteger(n)&&n>=0&&n<tasks.length))]:[];state.drafts=state.drafts&&typeof state.drafts==='object'?state.drafts:{};
let radarAngle=-110;
let root,frame=0,timer=null,revision=0,opened=false,busy=false,previous,inerted=[],completer,reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const E=(tag,text,cls)=>{const e=document.createElement(tag);if(text!==undefined)e.textContent=text;if(cls)e.className=cls;return e;};
const $=id=>root.querySelector('#cap-'+id);
function save(){try{store.setItem(key,JSON.stringify(state));}catch(_){}}
function stop(freeze=true){if(timer)clearInterval(timer);timer=null;if(root){if(freeze)root.getAnimations({subtree:true}).forEach(a=>a.pause());$('play').textContent='▶ Otomatik izle';root.classList.remove('cap-playing');}}

function entryStory(f){
 const kind=f.focus||'read',numeric=f.token!=='abc',token=esc(f.token),value=f.token==='abc'?'0':token;
 const source=kind==='read'?(f.line===1?'while (true)':'string giris = Console.ReadLine();'):kind==='parse'?'int.TryParse(giris, out int kanal)':kind==='range'?'kanal >= 1 && kanal <= 5':kind==='exit'?'break;':f.line===9?'Console.WriteLine("Geçersiz");':'Console.WriteLine($"Hat {kanal}");';
 const names={read:'Girdi okuyucu',parse:'Metni sayıya çevir',range:'Aralık kontrolü',output:'Konsola yazdır',exit:'Döngüden çık'};
 const order=['read','parse','range','output'],trail=order.map((k,i)=>'<span class="'+(kind===k?'active':'')+'"><b>'+(i+1)+'</b>'+({read:'Girdi',parse:'Sayıya çevir',range:'Aralığa bak',output:'Yazdır'}[k])+'</span>').join('<i aria-hidden="true">›</i>');
 const defs='<defs><linearGradient id="focus-metal" x2="0" y2="1"><stop stop-color="#353b2c"/><stop offset=".3" stop-color="#1e281c"/><stop offset="1" stop-color="#0e170e"/></linearGradient><linearGradient id="focus-paper" x2="0" y2="1"><stop stop-color="#f1e4b9"/><stop offset="1" stop-color="#cdbc88"/></linearGradient><filter id="focus-shadow" x="-.2" y="-.2" width="1.4" height="1.5"><feDropShadow dx="0" dy="6" stdDeviation="6" flood-opacity=".45"/></filter></defs>';
 let art='',note='';
 if(kind==='read'){
  const barcode=Array.from({length:27},(_,i)=>'<path d="M'+(198+i*9)+' 258v'+(i%3?19:26)+'" stroke="#695f40" stroke-width="'+(i%2?2:3)+'"/>').join('');
  art='<path d="M124 20H516L536 40V309L516 329H124L104 309V40Z" fill="url(#focus-metal)" stroke="#8e8258"/><rect x="151" y="292" width="338" height="14" rx="7" fill="#040804" stroke="#5e6f48"/><g class="focus-ticket"><path d="M160 39H480V271L468 281L456 271L444 281L432 271L420 281L408 271L396 281L384 271L372 281L360 271L348 281L336 271L324 281L312 271L300 281L288 271L276 281L264 271L252 281L240 271L228 281L216 271L204 281L192 271L180 281L160 271Z" fill="url(#focus-paper)" filter="url(#focus-shadow)"/><text x="320" y="70" class="focus-paper-small">KULLANICININ YAZDIĞI</text><path d="M180 83H460" stroke="#a89c70"/><text x="320" y="169" class="focus-token">'+(f.token==='—'?'—':'“'+token+'”')+'</text><text x="320" y="215" class="focus-paper-small">'+(f.line===1?'HENÜZ GİRDİ ALINMADI':'BU BİR METİN · STRING')+'</text>'+barcode+'</g><path class="focus-transfer" d="M320 314V340" stroke="#e5c780" stroke-width="3"/><rect x="144" y="341" width="352" height="44" rx="7" fill="#0b130c" stroke="#9b8b5d"/><text x="320" y="369" class="focus-variable">'+(f.line===1?'Yeni giriş bekleniyor':'giris = "'+token+'"')+'</text>';
  note=f.line===1?'Program şimdi kullanıcıyı bekliyor.':'Fişteki metin, giris değişkenine geçti. Henüz sayıya çevrilmedi.';
 }else if(kind==='parse'){
  art='<path d="M36 90H181V263L169 271L157 263L145 271L133 263L121 271L109 263L97 271L85 263L73 271L61 263L49 271L36 263Z" fill="url(#focus-paper)"/><text x="108" y="122" class="focus-paper-small">GİRİŞ · STRING</text><text x="108" y="190" class="focus-convert-token">“'+token+'”</text><path class="focus-transfer" d="M188 177H239M233 171l8 6-8 6" stroke="#dec38a" fill="none" stroke-width="3"/><path d="M261 111H375L398 134V222L375 245H261L238 222V134Z" fill="url(#focus-metal)" stroke="#b7a16d"/><circle cx="318" cy="168" r="29" fill="#111c12" stroke="#788b56"/><text x="318" y="174" class="focus-label">int</text><text x="318" y="223" class="focus-module-label">TryParse</text><path d="M399 157H427V124H455M399 200H427V270H455" stroke="#b7a16d" fill="none" stroke-width="2"/><rect x="457" y="73" width="153" height="104" rx="9" fill="#0d180f" stroke="#8e9e6d"/><text x="533" y="100" class="focus-mini">kanal · int</text><text x="533" y="147" class="focus-number">'+value+'</text><rect x="457" y="220" width="153" height="93" rx="9" fill="'+(numeric?'#22341b':'#39231c')+'" stroke="'+(numeric?'#a7c385':'#d59a7f')+'"/><text x="533" y="246" class="focus-mini">BAŞARILI MI?</text><text x="533" y="284" class="focus-boolean">'+(numeric?'true':'false')+'</text><text x="320" y="358" class="focus-art-caption">'+(numeric?'Metin sayıya çevrildi.':'Çevrilemedi. kanal 0, sonuç false.')+'</text>';
  note=numeric?'İki sonuç var: sayı kanal değişkenine, başarı bilgisi if koşuluna gider.':'false olduğu için && sonrasındaki aralık kontrolleri çalışmaz.';
 }else if(kind==='range'){
  const n=Number(f.token),x=65+(n-1)*70,good=n>=1&&n<=5;
  art='<rect x="38" y="130" width="332" height="95" rx="16" fill="#2b3a20" stroke="#8da66a"/><text x="204" y="112" class="focus-mini">KABUL EDİLEN ARALIK</text><path d="M49 181H598" stroke="#868d60" stroke-width="3"/>'+Array.from({length:8},(_,i)=>'<path d="M'+(65+i*70)+' 170V192" stroke="#d4c893"/><text x="'+(65+i*70)+'" y="217" class="focus-tick">'+(i+1)+'</text>').join('')+'<g class="focus-number-marker"><path d="M'+x+' 115V153M'+(x-7)+' 145l7 8 7-8" stroke="'+(good?'#d9cd8f':'#e6a28a')+'" fill="none" stroke-width="3"/><circle cx="'+x+'" cy="73" r="32" fill="'+(good?'#d9cd8f':'#e6a28a')+'"/><text x="'+x+'" y="83" class="focus-marker-value">'+n+'</text></g><rect x="40" y="270" width="265" height="58" rx="8" fill="#172416" stroke="#79935c"/><text x="172" y="307" class="focus-comparison">'+n+' &gt;= 1  ✓</text><rect x="330" y="270" width="265" height="58" rx="8" fill="'+(good?'#172416':'#35211b')+'" stroke="'+(good?'#79935c':'#bf8067')+'"/><text x="462" y="307" class="focus-comparison">'+n+' &lt;= 5  '+(good?'✓':'×')+'</text>';
  note=good?'3 yeşil alanın içinde. İki koşul da doğru; if bloğuna girilir.':'8 yeşil alanın dışında. İkinci koşul yanlış; if bloğu atlanır.';
 }else if(kind==='output'){
  const text=f.line===9?'Geçersiz':'Hat 3';
  art='<path d="M83 42H557L576 61V300L557 319H83L64 300V61Z" fill="url(#focus-metal)" stroke="#81794f"/><rect x="89" y="67" width="462" height="222" rx="10" fill="#060e09" stroke="#647a4d"/><text x="111" y="97" class="focus-terminal-heading">KONSOLA EKLENEN YENİ SATIR</text><path d="M109 113H531" stroke="#69805244"/><g class="focus-print"><text x="125" y="200" class="focus-console-arrow">&gt;</text><text x="330" y="201" class="focus-console-value">'+text+'</text></g><circle cx="536" cy="84" r="4" fill="#bed493"/><path d="M266 320V342H374V320M226 349H414" fill="none" stroke="#8b855b" stroke-width="6"/>';
  note='Ekrana yazılan metin: '+text+'. Sağdaki konsolda önceki satırlar da durur.';
 }else{
  art='<path d="M180 268C70 240 84 83 237 82H384C495 82 505 240 404 268" stroke="#697749" stroke-width="18" fill="none"/><path d="M177 253l17 20-26 6" fill="none" stroke="#d8bd77" stroke-width="6"/><path d="M400 175H570M556 162l15 13-15 13" stroke="#e1c486" stroke-width="5" fill="none"/><rect x="197" y="133" width="204" height="83" rx="12" fill="#492b21" stroke="#dcac87"/><text x="299" y="185" class="focus-exit-word">break;</text><text x="320" y="331" class="focus-art-caption">YENİ GİRDİ ALINMAYACAK</text>';
  note='Döngü bitti. Yeni ReadLine çağrısı yok; 9. satır da bu tur çalışmaz.';
 }
 return '<section class="focus-lesson" data-focus="'+kind+'"><div class="focus-trail">'+trail+'</div><div class="focus-code-label"><span>BU PARÇAYI ÇALIŞTIRAN KOD</span><code>'+esc(source)+'</code></div><div class="focus-art"><span class="focus-shot">YAKIN PLAN · '+names[kind]+'</span><svg viewBox="0 0 640 400" class="focus-svg" role="img" aria-label="'+esc(names[kind]+'. '+f.caption)+'">'+defs+art+(kind==='read'?'<rect class="focus-scanner" x="170" y="88" width="300" height="4" fill="#eee6ab"/>':kind==='parse'?'<rect class="focus-scanner" x="251" y="129" width="134" height="4" fill="#eee6ab"/>':'')+'</svg></div><p class="focus-on-shape">'+note+'</p></section>';
}

function extensionScene(t,f){
 const v=f.visual||{},good=f.status!=='reject',accent=good?'var(--cap-accent)':'#e4a18c';
 const person=(x,y,cls='')=>'<g class="'+cls+'" transform="translate('+x+' '+y+')"><circle cy="-16" r="7"/><path d="M-10 17V1Q0-10 10 1V17M0 5V30M-9 30L0 15L9 30" fill="none" stroke-width="4"/></g>';
 let art='';
 if(t.id==='lift'){
  art='<path d="M70 35H400V320H70Z" fill="#151c13"/><path d="M95 60H375V295H95Z" fill="#080e09"/><path d="M235 60V295M105 305H365" opacity=".35"/><text x="235" y="25" class="ext-small">ASANSÖR · KAPASİTE '+v.max+'</text>';
  for(let i=0;i<v.load;i++)art+=person(133+(i%4)*63,145+Math.floor(i/4)*90,(f.status==='accept'&&i>=v.load-v.group)?'ext-person-enter':'');
  art+='<g class="'+(f.status==='reject'?'ext-refused':'')+'" style="color:'+accent+'"><text x="505" y="105" class="ext-small">GELEN GRUP</text>'+person(505,165)+'<text x="505" y="240" class="ext-large">'+v.group+' kişi</text></g><rect x="95" y="342" width="440" height="18" rx="9" fill="#1d2818"/><rect class="ext-gauge" x="95" y="342" width="'+(440*v.load/v.max)+'" height="18" rx="9" fill="currentColor"/><text x="315" y="389" class="ext-label">İÇERİDE '+v.load+' / '+v.max+' KİŞİ</text>';
 }else if(t.id==='antenna'){
  art='<path d="M60 322H590M75 70V322" opacity=".4"/><path d="M40 90L55 35L70 90M47 65H63"/><text x="320" y="35" class="ext-small">HER SÜTUN BİR ÖLÇÜM</text>';
  (v.values||[]).forEach((n,i)=>{const h=Math.max(5,n*2.1),x=125+i*105,best=i+1===v.bestAt;art+='<g class="'+(i===v.values.length-1?'ext-bar-enter':'')+'" style="transform-origin:'+x+'px 320px"><rect x="'+x+'" y="'+(320-h)+'" width="60" height="'+h+'" rx="6" fill="'+(best?'#88bca9':'#344a48')+'"/><text x="'+(x+30)+'" y="'+(305-h)+'" class="ext-label">'+n+'</text></g><text x="'+(x+30)+'" y="349" class="ext-small">'+(i+1)+'. ölçüm</text>';});
  art+='<text x="320" y="390" class="ext-label">'+(v.best<0?'HENÜZ ÖLÇÜM YOK':'REKOR '+v.best+' · İLK SIRA '+v.bestAt)+'</text>';
 }else if(t.id==='rooms'){
  art='<path d="M90 335V95L320 35L550 95V335Z" fill="#18131f"/><path d="M90 210H550" opacity=".3"/>';
  for(let k=1;k<=2;k++){const y=k===1?245:120;art+='<text x="125" y="'+(y+30)+'" class="ext-small">'+k+'. KAT</text>';for(let o=1;o<=3;o++){const x=205+(o-1)*105,active=k===v.floor&&o===v.room,done=k===2&&o<=v.scanned;art+='<g class="'+(active?'ext-room-active':'')+'"><rect x="'+x+'" y="'+y+'" width="70" height="65" rx="6" fill="'+(k===1?'#452d30':done?'#536443':'#211d2a')+'"/><text x="'+(x+35)+'" y="'+(y+41)+'" class="ext-label">'+(k===1?'×':o)+'</text></g>';}}
  art+='<text x="320" y="375" class="ext-label">'+(v.floor===1?'KAPALI KATI TAMAMEN ATLA':v.floor===2?'2. KAT · ODA '+v.room:'KAT → ODA SIRASIYLA GEZ')+'</text>';
 }else if(t.id==='tickets'){
  art='<rect x="80" y="35" width="300" height="310" rx="28" fill="#1d2117"/><text x="230" y="76" class="ext-small">BİLET MAKİNESİ</text><rect x="110" y="96" width="240" height="65" rx="7" fill="#080f09"/><text x="230" y="138" class="ext-large">'+(v.price?v.price+' TL':f.status==='reject'?'GEÇERSİZ':'SEÇİM BEKLE')+'</text>';
  for(let n=1;n<=3;n++)art+='<circle cx="'+(140+(n-1)*90)+'" cy="210" r="25" fill="'+(n===v.choice?'#9d864a':'#282e20')+'"/><text x="'+(140+(n-1)*90)+'" y="217" class="ext-label">'+n+'</text>';
  art+='<path d="M117 285H343" stroke-width="12"/><g class="'+(v.price?'ext-ticket-out':'')+'"><path d="M420 130H570V280L560 290L550 280L540 290L530 280L520 290L510 280L500 290L490 280L480 290L470 280L460 290L450 280L440 290L430 280L420 290Z" fill="'+(v.price?'#dac793':'#33372b')+'"/><text x="495" y="173" class="ext-small" fill="#252b1c">'+(v.price?'BİLET':'BİLET YOK')+'</text><text x="495" y="232" class="ext-large" fill="#252b1c">'+(v.price?v.price+' TL':'—')+'</text></g><text x="320" y="385" class="ext-label">TOPLAM '+v.total+' TL · '+v.count+' BİLET</text>';
 }else{
  const points=[[170,105,'Arşiv'],[470,105,'Liman'],[320,295,'Depo']];
  art='<path d="M320 205L170 105M320 205L470 105M320 205V295" class="ext-route"/><circle cx="320" cy="205" r="28" fill="#2b1e20"/><text x="320" y="211" class="ext-small">BÜRO</text>';
  points.forEach(([x,y,label],i)=>{const done=(v.done||[]).includes(i+1);art+='<circle cx="'+x+'" cy="'+y+'" r="43" fill="'+(done?'#405235':'#281d22')+'"/><text x="'+x+'" y="'+(y+7)+'" class="ext-label">'+(done?'✓':i+1)+'</text><text x="'+x+'" y="'+(y+68)+'" class="ext-small">'+label+'</text>';});
  if(f.status==='accept'){const [x,y]=points[v.choice-1];art+='<g class="ext-parcel" style="--dest-x:'+x+'px;--dest-y:'+y+'px"><path d="M-13-9L0-17L13-9V9L0 17L-13 9Z" fill="#e4c892" stroke="#8c6e42"/><path d="M-13-9L0-1L13-9M0-1V17" stroke="#8c6e42"/></g>';}
  art+='<text x="320" y="395" class="ext-label">'+(v.done||[]).length+' / 3 FARKLI YER TAMAMLANDI</text>';
 }
 const source=t.reference&&f.line?t.reference.split('\n')[f.line-1]?.trim():null;
 return '<section class="focus-lesson ext-lesson"><div class="focus-code-label"><span>'+(source?'BU ADIMDAKİ KOD':'BU ADIMDA NE OLUYOR?')+'</span><code>'+esc(source||f.caption)+'</code></div><svg viewBox="0 0 640 420" class="focus-svg ext-svg" role="img" aria-label="'+esc(t.title+'. '+f.caption)+'" style="color:var(--cap-accent)">'+art+'</svg></section>';
}

function graphic(t,f){
 if(f.visual)return extensionScene(t,f);
 if(t.id==='signal')return entryStory(f);
 const accepted=['accept','complete'].includes(f.status),reject=f.status==='reject';
 const token=esc(f.token),accent=reject?'#e5a391':'var(--cap-accent)';
 const defs='<defs><pattern id="cap-grid" width="24" height="24" patternUnits="userSpaceOnUse"><path d="M 24 0 L 0 0 0 24" fill="none" stroke="currentColor" opacity=".05"/></pattern></defs><rect width="600" height="300" fill="url(#cap-grid)"/>';
 let art='';
 if(t.id==='vault'){
  const lights=[0,1,2].map(i=>'<circle cx="'+(230+i*70)+'" cy="257" r="8" fill="'+(i<(f.vars.kullanilan||0)?accepted&&i===2?'#b7d49b':'#93564a':'#edd09c')+'"/>').join('');
  art='<rect x="123" y="32" width="354" height="203" rx="18" fill="#1a1211"/><rect x="142" y="50" width="315" height="165" rx="10"/><g class="cap-vault-wheel '+(accepted?'unlocked':'')+'" transform="translate(300 135)"><circle r="57"/><circle r="33"/><path d="M-49 0H49M0-49V49M-34-34L34 34M34-34L-34 34"/><circle r="9" fill="currentColor"/></g><path d="M444 89V173" stroke-width="7"/><text x="300" y="25" class="cap-svg-small">'+(accepted?'KASA AÇILDI':'KASA ŞİFRESİ · '+token)+'</text>'+lights+'<text x="300" y="288" class="cap-svg-small">'+(f.vars.kalan||0)+' HAK KALDI</text>';
 }else if(t.id==='belt'){
  art='<path d="M30 145H385" stroke-width="35" stroke="#253c3d"/><path d="M30 145H385" stroke-dasharray="8 14" stroke-width="2"/>'+[65,135,205,275,345].map(x=>'<circle cx="'+x+'" cy="175" r="13"/><path d="M'+(x-8)+' 175H'+(x+8)+'"/>').join('')+'<path d="M385 145L470 90M385 145L470 230" class="cap-link"/><g class="cap-belt-item '+(reject?'rejected':accepted||f.status==='complete'?'accepted':'')+'"><path d="M122 95L155 77L190 95V131L155 150L122 131Z" fill="#254749"/><path d="M122 95L155 114L190 95M155 114V150"/><text x="155" y="119" class="cap-svg-small">'+token+'</text></g><path d="M470 55H565V123H470Z"/><text x="517" y="42" class="cap-svg-small">KABUL</text><text x="517" y="145" class="cap-svg-small">'+f.vars.adet+' / '+f.vars.hedef+'</text><path d="M470 194H565V261H470Z" stroke="#ad786b"/><text x="517" y="280" class="cap-svg-small">HATALI</text><text x="180" y="255" class="cap-svg-small">TOPLAM: '+f.vars.toplam+'</text>';
 }else if(t.id==='metro'){
  const y=f.status==='archive'?65:f.status==='harbor'?225:145;
  art='<path d="M38 145H245Q280 145 310 95L338 65H545M245 145Q280 145 310 195L338 225H545" stroke-width="10" opacity=".2"/><path d="M38 145H245Q280 145 310 95L338 65H545M245 145Q280 145 310 195L338 225H545" stroke-dasharray="3 14" stroke-width="5"/><circle cx="245" cy="145" r="14"/><circle cx="520" cy="65" r="18"/><circle cx="520" cy="225" r="18"/><text x="475" y="30" class="cap-svg-small">1 · ARŞİV</text><text x="475" y="275" class="cap-svg-small">2 · LİMAN</text><g class="cap-train" style="--train-x:'+(y===145?80:400)+'px;--train-y:'+y+'px"><rect x="-24" y="-18" width="48" height="32" rx="8" fill="#574270"/><path d="M-13-8H13M-13 5H13"/><circle cx="-14" cy="18" r="4"/><circle cx="14" cy="18" r="4"/></g><text x="130" y="240" class="cap-svg-value">'+token+'</text><text x="130" y="267" class="cap-svg-small">'+(f.status==='complete'?'MERKEZ KAPANDI':reject?'HAT SEÇİLMEDİ':'MENÜ SEÇİMİ')+'</text>';
 }else{
  art='<path d="M20 240H580" opacity=".4"/>'+[40,110,195,285,385,475].map((x,i)=>{const h=[95,140,180,120,165,105][i];return '<path d="M'+x+' 240V'+(240-h)+'H'+(x+55)+'V240Z" fill="#281719"/>'+[0,1,2].map(j=>'<rect class="cap-window" x="'+(x+12+j*12)+'" y="'+(260-h)+'" width="6" height="11" fill="currentColor" opacity="'+(accepted?'.9':'.3')+'"/>').join('');}).join('')+'<path class="cap-city-link" d="M70 220Q300 30 530 220" stroke-dasharray="7 9"/><rect x="174" y="80" width="252" height="104" rx="12" fill="#190f11"/><text x="300" y="110" class="cap-svg-small">BÜRO KASASI</text><text x="300" y="153" class="cap-svg-value">'+f.vars.kasa+' TL</text><text x="300" y="280" class="cap-svg-small">'+(f.status==='complete'?'VARDİYA TAMAMLANDI':esc(f.token)+' · '+f.vars.islem+' BAŞARILI İŞLEM')+'</text>';
 }
 return '<svg viewBox="0 0 600 300" role="img" aria-label="'+esc(t.kind+': '+f.caption)+'" class="cap-svg">'+defs+art+'</svg>';
}
function explainLine(line,chosen=false){
 const t=tasks[state.current],box=$('linehelp');box.hidden=!t.reference;
 if(!t.reference)return;
 const source=t.reference.split('\n')[line-1]?.trim()||'';
 const fallback=source==='{'?'Bu süslü parantez, birlikte çalışacak satırların başladığı yeri gösterir.':source==='}'?'Bu süslü parantez, o bölümdeki satırların bittiği yeri gösterir.':'Bu satırı anlamak için önce yukarıdaki koşula ve örnekteki değerlere bak.';
 $('linetitle').textContent=(chosen?'Seçtiğin':'Şimdi çalışan')+' satır '+line+' · Ne yapıyor?';
 let meaning=t.lineHelp?.[line]||fallback;
 if(!chosen&&t.id==='signal'){
  const f=t.frames[frame];
  if(f.focus==='parse')meaning=f.token==='abc'?'TryParse, "abc" yazısını tam sayıya çevirmeyi dener. Harf olduğu için başaramaz ve false (hayır) verir. out int kanal bu denemenin sayı değişkenidir; başarısız denemede 0 olur. && ilk sonuç yanlış olduğu için aralık kontrolüne geçmez.':'TryParse, "'+f.token+'" metnini '+f.token+' sayısına çevirir. out int kanal bu sayıyı kanal değişkenine koyar. true (evet) demesi yalnızca sayıya çevrilebildiğini söyler; 1–5 arasında olup olmadığına bir sonraki adımda bakacağız.';
  if(f.focus==='range')meaning=f.token==='8'?'İki kontrol var: 8 >= 1 doğru, 8 <= 5 yanlış. &&, ikisi de doğru olsun demek. Biri yanlış olduğu için bu sayı kabul edilmez. if içindeki Hat yazdırma satırlarına girmeyiz.':'İki kontrol var: 3 >= 1 doğru, 3 <= 5 de doğru. && ile bağlanan bütün şartlar sağlandı. Şimdi if içindeki satırlar çalışabilir: önce Hat 3 yazılacak, sonra döngü bitecek.';
 }
 $('linemeaning').textContent=meaning;
 $('lineexample').textContent=chosen?'Animasyondaki adıma dönmek için Sonraki adım veya Geri düğmesini kullan.':t.frames[frame].caption;
 $('examplecode').querySelectorAll('li').forEach((li,i)=>li.classList.toggle('cap-line-selected',chosen&&i+1===line));
}
function explainQuestion(t){
 const labels=['Kullanıcı ne girecek?','Sen ne yapacaksın?','Ekrana ne yazılacak?'];
 $('understand').replaceChildren(...(t.understand||[]).map((text,i)=>{const card=E('article');card.append(E('h3',labels[i]),E('p',text));return card;}));
 $('walkthrough').replaceChildren(...(t.walkthrough||[]).map(text=>E('li',text)));
 $('terms').replaceChildren(...(t.words||[]).map(([word,meaning])=>{const detail=E('details');detail.append(E('summary',word),E('p',meaning));return detail;}));
 $('terms').hidden=!t.words?.length;
}

function renderFrame(){
 const t=tasks[state.current],f=t.frames[frame];
 const scene=$('scene'),previous=scene.innerHTML;
 scene.innerHTML=graphic(t,f);scene.dataset.status=f.status;
 if(previous&&!root.classList.contains('cap-reduced')&&!matchMedia('(prefers-reduced-motion: reduce)').matches){
  const outgoing=E('div');outgoing.className='cap-scene-outgoing';outgoing.setAttribute('aria-hidden','true');outgoing.inert=true;
  outgoing.innerHTML=previous.replace(/id="([^"]+)"/g,'id="old-$1"').replace(/url\(#([^)]+)\)/g,'url(#old-$1)');
  outgoing.querySelectorAll('.cap-scene-outgoing').forEach(el=>el.remove());
  scene.append(outgoing);outgoing.addEventListener('animationend',event=>{if(event.target===outgoing)outgoing.remove();});
 }
 if(t.id!=='signal'){
  const svg=$('scene').querySelector('svg');
  const boxes=t.id==='vault'?'105 12 385 285':t.id==='belt'?(f.status==='reject'?'420 165 165 125':['accept','complete'].includes(f.status)?'420 20 165 145':'25 55 365 225'):t.id==='metro'?(f.status==='archive'?'280 5 300 120':f.status==='harbor'?'280 175 300 120':'65 40 390 245'):t.id==='control'?'150 60 300 150':null;
  if(svg&&boxes){svg.setAttribute('viewBox',boxes);svg.classList.add('focus-closeup-svg');}
 }
if(t.id==='signal')radarAngle=f.angle??radarAngle;
 $('running').hidden=!t.reference||!f.line;$('running').textContent=f.line?'Şimdi çalışan satır '+f.line+' · '+(t.reference||'').split('\n')[f.line-1]?.trim():'';
 $('caption').textContent=f.caption;$('stepcount').textContent=(frame+1)+' / '+t.frames.length+' adım';
 $('back').disabled=frame===0;$('forward').disabled=frame===t.frames.length-1;
 $('variables').replaceChildren(...Object.entries(f.vars).map(([k,v])=>{const d=E('div');d.append(E('span',k),E('strong',String(v)));return d;}));
 $('console').textContent=f.output.length?f.output.join('\n'):'Henüz çıktı yok.';
 $('examplecode').querySelectorAll('li').forEach((li,i)=>{li.classList.toggle('active',i+1===f.line);if(i+1===f.line)li.setAttribute('aria-current','step');else li.removeAttribute('aria-current');});
 explainLine(f.line||1);
 if(frame===t.frames.length-1)stop(false);
}
function load(i){
 stop();revision++;busy=false;state.current=i;save();frame=0;radarAngle=-110;const t=tasks[i];
 const delays=i===0?[8000,5800,3600]:[6000,3800,2800];[...$('speed').options].forEach((o,j)=>o.value=String(delays[j]));
 root.dataset.theme=t.theme;root.dataset.scene=t.id;root.classList.toggle('cap-reduced',reduced);
 $('title').textContent=t.title;$('subtitle').textContent=t.kind;$('intro').textContent=t.intro;$('goal').textContent=t.goal;$('concept').textContent=t.concept;
 $('rules').replaceChildren(...t.rules.map(s=>E('li',s)));explainQuestion(t);
 $('inputs').textContent=t.input.map((s,i)=>(i+1)+'. '+(s===''?'(boş satır)':s)).join('\n');$('expected').textContent=t.output.join('\n');
 $('editor').value=state.drafts[i]??'// Kullanıcıdan girdileri oku ve istenen sonuçları yazdır.\n';
 $('hint').hidden=t.independent;$('hinttext').hidden=true;$('hinttext').textContent=t.hint;
 $('reminder').hidden=t.independent||i>=5;$('example').hidden=t.independent;$('example').open=!t.independent;
 $('examplecode').replaceChildren(...(t.reference||'').split('\n').map((line,i)=>{const li=E('li');li.append(E('code',line||' '));li.tabIndex=0;li.setAttribute('role','button');li.setAttribute('aria-label','Satır '+(i+1)+' açıklaması: '+line.trim());li.onclick=()=>explainLine(i+1,true);li.onkeydown=e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();explainLine(i+1,true);}};return li;}));
 $('feedback').textContent='';$('feedback').className='cap-feedback';$('tests').hidden=true;$('success').hidden=true;$('run').disabled=false;
 $('nav').replaceChildren(...tasks.map((task,n)=>{const b=E('button',(n+1)+'. '+task.title+(state.done.includes(n)?' ✓':''));b.type='button';b.setAttribute('aria-current',i===n?'step':'false');b.onclick=()=>load(n);return b;}));
 $('progress').textContent=state.done.length+' / '+tasks.length+' aşama';
 $('independent').hidden=!t.independent;renderFrame();completer?.setEnabled(!t.independent);
}
function finish(){
 if(state.done.length<tasks.length||qa)return;
 if(!g.kayit.extraCases)g.kayit.extraCases={};
 g.kayit.extraCases['u2-19-10']=true;
 if(!g.kayit.extraCases['u2-19']){g.kayit.extraCases['u2-19']=true;g.kayit.xp+=1000;g.sakla?.();}
 g.sakla?.();g.CSharpNoir?.sync();g.menuDoldur?.();
}
async function run(){
 if(busy)return;busy=true;const version=revision,index=state.current;
 $('run').disabled=true;$('feedback').textContent='Kodun derleniyor ve farklı girdilerle deneniyor…';$('tests').hidden=true;$('success').hidden=true;
 try{
  const r=await fetch('/api/check',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({question:75+index,code:$('editor').value}),signal:AbortSignal.timeout(20000)});
  if(!r.ok)throw Error('HTTP '+r.status);
  const result=await r.json();if(version!==revision||!opened)return;
  $('feedback').className='cap-feedback '+(result.ok?'good':'bad');
  $('feedback').textContent=result.message+(result.errors?'\n'+result.errors.map(e=>'Satır '+Math.max(1,e.line-1)+': '+e.message).join('\n'):'');
  if(result.rows){$('rows').replaceChildren(...result.rows.map(r=>{const tr=E('tr');for(const x of [r.input.map(v=>v===''?'(boş satır)':v).join('\n'),r.expected.join('\n'),r.actual.join('\n')||'(çıktı yok)',r.ok?'✓ Geçti':'Tekrar bak'])tr.append(E('td',x));return tr;}));$('tests').hidden=false;}
  if(result.ok){if(!state.done.includes(index))state.done.push(index);save();finish();$('progress').textContent=state.done.length+' / '+tasks.length+' aşama';$('success').hidden=false;$('successmsg').textContent=state.done.length===tasks.length?'Ünite 2 bitirme vakası tamamlandı. On görevi de tamamladın!':'Bu aşama tamamlandı. Kodun farklı girdilerde de doğru çalıştı.';$('next').textContent=state.done.length===tasks.length?'Ünite 2’ye dön →':'Sonraki aşama →';}
 }catch(e){if(version===revision&&opened){$('feedback').className='cap-feedback bad';$('feedback').textContent='Kod kontrol servisine ulaşılamadı. Sunucunun açık olduğundan emin ol ve yeniden dene. Kodun burada duruyor.';}}
 finally{if(version===revision){busy=false;$('run').disabled=false;}}
}
function create(){
 root=E('section');root.id='u2-capstone';root.hidden=true;root.setAttribute('role','dialog');root.setAttribute('aria-modal','true');root.setAttribute('aria-label','Ünite 2 bitirme projesi · Gece Vardiyası');
 root.innerHTML='<header class="cap-top"><div><small>ÜNİTE 2 · BİTİRME PROJESİ</small><strong>Vaka 20 · Gece Vardiyası</strong></div><span id="cap-progress"></span><button id="cap-motion">Hareketi azalt</button><button id="cap-close">← Ünite 2’ye dön</button></header><main class="cap-shell"><nav id="cap-nav" aria-label="Bitirme projesi aşamaları"></nav><header class="cap-heading"><span id="cap-subtitle"></span><h1 id="cap-title"></h1><p id="cap-concept"></p></header><section class="cap-understand"><h2>Önce soruyu anlayalım</h2><div id="cap-understand"></div><details class="cap-walk"><summary>Örneği birlikte okuyalım · hangi girişten sonra ne olur?</summary><ol id="cap-walkthrough"></ol></details></section><section class="cap-teaching"><div class="cap-cinema"><div class="cap-scene-label"><span>ÖRNEĞİ ADIM ADIM İZLE</span><span id="cap-stepcount"></span></div><div id="cap-scene" class="cap-scene"></div><div id="cap-variables" class="cap-variables"></div><p id="cap-running" class="cap-running"></p><p id="cap-caption" class="cap-caption" aria-live="polite"></p><div class="cap-controls"><button id="cap-back">← Geri</button><button id="cap-play">▶ Otomatik izle</button><button id="cap-replay">↻ Baştan</button><label>Hız <select id="cap-speed" aria-label="Animasyon hızı"><option value="3200">Yavaş</option><option value="1800" selected>Normal</option><option value="900">Hızlı</option></select></label><button id="cap-forward" class="cap-primary">Sonraki adım →</button></div></div><aside class="cap-output"><h2>Örnek konsol</h2><pre id="cap-console"></pre><p>Bu çıktı yukarıdaki örneğe ait. Kendi kodun aşağıda farklı girdilerle de kontrol edilecek.</p><details id="cap-example"><summary>Örnek kod · satıra tıkla, açıklamasını gör</summary><section id="cap-linehelp" class="cap-linehelp" aria-live="polite"><h3 id="cap-linetitle"></h3><p id="cap-linemeaning"></p><p id="cap-lineexample"></p></section><ol id="cap-examplecode"></ol></details><p id="cap-independent">BAĞIMSIZ GÖREV · Çözüm kodu ve ipucu yok. Sahne yalnızca programın ne yapacağını gösteriyor.</p></aside></section><section id="cap-terms" class="cap-terms" aria-label="Bu sorudaki komutlar"></section><section class="cap-work"><article class="cap-brief"><span class="cap-eyebrow">GÖREVİN</span><p id="cap-intro"></p><h2>Ne yazacaksın?</h2><p id="cap-goal"></p><ul id="cap-rules"></ul><div class="cap-io"><div><h3>Örnek girdiler · sırayla</h3><pre id="cap-inputs"></pre></div><div><h3>Beklenen çıktı</h3><pre id="cap-expected"></pre></div></div><details id="cap-reminder"><summary>Kısa hatırlatma · TryParse</summary><p>ReadLine metin verir. int.TryParse(metin, out int sayi) başarılıysa true olur ve sayi dolmuş olur. Başarısızsa false olur; bu girişle hesap yapma.</p><pre>string metin = Console.ReadLine();\nif (int.TryParse(metin, out int sayi))\n    Console.WriteLine(sayi);</pre><p>Çıkış işareti ile geçersiz girdiyi ayır. Bir döngünün sayacını yalnızca ilgili işlem gerçekten yapıldığında artır.</p></details></article><article class="cap-code"><div class="cap-editorbar"><strong>GeceVardiyasi.cs</strong><span>C# · ROSLYN</span></div><label for="cap-editor">C# kodunu buraya yaz</label><textarea id="cap-editor" spellcheck="false" autocapitalize="off" autocomplete="off"></textarea><p class="cap-editor-help">Bütün kodu sen yaz. Değişken adları ve uygun çözüm yolu serbest. Ctrl + Enter ile kontrol et.</p><div class="cap-actions"><button id="cap-run" class="cap-primary">▶ Kodumu kontrol et</button><button id="cap-hint">İpucu</button></div><p id="cap-hinttext" class="cap-hint" hidden></p><div id="cap-feedback" class="cap-feedback" role="status" aria-live="polite"></div><section id="cap-tests" hidden><h3>Test sonuçları</h3><div class="cap-table-wrap"><table><thead><tr><th>Girdi sırası</th><th>Beklenen</th><th>Senin çıktın</th><th>Durum</th></tr></thead><tbody id="cap-rows"></tbody></table></div></section><section id="cap-success" class="cap-success" hidden><p id="cap-successmsg"></p><button id="cap-next" class="cap-primary">Sonraki aşama →</button></section></article></section></main>';
 document.body.append(root);
 const cinema=root.querySelector('.cap-cinema');cinema.insertBefore(root.querySelector('.cap-controls'),$('scene'));cinema.insertBefore($('running'),$('scene'));
 completer=g.Unit1CodeComplete?.mount($('editor'),()=>[],{scope:'u2'});
 $('editor').addEventListener('input',()=>{state.drafts[state.current]=$('editor').value;save();});
 $('editor').addEventListener('keydown',e=>{if(completer?.handleKeydown(e))return;if(e.key==='Tab'){e.preventDefault();$('editor').setRangeText('    ',$('editor').selectionStart,$('editor').selectionEnd,'end');$('editor').dispatchEvent(new Event('input'));}if((e.ctrlKey||e.metaKey)&&e.key==='Enter'){e.preventDefault();run();}});
 $('back').onclick=()=>{stop();frame=Math.max(0,frame-1);renderFrame();};
 $('forward').onclick=()=>{stop();frame=Math.min(tasks[state.current].frames.length-1,frame+1);renderFrame();};
 $('replay').onclick=()=>{stop();frame=0;radarAngle=-110;renderFrame();};
 $('play').onclick=()=>{if(timer){stop();return;}if(frame===tasks[state.current].frames.length-1){frame=0;radarAngle=-110;renderFrame();}root.getAnimations({subtree:true}).forEach(a=>a.play());root.classList.add('cap-playing');$('play').textContent='Ⅱ Duraklat';timer=setInterval(()=>{frame=Math.min(tasks[state.current].frames.length-1,frame+1);renderFrame();},Number($('speed').value));};
 $('speed').onchange=()=>{if(timer){stop();$('play').click();}};
 $('run').onclick=run;$('hint').onclick=()=>{$('hinttext').hidden=!$('hinttext').hidden;};
 $('close').onclick=close;$('next').onclick=()=>{if(state.done.length===tasks.length){close();return;}let i=state.current+1;if(i>=tasks.length)i=tasks.findIndex((_,n)=>!state.done.includes(n));load(i);root.scrollTo({top:0,behavior:'instant'});};
 $('motion').onclick=()=>{reduced=!reduced;root.classList.toggle('cap-reduced',reduced);$('motion').textContent=reduced?'Hareketi aç':'Hareketi azalt';};
 root.addEventListener('keydown',e=>{if(e.key==='Escape'){e.preventDefault();close();}if(e.key==='Tab'&&e.target!==$('editor')){const nodes=[...root.querySelectorAll('button:not(:disabled),textarea,select,summary,[tabindex="0"]')].filter(n=>n.getClientRects().length);if(e.shiftKey&&document.activeElement===nodes[0]){e.preventDefault();nodes.at(-1)?.focus();}else if(!e.shiftKey&&document.activeElement===nodes.at(-1)){e.preventDefault();nodes[0]?.focus();}}});
}
function open(){
 if(opened)return;if(!root)create();previous=document.activeElement;opened=true;root.hidden=false;
 inerted=[...document.body.children].filter(n=>n!==root).map(n=>[n,n.inert]);inerted.forEach(([n])=>n.inert=true);document.body.classList.add('cap-open');
 g.CSharpNoir?.selectPractice(19);if(location.hash!=='#unite2-bitirme')history.pushState(null,'','#unite2-bitirme');load(state.current);$('close').focus({preventScroll:true});$('motion').textContent=reduced?'Hareketi aç':'Hareketi azalt';
}
function close(){if(!opened)return;stop();revision++;completer?.hide();opened=false;root.hidden=true;inerted.forEach(([n,v])=>n.inert=v);inerted=[];document.body.classList.remove('cap-open');if(location.hash==='#unite2-bitirme')history.replaceState(null,'',location.pathname+location.search);g.patika?.();previous?.focus?.({preventScroll:true});}
g.Unit2Capstone={open,close};g.addEventListener('pagehide',stop);
if(location.hash==='#unite2-bitirme')open();
})(window);
