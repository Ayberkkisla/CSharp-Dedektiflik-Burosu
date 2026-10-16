(async function(g){
'use strict';
const store=g.NoirProgress;if(!store)return;
function E(tag,text,cls){const e=document.createElement(tag);if(text!==undefined)e.textContent=text;if(cls)e.className=cls;return e;}
const card=E('section',undefined,'noir-account'),title=E('strong','İlerlemeni kaybetme'),status=E('p','Bağlantı hazırlanıyor…'),actions=E('div',undefined,'noir-account-actions');status.setAttribute('role','status');card.append(title,status,actions);
const hero=document.querySelector('.bureau-hero');if(hero)hero.before(card);else {const anchor=document.querySelector('.cw-heading')||document.getElementById('orta');if(anchor){anchor.before(card);card.className+=' noir-account-compact';}}
const login=E('button','Otomatik kaydetmek için Google ile giriş yap','noir-google-login'),logout=E('button','Çıkış yap'),importButton=E('button','Bu cihazdaki misafir ilerlemesini aktar'),retry=E('button','Tekrar eşitle');[login,logout,importButton,retry].forEach(b=>{b.type='button';actions.append(b);});logout.hidden=importButton.hidden=retry.hidden=true;login.disabled=true;
if(!/^https?:$/.test(location.protocol)){status.textContent='Google girişi, Netlify’deki site adresinden kullanılabilir. Bu cihazdaki ilerlemen kaydedilmeye devam ediyor.';return;}
let auth,db,api,user=null,ready=false,busy=false,timer=null,epoch=0,loginInFlight=false,reloadPending=false;
function refreshAfterLogin(){if(loginInFlight)reloadPending=true;else location.reload();}
function message(error){return ({'auth/unauthorized-domain':'Bu site adresini Firebase → Authentication → Settings → Authorized domains listesine ekle.','auth/operation-not-allowed':'Firebase → Authentication → Sign-in method bölümünde Google girişini etkinleştir.','auth/popup-blocked':'Tarayıcı giriş penceresini engelledi. Bu site için açılır pencereye izin verip tekrar dene.','auth/popup-closed-by-user':'Google giriş penceresi tamamlanmadan kapandı. Tekrar giriş yapabilirsin.','auth/cancelled-popup-request':'Giriş zaten devam ediyor. Açılan Google penceresini tamamla.','auth/network-request-failed':'Google girişine ulaşılamadı. İnternet bağlantını kontrol edip tekrar dene.','permission-denied':'Hesabın açıldı; kayıt izni için verilen Firestore kurallarını yayımla.','unavailable':'Bağlantı kesildi. İlerlemen bu cihazda saklanıyor; bağlantı gelince yeniden eşitlenecek.'})[error.code]||'Eşitleme tamamlanamadı. İlerlemen bu cihazda saklanıyor; tekrar deneyebilirsin.';}
async function flush(){
 if(!ready||!user||busy)return false;let changed=false;busy=true;const token=epoch,account=user.uid;retry.hidden=true;
 try{
  const queued=store.pending();if(Object.keys(queued).length)status.textContent='İlerlemen kaydediliyor…';
  for(const [key,entry] of Object.entries(queued)){
   if(token!==epoch||store.uid!==account)break;
   const ref=api.doc(db,'dedektifUsers',account,'progress',key);
   const result=await api.runTransaction(db,async tx=>{const snap=await tx.get(ref),remote=snap.exists()?snap.data():null;if(remote?.operations?.includes(entry.id))return remote.value;const value=entry.value===null?null:store.merge(key,remote?.value,entry.value);if(value!==null&&value.length>500000)throw Object.assign(new Error(),{code:'record-too-large'});tx.set(ref,{value,updatedAt:api.serverTimestamp(),operations:[...(remote?.operations||[]).slice(-19),entry.id]});return value;});
   if(token!==epoch||store.uid!==account)break;
   if(store.acknowledge(key,entry.id))changed=store.apply(key,result)||changed;
  }
  if(token===epoch)status.textContent=Object.keys(store.pending()).length?'Yeni değişiklikler kaydediliyor…':'✓ İlerlemen hesabına kaydedildi.';
 }catch(error){status.textContent=message(error);retry.hidden=false;}finally{busy=false;if(ready&&user&&Object.keys(store.pending()).length&&!retry.hidden)return;if(ready&&user&&Object.keys(store.pending()).length)schedule();}
 return changed;
}
function schedule(){clearTimeout(timer);timer=setTimeout(flush,1200);}
g.addEventListener('noir-progress-change',schedule);g.addEventListener('online',()=>{if(user&&ready)flush();});
try{
 const version='https://www.gstatic.com/firebasejs/13.0.0/';
 const [appSdk,authSdk,firestoreSdk]=await Promise.all([import(version+'firebase-app.js'),import(version+'firebase-auth.js'),import(version+'firebase-firestore.js')]);api={...authSdk,...firestoreSdk};const app=appSdk.initializeApp(g.NOIR_FIREBASE_CONFIG);auth=api.getAuth(app);db=api.getFirestore(app);
 status.textContent='XP, tamamlanan vakalar ve kod taslakların Google hesabında saklansın.';
 login.addEventListener('click',async()=>{if(loginInFlight||login.disabled)return;loginInFlight=true;login.disabled=true;status.textContent='Google penceresinde hesabını seç…';try{const provider=new api.GoogleAuthProvider();provider.setCustomParameters({prompt:'select_account'});await api.signInWithPopup(auth,provider);}catch(error){status.textContent=message(error);}finally{loginInFlight=false;login.disabled=false;if(reloadPending){reloadPending=false;location.reload();}}});
 logout.addEventListener('click',async()=>{logout.disabled=true;try{await flush();await api.signOut(auth);}catch(error){status.textContent=message(error);}finally{logout.disabled=false;}});
 importButton.addEventListener('click',async()=>{importButton.disabled=true;store.importGuest();await flush();if(retry.hidden)location.reload();else importButton.disabled=false;});retry.addEventListener('click',async()=>{if(ready)await flush();else await restore(user);});
 async function restore(account){
  ready=false;const token=++epoch;clearTimeout(timer);user=account;login.hidden=!!account;logout.hidden=!account;importButton.hidden=!account||Object.keys(store.guest()).length===0;
  if(!account){const changed=!!store.uid;store.select(null);title.textContent='Dedektif hesabın';status.textContent='Misafir olarak devam ediyorsun. Google ile giriş yaparak ilerlemeni hesabına kaydedebilirsin.';if(changed)refreshAfterLogin();return;}
  const switched=store.uid!==account.uid;const game=document.getElementById('cw-root')||document.getElementById('orta');if(game)game.inert=true;store.select(account.uid);title.textContent=account.displayName||'Dedektif hesabın';status.textContent='Hesabındaki ilerleme yükleniyor…';
  try{
   const snapshot=await api.getDocs(api.collection(db,'dedektifUsers',account.uid,'progress'));if(token!==epoch)return;let changed=switched;const pending=store.pending();
   snapshot.forEach(doc=>{const key=doc.id;if(!store.managed(key)||pending[key])return;const remote=doc.data().value,local=store.getItem(key);const merged=local===null?remote:remote===null?null:store.merge(key,remote,local);changed=store.apply(key,merged)||changed;if(merged!==remote&&merged!==null){store.apply(key,remote);store.setItem(key,merged);
    }});
   ready=true;changed=(await flush())||changed;if(token===epoch&&changed&&retry.hidden)refreshAfterLogin();else {if(game)game.inert=false;if(retry.hidden)status.textContent='✓ İlerlemen hesabına kaydedildi.';}
  }catch(error){if(game)game.inert=false;status.textContent=message(error);retry.hidden=false;if(switched)refreshAfterLogin();}
 }
 api.onAuthStateChanged(auth,async account=>{try{await restore(account);}finally{if(!loginInFlight)login.disabled=false;}},error=>{status.textContent=message(error);login.disabled=false;});
}catch(error){status.textContent='Google giriş hizmetine ulaşılamadı. Bu cihazdaki ilerlemen korunuyor; sayfayı yenileyip tekrar deneyebilirsin.';login.disabled=true;}
})(window);
