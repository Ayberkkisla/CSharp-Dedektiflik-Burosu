(function(g){
'use strict';
function frames(t,input,position){
 if(t.doubly)return g.CDoubly.frames(t,input);
 position=position||t.position||5; t={...t,id:t.baseId||t.id};
 const nodes=input.a.map((value,i)=>({id:'a'+i,value,alive:true})),edges={},pointers={};let head=nodes[0]?.id||null,second=null;const out=[];
 nodes.forEach((n,i)=>edges[n.id]=nodes[i+1]?.id||(t.circular?head:null));
 if(input.b){const b=input.b.map((value,i)=>({id:'b'+i,value,alive:true}));second=b[0]?.id||null;b.forEach((n,i)=>edges[n.id]=b[i+1]?.id||null);nodes.push(...b);}
 function push(title,caption,code,focus=[],changed=[]){const aliases=t.id==='ilk-sil'?{silinecek:'temp'}:t.id==='daire-ilk-sil'?{silinecek:'eski',temp:'son'}:t.id==='daire-deger-sil'?{silinecek:'simdiki',temp:'onceki'}:t.id==='deger-sil'&&input.a[0]===input.value?{silinecek:'eski'}:{};const shown={};Object.entries(pointers).forEach(([name,id])=>shown[aliases[name]||name]=id);code=code.replace(/\b(temp|silinecek)\b/g,x=>aliases[x]||x);out.push(JSON.parse(JSON.stringify({title,caption,code,nodes,edges,head,second,pointers:shown,focus,changed,circular:!!t.circular})));}
 const first=head;push('Başlangıç','head ilk kutunun adresini tutuyor. Kutunun sol tarafı data, sağ tarafı next adresidir.','',head?[head]:[]);
 if(t.id==='yazdir'){
  let p=head,printed=[];pointers.temp=p;push('Gezici başta','temp ile head aynı düğümü gösterir. Düğümler kopyalanmaz.','struct node *temp = head;',p?[p]:[]);
  for(let i=0;i<input.a.length;i++){printed.push(nodes.find(n=>n.id===p).value);push('Veriyi oku','Ekran: '+printed.join(' '),'printf("%d ", temp->data);',[p]);p=edges[p];pointers.temp=p;push('Oku izle',p?'temp bir sonraki kutuya geçti.':'temp NULL oldu; döngü biter.','temp = temp->next;',p?[p]:[]);}return out;
 }
 if(['basa','sona','daire-basa','daire-sona'].includes(t.id)){
  const n={id:'new',value:'?',alive:true};nodes.push(n);edges.new='unset';pointers.yeni='new';push('Yeni bellek','malloc ayrı bir kutu ayırır. Diğer kutular henüz değişmedi. Başarılı ayırma varsayılıyor.','struct node *yeni = malloc(sizeof *yeni);',['new']);n.value=input.value;push('Sayıyı yerleştir','Yalnızca data alanı değişti; bağlantı daha kurulmadı.','yeni->data = deger;',['new']);
  if(t.circular&&!head){edges.new='new';push('Tek düğümlü daire','Yeni kutunun oku kendi üzerine döner.','yeni->next = yeni;',['new'],['new']);head='new';push('Yeni baş','Tek kutu hem ilk hem son oldu.','return yeni;',['new']);return out;}
  let last=head;if(t.id!=='basa'){pointers.temp=head;for(let i=0;i<input.a.length-1;i++){last=edges[last];pointers.temp=last;push('Sonu bul','Gezici next okunu izliyor.','temp = temp->next;',[last]);}}
  if(t.id==='basa'||t.id==='daire-basa'){edges.new=head;push('Eski başı koru','Yeni kutunun oku eski ilk kutuya gider. head henüz değişmedi.','yeni->next = head;',['new'],['new']);if(t.circular){edges[last]='new';push('Dönüş okunu taşı','Eski son artık yeni kutuya dönüyor.','temp->next = yeni;',[last,'new'],[last]);}head='new';push('Başı değiştir','Çağıran dönen yeni adresi head’e atar.','return yeni;',['new']);}
  else{edges.new=t.circular?head:null;push('Yeni sonun devamı',t.circular?'Yeni sonun oku başa döner.':'Yeni sonun devamı NULL olur.','yeni->next = '+(t.circular?'head':'NULL')+';',['new'],['new']);if(last){edges[last]='new';push('Eski sonu bağla','Eski sonun next adresi yeni kutuyu gösterir.','temp->next = yeni;',[last,'new'],[last]);}else head='new';push('Sonuç',first?'İlk kutu ve head değişmedi.':'Boş listede yeni kutu head oldu.','return '+(first?'head':'yeni')+';',head?[head]:[]);}return out;
 }
 if(t.id==='birlestir'){
  let last=head;if(!head){head=second;second=null;push('İlk liste boş','İkinci listenin başı sonuç olur.','return head2;',head?[head]:[]);return out;}
  pointers.temp=head;for(let i=0;i<input.a.length-1;i++){last=edges[last];pointers.temp=last;push('İlk sonu bul','İlk listenin son kutusunda dururuz.','temp = temp->next;',[last]);}
  edges[last]=second;push('İki zinciri bağla','Birinci sonun next alanına ikinci başın adresi yazıldı. Düğüm silinmez veya kopyalanmaz.','temp->next = head2;',[last,...(second?[second]:[])],[last]);second=null;push('Sonuç','İki liste artık tek zincir; sonuç üzerinden bir kez temizlenir.','return head1;',[head]);return out;
 }
 if(!head){push('Boş liste','Düğüm yok; data veya next okunmadan dönülür.','if (head == NULL) return NULL;');return out;}
 let index=t.id==='son-sil'?input.a.length-1:t.id==='besinci'?position-1:['deger-sil','daire-deger-sil'].includes(t.id)?input.a.indexOf(input.value):0;
 if(index<0||index>=input.a.length){pointers.temp=head;for(let i=0;i<input.a.length;i++){pointers.temp='a'+i;push('Kontrol et','Bu düğüm hedef değil. Bağlantılar korunur.','temp = temp->next;',['a'+i]);}push('Silinecek düğüm yok','Arama/kısa liste kontrolü bitti; liste aynı kalır.','return head;');return out;}
 const target='a'+index,prev=index>0?'a'+(index-1):t.circular?'a'+(input.a.length-1):null,next=edges[target];
 if(prev&&prev!==target){pointers.temp=head;for(let i=0;i<(index===0?input.a.length-1:index-1);i++){pointers.temp='a'+(i+1);push('Önceki düğümü bul','Silinecek kutudan önceki bağlantıyı değiştireceğiz.','temp = temp->next;',['a'+(i+1)]);}pointers.temp=prev;}
 pointers.silinecek=target;push('Adresi sakla','Silinecek kutu hâlâ bellekte. Adresini ayrı işaretçide tutuyoruz.','struct node *silinecek = '+(index===0?'head':'temp->next')+';',[target]);
 if(input.a.length===1){head=null;push('Baş boş olur','Tek düğüm çıkınca head NULL olacaktır.','/* yeni baş: NULL */',[target]);}
 else if(index===0){head=next;push('Yeni baş','head, silinecek kutunun devamına geçti.','head = head->next;',[head]);if(t.circular){edges[prev]=head;push('Daireyi yeni başa bağla','Eski sonun oku yeni başa taşındı.','son->next = head;',[prev,head],[prev]);}}
 else{edges[prev]=next;push('Kutuyu atlat','Önceki kutunun oku silinecek kutunun devamına gider. Silinecek kutu henüz free edilmedi.','temp->next = silinecek->next;',[prev,target],[prev]);}
 nodes.find(n=>n.id===target).alive=false;delete edges[target];push('Belleği geri ver','Çizili kutu artık kullanılamaz. Kalan bağlantılar korunur.','free(silinecek);',[target]);push('Sonuç','Güncel baş döndürülür; silinen kutunun alanları tekrar okunmaz.','return head;',head?[head]:[]);return out;
}
function E(tag,text,cls){const e=document.createElement(tag);if(text!==undefined)e.textContent=text;if(cls)e.className=cls;return e;}
function focusView(box,heading){
 const button=E('button','⛶ Tek ekranda aç','cw-btn secondary cv-focus-toggle');button.type='button';button.setAttribute('aria-expanded','false');heading.append(button);let open=false,overflow='';
 function close(){if(!open)return;open=false;box.className=box.className.replace(' cv-focus-view','');button.textContent='⛶ Tek ekranda aç';button.setAttribute('aria-expanded','false');if(document.body)document.body.style.overflow=overflow;g.removeEventListener?.('keydown',escape);}
 function escape(event){if(event.key==='Escape'){close();button.focus?.({preventScroll:true});}}
 button.addEventListener('click',()=>{if(open){close();return;}open=true;overflow=document.body?.style.overflow||'';if(document.body)document.body.style.overflow='hidden';box.className+=' cv-focus-view';button.textContent='✕ Normal görünüme dön';button.setAttribute('aria-expanded','true');g.addEventListener?.('keydown',escape);});return close;
}
let serial=0;
function navigationView(canvas,scene){
 const controls=E('div',undefined,'cv-view-controls'),status=E('span','100%','cv-zoom-label');let zoom=1,base=null,following=false,drag=null;const original={width:scene.style.width||'',height:scene.style.height||'',minWidth:scene.style.minWidth||''};
 const follow=E('button','◎ Takip kapalı','cv-view-button');follow.type='button';follow.setAttribute('aria-pressed','false');
 function manual(){following=false;follow.textContent='◎ Takip kapalı';follow.setAttribute('aria-pressed','false');}
 function button(text,label,action){const b=E('button',text,'cv-view-button');b.type='button';b.setAttribute('aria-label',label);b.addEventListener('click',action);controls.append(b);return b;}
 function changeZoom(delta){manual();if(!base)base={width:scene.clientWidth||parseFloat(original.minWidth)||640,height:scene.clientHeight||340};const next=Math.max(.6,Math.min(2.6,Math.round((zoom+delta)*10)/10)),old=zoom;scene.style.width=base.width*next+'px';scene.style.minWidth=base.width*next+'px';scene.style.height=base.height*next+'px';canvas.scrollLeft=(canvas.scrollLeft+(canvas.clientWidth||0)/2)*next/old-(canvas.clientWidth||0)/2;canvas.scrollTop=(canvas.scrollTop+(canvas.clientHeight||0)/2)*next/old-(canvas.clientHeight||0)/2;zoom=next;status.textContent=Math.round(zoom*100)+'%';}
 button('←','Animasyon görünümünü sola kaydır',()=>{manual();canvas.scrollLeft=(Number(canvas.scrollLeft)||0)-180;});button('→','Animasyon görünümünü sağa kaydır',()=>{manual();canvas.scrollLeft=(Number(canvas.scrollLeft)||0)+180;});button('−','Animasyonu uzaklaştır',()=>changeZoom(-.2));controls.append(status);button('＋','Animasyonu yakınlaştır',()=>changeZoom(.2));button('Sıfırla','Görünümü sıfırla',()=>{manual();zoom=1;base=null;for(const [key,value]of Object.entries(original))scene.style[key]=value;canvas.scrollLeft=0;canvas.scrollTop=0;status.textContent='100%';});
 follow.addEventListener('click',()=>{following=!following;follow.textContent=following?'◎ Takip açık':'◎ Takip kapalı';follow.setAttribute('aria-pressed',String(following));});controls.append(follow);canvas.setAttribute('tabindex','0');canvas.setAttribute('aria-label','Animasyon alanı. Sürükleyerek veya yön tuşlarıyla kaydırabilirsin.');
 canvas.addEventListener('wheel',manual,{passive:true});canvas.addEventListener('touchstart',manual,{passive:true});canvas.addEventListener('pointerdown',event=>{manual();if(event.pointerType==='touch'||event.button!==0)return;drag={x:event.clientX,y:event.clientY,left:Number(canvas.scrollLeft)||0,top:Number(canvas.scrollTop)||0};canvas.setPointerCapture?.(event.pointerId);canvas.className+=' is-panning';});
 canvas.addEventListener('pointermove',event=>{if(!drag)return;canvas.scrollLeft=drag.left+drag.x-event.clientX;canvas.scrollTop=drag.top+drag.y-event.clientY;event.preventDefault();});function endDrag(){drag=null;canvas.className=canvas.className.replace(' is-panning','');}canvas.addEventListener('pointerup',endDrag);canvas.addEventListener('pointercancel',endDrag);canvas.addEventListener('keydown',event=>{const d={ArrowLeft:[-80,0],ArrowRight:[80,0],ArrowUp:[0,-80],ArrowDown:[0,80]}[event.key];if(!d)return;manual();canvas.scrollLeft=(Number(canvas.scrollLeft)||0)+d[0];canvas.scrollTop=(Number(canvas.scrollTop)||0)+d[1];event.preventDefault();});
 return{controls,get following(){return following;},camera(x){if(following)canvas.scrollLeft=x;}};
}
function layout(frame,viewport){
 const positions={},seen=new Set(),byId=new Map(frame.nodes.map(n=>[n.id,n]));let row=0,max=0;
 function chain(start){let id=start,i=0;if(!id||seen.has(id))return;while(id&&!seen.has(id)&&byId.get(id)?.alive){seen.add(id);positions[id]={x:55+i*155,y:145+row*165};i++;id=frame.edges[id];}max=Math.max(max,i);row++;}
 chain(frame.head);chain(frame.second);let free=0,loose=0;
 for(const node of frame.nodes)if(!seen.has(node.id)){positions[node.id]={x:55+(node.alive?loose++:free++)*155,y:node.alive?Math.max(345,145+row*165):475};}
 return{positions,width:Math.max(viewport||0,640,110+Math.max(max,loose,free)*155),height:Math.max(510,310+(row>2?(row-2)*165:0))};
}
function svg(frame,viewport){
 const NS='http://www.w3.org/2000/svg',S=(tag,attrs,text)=>{const e=document.createElementNS(NS,tag);Object.entries(attrs||{}).forEach(([k,v])=>e.setAttribute(k,v));if(text!==undefined)e.textContent=text;return e;};
 const root=S('svg',{viewBox:'0 0 1040 380',role:'img','aria-label':frame.title+': '+frame.caption});const markerId='cv-arrow-'+(++serial);const defs=S('defs');const marker=S('marker',{id:markerId,viewBox:'0 0 10 10',refX:9,refY:5,markerWidth:7,markerHeight:7,orient:'auto-start-reverse'});marker.append(S('path',{d:'M 0 0 L 10 5 L 0 10 z',fill:'context-stroke'}));defs.append(marker);root.append(defs);
 const world=layout(frame,viewport),positions=world.positions,width=world.width;root.setAttribute('viewBox',`0 0 ${width} ${world.height}`);root.style.minWidth=Math.min(width,1040)+'px';root._cvParts={};root._cvPositions={};root._cvEdges=[];
 root.append(S('rect',{x:8,y:14,width:width-16,height:240,rx:22,fill:'#111c2b',stroke:'#34485c','data-ui':'memory-lane'}),S('rect',{x:8,y:272,width:width-16,height:160,rx:22,fill:'#211c2c',stroke:'#594360','stroke-dasharray':'5 7','data-ui':'memory-workbench'}),S('text',{x:28,y:42,fill:'#839caf','font-size':13,'letter-spacing':2,'data-ui':'lane-label'},'BAĞLI ZİNCİR'),S('text',{x:28,y:289,fill:'#b29abd','font-size':11,'letter-spacing':1.5,'data-ui':'bench-label'},frame.second?'İKİNCİ LİSTE / BAĞLANTI ALANI':'AYRI BELLEK / DÜĞÜM ATÖLYESİ'));
 function text(x,y,label,cls){root.append(S('text',{x,y,class:cls||'cv-label'},label));}
 if(!frame.head)text(40,90,'head → NULL · boş liste');
 Object.entries(frame.edges).forEach(([from,to])=>{const a=positions[from];if(!a)return;const changed=frame.changed.includes(from);let d;
  if(to&&to!=='unset'&&positions[to]){const b=positions[to];d=from===to?`M ${a.x+105} ${a.y+28} C ${a.x+160} ${a.y-65}, ${a.x-45} ${a.y-65}, ${a.x+5} ${a.y+8}`:b.y===a.y&&b.x>a.x&&b.x-a.x<=160?`M ${a.x+112} ${a.y+28} C ${a.x+130} ${a.y+28}, ${b.x-15} ${b.y+28}, ${b.x-5} ${b.y+28}`:`M ${a.x+112} ${a.y+28} C ${a.x+145} ${Math.max(a.y,b.y)+80}, ${b.x-35} ${Math.max(a.y,b.y)+80}, ${b.x+6} ${b.y+58}`;
  }else if(to===null){d=`M ${a.x+112} ${a.y+28} C ${a.x+117} ${a.y+28}, ${a.x+121} ${a.y+28}, ${a.x+126} ${a.y+28}`;text(a.x+115,a.y+81,'NULL','cv-null');}else{text(a.x+114,a.y+25,'?','cv-null');return;}
  const path=S('path',{d,'data-edge':from,fill:'none',stroke:changed?'#69e1b6':'#7c8cab','stroke-width':changed?4:2.5,'marker-end':`url(#${markerId})`});root.append(path);if(changed)root._cvEdges.push(path);
 });
 if(frame.doubly)Object.entries(frame.prev).forEach(([from,to])=>{
  const a=positions[from];if(!a)return;if(to==='unset'){text(a.x-18,a.y+48,'?','cv-null');return;}const changed=frame.changedPrev.includes(from);let d;
  if(to&&positions[to]){const b=positions[to];d=`M ${a.x+4} ${a.y+46} C ${a.x-25} ${Math.max(a.y,b.y)+98}, ${b.x+140} ${Math.max(a.y,b.y)+98}, ${b.x+108} ${b.y+48}`;}
  else{d=`M ${a.x+4} ${a.y+46} L ${a.x-18} ${a.y+46}`;text(a.x-30,a.y+100,'NULL','cv-null');}
  const path=S('path',{d,'data-edge':'prev:'+from,fill:'none',stroke:changed?'#e2b5ff':'#b593d2','stroke-width':changed?4:2.5,'marker-end':`url(#${markerId})`});root.append(path);if(changed)root._cvEdges.push(path);
 });
 frame.nodes.forEach(n=>{const a=positions[n.id],focus=frame.focus.includes(n.id);const group=S('g',{class:'cv-node'+(!n.alive?' cv-freed':'')+(focus?' cv-focus':''),'data-node':n.id,opacity:n.alive?1:.06});group.append(S('rect',{x:a.x,y:a.y,width:112,height:58,rx:12}),S('line',{x1:a.x+(frame.doubly?80:66),y1:a.y,x2:a.x+(frame.doubly?80:66),y2:a.y+58}),S('text',{x:a.x+(frame.doubly?56:33),y:a.y+37,'text-anchor':'middle',class:'cv-value'},String(n.value)),S('text',{x:a.x+88,y:a.y+35,'text-anchor':'middle',class:'cv-next'},'●'),S('text',{x:a.x+7,y:a.y-10,class:'cv-field'},frame.doubly?'prev  data  next':'data       next'),S('text',{x:a.x+6,y:a.y+77,class:'cv-address'},'@'+n.id.toUpperCase()));if(frame.doubly)group.append(S('line',{x1:a.x+32,y1:a.y,x2:a.x+32,y2:a.y+58}),S('text',{x:a.x+16,y:a.y+35,'text-anchor':'middle',class:'cv-next'},'●'));root.append(group);root._cvParts['node:'+n.id]=group;root._cvPositions['node:'+n.id]=a;if(!n.alive){group.append(S('path',{d:`M ${a.x+10} ${a.y+9} L ${a.x+101} ${a.y+49} M ${a.x+101} ${a.y+9} L ${a.x+10} ${a.y+49}`,stroke:'#ff7c8c','stroke-width':3}),S('text',{x:a.x,y:a.y+80,class:'cv-null'},'free · kullanılamaz'));}});
 const labels={...frame.pointers,[frame.headName||'head']:frame.head,...(frame.second?{[frame.secondName||'head2']:frame.second}:{})};const count={};Object.entries(labels).forEach(([name,id])=>{if(!id||!positions[id])return;const a=positions[id],row=count[id]||0;count[id]=row+1;const y=a.y-40-row*24,part=S('g',{'data-pointer':name});part.append(S('text',{x:a.x,y,class:'cv-pointer'},name),S('path',{d:`M ${a.x+30} ${y+10} L ${a.x+30} ${a.y-15}`,stroke:'#ffc46d','stroke-width':2,'marker-end':`url(#${markerId})`}));root.append(part);root._cvParts['pointer:'+name]=part;root._cvPositions['pointer:'+name]={x:a.x,y};});return root;
}
const players=new Set();
function stopAll(){players.forEach(stop=>stop());players.clear();}
// Keep the SVG elements alive. Interpolate their actual geometry every frame.
function morph(scene,target){
 const jobs=[],cleanup=[],flows=[];
 const attrs=e=>Array.from(e.attributes||[]);
 const key=e=>e.hasAttribute('data-node')?'node:'+e.getAttribute('data-node'):e.hasAttribute('data-pointer')?'pointer:'+e.getAttribute('data-pointer'):e.hasAttribute('data-edge')?'edge:'+e.getAttribute('data-edge'):e.hasAttribute('data-ui')?'ui:'+e.getAttribute('data-ui'):e.tagName;
 function blend(a,b){
  const an=String(a).match(/-?\d*\.?\d+(?:e[-+]?\d+)?/gi)||[],bn=String(b).match(/-?\d*\.?\d+(?:e[-+]?\d+)?/gi)||[];
  if(an.length!==bn.length||!an.length)return null;
  if(String(a).replace(/-?\d*\.?\d+(?:e[-+]?\d+)?/gi,'#')!==String(b).replace(/-?\d*\.?\d+(?:e[-+]?\d+)?/gi,'#'))return null;
  return p=>{if(p===1)return String(b);let i=0;return String(b).replace(/-?\d*\.?\d+(?:e[-+]?\d+)?/gi,()=>{const j=i++;return Number(an[j])+(Number(bn[j])-Number(an[j]))*p;});};
 }
 function walk(old,next){
  if(next.hasAttribute('data-edge')&&old.getAttribute('d')!==next.getAttribute('d'))flows.push(old);
  attrs(next).forEach(a=>{if(old===scene&&a.name==='style')return;const before=old.getAttribute(a.name),interpolate=['x','y','x1','y1','x2','y2','d','opacity','viewBox','width','height'].includes(a.name)&&before!==null?blend(before,a.value):null;if(interpolate)jobs.push(p=>old.setAttribute(a.name,interpolate(p)));else old.setAttribute(a.name,a.value);});
  if(!next.children.length){old.textContent=next.textContent;return;}
  const available=Array.from(old.children),used=new Set();
  Array.from(next.children).forEach(child=>{const found=available.find(e=>!used.has(e)&&key(e)===key(child));if(found){used.add(found);walk(found,child);}else{old.append(child);child.setAttribute('opacity','0');if(child.hasAttribute('data-edge'))flows.push(child);jobs.push(p=>{child.setAttribute('opacity',p);if(child.hasAttribute('data-node'))child.setAttribute('transform',`translate(${120*(1-p)} ${-70*(1-p)}) scale(${.72+.28*p})`);});cleanup.push(()=>child.removeAttribute('transform'));}});
  available.filter(e=>!used.has(e)).forEach(e=>{jobs.push(p=>e.setAttribute('opacity',1-p));cleanup.push(()=>e.remove());});
 }
 walk(scene,target);
 flows.forEach(path=>{if(!path.getPointAtLength)return;const dot=document.createElementNS('http://www.w3.org/2000/svg','circle');dot.setAttribute('r','5');dot.setAttribute('fill','#baffd8');dot.setAttribute('class','cv-address-dot');scene.append(dot);jobs.push(p=>{const point=path.getPointAtLength(path.getTotalLength()*p);dot.setAttribute('cx',point.x);dot.setAttribute('cy',point.y);dot.setAttribute('opacity',Math.sin(Math.PI*p));});cleanup.push(()=>dot.remove());});
 return {step:p=>jobs.forEach(job=>job(p)),finish:()=>{jobs.forEach(job=>job(1));cleanup.forEach(fn=>fn());}};
}
function mountGsap(parent,t,input,options={}){
 const all=options.frames||frames(t,input,options.position||t.position||5),box=E('section',undefined,'cv-board cv-gsap-board');
 all.forEach(f=>{f.headName=t.id==='birlestir'?'head1':'head';if(options.renamed){f.headName=t.id==='birlestir'?'bas1':'bas';f.secondName='bas2';const renamed={};Object.entries(f.pointers).forEach(([name,id])=>renamed[g.CCaseTools.rename(name)]=id);f.pointers=renamed;}});
 const reduced=!!g.matchMedia?.('(prefers-reduced-motion: reduce)').matches,viewport=Math.max(600,...all.map(f=>70+f.nodes.length*136)),head=E('div',undefined,'cv-board-head'),title=E('b'),canvas=E('div',undefined,'cv-canvas'),caption=E('p',undefined,'cv-caption'),code=E('pre',undefined,'cv-active-code');
 head.append(E('span',options.static?'SORUNUN BAŞLANGIÇ LİSTESİ':'CANLI BAĞLANTI SİMÜLASYONU','cw-meta'),title);const scene=svg(all[0],viewport);canvas.append(scene);
 const stage=E('div',undefined,'cv-cinema-stage'),diagram=E('div',undefined,'cv-diagram-pane'),navigation=navigationView(canvas,scene),codeSide=E('div',undefined,'cv-code-side'),listing=E('div',undefined,'cv-live-list'),codeRows=t.code.split('\n').map((line,i)=>{const row=E('div',undefined,'cv-live-line');row.append(E('small',String(i+1)),E('code',line||' '));listing.append(row);return row;});codeSide.append(E('small','ÇALIŞAN FONKSİYON','cw-meta'),listing,code);diagram.append(navigation.controls,canvas);stage.append(diagram,codeSide);box.append(head,stage,caption);parent.append(box);const closeFocus=options.static?()=>{}:focusView(box,head);
 let index=0,playing=false,speed=2200,timeline=null,tween=null,playButton=null,seek=null,stopped=false;
 function update(){const f=all[index];title.textContent=f.title;caption.textContent=f.caption;code.textContent=f.code||'// Başlangıç durumunu incele';const compact=x=>x.replace(/\s+/g,'');codeRows.forEach((row,i)=>{const active=f.code&&compact(t.code.split('\n')[i])===compact(f.code);row.className='cv-live-line'+(active?' is-active':'');if(active&&Number.isFinite(row.offsetTop))listing.scrollTop=Math.max(0,row.offsetTop-listing.clientHeight/2);});if(playButton)playButton.textContent=playing?'⏸ DURAKLAT':index===all.length-1&&!tween?'▶ YENİDEN OYNAT':'▶ ANİMASYONU OYNAT';if(seek)seek.value=String(index);}
 function pause(){playing=false;timeline?.pause();update();}
 function stop(){closeFocus();stopped=true;playing=false;timeline?.kill();timeline=null;tween?.finish();tween=null;update();}
 function go(next,instant=false){timeline?.kill();timeline=null;tween?.finish();index=next;tween=morph(scene,svg(all[index],viewport));update();
  if(instant||reduced){tween.finish();tween=null;update();if(reduced&&!instant&&playing)timeline=g.gsap.delayedCall(speed/1000,()=>{timeline=null;if(index<all.length-1)go(index+1);else{playing=false;update();}});return;}
  const progress={p:0},baseSpeed=speed;stopped=false;tween.step(0);
  timeline=g.gsap.timeline({paused:true,onComplete:()=>{timeline=null;if(playing&&index<all.length-1)go(index+1);else{playing=false;update();}}});
  const beforeScroll=Number(canvas.scrollLeft)||0,targetFrame=all[index],focus=targetFrame.focus.find(id=>targetFrame.nodes.find(n=>n.id===id)?.alive),at=focus?layout(targetFrame,viewport).positions[focus]:null,pixelScale=(scene.clientWidth||viewport)/layout(targetFrame,viewport).width,scrollTarget=at?Math.max(0,(at.x+56)*pixelScale-(canvas.clientWidth||viewport)/2):beforeScroll;
  timeline.to(progress,{p:1,duration:Math.max(.55,baseSpeed*.58/1000),ease:'power2.inOut',onUpdate:()=>{if(box.isConnected===false){stop();players.delete(stop);return;}tween?.step(progress.p);if(!reduced)navigation.camera(beforeScroll+(scrollTarget-beforeScroll)*progress.p);}}).call(()=>{tween?.finish();tween=null;update();}).to({p:0},{p:1,duration:.08,ease:'none'});timeline.play();
 }
 function play(){stopped=false;if(index===all.length-1&&!tween)go(0,true);playing=true;update();if(timeline)timeline.play();else if(index<all.length-1)go(index+1);else{playing=false;update();}}
 if(!options.static){const controls=E('div',undefined,'cw-actions cv-player');playButton=E('button','','cw-btn gold');playButton.type='button';playButton.addEventListener('click',()=>playing?pause():play());const prev=E('button','← Geri sar','cw-btn secondary'),next=E('button','İleri sar →','cw-btn secondary');prev.type=next.type='button';prev.addEventListener('click',()=>{pause();go(Math.max(0,index-1));});next.addEventListener('click',()=>{pause();go(index===all.length-1?0:index+1);});
  const label=E('label','Hız','cv-speed'),select=E('select');select.setAttribute('aria-label','Animasyon hızı');[['3600','Yavaş'],['2200','Normal'],['1400','Hızlı']].forEach(([value,text])=>{const option=E('option',text);option.value=value;select.append(option);});select.value=String(speed);select.addEventListener('change',()=>{const old=speed;speed=Number(select.value);if(timeline)timeline.timeScale(timeline.timeScale()*old/speed);});label.append(select);
  seek=E('input');seek.type='range';seek.min='0';seek.max=String(all.length-1);seek.step='1';seek.value='0';seek.setAttribute('aria-label','Çözüm adımı');seek.addEventListener('input',()=>{const chosen=Number(seek.value);pause();go(Math.max(0,Math.min(all.length-1,chosen)),true);});controls.append(playButton,prev,next,label,seek);box.append(controls,E('div',reduced?'Hareket azaltma tercihin açık.':'Yeni düğüm atölyeden zincire katılır · Ayrılan düğüm free ile söner · @ etiketleri aynı düğümü takip etmeni sağlar; ekrandaki hareket bellek adresini değiştirmez.','cv-legend'));players.add(stop);
 }
 update();if(options.autoplay&&!options.static&&!reduced)play();return box;
}
function mount(parent,t,input,options={}){
 if(g.gsap)return mountGsap(parent,t,input,options);
 const all=options.frames||frames(t,input,options.position||t.position||5),box=E('section',undefined,'cv-board');
 all.forEach(f=>{f.headName=t.id==='birlestir'?'head1':'head';if(options.renamed){f.headName=t.id==='birlestir'?'bas1':'bas';f.secondName='bas2';const renamed={};Object.entries(f.pointers).forEach(([name,id])=>renamed[g.CCaseTools.rename(name)]=id);f.pointers=renamed;}});parent.append(box);
 const reduced=!!g.matchMedia?.('(prefers-reduced-motion: reduce)').matches,viewport=Math.max(600,...all.map(f=>70+f.nodes.length*136));
 const head=E('div',undefined,'cv-board-head'),title=E('b'),canvas=E('div',undefined,'cv-canvas'),caption=E('p',undefined,'cv-caption'),code=E('pre',undefined,'cv-active-code');
 head.append(E('span',options.static?'SORUNUN BAŞLANGIÇ LİSTESİ':'CANLI BAĞLANTI SİMÜLASYONU','cw-meta'),title);
 const scene=svg(all[0],viewport);canvas.append(scene);box.append(head,canvas,caption,code);
 let index=0,playing=false,speed=2200,raf=null,lastTime=null,elapsed=0,tween=null,hold=0,playButton=null;
 const request=g.requestAnimationFrame?fn=>g.requestAnimationFrame(fn):fn=>setTimeout(()=>fn(Date.now()),16),cancel=g.cancelAnimationFrame?x=>g.cancelAnimationFrame(x):clearTimeout;
 function update(){const f=all[index];title.textContent=`${index+1}/${all.length} · ${f.title}`;caption.textContent=f.caption;code.textContent=f.code||'// Başlangıç durumunu incele';if(playButton)playButton.textContent=playing?'⏸ DURAKLAT':index===all.length-1&&!tween?'▶ YENİDEN OYNAT':'▶ ANİMASYONU OYNAT';}
 function clear(){if(raf!==null){cancel(raf);raf=null;}lastTime=null;}
 function pause(){playing=false;clear();update();}
 function stop(){pause();tween?.finish();tween=null;}
 function go(next,instant=false){tween?.finish();index=next;elapsed=0;hold=0;tween=morph(scene,svg(all[index],viewport));if(instant||reduced){tween.finish();tween=null;}else tween.step(0);update();}
 function arm(){if(raf===null)raf=request(tick);}
 function tick(now){raf=null;if(box.isConnected===false){stop();players.delete(stop);return;}const dt=lastTime===null?0:Math.min(80,now-lastTime);lastTime=now;
  if(tween){elapsed+=dt;const raw=Math.min(1,elapsed/(speed*.84)),p=raw*raw*(3-2*raw);tween.step(p);if(raw===1){tween.finish();tween=null;hold=0;update();}}
  else if(playing){hold+=dt;if(hold>=speed*.16){if(index<all.length-1)go(index+1);else{playing=false;update();}}}
  if(playing||tween)arm();else lastTime=null;
 }
 function play(){if(index===all.length-1&&!tween)go(0,true);playing=true;update();arm();}
 if(!options.static){const controls=E('div',undefined,'cw-actions cv-player');playButton=E('button','','cw-btn gold');playButton.type='button';playButton.addEventListener('click',()=>playing?pause():play());
  const prev=E('button','← Geri sar','cw-btn secondary'),next=E('button','İleri sar →','cw-btn secondary');prev.type=next.type='button';prev.addEventListener('click',()=>{pause();go(Math.max(0,index-1));if(tween)arm();});next.addEventListener('click',()=>{pause();go(index===all.length-1?0:index+1);if(tween)arm();});
  const label=E('label','Hız','cv-speed'),select=E('select');select.setAttribute('aria-label','Animasyon hızı');[['3600','Yavaş'],['2200','Normal'],['1400','Hızlı']].forEach(([value,text])=>{const option=E('option',text);option.value=value;select.append(option);});select.value=String(speed);select.addEventListener('change',()=>{const fraction=elapsed/(speed*.84);speed=Number(select.value);elapsed=fraction*speed*.84;});label.append(select);controls.append(playButton,prev,next,label);box.append(controls,E('div',reduced?'Hareket azaltma tercihin açık.':'İşaretçi yol boyunca ilerler · Okun ucu yeni adrese taşınır · free ile kutu kaybolur','cv-legend'));players.add(stop);
 }
 update();if(options.autoplay&&!options.static&&!reduced)play();return box;
}
g.addEventListener?.('pagehide',stopAll);
g.CVisual={frames,mount,svg,layout,focusView,navigationView,stopAll};
})(window);
