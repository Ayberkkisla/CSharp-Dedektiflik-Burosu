(function(g){
'use strict';
const tasks=g.Unit3ArrayTasks;if(!tasks)return;
const qa=new URLSearchParams(location.search).get('deneme')==='delil-rafi';
const store=g.NoirProgress||localStorage,key='cnoir-u3-array23-v1'+(qa?'-qa':'');
let state={current:0,done:[],drafts:{}};try{Object.assign(state,JSON.parse(store.getItem(key)||'{}'));}catch(_){}
state.current=Math.max(0,Math.min(tasks.length-1,Number(state.current)||0));state.done=Array.isArray(state.done)?[...new Set(state.done.filter(n=>Number.isInteger(n)&&n>=0&&n<tasks.length))]:[];state.drafts=state.drafts&&typeof state.drafts==='object'?state.drafts:{};
let radarAngle=-110;
let root,frame=0,timer=null,revision=0,opened=false,busy=false,previous,inerted=[],completer,reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const E=(tag,text,cls)=>{const e=document.createElement(tag);if(text!==undefined)e.textContent=text;if(cls)e.className=cls;return e;};
const $=id=>root.querySelector('#arrcap-'+id);
function save(){try{store.setItem(key,JSON.stringify(state));}catch(_){}}
function stop(freeze=true){if(timer)clearInterval(timer);timer=null;if(root){if(freeze)root.getAnimations({subtree:true}).forEach(a=>a.pause());$('play').textContent='▶ Otomatik izle';root.classList.remove('arrcap-playing');}}



function graphic(t,f){
 const values=f.array||[],count=values.length||3,width=count>4?96:118,gap=18,start=(800-(count*width+(count-1)*gap))/2;
 const tx=(x,y,s,cls='arr-label')=>'<text x="'+x+'" y="'+y+'" class="'+cls+'">'+esc(s)+'</text>';
 const source=f.line?t.reference.split('\n')[f.line-1].trim():f.caption;
 const previous=t.frames[Math.max(0,frame-1)],active=f.active;
 const center=i=>start+i*(width+gap)+width/2;
 let art='<path d="M38 270H762M38 286H762" class="arr-shelf"/><path d="M65 286V315M735 286V315" class="arr-shelf"/><path d="M'+start+' 100H'+(800-start)+'" class="arr-rail"/>';
 for(let i=0;i<count;i++){
  const x=start+i*(width+gap),isActive=i===active,writing=isActive&&['read','update'].includes(f.operation);
  art+='<g class="arr-cell '+(isActive?'arr-cell-active ':'')+(f.operation==='create'?'arr-cell-create':'')+'" style="--cell-delay:'+i*.12+'s"><path d="M'+x+' 155H'+(x+width)+'V258H'+x+'Z" class="arr-cell-wall"/><path d="M'+(x+8)+' 161H'+(x+width-8)+'" class="arr-cell-lip"/>';
  if(writing&&f.old!==null)art+=tx(x+width/2,219,f.old,'arr-old-value');
  art+=tx(x+width/2,219,values.length?values[i]:'—','arr-cell-value '+(writing?'arr-value-write':''))+tx(x+width/2,309,'['+i+']','arr-index')+'</g>';
 }
 if(active>=0){
  const old=previous.active>=0&&previous.array?.length===values.length?center(previous.active):center(active);
  art+='<g class="arr-reader" style="--reader-from:'+old+'px;--reader-to:'+center(active)+'px"><rect x="-45" y="65" width="90" height="36" rx="5" class="arr-reader-face"/>'+tx(0,90,'İNDEKS '+active,'arr-reader-label')+'<path d="M0 104V143M-8 134l8 10 8-10" class="arr-reader-arrow"/></g>';
 }
 if(['read','update'].includes(f.operation)&&active>=0){
  art+='<g class="arr-input-ticket" style="--ticket-x:'+center(active)+'px"><rect x="-30" y="-22" width="60" height="42" rx="5" class="arr-ticket"/>'+tx(0,7,f.packet,'arr-ticket-value')+'</g>'+tx(400,35,f.operation==='update'?'YENİ DEĞER AYNI ELEMANIN YERİNE YAZILIYOR':'GİRDİ, SEÇİLİ DİZİ ELEMANINA GİDİYOR','arr-small');
 }else art+=tx(400,35,values.length?values.length+' ELEMAN · İNDEKSLER 0–'+(values.length-1):'ÖNCE DİZİYİ OLUŞTUR','arr-small');
 if(f.metric){
  art+='<rect x="75" y="346" width="265" height="65" rx="8" class="arr-meter"/>'+tx(208,367,f.metric.label,'arr-small')+tx(208,399,f.metric.value,'arr-meter-value '+(f.operation==='collect'?'arr-metric-change':''));
  if(f.operation==='collect'&&active>=0)art+='<g class="arr-collect" style="--collect-x:'+center(active)+'px"><circle r="19" class="arr-ticket"/>'+tx(0,6,f.packet,'arr-ticket-value')+'</g>';
 }else{
  art+=tx(200,369,'DİZİNİN ELEMANLARI YERİNDE DURUR','arr-small')+tx(200,398,active>=0?'ŞİMDİ OKUNAN İNDEKS: '+active:'BİR SONRAKİ SATIRI İZLE','arr-small');
 }
 if(f.operation==='output'){
  art+='<path d="M'+(active>=0?center(active):400)+' 320Q640 320 685 354" class="arr-print-path"/><rect x="530" y="347" width="220" height="65" rx="7" class="arr-meter"/>'+tx(640,368,'KONSOLA EKLENEN SATIR','arr-small')+tx(640,399,f.output.at(-1),'arr-meter-value');
 }else art+=tx(638,370,''+(f.output.length||0)+' SATIR ÇIKTI','arr-small')+tx(638,397,'YAZDIRMA KOMUTUNU BEKLE','arr-small');
 return '<section class="arr-scene-panel"><div class="arr-local-code"><span>'+(f.line?'BU ADIMDAKİ KOD':'ÖRNEĞİ BAŞLAT')+'</span><code>'+esc(source)+'</code></div><svg class="arr-shelf-svg" viewBox="0 0 800 440" role="img" aria-label="'+esc(t.title+'. '+f.caption)+'">'+art+'</svg></section>';
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
 $('examplecode').querySelectorAll('li').forEach((li,i)=>li.classList.toggle('arrcap-line-selected',chosen&&i+1===line));
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
 if(previous&&!root.classList.contains('arrcap-reduced')&&!matchMedia('(prefers-reduced-motion: reduce)').matches){
  const outgoing=E('div');outgoing.className='arrcap-scene-outgoing';outgoing.setAttribute('aria-hidden','true');outgoing.inert=true;
  outgoing.innerHTML=previous.replace(/id="([^"]+)"/g,'id="old-$1"').replace(/url\(#([^)]+)\)/g,'url(#old-$1)');
  outgoing.querySelectorAll('.arrcap-scene-outgoing').forEach(el=>el.remove());
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
 root.dataset.theme='teal';root.setAttribute('aria-label','Ünite 3 dizi alıştırması · '+t.title+' · '+t.themeName+' tema');root.dataset.scene=t.id;root.classList.toggle('arrcap-reduced',reduced);
 $('title').textContent=t.title;$('subtitle').textContent=t.kind;$('intro').textContent=t.intro;$('goal').textContent=t.goal;$('concept').textContent=t.concept;
 $('rules').replaceChildren(...t.rules.map(s=>E('li',s)));explainQuestion(t);
 $('inputs').textContent=t.input.map((s,i)=>(i+1)+'. '+(s===''?'(boş satır)':s)).join('\n');$('expected').textContent=t.output.join('\n');
 $('editor').value=state.drafts[i]??'// Kullanıcıdan girdileri oku, int[] dizisine yerleştir ve istenen sonuçları yazdır.\n';
 $('hint').hidden=t.independent;$('hinttext').hidden=true;$('hinttext').textContent=t.hint;
 $('reminder').hidden=true;$('example').hidden=t.independent;$('example').open=!t.independent;
 $('examplecode').replaceChildren(...(t.reference||'').split('\n').map((line,i)=>{const li=E('li');li.append(E('code',line||' '));li.tabIndex=0;li.setAttribute('role','button');li.setAttribute('aria-label','Satır '+(i+1)+' açıklaması: '+line.trim());li.onclick=()=>explainLine(i+1,true);li.onkeydown=e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();explainLine(i+1,true);}};return li;}));
 $('feedback').textContent='';$('feedback').className='arrcap-feedback';$('tests').hidden=true;$('success').hidden=true;$('run').disabled=false;
 $('nav').replaceChildren(...tasks.map((task,n)=>{const b=E('button',(n+1)+'. '+task.title+(state.done.includes(n)?' ✓':''));b.type='button';b.style.setProperty('--task-color','#9edbd0');b.setAttribute('aria-current',i===n?'step':'false');b.onclick=()=>load(n);return b;}));
 $('progress').textContent=state.done.length+' / '+tasks.length+' soru';
 $('independent').hidden=!t.independent;renderFrame();completer?.setEnabled(!t.independent);
}
function finish(){
 if(state.done.length<tasks.length||qa)return;
 if(!g.kayit.extraCases)g.kayit.extraCases={};
 
 if(!g.kayit.extraCases['u3-array23']){g.kayit.extraCases['u3-array23']=true;g.kayit.xp+=600;g.sakla?.();}
 g.sakla?.();g.CSharpNoir?.sync();g.menuDoldur?.();
}
async function run(){
 if(busy)return;busy=true;const version=revision,index=state.current;
 $('run').disabled=true;$('feedback').textContent='Kodun derleniyor ve farklı girdilerle deneniyor…';$('tests').hidden=true;$('success').hidden=true;
 try{
  let r=await fetch('/api/check',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({question:95+index,code:$('editor').value}),signal:AbortSignal.timeout(20000)});
  if(!r.ok)throw Error('HTTP '+r.status);
  let result=await r.json();
  // An already-open 85-question server can keep serving earlier lessons until restart.
  if(result.stage==='Başlangıç'&&location.hostname==='127.0.0.1'&&location.port==='5184'){
   r=await fetch('http://127.0.0.1:5191/api/check',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({question:95+index,code:$('editor').value}),signal:AbortSignal.timeout(20000)});
   if(!r.ok)throw Error('HTTP '+r.status);result=await r.json();
  }
  if(version!==revision||!opened)return;
  $('feedback').className='arrcap-feedback '+(result.ok?'good':'bad');
  $('feedback').textContent=result.message+(result.errors?'\n'+result.errors.map(e=>'Satır '+Math.max(1,e.line)+': '+e.message).join('\n'):'');
  if(result.rows){$('rows').replaceChildren(...result.rows.map(r=>{const tr=E('tr');for(const x of [r.input.map(v=>v===''?'(boş satır)':v).join('\n'),r.expected.join('\n'),r.actual.join('\n')||'(çıktı yok)',r.ok?'✓ Geçti':'Tekrar bak'])tr.append(E('td',x));return tr;}));$('tests').hidden=false;}
  if(result.ok){if(!state.done.includes(index))state.done.push(index);const completed=$('nav').children[index];if(completed)completed.textContent=(index+1)+'. '+tasks[index].title+' ✓';save();finish();$('progress').textContent=state.done.length+' / '+tasks.length+' soru';$('success').hidden=false;$('successmsg').textContent=state.done.length===tasks.length?'Delil Rafı tamamlandı. On soruyu da çözdün!':'Bu soru tamamlandı. Kodun farklı girdilerde de doğru çalıştı.';$('next').textContent=state.done.length===tasks.length?'Ünite 3’e dön →':'Sonraki soru →';}
 }catch(e){if(version===revision&&opened){$('feedback').className='arrcap-feedback bad';$('feedback').textContent='Kod kontrol servisine ulaşılamadı. Sunucunun açık olduğundan emin ol ve yeniden dene. Kodun burada duruyor.';}}
 finally{if(version===revision){busy=false;$('run').disabled=false;}}
}
function create(){
 root=E('section');root.id='u3-array-dialog';root.hidden=true;root.setAttribute('role','dialog');root.setAttribute('aria-modal','true');root.setAttribute('aria-label','Ünite 3 dizi alıştırması · Delil Rafı');
 root.innerHTML='<header class="arrcap-top"><div><small>ÜNİTE 3 · KOLAY DİZİ GÖREVLERİ</small><strong>Vaka 23 · Delil Rafı</strong></div><span id="arrcap-progress"></span><button id="arrcap-motion">Hareketi azalt</button><button id="arrcap-close">← Ünite 3’e dön</button></header><main class="arrcap-shell"><nav id="arrcap-nav" aria-label="Dizi alıştırması soruları"></nav><header class="arrcap-heading"><span id="arrcap-subtitle"></span><h1 id="arrcap-title"></h1><p id="arrcap-concept"></p></header><section class="arrcap-understand"><h2>Önce soruyu anlayalım</h2><div id="arrcap-understand"></div><details class="arrcap-walk"><summary>Örneği birlikte okuyalım · hangi girişten sonra ne olur?</summary><ol id="arrcap-walkthrough"></ol></details></section><section class="arrcap-teaching"><div class="arrcap-cinema"><div class="arrcap-scene-label"><span>ÖRNEĞİ ADIM ADIM İZLE</span><span id="arrcap-stepcount"></span></div><div id="arrcap-scene" class="arrcap-scene"></div><div id="arrcap-variables" class="arrcap-variables"></div><p id="arrcap-running" class="arrcap-running"></p><p id="arrcap-caption" class="arrcap-caption" aria-live="polite"></p><div class="arrcap-controls"><button id="arrcap-back">← Geri</button><button id="arrcap-play">▶ Otomatik izle</button><button id="arrcap-replay">↻ Baştan</button><label>Hız <select id="arrcap-speed" aria-label="Animasyon hızı"><option value="3200">Yavaş</option><option value="1800" selected>Normal</option><option value="900">Hızlı</option></select></label><button id="arrcap-forward" class="arrcap-primary">Sonraki adım →</button></div></div><aside class="arrcap-output"><h2>Örnek konsol</h2><pre id="arrcap-console"></pre><p>Bu çıktı yukarıdaki örneğe ait. Kendi kodun aşağıda farklı girdilerle de kontrol edilecek.</p><details id="arrcap-example"><summary>Örnek kod · satıra tıkla, açıklamasını gör</summary><section id="arrcap-linehelp" class="arrcap-linehelp" aria-live="polite"><h3 id="arrcap-linetitle"></h3><p id="arrcap-linemeaning"></p><p id="arrcap-lineexample"></p></section><ol id="arrcap-examplecode"></ol></details><p id="arrcap-independent">BAĞIMSIZ GÖREV · Çözüm kodu ve ipucu yok. Sahne yalnızca programın ne yapacağını gösteriyor.</p></aside></section><section id="arrcap-terms" class="arrcap-terms" aria-label="Bu sorudaki komutlar"></section><section class="arrcap-work"><article class="arrcap-brief"><span class="arrcap-eyebrow">GÖREVİN</span><p id="arrcap-intro"></p><h2>Ne yazacaksın?</h2><p id="arrcap-goal"></p><ul id="arrcap-rules"></ul><div class="arrcap-io"><div><h3>Örnek girdiler · sırayla</h3><pre id="arrcap-inputs"></pre></div><div><h3>Beklenen çıktı</h3><pre id="arrcap-expected"></pre></div></div><details id="arrcap-reminder"><summary>Kısa hatırlatma · TryParse</summary><p>ReadLine metin verir. int.TryParse(metin, out int sayi) başarılıysa true olur ve sayi dolmuş olur. Başarısızsa false olur; bu girişle hesap yapma.</p><pre>string metin = Console.ReadLine();\nif (int.TryParse(metin, out int sayi))\n    Console.WriteLine(sayi);</pre><p>Çıkış işareti ile geçersiz girdiyi ayır. Bir döngünün sayacını yalnızca ilgili işlem gerçekten yapıldığında artır.</p></details></article><article class="arrcap-code"><div class="arrcap-editorbar"><strong>DelilRafi.cs</strong><span>C# · ROSLYN</span></div><label for="arrcap-editor">C# kodunu buraya yaz</label><textarea id="arrcap-editor" spellcheck="false" autocapitalize="off" autocomplete="off"></textarea><p class="arrcap-editor-help">Bütün kodu sen yaz. Değişken adları ve uygun çözüm yolu serbest. Ctrl + Enter ile kontrol et.</p><div class="arrcap-actions"><button id="arrcap-run" class="arrcap-primary">▶ Kodumu kontrol et</button><button id="arrcap-hint">İpucu</button></div><p id="arrcap-hinttext" class="arrcap-hint" hidden></p><div id="arrcap-feedback" class="arrcap-feedback" role="status" aria-live="polite"></div><section id="arrcap-tests" hidden><h3>Test sonuçları</h3><div class="arrcap-table-wrap"><table><thead><tr><th>Girdi sırası</th><th>Beklenen</th><th>Senin çıktın</th><th>Durum</th></tr></thead><tbody id="arrcap-rows"></tbody></table></div></section><section id="arrcap-success" class="arrcap-success" hidden><p id="arrcap-successmsg"></p><button id="arrcap-next" class="arrcap-primary">Sonraki soru →</button></section></article></section></main>';
 document.body.append(root);
 const cinema=root.querySelector('.arrcap-cinema');cinema.insertBefore(root.querySelector('.arrcap-controls'),$('scene'));cinema.insertBefore($('running'),$('scene'));
 completer=g.Unit1CodeComplete?.mount($('editor'),()=>[],{scope:'u3'});
 $('editor').addEventListener('input',()=>{state.drafts[state.current]=$('editor').value;save();});
 $('editor').addEventListener('keydown',e=>{if(completer?.handleKeydown(e))return;if(e.key==='Tab'){e.preventDefault();$('editor').setRangeText('    ',$('editor').selectionStart,$('editor').selectionEnd,'end');$('editor').dispatchEvent(new Event('input'));}if((e.ctrlKey||e.metaKey)&&e.key==='Enter'){e.preventDefault();run();}});
 $('back').onclick=()=>{stop();frame=Math.max(0,frame-1);renderFrame();};
 $('forward').onclick=()=>{stop();frame=Math.min(tasks[state.current].frames.length-1,frame+1);renderFrame();};
 $('replay').onclick=()=>{stop();frame=0;radarAngle=-110;renderFrame();};
 $('play').onclick=()=>{if(timer){stop();return;}if(frame===tasks[state.current].frames.length-1){frame=0;radarAngle=-110;renderFrame();}root.getAnimations({subtree:true}).forEach(a=>a.play());root.classList.add('arrcap-playing');$('play').textContent='Ⅱ Duraklat';timer=setInterval(()=>{frame=Math.min(tasks[state.current].frames.length-1,frame+1);renderFrame();},Number($('speed').value));};
 $('speed').onchange=()=>{if(timer){stop();$('play').click();}};
 $('run').onclick=run;$('hint').onclick=()=>{$('hinttext').hidden=!$('hinttext').hidden;};
 $('close').onclick=close;$('next').onclick=()=>{if(state.done.length===tasks.length){close();return;}let i=state.current+1;if(i>=tasks.length)i=tasks.findIndex((_,n)=>!state.done.includes(n));load(i);root.scrollTo({top:0,behavior:'instant'});};
 $('motion').onclick=()=>{reduced=!reduced;root.classList.toggle('arrcap-reduced',reduced);$('motion').textContent=reduced?'Hareketi aç':'Hareketi azalt';};
 root.addEventListener('keydown',e=>{if(e.key==='Escape'){e.preventDefault();close();}if(e.key==='Tab'&&e.target!==$('editor')){const nodes=[...root.querySelectorAll('button:not(:disabled),textarea,select,summary,[tabindex="0"]')].filter(n=>n.getClientRects().length);if(e.shiftKey&&document.activeElement===nodes[0]){e.preventDefault();nodes.at(-1)?.focus();}else if(!e.shiftKey&&document.activeElement===nodes.at(-1)){e.preventDefault();nodes[0]?.focus();}}});
}
function open(){
 if(opened)return;g.CSharpNoir?.selectPractice(23);if(!root)create();previous=document.activeElement;opened=true;root.hidden=false;
 inerted=[...document.body.children].filter(n=>n!==root).map(n=>[n,n.inert]);inerted.forEach(([n])=>n.inert=true);document.body.classList.add('arrcap-open');
 if(location.hash!=='#delil-rafi')history.pushState(null,'','#delil-rafi');load(state.current);$('close').focus({preventScroll:true});$('motion').textContent=reduced?'Hareketi aç':'Hareketi azalt';
}
function close(){if(!opened)return;stop();revision++;completer?.hide();opened=false;root.hidden=true;inerted.forEach(([n,v])=>n.inert=v);inerted=[];document.body.classList.remove('arrcap-open');if(location.hash==='#delil-rafi')history.replaceState(null,'',location.pathname+location.search);g.patika?.();previous?.focus?.({preventScroll:true});}
g.Unit3ArrayCase={open,close};g.addEventListener('pagehide',stop);
if(location.hash==='#delil-rafi')open();
})(window);




