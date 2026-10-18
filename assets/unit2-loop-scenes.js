window.Unit2LoopScenes=[
  [
    {
      "phase": "start",
      "caption": "Başlangıç bilgileri geldi. Sayaç yalnızca bir kez ilk değerini alır.",
      "code": "int adet = Convert.ToInt32(Console.ReadLine());",
      "condition": "",
      "truth": null,
      "token": "",
      "turn": 0,
      "vars": {
        "adet": 3,
        "i": 0
      },
      "output": []
    },
    {
      "phase": "init",
      "caption": "for başlığının ilk bölümünde sayaç ilk değerini alır. Bu başlangıç bölümü her tur değil, yalnızca bir kez çalışır.",
      "code": "for (",
      "condition": "",
      "truth": null,
      "token": "0",
      "turn": 0,
      "vars": {
        "adet": 3,
        "i": 0
      },
      "output": []
    },
    {
      "phase": "check",
      "caption": "Koşul doğru. Bir tur daha çalışabiliriz.",
      "code": "for (",
      "condition": "0 < 3",
      "truth": true,
      "token": "",
      "turn": 0,
      "vars": {
        "adet": 3,
        "i": 0
      },
      "output": []
    },
    {
      "phase": "body",
      "caption": "Bu turda ekrana Delil bulundu yazıldı. Tur sayısı: 1.",
      "code": "Console.WriteLine",
      "condition": "0 < 3",
      "truth": true,
      "token": "0",
      "turn": 1,
      "vars": {
        "adet": 3,
        "i": 0
      },
      "output": [
        "Delil bulundu"
      ]
    },
    {
      "phase": "update",
      "caption": "Tur tamamlandı. Sayaç 0 → 1 oldu. Şimdi koşulu yeniden kontrol edeceğiz.",
      "code": "for (",
      "condition": "",
      "truth": null,
      "token": "1",
      "turn": 1,
      "vars": {
        "adet": 3,
        "i": 1
      },
      "output": [
        "Delil bulundu"
      ]
    },
    {
      "phase": "check",
      "caption": "Koşul doğru. Bir tur daha çalışabiliriz.",
      "code": "for (",
      "condition": "1 < 3",
      "truth": true,
      "token": "",
      "turn": 1,
      "vars": {
        "adet": 3,
        "i": 1
      },
      "output": [
        "Delil bulundu"
      ]
    },
    {
      "phase": "body",
      "caption": "Bu turda ekrana Delil bulundu yazıldı. Tur sayısı: 2.",
      "code": "Console.WriteLine",
      "condition": "1 < 3",
      "truth": true,
      "token": "1",
      "turn": 2,
      "vars": {
        "adet": 3,
        "i": 1
      },
      "output": [
        "Delil bulundu",
        "Delil bulundu"
      ]
    },
    {
      "phase": "update",
      "caption": "Tur tamamlandı. Sayaç 1 → 2 oldu. Şimdi koşulu yeniden kontrol edeceğiz.",
      "code": "for (",
      "condition": "",
      "truth": null,
      "token": "2",
      "turn": 2,
      "vars": {
        "adet": 3,
        "i": 2
      },
      "output": [
        "Delil bulundu",
        "Delil bulundu"
      ]
    },
    {
      "phase": "check",
      "caption": "Koşul doğru. Bir tur daha çalışabiliriz.",
      "code": "for (",
      "condition": "2 < 3",
      "truth": true,
      "token": "",
      "turn": 2,
      "vars": {
        "adet": 3,
        "i": 2
      },
      "output": [
        "Delil bulundu",
        "Delil bulundu"
      ]
    },
    {
      "phase": "body",
      "caption": "Bu turda ekrana Delil bulundu yazıldı. Tur sayısı: 3.",
      "code": "Console.WriteLine",
      "condition": "2 < 3",
      "truth": true,
      "token": "2",
      "turn": 3,
      "vars": {
        "adet": 3,
        "i": 2
      },
      "output": [
        "Delil bulundu",
        "Delil bulundu",
        "Delil bulundu"
      ]
    },
    {
      "phase": "update",
      "caption": "Tur tamamlandı. Sayaç 2 → 3 oldu. Şimdi koşulu yeniden kontrol edeceğiz.",
      "code": "for (",
      "condition": "",
      "truth": null,
      "token": "3",
      "turn": 3,
      "vars": {
        "adet": 3,
        "i": 3
      },
      "output": [
        "Delil bulundu",
        "Delil bulundu",
        "Delil bulundu"
      ]
    },
    {
      "phase": "check",
      "caption": "Koşul yanlış. Gövdeye tekrar girmiyoruz; döngü bitiyor.",
      "code": "for (",
      "condition": "3 < 3",
      "truth": false,
      "token": "",
      "turn": 3,
      "vars": {
        "adet": 3,
        "i": 3
      },
      "output": [
        "Delil bulundu",
        "Delil bulundu",
        "Delil bulundu"
      ]
    },
    {
      "phase": "end",
      "caption": "Son koşul yanlış olduğu için yeni tur yok. Yazılan satır sayısı 3.",
      "code": "Console.WriteLine",
      "condition": "",
      "truth": null,
      "token": "✓",
      "turn": 3,
      "vars": {
        "adet": 3,
        "i": 3
      },
      "output": [
        "Delil bulundu",
        "Delil bulundu",
        "Delil bulundu"
      ]
    }
  ],
  [
    {
      "phase": "start",
      "caption": "Başlangıç bilgileri geldi. Sayaç yalnızca bir kez ilk değerini alır.",
      "code": "int adet = Convert.ToInt32(Console.ReadLine());",
      "condition": "",
      "truth": null,
      "token": "",
      "turn": 0,
      "vars": {
        "adet": 4,
        "i": 1
      },
      "output": []
    },
    {
      "phase": "init",
      "caption": "for başlığının ilk bölümünde sayaç ilk değerini alır. Bu başlangıç bölümü her tur değil, yalnızca bir kez çalışır.",
      "code": "for (",
      "condition": "",
      "truth": null,
      "token": "1",
      "turn": 0,
      "vars": {
        "adet": 4,
        "i": 1
      },
      "output": []
    },
    {
      "phase": "check",
      "caption": "Koşul doğru. Bir tur daha çalışabiliriz.",
      "code": "for (",
      "condition": "1 <= 4",
      "truth": true,
      "token": "",
      "turn": 0,
      "vars": {
        "adet": 4,
        "i": 1
      },
      "output": []
    },
    {
      "phase": "body",
      "caption": "Bu turda ekrana 1 yazıldı. Tur sayısı: 1.",
      "code": "Console.WriteLine",
      "condition": "1 <= 4",
      "truth": true,
      "token": "1",
      "turn": 1,
      "vars": {
        "adet": 4,
        "i": 1
      },
      "output": [
        "1"
      ]
    },
    {
      "phase": "update",
      "caption": "Tur tamamlandı. Sayaç 1 → 2 oldu. Şimdi koşulu yeniden kontrol edeceğiz.",
      "code": "for (",
      "condition": "",
      "truth": null,
      "token": "2",
      "turn": 1,
      "vars": {
        "adet": 4,
        "i": 2
      },
      "output": [
        "1"
      ]
    },
    {
      "phase": "check",
      "caption": "Koşul doğru. Bir tur daha çalışabiliriz.",
      "code": "for (",
      "condition": "2 <= 4",
      "truth": true,
      "token": "",
      "turn": 1,
      "vars": {
        "adet": 4,
        "i": 2
      },
      "output": [
        "1"
      ]
    },
    {
      "phase": "body",
      "caption": "Bu turda ekrana 2 yazıldı. Tur sayısı: 2.",
      "code": "Console.WriteLine",
      "condition": "2 <= 4",
      "truth": true,
      "token": "2",
      "turn": 2,
      "vars": {
        "adet": 4,
        "i": 2
      },
      "output": [
        "1",
        "2"
      ]
    },
    {
      "phase": "update",
      "caption": "Tur tamamlandı. Sayaç 2 → 3 oldu. Şimdi koşulu yeniden kontrol edeceğiz.",
      "code": "for (",
      "condition": "",
      "truth": null,
      "token": "3",
      "turn": 2,
      "vars": {
        "adet": 4,
        "i": 3
      },
      "output": [
        "1",
        "2"
      ]
    },
    {
      "phase": "check",
      "caption": "Koşul doğru. Bir tur daha çalışabiliriz.",
      "code": "for (",
      "condition": "3 <= 4",
      "truth": true,
      "token": "",
      "turn": 2,
      "vars": {
        "adet": 4,
        "i": 3
      },
      "output": [
        "1",
        "2"
      ]
    },
    {
      "phase": "body",
      "caption": "Bu turda ekrana 3 yazıldı. Tur sayısı: 3.",
      "code": "Console.WriteLine",
      "condition": "3 <= 4",
      "truth": true,
      "token": "3",
      "turn": 3,
      "vars": {
        "adet": 4,
        "i": 3
      },
      "output": [
        "1",
        "2",
        "3"
      ]
    },
    {
      "phase": "update",
      "caption": "Tur tamamlandı. Sayaç 3 → 4 oldu. Şimdi koşulu yeniden kontrol edeceğiz.",
      "code": "for (",
      "condition": "",
      "truth": null,
      "token": "4",
      "turn": 3,
      "vars": {
        "adet": 4,
        "i": 4
      },
      "output": [
        "1",
        "2",
        "3"
      ]
    },
    {
      "phase": "check",
      "caption": "Koşul doğru. Bir tur daha çalışabiliriz.",
      "code": "for (",
      "condition": "4 <= 4",
      "truth": true,
      "token": "",
      "turn": 3,
      "vars": {
        "adet": 4,
        "i": 4
      },
      "output": [
        "1",
        "2",
        "3"
      ]
    },
    {
      "phase": "body",
      "caption": "Bu turda ekrana 4 yazıldı. Tur sayısı: 4.",
      "code": "Console.WriteLine",
      "condition": "4 <= 4",
      "truth": true,
      "token": "4",
      "turn": 4,
      "vars": {
        "adet": 4,
        "i": 4
      },
      "output": [
        "1",
        "2",
        "3",
        "4"
      ]
    },
    {
      "phase": "update",
      "caption": "Tur tamamlandı. Sayaç 4 → 5 oldu. Şimdi koşulu yeniden kontrol edeceğiz.",
      "code": "for (",
      "condition": "",
      "truth": null,
      "token": "5",
      "turn": 4,
      "vars": {
        "adet": 4,
        "i": 5
      },
      "output": [
        "1",
        "2",
        "3",
        "4"
      ]
    },
    {
      "phase": "check",
      "caption": "Koşul yanlış. Gövdeye tekrar girmiyoruz; döngü bitiyor.",
      "code": "for (",
      "condition": "5 <= 4",
      "truth": false,
      "token": "",
      "turn": 4,
      "vars": {
        "adet": 4,
        "i": 5
      },
      "output": [
        "1",
        "2",
        "3",
        "4"
      ]
    },
    {
      "phase": "end",
      "caption": "Son koşul yanlış olduğu için yeni tur yok. Yazılan satır sayısı 4.",
      "code": "Console.WriteLine",
      "condition": "",
      "truth": null,
      "token": "✓",
      "turn": 4,
      "vars": {
        "adet": 4,
        "i": 5
      },
      "output": [
        "1",
        "2",
        "3",
        "4"
      ]
    }
  ],
  [
    {
      "phase": "start",
      "caption": "Başlangıç bilgileri geldi. Sayaç yalnızca bir kez ilk değerini alır.",
      "code": "int baslangic = Convert.ToInt32(Console.ReadLine());",
      "condition": "",
      "truth": null,
      "token": "",
      "turn": 0,
      "vars": {
        "baslangic": 3,
        "i": 3
      },
      "output": []
    },
    {
      "phase": "init",
      "caption": "for başlığının ilk bölümünde sayaç ilk değerini alır. Bu başlangıç bölümü her tur değil, yalnızca bir kez çalışır.",
      "code": "for (",
      "condition": "",
      "truth": null,
      "token": "3",
      "turn": 0,
      "vars": {
        "baslangic": 3,
        "i": 3
      },
      "output": []
    },
    {
      "phase": "check",
      "caption": "Koşul doğru. Bir tur daha çalışabiliriz.",
      "code": "for (",
      "condition": "3 >= 1",
      "truth": true,
      "token": "",
      "turn": 0,
      "vars": {
        "baslangic": 3,
        "i": 3
      },
      "output": []
    },
    {
      "phase": "body",
      "caption": "Bu turda ekrana 3 yazıldı. Tur sayısı: 1.",
      "code": "Console.WriteLine",
      "condition": "3 >= 1",
      "truth": true,
      "token": "3",
      "turn": 1,
      "vars": {
        "baslangic": 3,
        "i": 3
      },
      "output": [
        "3"
      ]
    },
    {
      "phase": "update",
      "caption": "Tur tamamlandı. Sayaç 3 → 2 oldu. Şimdi koşulu yeniden kontrol edeceğiz.",
      "code": "for (",
      "condition": "",
      "truth": null,
      "token": "2",
      "turn": 1,
      "vars": {
        "baslangic": 3,
        "i": 2
      },
      "output": [
        "3"
      ]
    },
    {
      "phase": "check",
      "caption": "Koşul doğru. Bir tur daha çalışabiliriz.",
      "code": "for (",
      "condition": "2 >= 1",
      "truth": true,
      "token": "",
      "turn": 1,
      "vars": {
        "baslangic": 3,
        "i": 2
      },
      "output": [
        "3"
      ]
    },
    {
      "phase": "body",
      "caption": "Bu turda ekrana 2 yazıldı. Tur sayısı: 2.",
      "code": "Console.WriteLine",
      "condition": "2 >= 1",
      "truth": true,
      "token": "2",
      "turn": 2,
      "vars": {
        "baslangic": 3,
        "i": 2
      },
      "output": [
        "3",
        "2"
      ]
    },
    {
      "phase": "update",
      "caption": "Tur tamamlandı. Sayaç 2 → 1 oldu. Şimdi koşulu yeniden kontrol edeceğiz.",
      "code": "for (",
      "condition": "",
      "truth": null,
      "token": "1",
      "turn": 2,
      "vars": {
        "baslangic": 3,
        "i": 1
      },
      "output": [
        "3",
        "2"
      ]
    },
    {
      "phase": "check",
      "caption": "Koşul doğru. Bir tur daha çalışabiliriz.",
      "code": "for (",
      "condition": "1 >= 1",
      "truth": true,
      "token": "",
      "turn": 2,
      "vars": {
        "baslangic": 3,
        "i": 1
      },
      "output": [
        "3",
        "2"
      ]
    },
    {
      "phase": "body",
      "caption": "Bu turda ekrana 1 yazıldı. Tur sayısı: 3.",
      "code": "Console.WriteLine",
      "condition": "1 >= 1",
      "truth": true,
      "token": "1",
      "turn": 3,
      "vars": {
        "baslangic": 3,
        "i": 1
      },
      "output": [
        "3",
        "2",
        "1"
      ]
    },
    {
      "phase": "update",
      "caption": "Tur tamamlandı. Sayaç 1 → 0 oldu. Şimdi koşulu yeniden kontrol edeceğiz.",
      "code": "for (",
      "condition": "",
      "truth": null,
      "token": "0",
      "turn": 3,
      "vars": {
        "baslangic": 3,
        "i": 0
      },
      "output": [
        "3",
        "2",
        "1"
      ]
    },
    {
      "phase": "check",
      "caption": "Koşul yanlış. Gövdeye tekrar girmiyoruz; döngü bitiyor.",
      "code": "for (",
      "condition": "0 >= 1",
      "truth": false,
      "token": "",
      "turn": 3,
      "vars": {
        "baslangic": 3,
        "i": 0
      },
      "output": [
        "3",
        "2",
        "1"
      ]
    },
    {
      "phase": "end",
      "caption": "Son koşul yanlış olduğu için yeni tur yok. Yazılan satır sayısı 3.",
      "code": "Console.WriteLine",
      "condition": "",
      "truth": null,
      "token": "✓",
      "turn": 3,
      "vars": {
        "baslangic": 3,
        "i": 0
      },
      "output": [
        "3",
        "2",
        "1"
      ]
    }
  ],
  [
    {
      "phase": "start",
      "caption": "Başlangıç bilgileri geldi. Sayaç yalnızca bir kez ilk değerini alır.",
      "code": "int ilk = Convert.ToInt32(Console.ReadLine());",
      "condition": "",
      "truth": null,
      "token": "",
      "turn": 0,
      "vars": {
        "ilk": 3,
        "son": 6,
        "raf": 3
      },
      "output": []
    },
    {
      "phase": "init",
      "caption": "for başlığının ilk bölümünde sayaç ilk değerini alır. Bu başlangıç bölümü her tur değil, yalnızca bir kez çalışır.",
      "code": "for (",
      "condition": "",
      "truth": null,
      "token": "3",
      "turn": 0,
      "vars": {
        "ilk": 3,
        "son": 6,
        "raf": 3
      },
      "output": []
    },
    {
      "phase": "check",
      "caption": "Koşul doğru. Bir tur daha çalışabiliriz.",
      "code": "for (",
      "condition": "3 <= 6",
      "truth": true,
      "token": "",
      "turn": 0,
      "vars": {
        "ilk": 3,
        "son": 6,
        "raf": 3
      },
      "output": []
    },
    {
      "phase": "body",
      "caption": "Bu turda ekrana 3 yazıldı. Tur sayısı: 1.",
      "code": "Console.WriteLine",
      "condition": "3 <= 6",
      "truth": true,
      "token": "3",
      "turn": 1,
      "vars": {
        "ilk": 3,
        "son": 6,
        "raf": 3
      },
      "output": [
        "3"
      ]
    },
    {
      "phase": "update",
      "caption": "Tur tamamlandı. Sayaç 3 → 4 oldu. Şimdi koşulu yeniden kontrol edeceğiz.",
      "code": "for (",
      "condition": "",
      "truth": null,
      "token": "4",
      "turn": 1,
      "vars": {
        "ilk": 3,
        "son": 6,
        "raf": 4
      },
      "output": [
        "3"
      ]
    },
    {
      "phase": "check",
      "caption": "Koşul doğru. Bir tur daha çalışabiliriz.",
      "code": "for (",
      "condition": "4 <= 6",
      "truth": true,
      "token": "",
      "turn": 1,
      "vars": {
        "ilk": 3,
        "son": 6,
        "raf": 4
      },
      "output": [
        "3"
      ]
    },
    {
      "phase": "body",
      "caption": "Bu turda ekrana 4 yazıldı. Tur sayısı: 2.",
      "code": "Console.WriteLine",
      "condition": "4 <= 6",
      "truth": true,
      "token": "4",
      "turn": 2,
      "vars": {
        "ilk": 3,
        "son": 6,
        "raf": 4
      },
      "output": [
        "3",
        "4"
      ]
    },
    {
      "phase": "update",
      "caption": "Tur tamamlandı. Sayaç 4 → 5 oldu. Şimdi koşulu yeniden kontrol edeceğiz.",
      "code": "for (",
      "condition": "",
      "truth": null,
      "token": "5",
      "turn": 2,
      "vars": {
        "ilk": 3,
        "son": 6,
        "raf": 5
      },
      "output": [
        "3",
        "4"
      ]
    },
    {
      "phase": "check",
      "caption": "Koşul doğru. Bir tur daha çalışabiliriz.",
      "code": "for (",
      "condition": "5 <= 6",
      "truth": true,
      "token": "",
      "turn": 2,
      "vars": {
        "ilk": 3,
        "son": 6,
        "raf": 5
      },
      "output": [
        "3",
        "4"
      ]
    },
    {
      "phase": "body",
      "caption": "Bu turda ekrana 5 yazıldı. Tur sayısı: 3.",
      "code": "Console.WriteLine",
      "condition": "5 <= 6",
      "truth": true,
      "token": "5",
      "turn": 3,
      "vars": {
        "ilk": 3,
        "son": 6,
        "raf": 5
      },
      "output": [
        "3",
        "4",
        "5"
      ]
    },
    {
      "phase": "update",
      "caption": "Tur tamamlandı. Sayaç 5 → 6 oldu. Şimdi koşulu yeniden kontrol edeceğiz.",
      "code": "for (",
      "condition": "",
      "truth": null,
      "token": "6",
      "turn": 3,
      "vars": {
        "ilk": 3,
        "son": 6,
        "raf": 6
      },
      "output": [
        "3",
        "4",
        "5"
      ]
    },
    {
      "phase": "check",
      "caption": "Koşul doğru. Bir tur daha çalışabiliriz.",
      "code": "for (",
      "condition": "6 <= 6",
      "truth": true,
      "token": "",
      "turn": 3,
      "vars": {
        "ilk": 3,
        "son": 6,
        "raf": 6
      },
      "output": [
        "3",
        "4",
        "5"
      ]
    },
    {
      "phase": "body",
      "caption": "Bu turda ekrana 6 yazıldı. Tur sayısı: 4.",
      "code": "Console.WriteLine",
      "condition": "6 <= 6",
      "truth": true,
      "token": "6",
      "turn": 4,
      "vars": {
        "ilk": 3,
        "son": 6,
        "raf": 6
      },
      "output": [
        "3",
        "4",
        "5",
        "6"
      ]
    },
    {
      "phase": "update",
      "caption": "Tur tamamlandı. Sayaç 6 → 7 oldu. Şimdi koşulu yeniden kontrol edeceğiz.",
      "code": "for (",
      "condition": "",
      "truth": null,
      "token": "7",
      "turn": 4,
      "vars": {
        "ilk": 3,
        "son": 6,
        "raf": 7
      },
      "output": [
        "3",
        "4",
        "5",
        "6"
      ]
    },
    {
      "phase": "check",
      "caption": "Koşul yanlış. Gövdeye tekrar girmiyoruz; döngü bitiyor.",
      "code": "for (",
      "condition": "7 <= 6",
      "truth": false,
      "token": "",
      "turn": 4,
      "vars": {
        "ilk": 3,
        "son": 6,
        "raf": 7
      },
      "output": [
        "3",
        "4",
        "5",
        "6"
      ]
    },
    {
      "phase": "end",
      "caption": "Son koşul yanlış olduğu için yeni tur yok. Yazılan satır sayısı 4.",
      "code": "Console.WriteLine",
      "condition": "",
      "truth": null,
      "token": "✓",
      "turn": 4,
      "vars": {
        "ilk": 3,
        "son": 6,
        "raf": 7
      },
      "output": [
        "3",
        "4",
        "5",
        "6"
      ]
    }
  ],
  [
    {
      "phase": "start",
      "caption": "Başlangıç bilgileri geldi. Sayaç yalnızca bir kez ilk değerini alır.",
      "code": "int son = Convert.ToInt32(Console.ReadLine());",
      "condition": "",
      "truth": null,
      "token": "",
      "turn": 0,
      "vars": {
        "son": 7,
        "dolap": 2
      },
      "output": []
    },
    {
      "phase": "init",
      "caption": "for başlığının ilk bölümünde sayaç ilk değerini alır. Bu başlangıç bölümü her tur değil, yalnızca bir kez çalışır.",
      "code": "for (",
      "condition": "",
      "truth": null,
      "token": "2",
      "turn": 0,
      "vars": {
        "son": 7,
        "dolap": 2
      },
      "output": []
    },
    {
      "phase": "check",
      "caption": "Koşul doğru. Bir tur daha çalışabiliriz.",
      "code": "for (",
      "condition": "2 <= 7",
      "truth": true,
      "token": "",
      "turn": 0,
      "vars": {
        "son": 7,
        "dolap": 2
      },
      "output": []
    },
    {
      "phase": "body",
      "caption": "Bu turda ekrana 2 yazıldı. Tur sayısı: 1.",
      "code": "Console.WriteLine",
      "condition": "2 <= 7",
      "truth": true,
      "token": "2",
      "turn": 1,
      "vars": {
        "son": 7,
        "dolap": 2
      },
      "output": [
        "2"
      ]
    },
    {
      "phase": "update",
      "caption": "Tur tamamlandı. Sayaç 2 → 4 oldu. Şimdi koşulu yeniden kontrol edeceğiz.",
      "code": "for (",
      "condition": "",
      "truth": null,
      "token": "4",
      "turn": 1,
      "vars": {
        "son": 7,
        "dolap": 4
      },
      "output": [
        "2"
      ]
    },
    {
      "phase": "check",
      "caption": "Koşul doğru. Bir tur daha çalışabiliriz.",
      "code": "for (",
      "condition": "4 <= 7",
      "truth": true,
      "token": "",
      "turn": 1,
      "vars": {
        "son": 7,
        "dolap": 4
      },
      "output": [
        "2"
      ]
    },
    {
      "phase": "body",
      "caption": "Bu turda ekrana 4 yazıldı. Tur sayısı: 2.",
      "code": "Console.WriteLine",
      "condition": "4 <= 7",
      "truth": true,
      "token": "4",
      "turn": 2,
      "vars": {
        "son": 7,
        "dolap": 4
      },
      "output": [
        "2",
        "4"
      ]
    },
    {
      "phase": "update",
      "caption": "Tur tamamlandı. Sayaç 4 → 6 oldu. Şimdi koşulu yeniden kontrol edeceğiz.",
      "code": "for (",
      "condition": "",
      "truth": null,
      "token": "6",
      "turn": 2,
      "vars": {
        "son": 7,
        "dolap": 6
      },
      "output": [
        "2",
        "4"
      ]
    },
    {
      "phase": "check",
      "caption": "Koşul doğru. Bir tur daha çalışabiliriz.",
      "code": "for (",
      "condition": "6 <= 7",
      "truth": true,
      "token": "",
      "turn": 2,
      "vars": {
        "son": 7,
        "dolap": 6
      },
      "output": [
        "2",
        "4"
      ]
    },
    {
      "phase": "body",
      "caption": "Bu turda ekrana 6 yazıldı. Tur sayısı: 3.",
      "code": "Console.WriteLine",
      "condition": "6 <= 7",
      "truth": true,
      "token": "6",
      "turn": 3,
      "vars": {
        "son": 7,
        "dolap": 6
      },
      "output": [
        "2",
        "4",
        "6"
      ]
    },
    {
      "phase": "update",
      "caption": "Tur tamamlandı. Sayaç 6 → 8 oldu. Şimdi koşulu yeniden kontrol edeceğiz.",
      "code": "for (",
      "condition": "",
      "truth": null,
      "token": "8",
      "turn": 3,
      "vars": {
        "son": 7,
        "dolap": 8
      },
      "output": [
        "2",
        "4",
        "6"
      ]
    },
    {
      "phase": "check",
      "caption": "Koşul yanlış. Gövdeye tekrar girmiyoruz; döngü bitiyor.",
      "code": "for (",
      "condition": "8 <= 7",
      "truth": false,
      "token": "",
      "turn": 3,
      "vars": {
        "son": 7,
        "dolap": 8
      },
      "output": [
        "2",
        "4",
        "6"
      ]
    },
    {
      "phase": "end",
      "caption": "Son koşul yanlış olduğu için yeni tur yok. Yazılan satır sayısı 3.",
      "code": "Console.WriteLine",
      "condition": "",
      "truth": null,
      "token": "✓",
      "turn": 3,
      "vars": {
        "son": 7,
        "dolap": 8
      },
      "output": [
        "2",
        "4",
        "6"
      ]
    }
  ],
  [
    {
      "phase": "start",
      "caption": "Başlangıç bilgileri geldi. Sayaç yalnızca bir kez ilk değerini alır.",
      "code": "int son = Convert.ToInt32(Console.ReadLine());",
      "condition": "",
      "truth": null,
      "token": "",
      "turn": 0,
      "vars": {
        "son": 4,
        "i": 1,
        "toplam": 0
      },
      "output": []
    },
    {
      "phase": "init",
      "caption": "for başlığının ilk bölümünde sayaç ilk değerini alır. Bu başlangıç bölümü her tur değil, yalnızca bir kez çalışır.",
      "code": "for (",
      "condition": "",
      "truth": null,
      "token": "1",
      "turn": 0,
      "vars": {
        "son": 4,
        "i": 1,
        "toplam": 0
      },
      "output": []
    },
    {
      "phase": "check",
      "caption": "Koşul doğru. Bir tur daha çalışabiliriz.",
      "code": "for (",
      "condition": "1 <= 4",
      "truth": true,
      "token": "",
      "turn": 0,
      "vars": {
        "son": 4,
        "i": 1,
        "toplam": 0
      },
      "output": []
    },
    {
      "phase": "body",
      "caption": "Bu turdaki 1 toplama eklendi. Ara toplam 1. Henüz ekrana yazmıyoruz.",
      "code": "toplam +=",
      "condition": "1 <= 4",
      "truth": true,
      "token": "1",
      "turn": 1,
      "vars": {
        "son": 4,
        "i": 1,
        "toplam": 1
      },
      "output": []
    },
    {
      "phase": "update",
      "caption": "Tur tamamlandı. Sayaç 1 → 2 oldu. Şimdi koşulu yeniden kontrol edeceğiz.",
      "code": "for (",
      "condition": "",
      "truth": null,
      "token": "2",
      "turn": 1,
      "vars": {
        "son": 4,
        "i": 2,
        "toplam": 1
      },
      "output": []
    },
    {
      "phase": "check",
      "caption": "Koşul doğru. Bir tur daha çalışabiliriz.",
      "code": "for (",
      "condition": "2 <= 4",
      "truth": true,
      "token": "",
      "turn": 1,
      "vars": {
        "son": 4,
        "i": 2,
        "toplam": 1
      },
      "output": []
    },
    {
      "phase": "body",
      "caption": "Bu turdaki 2 toplama eklendi. Ara toplam 3. Henüz ekrana yazmıyoruz.",
      "code": "toplam +=",
      "condition": "2 <= 4",
      "truth": true,
      "token": "2",
      "turn": 2,
      "vars": {
        "son": 4,
        "i": 2,
        "toplam": 3
      },
      "output": []
    },
    {
      "phase": "update",
      "caption": "Tur tamamlandı. Sayaç 2 → 3 oldu. Şimdi koşulu yeniden kontrol edeceğiz.",
      "code": "for (",
      "condition": "",
      "truth": null,
      "token": "3",
      "turn": 2,
      "vars": {
        "son": 4,
        "i": 3,
        "toplam": 3
      },
      "output": []
    },
    {
      "phase": "check",
      "caption": "Koşul doğru. Bir tur daha çalışabiliriz.",
      "code": "for (",
      "condition": "3 <= 4",
      "truth": true,
      "token": "",
      "turn": 2,
      "vars": {
        "son": 4,
        "i": 3,
        "toplam": 3
      },
      "output": []
    },
    {
      "phase": "body",
      "caption": "Bu turdaki 3 toplama eklendi. Ara toplam 6. Henüz ekrana yazmıyoruz.",
      "code": "toplam +=",
      "condition": "3 <= 4",
      "truth": true,
      "token": "3",
      "turn": 3,
      "vars": {
        "son": 4,
        "i": 3,
        "toplam": 6
      },
      "output": []
    },
    {
      "phase": "update",
      "caption": "Tur tamamlandı. Sayaç 3 → 4 oldu. Şimdi koşulu yeniden kontrol edeceğiz.",
      "code": "for (",
      "condition": "",
      "truth": null,
      "token": "4",
      "turn": 3,
      "vars": {
        "son": 4,
        "i": 4,
        "toplam": 6
      },
      "output": []
    },
    {
      "phase": "check",
      "caption": "Koşul doğru. Bir tur daha çalışabiliriz.",
      "code": "for (",
      "condition": "4 <= 4",
      "truth": true,
      "token": "",
      "turn": 3,
      "vars": {
        "son": 4,
        "i": 4,
        "toplam": 6
      },
      "output": []
    },
    {
      "phase": "body",
      "caption": "Bu turdaki 4 toplama eklendi. Ara toplam 10. Henüz ekrana yazmıyoruz.",
      "code": "toplam +=",
      "condition": "4 <= 4",
      "truth": true,
      "token": "4",
      "turn": 4,
      "vars": {
        "son": 4,
        "i": 4,
        "toplam": 10
      },
      "output": []
    },
    {
      "phase": "update",
      "caption": "Tur tamamlandı. Sayaç 4 → 5 oldu. Şimdi koşulu yeniden kontrol edeceğiz.",
      "code": "for (",
      "condition": "",
      "truth": null,
      "token": "5",
      "turn": 4,
      "vars": {
        "son": 4,
        "i": 5,
        "toplam": 10
      },
      "output": []
    },
    {
      "phase": "check",
      "caption": "Koşul yanlış. Gövdeye tekrar girmiyoruz; döngü bitiyor.",
      "code": "for (",
      "condition": "5 <= 4",
      "truth": false,
      "token": "",
      "turn": 4,
      "vars": {
        "son": 4,
        "i": 5,
        "toplam": 10
      },
      "output": []
    },
    {
      "phase": "end",
      "caption": "Döngü bitti. Toplamı yalnızca şimdi yazıyoruz: 10.",
      "code": "Console.WriteLine",
      "condition": "",
      "truth": null,
      "token": "✓",
      "turn": 4,
      "vars": {
        "son": 4,
        "i": 5,
        "toplam": 10
      },
      "output": [
        "10"
      ]
    }
  ],
  [
    {
      "phase": "start",
      "caption": "Başlangıç bilgileri geldi. Sayaç yalnızca bir kez ilk değerini alır.",
      "code": "int rafSayisi = Convert.ToInt32(Console.ReadLine());",
      "condition": "",
      "truth": null,
      "token": "",
      "turn": 0,
      "vars": {
        "rafSayisi": 3,
        "i": 0,
        "toplam": 0
      },
      "output": []
    },
    {
      "phase": "init",
      "caption": "for başlığının ilk bölümünde sayaç ilk değerini alır. Bu başlangıç bölümü her tur değil, yalnızca bir kez çalışır.",
      "code": "for (",
      "condition": "",
      "truth": null,
      "token": "0",
      "turn": 0,
      "vars": {
        "rafSayisi": 3,
        "i": 0,
        "toplam": 0
      },
      "output": []
    },
    {
      "phase": "check",
      "caption": "Koşul doğru. Bir tur daha çalışabiliriz.",
      "code": "for (",
      "condition": "0 < 3",
      "truth": true,
      "token": "",
      "turn": 0,
      "vars": {
        "rafSayisi": 3,
        "i": 0,
        "toplam": 0
      },
      "output": []
    },
    {
      "phase": "read",
      "caption": "Bu turda kullanıcıdan yeni bir delil sayısı okuduk: 4.",
      "code": "int delil =",
      "condition": "0 < 3",
      "truth": true,
      "token": "4",
      "turn": 1,
      "vars": {
        "rafSayisi": 3,
        "i": 0,
        "toplam": 0,
        "delil": 4
      },
      "output": []
    },
    {
      "phase": "body",
      "caption": "4 toplama eklendi. Yeni toplam 4.",
      "code": "toplam +=",
      "condition": "0 < 3",
      "truth": true,
      "token": "4",
      "turn": 1,
      "vars": {
        "rafSayisi": 3,
        "i": 0,
        "toplam": 4,
        "delil": 4
      },
      "output": []
    },
    {
      "phase": "update",
      "caption": "Tur tamamlandı. Sayaç 0 → 1 oldu. Şimdi koşulu yeniden kontrol edeceğiz.",
      "code": "for (",
      "condition": "",
      "truth": null,
      "token": "1",
      "turn": 1,
      "vars": {
        "rafSayisi": 3,
        "i": 1,
        "toplam": 4,
        "delil": 4
      },
      "output": []
    },
    {
      "phase": "check",
      "caption": "Koşul doğru. Bir tur daha çalışabiliriz.",
      "code": "for (",
      "condition": "1 < 3",
      "truth": true,
      "token": "",
      "turn": 1,
      "vars": {
        "rafSayisi": 3,
        "i": 1,
        "toplam": 4,
        "delil": 4
      },
      "output": []
    },
    {
      "phase": "read",
      "caption": "Bu turda kullanıcıdan yeni bir delil sayısı okuduk: 2.",
      "code": "int delil =",
      "condition": "1 < 3",
      "truth": true,
      "token": "2",
      "turn": 2,
      "vars": {
        "rafSayisi": 3,
        "i": 1,
        "toplam": 4,
        "delil": 2
      },
      "output": []
    },
    {
      "phase": "body",
      "caption": "2 toplama eklendi. Yeni toplam 6.",
      "code": "toplam +=",
      "condition": "1 < 3",
      "truth": true,
      "token": "2",
      "turn": 2,
      "vars": {
        "rafSayisi": 3,
        "i": 1,
        "toplam": 6,
        "delil": 2
      },
      "output": []
    },
    {
      "phase": "update",
      "caption": "Tur tamamlandı. Sayaç 1 → 2 oldu. Şimdi koşulu yeniden kontrol edeceğiz.",
      "code": "for (",
      "condition": "",
      "truth": null,
      "token": "2",
      "turn": 2,
      "vars": {
        "rafSayisi": 3,
        "i": 2,
        "toplam": 6,
        "delil": 2
      },
      "output": []
    },
    {
      "phase": "check",
      "caption": "Koşul doğru. Bir tur daha çalışabiliriz.",
      "code": "for (",
      "condition": "2 < 3",
      "truth": true,
      "token": "",
      "turn": 2,
      "vars": {
        "rafSayisi": 3,
        "i": 2,
        "toplam": 6,
        "delil": 2
      },
      "output": []
    },
    {
      "phase": "read",
      "caption": "Bu turda kullanıcıdan yeni bir delil sayısı okuduk: 5.",
      "code": "int delil =",
      "condition": "2 < 3",
      "truth": true,
      "token": "5",
      "turn": 3,
      "vars": {
        "rafSayisi": 3,
        "i": 2,
        "toplam": 6,
        "delil": 5
      },
      "output": []
    },
    {
      "phase": "body",
      "caption": "5 toplama eklendi. Yeni toplam 11.",
      "code": "toplam +=",
      "condition": "2 < 3",
      "truth": true,
      "token": "5",
      "turn": 3,
      "vars": {
        "rafSayisi": 3,
        "i": 2,
        "toplam": 11,
        "delil": 5
      },
      "output": []
    },
    {
      "phase": "update",
      "caption": "Tur tamamlandı. Sayaç 2 → 3 oldu. Şimdi koşulu yeniden kontrol edeceğiz.",
      "code": "for (",
      "condition": "",
      "truth": null,
      "token": "3",
      "turn": 3,
      "vars": {
        "rafSayisi": 3,
        "i": 3,
        "toplam": 11,
        "delil": 5
      },
      "output": []
    },
    {
      "phase": "check",
      "caption": "Koşul yanlış. Gövdeye tekrar girmiyoruz; döngü bitiyor.",
      "code": "for (",
      "condition": "3 < 3",
      "truth": false,
      "token": "",
      "turn": 3,
      "vars": {
        "rafSayisi": 3,
        "i": 3,
        "toplam": 11,
        "delil": 5
      },
      "output": []
    },
    {
      "phase": "end",
      "caption": "Döngü bitti. Toplamı yalnızca şimdi yazıyoruz: 11.",
      "code": "Console.WriteLine",
      "condition": "",
      "truth": null,
      "token": "✓",
      "turn": 3,
      "vars": {
        "rafSayisi": 3,
        "i": 3,
        "toplam": 11,
        "delil": 5
      },
      "output": [
        "11"
      ]
    }
  ],
  [
    {
      "phase": "start",
      "caption": "Başlangıç bilgileri geldi. Sayaç yalnızca bir kez ilk değerini alır.",
      "code": "int kisiSayisi = Convert.ToInt32(Console.ReadLine());",
      "condition": "",
      "truth": null,
      "token": "",
      "turn": 0,
      "vars": {
        "kisiSayisi": 4,
        "i": 0,
        "gecen": 0
      },
      "output": []
    },
    {
      "phase": "init",
      "caption": "for başlığının ilk bölümünde sayaç ilk değerini alır. Bu başlangıç bölümü her tur değil, yalnızca bir kez çalışır.",
      "code": "for (",
      "condition": "",
      "truth": null,
      "token": "0",
      "turn": 0,
      "vars": {
        "kisiSayisi": 4,
        "i": 0,
        "gecen": 0
      },
      "output": []
    },
    {
      "phase": "check",
      "caption": "Koşul doğru. Bir tur daha çalışabiliriz.",
      "code": "for (",
      "condition": "0 < 4",
      "truth": true,
      "token": "",
      "turn": 0,
      "vars": {
        "kisiSayisi": 4,
        "i": 0,
        "gecen": 0
      },
      "output": []
    },
    {
      "phase": "read",
      "caption": "Bu turda kullanıcıdan yeni bir puan okuduk: 45.",
      "code": "int puan =",
      "condition": "0 < 4",
      "truth": true,
      "token": "45",
      "turn": 1,
      "vars": {
        "kisiSayisi": 4,
        "i": 0,
        "gecen": 0,
        "puan": 45
      },
      "output": []
    },
    {
      "phase": "body",
      "caption": "45 50’den küçük: geçen öğrenci sayısı değişmedi.",
      "code": "if (puan",
      "condition": "45 >= 50",
      "truth": false,
      "token": "45",
      "turn": 1,
      "vars": {
        "kisiSayisi": 4,
        "i": 0,
        "gecen": 0,
        "puan": 45
      },
      "output": []
    },
    {
      "phase": "update",
      "caption": "Tur tamamlandı. Sayaç 0 → 1 oldu. Şimdi koşulu yeniden kontrol edeceğiz.",
      "code": "for (",
      "condition": "",
      "truth": null,
      "token": "1",
      "turn": 1,
      "vars": {
        "kisiSayisi": 4,
        "i": 1,
        "gecen": 0,
        "puan": 45
      },
      "output": []
    },
    {
      "phase": "check",
      "caption": "Koşul doğru. Bir tur daha çalışabiliriz.",
      "code": "for (",
      "condition": "1 < 4",
      "truth": true,
      "token": "",
      "turn": 1,
      "vars": {
        "kisiSayisi": 4,
        "i": 1,
        "gecen": 0,
        "puan": 45
      },
      "output": []
    },
    {
      "phase": "read",
      "caption": "Bu turda kullanıcıdan yeni bir puan okuduk: 50.",
      "code": "int puan =",
      "condition": "1 < 4",
      "truth": true,
      "token": "50",
      "turn": 2,
      "vars": {
        "kisiSayisi": 4,
        "i": 1,
        "gecen": 0,
        "puan": 50
      },
      "output": []
    },
    {
      "phase": "body",
      "caption": "50 en az 50: geçen öğrenci sayısı 1 oldu.",
      "code": "if (puan",
      "condition": "50 >= 50",
      "truth": true,
      "token": "50",
      "turn": 2,
      "vars": {
        "kisiSayisi": 4,
        "i": 1,
        "gecen": 1,
        "puan": 50
      },
      "output": []
    },
    {
      "phase": "update",
      "caption": "Tur tamamlandı. Sayaç 1 → 2 oldu. Şimdi koşulu yeniden kontrol edeceğiz.",
      "code": "for (",
      "condition": "",
      "truth": null,
      "token": "2",
      "turn": 2,
      "vars": {
        "kisiSayisi": 4,
        "i": 2,
        "gecen": 1,
        "puan": 50
      },
      "output": []
    },
    {
      "phase": "check",
      "caption": "Koşul doğru. Bir tur daha çalışabiliriz.",
      "code": "for (",
      "condition": "2 < 4",
      "truth": true,
      "token": "",
      "turn": 2,
      "vars": {
        "kisiSayisi": 4,
        "i": 2,
        "gecen": 1,
        "puan": 50
      },
      "output": []
    },
    {
      "phase": "read",
      "caption": "Bu turda kullanıcıdan yeni bir puan okuduk: 80.",
      "code": "int puan =",
      "condition": "2 < 4",
      "truth": true,
      "token": "80",
      "turn": 3,
      "vars": {
        "kisiSayisi": 4,
        "i": 2,
        "gecen": 1,
        "puan": 80
      },
      "output": []
    },
    {
      "phase": "body",
      "caption": "80 en az 50: geçen öğrenci sayısı 2 oldu.",
      "code": "if (puan",
      "condition": "80 >= 50",
      "truth": true,
      "token": "80",
      "turn": 3,
      "vars": {
        "kisiSayisi": 4,
        "i": 2,
        "gecen": 2,
        "puan": 80
      },
      "output": []
    },
    {
      "phase": "update",
      "caption": "Tur tamamlandı. Sayaç 2 → 3 oldu. Şimdi koşulu yeniden kontrol edeceğiz.",
      "code": "for (",
      "condition": "",
      "truth": null,
      "token": "3",
      "turn": 3,
      "vars": {
        "kisiSayisi": 4,
        "i": 3,
        "gecen": 2,
        "puan": 80
      },
      "output": []
    },
    {
      "phase": "check",
      "caption": "Koşul doğru. Bir tur daha çalışabiliriz.",
      "code": "for (",
      "condition": "3 < 4",
      "truth": true,
      "token": "",
      "turn": 3,
      "vars": {
        "kisiSayisi": 4,
        "i": 3,
        "gecen": 2,
        "puan": 80
      },
      "output": []
    },
    {
      "phase": "read",
      "caption": "Bu turda kullanıcıdan yeni bir puan okuduk: 20.",
      "code": "int puan =",
      "condition": "3 < 4",
      "truth": true,
      "token": "20",
      "turn": 4,
      "vars": {
        "kisiSayisi": 4,
        "i": 3,
        "gecen": 2,
        "puan": 20
      },
      "output": []
    },
    {
      "phase": "body",
      "caption": "20 50’den küçük: geçen öğrenci sayısı değişmedi.",
      "code": "if (puan",
      "condition": "20 >= 50",
      "truth": false,
      "token": "20",
      "turn": 4,
      "vars": {
        "kisiSayisi": 4,
        "i": 3,
        "gecen": 2,
        "puan": 20
      },
      "output": []
    },
    {
      "phase": "update",
      "caption": "Tur tamamlandı. Sayaç 3 → 4 oldu. Şimdi koşulu yeniden kontrol edeceğiz.",
      "code": "for (",
      "condition": "",
      "truth": null,
      "token": "4",
      "turn": 4,
      "vars": {
        "kisiSayisi": 4,
        "i": 4,
        "gecen": 2,
        "puan": 20
      },
      "output": []
    },
    {
      "phase": "check",
      "caption": "Koşul yanlış. Gövdeye tekrar girmiyoruz; döngü bitiyor.",
      "code": "for (",
      "condition": "4 < 4",
      "truth": false,
      "token": "",
      "turn": 4,
      "vars": {
        "kisiSayisi": 4,
        "i": 4,
        "gecen": 2,
        "puan": 20
      },
      "output": []
    },
    {
      "phase": "end",
      "caption": "Bütün öğrenciler kontrol edildi. Geçen öğrenci sayısı 2.",
      "code": "Console.WriteLine",
      "condition": "",
      "truth": null,
      "token": "✓",
      "turn": 4,
      "vars": {
        "kisiSayisi": 4,
        "i": 4,
        "gecen": 2,
        "puan": 20
      },
      "output": [
        "2"
      ]
    }
  ],
  [
    {
      "phase": "start",
      "caption": "Paket sayısı 3. while önce koşula bakar.",
      "code": "int kalan = Convert.ToInt32(Console.ReadLine());",
      "condition": "",
      "truth": null,
      "token": "",
      "turn": 0,
      "vars": {
        "kalan": 3
      },
      "output": []
    },
    {
      "phase": "check",
      "caption": "Koşul doğru. Bir tur daha çalışabiliriz.",
      "code": "while (",
      "condition": "3 > 0",
      "truth": true,
      "token": "",
      "turn": 0,
      "vars": {
        "kalan": 3
      },
      "output": []
    },
    {
      "phase": "body",
      "caption": "İşlenecek paket sayısı 3 olarak yazıldı.",
      "code": "Console.WriteLine(kalan)",
      "condition": "3 > 0",
      "truth": true,
      "token": "3",
      "turn": 1,
      "vars": {
        "kalan": 3
      },
      "output": [
        "3"
      ]
    },
    {
      "phase": "update",
      "caption": "Bir paket işlendi: 3 → 2. Azaltma komutu olmazsa bu döngü bitmez.",
      "code": "kalan--",
      "condition": "",
      "truth": null,
      "token": "2",
      "turn": 1,
      "vars": {
        "kalan": 2
      },
      "output": [
        "3"
      ]
    },
    {
      "phase": "check",
      "caption": "Koşul doğru. Bir tur daha çalışabiliriz.",
      "code": "while (",
      "condition": "2 > 0",
      "truth": true,
      "token": "",
      "turn": 1,
      "vars": {
        "kalan": 2
      },
      "output": [
        "3"
      ]
    },
    {
      "phase": "body",
      "caption": "İşlenecek paket sayısı 2 olarak yazıldı.",
      "code": "Console.WriteLine(kalan)",
      "condition": "2 > 0",
      "truth": true,
      "token": "2",
      "turn": 2,
      "vars": {
        "kalan": 2
      },
      "output": [
        "3",
        "2"
      ]
    },
    {
      "phase": "update",
      "caption": "Bir paket işlendi: 2 → 1. Azaltma komutu olmazsa bu döngü bitmez.",
      "code": "kalan--",
      "condition": "",
      "truth": null,
      "token": "1",
      "turn": 2,
      "vars": {
        "kalan": 1
      },
      "output": [
        "3",
        "2"
      ]
    },
    {
      "phase": "check",
      "caption": "Koşul doğru. Bir tur daha çalışabiliriz.",
      "code": "while (",
      "condition": "1 > 0",
      "truth": true,
      "token": "",
      "turn": 2,
      "vars": {
        "kalan": 1
      },
      "output": [
        "3",
        "2"
      ]
    },
    {
      "phase": "body",
      "caption": "İşlenecek paket sayısı 1 olarak yazıldı.",
      "code": "Console.WriteLine(kalan)",
      "condition": "1 > 0",
      "truth": true,
      "token": "1",
      "turn": 3,
      "vars": {
        "kalan": 1
      },
      "output": [
        "3",
        "2",
        "1"
      ]
    },
    {
      "phase": "update",
      "caption": "Bir paket işlendi: 1 → 0. Azaltma komutu olmazsa bu döngü bitmez.",
      "code": "kalan--",
      "condition": "",
      "truth": null,
      "token": "0",
      "turn": 3,
      "vars": {
        "kalan": 0
      },
      "output": [
        "3",
        "2",
        "1"
      ]
    },
    {
      "phase": "check",
      "caption": "Koşul yanlış. Gövdeye tekrar girmiyoruz; döngü bitiyor.",
      "code": "while (",
      "condition": "0 > 0",
      "truth": false,
      "token": "",
      "turn": 3,
      "vars": {
        "kalan": 0
      },
      "output": [
        "3",
        "2",
        "1"
      ]
    },
    {
      "phase": "end",
      "caption": "Bant boş. kalan = 0 olduğu için while gövdesi artık çalışmaz.",
      "code": "Console.WriteLine",
      "condition": "",
      "truth": null,
      "token": "✓",
      "turn": 3,
      "vars": {
        "kalan": 0
      },
      "output": [
        "3",
        "2",
        "1"
      ]
    }
  ],
  [
    {
      "phase": "start",
      "caption": "Pil 60 seviyesinde. Her tur 10 puan şarj edeceğiz.",
      "code": "int pil = Convert.ToInt32(Console.ReadLine());",
      "condition": "",
      "truth": null,
      "token": "",
      "turn": 0,
      "vars": {
        "pil": 60
      },
      "output": []
    },
    {
      "phase": "check",
      "caption": "Koşul doğru. Bir tur daha çalışabiliriz.",
      "code": "while (",
      "condition": "60 < 100",
      "truth": true,
      "token": "",
      "turn": 0,
      "vars": {
        "pil": 60
      },
      "output": []
    },
    {
      "phase": "work",
      "caption": "Önce pili 10 artırdık. Yeni değer 70.",
      "code": "pil += 10",
      "condition": "",
      "truth": null,
      "token": "70",
      "turn": 1,
      "vars": {
        "pil": 70
      },
      "output": []
    },
    {
      "phase": "body",
      "caption": "Artırılmış pil seviyesi yazılıyor: 70.",
      "code": "Console.WriteLine(pil)",
      "condition": "",
      "truth": null,
      "token": "70",
      "turn": 1,
      "vars": {
        "pil": 70
      },
      "output": [
        "70"
      ]
    },
    {
      "phase": "repeat",
      "caption": "Bu tur bitti. Pil doldu mu diye yeniden bakacağız.",
      "code": "while (",
      "condition": "",
      "truth": null,
      "token": "70",
      "turn": 1,
      "vars": {
        "pil": 70
      },
      "output": [
        "70"
      ]
    },
    {
      "phase": "check",
      "caption": "Koşul doğru. Bir tur daha çalışabiliriz.",
      "code": "while (",
      "condition": "70 < 100",
      "truth": true,
      "token": "",
      "turn": 1,
      "vars": {
        "pil": 70
      },
      "output": [
        "70"
      ]
    },
    {
      "phase": "work",
      "caption": "Önce pili 10 artırdık. Yeni değer 80.",
      "code": "pil += 10",
      "condition": "",
      "truth": null,
      "token": "80",
      "turn": 2,
      "vars": {
        "pil": 80
      },
      "output": [
        "70"
      ]
    },
    {
      "phase": "body",
      "caption": "Artırılmış pil seviyesi yazılıyor: 80.",
      "code": "Console.WriteLine(pil)",
      "condition": "",
      "truth": null,
      "token": "80",
      "turn": 2,
      "vars": {
        "pil": 80
      },
      "output": [
        "70",
        "80"
      ]
    },
    {
      "phase": "repeat",
      "caption": "Bu tur bitti. Pil doldu mu diye yeniden bakacağız.",
      "code": "while (",
      "condition": "",
      "truth": null,
      "token": "80",
      "turn": 2,
      "vars": {
        "pil": 80
      },
      "output": [
        "70",
        "80"
      ]
    },
    {
      "phase": "check",
      "caption": "Koşul doğru. Bir tur daha çalışabiliriz.",
      "code": "while (",
      "condition": "80 < 100",
      "truth": true,
      "token": "",
      "turn": 2,
      "vars": {
        "pil": 80
      },
      "output": [
        "70",
        "80"
      ]
    },
    {
      "phase": "work",
      "caption": "Önce pili 10 artırdık. Yeni değer 90.",
      "code": "pil += 10",
      "condition": "",
      "truth": null,
      "token": "90",
      "turn": 3,
      "vars": {
        "pil": 90
      },
      "output": [
        "70",
        "80"
      ]
    },
    {
      "phase": "body",
      "caption": "Artırılmış pil seviyesi yazılıyor: 90.",
      "code": "Console.WriteLine(pil)",
      "condition": "",
      "truth": null,
      "token": "90",
      "turn": 3,
      "vars": {
        "pil": 90
      },
      "output": [
        "70",
        "80",
        "90"
      ]
    },
    {
      "phase": "repeat",
      "caption": "Bu tur bitti. Pil doldu mu diye yeniden bakacağız.",
      "code": "while (",
      "condition": "",
      "truth": null,
      "token": "90",
      "turn": 3,
      "vars": {
        "pil": 90
      },
      "output": [
        "70",
        "80",
        "90"
      ]
    },
    {
      "phase": "check",
      "caption": "Koşul doğru. Bir tur daha çalışabiliriz.",
      "code": "while (",
      "condition": "90 < 100",
      "truth": true,
      "token": "",
      "turn": 3,
      "vars": {
        "pil": 90
      },
      "output": [
        "70",
        "80",
        "90"
      ]
    },
    {
      "phase": "work",
      "caption": "Önce pili 10 artırdık. Yeni değer 100.",
      "code": "pil += 10",
      "condition": "",
      "truth": null,
      "token": "100",
      "turn": 4,
      "vars": {
        "pil": 100
      },
      "output": [
        "70",
        "80",
        "90"
      ]
    },
    {
      "phase": "body",
      "caption": "Artırılmış pil seviyesi yazılıyor: 100.",
      "code": "Console.WriteLine(pil)",
      "condition": "",
      "truth": null,
      "token": "100",
      "turn": 4,
      "vars": {
        "pil": 100
      },
      "output": [
        "70",
        "80",
        "90",
        "100"
      ]
    },
    {
      "phase": "repeat",
      "caption": "Bu tur bitti. Pil doldu mu diye yeniden bakacağız.",
      "code": "while (",
      "condition": "",
      "truth": null,
      "token": "100",
      "turn": 4,
      "vars": {
        "pil": 100
      },
      "output": [
        "70",
        "80",
        "90",
        "100"
      ]
    },
    {
      "phase": "check",
      "caption": "Koşul yanlış. Gövdeye tekrar girmiyoruz; döngü bitiyor.",
      "code": "while (",
      "condition": "100 < 100",
      "truth": false,
      "token": "",
      "turn": 4,
      "vars": {
        "pil": 100
      },
      "output": [
        "70",
        "80",
        "90",
        "100"
      ]
    },
    {
      "phase": "end",
      "caption": "Pil 100 oldu. 100 < 100 yanlış, şarj döngüsü durur.",
      "code": "Console.WriteLine",
      "condition": "",
      "truth": null,
      "token": "✓",
      "turn": 4,
      "vars": {
        "pil": 100
      },
      "output": [
        "70",
        "80",
        "90",
        "100"
      ]
    }
  ],
  [
    {
      "phase": "start",
      "caption": "İlk şifre geldi: kirmizi. Doğru şifre mavi.",
      "code": "string sifre = Console.ReadLine();",
      "condition": "",
      "truth": null,
      "token": "",
      "turn": 0,
      "vars": {
        "sifre": "kirmizi"
      },
      "output": []
    },
    {
      "phase": "check",
      "caption": "Koşul doğru. Bir tur daha çalışabiliriz.",
      "code": "while (",
      "condition": "\"kirmizi\" != \"mavi\"",
      "truth": true,
      "token": "",
      "turn": 0,
      "vars": {
        "sifre": "kirmizi"
      },
      "output": []
    },
    {
      "phase": "body",
      "caption": "Şifre yanlış olduğu için Tekrar dene yazıldı.",
      "code": "Console.WriteLine(\"Tekrar dene\")",
      "condition": "",
      "truth": null,
      "token": "kirmizi",
      "turn": 1,
      "vars": {
        "sifre": "kirmizi"
      },
      "output": [
        "Tekrar dene"
      ]
    },
    {
      "phase": "update",
      "caption": "Yeni şifre okundu: sari. Aynı eski şifreyi kontrol etmiyoruz.",
      "code": "sifre = Console.ReadLine",
      "condition": "",
      "truth": null,
      "token": "sari",
      "turn": 1,
      "vars": {
        "sifre": "sari"
      },
      "output": [
        "Tekrar dene"
      ]
    },
    {
      "phase": "check",
      "caption": "Koşul doğru. Bir tur daha çalışabiliriz.",
      "code": "while (",
      "condition": "\"sari\" != \"mavi\"",
      "truth": true,
      "token": "",
      "turn": 1,
      "vars": {
        "sifre": "sari"
      },
      "output": [
        "Tekrar dene"
      ]
    },
    {
      "phase": "body",
      "caption": "Şifre yanlış olduğu için Tekrar dene yazıldı.",
      "code": "Console.WriteLine(\"Tekrar dene\")",
      "condition": "",
      "truth": null,
      "token": "sari",
      "turn": 2,
      "vars": {
        "sifre": "sari"
      },
      "output": [
        "Tekrar dene",
        "Tekrar dene"
      ]
    },
    {
      "phase": "update",
      "caption": "Yeni şifre okundu: mavi. Aynı eski şifreyi kontrol etmiyoruz.",
      "code": "sifre = Console.ReadLine",
      "condition": "",
      "truth": null,
      "token": "mavi",
      "turn": 2,
      "vars": {
        "sifre": "mavi"
      },
      "output": [
        "Tekrar dene",
        "Tekrar dene"
      ]
    },
    {
      "phase": "check",
      "caption": "Koşul yanlış. Gövdeye tekrar girmiyoruz; döngü bitiyor.",
      "code": "while (",
      "condition": "\"mavi\" != \"mavi\"",
      "truth": false,
      "token": "",
      "turn": 2,
      "vars": {
        "sifre": "mavi"
      },
      "output": [
        "Tekrar dene",
        "Tekrar dene"
      ]
    },
    {
      "phase": "end",
      "caption": "Doğru şifre geldi. while bitti; Giriş açıldı bir kez yazıldı.",
      "code": "Console.WriteLine",
      "condition": "",
      "truth": null,
      "token": "✓",
      "turn": 2,
      "vars": {
        "sifre": "mavi"
      },
      "output": [
        "Tekrar dene",
        "Tekrar dene",
        "Giriş açıldı"
      ]
    }
  ],
  [
    {
      "phase": "start",
      "caption": "İlk sayı okundu. 0 gelene kadar toplamaya devam edeceğiz.",
      "code": "int sayi = Convert.ToInt32(Console.ReadLine());",
      "condition": "",
      "truth": null,
      "token": "",
      "turn": 0,
      "vars": {
        "sayi": 4,
        "toplam": 0
      },
      "output": []
    },
    {
      "phase": "check",
      "caption": "Koşul doğru. Bir tur daha çalışabiliriz.",
      "code": "while (",
      "condition": "4 != 0",
      "truth": true,
      "token": "",
      "turn": 0,
      "vars": {
        "sayi": 4,
        "toplam": 0
      },
      "output": []
    },
    {
      "phase": "body",
      "caption": "4 eklendi. Yeni toplam 4.",
      "code": "toplam +=",
      "condition": "",
      "truth": null,
      "token": "4",
      "turn": 1,
      "vars": {
        "sayi": 4,
        "toplam": 4
      },
      "output": []
    },
    {
      "phase": "update",
      "caption": "Sıradaki sayı okundu: 3. Şimdi tekrar koşula bakacağız.",
      "code": "sayi = Convert",
      "condition": "",
      "truth": null,
      "token": "3",
      "turn": 1,
      "vars": {
        "sayi": 3,
        "toplam": 4
      },
      "output": []
    },
    {
      "phase": "check",
      "caption": "Koşul doğru. Bir tur daha çalışabiliriz.",
      "code": "while (",
      "condition": "3 != 0",
      "truth": true,
      "token": "",
      "turn": 1,
      "vars": {
        "sayi": 3,
        "toplam": 4
      },
      "output": []
    },
    {
      "phase": "body",
      "caption": "3 eklendi. Yeni toplam 7.",
      "code": "toplam +=",
      "condition": "",
      "truth": null,
      "token": "3",
      "turn": 2,
      "vars": {
        "sayi": 3,
        "toplam": 7
      },
      "output": []
    },
    {
      "phase": "update",
      "caption": "Sıradaki sayı okundu: 0. Şimdi tekrar koşula bakacağız.",
      "code": "sayi = Convert",
      "condition": "",
      "truth": null,
      "token": "0",
      "turn": 2,
      "vars": {
        "sayi": 0,
        "toplam": 7
      },
      "output": []
    },
    {
      "phase": "check",
      "caption": "Koşul yanlış. Gövdeye tekrar girmiyoruz; döngü bitiyor.",
      "code": "while (",
      "condition": "0 != 0",
      "truth": false,
      "token": "",
      "turn": 2,
      "vars": {
        "sayi": 0,
        "toplam": 7
      },
      "output": []
    },
    {
      "phase": "end",
      "caption": "0 bitirme işaretiydi. Toplama katılmadan döngü bitti; sonuç 7.",
      "code": "Console.WriteLine",
      "condition": "",
      "truth": null,
      "token": "✓",
      "turn": 2,
      "vars": {
        "sayi": 0,
        "toplam": 7
      },
      "output": [
        "7"
      ]
    }
  ],
  [
    {
      "phase": "start",
      "caption": "do while farklıdır: önce gövde çalışır, koşul sonra kontrol edilir.",
      "code": "int adet = Convert.ToInt32(Console.ReadLine());",
      "condition": "",
      "truth": null,
      "token": "",
      "turn": 0,
      "vars": {
        "adet": 2,
        "i": 0
      },
      "output": []
    },
    {
      "phase": "body",
      "caption": "Önce Tak yazıldı. İlk tur için koşulun doğru olması gerekmez.",
      "code": "Console.WriteLine(\"Tak\")",
      "condition": "",
      "truth": null,
      "token": "1",
      "turn": 1,
      "vars": {
        "adet": 2,
        "i": 0
      },
      "output": [
        "Tak"
      ]
    },
    {
      "phase": "update",
      "caption": "Sayaç 1 arttı ve 1 oldu. Şimdi sondaki koşula bakacağız.",
      "code": "i++",
      "condition": "",
      "truth": null,
      "token": "1",
      "turn": 1,
      "vars": {
        "adet": 2,
        "i": 1
      },
      "output": [
        "Tak"
      ]
    },
    {
      "phase": "check",
      "caption": "Koşul doğru. Bir tur daha çalışabiliriz.",
      "code": "} while",
      "condition": "1 < 2",
      "truth": true,
      "token": "",
      "turn": 1,
      "vars": {
        "adet": 2,
        "i": 1
      },
      "output": [
        "Tak"
      ]
    },
    {
      "phase": "body",
      "caption": "Önce Tak yazıldı. İlk tur için koşulun doğru olması gerekmez.",
      "code": "Console.WriteLine(\"Tak\")",
      "condition": "",
      "truth": null,
      "token": "2",
      "turn": 2,
      "vars": {
        "adet": 2,
        "i": 1
      },
      "output": [
        "Tak",
        "Tak"
      ]
    },
    {
      "phase": "update",
      "caption": "Sayaç 1 arttı ve 2 oldu. Şimdi sondaki koşula bakacağız.",
      "code": "i++",
      "condition": "",
      "truth": null,
      "token": "2",
      "turn": 2,
      "vars": {
        "adet": 2,
        "i": 2
      },
      "output": [
        "Tak",
        "Tak"
      ]
    },
    {
      "phase": "check",
      "caption": "Koşul yanlış. Gövdeye tekrar girmiyoruz; döngü bitiyor.",
      "code": "} while",
      "condition": "2 < 2",
      "truth": false,
      "token": "",
      "turn": 2,
      "vars": {
        "adet": 2,
        "i": 2
      },
      "output": [
        "Tak",
        "Tak"
      ]
    },
    {
      "phase": "end",
      "caption": "Sondaki koşul yanlış. 2 kez Tak yazıldı. 0 istenseydi bile ilk tur çalışacaktı.",
      "code": "Console.WriteLine",
      "condition": "",
      "truth": null,
      "token": "✓",
      "turn": 2,
      "vars": {
        "adet": 2,
        "i": 2
      },
      "output": [
        "Tak",
        "Tak"
      ]
    }
  ],
  [
    {
      "phase": "start",
      "caption": "do bloğu ilk sayıyı koşulsuz okuyacak.",
      "code": "int sayi;",
      "condition": "",
      "truth": null,
      "token": "",
      "turn": 0,
      "vars": {
        "sayac": 0,
        "sayi": "henüz okunmadı"
      },
      "output": []
    },
    {
      "phase": "read",
      "caption": "Yeni sayı okundu: 8.",
      "code": "sayi = Convert",
      "condition": "",
      "truth": null,
      "token": "8",
      "turn": 1,
      "vars": {
        "sayac": 0,
        "sayi": 8
      },
      "output": []
    },
    {
      "phase": "body",
      "caption": "Bu bir veri: sayı adedi 1 oldu.",
      "code": "if (sayi",
      "condition": "8 != 0",
      "truth": true,
      "token": "8",
      "turn": 1,
      "vars": {
        "sayac": 1,
        "sayi": 8
      },
      "output": []
    },
    {
      "phase": "check",
      "caption": "Koşul doğru. Bir tur daha çalışabiliriz.",
      "code": "} while",
      "condition": "8 != 0",
      "truth": true,
      "token": "",
      "turn": 1,
      "vars": {
        "sayac": 1,
        "sayi": 8
      },
      "output": []
    },
    {
      "phase": "repeat",
      "caption": "Döngü devam ediyor; yeni bir sayı okuyacağız.",
      "code": "do",
      "condition": "",
      "truth": null,
      "token": "1",
      "turn": 1,
      "vars": {
        "sayac": 1,
        "sayi": 8
      },
      "output": []
    },
    {
      "phase": "read",
      "caption": "Yeni sayı okundu: 4.",
      "code": "sayi = Convert",
      "condition": "",
      "truth": null,
      "token": "4",
      "turn": 2,
      "vars": {
        "sayac": 1,
        "sayi": 4
      },
      "output": []
    },
    {
      "phase": "body",
      "caption": "Bu bir veri: sayı adedi 2 oldu.",
      "code": "if (sayi",
      "condition": "4 != 0",
      "truth": true,
      "token": "4",
      "turn": 2,
      "vars": {
        "sayac": 2,
        "sayi": 4
      },
      "output": []
    },
    {
      "phase": "check",
      "caption": "Koşul doğru. Bir tur daha çalışabiliriz.",
      "code": "} while",
      "condition": "4 != 0",
      "truth": true,
      "token": "",
      "turn": 2,
      "vars": {
        "sayac": 2,
        "sayi": 4
      },
      "output": []
    },
    {
      "phase": "repeat",
      "caption": "Döngü devam ediyor; yeni bir sayı okuyacağız.",
      "code": "do",
      "condition": "",
      "truth": null,
      "token": "2",
      "turn": 2,
      "vars": {
        "sayac": 2,
        "sayi": 4
      },
      "output": []
    },
    {
      "phase": "read",
      "caption": "Yeni sayı okundu: 0.",
      "code": "sayi = Convert",
      "condition": "",
      "truth": null,
      "token": "0",
      "turn": 3,
      "vars": {
        "sayac": 2,
        "sayi": 0
      },
      "output": []
    },
    {
      "phase": "body",
      "caption": "0 bitirme işareti: sayacı artırmıyoruz.",
      "code": "if (sayi",
      "condition": "0 != 0",
      "truth": false,
      "token": "0",
      "turn": 3,
      "vars": {
        "sayac": 2,
        "sayi": 0
      },
      "output": []
    },
    {
      "phase": "check",
      "caption": "Koşul yanlış. Gövdeye tekrar girmiyoruz; döngü bitiyor.",
      "code": "} while",
      "condition": "0 != 0",
      "truth": false,
      "token": "",
      "turn": 3,
      "vars": {
        "sayac": 2,
        "sayi": 0
      },
      "output": []
    },
    {
      "phase": "end",
      "caption": "0 gelince durduk. 0’ı saymadan toplam 2 sayı girildi.",
      "code": "Console.WriteLine",
      "condition": "",
      "truth": null,
      "token": "✓",
      "turn": 3,
      "vars": {
        "sayac": 2,
        "sayi": 0
      },
      "output": [
        "2"
      ]
    }
  ],
  [
    {
      "phase": "start",
      "caption": "En fazla üç deneme var. Doğru kod 7; bulursak break ile hemen duracağız.",
      "code": "bool acildi = false;",
      "condition": "",
      "truth": null,
      "token": "",
      "turn": 0,
      "vars": {
        "i": 0,
        "acildi": false
      },
      "output": []
    },
    {
      "phase": "init",
      "caption": "for başlığının ilk bölümünde sayaç ilk değerini alır. Bu başlangıç bölümü her tur değil, yalnızca bir kez çalışır.",
      "code": "for (",
      "condition": "",
      "truth": null,
      "token": "0",
      "turn": 0,
      "vars": {
        "i": 0,
        "acildi": false
      },
      "output": []
    },
    {
      "phase": "check",
      "caption": "Koşul doğru. Bir tur daha çalışabiliriz.",
      "code": "for (",
      "condition": "0 < 3",
      "truth": true,
      "token": "",
      "turn": 0,
      "vars": {
        "i": 0,
        "acildi": false
      },
      "output": []
    },
    {
      "phase": "read",
      "caption": "Deneme 1: kullanıcı 2 girdi.",
      "code": "int kod =",
      "condition": "",
      "truth": null,
      "token": "2",
      "turn": 1,
      "vars": {
        "i": 0,
        "acildi": false,
        "kod": 2
      },
      "output": []
    },
    {
      "phase": "body",
      "caption": "Kod yanlış. Bir sonraki deneme hakkına geçeceğiz.",
      "code": "if (kod",
      "condition": "2 == 7",
      "truth": false,
      "token": "2",
      "turn": 1,
      "vars": {
        "i": 0,
        "acildi": false,
        "kod": 2
      },
      "output": []
    },
    {
      "phase": "update",
      "caption": "Tamamlanan deneme sayısı 1.",
      "code": "for (",
      "condition": "",
      "truth": null,
      "token": "1",
      "turn": 1,
      "vars": {
        "i": 1,
        "acildi": false,
        "kod": 2
      },
      "output": []
    },
    {
      "phase": "check",
      "caption": "Koşul doğru. Bir tur daha çalışabiliriz.",
      "code": "for (",
      "condition": "1 < 3",
      "truth": true,
      "token": "",
      "turn": 1,
      "vars": {
        "i": 1,
        "acildi": false,
        "kod": 2
      },
      "output": []
    },
    {
      "phase": "read",
      "caption": "Deneme 2: kullanıcı 7 girdi.",
      "code": "int kod =",
      "condition": "",
      "truth": null,
      "token": "7",
      "turn": 2,
      "vars": {
        "i": 1,
        "acildi": false,
        "kod": 7
      },
      "output": []
    },
    {
      "phase": "break",
      "caption": "Kod doğru. break çalıştı: koşula tekrar bakmadan ve üçüncü girdiyi okumadan çıkıyoruz.",
      "code": "if (kod",
      "condition": "7 == 7",
      "truth": true,
      "token": "7",
      "turn": 2,
      "vars": {
        "i": 1,
        "acildi": true,
        "kod": 7
      },
      "output": []
    },
    {
      "phase": "end",
      "caption": "Kasa açıldı. Kalan denemeler kullanılmadı.",
      "code": "Console.WriteLine",
      "condition": "",
      "truth": null,
      "token": "✓",
      "turn": 2,
      "vars": {
        "i": 1,
        "acildi": true,
        "kod": 7
      },
      "output": [
        "Açıldı"
      ]
    }
  ]
];
