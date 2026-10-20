(function(g){
'use strict';
const lessons=g.CCaseLessons;
const stories=[
 ['Rıhtıma yeni delil','Yeni kutu zincirin önüne yanaşıyor. Eski başı kaybetmeden yeni başı teslim et.','#efc477'],
 ['Son iskeleye teslimat','Kurye son kutuya kadar ilerliyor; yeni delilin devamı NULL olmalı.','#7bcac3'],
 ['Gece devriyesinin raporu','Fener her kutuyu sırayla aydınlatıyor. Son kutunun sayısını da rapora yaz.','#96c1ef'],
 ['İlk dosyayı arşivden çıkar','Baş işareti ikinci kutuya geçiyor. Eski dosyanın belleğini bırak.','#eea99a'],
 ['Kapanış kaydı','Sondan önceki kutuyu bul; son bağlantıyı NULL ile kapat.','#d4a4ec'],
 ['Aranan delil numarası','Gezici ilk eşleşmede duruyor. Aynı numaralı sonraki kayıtlar kalsın.','#95ce9c'],
 ['Beşinci raftaki yanlış kayıt','Rafı 1’den say. Dördüncü kutunun oku altıncıya uzanmalı.','#e7b77d'],
 ['İki soruşturma birleşiyor','İki ayrı zincir aynı dosyaya dönüşüyor. Sıra korunacak; yeni kutu gerekmiyor.','#9faeee'],
 ['Çembere yeni başlangıç','Yeni baş gelirken son kutunun dönüş oku da yer değiştiriyor.','#e7a4c1'],
 ['Gece halkasına son kayıt','Yeni kutuyu son ile başın arasına yerleştir. Baş aynı kalsın.','#8dcbb3'],
 ['Halkanın ilk izi siliniyor','Eski baş ayrılırken son kutunun oku yeni başa dönmeli.','#d4bd83'],
 ['Halkada bir tur arama','Hedefi ara; bulamazsan başa döndüğünde dur.','#8ac3d8'],
 ['Dördüncü raftaki sahte iz','Kutunun üstündeki sayı 4 olsa da olmasa da yalnızca dördüncü sırayı çıkar.','#d4a7de'],
 ['İkiz kayıt soruşturması','Aynı numaralar farklı adreslerde. İlkini çıkar, kalanları koru.','#edae86'],
 ['Boş arşivlerin birleşmesi','Arşivlerden biri boş olabilir. İki başı da kontrol ederek zincirleri bağla.','#a5bde8'],
 ['Halkadaki ikiz izler','Baş silindiğinde diğer eşleşme kalır; çember yeni başta kapanır.','#c7c985'],
 ['Çift yönlü geçitte arama','İleri oku değiştir, geri oku da düzelt. Komşular birbirini bulsun.','#ae9fe5'],
 ['Çift yönlü yeni giriş','Yeni başın prev oku NULL; eski başın prev oku yeni düğüm olacak.','#e9bd85'],
 ['Çift yönlü son çıkış','Son kutu ayrılınca önceki kutunun next oku NULL ile bitsin.','#94c8bd'],
 ['Altıncı delilin iki komşusu','Beş next hareketiyle altıncı kutuya gel. Beş ile yediyi iki yönde bağla.','#e5a0aa']
];
const store=g.NoirProgress||g.localStorage,key='cnoir-code-lab-v1';let saved={drafts:{},passed:{},current:0};
try{const old=JSON.parse(store.getItem(key)||'null');if(old&&typeof old==='object')saved={...saved,...old,drafts:old.drafts||{},passed:old.passed||{}};}catch(_){}
// Keep functions previously written in the optional editor available in the new lab.
for(const oldKey of ['cnoir-writing','cnoir-practice'])try{const old=JSON.parse(store.getItem(oldKey)||'{}');for(const [id,source] of Object.entries(old.drafts||{}))if(typeof source==='string'&&saved.drafts[id]===undefined)saved.drafts[id]=source;}catch(_){}
let main,completer,revision=0,openState=false,onComplete,nextLabel,providedLesson;
function E(tag,text,cls){const e=document.createElement(tag);if(text!==undefined)e.textContent=text;if(cls)e.className=cls;return e;}
function B(text,fn,cls=''){const b=E('button',text,'cw-btn '+cls);b.type='button';b.addEventListener('click',fn);return b;}
function persist(){try{store.setItem(key,JSON.stringify(saved));}catch(_){}}
function download(t,source){const url=URL.createObjectURL(new Blob([g.CWriting.makeProgram(t,source)],{type:'text/x-c;charset=utf-8'}));const a=E('a');a.href=url;a.download=t.id+'-test.c';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);}
function load(i){
 if(!providedLesson&&(!Number.isInteger(i)||i<0||i>=lessons.length))return;
 revision++;completer?.close();g.CVisual.stopAll();g.CQuestionVideo?.stopAll();saved.current=i;persist();main.replaceChildren();main.scrollTop=0;
 const c=providedLesson||lessons[i],t=c.task,story=t.story||stories[i],input=c.variant,header=E('header',undefined,'clab-heading');main.style.setProperty('--lab-accent',story[2]);
 header.append(E('small',c.kicker||'VAKA '+(i+1)+' · VAKA SONU KOD SORUSU'),E('h2',story[0]),E('p',story[1]));
 const brief=E('section',undefined,'clab-brief');brief.append(E('h2',t.title),E('p',t.prompt),E('pre',t.signature));
 const rules=E('ul');t.rubric.forEach(rule=>rules.append(E('li',rule)));brief.append(rules);
 const film=E('section',undefined,'clab-film');film.append(E('h2','Bu sorunun animasyonu'),E('p','Düğümlerin adreslerini ve değişen okları izle. Geri/ileri sarabilir, hızı değiştirebilirsin.'));
 // Every case uses its own input, algorithm frames, scene, caption and color.
 film.dataset.scene=t.id;
 if(t.final){film.append(g.CFinal.themeArt(t));const sample=g.CLabEngine.check(t,t.code).rows.find(r=>JSON.stringify(r.input)===JSON.stringify(input));if(sample){const frames=sample.trace.map((f,j)=>({...f,title:t.theme+' · '+(j===0?'Başlangıç':j===sample.trace.length-1?'Sonuç':'Adım '+j),caption:j===0?t.prompt:c.annotation[f.line-1]?.why||f.caption}));g.CVisual.mount(film,t,input,{autoplay:false,frames});}}
 else g.CVisual.mount(film,t,input,{autoplay:false});
 const columns=E('section',undefined,'clab-columns'),help=E('aside',undefined,'clab-help'),work=E('section',undefined,'clab-work');
 help.append(E('h2','Nokta yanında'),E('p','Yalnızca yukarıdaki fonksiyonu yaz. Düğüm yapısı ve test listeleri hazır. Yerel değişken adlarını kendin seçebilirsin.'));
 const structure=E('details');structure.append(E('summary','Düğüm yapısını göster'),E('pre',t.structure||g.CWriting.structure));help.append(structure);
 const plan=E('details'),ol=E('ol');plan.append(E('summary','Çözümü adım adım planla'));t.plan.forEach(([title,text])=>{const li=E('li');li.append(E('b',title),E('p',text));ol.append(li);});plan.append(ol);help.append(plan);
 const terms=E('details');terms.append(E('summary','Bu sorudaki C komutları'));c.vocabulary.forEach(([term,text])=>terms.append(E('b',term),E('p',text)));help.append(terms);
 const support=E('details');support.append(E('summary','Kod kontrolü nasıl çalışır?'),E('p','Tarayıcıdaki C alıştırma yorumlayıcısı fonksiyonunu farklı girdilerle çalıştırır. if/else, while, for, do/while, break/continue, int, düğüm işaretçileri, ->, malloc, sizeof, free ve printf desteklenir. Yardımcı fonksiyonlar, diziler, özyineleme ve C dilinin tüm özellikleri desteklenmez. Böyle bir çözüm için testli C dosyasını indirip derleyebilirsin.'));help.append(support);
 work.append(E('div','SENİN ÇÖZÜMÜN · '+(t.fileName||t.id+'.c'),'clab-editor-title'));
 const label=E('label','C fonksiyonunu buraya yaz'),editor=E('textarea');editor.id='clab-editor';label.htmlFor=editor.id;editor.spellcheck=false;editor.autocomplete='off';editor.setAttribute('autocapitalize','off');editor.setAttribute('aria-describedby','clab-editor-help');editor.value=saved.drafts[t.id]??t.signature+' {\n    // Çözümünü buraya yaz.\n\n}';if(t.legacyFunction)editor.value=editor.value.replaceAll(t.legacyFunction,t.signature.match(/\*(\w+)\(/)[1]);work.append(label,editor);completer=g.CLabComplete.mount(editor,t);
 const tip=E('p','Ctrl + Enter: kontrol et · Tab: girinti / öneriyi tamamla · head-> yazınca alan önerileri açılır.','clab-muted');tip.id='clab-editor-help';work.append(tip);
 const actions=E('div',undefined,'clab-actions'),hint=E('p',undefined,'clab-hint'),feedback=E('div',undefined,'clab-feedback'),diagnostic=E('section',undefined,'clab-diagnostic'),results=E('section',undefined,'clab-results'),replay=E('section',undefined,'clab-replay'),success=E('section',undefined,'clab-success');hint.hidden=true;feedback.setAttribute('role','status');feedback.setAttribute('aria-live','polite');let hintIndex=0;
 const next=B(nextLabel||'SONRAKİ VAKA →',()=>onComplete?.(),'gold');success.hidden=true;success.append(E('b',t.final?'✓ Final sorusu tamamlandı.':'✓ Vaka sonu kod sorusu tamamlandı.'),E('p','Farklı girdilerde sonuç, bağlantılar ve bellek kontrolleri geçti.'));if(onComplete)success.append(next);
 const run=B('▶ Kodumu kontrol et',()=>check(),'gold');
 actions.append(run,B('İpucu al',()=>{hint.hidden=false;hint.textContent=(hintIndex+1)+'. ipucu: '+t.hints[Math.min(hintIndex,t.hints.length-1)];hintIndex=Math.min(hintIndex+1,t.hints.length-1);},'secondary'),B('Testli C dosyasını indir',()=>download(t,editor.value),'secondary'));
 work.append(actions,hint,feedback,diagnostic,results,replay,success);columns.append(help,work);main.append(header,brief,film,columns);
 const solution=E('details',undefined,'clab-solution');solution.append(E('summary','Örnek çözümü ve satır açıklamalarını incele'));c.annotation.forEach((a,j)=>{const line=E('div');line.append(E('code',(j+1)+'. '+a.line),E('p',a.why));solution.append(line);});main.append(solution);
 editor.addEventListener('input',()=>{revision++;saved.drafts[t.id]=editor.value;persist();feedback.textContent='Kod değişti. Güncel çözümü kontrol et.';feedback.className='clab-feedback';diagnostic.replaceChildren();results.replaceChildren();replay.replaceChildren();success.hidden=true;if(t.final)g.dispatchEvent(new CustomEvent('clab:changed'));});
 editor.addEventListener('keydown',e=>{if(e.ctrlKey&&e.key==='Enter'){e.preventDefault();completer.close();check();}});
 function showReplay(row){g.CVisual.stopAll();replay.replaceChildren();replay.append(E('h3','Senin kodunun adımları'),E('p',row.message));if(row.trace.length)g.CVisual.mount(replay,{...t,code:editor.value},row.input,{frames:row.trace,autoplay:false});replay.scrollIntoView({block:'nearest',behavior:'smooth'});}
 async function check(){
  if(run.disabled)return;completer.close();const version=revision,source=editor.value;run.disabled=true;feedback.textContent='Kodun farklı listelerde çalıştırılıyor…';diagnostic.replaceChildren();results.replaceChildren();replay.replaceChildren();success.hidden=true;
  await new Promise(resolve=>setTimeout(resolve,20));
  if(version!==revision||!openState){run.disabled=false;return;}
  let result;try{result=g.CLabEngine.check(t,source);}catch(error){result={ok:false,message:'Kod kontrolü tamamlanamadı: '+error.message,rows:[]};}finally{run.disabled=false;}
  feedback.className='clab-feedback '+(result.ok?'is-good':'is-bad');feedback.textContent=(result.line?'Satır '+result.line+': ':'')+result.message;
  if(result.diagnostic){const d=result.diagnostic;diagnostic.append(E('small',d.testIndex===undefined?'KOD KONTROLÜ':'TEST '+(d.testIndex+1)),E('h3',d.title),E('p',d.scenario,'clab-diagnostic-context'),E('p',d.problem));if(d.codeLine)diagnostic.append(E('pre',(d.line?'Satır '+d.line+'  ':'')+d.codeLine));diagnostic.append(E('h4','Nasıl ilerleyebilirsin?'),E('p',d.suggestion));const options=E('div',undefined,'clab-actions');if(d.line)options.append(B('Hatalı satıra git',()=>{const start=editor.value.split('\n').slice(0,d.line-1).join('\n').length+(d.line>1?1:0),end=editor.value.indexOf('\n',start);editor.focus();editor.setSelectionRange(start,end<0?editor.value.length:end);},'secondary'));const row=result.rows[d.testIndex];if(row?.trace.length)options.append(B('Bu testi adım adım izle',()=>showReplay(row),'secondary'));diagnostic.append(options);}
  if(result.rows.length){
   const passedCount=result.rows.filter(r=>r.ok).length;results.append(E('h3',passedCount+' / '+result.rows.length+' test geçti'));
   const scroll=E('div',undefined,'clab-table-wrap'),table=E('table'),thead=E('thead'),heading=E('tr');['Girdi','Beklenen','Senin sonucun','Kontrol'].forEach(x=>heading.append(E('th',x)));thead.append(heading);table.append(thead);const tbody=E('tbody');
   result.rows.forEach((row,n)=>{const tr=E('tr');tr.append(E('td',g.CWriting.listText(row.input.a,!!t.circular,!!t.doubly)+(row.input.b?' | '+g.CWriting.listText(row.input.b):'')+(row.input.value===undefined?'':' · değer '+row.input.value)+(row.input.mallocFail?' · malloc: NULL':row.input.mallocFailAt?' · '+row.input.mallocFailAt+'. malloc: NULL':'')),E('td',row.expected.join(' → ')||'Boş'),E('td',row.stopped?'Çalışma durdu':row.actual.join(' → ')||'Boş'));const cell=E('td');cell.append(E('span',row.ok?'✓ Geçti':row.message,row.ok?'clab-good':'clab-bad'),B((n+1)+'. testi izle',()=>showReplay(row),'secondary'));tr.append(cell);tbody.append(tr);});table.append(tbody);scroll.append(table);results.append(scroll);
  }
  if(result.ok){saved.drafts[t.id]=source;saved.passed[t.id]=source;persist();success.hidden=false;g.dispatchEvent(new CustomEvent('clab:passed',{detail:{index:i,id:t.id}}));}
  else if(result.line){const start=source.split('\n').slice(0,result.line-1).join('\n').length+(result.line>1?1:0);editor.focus();editor.setSelectionRange(start,source.indexOf('\n',start)<0?source.length:source.indexOf('\n',start));}
 }
}

function dispose(){revision++;completer?.close();g.CVisual.stopAll();openState=false;onComplete=null;providedLesson=null;main?.remove();main=null;}
function mount(parent,i,options={}){dispose();main=E('section',undefined,'clab-content clab-main clab-inline');main.setAttribute('aria-label','Vaka sonu animasyonlu C kod sorusu');parent.append(main);openState=true;onComplete=options.onComplete;nextLabel=options.nextLabel;providedLesson=options.lesson;load(i);if(providedLesson?.task.final)g.CFinal.format(main,providedLesson.task);return main;}
g.CLab={mount,dispose,isPassed:task=>!!saved.passed[task.id]&&saved.passed[task.id]===saved.drafts[task.id]&&(!task.final||saved.passed[task.id].replace(/\s+/g,'').includes(task.signature.match(/\*(\w+)\(/)[1]+'('))};
})(window);
