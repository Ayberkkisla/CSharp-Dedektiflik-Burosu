(() => {
 const nav=document.querySelector('.site-nav');
 if(nav&&document.body){
  document.documentElement.style.setProperty('--site-nav-height','0px');nav.classList.add('site-nav-autohide');nav.id='site-top-navigation';
  const edge=document.createElement('div'),handle=document.createElement('button');edge.className='site-nav-edge';handle.className='site-nav-handle';handle.type='button';handle.textContent='☰';handle.setAttribute('aria-label','Büro ve ders menüsünü aç');handle.setAttribute('aria-controls',nav.id);handle.setAttribute('aria-expanded','false');edge.append(handle);document.body.append(edge);
  let timer=null,opened=false;
  function show(value){clearTimeout(timer);opened=value;nav.classList.toggle('is-visible',value);nav.inert=!value;handle.setAttribute('aria-expanded',String(value));edge.classList.toggle('is-visible',value);}
  function delayClose(){clearTimeout(timer);timer=setTimeout(()=>{if(!nav.contains(document.activeElement))show(false);},220);}
  edge.addEventListener('pointerenter',event=>{if(event.pointerType!=='touch')show(true);});
  edge.addEventListener('pointerleave',delayClose);nav.addEventListener('pointerenter',()=>show(true));nav.addEventListener('pointerleave',delayClose);
  handle.addEventListener('click',()=>show(!opened));
  handle.addEventListener('keydown',event=>{if(event.key==='ArrowDown'){event.preventDefault();show(true);nav.querySelector('a')?.focus();}});
  nav.addEventListener('focusin',()=>show(true));nav.addEventListener('focusout',event=>{if(!nav.contains(event.relatedTarget))delayClose();});
  document.addEventListener('keydown',event=>{if(event.key==='Escape'&&opened){handle.focus();show(false);}});
  document.addEventListener('click',event=>{if(!nav.contains(event.target)&&!edge.contains(event.target))show(false);});
  show(false);
 }
 function load(key){try{return JSON.parse((window.NoirProgress||localStorage).getItem(key)||'null');}catch(_){return null;}}
 const a=load('cnoir'),b=load('cnoir-linked-list')?.privateContent,w=load('cnoir-writing'),p=load('cnoir-practice'),f=load('cnoir-format'),v=load('cnoir-cases');
 const cs=document.getElementById('home-csharp-progress'),cl=document.getElementById('home-c-progress'),total=document.getElementById('home-total');
 if(cs)cs.textContent=`${Array.isArray(a?.biten)?a.biten.length:0} dosya çözüldü · ${Number(a?.xp)||0} XP`;
 const matched=p?.matched&&typeof p.matched==='object'?Object.values(p.matched).filter(Boolean).length:0;
 if(cl)cl.textContent=`${Array.isArray(v?.done)?v.done.length:0}/16 vaka · ${(Number(b?.xp)||0)+(Number(w?.xp)||0)+(Number(p?.xp)||0)+(Number(f?.xp)||0)+(Number(v?.xp)||0)} XP`;
 if(total)total.textContent=`⚡ Toplam ${(Number(a?.xp)||0)+(Number(b?.xp)||0)+(Number(w?.xp)||0)+(Number(p?.xp)||0)+(Number(f?.xp)||0)+(Number(v?.xp)||0)} XP · Aynı büro, iki bölüm`;
})();

