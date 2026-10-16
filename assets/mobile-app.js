(function(){
 'use strict';
 let promptEvent=null;
 const standalone=()=>matchMedia('(display-mode: standalone)').matches||navigator.standalone===true;
 const main=document.querySelector('.bureau-content');
 let card,button,help;
 if(main&&!standalone()){
  card=document.createElement('section');card.className='noir-app-card';card.setAttribute('aria-label','Telefona uygulama olarak ekle');
  const copy=document.createElement('div'),title=document.createElement('strong'),description=document.createElement('p');title.textContent='Büro artık cebinde.';description.textContent='Ana ekranına ekle. Dikey veya yatay kullan; dosyana kaldığın yerden devam et.';copy.append(title,description);
  button=document.createElement('button');button.type='button';button.className='noir-app-install';button.textContent='＋ Telefona ekle';button.setAttribute('aria-expanded','false');button.setAttribute('aria-controls','noir-install-help');
  help=document.createElement('p');help.id='noir-install-help';help.className='noir-app-help';help.hidden=true;help.setAttribute('role','status');copy.append(help);
  button.addEventListener('click',async()=>{
   if(promptEvent){const event=promptEvent;promptEvent=null;button.disabled=true;try{await event.prompt();const result=await event.userChoice;if(result.outcome==='accepted')card.hidden=true;}catch(_){showHelp();}finally{button.disabled=false;}return;}
   showHelp();
  });
  function showHelp(){help.hidden=!help.hidden;button.setAttribute('aria-expanded',String(!help.hidden));help.textContent=/iPad|iPhone|iPod/.test(navigator.userAgent)?'Safari’de Paylaş düğmesine, ardından Ana Ekrana Ekle seçeneğine dokun.':'Tarayıcının ⋮ menüsünden Uygulamayı yükle veya Ana ekrana ekle seçeneğini seç. Kurulum seçeneği yoksa siteyi tarayıcıda kullanmaya devam edebilirsin.';}
  card.append(copy,button);const hero=main.querySelector('.bureau-hero');if(hero)hero.after(card);else main.prepend(card);
 }
 window.addEventListener('beforeinstallprompt',event=>{if(!button)return;event.preventDefault();promptEvent=event;button.textContent='＋ Uygulamayı yükle';});
 window.addEventListener('appinstalled',()=>{promptEvent=null;if(card)card.hidden=true;});
 const heading=document.querySelector('.cw-heading,.cs-world-heading');
 if(heading){const tip=document.createElement('p');tip.className='noir-rotate-tip';tip.textContent='↻ Kodları daha geniş görmek için telefonunu yatay çevirebilirsin.';heading.after(tip);}
 if(location.protocol==='https:'&&'serviceWorker' in navigator){window.addEventListener('load',()=>{navigator.serviceWorker.register('./sw.js').catch(()=>{});});}
})();
