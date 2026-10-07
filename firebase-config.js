var fbUid = null,
  fbDb = null,
  fbAuth = null;
try {
  firebase.initializeApp({
    apiKey: "***REMOVED_API_KEY***",
    authDomain: "csharp-dedektiflik-3bcc0.firebaseapp.com",
    projectId: "csharp-dedektiflik-3bcc0",
    storageBucket: "csharp-dedektiflik-3bcc0.firebasestorage.app",
    messagingSenderId: "194329218059",
    appId: "1:194329218059:web:a07feafe91c9e8d4654b0e",
  });
  fbAuth = firebase.auth();
  fbDb = firebase.firestore();
  fbAuth.onAuthStateChanged(function (u) {
    fbUid = u ? u.uid : null;
    var b = document.getElementById("fb-btn");
    if (b) {
      if (u) {
        b.style.display = "none";
      } else {
        b.style.display = "";
        b.textContent = "Google ile Giri\u015F";
      }
    }
    try {
      menuDoldur();
    } catch (e) {}
    if (u) {
      fbDb
        .collection("kayitlar")
        .doc(u.uid)
        .get()
        .then(function (d) {
          var yerelUid = null;
          try {
            yerelUid = localStorage.getItem("cnoir_uid");
          } catch (e) {}
          if (yerelUid && yerelUid !== u.uid) {
            if (d.exists) {
              var yc = d.data() || {};
              kayit = {
                xp: yc.xp || 0,
                seri: yc.seri || 0,
                sonGun: yc.sonGun || "",
                biten: yc.biten || [],
                ses: kayit.ses,
              };
            } else {
              kayit = { xp: 0, seri: 0, sonGun: "", biten: [], ses: kayit.ses };
            }
            sakla();
            try {
              sessionStorage.setItem("fbSync", "1");
            } catch (x) {}
            location.reload();
            return;
          }
          if (d.exists) {
            var c = d.data() || {};
            var birle = false;
            if ((c.xp || 0) > kayit.xp) {
              kayit.xp = c.xp;
              birle = true;
            }
            if ((c.seri || 0) > kayit.seri) {
              kayit.seri = c.seri;
              birle = true;
            }
            if (c.sonGun && c.sonGun > kayit.sonGun) {
              kayit.sonGun = c.sonGun;
              birle = true;
            }
            var e;
            for (e = 0; e < (c.biten || []).length; e++) {
              if (kayit.biten.indexOf(c.biten[e]) < 0) {
                kayit.biten.push(c.biten[e]);
                birle = true;
              }
            }
            if (birle) {
              sakla();
              try {
                sessionStorage.setItem("fbSync", "1");
              } catch (x) {}
              location.reload();
              return;
            }
          }
          sakla();
        })
        .catch(function () {});
    }
  });
} catch (e) {}
function fbTik() {
  if (fbAuth) {
    if (fbAuth.currentUser) {
      fbAuth.signOut().then(function () {
        try {
          localStorage.removeItem("cnoir");
          localStorage.removeItem("cnoir_uid");
        } catch (e) {}
        location.reload();
      });
    } else {
      fbAuth
        .signInWithPopup(new firebase.auth.GoogleAuthProvider())
        .catch(function (e) {
          alert("Giris hatasi: " + e.message);
        });
    }
  }
}
