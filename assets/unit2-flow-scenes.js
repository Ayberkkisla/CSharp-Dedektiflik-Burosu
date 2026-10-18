window.Unit2FlowScenes=[
  [
    {
      "caption": "if, bir sorunun cevabına göre yol seçer. Buradaki soru: sayı 0’dan büyük mü?",
      "line": "int sayi = Convert.ToInt32(Console.ReadLine());",
      "vars": {
        "sayi": "3"
      },
      "phase": 0,
      "condition": "sayi > 0",
      "yes": "if: Pozitif",
      "no": "else: Pozitif değil",
      "active": "",
      "output": []
    },
    {
      "caption": "Şimdi sorumuz şu: sayi > 0. Parantezin içi, doğru veya yanlış cevabı veren koşuldur.",
      "line": "if (sayi > 0)",
      "vars": {
        "sayi": "3"
      },
      "phase": 1,
      "condition": "sayi > 0",
      "yes": "if: Pozitif",
      "no": "else: Pozitif değil",
      "active": "",
      "output": []
    },
    {
      "caption": "3 > 0. Bu koşul doğru (true). Bu yüzden if yoluna gidiyoruz.",
      "line": "if (sayi > 0)",
      "vars": {
        "sayi": "3"
      },
      "phase": 2,
      "condition": "sayi > 0",
      "yes": "if: Pozitif",
      "no": "else: Pozitif değil",
      "active": "yes",
      "output": []
    },
    {
      "caption": "Yalnızca if içindeki komut çalıştı. Ekrana Pozitif yazıldı.",
      "line": "Console.WriteLine(\"Pozitif\");",
      "vars": {
        "sayi": "3"
      },
      "phase": 3,
      "condition": "sayi > 0",
      "yes": "if: Pozitif",
      "no": "else: Pozitif değil",
      "active": "yes",
      "output": [
        "Pozitif"
      ]
    },
    {
      "caption": "Şimdi farklı bir girdi deneyelim: -2. Kod aynı; sadece kullanıcının verdiği değer değişti.",
      "line": "int sayi = Convert.ToInt32(Console.ReadLine());",
      "vars": {
        "sayi": "-2"
      },
      "phase": 0,
      "condition": "sayi > 0",
      "yes": "if: Pozitif",
      "no": "else: Pozitif değil",
      "active": "",
      "output": []
    },
    {
      "caption": "-2 > 0. Koşul bu kez yanlış (false).",
      "line": "if (sayi > 0)",
      "vars": {
        "sayi": "-2"
      },
      "phase": 1,
      "condition": "sayi > 0",
      "yes": "if: Pozitif",
      "no": "else: Pozitif değil",
      "active": "",
      "output": []
    },
    {
      "caption": "Bu yüzden bu kez else yolu seçildi. Öteki yol çalışmaz.",
      "line": "} else {",
      "vars": {
        "sayi": "-2"
      },
      "phase": 2,
      "condition": "sayi > 0",
      "yes": "if: Pozitif",
      "no": "else: Pozitif değil",
      "active": "no",
      "output": []
    },
    {
      "caption": "Ekrana Pozitif değil yazıldı. Aynı kod, girdiye göre iki yoldan birini seçti.",
      "line": "Console.WriteLine(\"Pozitif değil\");",
      "vars": {
        "sayi": "-2"
      },
      "phase": 3,
      "condition": "sayi > 0",
      "yes": "if: Pozitif",
      "no": "else: Pozitif değil",
      "active": "no",
      "output": [
        "Pozitif değil"
      ]
    }
  ],
  [
    {
      "caption": "Bu kez sınır değeri de kabul ediyoruz. >= işareti büyük veya eşit anlamına gelir.",
      "line": "int yas = Convert.ToInt32(Console.ReadLine());",
      "vars": {
        "yas": "18"
      },
      "phase": 0,
      "condition": "yas >= 18",
      "yes": "if: Girebilir",
      "no": "else: Giremez",
      "active": "",
      "output": []
    },
    {
      "caption": "Şimdi sorumuz şu: yas >= 18. Parantezin içi, doğru veya yanlış cevabı veren koşuldur.",
      "line": "if (yas >= 18)",
      "vars": {
        "yas": "18"
      },
      "phase": 1,
      "condition": "yas >= 18",
      "yes": "if: Girebilir",
      "no": "else: Giremez",
      "active": "",
      "output": []
    },
    {
      "caption": "18 >= 18. Bu koşul doğru (true). Bu yüzden if yoluna gidiyoruz.",
      "line": "if (yas >= 18)",
      "vars": {
        "yas": "18"
      },
      "phase": 2,
      "condition": "yas >= 18",
      "yes": "if: Girebilir",
      "no": "else: Giremez",
      "active": "yes",
      "output": []
    },
    {
      "caption": "Yalnızca if içindeki komut çalıştı. Ekrana Girebilir yazıldı.",
      "line": "Console.WriteLine(\"Girebilir\");",
      "vars": {
        "yas": "18"
      },
      "phase": 3,
      "condition": "yas >= 18",
      "yes": "if: Girebilir",
      "no": "else: Giremez",
      "active": "yes",
      "output": [
        "Girebilir"
      ]
    },
    {
      "caption": "Şimdi farklı bir girdi deneyelim: 16. Kod aynı; sadece kullanıcının verdiği değer değişti.",
      "line": "int yas = Convert.ToInt32(Console.ReadLine());",
      "vars": {
        "yas": "16"
      },
      "phase": 0,
      "condition": "yas >= 18",
      "yes": "if: Girebilir",
      "no": "else: Giremez",
      "active": "",
      "output": []
    },
    {
      "caption": "16 >= 18. Koşul bu kez yanlış (false).",
      "line": "if (yas >= 18)",
      "vars": {
        "yas": "16"
      },
      "phase": 1,
      "condition": "yas >= 18",
      "yes": "if: Girebilir",
      "no": "else: Giremez",
      "active": "",
      "output": []
    },
    {
      "caption": "Bu yüzden bu kez else yolu seçildi. Öteki yol çalışmaz.",
      "line": "} else {",
      "vars": {
        "yas": "16"
      },
      "phase": 2,
      "condition": "yas >= 18",
      "yes": "if: Girebilir",
      "no": "else: Giremez",
      "active": "no",
      "output": []
    },
    {
      "caption": "Ekrana Giremez yazıldı. Aynı kod, girdiye göre iki yoldan birini seçti.",
      "line": "Console.WriteLine(\"Giremez\");",
      "vars": {
        "yas": "16"
      },
      "phase": 3,
      "condition": "yas >= 18",
      "yes": "if: Girebilir",
      "no": "else: Giremez",
      "active": "no",
      "output": [
        "Giremez"
      ]
    }
  ],
  [
    {
      "caption": "Koşul yanlış olduğunda da bir yol var: else. İki yol aynı anda çalışmaz.",
      "line": "int puan = Convert.ToInt32(Console.ReadLine());",
      "vars": {
        "puan": "45"
      },
      "phase": 0,
      "condition": "puan >= 50",
      "yes": "if: Geçti",
      "no": "else: Kaldı",
      "active": "",
      "output": []
    },
    {
      "caption": "Şimdi sorumuz şu: puan >= 50. Parantezin içi, doğru veya yanlış cevabı veren koşuldur.",
      "line": "if (puan >= 50)",
      "vars": {
        "puan": "45"
      },
      "phase": 1,
      "condition": "puan >= 50",
      "yes": "if: Geçti",
      "no": "else: Kaldı",
      "active": "",
      "output": []
    },
    {
      "caption": "45 >= 50. Bu koşul yanlış (false). Bu yüzden else yoluna gidiyoruz.",
      "line": "if (puan >= 50)",
      "vars": {
        "puan": "45"
      },
      "phase": 2,
      "condition": "puan >= 50",
      "yes": "if: Geçti",
      "no": "else: Kaldı",
      "active": "no",
      "output": []
    },
    {
      "caption": "Yalnızca else içindeki komut çalıştı. Ekrana Kaldı yazıldı.",
      "line": "Console.WriteLine(\"Kaldı\");",
      "vars": {
        "puan": "45"
      },
      "phase": 3,
      "condition": "puan >= 50",
      "yes": "if: Geçti",
      "no": "else: Kaldı",
      "active": "no",
      "output": [
        "Kaldı"
      ]
    },
    {
      "caption": "Şimdi farklı bir girdi deneyelim: 50. Kod aynı; sadece kullanıcının verdiği değer değişti.",
      "line": "int puan = Convert.ToInt32(Console.ReadLine());",
      "vars": {
        "puan": "50"
      },
      "phase": 0,
      "condition": "puan >= 50",
      "yes": "if: Geçti",
      "no": "else: Kaldı",
      "active": "",
      "output": []
    },
    {
      "caption": "50 >= 50. Koşul bu kez doğru (true).",
      "line": "if (puan >= 50)",
      "vars": {
        "puan": "50"
      },
      "phase": 1,
      "condition": "puan >= 50",
      "yes": "if: Geçti",
      "no": "else: Kaldı",
      "active": "",
      "output": []
    },
    {
      "caption": "Bu yüzden bu kez if yolu seçildi. Öteki yol çalışmaz.",
      "line": "if (puan >= 50) {",
      "vars": {
        "puan": "50"
      },
      "phase": 2,
      "condition": "puan >= 50",
      "yes": "if: Geçti",
      "no": "else: Kaldı",
      "active": "yes",
      "output": []
    },
    {
      "caption": "Ekrana Geçti yazıldı. Aynı kod, girdiye göre iki yoldan birini seçti.",
      "line": "Console.WriteLine(\"Geçti\");",
      "vars": {
        "puan": "50"
      },
      "phase": 3,
      "condition": "puan >= 50",
      "yes": "if: Geçti",
      "no": "else: Kaldı",
      "active": "yes",
      "output": [
        "Geçti"
      ]
    }
  ],
  [
    {
      "caption": "== iki değerin eşit olup olmadığını kontrol eder. Burada kutuda hiç delil var mı diye bakıyoruz.",
      "line": "int adet = Convert.ToInt32(Console.ReadLine());",
      "vars": {
        "adet": "0"
      },
      "phase": 0,
      "condition": "adet == 0",
      "yes": "if: Boş",
      "no": "else: Dolu",
      "active": "",
      "output": []
    },
    {
      "caption": "Şimdi sorumuz şu: adet == 0. Parantezin içi, doğru veya yanlış cevabı veren koşuldur.",
      "line": "if (adet == 0)",
      "vars": {
        "adet": "0"
      },
      "phase": 1,
      "condition": "adet == 0",
      "yes": "if: Boş",
      "no": "else: Dolu",
      "active": "",
      "output": []
    },
    {
      "caption": "0 == 0. Bu koşul doğru (true). Bu yüzden if yoluna gidiyoruz.",
      "line": "if (adet == 0)",
      "vars": {
        "adet": "0"
      },
      "phase": 2,
      "condition": "adet == 0",
      "yes": "if: Boş",
      "no": "else: Dolu",
      "active": "yes",
      "output": []
    },
    {
      "caption": "Yalnızca if içindeki komut çalıştı. Ekrana Boş yazıldı.",
      "line": "Console.WriteLine(\"Boş\");",
      "vars": {
        "adet": "0"
      },
      "phase": 3,
      "condition": "adet == 0",
      "yes": "if: Boş",
      "no": "else: Dolu",
      "active": "yes",
      "output": [
        "Boş"
      ]
    },
    {
      "caption": "Şimdi farklı bir girdi deneyelim: 4. Kod aynı; sadece kullanıcının verdiği değer değişti.",
      "line": "int adet = Convert.ToInt32(Console.ReadLine());",
      "vars": {
        "adet": "4"
      },
      "phase": 0,
      "condition": "adet == 0",
      "yes": "if: Boş",
      "no": "else: Dolu",
      "active": "",
      "output": []
    },
    {
      "caption": "4 == 0. Koşul bu kez yanlış (false).",
      "line": "if (adet == 0)",
      "vars": {
        "adet": "4"
      },
      "phase": 1,
      "condition": "adet == 0",
      "yes": "if: Boş",
      "no": "else: Dolu",
      "active": "",
      "output": []
    },
    {
      "caption": "Bu yüzden bu kez else yolu seçildi. Öteki yol çalışmaz.",
      "line": "} else {",
      "vars": {
        "adet": "4"
      },
      "phase": 2,
      "condition": "adet == 0",
      "yes": "if: Boş",
      "no": "else: Dolu",
      "active": "no",
      "output": []
    },
    {
      "caption": "Ekrana Dolu yazıldı. Aynı kod, girdiye göre iki yoldan birini seçti.",
      "line": "Console.WriteLine(\"Dolu\");",
      "vars": {
        "adet": "4"
      },
      "phase": 3,
      "condition": "adet == 0",
      "yes": "if: Boş",
      "no": "else: Dolu",
      "active": "no",
      "output": [
        "Dolu"
      ]
    }
  ],
  [
    {
      "caption": "<=, küçük veya eşit anlamına gelir. Eksi sayılar 0’dan küçüktür.",
      "line": "int sicaklik = Convert.ToInt32(Console.ReadLine());",
      "vars": {
        "sicaklik": "-3"
      },
      "phase": 0,
      "condition": "sicaklik <= 0",
      "yes": "if: Donabilir",
      "no": "else: Donmaz",
      "active": "",
      "output": []
    },
    {
      "caption": "Şimdi sorumuz şu: sicaklik <= 0. Parantezin içi, doğru veya yanlış cevabı veren koşuldur.",
      "line": "if (sicaklik <= 0)",
      "vars": {
        "sicaklik": "-3"
      },
      "phase": 1,
      "condition": "sicaklik <= 0",
      "yes": "if: Donabilir",
      "no": "else: Donmaz",
      "active": "",
      "output": []
    },
    {
      "caption": "-3 <= 0. Bu koşul doğru (true). Bu yüzden if yoluna gidiyoruz.",
      "line": "if (sicaklik <= 0)",
      "vars": {
        "sicaklik": "-3"
      },
      "phase": 2,
      "condition": "sicaklik <= 0",
      "yes": "if: Donabilir",
      "no": "else: Donmaz",
      "active": "yes",
      "output": []
    },
    {
      "caption": "Yalnızca if içindeki komut çalıştı. Ekrana Donabilir yazıldı.",
      "line": "Console.WriteLine(\"Donabilir\");",
      "vars": {
        "sicaklik": "-3"
      },
      "phase": 3,
      "condition": "sicaklik <= 0",
      "yes": "if: Donabilir",
      "no": "else: Donmaz",
      "active": "yes",
      "output": [
        "Donabilir"
      ]
    },
    {
      "caption": "Şimdi farklı bir girdi deneyelim: 5. Kod aynı; sadece kullanıcının verdiği değer değişti.",
      "line": "int sicaklik = Convert.ToInt32(Console.ReadLine());",
      "vars": {
        "sicaklik": "5"
      },
      "phase": 0,
      "condition": "sicaklik <= 0",
      "yes": "if: Donabilir",
      "no": "else: Donmaz",
      "active": "",
      "output": []
    },
    {
      "caption": "5 <= 0. Koşul bu kez yanlış (false).",
      "line": "if (sicaklik <= 0)",
      "vars": {
        "sicaklik": "5"
      },
      "phase": 1,
      "condition": "sicaklik <= 0",
      "yes": "if: Donabilir",
      "no": "else: Donmaz",
      "active": "",
      "output": []
    },
    {
      "caption": "Bu yüzden bu kez else yolu seçildi. Öteki yol çalışmaz.",
      "line": "} else {",
      "vars": {
        "sicaklik": "5"
      },
      "phase": 2,
      "condition": "sicaklik <= 0",
      "yes": "if: Donabilir",
      "no": "else: Donmaz",
      "active": "no",
      "output": []
    },
    {
      "caption": "Ekrana Donmaz yazıldı. Aynı kod, girdiye göre iki yoldan birini seçti.",
      "line": "Console.WriteLine(\"Donmaz\");",
      "vars": {
        "sicaklik": "5"
      },
      "phase": 3,
      "condition": "sicaklik <= 0",
      "yes": "if: Donabilir",
      "no": "else: Donmaz",
      "active": "no",
      "output": [
        "Donmaz"
      ]
    }
  ],
  [
    {
      "caption": "Metinleri de == ile karşılaştırabiliriz. Değişken tırnaksız, karşılaştırdığımız sabit metin tırnak içinde yazılır.",
      "line": "string sifre = Console.ReadLine();",
      "vars": {
        "sifre": "mavi"
      },
      "phase": 0,
      "condition": "sifre == \"mavi\"",
      "yes": "if: Doğru",
      "no": "else: Yanlış",
      "active": "",
      "output": []
    },
    {
      "caption": "Şimdi sorumuz şu: sifre == \"mavi\". Parantezin içi, doğru veya yanlış cevabı veren koşuldur.",
      "line": "if (sifre == \"mavi\")",
      "vars": {
        "sifre": "mavi"
      },
      "phase": 1,
      "condition": "sifre == \"mavi\"",
      "yes": "if: Doğru",
      "no": "else: Yanlış",
      "active": "",
      "output": []
    },
    {
      "caption": "\"mavi\" == \"mavi\". Bu koşul doğru (true). Bu yüzden if yoluna gidiyoruz.",
      "line": "if (sifre == \"mavi\")",
      "vars": {
        "sifre": "mavi"
      },
      "phase": 2,
      "condition": "sifre == \"mavi\"",
      "yes": "if: Doğru",
      "no": "else: Yanlış",
      "active": "yes",
      "output": []
    },
    {
      "caption": "Yalnızca if içindeki komut çalıştı. Ekrana Doğru yazıldı.",
      "line": "Console.WriteLine(\"Doğru\");",
      "vars": {
        "sifre": "mavi"
      },
      "phase": 3,
      "condition": "sifre == \"mavi\"",
      "yes": "if: Doğru",
      "no": "else: Yanlış",
      "active": "yes",
      "output": [
        "Doğru"
      ]
    },
    {
      "caption": "Şimdi farklı bir girdi deneyelim: Mavi. Kod aynı; sadece kullanıcının verdiği değer değişti.",
      "line": "string sifre = Console.ReadLine();",
      "vars": {
        "sifre": "Mavi"
      },
      "phase": 0,
      "condition": "sifre == \"mavi\"",
      "yes": "if: Doğru",
      "no": "else: Yanlış",
      "active": "",
      "output": []
    },
    {
      "caption": "\"Mavi\" == \"mavi\". Koşul bu kez yanlış (false).",
      "line": "if (sifre == \"mavi\")",
      "vars": {
        "sifre": "Mavi"
      },
      "phase": 1,
      "condition": "sifre == \"mavi\"",
      "yes": "if: Doğru",
      "no": "else: Yanlış",
      "active": "",
      "output": []
    },
    {
      "caption": "Bu yüzden bu kez else yolu seçildi. Öteki yol çalışmaz.",
      "line": "} else {",
      "vars": {
        "sifre": "Mavi"
      },
      "phase": 2,
      "condition": "sifre == \"mavi\"",
      "yes": "if: Doğru",
      "no": "else: Yanlış",
      "active": "no",
      "output": []
    },
    {
      "caption": "Ekrana Yanlış yazıldı. Aynı kod, girdiye göre iki yoldan birini seçti.",
      "line": "Console.WriteLine(\"Yanlış\");",
      "vars": {
        "sifre": "Mavi"
      },
      "phase": 3,
      "condition": "sifre == \"mavi\"",
      "yes": "if: Doğru",
      "no": "else: Yanlış",
      "active": "no",
      "output": [
        "Yanlış"
      ]
    }
  ],
  [
    {
      "caption": "Koşulun iki tarafında da değişken olabilir. Bu kez sabit bir sınıra değil, kullanıcının verdiği fiyata bakıyoruz.",
      "line": "int butce = Convert.ToInt32(Console.ReadLine());",
      "vars": {
        "butce": "40",
        "fiyat": "50"
      },
      "phase": 0,
      "condition": "butce >= fiyat",
      "yes": "if: Yeterli",
      "no": "else: Yetersiz",
      "active": "",
      "output": []
    },
    {
      "caption": "Şimdi sorumuz şu: butce >= fiyat. Parantezin içi, doğru veya yanlış cevabı veren koşuldur.",
      "line": "if (butce >= fiyat)",
      "vars": {
        "butce": "40",
        "fiyat": "50"
      },
      "phase": 1,
      "condition": "butce >= fiyat",
      "yes": "if: Yeterli",
      "no": "else: Yetersiz",
      "active": "",
      "output": []
    },
    {
      "caption": "40 >= 50. Bu koşul yanlış (false). Bu yüzden else yoluna gidiyoruz.",
      "line": "if (butce >= fiyat)",
      "vars": {
        "butce": "40",
        "fiyat": "50"
      },
      "phase": 2,
      "condition": "butce >= fiyat",
      "yes": "if: Yeterli",
      "no": "else: Yetersiz",
      "active": "no",
      "output": []
    },
    {
      "caption": "Yalnızca else içindeki komut çalıştı. Ekrana Yetersiz yazıldı.",
      "line": "Console.WriteLine(\"Yetersiz\");",
      "vars": {
        "butce": "40",
        "fiyat": "50"
      },
      "phase": 3,
      "condition": "butce >= fiyat",
      "yes": "if: Yeterli",
      "no": "else: Yetersiz",
      "active": "no",
      "output": [
        "Yetersiz"
      ]
    },
    {
      "caption": "Şimdi farklı bir girdi deneyelim: 50, 50. Kod aynı; sadece kullanıcının verdiği değer değişti.",
      "line": "int butce = Convert.ToInt32(Console.ReadLine());",
      "vars": {
        "butce": "50",
        "fiyat": "50"
      },
      "phase": 0,
      "condition": "butce >= fiyat",
      "yes": "if: Yeterli",
      "no": "else: Yetersiz",
      "active": "",
      "output": []
    },
    {
      "caption": "50 >= 50. Koşul bu kez doğru (true).",
      "line": "if (butce >= fiyat)",
      "vars": {
        "butce": "50",
        "fiyat": "50"
      },
      "phase": 1,
      "condition": "butce >= fiyat",
      "yes": "if: Yeterli",
      "no": "else: Yetersiz",
      "active": "",
      "output": []
    },
    {
      "caption": "Bu yüzden bu kez if yolu seçildi. Öteki yol çalışmaz.",
      "line": "if (butce >= fiyat) {",
      "vars": {
        "butce": "50",
        "fiyat": "50"
      },
      "phase": 2,
      "condition": "butce >= fiyat",
      "yes": "if: Yeterli",
      "no": "else: Yetersiz",
      "active": "yes",
      "output": []
    },
    {
      "caption": "Ekrana Yeterli yazıldı. Aynı kod, girdiye göre iki yoldan birini seçti.",
      "line": "Console.WriteLine(\"Yeterli\");",
      "vars": {
        "butce": "50",
        "fiyat": "50"
      },
      "phase": 3,
      "condition": "butce >= fiyat",
      "yes": "if: Yeterli",
      "no": "else: Yetersiz",
      "active": "yes",
      "output": [
        "Yeterli"
      ]
    }
  ],
  [
    {
      "caption": "Önceki sorudaki aynı fikri başka bir yerde kullanıyoruz: elimizdeki miktar istenene yetiyor mu?",
      "line": "int stok = Convert.ToInt32(Console.ReadLine());",
      "vars": {
        "stok": "8",
        "istenen": "3"
      },
      "phase": 0,
      "condition": "stok >= istenen",
      "yes": "if: Hazır",
      "no": "else: Eksik",
      "active": "",
      "output": []
    },
    {
      "caption": "Şimdi sorumuz şu: stok >= istenen. Parantezin içi, doğru veya yanlış cevabı veren koşuldur.",
      "line": "if (stok >= istenen)",
      "vars": {
        "stok": "8",
        "istenen": "3"
      },
      "phase": 1,
      "condition": "stok >= istenen",
      "yes": "if: Hazır",
      "no": "else: Eksik",
      "active": "",
      "output": []
    },
    {
      "caption": "8 >= 3. Bu koşul doğru (true). Bu yüzden if yoluna gidiyoruz.",
      "line": "if (stok >= istenen)",
      "vars": {
        "stok": "8",
        "istenen": "3"
      },
      "phase": 2,
      "condition": "stok >= istenen",
      "yes": "if: Hazır",
      "no": "else: Eksik",
      "active": "yes",
      "output": []
    },
    {
      "caption": "Yalnızca if içindeki komut çalıştı. Ekrana Hazır yazıldı.",
      "line": "Console.WriteLine(\"Hazır\");",
      "vars": {
        "stok": "8",
        "istenen": "3"
      },
      "phase": 3,
      "condition": "stok >= istenen",
      "yes": "if: Hazır",
      "no": "else: Eksik",
      "active": "yes",
      "output": [
        "Hazır"
      ]
    },
    {
      "caption": "Şimdi farklı bir girdi deneyelim: 2, 3. Kod aynı; sadece kullanıcının verdiği değer değişti.",
      "line": "int stok = Convert.ToInt32(Console.ReadLine());",
      "vars": {
        "stok": "2",
        "istenen": "3"
      },
      "phase": 0,
      "condition": "stok >= istenen",
      "yes": "if: Hazır",
      "no": "else: Eksik",
      "active": "",
      "output": []
    },
    {
      "caption": "2 >= 3. Koşul bu kez yanlış (false).",
      "line": "if (stok >= istenen)",
      "vars": {
        "stok": "2",
        "istenen": "3"
      },
      "phase": 1,
      "condition": "stok >= istenen",
      "yes": "if: Hazır",
      "no": "else: Eksik",
      "active": "",
      "output": []
    },
    {
      "caption": "Bu yüzden bu kez else yolu seçildi. Öteki yol çalışmaz.",
      "line": "} else {",
      "vars": {
        "stok": "2",
        "istenen": "3"
      },
      "phase": 2,
      "condition": "stok >= istenen",
      "yes": "if: Hazır",
      "no": "else: Eksik",
      "active": "no",
      "output": []
    },
    {
      "caption": "Ekrana Eksik yazıldı. Aynı kod, girdiye göre iki yoldan birini seçti.",
      "line": "Console.WriteLine(\"Eksik\");",
      "vars": {
        "stok": "2",
        "istenen": "3"
      },
      "phase": 3,
      "condition": "stok >= istenen",
      "yes": "if: Hazır",
      "no": "else: Eksik",
      "active": "no",
      "output": [
        "Eksik"
      ]
    }
  ],
  [
    {
      "caption": "İki kullanıcı değerini eşitlik açısından karşılaştırıyoruz. Tek bir if ve bir else yeterli.",
      "line": "int girilen = Convert.ToInt32(Console.ReadLine());",
      "vars": {
        "girilen": "12",
        "hedef": "7"
      },
      "phase": 0,
      "condition": "girilen == hedef",
      "yes": "if: Bulundu",
      "no": "else: Aramaya devam",
      "active": "",
      "output": []
    },
    {
      "caption": "Şimdi sorumuz şu: girilen == hedef. Parantezin içi, doğru veya yanlış cevabı veren koşuldur.",
      "line": "if (girilen == hedef)",
      "vars": {
        "girilen": "12",
        "hedef": "7"
      },
      "phase": 1,
      "condition": "girilen == hedef",
      "yes": "if: Bulundu",
      "no": "else: Aramaya devam",
      "active": "",
      "output": []
    },
    {
      "caption": "12 == 7. Bu koşul yanlış (false). Bu yüzden else yoluna gidiyoruz.",
      "line": "if (girilen == hedef)",
      "vars": {
        "girilen": "12",
        "hedef": "7"
      },
      "phase": 2,
      "condition": "girilen == hedef",
      "yes": "if: Bulundu",
      "no": "else: Aramaya devam",
      "active": "no",
      "output": []
    },
    {
      "caption": "Yalnızca else içindeki komut çalıştı. Ekrana Aramaya devam yazıldı.",
      "line": "Console.WriteLine(\"Aramaya devam\");",
      "vars": {
        "girilen": "12",
        "hedef": "7"
      },
      "phase": 3,
      "condition": "girilen == hedef",
      "yes": "if: Bulundu",
      "no": "else: Aramaya devam",
      "active": "no",
      "output": [
        "Aramaya devam"
      ]
    },
    {
      "caption": "Şimdi farklı bir girdi deneyelim: 7, 7. Kod aynı; sadece kullanıcının verdiği değer değişti.",
      "line": "int girilen = Convert.ToInt32(Console.ReadLine());",
      "vars": {
        "girilen": "7",
        "hedef": "7"
      },
      "phase": 0,
      "condition": "girilen == hedef",
      "yes": "if: Bulundu",
      "no": "else: Aramaya devam",
      "active": "",
      "output": []
    },
    {
      "caption": "7 == 7. Koşul bu kez doğru (true).",
      "line": "if (girilen == hedef)",
      "vars": {
        "girilen": "7",
        "hedef": "7"
      },
      "phase": 1,
      "condition": "girilen == hedef",
      "yes": "if: Bulundu",
      "no": "else: Aramaya devam",
      "active": "",
      "output": []
    },
    {
      "caption": "Bu yüzden bu kez if yolu seçildi. Öteki yol çalışmaz.",
      "line": "if (girilen == hedef) {",
      "vars": {
        "girilen": "7",
        "hedef": "7"
      },
      "phase": 2,
      "condition": "girilen == hedef",
      "yes": "if: Bulundu",
      "no": "else: Aramaya devam",
      "active": "yes",
      "output": []
    },
    {
      "caption": "Ekrana Bulundu yazıldı. Aynı kod, girdiye göre iki yoldan birini seçti.",
      "line": "Console.WriteLine(\"Bulundu\");",
      "vars": {
        "girilen": "7",
        "hedef": "7"
      },
      "phase": 3,
      "condition": "girilen == hedef",
      "yes": "if: Bulundu",
      "no": "else: Aramaya devam",
      "active": "yes",
      "output": [
        "Bulundu"
      ]
    }
  ],
  [
    {
      "caption": "Ünite 1’deki % işlemini bir kararın içinde kullanabiliriz. Önce kalan hesaplanır, sonra 0’a eşit mi diye bakılır.",
      "line": "int sayi = Convert.ToInt32(Console.ReadLine());",
      "vars": {
        "sayi": "6"
      },
      "phase": 0,
      "condition": "sayi % 2 == 0",
      "yes": "if: Çift",
      "no": "else: Tek",
      "active": "",
      "output": []
    },
    {
      "caption": "Şimdi sorumuz şu: sayi % 2 == 0. Parantezin içi, doğru veya yanlış cevabı veren koşuldur.",
      "line": "if (sayi % 2 == 0)",
      "vars": {
        "sayi": "6"
      },
      "phase": 1,
      "condition": "sayi % 2 == 0",
      "yes": "if: Çift",
      "no": "else: Tek",
      "active": "",
      "output": []
    },
    {
      "caption": "6 % 2 = 0 → 0 == 0. Bu koşul doğru (true). Bu yüzden if yoluna gidiyoruz.",
      "line": "if (sayi % 2 == 0)",
      "vars": {
        "sayi": "6"
      },
      "phase": 2,
      "condition": "sayi % 2 == 0",
      "yes": "if: Çift",
      "no": "else: Tek",
      "active": "yes",
      "output": []
    },
    {
      "caption": "Yalnızca if içindeki komut çalıştı. Ekrana Çift yazıldı.",
      "line": "Console.WriteLine(\"Çift\");",
      "vars": {
        "sayi": "6"
      },
      "phase": 3,
      "condition": "sayi % 2 == 0",
      "yes": "if: Çift",
      "no": "else: Tek",
      "active": "yes",
      "output": [
        "Çift"
      ]
    },
    {
      "caption": "Şimdi farklı bir girdi deneyelim: 7. Kod aynı; sadece kullanıcının verdiği değer değişti.",
      "line": "int sayi = Convert.ToInt32(Console.ReadLine());",
      "vars": {
        "sayi": "7"
      },
      "phase": 0,
      "condition": "sayi % 2 == 0",
      "yes": "if: Çift",
      "no": "else: Tek",
      "active": "",
      "output": []
    },
    {
      "caption": "7 % 2 = 1 → 1 == 0. Koşul bu kez yanlış (false).",
      "line": "if (sayi % 2 == 0)",
      "vars": {
        "sayi": "7"
      },
      "phase": 1,
      "condition": "sayi % 2 == 0",
      "yes": "if: Çift",
      "no": "else: Tek",
      "active": "",
      "output": []
    },
    {
      "caption": "Bu yüzden bu kez else yolu seçildi. Öteki yol çalışmaz.",
      "line": "} else {",
      "vars": {
        "sayi": "7"
      },
      "phase": 2,
      "condition": "sayi % 2 == 0",
      "yes": "if: Çift",
      "no": "else: Tek",
      "active": "no",
      "output": []
    },
    {
      "caption": "Ekrana Tek yazıldı. Aynı kod, girdiye göre iki yoldan birini seçti.",
      "line": "Console.WriteLine(\"Tek\");",
      "vars": {
        "sayi": "7"
      },
      "phase": 3,
      "condition": "sayi % 2 == 0",
      "yes": "if: Çift",
      "no": "else: Tek",
      "active": "no",
      "output": [
        "Tek"
      ]
    }
  ]
];