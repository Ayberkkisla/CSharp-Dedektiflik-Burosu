(() => {
 'use strict';
 const lessons=window.CCourseLessons,gate=window.CCourseGate,menu=document.getElementById('course-menu'),stage=document.getElementById('course-stage'),stats=document.getElementById('course-stats'),speech=document.getElementById('course-speech');
 let state=gate.record();state.completed=lessons.map(l=>l.id).filter(id=>state.completed.includes(id));state.current=Number.isInteger(state.current)&&state.current>=0&&state.current<lessons.length?state.current:0;let finish=false;
 function firstUnread(){return lessons.findIndex(l=>!state.completed.includes(l.id));}
 if(firstUnread()>=0&&state.current>firstUnread())state.current=firstUnread();
 function save(){try{localStorage.setItem(gate.key,JSON.stringify(state));}catch(_){speech.textContent='Tarayıcı kayıt alanı kullanılamıyor; ders ilerlemesi kalıcı kaydedilemedi.';}}
 function E(tag,text,cls){const n=document.createElement(tag);if(text!==undefined)n.textContent=text;if(cls)n.className=cls;return n;}
 function B(text,fn,cls=''){const n=E('button',text,'cw-btn '+cls);n.type='button';n.addEventListener('click',fn);return n;}
 function link(label,url){const a=E('a',label,'cw-btn gold');a.href=url;a.style.textDecoration='none';return a;}
 function codeBlock(text){const pre=E('pre');pre.append(E('code',text));return pre;}
 function next(){const lesson=lessons[state.current];if(!state.completed.includes(lesson.id))state.completed.push(lesson.id);if(state.current<lessons.length-1)state.current++;else finish=true;save();render();}
 function render(){
  menu.replaceChildren();stage.replaceChildren();stats.textContent=state.completed.length+'/18 ders tamamlandı';
  const open=firstUnread();lessons.forEach((l,i)=>{const done=state.completed.includes(l.id);const b=B('',()=>{state.current=i;finish=false;save();render();});b.className='cw-task'+(done?' done':'');b.setAttribute('aria-current',!finish&&state.current===i?'step':'false');b.disabled=open>=0&&i>open;b.append(E('small',String(i+1).padStart(2,'0')+' · '+(done?'✓ OKUNDU':b.disabled?'🔒 ÖNCEKİ DERSİ TAMAMLA':l.group.toLocaleUpperCase('tr-TR'))),E('span',l.title));menu.append(b);});
  const card=E('section',undefined,'cw-card');stage.append(card);
  if(finish&&state.completed.length===18){card.append(E('div','DERSLER TAMAMLANDI','cw-meta'),E('h2','Artık uygulamaya geçebiliriz.'),E('p','Gerekli C araçlarını, doğrusal ve dairesel listeleri, bağlantı sırasını, bellek yönetimini ve sınav sorusunu nasıl planlayacağını gördün. Şimdi önce kanıt sorularıyla pekiştir, ardından boş editörde fonksiyon yaz.'));const actions=E('div',undefined,'cw-actions');actions.append(link('KANIT SORULARINA GEÇ →','c-bagli-liste.html'),link('SIFIRDAN KOD YAZ →','c-kod-atolyesi.html'));card.append(actions,E('p','Soldaki derslerden istediğine dönerek tekrar yapabilirsin. Derslerin okunmuş olması otomatik bir başarı sınavı sonucu değildir.','cw-caption'));speech.textContent='İlk uygulamada takılırsan dersine geri dön. Ezberlemek yerine bağlantıların neden o sırada değiştiğini açıkla.';return;}
  const lesson=lessons[state.current];speech.textContent=lesson.takeaway;card.append(E('div',`DERS ${state.current+1}/18 · ${lesson.group.toLocaleUpperCase('tr-TR')}`,'cw-meta'),E('h2',lesson.title),E('p',lesson.intro),E('h3','Mantığı birlikte kuralım'),E('p',lesson.concept));
  const diagram=E('div',undefined,'cw-diagram');lesson.diagram.forEach(line=>diagram.append(E('div',line)));card.append(diagram,E('h3','C kodunda nasıl görünür?'),codeBlock(lesson.code),E('h3','Satırları nasıl okuyacağım?'));
  const explanations=E('ol');lesson.lines.forEach(text=>explanations.append(E('li',text)));card.append(explanations);const trap=E('div',undefined,'cw-note');trap.append(E('strong','Sık yapılan hata'),E('p',lesson.trap));card.append(trap,E('h3','Bu dersten aklında kalsın'),E('p',lesson.takeaway));
  const actions=E('div',undefined,'cw-actions');const prev=B('← Önceki ders',()=>{state.current--;save();render();},'secondary');prev.disabled=state.current===0;actions.append(prev,B(state.current===17?'DERSLERİ TAMAMLA, UYGULAMALARI AÇ →':'BU DERSİ OKUDUM · SONRAKİ DERS →',next));card.append(actions);
  if(state.completed.length===18)card.append(B('Uygulama geçişlerini göster',()=>{finish=true;render();},'secondary'));
 }
 render();
})();
