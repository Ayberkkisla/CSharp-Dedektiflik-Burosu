(function(g){
'use strict';
// Bounded C# teaching interpreter. Source is parsed, never evaluated as JavaScript.
const types=new Set('byte sbyte short ushort int uint long ulong float double decimal string char bool object var'.split(' '));
const ranges={byte:[0n,255n],sbyte:[-128n,127n],short:[-32768n,32767n],ushort:[0n,65535n],int:[-2147483648n,2147483647n],uint:[0n,4294967295n],long:[-9223372036854775808n,9223372036854775807n],ulong:[0n,18446744073709551615n]};
const V=(t,v)=>({t,v}),integral=t=>Object.hasOwn(ranges,t);
function dec(s){s=String(s);if(!/^[+-]?\d+(\.\d+)?$/.test(s))throw Error('Geçerli bir ondalık sayı gerekli.');const n=(s.split('.')[1]||'').length;return {n:BigInt(s.replace('.','')),d:10n**BigInt(n)};}
function fmt(x){if(x.t==='object')return x.v?fmt(x.v):'';if(x.t==='null')return '';if(x.t==='bool')return x.v?'True':'False';if(x.t==='decimal'){let {n,d}=x.v,negative=n<0n;n=negative?-n:n;let out=(n/d).toString(),r=n%d,f='';for(let i=0;r&&i<12;i++){r*=10n;f+=r/d;r%=d;}return (negative?'-':'')+out+(f?'.'+f:'');}if(x.t==='key')return x.v;return String(x.v);}
const numeric=x=>integral(x.t)||['float','double','decimal'].includes(x.t);
const number=x=>x.t==='decimal'?Number(x.v.n)/Number(x.v.d):Number(x.v);
function cast(x,t,explicit=false){
 if(t==='var')return x;if(t==='object')return x.t==='null'?V('object',null):V('object',x);
 if(x.t==='object'){if(!x.v||x.v.t!==t)throw Error('Kutudaki değer '+t+' türünde değil.');return x.v;}
 if(x.t===t)return x;
 if(t==='string'){if(x.t==='null')return V('string',null);throw Error('Metin üretmek için + veya ToString kullan.');}
 if(t==='char'||t==='bool')throw Error(t+' için uygun türde değer gerekli.');
 if(!numeric(x))throw Error('Önce metni Parse veya Convert ile sayıya çevir.');
 if(integral(t)){if(!explicit&&(!integral(x.t)||!(['int'].includes(x.t)&&x.v>=ranges[t][0]&&x.v<=ranges[t][1])&&!((t==='long'&&['byte','sbyte','short','ushort','int','uint'].includes(x.t))||(t==='ulong'&&['byte','ushort','uint'].includes(x.t)))))throw Error('Bu atama için açık tür dönüşümü gerekli.');const n=integral(x.t)?x.v:BigInt(Math.trunc(number(x)));if(n<ranges[t][0]||n>ranges[t][1])throw Error(t+' değer aralığı aşıldı.');return V(t,n);}
 if(!explicit&&((t==='float'&&x.t==='double')||(t==='decimal'&&['float','double'].includes(x.t))||(['float','double'].includes(t)&&x.t==='decimal')))throw Error('Bu türler arasında açık dönüşüm gerekli.');
 return t==='decimal'?V(t,integral(x.t)?{n:x.v,d:1n}:dec(fmt(x))):V(t,t==='float'?Math.fround(number(x)):number(x));
}
function bool(x){if(x.t!=='bool')throw Error('Koşulun bool olması gerekli.');return x.v;}
function binary(op,a,b){
 if(op==='+'&&(a.t==='string'||b.t==='string'))return V('string',fmt(a)+fmt(b));
 if(['==','!='].includes(op)){const equal=a.t==='null'||b.t==='null'?(a.t==='null'||a.v===null)&&(b.t==='null'||b.v===null):numeric(a)&&numeric(b)?(integral(a.t)&&integral(b.t)?a.v===b.v:number(a)===number(b)):a.t===b.t&&a.v===b.v;return V('bool',op==='=='?equal:!equal);}
 if(a.t==='bool'&&b.t==='bool'&&['&','|','^'].includes(op))return V('bool',op==='&'?a.v&&b.v:op==='|'?a.v||b.v:a.v!==b.v);
 if(!numeric(a)||!numeric(b))throw Error('Bu işlem sayısal değerler ister.');
 if(['<','>','<=','>='].includes(op)){const x=integral(a.t)&&integral(b.t)?a.v:number(a),y=integral(a.t)&&integral(b.t)?b.v:number(b);return V('bool',op==='<'?x<y:op==='>'?x>y:op==='<='?x<=y:x>=y);}
 if(['&','|','^','<<','>>'].includes(op)){if(!integral(a.t)||!integral(b.t))throw Error('Bit işlemi tam sayı ister.');const shift=b.v&BigInt(['long','ulong'].includes(a.t)?63:31),v=op==='&'?a.v&b.v:op==='|'?a.v|b.v:op==='^'?a.v^b.v:op==='<<'?a.v<<shift:a.v>>shift;return cast(V(a.t,v),a.t,true);}
 if((a.t==='decimal'&&['float','double'].includes(b.t))||(b.t==='decimal'&&['float','double'].includes(a.t)))throw Error('decimal ve kayan nokta türleri doğrudan karıştırılamaz.');
 const t=['decimal','double','float','ulong','long','uint'].find(t=>a.t===t||b.t===t)||'int';
 if(t==='decimal'){const x=cast(a,'decimal',true).v,y=cast(b,'decimal',true).v;if(['/','%'].includes(op)&&y.n===0n)throw Error('Sıfıra bölme yapılamaz.');return V(t,op==='+'?{n:x.n*y.d+y.n*x.d,d:x.d*y.d}:op==='-'?{n:x.n*y.d-y.n*x.d,d:x.d*y.d}:op==='*'?{n:x.n*y.n,d:x.d*y.d}:op==='/'?{n:x.n*y.d,d:x.d*y.n}:{n:(x.n*y.d)%(y.n*x.d),d:x.d*y.d});}
 let x=integral(t)?a.v:number(a),y=integral(t)?b.v:number(b);if(['/','%'].includes(op)&&(y===0n||y===0))throw Error('Sıfıra bölme yapılamaz.');let v=op==='+'?x+y:op==='-'?x-y:op==='*'?x*y:op==='/'?x/y:x%y;if(t==='float')v=Math.fround(v);if(integral(t)&&(v<ranges[t][0]||v>ranges[t][1]))throw Error(t+' değer aralığı aşıldı.');return V(t,v);
}
function run(source,inputs=[],keys=['E']){
 if(source.length>18000)throw Error('Kod sınırı aşıldı.');
 const tokens=[];let p=0,line=1;
 while(p<source.length){const s=source.slice(p);let m;if((m=/^\s+|^\/\/[^\n]*|^\/\*[\s\S]*?\*\//.exec(s))){line+=(m[0].match(/\n/g)||[]).length;p+=m[0].length;continue;}
 if(s.startsWith('$"')){m=/^\$"((?:\\.|[^"\\\r\n])*)"/.exec(s);if(!m)throw Error('Interpolasyon metni kapanmadı.');const body=m[1],parts=['""'];let start=0;for(const field of body.matchAll(/\{([^{}]+)\}/g)){if(field.index>start)parts.push('"'+body.slice(start,field.index)+'"');parts.push('('+field[1]+')');start=field.index+field[0].length;}if(start<body.length)parts.push('"'+body.slice(start)+'"');source=source.slice(0,p)+'('+parts.join(' + ')+')'+source.slice(p+m[0].length);if(source.length>24000)throw Error('Interpolasyon sınırı aşıldı.');continue;}
 m=/^(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])'|\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(?:[uU][lL]?|[lL][uU]?|[fFdDmM])?|[A-Za-z_]\w*|<<|>>|\+\+|--|&&|\|\||==|!=|<=|>=|\+=|-=|\*=|\/=|%=|&=|\|=|\^=|[();.,?:+\-*/%<>=!~&|^])/.exec(s);if(!m)throw Error(line+'. satır: desteklenmeyen işaret '+s[0]);tokens.push({s:m[0],line});p+=m[0].length;}
 tokens.push({s:'EOF',line});p=0;const vars=Object.create(null),trace=[],output=[];let buffer='',input=0,key=0,budget=5000;
 const peek=()=>tokens[p].s,take=()=>{if(peek()==='EOF')throw Error('Kod beklenmedik yerde bitti.');return tokens[p++];},eat=s=>peek()===s?(p++,true):false,need=s=>{if(!eat(s))throw Error(tokens[p].line+'. satır: '+s+' bekleniyor.');};
 const prec={'||':1,'&&':2,'|':3,'^':4,'&':5,'==':6,'!=':6,'<':7,'>':7,'<=':7,'>=':7,is:7,as:7,'<<':8,'>>':8,'+':9,'-':9,'*':10,'/':10,'%':10};
 function expr(min=0){let a=primary();while(prec[peek()]!==undefined&&prec[peek()]>=min){const op=take().s;const b=['is','as'].includes(op)?{k:'type',t:take().s}:expr(prec[op]+1);a={k:'bin',op,a,b};}if(min===0&&eat('?')){const yes=expr();need(':');a={k:'choose',a,yes,no:expr()};}return a;}
 function primary(){const s=take().s;let a;if(['!','~','-','+','++','--'].includes(s))a={k:'un',op:s,a:primary()};else if(s==='('){if(types.has(peek())&&tokens[p+1].s===')'){const t=take().s;need(')');a={k:'cast',t,a:primary()};}else{a=expr();need(')');}}else if(s==='out')a={k:'out',name:take().s};else if(s==='null')a={k:'value',v:V('null',null)};else if(['true','false'].includes(s))a={k:'value',v:V('bool',s==='true')};else if(s[0]==='"'||s[0]==="'"){const v=s.slice(1,-1).replace(/\\([nrt\\"'])/g,(_,c)=>({n:'\n',r:'\r',t:'\t'}[c]||c));a={k:'value',v:V(s[0]==='"'?'string':'char',v)};}else if(/^\d/.test(s)){const suffix=(s.match(/[a-z]+$/i)||[''])[0].toLowerCase(),raw=s.slice(0,s.length-suffix.length);let t=suffix.includes('m')?'decimal':suffix.includes('f')?'float':suffix.includes('d')||/[.eE]/.test(raw)?'double':suffix.includes('u')&&suffix.includes('l')?'ulong':suffix.includes('l')?'long':suffix.includes('u')?'uint':'int';const v=integral(t)?BigInt(raw):t==='decimal'?dec(raw):t==='float'?Math.fround(Number(raw)):Number(raw);a={k:'value',v:V(t,v)};}else if(/^[A-Za-z_]\w*$/.test(s))a={k:'name',name:s};else throw Error('Değer veya değişken bekleniyor: '+s);
 while(true){if(eat('.'))a={k:'member',a,name:take().s};else if(eat('(')){const args=[];if(peek()!==')'){do{args.push(expr());}while(eat(','));}need(')');a={k:'call',a,args};}else if(['++','--'].includes(peek()))a={k:'post',a,op:take().s};else break;}return a;}
 const path=a=>a.k==='name'?a.name:a.k==='member'?path(a.a)+'.'+a.name:'';
 function evaluate(a){if(--budget<0)throw Error('İşlem sınırına ulaşıldı.');if(a.k==='value')return a.v;if(a.k==='name'){if(!Object.hasOwn(vars,a.name))throw Error(a.name+' henüz tanımlanmadı.');if(!vars[a.name].value)throw Error(a.name+' için başlangıç değeri gerekli.');return vars[a.name].value;}
 if(a.k==='cast')return cast(evaluate(a.a),a.t,true);
 if(a.k==='choose')return bool(evaluate(a.a))?evaluate(a.yes):evaluate(a.no);
 if(a.k==='post'||a.k==='un'&&['++','--'].includes(a.op)){if(a.a.k!=='name')throw Error('Sayaç bir değişken olmalı.');const old=evaluate(a.a),v=cast(binary(a.op==='++'?'+':'-',old,V('int',1n)),vars[a.a.name].type,true);vars[a.a.name].value=v;return a.k==='post'?old:v;}
 if(a.k==='un'){const x=evaluate(a.a);if(a.op==='!')return V('bool',!bool(x));if(a.op==='~'){if(!integral(x.t))throw Error('~ tam sayı ister.');return V(x.t,~x.v);}if(!numeric(x))throw Error('Sayısal değer gerekli.');return a.op==='+'?x:binary('-',V('int',0n),x);}
 if(a.k==='bin'){const x=evaluate(a.a);if(a.op==='&&')return V('bool',bool(x)&&bool(evaluate(a.b)));if(a.op==='||')return V('bool',bool(x)||bool(evaluate(a.b)));if(a.op==='is'){const unboxed=x.t==='object'?x.v:x;return V('bool',!!unboxed&&unboxed.t!=='null'&&(a.b.t==='object'||unboxed.t===a.b.t));}if(a.op==='as'){if(!['string','object'].includes(a.b.t))throw Error('as bu çalışmada referans türü ister.');const unboxed=x.t==='object'?x.v:x;return unboxed&&unboxed.t===a.b.t?unboxed:V('null',null);}return binary(a.op,x,evaluate(a.b));}
 if(a.k==='member'){const v=evaluate(a.a);if(v.t==='key'&&a.name==='KeyChar')return V('char',v.v);throw Error('Desteklenmeyen özellik: '+a.name);}
 if(a.k==='call')return call(a);throw Error('Desteklenmeyen ifade.');}
 function call(a){const name=path(a.a);if(name==='Console.ReadLine'){if(input>=inputs.length)throw Error('Kanıttaki girişler tükendi.');return V('string',String(inputs[input++]));}if(name==='Console.ReadKey')return V('key',String(keys[key++]||'E'));
 if(name==='int.TryParse'){if(a.args.length!==2||a.args[1].k!=='out')throw Error('TryParse için out değişkeni gerekli.');const s=fmt(evaluate(a.args[0])).trim(),n=/^[+-]?\d+$/.test(s)?BigInt(s):null,ok=n!==null&&n>=ranges.int[0]&&n<=ranges.int[1],id=a.args[1].name;if(!vars[id]||vars[id].type!=='int')throw Error('out için önce int değişkeni tanımla.');vars[id].value=V('int',ok?n:0n);return V('bool',ok);}
 const args=a.args.map(evaluate);
 if(['Console.Write','Console.WriteLine'].includes(name)){buffer+=args.map(fmt).join('');if(name.endsWith('Line')){output.push(buffer);buffer='';}return V('null',null);}
 if(/^(?:byte|sbyte|short|ushort|int|uint|long|ulong|float|double|decimal|bool)\.Parse$/.test(name)||/^Convert\.To/.test(name)){const mapping={Byte:'byte',SByte:'sbyte',Int16:'short',UInt16:'ushort',Int32:'int',UInt32:'uint',Int64:'long',UInt64:'ulong',Single:'float',Double:'double',Decimal:'decimal',Boolean:'bool',String:'string',Char:'char'},t=name.startsWith('Convert')?mapping[name.slice(10)]:name.split('.')[0];if(!t||args.length!==1)throw Error('Dönüşüm için tek değer gerekli.');if(t==='string')return V('string',fmt(args[0]));if(t==='bool'){if(!/^(true|false)$/i.test(fmt(args[0])))throw Error('true veya false bekleniyor.');return V('bool',fmt(args[0]).toLowerCase()==='true');}if(t==='char'){if(fmt(args[0]).length!==1)throw Error('Tek karakter gerekli.');return V('char',fmt(args[0]));}const s=fmt(args[0]).trim();if(integral(t)){if(!/^[+-]?\d+$/.test(s))throw Error('Tam sayı bekleniyor.');const n=BigInt(s);if(n<ranges[t][0]||n>ranges[t][1])throw Error(t+' değer aralığı aşıldı.');return V(t,n);}return t==='decimal'?V(t,dec(s)):V(t,t==='float'?Math.fround(Number(s)):Number(s));}
 if(a.a.k==='member'&&a.a.name==='ToString'){const x=evaluate(a.a.a);if(!args.length)return V('string',fmt(x));const pattern=fmt(args[0]);if(!/^[Ff][0-6]$/.test(pattern))throw Error('F0–F6 biçimi gerekli.');return V('string',number(x).toFixed(Number(pattern[1])));}
 throw Error('Desteklenmeyen çağrı: '+name);}
 while(peek()!=='EOF'){if(trace.length>=180)throw Error('Bu dosya için satır sınırı aşıldı.');const l=tokens[p].line;let note='İşlem tamamlandı.';if(types.has(peek())){const type=take().s,id=take().s;if(!/^[A-Za-z_]\w*$/.test(id)||types.has(id)||vars[id])throw Error('Geçerli ve yeni bir değişken adı gerekli.');let v=null;if(eat('='))v=cast(evaluate(expr()),type);vars[id]={type:type==='var'?(v?.t||'object'):type,value:v};need(';');note=id+' kaydedildi.';}else if(tokens[p+1]&&['=','+=','-=','*=','/=','%=','&=','|=','^='].includes(tokens[p+1].s)){const id=take().s,op=take().s;if(!vars[id])throw Error(id+' tanımlı değil.');let v=evaluate(expr());if(op!=='=')v=binary(op[0],evaluate({k:'name',name:id}),v);vars[id].value=cast(v,vars[id].type,true);need(';');note=id+' güncellendi.';}else{evaluate(expr());need(';');}trace.push({line:l,note,vars:Object.fromEntries(Object.entries(vars).map(([k,x])=>[k,{type:x.type,value:x.value?fmt(x.value):'—'}])),output:[...output,...(buffer?[buffer]:[])]});}
 if(buffer)output.push(buffer);return {output,trace,read:input};
}
g.NoirInvestigationEngine={run,format:fmt};
})(typeof window==='undefined'?globalThis:window);
