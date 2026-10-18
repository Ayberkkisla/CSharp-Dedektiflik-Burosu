(function(g){'use strict';
g.Unit1CodeComplete={mount(editor,getVariables){
 const wrap=document.createElement('div');wrap.className='b7-editor-wrap';editor.before(wrap);wrap.append(editor);
 const hint=document.createElement('p');hint.className='b7-complete-hint';hint.textContent='Kod önerisi: yazmaya başla, Tab veya Enter ile seç. ↑ ↓ ile gez · Esc ile kapat · Ctrl + Boşluk ile aç.';wrap.after(hint);
 const menu=document.createElement('div');menu.id=editor.id+'-completions';menu.className='b7-completions';menu.setAttribute('role','listbox');menu.setAttribute('aria-label','Kod önerileri');menu.hidden=true;wrap.append(menu);
 editor.setAttribute('aria-controls',menu.id);editor.setAttribute('aria-autocomplete','list');editor.setAttribute('aria-expanded','false');
 let entries=[],selected=0,start=0,end=0,enabled=true;
 const item=(name,insert,description,back=0)=>({name,insert,description,back});
 const groups={Console:[item('WriteLine','WriteLine()','Sonucu ekrana yaz',1),item('ReadLine','ReadLine()','Sıradaki bilgiyi oku',0)],Convert:[item('ToInt32','ToInt32()','Tam sayıya çevir',1),item('ToDecimal','ToDecimal()','decimal sayıya çevir',1),item('ToDouble','ToDouble()','double sayıya çevir',1)],int:[item('Parse','Parse()','Metni tam sayıya çevir',1)],double:[item('Parse','Parse()','Metni double sayıya çevir',1)],decimal:[item('Parse','Parse()','Metni decimal sayıya çevir',1)]};
 function hide(){menu.hidden=true;entries=[];editor.setAttribute('aria-expanded','false');editor.removeAttribute('aria-activedescendant');}
 function paint(){menu.replaceChildren();entries.forEach((entry,i)=>{const button=document.createElement('button');button.type='button';button.tabIndex=-1;button.id=menu.id+'-'+i;button.setAttribute('role','option');button.setAttribute('aria-selected',String(i===selected));const name=document.createElement('strong');name.textContent=entry.name;const detail=document.createElement('span');detail.textContent=entry.description;button.append(name,detail);button.onmousedown=e=>e.preventDefault();button.onclick=()=>accept(i);menu.append(button);});menu.hidden=false;editor.setAttribute('aria-expanded','true');editor.setAttribute('aria-activedescendant',menu.id+'-'+selected);menu.children[selected]?.scrollIntoView({block:'nearest'});}
 function refresh(force=false){if(!enabled){hide();return;}
  if(editor.selectionStart!==editor.selectionEnd){hide();return;}
  const before=editor.value.slice(0,editor.selectionStart);let inString=false,inChar=false,lineComment=false,blockComment=false;
  for(let i=0;i<before.length;i++){const c=before[i],next=before[i+1];if(lineComment){if(c==='\n')lineComment=false;continue;}if(blockComment){if(c==='*'&&next==='/'){blockComment=false;i++;}continue;}if(inString||inChar){if(c==='\\'){i++;continue;}if(inString&&c==='"')inString=false;else if(inChar&&c==="'")inChar=false;continue;}if(c==='/'&&next==='/'){lineComment=true;i++;}else if(c==='/'&&next==='*'){blockComment=true;i++;}else if(c==='"')inString=true;else if(c==="'")inChar=true;}
  if(inString||inChar||lineComment||blockComment){hide();return;}
  const match=before.match(/(?:(\b[A-Za-z_]\w*)\s*\.\s*)?([A-Za-z_]\w*)?$/),owner=match?.[1],prefix=match?.[2]||'';
  if(!match||(!owner&&!prefix&&!force)){hide();return;}end=editor.selectionStart;start=end-prefix.length;
  let candidates=[];
  if(owner)candidates=groups[owner]||[];
  else{candidates=[item('Console','Console.','Ekrana yaz / bilgi oku'),item('Convert','Convert.','Tür dönüşümü'),...(['b10-editor','b11-editor','b12-editor'].includes(editor.id)?[item("if","if () {\n    \n}","Koşula göre çalıştır",10),item("else","else {\n    \n}","Diğer durum",2)]:[]),...['int','string','double','decimal','bool'].map(t=>item(t,t+' ','Değişken türü'))];const variables=new Map(getVariables().map(([name,label])=>[name,label]));const declarations=editor.value.matchAll(/\b(?:int|string|double|decimal|bool|var)\s+([A-Za-z_]\w*)((?:\s*,\s*[A-Za-z_]\w*)*)/g);for(const m of declarations)for(const name of [m[1],...m[2].split(',').map(x=>x.trim()).filter(Boolean)])variables.set(name,'Kodundaki değişken');candidates.push(...[...variables].map(([name,label])=>item(name,name,label)));}
  if(['b11-editor','b12-editor','b14-editor'].includes(editor.id)&&!owner)candidates.push(item('else if','else if () {\n    \n}','İlk koşul tutmazsa yeni koşula bak',10));
  if(['b12-editor','b14-editor'].includes(editor.id)&&!owner)candidates.push(item('for','for (int i = 0; i < ; i++) {\n    \n}','Sayaçlı tekrar',15),item('while','while () {\n    \n}','Koşul doğruyken tekrar',10),item('do','do {\n    \n} while ();','Önce çalıştır, sonra koşula bak',2),item('break','break;','Döngüden hemen çık'));
  if(editor.id==='b14-editor'&&!owner)candidates.push(item('continue','continue;','Bu turun kalanını atla'),item('switch','switch () {\n    case :\n        break;\n    default:\n        break;\n}','Değere göre yol seç',59),item('case','case :','Eşleşecek değer',1),item('default','default:','Hiçbir case eşleşmezse'));
  entries=candidates.filter(x=>x.name.toLowerCase().startsWith(prefix.toLowerCase())&&x.insert!==prefix).slice(0,8);selected=0;if(!entries.length){hide();return;}paint();
 }
 function accept(index=selected){const entry=entries[index];if(!entry)return;let text=entry.insert,back=entry.back;if(editor.value.slice(end).trimStart().startsWith('(')&&text.endsWith('()')){text=text.slice(0,-2);back=0;}editor.setRangeText(text,start,end,'end');if(back)editor.setSelectionRange(editor.selectionStart-back,editor.selectionStart-back);hide();editor.focus({preventScroll:true});editor.dispatchEvent(new Event('input',{bubbles:true}));}
 function handleKeydown(e){if(!enabled)return false;if(e.ctrlKey&&e.code==='Space'){e.preventDefault();e.stopPropagation();refresh(true);return true;}if(menu.hidden)return false;if(['ArrowDown','ArrowUp','Enter','Tab','Escape'].includes(e.key)&&!e.ctrlKey&&!e.metaKey){e.preventDefault();e.stopPropagation();if(e.key==='Escape')hide();else if(e.key==='ArrowDown'||e.key==='ArrowUp'){selected=(selected+(e.key==='ArrowDown'?1:-1)+entries.length)%entries.length;paint();}else accept();return true;}return false;}
 editor.addEventListener('input',()=>refresh());editor.addEventListener('click',()=>refresh());editor.addEventListener('blur',hide);
 return {handleKeydown,hide,setEnabled(value){enabled=!!value;hint.hidden=!enabled;if(!enabled)hide();}};
}};
})(window);
