window.Unit2NextScenes=[
  [
    {
      "vars": {
        "ilk": "8",
        "ikinci": "3"
      },
      "condition": "ilk >= ikinci",
      "yes": "ilk sayısını yaz",
      "no": "ikinci sayısını yaz",
      "output": [],
      "phase": 0,
      "caption": "if / else içinde yalnızca sabit metin değil, değişken de yazdırabilirsin. Örnek girdiler: 8, 3.",
      "line": "int ilk = Convert.ToInt32(Console.ReadLine());"
    },
    {
      "vars": {
        "ilk": "8",
        "ikinci": "3"
      },
      "condition": "ilk >= ikinci",
      "yes": "ilk sayısını yaz",
      "no": "ikinci sayısını yaz",
      "output": [],
      "phase": 2,
      "active": "yes",
      "caption": "8 >= 3 → doğru (true). ilk sayısını yaz.",
      "line": "if (ilk >= ikinci)"
    },
    {
      "vars": {
        "ilk": "8",
        "ikinci": "3"
      },
      "condition": "ilk >= ikinci",
      "yes": "ilk sayısını yaz",
      "no": "ikinci sayısını yaz",
      "output": [
        "8"
      ],
      "phase": 3,
      "active": "yes",
      "caption": "Seçilen yol çalıştı. Ekrana 8 yazıldı. Diğer yollar çalışmadı.",
      "line": "Console.WriteLine(ilk);"
    },
    {
      "vars": {
        "ilk": "2",
        "ikinci": "7"
      },
      "condition": "ilk >= ikinci",
      "yes": "ilk sayısını yaz",
      "no": "ikinci sayısını yaz",
      "output": [],
      "phase": 0,
      "caption": "Şimdi değerler değişsin: 2, 7. Aynı kodu tekrar düşünelim.",
      "line": "int ilk = Convert.ToInt32(Console.ReadLine());"
    },
    {
      "vars": {
        "ilk": "2",
        "ikinci": "7"
      },
      "condition": "ilk >= ikinci",
      "yes": "ilk sayısını yaz",
      "no": "ikinci sayısını yaz",
      "output": [],
      "phase": 2,
      "active": "no",
      "caption": "2 >= 7 → yanlış (false). ikinci sayısını yaz.",
      "line": "if (ilk >= ikinci)"
    },
    {
      "vars": {
        "ilk": "2",
        "ikinci": "7"
      },
      "condition": "ilk >= ikinci",
      "yes": "ilk sayısını yaz",
      "no": "ikinci sayısını yaz",
      "output": [
        "7"
      ],
      "phase": 3,
      "active": "no",
      "caption": "Seçilen yol çalıştı. Ekrana 7 yazıldı. Diğer yollar çalışmadı.",
      "line": "Console.WriteLine(ikinci);"
    }
  ],
  [
    {
      "vars": {
        "puan": "60",
        "devam": "80"
      },
      "condition": "puan >= 50 && devam >= 70",
      "yes": "Geçti",
      "no": "Kaldı",
      "output": [],
      "phase": 0,
      "caption": "&& ve demektir. İki şartın da doğru olması gerekir; birinin tutması yetmez. Örnek girdiler: 60, 80.",
      "line": "int puan = Convert.ToInt32(Console.ReadLine());"
    },
    {
      "vars": {
        "puan": "60",
        "devam": "80"
      },
      "condition": "puan >= 50 && devam >= 70",
      "yes": "Geçti",
      "no": "Kaldı",
      "output": [],
      "phase": 2,
      "active": "yes",
      "caption": "60 >= 50 && 80 >= 70 → doğru (true). Geçti.",
      "line": "if (puan >= 50 && devam >= 70)"
    },
    {
      "vars": {
        "puan": "60",
        "devam": "80"
      },
      "condition": "puan >= 50 && devam >= 70",
      "yes": "Geçti",
      "no": "Kaldı",
      "output": [
        "Geçti"
      ],
      "phase": 3,
      "active": "yes",
      "caption": "Seçilen yol çalıştı. Ekrana Geçti yazıldı. Diğer yollar çalışmadı.",
      "line": "Console.WriteLine(\"Geçti\");"
    },
    {
      "vars": {
        "puan": "90",
        "devam": "60"
      },
      "condition": "puan >= 50 && devam >= 70",
      "yes": "Geçti",
      "no": "Kaldı",
      "output": [],
      "phase": 0,
      "caption": "Şimdi değerler değişsin: 90, 60. Aynı kodu tekrar düşünelim.",
      "line": "int puan = Convert.ToInt32(Console.ReadLine());"
    },
    {
      "vars": {
        "puan": "90",
        "devam": "60"
      },
      "condition": "puan >= 50 && devam >= 70",
      "yes": "Geçti",
      "no": "Kaldı",
      "output": [],
      "phase": 2,
      "active": "no",
      "caption": "90 >= 50 && 60 >= 70 → yanlış (false). Kaldı.",
      "line": "if (puan >= 50 && devam >= 70)"
    },
    {
      "vars": {
        "puan": "90",
        "devam": "60"
      },
      "condition": "puan >= 50 && devam >= 70",
      "yes": "Geçti",
      "no": "Kaldı",
      "output": [
        "Kaldı"
      ],
      "phase": 3,
      "active": "no",
      "caption": "Seçilen yol çalıştı. Ekrana Kaldı yazıldı. Diğer yollar çalışmadı.",
      "line": "Console.WriteLine(\"Kaldı\");"
    }
  ],
  [
    {
      "vars": {
        "kart": "0",
        "izin": "1"
      },
      "condition": "kart == 1 || izin == 1",
      "yes": "Açık",
      "no": "Kapalı",
      "output": [],
      "phase": 0,
      "caption": "|| veya demektir. En az bir koşul doğruysa if çalışır. Ancak ikisi de yanlışsa else çalışır. Örnek girdiler: 0, 1.",
      "line": "int kart = Convert.ToInt32(Console.ReadLine());"
    },
    {
      "vars": {
        "kart": "0",
        "izin": "1"
      },
      "condition": "kart == 1 || izin == 1",
      "yes": "Açık",
      "no": "Kapalı",
      "output": [],
      "phase": 2,
      "active": "yes",
      "caption": "0 == 1 || 1 == 1 → doğru (true). Açık.",
      "line": "if (kart == 1 || izin == 1)"
    },
    {
      "vars": {
        "kart": "0",
        "izin": "1"
      },
      "condition": "kart == 1 || izin == 1",
      "yes": "Açık",
      "no": "Kapalı",
      "output": [
        "Açık"
      ],
      "phase": 3,
      "active": "yes",
      "caption": "Seçilen yol çalıştı. Ekrana Açık yazıldı. Diğer yollar çalışmadı.",
      "line": "Console.WriteLine(\"Açık\");"
    },
    {
      "vars": {
        "kart": "0",
        "izin": "0"
      },
      "condition": "kart == 1 || izin == 1",
      "yes": "Açık",
      "no": "Kapalı",
      "output": [],
      "phase": 0,
      "caption": "Şimdi değerler değişsin: 0, 0. Aynı kodu tekrar düşünelim.",
      "line": "int kart = Convert.ToInt32(Console.ReadLine());"
    },
    {
      "vars": {
        "kart": "0",
        "izin": "0"
      },
      "condition": "kart == 1 || izin == 1",
      "yes": "Açık",
      "no": "Kapalı",
      "output": [],
      "phase": 2,
      "active": "no",
      "caption": "0 == 1 || 0 == 1 → yanlış (false). Kapalı.",
      "line": "if (kart == 1 || izin == 1)"
    },
    {
      "vars": {
        "kart": "0",
        "izin": "0"
      },
      "condition": "kart == 1 || izin == 1",
      "yes": "Açık",
      "no": "Kapalı",
      "output": [
        "Kapalı"
      ],
      "phase": 3,
      "active": "no",
      "caption": "Seçilen yol çalıştı. Ekrana Kapalı yazıldı. Diğer yollar çalışmadı.",
      "line": "Console.WriteLine(\"Kapalı\");"
    }
  ],
  [
    {
      "vars": {
        "sicaklik": "22"
      },
      "condition": "sicaklik >= 20 && sicaklik <= 25",
      "yes": "Uygun",
      "no": "Uygun değil",
      "output": [],
      "phase": 0,
      "caption": "Bir aralıkta olmak, alt sınırın üstünde ve üst sınırın altında olmayı birlikte gerektirir. Örnek girdiler: 22.",
      "line": "int sicaklik = Convert.ToInt32(Console.ReadLine());"
    },
    {
      "vars": {
        "sicaklik": "22"
      },
      "condition": "sicaklik >= 20 && sicaklik <= 25",
      "yes": "Uygun",
      "no": "Uygun değil",
      "output": [],
      "phase": 2,
      "active": "yes",
      "caption": "22 >= 20 && 22 <= 25 → doğru (true). Uygun.",
      "line": "if (sicaklik >= 20 && sicaklik <= 25)"
    },
    {
      "vars": {
        "sicaklik": "22"
      },
      "condition": "sicaklik >= 20 && sicaklik <= 25",
      "yes": "Uygun",
      "no": "Uygun değil",
      "output": [
        "Uygun"
      ],
      "phase": 3,
      "active": "yes",
      "caption": "Seçilen yol çalıştı. Ekrana Uygun yazıldı. Diğer yollar çalışmadı.",
      "line": "Console.WriteLine(\"Uygun\");"
    },
    {
      "vars": {
        "sicaklik": "27"
      },
      "condition": "sicaklik >= 20 && sicaklik <= 25",
      "yes": "Uygun",
      "no": "Uygun değil",
      "output": [],
      "phase": 0,
      "caption": "Şimdi değerler değişsin: 27. Aynı kodu tekrar düşünelim.",
      "line": "int sicaklik = Convert.ToInt32(Console.ReadLine());"
    },
    {
      "vars": {
        "sicaklik": "27"
      },
      "condition": "sicaklik >= 20 && sicaklik <= 25",
      "yes": "Uygun",
      "no": "Uygun değil",
      "output": [],
      "phase": 2,
      "active": "no",
      "caption": "27 >= 20 && 27 <= 25 → yanlış (false). Uygun değil.",
      "line": "if (sicaklik >= 20 && sicaklik <= 25)"
    },
    {
      "vars": {
        "sicaklik": "27"
      },
      "condition": "sicaklik >= 20 && sicaklik <= 25",
      "yes": "Uygun",
      "no": "Uygun değil",
      "output": [
        "Uygun değil"
      ],
      "phase": 3,
      "active": "no",
      "caption": "Seçilen yol çalıştı. Ekrana Uygun değil yazıldı. Diğer yollar çalışmadı.",
      "line": "Console.WriteLine(\"Uygun değil\");"
    }
  ],
  [
    {
      "vars": {
        "puan": "70"
      },
      "condition": "puan >= 85",
      "yes": "Pekiyi",
      "no": "İkinci soruya geç",
      "output": [],
      "phase": 0,
      "caption": "else if, ilk koşul tutmayınca yeni bir soru sorar. İlk doğru yol seçilince kalanlar atlanır. Örnek girdiler: 70.",
      "line": "int puan = Convert.ToInt32(Console.ReadLine());"
    },
    {
      "vars": {
        "puan": "70"
      },
      "condition": "puan >= 85",
      "yes": "Pekiyi",
      "no": "İkinci soruya geç",
      "output": [],
      "phase": 2,
      "active": "no",
      "caption": "70 >= 85 → yanlış (false). İkinci soruya geç.",
      "line": "if (puan >= 85)"
    },
    {
      "vars": {
        "puan": "70"
      },
      "condition": "puan >= 50",
      "yes": "Geçti",
      "no": "Kaldı",
      "output": [],
      "phase": 2,
      "active": "yes",
      "caption": "70 >= 50 → doğru (true). Geçti.",
      "line": "else if (puan >= 50)"
    },
    {
      "vars": {
        "puan": "70"
      },
      "condition": "puan >= 50",
      "yes": "Geçti",
      "no": "Kaldı",
      "output": [
        "Geçti"
      ],
      "phase": 3,
      "active": "yes",
      "caption": "Seçilen yol çalıştı. Ekrana Geçti yazıldı. Diğer yollar çalışmadı.",
      "line": "Console.WriteLine(\"Geçti\");"
    },
    {
      "vars": {
        "puan": "40"
      },
      "condition": "puan >= 85",
      "yes": "Pekiyi",
      "no": "İkinci soruya geç",
      "output": [],
      "phase": 0,
      "caption": "Şimdi değerler değişsin: 40. Aynı kodu tekrar düşünelim.",
      "line": "int puan = Convert.ToInt32(Console.ReadLine());"
    },
    {
      "vars": {
        "puan": "40"
      },
      "condition": "puan >= 85",
      "yes": "Pekiyi",
      "no": "İkinci soruya geç",
      "output": [],
      "phase": 2,
      "active": "no",
      "caption": "40 >= 85 → yanlış (false). İkinci soruya geç.",
      "line": "if (puan >= 85)"
    },
    {
      "vars": {
        "puan": "40"
      },
      "condition": "puan >= 50",
      "yes": "Geçti",
      "no": "Kaldı",
      "output": [],
      "phase": 2,
      "active": "no",
      "caption": "40 >= 50 → yanlış (false). Kaldı.",
      "line": "else if (puan >= 50)"
    },
    {
      "vars": {
        "puan": "40"
      },
      "condition": "puan >= 50",
      "yes": "Geçti",
      "no": "Kaldı",
      "output": [
        "Kaldı"
      ],
      "phase": 3,
      "active": "no",
      "caption": "Seçilen yol çalıştı. Ekrana Kaldı yazıldı. Diğer yollar çalışmadı.",
      "line": "Console.WriteLine(\"Kaldı\");"
    }
  ],
  [
    {
      "vars": {
        "sayi": "-3"
      },
      "condition": "sayi > 0",
      "yes": "Pozitif",
      "no": "İkinci soruya geç",
      "output": [],
      "phase": 0,
      "caption": "İlk koşul yanlışsa bu, sayının mutlaka negatif olduğu anlamına gelmez; sıfır da olabilir. İkinci koşul bu ayrımı yapar. Örnek girdiler: -3.",
      "line": "int sayi = Convert.ToInt32(Console.ReadLine());"
    },
    {
      "vars": {
        "sayi": "-3"
      },
      "condition": "sayi > 0",
      "yes": "Pozitif",
      "no": "İkinci soruya geç",
      "output": [],
      "phase": 2,
      "active": "no",
      "caption": "-3 > 0 → yanlış (false). İkinci soruya geç.",
      "line": "if (sayi > 0)"
    },
    {
      "vars": {
        "sayi": "-3"
      },
      "condition": "sayi < 0",
      "yes": "Negatif",
      "no": "Sıfır",
      "output": [],
      "phase": 2,
      "active": "yes",
      "caption": "-3 < 0 → doğru (true). Negatif.",
      "line": "else if (sayi < 0)"
    },
    {
      "vars": {
        "sayi": "-3"
      },
      "condition": "sayi < 0",
      "yes": "Negatif",
      "no": "Sıfır",
      "output": [
        "Negatif"
      ],
      "phase": 3,
      "active": "yes",
      "caption": "Seçilen yol çalıştı. Ekrana Negatif yazıldı. Diğer yollar çalışmadı.",
      "line": "Console.WriteLine(\"Negatif\");"
    },
    {
      "vars": {
        "sayi": "0"
      },
      "condition": "sayi > 0",
      "yes": "Pozitif",
      "no": "İkinci soruya geç",
      "output": [],
      "phase": 0,
      "caption": "Şimdi değerler değişsin: 0. Aynı kodu tekrar düşünelim.",
      "line": "int sayi = Convert.ToInt32(Console.ReadLine());"
    },
    {
      "vars": {
        "sayi": "0"
      },
      "condition": "sayi > 0",
      "yes": "Pozitif",
      "no": "İkinci soruya geç",
      "output": [],
      "phase": 2,
      "active": "no",
      "caption": "0 > 0 → yanlış (false). İkinci soruya geç.",
      "line": "if (sayi > 0)"
    },
    {
      "vars": {
        "sayi": "0"
      },
      "condition": "sayi < 0",
      "yes": "Negatif",
      "no": "Sıfır",
      "output": [],
      "phase": 2,
      "active": "no",
      "caption": "0 < 0 → yanlış (false). Sıfır.",
      "line": "else if (sayi < 0)"
    },
    {
      "vars": {
        "sayi": "0"
      },
      "condition": "sayi < 0",
      "yes": "Negatif",
      "no": "Sıfır",
      "output": [
        "Sıfır"
      ],
      "phase": 3,
      "active": "no",
      "caption": "Seçilen yol çalıştı. Ekrana Sıfır yazıldı. Diğer yollar çalışmadı.",
      "line": "Console.WriteLine(\"Sıfır\");"
    }
  ],
  [
    {
      "vars": {
        "tutar": "120",
        "kargo": "15"
      },
      "condition": "tutar >= 100m",
      "yes": "Sadece tutarı yaz",
      "no": "tutar + kargo yaz",
      "output": [],
      "phase": 0,
      "caption": "Koşulun seçtiği yolda hesap da yapabilirsin. decimal sayı okurken Convert.ToDecimal kullan. Örnek girdiler: 120, 15.",
      "line": "decimal tutar = Convert.ToDecimal(Console.ReadLine());"
    },
    {
      "vars": {
        "tutar": "120",
        "kargo": "15"
      },
      "condition": "tutar >= 100m",
      "yes": "Sadece tutarı yaz",
      "no": "tutar + kargo yaz",
      "output": [],
      "phase": 2,
      "active": "yes",
      "caption": "120 >= 100m → doğru (true). Sadece tutarı yaz.",
      "line": "if (tutar >= 100m)"
    },
    {
      "vars": {
        "tutar": "120",
        "kargo": "15"
      },
      "condition": "tutar >= 100m",
      "yes": "Sadece tutarı yaz",
      "no": "tutar + kargo yaz",
      "output": [
        "120"
      ],
      "phase": 3,
      "active": "yes",
      "caption": "Seçilen yol çalıştı. Ekrana 120 yazıldı. Diğer yollar çalışmadı.",
      "line": "Console.WriteLine(tutar);"
    },
    {
      "vars": {
        "tutar": "60",
        "kargo": "15"
      },
      "condition": "tutar >= 100m",
      "yes": "Sadece tutarı yaz",
      "no": "tutar + kargo yaz",
      "output": [],
      "phase": 0,
      "caption": "Şimdi değerler değişsin: 60, 15. Aynı kodu tekrar düşünelim.",
      "line": "decimal tutar = Convert.ToDecimal(Console.ReadLine());"
    },
    {
      "vars": {
        "tutar": "60",
        "kargo": "15"
      },
      "condition": "tutar >= 100m",
      "yes": "Sadece tutarı yaz",
      "no": "tutar + kargo yaz",
      "output": [],
      "phase": 2,
      "active": "no",
      "caption": "60 >= 100m → yanlış (false). tutar + kargo yaz.",
      "line": "if (tutar >= 100m)"
    },
    {
      "vars": {
        "tutar": "60",
        "kargo": "15"
      },
      "condition": "tutar >= 100m",
      "yes": "Sadece tutarı yaz",
      "no": "tutar + kargo yaz",
      "output": [
        "75"
      ],
      "phase": 3,
      "active": "no",
      "caption": "Seçilen yol çalıştı. Ekrana 75 yazıldı. Diğer yollar çalışmadı.",
      "line": "Console.WriteLine(tutar + kargo);"
    }
  ],
  [
    {
      "vars": {
        "sayi": "6"
      },
      "condition": "sayi > 0 && sayi % 2 == 0",
      "yes": "Uygun",
      "no": "Uygun değil",
      "output": [],
      "phase": 0,
      "caption": "&& ile birleştirilen koşulların biri hesap içerebilir. Önce % işlemi, sonra karşılaştırma yapılır. Örnek girdiler: 6.",
      "line": "int sayi = Convert.ToInt32(Console.ReadLine());"
    },
    {
      "vars": {
        "sayi": "6"
      },
      "condition": "sayi > 0 && sayi % 2 == 0",
      "yes": "Uygun",
      "no": "Uygun değil",
      "output": [],
      "phase": 2,
      "active": "yes",
      "caption": "6 > 0 && 6 % 2 == 0 → doğru (true). Uygun.",
      "line": "if (sayi > 0 && sayi % 2 == 0)"
    },
    {
      "vars": {
        "sayi": "6"
      },
      "condition": "sayi > 0 && sayi % 2 == 0",
      "yes": "Uygun",
      "no": "Uygun değil",
      "output": [
        "Uygun"
      ],
      "phase": 3,
      "active": "yes",
      "caption": "Seçilen yol çalıştı. Ekrana Uygun yazıldı. Diğer yollar çalışmadı.",
      "line": "Console.WriteLine(\"Uygun\");"
    },
    {
      "vars": {
        "sayi": "-4"
      },
      "condition": "sayi > 0 && sayi % 2 == 0",
      "yes": "Uygun",
      "no": "Uygun değil",
      "output": [],
      "phase": 0,
      "caption": "Şimdi değerler değişsin: -4. Aynı kodu tekrar düşünelim.",
      "line": "int sayi = Convert.ToInt32(Console.ReadLine());"
    },
    {
      "vars": {
        "sayi": "-4"
      },
      "condition": "sayi > 0 && sayi % 2 == 0",
      "yes": "Uygun",
      "no": "Uygun değil",
      "output": [],
      "phase": 2,
      "active": "no",
      "caption": "-4 > 0 && -4 % 2 == 0 → yanlış (false). Uygun değil.",
      "line": "if (sayi > 0 && sayi % 2 == 0)"
    },
    {
      "vars": {
        "sayi": "-4"
      },
      "condition": "sayi > 0 && sayi % 2 == 0",
      "yes": "Uygun",
      "no": "Uygun değil",
      "output": [
        "Uygun değil"
      ],
      "phase": 3,
      "active": "no",
      "caption": "Seçilen yol çalıştı. Ekrana Uygun değil yazıldı. Diğer yollar çalışmadı.",
      "line": "Console.WriteLine(\"Uygun değil\");"
    }
  ],
  [
    {
      "vars": {
        "yas": "20",
        "kart": "0"
      },
      "condition": "yas >= 18",
      "yes": "Şimdi karta bak",
      "no": "Yaş yetmiyor",
      "output": [],
      "phase": 0,
      "caption": "Bir if’in içinde başka bir if olabilir. İçteki karar yalnızca dıştaki yol seçildiyse çalışır. Örnek girdiler: 20, 0.",
      "line": "int yas = Convert.ToInt32(Console.ReadLine());"
    },
    {
      "vars": {
        "yas": "20",
        "kart": "0"
      },
      "condition": "yas >= 18",
      "yes": "Şimdi karta bak",
      "no": "Yaş yetmiyor",
      "output": [],
      "phase": 2,
      "active": "yes",
      "caption": "20 >= 18 → doğru (true). Şimdi karta bak.",
      "line": "if (yas >= 18)"
    },
    {
      "vars": {
        "yas": "20",
        "kart": "0"
      },
      "condition": "kart == 1",
      "yes": "Girebilir",
      "no": "Kart gerekli",
      "output": [],
      "phase": 2,
      "active": "no",
      "caption": "0 == 1 → yanlış (false). Kart gerekli.",
      "line": "if (kart == 1)"
    },
    {
      "vars": {
        "yas": "20",
        "kart": "0"
      },
      "condition": "kart == 1",
      "yes": "Girebilir",
      "no": "Kart gerekli",
      "output": [
        "Kart gerekli"
      ],
      "phase": 3,
      "active": "no",
      "caption": "Seçilen yol çalıştı. Ekrana Kart gerekli yazıldı. Diğer yollar çalışmadı.",
      "line": "Console.WriteLine(\"Kart gerekli\");"
    },
    {
      "vars": {
        "yas": "17",
        "kart": "1"
      },
      "condition": "yas >= 18",
      "yes": "Şimdi karta bak",
      "no": "Yaş yetmiyor",
      "output": [],
      "phase": 0,
      "caption": "Şimdi değerler değişsin: 17, 1. Aynı kodu tekrar düşünelim.",
      "line": "int yas = Convert.ToInt32(Console.ReadLine());"
    },
    {
      "vars": {
        "yas": "17",
        "kart": "1"
      },
      "condition": "yas >= 18",
      "yes": "Şimdi karta bak",
      "no": "Yaş yetmiyor",
      "output": [],
      "phase": 2,
      "active": "no",
      "caption": "17 >= 18 → yanlış (false). Yaş yetmiyor.",
      "line": "if (yas >= 18)"
    },
    {
      "vars": {
        "yas": "17",
        "kart": "1"
      },
      "condition": "yas >= 18",
      "yes": "Şimdi karta bak",
      "no": "Yaş yetmiyor",
      "output": [
        "Yaş yetmiyor"
      ],
      "phase": 3,
      "active": "no",
      "caption": "Seçilen yol çalıştı. Ekrana Yaş yetmiyor yazıldı. Diğer yollar çalışmadı.",
      "line": "Console.WriteLine(\"Yaş yetmiyor\");"
    }
  ],
  [
    {
      "vars": {
        "tutar": "220",
        "mesafe": "3"
      },
      "condition": "tutar >= 200 && mesafe <= 5",
      "yes": "0",
      "no": "Mesafeye bak",
      "output": [],
      "phase": 0,
      "caption": "Önce daha özel olan kuralı kontrol ediyoruz. Ücretsiz kural tutmazsa sıradaki daha genel mesafe kuralına geçiyoruz. Örnek girdiler: 220, 3.",
      "line": "int tutar = Convert.ToInt32(Console.ReadLine());"
    },
    {
      "vars": {
        "tutar": "220",
        "mesafe": "3"
      },
      "condition": "tutar >= 200 && mesafe <= 5",
      "yes": "0",
      "no": "Mesafeye bak",
      "output": [],
      "phase": 2,
      "active": "yes",
      "caption": "220 >= 200 && 3 <= 5 → doğru (true). 0.",
      "line": "if (tutar >= 200 && mesafe <= 5)"
    },
    {
      "vars": {
        "tutar": "220",
        "mesafe": "3"
      },
      "condition": "tutar >= 200 && mesafe <= 5",
      "yes": "0",
      "no": "Mesafeye bak",
      "output": [
        "0"
      ],
      "phase": 3,
      "active": "yes",
      "caption": "Seçilen yol çalıştı. Ekrana 0 yazıldı. Diğer yollar çalışmadı.",
      "line": "Console.WriteLine(0);"
    },
    {
      "vars": {
        "tutar": "100",
        "mesafe": "8"
      },
      "condition": "tutar >= 200 && mesafe <= 5",
      "yes": "0",
      "no": "Mesafeye bak",
      "output": [],
      "phase": 0,
      "caption": "Şimdi değerler değişsin: 100, 8. Aynı kodu tekrar düşünelim.",
      "line": "int tutar = Convert.ToInt32(Console.ReadLine());"
    },
    {
      "vars": {
        "tutar": "100",
        "mesafe": "8"
      },
      "condition": "tutar >= 200 && mesafe <= 5",
      "yes": "0",
      "no": "Mesafeye bak",
      "output": [],
      "phase": 2,
      "active": "no",
      "caption": "100 >= 200 && 8 <= 5 → yanlış (false). Mesafeye bak.",
      "line": "if (tutar >= 200 && mesafe <= 5)"
    },
    {
      "vars": {
        "tutar": "100",
        "mesafe": "8"
      },
      "condition": "mesafe <= 5",
      "yes": "15",
      "no": "30",
      "output": [],
      "phase": 2,
      "active": "no",
      "caption": "8 <= 5 → yanlış (false). 30.",
      "line": "else if (mesafe <= 5)"
    },
    {
      "vars": {
        "tutar": "100",
        "mesafe": "8"
      },
      "condition": "mesafe <= 5",
      "yes": "15",
      "no": "30",
      "output": [
        "30"
      ],
      "phase": 3,
      "active": "no",
      "caption": "Seçilen yol çalıştı. Ekrana 30 yazıldı. Diğer yollar çalışmadı.",
      "line": "Console.WriteLine(30);"
    }
  ]
];