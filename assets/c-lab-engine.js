/* A bounded interpreter for the linked-list C exercises. No eval or native execution. */
(function(g){
'use strict';
const UNSET=Symbol('uninitialized');
class CError extends Error { constructor(message,line=1,detail=null){super(message);this.line=line;this.detail=detail;} }
function expressionText(e){if(!e)return '';if(e.kind==='var')return e.name;if(e.kind==='field')return expressionText(e.object)+'->'+e.name;if(e.kind==='unary')return e.op+expressionText(e.value);return 'işaretçi';}
function tokenize(source){
 if(source.length>24000)throw new CError('Fonksiyon en fazla 24.000 karakter olabilir.');
 const out=[];let i=0,line=1;
 while(i<source.length){
  const s=source.slice(i),c=s[0];
  if(/\s/.test(c)){if(c==='\n')line++;i++;continue;}
  if(s.startsWith('//')||c==='#'){while(i<source.length&&source[i]!=='\n')i++;continue;}
  if(s.startsWith('/*')){const end=source.indexOf('*/',i+2);if(end<0)throw new CError('Yorum kapanmamış: */ ekle.',line);line+=(source.slice(i,end).match(/\n/g)||[]).length;i=end+2;continue;}
  let m=/^(?:"(?:\\.|[^"\\\n])*"|'(?:\\.|[^'\\\n])*')/.exec(s);
  if(m){out.push({v:m[0],line,string:true});i+=m[0].length;continue;}
  m=/^(?:[A-Za-z_]\w*|\d+|->|==|!=|<=|>=|&&|\|\||\+\+|--|\+=|-=|\*=|\/=|%=|[{}();,*+\-\/=%!<>?:.&])/.exec(s);
  if(!m)throw new CError('Desteklenmeyen veya tamamlanmamış ifade: '+s.slice(0,16),line);
  out.push({v:m[0],line});i+=m[0].length;
 }
 if(out.length>6000)throw new CError('Bu görev için fonksiyon çok uzun.');
 out.push({v:'EOF',line});return out;
}
class Parser {
 constructor(source){this.tokens=tokenize(source);this.i=0;this.depth=0;}
 peek(n=0){return this.tokens[this.i+n]||this.tokens.at(-1);}
 at(v){return this.peek().v===v;}
 take(v){if(!this.at(v))throw new CError('“'+v+'” bekleniyor; “'+this.peek().v+'” bulundu.',this.peek().line);return this.tokens[this.i++];}
 eat(v){if(this.at(v)){this.i++;return true;}return false;}
 name(){const t=this.peek();if(!/^[A-Za-z_]\w*$/.test(t.v)||t.v==='EOF')throw new CError('Değişken veya fonksiyon adı bekleniyor.',t.line);this.i++;return t.v;}
 isType(){return ['struct','int','void','size_t','long','const','unsigned'].includes(this.peek().v);}
 type(){let pointer=false;while(['const','unsigned','long'].includes(this.peek().v))this.i++;if(this.eat('struct'))this.take('node');else if(['int','void','size_t'].includes(this.peek().v))this.i++;else throw new CError('Tür bekleniyor: int veya struct node *.',this.peek().line);while(this.eat('*'))pointer=true;return pointer;}
 parse(){
  if(this.at('struct')&&this.peek(1).v==='node'&&this.peek(2).v==='{'){this.i+=3;while(!this.at('}')&&!this.at('EOF'))this.i++;this.take('}');this.take(';');}
  const pointer=this.type(),name=this.name();this.take('(');const params=[];
  if(this.at('void')&&this.peek(1).v===')')this.i++;
  else if(!this.at(')'))do{const pointer=this.type();params.push({name:this.name(),pointer});}while(this.eat(','));
  this.take(')');const body=this.statement();this.take('EOF');if(body.kind!=='block')throw new CError('Fonksiyon gövdesini { } içine yaz.');return {name,params,body,pointer};
 }
 declaration(semicolon=true){const line=this.peek().line,pointer=this.type(),items=[];do{let ptr=pointer;while(this.eat('*'))ptr=true;const name=this.name(),value=this.eat('=')?this.expression():null;items.push({name,value,pointer:ptr});}while(this.eat(','));if(semicolon)this.take(';');return {kind:'decl',line,items};}
 statement(){
  if(++this.depth>100)throw new CError('Çok fazla iç içe blok.',this.peek().line);
  try{return this.stmt();}finally{this.depth--;}
 }
 stmt(){
  const line=this.peek().line;
  if(this.eat('{')){const body=[];while(!this.at('}')&&!this.at('EOF'))body.push(this.statement());this.take('}');return {kind:'block',body,line};}
  if(this.eat('if')){this.take('(');const cond=this.expression();this.take(')');const yes=this.statement(),no=this.eat('else')?this.statement():null;return {kind:'if',cond,yes,no,line};}
  if(this.eat('while')){this.take('(');const cond=this.expression();this.take(')');return {kind:'while',cond,body:this.statement(),line};}
  if(this.eat('do')){const body=this.statement();this.take('while');this.take('(');const cond=this.expression();this.take(')');this.take(';');return {kind:'do',cond,body,line};}
  if(this.eat('for')){this.take('(');let init=null;if(!this.at(';'))init=this.isType()?this.declaration(false):{kind:'expr',value:this.expression(),line};this.take(';');const cond=this.at(';')?null:this.expression();this.take(';');const update=this.at(')')?null:this.expression();this.take(')');return {kind:'for',init,cond,update,body:this.statement(),line};}
  if(this.eat('return')){const value=this.at(';')?null:this.expression();this.take(';');return {kind:'return',value,line};}
  for(const kind of ['break','continue'])if(this.eat(kind)){this.take(';');return {kind,line};}
  if(this.isType())return this.declaration();
  if(this.eat(';'))return {kind:'empty',line};
  const value=this.expression();this.take(';');return {kind:'expr',value,line};
 }
 expression(min=0){
  if(++this.depth>100)throw new CError('İfade çok fazla iç içe.',this.peek().line);
  try{
   let left=this.prefix();const precedence={'=':1,'+=':1,'-=':1,'*=':1,'/=':1,'%=':1,'||':3,'&&':4,'==':5,'!=':5,'<':6,'>':6,'<=':6,'>=':6,'+':7,'-':7,'*':8,'/':8,'%':8};
   while(true){const op=this.peek().v,p=precedence[op];if(p===undefined||p<min)break;const line=this.peek().line;this.i++;const right=this.expression(p+(p===1?0:1));left={kind:p===1?'assign':'binary',op,left,right,line};}
   if(min<=2&&this.eat('?')){const yes=this.expression();this.take(':');left={kind:'ternary',cond:left,yes,no:this.expression(2),line:left.line};}
   return left;
  }finally{this.depth--;}
 }
 prefix(){
  const t=this.peek();let node;
  if(this.eat('sizeof')){
   if(this.at('(')&&['struct','int'].includes(this.peek(1).v)){this.i++;const struct=this.at('struct'),pointer=this.type();this.take(')');return {kind:'literal',value:pointer?8:struct?24:4,line:t.line};}
   return {kind:'sizeof',value:this.expression(9),line:t.line};
  }
  if(['!','-','+','*','++','--'].includes(t.v)){this.i++;return {kind:'unary',op:t.v,value:this.expression(9),line:t.line};}
  if(this.eat('(')){
   if(this.isType()){this.type();this.take(')');return this.expression(9);}
   node=this.expression();this.take(')');
  }else if(t.string){this.i++;const value=t.v.slice(1,-1).replace(/\\([ntr\\"'])/g,(_,c)=>({n:'\n',t:'\t',r:'\r'}[c]||c));node={kind:'literal',value:t.v[0]==="'"?value.charCodeAt(0):value,line:t.line};}
  else if(/^\d+$/.test(t.v)){this.i++;node={kind:'literal',value:Number(t.v),line:t.line};}
  else node={kind:'var',name:this.name(),line:t.line};
  while(true){
   if(this.eat('->')||this.eat('.'))node={kind:'field',object:node,name:this.name(),line:t.line};
   else if(this.eat('(')){const args=[];if(!this.at(')'))do{args.push(this.expression());}while(this.eat(','));this.take(')');node={kind:'call',target:node,args,line:t.line};}
   else if(this.at('++')||this.at('--'))node={kind:'post',op:this.tokens[this.i++].v,value:node,line:t.line};
   else break;
  }
  return node;
 }
}
class Machine {
 constructor(task,input,fn,source){this.task=task;this.input=input;this.fn=fn;this.lines=source.split('\n');this.heap=[];this.scopes=[new Map()];this.steps=0;this.line=1;this.output='';this.trace=[];this.initial=[];this.head=this.list(input.a,task.circular);this.second=input.b?this.list(input.b,false):null;this.initial=this.heap.map(n=>({...n}));const args=input.b?[this.head,this.second]:input.value!==undefined?[this.head,input.value]:[this.head];fn.params.forEach((p,i)=>this.scopes[0].set(p.name,{value:args[i],pointer:p.pointer}));this.capture('Başlangıç');}
 fail(message,detail=null){throw new CError(message,this.line,detail);}
 tick(line){if(line)this.line=line;if(++this.steps>16000)this.fail('İşlem sınırı aşıldı. Döngüde geziciyi ilerletiyor musun? Dairesel listede başa dönüşü kontrol et.');}
 alloc(){if(this.heap.length>=150)this.fail('Çok fazla düğüm ayrıldı. malloc döngü içinde sürekli çalışıyor olabilir.');const id=this.heap.length+1;this.heap.push({id,data:UNSET,next:UNSET,prev:UNSET,alive:true});return id;}
 list(values,circular){const ids=values.map(()=>this.alloc());ids.forEach((id,i)=>Object.assign(this.heap[id-1],{data:values[i],next:ids[i+1]||(circular?ids[0]:0),prev:ids[i-1]||0}));return ids[0]||0;}
 variable(name){for(let i=this.scopes.length-1;i>=0;i--)if(this.scopes[i].has(name))return this.scopes[i].get(name);this.fail('“'+name+'” tanımlı değil. Değişken adını ve tanımını kontrol et.');}
 node(id,access={}){if(id===0)this.fail('NULL işaretçiden alan okunuyor. -> kullanmadan önce NULL kontrolü yap.',{kind:'null',...access});const n=Number.isInteger(id)&&this.heap[id-1];if(!n)this.fail('Geçersiz düğüm adresi.',{kind:'address',...access});if(!n.alive)this.fail('free ile bırakılmış düğüme erişiliyor. Devam adresini free çağrısından önce sakla.',{kind:'freed',...access});return n;}
 ref(e){if(e.kind==='var')return this.variable(e.name);if(e.kind==='field'){const n=this.node(this.eval(e.object),{expression:expressionText(e.object),field:e.name});if(!['data','next','prev'].includes(e.name)||e.name==='prev'&&!this.task.doubly)this.fail('Bu düğüm yapısında “'+e.name+'” alanı yok.');return {get value(){return n[e.name];},set value(v){n[e.name]=v;}};}this.fail('Atamanın soluna değişken veya düğüm alanı yazılmalı.');}
 read(ref){if(ref.value===UNSET)this.fail('Başlatılmamış değişken veya düğüm alanı okunuyor. Önce değer ata.');return ref.value;}
 numeric(n){if(typeof n!=='number'||!Number.isFinite(n))this.fail('Bu işlem bir tam sayı bekliyor.');return n;}
 eval(e){
  this.tick(e.line);
  switch(e.kind){
   case 'literal':return e.value;
   case 'sizeof':return e.value.kind==='unary'&&e.value.op==='*'?24:e.value.kind==='var'&&this.variable(e.value.name).pointer?8:4;
   case 'var':return e.name==='NULL'?0:this.read(this.variable(e.name));
   case 'field':return this.read(this.ref(e));
   case 'assign':{const ref=this.ref(e.left),v=this.eval(e.right);ref.value=e.op==='='?v:this.calculate(e.op[0],this.read(ref),v);return ref.value;}
   case 'ternary':return this.eval(e.cond)?this.eval(e.yes):this.eval(e.no);
   case 'binary':{const a=this.eval(e.left);if(e.op==='&&')return a?Number(!!this.eval(e.right)):0;if(e.op==='||')return a?1:Number(!!this.eval(e.right));return this.calculate(e.op,a,this.eval(e.right));}
   case 'post':case 'unary':{
    if(['++','--'].includes(e.op)){const ref=this.ref(e.value),old=this.numeric(this.read(ref));ref.value=old+(e.op==='++'?1:-1);return e.kind==='post'?old:ref.value;}
    const v=this.eval(e.value);if(e.op==='!')return Number(!v);if(e.op==='-')return -this.numeric(v);if(e.op==='+')return this.numeric(v);if(e.op==='*'){this.node(v);return v;}break;
   }
   case 'call':{
    if(e.target.kind!=='var')this.fail('Fonksiyon çağrısı bekleniyor.');const name=e.target.name,args=e.args.map(a=>this.eval(a));
    if(name==='malloc'){if(args.length!==1||args[0]!==24)this.fail('Bir düğüm için malloc(sizeof *yeni) veya malloc(sizeof(struct node)) kullan.');this.allocCalls=(this.allocCalls||0)+1;return this.input.mallocFail||this.input.mallocFailAt===this.allocCalls?0:this.alloc();}
    if(name==='free'){if(args.length!==1)this.fail('free tek adres alır.');if(args[0])this.node(args[0]).alive=false;return 0;}
    if(name==='printf'){if(typeof args[0]!=='string')this.fail('printf için biçim metni yaz: printf("%d ", p->data);');let j=1;const text=args[0].replace(/%%|%[dic]/g,m=>m==='%'+'%'?'%':m==='%c'?String.fromCharCode(this.numeric(args[j++])):String(this.numeric(args[j++])));if(/%[^%dic]/.test(text))this.fail('Bu atölyede printf için %d, %i ve %c desteklenir.');this.output+=text;if(this.output.length>6000)this.fail('Çıktı sınırı aşıldı; döngüyü kontrol et.');return text.length;}
    if(name==='puts'){if(typeof args[0]!=='string')this.fail('puts metin bekler.');this.output+=args[0]+'\n';return 0;}
    this.fail('“'+name+'” bu C atölyesinde desteklenmiyor. malloc, free ve printf kullanabilirsin.');
   }
  }
  this.fail('Bu ifade desteklenmiyor.');
 }
 calculate(op,a,b){
  if(op==='==')return Number(a===b);if(op==='!=')return Number(a!==b);this.numeric(a);this.numeric(b);
  switch(op){case '+':return a+b;case '-':return a-b;case '*':return a*b;case '/':if(!b)this.fail('Sıfıra bölme.');return Math.trunc(a/b);case '%':if(!b)this.fail('Sıfıra bölme.');return a%b;case '<':return Number(a<b);case '>':return Number(a>b);case '<=':return Number(a<=b);case '>=':return Number(a>=b);}this.fail('Desteklenmeyen işlem.');
 }
 capture(title){
  if(this.trace.length>=100)return;
  const id=x=>x===UNSET?'unset':x?'m'+x:null,pointers={};
  for(const scope of this.scopes)for(const [key,v] of scope)if(v.pointer&&v.value!==UNSET)pointers[key]=id(v.value);
  const headVar=this.scopes[0].get(this.fn.params[0]?.name)?.value;
  this.trace.push({title,caption:title,code:this.lines[this.line-1]||'',line:this.line,nodes:this.heap.map(n=>({id:id(n.id),value:n.data===UNSET?'?':n.data,alive:n.alive})),edges:Object.fromEntries(this.heap.map(n=>[id(n.id),id(n.next)])),prev:Object.fromEntries(this.heap.map(n=>[id(n.id),id(n.prev)])),head:id(headVar===undefined?this.head:headVar),second:this.second?id(this.second):null,pointers,focus:[],changed:[],changedPrev:[],circular:!!this.task.circular,doubly:!!this.task.doubly});
 }
 exec(s){
  this.tick(s.line);
  switch(s.kind){
   case 'block':{this.scopes.push(new Map());try{for(const stmt of s.body){const control=this.exec(stmt);if(control)return control;}}finally{this.scopes.pop();}return;}
   case 'decl':for(const d of s.items){const scope=this.scopes.at(-1);if(scope.has(d.name))this.fail('“'+d.name+'” aynı blokta zaten tanımlı.');const cell={value:UNSET,pointer:d.pointer};scope.set(d.name,cell);if(d.value)cell.value=this.eval(d.value);}this.capture('Değişkenleri hazırla');return;
   case 'expr':this.eval(s.value);this.capture('Kodundaki işlem');return;
   case 'if':return this.eval(s.cond)?this.exec(s.yes):s.no?this.exec(s.no):undefined;
   case 'return':{const value=s.value?this.eval(s.value):undefined;this.capture('Fonksiyondan dön');return {kind:'return',value};}
   case 'break':case 'continue':return {kind:s.kind};
   case 'while':case 'do':case 'for':{
    this.scopes.push(new Map());try{
     if(s.init)this.exec(s.init);let first=true;
     while(s.kind==='do'&&first||!s.cond||this.eval(s.cond)){
      first=false;this.tick(s.line);const control=this.exec(s.body);
      if(control?.kind==='return')return control;if(control?.kind==='break')break;
      if(s.update)this.eval(s.update);
     }
    }finally{this.scopes.pop();}return;
   }
  }
 }
 run(){
  const result=this.exec(this.fn.body);
  if(result&&result.kind!=='return')this.fail('break veya continue yalnızca döngü içinde kullanılabilir.');
  if(this.task.id!=='yazdir'&&(!result||result.value===undefined))this.fail('Güncel baş adresini return ile döndür.');
  const head=this.task.id==='yazdir'?this.head:result.value,values=[],seen=new Set();let p=head,previous=0;
  while(p){if(seen.has(p)){if(this.task.circular&&p===head)break;this.fail('Liste beklenmedik bir döngü içeriyor. Son next bağlantısını kontrol et.');}seen.add(p);const n=this.node(p);if(n.data===UNSET||n.next===UNSET)this.fail('Sonuç düğümünün data veya next alanına değer atanmamış.');if(this.task.doubly&&n.prev!==previous)this.fail('prev bağlantısı yanlış. Sonraki komşunun geri okunu da düzelt.');values.push(n.data);previous=p;p=n.next;}
  if(this.task.circular&&head&&p!==head)this.fail('Dairesel listenin son next oku güncel başa dönmeli.');
  if(!this.task.circular&&p)this.fail('Doğrusal liste NULL ile bitmeli.');
  if(this.heap.some(n=>n.alive&&!seen.has(n.id)))this.fail('Bellek sızıntısı: sonuçtan kopan düğüm free edilmemiş.');
  if(this.task.final&&this.initial.some(old=>this.heap[old.id-1].alive&&this.heap[old.id-1].data!==old.data))this.fail('Bu final görevinde eski düğümlerin data değerlerini değiştirme; bağlantıları düzenle.');
  if(this.task.final&&!this.task.code.includes('malloc')&&this.heap.length!==this.initial.length)this.fail('Bu görev mevcut düğümlerle çözülmeli; yeni düğüm ayırma.');
  if(this.task.id==='yazdir'&&this.heap.some((n,i)=>{const old=this.initial[i];return !old||n.data!==old.data||n.next!==old.next||n.alive!==old.alive;}))this.fail('Yazdırma görevi listeyi değiştirmemeli.');
  if((this.task.baseId||this.task.id)==='birlestir'&&this.heap.length!==this.initial.length)this.fail('Birleştirmede yeni düğüm ayırma; mevcut iki zinciri bağla.');
  this.capture('Sonuç');const last=this.trace.at(-1);if(last){last.head=head?'m'+head:null;last.pointers.sonuc=last.head;}
  const actual=this.task.id==='yazdir'?this.output.trim().split(/\s+/).filter(Boolean):values;
  const expected=(this.input.mallocFail?this.input.a:this.input.out).map(x=>this.task.id==='yazdir'?String(x):x);
  return {ok:JSON.stringify(actual)===JSON.stringify(expected),actual,expected,trace:this.trace,output:this.output};
 }
}
function testsFor(task){
 const tests=task.tests.map(x=>({...x}));
 for(const delta of [17,-31])for(const t of task.tests)tests.push({...t,a:t.a.map(x=>x+delta),b:t.b?.map(x=>x+delta),value:t.value===undefined?undefined:t.value+delta,out:t.out.map(x=>x+delta),variant:true});
 if(task.code.includes('malloc'))for(const t of task.tests.slice(0,2))tests.push({...t,out:t.a,mallocFail:true});
 if(task.final&&(task.code.match(/malloc\(/g)||[]).length>1)for(const t of task.tests.slice(0,2))tests.push({...t,out:t.a,mallocFailAt:2});
 return tests;
}
function diagnose(task,row,source,index){
 const input=row.input,detail=row.detail||{},count=input.a.length;
 let scenario=input.mallocFail?'malloc başarısızlığı denendi: yeni düğüm için NULL döndü.':input.mallocFailAt?input.mallocFailAt+'. malloc çağrısının başarısızlığı denendi.':count===0?'Boş listeyle denendi: ilk liste başı NULL.':count===1?'Tek düğümlü listeyle denendi: ilk düğümün next alanı '+(task.circular?'kendi başına dönüyor.':'NULL.') :count+' düğümlü listeyle denendi.';
 if(input.b)scenario+=' İkinci listede '+input.b.length+' kayıt var.';
 if(input.value!==undefined)scenario+=' İşlem değeri: '+input.value+'.';
 let problem=row.message,suggestion='Bu testin başlangıç listesini ve beklenen sonucu karşılaştır. Okların hangi düğümü göstermesi gerektiğini adım adım izle.';
 if(detail.kind==='null'){
  if(detail.expression)problem=detail.expression+' NULL. '+detail.expression+'->'+detail.field+' alanına erişilemiyor.';
  if(input.mallocFail||input.mallocFailAt)suggestion='malloc sonucunu alanlara erişmeden önce kontrol et. NULL döndüğünde mevcut listenin başını koruyarak dön.';
  else if(!count)suggestion=task.code.includes('malloc')?'Boş listede eski başın alanına erişme. Yeni düğümü baş olarak döndür; eski head üzerinden bağlantı kurma.':'İlk düğümün alanını okumadan önce boş liste durumunu ele al. Silme görevinde boş listenin başı NULL olarak kalır.';
  else if(task.circular)suggestion='Dairesel listede son düğüm başa döner. Gezicinin ve kullandığın komşunun adresini, alanına erişmeden önce kontrol et.';
  else if(detail.expression?.includes('->'))suggestion='Bir sonraki komşu mevcut olmayabilir. '+detail.expression+' adresinin NULL olmadığını doğrulamadan onun alanına erişme. Tek düğüm ve listenin sonu durumunu ayrı düşün.';
  else suggestion='Gezici listenin dışına çıkmış olabilir. Döngünün nerede durduğunu ve -> kullanmadan önce bu işaretçinin geçerli olduğunu kontrol et.';
 }else if(detail.kind==='freed'){
  problem=(detail.expression?detail.expression+' adresindeki düğüm':'Erişilen düğüm')+' daha önce free ile bırakılmış.';
  suggestion='Sonraki düğümün adresini free çağrısından önce başka bir işaretçiye al. free sonrasında aynı düğümün next, prev veya data alanını okuma.';
 }else if(/sızıntısı/.test(problem))suggestion=input.mallocFailAt?'İkinci alan ayırma başarısızsa, daha önce ayırdığın ilk düğümün belleğini de bırak; eski listeyi koruyarak dön.':'Zincirden çıkardığın düğümün adresini sakla. Komşuları bağladıktan sonra o düğümü free ile bırak; yalnızca oku değiştirmek belleği bırakmaz.';
 else if(/prev bağlantısı/.test(problem))suggestion='İleri oku düzelttiğin gibi sonraki komşunun prev okunu da düzelt. Yeni başın prev alanı NULL olmalı; geri yönde komşular birbirini göstermeli.';
 else if(/sınırı/.test(problem))suggestion=task.circular?'Her turda geziciyi ilerlet ve başlangıca döndüğünde aramayı bitir. Dolu dairede NULL beklemek döngüyü bitirmez.':'Her turda gezicinin next ile ilerlediğini kontrol et. Koşulun son düğümde mi yoksa NULL olduğunda mı durması gerektiğini soruya göre seç.';
 else if(/Dairesel/.test(problem))suggestion='Baş değiştiyse son düğümün next alanını da güncelle. Son ok eski başa veya NULL’a değil, güncel başa dönmeli.';
 else if(/Sonuç beklenenle/.test(problem)){
  const position=row.expected.findIndex((value,i)=>value!==row.actual[i]);const at=position<0?Math.min(row.actual.length,row.expected.length):position;
  problem='İlk fark '+(at+1)+'. kayıtta: beklenen '+(row.expected[at]??'listenin bitmesi')+', gelen '+(row.actual[at]??'listenin bitmesi')+'.';
  suggestion='Sıra numarası ile data değerini ayır. İlk farklı kaydın hemen öncesindeki next bağlantısını ve döndürdüğün baş adresini incele.';
 }
 return {title:'Nerede takıldı?',testIndex:index,line:row.line||null,scenario,problem,suggestion,expression:detail.expression||null,codeLine:row.line?source.split('\n')[row.line-1]||'':''};
}
function check(task,source){
 let fn;try{fn=new Parser(source).parse();const expected=new Parser(task.code).parse();if(fn.name!==expected.name)throw new CError('Fonksiyon adı “'+expected.name+'” olmalı. Parametre ve yerel değişken adlarını seçebilirsin.');if(fn.params.length!==expected.params.length||fn.pointer!==expected.pointer||fn.params.some((p,i)=>p.pointer!==expected.params[i].pointer))throw new CError('Fonksiyon başlığının türlerini kontrol et: '+task.signature);}catch(e){return {ok:false,message:e.message,line:e.line||1,rows:[],diagnostic:{title:'Önce C yazımını kontrol edelim',line:e.line||1,scenario:'Fonksiyon çalıştırılmadı; testlere henüz geçilmedi.',problem:e.message,suggestion:'İşaretlenen satırın yanındaki noktalı virgülü, parantezleri ve fonksiyon başlığını kontrol et.',codeLine:source.split('\n')[(e.line||1)-1]||''}};}
 const rows=[];
 for(const input of testsFor(task)){
  let machine;try{machine=new Machine(task,input,fn,source);const r=machine.run();rows.push({input,...r,message:r.ok?'Geçti':'Sonuç beklenenle uyuşmuyor.'});}catch(e){rows.push({input,ok:false,stopped:true,expected:input.out,actual:[],trace:machine?.trace||[],message:e.message,line:e.line||1,detail:e.detail});}
 }
 const failedIndex=rows.findIndex(r=>!r.ok),failed=rows[failedIndex];return {ok:!failed,rows,line:failed?.line,diagnostic:failed?diagnose(task,failed,source,failedIndex):null,message:failed?failed.message:rows.length+' test geçti. Liste ve bellek kontrolleri doğru.'};
}
g.CLabEngine={check,testsFor,Parser};
})(typeof window==='undefined'?globalThis:window);
