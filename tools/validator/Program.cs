using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
Console.OutputEncoding = Encoding.UTF8;
int[] kanit = { 3, 7, 2, 9 };
int toplam = 0;
int enBuyuk = kanit[0];
// topla ve en büyüğü bul
foreach (int k in kanit) { toplam += k; if (k > enBuyuk) enBuyuk = k; }
// ortalamayı hesapla
int ortalama = toplam / 4;
// ortalama beşe eşit mi
bool besMi = ortalama == 5;
Console.WriteLine(toplam);
Console.WriteLine(enBuyuk);
Console.WriteLine(ortalama);
