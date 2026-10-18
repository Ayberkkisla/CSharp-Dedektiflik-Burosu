(function(g){
'use strict';
// A bounded, expression-based teaching runner. Student source never becomes JavaScript.
const types=new Set(['byte','sbyte','short','ushort','int','uint','long','ulong','float','double','decimal','string','char','bool','var']);
const integral=t=>['byte','sbyte','short','ushort','int','uint','long','ulong'].includes(t);
function run(source,input){
 if(source.length>16000)throw Error('Kod çok uzun. Bu vakada kısa bir konsol programı yeterli.');
 const tokens=[];let p=0,line=1;
 while(p<source.length){const s=source.slice(p);let m;if((m=/^\s+/.exec(s))){line+=(m[0].match(/\n/g)||[]).length;p+=m[0].length;continue;}if((m=/^\/\/[^\n]*/.exec(s))||(m=/^\/\*[\s\S]*?\*\//.exec(s))){line+=(m[0].match(/\n/g)||[]).length;p+=m[0].length;continue;}
  m=/^(?:"(?:\\.|[^"\\\r\n])*"|'(?:\\.|[^'\\\r\n])'|\d+(?:\.\d+)?(?:[eE][+-]?\d+)?[mMdDfFlL]?|[A-Za-z_][A-Za-z_0-9]*|==|!=|<=|>=|&&|\|\||\+=|-=|\*=|\/=|%=|[+*/%<>=!;,.(){}?-])/.exec(s);
  if(!m)throw Error('Satır '+line+': tanınmayan karakter.');tokens.push({s:m[0],line});p+=m[0].length;
 }
 tokens.push({s:'EOF',line});let pos=0,steps=0;const vars=Object.create(null),trace=[],outputs=[],inputs=input.map(String);let cursor=0,buffer='';
 const peek=()=>tokens[pos].s,take=()=>{if(peek()==='EOF')fail('Kod beklenmedik yerde bitti. Parantez ve noktalı virgülleri kontrol et.');return tokens[pos++];},eat=x=>{if(peek()===x){pos++;return true;}return false;},expect=x=>{if(!eat(x))fail('“'+x+'” bekleniyor.');},fail=message=>{throw Error('Satır '+tokens[Math.min(pos,tokens.length-1)].line+': '+message);};
 const value=(v,t)=>({v,t}),num=v=>{if(typeof v.v!=='number')fail('Bu işlemde sayısal değer gerekli.');return v.v;};
 function cast(v,t,explicit=false){if(t==='var')return {...v};if(t==='string'){if(v.t!=='string'&&!explicit)fail('string değişkenine metin atanmalı.');return value(String(v.v),'string');}if(t==='char'){if(v.t!=='char')fail('char için tek tırnaklı bir karakter kullan.');return value(v.v,t);}if(t==='bool'){if(v.t!=='bool')fail('bool için true veya false gerekli.');return value(v.v,t);}if(!explicit&&((t==='decimal'&&['double','float'].includes(v.t))||(['double','float'].includes(t)&&v.t==='decimal')||(t==='float'&&v.t==='double')))fail('Bu sayısal türler için açık dönüşüm gerekli.');
  let n=num(v);if(integral(t)){if(!integral(v.t)&&!explicit)fail('Ondalıklı değeri tam sayıya dönüştürmek için açık dönüşüm kullan.');n=Math.trunc(n);const ranges={byte:[0,255],sbyte:[-128,127],short:[-32768,32767],ushort:[0,65535],int:[-2147483648,2147483647],uint:[0,4294967295]};const r=ranges[t]||[-Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER];if(n<r[0]||n>r[1])fail(t+' sınırı aşıldı.');}if(!Number.isFinite(n)||Math.abs(n)>Number.MAX_SAFE_INTEGER)fail('Bu çalışma alanındaki sayı sınırı aşıldı.');return value(n,t);}
 const fmt=v=>typeof v.v==='boolean'?(v.v?'True':'False'):typeof v.v==='number'?String(Number(v.v.toPrecision(13))):String(v.v);
 function bin(op,a,b){if(op==='+'&&(a.t==='string'||b.t==='string'))return value(fmt(a)+fmt(b),'string');if(['==','!=','<','>','<=','>='].includes(op)){const x=a.v,y=b.v;return value(op==='=='?x===y:op==='!='?x!==y:op==='<'?x<y:op==='>'?x>y:op==='<='?x<=y:x>=y,'bool');}if(op==='&&'||op==='||'){if(a.t!=='bool'||b.t!=='bool')fail('Mantıksal işlem bool değerler ister.');return value(op==='&&'?a.v&&b.v:a.v||b.v,'bool');}
  if((a.t==='decimal'&&['float','double'].includes(b.t))||(b.t==='decimal'&&['float','double'].includes(a.t)))fail('decimal ile double/float doğrudan birlikte kullanılamaz; tür dönüşümü yap.');
  const x=num(a),y=num(b),t=['decimal','double','float','ulong','long','uint'].find(t=>a.t===t||b.t===t)||'int';if((op==='/'||op==='%')&&y===0)fail('Sıfıra bölme yapılamaz.');let n=op==='+'?x+y:op==='-'?x-y:op==='*'?x*y:op==='/'?x/y:x%y;if(op==='/'&&integral(t))n=Math.trunc(n);return cast(value(n,t),t);
 }
 const precedence={'||':1,'&&':2,'==':3,'!=':3,'<':4,'>':4,'<=':4,'>=':4,'+':5,'-':5,'*':6,'/':6,'%':6};
 function expression(min=0){let a=primary();while(precedence[peek()]>=min){const op=take().s,b=expression(precedence[op]+1);a={kind:'binary',op,a,b};}return a;}
 function primary(){let a;const t=take(),s=t.s;if(['+','-','!'].includes(s))a={kind:'unary',op:s,a:primary()};else if(s==='('){if(types.has(peek())&&tokens[pos+1].s===')'){const type=take().s;expect(')');a={kind:'cast',type,a:primary()};}else{a=expression();expect(')');}}
  else if(/^\d/.test(s))a={kind:'literal',val:value(Number(s.replace(/[mMdDfFlL]$/,'')),/[mM]$/.test(s)?'decimal':/[fF]$/.test(s)?'float':/[lL]$/.test(s)?'long':/[.eEdD]/.test(s)?'double':'int')};
  else if(s[0]==='"'||s[0]==="'"){const inner=s.slice(1,-1).replace(/\\([\\"'nrt])/g,(_,c)=>({n:'\n',r:'\r',t:'\t'}[c]||c));a={kind:'literal',val:value(inner,s[0]==="'"?'char':'string')};}
  else if(s==='true'||s==='false')a={kind:'literal',val:value(s==='true','bool')};else if(/^[A-Za-z_]\w*$/.test(s))a={kind:'name',name:s};else fail('Bir değer veya değişken bekleniyor.');
  while(peek()==='.'||peek()==='('){if(eat('.'))a={kind:'member',a,name:take().s};else{expect('(');const args=[];if(peek()!==')'){do{args.push(expression());}while(eat(','));}expect(')');a={kind:'call',a,args};}}return a;
 }
 function path(a){return a.kind==='name'?a.name:a.kind==='member'?path(a.a)+'.'+a.name:'';}
 function evaluate(a){if(++steps>4000)fail('Çalıştırma sınırına ulaşıldı.');if(a.kind==='literal')return {...a.val};if(a.kind==='name'){if(!Object.hasOwn(vars,a.name))fail('“'+a.name+'” değişkeni henüz tanımlı değil.');if(vars[a.name].v===undefined)fail('“'+a.name+'” değişkenine önce değer ata.');return {...vars[a.name]};}if(a.kind==='cast')return cast(evaluate(a.a),a.type,true);if(a.kind==='unary'){const v=evaluate(a.a);if(a.op==='!'){if(v.t!=='bool')fail('! işlemi bool ister.');return value(!v.v,'bool');}return value(a.op==='-'?-num(v):num(v),v.t);}if(a.kind==='binary')return bin(a.op,evaluate(a.a),evaluate(a.b));
  if(a.kind==='call'){const name=path(a.a),args=a.args.map(evaluate);if(name==='Console.ReadLine'||name==='System.Console.ReadLine'){if(args.length)fail('ReadLine parametre almaz.');if(cursor>=inputs.length)fail('Soruda verilenlerden fazla giriş okundu.');return value(inputs[cursor++],'string');}
   if(/^(?:System\.)?Console\.Write(?:Line)?$/.test(name)){if(args.length>1)fail('Bu alanda WriteLine için tek ifade veya metin birleştirme kullan.');buffer+=args.length?fmt(args[0]):'';if(name.endsWith('Line')){outputs.push(buffer);buffer='';}return value('','string');}
   const conversions={'int.Parse':'int','long.Parse':'long','double.Parse':'double','float.Parse':'float','decimal.Parse':'decimal','Convert.ToInt32':'int','Convert.ToInt64':'long','Convert.ToDouble':'double','Convert.ToDecimal':'decimal','Convert.ToSingle':'float'};
   if(conversions[name]){if(args.length!==1)fail('Dönüşüm bir değer ister.');let n=Number(args[0].v);if(String(args[0].v).trim()===''||!Number.isFinite(n))fail('Giriş sayıya çevrilemiyor.');if(integral(conversions[name])&&args[0].t==='string'&&!/^[+-]?\d+$/.test(args[0].v))fail('Tam sayı girişi bekleniyor.');if(/^Convert\.ToInt/.test(name)&&!integral(args[0].t)&&args[0].t!=='string'){const f=Math.floor(n),d=n-f;n=d===.5?(f%2===0?f:f+1):Math.round(n);}return cast(value(n,conversions[name]),conversions[name],true);}
   if(name==='Convert.ToString'){if(args.length!==1)fail('Bir değer gerekli.');return value(fmt(args[0]),'string');}
   if(a.a.kind==='member'&&a.a.name==='ToString'){const v=evaluate(a.a.a);if(!args.length)return value(fmt(v),'string');if(args.length===1&&/^[fF][0-6]$/.test(args[0].v))return value(num(v).toFixed(Number(args[0].v[1])),'string');fail('ToString için F0–F6 biçimi kullanabilirsin.');}
   fail('Bu çalışma alanında “'+name+'” desteklenmiyor. Kullanılabilen parçalar bölümüne bak.');
  }fail('Bu ifade desteklenmiyor.');
 }
 function record(l,note){trace.push({line:l,note,vars:Object.fromEntries(Object.entries(vars).map(([k,v])=>[k,{...v}])),output:[...outputs,...(buffer?[buffer]:[])]});}
 // Optional conventional Program/Main wrapper; braces inside quoted text remain untouched.
 while(peek()==='using'){while(peek()!==';'&&peek()!=='EOF')take();expect(';');}
 let wrappers=0;if(['public','internal','class'].includes(peek())){eat('public');eat('internal');expect('class');take();expect('{');wrappers++;eat('public');eat('private');expect('static');expect('void');expect('Main');expect('(');if(peek()!==')')fail('Bu alanda Main() kullan veya yalnızca konsol satırlarını yaz.');expect(')');expect('{');wrappers++;}
 while(peek()!=='EOF'&&peek()!=='}'){
  if(trace.length>=100)fail('Bu vaka için en fazla 100 işlem satırı kullan.');const l=tokens[pos].line;
  if(eat(';'))continue;
  if(types.has(peek())){const type=take().s;do{const name=take().s;if(!/^[A-Za-z_]\w*$/.test(name)||types.has(name)||Object.hasOwn(vars,name))fail('Geçerli ve yeni bir değişken adı gerekli.');if(eat('=')){const val=evaluate(expression());vars[name]=cast(val,type);record(l,name+' ← '+fmt(vars[name])+' ('+vars[name].t+')');}else{if(type==='var')fail('var tanımlarken başlangıç değeri gerekli.');vars[name]=value(undefined,type);record(l,name+' için '+type+' kutusu açıldı.');}}while(eat(','));expect(';');}
  else if(/^[A-Za-z_]\w*$/.test(peek())&&['=','+=','-=','*=','/=','%='].includes(tokens[pos+1].s)){const name=take().s,op=take().s;if(!Object.hasOwn(vars,name))fail(name+' henüz tanımlı değil.');let v=evaluate(expression());if(op!=='=')v=bin(op[0],vars[name],v);vars[name]=cast(v,vars[name].t);expect(';');record(l,name+' ← '+fmt(vars[name]));}
  else{const a=expression();if(a.kind!=='call')fail('Atama veya Console işlemi bekleniyor.');evaluate(a);expect(';');record(l,outputs.length?'Konsola yazıldı → '+outputs.at(-1):'İşlem tamamlandı.');}
 }
 while(wrappers--){expect('}');}if(peek()!=='EOF')fail('Bu ünitede düz konsol satırları kullan.');if(buffer)outputs.push(buffer);return {output:outputs,trace,read:cursor};
}
function matches(actual,expected){if(actual.length!==expected.length)return false;return actual.every((s,i)=>{const a=String(s).trim(),b=String(expected[i]).trim();if(a===b)return true;const numeric=/^[+-]?\d+(?:[.,]\d+)?(?:e[+-]?\d+)?$/i;if(!numeric.test(a)||!numeric.test(b))return false;return Math.abs(Number(a.replace(',','.'))-Number(b.replace(',','.')))<=1e-8*Math.max(1,Math.abs(Number(b)));});}
g.CinemaEngine={run,matches};
})(typeof window!=='undefined'?window:globalThis);
