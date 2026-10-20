(function(g){
'use strict';
const tasks=g.Unit3CapstoneTasks;if(!tasks)return;
const qa=new URLSearchParams(location.search).get('deneme')==='unite3-bitirme';
const store=g.NoirProgress||localStorage,key='cnoir-u3-final10-v1'+(qa?'-qa':'');
let state={current:0,done:[],drafts:{}};try{Object.assign(state,JSON.parse(store.getItem(key)||'{}'));}catch(_){}
state.current=Math.max(0,Math.min(tasks.length-1,Number(state.current)||0));state.done=Array.isArray(state.done)?[...new Set(state.done.filter(n=>Number.isInteger(n)&&n>=0&&n<tasks.length))]:[];state.drafts=state.drafts&&typeof state.drafts==='object'?state.drafts:{};
let radarAngle=-110;
let root,frame=0,timer=null,revision=0,opened=false,busy=false,previous,inerted=[],completer,reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const E=(tag,text,cls)=>{const e=document.createElement(tag);if(text!==undefined)e.textContent=text;if(cls)e.className=cls;return e;};
const $=id=>root.querySelector('#u3cap-'+id);
function save(){try{store.setItem(key,JSON.stringify(state));}catch(_){}}
function stop(freeze=true){if(timer)clearInterval(timer);timer=null;if(root){root.querySelectorAll('.u3cap-scene-outgoing').forEach(el=>el.remove());if(freeze)$('scene').getAnimations({subtree:true}).forEach(a=>a.pause());$('play').textContent='▶ Otomatik izle';root.classList.remove('u3cap-playing');}}




function graphic(t,f){
 const text=(x,y,v,c='fin-label')=>'<text x="'+x+'" y="'+y+'" class="'+c+'">'+esc(v)+'</text>',line=(x1,y1,x2,y2,c='fin-wire')=>'<path d="M'+x1+' '+y1+'L'+x2+' '+y2+'" class="'+c+'"/>',rect=(x,y,w,h,c='fin-metal',r=8)=>'<rect x="'+x+'" y="'+y+'" width="'+w+'" height="'+h+'" rx="'+r+'" class="'+c+'"/>',circle=(x,y,r,c='fin-metal')=>'<circle cx="'+x+'" cy="'+y+'" r="'+r+'" class="'+c+'"/>';
 const n=f.array.length,gap=128,start=(800-n*gap)/2,center=i=>start+i*gap+gap/2,ax=f.active<0?400:center(f.active);let art=text(400,35,t.scene.toLocaleUpperCase('tr-TR'),'fin-heading');
 if(t.id==='dispatch')art+=rect(40,155,720,64,'fin-belt',27)+line(60,187,740,187,'fin-belt-motion')+circle(75,187,22,'fin-gear')+circle(725,187,22,'fin-gear')+rect(280,265,240,126,'fin-paper')+text(400,296,'TESLİM LİSTESİ','fin-paper-small')+text(400,342,f.output.length+' delil','fin-paper-value')+text(400,370,'Her biri ayrı satır','fin-paper-small');
 if(t.id==='scale')art+=line(400,205,400,389)+line(265,390,535,390)+line(210,239,590,239,'fin-balance')+line(210,239,160,300)+line(210,239,260,300)+line(590,239,540,300)+line(590,239,640,300)+'<path d="M145 300Q210 372 275 300Z" class="fin-pan"/><path d="M525 300Q590 372 655 300Z" class="fin-pan"/>'+circle(400,240,18,'fin-gear')+text(400,430,f.metric,'fin-big');
 if(t.id==='level'){const mean=f.result===null?null:Number(f.result),base=305;art+=rect(80,175,640,176,'fin-glass')+line(90,base,710,base);f.array.forEach((v,i)=>{const h=Math.abs(v)*7;art+='<rect x="'+(center(i)-26)+'" y="'+(v>=0?base-h:base)+'" width="52" height="'+h+'" class="fin-fluid '+(f.active===i?'fin-glow':'')+'"/>'+text(center(i),v>=0?base-h-13:base+h+21,v,'fin-value');});if(mean!==null)art+='<path d="M85 '+(base-mean*7)+'H715" class="fin-level-line"/>';art+=text(400,425,f.metric,'fin-big');}
 if(t.id==='antenna'){art+='<path d="M365 392L400 205L435 392ZM382 302H418M374 346H426" class="fin-tower"/>'+circle(400,211,15,'fin-glow');for(let k=0;k<3;k++)art+='<path d="M'+(363-k*32)+' '+(181-k*22)+'Q'+(300-k*28)+' 247 '+(363-k*32)+' '+(306+k*22)+'M'+(437+k*32)+' '+(181-k*22)+'Q'+(500+k*28)+' 247 '+(437+k*32)+' '+(306+k*22)+'" class="fin-wave '+(f.phase==='inspect'?'fin-wave-live':'')+'"/>';art+=text(400,430,f.metric,'fin-big');}
 if(t.id==='gate'){art+=rect(185,190,430,206,'fin-gate')+rect(225,226,350,170,'fin-dark')+rect(284,180,232,45,'fin-screen')+text(400,209,'EŞİK: '+t.input.at(-1),'fin-label')+line(245,274,555,274,'fin-laser')+text(400,331,f.active<0?'Kontrol bekliyor':f.array[f.active]>=Number(t.input.at(-1))?'GEÇER ✓':'EŞİĞİN ALTINDA','fin-big')+text(400,435,f.metric,'fin-label');}
 if(t.id==='radar'){art+=circle(400,288,120,'fin-radar');for(let r=40;r<=120;r+=40)art+=circle(400,288,r,'fin-ring');art+=line(280,288,520,288)+line(400,168,400,408);f.array.forEach((v,i)=>{const angle=(-145+i*65)*Math.PI/180,x=400+90*Math.cos(angle),y=288+90*Math.sin(angle);art+=circle(x,y,f.active===i?15:9,f.active===i?'fin-dot-active':'fin-dot')+text(x,y-20,'['+i+'] '+v,'fin-tiny');});if(f.active>=0){const angle=(-145+f.active*65)*Math.PI/180;art+=line(400,288,400+117*Math.cos(angle),288+117*Math.sin(angle),'fin-sweep');}art+=text(400,444,f.result===null?'İlk eşleşmenin indeksini ara':'Dönen indeks: '+f.result,'fin-label');}
 if(t.id==='vault'){art+=rect(190,175,420,245,'fin-vault')+circle(400,292,96,'fin-door')+circle(400,292,34,'fin-gear');for(let k=0;k<4;k++){const a=k*Math.PI/2;art+=line(400+34*Math.cos(a),292+34*Math.sin(a),400+77*Math.cos(a),292+77*Math.sin(a),'fin-spoke');}art+=rect(240,198,320,33,'fin-screen')+text(400,221,f.result===null?f.metric:f.result==='True'?'BÜTÜN DEĞERLER UYGUN':'NEGATİF DEĞER VAR','fin-small')+text(400,446,f.result===null?'Kasaya girmeden diziyi kontrol et':f.result==='True'?'True · kasa açılabilir':'False · kontrol gerekiyor','fin-label');}
 if(t.id==='uv'){art+=rect(160,185,480,220,'fin-chamber');for(let i=0;i<5;i++)art+=rect(185+i*95,205,12,169,'fin-lamp');art+=rect(280,262,240,105,'fin-tag')+text(400,288,'GÜNCEL ETİKET','fin-small')+text(400,337,f.active<0?'—':f.array[f.active],'fin-huge '+(f.phase==='update'?'fin-value-write':''))+text(400,440,'Artış: '+t.input.at(-1)+' · '+f.metric,'fin-label');if(f.phase==='update')art+='<path d="M180 218H620V376H180Z" class="fin-uv-wash"/>';}
 if(t.id==='reel'){for(const x of [245,555]){art+=circle(x,280,91,'fin-reel '+(f.phase==='inspect'?'fin-reel-turn':''))+circle(x,280,18,'fin-gear');for(let k=0;k<5;k++){const a=k*Math.PI*2/5;art+=circle(x+56*Math.cos(a),280+56*Math.sin(a),15,'fin-reel-hole');}}art+='<path d="M245 189H555M245 371H555" class="fin-film"/>'+text(400,293,'←','fin-huge')+text(400,433,'SON İNDEKSTEN 0’A','fin-label');}
 if(t.id==='archive'){art+=rect(180,202,350,220,'fin-folder')+rect(200,173,180,42,'fin-folder')+rect(235,217,330,182,'fin-paper')+text(400,252,'ARŞİV RAPORU','fin-paper-small')+text(400,295,f.output[0]||'Toplam bekleniyor','fin-paper-value')+text(400,331,f.output[1]||'En yüksek bekleniyor','fin-paper-value')+circle(579,375,50,'fin-seal '+(f.output.length===2?'fin-stamp':'') )+text(579,382,f.output.length===2?'TAMAM':'KONTROL','fin-tiny');}
 // Aynı dizi her sahnede görünür; seçili eleman gerçek indeksiyle işaretlenir.
 f.array.forEach((v,i)=>{const x=center(i)-52;art+='<g class="fin-cell '+(i===f.active?'fin-cell-active':'')+'">'+rect(x,65,104,72,'fin-cell-box')+text(center(i),88,'['+i+']','fin-index')+text(center(i),120,v,'fin-value')+'</g>';});
 if(['call','bind'].includes(f.phase))art+='<path d="M400 138V185" class="fin-call-arrow"/>'+text(620,160,f.method+'(d)','fin-small');
 if(['read','inspect','update'].includes(f.phase)&&f.active>=0)art+='<path d="M'+ax+' 145V163" class="fin-selected-arrow"/>';
 if(t.id==='dispatch'&&f.phase==='print')art+='<g class="fin-delivery" style="--fin-x:'+ax+'px">'+rect(-40,-24,80,48,'fin-paper')+text(0,8,f.array[f.active],'fin-paper-value')+'</g>';
 if(t.id==='scale'&&f.phase==='inspect')art+='<g class="fin-weight" style="--fin-x:'+ax+'px">'+circle(0,0,27,'fin-token')+text(0,8,f.array[f.active],'fin-token-value')+'</g>';
 if(f.phase==='return')art+='<path d="M400 147V173H675V395H713" class="fin-return-path"/>'+rect(666,395,100,48,'fin-return-box')+text(716,425,f.result,'fin-return-value');
 const source=f.line?t.reference.split('\n')[f.line-1].trim():f.caption;
 return '<section class="fin-stage"><div class="fin-local-code"><span>'+esc(f.method)+' · '+(f.phase==='return'?'SONUÇ GERİ DÖNÜYOR':f.phase==='print'?'KONSOLA YAZILIYOR':t.scene.toLocaleUpperCase('tr-TR'))+'</span><code>'+esc(source)+'</code></div><svg class="fin-svg" viewBox="0 0 800 470" role="img" aria-label="'+esc(t.title+'. '+f.caption)+'">'+art+'</svg></section>';
}

function explainLine(line,chosen=false){
 const t=tasks[state.current],box=$('linehelp');box.hidden=!t.reference;
 if(!t.reference)return;
 const source=t.reference.split('\n')[line-1]?.trim()||'';
 const fallback=source==='{'?'Bu süslü parantez, birlikte çalışacak satırların başladığı yeri gösterir.':source==='}'?'Bu süslü parantez, o bölümdeki satırların bittiği yeri gösterir.':'Bu satırı anlamak için önce yukarıdaki koşula ve örnekteki değerlere bak.';
 $('linetitle').textContent=(chosen?'Seçtiğin':'Şimdi çalışan')+' satır '+line+' · Ne yapıyor?';
 let meaning=t.lineHelp?.[line]||fallback;
 $('linemeaning').textContent=meaning;
 $('lineexample').textContent=chosen?'Animasyondaki adıma dönmek için Sonraki adım veya Geri düğmesini kullan.':t.frames[frame].caption;
 $('examplecode').querySelectorAll('li').forEach((li,i)=>li.classList.toggle('u3cap-line-selected',chosen&&i+1===line));
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
 if(previous&&!root.classList.contains('u3cap-reduced')&&!matchMedia('(prefers-reduced-motion: reduce)').matches){
  const outgoing=E('div');outgoing.className='u3cap-scene-outgoing';outgoing.setAttribute('aria-hidden','true');outgoing.inert=true;
  outgoing.innerHTML=previous.replace(/id="([^"]+)"/g,'id="old-$1"').replace(/url\(#([^)]+)\)/g,'url(#old-$1)');
  outgoing.querySelectorAll('.u3cap-scene-outgoing').forEach(el=>el.remove());
  scene.append(outgoing);outgoing.addEventListener('animationend',event=>{if(event.target===outgoing)outgoing.remove();});
 }
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
 root.dataset.theme=t.theme;root.setAttribute('aria-label','Ünite 3 bitirme projesi · '+t.title+' · '+t.themeName+' tema');root.dataset.scene=t.id;root.classList.toggle('u3cap-reduced',reduced);
 $('title').textContent=t.title;$('subtitle').textContent=t.kind;$('intro').textContent=t.intro;$('goal').textContent=t.goal;$('concept').textContent=t.concept;
 $('rules').replaceChildren(...t.rules.map(s=>E('li',s)));explainQuestion(t);
 $('inputs').textContent=!t.input.length?'Girdi yok.':t.input.map((s,i)=>(i+1)+'. '+(s===''?'(boş satır)':s)).join('\n');$('expected').textContent=t.output.join('\n');
 $('editor').value=state.drafts[i]??'// İstenen metodu yaz ve ana koddan çağır.\n';
 $('hint').hidden=t.independent;$('hinttext').hidden=true;$('hinttext').textContent=t.hint;
 $('reminder').hidden=true;$('example').hidden=t.independent;$('example').open=!t.independent;
 $('examplecode').replaceChildren(...(t.reference||'').split('\n').map((line,i)=>{const li=E('li');li.append(E('code',line||' '));li.tabIndex=0;li.setAttribute('role','button');li.setAttribute('aria-label','Satır '+(i+1)+' açıklaması: '+line.trim());li.onclick=()=>explainLine(i+1,true);li.onkeydown=e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();explainLine(i+1,true);}};return li;}));
 $('feedback').textContent='';$('feedback').className='u3cap-feedback';$('tests').hidden=true;$('success').hidden=true;$('run').disabled=false;
 $('nav').replaceChildren(...tasks.map((task,n)=>{const b=E('button',(n+1)+'. '+task.title+(state.done.includes(n)?' ✓':''));b.type='button';b.style.setProperty('--task-color',task.color);b.setAttribute('aria-current',i===n?'step':'false');b.onclick=()=>load(n);return b;}));
 $('progress').textContent=state.done.length+' / '+tasks.length+' soru';
 $('independent').hidden=!t.independent;renderFrame();completer?.setEnabled(!t.independent);
}
function finish(){
 if(state.done.length<tasks.length||qa)return;
 if(!g.kayit.extraCases)g.kayit.extraCases={};
 
 if(!g.kayit.extraCases['u3-final10']){g.kayit.extraCases['u3-final10']=true;g.kayit.xp+=1000;g.sakla?.();}
 if(!g.kayit.biten.includes(17))g.kayit.biten.push(17);g.sakla?.();g.CSharpNoir?.sync();g.menuDoldur?.();
}
async function run(){
 if(busy)return;busy=true;const version=revision,index=state.current;
 $('run').disabled=true;$('feedback').textContent='Kodun derleniyor ve farklı girdilerle deneniyor…';$('tests').hidden=true;$('success').hidden=true;
 try{
  let r=await fetch('/api/check',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({question:115+index,code:$('editor').value}),signal:AbortSignal.timeout(20000)});
  if(!r.ok)throw Error('HTTP '+r.status);
  let result=await r.json();
  // An already-open 85-question server can keep serving earlier lessons until restart.
  if(result.stage==='Başlangıç'&&location.hostname==='127.0.0.1'&&location.port==='5184'){
   r=await fetch('http://127.0.0.1:5193/api/check',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({question:115+index,code:$('editor').value}),signal:AbortSignal.timeout(20000)});
   if(!r.ok)throw Error('HTTP '+r.status);result=await r.json();
  }
  if(version!==revision||!opened)return;
  $('feedback').className='u3cap-feedback '+(result.ok?'good':'bad');
  $('feedback').textContent=result.message+(result.errors?'\n'+result.errors.map(e=>'Satır '+Math.max(1,e.line)+': '+e.message).join('\n'):'');
  if(result.rows){$('rows').replaceChildren(...result.rows.map(r=>{const tr=E('tr');for(const x of [r.input.map(v=>v===''?'(boş satır)':v).join('\n'),r.expected.join('\n'),r.actual.join('\n')||'(çıktı yok)',r.ok?'✓ Geçti':'Tekrar bak'])tr.append(E('td',x));return tr;}));$('tests').hidden=false;}
  if(result.ok){if(!state.done.includes(index))state.done.push(index);const completed=$('nav').children[index];if(completed)completed.textContent=(index+1)+'. '+tasks[index].title+' ✓';save();finish();$('progress').textContent=state.done.length+' / '+tasks.length+' soru';$('success').hidden=false;$('successmsg').textContent=state.done.length===tasks.length?'Arşiv Finali tamamlandı. On soruyu da çözdün!':'Bu soru tamamlandı. Kodun farklı girdilerde de doğru çalıştı.';$('next').textContent=state.done.length===tasks.length?'Ünite 3’e dön →':'Sonraki soru →';}
 }catch(e){if(version===revision&&opened){$('feedback').className='u3cap-feedback bad';$('feedback').textContent='Kod kontrol servisine ulaşılamadı. Sunucunun açık olduğundan emin ol ve yeniden dene. Kodun burada duruyor.';}}
 finally{if(version===revision){busy=false;$('run').disabled=false;}}
}
function create(){
 root=E('section');root.id='u3-final-dialog';root.hidden=true;root.setAttribute('role','dialog');root.setAttribute('aria-modal','true');root.setAttribute('aria-label','Ünite 3 bitirme projesi · Arşiv Finali');
 root.innerHTML='<header class="u3cap-top"><div><small>ÜNİTE 3 · BİTİRME PROJESİ · 10 AŞAMA</small><strong>Vaka 27 · Arşiv Finali</strong></div><span id="u3cap-progress"></span><button id="u3cap-legacy">Önceki Arşiv Finali soruları</button><button id="u3cap-motion">Hareketi azalt</button><button id="u3cap-close">← Ünite 3’e dön</button></header><main class="u3cap-shell"><nav id="u3cap-nav" aria-label="Arşiv Finali aşamaları"></nav><header class="u3cap-heading"><span id="u3cap-subtitle"></span><h1 id="u3cap-title"></h1><p id="u3cap-concept"></p></header><section class="u3cap-understand"><h2>Önce soruyu anlayalım</h2><div id="u3cap-understand"></div><details class="u3cap-walk"><summary>Örneği birlikte okuyalım · hangi girişten sonra ne olur?</summary><ol id="u3cap-walkthrough"></ol></details></section><section class="u3cap-teaching"><div class="u3cap-cinema"><div class="u3cap-scene-label"><span>ÖRNEĞİ ADIM ADIM İZLE</span><span id="u3cap-stepcount"></span></div><div id="u3cap-scene" class="u3cap-scene"></div><div id="u3cap-variables" class="u3cap-variables"></div><p id="u3cap-running" class="u3cap-running"></p><p id="u3cap-caption" class="u3cap-caption" aria-live="polite"></p><div class="u3cap-controls"><button id="u3cap-back">← Geri</button><button id="u3cap-play">▶ Otomatik izle</button><button id="u3cap-replay">↻ Baştan</button><label>Hız <select id="u3cap-speed" aria-label="Animasyon hızı"><option value="3200">Yavaş</option><option value="1800" selected>Normal</option><option value="900">Hızlı</option></select></label><button id="u3cap-forward" class="u3cap-primary">Sonraki adım →</button></div></div><aside class="u3cap-output"><h2>Örnek konsol</h2><pre id="u3cap-console"></pre><p>Bu çıktı yukarıdaki örneğe ait. Kendi kodun aşağıda farklı girdilerle de kontrol edilecek.</p><details id="u3cap-example"><summary>Örnek kod · satıra tıkla, açıklamasını gör</summary><section id="u3cap-linehelp" class="u3cap-linehelp" aria-live="polite"><h3 id="u3cap-linetitle"></h3><p id="u3cap-linemeaning"></p><p id="u3cap-lineexample"></p></section><ol id="u3cap-examplecode"></ol></details><p id="u3cap-independent">BAĞIMSIZ GÖREV · Çözüm kodu ve ipucu yok. Sahne yalnızca programın ne yapacağını gösteriyor.</p></aside></section><section id="u3cap-terms" class="u3cap-terms" aria-label="Bu sorudaki komutlar"></section><section class="u3cap-work"><article class="u3cap-brief"><span class="u3cap-eyebrow">GÖREVİN</span><p id="u3cap-intro"></p><h2>Ne yazacaksın?</h2><p id="u3cap-goal"></p><ul id="u3cap-rules"></ul><div class="u3cap-io"><div><h3>Örnek girdiler · sırayla</h3><pre id="u3cap-inputs"></pre></div><div><h3>Beklenen çıktı</h3><pre id="u3cap-expected"></pre></div></div><details id="u3cap-reminder"><summary>Kısa hatırlatma · TryParse</summary><p>ReadLine metin verir. int.TryParse(metin, out int sayi) başarılıysa true olur ve sayi dolmuş olur. Başarısızsa false olur; bu girişle hesap yapma.</p><pre>string metin = Console.ReadLine();\nif (int.TryParse(metin, out int sayi))\n    Console.WriteLine(sayi);</pre><p>Çıkış işareti ile geçersiz girdiyi ayır. Bir döngünün sayacını yalnızca ilgili işlem gerçekten yapıldığında artır.</p></details></article><article class="u3cap-code"><div class="u3cap-editorbar"><strong>ArsivFinali.cs</strong><span>C# · ROSLYN</span></div><label for="u3cap-editor">C# kodunu buraya yaz</label><textarea id="u3cap-editor" spellcheck="false" autocapitalize="off" autocomplete="off"></textarea><p class="u3cap-editor-help">Bütün kodu sen yaz. Değişken adları ve uygun çözüm yolu serbest. Ctrl + Enter ile kontrol et.</p><div class="u3cap-actions"><button id="u3cap-run" class="u3cap-primary">▶ Kodumu kontrol et</button><button id="u3cap-hint">İpucu</button></div><p id="u3cap-hinttext" class="u3cap-hint" hidden></p><div id="u3cap-feedback" class="u3cap-feedback" role="status" aria-live="polite"></div><section id="u3cap-tests" hidden><h3>Test sonuçları</h3><div class="u3cap-table-wrap"><table><thead><tr><th>Girdi sırası</th><th>Beklenen</th><th>Senin çıktın</th><th>Durum</th></tr></thead><tbody id="u3cap-rows"></tbody></table></div></section><section id="u3cap-success" class="u3cap-success" hidden><p id="u3cap-successmsg"></p><button id="u3cap-next" class="u3cap-primary">Sonraki soru →</button></section></article></section></main>';
 document.body.append(root);
 const cinema=root.querySelector('.u3cap-cinema');cinema.insertBefore(root.querySelector('.u3cap-controls'),$('scene'));cinema.insertBefore($('running'),$('scene'));
 completer=g.Unit1CodeComplete?.mount($('editor'),()=>g.Unit1CodeComplete.variablesFromCode(tasks[state.current].reference),{scope:'u3'});
 $('editor').addEventListener('input',()=>{state.drafts[state.current]=$('editor').value;save();});
 $('editor').addEventListener('keydown',e=>{if(completer?.handleKeydown(e))return;if(e.key==='Tab'){e.preventDefault();$('editor').setRangeText('    ',$('editor').selectionStart,$('editor').selectionEnd,'end');$('editor').dispatchEvent(new Event('input'));}if((e.ctrlKey||e.metaKey)&&e.key==='Enter'){e.preventDefault();run();}});
 $('back').onclick=()=>{stop();frame=Math.max(0,frame-1);renderFrame();};
 $('forward').onclick=()=>{stop();frame=Math.min(tasks[state.current].frames.length-1,frame+1);renderFrame();};
 $('replay').onclick=()=>{stop();frame=0;radarAngle=-110;renderFrame();};
 $('play').onclick=()=>{if(timer){stop();return;}if(frame===tasks[state.current].frames.length-1){frame=0;radarAngle=-110;renderFrame();}root.getAnimations({subtree:true}).forEach(a=>a.play());root.classList.add('u3cap-playing');$('play').textContent='Ⅱ Duraklat';timer=setInterval(()=>{frame=Math.min(tasks[state.current].frames.length-1,frame+1);renderFrame();},Number($('speed').value));};
 $('speed').onchange=()=>{if(timer){stop();$('play').click();}};
 $('run').onclick=run;$('hint').onclick=()=>{$('hinttext').hidden=!$('hinttext').hidden;};
 $('close').onclick=close;$('legacy').onclick=()=>{close();g.dersAc?.(17);};$('next').onclick=()=>{if(state.done.length===tasks.length){close();return;}let i=state.current+1;if(i>=tasks.length)i=tasks.findIndex((_,n)=>!state.done.includes(n));load(i);root.scrollTo({top:0,behavior:'instant'});};
 $('motion').onclick=()=>{reduced=!reduced;root.classList.toggle('u3cap-reduced',reduced);$('motion').textContent=reduced?'Hareketi aç':'Hareketi azalt';};
 root.addEventListener('keydown',e=>{if(e.key==='Escape'){e.preventDefault();close();}if(e.key==='Tab'&&e.target!==$('editor')){const nodes=[...root.querySelectorAll('button:not(:disabled),textarea,select,summary,[tabindex="0"]')].filter(n=>n.getClientRects().length);if(e.shiftKey&&document.activeElement===nodes[0]){e.preventDefault();nodes.at(-1)?.focus();}else if(!e.shiftKey&&document.activeElement===nodes.at(-1)){e.preventDefault();nodes[0]?.focus();}}});
}
function open(){
 if(opened)return;g.CSharpNoir?.selectPractice(27);if(!root)create();previous=document.activeElement;opened=true;root.hidden=false;
 inerted=[...document.body.children].filter(n=>n!==root).map(n=>[n,n.inert]);inerted.forEach(([n])=>n.inert=true);document.body.classList.add('u3cap-open');
 if(location.hash!=='#unite3-bitirme')history.pushState(null,'','#unite3-bitirme');load(state.current);$('close').focus({preventScroll:true});$('motion').textContent=reduced?'Hareketi aç':'Hareketi azalt';
}
function close(){if(!opened)return;stop();revision++;completer?.hide();opened=false;root.hidden=true;inerted.forEach(([n,v])=>n.inert=v);inerted=[];document.body.classList.remove('u3cap-open');if(location.hash==='#unite3-bitirme')history.replaceState(null,'',location.pathname+location.search);g.patika?.();previous?.focus?.({preventScroll:true});}
g.Unit3Capstone={open,close};g.addEventListener('pagehide',stop);
if(location.hash==='#unite3-bitirme')open();
})(window);




