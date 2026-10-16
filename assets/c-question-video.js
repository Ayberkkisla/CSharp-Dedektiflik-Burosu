(function(g){
'use strict';
const players=new Set(),memory=new Map();let narrationEnabled=false;
function E(tag,text,cls){const e=document.createElement(tag);if(text!==undefined)e.textContent=text;if(cls)e.className=cls;return e;}
function action(t,input){const value=input.value;return ({basa:`${value} sayısını listenin başına ekle.`,sona:`${value} sayısını listenin sonuna ekle.`,yazdir:'head’den başlayarak listedeki sayıları yazdır.','ilk-sil':'Listenin ilk düğümünü sil.','son-sil':'Listenin son düğümünü sil.','deger-sil':`${value} sayısını taşıyan ilk düğümü sil.`,besinci:`Baştan sayarak ${t.position||5}. düğümü sil.`,birlestir:'İkinci listeyi birinci listenin sonuna bağla.','daire-basa':`${value} sayısını dairesel listenin başına ekle.`,'daire-sona':`${value} sayısını dairesel listenin sonuna ekle.`,'daire-ilk-sil':'Dairenin ilk düğümünü sil.','daire-deger-sil':`${value} sayısını taşıyan ilk düğümü daireden sil.`})[t.baseId||t.id];}
function stopAll(){players.forEach(stop=>stop());players.clear();}
function mount(parent,t,input,options={}){
 const reduced=!!g.matchMedia?.('(prefers-reduced-motion: reduce)').matches,key=t.id+':'+options.kind+':'+JSON.stringify(input.a)+':'+JSON.stringify(input.b)+':'+input.value;
 const frame=g.CVisual.frames(t,input)[0],initialCount=frame.nodes.length;
 const adding=t.code.includes('malloc');if(adding){frame.nodes.push({id:'incoming',value:input.value,alive:true});frame.edges.incoming='unset';frame.pointers[options.renamed?'ek':'yeni']='incoming';}
 frame.headName=(t.baseId||t.id)==='birlestir'?'head1':'head';if(options.renamed){frame.headName=(t.baseId||t.id)==='birlestir'?'bas1':'bas';frame.secondName='bas2';}
 const width=Math.max(600,70+frame.nodes.length*136),box=E('section',undefined,'cq-video'),heading=E('div',undefined,'cq-video-head');heading.append(E('span','▶ SORU FİLMİ','cq-label'),E('span','Önce izle · Sonra sen çöz','cq-muted'));box.append(heading);
 const screen=E('div',undefined,'cq-screen'),canvas=E('div',undefined,'cv-canvas cq-canvas'),scene=g.CVisual.svg(frame,width);const navigation=g.CVisual.navigationView(canvas,scene);canvas.append(scene);screen.append(navigation.controls,canvas);
 const ring=document.createElementNS('http://www.w3.org/2000/svg','rect');[['width',122],['height',68],['rx',16],['fill','none'],['stroke','#ffd489'],['stroke-width',3],['class','cq-scan']].forEach(([k,v])=>ring.setAttribute(k,v));scene.append(ring);
 const operation=E('div',undefined,'cq-operation');operation.append(E('small','YAPILACAK İŞLEM'),E('b',action(t,input)));if(t.code.includes('malloc'))operation.append(E('span','Yeni sayı: '+input.value+' · bellek ayırma başarılı'));screen.append(operation);
 const subtitles=E('div',undefined,'cq-subtitles'),mascot=E('img'),spoken=E('p');mascot.src='assets/dedektif-nokta.svg';mascot.alt='Dedektif Nokta anlatıyor';mascot.width=48;mascot.height=48;subtitles.append(mascot,spoken);screen.append(subtitles);
 const study=E('div',undefined,'cq-study');study.append(screen);box.append(study);let codeRows=[],pinned=null;
 const panel=E('aside',undefined,'cq-code-panel');panel.append(E('small','BU SORUDA ÇALIŞACAK C KODU','cq-label'));
 let call=(t.baseId||t.id)==='birlestir'?'head1 = '+t.call.replace(/\bhead\b/g,'head1').replace(/\bikinci\b/g,'head2')+';':(t.id==='yazdir'?'':'head = ')+t.call.replace(/\bdeger\b/g,String(input.value))+';';if(options.renamed)call=g.CCaseTools.rename(call);panel.append(E('pre',call,'cq-call'));
 const note=E('p',undefined,'cq-code-note');
 if(options.kind!=='code'){
  const lesson=g.CCaseLessons?.find(c=>c.task.id===t.id),listing=E('div',undefined,'cq-code-list');listing.setAttribute('aria-label','Sorunun satır numaralı C fonksiyonu');
  codeRows=t.code.split('\n').map((line,i)=>{const row=E('button',undefined,'cq-code-row');row.type='button';row.setAttribute('aria-label','Satır '+(i+1)+': '+line);row.append(E('span',String(i+1),'cq-line-number'),E('code',line));row.addEventListener('click',()=>{pinned=i;note.textContent=lesson?.annotation[i]?.why||line;codeRows.forEach((r,j)=>r.className='cq-code-row'+(i===j?' is-active':''));});listing.append(row);return row;});panel.append(listing);
 }else panel.append(E('p','Satır numaralı fonksiyon aşağıda. Üç boşluğu sen tamamlayacaksın.','cq-code-note'));
 panel.append(note);study.append(panel);
 const controls=E('div',undefined,'cq-controls'),play=E('button',undefined,'cw-btn gold'),seek=E('input'),clock=E('span',undefined,'cq-time'),repeat=E('button','↻ Tekrar izle','cw-btn secondary');play.type=repeat.type='button';seek.type='range';seek.min=0;seek.max=100;seek.step=.1;seek.setAttribute('aria-label','Soru filminin zaman çizelgesi');controls.append(play,seek,clock,repeat);box.append(controls);
 let audio=narrationEnabled,lastSpoken=-1;const canSpeak=!!(g.speechSynthesis&&g.SpeechSynthesisUtterance);
 function narrationLines(phase){
  if(phase===0)return input.b?['Önce iki listeye bakalım.','Üstteki birinci liste. Alttaki ikinci liste.','Baş işaretçileri, her listenin ilk düğümünü gösteriyor.']:input.a.length?['Önce elimizdeki listeye bakalım.','Her kutu bir düğüm. Oklar da bir sonraki düğümü gösteriyor.']:['Burada liste boş.','Baş işaretçisi hiçbir düğümü göstermiyor.'];
  if(phase===1)return [action(t,input).replace(/(\d+)\. düğümü/g,'$1 numaralı düğümü'),...(t.circular?['Son düğümün oku, yeniden başa dönüyor.']:input.b?['Birinci listenin ardından ikinci liste gelecek.']:[])];
  return options.kind==='code'?['Şimdi sıra sende.','Aşağıdaki üç boşluğu tamamla.']:['Şimdi sıra sende.',t.id==='yazdir'?'Kod çalışınca, ekrana hangi sayılar yazılır?':'Kod bu listede çalışınca, hangi düğümler kalır?','Aşağıdan cevabını seç.'];
 }
 function narrate(){
  if(!audio||!canSpeak)return;
  const phase=elapsed/duration<.35?0:elapsed/duration<.78?1:2;
  const voices=g.speechSynthesis.getVoices().filter(v=>v.lang.toLowerCase().startsWith('tr'));
  const turkish=voices.find(v=>/natural|neural|online|google/i.test(v.name))||voices.find(v=>v.default)||voices[0];
  // Yeni sahne başlayınca önceki cümleyi kesme; ses motoru sırayla bitirsin.
  narrationLines(phase).forEach(text=>{const utterance=new g.SpeechSynthesisUtterance(text);utterance.lang='tr-TR';utterance.rate=1;utterance.pitch=1;if(turkish)utterance.voice=turkish;g.speechSynthesis.speak(utterance);});
 }
 if(canSpeak){const sound=E('button',audio?'🔊 Sesi kapat':'🔈 Sesli anlatımı aç','cw-btn secondary');sound.type='button';sound.setAttribute('aria-pressed',String(audio));sound.addEventListener('click',()=>{audio=!audio;narrationEnabled=audio;sound.textContent=audio?'🔊 Sesi kapat':'🔈 Sesli anlatımı aç';sound.setAttribute('aria-pressed',String(audio));if(audio)narrate();else g.speechSynthesis.cancel();});controls.append(sound);}
 const ask=E('div',undefined,'cq-ask');ask.append(E('small',options.kind==='code'?'ŞİMDİ KODU SEN TAMAMLA':'ŞİMDİ SONUCU SEN BUL'),E('b',options.kind==='code'?'Bu işlemi yapan fonksiyondaki üç boşluğa hangi satırlar gelmeli?':t.id==='yazdir'?'Bu işlem ekrana hangi sayıları yazar?':'Bu işlem bitince liste nasıl görünür?'));box.append(ask);
 parent.append(box);const closeFocus=g.CVisual.focusView(box,heading),duration=10500;let elapsed=memory.get(key)||0,playing=false,raf=null,last=null,gsapClock=null;
 const request=g.requestAnimationFrame?fn=>g.requestAnimationFrame(fn):fn=>setTimeout(()=>fn(Date.now()),16),cancel=g.cancelAnimationFrame?x=>g.cancelAnimationFrame(x):clearTimeout;
 function clear(){gsapClock?.kill();gsapClock=null;if(raf!==null)cancel(raf);raf=null;last=null;}
 function paint(){const p=Math.min(1,elapsed/duration),phase=p<.35?0:p<.78?1:2;
  play.textContent=playing?'⏸ Duraklat':p===1?'▶ Yeniden oynat':'▶ Oynat';seek.value=String(p*100);clock.textContent='0:'+String(Math.floor(elapsed/1000)).padStart(2,'0')+' / 0:10';
  spoken.textContent=phase===0?(input.b?'Üstte birinci liste, altta ikinci liste var. head1 ve head2 bu listelerin başlarını gösteriyor.':input.a.length?'Bunlar başlangıç düğümleri. head ilk düğümü gösterir. Oklar bir sonraki adresi tutar.':'Bu liste boş. head = NULL; üzerinde işlem yapılacak bir düğüm yok.'):(phase===1?action(t,input)+(t.circular?' Listenin dairesel olduğunu unutma.':input.b?' İki listenin sırasını koru.':''):'Burada duruyoruz. İşlem henüz uygulanmadı; sonucu aşağıda sen seç.');
  if(playing&&lastSpoken!==phase){lastSpoken=phase;narrate();}
  operation.className='cq-operation'+(phase>=1?' is-visible':'');
  if(pinned===null){note.textContent=options.kind==='code'?'Önce çağrıdaki sayıya ve liste başına bak. Sonra aşağıdaki boşlukları doldur.':phase===0?'Fonksiyon başlığı ve başlangıç kontrolleri burada. Bir satıra dokunarak açıklamasını görebilirsin.':phase===1?'İşlemi yapan atama, bağlantı ve bellek satırlarını incele.':'Kod sende: koşulları bu başlangıç listesiyle değerlendir ve sonucu seç.';codeRows.forEach((row,i)=>{const line=t.code.split('\n')[i].trim(),active=phase===0?(i===0||/^if \(head/.test(line)):phase===1?(/ = |->next = |free\(|printf\(/.test(line)&&i!==0):/^return /.test(line);row.className='cq-code-row'+(active?' is-active':'');});}
  if(adding){const node=scene._cvParts['node:incoming'],pointer=scene._cvParts['pointer:'+(options.renamed?'ek':'yeni')],appear=Math.max(0,Math.min(1,(p-.35)/.16));node.setAttribute('opacity',appear);node.setAttribute('transform',`translate(${(1-appear)*180} 0)`);pointer?.setAttribute('opacity',appear);}
  const nodes=frame.nodes.slice(0,initialCount).map(n=>scene._cvPositions['node:'+n.id]);const step=nodes.length?Math.min(nodes.length-1,Math.max(0,p/.35)*(nodes.length-1)):0,first=nodes[Math.floor(step)],second=nodes[Math.min(nodes.length-1,Math.ceil(step))];
  if(first&&second&&phase===0){const u=step-Math.floor(step),x=first.x+(second.x-first.x)*u,y=first.y+(second.y-first.y)*u;ring.setAttribute('x',x-5);ring.setAttribute('y',y-5);ring.setAttribute('opacity',1);if(!reduced){const view=scene.viewBox?.baseVal,pixelWidth=scene.clientWidth||width,pixelHeight=scene.clientHeight||330,ratio=Math.min(pixelWidth/(view?.width||width),pixelHeight/(view?.height||510));navigation.camera(Math.max(0,(pixelWidth-(view?.width||width)*ratio)/2+(x+56)*ratio-(canvas.clientWidth||width)/2));}}else ring.setAttribute('opacity',0);
  scene.setAttribute('aria-label','Sorunun başlangıç listesi. '+action(t,input));memory.set(key,elapsed);
 }
 function tick(now){raf=null;if(box.isConnected===false){dispose();players.delete(dispose);return;}const dt=last===null?0:Math.min(100,now-last);last=now;elapsed=Math.min(duration,elapsed+dt);if(elapsed===duration)playing=false;paint();if(playing)raf=request(tick);}
 function stop(){playing=false;clear();if(audio&&canSpeak)g.speechSynthesis.cancel();memory.set(key,elapsed);}
 function dispose(){closeFocus();stop();}
 function pause(){stop();paint();}
 function start(){clear();if(elapsed>=duration)elapsed=0;lastSpoken=-1;playing=true;paint();
  if(g.gsap){const clockState={time:elapsed};gsapClock=g.gsap.to(clockState,{time:duration,duration:(duration-elapsed)/1000,ease:'none',onUpdate:()=>{if(box.isConnected===false){dispose();players.delete(dispose);return;}elapsed=clockState.time;paint();},onComplete:()=>{elapsed=duration;playing=false;gsapClock=null;paint();}});}else raf=request(tick);
 }
 play.addEventListener('click',()=>playing?pause():start());repeat.addEventListener('click',()=>{stop();elapsed=0;start();});seek.addEventListener('input',()=>{const chosen=Number(seek.value);pause();elapsed=chosen/100*duration;paint();});
 players.add(dispose);paint();if(!reduced&&!memory.get(key)&&options.autoplay!==false)start();return box;
}
g.addEventListener?.('pagehide',stopAll);g.CQuestionVideo={mount,stopAll,action};
})(window);
