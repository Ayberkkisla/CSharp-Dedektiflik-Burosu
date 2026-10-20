(function(g){
'use strict';
let refresh=()=>{};
const lessons=g.CFinalLessons;
function E(tag,text,cls){const e=document.createElement(tag);if(text!==undefined)e.textContent=text;if(cls)e.className=cls;return e;}
function themeArt(task){
 const lesson=lessons.find(c=>c.task.id===task.id),input=lesson.variant,box=E('section',undefined,'cfinal-art cfinal-sample');box.dataset.theme=task.id;
 box.append(E('small','ÖRNEK KAYITLAR · '+task.theme.toLocaleUpperCase('tr-TR')),E('p','Başlangıç: '+g.CWriting.listText(input.a,false,!!task.doubly)+(input.b?' | İkinci liste: '+g.CWriting.listText(input.b):'')+(input.value!==undefined?' · İşlem numarası: '+input.value:'')),E('p','İşlemden sonra: '+g.CWriting.listText(input.out,false,!!task.doubly)));
 return box;
}
function applyTheme(task){document.body.classList.add('cfinal-themed');document.body.style.setProperty('--final-h',String(task.palette.hue));document.body.dataset.finalTheme=task.palette.id;}
function clearTheme(){document.body.classList.remove('cfinal-themed');document.body.style.setProperty('--final-h','');delete document.body.dataset.finalTheme;}
function format(main,task){
 const header=main.querySelector('.clab-heading'),film=main.querySelector('.clab-film'),brief=main.querySelector('.clab-brief'),columns=main.querySelector('.clab-columns'),help=main.querySelector('.clab-help'),work=main.querySelector('.clab-work'),solution=main.querySelector('.clab-solution'),sample=main.querySelector('.cfinal-sample');
 const understand=E('section',undefined,'cfinal-understand'),facts=E('div',undefined,'cfinal-facts'),input=lessons.find(c=>c.task.id===task.id).variant;
 understand.append(E('h2','Önce soruyu anlayalım'));
 const values=[['Kayıt yapısı',task.doubly?'Çift yönlü bağlı liste':'Tek yönlü bağlı liste'],['Örnekteki kayıt sayısı',String(input.a.length)+(input.b?' + '+input.b.length:'')],input.value!==undefined?['İşlem numarası',String(input.value)]:['Bellek',task.code.includes('malloc')?'Yeni kayıt oluşturulacak':'Mevcut kayıtlar kullanılacak']];
 values.forEach(([label,text])=>{const cell=E('div');cell.append(E('small',label),E('p',text));facts.append(cell);});understand.append(facts);
 const teaching=E('section',undefined,'cfinal-teaching'),output=E('aside',undefined,'cfinal-output');
 film.querySelector('h2').textContent='Örneği adım adım izle';film.querySelector('p')?.remove();
 output.append(E('h2','Örnek kayıtlar'),sample,E('p','Bu örnek yukarıdaki olaya ait. Yazdığın fonksiyon başka listelerle de kontrol edilecek.'),solution);teaching.append(film,output);
 brief.querySelector('h2').textContent='Ne yazacaksın?';help.querySelector('h2').textContent='Kısa hatırlatmalar';brief.append(help);columns.replaceChildren(brief,work);
 const bar=work.querySelector('.clab-editor-title');bar.replaceChildren(E('strong',task.fileName||task.id+'.c'),E('span','C · KOD KONTROLÜ'));
 main.replaceChildren(header,understand,teaching,columns);
}
function open(group){g.dispatchEvent(new CustomEvent('cfinal:open',{detail:{group}}));}
function mount(parent,group,options={}){
 const start=group==='double'?10:0,end=group==='double'?15:10,box=E('section',undefined,'cfinal-section'),top=E('header'),back=E('button','← C vakalarına dön','cw-btn secondary'),heading=E('h2',group==='double'?'Vaka 22 · Çift Yönlü Listeler':'Vaka 21 · Tek Yönlü Listeler'),nav=E('nav',undefined,'cfinal-nav'),stage=E('section'),shell=E('main',undefined,'cfinal-shell'),brand=E('div',undefined,'cfinal-brand');
 back.type='button';back.addEventListener('click',()=>{clearTheme();options.onBack?.();});brand.append(E('small',group==='double'?'C · ÇİFT YÖNLÜ FİNAL · 5 SORU':'C · TEK YÖNLÜ FİNAL · 10 SORU'),heading);top.append(brand,back);nav.setAttribute('aria-label','Final kod soruları');shell.append(nav,stage);box.append(top,shell);box.setAttribute('aria-label',group==='double'?'Çift yönlü listeler final çalışma alanı':'Tek yönlü listeler final çalışma alanı');parent.append(box);
 const store=g.NoirProgress||g.localStorage;let current=start;try{const old=Number(store.getItem('cnoir-final-current-'+group));if(old>=start&&old<end&&Number.isInteger(old))current=old;}catch(_){}
 const buttons=[],status=E('p',undefined,'cfinal-status');back.before(status);
 refresh=()=>{if(!box.isConnected)return;let count=0;buttons.forEach((b,j)=>{const t=lessons[start+j].task,done=g.CLab.isPassed(t);if(done)count++;b.textContent=(done?'✓ ':'')+(j+1)+'. '+t.title;b.setAttribute('aria-current',start+j===current?'step':'false');});status.textContent=count+' / '+(end-start)+' final sorusu tamamlandı.';if(count===end-start){status.textContent+=' ✓ Final vakası tamamlandı.';options.onSolved?.();}};
 function load(index){current=index;try{store.setItem('cnoir-final-current-'+group,String(index));}catch(_){}g.CLab.dispose();stage.replaceChildren();applyTheme(lessons[index].task);box.dataset.palette=lessons[index].task.palette.id;g.CLab.mount(stage,index,{lesson:lessons[index],onComplete:index+1<end?()=>load(index+1):()=>{clearTheme();options.onBack?.();},nextLabel:index+1<end?'SONRAKİ FİNAL SORUSU →':'FİNAL DOSYASINI KAPAT →'});refresh();box.scrollTo?.({top:0,behavior:'instant'});}
 for(let i=start;i<end;i++){const b=E('button',(i-start+1)+'. '+lessons[i].task.title,'cw-btn secondary');b.type='button';b.addEventListener('click',()=>load(i));buttons.push(b);nav.append(b);}
 box.addEventListener('keydown',event=>{if(event.key==='Escape'&&!box.querySelector('.cv-focus-view')){event.preventDefault();clearTheme();options.onBack?.();}});load(current);back.focus();return box;
}
g.CFinal={mount,open,themeArt,applyTheme,clearTheme,format};
g.addEventListener('clab:passed',()=>refresh());g.addEventListener('clab:changed',()=>refresh());

})(window);
