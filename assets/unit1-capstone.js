(function(g){
'use strict';
const tasks=g.Unit1CapstoneTasks;if(!tasks)return;
const qa=new URLSearchParams(location.search).get('deneme')==='unite1-bitirme';
const store=g.NoirProgress||localStorage,key='cnoir-u1-final-v1'+(qa?'-qa':'');
let state={current:0,done:[],drafts:{}};try{Object.assign(state,JSON.parse(store.getItem(key)||'{}'));}catch(_){}
state.current=Math.max(0,Math.min(tasks.length-1,Number(state.current)||0));state.done=Array.isArray(state.done)?[...new Set(state.done.filter(n=>Number.isInteger(n)&&n>=0&&n<tasks.length))]:[];state.drafts=state.drafts&&typeof state.drafts==='object'?state.drafts:{};
let radarAngle=-110;
let root,frame=0,timer=null,revision=0,opened=false,busy=false,previous,inerted=[],completer,reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const E=(tag,text,cls)=>{const e=document.createElement(tag);if(text!==undefined)e.textContent=text;if(cls)e.className=cls;return e;};
const $=id=>root.querySelector('#u1cap-'+id);
function save(){try{store.setItem(key,JSON.stringify(state));}catch(_){}}
function stop(freeze=true){if(timer)clearInterval(timer);timer=null;if(root){if(freeze)root.getAnimations({subtree:true}).forEach(a=>a.pause());$('play').textContent='▶ Otomatik izle';root.classList.remove('u1cap-playing');}}


function graphic(t,f){
 const v=f.vars,prev=t.frames[Math.max(0,frame-1)].vars;
 const txt=(x,y,s,cls='u1-label')=>'<text x="'+x+'" y="'+y+'" class="'+cls+'">'+esc(s)+'</text>';
 const val=(key,fallback='—')=>v[key]===undefined?fallback:String(v[key]);
 const n=(key,fallback=0)=>Number(v[key]??fallback);
 const calc=f.phase==='calculate',paper='#dccb94';
 let art='';
 if(t.id==='dossier'){
  art='<path d="M100 70H370L404 104V350H100Z" class="u1-paper"/><path d="M370 70V104H404" class="u1-ink"/>'+txt(250,118,'KAYIP ÇANTA DOSYASI','u1-paper-label')+'<path d="M130 139H370" class="u1-ink"/><circle cx="175" cy="202" r="28" class="u1-ink"/><path d="M132 269Q175 218 218 269" class="u1-ink"/>'+txt(305,200,val('ad'),'u1-paper-value')+txt(305,246,'NO '+val('numara'),'u1-paper-label')+'<g class="'+(calc?'u1-card-stamp':'')+'"><rect x="460" y="125" width="260" height="130" rx="8" class="u1-metal"/>'+txt(590,157,'HAZIRLANAN KART','u1-small')+txt(590,207,v.kart||'Bilgiler bekleniyor','u1-label')+'</g><path d="M410 200H450" class="u1-connection"/>';
 }else if(t.id==='camera'){
  art='<path d="M77 104H525V310H77Z" class="u1-metal"/><path d="M525 135L680 88V321L525 275Z" class="u1-metal"/><circle cx="301" cy="207" r="76" class="u1-ring"/><circle cx="301" cy="207" r="49" class="u1-dark"/><circle cx="301" cy="207" r="24" class="u1-lens"/><circle cx="490" cy="126" r="5" fill="#daca8d"/>'+txt(300,337,'HAM KAYIT · '+val('toplam')+' SANİYE','u1-small');
  ['saat','dakika','saniye'].forEach((key,i)=>{const x=190+i*210;art+='<g class="'+(calc&&f.line===i+2?'u1-clock-flip':'')+'"><rect x="'+(x-78)+'" y="8" width="156" height="68" rx="6" class="u1-display"/>'+txt(x,48,val(key),'u1-big')+txt(x,96,key.toLocaleUpperCase('tr-TR'),'u1-small')+'</g>';});
 }else if(t.id==='taxi'){
  const from=prev.yol===undefined?0:1,to=v.yol===undefined?0:1;
  art='<path d="M50 292H750M50 334H750" class="u1-road"/><path d="M50 313H750" stroke-dasharray="35 18" class="u1-road"/>'+[80,240,400,560,720].map((x,i)=>'<path d="M'+x+' 265V288" class="u1-road"/>'+txt(x,367,i*2+' km','u1-small')).join('');
  art+='<g style="--u1-from:'+(from*560-45)+'px;--u1-to:'+(to*560-45)+'px" class="'+(calc&&f.line===4?'u1-taxi-drive':'u1-taxi-rest')+'"><path d="M60 248L80 213H151L181 248H199V280H51V248Z" fill="var(--u1cap-accent)" stroke="var(--u1cap-accent)"/><path d="M89 221H119V246H76M128 221H145L165 246H128Z" fill="#161b19"/><rect x="107" y="199" width="31" height="12" rx="2" fill="#ead9a5"/><circle cx="79" cy="280" r="13" class="u1-dark"/><circle cx="173" cy="280" r="13" class="u1-dark"/></g>';
  art+='<rect x="400" y="42" width="330" height="144" rx="10" class="u1-metal"/>'+txt(565,76,'TAKSİMETRE','u1-small')+txt(565,125,v.toplam!==undefined?v.toplam+' TL':v.yol!==undefined?v.yol+' TL yol':'—','u1-big')+txt(565,160,'Açılış '+val('acilis')+' · Km '+val('birim'),'u1-small')+txt(175,117,val('km')+' km','u1-big');
 }else if(t.id==='crates'){
  const count=n('kutu'),remainder=n('artan');art=txt(400,45,'DELİL '+val('delil')+' · KUTU BAŞINA '+val('kapasite'),'u1-label');
  for(let i=0;i<4;i++){const x=75+i*175;art+='<g class="'+(calc&&f.line===3?'u1-crate-load':'')+'" style="--u1-delay:'+(i*.38)+'s"><path d="M'+x+' 130h130v150H'+x+'Z" class="u1-metal"/><path d="M'+x+' 160h130M'+(x+18)+' 130v150M'+(x+112)+' 130v150" class="u1-wood"/>'+Array.from({length:6},(_,j)=>'<rect x="'+(x+30+j%3*26)+'" y="'+(231-Math.floor(j/3)*36)+'" width="17" height="27" rx="3" fill="'+(i<count?'var(--u1cap-accent)':'#293027')+'"/>').join('')+'</g>';}
  art+=txt(400,320,v.kutu===undefined?'Kutular henüz doldurulmadı':count+' TAM DOLU KUTU','u1-label');
  if(v.artan!==undefined)art+='<g class="'+(calc&&f.line===4?'u1-remainder':'')+'">'+Array.from({length:remainder},(_,i)=>'<rect x="'+(310+i*35)+'" y="348" width="20" height="29" rx="3" fill="var(--u1cap-accent)"/>').join('')+txt(400,407,remainder+' DELİL MASADA','u1-small')+'</g>';
 }else if(t.id==='blueprint'){
  art='<defs><pattern id="u1-grid" width="32" height="32" patternUnits="userSpaceOnUse"><path d="M32 0H0V32" fill="none" stroke="#d2bd7733"/></pattern></defs><rect x="35" y="15" width="730" height="380" fill="url(#u1-grid)"/><rect x="200" y="100" width="400" height="220" class="u1-room"/>';
  if(v.alan!==undefined)art+='<rect x="207" y="107" width="386" height="206" fill="#a68d4466" class="'+(calc&&f.line===3?'u1-floor-fill':'')+'"/>';
  art+='<path d="M200 74V59H600V74M172 100H156V320H172" class="u1-measure"/>'+txt(400,48,val('en')+' m','u1-label')+txt(110,220,val('boy')+' m','u1-label')+txt(400,204,v.alan===undefined?'ZEMİN':v.alan+' m²','u1-big')+txt(400,241,v.cevre===undefined?'':'ÇEVRE '+v.cevre+' m','u1-label');
  if(v.cevre!==undefined)art+='<path d="M200 100H600V320H200Z" class="u1-perimeter '+(calc&&f.line===4?'u1-perimeter-draw':'')+'"/>';
 }else if(t.id==='radio'){
  const a=v.hedef===undefined?-50:35,old=prev.hedef===undefined?-50:35;
  art='<rect x="70" y="60" width="660" height="285" rx="25" class="u1-metal"/><path d="M100 61V18H270" class="u1-antenna"/>'+Array.from({length:8},(_,i)=>'<path d="M'+(120+i*13)+' 125v135" class="u1-speaker"/>').join('')+'<path d="M310 253A150 150 0 0 1 610 253" class="u1-dial"/>'+[0,1,2,3].map((_,i)=>{const x=332+i*85;return '<path d="M'+x+' 184v18" class="u1-measure"/>'+txt(x,171,i===0?val('baslangic'):i+' adım','u1-small');}).join('');
  art+='<g style="--u1-angle:'+a+'deg;--u1-old-angle:'+old+'deg" class="u1-needle '+(calc&&f.line===4?'u1-needle-turn':'')+'"><path d="M460 274V115" stroke="#f2d990" stroke-width="5"/><circle cx="460" cy="274" r="16" fill="var(--u1cap-accent)"/></g>'+txt(460,323,val('hedef',val('baslangic'))+' MHz','u1-label')+txt(400,389,'ADIM '+val('adim')+' · TOPLAM FARK '+val('fark'),'u1-small');
 }else if(t.id==='budget'){
  art='<path d="M85 125H350V345H85Z" class="u1-metal"/><rect x="113" y="156" width="210" height="116" rx="10" class="u1-display"/>'+txt(218,190,'BÜRO KASASI','u1-small')+txt(218,238,val('kalan',val('butce'))+' TL','u1-big')+'<circle cx="218" cy="308" r="19" class="u1-ring"/><path d="M218 294V322M204 308H232" class="u1-measure"/>';
  for(let i=0;i<3;i++){const x=420+i*82;art+='<g class="'+(calc&&f.line===4?'u1-ticket-send':'')+'" style="--u1-ticket-delay:'+(i*.35)+'s"><path d="M'+x+' 125h68v115l-8 9-8-9-8 9-8-9-8 9-8-9-12 9Z" class="u1-paper"/>'+txt(x+34,164,'BİLET','u1-paper-label')+txt(x+34,209,val('fiyat'),'u1-paper-label')+'</g>';}
  art+='<path d="M364 309H682" class="u1-connection"/>'+txt(540,302,'TUTAR '+val('tutar')+' TL','u1-label')+txt(540,357,val('adet')+' BİLET','u1-small');
 }else if(t.id==='battery'){
  const current=n('pil'),before=Number(prev.pil??0);
  art='<path d="M255 50H545V365H255Z" class="u1-metal"/><path d="M285 76H515V228H285Z" class="u1-display"/><rect x="307" y="107" width="180" height="72" rx="6" class="u1-ring"/><path d="M488 129h12v27h-12" class="u1-measure"/><rect x="315" y="115" width="'+(164*current/100)+'" height="56" fill="var(--u1cap-accent)" style="--u1-before:'+164*before/100+'px;--u1-after:'+164*current/100+'px" class="'+(calc?'u1-charge':'')+'"/>'+txt(400,212,val('pil')+' %','u1-label')+'<circle cx="400" cy="291" r="43" class="u1-ring"/><circle cx="400" cy="291" r="26" class="u1-ring"/><path d="M285 344H515" class="u1-speaker"/>'+txt(130,177,'− '+val('harcanan'),'u1-big')+txt(670,177,'+ '+val('eklenen'),'u1-big')+txt(130,211,'KAYIT','u1-small')+txt(670,211,'ŞARJ','u1-small')+'<path d="M185 245H240M560 245H615" class="u1-connection"/>';
 }else if(t.id==='access'){
  const green=v.yesil===true,red=v.kirmizi===true;
  art='<path d="M200 42H540V376H200Z" class="u1-metal"/><path d="M227 65H510V350H227Z" class="u1-dark"/><path d="M370 65V350" class="u1-measure"/><rect x="325" y="204" width="14" height="36" rx="4" fill="#bba36e"/><rect x="403" y="204" width="14" height="36" rx="4" fill="#bba36e"/><rect x="570" y="80" width="126" height="256" rx="12" class="u1-metal"/><circle cx="633" cy="147" r="30" fill="'+(green?'#9bdfa2':'#29302a')+'" class="'+(calc&&f.line===3?'u1-light-on':'')+'"/><circle cx="633" cy="242" r="30" fill="'+(red?'#d9a28c':'#302722')+'"/>'+txt(633,199,'YEŞİL','u1-small')+txt(633,295,'KIRMIZI','u1-small')+'<g class="'+(f.line===1?'u1-pass-card':'')+'"><rect x="55" y="150" width="117" height="170" rx="7" class="u1-paper"/>'+txt(114,190,'KART','u1-paper-label')+txt(114,245,val('kart'),'u1-paper-label')+txt(114,286,'SEVİYE '+val('seviye'),'u1-paper-label')+'</g>';
 }else{
  art='<path d="M165 28H605L638 61V385H165Z" class="u1-paper"/><path d="M605 28V61H638" class="u1-ink"/>'+txt(395,77,'İLK BÜYÜK DOSYA','u1-paper-value')+'<path d="M200 93H600" class="u1-ink"/>';
  const rows=[['ad','DOSYA'],['kutu','DOLU KUTU'],['artan','ARTAN DELİL'],['yol','YOL / TL'],['kalan','KALAN / TL']];
  rows.forEach(([key,label],i)=>{art+=txt(290,135+i*43,label,'u1-paper-label')+txt(520,135+i*43,val(key),'u1-paper-value');});
  if(f.output.length===5)art+='<g class="u1-report-seal"><circle cx="652" cy="322" r="57" fill="#25271b" stroke="#d2bd80" stroke-width="3"/>'+txt(652,317,'DOSYA','u1-small')+txt(652,343,'KAPANDI','u1-label')+'</g>';
 }
 const code=t.reference&&f.line?t.reference.split('\n')[f.line-1].trim():f.caption;
 return '<section class="u1-scene-panel"><div class="u1-local-code"><span>'+(t.reference&&f.line?'BU ADIMDAKİ KOD':'BU ADIMDA NE OLUYOR?')+'</span><code>'+esc(code)+'</code></div><svg viewBox="0 0 800 430" role="img" aria-label="'+esc(t.title+'. '+f.caption)+'" class="u1-scene-art">'+art+'</svg></section>';
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
 $('examplecode').querySelectorAll('li').forEach((li,i)=>li.classList.toggle('u1cap-line-selected',chosen&&i+1===line));
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
 if(previous&&!root.classList.contains('u1cap-reduced')&&!matchMedia('(prefers-reduced-motion: reduce)').matches){
  const outgoing=E('div');outgoing.className='u1cap-scene-outgoing';outgoing.setAttribute('aria-hidden','true');outgoing.inert=true;
  outgoing.innerHTML=previous.replace(/id="([^"]+)"/g,'id="old-$1"').replace(/url\(#([^)]+)\)/g,'url(#old-$1)');
  outgoing.querySelectorAll('.u1cap-scene-outgoing').forEach(el=>el.remove());
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
 if(f.line)explainLine(f.line);else{$('linehelp').hidden=true;}
 if(frame===t.frames.length-1)stop(false);
}
function load(i){
 stop();revision++;busy=false;state.current=i;save();frame=0;radarAngle=-110;const t=tasks[i];root.scrollTo({top:0,behavior:'instant'});
 const delays=[8000,6000,3800];[...$('speed').options].forEach((o,j)=>o.value=String(delays[j]));
 root.dataset.theme=t.theme;root.setAttribute('aria-label','Ünite 1 bitirme projesi · '+t.title+' · '+t.themeName+' tema');root.dataset.scene=t.id;root.classList.toggle('u1cap-reduced',reduced);
 $('title').textContent=t.title;$('subtitle').textContent=t.kind;$('intro').textContent=t.intro;$('goal').textContent=t.goal;$('concept').textContent=t.concept;
 $('rules').replaceChildren(...t.rules.map(s=>E('li',s)));explainQuestion(t);
 $('inputs').textContent=t.input.map((s,i)=>(i+1)+'. '+(s===''?'(boş satır)':s)).join('\n');$('expected').textContent=t.output.join('\n');
 $('editor').value=state.drafts[i]??'// Kullanıcıdan girdileri oku ve istenen sonuçları yazdır.\n';
 $('hint').hidden=t.independent;$('hinttext').hidden=true;$('hinttext').textContent=t.hint;
 $('reminder').hidden=true;$('example').hidden=t.independent;$('example').open=!t.independent;
 $('examplecode').replaceChildren(...(t.reference||'').split('\n').map((line,i)=>{const li=E('li');li.append(E('code',line||' '));li.tabIndex=0;li.setAttribute('role','button');li.setAttribute('aria-label','Satır '+(i+1)+' açıklaması: '+line.trim());li.onclick=()=>explainLine(i+1,true);li.onkeydown=e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();explainLine(i+1,true);}};return li;}));
 $('feedback').textContent='';$('feedback').className='u1cap-feedback';$('tests').hidden=true;$('success').hidden=true;$('run').disabled=false;
 $('nav').replaceChildren(...tasks.map((task,n)=>{const b=E('button',(n+1)+'. '+task.title+(state.done.includes(n)?' ✓':''));b.type='button';b.style.setProperty('--task-color',["#9bdfad","#8cbef3","#f1c06e","#86d8be","#c3a5f2","#83dcec","#f0ae7d","#c6df84","#eea0bc","#e4d6a0"][n]);b.setAttribute('aria-current',i===n?'step':'false');b.onclick=()=>load(n);return b;}));
 $('progress').textContent=state.done.length+' / '+tasks.length+' aşama';
 $('independent').hidden=!t.independent;renderFrame();completer?.setEnabled(!t.independent);
}
function finish(){
 if(state.done.length<tasks.length||qa)return;
 if(!g.kayit.extraCases)g.kayit.extraCases={};
 
 if(!g.kayit.extraCases['u1-final10']){g.kayit.extraCases['u1-final10']=true;g.kayit.xp+=1000;g.sakla?.();}
 g.sakla?.();g.CSharpNoir?.sync();g.menuDoldur?.();
}
async function run(){
 if(busy)return;busy=true;const version=revision,index=state.current;
 $('run').disabled=true;$('feedback').textContent='Kodun derleniyor ve farklı girdilerle deneniyor…';$('tests').hidden=true;$('success').hidden=true;
 try{
  let r=await fetch('/api/check',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({question:85+index,code:$('editor').value}),signal:AbortSignal.timeout(20000)});
  if(!r.ok)throw Error('HTTP '+r.status);
  let result=await r.json();
  // An already-open 85-question server can keep serving earlier lessons until restart.
  if(result.stage==='Başlangıç'&&location.hostname==='127.0.0.1'&&location.port==='5184'){
   r=await fetch('http://127.0.0.1:5190/api/check',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({question:85+index,code:$('editor').value}),signal:AbortSignal.timeout(20000)});
   if(!r.ok)throw Error('HTTP '+r.status);result=await r.json();
  }
  if(version!==revision||!opened)return;
  $('feedback').className='u1cap-feedback '+(result.ok?'good':'bad');
  $('feedback').textContent=result.message+(result.errors?'\n'+result.errors.map(e=>'Satır '+Math.max(1,e.line-1)+': '+e.message).join('\n'):'');
  if(result.rows){$('rows').replaceChildren(...result.rows.map(r=>{const tr=E('tr');for(const x of [r.input.map(v=>v===''?'(boş satır)':v).join('\n'),r.expected.join('\n'),r.actual.join('\n')||'(çıktı yok)',r.ok?'✓ Geçti':'Tekrar bak'])tr.append(E('td',x));return tr;}));$('tests').hidden=false;}
  if(result.ok){if(!state.done.includes(index))state.done.push(index);const completed=$('nav').children[index];if(completed)completed.textContent=(index+1)+'. '+tasks[index].title+' ✓';save();finish();$('progress').textContent=state.done.length+' / '+tasks.length+' aşama';$('success').hidden=false;$('successmsg').textContent=state.done.length===tasks.length?'Ünite 1 bitirme vakası tamamlandı. On görevi de tamamladın!':'Bu aşama tamamlandı. Kodun farklı girdilerde de doğru çalıştı.';$('next').textContent=state.done.length===tasks.length?'Ünite 1’e dön →':'Sonraki aşama →';}
 }catch(e){if(version===revision&&opened){$('feedback').className='u1cap-feedback bad';$('feedback').textContent='Kod kontrol servisine ulaşılamadı. Sunucunun açık olduğundan emin ol ve yeniden dene. Kodun burada duruyor.';}}
 finally{if(version===revision){busy=false;$('run').disabled=false;}}
}
function create(){
 root=E('section');root.id='u1-final-dialog';root.hidden=true;root.setAttribute('role','dialog');root.setAttribute('aria-modal','true');root.setAttribute('aria-label','Ünite 1 bitirme projesi · İlk Büyük Dosya');
 root.innerHTML='<header class="u1cap-top"><div><small>ÜNİTE 1 · BİTİRME PROJESİ</small><strong>Vaka 9 · İlk Büyük Dosya</strong></div><span id="u1cap-progress"></span><button id="u1cap-motion">Hareketi azalt</button><button id="u1cap-close">← Ünite 1’e dön</button></header><main class="u1cap-shell"><nav id="u1cap-nav" aria-label="Bitirme projesi aşamaları"></nav><header class="u1cap-heading"><span id="u1cap-subtitle"></span><h1 id="u1cap-title"></h1><p id="u1cap-concept"></p></header><section class="u1cap-understand"><h2>Önce soruyu anlayalım</h2><div id="u1cap-understand"></div><details class="u1cap-walk"><summary>Örneği birlikte okuyalım · hangi girişten sonra ne olur?</summary><ol id="u1cap-walkthrough"></ol></details></section><section class="u1cap-teaching"><div class="u1cap-cinema"><div class="u1cap-scene-label"><span>ÖRNEĞİ ADIM ADIM İZLE</span><span id="u1cap-stepcount"></span></div><div id="u1cap-scene" class="u1cap-scene"></div><div id="u1cap-variables" class="u1cap-variables"></div><p id="u1cap-running" class="u1cap-running"></p><p id="u1cap-caption" class="u1cap-caption" aria-live="polite"></p><div class="u1cap-controls"><button id="u1cap-back">← Geri</button><button id="u1cap-play">▶ Otomatik izle</button><button id="u1cap-replay">↻ Baştan</button><label>Hız <select id="u1cap-speed" aria-label="Animasyon hızı"><option value="3200">Yavaş</option><option value="1800" selected>Normal</option><option value="900">Hızlı</option></select></label><button id="u1cap-forward" class="u1cap-primary">Sonraki adım →</button></div></div><aside class="u1cap-output"><h2>Örnek konsol</h2><pre id="u1cap-console"></pre><p>Bu çıktı yukarıdaki örneğe ait. Kendi kodun aşağıda farklı girdilerle de kontrol edilecek.</p><details id="u1cap-example"><summary>Örnek kod · satıra tıkla, açıklamasını gör</summary><section id="u1cap-linehelp" class="u1cap-linehelp" aria-live="polite"><h3 id="u1cap-linetitle"></h3><p id="u1cap-linemeaning"></p><p id="u1cap-lineexample"></p></section><ol id="u1cap-examplecode"></ol></details><p id="u1cap-independent">BAĞIMSIZ GÖREV · Çözüm kodu ve ipucu yok. Sahne yalnızca programın ne yapacağını gösteriyor.</p></aside></section><section id="u1cap-terms" class="u1cap-terms" aria-label="Bu sorudaki komutlar"></section><section class="u1cap-work"><article class="u1cap-brief"><span class="u1cap-eyebrow">GÖREVİN</span><p id="u1cap-intro"></p><h2>Ne yazacaksın?</h2><p id="u1cap-goal"></p><ul id="u1cap-rules"></ul><div class="u1cap-io"><div><h3>Örnek girdiler · sırayla</h3><pre id="u1cap-inputs"></pre></div><div><h3>Beklenen çıktı</h3><pre id="u1cap-expected"></pre></div></div><details id="u1cap-reminder"><summary>Kısa hatırlatma · TryParse</summary><p>ReadLine metin verir. int.TryParse(metin, out int sayi) başarılıysa true olur ve sayi dolmuş olur. Başarısızsa false olur; bu girişle hesap yapma.</p><pre>string metin = Console.ReadLine();\nif (int.TryParse(metin, out int sayi))\n    Console.WriteLine(sayi);</pre><p>Çıkış işareti ile geçersiz girdiyi ayır. Bir döngünün sayacını yalnızca ilgili işlem gerçekten yapıldığında artır.</p></details></article><article class="u1cap-code"><div class="u1cap-editorbar"><strong>IlkBuyukDosya.cs</strong><span>C# · ROSLYN</span></div><label for="u1cap-editor">C# kodunu buraya yaz</label><textarea id="u1cap-editor" spellcheck="false" autocapitalize="off" autocomplete="off"></textarea><p class="u1cap-editor-help">Bütün kodu sen yaz. Değişken adları ve uygun çözüm yolu serbest. Ctrl + Enter ile kontrol et.</p><div class="u1cap-actions"><button id="u1cap-run" class="u1cap-primary">▶ Kodumu kontrol et</button><button id="u1cap-hint">İpucu</button></div><p id="u1cap-hinttext" class="u1cap-hint" hidden></p><div id="u1cap-feedback" class="u1cap-feedback" role="status" aria-live="polite"></div><section id="u1cap-tests" hidden><h3>Test sonuçları</h3><div class="u1cap-table-wrap"><table><thead><tr><th>Girdi sırası</th><th>Beklenen</th><th>Senin çıktın</th><th>Durum</th></tr></thead><tbody id="u1cap-rows"></tbody></table></div></section><section id="u1cap-success" class="u1cap-success" hidden><p id="u1cap-successmsg"></p><button id="u1cap-next" class="u1cap-primary">Sonraki aşama →</button></section></article></section></main>';
 document.body.append(root);
 const cinema=root.querySelector('.u1cap-cinema');cinema.insertBefore(root.querySelector('.u1cap-controls'),$('scene'));cinema.insertBefore($('running'),$('scene'));
 completer=g.Unit1CodeComplete?.mount($('editor'),()=>g.Unit1CodeComplete.variablesFromCode(tasks[state.current].reference),{scope:'u1'});
 $('editor').addEventListener('input',()=>{state.drafts[state.current]=$('editor').value;save();});
 $('editor').addEventListener('keydown',e=>{if(completer?.handleKeydown(e))return;if(e.key==='Tab'){e.preventDefault();$('editor').setRangeText('    ',$('editor').selectionStart,$('editor').selectionEnd,'end');$('editor').dispatchEvent(new Event('input'));}if((e.ctrlKey||e.metaKey)&&e.key==='Enter'){e.preventDefault();run();}});
 $('back').onclick=()=>{stop();frame=Math.max(0,frame-1);renderFrame();};
 $('forward').onclick=()=>{stop();frame=Math.min(tasks[state.current].frames.length-1,frame+1);renderFrame();};
 $('replay').onclick=()=>{stop();frame=0;radarAngle=-110;renderFrame();};
 $('play').onclick=()=>{if(timer){stop();return;}if(frame===tasks[state.current].frames.length-1){frame=0;radarAngle=-110;renderFrame();}root.getAnimations({subtree:true}).forEach(a=>a.play());root.classList.add('u1cap-playing');$('play').textContent='Ⅱ Duraklat';timer=setInterval(()=>{frame=Math.min(tasks[state.current].frames.length-1,frame+1);renderFrame();},Number($('speed').value));};
 $('speed').onchange=()=>{if(timer){stop();$('play').click();}};
 $('run').onclick=run;$('hint').onclick=()=>{$('hinttext').hidden=!$('hinttext').hidden;};
 $('close').onclick=close;$('next').onclick=()=>{if(state.done.length===tasks.length){close();return;}let i=state.current+1;if(i>=tasks.length)i=tasks.findIndex((_,n)=>!state.done.includes(n));load(i);root.scrollTo({top:0,behavior:'instant'});};
 $('motion').onclick=()=>{reduced=!reduced;root.classList.toggle('u1cap-reduced',reduced);$('motion').textContent=reduced?'Hareketi aç':'Hareketi azalt';};
 root.addEventListener('keydown',e=>{if(e.key==='Escape'){e.preventDefault();close();}if(e.key==='Tab'&&e.target!==$('editor')){const nodes=[...root.querySelectorAll('button:not(:disabled),textarea,select,summary,[tabindex="0"]')].filter(n=>n.getClientRects().length);if(e.shiftKey&&document.activeElement===nodes[0]){e.preventDefault();nodes.at(-1)?.focus();}else if(!e.shiftKey&&document.activeElement===nodes.at(-1)){e.preventDefault();nodes[0]?.focus();}}});
}
function open(){
 if(opened)return;g.CSharpNoir?.selectPractice(9);if(!root)create();previous=document.activeElement;opened=true;root.hidden=false;
 inerted=[...document.body.children].filter(n=>n!==root).map(n=>[n,n.inert]);inerted.forEach(([n])=>n.inert=true);document.body.classList.add('u1cap-open');
 if(location.hash!=='#unite1-bitirme')history.pushState(null,'','#unite1-bitirme');load(state.current);$('close').focus({preventScroll:true});$('motion').textContent=reduced?'Hareketi aç':'Hareketi azalt';
}
function close(){if(!opened)return;stop();revision++;completer?.hide();opened=false;root.hidden=true;inerted.forEach(([n,v])=>n.inert=v);inerted=[];document.body.classList.remove('u1cap-open');if(location.hash==='#unite1-bitirme')history.replaceState(null,'',location.pathname+location.search);g.patika?.();previous?.focus?.({preventScroll:true});}
g.Unit1Capstone={open,close};g.addEventListener('pagehide',stop);
if(location.hash==='#unite1-bitirme')open();
})(window);

