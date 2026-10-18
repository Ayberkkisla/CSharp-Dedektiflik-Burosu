/* Never intercept Google sign-in, Firebase calls or account data. */
const VERSION='noir-static-v1';
self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',event=>event.waitUntil((async()=>{for(const key of await caches.keys())if(key.startsWith('noir-static-')&&key!==VERSION)await caches.delete(key);await self.clients.claim();})()));
self.addEventListener('fetch',event=>{
 const request=event.request,url=new URL(request.url);
 if(request.method!=='GET'||url.origin!==self.location.origin)return;
 const isPage=request.mode==='navigate',isAsset=/\/assets\//.test(url.pathname)&&/\.(css|js|svg|png|gif)$/.test(url.pathname);
 if(!isPage&&!isAsset)return;
 // Online always wins: a new deploy must not leave an old Firebase config behind.
 event.respondWith((async()=>{
  try{const response=await fetch(request,{cache:'no-cache'});if(response.ok){try{const cache=await caches.open(VERSION);await cache.put(request,response.clone());}catch(_){/* Storage quota must not block an online page. */}}return response;}
  catch(error){const saved=await caches.match(request);if(saved)return saved;if(isPage)return new Response('<!doctype html><html lang="tr"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Dedektif Nokta</title><body style="background:#12101a;color:#ead7b3;font:18px system-ui;padding:24px"><h1>Bağlantı bekleniyor.</h1><p>Bu dosya henüz cihazında saklanmamış. İnternet bağlantın gelince tekrar aç.</p><button onclick="location.reload()">Tekrar dene</button></body></html>',{headers:{'Content-Type':'text/html;charset=utf-8'}});throw error;}
 })());
});
