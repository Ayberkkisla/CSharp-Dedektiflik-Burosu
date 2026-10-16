(function(g){
'use strict';
function E(tag,text,cls){const e=document.createElement(tag);if(text!==undefined)e.textContent=text;if(cls)e.className=cls;return e;}
function shuffled(a){for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
function normalize(line){return line.trim().replace(/\s+/g,' ');}
function valid(t,lines){
 const expected=t.code.split('\n').map(normalize),actual=lines.map(normalize);
 if(expected.join('\n')===actual.join('\n'))return true;
 // data ve next atamaları aynı yeni düğümün bağımsız alanlarıdır.
 const i=expected.indexOf('yeni->data = deger;');
 if(i>=0&&/^yeni->next = (NULL|head);$/.test(expected[i+1]||'')){
  [expected[i],expected[i+1]]=[expected[i+1],expected[i]];
  return expected.join('\n')===actual.join('\n');
 }
 return false;
}
function slotCorrect(t,index,line){
 const expected=t.code.split('\n').map(normalize),value=normalize(line);
 if(expected[index]===value)return true;
 const data=expected.indexOf('yeni->data = deger;');
 return data>=0&&/^yeni->next = (NULL|head);$/.test(expected[data+1]||'')&&((index===data&&value===expected[data+1])||(index===data+1&&value===expected[data]));
}
function result(t,input){const frames=g.CVisual.frames(t,input),last=frames.at(-1),values=[];let p=last.head;const seen=new Set();while(p&&!seen.has(p)){seen.add(p);const node=last.nodes.find(n=>n.id===p&&n.alive);if(!node)throw Error('Geçersiz bağlantı');values.push(node.value);p=last.edges[p];}if(p!==(t.circular&&values.length?last.head:null))throw Error('Bitiş bağlantısı yanlış');return values;}
function mount(parent,c,onSolved){
 const t=c.task,lines=t.code.split('\n'),key='cnoir-puzzle:'+t.id;
 let slots=Array(lines.length).fill(null),pool=shuffled(lines.map((_,i)=>i)),selected=null,passed=false,testIndex=0,dragged=null;
 try{const stored=JSON.parse((window.NoirProgress||localStorage).getItem(key)||'null');if(stored?.slots?.length===lines.length&&stored.slots.every(x=>x===null||Number.isInteger(x)&&x>=0&&x<lines.length)&&new Set(stored.slots.filter(x=>x!==null)).size===stored.slots.filter(x=>x!==null).length)slots=stored.slots;}catch(_){}
 const box=E('section',undefined,'cp-workshop');parent.append(box);
 const save=()=>{try{(window.NoirProgress||localStorage).setItem(key,JSON.stringify({slots}));}catch(_){}};
 const assembled=()=>slots.map(i=>i===null?'':lines[i]);
 function move(id,target){if(passed||id===null||id===undefined)return;const from=slots.indexOf(id),displaced=slots[target];if(from>=0)slots[from]=displaced;slots[target]=id;selected=null;save();draw();}
 function takeBack(id){if(passed)return;const from=slots.indexOf(id);if(from>=0){slots[from]=null;save();}selected=null;draw();}
 function draggable(button,id){
  button.draggable=!passed;button.setAttribute('aria-pressed',String(selected===id));
  button.addEventListener('dragstart',event=>{dragged=id;event.dataTransfer?.setData('text/plain',String(id));if(event.dataTransfer)event.dataTransfer.effectAllowed='move';button.classList.add('is-dragging');});
  button.addEventListener('dragend',()=>{dragged=null;button.classList.remove('is-dragging');});
  // Dokunmatik cihazlarda da parça parmağı izler.
  button.addEventListener('pointerdown',event=>{if(event.pointerType!=='touch'||passed)return;let ghost=null,moved=false,startX=event.clientX,startY=event.clientY;button.setPointerCapture?.(event.pointerId);
   const onMove=ev=>{if(Math.hypot(ev.clientX-startX,ev.clientY-startY)<9&&!moved)return;moved=true;if(!ghost){ghost=E('div',lines[id].trim(),'cp-ghost');document.body.append(ghost);}ghost.style.left=ev.clientX+'px';ghost.style.top=ev.clientY+'px';ev.preventDefault();};
   const cleanup=()=>{ghost?.remove();button.removeEventListener('pointermove',onMove);button.removeEventListener('pointerup',onUp);button.removeEventListener('pointercancel',cleanup);};
   const onUp=ev=>{const target=document.elementFromPoint(ev.clientX,ev.clientY)?.closest('[data-cp-slot]');cleanup();if(moved&&target&&box.contains(target)){ev.preventDefault();move(id,Number(target.getAttribute('data-cp-slot')));}};
   button.addEventListener('pointermove',onMove);button.addEventListener('pointerup',onUp);button.addEventListener('pointercancel',cleanup);
  });
 }
 function draw(){
  g.CVisual.stopAll();box.replaceChildren();
  box.append(E('div','SON KANIT · FONKSİYONU SEN KUR','cw-meta'),E('h2','Kod yapbozu: '+t.title),E('p',t.prompt),E('p','Tüm satırlar karışık. Parçaları sağdaki satır yerlerine sürükle. Yerleştirilmiş iki parçayı sürükleyerek değiştirebilirsin. Dokunarak veya klavyeyle de önce parçayı, sonra yerini seçebilirsin.','cp-intro'));
  const counter=E('div',(slots.filter(x=>x!==null).length)+' / '+lines.length+' satır yerleşti · '+slots.filter((id,i)=>id!==null&&slotCorrect(t,i,lines[id])).length+' doğru','cp-counter');box.append(counter);
  const layout=E('div',undefined,'cp-layout'),bank=E('section',undefined,'cp-bank'),editor=E('section',undefined,'cp-editor');bank.append(E('h3','🧩 Karışık parçalar'));editor.append(E('h3','⌨ Senin fonksiyonun'));
  bank.addEventListener('dragover',event=>event.preventDefault());bank.addEventListener('drop',event=>{event.preventDefault();if(dragged!==null)takeBack(dragged);});
  pool.filter(i=>!slots.includes(i)).forEach(id=>{const b=E('button',lines[id].trim(),'cp-piece'+(selected===id?' is-selected':''));b.type='button';b.disabled=passed;b.addEventListener('click',()=>{selected=selected===id?null:id;draw();});draggable(b,id);bank.append(b);});
  if(slots.every(x=>x!==null))bank.append(E('p','Tüm parçalar yerleşti. Sıralamayı kontrol edip çalıştır.','cw-caption'));
  slots.forEach((id,i)=>{const row=E('div',undefined,'cp-row');row.append(E('small',String(i+1)));const place=E('button',id===null?'＋ Satırı buraya bırak':lines[id].trim(),'cp-slot'+(id!==null?' is-filled '+(slotCorrect(t,i,lines[id])?'is-correct':'is-wrong'):'')+(id!==null&&id===selected?' is-selected':''));place.type='button';place.disabled=passed;place.setAttribute('data-cp-slot',String(i));place.setAttribute('aria-label',(i+1)+'. satır: '+(id===null?'boş':(slotCorrect(t,i,lines[id])?'doğru yerleşti: ':'yanlış yerde: ')+lines[id].trim()));place.addEventListener('click',()=>{if(selected!==null)move(selected,i);else if(id!==null){selected=id;draw();}});place.addEventListener('dragover',event=>{event.preventDefault();if(event.dataTransfer)event.dataTransfer.dropEffect='move';});place.addEventListener('drop',event=>{event.preventDefault();if(dragged!==null)move(dragged,i);});if(id!==null)draggable(place,id);row.append(place);if(id!==null&&!passed){const back=E('button','↩','cp-return');back.type='button';back.setAttribute('aria-label',(i+1)+'. satırı parçalara geri al');back.addEventListener('click',()=>takeBack(id));row.append(back);}editor.append(row);});
  layout.append(bank,editor);box.append(layout);
  const feedback=E('div',undefined,'cp-feedback');feedback.setAttribute('role','status');box.append(feedback);
  const actions=E('div',undefined,'cw-actions'),run=E('button','▶ ÇALIŞTIR','cw-btn gold'),reset=E('button','↻ Parçaları yeniden karıştır','cw-btn secondary');run.type=reset.type='button';
  run.addEventListener('click',()=>{
   if(slots.some(x=>x===null)){feedback.className='cp-feedback bad';feedback.textContent='Önce bütün satır yerlerini doldur. Eksik satırlarla fonksiyonu çalıştıramayız.';return;}
   if(!valid(t,assembled())){feedback.className='cp-feedback bad';feedback.textContent='Sıralama henüz güvenli değil. Önce kontrol ve adresleri saklama, ardından bağlantıyı değiştirme ve free sırasını düşün. Süslü parantezler de doğru blokları kapatmalı. Parçaları değiştirip tekrar deneyebilirsin.';return;}
   const all=t.tests.every(input=>JSON.stringify(result(t,input))===JSON.stringify(input.out));
   if(!all){feedback.className='cp-feedback bad';feedback.textContent='Örnek girdi kontrolü tamamlanamadı. Sıralamayı tekrar incele.';return;}
   if(!passed){passed=true;onSolved();}draw();
  });
  reset.addEventListener('click',()=>{passed=false;slots.fill(null);pool=shuffled(pool);selected=null;save();draw();});actions.append(run,reset);box.append(actions,E('p','Çalıştır, yapbozun bağlantı modelini örnek girdilerle kontrol eder. Gerçek C derlemesi için kurduğun kodu testli dosya olarak indirebilirsin.','cw-caption'));
  if(passed){feedback.className='cp-feedback good';feedback.textContent='✓ Fonksiyonu kurdun! '+t.tests.length+' örnek girdide bağlantı modeli beklenen sonucu verdi.';const select=E('select');select.setAttribute('aria-label','Animasyonda çalıştırılacak örnek girdi');t.tests.forEach((input,i)=>{const option=E('option','Girdi '+(i+1)+' · '+g.CCaseTools.testText(input,t));option.value=String(i);select.append(option);});select.value=String(testIndex);select.addEventListener('change',()=>{testIndex=Number(select.value);draw();});box.append(E('h3','Kurduğun kodun işlemini izle'),select);g.CVisual.mount(box,t,t.tests[testIndex],{autoplay:true});
   const download=E('button','↓ Kurduğum kodu testli C dosyası olarak indir','cw-btn secondary');download.type='button';download.addEventListener('click',()=>{const url=URL.createObjectURL(new Blob([g.CWriting.makeProgram(t,assembled().join('\n'))],{type:'text/plain;charset=utf-8'})),a=E('a');a.href=url;a.download=t.id+'-yapboz.c';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);});box.append(download);
  }
 }
 draw();return box;
}
g.CCodePuzzle={mount,valid,result,slotCorrect};
})(window);
