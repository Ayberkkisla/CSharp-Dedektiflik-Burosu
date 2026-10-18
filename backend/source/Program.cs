using Microsoft.CodeAnalysis;
using Microsoft.CodeAnalysis.CSharp;
using Microsoft.CodeAnalysis.CSharp.Syntax;
using System.Globalization;
using System.Text.Json;

CultureInfo.DefaultThreadCurrentCulture = CultureInfo.InvariantCulture;
var builder = WebApplication.CreateBuilder(args);
builder.WebHost.UseUrls(builder.Configuration["urls"]??"http://127.0.0.1:5178");
builder.Services.Configure<Microsoft.AspNetCore.Http.Json.JsonOptions>(o => o.SerializerOptions.PropertyNamingPolicy = JsonNamingPolicy.CamelCase);
builder.Services.AddCors(o=>o.AddDefaultPolicy(p=>p.WithOrigins("http://127.0.0.1:5184","http://127.0.0.1:5178").AllowAnyHeader().AllowAnyMethod()));
var app = builder.Build();
app.UseCors();
var gameRoot=builder.Configuration["GameRoot"];
if(!string.IsNullOrEmpty(gameRoot)&&Directory.Exists(gameRoot)) {
 var files=new Microsoft.Extensions.FileProviders.PhysicalFileProvider(Path.GetFullPath(gameRoot));
 app.UseStaticFiles(new StaticFileOptions { FileProvider=files,RequestPath="/oyun" });
 app.MapGet("/",()=>Results.Redirect("/oyun/index.html"));
}
app.UseDefaultFiles(); app.UseStaticFiles();
var refs = ((string)AppContext.GetData("TRUSTED_PLATFORM_ASSEMBLIES")!).Split(Path.PathSeparator).Select(p => MetadataReference.CreateFromFile(p)).ToArray();
var specs = new Spec[] {
 new("+",2,"int", new[]{new[]{"12","8"},new[]{"3","14"},new[]{"0","9"},new[]{"-4","11"}}, a=>new[]{N(I(a,0)+I(a,1))}),
 new("+",2,"string",new[]{new[]{"Ada","Arşiv"},new[]{"Ece","Liman"},new[]{"Ali Can","Büro"}},a=>new[]{a[0]+" : "+a[1]}),
 new("-",2,"int",new[]{new[]{"30","7"},new[]{"18","18"},new[]{"50","3"},new[]{"9","0"}},a=>new[]{N(I(a,0)-I(a,1))}),
 new("*+",3,"int",new[]{new[]{"20","4","6"},new[]{"15","0","8"},new[]{"7","3","5"},new[]{"0","12","2"}},a=>new[]{N(I(a,0)+I(a,1)*I(a,2))}),
 new("/%",2,"int",new[]{new[]{"17","5"},new[]{"12","4"},new[]{"3","8"},new[]{"29","6"}},a=>new[]{N(I(a,0)/I(a,1)),N(I(a,0)%I(a,1))}),
 new("+/",3,"int",new[]{new[]{"4","5","8"},new[]{"1","2","2"},new[]{"0","0","0"},new[]{"7","10","12"}},a=>new[]{N((I(a,0)+I(a,1)+I(a,2))/3.0)}),
 new("+*",3,"int",new[]{new[]{"3","5","2"},new[]{"0","4","3"},new[]{"7","0","5"},new[]{"2","8","4"}},a=>new[]{N((I(a,0)+I(a,1))*I(a,2))}),
 new("*-",2,"decimal",new[]{new[]{"150","10"},new[]{"99.5","20"},new[]{"80","0"},new[]{"23","100"}},a=>new[]{N(D(a,0)*(1-D(a,1)/100m))}),
 new("*+",3,"int",new[]{new[]{"1","2","3"},new[]{"0","3","10"},new[]{"2","0","0"},new[]{"0","0","45"}},a=>new[]{N(I(a,0)*3600+I(a,1)*60+I(a,2))}),
 new("*+",3,"mixed",new[]{new[]{"4","25.5","15"},new[]{"0","40","9"},new[]{"3","12.75","0"},new[]{"2","8.1","4.5"}},a=>new[]{N(I(a,0)*D(a,1)+D(a,2))}),
 new("*+/%",3,"int",new[]{new[]{"1","75","90"},new[]{"0","0","0"},new[]{"0","120","120"},new[]{"25","61","61"},new[]{"0","0","59"}},a=>{int total=I(a,0)*3600+I(a,1)*60+I(a,2);return new[]{N(total/3600),N(total%3600/60),N(total%60)};}),
 new("+-/*",2,"int",new[]{new[]{"17","5"},new[]{"20","5"},new[]{"0","5"},new[]{"1","9"},new[]{"31","1"}},a=>{int boxes=(I(a,0)+I(a,1)-1)/I(a,1);return new[]{N(boxes),N(boxes*I(a,1)-I(a,0))};}),
 new("/%*+",1,"int",new[]{new[]{"407"},new[]{"120"},new[]{"999"},new[]{"100"},new[]{"582"}},a=>new[]{N(I(a,0)%10*100+I(a,0)/10%10*10+I(a,0)/100)}),
 new("*-+/%",4,"int",new[]{new[]{"4","6","5","9"},new[]{"0","4","0","3"},new[]{"2","7","14","0"},new[]{"3","5","0","5"},new[]{"1","1","1","9"}},a=>{int stock=I(a,0)*I(a,1)-I(a,2)+I(a,3);return new[]{N(stock/I(a,1)),N(stock%I(a,1))};}),
 new("*-/",3,"decimal",new[]{new[]{"200","10","20"},new[]{"99.5","15","5"},new[]{"80","0","25"},new[]{"50","100","40"},new[]{"100","10","10"}},a=>{decimal first=D(a,0)*(1-D(a,1)/100m);return new[]{N(first*(1-D(a,2)/100m))};}),
 new("*+-/",4,"int|decimal|decimal|decimal",new[]{new[]{"3","20","12","6"},new[]{"2","12.5","3","1"},new[]{"4","10","0","0"},new[]{"3","1","1","0"},new[]{"1","25","10","35"}},a=>new[]{N((I(a,0)*D(a,1)+D(a,2)-D(a,3))/I(a,0))}),
 new("*+/",4,"int",new[]{new[]{"2","60","3","90"},new[]{"1","0","2","1"},new[]{"5","70","1","100"},new[]{"2","50","2","90"},new[]{"1","100","1","0"}},a=>new[]{N((I(a,0)*I(a,1)+I(a,2)*I(a,3))/(double)(I(a,0)+I(a,2)))}),
 new("*+/%",3,"int",new[]{new[]{"23","50","95"},new[]{"0","0","0"},new[]{"23","59","1"},new[]{"10","15","3000"},new[]{"12","30","29"}},a=>{int total=I(a,0)*60+I(a,1)+I(a,2);return new[]{N(total/60%24),N(total%60),N(total/1440)};}),
 new("-+/*",4,"int",new[]{new[]{"76","15","30","20"},new[]{"75","15","30","20"},new[]{"15","15","30","20"},new[]{"16","15","30","20"},new[]{"125","5","20","7"}},a=>new[]{N((I(a,0)-I(a,1)+I(a,2)-1)/I(a,2)*I(a,3))}),
 new("*+/%",3,"int",new[]{new[]{"10","5","4"},new[]{"0","0","3"},new[]{"0","3","5"},new[]{"12","0","3"},new[]{"7","25","3"}},a=>{int total=I(a,0)*100+I(a,1),share=total/I(a,2);return new[]{N(share/100),N(share%100),N(total%I(a,2))};}),
 new("",1,"int",new[]{new[]{"3"},new[]{"-2"},new[]{"0"},new[]{"1"}},a=>new[]{I(a,0)>0?"Pozitif":"Pozitif değil"},true,"if",2),
 new("",1,"int",new[]{new[]{"18"},new[]{"16"},new[]{"25"},new[]{"0"}},a=>new[]{I(a,0)>=18?"Girebilir":"Giremez"},true,"if",2),
 new("",1,"int",new[]{new[]{"45"},new[]{"50"},new[]{"100"},new[]{"0"}},a=>new[]{I(a,0)>=50?"Geçti":"Kaldı"},true,"if",2),
 new("",1,"int",new[]{new[]{"0"},new[]{"4"},new[]{"1"},new[]{"20"}},a=>new[]{I(a,0)==0?"Boş":"Dolu"},true,"if",2),
 new("",1,"int",new[]{new[]{"-3"},new[]{"5"},new[]{"0"},new[]{"1"}},a=>new[]{I(a,0)<=0?"Donabilir":"Donmaz"},true,"if",2),
 new("",1,"string",new[]{new[]{"mavi"},new[]{"Mavi"},new[]{"kirmizi"},new[]{"mavi1"}},a=>new[]{a[0]=="mavi"?"Doğru":"Yanlış"},true,"if",2),
 new("",2,"int",new[]{new[]{"40","50"},new[]{"50","50"},new[]{"80","30"},new[]{"0","1"}},a=>new[]{I(a,0)>=I(a,1)?"Yeterli":"Yetersiz"},true,"if",2),
 new("",2,"int",new[]{new[]{"8","3"},new[]{"2","3"},new[]{"4","4"},new[]{"0","0"}},a=>new[]{I(a,0)>=I(a,1)?"Hazır":"Eksik"},true,"if",2),
 new("",2,"int",new[]{new[]{"12","7"},new[]{"7","7"},new[]{"0","0"},new[]{"5","9"}},a=>new[]{I(a,0)==I(a,1)?"Bulundu":"Aramaya devam"},true,"if",2),
 new("",1,"int",new[]{new[]{"6"},new[]{"7"},new[]{"0"},new[]{"-3"},new[]{"-4"}},a=>new[]{I(a,0)%2==0?"Çift":"Tek"},true,"if",2),
 new("",2,"int",new[]{new[]{"8","3"},new[]{"2","7"},new[]{"4","4"},new[]{"-5","-2"}},a=>new[]{N(Math.Max(I(a,0),I(a,1)))},false,"if",2),
 new("",2,"int",new[]{new[]{"60","80"},new[]{"90","60"},new[]{"49","100"},new[]{"50","70"},new[]{"0","0"}},a=>new[]{I(a,0)>=50&&I(a,1)>=70?"Geçti":"Kaldı"},true,"if,and",2),
 new("",2,"int",new[]{new[]{"0","1"},new[]{"0","0"},new[]{"1","0"},new[]{"1","1"}},a=>new[]{I(a,0)==1||I(a,1)==1?"Açık":"Kapalı"},true,"if,or",2),
 new("",1,"int",new[]{new[]{"22"},new[]{"27"},new[]{"20"},new[]{"25"},new[]{"19"}},a=>new[]{I(a,0)>=20&&I(a,0)<=25?"Uygun":"Uygun değil"},true,"if,and",2),
 new("",1,"int",new[]{new[]{"70"},new[]{"40"},new[]{"85"},new[]{"84"},new[]{"50"},new[]{"100"}},a=>new[]{I(a,0)>=85?"Pekiyi":I(a,0)>=50?"Geçti":"Kaldı"},true,"if",2),
 new("",1,"int",new[]{new[]{"-3"},new[]{"0"},new[]{"5"},new[]{"-1"}},a=>new[]{I(a,0)>0?"Pozitif":I(a,0)<0?"Negatif":"Sıfır"},true,"if",2),
 new("",2,"decimal",new[]{new[]{"120","15"},new[]{"60","15"},new[]{"100","8"},new[]{"99.5","12.5"},new[]{"0","0"}},a=>new[]{N(D(a,0)>=100m?D(a,0):D(a,0)+D(a,1))},false,"if",2),
 new("",1,"int",new[]{new[]{"6"},new[]{"-4"},new[]{"0"},new[]{"3"},new[]{"2"}},a=>new[]{I(a,0)>0&&I(a,0)%2==0?"Uygun":"Uygun değil"},true,"if,and",2),
 new("",2,"int",new[]{new[]{"20","0"},new[]{"17","1"},new[]{"18","1"},new[]{"18","0"},new[]{"15","0"}},a=>new[]{I(a,0)<18?"Yaş yetmiyor":I(a,1)==1?"Girebilir":"Kart gerekli"},true,"if",2),
 new("",2,"int",new[]{new[]{"220","3"},new[]{"100","8"},new[]{"100","5"},new[]{"200","5"},new[]{"300","6"},new[]{"0","0"}},a=>new[]{N(I(a,0)>=200&&I(a,1)<=5?0:I(a,1)<=5?15:30)},false,"if,and",2),
 new("",2,"int",new[]{new[]{"16","1"},new[]{"11","0"},new[]{"11","1"},new[]{"12","1"},new[]{"12","0"},new[]{"70","0"}},a=>new[]{N(I(a,0)<12?0:I(a,1)==1?20:35)},false,"",2),
 new("",2,"int",new[]{new[]{"1","10"},new[]{"1","9"},new[]{"1","18"},new[]{"1","8"},new[]{"0","12"},new[]{"1","17"}},a=>new[]{I(a,0)==1&&I(a,1)>=9&&I(a,1)<18?"Giriş var":"Giriş yok"},true,"",2),
 new("",2,"int",new[]{new[]{"7","1"},new[]{"5","0"},new[]{"5","1"},new[]{"6","0"},new[]{"1","1"},new[]{"50","0"}},a=>new[]{N((I(a,0)<=5?20:35)+(I(a,1)==1?10:0))},false,"",2),
 new("",3,"int",new[]{new[]{"1","0","1"},new[]{"0","0","0"},new[]{"1","0","0"},new[]{"0","1","1"},new[]{"1","1","1"},new[]{"1","1","0"}},a=>new[]{I(a,0)+I(a,1)+I(a,2)>=2?"Hazır":"Eksik"},true,"",2),
 new("",1,"int",new[]{new[]{"4"},new[]{"0"},new[]{"1"},new[]{"3"},new[]{"5"},new[]{"30"}},a=>new[]{N(I(a,0)==0?0:I(a,0)<=3?I(a,0)*5:I(a,0)*8)},false,"",2),
 new("",1,"int",new[]{new[]{"0"},new[]{"1"},new[]{"3"},new[]{"5"},new[]{"10"}},a=>Enumerable.Repeat("Delil bulundu",I(a,0)).ToArray(),true,"for",2),
 new("",1,"int",new[]{new[]{"0"},new[]{"1"},new[]{"4"},new[]{"7"},new[]{"12"}},a=>Enumerable.Range(1,I(a,0)).Select(v=>N(v)).ToArray(),false,"for",2),
 new("",1,"int",new[]{new[]{"1"},new[]{"3"},new[]{"5"},new[]{"10"}},a=>Enumerable.Range(1,I(a,0)).Reverse().Select(v=>N(v)).ToArray(),false,"for",2),
 new("",2,"int",new[]{new[]{"3","6"},new[]{"1","1"},new[]{"2","5"},new[]{"8","10"}},a=>Enumerable.Range(I(a,0),I(a,1)-I(a,0)+1).Select(v=>N(v)).ToArray(),false,"for",2),
 new("",1,"int",new[]{new[]{"0"},new[]{"1"},new[]{"2"},new[]{"7"},new[]{"10"}},a=>Enumerable.Range(1,I(a,0)).Where(v=>v%2==0).Select(v=>N(v)).ToArray(),false,"for",2),
 new("",1,"int",new[]{new[]{"0"},new[]{"1"},new[]{"4"},new[]{"7"},new[]{"10"}},a=>new[]{N(Enumerable.Range(1,I(a,0)).Sum())},false,"for",2),
 new("",-1,"int",new[]{new[]{"0"},new[]{"1","9"},new[]{"3","4","2","5"},new[]{"4","0","3","0","7"},new[]{"2","12","8"}},a=>new[]{N(a.Skip(1).Sum(v=>int.Parse(v,CultureInfo.InvariantCulture)))},false,"for",2),
 new("",-1,"int",new[]{new[]{"0"},new[]{"1","50"},new[]{"4","45","50","80","20"},new[]{"3","0","49","100"},new[]{"2","100","100"}},a=>new[]{N(a.Skip(1).Count(v=>int.Parse(v,CultureInfo.InvariantCulture)>=50))},false,"for,if",2),
 new("",1,"int",new[]{new[]{"0"},new[]{"1"},new[]{"3"},new[]{"5"}},a=>Enumerable.Range(1,I(a,0)).Reverse().Select(v=>N(v)).ToArray(),false,"while",2),
 new("",1,"int",new[]{new[]{"100"},new[]{"90"},new[]{"60"},new[]{"0"}},a=>Enumerable.Range(1,(100-I(a,0))/10).Select(v=>N(I(a,0)+v*10)).ToArray(),false,"while",2),
 new("",-1,"string",new[]{new[]{"mavi"},new[]{"kirmizi","mavi"},new[]{"kirmizi","sari","mavi"},new[]{"Mavi","mavi"}},a=>a.TakeWhile(v=>v!="mavi").Select(_=>"Tekrar dene").Append("Giriş açıldı").ToArray(),true,"while",2),
 new("",-1,"int",new[]{new[]{"0"},new[]{"4","3","0"},new[]{"-2","5","0"},new[]{"8","-8","0"},new[]{"1","2","3","0"}},a=>new[]{N(a.TakeWhile(v=>v!="0").Sum(v=>int.Parse(v,CultureInfo.InvariantCulture)))},false,"while",2),
 new("",1,"int",new[]{new[]{"0"},new[]{"1"},new[]{"2"},new[]{"4"}},a=>Enumerable.Repeat("Tak",Math.Max(1,I(a,0))).ToArray(),true,"do",2),
 new("",-1,"int",new[]{new[]{"0"},new[]{"8","4","0"},new[]{"-5","0"},new[]{"1","2","3","0"}},a=>new[]{N(a.TakeWhile(v=>v!="0").Count())},false,"do,if",2),
 new("",-1,"int",new[]{new[]{"7"},new[]{"2","7"},new[]{"1","2","7"},new[]{"1","2","3"},new[]{"0","0","0"}},a=>new[]{a.Contains("7")?"Açıldı":"Kilitlendi"},true,"for,if,break",2),
 Fixture("for,if,continue",new[]{new[]{"5","3"},new[]{"1","1"},new[]{"4","1"},new[]{"4","4"}},new[]{new[]{"1","2","4","5"},new string[]{},new[]{"2","3","4"},new[]{"1","2","3"}},false,"int"),
 Fixture("for,if,continue",new[]{new[]{"4","3","0","2","0"},new[]{"0"},new[]{"2","0","0"},new[]{"3","1","7","2"}},new[]{new[]{"2"},new[]{"0"},new[]{"0"},new[]{"3"}},false,"int"),
 Fixture("for,if,break",new[]{new[]{"6","3"},new[]{"1","1"},new[]{"5","5"},new[]{"7","1"}},new[]{new[]{"1","2","3"},new[]{"1"},new[]{"1","2","3","4","5"},new[]{"1"}},false,"int"),
 Fixture("for,if,continue,break",new[]{new[]{"7","2","5"},new[]{"5","4","2"},new[]{"3","1","3"},new[]{"6","6","1"}},new[]{new[]{"1","3","4","5"},new[]{"1","2"},new[]{"2","3"},new[]{"1"}},false,"int"),
 Fixture("switch",new[]{new[]{"2"},new[]{"1"},new[]{"3"},new[]{"0"},new[]{"9"}},new[]{new[]{"Laboratuvar"},new[]{"Arşiv"},new[]{"Depo"},new[]{"Bilinmeyen"},new[]{"Bilinmeyen"}},true,"int"),
 Fixture("switch",new[]{new[]{"2"},new[]{"1"},new[]{"3"},new[]{"4"},new[]{"8"}},new[]{new[]{"Arşiv"},new[]{"Arşiv"},new[]{"Depo"},new[]{"Depo"},new[]{"Bilinmeyen"}},true,"int"),
 Fixture("switch",new[]{new[]{"sari"},new[]{"kirmizi"},new[]{"yesil"},new[]{"mavi"}},new[]{new[]{"Hazırlan"},new[]{"Bekle"},new[]{"Geç"},new[]{"Tanınmadı"}},true,"string"),
 Fixture("switch",new[]{new[]{"2","3"},new[]{"1","4"},new[]{"2","0"},new[]{"9","5"},new[]{"1","1"}},new[]{new[]{"24"},new[]{"20"},new[]{"0"},new[]{"-1"},new[]{"5"}},false,"int"),
 Fixture("for,if",new[]{new[]{"3","-2","0","5"},new[]{"0"},new[]{"2","1","8"},new[]{"2","-1","0"}},new[]{new[]{"Soğuk","Soğuk","Normal"},new string[]{},new[]{"Normal","Normal"},new[]{"Soğuk","Soğuk"}},true,"int"),
 Fixture("while,if",new[]{new[]{"4","-3","2","0"},new[]{"0"},new[]{"-5","-1","0"},new[]{"1","2","3","0"}},new[]{new[]{"6"},new[]{"0"},new[]{"0"},new[]{"6"}},false,"int"),
 Fixture("for,if",new[]{new[]{"4","2","3","0","6"},new[]{"0"},new[]{"3","1","3","5"},new[]{"3","-4","2","7"}},new[]{new[]{"3","8"},new[]{"0","0"},new[]{"0","0"},new[]{"2","-2"}},false,"int"),
 Fixture("while,if",new[]{new[]{"35","80"},new[]{"80","80"},new[]{"0","10"},new[]{"0","100"},new[]{"40","60"}},new[]{new[]{"55","75","80"},new string[]{},new[]{"10"},new[]{"20","40","60","80","100"},new[]{"60"}},false,"int"),
 Fixture("while,if",new[]{new[]{"7","3","0","5"},new[]{"1","1"},new[]{"5","0","0","6"},new[]{"10","4","6"}},new[]{new[]{"3","8"},new[]{"1","1"},new[]{"3","6"},new[]{"2","10"}},false,"int"),
 Fixture("for,if",new[]{new[]{"4","-8","-3","-12","-5"},new[]{"1","-9"},new[]{"3","5","5","2"},new[]{"3","1","8","100"}},new[]{new[]{"-3"},new[]{"-9"},new[]{"5"},new[]{"100"}},false,"int"),
 Fixture("while,switch,if",new[]{new[]{"1","2","1","2","0"},new[]{"0","0"},new[]{"2","2","2","0"},new[]{"0","1","1","2","0"}},new[]{new[]{"1","4","2"},new string[]{},new[]{"0","0"},new[]{"3","6","4"}},false,"int"),
 Fixture("",new[]{new[]{"abc","8","3"},new[]{"1"},new[]{"5"},new[]{"0","-1","6","2"},new[]{"2.5","","2147483648","4"}},new[]{new[]{"Geçersiz","Geçersiz","Hat 3"},new[]{"Hat 1"},new[]{"Hat 5"},new[]{"Geçersiz","Geçersiz","Geçersiz","Hat 2"},new[]{"Geçersiz","Geçersiz","Geçersiz","Hat 4"}},true,"any"),
 Fixture("",new[]{new[]{"1111","0000","2468"},new[]{"2468"},new[]{"1","2","3"},new[]{"abc","2468"},new[]{"02468","","0000"}},new[]{new[]{"Yanlış","Yanlış","Açıldı"},new[]{"Açıldı"},new[]{"Yanlış","Yanlış","Yanlış","Kilitli"},new[]{"Yanlış","Açıldı"},new[]{"Yanlış","Yanlış","Yanlış","Kilitli"}},true,"any"),
 Fixture("",new[]{new[]{"3","10","abc","0","20","30"},new[]{"1","100"},new[]{"2","-1","101","1","100"},new[]{"1","2.5","","2147483648","7"},new[]{"5","1","2","3","4","5"}},new[]{new[]{"Atlandı","Atlandı","Toplam: 60","Adet: 3"},new[]{"Toplam: 100","Adet: 1"},new[]{"Atlandı","Atlandı","Toplam: 101","Adet: 2"},new[]{"Atlandı","Atlandı","Atlandı","Toplam: 7","Adet: 1"},new[]{"Toplam: 15","Adet: 5"}},true,"any"),
 Fixture("",new[]{new[]{"1","abc","2","9","0"},new[]{"0"},new[]{"2","2","1","0"},new[]{"-1","","2147483648","0"}},new[]{new[]{"Arşiv","Geçersiz","Liman","Geçersiz","Bitti"},new[]{"Bitti"},new[]{"Liman","Liman","Arşiv","Bitti"},new[]{"Geçersiz","Geçersiz","Geçersiz","Bitti"}},true,"any"),
 Fixture("",new[]{new[]{"1","100","1","abc","2","9","1","50","0"},new[]{"0"},new[]{"2","abc","1","0","1","1001","1","1","0"},new[]{"1","1000","2","1","500","2","0"},new[]{"-5","1","2.5","1","-1","1","2147483648","0"},new[]{"1","","1","25","1","75","2","2","0"}},new[]{new[]{"Eklendi","Geçersiz tutar","Kasa: 100","Geçersiz seçim","Eklendi","Kasa: 150","İşlem: 2"},new[]{"Kasa: 0","İşlem: 0"},new[]{"Kasa: 0","Geçersiz seçim","Geçersiz tutar","Geçersiz tutar","Eklendi","Kasa: 1","İşlem: 1"},new[]{"Eklendi","Kasa: 1000","Eklendi","Kasa: 1500","Kasa: 1500","İşlem: 2"},new[]{"Geçersiz seçim","Geçersiz tutar","Geçersiz tutar","Geçersiz tutar","Kasa: 0","İşlem: 0"},new[]{"Geçersiz tutar","Eklendi","Eklendi","Kasa: 100","Kasa: 100","Kasa: 100","İşlem: 2"}},true,"any"),
 Fixture("",new[]{new[]{"5","2","4","3","0"},new[]{"4","0"},new[]{"1","2","1","1","0"},new[]{"20","20","1","0"},new[]{"6","3","3","0"}},new[]{new[]{"Alındı","Bekletildi","Alındı","Doluluk: 5"},new[]{"Doluluk: 0"},new[]{"Bekletildi","Alındı","Bekletildi","Doluluk: 1"},new[]{"Alındı","Bekletildi","Doluluk: 20"},new[]{"Alındı","Alındı","Doluluk: 6"}},true,"any"),
 Fixture("",new[]{new[]{"4","20","70","70","40"},new[]{"1","0"},new[]{"3","100","2","9"},new[]{"3","5","8","99"},new[]{"2","6","6"}},new[]{new[]{"Güç: 70","Sıra: 2"},new[]{"Güç: 0","Sıra: 1"},new[]{"Güç: 100","Sıra: 1"},new[]{"Güç: 99","Sıra: 3"},new[]{"Güç: 6","Sıra: 1"}},true,"any"),
 Fixture("",new[]{new[]{"2","3","1"},new[]{"1","1","0"},new[]{"1","4","1"},new[]{"3","1","2"},new[]{"2","2","0"}},new[]{new[]{"Kat 2 / Oda 1","Kat 2 / Oda 2","Kat 2 / Oda 3","Taranan: 3"},new[]{"Kat 1 / Oda 1","Taranan: 1"},new[]{"Taranan: 0"},new[]{"Kat 1 / Oda 1","Kat 3 / Oda 1","Taranan: 2"},new[]{"Kat 1 / Oda 1","Kat 1 / Oda 2","Kat 2 / Oda 1","Kat 2 / Oda 2","Taranan: 4"}},true,"any"),
 Fixture("",new[]{new[]{"4","1","9","3","2"},new[]{"1","0"},new[]{"3","3","3","3"},new[]{"2","1","2"},new[]{"5","-1","2","8","1","4"}},new[]{new[]{"Geçersiz","Toplam: 45","Bilet: 3"},new[]{"Geçersiz","Toplam: 0","Bilet: 0"},new[]{"Toplam: 60","Bilet: 3"},new[]{"Toplam: 25","Bilet: 2"},new[]{"Geçersiz","Geçersiz","Geçersiz","Toplam: 25","Bilet: 2"}},true,"any"),
 Fixture("",new[]{new[]{"1","1","9","3","2"},new[]{"1","2","3"},new[]{"3","3","2","2","1"},new[]{"0","-1","2","1","3"},new[]{"2","2","2","3","3","1"}},new[]{new[]{"Teslim edildi: Arşiv","Zaten teslim edildi","Geçersiz seçim","Teslim edildi: Depo","Teslim edildi: Liman","Tamamlandı"},new[]{"Teslim edildi: Arşiv","Teslim edildi: Liman","Teslim edildi: Depo","Tamamlandı"},new[]{"Teslim edildi: Depo","Zaten teslim edildi","Teslim edildi: Liman","Zaten teslim edildi","Teslim edildi: Arşiv","Tamamlandı"},new[]{"Geçersiz seçim","Geçersiz seçim","Teslim edildi: Liman","Teslim edildi: Arşiv","Teslim edildi: Depo","Tamamlandı"},new[]{"Teslim edildi: Liman","Zaten teslim edildi","Zaten teslim edildi","Teslim edildi: Depo","Zaten teslim edildi","Teslim edildi: Arşiv","Tamamlandı"}},true,"any")
};
specs=specs.Concat(new Spec[]{
 U1Fixture("string|int",new[]{new[]{"Ada","42"},new[]{"Deniz Kaya","107"},new[]{"Ece","1"},new[]{"Ömer","9999"},new[]{"Nokta","8"}},new[]{new[]{"Dosya: Ada / 42"},new[]{"Dosya: Deniz Kaya / 107"},new[]{"Dosya: Ece / 1"},new[]{"Dosya: Ömer / 9999"},new[]{"Dosya: Nokta / 8"}},true),
 U1Fixture("int",new[]{new[]{"3671"},new[]{"0"},new[]{"59"},new[]{"3600"},new[]{"86399"}},new[]{new[]{"Saat: 1","Dakika: 1","Saniye: 11"},new[]{"Saat: 0","Dakika: 0","Saniye: 0"},new[]{"Saat: 0","Dakika: 0","Saniye: 59"},new[]{"Saat: 1","Dakika: 0","Saniye: 0"},new[]{"Saat: 23","Dakika: 59","Saniye: 59"}},true),
 U1Fixture("int",new[]{new[]{"7","30","12"},new[]{"0","30","12"},new[]{"1","0","15"},new[]{"12","25","8"},new[]{"100","1000","1000"}},new[]{new[]{"Ucret: 114"},new[]{"Ucret: 30"},new[]{"Ucret: 15"},new[]{"Ucret: 121"},new[]{"Ucret: 101000"}},true),
 U1Fixture("int",new[]{new[]{"29","6"},new[]{"0","5"},new[]{"4","6"},new[]{"24","6"},new[]{"1000","7"}},new[]{new[]{"Dolu kutu: 4","Artan: 5"},new[]{"Dolu kutu: 0","Artan: 0"},new[]{"Dolu kutu: 0","Artan: 4"},new[]{"Dolu kutu: 4","Artan: 0"},new[]{"Dolu kutu: 142","Artan: 6"}},true),
 U1Fixture("int",new[]{new[]{"8","5"},new[]{"1","1"},new[]{"3","9"},new[]{"50","50"},new[]{"12","7"}},new[]{new[]{"Alan: 40","Cevre: 26"},new[]{"Alan: 1","Cevre: 4"},new[]{"Alan: 27","Cevre: 24"},new[]{"Alan: 2500","Cevre: 200"},new[]{"Alan: 84","Cevre: 38"}},true),
 U1Fixture("double",new[]{new[]{"98.5","0.25"},new[]{"80","0.5"},new[]{"100.1","0.1"},new[]{"97.75","0.75"},new[]{"105","1"}},new[]{new[]{"99.25"},new[]{"81.5"},new[]{"100.39999999999999"},new[]{"100"},new[]{"108"}},false),
 U1Fixture("int|decimal|decimal",new[]{new[]{"3","12.5","100"},new[]{"0","8.75","20"},new[]{"1","0.1","1"},new[]{"4","9.95","50"},new[]{"20","100","5000"}},new[]{new[]{"37.5","62.5"},new[]{"0","20"},new[]{"0.1","0.9"},new[]{"39.8","10.2"},new[]{"2000","3000"}},false),
 U1Fixture("int",new[]{new[]{"80","25","10"},new[]{"0","0","0"},new[]{"100","100","50"},new[]{"10","5","95"},new[]{"75","10","0"}},new[]{new[]{"65"},new[]{"0"},new[]{"50"},new[]{"100"},new[]{"65"}},false),
 U1Fixture("bool|int",new[]{new[]{"true","4"},new[]{"true","3"},new[]{"true","2"},new[]{"false","5"},new[]{"false","0"}},new[]{new[]{"True","False"},new[]{"True","False"},new[]{"False","True"},new[]{"False","True"},new[]{"False","True"}},true),
 U1Fixture("string|int|int|int|int|int",new[]{new[]{"Ada","29","6","7","12","200"},new[]{"Deniz Kaya","0","5","0","15","100"},new[]{"Ece","24","6","3","10","30"},new[]{"Ömer","4","9","1","0","0"},new[]{"Nokta","1000","7","100","100","20000"}},new[]{new[]{"Dosya: Ada","Dolu kutu: 4","Artan: 5","Yol: 84","Kalan: 116"},new[]{"Dosya: Deniz Kaya","Dolu kutu: 0","Artan: 0","Yol: 0","Kalan: 100"},new[]{"Dosya: Ece","Dolu kutu: 4","Artan: 0","Yol: 30","Kalan: 0"},new[]{"Dosya: Ömer","Dolu kutu: 0","Artan: 4","Yol: 0","Kalan: 0"},new[]{"Dosya: Nokta","Dolu kutu: 142","Artan: 6","Yol: 10000","Kalan: 10000"}},true)
}).ToArray();
specs=specs.Concat(new Spec[]{
 ArrayFixture(new[]{new[]{"12","7","25"},new[]{"0","5","-2"},new[]{"-8","-3","-12"},new[]{"4","4","4"},new[]{"50","0","-50"}},new[]{new[]{"12","25"},new[]{"0","-2"},new[]{"-8","-12"},new[]{"4","4"},new[]{"50","-50"}}),
 ArrayFixture(new[]{new[]{"12","7","25","4","2"},new[]{"9","8","7","6","0"},new[]{"9","8","7","6","3"},new[]{"-3","-9","2","4","1"},new[]{"0","0","0","0","2"}},new[]{new[]{"25"},new[]{"9"},new[]{"6"},new[]{"-9"},new[]{"0"}}),
 ArrayFixture(new[]{new[]{"8","3","6","20"},new[]{"1","2","3","0"},new[]{"-4","8","-9","-2"},new[]{"5","5","5","5"},new[]{"50","-50","0","10"}},new[]{new[]{"8","20","6"},new[]{"1","0","3"},new[]{"-4","-2","-9"},new[]{"5","5","5"},new[]{"50","10","0"}}),
 ArrayFixture(new[]{new[]{"3","12","7","20"},new[]{"1","-5"},new[]{"4","0","2","-3","4"},new[]{"2","8","8"},new[]{"6","1","2","3","4","5","6"}},new[]{new[]{"12","7","20"},new[]{"-5"},new[]{"0","2","-3","4"},new[]{"8","8"},new[]{"1","2","3","4","5","6"}}),
 ArrayFixture(new[]{new[]{"3","8","5","2"},new[]{"1","-8"},new[]{"4","-2","0","3","-1"},new[]{"2","50","50"},new[]{"6","1","2","3","4","5","6"}},new[]{new[]{"15"},new[]{"-8"},new[]{"0"},new[]{"100"},new[]{"21"}}),
 ArrayFixture(new[]{new[]{"4","0","3","0","5"},new[]{"1","0"},new[]{"1","9"},new[]{"3","2","3","4"},new[]{"6","0","1","0","1","0","1"}},new[]{new[]{"2"},new[]{"0"},new[]{"1"},new[]{"3"},new[]{"3"}}),
 ArrayFixture(new[]{new[]{"4","-8","-3","-12","-5"},new[]{"1","-20"},new[]{"3","0","-1","-2"},new[]{"4","2","9","9","1"},new[]{"6","1","2","3","4","5","50"}},new[]{new[]{"-3"},new[]{"-20"},new[]{"0"},new[]{"9"},new[]{"50"}}),
 ArrayFixture(new[]{new[]{"4","12","7","12","20","12"},new[]{"1","8","8"},new[]{"3","1","2","3","9"},new[]{"4","1","2","3","4","4"},new[]{"5","-2","0","-2","3","1","-2"}},new[]{new[]{"0"},new[]{"0"},new[]{"-1"},new[]{"3"},new[]{"0"}}),
 ArrayFixture(new[]{new[]{"4","10","20","30","40"},new[]{"1","7"},new[]{"3","-3","0","2"},new[]{"2","8","8"},new[]{"6","1","2","3","4","5","6"}},new[]{new[]{"40","30","20","10"},new[]{"7"},new[]{"2","0","-3"},new[]{"8","8"},new[]{"6","5","4","3","2","1"}}),
 ArrayFixture(new[]{new[]{"3","4","7","2","5"},new[]{"1","0","0"},new[]{"3","-5","0","5","2"},new[]{"2","50","-50","10"},new[]{"6","1","2","3","4","5","6","1"}},new[]{new[]{"9","12","7"},new[]{"0"},new[]{"-3","2","7"},new[]{"60","-40"},new[]{"2","3","4","5","6","7"}})
}).ToArray();
specs=specs.Concat(new Spec[]{
 MethodFixture(new string[][]{new string[]{}},new string[][]{new string[]{"Dosya açıldı"}},"void",0,1,true),
 MethodFixture(new string[][]{new string[]{"Ada"},new string[]{"Deniz Kaya"},new string[]{"Ömer"},new string[]{"Ece"},new string[]{"Nokta"}},new string[][]{new string[]{"Dedektif: Ada"},new string[]{"Dedektif: Deniz Kaya"},new string[]{"Dedektif: Ömer"},new string[]{"Dedektif: Ece"},new string[]{"Dedektif: Nokta"}},"void",1,1,true),
 MethodFixture(new string[][]{new string[]{"7"},new string[]{"0"},new string[]{"-8"},new string[]{"1"},new string[]{"50"}},new string[][]{new string[]{"14"},new string[]{"0"},new string[]{"-16"},new string[]{"2"},new string[]{"100"}},"int",1,1,false),
 MethodFixture(new string[][]{new string[]{"8","5"},new string[]{"0","0"},new string[]{"-8","3"},new string[]{"50","-50"},new string[]{"7","19"}},new string[][]{new string[]{"13"},new string[]{"0"},new string[]{"-5"},new string[]{"0"},new string[]{"26"}},"int",2,1,false),
 MethodFixture(new string[][]{new string[]{"8"},new string[]{"0"},new string[]{"-3"},new string[]{"-4"},new string[]{"1"}},new string[][]{new string[]{"True"},new string[]{"True"},new string[]{"False"},new string[]{"True"},new string[]{"False"}},"bool",1,1,true),
 MethodFixture(new string[][]{new string[]{"42"},new string[]{"0"},new string[]{"1"},new string[]{"107"},new string[]{"999"}},new string[][]{new string[]{"DELIL-42"},new string[]{"DELIL-0"},new string[]{"DELIL-1"},new string[]{"DELIL-107"},new string[]{"DELIL-999"}},"string",1,1,true),
 MethodFixture(new string[][]{new string[]{"4","9"},new string[]{"9","4"},new string[]{"5","5"},new string[]{"-8","-3"},new string[]{"0","-1"}},new string[][]{new string[]{"9"},new string[]{"9"},new string[]{"5"},new string[]{"-3"},new string[]{"0"}},"int",2,1,false),
 MethodFixture(new string[][]{new string[]{"İz bulundu","3"},new string[]{"Hazır","0"},new string[]{"Ada","1"},new string[]{"Delil 7","2"},new string[]{"Nokta","4"}},new string[][]{new string[]{"İz bulundu","İz bulundu","İz bulundu"},new string[]{},new string[]{"Ada"},new string[]{"Delil 7","Delil 7"},new string[]{"Nokta","Nokta","Nokta","Nokta"}},"void",2,1,true),
 MethodFixture(new string[][]{new string[]{"3","5"},new string[]{"0","1"},new string[]{"-3","-4"},new string[]{"20","-20"},new string[]{"2","2"}},new string[][]{new string[]{"9","25"},new string[]{"0","1"},new string[]{"9","16"},new string[]{"400","400"},new string[]{"4","4"}},"int",1,1,false),
 MethodFixture(new string[][]{new string[]{"7","12","200"},new string[]{"0","5","100"},new string[]{"2","10","20"},new string[]{"50","20","2000"},new string[]{"1","0","0"}},new string[][]{new string[]{"84","116"},new string[]{"0","100"},new string[]{"20","0"},new string[]{"1000","1000"},new string[]{"0","0"}},"int",2,2,false)
}).Concat(new Spec[]{
 FinalFixture(new string[][]{new string[]{"3","4","7","2"},new string[]{"1","0"},new string[]{"4","-3","8","-1","8"},new string[]{"2","5","5"},new string[]{"5","1","2","3","4","5"}},new string[][]{new string[]{"4","7","2"},new string[]{"0"},new string[]{"-3","8","-1","8"},new string[]{"5","5"},new string[]{"1","2","3","4","5"}},"void",1,1,true),
 FinalFixture(new string[][]{new string[]{"3","4","7","-2"},new string[]{"1","0"},new string[]{"3","-3","-8","-1"},new string[]{"2","5","5"},new string[]{"5","1","2","3","4","5"}},new string[][]{new string[]{"9"},new string[]{"0"},new string[]{"-12"},new string[]{"10"},new string[]{"15"}},"int",1,1,false),
 FinalFixture(new string[][]{new string[]{"2","5","8"},new string[]{"1","0"},new string[]{"2","-3","-2"},new string[]{"3","1","2","4"},new string[]{"4","2","4","6","8"}},new string[][]{new string[]{"6.5"},new string[]{"0"},new string[]{"-2.5"},new string[]{"2.3333333333333335"},new string[]{"5"}},"double",1,1,false),
 FinalFixture(new string[][]{new string[]{"3","-4","-1","-7"},new string[]{"1","0"},new string[]{"1","-9"},new string[]{"4","8","3","8","1"},new string[]{"5","1","2","3","4","5"}},new string[][]{new string[]{"-1"},new string[]{"0"},new string[]{"-9"},new string[]{"8"},new string[]{"5"}},"int",1,1,false),
 FinalFixture(new string[][]{new string[]{"4","3","5","8","1","5"},new string[]{"1","0","0"},new string[]{"3","-3","-2","-1","-2"},new string[]{"2","2","2","3"},new string[]{"3","9","7","9","7"}},new string[][]{new string[]{"2"},new string[]{"1"},new string[]{"2"},new string[]{"0"},new string[]{"3"}},"int",2,1,false),
 FinalFixture(new string[][]{new string[]{"4","4","7","7","2","7"},new string[]{"1","0","0"},new string[]{"2","2","3","9"},new string[]{"3","-1","3","-1","-1"},new string[]{"3","4","5","6","6"}},new string[][]{new string[]{"1"},new string[]{"0"},new string[]{"-1"},new string[]{"0"},new string[]{"2"}},"int",2,1,false),
 FinalFixture(new string[][]{new string[]{"3","4","0","-2"},new string[]{"1","0"},new string[]{"3","2","3","1"},new string[]{"1","-1"},new string[]{"3","5","4","0"}},new string[][]{new string[]{"False"},new string[]{"True"},new string[]{"True"},new string[]{"False"},new string[]{"True"}},"bool",1,1,true),
 FinalFixture(new string[][]{new string[]{"3","2","5","1","3"},new string[]{"1","0","0"},new string[]{"2","4","-2","-3"},new string[]{"3","1","1","1","2"},new string[]{"1","-9","9"}},new string[][]{new string[]{"5","8","4"},new string[]{"0"},new string[]{"1","-5"},new string[]{"3","3","3"},new string[]{"0"}},"void",2,1,true),
 FinalFixture(new string[][]{new string[]{"3","2","8","4"},new string[]{"1","0"},new string[]{"4","-1","3","7","0"},new string[]{"2","5","5"},new string[]{"5","1","2","3","4","5"}},new string[][]{new string[]{"4","8","2"},new string[]{"0"},new string[]{"0","7","3","-1"},new string[]{"5","5"},new string[]{"5","4","3","2","1"}},"void",1,1,true),
 FinalFixture(new string[][]{new string[]{"3","4","-2","9"},new string[]{"1","0"},new string[]{"3","-5","-2","-8"},new string[]{"2","3","3"},new string[]{"5","1","2","3","4","5"}},new string[][]{new string[]{"Toplam: 11","En yüksek: 9"},new string[]{"Toplam: 0","En yüksek: 0"},new string[]{"Toplam: -15","En yüksek: -2"},new string[]{"Toplam: 6","En yüksek: 3"},new string[]{"Toplam: 15","En yüksek: 5"}},"int",1,2,true)
}).ToArray();
app.MapGet("/api/health",()=>new { engine="Roslyn", units=new[]{1,2,3}, questions=specs.Length });
app.MapPost("/api/check", (Submission sub) => {
 if(sub.Question<0||sub.Question>=specs.Length||string.IsNullOrWhiteSpace(sub.Code)||sub.Code.Length>12000)
   return Results.Json(new{ok=false,stage="Başlangıç",message="Geçerli bir görev ve en fazla 12.000 karakter kod gerekiyor."});
 var tree=CSharpSyntaxTree.ParseText("using System;\n"+sub.Code);
 var compilation=CSharpCompilation.Create("Lesson",new[]{tree},refs,new CSharpCompilationOptions(OutputKind.ConsoleApplication));
 var errors=compilation.GetDiagnostics().Where(d=>d.Severity==DiagnosticSeverity.Error).Take(5).Select(d=>new {line=Math.Max(1,d.Location.GetLineSpan().StartLinePosition.Line), message=d.GetMessage(CultureInfo.GetCultureInfo("tr-TR"))}).ToArray();
 if(errors.Length>0)return Results.Json(new {ok=false,stage="Derleme",message="Önce derleme hatalarını düzeltelim.",errors});
 var spec=specs[sub.Question]; var rows=new List<object>(); var traces=new List<object>();
 try {
  var model=compilation.GetSemanticModel(tree); var root=tree.GetCompilationUnitRoot();
  if(root.Usings.Count!=1||root.Members.Any(m=>m is not GlobalStatementSyntax))throw new LessonError("Bu ünitede yalnızca doğrudan komutları yaz. using, class ve metot tanımı ekleme.");
  if(spec.MethodTask.Length==0&&root.DescendantNodes().Any(n=>n is LocalFunctionStatementSyntax))throw new LessonError("Bu görevde metot tanımı gerekmiyor. Metot alıştırmalarını yeni 25. vakada yapabilirsin.");
  if(spec.ArrayTask&&!root.DescendantNodes().OfType<VariableDeclarationSyntax>().Any(v=>model.GetTypeInfo(v.Type).Type is IArrayTypeSymbol a&&a.ElementType.SpecialType==SpecialType.System_Int32))throw new LessonError("Bu görevde sayıları int[] dizisinde sakla. var ile oluşturulan int dizisi de kabul edilir.");
  if(spec.Unit==1&&root.DescendantNodes().Any(n=>n is IfStatementSyntax or ForStatementSyntax or WhileStatementSyntax or DoStatementSyntax or ForEachStatementSyntax or SwitchStatementSyntax))throw new LessonError("Bu görev Ünite 1: temel değişken ve hesaplama komutlarını kullan. Koşul ve döngü görevleri Ünite 2’de.");
  var methodRuns=new List<MethodEvent[]>();bool passed=true; string? ruleProblem=null;HashSet<int> allUsed=[];HashSet<string> allOutputOps=[];HashSet<string> executedFlow=[];
  foreach(var input in spec.Cases) {
   var expectedInputs=spec.Inputs<0?input.Length:spec.Inputs;var runner=new Runner(input,model); runner.Run(root);
   methodRuns.Add(runner.MethodEvents.ToArray());executedFlow.UnionWith(runner.ExecutedFlow);var expected=spec.Expected(input); bool matches=runner.Output.Count==expected.Length && runner.Output.Zip(expected).All(pair=>EqualOutput(pair.First.Text,pair.Second,sub.Question==1||spec.Text));
   var outputDeps=runner.Output.SelectMany(v=>v.Deps).ToHashSet();if(spec.Unit==2)outputDeps.UnionWith(runner.FlowDeps);allUsed.UnionWith(outputDeps); var outputOps=runner.Output.SelectMany(v=>v.Ops).ToHashSet();allOutputOps.UnionWith(outputOps);
   string? issue=null;
   if(runner.InputIndex!=expectedInputs||(spec.Unit==1&&sub.Question<85&&Enumerable.Range(0,spec.Inputs).Any(i=>!outputDeps.Contains(i))))issue="Her görev girdisi yazdırılan sonuca katkı sağlamalı. Sabit sonuç yazdırma; okuduğun değerleri kullan.";
   else if(spec.Ops.Any(op=>!outputOps.Contains(op.ToString())))issue="Yazdırılan sonuca ulaşırken şu işlemler kullanılmalı: "+string.Join(" ",spec.Ops.ToCharArray())+". Kullanılmayan bir hesap yeterli değil.";
   else if(!runner.InputTypesMatch(spec.Type,expectedInputs))issue=spec.Type=="mixed"?"Adet int, birim fiyat ve kargo decimal değişkenlerde tutulmalı.":"Girdileri sırayla şu türlerde değişkenlerde tutmalısın: "+spec.Type.Replace("|",", ")+". Değişken adlarını kendin seçebilirsin.";
   if(spec.Flow.Split(',',StringSplitOptions.RemoveEmptyEntries).Any(flow=>!HasFlow(root,flow)))issue="Bu görevde şu yapıları kullan: "+spec.Flow.Replace(",",", ")+". Örnekteki sonucu sabit yazmak yeterli değil.";
   ruleProblem??=issue; passed &= matches && issue==null;
   rows.Add(new{input,expected,actual=runner.Output.Select(v=>v.Text),ok=matches&&issue==null});
   if(traces.Count==0)traces=runner.Trace;
  }
  if(spec.Unit==2 && sub.Question>=45 && !(sub.Question>=64&&sub.Question<=67) && !allOutputOps.Contains("loop")){passed=false;ruleProblem="Döngü yalnızca kodda bulunmamalı; yazdırılan sonucu üretmek için çalışmalı. Tekrarlanan işlemi döngünün içine taşı.";}
  if(sub.Question>=60){foreach(var required in spec.Flow.Split(',').Where(f=>f is "continue" or "break" or "switch"))if(!executedFlow.Contains(required)){passed=false;ruleProblem=required+" yalnızca kodda durmamalı; gereken durumda çalışmalı.";}}
  if(sub.Question>=64&&sub.Question<=67&&!allOutputOps.Contains("switch")){passed=false;ruleProblem="Çıktıyı switch ile seç. Kullanılmayan bir switch yeterli değil.";}
  if((spec.Unit==2||(spec.Unit==1&&sub.Question>=85))&&Enumerable.Range(0,spec.Inputs<0?spec.Cases.Max(a=>a.Length):spec.Inputs).Any(i=>!allUsed.Contains(i))){passed=false;ruleProblem="Okuduğun bütün bilgileri karar veya sonuç için kullan. Sabit cevap yazma.";}
  if(spec.MethodTask.Length>0&&allOutputOps.Where(op=>op.StartsWith("method:"+spec.MethodTask+":"+spec.MethodParams+":",StringComparison.Ordinal)).Distinct().Count()<spec.MethodCount){passed=false;ruleProblem=spec.MethodCount>1?"Bu görevde iki ayrı, iki parametreli int metot yaz ve ikisinin döndürdüğü sonucu kullan.":"Bu görevde "+spec.MethodParams+" parametreli "+spec.MethodTask+" metodu gerçekten çağır ve sonucunu kullan. Metot adı ve parametre adları serbest."; }
  if(spec.MethodTask.Length>0&&!(sub.Question>=115?FinalContracts(sub.Question,methodRuns,allOutputOps):MethodContracts(sub.Question,methodRuns,allOutputOps))){passed=false;ruleProblem="Metot çağrılıyor, ancak istenen işi metodun içinde tamamlamalısın. return değeri, parametreler ve void içindeki çıktıları kontrol et.";}
  if(spec.ArrayTask&&!allOutputOps.Any(op=>op is "arrayRead" or "arrayLength")){passed=false;ruleProblem="Bu görevde sonucu dizide sakladığın elemanlardan üret. Kullanılmayan bir dizi tanımlamak yeterli değil.";}
  return Results.Json(new {ok=passed,stage=passed?"Tamamlandı":"İnceleme",message=passed?"Dosya çözüldü. Kodun bütün testleri ve bu dersin kullanım kurallarını geçti.":ruleProblem??"Kod derleniyor, ancak bazı girdilerde sonuç farklı. Test tablosuna ve işlem sırasına bak.",rows,trace=traces});
 } catch(LessonError e) {return Results.Json(new{ok=false,stage="Desteklenen yapılar",message=e.Message});}
 catch(Exception e) when(e is ArithmeticException||e is FormatException||e is InvalidCastException||e is Microsoft.CSharp.RuntimeBinder.RuntimeBinderException) {return Results.Json(new{ok=false,stage="Hesaplama",message="Hesaplama tamamlanamadı: "+e.Message});}
});
app.Run();

static bool MethodContracts(int question,List<MethodEvent[]> runs,HashSet<string> used){
 bool Fits(MethodEvent e,int rule){
  var a=e.Arguments;var p=e.ParamTypes;int Num(int i)=>a[i].Data is int n?n:int.MinValue;
  bool Ints(int n)=>p.Length==n&&p.All(x=>x=="int");bool ResultInt(int n)=>e.Result.Data is int value&&value==n;
  return rule switch {
   0=>p.Length==0&&e.ReturnType=="void"&&e.Output.SequenceEqual(new[]{"Dosya açıldı"}),
   1=>p.SequenceEqual(new[]{"string"})&&e.ReturnType=="void"&&e.Output.SequenceEqual(new[]{"Dedektif: "+a[0].Text}),
   2=>Ints(1)&&ResultInt(Num(0)*2),
   3=>Ints(2)&&ResultInt(Num(0)+Num(1)),
   4=>Ints(1)&&e.Result.Data is bool b&&b==(Num(0)%2==0),
   5=>Ints(1)&&e.Result.Data is string text&&text=="DELIL-"+Num(0),
   6=>Ints(2)&&ResultInt(Math.Max(Num(0),Num(1))),
   7=>Repeat(),
   8=>Ints(1)&&ResultInt(Num(0)*Num(0)),
   9=>Ints(2)&&ResultInt(Num(0)*Num(1)),
   10=>Ints(2)&&ResultInt(Num(0)-Num(1)),
   _=>false
  };
  bool Repeat(){if(e.ReturnType!="void"||p.Length!=2||p.Count(x=>x=="string")!=1||p.Count(x=>x=="int")!=1)return false;int si=Array.IndexOf(p,"string"),ni=Array.IndexOf(p,"int");int count=Num(ni);return count>=0&&count<=4&&e.Output.SequenceEqual(Enumerable.Repeat(a[si].Text,count));}
 }
 bool Candidate(string marker,int rule,int minimum=1)=>runs.All(run=>{var calls=run.Where(e=>e.Marker==marker).ToArray();return calls.Length>=minimum&&calls.All(e=>Fits(e,rule));});
 var markers=used.Where(x=>x.StartsWith("method:",StringComparison.Ordinal)).ToArray();int rule=question-105;
 if(rule==9)return markers.Any(a=>Candidate(a,9)&&markers.Any(b=>b!=a&&Candidate(b,10)));
 return markers.Any(m=>Candidate(m,rule,rule==8?2:1));
}

static Spec FinalFixture(string[][] inputs,string[][] outputs,string type,int parameters,int count,bool text)=>new("",-1,"any",inputs,a=>outputs[Array.FindIndex(inputs,v=>v.SequenceEqual(a))],text,"",3,true,type,parameters,count);
static bool FinalContracts(int question,List<MethodEvent[]> runs,HashSet<string> used){
 bool Fits(MethodEvent e,int rule){
  if(e.ParamTypes.Count(x=>x=="int[]")!=1)return false;int ai=Array.IndexOf(e.ParamTypes,"int[]"),ni=Array.IndexOf(e.ParamTypes,"int");
  if(e.Arguments[ai].Data is not Value[] av||av.Length==0||av.Any(v=>v.Data is not int))return false;
  int[] a=av.Select(v=>(int)v.Data).ToArray();int n=ni>=0?(int)e.Arguments[ni].Data:0;
  bool Signature(string type,int count)=>e.ReturnType==type&&e.ParamTypes.Length==count&&(count==1||ni>=0);
  bool IntResult(int v)=>e.Result.Data is int r&&r==v;
  bool Unchanged()=>e.AfterArguments[ai].Text==e.Arguments[ai].Text;
  return rule switch {
   0=>Signature("void",1)&&Unchanged()&&e.Output.SequenceEqual(a.Select(v=>v.ToString(CultureInfo.InvariantCulture))),
   1=>Signature("int",1)&&IntResult(a.Sum()),
   2=>Signature("double",1)&&e.Result.Data is double r&&Math.Abs(r-a.Average())<1e-9,
   3=>Signature("int",1)&&IntResult(a.Max()),
   4=>Signature("int",2)&&IntResult(a.Count(v=>v>=n)),
   5=>Signature("int",2)&&IntResult(Array.IndexOf(a,n)),
   6=>Signature("bool",1)&&e.Result.Data is bool b&&b==a.All(v=>v>=0),
   7=>Signature("void",2)&&e.Output.Length==0&&e.AfterArguments[ai].Data is Value[] after&&after.Select(v=>v.Text).SequenceEqual(a.Select(v=>(v+n).ToString(CultureInfo.InvariantCulture))),
   8=>Signature("void",1)&&Unchanged()&&e.Output.SequenceEqual(a.Reverse().Select(v=>v.ToString(CultureInfo.InvariantCulture))),
   _=>false
  };
 }
 bool Candidate(string marker,int rule)=>runs.All(run=>{var calls=run.Where(e=>e.Marker==marker).ToArray();return calls.Length>0&&calls.All(e=>Fits(e,rule));});
 var markers=used.Where(x=>x.StartsWith("method:",StringComparison.Ordinal)).ToArray();int task=question-115;
 return task==9?markers.Any(a=>Candidate(a,1)&&markers.Any(b=>b!=a&&Candidate(b,3))):markers.Any(m=>Candidate(m,task));
}

static Spec MethodFixture(string[][] inputs,string[][] outputs,string type,int parameters,int count,bool text)=>new("",-1,"any",inputs,a=>outputs[Array.FindIndex(inputs,v=>v.SequenceEqual(a))],text,"",3,false,type,parameters,count);
static Spec ArrayFixture(string[][] inputs,string[][] outputs)=>new("",-1,"any",inputs,a=>outputs[Array.FindIndex(inputs,v=>v.SequenceEqual(a))],false,"",3,true);
static Spec U1Fixture(string type,string[][] inputs,string[][] outputs,bool text)=>new("",inputs[0].Length,type,inputs,a=>outputs[Array.FindIndex(inputs,v=>v.SequenceEqual(a))],text);
static Spec Fixture(string flow,string[][] inputs,string[][] outputs,bool text,string type)=>new("",-1,type,inputs,a=>outputs[Array.FindIndex(inputs,v=>v.SequenceEqual(a))],text,flow,2);
static bool HasFlow(SyntaxNode root,string flow)=>root.DescendantNodes().Any(n=>flow switch {"if"=>n is IfStatementSyntax,"and"=>n.IsKind(SyntaxKind.LogicalAndExpression),"or"=>n.IsKind(SyntaxKind.LogicalOrExpression),"ternary"=>n is ConditionalExpressionSyntax,"switch"=>n is SwitchStatementSyntax,"for"=>n is ForStatementSyntax,"while"=>n is WhileStatementSyntax,"do"=>n is DoStatementSyntax,"foreach"=>n is ForEachStatementSyntax,"break"=>n is BreakStatementSyntax,"continue"=>n is ContinueStatementSyntax,"interpolation"=>n is InterpolatedStringExpressionSyntax,_=>false});
static int I(string[] a,int i)=>int.Parse(a[i],CultureInfo.InvariantCulture);
static decimal D(string[] a,int i)=>decimal.Parse(a[i],CultureInfo.InvariantCulture);
static string N(object v)=>Convert.ToString(v,CultureInfo.InvariantCulture)!;
static bool EqualOutput(string a,string b,bool text)=>text?a==b:double.TryParse(a,NumberStyles.Float,CultureInfo.InvariantCulture,out var x)&&double.TryParse(b,NumberStyles.Float,CultureInfo.InvariantCulture,out var y)&&double.IsFinite(x)&&Math.Abs(x-y)<=1e-9*Math.Max(1,Math.Abs(y));
record Submission(int Question,string Code);
record MethodEvent(string Marker,string ReturnType,string[] ParamTypes,Value[] Arguments,Value[] AfterArguments,Value Result,string[] Output);
record Spec(string Ops,int Inputs,string Type,string[][] Cases,Func<string[],string[]> Expected,bool Text=false,string Flow="",int Unit=1,bool ArrayTask=false,string MethodTask="",int MethodParams=-1,int MethodCount=1);
class LessonError(string message):Exception(message);
record Unassigned;
record Value(object Data,HashSet<int> Deps,HashSet<string> Ops) {
 public string Text=>Data is Value[] items?"["+string.Join(", ",items.Select(x=>x.Text))+"]":Data is Unassigned?"henüz değer atanmadı":Convert.ToString(Data,CultureInfo.InvariantCulture)??"";
 public static Value Plain(object v)=>new(v,[],[]);
}
class LoopBreak:Exception;
class LoopContinue:Exception;
class MethodReturn(Value value):Exception {public Value Result=value;}
class Runner(string[] inputs,SemanticModel model) {
 readonly Dictionary<ISymbol,Value> variables=new(SymbolEqualityComparer.Default);
 readonly Dictionary<int,HashSet<string>> types=[];
 HashSet<int> controlDeps=[];HashSet<string> controlOps=[];
 public HashSet<int> FlowDeps=[];public HashSet<string> ExecutedFlow=[];
 readonly HashSet<IMethodSymbol> activeMethods=new(SymbolEqualityComparer.Default);int callCount;
 public List<MethodEvent> MethodEvents=[];
 public int InputIndex;public List<Value> Output=[];public List<object> Trace=[];int steps;
 void Tick(){if(++steps>30000)throw new LessonError("Çalışma sınırına ulaşıldı. Döngünün sayacı değişiyor mu? Koşul bir noktada false olmalı.");}
 public bool InputTypesMatch(string type,int count)=>type=="any"||Enumerable.Range(0,count).All(i=>types.TryGetValue(i,out var t)&&t.Contains(type.Contains('|')?type.Split('|')[i]:type=="mixed"?(i==0?"int":"decimal"):type));
 public void Run(CompilationUnitSyntax root){foreach(var member in root.Members){var statement=((GlobalStatementSyntax)member).Statement;if(statement is not LocalFunctionStatementSyntax)Statement(statement);}}
 Value Controlled(Value v)=>v with {Deps=v.Deps.Union(controlDeps).ToHashSet(),Ops=v.Ops.Union(controlOps).ToHashSet()};
 void InControl(Value v,Action action){var deps=controlDeps;var ops=controlOps;controlDeps=deps.Union(v.Deps).ToHashSet();controlOps=ops.Union(v.Ops).ToHashSet();try{action();}finally{controlDeps=deps;controlOps=ops;}}
 Value Observe(Value v){FlowDeps.UnionWith(v.Deps);return v;}
 bool Truth(Value v)=>v.Data is bool b?b:throw new LessonError("Koşul true veya false üretmeli. = yerine == kullanman gerekiyor olabilir.");
 void Note(SyntaxNode node,string action,string value){if(Trace.Count<180)Trace.Add(new {line=Math.Max(1,node.GetLocation().GetLineSpan().StartLinePosition.Line),action,value,variables=variables.ToDictionary(p=>p.Key.Name+ (variables.Keys.Count(k=>k.Name==p.Key.Name)>1?"@"+p.Key.Locations.FirstOrDefault()?.SourceSpan.Start:""),p=>p.Value.Text)});}
 void Declare(VariableDeclarationSyntax declaration){foreach(var v in declaration.Variables){var symbol=(ILocalSymbol)model.GetDeclaredSymbol(v)!;var type=symbol.Type.ToDisplayString();if(type is not ("int" or "double" or "decimal" or "string" or "bool" or "int[]" or "string[]"))throw new LessonError("Desteklenen türler: int, double, decimal, string, bool ve basit dizileri.");var value=v.Initializer==null?Value.Plain(new Unassigned()):Coerce(Eval(v.Initializer.Value),type);value=Controlled(value);variables[symbol]=value;RememberTypes(value,type);Note(v,"Değişken oluşturuldu",symbol.Name+" = "+value.Text);}}
 void Statement(StatementSyntax stmt){Tick();switch(stmt){
 case LocalFunctionStatementSyntax:break;
 case ReturnStatementSyntax ret:{if(activeMethods.Count==0)throw new LessonError("return, bu görevde kendi metodunun içinde olmalı.");var result=ret.Expression==null?Controlled(Value.Plain(new Unassigned())):Controlled(Eval(ret.Expression));Note(ret,"Metottan dönüldü",ret.Expression==null?"Değer yok; çağıran satıra dön.":result.Text);throw new MethodReturn(result);}
 case EmptyStatementSyntax:break;
 case BlockSyntax block:foreach(var child in block.Statements)Statement(child);break;
 case LocalDeclarationStatementSyntax local:Declare(local.Declaration);break;
 case ExpressionStatementSyntax expr:Step(expr.Expression);break;
 case IfStatementSyntax conditional:{var test=Observe(Eval(conditional.Condition));Note(conditional.Condition,"Koşul",test.Text);InControl(test,()=>{if(Truth(test))Statement(conditional.Statement);else if(conditional.Else!=null)Statement(conditional.Else.Statement);});break;}
 case ForStatementSyntax loop:{if(loop.Declaration!=null)Declare(loop.Declaration);foreach(var x in loop.Initializers)Step(x);while(true){Tick();var test=Observe(loop.Condition==null?Value.Plain(true):Eval(loop.Condition));Note(loop.Condition??(SyntaxNode)loop,"Döngü koşulu",test.Text);if(!Truth(test))break;bool stop=false;InControl(test with {Ops=test.Ops.Union(new[]{"loop"}).ToHashSet()},()=>{try{Statement(loop.Statement);}catch(LoopBreak){stop=true;}catch(LoopContinue){}});if(stop)break;foreach(var x in loop.Incrementors)Step(x);}break;}
 case WhileStatementSyntax loop:{while(true){Tick();var test=Observe(Eval(loop.Condition));Note(loop.Condition,"Döngü koşulu",test.Text);if(!Truth(test))break;bool stop=false;InControl(test with {Ops=test.Ops.Union(new[]{"loop"}).ToHashSet()},()=>{try{Statement(loop.Statement);}catch(LoopBreak){stop=true;}catch(LoopContinue){}});if(stop)break;}break;}
 case DoStatementSyntax loop:{while(true){Tick();try{InControl(Value.Plain(true) with {Ops=new HashSet<string>{"loop"}},()=>Statement(loop.Statement));}catch(LoopBreak){break;}catch(LoopContinue){}var test=Observe(Eval(loop.Condition));Note(loop.Condition,"Döngü koşulu",test.Text);if(!Truth(test))break;}break;}
 case ForEachStatementSyntax loop:{var collection=Observe(Eval(loop.Expression));if(collection.Data is not Value[] items)throw new LessonError("foreach için basit bir dizi kullan.");var symbol=(ILocalSymbol)model.GetDeclaredSymbol(loop)!;foreach(var value in items){Tick();bool stop=false;InControl(collection with{Ops=collection.Ops.Union(new[]{"arrayRead","loop"}).ToHashSet()},()=>{variables[symbol]=Coerce(value,symbol.Type.ToDisplayString());Note(loop,"Sıradaki eleman",value.Text);try{Statement(loop.Statement);}catch(LoopBreak){stop=true;}catch(LoopContinue){}});if(stop)break;}break;}
 case SwitchStatementSyntax selection:{ExecutedFlow.Add("switch");var selectedValue=Observe(Eval(selection.Expression));var value=selectedValue with {Ops=selectedValue.Ops.Union(new[]{"switch"}).ToHashSet()};Note(selection.Expression,"Switch seçimi",value.Text);var section=selection.Sections.FirstOrDefault(s=>s.Labels.OfType<CaseSwitchLabelSyntax>().Any(l=>Equals(Eval(l.Value).Data,value.Data)))??selection.Sections.FirstOrDefault(s=>s.Labels.Any(l=>l is DefaultSwitchLabelSyntax));if(section!=null)InControl(value,()=>{Note(section.Labels[0],"Case seçildi",string.Join(" ",section.Labels.Select(l=>l.ToString())));try{foreach(var s in section.Statements)Statement(s);}catch(LoopBreak){}});break;}
 case BreakStatementSyntax stop:{ExecutedFlow.Add("break");Note(stop,"break",stop.Ancestors().FirstOrDefault(n=>n is SwitchStatementSyntax or ForStatementSyntax or WhileStatementSyntax or DoStatementSyntax or ForEachStatementSyntax) is SwitchStatementSyntax ? "switch bitti; sonraki komutla devam et." : "Döngü bitti; yeni tur yok.");throw new LoopBreak();}
 case ContinueStatementSyntax skip:{ExecutedFlow.Add("continue");Note(skip,"continue","Bu turun kalanını atla; sonraki tura geç.");throw new LoopContinue();}
 default:throw new LessonError("Bu çalıştırıcı doğrudan komutları, if/else, switch, for, while, do/while ve basit foreach yapılarını destekliyor. Metot, sınıf veya başka API ekleme.");}}

 (Value Owner,Value IndexValue,Value[] Items,int Index) ArrayTarget(ElementAccessExpressionSyntax element){
  if(element.ArgumentList.Arguments.Count!=1)throw new LessonError("Bu görevde tek boyutlu dizi kullan.");
  var owner=Eval(element.Expression);var index=Eval(element.ArgumentList.Arguments[0].Expression);
  if(owner.Data is not Value[] items||index.Data is not int ix)throw new LessonError("Dizi indeksini tam sayı olarak yaz.");
  if(ix<0||ix>=items.Length)throw new LessonError("Dizi indeksi sınır dışında. Bu dizide 0 ile "+(items.Length-1)+" arasını kullan.");
  return(owner,index,items,ix);
 }
 void StoreArray(ElementAccessExpressionSyntax element,(Value Owner,Value IndexValue,Value[] Items,int Index) target,Value next){
  string type=model.GetTypeInfo(element).Type?.ToDisplayString()??"int";
  next=Controlled(Coerce(next,type));
  next=next with {Deps=next.Deps.Union(target.IndexValue.Deps).ToHashSet(),Ops=next.Ops.Union(target.IndexValue.Ops).Append("arrayWrite").ToHashSet()};
  target.Items[target.Index]=next;RememberTypes(next,type);Note(element,"Dizi elemanı güncellendi","["+target.Index+"] = "+next.Text);
 }


 bool IsLocalCall(InvocationExpressionSyntax call)=>model.GetSymbolInfo(call).Symbol is IMethodSymbol {MethodKind:MethodKind.LocalFunction};
 Value CallLocal(InvocationExpressionSyntax call){
  Tick();if(++callCount>256)throw new LessonError("Metot çağrı sınırına ulaşıldı. Gereksiz çağrıları kontrol et.");
  var symbol=(IMethodSymbol)model.GetSymbolInfo(call).Symbol!;
  bool entered=false;
  try {
   var declaration=symbol.DeclaringSyntaxReferences.Select(r=>r.GetSyntax()).OfType<LocalFunctionStatementSyntax>().FirstOrDefault();
   if(declaration==null||symbol.IsGenericMethod||symbol.Parameters.Any(p=>p.RefKind!=RefKind.None))throw new LessonError("Bu vakada normal, sıralı ve değerle verilen parametreler kullan. ref/out ve tür parametresi ekleme.");
   if(call.ArgumentList.Arguments.Count!=symbol.Parameters.Length)throw new LessonError("Metodun bütün parametrelerini sırayla gönder.");
   string type=symbol.ReturnsVoid?"void":symbol.ReturnType.ToDisplayString();
   if(type is not ("void" or "int" or "double" or "decimal" or "string" or "bool"))throw new LessonError("Bu vakada void veya temel değer türü döndüren metot yaz.");
   var arguments=new Value[symbol.Parameters.Length];for(int ai=0;ai<call.ArgumentList.Arguments.Count;ai++){var arg=call.ArgumentList.Arguments[ai];int pi=arg.NameColon==null?ai:Enumerable.Range(0,symbol.Parameters.Length).First(i=>symbol.Parameters[i].Name==arg.NameColon.Name.Identifier.ValueText);arguments[pi]=Eval(arg.Expression);}
   if(!activeMethods.Add(symbol))throw new LessonError("Bu kolay vakada recursion yok. Metodu kendi içinden veya birbirini tekrar çağıran bir döngüyle çağırma.");entered=true;
   Value Snapshot(Value v)=>v.Data is Value[] items?v with{Data=items.Select(Snapshot).ToArray()}:v;
   var initialArguments=arguments.Select(Snapshot).ToArray();
   var oldVariables=new Dictionary<ISymbol,Value>(variables,SymbolEqualityComparer.Default);var oldDeps=controlDeps;var oldOps=controlOps;
   var marker="method:"+type+":"+symbol.Parameters.Length+":"+declaration.SpanStart;int outputStart=Output.Count;
   controlOps=controlOps.Append(marker).ToHashSet();
   try {
    for(int i=0;i<symbol.Parameters.Length;i++){var parameter=symbol.Parameters[i];var value=Controlled(Coerce(arguments[i],parameter.Type.ToDisplayString()));variables[parameter]=value;RememberTypes(value,parameter.Type.ToDisplayString());}
    Note(call,"Metot çağrıldı",symbol.Name+"("+string.Join(", ",arguments.Select(a=>a.Text))+")");
    Value result=Controlled(Value.Plain(new Unassigned()));bool returned=false;
    try {
     if(declaration.Body!=null)Statement(declaration.Body);
     else if(declaration.ExpressionBody!=null){if(type=="void")Step(declaration.ExpressionBody.Expression);else{result=Controlled(Eval(declaration.ExpressionBody.Expression));returned=true;}}
    }catch(MethodReturn ret){result=ret.Result;returned=true;}
    if(type!="void"){if(!returned||result.Data is Unassigned)throw new LessonError("Değer döndüren metodun her yolunda return ile sonuç ver.");result=Coerce(result,type);}
    Note(call,"Çağıran koda dönüldü",type=="void"?"void: değer döndürülmedi.":result.Text);
    result=result with{Ops=result.Ops.Append(marker).ToHashSet()};MethodEvents.Add(new MethodEvent(marker,type,symbol.Parameters.Select(p=>p.Type.ToDisplayString()).ToArray(),initialArguments,arguments.Select(Snapshot).ToArray(),result,Output.Skip(outputStart).Select(v=>v.Text).ToArray()));return result;
   }finally{var restored=oldVariables.ToDictionary(p=>p.Key,p=>variables.TryGetValue(p.Key,out var current)?current:p.Value,SymbolEqualityComparer.Default);variables.Clear();foreach(var pair in restored)variables[pair.Key]=pair.Value;controlDeps=oldDeps;controlOps=oldOps;}
  }finally{if(entered)activeMethods.Remove(symbol);}
 }

 void Step(ExpressionSyntax expr){Tick();if(expr is AssignmentExpressionSyntax assign){
 if(assign.Left is ElementAccessExpressionSyntax element){var destination=ArrayTarget(element);var arrayNext=Eval(assign.Right);if(!assign.IsKind(SyntaxKind.SimpleAssignmentExpression))arrayNext=Binary(destination.Items[destination.Index],arrayNext,assign.OperatorToken.Text.TrimEnd('='));StoreArray(element,destination,arrayNext);return;}
 var target=model.GetSymbolInfo(assign.Left).Symbol;var targetType=target is ILocalSymbol local?local.Type.ToDisplayString():target is IParameterSymbol parameter?parameter.Type.ToDisplayString():null;if(assign.Left is not IdentifierNameSyntax||targetType==null||!variables.TryGetValue(target!,out var previous))throw new LessonError("Yalnızca kendi değişkenlerine değer atayabilirsin.");var next=Eval(assign.Right);if(!assign.IsKind(SyntaxKind.SimpleAssignmentExpression))next=Binary(previous,next,assign.OperatorToken.Text.TrimEnd('='));next=Controlled(Coerce(next,targetType));variables[target!]=next;RememberTypes(next,targetType);Note(assign,"Değer güncellendi",target!.Name+" = "+next.Text);return;}
 if(expr is PostfixUnaryExpressionSyntax post&&(post.IsKind(SyntaxKind.PostIncrementExpression)||post.IsKind(SyntaxKind.PostDecrementExpression))){Increment(post.Operand,post.OperatorToken.Text);return;}
 if(expr is PrefixUnaryExpressionSyntax pre&&(pre.IsKind(SyntaxKind.PreIncrementExpression)||pre.IsKind(SyntaxKind.PreDecrementExpression))){Increment(pre.Operand,pre.OperatorToken.Text);return;}
 if(expr is InvocationExpressionSyntax call){if(IsLocalCall(call)){CallLocal(call);return;}var method=model.GetSymbolInfo(call).Symbol as IMethodSymbol;if(method?.ContainingType.SpecialType==SpecialType.System_Int32&&method.Name=="TryParse"){Eval(call);return;}if(method?.ContainingType.ToDisplayString()!="System.Console"||method.Name!="WriteLine"||call.ArgumentList.Arguments.Count!=1)throw new LessonError("Çıktı için Console.WriteLine(...) kullan. Soruların önüne ek mesaj yazdırma.");if(Output.Count>=1000)throw new LessonError("Çok fazla çıktı üretildi. Döngü sınırını kontrol et.");var result=Controlled(Eval(call.ArgumentList.Arguments[0].Expression));Output.Add(result);Note(call,"Konsola yazıldı",result.Text);return;}
 throw new LessonError("Bu komut desteklenmiyor. Atama, artırma/azaltma veya Console.WriteLine kullan.");}
 void Increment(ExpressionSyntax operand,string op){
 if(operand is ElementAccessExpressionSyntax element){var destination=ArrayTarget(element);StoreArray(element,destination,Binary(destination.Items[destination.Index],Value.Plain(1),op=="++"?"+":"-"));return;}
 var symbol=model.GetSymbolInfo(operand).Symbol;var symbolType=symbol is ILocalSymbol local?local.Type.ToDisplayString():symbol is IParameterSymbol parameter?parameter.Type.ToDisplayString():null;if(symbolType==null||!variables.TryGetValue(symbol!,out var old))throw new LessonError("Sayaç için kendi değişkenini kullan.");var value=Controlled(Coerce(Binary(old,Value.Plain(1),op=="++"?"+":"-"),symbolType));variables[symbol!]=value;RememberTypes(value,symbolType);Note(operand,"Sayaç değişti",symbol!.Name+" = "+value.Text);}
 void RememberTypes(Value value,string type){foreach(var dep in value.Deps){if(!types.ContainsKey(dep))types[dep]=[];types[dep].Add(type);}}
 Value Coerce(Value v,string type)=>v with {Data=type switch {"int"=>Convert.ToInt32(v.Data,CultureInfo.InvariantCulture),"double"=>Convert.ToDouble(v.Data,CultureInfo.InvariantCulture),"decimal"=>Convert.ToDecimal(v.Data,CultureInfo.InvariantCulture),"string"=>v.Text,"bool"=>Convert.ToBoolean(v.Data,CultureInfo.InvariantCulture),"int[]" or "string[]"=>v.Data is Value[]?v.Data:throw new LessonError("Dizi değerleri { } içinde olmalı."),_=>throw new LessonError("Bu tür desteklenmiyor.")}};
 Value Eval(ExpressionSyntax e){Tick();switch(e){
 case LiteralExpressionSyntax l when l.Token.Value!=null:return Value.Plain(l.Token.Value);
 case IdentifierNameSyntax id:{var symbol=model.GetSymbolInfo(id).Symbol;if(symbol!=null&&variables.TryGetValue(symbol,out var v))return v;throw new LessonError("Yalnızca kendi tanımladığın değişkenleri kullanabilirsin.");}
 case ParenthesizedExpressionSyntax p:return Eval(p.Expression);
 case BinaryExpressionSyntax b:{var left=Eval(b.Left);if(b.IsKind(SyntaxKind.LogicalAndExpression)&&!Truth(left))return left with{Data=false};if(b.IsKind(SyntaxKind.LogicalOrExpression)&&Truth(left))return left with{Data=true};return Binary(left,Eval(b.Right),b.OperatorToken.Text);}
 case ConditionalExpressionSyntax c:{var test=Observe(Eval(c.Condition));var branch=Controlled(Eval(Truth(test)?c.WhenTrue:c.WhenFalse));return branch with{Deps=branch.Deps.Union(test.Deps).ToHashSet(),Ops=branch.Ops.Union(test.Ops).ToHashSet()};}
 case PrefixUnaryExpressionSyntax u when u.OperatorToken.Text is "+" or "-" or "!":{var value=Eval(u.Operand);return value with{Data=u.OperatorToken.Text=="!"?!Truth(value):u.OperatorToken.Text=="-"?checked(-(dynamic)value.Data):value.Data};}
 case CastExpressionSyntax cast:{var v=Eval(cast.Expression);return v with{Data=model.GetTypeInfo(cast.Type).Type?.ToDisplayString() switch {"int"=>checked((int)(dynamic)v.Data),"double"=>(double)(dynamic)v.Data,"decimal"=>(decimal)(dynamic)v.Data,_=>throw new LessonError("Bu dönüşüm desteklenmiyor.")}};}

 case ElementAccessExpressionSyntax element:{var target=ArrayTarget(element);var item=target.Items[target.Index];return item with{Deps=item.Deps.Union(target.IndexValue.Deps).Union(target.Owner.Deps).ToHashSet(),Ops=item.Ops.Union(target.IndexValue.Ops).Append("arrayRead").ToHashSet()};}
 case MemberAccessExpressionSyntax member when member.Name.Identifier.ValueText=="Length":{
  var owner=Eval(member.Expression);int length=owner.Data is Value[] items?items.Length:owner.Data is string text?text.Length:throw new LessonError("Length için dizi veya metin kullan.");
  return owner with{Data=length,Ops=owner.Ops.Append("arrayLength").ToHashSet()};
 }
 case ArrayCreationExpressionSyntax array when array.Initializer==null:{
  if(array.Type.RankSpecifiers.Count!=1||array.Type.RankSpecifiers[0].Sizes.Count!=1)throw new LessonError("Bu görevde tek boyutlu dizi kullan.");
  var size=Eval(array.Type.RankSpecifiers[0].Sizes[0]);if(size.Data is not int count||count<0||count>512)throw new LessonError("Dizi uzunluğu 0 ile 512 arasında olmalı.");
  string type=array.Type.ElementType.ToString();if(type!="int"&&type!="string")throw new LessonError("Bu görevde int[] veya string[] kullan.");
  var items=Enumerable.Range(0,count).Select(_=>Value.Plain(type=="int"?(object)0:null!)).ToArray();
  return new Value(items,size.Deps,size.Ops.Append("arrayCreate").ToHashSet());
 }
 case InitializerExpressionSyntax init:return ArrayValue(init.Expressions.Select(Eval).ToArray());
 case ImplicitArrayCreationExpressionSyntax array:return Eval(array.Initializer);
 case ArrayCreationExpressionSyntax array when array.Initializer!=null:return Eval(array.Initializer);
 case InvocationExpressionSyntax call:{if(IsLocalCall(call))return CallLocal(call);var m=model.GetSymbolInfo(call).Symbol as IMethodSymbol;var args=call.ArgumentList.Arguments;
if(m?.ContainingType.SpecialType==SpecialType.System_Int32 && m.Name=="TryParse" && args.Count==2){
 var source=Eval(args[0].Expression);
 var destination=args[1].Expression;
 ISymbol? target=destination is DeclarationExpressionSyntax declaration?model.GetDeclaredSymbol(declaration.Designation):model.GetSymbolInfo(destination).Symbol;
 if(target is not ILocalSymbol local || local.Type.SpecialType!=SpecialType.System_Int32)throw new LessonError("TryParse için out int değişkeni kullan.");
 bool valid=int.TryParse(source.Text,NumberStyles.Integer,CultureInfo.InvariantCulture,out int number);
 var assigned=Controlled(source with {Data=number});
 variables[target]=assigned;RememberTypes(assigned,"int");Note(call,"Sayı kontrolü",valid?"Geçerli: "+number:"Geçersiz tam sayı");
 return Controlled(source with {Data=valid});
}
if(m?.ContainingType.ToDisplayString()=="System.Console"&&m.Name=="ReadLine"&&args.Count==0){if(InputIndex>=inputs.Length)throw new LessonError("Görevde belirtilenden fazla girdi okuyorsun.");int ix=InputIndex++;return new(inputs[ix],[ix],[]);}if(args.Count==1&&m!=null){var value=Eval(args[0].Expression);var owner=m.ContainingType.SpecialType;if(m.Name=="Parse"&&owner is SpecialType.System_Int32 or SpecialType.System_Double or SpecialType.System_Decimal)return Coerce(value,owner==SpecialType.System_Int32?"int":owner==SpecialType.System_Double?"double":"decimal");if(m.ContainingType.ToDisplayString()=="System.Convert"&&m.Name is "ToInt32" or "ToDouble" or "ToDecimal" or "ToString" or "ToBoolean")return Coerce(value,m.Name=="ToInt32"?"int":m.Name=="ToDouble"?"double":m.Name=="ToDecimal"?"decimal":m.Name=="ToBoolean"?"bool":"string");}throw new LessonError("Bu metot desteklenmiyor. Console.ReadLine ve temel Convert dönüşümlerini kullan.");}
 case InterpolatedStringExpressionSyntax str:{var parts=new List<Value>();foreach(var part in str.Contents){if(part is InterpolatedStringTextSyntax text)parts.Add(Value.Plain(text.TextToken.ValueText));else if(part is InterpolationSyntax x&&x.AlignmentClause==null&&x.FormatClause==null)parts.Add(Eval(x.Expression));else throw new LessonError("Özel metin biçimi desteklenmiyor.");}return new(string.Concat(parts.Select(p=>p.Text)),parts.SelectMany(p=>p.Deps).ToHashSet(),parts.SelectMany(p=>p.Ops).ToHashSet());}
 default:throw new LessonError("Bu ifade desteklenmiyor. Temel işlemleri ve derste anlatılan akış yapılarını kullan.");}}
 Value ArrayValue(Value[] values)=>new(values,values.SelectMany(v=>v.Deps).ToHashSet(),values.SelectMany(v=>v.Ops).ToHashSet());
 Value Binary(Value a,Value b,string op){object data;dynamic x=a.Data,y=b.Data;checked{data=op switch {"+"=>x+y,"-"=>x-y,"*"=>x*y,"/"=>x/y,"%"=>x%y,"=="=>x==y,"!="=>x!=y,">"=>x>y,"<"=>x<y,">="=>x>=y,"<="=>x<=y,"&&"=>(bool)x&&(bool)y,"||"=>(bool)x||(bool)y,_=>throw new LessonError("Bu işlem desteklenmiyor.")};}var ops=a.Ops.Union(b.Ops).ToHashSet();ops.Add(op);return new(data,a.Deps.Union(b.Deps).ToHashSet(),ops);}
}



