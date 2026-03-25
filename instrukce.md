**Situace**
Jsi zkušený webový vývojář a designér s expertízou v tvorbě moderních, responzivních webových stránek. Web je pro firmu PixelBeast ktora je softwarove studio zamerane na vyvoj ios aplikacii a webu včetne návrhu designu. Tvým úkolem je vytvořit kompletní malý web podle specifikací níže.

**Cíl**
Dodej uživateli kompletní, profesionální mobile-first webovou stránku, která je vizuálně atraktivní, funkční na všech zařízeních a připravená k okamžitému použití.

**Úkol**
Vytvoř funkční web, který bude obsahovat:
Strukturovaný komentovaný HTML5 kód s validní sémantikou
Responzivní design (mobile-first přístup)
CSS styly pro přizpůsobení všem obrazovkám (4K monitory, desktop, tablet, mobil)
Používej moderní CSS vlastnosti (CSS variables, transitions, animations)
CSS jednotky velikosti: pro běžný text použij rem, pro nadpisy použij clamp 
Základní JavaScript pro interaktivitu (na jemné oživení stránek)
Dbej na bezpečnost webu (nastavení bezpečnostní HTTP hlavičky, u kontaktního formuláře řeš ochranu proti spamu pomocí honeypot)
Nedávej do soubor .htaccess pokyny k přesměrování (to se řeší na úrovni hostingu)

**Znalosti**
Zajisti rychlé načítání a optimalizovaný výkon
Dodržuj best practices pro přístupnost (barevný kontrast, velikost písma, ARIA)
Vlož favicon ve formát svg (pokud ho nemáš dodaný, vytvoř ho)
Pokud je potřeba Cookie lišta, vytvoř ji v barvách webu


**Základní SEO**
Strukturuj nadpisy H1-H6
Přidej meta title a description na každé stránce
Vytvoř strukturovaná data – LocalBusiness, FAQ, Article (pokud je to relevantní)
Přidej do adresáře soubory sitemap.xml, robot.txt a llms.txt
Urči kanonickou url
Obrázkům dej alt popisky
Propoj stránky vnitřními odkazy
Vytvoř Open Graph meta tagy (náhled webu pro Facebook a další sociální sítě)


**Optimalizace obrázků**
Přidej lazy loading ke všem obrázkům, které nejsou vidět hned při načtení stránky (below the fold). Tj. u hero sekce lazy loading nedělej.
Obrázky ti dodám zkomprimované ve formátu jpg nebo png, ale kdyby se ti zdály velké, řekni si o formát avif.
**Vizuální hierarchie a čitelnost**
Jasná typografická hierarchie (nadpisy H1-H6, konzistentní velikosti)
Dostatečný kontrast mezi textem a pozadím (minimum 4.5:1 pro běžný text)
Čitelné fonty s českou diakritikou, minimální velikost 16px
Správné řádkování (line-height 1.5-1.8 pro odstavce)
Nikdy nezarovnávej text do bloku
Maximální šířka textu 70% obrazovky (nikdy nepiš od kraje po kraj)

**Layout**
Šířku celého webu dej na 85% obrazovky
Jasné oddělení sekcí a obsahových celků
Pokud mám v sekci 4 karty/boxy – dej je po dvou na řádek (ne 3+1)
Vyvážené použití bílého prostoru (white space)
Intuitivní navigace - logo vlevo, hamburger menu na mobilu pravo
Dej si záležet na patičce webu
U prvku accordion (př. pro otázky a odpovědi) dávej ikonu šipky dolů a nahoru a pokud je jich víc než 3, tak je rozděl do dvou sloupců
Jednopísmenové znaky (spojky, předložky) zalamuj na nový řádek
Jednotky (Kč, m, kg, Eur, atd.) spoj s číslem nedělitelnou mezerou
Datum piš ve formátu 1. 1. 2026 a mezery dej nedělitelné

**Obsah**
Stručné a srozumitelné texty
Výrazné nadpisy s klíčovými informacemi a CTA tlačítka
Vizuální prvky podporující obsah (ikony, obrázky, grafika)
Logické uspořádání informací (nejdůležitější nahoře)
Chybová stránka (místo „404“ dej ikonu <wa-icon name="face-frown" variant="regular"></wa-icon>) a přidej ji na web pomocí příkazu v souboru .htaccess: ErrorDocument 404 /404.html
Kontrola povinných údajů na webu: jméno, sídlo, IČ, zápis v rejstříku

**Konzistence**
Jednotný styl tlačítek, karet a komponent
Stejný padding/margin napříč podobnými elementy
Stejné zaoblení prvků
Konzistentní ikonografie (používej font awesome, ne emotikony)
Stíny karet pouze velmi jemné
Jednotný projev značky (brand voice)
Konzistentní použití barev napříč celým webem
Jednotný spacing a odsazení (používej jednotný systém, např. 8px grid)

**Barevná paleta**
Omezený počet barev (2-3 hlavní + neutrální)
Primární barva pro CTA (call-to-action) tlačítka
Neutrální jemné barvy pro pozadí 
Pro text #333333
Brand barvy (HEX): 
   - primární: #00e7a1
   - sekundární: #ffffff
   - tlačítka: #00e7a1
   - pozadí: #06213c
   - text: [#333333]

**Fonty**
Zvol vhodný patkový nebo bezpatkový font podle obsahu webu
Pokud není jasné, zvol moderní sans-serif font (př. Outfit)
Brandový font Poppins

**Struktura**
Jednostránkový web


**Další prvky na webu**

Vytvoř kontaktní formulář včetně antispamu (honeypot), doporuč mi službu https://formspree.io/ 

**Design**
Design hero sekce (celého webu) vytvoř podle vzoru, který ti dám před začátkem tvorby ve formátu jpg 
nebo
Vytvoř moderní mobile-first web: použít můžeš trendy jako velká typografie, micro-animace na hover a scroll efekty či 3D prvky.
**Moderní design**

Barvy: Jemné gradienty, plynulé přechody
Prvky: jemné stíny, 3D prvky

Animace: Mikro interakce na hover, jemné scroll animace 
**obrázky**
Na webu použij fotky (př. přílohy), které najdeš ve složce 
Obrazky/Hlavni – pro Hlavní stranu (hero sekce atd.)
Obrazky/Sluzby – pro Služby
Obrazky/Omne – pro stránku O mně a Patičku
Obrazky/Ikony – vlastní ikony pro web
Prilohy/Menu – polední menu v pdf

**texty**
Na webu použij tyto texty pro jednotlivé sekce.
Vyjdi z dodaných textů, ale když budeš potřebovat, můžeš je vylepšit, zachovej vždy smysl a podstatu obsahu stránky. 


*hero sekce*
Aplikace a weby, které drží tempo s dnešní dobou.
Rychlá realizace, moderní přístup a funkční výsledek.




Spojujeme design a vývoj pod jednou střechou.

design + vyvoj + strategie
10 let zkušeností s vývojem z komerčních projektů

přímá komunikace bez zbytečných mezičlánků
důraz na kvalitu, ne kvantitu

CO UMÍME
Navrhujeme a vyvíjíme digitální produkty podle moderních standardů – s důrazem na výkon, kvalitu a dlouhodobou udržitelnost.

VÝVOJ APLIKACÍ
Aplikace stavíme od základu – s důrazem na stabilitu, výkon a čisté řešení.
vývoj pro iOS (Swift) a tvOS
struktura a UX návrh
návrh architektury aplikací
clean code a škálovatelné řešení
optimalizace výkonu a plynulosti
integrace API a práce s daty
testování a ladění aplikací
publikace a správa v App Store
dlouhodobý rozvoj a údržba

Aplikace navrhujeme tak, aby obstály nejen dnes, ale i při dalším rozvoji.

WEBY
Weby tvoříme na míru – rychlé, přehledné a technicky čisté.
vývoj webů v HTML, CSS a JavaScriptu
moderní přístup
důraz na rychlost načítání a výkon
responzivní design (mobil, tablet, desktop)
SEO optimalizace a technické nastavení
nastavení vyhledatelnosti (Google, Seznam)
struktura a UX návrh
čistý kód


Proč si nás vybrat?
Každý web stavíme s důrazem na rychlost, přehlednost a reálné výsledky.
Pracujeme s péčí, kterou si zaslouží každý projekt.
Nevíte, kde začít?
Navrhneme řešení, které bude dávat smysl – technicky i obchodně.
*CTA:* Probrat projekt

Kontakt
mail: ahoj@pixelbeast.cz
telefon 775203143
adresa Nové sady 988/2
602 00 Brno
Jihomoravský kraj
firma:PixelBeast s.r.o., Brno, 
IČO: 24408573