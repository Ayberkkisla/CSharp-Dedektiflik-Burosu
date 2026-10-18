(function(g){
'use strict';
const cases=g.CFormatCases,stage=document.getElementById('cw-stage'),menu=document.getElementById('cw-tasks'),stats=document.getElementById('cw-stats'),speech=document.getElementById('cw-speech');
let s={version:1,view:'home',current:0,step:0,selected:null,attempts:0,status:'',done:[],awarded:[],xp:0,placed:{},piece:null};
try{const old=JSON.parse(localStorage.getItem('cnoir-format')||'null');if(old?.version===1&&Number.isInteger(old.current)&&old.current>=0&&old.current<cases.length&&Number.isInteger(old.step)&&old.step>=0&&old.step<=10)s={...s,...old};}catch(_){}
function save(){try{localStorage.setItem('cnoir-format',JSON.stringify(s));}catch(_){}}
function E(tag,text,cls){const e=document.createElement(tag);if(text!==undefined)e.textContent=text;if(cls)e.className=cls;return e;}
function B(text,fn,cls=''){const b=E('button',text,'cw-btn '+cls);b.type='button';b.addEventListener('click',fn);return b;}
function code(text){const e=E('pre',undefined,'cf-code');e.append(E('code',text));return e;}
function reset(){s.selected=null;s.attempts=0;s.status='';s.placed={};s.piece=null;}
function open(i){s.current=i;s.step=0;s.view='case';reset();save();render();}
function next(){s.step++;reset();save();render();}
function award(){const key=s.current+':'+s.step;if(!s.awarded.includes(key)){s.awarded.push(key);s.xp+=s.step>=8?20:10;}s.status='correct';save();render();}
function failure(){s.attempts++;s.status=s.attempts>=3&&s.step<8?'revealed':'wrong';save();render();}
const puzzleLines={basa:['yeni->next = head;','return yeni;'],sona:['temp->next = yeni;','return head;'],yazdir:['printf("%d ", temp->data);','temp = temp->next;'],'ilk-sil':['head = head->next;','free(temp);'],'son-sil':['temp->next = NULL;','free(silinecek);'],'deger-sil':['temp->next = silinecek->next;','free(silinecek);'],besinci:['temp->next = silinecek->next;','free(silinecek);'],birlestir:['temp->next = head2;','return head1;'],'daire-basa':['yeni->next = head;','temp->next = yeni;'],'daire-sona':['yeni->next = head;','temp->next = yeni;'],'daire-ilk-sil':['son->next = head;','free(eski);'],'daire-deger-sil':['onceki->next = simdiki->next;','free(simdiki);']};
function puzzle(t){const lines=t.code.split('\n');let wanted=puzzleLines[t.id];if(!wanted.every(x=>lines.some(l=>l.trim()===x))){wanted=lines.filter(l=>l.trim().startsWith('free(')||/^[ \t]*\w+->next =/.test(l)).slice(-2).map(l=>l.trim());}
 const indices=wanted.map(x=>lines.findIndex(l=>l.trim()===x));return {lines,wanted,indices,pool:[wanted[1],'head = NULL;',wanted[0],'free(head);']};}
function hint(){const c=cases[s.current],idx=Math.min(2,Math.max(0,Math.floor((s.step-1)/2)));speech.textContent=s.step===9?'Önce parçaya, sonra numaralı boşluğa dokun. Düğümü serbest bırakmadan önce bağlantıyı koru.':c.notes[idx].memory;}
function render(){
 const c=cases[s.current],t=c.task;stage.replaceChildren();menu.replaceChildren();menu.hidden=true;document.querySelector('.cw-layout').style.gridTemplateColumns='1fr';stats.textContent=`⚡ ${s.xp} XP · ${s.done.length}/12 dosya`;
 const card=E('section',undefined,'cw-card cf-card');stage.append(card);
 if(s.view==='home'){
  card.append(E('div','C · BAĞLI LİSTE DOSYALARI','cw-meta'),E('h2','Küçük adımlarla bağlantıları çöz.'),E('p','C# bölümündeki gibi: kısa ders notu → tek soru → boss → iki boşluklu kod tamamlama. Her seferinde yalnızca bir karar ver.'));
  cases.forEach((c,i)=>card.append(B(`${String(i+1).padStart(2,'0')} · ${c.task.title}${s.done.includes(i)?' ✓':''}`,()=>open(i),'cf-file')));return;
 }
 const top=E('div',undefined,'cw-actions');top.append(B('✕ DOSYALAR',()=>{s.view='home';save();render();},'secondary'));const progress=E('progress');progress.max=10;progress.value=s.step;progress.setAttribute('aria-label','Vaka ilerlemesi');top.append(progress,E('span','VAKA #'+c.n));card.append(top);
 if(s.step===0){card.append(E('div','VAKA AÇILIYOR','cw-meta'),E('h2',t.title),E('p','Bu dosyada önce üç küçük bağlantı kararını öğreneceğiz. Fonksiyonun tamamını birden yazman gerekmiyor.'),E('div',t.before,'cw-diagram'));const ul=E('ul');['3 kısa ders notu','3 kanıt sorusu · 5 şık','1 boss sorusu','2 boşluklu kod tamamlama'].forEach(x=>ul.append(E('li',x)));card.append(ul,B('KARTI AÇ →',next));return;}
 if(s.step===10){if(!s.done.includes(s.current)){s.done.push(s.current);save();}card.append(E('div','DOSYA KAPANDI ✓','cw-meta'),E('h2',t.title),E('p','Küçük kararları çözdün, kodun iki parçasını yerleştirdin.'),B('SONRAKİ DOSYA →',()=>open((s.current+1)%cases.length)));
  const optional=E('details');optional.append(E('summary','İsteğe bağlı: fonksiyonu kendin yaz'));const editor=E('textarea',undefined,'cw-editor');editor.setAttribute('aria-label','Serbest C kodu');let old={};try{const p=JSON.parse(localStorage.getItem('cnoir-practice')||'{}'),w=JSON.parse(localStorage.getItem('cnoir-writing')||'{}');old={...w.drafts,...p.drafts};}catch(_){}editor.value=old[t.id]||'';editor.addEventListener('input',()=>{let p={};try{p=JSON.parse(localStorage.getItem('cnoir-practice')||'{}');}catch(_){}p.drafts={...p.drafts,[t.id]:editor.value};try{localStorage.setItem('cnoir-practice',JSON.stringify(p));}catch(_){}});optional.append(E('p','Bu alan otomatik puanlanmaz. Farklı çözümlerini testli C dosyasıyla kendi ortamında deneyebilirsin.'),code(t.signature),editor,B('Testli C dosyasını indir',()=>{const url=URL.createObjectURL(new Blob([g.CWriting.makeProgram(t,editor.value)],{type:'text/plain;charset=utf-8'}));const a=E('a');a.href=url;a.download=t.id+'-test.c';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);},'secondary'));card.append(optional);return;}
 if(s.step<=6&&s.step%2===1){const n=c.notes[(s.step-1)/2];card.append(E('div',`DERS NOTU ${(s.step+1)/2}/3 · ÖNCE BUNU OKU`,'cw-meta'),E('h2','📝 '+n.title));const list=E('ul',undefined,'cf-notes');list.append(E('li',n.text),E('li','Örnekte yalnızca aşağıdaki satıra odaklan.'));card.append(list,code(n.code),E('div',n.memory,'cf-reason'),E('div','🧠 Akılda tut: '+n.memory,'cf-memory'),B('ÖĞRENDİM, SORUYA GEÇ →',next));return;}
 if(s.step===7){
  card.append(E('div','HATA AVI · HATALI SATIRA DOKUN','cw-meta'),E('div','🧠 Hatırla: gez = gez->next; bağlantı okunu izler. gez++ ise adres üzerinde aritmetik yapar; düğümler yan yana olmak zorunda değildir.','cf-memory'),E('h2','Gezici sonraki düğüme gitmeli.'),E('p','head ve head->next geçerli düğümler. Bağlı listenin okunu izlemeyen satırı bul.'));
  ['struct node *gez = head;','gez++;','printf("%d", gez->data);'].forEach((line,i)=>{const b=B(`${i+1}  ${line}`,()=>{s.selected=i;s.status='';save();render();},'cf-choice');b.setAttribute('aria-pressed',String(s.selected===i));b.disabled=s.status==='correct';card.append(b);});
  feedback(card,'gez++ bağlantıyı izlemez. Doğru ilerleme gez = gez->next; satırıdır.');controls(card,()=>{if(s.selected===null)return;s.selected===1?award():failure();});return;
 }
 if(s.step===9){
  const p=puzzle(t);card.append(E('div','KOD TAMAMLA 🧩 · İKİ BOŞLUK','cw-meta'),E('h2','İki eksik satırı yerleştir.'),E('p','Önce aşağıdaki parçaya, sonra kodun içindeki boşluğa dokun. Yerleşen satıra dokunarak geri alabilirsin.'),E('div','Beklenen sonuç: '+t.after,'cw-diagram'));
  const pre=E('div',undefined,'cf-puzzle');p.lines.forEach((line,i)=>{const gap=p.indices.indexOf(i);if(gap<0)pre.append(E('div',line));else{const b=B(s.placed[gap]||`[ ${gap+1}. boşluk ]`,()=>{if(s.status==='correct')return;if(s.piece!==null){s.placed[gap]=p.pool[s.piece];s.piece=null;}else delete s.placed[gap];s.status='';save();render();},'cf-gap');b.setAttribute('aria-label',`${gap+1}. boşluk`);pre.append(b);}});card.append(pre);
  const pool=E('div',undefined,'cw-actions');p.pool.forEach((line,i)=>{const b=B(line,()=>{s.piece=i;save();render();},'secondary');b.setAttribute('aria-pressed',String(s.piece===i));b.disabled=s.status==='correct';pool.append(b);});card.append(pool,E('p','Bu görev parça eşleştirmesidir; tarayıcı C kodunu derlemez.','cw-caption'));
  feedback(card,'Doğru satırlar, verilen çözümdeki bağlantı sırasını tamamlıyor.');controls(card,()=>p.wanted.every((line,i)=>s.placed[i]===line)?award():failure());return;
 }
 const boss=s.step===8;const sample=t.tests.reduce((a,b)=>a.a.length>b.a.length?a:b);
 const n=boss?{question:t.title+' işleminin sonucu hangisi?',answer:t.after,options:[t.before,g.CWriting.listText(sample.a.slice(0,1),!!t.circular),t.after,g.CWriting.listText([...sample.out].reverse(),!!t.circular),'head → NULL'],memory:t.explain}:c.notes[s.step/2-1];
 card.append(E('div',boss?'SON DOSYA · BOSS':`KANIT ${s.step/2}/3`,'cw-meta'),E('h2',boss?'Son karar: '+n.question:n.question));if(boss)card.append(E('div',t.before,'cw-diagram'));
 n.options.forEach((text,i)=>{const b=B('',()=>{s.selected=i;s.status='';save();render();},'cf-choice');b.setAttribute('aria-pressed',String(s.selected===i));b.append(E('b',String.fromCharCode(65+i)),E('span',text));b.disabled=['correct','revealed'].includes(s.status);card.append(b);});
 feedback(card,n.memory+(s.status==='revealed'?' Doğru cevap: '+n.answer:''));controls(card,()=>{if(s.selected===null)return;if(n.options[s.selected]===n.answer)award();else failure();});
}
function feedback(card,why){if(!s.status)return;const good=s.status==='correct';card.append(E('div',good?'✓ Kanıt çözüldü!':s.status==='revealed'?'Çözümü birlikte inceleyelim.':'Bir daha düşün.','cf-feedback '+(good?'good':'bad')),E('p',good||s.status==='revealed'?why:'Ders notuna dönebilir veya Dedektif Nokta’dan ipucu alabilirsin.'));}
function controls(card,check){const row=E('div',undefined,'cw-actions cf-bottom');if(['correct','revealed'].includes(s.status))row.append(B('DEVAM →',next));else{row.append(B('🕵️ İPUCU',hint,'secondary'));const b=B('KONTROL ET',check);b.disabled=s.step!==9&&s.selected===null;row.append(b);}if(s.step<=6)row.append(B('← DERS NOTU',()=>{s.step--;reset();save();render();},'secondary'));card.append(row);}
document.getElementById('cw-mascot').addEventListener('click',hint);g.CFormat={puzzle};render();
})(window);
