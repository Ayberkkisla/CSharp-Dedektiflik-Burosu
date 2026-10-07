var UNITELER = [
  [
    1,
    6,
    "1. Unite: Veri Tipleri ve Operatörler",
    "Temel türler, konsol I/O, hesap makinesi, operatör öncelikleri",
    "#b07d2b",
  ],
  [
    7,
    12,
    "2. Unite: Akış Kontrolü",
    "String interpolation, if-else, switch, döngüler, break/continue, mantık operatörleri, ternary, kullanıcı girişi",
    "#c08a2b",
  ],
  [
    13,
    18,
    "3. Unite: Entegrasyon, Algoritma ve Diziler",
    "Akış kontrolü entegrasyonu, algoritma temelleri, diziler, metotlar, recursion ve gerçek hayat sistemi",
    "#2b7fb0",
  ],
  [
    19,
    23,
    "4. Ünite: Beceri Temelli Sorular",
    "Gerçek hayat ve proje senaryoları",
    "#ff7a00",
  ],
];
var kayit = { xp: 0, seri: 0, sonGun: "", biten: [], ses: true };
try {
  var k0 = JSON.parse(localStorage.getItem("cnoir") || "null");
  if (k0) kayit = Object.assign(kayit, k0);
} catch (e) {}
function sakla() {
  try {
    localStorage.setItem("cnoir", JSON.stringify(kayit));
    if (fbUid)
      try {
        localStorage.setItem("cnoir_uid", fbUid);
      } catch (e2) {}
  } catch (e) {}
  if (fbUid && fbDb) {
    try {
      fbDb.collection("kayitlar").doc(fbUid).set(kayit);
    } catch (e) {}
  }
}
function bugun() {
  var d = new Date();
  return d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();
}
function kac(s) {
  var d = document.createElement("div");
  d.textContent = s;
  return d.innerHTML;
}
function md(x) {
  var e = kac(x);
  e = e.replace(/```[\s\S]*?```/g, "");
  e = e.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  e = e.replace(/`([^`\n]+)`/g, "<code>$1</code>");
  return e;
}
function ses(f, s) {
  if (!kayit.ses) return;
  try {
    var C = window.AudioContext || window.webkitAudioContext;
    var c = new C();
    var o = c.createOscillator(),
      g = c.createGain();
    o.connect(g);
    g.connect(c.destination);
    o.type = "square";
    o.frequency.value = f;
    o.start();
    g.gain.exponentialRampToValueAtTime(0.0001, c.currentTime + s);
    o.stop(c.currentTime + s);
  } catch (e) {}
}
function kilitli(n) {
  return !(n === 1 || kayit.biten.indexOf(n - 1) >= 0);
}
var balonZ = null;
function maskotSoyle(metin, gunluk) {
  var b = document.getElementById("balon");
  b.classList.add("goster");
  b.textContent = "";
  var m = document.getElementById("maskot");
  m.classList.remove("salla");
  void m.offsetWidth;
  m.classList.add("salla");
  var i = 0;
  clearInterval(balonZ);
  balonZ = setInterval(function () {
    b.textContent = metin.slice(0, ++i);
    if (i >= metin.length) clearInterval(balonZ);
  }, 16);
  clearTimeout(b._t);
  b._t = setTimeout(function () {
    b.classList.remove("goster");
  }, 9000);
  if (gunluk && OT) {
    OT.gunluk.push(metin);
    panelGuncelle();
  }
}
function maskotTik() {
  if (OT && OT.adimlar && OT.adimlar[OT.idx]) {
    var a = OT.adimlar[OT.idx];
    if (
      a.tip === "soru" ||
      a.tip === "boss" ||
      a.tip === "extra" ||
      a.tip === "kod"
    ) {
      ipucuGoster();
      return;
    }
    if (a.tip === "micro") {
      maskotSoyle("Mini ders: " + a.micro.baslik + ". " + a.micro.akil);
      return;
    }
    if (a.tip === "bbrief") {
      maskotSoyle(
        "Boss geliyor… derin nefes al. Takılırsan bana ya da İPUCU düğmesine bas.",
      );
      return;
    }
    if (a.tip === "konu") {
      maskotSoyle(
        "Bu kart o konunun tüm alet çantası. İyice oku, sorularda lazım olacak.",
      );
      return;
    }
  }
  maskotSoyle(
    "Dosyayı aç evlat. Önce kartları oku, sonra soruları kendin çöz. Takılırsan bana bas, kademeli ipucu veririm.",
  );
}

/* ---------- PATİKA (pano) ---------- */
function patika() {
  document.body.classList.remove("dersmodu");
  document.getElementById("ust").innerHTML =
    '<div class="rozet"><svg class="ust-yuz" viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" style="width:34px;height:34px;flex:0 0 34px;display:block"><defs><linearGradient id="kzSapka" x1="0.1" y1="0" x2="0.9" y2="1"><stop offset="0%" stop-color="#5b4d72"/><stop offset="100%" stop-color="#14101e"/></linearGradient><linearGradient id="kzYuz" x1="0" y1="0.1" x2="1" y2="0.35"><stop offset="0%" stop-color="#4e3d52"/><stop offset="40%" stop-color="#372b42"/><stop offset="100%" stop-color="#1d1729"/></linearGradient></defs><path d="M3 42 C4 33 11 27 22 27 C33 27 40 33 41 42 Z" fill="#332b47"/><path d="M13 28 C16 25 19 24 22 24 C25 24 28 25 31 28 L22 34 Z" fill="#4e4260"/><ellipse cx="22" cy="17" rx="11" ry="12" fill="url(#kzYuz)"/><path d="M15 14 C18 11 26 11 29 13.5 C25 15.5 19 15.5 15 14 Z" fill="#5b4860" opacity="0.45"/><path d="M29 18 C32 21 32 25 30 27 C27 28 24 28 22 27 C27 24 29 21 29 18 Z" fill="#55425c" opacity="0.4"/><!-- tek goz (golgede ama belli) --><path d="M14 16 C16 13.5 21 13.5 23 16 C21 19 16 19 14 16 Z" fill="#140e1c"/><circle cx="18" cy="16.2" r="1.8" fill="#07050b"/><circle cx="18" cy="16.2" r="1" fill="#7d5a2c"/><circle cx="18.9" cy="15.4" r="0.6" fill="#fff2d0"/><path d="M13.5 15.2 C16 12.8 21.5 12.8 23.5 15.2 L23.5 16 C21 13.9 16 13.9 13.5 16 Z" fill="#100b18"/><path d="M13 13.5 C16 11 22 11.5 24.5 14.5" fill="none" stroke="#150f1e" stroke-width="1.9" stroke-linecap="round"/><path d="M11 17 C11 9 16 5 22 5" fill="none" stroke="#ffb000" stroke-width="1.6" opacity="0.5"/><path d="M10 11 C15 9 29 9 34 11 L34 17 C29 15 15 15 10 17 Z" fill="#050409" opacity="0.9"/><ellipse cx="22" cy="10" rx="19" ry="3.4" fill="#15111d"/><path d="M9 10 C9 3 15 0 22 0 C29 0 35 3 35 10 Z" fill="url(#kzSapka)"/><path d="M10 7 C15 5 29 5 34 7 L34 10 C29 8 15 8 10 10 Z" fill="#6e2434"/><path d="M9 10 C9 3 15 0 22 0" fill="none" stroke="#ffc94d" stroke-width="1.5" opacity="0.6"/></svg><span>DEDEKTİF NOKTA</span><small>C# DEDEKTİFLİK BÜROSU</small></div>' +
    '<div class="durum"><span class="ateş">🔥 ' +
    kayit.seri +
    '</span><span class="xp">⚡ ' +
    kayit.xp +
    "</span>" +
    "<span>🗂 " +
    kayit.biten.length +
    "/20</span>" +
    '<button onclick="kayit.ses=!kayit.ses;sakla();patika();">' +
    (kayit.ses ? "🔊" : "🔇") +
    "</button>" +
    '<button onclick="menuAc()">☰</button></div>';
  var o =
    '<div class="giris"><h1>Gece vardiyası başlıyor.</h1>' +
    "<p>Dedektif Nokta'nın C# bürosunda <b>23 dosya</b> ve <b>4 ünite</b> var. Her dosya bir soruşturma: içindeki <b>suçlu kodu</b> bulup dosyayı kapatman gerekiyor.</p>" +
    '<div class="harita"><div class="harita-h">BU EKRANDA NE VAR</div>' +
    '<div class="harita-i"><b>Üst şerit</b><span>Dosya adın, ilerleme çubuğu ve toplam XP</span></div>' +
    '<div class="harita-i"><b>Orta kart</b><span>Şu an yapman gereken tek iş burada</span></div>' +
    '<div class="harita-i"><b>Sağ alt</b><span>Dedektif Nokta — dokun, kademeli ipucu versin</span></div>' +
    '<div class="harita-i"><b>Alt çubuk</b><span>DEVAM · KONTROL ET · İPUCU düğmeleri</span></div>' +
    '<div class="harita-i"><b>Menü</b><span>Tüm dosyalar + <b>Nerede ne var?</b> rehberi</span></div>' +
    "</div>" +
    '<div class="harita"><div class="harita-h">BİR DOSYADA NE YAPACAKSIN</div>' +
    '<div class="adim"><i>1</i><div><b>BAŞVURU KARTI</b><span>Konunun tüm aletleri: ne işe yarar, kritik noktası, nerede kullanılır</span></div></div>' +
    '<div class="adim"><i>2</i><div><b>DERS NOTU</b><span>Tek sayfa özet — her sorudan önce oku</span></div></div>' +
    '<div class="adim"><i>3</i><div><b>KANIT SORUSU</b><span>5 şıklı. Önce sen çöz; cevap sonra açılır</span></div></div>' +
    '<div class="adim"><i>4</i><div><b>YAPBOZ / KOD TAMAMLA</b><span>Kodu parçala, doğru sıraya diz, boşluğu doldur</span></div></div>' +
    '<div class="adim"><i>5</i><div><b>BOSS DOSYASI</b><span>Dosyayı kapatan soru. Yenmeden kapanmaz</span></div></div>' +
    '<div class="adim"><i>6</i><div><b>EKSTRA</b><span>Zorunlu değil ama tatlı XP kazandırır</span></div></div>' +
    "</div>" +
    '<div class="kural"><b>İpucu gizli başlar:</b> takılırsan önce kendin dene; sonra İPUCU düğmesine ya da Dedektif Nokta\'ya bas, kademeli açılır. Ayrıntılı harita için menüdeki <b>Nerede ne var?</b> kartına bak.</div></div>';
  UNITELER.forEach(function (u) {
    var a = u[0],
      b = u[1],
      biten = 0;
    for (var n = a; n <= b; n++) {
      if (kayit.biten.indexOf(n) >= 0) biten++;
    }
    o +=
      '<div class="bolge" style="border-color:' +
      u[4] +
      '"><h2><span class="kod2" style="color:' +
      u[4] +
      '">' +
      kac(u[2]) +
      "</span></h2><p>Dosya " +
      a +
      "-" +
      b +
      " • " +
      kac(u[3]) +
      "</p>" +
      '<div class="ubar"><i style="width:' +
      Math.round((biten / (b - a + 1)) * 100) +
      '%"></i></div></div><div class="pano">';
    var sira = 0;
    for (var n2 = a; n2 <= b; n2++) {
      (function (n) {
        var d = DERSLER[n - 1];
        var kl = kilitli(n),
          bt = kayit.biten.indexOf(n) >= 0;
        var sinif = "dava" + (kl ? " kilitli" : bt ? " cozuldu" : " acik");
        var of = ["of1", "of2", "of3", "of4", "of5", "of2"][sira % 6];
        sira++;
        var roz = kl
          ? "🔒 KİLİTLİ"
          : bt
            ? "★ ÇÖZÜLDÜ"
            : n === 1 || kayit.biten.indexOf(n - 1) >= 0
              ? "◉ AÇIK DOSYA"
              : "🔒";
        var yazi = kl
          ? "Önce " + (n - 1) + ". dosya"
          : bt
            ? d.baslik
            : "AÇ: " + d.baslik;
        o +=
          '<button class="' +
          sinif +
          " " +
          of +
          '" onclick="dersAc(' +
          n +
          ')"><div class="no">VAKA #' +
          n +
          '</div><div class="ad">' +
          kac(yazi) +
          '</div><span class="dur">' +
          roz +
          "</span></button>";
      })(n2);
    }
    o += "</div>";
  });
  o +=
    '<div class="kart" style="text-align:center"><h3>Arşiv odası</h3><p class="kucuk">Bitirdiğin dosyalar yeşil mühürlenir. Kaynak: tr.wikibooks C# (CC BY-SA 4.0)</p>' +
    '<p><button class="dugme" style="flex:none;padding:12px 26px;background:#ffb000" onclick="menuAc()">1-23 ARŞİVİ AÇ</button></p></div>';
  document.getElementById("orta").innerHTML = o;
  menuDoldur();
}
function menuDoldur() {
  var o = "";
  try {
    var cu = fbAuth && fbAuth.currentUser;
    o +=
      '<a href="#" onclick="fbTik();return false;" style="background:#b48cff22;border:1px solid #b48cff;box-shadow:0 0 12px #b48cff66;color:#e3d4ff;font-weight:900"><span class="n" style="background:#b48cff;color:#171223">G</span>' +
      (cu
        ? "Cikis: " + (cu.displayName || cu.email || "Hesap")
        : "Google ile Giris yap") +
      "</a>";
  } catch (e) {}
  DERSLER.forEach(function (d) {
    var bt = kayit.biten.indexOf(d.n) >= 0;
    o +=
      '<a href="#" onclick="menuKapat();dersAc(' +
      d.n +
      ');return false;" class="' +
      (bt ? "bitti" : "") +
      '"><span class="n">' +
      (bt ? "★" : d.n) +
      "</span>Vaka " +
      d.n +
      ": " +
      kac(d.baslik) +
      "</a>";
  });
  document.getElementById("menu-liste").innerHTML = o;
}
function menuAc() {
  document.getElementById("perde").classList.add("acik");
}
function menuKapat() {
  document.getElementById("perde").classList.remove("acik");
}
document.getElementById("perde").addEventListener("click", function (e) {
  if (e.target.id === "perde") menuKapat();
});

/* ---------- VAKA AKIŞI ---------- */
var OT = null;
function dersAc(n) {
  if (kilitli(n)) {
    maskotSoyle("Dur evlat! Önce " + (n - 1) + ". dosyayı kapatman lazım.");
    return;
  }
  var d = DERSLER[n - 1];
  var adimlar = [];
  adimlar.push({
    tip: "acilis",
    alt: "VAKA AÇILIYOR",
    baslik: d.baslik,
    fikir: d.fikir,
    kod: d.kod,
    giris: d.giris,
    menu: {
      mini: d.hatalar && d.hatalar.length ? d.hatalar.length : d.sorular.length,
      kanit:
        d.hatalar && d.hatalar.length ? d.hatalar.length : d.sorular.length,
      boss: 1,
      kod: d.kodlar.length + (KODTAMAMLALAR[d.n] || []).length,
      ekstra: d.extralar.length,
      ornek: (d.ornekler || []).length,
    },
    odul:
      (d.hatalar && d.hatalar.length
        ? d.hatalar.reduce(function (t, h) {
            return t + h.puan;
          }, 0)
        : d.sorular.reduce(function (t, s) {
            return t + s.puan;
          }, 0)) +
      (d.hatalar && d.hatalar.length ? 0 : d.boss.puan) +
      d.kodlar.reduce(function (t, k) {
        return t + k.puan;
      }, 0) +
      d.extralar.reduce(function (t, s) {
        return t + s.puan;
      }, 0) +
      (d.ornekler || []).reduce(function (t, k) {
        return t + k.puan;
      }, 0),
  });
  adimlar.push({
    tip: "konu",
    alt: "BAŞVURU KARTI",
    baslik: d.baslik,
    konu: d.konu,
    konuBaslik: d.konuBaslik,
  });
  var HT = d.hatalar || [];
  if (HT.length) {
    HT.forEach(function (h, i) {
      if (h.boss) return;
      var et = h.ekstra
        ? "EKSTRA HATA AVI"
        : "HATA AVI " + (i + 1) + "/" + HT.length;
      adimlar.push({ tip: "hata", alt: et, hata: h, yanlis: 0 });
    });
  } else {
    d.sorular.forEach(function (s, i) {
      adimlar.push({
        tip: "micro",
        alt: "DERS NOTU " + (i + 1) + "/" + d.sorular.length,
        micro: s.micro,
      });
      adimlar.push({
        tip: "soru",
        alt: "KANIT " + (i + 1) + "/" + d.sorular.length,
        soru: s,
        yanlis: 0,
      });
    });
  }
  adimlar.push({
    tip: "bbrief",
    alt: "BOSS BRİFİNGİ",
    baslik: d.baslik,
    fikir: d.fikir,
  });
  var HTB =
    (d.hatalar || []).filter(function (h) {
      return h.boss;
    })[0] || null;
  if (HTB)
    adimlar.push({ tip: "hata", alt: "SON DOSYA", hata: HTB, yanlis: 0 });
  else adimlar.push({ tip: "boss", alt: "SON DOSYA", boss: d.boss, yanlis: 0 });
  d.kodlar.forEach(function (kg, i) {
    adimlar.push({
      tip: "kod",
      alt:
        (kg.tip === "bosluk" ? "KOD TAMAMLA " : "YAPBOZ ") +
        (i + 1) +
        "/" +
        d.kodlar.length,
      kod: kg,
      yanlis: 0,
      cozuldu: false,
      sira: [],
      tur:
        kg.tip === "bosluk"
          ? "KOD TAMAMLA 🧩"
          : i === 0
            ? "ISINMA 🧩"
            : "USTA İŞİ 🏆",
    });
  });
  (KODTAMAMLALAR[d.n] || []).forEach(function (kg, i) {
    adimlar.push({
      tip: "kod",
      alt: "KOD TAMAMLA " + (i + 1) + "/" + (KODTAMAMLALAR[d.n] || []).length,
      kod: kg,
      yanlis: 0,
      cozuldu: false,
      sira: [],
      dolu: {},
      tur: "KOD TAMAMLA 🧩",
    });
  });
  d.extralar.forEach(function (s, i) {
    adimlar.push({
      tip: "extra",
      alt: "EKSTRA " + (i + 1) + "/" + d.extralar.length,
      soru: s,
      yanlis: 0,
      cozuldu: false,
    });
  });
  (d.ornekler || []).forEach(function (kg, i) {
    adimlar.push({
      tip: "ornek",
      alt: "DERSTEN ÖRNEK " + (i + 1) + "/" + d.ornekler.length,
      kod: kg,
      yanlis: 0,
      cozuldu: false,
      sira: [],
      tur: "DERSTEN 📚",
    });
  });
  OT = {
    ders: d,
    adimlar: adimlar,
    idx: 0,
    dogru: 0,
    toplamSoru: (d.sorular || d.hatalar || []).length + 1,
    xp: 0,
    cevaplandi: 0,
    secili: null,
    gunluk: [],
    extraCozulen: 0,
    ornekCozulen: 0,
  };
  document.body.classList.add("dersmodu");
  adim();
  maskotSoyle(d.giris, true);
  setTimeout(function () {
    var bb = document.getElementById("balon");
    if (bb) bb.classList.remove("goster");
  }, 9000);
}
function ustDers() {
  var yuz = Math.round((OT.idx / OT.adimlar.length) * 100);
  document.getElementById("ust").innerHTML =
    '<div class="baslik-satir" style="width:100%;max-width:620px;margin:0 auto">' +
    '<button class="kapat" onclick="patika()">✕</button>' +
    (OT.ders.n > 1
      ? '<button class="kapat" onclick="dersAc(' +
        (OT.ders.n - 1) +
        ')">←</button>'
      : "") +
    '<div class="ilerleme" style="flex:1"><i style="width:' +
    yuz +
    '%"></i></div>' +
    '<div class="durum"><span>VAKA #' +
    OT.ders.n +
    '</span><span class="xp">⚡ ' +
    kayit.xp +
    "</span></div></div>";
}
function adim() {
  ustDers();
  window.scrollTo(0, 0);
  var a = OT.adimlar[OT.idx];
  var o = "";
  var cozumTipleri = ["soru", "boss", "extra", "kod", "ornek", "hata"];
  if (cozumTipleri.indexOf(a.tip) >= 0 && a.tamam) {
    o += cozulduKart(a);
    o +=
      '<div class="altbar"><div class="ic"><button class="dugme" onclick="sonraki()">DEVAM →</button></div></div>';
  } else if (a.tip === "acilis") {
    o +=
      '<div class="kart"><p class="kucuk">' +
      a.alt +
      " • Vaka #" +
      OT.ders.n +
      "</p><h3>" +
      kac(a.baslik) +
      "</h3>";
    o += '<div class="dedektif-soz">' + kac(a.giris) + "</div>";
    o += "<p>" + kac(a.fikir) + "</p>";
    o += '<pre class="kod">' + kac(a.kod) + "</pre>";
    o +=
      '<ul class="dava-menu"><li>🗂 Konu kartı (tüm aletler + işlevleri)</li><li>📝 ' +
      a.menu.mini +
      " mini ders (her sorudan önce)</li><li>🔎 " +
      a.menu.kanit +
      " kanıt sorusu (5 şık)</li><li>💀 1 boss dosyası (yenmeden kapanmaz)</li><li>🧩 " +
      a.menu.kod +
      " yapboz görevi (parçaları diz)</li><li>💪 " +
      a.menu.ekstra +
      " ekstra meydan okuma (zorunlu değil)</li>" +
      (a.menu.ornek
        ? "<li>📚 " +
          a.menu.ornek +
          " dersten örnek (dersteki kodlar, zorunlu değil)</li>"
        : "") +
      "</ul>";
    o +=
      '<div class="meta"><span>🏆 Ödül: ' +
      a.odul +
      " XP</span><span>📄 " +
      (4 + a.menu.mini * 2 + 3 + a.menu.ekstra + (a.menu.ornek || 0)) +
      " adım</span><span>🕵️ Dedektif Nokta eşlik ediyor</span></div>";
    o +=
      '</div><div class="altbar"><div class="ic"><button class="dugme" onclick="sonraki()">KARTI AÇ →</button></div></div>';
  } else if (a.tip === "konu") {
    o +=
      '<div class="kart"><p class="kucuk">' +
      a.alt +
      " • Vaka #" +
      OT.ders.n +
      " • iyice oku, sorularda lazım olacak</p><h3>🗂 " +
      kac(a.baslik) +
      " — tüm alet çantası</h3>";
    o += konuTablo(a);
    o +=
      '</div><div class="altbar"><div class="ic"><button class="dugme" onclick="sonraki()">OKUDUM, SORULARA GEÇ →</button></div></div>';
  } else if (a.tip === "micro") {
    var m = a.micro;
    o +=
      '<div class="kart"><p class="kucuk">' +
      a.alt +
      " • önce bunu oku (1 sayfa)</p><h3>📝 " +
      md(m.baslik) +
      '</h3><ul class="notliste">';
    (Array.isArray(m.not) ? m.not : [m.not]).forEach(function (sat) {
      o += "<li>" + kac(sat) + "</li>";
    });
    o += '</ul><pre class="kod">' + md(m.ornek) + "</pre>";
    o += '<div class="neden-box">' + md(m.neden) + "</div>";
    o += '<div class="akil">🧠 Akılda tut: ' + md(m.akil) + "</div>";
    o +=
      '</div><div class="altbar"><div class="ic"><button class="dugme" onclick="sonraki()">ÖĞRENDİM, SORUYA GEÇ →</button></div></div>';
  } else if (a.tip === "hata") {
    var hh = a.hata;
    HATA_SECIL = -1;
    o +=
      '<div class="kodgorev"><p class="kucuk">' +
      a.alt +
      " • +" +
      hh.puan +
      " XP • 3 denemede hata gösterilir</p>";
    o += '<p style="font-size:16px;font-weight:700">' + kac(hh.yoner) + "</p>";
    o +=
      '<div class="ciktikutu">🖨 Beklenen çıktı: <b>' +
      kac(hh.cikti) +
      "</b></div>";
    o +=
      '<p class="kucuk">⬆️ Yukarıdaki kod <b>bir yerden yanlış</b> — bir kural ihlal ediliyor. Program çalışıyor ama doğru sonucu vermiyor. <b>Hatalı satıra dokun.</b></p>';
    o += '<div class="hata-satir">';
    hh.satirlar.forEach(function (sl, i) {
      o +=
        '<button class="hata-btn" data-h="' +
        i +
        '" onclick="hataSec(' +
        i +
        ')">' +
        '<span class="hata-no">' +
        (i + 1) +
        '</span><span class="hata-kod">' +
        kac(sl) +
        "</span></button>";
    });
    o += '</div><div class="geri" id="gkod"></div></div>';
    o +=
      '<div class="altbar"><div class="ic">' +
      '<button class="dugme" style="background:#ffb000" id="ipucuBtn" onclick="ipucuGoster()">🕵️ İPUCU</button>' +
      '<button class="dugme" id="kontrol" onclick="hataKontrol()">HATAYI SEÇ</button>' +
      (hh.ekstra
        ? '<button class="dugme gri" onclick="sonraki()">ATLA →</button>'
        : "") +
      "</div></div>";
  } else if (a.tip === "bbrief") {
    o +=
      '<div class="kart"><p class="kucuk">' +
      a.alt +
      "</p><h3>💀 Boss'a hazır mısın?</h3><p>" +
      kac(a.fikir) +
      "</p>";
    o +=
      "<p>Buraya kadar " +
      (OT.ders.sorular || OT.ders.hatalar || []).length +
      " kanıt çözdün. Boss, öğrendiklerinin zor ama lezzetli karışımıdır. Yenilmeden dosya kapanmaz — ama sınırsız denemen ve Dedektif Nokta'nın fısıltıları var.</p>";
    o +=
      '</div><div class="altbar"><div class="ic"><button class="dugme kirmizi" onclick="sonraki()">BOSS DOSYASINI AÇ 💀</button></div></div>';
  } else if (a.tip === "soru") {
    o += kanitKart(a.alt, a.soru, "kanit");
    o +=
      '<div class="altbar"><div class="ic"><button class="dugme" style="background:#ffb000" id="ipucuBtn" onclick="ipucuGoster()">🕵️ İPUCU</button><button class="dugme" id="kontrol" onclick="kontrol()">KONTROL ET</button></div></div>';
  } else if (a.tip === "extra") {
    o += '<div class="ekstra">' + kanitKart(a.alt, a.soru, "extra") + "</div>";
    o +=
      '<div class="altbar"><div class="ic"><button class="dugme" style="background:#ffb000" id="ipucuBtn" onclick="ipucuGoster()">🕵️ İPUCU</button><button class="dugme" id="kontrol" onclick="kontrolExtra()">KONTROL ET</button><button class="dugme gri" onclick="sonraki()">ATLA →</button></div></div>';
  } else if (a.tip === "kod" || a.tip === "ornek") {
    var kg = a.kod;
    var ornekMi = a.tip === "ornek";
    var oTip = ornekMi ? kg.tip : kg.tip === "bosluk" ? "bosluk" : "sirala";
    var zorunlu = !ornekMi;
    o +=
      '<div class="kodgorev"><p class="kucuk">' +
      a.alt +
      " • " +
      (ornekMi ? ornekEtiket(kg) : a.tur || "YAPBOZ") +
      " • +" +
      kg.puan +
      " XP • " +
      (zorunlu ? "dizmeden dosya kapanmaz" : "dersteki örnek, zorunlu değil") +
      "</p>";
    o += '<p style="font-size:16px;font-weight:700">' + kac(kg.yoner) + "</p>";
    if (oTip === "bosluk") {
      BOS_SECIL = null;
      a.dolu = {};
      a.havuz = null;
      o +=
        '<div class="ciktikutu">🖨 Beklenen çıktı: <b>' +
        kac(kg.cikti) +
        "</b></div>";
      if (kg.formul) {
        o +=
          '<div class="formulkutu"><b>📐 ' + kac(kg.formul.baslik) + "</b><ul>";
        kg.formul.satirlar.forEach(function (fs) {
          o += "<li>" + kac(fs) + "</li>";
        });
        o += "</ul></div>";
      }
      o +=
        '<p class="kucuk">⬇️ ' +
        kg.parcalar.length +
        " boşluk var, " +
        boslukHavuzu(kg).length +
        " seçenekten doğru " +
        kg.parcalar.length +
        " tanesini yerleştir. (Önce parçaya, sonra boşluğa dokun — ya da sürükle.)</p>";
      o += '<pre class="sorukod boslukkod" id="boslukKod"></pre>';
      o += '<div class="parca-havuz" id="parcaHavuz"></div>';
      o +=
        '<div class="terminal" id="calisci">▸ Kodu tamamlayıp ÇALIŞTIR düğmesine bas.</div>';
      o += '<div class="geri" id="gkod"></div></div>';
      o +=
        '<div class="altbar"><div class="ic"><button class="dugme" style="background:#ffb000" id="ipucuBtn" onclick="ipucuGoster()">🕵️ İPUCU</button><button class="dugme" id="calistirBtn" onclick="kodCalistir()">▶ ÇALIŞTIR</button><button class="dugme" id="kontrol" onclick="kontrolKod()">KONTROL ET</button>' +
        (zorunlu
          ? ""
          : '<button class="dugme gri" onclick="sonraki()">ATLA →</button>') +
        "</div></div>";
    } else if (oTip === "sirala") {
      o +=
        '<div class="ciktikutu">🖨 Beklenen çıktı: <b>' +
        kac(kg.cikti) +
        "</b></div>";
      if (kg.formul) {
        o +=
          '<div class="formulkutu"><b>📐 ' + kac(kg.formul.baslik) + "</b><ul>";
        kg.formul.satirlar.forEach(function (fs) {
          o += "<li>" + kac(fs) + "</li>";
        });
        o += "</ul></div>";
      }
      if (!a.karisik) {
        a.karisik = kg.satirlar.map(function (_, i) {
          return i;
        });
        karistir(a.karisik);
        a.sira = [];
      }
      o +=
        '<p class="kucuk">🧩 Parçalara dokun, doğru sırayla diz:</p><div id="sira-sec">';
      a.karisik.forEach(function (oi) {
        var kapali = a.sira.indexOf(oi) >= 0 ? " disabled" : "";
        o +=
          '<button class="sira-btn" data-oi="' +
          oi +
          '" onclick="siraEkle(this)"' +
          kapali +
          ">" +
          kac(kg.satirlar[oi]) +
          "</button>";
      });
      o +=
        '</div><div class="sira-alan" id="sira-alan">' +
        kac(
          a.sira
            .map(function (oi) {
              return kg.satirlar[oi];
            })
            .join("\n"),
        ) +
        "</div>";
      o +=
        '<button class="dugme gri" style="flex:none" onclick="siraTemizle()">TEMİZLE</button>';
      o += '<div class="geri" id="gkod"></div></div>';
      o +=
        '<div class="altbar"><div class="ic"><button class="dugme" style="background:#ffb000" id="ipucuBtn" onclick="ipucuGoster()">🕵️ İPUCU</button><button class="dugme" id="kontrol" onclick="kontrolKod()">KONTROL ET</button>' +
        (zorunlu
          ? ""
          : '<button class="dugme gri" onclick="sonraki()">ATLA →</button>') +
        "</div></div>";
    } else if (oTip === "yaz") {
      o += ornekKodBlok(kg, false);
      o += '<input class="terminal" id="sayio" placeholder="> çıktıyı yaz...">';
      o += '<div class="geri" id="gkod"></div></div>';
      o +=
        '<div class="altbar"><div class="ic"><button class="dugme" style="background:#ffb000" id="ipucuBtn" onclick="ipucuGoster()">🕵️ İPUCU</button><button class="dugme" id="kontrol" onclick="kontrolOrnekYaz()">KONTROL ET</button><button class="dugme gri" onclick="sonraki()">ATLA →</button></div></div>';
    } else if (oTip === "bul" || oTip === "say") {
      o += ornekKodBlok(kg, true);
      o +=
        '<input class="terminal" id="sayio" inputmode="numeric" placeholder="> sayı yaz...">';
      o += '<div class="geri" id="gkod"></div></div>';
      o +=
        '<div class="altbar"><div class="ic"><button class="dugme" style="background:#ffb000" id="ipucuBtn" onclick="ipucuGoster()">🕵️ İPUCU</button><button class="dugme" id="kontrol" onclick="kontrolOrnekSayi()">KONTROL ET</button><button class="dugme gri" onclick="sonraki()">ATLA →</button></div></div>';
    } else {
      o += ornekKodBlok(kg, false);
      o += '<div class="geri" id="gkod"></div></div>';
      o +=
        '<div class="altbar"><div class="ic"><button class="dugme" style="background:#ffb000" id="ipucuBtn" onclick="ipucuGoster()">🕵️ İPUCU</button><button class="dugme" id="kontrol" onclick="ornekOkuGec()">OKUDUM, DEVAM →</button><button class="dugme gri" onclick="sonraki()">ATLA →</button></div></div>';
    }
  } else {
    o +=
      '<div class="boss"><p class="kucuk" style="color:#ff9c9c">SON DOSYA • Vaka ancak boss yenilince kapanır • +' +
      a.boss.puan +
      " XP</p>" +
      kanitKart("BOSS", a.boss, "boss") +
      "</div>";
    o +=
      '<div class="altbar"><div class="ic"><button class="dugme" style="background:#ffb000" id="ipucuBtn" onclick="ipucuGoster()">🕵️ İPUCU</button><button class="dugme kirmizi" id="kontrol" onclick="kontrolBoss()">BOSS\'A SALDIR</button></div></div>';
  }
  o += '<div class="ipkutusu" id="ipkutusu"></div>';
  document.getElementById("orta").innerHTML = o;
  geriEkle();
  panelGuncelle();
  if (
    OT.adimlar[OT.idx].tip === "kod" &&
    OT.adimlar[OT.idx].kod.tip === "bosluk"
  )
    boslukCiz();
  var si = document.getElementById("sayi");
  if (si) {
    si.addEventListener("keydown", function (e) {
      if (e.key === "Enter") kontrol();
    });
  }
  var sb = document.getElementById("sayib");
  if (sb) {
    sb.addEventListener("keydown", function (e) {
      if (e.key === "Enter") kontrolBoss();
    });
  }
  var se = document.getElementById("sayie");
  if (se) {
    se.addEventListener("keydown", function (e) {
      if (e.key === "Enter") kontrolExtra();
    });
  }
  var sk = document.getElementById("sayik");
  if (sk) {
    sk.addEventListener("keydown", function (e) {
      if (e.key === "Enter") kontrolKod();
    });
  }
  var so = document.getElementById("sayio");
  if (so) {
    so.addEventListener("keydown", function (e) {
      if (e.key === "Enter") {
        var aa = OT.adimlar[OT.idx];
        if (
          aa &&
          aa.tip === "ornek" &&
          (aa.kod.tip === "bul" || aa.kod.tip === "say")
        )
          kontrolOrnekSayi();
        else if (aa && aa.tip === "ornek") kontrolOrnekYaz();
      }
    });
  }
}
function cozulduKart(a) {
  var baslik, icerik, aciklama;
  if (a.tip === "kod" || a.tip === "ornek") {
    var kg2 = a.kod;
    if (a.tip === "ornek" && kg2.tip === "yaz") {
      baslik = "✍️ Çıktı yakalandı ✅";
      icerik = kac(kg2.cikti);
    } else if (a.tip === "ornek" && kg2.tip === "bul") {
      baslik = "🐞 Hata yakalandı ✅";
      icerik = kac("Hatalı satır: " + kg2.cevap);
    } else if (a.tip === "ornek" && kg2.tip === "say") {
      baslik = "🔢 Hatalar sayıldı ✅";
      icerik = kac("Hata sayısı: " + kg2.cevap);
    } else if (a.tip === "ornek" && kg2.tip === "oku") {
      baslik = "📖 Örnek incelendi ✅";
      icerik = kac(kg2.satirlar.join("\n"));
    } else {
      baslik =
        a.tip === "ornek"
          ? "📚 Dersten örnek çözüldü ✅"
          : "🧩 Yapboz dizildi ✅";
      icerik = kac(kg2.satirlar.join("\n"));
    }
    aciklama = kg2.neden;
  } else if (a.tip === "hata") {
    var hh2 = a.hata;
    baslik = "🔍 Suçlu satır bulundu ✅";
    icerik = kac(
      "Hatalı satır " + (hh2.cevap + 1) + ": " + hh2.satirlar[hh2.cevap],
    );
    aciklama = "Doğrusu: " + hh2.duzeltme + ". " + hh2.neden;
  } else {
    var ss = a.tip === "boss" ? a.boss : a.soru;
    baslik =
      a.tip === "boss"
        ? "💀 BOSS yenildi ✅"
        : a.tip === "extra"
          ? "💪 Ekstra çözüldü ✅"
          : "🔎 Kanıt çözüldü ✅";
    icerik = kac(dogruMetin(ss));
    aciklama = ss.neden;
  }
  return (
    '<div class="kart"><p class="kucuk">' +
    a.alt +
    " • Vaka #" +
    OT.ders.n +
    "</p><h3>" +
    baslik +
    "</h3>" +
    '<pre class="kod">' +
    icerik +
    "</pre><p>" +
    md(aciklama) +
    "</p></div>"
  );
}
function onceki() {
  bantKapat();
  if (OT && OT.idx > 0) {
    OT.idx--;
    adim();
  }
}
function geriEkle() {
  try {
    var bar = document.querySelector(".altbar .ic");
    if (bar && OT.idx > 0) {
      var gb = document.createElement("button");
      gb.className = "dugme gri";
      gb.textContent = "← ÖNCEKİ";
      gb.setAttribute("onclick", "onceki()");
      bar.insertBefore(gb, bar.firstChild);
    }
  } catch (e) {}
}
function soruHTML(soru) {
  var e = kac(soru);
  var i = e.indexOf("\n");
  var bas = "",
    kod = "";
  if (i < 0) {
    bas = e;
  } else {
    bas = e.slice(0, i);
    kod = e.slice(i + 1).replace(/^\n+/, "");
  }
  bas = bas
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/`([^`\n]+)`/g, "<code>$1</code>");
  kod = kod
    .replace(/^```[ \t]*$/gm, "")
    .replace(/^\n+/, "")
    .replace(/\n+$/, "");
  kod = kod
    .replace(/```/g, "")
    .replace(/`/g, "")
    .replace(/^\n+/, "")
    .replace(/\n+$/, "");
  if (!kod) return '<p class="soru">' + bas + "</p>";
  return (
    '<p class="soru">' + bas + '</p><pre class="sorukod">' + kod + "</pre>"
  );
}
function ornekEtiket(kg) {
  if (kg.tip === "yaz") return "TAHMİN ✍️";
  if (kg.tip === "bul") return "HATA AVI 🐞";
  if (kg.tip === "say") return "HATA SAYIMI 🔢";
  if (kg.tip === "oku") return "İNCELE 📖";
  return "DERSTEN 📚";
}
function ornekKodBlok(kg, numarali) {
  var sat = kg.satirlar
    .map(function (l, i) {
      return numarali ? i + 1 + "| " + l : l;
    })
    .join("\n");
  return '<pre class="sorukod">' + kac(sat) + "</pre>";
}
function normCikti(s) {
  return String(s)
    .replace(/\r/g, "")
    .split("\n")
    .map(function (l) {
      return l.replace(/[ \t]+$/, "");
    })
    .join("\n")
    .trim();
}
function konuTablo(a) {
  var satirlar = a.konu;
  var N = 0;
  if (a.konuBaslik && a.konuBaslik.length) {
    N = a.konuBaslik.length;
  } else {
    satirlar.forEach(function (kv) {
      if (kv.length > N) N = kv.length;
    });
  }
  var VARSAYILAN = [
    "Tür",
    "Bayt",
    "Değer Aralığı / Hassasiyet",
    "Kullanım Alanı",
  ];
  var BAS = a.konuBaslik;
  if (!BAS) {
    BAS = [];
    for (var q = 0; q < N; q++) BAS.push("—");
  }
  var SABLON = {
    2: "minmax(76px,.9fr) minmax(0,2.4fr)",
    3: "minmax(52px,.4fr) minmax(118px,1.05fr) minmax(0,2.2fr)",
    4: "minmax(118px,1.15fr) minmax(44px,.55fr) minmax(0,1.6fr) minmax(0,1.25fr)",
    5: "minmax(52px,.5fr) minmax(96px,.85fr) minmax(0,1.4fr) minmax(0,1.1fr) minmax(0,1fr)",
  };
  var KLAS = "kol" + (N > 5 ? 4 : N);
  var st = "";
  var h = '<div class="konutablo' + (N > 2 ? " genis" : "") + '">';
  h += '<div class="konusatir baslik ' + KLAS + '">';
  for (var b = 0; b < N; b++)
    h +=
      '<div class="konuh">' + (BAS[b] != null ? kac(BAS[b]) : "—") + "</div>";
  h += "</div>";
  satirlar.forEach(function (kv) {
    if (kv.length === 1) {
      h += '<div class="konugrup ' + KLAS + '">' + kac(kv[0]) + "</div>";
      return;
    }
    h += '<div class="konusatir ' + KLAS + '">';
    for (var i = 0; i < N; i++)
      h +=
        '<div class="' +
        (i === 0 ? "konuoge" : "konuislev") +
        '">' +
        (kv[i] == null ? "—" : kac(kv[i])) +
        "</div>";
    if (N > 1) {
      var mb = [];
      for (var j = 1; j < N; j++) {
        if (kv[j] == null) continue;
        var lb = BAS[j] && BAS[j] !== "—" ? BAS[j] + ": " : "";
        mb.push(lb + kac(kv[j]));
      }
      if (mb.length) h += '<div class="konumobil">' + mb.join(" · ") + "</div>";
    }
    h += "</div>";
  });
  h += '<div class="konusurum">sürüm 2026-10-06-konu4 — ' + N + " sütun</div>";
  return h + "</div>";
}
function rehberGoster() {
  var O = document.getElementById("orta");
  var kok = document.createElement("div");
  kok.innerHTML = rehberHtml();
  O.insertBefore(kok.firstChild, O.firstChild);
  kok.firstChild.classList.add("rehber-acik");
  kok.firstChild.scrollIntoView({ behavior: "smooth", block: "start" });
  try {
    menuKapat();
  } catch (e) {}
}

function rehberHtml() {
  var k = [
    {
      c: "",
      i: "1",
      t: "İş ADIMI",
      l: [
        "<b>Ders Notu</b> — her sorudan önce 1 dk okuma, ipucu ü",
        "<b>Kanıt</b> — 5 şıklı soru; Dedektif Nokta’nın dedektifi",
        "<b>BOSS Dosyası</b> — dosyayı kapatan soru; geçmeden dosya kapanmaz",
        "<b>Yapboz</b> — parçaları doğru diz, <b>KOD TAMAMLA</b> de boşluk doldur",
        "<b>Ekstra</b> — zorunlu değil, tatlı XP verir",
      ],
    },
    {
      c: "k-liste",
      i: "2",
      t: "VAKA İÇİŞİ",
      l: [
        "<b>Dava menüsü</b> — dosya arşivi (bitenler mühürlür)",
        "<b>BAŞVURU KARTI</b> — o vakada kullanacağın tüm araçlar",
        "<b>Arşiv Odası</b> — bitirdiğin dosyalar",
        "<b>Ümitedeki konular</b> — ilerleme kaydı",
      ],
    },
    {
      c: "k-yapboz",
      i: "3",
      t: "KOD TAMAMLA",
      l: [
        "Çöke <b>tıkla</b>, sonra boşluk <b>tıkla</b> (veya sürükle)",
        "Yeşil içeren <b>çeldirici</b> çıkmaz — dıkkatli oku",
        "Her boşluk üzerinde <b>yorum</b> ne yapacağı söyler",
        "<b>ÇALIŞTIR</b> yalnızca hepsi doğruysa çalışır",
      ],
    },
    {
      c: "k-boss",
      i: "4",
      t: "BOSS",
      l: [
        "Dosyayı <b>kapatmadan</b> geçemezsin",
        "<b>Dedektif Nokta</b> çözde ıpucu verir",
        "Yanlış çıklar bazen <b>derlenmez</b> — okuman gerek",
        "Konu kartındaki kurallara bak",
      ],
    },
    {
      c: "k-ipuclari",
      i: "5",
      t: "YARDIM",
      l: [
        "<b>Dedektif Nokta</b> — sağ altta; dokun, ipucu iste",
        "<b>İPUCU</b> butonu — 3 kademe ipucu, giderek açılır",
        "<b>İPUCU</b> butonu — tek tıkla yanıt gelir",
        "Tuş takımı: <b>boş bırak</b> = dönüş, <b>DEVAM</b> = ilerle",
        "<b>Hesap makinesi</b> — sağ altta panel",
      ],
    },
  ];
  var h =
    '<div class="rehber"><h3><span class="rn">?</span>Nerede ne var?</h3>';
  h +=
    '<p class="giris-yazi">Bu bölümde her adımın ne işe yaradığını kısa sözüyle anlatıyorum. Bir yerde takılırsan geri gel, buraya bak.</p>';
  h += '<div class="rehber-izgara">';
  k.forEach(function (x) {
    h +=
      '<div class="rehber-kutu ' +
      x.c +
      '"><h4><span class="isaret">' +
      x.i +
      "</span>" +
      x.t +
      "</h4><ul>";
    x.l.forEach(function (l) {
      h += "<li>" + l + "</li>";
    });
    h += "</ul></div>";
  });
  h += "</div>";
  h += '<div class="rehber-alt">';
  h +=
    "<span><b>Adım sayısı:</b> 1 dava = konu kartı + dört adım (not/soru + 1 yapboz + boss)</span>";
  h +=
    "<span><b>XP:</b> düşük 10-15, orta 20-30, BOSS 50, yapboz 30, ekstra 20</span>";
  h += "<span><b>İlerleme:</b> sağ panelde otomatik kaydedilir</span>";
  h += "</div>";
  return h + "</div>";
}

function kanitKart(alt, s, mod) {
  var zorMu = (s.puan || 0) >= 20;
  var o =
    '<div class="' +
    (mod === "kanit" ? "kanit" + (zorMu ? " zor" : "") : "") +
    '">';
  if (mod === "kanit")
    o += zorMu
      ? "<h4>🔥 " + alt + " • Zor soru, önce sen çöz!</h4>"
      : "<h4>🔎 " + alt + " • Önce sen çöz!</h4>";
  if (mod === "extra")
    o +=
      '<h4 style="color:#ffb000">💪 ' +
      alt +
      " • Zorunlu değil, ama tatlı XP var!</h4>";
  o += soruHTML(s.soru);
  if (s.tip === "r") {
    o += '<div id="secimler">';
    var harfler = ["A", "B", "C", "D", "E"];
    s.sec.forEach(function (sec, i) {
      o +=
        '<button class="seck" data-v="' +
        sec[0] +
        '" onclick="sec(this)"><span class="harf">' +
        harfler[i] +
        '</span><span class="seck-m">' +
        md(sec[1]) +
        "</span></button>";
    });
    o += "</div>";
  } else {
    var id = mod === "boss" ? "sayib" : mod === "extra" ? "sayie" : "sayi";
    o +=
      '<input class="terminal" id="' +
      id +
      '" inputmode="decimal" placeholder="> çıktıdaki tek sayıyı yaz..." autocomplete="off">';
    o +=
      '<p class="kucuk" style="margin-top:8px">⬆ Yukarıdaki kodu çalıştır, ekrana <b>ne yazıldığını</b> sayı olarak yaz. Ondalık varsa virgül kullan (59,7).</p>';
  }
  return o + "</div>";
}
function sec(btn) {
  document.querySelectorAll(".seck").forEach(function (b) {
    b.classList.remove("secili");
  });
  btn.classList.add("secili");
  OT.secili = btn.getAttribute("data-v");
}
function dusunAdimlari(s) {
  var o = [];
  (s.dusun || []).forEach(function (st, i) {
    o.push(["💡 Düşünme adımı " + (i + 1), md(st)]);
  });
  return o;
}
function ipucuKademeleri(a) {
  if (a.tip === "soru")
    return dusunAdimlari(a.soru).concat([["🕵️ İpucu", md(a.soru.ipucu)]]);
  if (a.tip === "boss") {
    var bip = a.boss.ip;
    if (!Array.isArray(bip)) bip = [bip];
    var bl = [];
    bip.forEach(function (x, i) {
      bl.push(["🕵️ İpucu " + (i + 1), md(x)]);
    });
    if (!bl.length) bl = [["🕵️ İpucu", md(a.boss.ipucu || a.boss.neden || "")]];
    return dusunAdimlari(a.boss).concat(bl);
  }
  if (a.tip === "extra") return [["🕵️ İpucu", md(a.soru.ipucu)]];
  if (a.tip === "hata") {
    if (Array.isArray(a.hata.ipucu)) {
      var lh = [];
      a.hata.ipucu.forEach(function (x, j) {
        lh.push(["🕵️ " + (j + 1) + ". ipucu", kac(x)]);
      });
      return lh;
    }
    return [["🕵️ İpucu", kac(a.hata.ipucu)]];
  }
  if (a.tip === "kod" || a.tip === "ornek") {
    if (Array.isArray(a.kod.ipucu)) {
      var l = [];
      a.kod.ipucu.forEach(function (x, i) {
        l.push(["🕵️ " + (i + 1) + ". boşluk", kac(x)]);
      });
      return l;
    }
    return [["🕵️ İpucu", kac(a.kod.ipucu)]];
  }
  return [];
}
function ipucuGoster() {
  var a = OT.adimlar[OT.idx];
  var kad = ipucuKademeleri(a);
  if (!kad.length) return;
  a.ipSeviye = Math.min((a.ipSeviye || 0) + 1, kad.length);
  var o = "";
  for (var i = 0; i < a.ipSeviye; i++) {
    o +=
      '<div class="ipkademe"><b>' + kad[i][0] + ":</b> " + kad[i][1] + "</div>";
  }
  var k = document.getElementById("ipkutusu");
  k.innerHTML = o;
  k.classList.add("goster");
  var son = kad[a.ipSeviye - 1][1].replace(/<[^>]*>/g, "");
  maskotSoyle(
    kad[a.ipSeviye - 1][0].replace(/[^a-zA-ZçÇğĞıİöÖşŞüÜ ]/g, "") + ": " + son,
    true,
  );
  var b = document.getElementById("ipucuBtn");
  if (b) b.innerHTML = "🕵️ İPUCU (" + a.ipSeviye + "/" + kad.length + ")";
  panelGuncelle();
}
function bantGoster(ok, baslik, metin, buton) {
  var b = document.getElementById("bant");
  b.className = "bant goster " + (ok ? "ok" : "hata");
  document.getElementById("bant-baslik").textContent = baslik;
  document.getElementById("bant-baslik").style.color = ok
    ? "#3ddc84"
    : "#ff5c5c";
  document.getElementById("bant-metin").textContent = metin;
  var bt = document.getElementById("bant-buton");
  bt.style.background = ok ? "#3ddc84" : "#ff5c5c";
  bt.style.color = ok ? "#0f2e1d" : "#fff";
  bt.textContent = buton;
}
function degerlendir(tip, deger, s) {
  if (tip === "r") {
    return deger === s.cevap;
  }
  var sayi = sayiDeger(deger);
  if (sayi === null) return null;
  var bek = sayiDeger(s.cevap);
  if (bek === null) return false;
  return Math.abs(sayi - bek) <= (s.tol || 0.001);
}
function tuzakBak(s, ham) {
  if (!s.tuzak) return "";
  var v = parseFloat(String(ham).trim().replace(",", "."));
  if (isNaN(v)) return "";
  for (var k in s.tuzak) {
    if (s.tuzak.hasOwnProperty(k)) {
      if (Math.abs(v - parseFloat(k)) <= Math.max(s.tol || 0.001, 0.011))
        return s.tuzak[k];
    }
  }
  return "";
}
function kontrol() {
  var a = OT.adimlar[OT.idx];
  if (!a || a.tip !== "soru" || a.tamam) return;
  var s = a.soru;
  if (!a.denendi) {
    a.denendi = true;
    OT.cevaplandi++;
  }
  var sonuc,
    girdi = "";
  if (s.tip === "r") {
    if (!OT.secili) return;
    girdi = OT.secili;
    sonuc = degerlendir("r", OT.secili, s);
  } else {
    var ham = document.getElementById("sayi").value;
    sonuc = degerlendir("n", ham, s);
    if (sonuc === null) {
      var inpN = document.getElementById("sayi");
      if (inpN) {
        inpN.style.borderColor = "#ff5c5c";
        try {
          inpN.focus();
        } catch (e) {}
      }
      ses(180, 0.3);
      var ip = String(ham || "").trim();
      bantGoster(
        false,
        "Sadece sayı yaz",
        ip
          ? "«" +
              ip +
              "» bir sayı değil. Kodun ekrana yazdığı tek sayıyı yaz — şık yok."
          : "Boş kaldı. Kodun ekrana yazdığı sayıyı yaz (ondalık için virgül: 59,7).",
        "TAMAM",
      );
      document.getElementById("bant-buton").onclick = function () {
        bantKapat();
      };
      return;
    }
    girdi = ham;
    if (!sonuc) {
      var tz0 = tuzakBak(s, ham);
      if (tz0) s._tuzakMsg = tz0;
    }
  }
  var puan = a.revealed
    ? 0
    : a.yanlis === 0
      ? s.puan
      : Math.max(5, Math.floor(s.puan / 2));
  if (sonuc) {
    a.tamam = true;
    if (s.tip === "r") {
      document.querySelectorAll(".seck").forEach(function (b) {
        b.disabled = true;
        var v = b.getAttribute("data-v");
        if (v === s.cevap) b.classList.add("dogru");
        else if (v === girdi) b.classList.add("yanlis");
      });
    } else {
      var inp = document.getElementById("sayi");
      inp.disabled = true;
      inp.style.borderColor = "#3ddc84";
    }
    document.getElementById("kontrol").style.display = "none";
    OT.dogru++;
    OT.xp += puan;
    ses(660, 0.15);
    bantGoster(
      true,
      a.revealed
        ? "Doğrusunu görmüştün, devam! (0 XP)"
        : "Kanıt çözüldü! +" + puan + " XP",
      s.neden,
      "DEVAM",
    );
    OT.secili = null;
    document.getElementById("bant-buton").onclick = function () {
      bantKapat();
      sonraki();
    };
    panelGuncelle();
    return;
  }
  a.yanlis++;
  ses(180, 0.3);
  if (a.yanlis >= 3) {
    acigaCikar(s, girdi);
    a.revealed = true;
    a.tamam = true;
    document.getElementById("kontrol").style.display = "none";
    bantGoster(
      false,
      "3 deneme oldu — doğrusunu gösteriyorum (0 XP):",
      "Doğru cevap: " + dogruMetin(s) + ". " + s.neden,
      "DEVAM",
    );
    OT.secili = null;
    document.getElementById("bant-buton").onclick = function () {
      bantKapat();
      sonraki();
    };
    panelGuncelle();
    return;
  }
  if (s.tip === "r") {
    document.querySelectorAll(".seck").forEach(function (b) {
      if (b.getAttribute("data-v") === girdi) {
        b.classList.add("yanlis");
        b.disabled = true;
        b.classList.remove("secili");
      }
    });
  } else {
    var inp2 = document.getElementById("sayi");
    inp2.style.borderColor = "#ff5c5c";
  }
  var tz = (a.ipSeviye || 0) >= 1 ? s._tuzakMsg || "" : null;
  s._tuzakMsg = null;
  if (tz) {
    bantGoster(
      false,
      "Dedektif Nokta hatanı tespit etti:",
      tz + " (Kalan deneme: " + (3 - a.yanlis) + ")",
      "TEKRAR DENE",
    );
  } else {
    var davet =
      (a.ipSeviye || 0) === 0
        ? " Takıldıysan İPUCU düğmesine ya da bana bas."
        : " Açık ipuçlarına bir daha bak.";
    bantGoster(
      false,
      "Olmadı — doğru gösterilmiyor, bir daha düşün:",
      davet + " (Kalan deneme: " + (3 - a.yanlis) + ")",
      "TEKRAR DENE",
    );
  }
  document.getElementById("bant-buton").onclick = function () {
    bantKapat();
  };
  OT.secili = null;
  panelGuncelle();
}
function dogruMetin(s) {
  if (s.tip === "r") {
    for (var i = 0; i < s.sec.length; i++) {
      if (s.sec[i][0] === s.cevap)
        return s.sec[i][0].toUpperCase() + ") " + s.sec[i][1];
    }
    return String(s.cevap).toUpperCase();
  }
  return String(s.cevap);
}
function acigaCikar(s, girdi) {
  if (s.tip === "r") {
    document.querySelectorAll(".seck").forEach(function (b) {
      b.disabled = true;
      var v = b.getAttribute("data-v");
      if (v === s.cevap) b.classList.add("dogru");
      else if (v === girdi) b.classList.add("yanlis");
    });
  } else {
    var inp =
      document.getElementById("sayi") ||
      document.getElementById("sayib") ||
      document.getElementById("sayie");
    if (inp) {
      inp.disabled = true;
      inp.style.borderColor = "#ff5c5c";
    }
  }
}
function kontrolBoss() {
  var a = OT.adimlar[OT.idx];
  if (!a || a.tip !== "boss" || a.tamam) return;
  var s = a.boss;
  if (!a.denendi) {
    a.denendi = true;
    OT.cevaplandi++;
  }
  var sonuc,
    girdi = "";
  if (s.tip === "r") {
    if (!OT.secili) return;
    girdi = OT.secili;
    sonuc = degerlendir("r", OT.secili, s);
  } else {
    var ham = document.getElementById("sayib").value;
    sonuc = degerlendir("n", ham, s);
    if (sonuc === null) return;
    girdi = ham;
    if (!sonuc) {
      var tz1 = tuzakBak(s, ham);
      if (tz1) s._tuzakMsg = tz1;
    }
  }
  var kb = document.getElementById("kontrol");
  if (sonuc) {
    var puan = a.tamam
      ? 0
      : a.revealed
        ? 0
        : a.yanlis === 0
          ? s.puan
          : Math.max(10, Math.floor(s.puan / 2));
    a.tamam = true;
    if (s.tip === "r") {
      document.querySelectorAll(".seck").forEach(function (b) {
        b.disabled = true;
        var v = b.getAttribute("data-v");
        if (v === s.cevap) b.classList.add("dogru");
        else if (v === girdi) b.classList.add("yanlis");
      });
    } else {
      var inp = document.getElementById("sayib");
      inp.disabled = true;
      inp.style.borderColor = "#3ddc84";
    }
    if (kb) kb.style.display = "none";
    a.cozuldu = true;
    OT.bossGecti = true;
    OT.dogru++;
    OT.xp += puan;
    ses(880, 0.25);
    bantGoster(
      true,
      "BOSS YENİLDİ! +" + puan + " XP 💀",
      s.neden,
      "DOSYAYI KAPAT",
    );
    OT.secili = null;
    document.getElementById("bant-buton").onclick = function () {
      bantKapat();
      sonraki();
    };
    panelGuncelle();
    return;
  }
  a.yanlis++;
  ses(150, 0.35);
  if (a.yanlis >= 3) {
    acigaCikar(s, girdi);
    a.revealed = true;
    document.querySelectorAll(".seck").forEach(function (b) {
      if (!b.classList.contains("dogru")) {
        b.disabled = false;
        b.classList.remove("yanlis", "secili");
      }
    });
    var inpR =
      document.getElementById("sayi") || document.getElementById("sayib");
    if (inpR) {
      inpR.disabled = false;
      inpR.style.borderColor = "";
    }
    var kb2 = document.getElementById("kontrol");
    if (kb2) kb2.style.display = "";
    bantGoster(
      false,
      "3 deneme oldu — doğrusu açıkta (0 XP):",
      "Doğru cevap: " +
        dogruMetin(s) +
        ". " +
        s.neden +
        " Şimdi doğru cevabı işaretleyip saldır (0 XP).",
      "TEKRAR DENE",
    );
    OT.secili = null;
    document.getElementById("bant-buton").onclick = function () {
      bantKapat();
    };
    panelGuncelle();
    return;
  }
  if (s.tip === "r") {
    document.querySelectorAll(".seck").forEach(function (b) {
      if (b.getAttribute("data-v") === girdi) {
        b.classList.add("yanlis");
        b.disabled = true;
        b.classList.remove("secili");
      }
    });
  } else {
    var inp2 = document.getElementById("sayib");
    inp2.style.borderColor = "#ff5c5c";
  }
  var ip = s._tuzakMsg || (a.yanlis === 1 ? s.ip[0] : s.ip[1]);
  var teshis2 = !!s._tuzakMsg && (a.ipSeviye || 0) >= 1;
  s._tuzakMsg = null;
  if (teshis2) {
    bantGoster(
      false,
      "Dedektif Nokta hatanı tespit etti:",
      ip + " (Kalan deneme: " + (3 - a.yanlis) + ")",
      "TEKRAR SALDIR",
    );
  } else {
    var davet2 =
      (a.ipSeviye || 0) === 0
        ? " Takıldıysan İPUCU düğmesine ya da bana bas."
        : "";
    bantGoster(
      false,
      "Doğru gösterilmiyor — bir daha düşün:",
      davet2 + " (Kalan deneme: " + (3 - a.yanlis) + ")",
      "TEKRAR SALDIR",
    );
  }
  OT.secili = null;
  document.getElementById("bant-buton").onclick = function () {
    bantKapat();
  };
  panelGuncelle();
}
function kontrolExtra() {
  var a = OT.adimlar[OT.idx];
  if (!a || a.tip !== "extra" || a.tamam) return;
  var s = a.soru;
  if (!a.denendi) {
    a.denendi = true;
  }
  var sonuc,
    girdi = "";
  if (s.tip === "r") {
    if (!OT.secili) return;
    girdi = OT.secili;
    sonuc = degerlendir("r", OT.secili, s);
  } else {
    var ham = document.getElementById("sayie").value;
    sonuc = degerlendir("n", ham, s);
    if (sonuc === null) return;
    girdi = ham;
  }
  var puan = a.revealed
    ? 0
    : a.yanlis === 0
      ? s.puan
      : Math.max(5, Math.floor(s.puan / 2));
  if (sonuc) {
    a.tamam = true;
    if (s.tip === "r") {
      document.querySelectorAll(".seck").forEach(function (b) {
        b.disabled = true;
        var v = b.getAttribute("data-v");
        if (v === s.cevap) b.classList.add("dogru");
        else if (v === girdi) b.classList.add("yanlis");
      });
    } else {
      var inp = document.getElementById("sayie");
      inp.disabled = true;
      inp.style.borderColor = "#3ddc84";
    }
    document.getElementById("kontrol").style.display = "none";
    a.cozuldu = true;
    OT.extraCozulen++;
    OT.xp += puan;
    ses(760, 0.2);
    bantGoster(
      true,
      a.revealed
        ? "Doğrusunu görmüştün, devam! (0 XP)"
        : "Ekstra çözüldü! +" + puan + " XP 💪",
      s.neden,
      "DEVAM",
    );
    OT.secili = null;
    document.getElementById("bant-buton").onclick = function () {
      bantKapat();
      sonraki();
    };
    panelGuncelle();
    return;
  }
  a.yanlis++;
  ses(180, 0.3);
  if (a.yanlis >= 3) {
    acigaCikar(s, girdi);
    a.revealed = true;
    a.tamam = true;
    document.getElementById("kontrol").style.display = "none";
    bantGoster(
      false,
      "3 deneme oldu — doğrusu açıkta (0 XP):",
      "Doğru cevap: " + dogruMetin(s) + ". " + s.neden,
      "DEVAM",
    );
    OT.secili = null;
    document.getElementById("bant-buton").onclick = function () {
      bantKapat();
      sonraki();
    };
    panelGuncelle();
    return;
  }
  if (s.tip === "r") {
    document.querySelectorAll(".seck").forEach(function (b) {
      if (b.getAttribute("data-v") === girdi) {
        b.classList.add("yanlis");
        b.disabled = true;
        b.classList.remove("secili");
      }
    });
  } else {
    var inp2 = document.getElementById("sayie");
    inp2.style.borderColor = "#ff5c5c";
  }
  bantGoster(
    false,
    "Doğru şık gösterilmiyor — bir daha düşün:",
    "İpucu istersen İPUCU düğmesine ya da bana bas. (Kalan deneme: " +
      (3 - a.yanlis) +
      ", ya da ATLA)",
    "TEKRAR DENE",
  );
  OT.secili = null;
  document.getElementById("bant-buton").onclick = function () {
    bantKapat();
  };
  panelGuncelle();
}
function panelGuncelle() {
  if (!OT) return;
  var sol = document.getElementById("panel-sol"),
    sag = document.getElementById("panel-sag");
  if (!sol || !sag) return;
  var kanitTop = 0,
    kanitOk = 0,
    bossOk = false,
    extTop = 0,
    extOk = 0,
    kodTop = 0,
    kodOk = 0,
    ornTop = 0,
    ornOk = 0;
  OT.adimlar.forEach(function (a, i) {
    if (a.tip === "soru") {
      kanitTop++;
      if (i < OT.idx) kanitOk++;
    }
    if (a.tip === "boss") {
      if (a.cozuldu) bossOk = true;
    }
    if (a.tip === "kod") {
      kodTop++;
      if (a.cozuldu) kodOk++;
    }
    if (a.tip === "extra") {
      extTop++;
      if (a.cozuldu) extOk++;
    }
    if (a.tip === "ornek") {
      ornTop++;
      if (a.cozuldu) ornOk++;
    }
  });
  bossOk = bossOk || OT.bossGecti === true;
  var nokta = "";
  OT.adimlar.forEach(function (a, i) {
    var cls = "bossnok";
    if (a.tip === "soru" || a.tip === "extra") cls = "";
    if (i < OT.idx) cls += " bitti";
    else if (i === OT.idx) cls += " simdi";
    nokta += "<i class='" + cls + "'></i>";
  });
  sol.innerHTML =
    "<h5>📁 DOSYA BİLGİLERİ</h5><b>Vaka #" +
    OT.ders.n +
    ": " +
    kac(OT.ders.baslik) +
    "</b>" +
    '<div class="noktalar">' +
    nokta +
    "</div>" +
    "<div>🔎 Kanıt: " +
    kanitOk +
    "/" +
    kanitTop +
    "</div>" +
    "<div>💀 Boss: " +
    (bossOk ? "yenildi ✅" : "duruyor") +
    "</div>" +
    "<div>🧩 Yapboz: " +
    kodOk +
    "/" +
    kodTop +
    "</div>" +
    "<div>💪 Ekstra: " +
    extOk +
    "/" +
    extTop +
    "</div>" +
    (ornTop ? "<div>📚 Dersten: " + ornOk + "/" + ornTop + "</div>" : "") +
    "<div>⚡ Vakada XP: " +
    OT.xp +
    "</div>";
  var log = OT.gunluk.slice(-4);
  var lo = "";
  log.forEach(function (m) {
    lo += "<li>" + kac(m) + "</li>";
  });
  sag.innerHTML =
    "<h5>🕵️ DEDEKTİFİN NOT DEFTERİ</h5><ul>" +
    (lo || "<li>Henüz not yok.</li>") +
    "</ul>";
}
function karistir(dizi) {
  for (var i = dizi.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var t = dizi[i];
    dizi[i] = dizi[j];
    dizi[j] = t;
  }
  if (dizi.length > 1) {
    var sirali = true;
    for (var k = 0; k < dizi.length; k++) {
      if (dizi[k] !== k) {
        sirali = false;
        break;
      }
    }
    if (sirali) {
      var a = dizi[0];
      dizi[0] = dizi[1];
      dizi[1] = a;
    }
  }
  return dizi;
}
function siraEkle(btn) {
  var a = OT.adimlar[OT.idx];
  if (!a || (a.tip !== "kod" && a.tip !== "ornek")) return;
  var oi = parseInt(btn.getAttribute("data-oi"), 10);
  if (a.sira.indexOf(oi) >= 0) return;
  a.sira.push(oi);
  btn.disabled = true;
  siraCiz();
}
function siraTemizle() {
  var a = OT.adimlar[OT.idx];
  if (!a || (a.tip !== "kod" && a.tip !== "ornek")) return;
  a.sira = [];
  document.querySelectorAll(".sira-btn").forEach(function (b) {
    b.disabled = false;
  });
  siraCiz();
}
function siraCiz() {
  var a = OT.adimlar[OT.idx];
  var alan = document.getElementById("sira-alan");
  if (!alan) return;
  var kg = a.kod;
  alan.textContent =
    a.sira
      .map(function (oi) {
        return kg.satirlar[oi];
      })
      .join("\n") || "";
}
function normKod(s) {
  return String(s).trim().replace(/\s+/g, " ");
}
function siraKabul(sira, kg) {
  if (sira.length !== kg.satirlar.length) return false;
  var gor = {};
  for (var i = 0; i < sira.length; i++) {
    if (sira[i] < 0 || sira[i] >= kg.satirlar.length || gor[sira[i]])
      return false;
    gor[sira[i]] = 1;
  }
  var esnek = kg.esnek || [];
  function degisir(x, y) {
    var a = Math.min(x, y),
      b = Math.max(x, y);
    for (var k = 0; k < esnek.length; k++) {
      if (esnek[k][0] === a && esnek[k][1] === b) return true;
    }
    return false;
  }
  for (var p = 0; p < sira.length; p++) {
    for (var q = p + 1; q < sira.length; q++) {
      if (sira[p] > sira[q] && !degisir(sira[p], sira[q])) return false;
    }
  }
  return true;
}
function kontrolKod() {
  var a = OT.adimlar[OT.idx];
  if (!a || (a.tip !== "kod" && a.tip !== "ornek") || a.tamam) return;
  var kg = a.kod;
  var ok = false,
    mesaj = "";
  if (kg.tip === "bosluk") {
    var dogru = 0,
      eksik = 0,
      n = boslukSayisi(kg);
    a.dolu = a.dolu || {};
    for (var gi = 0; gi < n; gi++) {
      if (!a.dolu[gi]) {
        eksik++;
        continue;
      }
      if (normKod(a.dolu[gi].metin) === normKod(kg.parcalar[gi])) dogru++;
    }
    if (eksik > 0) {
      document.getElementById("gkod").innerHTML =
        '<span class="yanlis">' +
        eksik +
        " boşluk hâlâ boş. Her boşluğa bir parça koy.</span>";
      a.yanlis++;
      return;
    }
    ok = dogru === n;
    if (!ok) {
      mesaj = boslukTani(kg, a.dolu);
    }
  } else if (kg.tip === "yaz") {
    var yham = document.getElementById("sayiy").value;
    if (!yham || !yham.trim()) {
      document.getElementById("gkod").innerHTML =
        '<span class="yanlis">Önce kodunu yaz.</span>';
      return;
    }
    var yerr = taniYaz(yham, kg);
    ok = yerr === "";
    if (!ok) {
      mesaj = yerr;
    }
  } else {
    if (!a.sira.length) {
      document.getElementById("gkod").innerHTML =
        '<span class="yanlis">Önce satırlara dokunarak diz.</span>';
      return;
    }
    ok = siraKabul(a.sira, kg);
    if (!ok) {
      mesaj = siraTani(a, kg);
    }
  }
  var kb = document.getElementById("kontrol");
  var puan = a.tamam
    ? 0
    : a.yanlis === 0
      ? kg.puan
      : Math.max(5, Math.floor(kg.puan / 2));
  if (ok) {
    a.cozuldu = true;
    a.tamam = true;
    OT.kodCozdu = true;
    if (a.tip === "ornek") {
      OT.ornekCozulen++;
    }
    OT.xp += puan;
    OT.cevaplandi++;
    OT.dogru++;
    ses(760, 0.2);
    document.getElementById("gkod").innerHTML =
      '<span class="dogru">Tertemiz kod! +' +
      puan +
      " XP. " +
      kac(kg.neden) +
      "</span>";
    if (kb) kb.style.display = "none";
    bantGoster(true, "Kod çalışır! +" + puan + " XP", kg.neden, "DEVAM");
    document.getElementById("bant-buton").onclick = function () {
      bantKapat();
      sonraki();
    };
  } else {
    a.yanlis++;
    ses(180, 0.3);
    var ek =
      a.yanlis >= 2
        ? ' <button class="dugme gri" style="flex:none;padding:8px 14px" onclick="cozumGoster()">ÇÖZÜMÜ GÖR (0 XP)</button>'
        : "";
    var goster = (a.ipSeviye || 0) >= 1 ? mesaj || kg.ipucu : "";
    document.getElementById("gkod").innerHTML =
      '<span class="yanlis">❌ ' +
      (goster
        ? kac(goster)
        : "Olmadı. Takıldıysan İPUCU düğmesine ya da bana bas.") +
      "</span>" +
      ek;
    if (kb && a.yanlis >= 2) {
      kb.style.display = "none";
    }
  }
  panelGuncelle();
}
function ornekPuan(a, kg) {
  return a.tamam
    ? 0
    : a.yanlis === 0
      ? kg.puan
      : Math.max(1, Math.floor(kg.puan / 2));
}
function ornekBasari(a, kg, puan, mesaj) {
  a.cozuldu = true;
  a.tamam = true;
  OT.kodCozdu = true;
  if (a.tip === "ornek") {
    OT.ornekCozulen++;
  }
  OT.xp += puan;
  OT.cevaplandi++;
  OT.dogru++;
  ses(760, 0.2);
  document.getElementById("gkod").innerHTML =
    '<span class="dogru">' +
    kac(mesaj) +
    " +" +
    puan +
    " XP. " +
    kac(kg.neden) +
    "</span>";
  var kb = document.getElementById("kontrol");
  if (kb) kb.style.display = "none";
  bantGoster(true, "Doğru! +" + puan + " XP", kg.neden, "DEVAM");
  document.getElementById("bant-buton").onclick = function () {
    bantKapat();
    sonraki();
  };
  panelGuncelle();
}
function sayiDeger(s) {
  var t = String(s).trim().replace(/\s+/g, "").replace(",", ".");
  if (!/^[+-]?(\d+\.?\d*|\.\d+)$/.test(t)) return null;
  var v = parseFloat(t);
  return isFinite(v) ? v : null;
}
function kontrolOrnekYaz() {
  var a = OT.adimlar[OT.idx];
  if (!a || a.tip !== "ornek" || a.tamam) return;
  var kg = a.kod;
  var ham = document.getElementById("sayio").value;
  if (!ham || !ham.trim()) {
    document.getElementById("gkod").innerHTML =
      '<span class="yanlis">Önce çıktıyı yaz.</span>';
    return;
  }
  var puan = ornekPuan(a, kg);
  var bek = normCikti(kg.cikti),
    verilen = normCikti(ham);
  var sv = sayiDeger(verilen),
    sb = sayiDeger(bek);
  if (verilen === bek) {
    ornekBasari(a, kg, puan, "Bingo!");
  } else if (sv !== null && sb !== null && Math.abs(sv - sb) < 0.0015) {
    ornekBasari(a, kg, puan, "Değer tuttu!");
  } else {
    a.yanlis++;
    ses(180, 0.3);
    var ek =
      a.yanlis >= 2
        ? ' <button class="dugme gri" style="flex:none;padding:8px 14px" onclick="cozumGoster()">ÇÖZÜMÜ GÖR (0 XP)</button>'
        : "";
    var ozel =
      verilen.toLowerCase() === bek.toLowerCase()
        ? "Çok yaklaştın! Harf büyüklüğüne dikkat: C#'ta bool çıktısı büyük harfle başlar (True). "
        : "";
    var goster =
      (a.ipSeviye || 0) >= 1
        ? ozel + "Olmadı. Boşluklara ve satırlara dikkat et."
        : ozel + "Olmadı. Takıldıysan İPUCU düğmesine bas.";
    document.getElementById("gkod").innerHTML =
      '<span class="yanlis">❌ ' + kac(goster) + "</span>" + ek;
    var kb = document.getElementById("kontrol");
    if (kb && a.yanlis >= 2) {
      kb.style.display = "none";
    }
  }
  panelGuncelle();
}
function kontrolOrnekSayi() {
  var a = OT.adimlar[OT.idx];
  if (!a || a.tip !== "ornek" || a.tamam) return;
  var kg = a.kod;
  var ham = document.getElementById("sayio").value;
  if (!ham || !ham.trim()) {
    document.getElementById("gkod").innerHTML =
      '<span class="yanlis">Önce sayıyı yaz.</span>';
    return;
  }
  var puan = ornekPuan(a, kg);
  var soru = kg.tip === "bul" ? "o satırda" : "bu kodda";
  if (parseInt(ham, 10) === kg.cevap) {
    ornekBasari(a, kg, puan, "Tam isabet!");
  } else {
    a.yanlis++;
    ses(180, 0.3);
    var ek =
      a.yanlis >= 2
        ? ' <button class="dugme gri" style="flex:none;padding:8px 14px" onclick="cozumGoster()">ÇÖZÜMÜ GÖR (0 XP)</button>'
        : "";
    var goster =
      (a.ipSeviye || 0) >= 1
        ? "Olmadı. " + kg.ipucu
        : "Olmadı. Takıldıysan İPUCU düğmesine bas.";
    document.getElementById("gkod").innerHTML =
      '<span class="yanlis">❌ ' + kac(goster) + "</span>" + ek;
    var kb = document.getElementById("kontrol");
    if (kb && a.yanlis >= 2) {
      kb.style.display = "none";
    }
  }
  panelGuncelle();
}
function ornekOkuGec() {
  var a = OT.adimlar[OT.idx];
  if (!a || a.tip !== "ornek" || a.tamam) return;
  var kg = a.kod;
  a.cozuldu = true;
  a.tamam = true;
  OT.ornekCozulen++;
  OT.xp += kg.puan;
  ses(660, 0.15);
  bantGoster(true, "İncelendi! +" + kg.puan + " XP", kg.neden, "DEVAM");
  document.getElementById("bant-buton").onclick = function () {
    bantKapat();
    sonraki();
  };
  panelGuncelle();
}
function cozumGoster() {
  var a = OT.adimlar[OT.idx];
  if (!a || (a.tip !== "kod" && a.tip !== "ornek")) return;
  var kg = a.kod;
  var cozum =
    kg.tip === "bosluk"
      ? kg.kabul[0]
      : kg.tip === "yaz"
        ? a.tip === "ornek"
          ? kg.cikti
          : kg.ornek
        : a.tip === "ornek" && (kg.tip === "bul" || kg.tip === "say")
          ? String(kg.cevap)
          : kg.satirlar.join(" / ");
  document.getElementById("gkod").innerHTML =
    '<span class="dogru">Çözüm: <b>' +
    kac(cozum) +
    "</b> — " +
    kac(kg.neden) +
    " (0 XP, bir dahaki sefere!)</span>";
  a.cozuldu = true;
  a.tamam = true;
  OT.kodCozdu = true;
  OT.cevaplandi++;
  var kbCozum = document.getElementById("kontrol");
  if (kbCozum) kbCozum.style.display = "none";
  bantGoster(true, "Çözümü gördün, devam et.", kg.neden, "DEVAM");
  document.getElementById("bant-buton").onclick = function () {
    bantKapat();
    sonraki();
  };
  panelGuncelle();
}
function trKucuk(s) {
  return String(s).replace(/İ/g, "i").replace(/I/g, "ı").toLowerCase();
}
function taniYaz(metin, kg) {
  var t = String(metin);
  var yuksek = {
    ";": "Noktalı virgül (;) eksik! Her komut ; ile biter.",
    '"': 'Tırnak eksik! Ekrana yazılacak yazı "..." içinde olur.',
    "(": "Açık parantez eksik: (.",
    ")": "Kapatma parantezi eksik: ).",
    "{": "Açık süslü eksik: {.",
    "}": "Kapatma süslüsü eksik: }.",
    "[": "Köşeli açma eksik: [.",
    "]": "Köşeli kapatma eksik: ].",
  };
  for (var gi = 0; gi < kg.gerek.length; gi++) {
    var g = kg.gerek[gi];
    var varMi = g.kabul.some(function (k) {
      return t.indexOf(k) >= 0;
    });
    if (!varMi) {
      var kucuk = g.kabul.some(function (k) {
        return trKucuk(t).indexOf(trKucuk(k)) >= 0;
      });
      if (kucuk)
        return "C# büyük-küçük harfe bakar! Doğrusu aynen şöyle: " + g.kabul[0];
      return g.mesaj;
    }
  }
  if (/[\u201c\u201d]/.test(t))
    return 'Tırnaklar Türkçe klavyeden olmuş (“ ”)! İngilizce tırnak kullan: "..."';
  if (/[\u2018\u2019]/.test(t))
    return "Kesme işareti Türkçe klavyeden! Kodda İngilizce ' kullan.";
  for (var pi = 0; pi < kg.nokta.length; pi++) {
    var p = kg.nokta[pi];
    if (p === '"') {
      var c = (t.match(/"/g) || []).length;
      if (c < 2) return yuksek['"'];
    } else if (
      !t.split("").some(function (ch) {
        return ch === p;
      })
    )
      return yuksek[p] || "Eksik işaret: " + p;
  }
  return "";
}
/* ===== MİNİ C# YORUMLAYICI (kod bloğu çalıştırma) ===== */
/* ============================================================
   MİNİ C# YORUMLAYICI — eğitim amaçlı kod bloğu çalıştırma
   Statik tip çözümlemesi ile: int bölmesi keser, double kesmez,
   char aritmetiği ve string indeksleme çalışır.
   ============================================================ */
var CsMini = (function () {
  "use strict";

  var TIPLER = [
    "int",
    "double",
    "decimal",
    "float",
    "string",
    "bool",
    "char",
    "long",
    "byte",
    "short",
    "uint",
    "ushort",
    "sbyte",
    "ulong",
    "var",
    "object",
  ];
  var ANAHTAR = [
    "using",
    "namespace",
    "class",
    "static",
    "void",
    "new",
    "return",
    "if",
    "else",
    "while",
    "do",
    "for",
    "foreach",
    "in",
    "break",
    "continue",
    "switch",
    "case",
    "default",
    "goto",
    "true",
    "false",
    "null",
    "Main",
    "Console",
    "Write",
    "WriteLine",
    "ReadLine",
    "Math",
    "string",
    "bool",
    "char",
    "object",
    "int",
  ];

  function Kontrol(x) {
    this.x = x;
  }
  Kontrol.prototype = Object.create(Error.prototype);

  /* ---------------- LEKZER ---------------- */
  function Lex(src) {
    var t = [],
      i = 0,
      n = src.length;
    while (i < n) {
      var c = src[i],
        s = src.slice(i),
        m;
      if (c === "\n") {
        t.push({ k: "nl" });
        i++;
        continue;
      }
      if (c === " " || c === "\t" || c === "\r") {
        i++;
        continue;
      }
      if (c === "/" && s[1] === "/") {
        while (i < n && src[i] !== "\n") i++;
        continue;
      }
      if (c === "/" && s[1] === "*") {
        i += 2;
        while (i < n && !(src[i] === "*" && src[i + 1] === "/")) i++;
        i += 2;
        continue;
      }

      /* interpolasyonlu metin:  $"..."   $@"..."   @$"..." */
      if (c === "$" || c === "@") {
        var j = i,
          at = false,
          gecerli = false;
        if (src[j] === "@") {
          at = true;
          j++;
        }
        if (src[j] === "$") {
          j++;
          gecerli = true;
        }
        if (gecerli && src[j] === '"') {
          var bas = j + 1,
            k = bas,
            ham = "";
          while (k < n) {
            if (src[k] === "\\" && !at) {
              ham += src[k] + src[k + 1];
              k += 2;
              continue;
            }
            /* süslü parantez içinde tırnak ve parantez sayımı yapılır */
            if (src[k] === "{") {
              var der = 1;
              ham += "{";
              k++;
              while (k < n && der > 0) {
                if (src[k] === "\\" && !at) {
                  ham += src[k] + src[k + 1];
                  k += 2;
                  continue;
                }
                if (src[k] === '"') {
                  ham += src[k];
                  k++;
                  while (k < n && src[k] !== '"') {
                    if (src[k] === "\\" && !at) {
                      ham += src[k];
                      k++;
                    }
                    ham += src[k];
                    k++;
                  }
                  if (k < n) {
                    ham += '"';
                    k++;
                  }
                  continue;
                }
                if (src[k] === "{") der++;
                if (src[k] === "}") der--;
                ham += src[k];
                k++;
              }
              continue;
            }
            if (src[k] === '"') break;
            ham += src[k];
            k++;
          }
          if (k >= n) throw new Error("Kapanmamış interpolasyonlu metin");
          t.push({ k: "interp", v: ham, at: at });
          i = k + 1;
          continue;
        }
        if (c === "@") {
          i++;
          continue;
        }
      }

      if ((m = /^[0-9]+\.[0-9]+(?:[fFdDmM])?/.exec(s))) {
        t.push({ k: "num", v: parseFloat(m[0]), dbl: true });
        i += m[0].length;
        continue;
      }
      if ((m = /^[0-9]+(?:[lLfFdDmM])?/.exec(s))) {
        var son = m[0][m[0].length - 1];
        var dbl =
          son === "f" ||
          son === "F" ||
          son === "d" ||
          son === "D" ||
          son === "m" ||
          son === "M";
        t.push({ k: "num", v: parseFloat(m[0]), dbl: dbl });
        i += m[0].length;
        continue;
      }
      if ((m = /^"(?:[^"\\]|\\.)*"/.exec(s))) {
        t.push({
          k: "str",
          v: m[0]
            .slice(1, -1)
            .replace(/\\n/g, "\n")
            .replace(/\\t/g, "\t")
            .replace(/\\"/g, '"')
            .replace(/\\\\/g, "\\"),
        });
        i += m[0].length;
        continue;
      }
      if ((m = /^'(?:[^'\\]|\\.)'/.exec(s))) {
        var ic = m[0].slice(1, -1);
        if (ic === "n") ic = "\n";
        if (ic === "t") ic = "\t";
        if (ic === "\\") ic = "\\";
        if (ic === "'") ic = "'";
        t.push({ k: "chr", v: ic });
        i += m[0].length;
        continue;
      }
      if ((m = /^[A-Za-z_][A-Za-z0-9_]*/.exec(s))) {
        t.push({ k: "id", v: m[0], anahtar: ANAHTAR.indexOf(m[0]) >= 0 });
        i += m[0].length;
        continue;
      }
      if ((m = /^(\+\+|--|&&|\|\||==|!=|<=|>=|\+=|-=|\*=|\/=|%=)/.exec(s))) {
        t.push({ k: "op", v: m[0] });
        i += m[0].length;
        continue;
      }
      if ("+-*/%=<>!(){}[];,.:?~".indexOf(c) >= 0) {
        t.push({ k: "op", v: c });
        i++;
        continue;
      }
      throw new Error('Tanınmayan karakter: "' + c + '"');
    }
    t.push({ k: "eof" });
    return t;
  }

  /* ---------------- PARSER ---------------- */
  function Parser(tk) {
    this.t = tk;
    this.p = 0;
  }
  Parser.prototype.at = function (v) {
    var x = this.t[this.p];
    return x.k === "op" && x.v === v;
  };
  Parser.prototype.eat = function (v) {
    if (this.at(v)) {
      this.p++;
      return true;
    }
    return false;
  };
  Parser.prototype.need = function (v) {
    if (!this.eat(v)) {
      var x = this.t[this.p];
      throw new Error(
        '"' +
          v +
          '" bekleniyordu, bulunamadı: ' +
          (x.v === undefined ? x.k : x.v),
      );
    }
  };
  Parser.prototype.eof = function () {
    return this.t[this.p].k === "eof";
  };
  Parser.prototype.bos = function () {
    var x = this.t[this.p];
    return x.k === "eof" || x.k === "nl";
  };
  Parser.prototype.id = function () {
    var x = this.t[this.p];
    if (x.k !== "id") throw new Error("Değişken adı bekleniyordu");
    this.p++;
    return x.v;
  };
  Parser.prototype.tipMi = function () {
    var x = this.t[this.p];
    return x.k === "id" && TIPLER.indexOf(x.v) >= 0;
  };

  Parser.prototype.program = function () {
    var s = [];
    while (!this.eof()) {
      if (this.t[this.p].k === "nl") {
        this.p++;
        continue;
      }
      if (this.eat(";")) continue;
      if (this.at("}")) {
        this.p++;
        continue;
      }
      if (this.at("[")) {
        this.p++;
        this.eat("]");
        continue;
      }
      s.push(this.stmt());
    }
    return { k: "prog", body: s };
  };
  Parser.prototype.stmt = function () {
    var x = this.t[this.p];
    if (x.k === "id") {
      switch (x.v) {
        case "if":
          return this.ifStmt();
        case "while":
          this.p++;
          this.need("(");
          var c = this.expr();
          this.need(")");
          return { k: "while", c: c, b: this.stmt() };
        case "do":
          this.p++;
          var b1 = this.stmt();
          if (this.t[this.p].k === "id" && this.t[this.p].v === "while") {
            this.p++;
            this.need("(");
            var c1 = this.expr();
            this.need(")");
            this.eat(";");
            return { k: "dowhile", c: c1, b: b1 };
          }
          throw new Error("do sonrası while bekleniyordu");
        case "for":
          return this.forStmt();
        case "foreach":
          return this.foreachStmt();
        case "switch":
          return this.switchStmt();
        case "break":
          this.p++;
          this.eat(";");
          return { k: "break" };
        case "continue":
          this.p++;
          this.eat(";");
          return { k: "continue" };
        case "return":
          this.p++;
          var r = this.at(";") ? null : this.expr();
          this.eat(";");
          return { k: "return", e: r };
        case "void":
        case "int":
        case "long":
        case "double":
        case "decimal":
        case "string":
        case "bool":
        case "float":
        case "byte":
        case "short":
        case "char": {
          if (
            this.t[this.p + 2] &&
            this.t[this.p + 2].k === "op" &&
            this.t[this.p + 2].v === "("
          ) {
            var dön = x.v;
            this.p++;
            var ad = this.id();
            this.need("(");
            var ps = [];
            while (!this.at(")")) {
              if (this.t[this.p].k === "id" && this.t[this.p].v === "params")
                this.p++;
              if (this.tipMi()) this.p++;
              var pn = this.id();
              ps.push({ ad: pn, t: this.t[this.p - 1] });
              if (!this.eat(",")) break;
            }
            this.need(")");
            var gov = this.eat("{") ? this.govde() : [this.stmt()];
            this.eat(";");
            return { k: "metot", ad: ad, don: dön, ps: ps, g: gov };
          }
          if (x.v === "void") {
            this.p++;
            this.id();
            this.need("(");
            this.need(")");
            this.eat("{");
            while (!this.eat("}") && !this.eof()) this.p++;
            return { k: "nop" };
          }
          break;
        }
        case "goto":
          return this.gotoStmt();
        case "void":
          this.p++;
          this.id();
          this.need("(");
          this.need(")");
          this.eat("{");
          while (!this.eat("}") && !this.eof()) this.p++;
          return { k: "nop" };
        case "using":
          this.p++;
          while (!this.eat(";") && !this.eof()) this.p++;
          return { k: "nop" };
        case "namespace":
        case "class":
        case "public":
        case "private":
        case "internal":
          this.p++;
          return { k: "nop" };
      }
      if (this.tipMi()) return this.declStmt();
    }
    if (this.at("{")) return this.block();
    if (this.eof() || this.bos()) return { k: "nop" };
    var e = this.expr();
    this.eat(";");
    if (e.k === "declListe" || e.k === "decl2D" || e.k === "declNewArr")
      return e;
    return { k: "exprs", e: e };
  };
  Parser.prototype.gotoStmt = function () {
    this.p++;
    if (this.t[this.p].k === "id" && this.t[this.p].v === "case") {
      this.p++;
      var e = this.expr();
      this.eat(";");
      return { k: "gotocase", e: e };
    }
    throw new Error("yalnızca goto case destekleniyor");
  };
  Parser.prototype.block = function () {
    this.need("{");
    var s = [];
    while (!this.eat("}")) {
      if (this.eof()) throw new Error("Süslü parantez kapatılmamış");
      if (this.t[this.p].k === "nl") {
        this.p++;
        continue;
      }
      if (this.eat(";")) continue;
      s.push(this.stmt());
    }
    return { k: "block", body: s };
  };
  Parser.prototype.declStmt = function () {
    var tip = this.t[this.p].v;
    this.p++;
    var boy = 0,
      rank2 = false;
    while (this.at("[")) {
      this.p++;
      if (this.eat(",")) rank2 = true;
      this.need("]");
      boy++;
    }
    if (rank2) {
      var ad2 = this.id();
      if (this.eat("=")) {
        var el2 = this.ozelListe2();
        this.eat(";");
        return { k: "decl2D", ad: ad2, el: el2 };
      }
      this.eat(";");
      return { k: "decl2D", ad: ad2, el: null };
    }
    if (boy > 0) {
      var ad = this.id();
      if (this.eat("=")) {
        if (this.t[this.p].k === "id" && this.t[this.p].v === "new") {
          this.p++;
          if (this.tipMi()) this.p++;
          this.need("[");
          var nn = this.expr();
          this.need("]");
          this.eat(";");
          return { k: "declNewArr", ad: ad, n: nn };
        }
        var el = this.ozelListe();
        this.eat(";");
        return { k: "declArr", ad: ad, el: el };
      }
      this.eat(";");
      return { k: "declArr", ad: ad, el: null };
    }
    var liste = {};
    var a1 = this.id();
    liste[a1] = this.eat("=") ? this.expr() : null;
    while (this.eat(",")) {
      var a2 = this.id();
      liste[a2] = this.eat("=") ? this.expr() : null;
    }
    this.eat(";");
    return { k: "decl", t: tip, list: liste };
  };
  Parser.prototype.ozelListe2 = function () {
    this.need("{");
    var satirlar = [];
    while (!this.eat("}")) {
      this.need("{");
      var satir = [];
      while (!this.eat("}")) {
        satir.push(this.expr());
        if (!this.eat(",")) this.eat(";");
      }
      satirlar.push(satir);
      if (!this.eat(",")) this.eat(";");
    }
    return satirlar;
  };
  Parser.prototype.ozelListe = function () {
    this.need("{");
    var l = [];
    while (!this.eat("}")) {
      l.push(this.expr());
      if (!this.eat(",")) this.eat(";");
    }
    return l;
  };
  Parser.prototype.ifStmt = function () {
    this.p++;
    this.need("(");
    var c = this.expr();
    this.need(")");
    var b = this.stmt();
    var e = null;
    while (this.t[this.p].k === "nl") this.p++;
    if (this.t[this.p].k === "id" && this.t[this.p].v === "else") {
      this.p++;
      while (this.t[this.p].k === "nl") this.p++;
      e = this.stmt();
    }
    return { k: "if", c: c, t: b, e: e };
  };
  Parser.prototype.forStmt = function () {
    this.p++;
    this.need("(");
    var bas = null;
    if (this.eat(";")) bas = null;
    else {
      bas = this.tipMi() ? this.declStmt() : { k: "exprs", e: this.expr() };
      this.eat(";");
    }
    var c = this.at(";") ? null : this.expr();
    this.eat(";");
    var a = this.at(")") ? null : this.expr();
    this.need(")");
    return { k: "for", bas: bas, c: c, a: a, b: this.stmt() };
  };
  Parser.prototype.foreachStmt = function () {
    this.p++;
    this.need("(");
    if (this.tipMi()) this.p++;
    var ad = this.id();
    if (this.t[this.p].k === "id" && this.t[this.p].v === "in") this.p++;
    var dz = this.expr();
    this.need(")");
    return { k: "foreach", ad: ad, dizi: dz, b: this.stmt() };
  };
  Parser.prototype.switchStmt = function () {
    this.p++;
    this.need("(");
    var d = this.expr();
    this.need(")");
    this.need("{");
    var g = [];
    while (!this.eat("}")) {
      if (this.eof()) throw new Error("switch kapatılmamış");
      if (this.t[this.p].k === "id" && this.t[this.p].v === "case") {
        var dv = [];
        while (this.t[this.p].k === "id" && this.t[this.p].v === "case") {
          this.p++;
          dv.push(this.expr());
          this.need(":");
        }
        if (dv.length) g.push({ d: dv, b: this.govde() });
      } else if (this.t[this.p].k === "id" && this.t[this.p].v === "default") {
        this.p++;
        this.need(":");
        g.push({ d: null, b: this.govde() });
      } else throw new Error("switch içinde case/default bekleniyordu");
    }
    var nd = { k: "switch", d: d, g: g };
    g.forEach(function (gr) {
      gr.b.forEach(function (st) {
        if (st && st.k === "gotocase") st.yol = g;
      });
    });
    return nd;
  };
  Parser.prototype.govde = function () {
    var s = [];
    while (!this.at("}") && !this.eof()) {
      if (this.t[this.p].k === "nl") {
        this.p++;
        continue;
      }
      if (this.eat(";")) continue;
      if (
        this.t[this.p].k === "id" &&
        (this.t[this.p].v === "case" || this.t[this.p].v === "default")
      )
        break;
      s.push(this.stmt());
    }
    return s;
  };

  /* ---- ifadeler ---- */
  Parser.prototype.expr = function () {
    return this.atama();
  };
  Parser.prototype.atama = function () {
    var sol = this.ternary();
    var x = this.t[this.p];
    if (x.k === "op" && ["=", "+=", "-=", "*=", "/=", "%="].indexOf(x.v) >= 0) {
      this.p++;
      return { k: "atama", o: x.v, l: sol, r: this.atama() };
    }
    return sol;
  };
  Parser.prototype.ternary = function () {
    var c = this.veya();
    if (this.at("?")) {
      this.p++;
      var a = this.expr();
      this.need(":");
      var b = this.ternary();
      return { k: "ternary", c: c, a: a, b: b };
    }
    return c;
  };
  Parser.prototype.veya = function () {
    var s = this.veVe();
    while (this.at("||")) {
      this.p++;
      s = { k: "logic", o: "||", l: s, r: this.veVe() };
    }
    return s;
  };
  Parser.prototype.veVe = function () {
    var s = this.esit();
    while (this.at("&&")) {
      this.p++;
      s = { k: "logic", o: "&&", l: s, r: this.esit() };
    }
    return s;
  };
  Parser.prototype.esit = function () {
    var s = this.iliskili();
    while (this.at("==") || this.at("!=")) {
      var o = this.t[this.p].v;
      this.p++;
      s = { k: "cmp", o: o, l: s, r: this.iliskili() };
    }
    return s;
  };
  Parser.prototype.iliskili = function () {
    var s = this.topla();
    while (this.at("<") || this.at(">") || this.at("<=") || this.at(">=")) {
      var o = this.t[this.p].v;
      this.p++;
      s = { k: "cmp", o: o, l: s, r: this.topla() };
    }
    return s;
  };
  Parser.prototype.topla = function () {
    var s = this.carp();
    while (this.at("+") || this.at("-")) {
      var o = this.t[this.p].v;
      this.p++;
      s = { k: "bin", o: o, l: s, r: this.carp() };
    }
    return s;
  };
  Parser.prototype.carp = function () {
    var s = this.unary();
    while (this.at("*") || this.at("/") || this.at("%")) {
      var o = this.t[this.p].v;
      this.p++;
      s = { k: "bin", o: o, l: s, r: this.unary() };
    }
    return s;
  };
  Parser.prototype.unary = function () {
    if (this.at("!") || this.at("~") || this.at("-") || this.at("+")) {
      var o = this.t[this.p].v;
      this.p++;
      return { k: "un", o: o, e: this.unary() };
    }
    if (this.at("++") || this.at("--")) {
      var o2 = this.t[this.p].v;
      this.p++;
      return { k: "pre", o: o2, e: this.unary() };
    }
    return this.postfix();
  };
  Parser.prototype.postfix = function () {
    var s = this.birincil();
    while (true) {
      if (this.at("[")) {
        this.p++;
        var ix = this.expr();
        var ix2 = null;
        if (this.eat(",")) ix2 = this.expr();
        this.need("]");
        s = { k: "ind", a: s, i: ix, i2: ix2 };
        continue;
      }
      if (this.at("(")) {
        this.p++;
        var args = [];
        while (!this.at(")")) {
          var isOut = false;
          if (this.t[this.p].k === "id" && this.t[this.p].v === "out") {
            this.p++;
            isOut = true;
          }
          var ae = this.expr();
          if (isOut) {
            args.push({ k: "out", e: ae });
          } else args.push(ae);
          if (!this.eat(",")) break;
        }
        this.need(")");
        s = { k: "caq", a: s, args: args };
        continue;
      }
      if (this.at(".")) {
        this.p++;
        var ad = this.id();
        if (this.at("(")) {
          this.p++;
          var a2 = [];
          while (!this.at(")")) {
            var o2 = false;
            if (this.t[this.p].k === "id" && this.t[this.p].v === "out") {
              this.p++;
              o2 = true;
            }
            var ax = this.expr();
            a2.push(o2 ? { k: "out", e: ax } : ax);
            if (!this.eat(",")) break;
          }
          this.need(")");
          s = { k: "caq", a: s, ad: ad, args: a2 };
        } else s = { k: "ozn", a: s, ad: ad };
        continue;
      }
      if (this.at("++") || this.at("--")) {
        var o3 = this.t[this.p].v;
        this.p++;
        s = { k: "post", o: o3, e: s };
        continue;
      }
      break;
    }
    return s;
  };
  Parser.prototype.birincil = function () {
    var x = this.t[this.p];
    if (x.k === "num") {
      this.p++;
      return { k: "lit", v: x.v, dbl: !!x.dbl };
    }
    if (x.k === "str") {
      this.p++;
      return { k: "litStr", v: x.v };
    }
    if (x.k === "chr") {
      this.p++;
      return { k: "litChr", v: x.v };
    }
    if (x.k === "interp") {
      this.p++;
      return this.interpol(x);
    }
    if (this.at("(")) {
      var t1 = this.t[this.p + 1],
        t2 = this.t[this.p + 2];
      if (
        t1 &&
        t1.k === "id" &&
        TIPLER.indexOf(t1.v) >= 0 &&
        t2 &&
        t2.k === "op" &&
        t2.v === ")"
      ) {
        this.p += 3;
        return { k: "donus", t: t1.v, e: this.unary() };
      }
      this.p++;
      var e = this.expr();
      this.need(")");
      return { k: "par", e: e };
    }
    if (x.k === "id") {
      if (x.v === "true") {
        this.p++;
        return { k: "litBool", v: true };
      }
      if (x.v === "false") {
        this.p++;
        return { k: "litBool", v: false };
      }
      if (x.v === "null") {
        this.p++;
        return { k: "litNull" };
      }
      if (
        (x.v === "List" || x.v === "Dictionary") &&
        this.t[this.p + 1] &&
        this.t[this.p + 1].k === "op" &&
        this.t[this.p + 1].v === "<"
      ) {
        this.p++;
        while (!this.at(">")) this.p++;
        this.need(">");
        var adl = this.id();
        this.eat("=");
        if (this.t[this.p].k === "id" && this.t[this.p].v === "new") {
          this.p++;
          while (!this.at("(") && !this.eof()) this.p++;
          this.need("(");
          this.need(")");
          this.eat(";");
          return { k: "declListe", ad: adl };
        }
        this.eat(";");
        return { k: "declListe", ad: adl };
      }
      if (
        TIPLER.indexOf(x.v) >= 0 &&
        this.t[this.p + 1] &&
        this.t[this.p + 1].k === "op" &&
        this.t[this.p + 1].v === ")"
      ) {
        this.p += 2;
        return { k: "donus", t: x.v, e: this.unary() };
      }
      this.p++;
      return { k: "id", v: x.v };
    }
    throw new Error("İfade bekleniyordu: " + (x.v === undefined ? x.k : x.v));
  };
  Parser.prototype.interpol = function (x) {
    var par = [],
      ham = x.v,
      i = 0;
    while (i < ham.length) {
      var a = ham.indexOf("{", i);
      if (a < 0) {
        par.push({ t: "metin", v: this.coz(ham.slice(i)) });
        break;
      }
      if (a > i) par.push({ t: "metin", v: this.coz(ham.slice(i, a)) });
      var der = 1,
        b = a + 1;
      while (b < ham.length && der > 0) {
        if (ham[b] === "{") der++;
        else if (ham[b] === "}") {
          der--;
          if (der === 0) break;
        }
        b++;
      }
      if (der !== 0) throw new Error("Süslü parantez kapatılmamış");
      par.push({ t: "ifade", e: new Parser(Lex(ham.slice(a + 1, b))).expr() });
      i = b + 1;
    }
    return { k: "interp", par: par };
  };
  Parser.prototype.coz = function (s) {
    return s
      .replace(/\\n/g, "\n")
      .replace(/\\t/g, "\t")
      .replace(/\\"/g, '"')
      .replace(/\\\\/g, "\\");
  };

  /* ---------------- YORUMLAYICI ---------------- */
  function Cevir(d) {
    if (d === null || d === undefined) return "";
    if (typeof d === "boolean") return d ? "True" : "False";
    if (typeof d === "number") {
      if (Number.isInteger(d) && Math.abs(d) < 1e15) return String(d);
      if (!isFinite(d)) return d > 0 ? "\u221e" : "-\u221e";
      var s = d.toPrecision(15);
      if (s.indexOf("e") < 0 && s.indexOf("E") < 0)
        s = s.replace(/0+$/, "").replace(/\.$/, "");
      return s;
    }
    if (Array.isArray(d)) return "System.Int32[]";
    return String(d);
  }

  function Yorumla(kaynak) {
    var ast = new Parser(Lex(kaynak)).program();
    var cikti = [],
      ortam = {},
      tip = {},
      metotlar = {},
      derinlik = 0;

    function bak(n) {
      if (!(n in ortam)) throw new Kontrol('"' + n + '" değişkeni tanımsız');
      return ortam[n];
    }

    /* --- kullanıcı metotları (parametreler DEĞER olarak verilir) --- */
    function TipDeger(v) {
      if (typeof v === "string") return "string";
      if (typeof v === "boolean") return "bool";
      if (Array.isArray(v)) return "dizi";
      if (v && v.liste) return "liste";
      if (typeof v === "number") return Number.isInteger(v) ? "int" : "double";
      return "int";
    }
    function MetotCagir(ad, args, outAdlar) {
      var m = metotlar[ad];
      if (!m) throw new Kontrol('"' + ad + '" tanımsız');
      if (++derinlik > 400) {
        derinlik--;
        throw new Kontrol("Çok derin çağrı (recursion)");
      }
      var eskiOrtam = ortam,
        eskiTip = tip;
      ortam = {};
      tip = {};
      var sonuc = null;
      function outAktar() {
        if (!outAdlar) return;
        for (var u = 0; u < outAdlar.length; u++) {
          var pn = m.ps[u] ? m.ps[u].ad : null;
          if (pn) {
            eskiOrtam[outAdlar[u]] = ortam[pn];
            eskiTip[outAdlar[u]] = TipDeger(ortam[pn]);
          }
        }
      }
      try {
        for (var i = 0; i < m.ps.length; i++) {
          if (i < args.length) {
            ortam[m.ps[i].ad] = args[i];
            tip[m.ps[i].ad] = TipDeger(args[i]);
          } else {
            ortam[m.ps[i].ad] = 0;
            tip[m.ps[i].ad] = "int";
          }
        }
        for (var j = 0; j < m.g.length; j++) {
          Calistir(m.g[j]);
          if (m.g[j].k === "return" && m.g[j].e) sonuc = Deger(m.g[j].e);
        }
        outAktar();
        ortam = eskiOrtam;
        tip = eskiTip;
        derinlik--;
        return sonuc;
      } catch (e) {
        if (e instanceof Kontrol && e.x === "RET") {
          outAktar();
          ortam = eskiOrtam;
          tip = eskiTip;
          derinlik--;
          return e.deger !== undefined ? e.deger : sonuc;
        }
        ortam = eskiOrtam;
        tip = eskiTip;
        derinlik--;
        throw e;
      }
    }
    function MetotTanimla(n) {
      metotlar[n.ad] = { ad: n.ad, ps: n.ps, g: n.g };
    }

    /* --- statik tip çözümleme (değer döndürmez) --- */
    function T(node) {
      switch (node.k) {
        case "lit":
          return node.dbl ? "double" : "int";
        case "litStr":
        case "interp":
          return "string";
        case "litChr":
          return "char";
        case "litBool":
        case "cmp":
        case "logic":
          return "bool";
        case "litNull":
          return "null";
        case "id":
          return tip[node.v] || "int";
        case "donus":
          if (!node.t) return T(node.e);
          if (node.t === "string") return "string";
          if (node.t === "int" || node.t === "long" || node.t === "byte")
            return "int";
          return "double";
        case "un":
          return node.o === "!" ? "bool" : node.o === "~" ? "int" : T(node.e);
        case "pre":
        case "post":
          return T(node.e);
        case "ternary":
          return T(node.a) === T(node.b) ? T(node.a) : "double";
        case "bin": {
          if (
            node.o === "+" &&
            (T(node.l) === "string" || T(node.r) === "string")
          )
            return "string";
          return T(node.l) === "double" || T(node.r) === "double"
            ? "double"
            : "int";
        }
        case "ind": {
          var b = T(node.a);
          if (b === "string") return "char";
          if (b === "dizi") return tip[node.a.v + "[]"] || "int";
          return "int";
        }
        case "ozn":
          return node.ad === "Length" ? "int" : "int";
        case "caq":
          return node.a && node.a.v === "Math" ? "double" : "void";
        case "par":
          return T(node.e);
        case "atama":
          return T(node.l);
      }
      return "int";
    }

    function Deger(node) {
      switch (node.k) {
        case "lit":
          return node.v;
        case "litStr":
          return node.v;
        case "litChr":
          return node.v;
        case "litBool":
          return node.v;
        case "litNull":
          return null;
        case "par":
          return Deger(node.e);
        case "donus": {
          if (!node.t) return Deger(node.e);
          var v = Deger(node.e);
          if (node.t === "string") return Cevir(v);
          if (node.t === "int" || node.t === "long" || node.t === "byte")
            return Math.trunc(Number(v));
          return Number(v);
        }
        case "un": {
          var u = Deger(node.e);
          if (node.o === "!") {
            if (typeof u !== "boolean")
              throw new Kontrol("! işareti yalnızca bool üzerinde");
            return !u;
          }
          if (node.o === "~") return ~Number(u);
          if (node.o === "-") return -Number(u);
          return Number(u);
        }
        case "pre": {
          var pv = Deger(node.e);
          if (typeof pv !== "number")
            throw new Kontrol("++/-- yalnızca sayı üzerinde");
          ortam[node.e.v] = node.o === "++" ? pv + 1 : pv - 1;
          return ortam[node.e.v];
        }
        case "post": {
          var qv = Deger(node.e);
          if (typeof qv !== "number")
            throw new Kontrol("++/-- yalnızca sayı üzerinde");
          ortam[node.e.v] = node.o === "++" ? qv + 1 : qv - 1;
          return qv;
        }
        case "ternary": {
          var cc = Deger(node.c);
          if (typeof cc !== "boolean")
            throw new Kontrol("ternary koşulu bool olmalı");
          return cc ? Deger(node.a) : Deger(node.b);
        }
        case "logic": {
          var a0 = Deger(node.l);
          if (typeof a0 !== "boolean")
            throw new Kontrol("&& ve || yalnızca bool üzerinde");
          if (node.o === "&&") return a0 ? !!Deger(node.r) : false;
          return a0 ? true : !!Deger(node.r);
        }
        case "cmp":
          return kars(node.l, node.r, node.o);
        case "bin":
          return ikili(node, T(node));
        case "id":
          if (metotlar[node.v]) return MetotCagir(node.v, node.args);
          return bak(node.v);
        case "ind": {
          var d2 = Deger(node.a),
            ix = Deger(node.i);
          if (node.i2) {
            var s1i = Deger(node.i2);
            if (!Array.isArray(d2)) throw new Kontrol("2B dizi değil");
            return d2[ix][s1i];
          }
          if (typeof d2 === "string") {
            if (ix < 0 || ix >= d2.length)
              throw new Kontrol("Metin sınırları dışında: " + ix);
            return d2[ix];
          }
          if (d2 && d2.liste) {
            if (ix < 0 || ix >= d2.liste.length)
              throw new Kontrol("Liste sınırları dışında: " + ix);
            return d2.liste[ix];
          }
          if (!Array.isArray(d2)) throw new Kontrol("Dizi değil");
          if (ix < 0 || ix >= d2.length)
            throw new Kontrol("Dizi sınırları dışında: " + ix);
          return d2[ix];
        }
        case "ozn": {
          var o = Deger(node.a);
          if (node.ad === "Count" && o && o.liste) return o.liste.length;
          if (node.ad === "Length") {
            if (typeof o === "string" || Array.isArray(o)) return o.length;
            if (o && o.liste) return o.liste.length;
            throw new Kontrol(".Length yalnızca metin veya dizide");
          }
          throw new Kontrol("Desteklenmeyen özellik: ." + node.ad);
        }
        case "caq":
          return Cagri(node);
        case "interp": {
          var s = "";
          for (var i = 0; i < node.par.length; i++)
            s +=
              node.par[i].t === "metin"
                ? node.par[i].v
                : Cevir(Deger(node.par[i].e));
          return s;
        }
      }
      throw new Kontrol("Desteklenmeyen ifade: " + node.k);
    }
    function kars(ln, rn, op) {
      var a = Deger(ln),
        b = Deger(rn);
      if (typeof a === "string" || typeof b === "string") {
        var A2 = Cevir(a),
          B2 = Cevir(b);
        switch (op) {
          case "==":
            return A2 === B2;
          case "!=":
            return A2 !== B2;
          case "<":
            return A2 < B2;
          case ">":
            return A2 > B2;
          case "<=":
            return A2 <= B2;
          case ">=":
            return A2 >= B2;
        }
      }
      switch (op) {
        case "==":
          return a === b;
        case "!=":
          return a !== b;
        case "<":
          return a < b;
        case ">":
          return a > b;
        case "<=":
          return a <= b;
        case ">=":
          return a >= b;
      }
      return false;
    }
    function ikili(node, sonTip) {
      var a = Deger(node.l),
        b = Deger(node.r);
      if (node.o === "+" && (typeof a === "string" || typeof b === "string"))
        return Cevir(a) + Cevir(b);
      if (typeof a === "boolean" || typeof b === "boolean")
        throw new Kontrol("bool üzerinde aritmetik yapılamaz");
      var x =
        typeof a === "number" ? a : typeof a === "string" ? a.charCodeAt(0) : 0;
      var y =
        typeof b === "number" ? b : typeof b === "string" ? b.charCodeAt(0) : 0;
      var kisa = sonTip === "int";
      switch (node.o) {
        case "+":
          return kisa ? (x + y) | 0 : x + y;
        case "-":
          return kisa ? (x - y) | 0 : x - y;
        case "*":
          return kisa ? (x * y) | 0 : x * y;
        case "/":
          if (y === 0) throw new Kontrol("Sıfıra bölme");
          return kisa ? (x / y) | 0 : x / y;
        case "%":
          if (y === 0) throw new Kontrol("Sıfıra bölme");
          return kisa ? (x % y) | 0 : x % y;
      }
      return 0;
    }
    function Cagri(node) {
      /* --- kullanıcı metodu çağrısı: Topla(3, 4) --- */
      if (!node.ad && node.a && node.a.k === "id" && metotlar[node.a.v]) {
        var g = [],
          gOut = [];
        for (var gi = 0; gi < node.args.length; gi++) {
          var ga = node.args[gi];
          if (ga && ga.k === "out") {
            gOut.push(ga.e.v);
            g.push(0);
          } else g.push(Deger(ga));
        }
        return MetotCagir(node.a.v, g, gOut.length ? gOut : null);
      }
      var ad = node.ad;
      if (!ad) throw new Kontrol("Desteklenmeyen çağrı");
      var nesne = node.a && node.a.k === "id" ? node.a.v : null;
      /* --- nesne üzerinden üye erişimi: m[i,j] yerine m.Eleman() / m.Count --- */
      if (ad === "IsNullOrEmpty") {
        var ss = Deger(node.args[0]);
        return ss === null || ss === undefined || String(ss) === "";
      }
      if (ad === "IsNull") {
        var ss2 = Deger(node.args[0]);
        return ss2 === null || ss2 === undefined;
      }
      if (ad === "IsNullOrWhiteSpace") {
        var ss3 = Deger(node.args[0]);
        return ss3 === null || String(ss3).trim() === "";
      }
      if (
        nesne !== "Console" &&
        nesne !== "Math" &&
        node.a &&
        (!node.a.k || node.a.k !== "id" || node.a.v in ortam)
      ) {
        var alici = Deger(node.a);
        if (typeof alici === "string") {
          if (ad === "Trim") return alici.trim();
          if (ad === "TrimStart") return alici.replace(/^\s+/, "");
          if (ad === "TrimEnd") return alici.replace(/\s+$/, "");
          if (ad === "ToUpper") return alici.toUpperCase();
          if (ad === "ToLower") return alici.toLowerCase();
          if (ad === "Replace")
            return alici
              .split(String(Deger(node.args[0])))
              .join(String(Deger(node.args[1])));
          if (ad === "Contains")
            return alici.indexOf(String(Deger(node.args[0]))) >= 0;
          if (ad === "StartsWith")
            return alici.indexOf(String(Deger(node.args[0]))) === 0;
          if (ad === "EndsWith")
            return (
              alici.lastIndexOf(String(Deger(node.args[0]))) ===
              alici.length - String(Deger(node.args[0])).length
            );
        }
      }
      if (
        ad &&
        nesne !== "Console" &&
        nesne !== "Math" &&
        node.a &&
        node.a.k === "id" &&
        node.a.v in ortam
      ) {
        var hedef = Deger(node.a);
        if (hedef && hedef.liste) {
          var L = hedef.liste;
          if (ad === "Add") {
            L.push(Deger(node.args[0]));
            return 0;
          }
          if (ad === "Remove") {
            var sil = Deger(node.args[0]),
              b = -1;
            for (var q = 0; q < L.length; q++)
              if (L[q] === sil || L[q] == sil) {
                b = q;
                break;
              }
            if (b >= 0) L.splice(b, 1);
            return 0;
          }
          if (ad === "Count") return L.length;
          if (ad === "Contains") {
            for (var q2 = 0; q2 < L.length; q2++)
              if (L[q2] === Deger(node.args[0])) return true;
            return false;
          }
          throw new Kontrol("List." + ad + " desteklenmiyor");
        }
        throw new Kontrol(ad + " üzerinde işlem desteklenmiyor");
      }

      if (ad === "TryParse") {
        var s3 = String(Deger(node.args[0])).trim();
        var h2 = node.args[1];
        var dis = h2 && h2.k === "out" ? h2.e : h2;
        var at = /^[+-]?\d+$/.test(s3);
        if (
          dis &&
          (dis.k === "ind" || (dis.k === "atama" && dis.l.k === "ind"))
        ) {
          var dd = Deger(dis.k === "atama" ? dis.l.a : dis.a);
          var ii = Deger(dis.k === "atama" ? dis.l.i : dis.i);
          if (Array.isArray(dd)) dd[ii] = at ? parseInt(s3, 10) : 0;
        } else if (dis && dis.k === "id") {
          ortam[dis.v] = at ? parseInt(s3, 10) : 0;
          tip[dis.v] = "int";
        }
        return at;
      }
      if (nesne === "Console") {
        var m = node.args
          .map(function (x) {
            return Cevir(Deger(x));
          })
          .join("");
        if (ad === "Write") {
          cikti.push(m);
          return null;
        }
        if (ad === "WriteLine") {
          cikti.push(m + "\n");
          return null;
        }
        if (ad === "ReadLine") return "";
        throw new Kontrol("Console." + ad + " desteklenmiyor");
      }
      if (nesne === "Math") {
        var v = node.args.map(function (x) {
          return Number(Deger(x));
        });
        switch (ad) {
          case "Max":
            return Math.max.apply(null, v);
          case "Min":
            return Math.min.apply(null, v);
          case "Abs":
            return Math.abs(v[0]);
          case "Pow":
            return Math.pow(v[0], v[1]);
          case "Sqrt":
            return Math.sqrt(v[0]);
          case "Floor":
            return Math.floor(v[0]);
          case "Ceiling":
            return Math.ceil(v[0]);
          case "Round": {
            var f = v.length > 1 ? Math.pow(10, v[1]) : 1;
            var y2 = v[0] * f,
              r = Math.round(y2);
            if (Math.abs(y2 - Math.trunc(y2)) === 0.5) {
              if (r % 2 !== 0) r += r > y2 ? -1 : 1;
            }
            return r / f;
          }
        }
        throw new Kontrol("Math." + ad + " desteklenmiyor");
      }
      if (ad === "Length") {
        var o2 = Deger(node.a);
        return o2.length;
      }
      throw new Kontrol("Desteklenmeyen çağrı: " + ad);
    }
    function Atama(o, hedef, yeni) {
      if (o === "=") {
        if (hedef.k === "id") {
          ortam[hedef.v] = yeni;
          tip[hedef.v] = T(hedef);
        } else if (hedef.k === "ind") {
          Deger(hedef.a)[Deger(hedef.i)] = yeni;
        } else throw new Kontrol("Atama hedefi geçersiz");
        return;
      }
      var eski = Deger(hedef);
      var y;
      if (o === "+=" && (typeof eski === "string" || typeof yeni === "string"))
        y = Cevir(eski) + Cevir(yeni);
      else if (o === "+=") y = sayiH(eski) + sayiH(yeni);
      else if (o === "-=") y = sayiH(eski) - sayiH(yeni);
      else if (o === "*=") y = sayiH(eski) * sayiH(yeni);
      else if (o === "/=") {
        if (sayiH(yeni) === 0) throw new Kontrol("Sıfıra bölme");
        y = sayiH(eski) / sayiH(yeni);
      } else if (o === "%=") {
        if (sayiH(yeni) === 0) throw new Kontrol("Sıfıra bölme");
        y = sayiH(eski) % sayiH(yeni);
      }
      if (
        typeof eski === "number" &&
        Number.isInteger(eski) &&
        typeof yeni === "number" &&
        Number.isInteger(yeni)
      )
        y = y | 0;
      if (hedef.k === "id") {
        ortam[hedef.v] = y;
        tip[hedef.v] =
          typeof y === "number" && Number.isInteger(y) && T(hedef) === "int"
            ? "int"
            : T(hedef);
      } else Deger(hedef.a)[Deger(hedef.i)] = y;
    }
    function sayiH(v) {
      if (typeof v !== "number") throw new Kontrol("Sayı bekleniyordu");
      return v;
    }
    function Calistir(n) {
      if (++derinlik > 400) {
        derinlik--;
        throw new Kontrol("Çok derin döngü");
      }
      switch (n.k) {
        case "prog":
        case "block":
          for (var i = 0; i < n.body.length; i++) Calistir(n.body[i]);
          return;
        case "return":
          if (n.e) {
            var h = new Kontrol("RET");
            h.deger = Deger(n.e);
            throw h;
          }
          throw new Kontrol("RET");
        case "nop":
          return;
        case "metot":
          MetotTanimla(n);
          return;
        case "decl2D": {
          var m2 = [];
          if (n.el)
            for (var r = 0; r < n.el.length; r++) {
              var rr = [];
              for (var cc = 0; cc < n.el[r].length; cc++)
                rr.push(Deger(n.el[r][cc]));
              m2.push(rr);
            }
          ortam[n.ad] = m2;
          tip[n.ad] = "dizi2d";
          tip[n.ad + "[]"] = "int";
          return;
        }
        case "decl":
          Object.keys(n.list).forEach(function (ad) {
            if (n.list[ad] === null) {
              ortam[ad] = n.t === "bool" ? false : 0;
              tip[ad] = n.t === "var" ? "int" : n.t;
            } else {
              ortam[ad] = Deger(n.list[ad]);
              tip[ad] = n.t === "var" ? T(n.list[ad]) : mapTip(n.t);
            }
          });
          return;
        case "declArr":
          ortam[n.ad] = n.el
            ? n.el.map(function (x) {
                return Deger(x);
              })
            : [];
          tip[n.ad] = "dizi";
          tip[n.ad + "[]"] = n.el && n.el.length ? T(n.el[0]) : "int";
          return;
        case "declListe":
          ortam[n.ad] = { liste: [] };
          tip[n.ad] = "liste";
          return;
        case "declNewArr": {
          var nn = Math.trunc(Number(Deger(n.n))),
            a2 = [];
          for (var q = 0; q < nn; q++) a2.push(0);
          ortam[n.ad] = a2;
          tip[n.ad] = "dizi";
          tip[n.ad + "[]"] = "int";
          return;
        }
        case "exprs":
          if (n.e) {
            if (n.e.k === "atama") Atama(n.e.o, n.e.l, Deger(n.e.r));
            else Deger(n.e);
          }
          return;
        case "if":
          if (Deger(n.c)) Calistir(n.t);
          else if (n.e) Calistir(n.e);
          return;
        case "while": {
          var w = 0;
          while (Deger(n.c)) {
            if (++w > 100000) throw new Kontrol("Sonsuz döngü");
            try {
              Calistir(n.b);
            } catch (e) {
              if (e instanceof Kontrol && e.x === "break") break;
              if (e instanceof Kontrol && e.x === "continue") continue;
              throw e;
            }
          }
          return;
        }
        case "dowhile": {
          var dw = 0;
          do {
            if (++dw > 100000) throw new Kontrol("Sonsuz döngü");
            try {
              Calistir(n.b);
            } catch (e) {
              if (e instanceof Kontrol && e.x === "break") break;
              if (e instanceof Kontrol && e.x === "continue") {
              } else throw e;
            }
          } while (Deger(n.c));
          return;
        }
        case "for": {
          if (n.bas) Calistir(n.bas);
          var f2 = 0;
          while (true) {
            if (n.c && !Deger(n.c)) break;
            if (++f2 > 100000) throw new Kontrol("Sonsuz döngü");
            try {
              Calistir(n.b);
            } catch (e) {
              if (e instanceof Kontrol && e.x === "break") break;
              if (e instanceof Kontrol && e.x === "continue") {
              } else throw e;
            }
            if (n.a) {
              if (n.a.k === "atama") Atama(n.a.o, n.a.l, Deger(n.a.r));
              else Deger(n.a);
            }
          }
          return;
        }
        case "foreach": {
          var dz = Deger(n.dizi);
          if (typeof dz === "string") dz = dz.split("");
          if (dz && dz.liste) dz = dz.liste;
          if (!Array.isArray(dz))
            throw new Kontrol(
              "foreach yalnızca dizi, liste veya metin üzerinde çalışır",
            );
          var oz =
            (n.dizi.k === "id" && tip[n.dizi.v + "[]"]) ||
            (typeof dz[0] === "string" ? "char" : "int");
          for (var j = 0; j < dz.length; j++) {
            ortam[n.ad] = dz[j];
            tip[n.ad] = oz;
            try {
              Calistir(n.b);
            } catch (e) {
              if (e instanceof Kontrol && e.x === "break") break;
              if (e instanceof Kontrol && e.x === "continue") continue;
              throw e;
            }
          }
          return;
        }
        case "switch": {
          var dv = Deger(n.d),
            sonraki = false;
          for (var g = 0; g < n.g.length; g++) {
            var gr = n.g[g];
            if (!sonraki) {
              if (gr.d === null) sonraki = true;
              else {
                var tut = false;
                for (var q2 = 0; q2 < gr.d.length; q2++) {
                  var gv = Deger(gr.d[q2]);
                  if (gv === dv || gv == dv) {
                    tut = true;
                    break;
                  }
                }
                if (!tut) continue;
                sonraki = true;
              }
            }
            if (!sonraki) continue;
            try {
              for (var s2 = 0; s2 < gr.b.length; s2++) Calistir(gr.b[s2]);
            } catch (e) {
              if (e instanceof Kontrol && e.x === "break") return;
              throw e;
            }
          }
          return;
        }
        case "gotocase": {
          var gd = Deger(n.e),
            hedef = -1,
            yol = n.yol || [];
          for (var gi = 0; gi < yol.length; gi++) {
            var gg = yol[gi];
            if (!gg.d) continue;
            for (var gj = 0; gj < gg.d.length; gj++) {
              var g2 = Deger(gg.d[gj]);
              if (g2 === gd || g2 == gd) {
                hedef = gi;
                break;
              }
            }
            if (hedef >= 0) break;
          }
          if (hedef < 0) return;
          for (var gk = hedef; gk < yol.length; gk++) {
            var gh = yol[gk];
            try {
              for (var m2 = 0; m2 < gh.b.length; m2++) Calistir(gh.b[m2]);
            } catch (e) {
              if (e instanceof Kontrol && e.x === "break")
                throw new Kontrol("GOTO-BITTI");
              throw e;
            }
          }
          throw new Kontrol("GOTO-BITTI");
        }
        case "break":
          throw new Kontrol("break");
        case "continue":
          throw new Kontrol("continue");
        case "return":
          return;
      }
      throw new Kontrol("Desteklenmeyen deyim: " + n.k);
    }
    function mapTip(t) {
      if (t === "double" || t === "decimal" || t === "float") return "double";
      if (t === "long" || t === "byte") return "int";
      return t;
    }

    try {
      Calistir(ast);
    } catch (e) {
      if (!(e instanceof Kontrol)) throw e;
      if (e.x === "GOTO-BITTI") return { cikti: cikti.join(""), hata: null };
      return { hata: e.x, cikti: cikti.join("") };
    }
    return { cikti: cikti.join(""), hata: null };
  }

  return { calistir: Yorumla, cevir: Cevir };
})();

if (typeof module !== "undefined" && module.exports) module.exports = CsMini;

/* ===== KOD TAMAMLA (boşluk) MOTORU =====
   Havuz bir kez kurulur ve aynı adım boyunca DEĞİŞMEZ; böylece
   ekranda görünen parça ile yerleştirilen parça her zaman aynıdır. */
var BOS_SECIL = null;

function boslukSayisi(kg) {
  var n = 0;
  kg.satirlar.forEach(function (l) {
    if (l === null) n++;
  });
  return n;
}
function boslukHavuzu(kg) {
  var a = OT.adimlar[OT.idx];
  if (a.havuz && a.havuzRef === kg) return a.havuz;
  var g = 0,
    havuz = [];
  kg.satirlar.forEach(function (l) {
    if (l === null) {
      havuz.push({ i: 0, gap: g, metin: kg.parcalar[g], dogru: true });
      g++;
    }
  });
  (kg.yanlislar || []).forEach(function (lst, gi) {
    if (!lst || !lst.length) return;
    var k = Math.floor(Math.random() * lst.length);
    havuz.push({ i: 0, gap: gi, metin: lst[k], dogru: false });
  });
  for (var i = havuz.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var t = havuz[i];
    havuz[i] = havuz[j];
    havuz[j] = t;
  }
  for (var m = 0; m < havuz.length; m++) havuz[m].i = m;
  a.havuz = havuz;
  a.havuzRef = kg;
  return havuz;
}
function boslukKullanildi(a, i) {
  var k = Object.keys(a.dolu || {});
  for (var j = 0; j < k.length; j++) {
    if (a.dolu[k[j]].i === i) return true;
  }
  return false;
}
function boslukCiz() {
  var a = OT.adimlar[OT.idx],
    kg = a.kod;
  a.dolu = a.dolu || {};
  var pre = document.getElementById("boslukKod");
  var ph = document.getElementById("parcaHavuz");
  if (!pre || !ph) return;
  var sat = [],
    g = 0,
    i;
  for (i = 0; i < kg.satirlar.length; i++) {
    if (kg.satirlar[i] === null) {
      /* her bosluğun uzerine ne yapilacagini anlatan yorum satiri */
      if (kg.ipucu && kg.ipucu[g])
        sat.push(
          '<span class="boslukyorum">' + kac("// " + kg.ipucu[g]) + "</span>",
        );
      var d = a.dolu[g];
      if (d) {
        var dog = normKod(d.metin) === normKod(kg.parcalar[g]);
        sat.push(
          '<span class="bosluk dolu ' +
            (dog ? "dogru" : "yanlis") +
            '" data-g="' +
            g +
            '" onclick="boslukSec(' +
            g +
            ')" title="Boşluğa dokun: parçayı geri al">' +
            (dog ? "✔ " : "✘ ") +
            kac(d.metin) +
            "</span>",
        );
      } else {
        sat.push(
          '<span class="bosluk" data-g="' +
            g +
            '" onclick="boslukSec(' +
            g +
            ')" ondragover="boslukOver(event,this)" ondragleave="boslukLeave(this)" ondrop="boslukBirak(event,this)">▁ BOŞLUK ' +
            g +
            " ▁</span>",
        );
      }
      g++;
    } else {
      sat.push(kac(kg.satirlar[i]));
    }
  }
  pre.innerHTML = sat.join("\n");
  var h2 = "";
  boslukHavuzu(kg).forEach(function (p) {
    var kul = boslukKullanildi(a, p.i);
    h2 +=
      '<span class="parca' +
      (kul ? " kullanildi" : "") +
      (BOS_SECIL === p.i ? " secili" : "") +
      '" draggable="true" data-p="' +
      p.i +
      '" onclick="parcaSec(' +
      p.i +
      ')" ondragstart="parcaSurukle(event,this)">' +
      kac(p.metin) +
      "</span>";
  });
  ph.innerHTML = h2;
}
function boslukYerlestir(pIdx, g) {
  var a = OT.adimlar[OT.idx],
    kg = a.kod;
  if (pIdx === null || pIdx === undefined || isNaN(pIdx)) return;
  var havuz = boslukHavuzu(kg),
    p = havuz[pIdx];
  if (!p) return;
  a.dolu = a.dolu || {};
  var dogruMu = normKod(p.metin) === normKod(kg.parcalar[g]);
  a.dolu[g] = { i: pIdx, metin: p.metin, dogru: dogruMu };
  BOS_SECIL = null;
  boslukCiz();
  var gk = document.getElementById("gkod");
  if (gk) {
    gk.innerHTML = dogruMu
      ? '<span class="dogru">✔ ' +
        g +
        " numaralı boşluk doğru dolduruldu.</span>"
      : '<span class="yanlis">✘ Bu satır ' +
        g +
        " numaralı boşluğa uymuyor. Boşluğun yapacağı iş: " +
        kac(kg.ipucu && kg.ipucu[g] ? kg.ipucu[g] : "bilinmiyor") +
        " — Başka bir boşluğa denemelisin.</span>";
  }
}
function boslukKaldir(g) {
  var a = OT.adimlar[OT.idx];
  if (!a.dolu) return;
  delete a.dolu[g];
  boslukCiz();
}
function parcaSec(i) {
  BOS_SECIL = i;
  boslukCiz();
  var gk = document.getElementById("gkod");
  if (gk)
    gk.innerHTML =
      '<span class="ipucu">Şimdi bu parçanın gideceği boşluğa dokun (ya da parçayı sürükle).</span>';
}
function boslukSec(g) {
  var a = OT.adimlar[OT.idx];
  if (a.dolu && a.dolu[g]) {
    boslukKaldir(g);
    return;
  }
  if (BOS_SECIL === null) {
    var gk = document.getElementById("gkod");
    if (gk)
      gk.innerHTML = '<span class="yanlis">Önce aşağıdan bir parça seç.</span>';
    return;
  }
  boslukYerlestir(BOS_SECIL, g);
}
function boslukOver(ev, el) {
  ev.preventDefault();
  el.classList.add("hedef");
}
function boslukLeave(el) {
  el.classList.remove("hedef");
}
function boslukBirak(ev, el) {
  ev.preventDefault();
  el.classList.remove("hedef");
  var d = ev.dataTransfer.getData("text/plain");
  if (d === "" || d === undefined) return;
  boslukYerlestir(parseInt(d, 10), parseInt(el.getAttribute("data-g"), 10));
}
function parcaSurukle(ev, el) {
  try {
    ev.dataTransfer.setData("text/plain", el.getAttribute("data-p"));
    ev.dataTransfer.effectAllowed = "move";
  } catch (e) {}
  el.classList.add("surukleniyor");
}
function boslukTani(kg, dolu) {
  var yanlilar = [],
    g = 0;
  for (var i = 0; i < kg.satirlar.length; i++) {
    if (kg.satirlar[i] !== null) continue;
    var d = dolu[g];
    if (d && normKod(d.metin) !== normKod(kg.parcalar[g])) {
      var n = d.metin.trim().replace(/;+$/, "");
      if (
        /^(int|long|byte|short|uint|ushort|double|decimal|string|char|bool|var|float)\b/.test(
          n,
        )
      )
        yanlilar.push(g + 1 + ". boşlukta tip yanlış: " + n);
      else if (n === "") yanlilar.push(g + 1 + ". boşluk boş kalmış.");
      else yanlilar.push(g + 1 + ". bu satır burada çalışmaz: " + n);
    }
    g++;
  }
  if (!yanlilar.length)
    yanlilar.push(
      "Parçalar yerinde ama biraz önce/sonra olmalı. Satır sırasını kodda kontrol et.",
    );
  return yanlilar.slice(0, 3).join(" ");
}
function kodCalistir() {
  var a = OT.adimlar[OT.idx];
  if (!a || a.tip !== "kod" || a.kod.tip !== "bosluk") return;
  var kg = a.kod,
    ciktiEl = document.getElementById("calisci");
  if (!ciktiEl) return;
  a.dolu = a.dolu || {};
  var n = boslukSayisi(kg),
    k,
    doluSay = 0,
    yanlis = [];
  for (k = 0; k < n; k++) {
    if (!a.dolu[k]) continue;
    doluSay++;
    if (!a.dolu[k].dogru) yanlis.push(k);
  }
  if (doluSay < n) {
    ciktiEl.innerHTML =
      "▸ " +
      (n - doluSay) +
      " boşluk hâlâ boş. Önce her boşluğa bir parça koy.";
    ciktiEl.className = "terminal";
    return;
  }
  if (yanlis.length) {
    /* YANLIS PARCA VARSA KOD CALISTIRILMAZ: kullaniciyi yonlendir */
    var ilk = yanlis[0];
    ciktiEl.className = "terminal";
    ciktiEl.innerHTML =
      '<div class="cikti-not yanlis">⛔ Kod çalıştırılmadı: ' +
      yanlis.length +
      " boşluk yanlış doldurulmuş." +
      (yanlis.length > 1
        ? " Yanlış olanlar: " +
          yanlis
            .map(function (g) {
              return g + 1;
            })
            .join(", ") +
          "."
        : "") +
      '</div><div class="cikti-not">' +
      yanlis
        .map(function (g) {
          return (
            "<b>" +
            g +
            " numaralı boşluğun yapacağı iş:</b> " +
            kac(kg.ipucu && kg.ipucu[g] ? kg.ipucu[g] : "bilinmiyor")
          );
        })
        .join("<br>") +
      '</div><div class="cikti-not">Yanlış parçayı çıkarmak için o boşluğa dokun.</div>';
    ses(180, 0.15);
    return;
  }
  ciktiEl.className = "terminal";
  var g = 0,
    sat = [];
  for (var i = 0; i < kg.satirlar.length; i++) {
    if (kg.satirlar[i] === null) sat.push(a.dolu[g++].metin);
    else sat.push(kg.satirlar[i]);
  }
  var kaynak = sat.join("\n"),
    r;
  try {
    r = CsMini.calistir(kaynak);
  } catch (err) {
    ciktiEl.innerHTML = "▸ Derleme hatası: " + kac(err.x || err.message);
    return;
  }
  if (r.hata) {
    ciktiEl.innerHTML = "▸ Çalışma hatası: " + kac(r.hata);
    return;
  }
  var dogru = normCikti(kg.cikti) === normCikti(r.cikti);
  ciktiEl.innerHTML =
    '<div class="cikti-satir">' +
    kac(kaynak) +
    '</div><div class="cikti-ayrac">── çıktı ──</div>' +
    '<div class="cikti-sonuc ' +
    (dogru ? "dogru" : "yanlis") +
    '">' +
    kac(r.cikti || "(boş)") +
    "</div>" +
    (dogru
      ? '<div class="cikti-not dogru">✔ Beklenen çıktıyla birebir aynı.</div>'
      : '<div class="cikti-not yanlis">✘ Beklenen: ' +
        kac(normCikti(kg.cikti)) +
        "</div>");
}
function taniKod(ham, kg) {
  var h = ham.trim();
  if (h.indexOf('"') >= 0 && kg.kabul.indexOf("'A'") >= 0)
    return "Çift tırnak yazıdır! Harf için tek tırnak gerekir: 'A'.";
  if ((h === "A" || h === "a") && kg.kabul.indexOf("'A'") >= 0)
    return "Tırnaksız olmaz! Harf tek tırnak içinde yazılır: 'A'.";
  if (/parse/i.test(h) && kg.kabul.indexOf("Convert.ToInt32") >= 0)
    return "Parse da çevirir ama bu derste tercüman Convert: Convert.ToInt32.";
  if (h.charAt(0) === "/" && h.charAt(1) !== "/" && kg.kabul.indexOf("//") >= 0)
    return "Tek eğik çizgi bölmedir! Yorum için iki tane: //.";
  if (h === "#" && kg.kabul.indexOf("#define") >= 0)
    return "Diyez tek başına yetmez: #define DENEME.";
  if (h === "define" && kg.kabul.indexOf("#define") >= 0)
    return "Başa diyezi koymayı unuttun: #define.";
  if (kg.kabul.indexOf("int") >= 0 && /["']/.test(h))
    return "Tırnak kullanma! int kutuya yalın sayı konur.";
  return "";
}
function siraTani(a, kg) {
  if (a.sira.length < kg.satirlar.length)
    return (
      "Eksik satır var: " +
      (kg.satirlar.length - a.sira.length) +
      " satır daha ekle."
    );
  for (var i = 0; i < kg.satirlar.length; i++) {
    if (a.sira[i] !== i) {
      if (/using/i.test(kg.satirlar[i]))
        return i + 1 + ". sırada izin satırı olmalı (using en başta).";
      if (/Main/i.test(kg.satirlar[i]))
        return "Kapı (Main) kutudan sonra gelir; using'i başa al.";
      if (/ReadLine|Write/i.test(kg.satirlar[i]))
        return "Önce hazırlık satırları, iş en sonda olur.";
      return i + 1 + ". sıra yanlış; '" + kg.satirlar[i] + "' buraya gelmeli.";
    }
  }
  return "";
}
function bantKapat() {
  document.getElementById("bant").className = "bant";
}
function sonraki() {
  bantKapat();
  OT.idx++;
  if (OT.idx >= OT.adimlar.length) {
    bitir();
  } else {
    adim();
  }
}
function bitir() {
  var n = OT.ders.n;
  var ilk = kayit.biten.indexOf(n) < 0;
  if (ilk) {
    kayit.biten.push(n);
  }
  var g = bugun();
  if (g !== kayit.sonGun) {
    var dun = new Date();
    dun.setDate(dun.getDate() - 1);
    var ds =
      dun.getFullYear() + "-" + (dun.getMonth() + 1) + "-" + dun.getDate();
    kayit.seri = kayit.sonGun === ds ? kayit.seri + 1 : 1;
    kayit.sonGun = g;
  }
  var verilen = ilk ? OT.xp : 5;
  kayit.xp += verilen;
  sakla();
  ses(990, 0.3);
  var dogruluk = OT.cevaplandi
    ? Math.round((OT.dogru / OT.cevaplandi) * 100)
    : 100;
  var o =
    '<div class="son"><div class="muhur">VAKA KAPANDI</div><h2>Vaka #' +
    n +
    ": " +
    kac(OT.ders.baslik) +
    "</h2>" +
    '<div class="satir"><span>Doğruluk</span><b style="color:#57c7ff">%' +
    dogruluk +
    "</b></div>" +
    '<div class="satir"><span>Kazanılan XP</span><b style="color:#ffb000">+' +
    verilen +
    " ⚡</b></div>" +
    '<div class="satir"><span>Ekstra dosyalar</span><b style="color:#ffb000">💪 ' +
    OT.extraCozulen +
    "/" +
    OT.ders.extralar.length +
    "</b></div>" +
    ((OT.ders.ornekler || []).length
      ? '<div class="satir"><span>Dersten örnekler</span><b style="color:#ffb000">📚 ' +
        OT.ornekCozulen +
        "/" +
        OT.ders.ornekler.length +
        "</b></div>"
      : "") +
    '<div class="satir"><span>Kod görevleri</span><b style="color:#3ddc84">⌨️ ' +
    OT.adimlar.filter(function (a) {
      return a.tip === "kod" && a.cozuldu;
    }).length +
    "/" +
    OT.ders.kodlar.length +
    "</b></div>" +
    '<div class="satir"><span>Gece vardiyası serisi</span><b style="color:#ff7a3c">🔥 ' +
    kayit.seri +
    " gece</b></div>" +
    '<div class="satir"><span>Kapanan dosya</span><b style="color:#3ddc84">' +
    kayit.biten.length +
    "/20</b></div>";
  document.body.classList.remove("dersmodu");
  if (n < 20) {
    o +=
      '<p><button class="dugme" onclick="dersAc(' +
      (n + 1) +
      ')">SONRAKİ VAKA →</button></p>';
  } else {
    o += "<p><b>🎓 20 vakanın hepsi kapandı. Başdedektif oldun!</b></p>";
  }
  if (n > 1) {
    o +=
      '<p><button class="dugme" style="background:#4a4456;color:#cfc8da" onclick="dersAc(' +
      (n - 1) +
      ')">← ÖNCEKİ VAKA</button></p>';
  }
  o +=
    '<p><button class="dugme" style="background:#4a4456;color:#cfc8da" onclick="patika()">PANAYA DÖN</button></p></div>';
  document.getElementById("orta").innerHTML = o;
  document.getElementById("ust").innerHTML =
    '<div class="baslik-satir" style="width:100%;max-width:620px;margin:0 auto"><button class="kapat" onclick="patika()">✕</button></div>';
  window.scrollTo(0, 0);
}
function sifirla() {
  if (confirm("Tüm ilerleme silinsin mi?")) {
    try {
      localStorage.clear();
    } catch (e) {}
    location.reload();
  }
}

/* ---------- HESAP MAKİNESİ ---------- */
var HM = { ifade: "", mod: "basit" };
function hesapAc() {
  var e = document.getElementById("hesap-panel");
  e.classList.add("acik");
  hmKonumOku();
  if (e && e.dataset.tasi === "1")
    setTimeout(function () {
      hmEkranaSigdir(e);
    }, 40);
}
function hesapKapat() {
  document.getElementById("hesap-panel").classList.remove("acik");
}
function hmModAyarla(m) {
  HM.mod = m;
  document.getElementById("hm-m-basit").className =
    m === "basit" ? "aktif" : "";
  document.getElementById("hm-m-oncelik").className =
    m === "oncelik" ? "aktif" : "";
}
function hesapMod(m) {
  hmModAyarla(m);
  hmHesapla();
}
function hmEkle(k) {
  var s = HM.ifade;
  if (k === "(") {
    if (HM.mod !== "oncelik") hmModAyarla("oncelik");
    HM.ifade = /[0-9)]/.test(s.slice(-1)) ? s + "*(" : s + "(";
  } else if (k === ".") {
    var parca = s.split(/[+\-*\/%()]/).pop();
    if (parca.indexOf(".") >= 0) return;
    HM.ifade = s + ".";
  } else HM.ifade = s + k;
  hmHesapla();
}
function hmSil() {
  HM.ifade = HM.ifade.slice(0, -1);
  hmHesapla();
}
function hmSifirla() {
  HM.ifade = "";
  hmHesapla();
}
function hmBicimle(n) {
  if (typeof n !== "number") return "hatalı ifade";
  if (!isFinite(n)) return "sıfıra bölme";
  if (n === Math.trunc(n) && Math.abs(n) < 1e15) return String(n);
  return String(parseFloat(n.toPrecision(12)));
}
function hmTokenize(s) {
  var t = [],
    i = 0;
  s = String(s).replace(/,/g, ".");
  while (i < s.length) {
    var c = s.charAt(i);
    if (c === " ") {
      i++;
      continue;
    }
    if ("0123456789.".indexOf(c) >= 0) {
      var n = "";
      while (i < s.length && "0123456789.".indexOf(s.charAt(i)) >= 0) {
        n += s.charAt(i);
        i++;
      }
      if ((n.match(/\./g) || []).length > 1) return null;
      if (n.charAt(0) === ".") n = "0" + n;
      if (n.charAt(n.length - 1) === ".") n = n + "0";
      var sayi = parseFloat(n);
      if (isNaN(sayi)) return null;
      t.push({ t: "n", v: sayi, i: n.indexOf(".") < 0 });
      continue;
    }
    if ("+-*/%".indexOf(c) >= 0) {
      t.push({ t: "o", v: c });
      i++;
      continue;
    }
    if (c === "(") {
      t.push({ t: "(", v: "(" });
      i++;
      continue;
    }
    if (c === ")") {
      t.push({ t: ")", v: ")" });
      i++;
      continue;
    }
    return null;
  }
  return t;
}
function hmBasit(t) {
  if (!t || !t.length) return null;
  var i = 0,
    acc;
  if (t[0].t === "o" && t[0].v === "-") {
    acc = 0;
    i = 1;
  } else if (t[0].t !== "n") return null;
  else {
    acc = t[0].v;
    i = 1;
  }
  while (i < t.length) {
    if (t[i].t !== "o") return null;
    var o = t[i].v;
    i++;
    if (i >= t.length || t[i].t !== "n") return null;
    var n = t[i].v;
    i++;
    if (o === "+") acc = acc + n;
    else if (o === "-") acc = acc - n;
    else if (o === "*") acc = acc * n;
    else if (o === "%") {
      if (n === 0) return NaN;
      acc = acc % n;
    } else {
      if (n === 0) return NaN;
      acc = acc / n;
    }
  }
  return acc;
}
function hmOncelik(t) {
  if (!t) return null;
  var p = 0,
    _i = true;
  function birincil() {
    if (p < t.length && t[p].t === "(") {
      p++;
      var v = topla();
      if (v === null) return null;
      if (p < t.length && t[p].t === ")") {
        p++;
        return v;
      }
      return null;
    }
    if (p < t.length && t[p].t === "n") {
      var tk = t[p];
      p++;
      _i = tk.i !== false;
      return tk.v;
    }
    return null;
  }
  function sayi() {
    if (p < t.length && t[p].t === "o" && t[p].v === "-") {
      p++;
      var v = sayi();
      if (v === null) return null;
      return -v;
    }
    return birincil();
  }
  function carp() {
    var v = sayi();
    if (v === null) return null;
    var vi = _i;
    while (
      p < t.length &&
      t[p].t === "o" &&
      (t[p].v === "*" || t[p].v === "/" || t[p].v === "%")
    ) {
      var o = t[p].v;
      p++;
      var r = sayi();
      if (r === null) return null;
      var ri = _i;
      if (o === "*") v = v * r;
      else if (o === "%") {
        if (r === 0) return NaN;
        v = v % r;
      } else {
        if (r === 0) return NaN;
        v = vi && ri ? Math.trunc(v / r) : v / r;
      }
      vi = vi && ri;
    }
    _i = vi;
    return v;
  }
  function topla() {
    var v = carp();
    if (v === null) return null;
    var vi = _i;
    while (
      p < t.length &&
      t[p].t === "o" &&
      (t[p].v === "+" || t[p].v === "-")
    ) {
      var o = t[p].v;
      p++;
      var r = carp();
      if (r === null) return null;
      var ri = _i;
      v = o === "+" ? v + r : v - r;
      vi = vi && ri;
    }
    _i = vi;
    return v;
  }
  var son = topla();
  if (son === null || p !== t.length) return null;
  return son;
}
function hmHesapla() {
  var ifadeEl = document.getElementById("hm-ifade");
  var sonEl = document.getElementById("hm-sonuc");
  var gorunum = HM.ifade
    .replace(/\*/g, "×")
    .replace(/\//g, "÷")
    .replace(/-/g, "−");
  ifadeEl.innerHTML = gorunum ? kac(gorunum) : "&nbsp;";
  sonEl.className = "hesap-sonuc";
  if (!HM.ifade.trim()) {
    sonEl.textContent = "0";
    return;
  }
  var t = hmTokenize(HM.ifade);
  if (!t) {
    sonEl.className = "hesap-sonuc hata";
    sonEl.textContent = "geçersiz karakter";
    return;
  }
  var son = /[+\-*/%(]$/.test(HM.ifade.trim());
  if (son) {
    sonEl.className = "hesap-sonuc hata";
    sonEl.textContent = "ifade yarım";
    return;
  }
  if (HM.ifade.trim().charAt(0) === ")") {
    sonEl.className = "hesap-sonuc hata";
    sonEl.textContent = "parantez hatası";
    return;
  }
  var r;
  try {
    r = HM.mod === "oncelik" ? hmOncelik(t) : hmBasit(t);
  } catch (e) {
    r = null;
  }
  if (r === null) {
    sonEl.className = "hesap-sonuc hata";
    sonEl.textContent = "hatalı ifade";
    return;
  }
  if (typeof r === "number" && !isFinite(r)) {
    sonEl.className = "hesap-sonuc hata";
    sonEl.textContent = "sıfıra bölme";
    return;
  }
  sonEl.textContent = hmBicimle(r);
}
function hmEsit() {
  var t = hmTokenize(HM.ifade);
  if (!t) return;
  var r = HM.mod === "oncelik" ? hmOncelik(t) : hmBasit(t);
  if (r === null || (typeof r === "number" && !isFinite(r))) return;
  HM.ifade = hmBicimle(r);
  hmHesapla();
}
/* ---------- hesap makinesi: konum + surukleme ---------- */
/* ---------- HATA AVI ---------- */
var HATA_SECIL = -1;
function hataSec(i) {
  HATA_SECIL = i;
  document.querySelectorAll(".hata-btn").forEach(function (b) {
    b.classList.toggle("secili", b.getAttribute("data-h") === String(i));
  });
  var g = document.getElementById("gkod");
  if (g)
    g.innerHTML =
      '<span class="ipucu">' +
      (i + 1) +
      ". satırı seçildi. Emin misen KONTROL ET" +
      "</span>";
}
function hataKontrol() {
  var a = OT.adimlar[OT.idx];
  if (!a || a.tip !== "hata" || a.tamam) return;
  var hh = a.hata,
    g = document.getElementById("gkod");
  if (!a.denendi) {
    a.denendi = true;
    OT.cevaplandi++;
  }
  if (HATA_SECIL < 0) {
    ses(180, 0.3);
    if (g) g.innerHTML = '<span class="yanlis">Önce bir satıra dokun.</span>';
    return;
  }
  var puan = a.revealed
    ? 0
    : a.yanlis === 0
      ? hh.puan
      : Math.max(5, Math.floor(hh.puan / 2));
  if (HATA_SECIL === hh.cevap) {
    a.tamam = true;
    OT.dogru++;
    OT.xp += puan;
    ses(660, 0.15);
    document.querySelectorAll(".hata-btn").forEach(function (b) {
      b.disabled = true;
      b.classList.remove("secili");
      if (b.getAttribute("data-h") === String(hh.cevap))
        b.classList.add("dogru");
    });
    document.getElementById("kontrol").style.display = "none";
    bantGoster(
      true,
      "Suçlu satır yakalandı! +" + puan + " XP",
      hh.neden,
      "DEVAM",
    );
    document.getElementById("bant-buton").onclick = function () {
      bantKapat();
      sonraki();
    };
    panelGuncelle();
    return;
  }
  a.yanlis++;
  ses(180, 0.3);
  var secilen = document.querySelector(
    '.hata-btn[data-h="' + HATA_SECIL + '"]',
  );
  if (secilen) secilen.classList.add("yanlis");
  var tz = null;
  if ((a.ipSeviye || 0) >= 1 && Array.isArray(hh.tuzak)) {
    tz = hh.tuzak[String(HATA_SECIL)] || null;
  }
  if (a.yanlis >= 3) {
    a.revealed = true;
    a.tamam = true;
    document.querySelectorAll(".hata-btn").forEach(function (b) {
      b.disabled = true;
      b.classList.remove("secili");
      if (b.getAttribute("data-h") === String(hh.cevap))
        b.classList.add("dogru");
    });
    document.getElementById("kontrol").style.display = "none";
    bantGoster(
      false,
      "3 deneme oldu — suçlu satır gösteriliyor (0 XP):",
      "Hatalı satır " +
        (hh.cevap + 1) +
        ": " +
        hh.satirlar[hh.cevap] +
        " | Doğrusu: " +
        hh.duzeltme +
        ". " +
        hh.neden,
      "DEVAM",
    );
    document.getElementById("bant-buton").onclick = function () {
      bantKapat();
      sonraki();
    };
    panelGuncelle();
    return;
  }
  if (tz) {
    bantGoster(
      false,
      "Dedektif Nokta o satıra bakmadı:",
      tz + " (Kalan deneme: " + (3 - a.yanlis) + ")",
      "TEKRAR DENE",
    );
  } else {
    var davet =
      (a.ipSeviye || 0) === 0
        ? " Takıldıysan İPUCU düğmesine ya da bana bas."
        : " Açık ipuçlarına bir daha bak.";
    bantGoster(
      false,
      "Olmadı — doğru satır gösterilmiyor:",
      davet + " (Kalan deneme: " + (3 - a.yanlis) + ")",
      "TEKRAR DENE",
    );
  }
  document.getElementById("bant-buton").onclick = function () {
    bantKapat();
  };
  panelGuncelle();
}
/* ---------- hesap makinesi: konum + surukleme ---------- */
function hmEkranaSigdir(el) {
  var m = 6;
  var w = el.offsetWidth || 288,
    h = el.offsetHeight || 320;
  var W = window.innerWidth || 360,
    H = window.innerHeight || 640;
  var x = el.offsetLeft,
    y = el.offsetTop;
  var mX = Math.max(m, Math.min(x, W - w - m)),
    mY = Math.max(m, Math.min(y, H - h - m));
  /* panel ekrandan uzunsa yukarida sabitle */
  if (h > H - 2 * m) mY = m;
  el.style.left = mX + "px";
  el.style.top = mY + "px";
  return [mX, mY];
}
function hmKonumOku() {
  try {
    var v = localStorage.getItem("hmPos");
    if (!v) return;
    var p = JSON.parse(v);
    var el = document.getElementById("hesap-panel");
    if (!el || !p) return;
    el.style.left = p.l + "px";
    el.style.top = p.t + "px";
    el.style.bottom = "auto";
    el.dataset.tasi = "1";
    hmEkranaSigdir(el);
  } catch (e) {}
}
function hmKonumKaydet() {
  try {
    var el = document.getElementById("hesap-panel");
    if (!el || !el.dataset.tasi) return;
    localStorage.setItem(
      "hmPos",
      JSON.stringify({ l: el.offsetLeft, t: el.offsetTop }),
    );
  } catch (e) {}
}
function hmKonumSifirla() {
  try {
    localStorage.removeItem("hmPos");
  } catch (e) {}
  var el = document.getElementById("hesap-panel");
  if (!el) return;
  el.style.left = "";
  el.style.top = "";
  el.style.bottom = "";
  try {
    delete el.dataset.tasi;
  } catch (e) {
    el.removeAttribute("data-tasi");
  }
}
function hmSuruklemeKur() {
  var el = document.getElementById("hesap-panel"),
    bas = document.getElementById("hm-bas");
  if (!el || !bas) return;
  var suruk = null;
  function sinirla(x, y) {
    var m = 6,
      w = el.offsetWidth,
      h = el.offsetHeight;
    return [
      Math.max(m, Math.min(x, (window.innerWidth || 0) - w - m)),
      Math.max(m, Math.min(y, (window.innerHeight || 0) - h - m)),
    ];
  }
  bas.addEventListener("pointerdown", function (e) {
    if (e.target && e.target.closest && e.target.closest("button")) return;
    var r = el.getBoundingClientRect();
    if (el.dataset.tasi !== "1") {
      el.dataset.tasi = "1";
      el.style.left = r.left + "px";
      el.style.top = r.top + "px";
      el.style.bottom = "auto";
    }
    suruk = { dx: e.clientX - r.left, dy: e.clientY - r.top, id: e.pointerId };
    bas.classList.add("suruklu");
    try {
      bas.setPointerCapture(e.pointerId);
    } catch (err) {}
    e.preventDefault();
  });
  bas.addEventListener("pointermove", function (e) {
    if (!suruk) return;
    var q = sinirla(e.clientX - suruk.dx, e.clientY - suruk.dy);
    el.style.left = q[0] + "px";
    el.style.top = q[1] + "px";
    e.preventDefault();
  });
  function birak(e) {
    if (!suruk) return;
    suruk = null;
    bas.classList.remove("suruklu");
    try {
      bas.releasePointerCapture(e.pointerId);
    } catch (err) {}
    hmKonumKaydet();
  }
  bas.addEventListener("pointerup", birak);
  bas.addEventListener("pointercancel", birak);
  bas.addEventListener("dblclick", function () {
    hmKonumSifirla();
  });
  /* pencere degisince ekrandan tasmasin */
  /* pencere doner/dondurulunca ekrandan tasmasin (telefonda glitch kaynagi) */
  function sigdir() {
    if (!el.dataset.tasi) return;
    var q = sinirla(el.offsetLeft, el.offsetTop);
    var h = el.offsetHeight || 320,
      H = window.innerHeight || 640;
    el.style.left = q[0] + "px";
    el.style.top = (h > H - 12 ? 6 : q[1]) + "px";
  }
  window.addEventListener("resize", sigdir);
  window.addEventListener("orientationchange", function () {
    setTimeout(sigdir, 120);
    setTimeout(sigdir, 400);
  });
  hmKonumOku();
}
function hmKopyala() {
  var s = document.getElementById("hm-sonuc").textContent;
  if (!s || s === "0") {
    maskotSoyle("Önce bir işlem yap.");
    return;
  }
  try {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(s);
      maskotSoyle("Sonuç panoya kopyalandı: " + s);
    } else maskotSoyle("Sonuç: " + s);
  } catch (e) {
    maskotSoyle("Sonuç: " + s);
  }
}
document.addEventListener("DOMContentLoaded", hmSuruklemeKur);
document.getElementById("hm-pad").addEventListener("click", function (e) {
  var b = e.target.closest ? e.target.closest("button") : null;
  if (!b) return;
  var f = b.getAttribute("data-f");
  if (f === "temizle") {
    hmSifirla();
    return;
  }
  if (f === "geri") {
    hmSil();
    return;
  }
  if (f === "esit") {
    hmEsit();
    return;
  }
  var k = b.getAttribute("data-k");
  if (k) hmEkle(k);
});
document.addEventListener("click", function (e) {
  var p = document.getElementById("hesap-panel"),
    b = document.getElementById("hesap-btn");
  if (!p.classList.contains("acik")) return;
  if (p.contains(e.target) || b.contains(e.target)) return;
  hesapKapat();
});
document.addEventListener("keydown", function (e) {
  var p = document.getElementById("hesap-panel");
  if (!p.classList.contains("acik")) return;
  if (e.key === "Escape") {
    hesapKapat();
    return;
  }
  var hedef = e.target && e.target.tagName ? e.target.tagName : "";
  if (hedef === "INPUT" || hedef === "TEXTAREA") return;
  var k = e.key;
  if (k >= "0" && k <= "9") {
    hmEkle(k);
    e.preventDefault();
    return;
  }
  if (k === "." || k === ",") {
    hmEkle(".");
    e.preventDefault();
    return;
  }
  if (
    k === "+" ||
    k === "-" ||
    k === "*" ||
    k === "/" ||
    k === "%" ||
    k === "(" ||
    k === ")"
  ) {
    hmEkle(k);
    e.preventDefault();
    return;
  }
  if (k === "Enter" || k === "=") {
    hmEsit();
    e.preventDefault();
    return;
  }
  if (k === "Backspace") {
    hmSil();
    e.preventDefault();
    return;
  }
  if (k === "Delete") {
    hmSifirla();
    e.preventDefault();
    return;
  }
});
hmHesapla();

patika();
if (
  typeof location !== "undefined" &&
  location.hash &&
  location.hash.indexOf("#vaka-") == 0
) {
  var vn = parseInt(location.hash.slice(6), 10);
  if (vn >= 1 && vn <= 20) {
    dersAc(vn);
  }
}
/* noir sahne: arka plana pencere + dedektif burosu ekler */
function knSahneKur() {
  if (document.querySelector(".kn-bg")) return;
  var d = document.createElement("div");
  d.className = "kn-bg";
  d.innerHTML =
    '<svg class="kn-sahne" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><defs><linearGradient id="knPencere" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#12243a"/><stop offset="55%" stop-color="#0d1a2b"/><stop offset="100%" stop-color="#0a1220"/></linearGradient><radialGradient id="knLamba" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#ffd98a" stop-opacity="0.85"/><stop offset="100%" stop-color="#ffd98a" stop-opacity="0"/></radialGradient><radialGradient id="knLamba2" cx="50%" cy="0%" r="70%"><stop offset="0%" stop-color="#ffb000" stop-opacity="0.22"/><stop offset="100%" stop-color="#ffb000" stop-opacity="0"/></radialGradient><radialGradient id="knHavuz" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#ffcf7a" stop-opacity="0.22"/><stop offset="45%" stop-color="#ffb000" stop-opacity="0.09"/><stop offset="100%" stop-color="#ffb000" stop-opacity="0"/></radialGradient><radialGradient id="knSahneHale" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#fff6e2" stop-opacity="0.80"/><stop offset="40%" stop-color="#ffe0a8" stop-opacity="0.42"/><stop offset="75%" stop-color="#ffc169" stop-opacity="0.16"/><stop offset="100%" stop-color="#ff9d1a" stop-opacity="0"/></radialGradient><radialGradient id="knSahneCam" cx="38%" cy="32%" r="70%"><stop offset="0%" stop-color="#ffffff" stop-opacity="0.50"/><stop offset="55%" stop-color="#bfe6ff" stop-opacity="0.15"/><stop offset="100%" stop-color="#7fa8c9" stop-opacity="0.07"/></radialGradient><linearGradient id="knSahneYuz" x1="0" y1="0.1" x2="1" y2="0.35"><stop offset="0%" stop-color="#4e3d52"/><stop offset="38%" stop-color="#372b42"/><stop offset="72%" stop-color="#241c30"/><stop offset="100%" stop-color="#171223"/></linearGradient></defs><g opacity="0.5"><path d="M0 470h40v-70h34v-26h30v26h22v-54h38v54h26v-92h26v92h20v-38h44v38h18v-62h30v62h24v-46h36v46h20v-80h28v80h24v-34h40v34h22v-58h32v58h20v-70h38v70h26v-42h36v42h24v-88h28v88h22v-36h44v36h18v-56h34v56h26v-46h30v46h20v-64h40v64h26v-30h50v30z" fill="#0b1018"/></g><g opacity="0.75"><circle cx="180" cy="452" r="3.5" fill="#ff5c5c"/><circle cx="187" cy="452" r="2.2" fill="#ff9a6c" opacity="0.7"/><circle cx="1180" cy="448" r="3.5" fill="#ff5c5c"/><circle cx="1173" cy="448" r="2.2" fill="#ff9a6c" opacity="0.7"/></g><rect x="292" y="92" width="440" height="380" fill="url(#knPencere)"/><g class="kn-yagmur"><path d="M330 120l-7 30" stroke="#7fa8c9" stroke-width="1.5" stroke-linecap="round" opacity="0.18"/><path d="M372 150l-7 30" stroke="#7fa8c9" stroke-width="1.5" stroke-linecap="round" opacity="0.29"/><path d="M420 108l-7 30" stroke="#7fa8c9" stroke-width="1.5" stroke-linecap="round" opacity="0.40"/><path d="M462 176l-7 30" stroke="#7fa8c9" stroke-width="1.5" stroke-linecap="round" opacity="0.18"/><path d="M506 132l-7 30" stroke="#7fa8c9" stroke-width="1.5" stroke-linecap="round" opacity="0.29"/><path d="M548 168l-7 30" stroke="#7fa8c9" stroke-width="1.5" stroke-linecap="round" opacity="0.40"/><path d="M596 112l-7 30" stroke="#7fa8c9" stroke-width="1.5" stroke-linecap="round" opacity="0.18"/><path d="M640 158l-7 30" stroke="#7fa8c9" stroke-width="1.5" stroke-linecap="round" opacity="0.29"/><path d="M356 226l-7 30" stroke="#7fa8c9" stroke-width="1.5" stroke-linecap="round" opacity="0.40"/><path d="M404 262l-7 30" stroke="#7fa8c9" stroke-width="1.5" stroke-linecap="round" opacity="0.18"/><path d="M448 216l-7 30" stroke="#7fa8c9" stroke-width="1.5" stroke-linecap="round" opacity="0.29"/><path d="M492 250l-7 30" stroke="#7fa8c9" stroke-width="1.5" stroke-linecap="round" opacity="0.40"/><path d="M534 292l-7 30" stroke="#7fa8c9" stroke-width="1.5" stroke-linecap="round" opacity="0.18"/><path d="M578 232l-7 30" stroke="#7fa8c9" stroke-width="1.5" stroke-linecap="round" opacity="0.29"/><path d="M622 272l-7 30" stroke="#7fa8c9" stroke-width="1.5" stroke-linecap="round" opacity="0.40"/><path d="M666 214l-7 30" stroke="#7fa8c9" stroke-width="1.5" stroke-linecap="round" opacity="0.18"/><path d="M340 330l-7 30" stroke="#7fa8c9" stroke-width="1.5" stroke-linecap="round" opacity="0.29"/><path d="M388 366l-7 30" stroke="#7fa8c9" stroke-width="1.5" stroke-linecap="round" opacity="0.40"/><path d="M436 322l-7 30" stroke="#7fa8c9" stroke-width="1.5" stroke-linecap="round" opacity="0.18"/><path d="M482 358l-7 30" stroke="#7fa8c9" stroke-width="1.5" stroke-linecap="round" opacity="0.29"/><path d="M530 316l-7 30" stroke="#7fa8c9" stroke-width="1.5" stroke-linecap="round" opacity="0.40"/><path d="M574 352l-7 30" stroke="#7fa8c9" stroke-width="1.5" stroke-linecap="round" opacity="0.18"/><path d="M620 330l-7 30" stroke="#7fa8c9" stroke-width="1.5" stroke-linecap="round" opacity="0.29"/><path d="M664 368l-7 30" stroke="#7fa8c9" stroke-width="1.5" stroke-linecap="round" opacity="0.40"/><path d="M360 410l-7 30" stroke="#7fa8c9" stroke-width="1.5" stroke-linecap="round" opacity="0.18"/><path d="M408 396l-7 30" stroke="#7fa8c9" stroke-width="1.5" stroke-linecap="round" opacity="0.29"/><path d="M456 420l-7 30" stroke="#7fa8c9" stroke-width="1.5" stroke-linecap="round" opacity="0.40"/><path d="M504 390l-7 30" stroke="#7fa8c9" stroke-width="1.5" stroke-linecap="round" opacity="0.18"/><path d="M552 424l-7 30" stroke="#7fa8c9" stroke-width="1.5" stroke-linecap="round" opacity="0.29"/><path d="M600 392l-7 30" stroke="#7fa8c9" stroke-width="1.5" stroke-linecap="round" opacity="0.40"/><path d="M648 416l-7 30" stroke="#7fa8c9" stroke-width="1.5" stroke-linecap="round" opacity="0.18"/><path d="M300 210l-7 30" stroke="#7fa8c9" stroke-width="1.5" stroke-linecap="round" opacity="0.29"/></g><g opacity="0.72"><rect x="292" y="104" width="440" height="11" rx="2" fill="#0a0f18" opacity="0.88"/><rect x="292" y="115" width="440" height="3" fill="#3a4a5e" opacity="0.35"/><rect x="292" y="133" width="440" height="11" rx="2" fill="#0a0f18" opacity="0.88"/><rect x="292" y="144" width="440" height="3" fill="#3a4a5e" opacity="0.35"/><rect x="292" y="162" width="440" height="11" rx="2" fill="#0a0f18" opacity="0.88"/><rect x="292" y="173" width="440" height="3" fill="#3a4a5e" opacity="0.35"/><rect x="292" y="191" width="440" height="11" rx="2" fill="#0a0f18" opacity="0.88"/><rect x="292" y="202" width="440" height="3" fill="#3a4a5e" opacity="0.35"/><rect x="292" y="220" width="440" height="11" rx="2" fill="#0a0f18" opacity="0.88"/><rect x="292" y="231" width="440" height="3" fill="#3a4a5e" opacity="0.35"/><rect x="292" y="249" width="440" height="11" rx="2" fill="#0a0f18" opacity="0.88"/><rect x="292" y="260" width="440" height="3" fill="#3a4a5e" opacity="0.35"/><rect x="292" y="278" width="440" height="11" rx="2" fill="#0a0f18" opacity="0.88"/><rect x="292" y="289" width="440" height="3" fill="#3a4a5e" opacity="0.35"/><rect x="292" y="307" width="440" height="11" rx="2" fill="#0a0f18" opacity="0.88"/><rect x="292" y="318" width="440" height="3" fill="#3a4a5e" opacity="0.35"/><rect x="292" y="336" width="440" height="11" rx="2" fill="#0a0f18" opacity="0.88"/><rect x="292" y="347" width="440" height="3" fill="#3a4a5e" opacity="0.35"/><rect x="292" y="365" width="440" height="11" rx="2" fill="#0a0f18" opacity="0.88"/><rect x="292" y="376" width="440" height="3" fill="#3a4a5e" opacity="0.35"/><rect x="292" y="394" width="440" height="11" rx="2" fill="#0a0f18" opacity="0.88"/><rect x="292" y="405" width="440" height="3" fill="#3a4a5e" opacity="0.35"/><rect x="292" y="423" width="440" height="11" rx="2" fill="#0a0f18" opacity="0.88"/><rect x="292" y="434" width="440" height="3" fill="#3a4a5e" opacity="0.35"/><rect x="292" y="452" width="440" height="11" rx="2" fill="#0a0f18" opacity="0.88"/><rect x="292" y="463" width="440" height="3" fill="#3a4a5e" opacity="0.35"/></g><rect x="506" y="86" width="8" height="392" fill="#1d2330"/><rect x="286" y="278" width="452" height="9" fill="#1d2330"/><path d="M300 470l150-380h46L346 470z" fill="#9fd8ff" opacity="0.05"/><rect x="286" y="86" width="452" height="392" rx="6" fill="none" stroke="#2a2539" stroke-width="9"/><rect x="770" y="130" width="316" height="170" rx="6" fill="#141020" stroke="#2a2539" stroke-width="5"/><g opacity="0.28"><rect x="792" y="150" width="128" height="92" rx="3" fill="#d8cfb8" transform="rotate(-4 856 196)"/><rect x="806" y="164" width="100" height="8" fill="#3a2f22" transform="rotate(-4 856 196)"/><rect x="812" y="182" width="82" height="6" fill="#5a4a35" transform="rotate(-4 856 196)"/><rect x="812" y="196" width="64" height="6" fill="#5a4a35" transform="rotate(-4 856 196)"/><rect x="812" y="210" width="74" height="6" fill="#8a2b2b" transform="rotate(-4 856 196)"/></g><g opacity="0.22"><rect x="952" y="188" width="112" height="84" rx="3" fill="#d8cfb8" transform="rotate(3 1008 230)"/><rect x="964" y="204" width="88" height="7" fill="#3a2f22" transform="rotate(3 1008 230)"/><rect x="970" y="220" width="70" height="5" fill="#5a4a35" transform="rotate(3 1008 230)"/><rect x="970" y="232" width="56" height="5" fill="#5a4a35" transform="rotate(3 1008 230)"/><rect x="970" y="244" width="66" height="5" fill="#8a2b2b" transform="rotate(3 1008 230)"/></g><g class="kn-asik"><rect x="700" y="0" width="4" height="96" fill="#2a2539"/><path d="M660 96h84l-14 26h-56z" fill="#241c10" stroke="#ffb00055" stroke-width="2"/><circle cx="702" cy="128" r="13" fill="#ffb000" opacity="0.85"/><ellipse cx="702" cy="140" rx="130" ry="74" fill="url(#knLamba2)"/></g><g class="kn-dedektif"><ellipse cx="270" cy="420" rx="118" ry="132" fill="url(#knSahneHale)"/><g opacity="0.4"><rect x="176" y="150" width="46" height="36" rx="1" fill="#b9a680" transform="rotate(-7 199 168)"/><rect x="330" y="196" width="44" height="38" rx="1" fill="#c4b28c" transform="rotate(6 352 215)"/><rect x="186" y="500" width="44" height="38" rx="1" fill="#a89a7d" transform="rotate(5 208 519)"/></g><g opacity="0.28" stroke="#6b5c3f" stroke-width="1.4"><path d="M184 158h30M184 165h34M185 172h24"/><path d="M338 205h30M338 212h26M339 219h32"/></g><g stroke="#8a2b2b" stroke-width="1.5" fill="none" opacity="0.6"><path d="M222 168L330 214M212 176L208 500M352 214L230 519"/></g><path d="M236 560 L304 560 L308 660 L232 660 Z" fill="#191425"/><path d="M270 408 C238 408 218 426 211 456 C201 492 198 528 197 600 L200 660 L340 660 L343 600 C342 528 339 492 329 456 C322 426 302 408 270 408 Z" fill="#0e0b14"/><path d="M228 560 L224 650 M312 560 L316 650" stroke="#1b1526" stroke-width="2.6" fill="none"/><path d="M211 496 L329 496 L329 512 L211 512 Z" fill="#161220"/><rect x="258" y="494" width="24" height="20" rx="4" fill="#8e7d4c"/><path d="M258 418 L282 418 L280 500 L260 500 Z" fill="#241e2f"/><path d="M270 428 L280 436 L270 462 L260 436 Z" fill="#7a2836"/><path d="M245 414 C253 402 287 402 295 414 L285 428 L255 428 Z" fill="#15111f"/><path d="M245 414 L257 428 L243 466 L227 450 Z" fill="#1a1422"/><path d="M295 414 L283 428 L297 466 L313 450 Z" fill="#0e0b14"/><path d="M245 414 L257 428 L243 466 L227 450" fill="none" stroke="#ffd98a" stroke-width="2.6" opacity="0.45"/><path d="M232 428 C214 436 206 450 210 466 L227 468 C223 454 227 445 241 438 Z" fill="#131019"/><path d="M215 468 C215 444 221 424 236 410" fill="none" stroke="#131019" stroke-width="17" stroke-linecap="round"/><circle cx="236" cy="406" r="11" fill="#171320"/><path d="M308 428 C328 440 332 458 326 476" fill="none" stroke="#131019" stroke-width="17" stroke-linecap="round"/><circle cx="325" cy="482" r="11" fill="#171320"/><rect x="300" y="482" width="40" height="30" rx="1" fill="#efe3c6" transform="rotate(14 320 497)"/><g stroke="#9c8a63" stroke-width="1.6" opacity="0.7"><path d="M307 492h24M307 499h19"/></g><path d="M242 414 L250 426" stroke="#c9a24a" stroke-width="6" stroke-linecap="round"/><circle cx="232" cy="388" r="23" fill="url(#knSahneCam)"/><circle cx="232" cy="388" r="23" fill="none" stroke="#e0c07a" stroke-width="4.6"/><circle cx="232" cy="388" r="23" fill="none" stroke="#fff3d6" stroke-width="1.6" opacity="0.6"/><circle cx="232" cy="388" r="4.6" fill="#ff5c5c" opacity="0.85"/><path d="M258 396 L282 396 L282 416 L258 416 Z" fill="#090710"/><ellipse cx="270" cy="352" rx="54" ry="9" fill="#08060e"/><path d="M231 352 C231 328 248 314 270 314 C292 314 309 328 309 352 Z" fill="#131019"/><path d="M250 320 C258 316 282 316 290 320" fill="none" stroke="#20192a" stroke-width="2.4"/><path d="M233 344 C247 338 293 338 307 344 L307 350 C293 344 247 344 233 350 Z" fill="#1c1624"/><path d="M233 348 C247 342 293 342 307 348 L307 353 C293 347 247 347 233 353 Z" fill="#6e2434"/><ellipse cx="270" cy="374" rx="27" ry="29" fill="url(#knSahneYuz)"/><ellipse cx="244" cy="378" rx="4.6" ry="7" fill="#2a2033"/><path d="M248 356 C257 347 279 347 288 355 C275 362 261 362 248 356 Z" fill="#5b4860" opacity="0.45"/><path d="M278 358 C292 366 296 384 290 396 C284 405 276 407 268 405 C282 393 286 374 278 358 Z" fill="#55425c" opacity="0.42"/><path d="M252 400 C262 409 278 409 288 398 C286 410 270 415 258 410 Z" fill="#120d1c" opacity="0.55"/><path d="M216 352 C237 346 303 346 324 352 L324 360 C303 354 237 354 216 360 Z" fill="#0e0a16" opacity="0.85"/><path d="M241 371 C248 364 261 364 267 371 C261 378 248 378 241 371 Z" fill="#170f1f"/><circle cx="252" cy="371.3" r="6" fill="#07050b"/><circle cx="252" cy="371.3" r="3.5" fill="#7d5a2c"/><circle cx="254.6" cy="368.6" r="1.9" fill="#fff2d0"/><path d="M240 369 C248 362 262 362 268 369 L268 371.4 C262 366 248 366 240 371.4 Z" fill="#100b18"/><path d="M243 374.5 C248 379.5 261 379.5 266 373.5" fill="none" stroke="#8a7050" stroke-width="2" opacity="0.55"/><path d="M239 362 C251 354 268 356 278 364" fill="none" stroke="#150f1e" stroke-width="5" stroke-linecap="round"/><path d="M278 370 C283 377 285 386 281 392" fill="none" stroke="#d9b98c" stroke-width="2.6" opacity="0.4"/><path d="M288 390 C292 396 292 402 288 406" fill="none" stroke="#d9b98c" stroke-width="2.4" opacity="0.3"/><g fill="none" stroke="#ffd98a" stroke-linecap="round"><path d="M231 350 C231 328 248 314 270 314" stroke-width="3" opacity="0.5"/><path d="M217 352 C227 348 246 346 258 346" stroke-width="2.4" opacity="0.38"/><path d="M244 374 C244 361 256 353 270 353" stroke-width="2.6" opacity="0.38"/><path d="M232 428 C216 436 208 448 210 462" stroke-width="2.8" opacity="0.42"/><path d="M211 456 C202 492 198 528 197 596" stroke-width="3.2" opacity="0.48"/></g></g><rect x="0" y="640" width="1440" height="260" fill="#15111d"/><rect x="0" y="640" width="1440" height="9" fill="#241c2e"/><g class="kn-lamba"><rect x="150" y="470" width="7" height="172" fill="#2a2539"/><ellipse cx="153" cy="642" rx="34" ry="9" fill="#2a2539"/><path d="M118 470h70l-18-44h-34z" fill="#2f2a3d"/><ellipse cx="153" cy="428" rx="52" ry="34" fill="url(#knLamba)"/></g><g opacity="0.85"><rect x="480" y="604" width="150" height="16" rx="3" fill="#c9b78f"/><rect x="488" y="590" width="146" height="16" rx="3" fill="#d8c9a6"/><rect x="494" y="576" width="140" height="16" rx="3" fill="#bfac82"/><rect x="500" y="562" width="134" height="16" rx="3" fill="#d0c09b"/><rect x="510" y="548" width="124" height="16" rx="3" fill="#e0d2b0"/></g><g class="kn-buhar" opacity="0.7"><ellipse cx="760" cy="642" rx="46" ry="13" fill="#0e0b14"/><path d="M724 604h72v22a14 14 0 0 1-14 14h-44a14 14 0 0 1-14-14z" fill="#e8e2d4"/><path d="M796 610h10a11 11 0 0 1 0 22h-10" fill="none" stroke="#e8e2d4" stroke-width="6"/><path d="M548 590c8-10-6-16 2-26M568 586c8-10-6-16 2-26" fill="none" stroke="#cfc8d8" stroke-width="3" stroke-linecap="round" opacity="0.6"/></g><g class="kn-buyutec" opacity="0.5"><circle cx="1128" cy="700" r="34" fill="none" stroke="#ffb000" stroke-width="7"/><circle cx="1128" cy="700" r="27" fill="#cfefff" opacity="0.1"/><path d="M1154 726l52 46" stroke="#ffb000" stroke-width="10" stroke-linecap="round"/></g></svg>';
  document.body.insertBefore(d, document.body.firstChild);
}
document.addEventListener("DOMContentLoaded", knSahneKur);
