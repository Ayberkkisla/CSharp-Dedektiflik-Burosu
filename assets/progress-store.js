(function(g){
'use strict';
const raw=g.localStorage,active='noir-active-user';let uid=raw.getItem(active)||null;
const managed=key=>key==='cnoir'||/^cnoir-/.test(key)||key==='csharp-noir-case';
const prefix=()=>uid?'noir-account:'+uid+':':'';
const pendingKey=()=> 'noir-pending:'+uid;
function pending(){try{return JSON.parse(raw.getItem(pendingKey())||'{}');}catch(_){return {};}}
function change(key,value){if(!uid)return;const all=pending();all[key]={value,id:g.crypto?.randomUUID?.()||Date.now()+'-'+Math.random()};raw.setItem(pendingKey(),JSON.stringify(all));g.dispatchEvent(new CustomEvent('noir-progress-change'));}
function parse(value){try{return JSON.parse(value);}catch(_){return null;}}
function union(a,b){return [...new Set([...(Array.isArray(a)?a:[]),...(Array.isArray(b)?b:[])])];}
function merge(key,remote,local){
 if(local===null)return null;if(remote===null||remote===undefined)return local;
 const r=parse(remote),l=parse(local);if(!r||!l||typeof r!=='object'||typeof l!=='object')return local;
 const out={...r,...l};
 if(key==='cnoir'){out.biten=union(r.biten,l.biten).sort((a,b)=>a-b);out.xp=Math.max(Number(r.xp)||0,Number(l.xp)||0);out.seri=Math.max(Number(r.seri)||0,Number(l.seri)||0);out.sonGun=[r.sonGun||'',l.sonGun||''].sort().at(-1);}
 if(key==='cnoir-cases'){out.done=union(r.done,l.done).sort((a,b)=>a-b);out.awarded=union(r.awarded,l.awarded);const earned=out.awarded.reduce((sum,id)=>sum+({'2':20,'4':30,'6':20,'7':40}[String(id).split(':')[1]]||0),0);out.xp=Math.max(Number(r.xp)||0,Number(l.xp)||0,earned);}
 if(key==='cnoir-investigation-014'){out.done=union(r.done,l.done);out.awarded=union(r.awarded,l.awarded);out.solved={...r.solved,...l.solved};out.filmFound=union(r.filmFound,l.filmFound);out.games={...r.games,...l.games};out.layout=Math.max(Number(r.layout)||0,Number(l.layout)||0);out.finished=!!(r.finished||l.finished);out.started=!!(r.started||l.started);out.xp=out.awarded.reduce((sum,id)=>sum+(id==='final'?80:40),0);}
 if(r.drafts||l.drafts)out.drafts={...r.drafts,...l.drafts};
 if(key==='cnoir-investigation-014'&&(r.desktop||l.desktop)){const rd=r.desktop||{},ld=l.desktop||{};out.desktop={...rd,...ld,found:union(rd.found,ld.found),done:union(rd.done,ld.done),drafts:{...rd.drafts,...ld.drafts},solved:{...rd.solved,...ld.solved},filmSeen:!!(rd.filmSeen||ld.filmSeen),closed:!!(rd.closed||ld.closed)};}
 if(key!=='cnoir'&&key!=='cnoir-cases'&&key!=='cnoir-investigation-014'&&('xp' in r||'xp' in l))out.xp=Math.max(Number(r.xp)||0,Number(l.xp)||0);
 return JSON.stringify(out);
}
const api={
 get uid(){return uid;},managed,merge,
 getItem(key){return raw.getItem(managed(key)?prefix()+key:key);},
 setItem(key,value){value=String(value);const target=managed(key)?prefix()+key:key;if(raw.getItem(target)===value)return;raw.setItem(target,value);if(managed(key))change(key,value);},
 removeItem(key){raw.removeItem(managed(key)?prefix()+key:key);if(managed(key))change(key,null);},
 select(userId){uid=userId||null;if(uid)raw.setItem(active,uid);else raw.removeItem(active);},
 pending,
 acknowledge(key,id){const all=pending();if(all[key]?.id===id){delete all[key];raw.setItem(pendingKey(),JSON.stringify(all));return true;}return false;},
 apply(key,value){const before=api.getItem(key);if(value===null)raw.removeItem(prefix()+key);else raw.setItem(prefix()+key,value);return before!==value;},
 guest(){const out={};for(let i=0;i<raw.length;i++){const key=raw.key(i);if(managed(key))out[key]=raw.getItem(key);}return out;},
 importGuest(){if(!uid)return;for(const [key,value] of Object.entries(api.guest()))api.setItem(key,merge(key,api.getItem(key),value));}
};g.NoirProgress=api;
})(window);
