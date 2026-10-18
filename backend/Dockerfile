# ------------------------------------------------------------------
#  Dedektif Nokta - C# kod dogrulama sunucusu (Roslyn)
#
#  Netlify'daki statik oyunun /api/check ve /api/health cagrilarini
#  karsilar.
#
#  ONEMLI: Imaj LINUX uzerinde DERLENIR (asamali build).
#  Depoya onceden derlenmis DLL koymayin: .NET SDK'nin Roslyn
#  dosyalari isletim sistemine ozeldir. Windows'ta derlenmis
#  Microsoft.CodeAnalysis*.dll Linux konteynerinde yuklenemez ve
#  sunucu BadImageFormatException ile coker (Render: exit 139).
#  Bu yuzden derleme, calisma ortamiyle AYNI platformda yapilir.
# ------------------------------------------------------------------

# ------------------- 1. Asama: derleme -------------------
# Linux icin dogru Roslyn dosyalarini uretir.
FROM mcr.microsoft.com/dotnet/sdk:10.0 AS build
WORKDIR /src
COPY source/ ./
RUN dotnet publish Dedektif.csproj -c Release -o /app/publish \
    -p:UseAppHost=false --nologo

# ------------------- 2. Asama: calisma ------------------
FROM mcr.microsoft.com/dotnet/aspnet:10.0
WORKDIR /app

# Derlenmis sunucu + Linux icin Roslyn bagimliliklari:
#   Dedektif.dll, Dedektif.deps.json, Dedektif.runtimeconfig.json,
#   Microsoft.CodeAnalysis.dll, Microsoft.CodeAnalysis.CSharp.dll
#   ve 13 dil klasoru
COPY --from=build /app/publish ./

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
