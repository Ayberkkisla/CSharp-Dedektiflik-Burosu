(function (g) {
  'use strict';

  /* Öneri kataloğu.
     insert içindeki § işareti imlecin duracağı yeri belirtir; kaydırma değeri
     buradan hesaplandığı için snippet'ler tek yerden düzenlenir. */
  function entry(name, insert, description) {
    const at = insert.indexOf('§');
    return {
      name,
      insert: at < 0 ? insert : insert.replace('§', ''),
      description,
      back: at < 0 ? 0 : insert.length - at - 1,
    };
  }

  const UNIVERSAL = [
    entry('ToString', 'ToString()', 'Metne çevir'),
    entry('Equals', 'Equals(§)', 'Eşit mi'),
    entry('GetType', 'GetType()', 'Türünü ver'),
  ];

  const MEMBERS = {
    array: [
      entry('Length', 'Length', 'Dizideki eleman sayısı'),
      entry('GetLength', 'GetLength(§)', 'Boyutun uzunluğu'),
      entry('Rank', 'Rank', 'Boyut sayısı'),
    ],
    string: [
      entry('Length', 'Length', 'Metindeki karakter sayısı'),
      entry('Substring', 'Substring(§)', 'Belirli bir bölümü al'),
      entry('ToUpper', 'ToUpper()', 'Büyük harfe çevir'),
      entry('ToLower', 'ToLower()', 'Küçük harfe çevir'),
      entry('Trim', 'Trim()', 'Baştaki ve sondaki boşlukları at'),
      entry('Split', 'Split(§)', 'Parçalara ayır'),
      entry('Replace', 'Replace(§)', 'Parçayı değiştir'),
      entry('Contains', 'Contains(§)', 'İçeriyor mu'),
      entry('StartsWith', 'StartsWith(§)', 'Bununla mı başlıyor'),
      entry('EndsWith', 'EndsWith(§)', 'Bununla mı bitiyor'),
      entry('IndexOf', 'IndexOf(§)', 'Konumunu bul'),
      entry('ToCharArray', 'ToCharArray()', 'Karakter dizisine çevir'),
    ],
    list: [
      entry('Add', 'Add(§)', 'Eleman ekle'),
      entry('Remove', 'Remove(§)', 'Elemanı sil'),
      entry('RemoveAt', 'RemoveAt(§)', 'Sıradaki elemanı sil'),
      entry('Count', 'Count', 'Eleman sayısı'),
      entry('Contains', 'Contains(§)', 'İçeriyor mu'),
      entry('IndexOf', 'IndexOf(§)', 'Konumunu bul'),
      entry('Insert', 'Insert(§)', 'Araya ekle'),
      entry('Clear', 'Clear()', 'Listeyi boşalt'),
      entry('Sort', 'Sort()', 'Sırala'),
    ],
    number: [
      entry('ToString', 'ToString()', 'Metne çevir'),
      entry('CompareTo', 'CompareTo(§)', 'Karşılaştır'),
    ],
    bool: [entry('ToString', 'ToString()', '"True" / "False" metnine çevir')],
    char: [
      entry('ToString', 'ToString()', 'Karakteri metne çevir'),
      entry('CompareTo', 'CompareTo(§)', 'Karşılaştır'),
    ],
  };

  const STATICS = {
    Console: [
      entry('WriteLine', 'WriteLine(§)', 'Ekrana yaz ve satırı bitir'),
      entry('Write', 'Write(§)', 'Ekrana yaz'),
      entry('ReadLine', 'ReadLine()', 'Kullanıcıdan bir satır oku'),
      entry('ReadKey', 'ReadKey(§)', 'Tek tuşa basılmasını bekle'),
      entry('Clear', 'Clear()', 'Konsolu temizle'),
    ],
    Convert: [
      entry('ToInt32', 'ToInt32(§)', 'Tam sayıya çevir'),
      entry('ToInt64', 'ToInt64(§)', 'Büyük tam sayıya çevir'),
      entry('ToDouble', 'ToDouble(§)', 'double sayıya çevir'),
      entry('ToDecimal', 'ToDecimal(§)', 'decimal sayıya çevir'),
      entry('ToString', 'ToString(§)', 'Metne çevir'),
      entry('ToBoolean', 'ToBoolean(§)', 'Doğru/yanlış değere çevir'),
      entry('ToChar', 'ToChar(§)', 'Tek karaktere çevir'),
    ],
    Math: [
      entry('Abs', 'Abs(§)', 'Mutlak değer'),
      entry('Max', 'Max(§)', 'Büyük olanı ver'),
      entry('Min', 'Min(§)', 'Küçük olanı ver'),
      entry('Round', 'Round(§)', 'En yakın tam sayıya yuvarla'),
      entry('Floor', 'Floor(§)', 'Aşağı yuvarla'),
      entry('Ceiling', 'Ceiling(§)', 'Yukarı yuvarla'),
      entry('Sqrt', 'Sqrt(§)', 'Karekök'),
      entry('Pow', 'Pow(§)', 'Kuvvet'),
      entry('PI', 'PI', 'Pi sayısı'),
    ],
    Array: [
      entry('Sort', 'Sort(§)', 'Diziyi sırala'),
      entry('Reverse', 'Reverse(§)', 'Diziyi ters çevir'),
      entry('IndexOf', 'IndexOf(§)', 'Elemanın konumunu bul'),
      entry('Clear', 'Clear(§)', 'Elemanları temizle'),
      entry('Resize', 'Resize(§)', 'Dizinin boyutunu değiştir'),
    ],
    string: [
      entry('Join', 'Join(§)', 'Elemanları aralarına ayırıcı koyarak birleştir'),
      entry('Concat', 'Concat(§)', 'Parçaları birleştir'),
      entry('Format', 'Format(§)', 'Şablonla biçimlendir'),
      entry('IsNullOrEmpty', 'IsNullOrEmpty(§)', 'Boş ya da null mı'),
      entry('IsNullOrWhiteSpace', 'IsNullOrWhiteSpace(§)', 'Yalnızca boşluklardan mı oluşuyor'),
    ],
    int: [
      entry('Parse', 'Parse(§)', 'Metni tam sayıya çevir'),
      entry('TryParse', 'TryParse(§)', 'Güvenli çevir; true/false döner'),
      entry('MaxValue', 'MaxValue', 'Türün en büyük değeri'),
      entry('MinValue', 'MinValue', 'Türün en küçük değeri'),
    ],
    long: [
      entry('Parse', 'Parse(§)', 'Metni tam sayıya çevir'),
      entry('TryParse', 'TryParse(§)', 'Güvenli çevir; true/false döner'),
      entry('MaxValue', 'MaxValue', 'Türün en büyük değeri'),
      entry('MinValue', 'MinValue', 'Türün en küçük değeri'),
    ],
    double: [
      entry('Parse', 'Parse(§)', 'Metni sayıya çevir'),
      entry('TryParse', 'TryParse(§)', 'Güvenli çevir; true/false döner'),
      entry('MaxValue', 'MaxValue', 'Türün en büyük değeri'),
      entry('MinValue', 'MinValue', 'Türün en küçük değeri'),
    ],
    decimal: [
      entry('Parse', 'Parse(§)', 'Metni sayıya çevir'),
      entry('TryParse', 'TryParse(§)', 'Güvenli çevir; true/false döner'),
      entry('MaxValue', 'MaxValue', 'Türün en büyük değeri'),
      entry('MinValue', 'MinValue', 'Türün en küçük değeri'),
    ],
    bool: [entry('Parse', 'Parse(§)', 'Metni doğru/yanlış değere çevir')],
    char: [
      entry('IsDigit', 'IsDigit(§)', 'Rakam mı'),
      entry('IsLetter', 'IsLetter(§)', 'Harf mi'),
      entry('ToUpper', 'ToUpper(§)', 'Büyük harfe çevir'),
      entry('ToLower', 'ToLower(§)', 'Küçük harfe çevir'),
    ],
  };

  /* Statik sınıf adları ve tür adlarının küçük harfli karşılıkları. */
  const ALIAS = {
    Console: 'Console',
    Convert: 'Convert',
    Math: 'Math',
    Array: 'Array',
    string: 'string',
    String: 'string',
    int: 'int',
    Int32: 'int',
    long: 'long',
    Int64: 'long',
    double: 'double',
    Double: 'double',
    decimal: 'decimal',
    Decimal: 'decimal',
    bool: 'bool',
    Boolean: 'bool',
    char: 'char',
    Char: 'char',
  };

  /* Metot çağrısından sonra nokta yazılırsa: Console.ReadLine(). → metin. */
  const RETURNS = {
    ReadLine: 'string',
    ReadKey: 'char',
    ToString: 'string',
    ToUpper: 'string',
    ToLower: 'string',
    Trim: 'string',
    Substring: 'string',
    Replace: 'string',
    Concat: 'string',
    Format: 'string',
    Join: 'string',
    Split: 'array',
    ToCharArray: 'array',
  };

  /* Türü tanınamayan değişkende gösterilen genel üyeler: en sık gerekenler
     önde olur, böylece öneri listesi hiçbir durumda boş kalmaz. */
  const COMMON_ORDER = [
    'Length',
    'Count',
    'ToString',
    'Add',
    'Remove',
    'Substring',
    'ToUpper',
    'ToLower',
    'Trim',
    'Contains',
    'Split',
    'Replace',
    'IndexOf',
    'Sort',
    'Clear',
    'GetLength',
    'Rank',
    'StartsWith',
    'EndsWith',
    'CompareTo',
    'Equals',
    'GetType',
    'ToCharArray',
    'RemoveAt',
    'Insert',
  ];
  const COMMON = (() => {
    const known = new Map();
    for (const list of Object.values(MEMBERS)) {
      for (const item of list) if (!known.has(item.name)) known.set(item.name, item);
    }
    for (const item of UNIVERSAL) if (!known.has(item.name)) known.set(item.name, item);
    return COMMON_ORDER.filter((name) => known.has(name)).map((name) => {
      const item = known.get(name);
      return { name: item.name, insert: item.insert, description: item.description + ' · tahminî', back: item.back };
    });
  })();

  /* Anahtar kelimeler ve hazır kalıplar; her editörde aynı liste önerilir. */
  const KEYWORDS = [
    entry('for', 'for (int i = 0; i < §; i++) {\n    \n}', 'Sayaçlı tekrar'),
    entry('foreach', 'foreach (var eleman in §) {\n    \n}', 'Koleksiyondaki her eleman için tekrar'),
    entry('while', 'while (§) {\n    \n}', 'Koşul doğruyken tekrar et'),
    entry('do', 'do {\n    \n} while (§);', 'Önce çalıştır, sonra koşula bak'),
    entry('if', 'if (§) {\n    \n}', 'Koşula göre çalıştır'),
    entry('else', 'else {\n    \n}', 'Diğer durum'),
    entry('else if', 'else if (§) {\n    \n}', 'İlk koşul tutmazsa yeni koşula bak'),
    entry('switch', 'switch (§) {\n    case :\n        break;\n    default:\n        break;\n}', 'Değere göre yol seç'),
    entry('case', 'case §:', 'Eşleşecek değer'),
    entry('break', 'break;', 'Döngüden ya da switch içinden çık'),
    entry('continue', 'continue;', 'Bu turun kalanını atla'),
    entry('return', 'return §;', 'Değeri geri döndür'),
    entry('new', 'new §', 'Yeni dizi ya da nesne oluştur'),
    entry('var', 'var §', 'Türü kendiliğinden çıkarılsın'),
    entry('int', 'int §', 'Tam sayı değişken'),
    entry('long', 'long §', 'Büyük tam sayı değişken'),
    entry('double', 'double §', 'Ondalıklı değişken'),
    entry('decimal', 'decimal §', 'Para gibi hassas ondalıklı değişken'),
    entry('bool', 'bool §', 'Doğru/yanlış değişken'),
    entry('char', 'char §', 'Tek karakter'),
    entry('string', 'string §', 'Metin değişken'),
    entry('void', 'void §', 'Değer döndürmeyen metot'),
    entry('static', 'static §', 'Sınıfa bağlı üye'),
    entry('class', 'class §', 'Sınıf tanımı'),
    entry('using', 'using §;', 'Kütüphane kullan'),
    entry('Console', 'Console.§', 'Ekrana yaz, kullanıcıdan oku'),
    entry('Convert', 'Convert.§', 'Tür dönüşümü'),
    entry('Math', 'Math.§', 'Matematik işlemleri'),
    entry('Array', 'Array.§', 'Dizi işlemleri'),
    entry('List', 'List<int> § = new List<int>();', 'Esnek koleksiyon'),
  ];

  const LIMIT = 10;

  /* Üniteye göre öneri kapsamı: henüz öğretilmeyen öğe o ünitede gösterilmez.
     u3 tam katalogdur. Listede olmayan ad, o ünitede gizlenir. */
  const SCOPE_U1 = [
    'int',
    'long',
    'double',
    'decimal',
    'bool',
    'char',
    'string',
    'var',
    'if',
    'else',
    'Console',
    'Convert',
    'Length',
    'ToUpper',
    'ToLower',
    'Trim',
    'IsNullOrEmpty',
    'IsNullOrWhiteSpace',
    'ToString',
    'Equals',
    'GetType',
    'CompareTo',
    'WriteLine',
    'Write',
    'ReadLine',
    'ReadKey',
    'Clear',
    'ToInt32',
    'ToInt64',
    'ToDouble',
    'ToDecimal',
    'ToBoolean',
    'ToChar',
  ];
  const SCOPE_U2 = SCOPE_U1.concat([
    'for',
    'foreach',
    'while',
    'do',
    'else if',
    'switch',
    'case',
    'break',
    'continue',
    'Substring',
    'Split',
    'Replace',
    'Contains',
    'StartsWith',
    'EndsWith',
    'IndexOf',
    'ToCharArray',
    'Parse',
    'TryParse',
  ]);
  const SCOPES = { u1: new Set(SCOPE_U1), u2: new Set(SCOPE_U2), u3: null };
  const allowedIn = (scope, name) => {
    const set = SCOPES[scope];
    return !set || set.has(name);
  };

  function normalizeType(type) {
    if (!type) return null;
    const t = String(type).toLowerCase().trim();
    if (!t) return null;
    if (t.includes('[]') || t.includes('dizi')) return 'array';
    if (t.includes('list')) return 'list';
    if (t.includes('string') || t.includes('metin')) return 'string';
    if (t.includes('bool')) return 'bool';
    if (t.includes('char') || t.includes('karakter')) return 'char';
    if (/(int|long|double|decimal|float|sayı|sayi)/.test(t)) return 'number';
    return null;
  }

  /* var x = ... satırındaki sağ taraftan tür tahmini. */
  function inferType(right) {
    const t = String(right).trim();
    if (/^new\s+[\w<>.]+\s*\[/.test(t)) return 'array';
    if (/^new\s+List\s*</.test(t)) return 'list';
    if (/^"/.test(t)) return 'string';
    if (/^'.'/.test(t)) return 'char';
    if (/^(true|false)$/i.test(t)) return 'bool';
    if (/^[-+]?[\d.]+[mMfFdD]?$/.test(t)) return 'number';
    return null;
  }

  const escapeName = (name) => name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

  /* Değeri kodda nasıl kullanıldığına bakarak tür tahmini (bildirim yoksa). */
  function inferFromUsage(source, name) {
    const n = escapeName(name);
    if (new RegExp('\\b' + n + '\\s*\\[').test(source)) return 'array';
    if (new RegExp('\\b' + n + '\\.Add\\s*\\(').test(source)) return 'list';
    if (new RegExp('\\b' + n + '\\.(ToUpper|ToLower|Trim|Substring|Split|StartsWith|EndsWith)\\s*\\(').test(source)) return 'string';
    return null;
  }

  /* Görev girdileri ve kod içindeki bildirimlerden isim → tür haritası. */
  function declaredTypes(source, variables) {
    const types = new Map();
    for (const variable of variables || []) {
      if (!Array.isArray(variable) || !variable[0]) continue;
      const type = normalizeType(variable[2]);
      if (type) types.set(variable[0], type);
    }
    let m;
    const arrays = /\b(int|long|double|decimal|bool|char|string|float)\s*\[[,\s]*\]\s+([A-Za-z_]\w*)/g;
    while ((m = arrays.exec(source))) types.set(m[2], 'array');
    const lists = /\bList\s*<[^>]*>\s+([A-Za-z_]\w*)/g;
    while ((m = lists.exec(source))) types.set(m[1], 'list');
    const scalars = /\b(string|int|long|double|decimal|bool|char|float)\s+([A-Za-z_]\w*(?:\s*,\s*[A-Za-z_]\w*)*)/g;
    while ((m = scalars.exec(source))) {
      const type = normalizeType(m[1]);
      for (const name of m[2].split(',')) {
        const clean = name.trim();
        if (clean && type) types.set(clean, type);
      }
    }
    const inferred = /\bvar\s+([A-Za-z_]\w*)\s*=\s*([^;]+);/g;
    while ((m = inferred.exec(source))) {
      const type = inferType(m[2]);
      if (type) types.set(m[1], type);
    }
    return types;
  }

  /* İçinde bulunulan konum yorum ya da metin içindeyse öneri verilmez. */
  function insideStringOrComment(before) {
    let inString = false;
    let inChar = false;
    let lineComment = false;
    let blockComment = false;
    for (let i = 0; i < before.length; i++) {
      const c = before[i];
      const next = before[i + 1];
      if (lineComment) {
        if (c === '\n') lineComment = false;
        continue;
      }
      if (blockComment) {
        if (c === '*' && next === '/') {
          blockComment = false;
          i++;
        }
        continue;
      }
      if (inString || inChar) {
        if (c === '\\') {
          i++;
          continue;
        }
        if (inString && c === '"') inString = false;
        else if (inChar && c === "'") inChar = false;
        continue;
      }
      if (c === '/' && next === '/') {
        lineComment = true;
        i++;
      } else if (c === '/' && next === '*') {
        blockComment = true;
        i++;
      } else if (c === '"') inString = true;
      else if (c === "'") inChar = true;
    }
    return inString || inChar || lineComment || blockComment;
  }

  function splitContext(before) {
    const match = before.match(/(?:(\b[A-Za-z_]\w*)\s*\.\s*)?([A-Za-z_]\w*)?$/);
    const owner = match?.[1] || '';
    const prefix = match?.[2] || '';
    let methodType = '';
    if (!owner) {
      const call = before.match(/([A-Za-z_]\w*)\s*\(\s*[^()]*\)\s*\.\s*([A-Za-z_]\w*)?$/);
      if (call) methodType = RETURNS[call[1]] || '';
    }
    return { owner, prefix, methodType, matched: !!match };
  }

  function memberPool(owner, source, types, methodType, scope) {
    const staticName = ALIAS[owner];
    if (staticName) return (STATICS[staticName] || []).filter((item) => allowedIn(scope, item.name));
    let type = methodType || types.get(owner) || inferFromUsage(source, owner);
    if (type === 'int' || type === 'long' || type === 'double' || type === 'decimal' || type === 'float') type = 'number';
    const pool = type ? (MEMBERS[type] || []).concat(UNIVERSAL) : COMMON.slice();
    return pool.filter((item) => allowedIn(scope, item.name));
  }

  /* Yalnızca kullanıcının kendi kodunda tanımladığı değişkenler önerilir;
     görevin hazır verdiği değişken adları listede gösterilmez. */
  function keywordPool(types, scope) {
    const pool = KEYWORDS.filter((item) => allowedIn(scope, item.name));
    const seen = new Set(pool.map((item) => item.name.toLowerCase()));
    const add = (name, label) => {
      if (!name || !/^[A-Za-z_]\w*$/.test(name) || seen.has(name.toLowerCase())) return;
      seen.add(name.toLowerCase());
      pool.push(entry(name, name, label || 'Kodundaki değişken'));
    };
    for (const name of types.keys()) add(name, 'Kodundaki değişken');
    for (const name of Object.keys(ALIAS)) {
      if (!seen.has(name.toLowerCase()) && allowedIn(scope, name)) add(name, 'Hazır isim');
    }
    return pool;
  }

  function filterEntries(pool, prefix, limit) {
    const wanted = prefix.toLowerCase();
    const seen = new Set();
    const result = [];
    for (const item of pool) {
      if (item.insert === prefix) continue;
      if (!item.name.toLowerCase().startsWith(wanted)) continue;
      if (seen.has(item.name)) continue;
      seen.add(item.name);
      result.push(item);
      if (result.length >= limit) break;
    }
    return result;
  }

  /* Test edilebilir çekirdek: DOM'a dokunmaz. */
  function suggest(options) {
    const before = String(options?.before ?? '');
    const source = String(options?.source ?? '');
    const variables = options?.variables || [];
    const code = typeof options?.code === 'string' ? options.code : source;
    const limit = options?.limit || LIMIT;
    const force = !!options?.force;
    const scope = options?.scope || '';
    if (insideStringOrComment(before)) return { entries: [], prefix: '' };
    const { owner, prefix, methodType, matched } = splitContext(before);
    if (!matched || (!owner && !prefix && !methodType && !force)) return { entries: [], prefix };
    const types = declaredTypes(source, variables);
    const pool = owner
      ? memberPool(owner, source, types, '', scope)
      : methodType
        ? memberPool('', source, types, methodType, scope)
        : keywordPool(declaredTypes(code, []), scope);
    return { entries: filterEntries(pool, prefix, limit), prefix };
  }

  g.Unit1CodeComplete = {
    suggest,
    mount(editor, getVariables, options) {
      const scope = options?.scope || '';
      const wrap = document.createElement('div');
      wrap.className = 'b7-editor-wrap';
      editor.before(wrap);
      wrap.append(editor);
      const hint = document.createElement('p');
      hint.className = 'b7-complete-hint';
      hint.textContent = 'Kod önerisi: yazmaya başla, Tab veya Enter ile seç. ↑ ↓ ile gez · Esc ile kapat · Ctrl + Boşluk ile aç.';
      wrap.after(hint);
      const menu = document.createElement('div');
      menu.id = editor.id + '-completions';
      menu.className = 'b7-completions';
      menu.setAttribute('role', 'listbox');
      menu.setAttribute('aria-label', 'Kod önerileri');
      menu.hidden = true;
      wrap.append(menu);
      editor.setAttribute('aria-controls', menu.id);
      editor.setAttribute('aria-autocomplete', 'list');
      editor.setAttribute('aria-expanded', 'false');
      let entries = [];
      let selected = 0;
      let start = 0;
      let end = 0;
      let enabled = true;
      let pageText = '';
      let pageAt = 0;

      function hide() {
        menu.hidden = true;
        entries = [];
        editor.setAttribute('aria-expanded', 'false');
        editor.removeAttribute('aria-activedescendant');
      }

      function paint() {
        menu.replaceChildren();
        entries.forEach((item, i) => {
          const button = document.createElement('button');
          button.type = 'button';
          button.tabIndex = -1;
          button.id = menu.id + '-' + i;
          button.setAttribute('role', 'option');
          button.setAttribute('aria-selected', String(i === selected));
          const name = document.createElement('strong');
          name.textContent = item.name;
          const detail = document.createElement('span');
          detail.textContent = item.description;
          button.append(name, detail);
          button.onmousedown = (e) => e.preventDefault();
          button.onclick = () => accept(i);
          menu.append(button);
        });
        menu.hidden = false;
        editor.setAttribute('aria-expanded', 'true');
        editor.setAttribute('aria-activedescendant', menu.id + '-' + selected);
        menu.children[selected]?.scrollIntoView({ block: 'nearest' });
      }

      function refresh(force = false) {
        if (!enabled) {
          hide();
          return;
        }
        if (editor.selectionStart !== editor.selectionEnd) {
          hide();
          return;
        }
        const before = editor.value.slice(0, editor.selectionStart);
        const variables = typeof getVariables === 'function' ? getVariables() : [];
        /* Verilen hazır satırlar editörün dışında gösterilse bile türleri
           tanıyabilmek için sayfadaki metin ara sıra taranır. */
        const now = Date.now();
        if (now - pageAt > 2000) {
          pageText = typeof document === 'undefined' ? '' : document.body.textContent || '';
          pageAt = now;
        }
        const result = suggest({
          before,
          code: editor.value,
          source: editor.value + '\n' + pageText,
          variables,
          force,
          limit: LIMIT,
          scope,
        });
        if (!result.entries.length) {
          hide();
          return;
        }
        end = editor.selectionStart;
        start = end - result.prefix.length;
        entries = result.entries;
        selected = 0;
        paint();
      }

      function accept(index = selected) {
        const item = entries[index];
        if (!item) return;
        let text = item.insert;
        let back = item.back;
        if (editor.value.slice(end).trimStart().startsWith('(') && text.endsWith('()')) {
          text = text.slice(0, -2);
          back = 0;
        }
        editor.setRangeText(text, start, end, 'end');
        if (back) editor.setSelectionRange(editor.selectionStart - back, editor.selectionStart - back);
        hide();
        editor.focus({ preventScroll: true });
        editor.dispatchEvent(new Event('input', { bubbles: true }));
      }

      function handleKeydown(e) {
        if (!enabled) return false;
        if (e.ctrlKey && e.code === 'Space') {
          e.preventDefault();
          e.stopPropagation();
          refresh(true);
          return true;
        }
        if (menu.hidden) return false;
        if (['ArrowDown', 'ArrowUp', 'Enter', 'Tab', 'Escape'].includes(e.key) && !e.ctrlKey && !e.metaKey) {
          e.preventDefault();
          e.stopPropagation();
          if (e.key === 'Escape') hide();
          else if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            selected = (selected + (e.key === 'ArrowDown' ? 1 : -1) + entries.length) % entries.length;
            paint();
          } else accept();
          return true;
        }
        return false;
      }

      editor.addEventListener('input', () => refresh());
      editor.addEventListener('click', () => refresh());
      editor.addEventListener('blur', hide);
      return {
        handleKeydown,
        hide,
        setEnabled(value) {
          enabled = !!value;
          hint.hidden = !enabled;
          if (!enabled) hide();
        },
      };
    },
  };
})(typeof window !== 'undefined' ? window : globalThis);
