# ------------------------------------------------------------------
#  Dedektif Nokta - C# kod dogrulama sunucusu (Roslyn)
#
#  Netlify'daki statik oyunun /api/check ve /api/health
#  cagrilarini karsilar.
#
#  Yerel test (bu klasorun kardesi olan server\ icinde):
#    dotnet Dedektif.dll --urls http://127.0.0.1:8090
#  Test sonucu: 318/318 gecti.
# ------------------------------------------------------------------
FROM mcr.microsoft.com/dotnet/aspnet:10.0

WORKDIR /app

# Derlenmis sunucu + Roslyn (dotnet publish ciktisi):
#   Dedektif.dll, Dedektif.deps.json, Dedektif.runtimeconfig.json,
#   Microsoft.CodeAnalysis.dll, Microsoft.CodeAnalysis.CSharp.dll
#   ve 13 dil klasoru
COPY server/ ./

# Program.cs UseStaticFiles() cagiriyor; bos bir wwwroot uyari olusmasini onler
RUN mkdir -p /app/wwwroot

ENV ASPNETCORE_ENVIRONMENT=Production \
    ASPNETCORE_FORWARDEDHEADERS_ENABLED=true \
    DOTNET_CLI_TELEMETRY_OPTOUT=1 \
    DOTNET_NOLOGO=1 \
    PORT=10000

EXPOSE 10000

# Render PORT degiskenini verir (varsayilani 10000, yukarida tanimli).
# --urls komut satiri argumani Program.cs satir 9'daki
# "http://127.0.0.1:5178" varsayilanini gecersiz kilar.
ENTRYPOINT ["sh","-c","exec dotnet Dedektif.dll --urls http://0.0.0.0:${PORT}"]
