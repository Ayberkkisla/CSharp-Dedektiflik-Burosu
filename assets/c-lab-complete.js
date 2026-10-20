(function(g){
'use strict';
const snippets=[
 ['struct node','struct node *', 'Düğüm adresi tutan değişken'],
 ['malloc','malloc(sizeof *yeni)', 'Bir düğüm için bellek ayır'],
 ['sizeof','sizeof(struct node)', 'Düğümün bellek boyutu'],
 ['free','free();','Bağlantıyı koruduktan sonra belleği bırak'],
 ['printf','printf("%d ", );','Düğümün data değerini yazdır'],
 ['if','if () {\n    \n}', 'Önce koşulu kontrol et'],
 ['while','while () {\n    \n}', 'Koşul sağlandığı sürece tekrarla'],
 ['for','for (int i = 1; i < ; i++) {\n    \n}', 'Konuma göre gez'],
 ['return','return head;','Güncel başı döndür'],['NULL','NULL','Hiçbir düğümü göstermeyen adres'],
 ['int','int ', 'Tam sayı değişkeni'],['else','else {\n    \n}','Koşul yanlışsa'],['break','break;','Döngüden çık'],['continue','continue;','Sonraki tura geç']
];
function context(code,end){let mode='code',clean='',escape=false;for(let i=0;i<end;i++){const c=code[i],n=code[i+1];if(mode==='line'){clean+=c==='\n'?'\n':' ';if(c==='\n')mode='code';}else if(mode==='block'){clean+=' ';if(c==='*'&&n==='/'&&i+1<end){clean+=' ';i++;mode='code';}}else if(mode==='string'||mode==='char'){clean+=' ';if(escape)escape=false;else if(c==='\\')escape=true;else if(c===(mode==='string'?'"':"'"))mode='code';}else if(c==='/'&&['/','*'].includes(n)&&i+1<end){clean+='  ';i++;mode=n==='/'?'line':'block';}else if(c==='"'||c==="'"){clean+=' ';mode=c==='"'?'string':'char';}else clean+=c;}return {mode,clean};}
function suggest(code,end,task,force=false){
 const ctx=context(code,end);if(ctx.mode!=='code')return null;
 const field=/->([A-Za-z_]\w*|)$/.exec(ctx.clean),word=/[A-Za-z_]\w*$/.exec(ctx.clean),prefix=field?field[1]:word?.[0]||'';
 if(!prefix&&!field&&!force)return null;
 const start=end-prefix.length,stop=end+(/^[A-Za-z_0-9]*/.exec(code.slice(end))[0].length);
 const names=[...ctx.clean.matchAll(/\b(?:struct\s+node\s*\*|int\s+)\s*([A-Za-z_]\w*)/g)].map(m=>m[1]);
 const all=field?['data','next',...(task?.doubly?['prev']:[])].map(n=>[n,n,n==='data'?'Düğümün sayısı':n==='next'?'Sonraki düğümün adresi':'Önceki düğümün adresi']):[...new Set(names)].map(n=>[n,n,'Senin değişkenin']).concat(snippets);
 const declaration=/struct\s+node\s*\*\s*([A-Za-z_]\w*)\s*=\s*\w*$/.exec(ctx.clean);
 const items=all.filter(s=>s[0].toLowerCase().startsWith(prefix.toLowerCase())&&(s[1]!==prefix||stop!==end)).slice(0,8).map(s=>s[0]==='malloc'&&declaration?[s[0],'malloc(sizeof *'+declaration[1]+')',s[2]]:s);
 return items.length?{start,end:stop,items}:null;
}
function mount(editor,task){
 const wrap=document.createElement('div'),popup=document.createElement('div'),tools=document.createElement('div'),trigger=document.createElement('button');wrap.className='clab-edit-wrap';popup.className='clab-suggest';popup.hidden=true;popup.id=editor.id+'-options';popup.setAttribute('role','listbox');popup.setAttribute('aria-label','C kod önerileri');tools.className='clab-complete-tools';trigger.type='button';trigger.textContent='Kod önerileri';tools.append(trigger,document.createTextNode('↑ ↓ seç · Tab tamamla · Esc kapat · Ctrl + Boşluk aç'));editor.before(wrap);wrap.append(editor,popup);wrap.after(tools);editor.setAttribute('aria-controls',popup.id);editor.setAttribute('aria-autocomplete','list');let data=null,index=0,timer;
 function close(){data=null;popup.hidden=true;editor.setAttribute('aria-expanded','false');editor.removeAttribute('aria-activedescendant');}
 function mark(){[...popup.children].forEach((b,i)=>{b.setAttribute('aria-selected',String(i===index));b.classList.toggle('is-selected',i===index);});editor.setAttribute('aria-activedescendant',popup.children[index].id);}
 function accept(){if(!data)return;const selected=data.items[index];let text=selected[1];if(editor.value[data.end]==='('&&text.includes('('))text=text.slice(0,text.indexOf('('));const start=data.start;editor.focus();editor.setRangeText(text,data.start,data.end,'end');let offset=text.length;const hole=text.indexOf('()');if(hole>=0)offset=hole+1;else if(selected[0]==='printf')offset=text.lastIndexOf(')');editor.setSelectionRange(start+offset,start+offset);close();editor.dispatchEvent(new Event('input',{bubbles:true}));close();}
 function update(force=false){clearTimeout(timer);if(editor.selectionStart!==editor.selectionEnd)return close();data=suggest(editor.value,editor.selectionStart,task,force);if(!data)return close();index=0;popup.replaceChildren();data.items.forEach((s,i)=>{const b=document.createElement('button');b.type='button';b.id=editor.id+'-option-'+i;b.setAttribute('role','option');const label=document.createElement('b'),detail=document.createElement('small');label.textContent=s[0];detail.textContent=s[2];b.append(label,detail);b.addEventListener('pointerdown',e=>e.preventDefault());b.addEventListener('click',()=>{index=i;accept();});popup.append(b);});popup.hidden=false;editor.setAttribute('aria-expanded','true');mark();}
 editor.addEventListener('input',()=>update());editor.addEventListener('click',()=>update());editor.addEventListener('blur',()=>{timer=setTimeout(close,150);});trigger.addEventListener('click',()=>{editor.focus();update(true);});editor.addEventListener('keydown',e=>{
  if(e.isComposing)return;
  if(e.ctrlKey&&e.code==='Space'){e.preventDefault();update(true);return;}
  if(data&&['Escape','ArrowDown','ArrowUp','Tab','Enter'].includes(e.key)&&!e.ctrlKey){e.preventDefault();e.stopImmediatePropagation();if(e.key==='Escape')close();else if(e.key==='ArrowDown'||e.key==='ArrowUp'){index=(index+(e.key==='ArrowDown'?1:-1)+data.items.length)%data.items.length;mark();}else accept();return;}
  if(e.key==='Tab'){e.preventDefault();editor.setRangeText('    ',editor.selectionStart,editor.selectionEnd,'end');editor.dispatchEvent(new Event('input',{bubbles:true}));}
 });return {close,update};
}
g.CLabComplete={suggest,mount};
})(window);
