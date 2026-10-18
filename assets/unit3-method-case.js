(function(g){
'use strict';
const tasks=g.Unit3MethodTasks;if(!tasks)return;
const qa=new URLSearchParams(location.search).get('deneme')==='buronun-araclari';
const store=g.NoirProgress||localStorage,key='cnoir-u3-method25-v1'+(qa?'-qa':'');
let state={current:0,done:[],drafts:{}};try{Object.assign(state,JSON.parse(store.getItem(key)||'{}'));}catch(_){}
state.current=Math.max(0,Math.min(tasks.length-1,Number(state.current)||0));state.done=Array.isArray(state.done)?[...new Set(state.done.filter(n=>Number.isInteger(n)&&n>=0&&n<tasks.length))]:[];state.drafts=state.drafts&&typeof state.drafts==='object'?state.drafts:{};
let radarAngle=-110;
let root,frame=0,timer=null,revision=0,opened=false,busy=false,previous,inerted=[],completer,reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const E=(tag,text,cls)=>{const e=document.createElement(tag);if(text!==undefined)e.textContent=text;if(cls)e.className=cls;return e;};
const $=id=>root.querySelector('#metcap-'+id);
function save(){try{store.setItem(key,JSON.stringify(state));}catch(_){}}
function stop(freeze=true){if(timer)clearInterval(timer);timer=null;if(root){root.querySelectorAll('.metcap-scene-outgoing').forEach(el=>el.remove());if(freeze)root.getAnimations({subtree:true}).forEach(a=>a.pause());$('play').textContent='▶ Otomatik izle';root.classList.remove('metcap-playing');}}




function graphic(t,f){
 const m=f.method,inMethod=f.context==='method',params=m.params||[],caller=f.caller||[];
 const text=(x,y,value,cls='mth-label')=>'<text x="'+x+'" y="'+y+'" class="'+cls+'">'+esc(value)+'</text>';
 let art='<rect x="35" y="82" width="228" height="245" rx="14" class="mth-caller"/>'+text(149,113,'ÇAĞIRAN KOD','mth-small');
 if(caller.length)caller.slice(-5).forEach((v,i)=>{art+=text(149,151+i*31,v.name+' = '+v.value,'mth-variable');});else art+=text(149,202,'Girdi yok','mth-variable')+text(149,231,'Çağrıyı izle','mth-small');
 art+='<path d="M264 175H334" class="mth-call-path '+(f.phase==='call'||f.phase==='bind'?'mth-call-active':'')+'"/>'+text(299,154,'ÇAĞRI','mth-tiny');
 art+='<g class="mth-device '+(!inMethod&&f.phase!=='call'?'mth-device-idle':'')+'"><path d="M358 80H724L754 110V304L730 329H358L334 304V110Z" class="mth-machine"/>'+text(544,114,m.name,'mth-title')+'<rect x="665" y="47" width="86" height="31" rx="5" class="mth-badge"/>'+text(708,69,m.type,'mth-small');
 if(params.length){params.forEach((p,i)=>{const x=params.length===1?461:355+i*197,c=x+83;art+='<rect x="'+x+'" y="142" width="166" height="73" rx="8" class="mth-param"/>'+text(c,165,p.name+' · '+p.type,'mth-small')+text(c,197,inMethod?p.value:'—','mth-param-value '+(f.phase==='bind'?'mth-bind-value':''));if(f.phase==='bind')art+='<g class="mth-argument" style="--param-x:'+c+'px;--arg-delay:'+i*.3+'s"><rect x="-32" y="-19" width="64" height="38" rx="6" class="mth-token"/>'+text(0,7,p.value,'mth-token-text')+'</g>';});}
 else art+=text(544,176,'PARAMETRE YOK','mth-small');
 art+=text(544,255,inMethod?(f.expression||'Metodun içindeyiz'):'Çağrı gelince çalışır','mth-expression')+text(544,291,inMethod?(f.phase==='return'?'SONUÇ GERİ GİDİYOR':f.phase==='print'?'METOT KONSOLA YAZIYOR':'PARAMETRELER BU ÇAĞRIYA AİT'):'METOT ŞU ANDA ÇALIŞMIYOR','mth-small')+'</g>';
 const returned=m.type!=='void'&&['return','receive','print'].includes(f.phase)&&f.result!==null;
 art+='<rect x="47" y="354" width="213" height="69" rx="9" class="mth-result"/>'+text(153,376,m.type==='void'?'VOID · SONUÇ DEĞERİ YOK':'ÇAĞIRANA DÖNEN DEĞER','mth-tiny')+text(153,407,m.type==='void'?'Değer dönmez':returned?f.result:'Bekleniyor','mth-result-value '+(f.phase==='return'?'mth-result-arrive':''));
 if(f.phase==='return'){
  art+='<path d="M544 330V354Q544 387 495 387H267" class="mth-return-route"/><g class="mth-return-token"><rect x="-58" y="-22" width="116" height="44" rx="8" class="mth-token"/>'+text(0,8,f.result,'mth-token-text')+'</g>';
 }else if(f.phase==='finish')art+='<path d="M544 330V354Q544 387 495 387H270" class="mth-control-route"/>'+text(391,407,'KONTROL GERİ DÖNER','mth-small');
 if(f.phase==='print')art+='<rect x="530" y="353" width="223" height="70" rx="8" class="mth-console-card"/>'+text(642,376,'KONSOLA EKLENEN SATIR','mth-tiny')+text(642,406,f.output.at(-1),'mth-console-value');
 else art+=text(646,372,f.callNumber?f.callNumber+'. ÇAĞRI':'ÇAĞRI BEKLENİYOR','mth-small')+text(646,407,f.output.length+' SATIR ÇIKTI','mth-small');
 const source=f.line?t.reference.split('\n')[f.line-1].trim():f.caption;
 return '<section class="mth-scene"><div class="mth-code"><span>'+(inMethod?'METODUN İÇİNDEKİ SATIR':'ÇAĞIRAN KODDAKİ SATIR')+'</span><code>'+esc(source)+'</code></div><svg class="mth-svg" viewBox="0 0 800 450" role="img" aria-label="'+esc(t.title+'. '+f.caption)+'">'+art+'</svg></section>';
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
 $('examplecode').querySelectorAll('li').forEach((li,i)=>li.classList.toggle('metcap-line-selected',chosen&&i+1===line));
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
 if(previous&&!root.classList.contains('metcap-reduced')&&!matchMedia('(prefers-reduced-motion: reduce)').matches){
  const outgoing=E('div');outgoing.className='metcap-scene-outgoing';outgoing.setAttribute('aria-hidden','true');outgoing.inert=true;
  outgoing.innerHTML=previous.replace(/id="([^"]+)"/g,'id="old-$1"').replace(/url\(#([^)]+)\)/g,'url(#old-$1)');
  outgoing.querySelectorAll('.metcap-scene-outgoing').forEach(el=>el.remove());
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
 if(f.line)explainLine(f.line);else{$('linehelp').hidden=true;}const codeBox=$('examplecode'),activeCode=codeBox.querySelector('li.active');if(activeCode)codeBox.scrollTo({top:Math.max(0,activeCode.offsetTop-codeBox.clientHeight/2),behavior:reduced?'instant':'smooth'});
 if(frame===t.frames.length-1)stop(false);
}
function load(i){
 stop();revision++;busy=false;state.current=i;save();frame=0;radarAngle=-110;const t=tasks[i];root.scrollTo({top:0,behavior:'instant'});
 const delays=[8000,6000,3800];[...$('speed').options].forEach((o,j)=>o.value=String(delays[j]));
 root.dataset.theme='blue';root.setAttribute('aria-label','Ünite 3 metot alıştırması · '+t.title+' · '+t.themeName+' tema');root.dataset.scene=t.id;root.classList.toggle('metcap-reduced',reduced);
 $('title').textContent=t.title;$('subtitle').textContent=t.kind;$('intro').textContent=t.intro;$('goal').textContent=t.goal;$('concept').textContent=t.concept;
 $('rules').replaceChildren(...t.rules.map(s=>E('li',s)));explainQuestion(t);
 $('inputs').textContent=!t.input.length?'Girdi yok.':t.input.map((s,i)=>(i+1)+'. '+(s===''?'(boş satır)':s)).join('\n');$('expected').textContent=t.output.join('\n');
 $('editor').value=state.drafts[i]??'// İstenen metodu yaz ve ana koddan çağır.\n';
 $('hint').hidden=t.independent;$('hinttext').hidden=true;$('hinttext').textContent=t.hint;
 $('reminder').hidden=true;$('example').hidden=t.independent;$('example').open=!t.independent;
 $('examplecode').replaceChildren(...(t.reference||'').split('\n').map((line,i)=>{const li=E('li');li.append(E('code',line||' '));li.tabIndex=0;li.setAttribute('role','button');li.setAttribute('aria-label','Satır '+(i+1)+' açıklaması: '+line.trim());li.onclick=()=>explainLine(i+1,true);li.onkeydown=e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();explainLine(i+1,true);}};return li;}));
 $('feedback').textContent='';$('feedback').className='metcap-feedback';$('tests').hidden=true;$('success').hidden=true;$('run').disabled=false;
 $('nav').replaceChildren(...tasks.map((task,n)=>{const b=E('button',(n+1)+'. '+task.title+(state.done.includes(n)?' ✓':''));b.type='button';b.style.setProperty('--task-color','#a9bff2');b.setAttribute('aria-current',i===n?'step':'false');b.onclick=()=>load(n);return b;}));
 $('progress').textContent=state.done.length+' / '+tasks.length+' soru';
 $('independent').hidden=!t.independent;renderFrame();completer?.setEnabled(!t.independent);
}
function finish(){
 if(state.done.length<tasks.length||qa)return;
 if(!g.kayit.extraCases)g.kayit.extraCases={};
 
 if(!g.kayit.extraCases['u3-method25']){g.kayit.extraCases['u3-method25']=true;g.kayit.xp+=600;g.sakla?.();}
 g.sakla?.();g.CSharpNoir?.sync();g.menuDoldur?.();
}
async function run(){
 if(busy)return;busy=true;const version=revision,index=state.current;
 $('run').disabled=true;$('feedback').textContent='Kodun derleniyor ve farklı girdilerle deneniyor…';$('tests').hidden=true;$('success').hidden=true;
 try{
  let r=await fetch('/api/check',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({question:105+index,code:$('editor').value}),signal:AbortSignal.timeout(20000)});
  if(!r.ok)throw Error('HTTP '+r.status);
  let result=await r.json();
  // An already-open 85-question server can keep serving earlier lessons until restart.
  if(result.stage==='Başlangıç'&&location.hostname==='127.0.0.1'&&location.port==='5184'){
   r=await fetch('http://127.0.0.1:5192/api/check',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({question:105+index,code:$('editor').value}),signal:AbortSignal.timeout(20000)});
   if(!r.ok)throw Error('HTTP '+r.status);result=await r.json();
  }
  if(version!==revision||!opened)return;
  $('feedback').className='metcap-feedback '+(result.ok?'good':'bad');
  $('feedback').textContent=result.message+(result.errors?'\n'+result.errors.map(e=>'Satır '+Math.max(1,e.line)+': '+e.message).join('\n'):'');
  if(result.rows){$('rows').replaceChildren(...result.rows.map(r=>{const tr=E('tr');for(const x of [r.input.map(v=>v===''?'(boş satır)':v).join('\n'),r.expected.join('\n'),r.actual.join('\n')||'(çıktı yok)',r.ok?'✓ Geçti':'Tekrar bak'])tr.append(E('td',x));return tr;}));$('tests').hidden=false;}
  if(result.ok){if(!state.done.includes(index))state.done.push(index);const completed=$('nav').children[index];if(completed)completed.textContent=(index+1)+'. '+tasks[index].title+' ✓';save();finish();$('progress').textContent=state.done.length+' / '+tasks.length+' soru';$('success').hidden=false;$('successmsg').textContent=state.done.length===tasks.length?'Büronun Araçları tamamlandı. On soruyu da çözdün!':'Bu soru tamamlandı. Kodun farklı girdilerde de doğru çalıştı.';$('next').textContent=state.done.length===tasks.length?'Ünite 3’e dön →':'Sonraki soru →';}
 }catch(e){if(version===revision&&opened){$('feedback').className='metcap-feedback bad';$('feedback').textContent='Kod kontrol servisine ulaşılamadı. Sunucunun açık olduğundan emin ol ve yeniden dene. Kodun burada duruyor.';}}
 finally{if(version===revision){busy=false;$('run').disabled=false;}}
}
function create(){
 root=E('section');root.id='u3-method-dialog';root.hidden=true;root.setAttribute('role','dialog');root.setAttribute('aria-modal','true');root.setAttribute('aria-label','Ünite 3 metot alıştırması · Büronun Araçları');
 root.innerHTML='<header class="metcap-top"><div><small>ÜNİTE 3 · KOLAY METOT GÖREVLERİ</small><strong>Vaka 25 · Büronun Araçları</strong></div><span id="metcap-progress"></span><button id="metcap-motion">Hareketi azalt</button><button id="metcap-close">← Ünite 3’e dön</button></header><main class="metcap-shell"><nav id="metcap-nav" aria-label="Metot alıştırması soruları"></nav><header class="metcap-heading"><span id="metcap-subtitle"></span><h1 id="metcap-title"></h1><p id="metcap-concept"></p></header><section class="metcap-understand"><h2>Önce soruyu anlayalım</h2><div id="metcap-understand"></div><details class="metcap-walk"><summary>Örneği birlikte okuyalım · hangi girişten sonra ne olur?</summary><ol id="metcap-walkthrough"></ol></details></section><section class="metcap-teaching"><div class="metcap-cinema"><div class="metcap-scene-label"><span>ÖRNEĞİ ADIM ADIM İZLE</span><span id="metcap-stepcount"></span></div><div id="metcap-scene" class="metcap-scene"></div><div id="metcap-variables" class="metcap-variables"></div><p id="metcap-running" class="metcap-running"></p><p id="metcap-caption" class="metcap-caption" aria-live="polite"></p><div class="metcap-controls"><button id="metcap-back">← Geri</button><button id="metcap-play">▶ Otomatik izle</button><button id="metcap-replay">↻ Baştan</button><label>Hız <select id="metcap-speed" aria-label="Animasyon hızı"><option value="3200">Yavaş</option><option value="1800" selected>Normal</option><option value="900">Hızlı</option></select></label><button id="metcap-forward" class="metcap-primary">Sonraki adım →</button></div></div><aside class="metcap-output"><h2>Örnek konsol</h2><pre id="metcap-console"></pre><p>Bu çıktı yukarıdaki örneğe ait. Kendi kodun aşağıda farklı girdilerle de kontrol edilecek.</p><details id="metcap-example"><summary>Örnek kod · satıra tıkla, açıklamasını gör</summary><section id="metcap-linehelp" class="metcap-linehelp" aria-live="polite"><h3 id="metcap-linetitle"></h3><p id="metcap-linemeaning"></p><p id="metcap-lineexample"></p></section><ol id="metcap-examplecode"></ol></details><p id="metcap-independent">BAĞIMSIZ GÖREV · Çözüm kodu ve ipucu yok. Sahne yalnızca programın ne yapacağını gösteriyor.</p></aside></section><section id="metcap-terms" class="metcap-terms" aria-label="Bu sorudaki komutlar"></section><section class="metcap-work"><article class="metcap-brief"><span class="metcap-eyebrow">GÖREVİN</span><p id="metcap-intro"></p><h2>Ne yazacaksın?</h2><p id="metcap-goal"></p><ul id="metcap-rules"></ul><div class="metcap-io"><div><h3>Örnek girdiler · sırayla</h3><pre id="metcap-inputs"></pre></div><div><h3>Beklenen çıktı</h3><pre id="metcap-expected"></pre></div></div><details id="metcap-reminder"><summary>Kısa hatırlatma · TryParse</summary><p>ReadLine metin verir. int.TryParse(metin, out int sayi) başarılıysa true olur ve sayi dolmuş olur. Başarısızsa false olur; bu girişle hesap yapma.</p><pre>string metin = Console.ReadLine();\nif (int.TryParse(metin, out int sayi))\n    Console.WriteLine(sayi);</pre><p>Çıkış işareti ile geçersiz girdiyi ayır. Bir döngünün sayacını yalnızca ilgili işlem gerçekten yapıldığında artır.</p></details></article><article class="metcap-code"><div class="metcap-editorbar"><strong>BuronunAraclari.cs</strong><span>C# · ROSLYN</span></div><label for="metcap-editor">C# kodunu buraya yaz</label><textarea id="metcap-editor" spellcheck="false" autocapitalize="off" autocomplete="off"></textarea><p class="metcap-editor-help">Bütün kodu sen yaz. Değişken adları ve uygun çözüm yolu serbest. Ctrl + Enter ile kontrol et.</p><div class="metcap-actions"><button id="metcap-run" class="metcap-primary">▶ Kodumu kontrol et</button><button id="metcap-hint">İpucu</button></div><p id="metcap-hinttext" class="metcap-hint" hidden></p><div id="metcap-feedback" class="metcap-feedback" role="status" aria-live="polite"></div><section id="metcap-tests" hidden><h3>Test sonuçları</h3><div class="metcap-table-wrap"><table><thead><tr><th>Girdi sırası</th><th>Beklenen</th><th>Senin çıktın</th><th>Durum</th></tr></thead><tbody id="metcap-rows"></tbody></table></div></section><section id="metcap-success" class="metcap-success" hidden><p id="metcap-successmsg"></p><button id="metcap-next" class="metcap-primary">Sonraki soru →</button></section></article></section></main>';
 document.body.append(root);
 const cinema=root.querySelector('.metcap-cinema');cinema.insertBefore(root.querySelector('.metcap-controls'),$('scene'));cinema.insertBefore($('running'),$('scene'));
 completer=g.Unit1CodeComplete?.mount($('editor'),()=>[],{scope:'u3'});
 $('editor').addEventListener('input',()=>{state.drafts[state.current]=$('editor').value;save();});
 $('editor').addEventListener('keydown',e=>{if(completer?.handleKeydown(e))return;if(e.key==='Tab'){e.preventDefault();$('editor').setRangeText('    ',$('editor').selectionStart,$('editor').selectionEnd,'end');$('editor').dispatchEvent(new Event('input'));}if((e.ctrlKey||e.metaKey)&&e.key==='Enter'){e.preventDefault();run();}});
 $('back').onclick=()=>{stop();frame=Math.max(0,frame-1);renderFrame();};
 $('forward').onclick=()=>{stop();frame=Math.min(tasks[state.current].frames.length-1,frame+1);renderFrame();};
 $('replay').onclick=()=>{stop();frame=0;radarAngle=-110;renderFrame();};
 $('play').onclick=()=>{if(timer){stop();return;}if(frame===tasks[state.current].frames.length-1){frame=0;radarAngle=-110;renderFrame();}root.getAnimations({subtree:true}).forEach(a=>a.play());root.classList.add('metcap-playing');$('play').textContent='Ⅱ Duraklat';timer=setInterval(()=>{frame=Math.min(tasks[state.current].frames.length-1,frame+1);renderFrame();},Number($('speed').value));};
 $('speed').onchange=()=>{if(timer){stop();$('play').click();}};
 $('run').onclick=run;$('hint').onclick=()=>{$('hinttext').hidden=!$('hinttext').hidden;};
 $('close').onclick=close;$('next').onclick=()=>{if(state.done.length===tasks.length){close();return;}let i=state.current+1;if(i>=tasks.length)i=tasks.findIndex((_,n)=>!state.done.includes(n));load(i);root.scrollTo({top:0,behavior:'instant'});};
 $('motion').onclick=()=>{reduced=!reduced;root.classList.toggle('metcap-reduced',reduced);$('motion').textContent=reduced?'Hareketi aç':'Hareketi azalt';};
 root.addEventListener('keydown',e=>{if(e.key==='Escape'){e.preventDefault();close();}if(e.key==='Tab'&&e.target!==$('editor')){const nodes=[...root.querySelectorAll('button:not(:disabled),textarea,select,summary,[tabindex="0"]')].filter(n=>n.getClientRects().length);if(e.shiftKey&&document.activeElement===nodes[0]){e.preventDefault();nodes.at(-1)?.focus();}else if(!e.shiftKey&&document.activeElement===nodes.at(-1)){e.preventDefault();nodes[0]?.focus();}}});
}
function open(){
 if(opened)return;g.CSharpNoir?.selectPractice(25);if(!root)create();previous=document.activeElement;opened=true;root.hidden=false;
 inerted=[...document.body.children].filter(n=>n!==root).map(n=>[n,n.inert]);inerted.forEach(([n])=>n.inert=true);document.body.classList.add('metcap-open');
 if(location.hash!=='#buronun-araclari')history.pushState(null,'','#buronun-araclari');load(state.current);$('close').focus({preventScroll:true});$('motion').textContent=reduced?'Hareketi aç':'Hareketi azalt';
}
function close(){if(!opened)return;stop();revision++;completer?.hide();opened=false;root.hidden=true;inerted.forEach(([n,v])=>n.inert=v);inerted=[];document.body.classList.remove('metcap-open');if(location.hash==='#buronun-araclari')history.replaceState(null,'',location.pathname+location.search);g.patika?.();previous?.focus?.({preventScroll:true});}
g.Unit3MethodCase={open,close};g.addEventListener('pagehide',stop);
if(location.hash==='#buronun-araclari')open();
})(window);




