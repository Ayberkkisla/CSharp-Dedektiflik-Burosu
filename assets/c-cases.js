(function(g){
'use strict';
const cases=g.CCaseLessons,stage=document.getElementById('cw-stage'),menu=document.getElementById('cw-tasks'),stats=document.getElementById('cw-stats'),speech=document.getElementById('cw-speech');
const mode='ornek';
let s={version:1,current:0,view:'home',step:0,selected:null,placed:{},piece:null,status:'',attempts:0,xp:0,awarded:[],done:[]};
try{const old=JSON.parse((window.NoirProgress||localStorage).getItem('cnoir-cases')||'null');if(old?.version===1&&Number.isInteger(old.current)&&old.current>=0&&old.current<cases.length&&Number.isInteger(old.step)&&old.step>=0&&old.step<=8)s={...s,...old};}catch(_){}
function save(){try{(window.NoirProgress||localStorage).setItem('cnoir-cases',JSON.stringify(s));}catch(_){}}
if(s.mode==='kanit'){s.view='home';s.step=0;}s.mode=mode;s.view='home';save();
function E(tag,text,cls){const e=document.createElement(tag);if(text!==undefined)e.textContent=text;if(cls)e.className=cls;return e;}
function B(text,fn,cls=''){const b=E('button',text,'cw-btn '+cls);b.type='button';b.addEventListener('click',fn);return b;}
function code(text){const p=E('pre',undefined,'cf-code');p.append(E('code',text));return p;}
function reset(){s.selected=null;s.placed={};s.piece=null;s.status='';s.attempts=0;}
let caseTransition=null;
function enterCase(i){s.current=i;s.view='case';s.step=mode==='kanit'?2:0;reset();save();render();}
function open(i){
 if(caseTransition||!Number.isInteger(i)||i<0||i>=cases.length)return;
 if(g.NoirLessons){g.NoirLessons.enter({language:'C',number:i+1,title:cases[i].task.title},()=>{enterCase(i);stage.scrollIntoView?.({block:'start',behavior:'instant'});});return;}
 const reduced=g.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
 if(reduced||!g.requestAnimationFrame||!document.body){enterCase(i);return;}
 const width=g.innerWidth||1000,height=g.innerHeight||800,cx=width/2,cy=height/2,radius=Math.hypot(cx,cy)+4;
 const curtain=document.createElementNS('http://www.w3.org/2000/svg','svg'),shade=document.createElementNS('http://www.w3.org/2000/svg','path');
 curtain.setAttribute('class','cc-iris-transition');curtain.setAttribute('viewBox',`0 0 ${width} ${height}`);curtain.setAttribute('preserveAspectRatio','none');curtain.setAttribute('aria-hidden','true');shade.setAttribute('fill-rule','evenodd');curtain.append(shade);document.body.append(curtain);
 let raf=null,start=null,entered=false,gsapTransition=null;const previousOverflow=document.body.style.overflow;document.body.style.overflow='hidden';
 function clean(){gsapTransition?.kill();gsapTransition=null;if(raf!==null)g.cancelAnimationFrame?.(raf);curtain.remove();document.body.style.overflow=previousOverflow;caseTransition=null;}
 caseTransition={clean};
 function hole(r){const outside=`M0 0H${width}V${height}H0Z`;shade.setAttribute('d',r<=0?outside:outside+` M${cx-r} ${cy}a${r} ${r} 0 1 0 ${2*r} 0a${r} ${r} 0 1 0 ${-2*r} 0Z`);}
 if(g.gsap){const iris={radius};hole(radius);gsapTransition=g.gsap.timeline({paused:true,onComplete:clean});gsapTransition.to(iris,{radius:0,duration:.48,ease:'power2.inOut',onUpdate:()=>hole(iris.radius)}).call(()=>{hole(0);entered=true;try{enterCase(i);stage.scrollIntoView?.({block:'start',behavior:'instant'});const title=stage.querySelector?.('h2');title?.setAttribute('tabindex','-1');title?.focus({preventScroll:true});}catch(error){clean();throw error;}}).to(iris,{radius,duration:.56,delay:.12,ease:'power2.inOut',onUpdate:()=>hole(iris.radius)});gsapTransition.play();return;}
 function frame(now){
  if(start===null)start=now;const time=now-start;
  if(time<480){const u=time/480;hole(radius*(1-u*u*(3-2*u)));}
  else{
   if(!entered){hole(0);entered=true;try{enterCase(i);stage.scrollIntoView?.({block:'start',behavior:'instant'});const title=stage.querySelector?.('h2');title?.setAttribute('tabindex','-1');title?.focus({preventScroll:true});}catch(error){clean();throw error;}}
   const u=Math.min(1,Math.max(0,(time-600)/560));hole(radius*u*u*(3-2*u));
   if(u===1){clean();return;}
  }
  raf=g.requestAnimationFrame(frame);
 }
 hole(radius);raf=g.requestAnimationFrame(frame);
}
g.addEventListener?.('pagehide',()=>caseTransition?.clean());
let quickBar=null;
function scrollToStep(){stage.scrollIntoView?.({block:'start',behavior:'instant'});}
function quickNavigation(card){
 if(quickBar)quickBar.remove();quickBar=E('nav',undefined,'cc-quick-nav');quickBar.setAttribute('aria-label','Hızlı vaka gezinmesi');
 const back=B(s.step===0?'← Harita':'← Geri',()=>{if(s.step===0){s.view='home';save();render();}else{s.step--;reset();save();render();scrollToStep();}},'secondary');
 const label=E('span',(s.step+1)+' / 9 · '+['Kodu öğren','Örneği izle','Sonucu bul','Kod örneği','Kodu tamamla','Özel durum örneği','Özel durumu çöz','Kod yapbozu','Vaka tamamlandı'][s.step],'cc-quick-label');
 const question=[2,4,6].includes(s.step),labelText=s.step===8?'Sonraki vaka →':s.step===7?(s.status==='correct'?'Vakayı tamamla →':'▶ Çalıştır'):question?(s.status==='correct'?'Devam →':'Kontrol et'):'İleri →';
 const forward=B(labelText,()=>{if(s.step===8){open((s.current+1)%cases.length);return;}if(s.step===7&&s.status!=='correct'){Array.from(stage.querySelectorAll?.('button')||[]).find(b=>b.textContent==='▶ ÇALIŞTIR')?.click();return;}if(question&&s.status!=='correct'){Array.from(stage.querySelectorAll?.('button')||[]).find(b=>b.textContent==='KONTROL ET')?.click();return;}next();},'gold');
 forward.disabled=question&&s.status!=='correct'&&s.step!==4&&s.selected===null;
 const top=B('↑',scrollToStep,'secondary cc-quick-top');top.setAttribute('aria-label','Bu adımın başına git');
 quickBar.append(back,label,top,forward);card.append(quickBar);
}
function next(){s.step=mode==='kanit'&&s.step===2?4:mode==='kanit'&&s.step===4?6:s.step+1;reset();save();render();scrollToStep();}
function check(ok){let gained=0;if(ok){const key=s.current+':'+s.step;if(!s.awarded.includes(key)){s.awarded.push(key);gained=s.step===4?30:20;s.xp+=gained;}s.status='correct';}else{s.attempts++;s.status='wrong';}save();render();if(gained)journey?.reward(gained);}
function explainLines(card,annotations){const ol=E('ol',undefined,'cc-lines');annotations.forEach((a,i)=>{const item=E('li');item.append(E('small','SATIR '+(i+1)),code(a.line),E('p',a.why));ol.append(item);});card.append(ol);}
function lesson(card,c){const t=c.task;card.append(E('div','VAKA BAŞLANGICI · TAHTADAKİ KODU ANLA','cw-meta'),E('h2',t.title),E('p','Önce hareketi izle: düğümler zincire katılır veya ayrılır; oklar değişen next bağlantılarını takip eder. İstediğin yerde durdurup kodu inceleyebilirsin.'));
 g.CVisual.mount(card,t,t.tests.reduce((a,b)=>a.a.length>b.a.length?a:b),{autoplay:true});card.append(E('p',t.prompt.replace('sıfırdan yazınız','inceleyiniz').replace('yazınız','inceleyiniz')));
 card.append(E('p','Bu kod, gönderdiğin tahta örneklerindeki bağlantı mantığının tamamlanmış C sürümüdür. Okunabilir fonksiyon adları, dönüş değeri ve boş liste/bellek kontrolleri eklenmiştir; fotoğrafın birebir transkripsiyonu değildir.','cw-caption'));
 card.append(E('h3','Düğüm yapısı ve alanlar'),code(g.CWriting.structure));const structureNotes=E('ul');['struct node: düğüm türünü tanımlar; tek bir kutunun biçimidir.','int data; kutudaki tam sayıyı saklar.','struct node *next; sonraki kutunun adresini saklar. * burada işaretçi tanımıdır.','}; yapı tanımını bitirir. head bu yapının bir alanı değildir; ilk düğümün adresini tutan ayrı işaretçidir.'].forEach(x=>structureNotes.append(E('li',x)));card.append(structureNotes,E('p',t.id==='yazdir'?'Bu fonksiyon için #include <stdio.h>, printf bildirimini getirir.':'Bu fonksiyon için #include <stdlib.h>, malloc/free bildirimlerini getirir. Yeni düğüm ayrılan kodlarda malloc başarısızlığını da kontrol ediyoruz.','cw-caption'));
 card.append(E('h3','Bu vakada kullanılan ifadeler'));const table=E('div',undefined,'cc-glossary');c.vocabulary.forEach(([term,text])=>{const row=E('div');row.append(E('b',term),E('p',text));table.append(row);});card.append(table,E('h3','Fonksiyonun tamamı'),code(t.code),E('h3','Her satır ne yapıyor?'));explainLines(card,c.annotation);
 card.append(E('h3','İşlemin sırası'));t.plan.forEach(([title,text],i)=>card.append(E('h4',`${i+1}. ${title}`),E('p',text)));(c.boardNotes||[]).forEach(note=>{card.append(E('h3',note.title),E('p',note.intro));explainLines(card,note.rows.map(([line,why])=>({line,why})));});card.append(E('div',t.explain,'cf-reason'),B('KODU İNCELEDİM · ÇÖZÜMLÜ ÖRNEĞE GEÇ →',next));}
function example(card,c,activity){const t=c.task;card.append(E('div',`ÇÖZÜMLÜ ÖRNEK ${activity}/3 · ÖNCE BİRLİKTE ÇÖZELİM`,'cw-meta'));
 g.CVisual.mount(card,t,activity===1?c.worked:t.tests.reduce((a,b)=>a.a.length>b.a.length?a:b),{position:activity===2&&t.id==='besinci'?4:activity===2&&t.id==='dorduncu'?3:t.position||5,autoplay:true});
 if(activity===2){card.append(E('h2',t.id==='dorduncu'?'Benzer soru: 3. düğümü sil':t.id==='besinci'?'Benzer soru: 4. düğümü sil':'Benzer soru: bağlantı kodunu tamamla'),E('p',t.id==='dorduncu'?'Örnekte 3. düğümü silmek için 2. düğümde duruyoruz. Senin sorunda 4. düğümü silmek için 3. düğümde durmalısın.':t.id==='besinci'?'4. düğüm için 3. düğümde dururuz. Kullanıcının sorusunda 5. düğüm silinecek; bu kez 4. düğümde durmak gerekir.':'Aşağıdaki çözümde üç önemli satırı neden seçtiğimizi incele. Senin sorunda değişken adları farklı olacak; bağlantı görevleri aynı kalacak.'),code(c.exampleCode));
  c.wanted.forEach(line=>{const a=c.annotation.find(x=>x.line.trim()===line);card.append(code(line),E('p',a.why));});if(t.id==='besinci')card.append(E('div','Örnek döngüde konum < 3 kullanıldı: 1→2→3. Sorunda konum < 4: 1→2→3→4.','cf-memory'));
 }else{const q=activity===1?c.trace:c.edgeQuestion;card.append(E('h2',activity===1?'Fonksiyon çalışınca liste nasıl değişir?':'Normal bir girdide kontrolleri izleyelim'),E('div',q.examplePrompt,'cw-diagram'));
  const test=activity===1?c.worked:c.task.tests.reduce((a,b)=>a.a.length>b.a.length?a:b);card.append(E('p','Çalıştırılacak işlem: '+t.call.replace(/deger/g,String(test.value??7))),E('h3','Çözüm adımları'));
  t.plan.forEach(([title,text],i)=>card.append(E('h4',`${i+1}. ${title}`),E('p',text.replace(/\b7\b/g,String(test.value??7)))));
  if(t.id==='besinci')card.append(E('p',`Gezici ${test.a[0]} → ${test.a[1]} → ${test.a[2]} → ${test.a[3]} yolunu izler. ${test.a[4]} silinir; ${test.a[3]} doğrudan ${test.a[5]}'e bağlanır.`));
  card.append(E('div','Çözüm sonucu: '+q.exampleAnswer,'cf-memory'),E('p',activity===1?'Şimdi aynı fonksiyonu farklı sayılarla uygulayacaksın. Düğüm sayısını, bağlantıları ve sonucu birlikte takip et.':'Şimdi boş/tek düğümlü veya hedefi bulunmayan bir girdiyle kontrollerin hangi sırada çalışacağını düşün.'));
 }
 card.append(B('ÇÖZÜMÜ ANLADIM · FARKLI SORUYU AÇ →',next));}
function feedback(card,why){if(s.status)card.append(E('div',s.status==='correct'?'✓ Doğru. '+why:`Henüz tamamlanmadı. ${s.attempts}. deneme; çözümü yeniden inceleyebilirsin.`,'cf-feedback '+(s.status==='correct'?'good':'bad')));}
function controls(card,fn){const row=E('div',undefined,'cw-actions');if(s.status==='correct')row.append(B('DEVAM →',next));else{const b=B('KONTROL ET',fn);b.disabled=s.step!==4&&s.selected===null;row.append(b,B('Çözümlü örneğe dön',()=>{s.step--;reset();save();render();},'secondary'));}row.append(B('Vaka başındaki açıklamaya dön',()=>{s.step=0;reset();save();render();},'secondary'));card.append(row);}
const journeyRoot=document.getElementById('cw-journey');const journey=journeyRoot&&g.CJourney?g.CJourney.mount(journeyRoot,cases,s,open):null;
function render(){g.CVisual.stopAll();g.CQuestionVideo?.stopAll();const c=cases[s.current],t=c.task;stage.replaceChildren();stage.hidden=s.view==='home';const mentor=document.querySelector('.cw-mentor');if(mentor)mentor.hidden=s.view==='home';menu.replaceChildren();menu.hidden=true;document.querySelector('.cw-layout').style.gridTemplateColumns='1fr';stats.textContent=`⚡ ${s.xp} XP · ${s.done.length}/${cases.length} vaka`;journey?.update(s);if(s.view==='home')return;const card=E('section',undefined,'cw-card cf-card');stage.append(card);quickNavigation(card);
 const top=E('div',undefined,'cw-actions');top.append(B('✕ VAKALAR',()=>{s.view='home';save();render();},'secondary'));const progress=E('progress');progress.max=8;progress.value=s.step;progress.setAttribute('aria-label','Vaka ilerlemesi');top.append(progress,E('span','VAKA #'+c.n));card.append(top);const trail=E('div',undefined,'cc-case-trail');[['Kodun izini bul',0],['Örneği izle',1],['Kanıtları çöz',2],['Kod yapbozu',7],['Dosyayı kapat',8]].forEach(([text,step])=>trail.append(E('span',text,((step===2&&s.step>=2&&s.step<7)||step===s.step?'is-active':s.step>step?'is-passed':''))));card.append(trail);
 if(s.step===0){lesson(card,c);return;}if([1,3,5].includes(s.step)){example(card,c,(s.step+1)/2);return;}
 if(s.step===7){
  const finish=E('div',undefined,'cw-actions');
  g.CCodePuzzle.mount(card,c,()=>{let gained=0;const key=s.current+':7';if(!s.awarded.includes(key)){s.awarded.push(key);gained=40;s.xp+=gained;}s.status='correct';save();stats.textContent=`⚡ ${s.xp} XP · ${s.done.length}/${cases.length} vaka`;journey?.update(s);if(gained)journey?.reward(gained);finish.replaceChildren();finish.append(B('VAKAYI TAMAMLA →',next));quickNavigation(card);});
  card.append(finish,B('Çözümlü örneği tekrar izle',()=>{s.step=3;reset();save();render();},'secondary'));return;
 }
 if(s.step===8){if(!s.done.includes(s.current)){s.done.push(s.current);save();journey?.update(s);journey?.complete();stats.textContent=`⚡ ${s.xp} XP · ${s.done.length}/${cases.length} vaka`;}card.append(E('h2','Vaka tamamlandı ✓'),E('p','Kodun amacını, satırların görevini ve farklı girdilerde davranışını çalıştın.'),B('SONRAKİ VAKA →',()=>open((s.current+1)%cases.length)));
  const celebration=E('div',undefined,'cc-completion'),hero=E('img');hero.src='assets/dedektif-nokta.svg';hero.alt='Nokta vakayı kutluyor';const prize=E('div');const earned=[2,4,6,7].reduce((sum,n)=>sum+(s.awarded.includes(s.current+':'+n)?n===7?40:n===4?30:20:0),0);prize.append(E('strong',earned+' XP toplandı!'),E('p','Üç kanıt ve kod yapbozu tamam. Nokta yeni dosyanın peşine düşmeye hazır.'));celebration.append(hero,prize);card.append(celebration);
  const optional=E('details');optional.append(E('summary','İsteğe bağlı: kendi fonksiyonunu yaz'));const editor=E('textarea',undefined,'cw-editor');editor.setAttribute('aria-label','Serbest C kodu');let old={};try{const p=JSON.parse((window.NoirProgress||localStorage).getItem('cnoir-practice')||'{}'),w=JSON.parse((window.NoirProgress||localStorage).getItem('cnoir-writing')||'{}');old={...w.drafts,...p.drafts};}catch(_){}editor.value=old[t.id]||'';editor.addEventListener('input',()=>{let p={};try{p=JSON.parse((window.NoirProgress||localStorage).getItem('cnoir-practice')||'{}');}catch(_){}p.drafts={...p.drafts,[t.id]:editor.value};try{(window.NoirProgress||localStorage).setItem('cnoir-practice',JSON.stringify(p));}catch(_){}});optional.append(E('p','Bu alan otomatik puanlanmaz; farklı çözümlerini testli dosyada kendi C ortamında çalıştırabilirsin.'),code(t.signature),editor,B('Testli C dosyasını indir',()=>{const url=URL.createObjectURL(new Blob([g.CWriting.makeProgram(t,editor.value)],{type:'text/plain;charset=utf-8'}));const a=E('a');a.href=url;a.download=t.id+'-test.c';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);},'secondary'));card.append(optional);return;}
 if(s.step===4){
  card.append(E('div','SENİN SORUN · KOD TAMAMLA','cw-meta'),E('h2',t.id==='dorduncu'?'Yanlış sıra: 4. düğümü sil':t.id==='besinci'?'Hocanın ödevi: 5. düğümü sil':'Aynı işlemi farklı değişken adlarıyla tamamla'),E('p','Filmi izle. Sonra bir kod parçasına ve yerleştirmek istediğin boşluğa dokun. Bu soruda head → bas, temp → gez, yeni → ek adını aldı.'));
  g.CQuestionVideo.mount(card,t,t.tests.reduce((a,b)=>a.a.length>b.a.length?a:b),{kind:'code',renamed:true});const lines=c.code.split('\n'),indices=c.wantedVariant.map(x=>lines.findIndex(l=>l.trim()===x)),pool=[c.wantedVariant[1],'bas = NULL;',c.wantedVariant[2],'gez = bas;',c.wantedVariant[0],'free(bas);'];card.append(E('h3','Sorunun C kodu · üç satırı tamamla'));const pre=E('div',undefined,'cf-puzzle');
  lines.forEach((line,i)=>{const gap=indices.indexOf(i);if(gap<0){const row=E('div',undefined,'cq-puzzle-line');row.append(E('small',String(i+1)),E('code',line));pre.append(row);}else{const b=B(s.placed[gap]||`[ ${gap+1}. boşluk ]`,()=>{if(s.status==='correct')return;if(s.piece!==null){s.placed[gap]=pool[s.piece];s.piece=null;}else delete s.placed[gap];s.status='';save();render();},'cf-gap'+(s.placed[gap]?(s.placed[gap]===c.wantedVariant[gap]?' is-correct':' is-wrong'):''));b.setAttribute('aria-label',`${gap+1}. boşluk`);b.setAttribute('title',s.placed[gap]?(s.placed[gap]===c.wantedVariant[gap]?'Doğru satır':'Yanlış satır; değiştirebilirsin'):'Bir kod satırı yerleştir');b.append(E('span',String(i+1),'cq-line-number'));pre.append(b);}});card.append(pre);const row=E('div',undefined,'cw-actions');pool.forEach((line,i)=>{const b=B(line,()=>{s.piece=i;save();render();},'secondary');b.disabled=s.status==='correct';b.setAttribute('aria-pressed',String(s.piece===i));row.append(b);});card.append(row,E('p','Parçaya, sonra boşluğa dokun. Bu çalışma kod eşleştirmesidir; tarayıcı C derlemez.','cw-caption'));feedback(card,'Bağlantı ve bellek sırası korundu.');controls(card,()=>check(c.wantedVariant.every((x,i)=>x===s.placed[i])));return;
 }
 const q=s.step===2?c.trace:c.edgeQuestion;card.append(E('div','SENİN SORUN · '+(s.step===2?'SONUCU TAKİP ET':'ÖZEL DURUMU ÇÖZ'),'cw-meta'),E('h2',t.title));g.CQuestionVideo.mount(card,t,s.step===2?c.variant:c.edge,{kind:s.step===2?'result':'edge'});q.options.forEach((text,i)=>{const b=B('',()=>{s.selected=i;s.status='';save();render();},'cf-choice');b.append(E('b',String.fromCharCode(65+i)),E('span',text));b.disabled=s.status==='correct';b.setAttribute('aria-pressed',String(s.selected===i));card.append(b);});feedback(card,s.step===2?'Aynı bağlantı işlemi yeni sayılara uygulandı.':t.explain);controls(card,()=>{if(s.selected!==null)check(q.options[s.selected]===q.answer);});
}
const modeLabel=document.getElementById('cw-mode-label');if(modeLabel)modeLabel.textContent=mode==='kanit'?'Kanıt odası · 3 soru / vaka':'C bölümü · öğren, izle ve çöz';const heading=document.getElementById('cw-page-title');if(heading)heading.textContent=mode==='kanit'?'Kanıt odası.':'Bağlantıların izinde.';
document.getElementById('cw-mascot').addEventListener('click',()=>{speech.textContent=cases[s.current].task.hints[Math.min(2,s.attempts)];});render();
})(window);
