(function(g){
'use strict';
if(!g.DERSLER||!g.CJourney)return;
const lessons=g.DERSLER,main=document.getElementById('orta'),root=document.createElement('section');root.className='cs-world';root.id='cs-world';main.parentNode.insertBefore(root,main);document.body.classList.add('cs-noir');
function E(tag,text,cls){const e=document.createElement(tag);if(text!==undefined)e.textContent=text;if(cls)e.className=cls;return e;}
const heading=E('header',undefined,'cs-world-heading'),text=E('div');text.append(E('small','C# · GECE VARDİYASI'),E('h1','Şehrin kodlarını çöz.'),E('p',lessons.length+' dosya, 4 bölge. Bir dosya seç; dersi incele, kanıtları çöz ve dosyayı kapat.'));const stats=E('strong',undefined,'cs-world-stats');heading.append(text,stats);root.append(heading);
const districts=E('div',undefined,'cs-districts');g.UNITELER.forEach(u=>{const b=E('button',u[2]+' · '+u[0]+'–'+u[1]);b.type='button';b.addEventListener('click',()=>{const node=mapHost.querySelectorAll('.cj-stop')[u[0]-1];node?.scrollIntoView({block:'center',inline:'center',behavior:reduced?'instant':'smooth'});});districts.append(b);});root.append(districts);
const mapHost=E('div',undefined,'cs-map');root.append(mapHost);const reduced=!!g.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
let current=0;try{const saved=Number((window.NoirProgress||localStorage).getItem('csharp-noir-case'));if(Number.isInteger(saved)&&saved>=0&&saved<lessons.length)current=saved;}catch(_){}
const state={current,view:'home',xp:g.kayit.xp,done:g.kayit.biten.map(n=>n-1)};
const journey=g.CJourney.mount(mapHost,lessons.map(d=>({task:{title:d.baslik}})),state,i=>g.dersAc(i+1),{label:'NOKTA’NIN C# SORUŞTURMA HARİTASI',intro:'Tüm dosyalar açık. İstediğin vakayı seç; yeşil mühür tamamladığın vakaları gösterir.'});
let sessionXP=0,transition=null;
function sync(view){state.current=current;state.view=view||state.view;state.xp=g.kayit.xp+(state.view==='case'?(g.OT?.xp||0):0);state.done=g.kayit.biten.map(n=>n-1);stats.textContent='⚡ '+g.kayit.xp+' XP · '+g.kayit.biten.length+'/'+lessons.length+' vaka';journey.update(state);root.classList.toggle('is-lesson',state.view==='case');}
function reward(){const now=g.OT?.xp||0,delta=now-sessionXP;sessionXP=now;if(delta>0)journey.reward(delta);sync();}
g.patika=function(){document.body.classList.remove('dersmodu');document.body.classList.add('cs-map-home');document.getElementById('ust').replaceChildren();main.replaceChildren();g.bantKapat();document.getElementById('balon').classList.remove('goster');sync('home');g.menuDoldur();g.scrollTo(0,0);};
const originalOpen=g.dersAc;
function enter(n){current=n-1;sessionXP=0;try{(window.NoirProgress||localStorage).setItem('csharp-noir-case',String(current));}catch(_){}document.body.classList.remove('cs-map-home');originalOpen(n);sync('case');main.scrollIntoView?.({block:'start',behavior:'instant'});}
g.dersAc=function(n){
 if(transition||!Number.isInteger(n)||n<1||n>lessons.length)return;
 if(g.NoirLessons){g.NoirLessons.enter({language:'C#',number:n,title:lessons[n-1].baslik},()=>enter(n));return;}
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
const originalFinish=g.bitir;g.bitir=function(){originalFinish();sync('case');state.xp=g.kayit.xp;journey.update(state);journey.complete();};
g.addEventListener?.('pagehide',()=>{transition?.clean();journey.stop();});
g.CSharpNoir={journey,state,sync};
if(g.OT&&document.body.classList.contains('dersmodu')){current=g.OT.ders.n-1;sessionXP=g.OT.xp||0;sync('case');}else g.patika();
})(window);
