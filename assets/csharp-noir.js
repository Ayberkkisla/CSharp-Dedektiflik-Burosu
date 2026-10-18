(function(g){
'use strict';
if(!g.DERSLER||!g.CJourney)return;
const lessons=g.DERSLER,main=document.getElementById('orta'),root=document.createElement('section');root.className='cs-world';root.id='cs-world';main.parentNode.insertBefore(root,main);document.body.classList.add('cs-noir');
// Keep lesson identifiers stable; the new practice case occupies display slot 7.
const entries=lessons.map((lesson,i)=>({lesson,index:i,title:lesson.baslik}));
entries.splice(6,0,{practice:true,caseNo:7,title:'Kutularla Kod Yazma'},{practice:true,caseNo:8,title:'Mantık Atölyesi · Zor Hesaplar'});
entries.splice(9,0,{practice:true,caseNo:10,title:"Kolay if / else · 10 Kod Görevi"});
entries.splice(10,0,{practice:true,caseNo:11,title:"Kararlarda Bir Adım İleri · 15 Kod Görevi"});
entries.splice(11,0,{practice:true,caseNo:12,title:'Döngü Makinesi · 15 Kod Görevi'});
entries.splice(13,0,{practice:true,caseNo:14,title:'Gece Ekspresi · 15 Karma Kod Görevi'});
entries.splice(18,0,{practice:true,caseNo:19,title:'Ünite 2 Finali · Gece Vardiyası'});
entries.splice(8,0,{practice:true,caseNo:9,title:'Ünite 1 Finali · İlk Büyük Dosya'});
entries.splice(22,0,{practice:true,caseNo:23,title:'Delil Rafı · 10 Kolay Dizi Görevi'});
entries.splice(24,0,{practice:true,caseNo:25,title:'Büronun Araçları · 10 Kolay Metot Görevi'});
entries[26]={...entries[26],practice:true,caseNo:27,legacy:true,title:'Ünite 3 Finali · Arşiv Finali'};
g.CSharpCaseEntries=entries;
g.CSharpCaseNumber=n=>entries.findIndex(e=>e.lesson?.n===n)+1;
g.CSharpPracticeNumber=n=>entries.findIndex(e=>e.practice&&e.caseNo===n)+1;
if(!g.CCaseMap.some(p=>p.kind==='code-boxes'))g.CCaseMap.splice(6,0,{x:500,y:610,name:'Kod Kutuları Atölyesi',color:'#d0ad68',kind:'code-boxes'});
if(!g.CCaseMap.some(p=>p.kind==='logic-boxes'))g.CCaseMap.splice(7,0,{x:580,y:640,name:'Mantık Atölyesi',color:'#b1cb8c',kind:'logic-boxes'});
if(!g.CCaseMap.some(p=>p.kind==='flow-code'))g.CCaseMap.splice(9,0,{x:600,y:700,name:'Akış Atölyesi',color:'#8fc5bf',kind:'flow-code'});
if(!g.CCaseMap.some(p=>p.kind==='next-if'))g.CCaseMap.splice(10,0,{x:650,y:720,name:'Kararlarda Bir Adım İleri',color:'#d2bb8b',kind:'next-if'});
if(!g.CCaseMap.some(p=>p.kind==='loop-code'))g.CCaseMap.splice(11,0,{x:680,y:760,name:'Döngü Makinesi',color:'#cfae71',kind:'loop-code'});
if(!g.CCaseMap.some(p=>p.kind==='mix-code'))g.CCaseMap.splice(13,0,{x:740,y:820,name:'Gece Ekspresi',color:'#8ccfbc',kind:'mix-code'});
if(!g.CCaseMap.some(p=>p.kind==='unit2-final'))g.CCaseMap.splice(18,0,{x:790,y:880,name:'Gece Vardiyası Finali',color:'#e0a18a',kind:'unit2-final'});
if(!g.CCaseMap.some(p=>p.kind==='unit1-final'))g.CCaseMap.splice(8,0,{x:590,y:665,name:'İlk Büyük Dosya Finali',color:'#e0a18a',kind:'unit1-final'});
if(!g.CCaseMap.some(p=>p.kind==='array-code'))g.CCaseMap.splice(22,0,{x:540,y:1710,name:'Delil Rafı',color:'#9edbd0',kind:'array-code'});
if(!g.CCaseMap.some(p=>p.kind==='method-code'))g.CCaseMap.splice(24,0,{x:670,y:1880,name:'Büronun Araçları',color:'#a9bff2',kind:'method-code'});
let practiceSelected=0;
const position=i=>entries.findIndex(e=>e.index===i);
const practicePosition=which=>entries.findIndex(e=>e.practice&&e.caseNo===which);
const extraDone=(which=7)=>which===27&&g.kayit.biten.includes(17)||!!g.kayit.extraCases?.[which===27?'u3-final10':which===25?'u3-method25':which===23?'u3-array23':which===9?'u1-final10':which===19?'u2-19-10':which>=10?'u2-'+which:'u1-'+which];
const extraPositions=()=>entries.flatMap((e,i)=>e.practice&&extraDone(e.caseNo)?[i]:[]);
const openPractice=(which=7)=>{which=[7,8,9,10,11,12,14,19,23,25,27].includes(which)?which:7;practiceSelected=which;state.current=practicePosition(which);journey.update(state);(which===27?g.Unit3Capstone:which===25?g.Unit3MethodCase:which===23?g.Unit3ArrayCase:which===9?g.Unit1Capstone:which===19?g.Unit2Capstone:which===14?g.NoirCase024:which===12?g.NoirCase022:which===11?g.NoirCase021:which===10?g.NoirCase020:which===8?g.NoirCase018:g.NoirCase015)?.open();};
function E(tag,text,cls){const e=document.createElement(tag);if(text!==undefined)e.textContent=text;if(cls)e.className=cls;return e;}
const heading=E('header',undefined,'cs-world-heading'),text=E('div');text.append(E('small','C# · GECE VARDİYASI'),E('h1','Şehrin kodlarını çöz.'),E('p',entries.length+' dosya, 4 bölge. Bir dosya seç; dersi incele, kanıtları çöz ve dosyayı kapat.'));const stats=E('strong',undefined,'cs-world-stats');heading.append(text,stats);root.append(heading);
const districts=E('div',undefined,'cs-districts');g.UNITELER.forEach((u,i)=>{const start=i===0?1:i===1?10:i===2?21:29,end=i===0?9:i===1?20:i===2?28:33,b=E('button',u[2]+' · '+start+'–'+end);b.type='button';b.addEventListener('click',()=>{const node=mapHost.querySelectorAll('.cj-stop')[start-1];node?.scrollIntoView({block:'center',inline:'center',behavior:reduced?'instant':'smooth'});});districts.append(b);});root.append(districts);
const mapHost=E('div',undefined,'cs-map');root.append(mapHost);const reduced=!!g.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
let current=0;try{const saved=Number((window.NoirProgress||localStorage).getItem('csharp-noir-case'));if(Number.isInteger(saved)&&saved>=0&&saved<lessons.length)current=saved;}catch(_){}
const state={current:position(current),view:'home',xp:g.kayit.xp,done:[...new Set(g.kayit.biten.map(n=>position(n-1)).concat(extraPositions()))]};
const journey=g.CJourney.mount(mapHost,entries.map(d=>({task:{title:d.title}})),state,i=>entries[i].practice?openPractice(entries[i].caseNo):g.dersAc(entries[i].index+1),{label:'NOKTA’NIN C# SORUŞTURMA PANOSU',intro:'Ünite 1, 1–9. vakalar: temeller, hesaplar ve 9. vakada on aşamalı İlk Büyük Dosya finali. Ünite 2, 10–20. vakalar: kararlar, döngüler ve 20. vakada Gece Vardiyası finali. Ünite 3’te 22. vakadan sonra 23. vakada Delil Rafı ile on kolay dizi sorusu var. 24. metot dersinden sonra 25. vakada Büronun Araçları ile on kolay metot sorusu var. 27. vakada Arşiv Finali ile diziler ve metotlar on aşamada birleşir. İstediğin vaka kartından devam edebilirsin.'});
let sessionXP=0,transition=null;
// Difficulty belongs to each case, independent of progress and view mode.
mapHost.querySelectorAll('.cj-stop').forEach((node,i)=>{
 const entry=entries[i];
 if(entry.practice&&[9,19,27].includes(entry.caseNo)){node.dataset.capstone='true';node.title='Ünite '+(entry.caseNo===9?1:entry.caseNo===27?3:2)+' bitirme projesi · 10 aşama';const s=node.querySelector('small');if(s)s.textContent+=' · FİNAL';}
 if(entry.practice&&entry.caseNo===23){node.dataset.arrayCase='true';node.title='Ünite 3 · 10 kolay dizi görevi';const label=node.querySelector('small');if(label)label.textContent+=' · KOLAY';}
 if(entry.practice&&entry.caseNo===25){node.dataset.methodCase='true';node.title='Ünite 3 · 10 kolay metot görevi';const label=node.querySelector('small');if(label)label.textContent+=' · KOLAY';}
 if(entry.practice && [8,14].includes(entry.caseNo)){
  node.dataset.difficulty='hard';
  node.title='Zor vaka · '+entry.title;
  const label=node.querySelector('small');
  if(label)label.textContent+=' · ZOR';
 }
});

function sync(view){state.current=practiceSelected?practicePosition(practiceSelected):position(current);state.view=view||state.view;state.xp=g.kayit.xp+(state.view==='case'?(g.OT?.xp||0):0);state.done=[...new Set(g.kayit.biten.map(n=>position(n-1)).concat(extraPositions()))];stats.textContent='⚡ '+g.kayit.xp+' XP · '+state.done.length+'/'+entries.length+' vaka';journey.update(state);root.classList.toggle('is-lesson',state.view==='case');}
function reward(){const now=g.OT?.xp||0,delta=now-sessionXP;sessionXP=now;if(delta>0)journey.reward(delta);sync();}
g.patika=function(){document.body.classList.remove('dersmodu');document.body.classList.add('cs-map-home');document.getElementById('ust').replaceChildren();main.replaceChildren();g.bantKapat();document.getElementById('balon').classList.remove('goster');sync('home');g.menuDoldur();g.scrollTo(0,0);};
const originalOpen=g.dersAc;
function enter(n){practiceSelected=0;current=n-1;sessionXP=0;try{(window.NoirProgress||localStorage).setItem('csharp-noir-case',String(current));}catch(_){}document.body.classList.remove('cs-map-home');originalOpen(n);sync('case');main.scrollIntoView?.({block:'start',behavior:'instant'});}
g.dersAc=function(n){
 if(transition||!Number.isInteger(n)||n<1||n>lessons.length)return;
 if(g.NoirLessons){g.NoirLessons.enter({language:'C#',number:g.CSharpCaseNumber(n),artNumber:n,title:lessons[n-1].baslik},()=>enter(n));return;}
 if(reduced||!g.requestAnimationFrame){enter(n);return;}
 current=n-1;sync('home');const w=g.innerWidth||1000,h=g.innerHeight||800,x=w/2,y=h/2,r=Math.hypot(x,y)+4;
 const overlay=document.createElementNS('http://www.w3.org/2000/svg','svg'),shade=document.createElementNS('http://www.w3.org/2000/svg','path');overlay.setAttribute('class','cc-iris-transition');overlay.setAttribute('viewBox',`0 0 ${w} ${h}`);overlay.setAttribute('preserveAspectRatio','none');overlay.setAttribute('aria-hidden','true');shade.setAttribute('fill-rule','evenodd');overlay.append(shade);document.body.append(overlay);
 const overflow=document.body.style.overflow;document.body.style.overflow='hidden';let start=null,raf=null,entered=false;
 const clean=()=>{if(raf!==null)g.cancelAnimationFrame?.(raf);overlay.remove();document.body.style.overflow=overflow;transition=null;};transition={clean};
 function hole(size){const outer=`M0 0H${w}V${h}H0Z`;shade.setAttribute('d',size<=0?outer:outer+` M${x-size} ${y}a${size} ${size} 0 1 0 ${size*2} 0a${size} ${size} 0 1 0 ${-size*2} 0Z`);}
 function frame(now){if(start===null)start=now;const elapsed=now-start;if(elapsed<480){const u=elapsed/480;hole(r*(1-u*u*(3-2*u)));}else{if(!entered){entered=true;hole(0);try{enter(n);}catch(error){clean();throw error;}}const u=Math.min(1,Math.max(0,(elapsed-600)/560));hole(r*u*u*(3-2*u));if(u===1){clean();return;}}raf=g.requestAnimationFrame(frame);}hole(r);raf=g.requestAnimationFrame(frame);
};
// Dersin mevcut puanlama işlevleri korunur; yalnızca kazanılan XP görselleştirilir.
['kontrol','kontrolBoss','kontrolExtra','kontrolKod','kontrolOrnekYaz','kontrolOrnekSayi','hataKontrol','panelGuncelle'].forEach(name=>{const original=g[name];if(typeof original==='function')g[name]=function(){const result=original.apply(this,arguments);reward();return result;};});
const originalFinish=g.bitir;g.bitir=function(){originalFinish();sync('case');state.xp=g.kayit.xp;journey.update(state);journey.complete();if(g.OT?.ders.n===6){const next=main.querySelector('[onclick="dersAc(7)"]');if(next){next.removeAttribute('onclick');next.textContent='7. VAKA: KUTULARLA KOD YAZMA →';next.onclick=()=>openPractice(7);}}if(g.OT?.ders.n===7){const next=main.querySelector('[onclick="dersAc(8)"]');if(next){next.removeAttribute('onclick');next.textContent='11. VAKA: KOLAY IF / ELSE →';next.onclick=()=>openPractice(10);}}if(g.OT?.ders.n===12){const next=main.querySelector('[onclick="dersAc(13)"]');if(next){next.removeAttribute('onclick');next.textContent='20. VAKA: ÜNİTE 2 BİTİRME PROJESİ →';next.onclick=()=>openPractice(19);}}if(g.OT?.ders.n===8){const next=main.querySelector('[onclick="dersAc(9)"]');if(next){next.removeAttribute('onclick');next.textContent='15. VAKA: GECE EKSPRESİ →';next.onclick=()=>openPractice(14);}}};
const arrayPreviousFinish=g.bitir;g.bitir=function(){arrayPreviousFinish.apply(this,arguments);if(g.OT?.ders.n===14){const next=main.querySelector('[onclick="dersAc(15)"]');if(next){next.removeAttribute('onclick');next.textContent='23. VAKA: DELİL RAFI →';next.onclick=()=>openPractice(23);}}};
const methodPreviousFinish=g.bitir;g.bitir=function(){methodPreviousFinish.apply(this,arguments);if(g.OT?.ders.n===15){const next=main.querySelector('[onclick="dersAc(16)"]');if(next){next.removeAttribute('onclick');next.textContent='25. VAKA: BÜRONUN ARAÇLARI →';next.onclick=()=>openPractice(25);}}};
const finalPreviousFinish=g.bitir;g.bitir=function(){finalPreviousFinish.apply(this,arguments);if(g.OT?.ders.n===16){const next=main.querySelector('[onclick="dersAc(17)"]');if(next){next.removeAttribute('onclick');next.textContent='27. VAKA: ARŞİV FİNALİ →';next.onclick=()=>openPractice(27);}}};
g.menuDoldur=function(){const host=document.getElementById('menu-liste');host.replaceChildren();entries.forEach((entry,i)=>{const done=entry.practice?extraDone(entry.caseNo):g.kayit.biten.includes(entry.lesson.n),link=E('a');link.href='#';if(done)link.className='bitti';link.append(E('span',done?'★':String(i+1),'n'),document.createTextNode('Vaka '+(i+1)+': '+entry.title));link.onclick=event=>{event.preventDefault();g.menuKapat();entry.practice?openPractice(entry.caseNo):g.dersAc(entry.lesson.n);};host.append(link);});};
g.addEventListener?.('pagehide',()=>{transition?.clean();journey.stop();});
g.CSharpNoir={journey,state,sync,selectPractice(which=7){practiceSelected=which;state.current=practicePosition(which);journey.update(state);}};
if(g.OT&&document.body.classList.contains('dersmodu')){current=g.OT.ders.n-1;sessionXP=g.OT.xp||0;sync('case');}else g.patika();
})(window);

