(function(global){
 'use strict';
 const key='cnoir-course',ids=(global.CCourseLessons||[]).map(l=>l.id);
 function record(){try{const s=JSON.parse(localStorage.getItem(key)||'null');return s?.version===1&&Array.isArray(s.completed)?s:{version:1,current:0,completed:[]};}catch(_){return {version:1,current:0,completed:[]};}}
 function count(){const s=record();return ids.filter(id=>s.completed.includes(id)).length;}
 function ready(){return ids.length===18&&count()===ids.length;}
 function mount(target){
  target.replaceChildren();const card=document.createElement('section');card.className='cw-card';
  const title=document.createElement('h2');title.textContent='Önce dersleri birlikte öğrenelim.';
  const text=document.createElement('p');text.textContent='Soruları çözmek için gerekli C ve bağlı liste temellerini baştan öğreneceksin. Düğüm ve işaretçilerden başlayıp ekleme, silme ve dairesel listelere ilerleyeceğiz.';
  const progress=document.createElement('div');progress.className='cw-note';progress.textContent=count()+'/18 ders tamamlandı · Sorular ve kod yazma alanı derslerden sonra açılır.';
  const link=document.createElement('a');link.href='c-dersler.html';link.className='cw-btn gold';link.textContent=count()?'DERSLERE KALDIĞIM YERDEN DEVAM →':'İLK DERSTEN BAŞLA →';link.style.display='inline-block';link.style.textDecoration='none';
  card.append(title,text,progress,link);target.append(card);
 }
 global.CCourseGate={key,record,count,ready,mount};
})(typeof window==='undefined'?globalThis:window);
