(function(g){
 'use strict';
 const tasks=g.CWritingTasks;
 const pool=['NULL','head','head->next','yeni','temp','temp->next','silinecek','malloc','free','printf','return','hedef','deger','head1','head2'];
 function slots(code){
  const result=[];let offset=0;
  code.split('\n').forEach((line,index)=>{
   let match=null;
   if(index>0){
    match=/\b(?:if|while)\s*\(([^\n]+)\)/.exec(line);
    if(match){const value=match[1];result.push({start:offset+match.index+match[0].indexOf(value),value});}
    else if((match=/\bfor\s*\([^;]*;\s*([^;]+);/.exec(line)))result.push({start:offset+match.index+match[0].indexOf(match[1]),value:match[1]});
    else if((match=/\breturn\s+([^;]+);/.exec(line)))result.push({start:offset+match.index+match[0].indexOf(match[1]),value:match[1]});
    else if((match=/\b(free|malloc|printf)\s*\(/.exec(line)))result.push({start:offset+match.index,value:match[1]});
    else if((match=/=\s*([^;]+);/.exec(line)))result.push({start:offset+match.index+match[0].indexOf(match[1]),value:match[1]});
   }
   offset+=line.length+1;
  });
  return result.filter(x=>!x.value.includes('sizeof')&&!x.value.includes('malloc')).slice(0,10).map((s,i)=>{
   let extras=s.value.includes('==')||s.value.includes('!=')?[s.value.includes('==')?s.value.replace(/==/g,'!='):s.value.replace(/!=/g,'=='), 'head == NULL','temp != NULL','temp->next == NULL','head->next == NULL']:pool;
   // Keep every alternative distinct; comparison strings are choices, never executed.
   extras=[...new Set(extras)].filter(x=>x!==s.value).slice(0,3);
   const options=[s.value,...extras];const shift=(i+1)%options.length;
   s.options=options.slice(shift).concat(options.slice(0,shift));return s;
  });
 }
 function example(t){
  const sample=t.tests.find(x=>x.a.length>=3)||t.tests[t.tests.length-1];
  let a=sample.a.map(x=>x+100),out=sample.out.map(x=>x+100),code=t.code;
  let title='Aynı işlemi farklı sayılarla çözelim';
  if(t.id==='besinci'){
   a=[12,24,36,48,60,72,84];out=[12,24,36,60,72,84];
   code=code.replace(/besinciSil/g,'dorduncuSil').replace('konum < 4','konum < 3');
   title='Benzer örnek: 4. düğümü silme';
  }
  const before=g.CWriting.listText(a,!!t.circular)+(sample.b?' | '+g.CWriting.listText(sample.b.map(x=>x+100)):'');
  return {title,before,after:t.id==='yazdir'?out.join(' '):g.CWriting.listText(out,!!t.circular),value:sample.value===undefined?null:sample.value+100,code,
   explain:t.id==='besinci'?'4. düğümü silerken 3. düğümde durduk. Soru 5. düğümü isterse döngü sınırı değişir: 4. düğüme kadar ilerleriz. Kısa liste kontrolü ve free sırası aynı kalır.':t.explain,
   steps:t.id==='besinci'?[
    ['Önceki düğümü bul','4. düğümü silmek için 3. düğümde dururum. 1. düğümden iki kez next ile ilerlerim.'],
    ['Silinecek adresi sakla','silinecek = temp->next ile 4. düğümü ayrı bir işaretçide tutarım.'],
    ['Bağlantıyı atlat','temp->next = silinecek->next ile 3. düğümü 5. düğüme bağlarım.'],
    ['Belleği bırak','free(silinecek) çağırıp head’i döndürürüm. Senin sorunda 5. düğüm silinecek: bu kez 4. düğümde durmalısın.']]:t.plan};
 }
 g.CPractice={slots,example};
 const stage=document.getElementById('cw-stage');if(!stage)return;
 const menu=document.getElementById('cw-tasks'),stats=document.getElementById('cw-stats'),speech=document.getElementById('cw-speech');
 let state={current:0,view:'example',seen:{},choices:{},matched:{},drafts:{},xp:0};
 try{const old=JSON.parse(localStorage.getItem('cnoir-practice')||'null');if(old&&Number.isInteger(old.current)&&old.current>=0&&old.current<tasks.length)state={...state,...old};}catch(_){}
 let oldWriting={};try{oldWriting=JSON.parse(localStorage.getItem('cnoir-writing')||'{}');}catch(_){}
 function save(){try{localStorage.setItem('cnoir-practice',JSON.stringify(state));}catch(_){speech.textContent='İlerleme kaydedilemedi; kodunu indirmeyi unutma.';}}
 function E(tag,text,cls){const n=document.createElement(tag);if(text!==undefined)n.textContent=text;if(cls)n.className=cls;return n;}
 function B(text,fn,cls=''){const b=E('button',text,'cw-btn '+cls);b.type='button';b.addEventListener('click',fn);return b;}
 function code(text){const pre=E('pre');pre.append(E('code',text));return pre;}
 function select(i){state.current=i;state.view='example';save();render();}
 function render(){
  const t=tasks[state.current];stage.replaceChildren();menu.replaceChildren();stats.textContent=`⚡ ${state.xp} eşleştirme XP · ${Object.keys(state.matched).filter(k=>state.matched[k]).length}/12 görev`;
  tasks.forEach((t,i)=>{const b=B(`${i+1}. ${t.title}${state.matched[t.id]?' ✓':''}`,()=>select(i));b.className='cw-task'+(state.matched[t.id]?' done':'');b.setAttribute('aria-current',i===state.current?'step':'false');menu.append(b);});
  const card=E('div',undefined,'cw-card');stage.append(card);
  card.append(E('div',state.view==='example'?'ÖNCE BENZER ÖRNEĞİ ÇÖZELİM':'ŞİMDİ SENİN SORUN','cw-meta'),E('h2',t.title));
  if(state.view==='example'){
   const ex=example(t);card.append(E('h3',ex.title),E('p',ex.value===null?'Bu örneği birlikte takip et.':`Örnekte işlem değeri ${ex.value}. Senin sorundaki sayılar farklı olacak.`));
   const diagram=E('div',undefined,'cw-diagram');diagram.append(E('div','Önce: '+ex.before),E('div','Sonra: '+ex.after));card.append(diagram);
   ex.steps.forEach(([title,text],i)=>{card.append(E('h3',`${i+1}. ${title}`),E('p',text));});
   card.append(E('h3','Çözümün C kodu'),code(ex.code),E('p',ex.explain),E('div','Sayılar değişse de bağlantı mantığı aynıdır. Aşağıdaki soruda bu adımları kendin uygulayacaksın.','cw-note'));
   card.append(B('ÖRNEĞİ İNCELEDİM · SORUYU AÇ →',()=>{state.seen[t.id]=true;state.view='match';save();render();}));return;
  }
  if(!state.seen[t.id]){state.view='example';render();return;}
  card.append(E('p',t.prompt),E('div',`Önce: ${t.before}\nSonra: ${t.after}`,'cw-diagram'));
  const tabs=E('div',undefined,'cw-actions');tabs.append(B('Kod parçalarını eşleştir',()=>{state.view='match';save();render();},state.view==='match'?'':'secondary'),B('Serbest yazma alıştırması',()=>{state.view='write';save();render();},state.view==='write'?'':'secondary'),B('Çözümlü örneğe dön',()=>{state.view='example';save();render();},'secondary'));card.append(tabs);
  if(state.view==='write'){
   card.append(E('div','Farklı değişken adları, for/while ve farklı doğru çözüm yolları kullanılabilir. Bu alan otomatik puanlanmaz; kodunu aşağıdaki test programıyla kendi C ortamında çalıştırabilirsin.','cw-note'),code(t.signature));
   const label=E('label','Fonksiyonunu yaz');label.htmlFor='cw-code';const editor=E('textarea',undefined,'cw-editor');editor.id='cw-code';editor.spellcheck=false;editor.value=state.drafts[t.id]??oldWriting.drafts?.[t.id]??'';
   editor.addEventListener('input',()=>{state.drafts[t.id]=editor.value;save();});card.append(label,editor);
   const download=B('Testli C dosyasını indir',()=>{const url=URL.createObjectURL(new Blob([g.CWriting.makeProgram(t,editor.value)],{type:'text/plain;charset=utf-8'}));const a=E('a');a.href=url;a.download=t.id+'-test.c';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);},'secondary');card.append(download);
   const details=E('details');details.append(E('summary','İşlemin sonuçlarını kontrol et'));t.tests.forEach(test=>details.append(E('p',g.CWriting.listText(test.a,!!t.circular)+' → beklenen: '+g.CWriting.listText(test.out,!!t.circular))));t.rubric.forEach(x=>details.append(E('p','• '+x)));card.append(details);return;
  }
  card.append(E('p','Bu örnek çözümde boşluklara uygun kod parçasını seç. Kontrol, burada verilen çözümün parçaları içindir; farklı bir serbest C çözümünü yanlış saymaz.','cw-caption'));
  const blanks=slots(t.code),answers=state.choices[t.id]||{};const pre=E('pre',undefined,'cw-match-code');let cursor=0;const selects=[];
  blanks.forEach((s,i)=>{pre.append(document.createTextNode(t.code.slice(cursor,s.start)));const select=E('select');select.setAttribute('aria-label',`${i+1}. boşluk`);select.append(E('option','Seç…'));select.options[0].value='';s.options.forEach(value=>{const option=E('option',value);option.value=value;select.append(option);});select.value=answers[i]||'';select.disabled=!!state.matched[t.id];select.addEventListener('change',()=>{if(!state.choices[t.id])state.choices[t.id]={};state.choices[t.id][i]=select.value;select.classList.remove('bad','good');report.textContent='Seçimini kontrol edebilirsin.';save();});pre.append(select);selects.push(select);cursor=s.start+s.value.length;});pre.append(document.createTextNode(t.code.slice(cursor)));card.append(pre);
  const report=E('div',state.matched[t.id]?'✓ Bütün kod parçaları doğru eşleşti.':'Her boşluğu doldur, ardından kontrol et.','cw-report');report.setAttribute('aria-live','polite');card.append(report);
  const check=B('EŞLEŞTİRMELERİ KONTROL ET',()=>{let correct=0;blanks.forEach((s,i)=>{const ok=selects[i].value===s.value;selects[i].classList.toggle('good',ok);selects[i].classList.toggle('bad',!ok);if(ok)correct++;});if(correct===blanks.length){if(!state.matched[t.id]){state.matched[t.id]=true;state.xp+=20;}save();render();speech.textContent='Kod parçaları tamamlandı. Bağlantı sırasını bir kez daha takip et.';}else report.textContent=`${correct}/${blanks.length} doğru. İşaretli boşlukları yeniden düşün; çözümlü örneğe dönebilirsin.`;});check.disabled=!!state.matched[t.id];card.append(check);
  if(state.matched[t.id]&&state.current<tasks.length-1)card.append(B('SONRAKİ SORUNUN ÖRNEĞİ →',()=>select(state.current+1)));
 }
 document.getElementById('cw-mascot').addEventListener('click',()=>{speech.textContent=tasks[state.current].hints[0];});render();
})(window);
