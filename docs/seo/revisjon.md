# SEO-revisjon av vangauto.no

Utført 27. september 2026 på `main` (commit `9a1a3ae`), før branchen `seo-pass`.
Målinger av live-sidene er gjort med `curl` mot https://vangauto.no.

## 1. Sider og ruter

Ordantall er omtrentlig og målt på live-HTML, inkludert meny og bunntekst (ca. 40 ord).

| Rute | Title (tegn) | Meta description (tegn) | H1 | Ord | Merknad |
| --- | --- | --- | --- | --- | --- |
| `/` | «Bilverksted Hamar \| EU-kontroll & Dekkskifte \| Vang Auto» (56) | 173 | «Vang Auto bilverksted» | ~95 | Svært lite tekst. `og:image` peker til `/images/articles/mechanic-animated.png`, som ikke finnes. |
| `/tjenester` | «EU-kontroll, Service & Dekkskifte Hamar \| Vang Auto Verksted» (60) | 155 | «Tjenester» | ~520 | Prisformuleringer: «prisen kan være litt hyggeligere», «gode priser». |
| `/omoss` | «Om Oss \| Bilverksted med 60+ års erfaring nær Hamar \| Vang Auto» (63, for lang) | 197 | «Om Vang Auto» | ~380 | |
| `/kontaktoss` | «Kontakt Oss \| Vang Auto Bilverksted – Hamar, Løten, Elverum» (59) | 168 | «Kontakt Oss» | ~85 | Ingen kart. Alle ikoner har alt-tekst «phone». |
| `/artikler` | «Artikler om Bil & Verksted \| Vang Auto Hamar» (44) | 155 | «Artikler» | ~230 | Bruker navneformen «Vang Auto Hamar». |
| `/bestilltime` | «Bestill Time – Bilverksted Hamar \| Vang Auto» (44) | 178 | «Bestill Time» | ~75 | «enkelt og raskt» er et løfte om tempo. |
| `/miljo` | «Miljøvennlig Bilverksted Hamar \| Miljøfyrtårn \| Vang Auto» (57) | 159 | «Miljøarbeid og bærekraft» | ~240 | Lenkes bare fra bunnteksten. |
| `/cookies` | «Vang Auto \| Cookies» | – | «Cookie Policy for Vang Auto» | ~530 | `noindex`. Teksten er på engelsk. |
| `/bestilt`, `/bestiltenv` | kvitteringssider | – | – | – | `noindex`, riktig. |
| `/blog/<slug>` (9 stk.) | `seoTitle` (45–59) | `seoDescription` (161–189) | artikkeltittel | 300–600 | Se avsnitt 3. |

Ingen side har egen 404-side. Next.js sin engelske standardside brukes.

## 2. Hvordan `<Head>` og `src/lib/site.js` brukes

- Hver side har sin egen `<Head>` med `title`, `description`, `keywords`, `og:title`,
  `og:description`, `og:type`, `geo.region` og `geo.placename`, limt inn for hånd.
  Den samme blokken finnes sju ganger med små variasjoner. Det er dupliseringen.
- `absoluteUrl()` fra `src/lib/site.js` brukes bare i `src/pages/blog/[slug].js`.
- Bare artikkelsidene har `canonical`, `og:url`, `og:image:alt` og Twitter-tagger.
- Ingen side har `og:locale` eller `og:site_name`.
- `_document.js` har `lang="no"`, ikke `nb-NO`.
- `<main>` ligger inne i `<main>`: `_app.js` pakker hver side i `<main>`, og hver side har sin egen.

## 3. Titler, descriptions og H1

- **Meta keywords** finnes på 7 sider og på alle artikler. Google ignorerer taggen. Den fjernes.
  Frontmatter-feltet `keywords` beholdes, fordi det brukes til interne lenker.
- **For lange descriptions:** forsiden (173), `/omoss` (197), `/kontaktoss` (168), `/bestilltime` (178)
  og alle 9 artikler (161–189).
- **Title over 60 tegn:** `/omoss` (63).
- **Forbudte formuleringer i artikkel-frontmatter:**
  - `klima`: «til gode priser»
  - `dekkhotell`: «med gode priser på nye dekk»
  - `ferieklar`: «verkstedet fyller seg fort»
- **H1** finnes én gang per side, men er et enkelt ord («Tjenester», «Artikler», «Kontakt Oss»).
  Forsidens H1 «Vang Auto bilverksted» sier ikke hvor verkstedet ligger.
- **Kannibalisering:** `/blog/service` har seoTitle «Service på Bil – Alle Merker & Elbil nær Hamar».
  Den konkurrerer med en tjenesteside for bilservice. Se `seo-kontrakt.md`.

## 4. Canonical, robots og domene

- Det finnes ingen `netlify.toml`. Domeneoppsettet ligger i Netlify-UI.
- Live-sjekk:
  - `https://www.vangauto.no/` → **301** til `https://vangauto.no/`
  - `http://vangauto.no/` → **301** til `https://vangauto.no/`
  - `https://vangauto.no/tjenester/` → **308** til `/tjenester`
- Apex uten avsluttende skråstrek er altså den kanoniske formen. Canonical-taggene skal følge den.
- Canonical mangler på alle sider utenom artikler.
- `robots`-meta finnes bare som `noindex` på `/cookies`, `/bestilt` og `/bestiltenv`.

## 5. Sitemap og robots.txt

- `https://vangauto.no/sitemap.xml` → **404**
- `https://vangauto.no/robots.txt` → **404**

Ingen av dem finnes, og artiklene er derfor ikke meldt inn noe sted.

## 6. Strukturerte data

Ingen JSON-LD på noen side. Det finnes ingen `LocalBusiness`/`AutoRepair`, `WebSite`,
`BlogPosting` eller `BreadcrumbList`.

## 7. Bilder

- `next/image` brukes overalt. Statiske importer gir bredde og høyde automatisk, og
  artikkelbilder måles med `sharp` under bygg. Det er derfor ingen layout shift fra bilder.
- **Svake alt-tekster:** «VangAuto» og «Vang Auto» (forsiden, om oss), «logo»,
  «phone» (alle kontaktikoner og Miljøfyrtårn-merket i bunnteksten). Tjenestebildene bruker bare tittelen.
- **`priority`** står på Miljøfyrtårn-bildet i bunnteksten (alle sider), på alle 4 kontaktikoner
  og på alle tjenestekort. Det gjør at bilder under folden forhåndslastes.
- **Store originaler:** `projects/EUanimated.jpg` 9375×4860, `projects/service.jpg` 5,1 MB,
  `projects/olje.jpg` 6000 px, `profile/omoss.jpg` 2,3 MB. Netlify Image CDN skalerer dem, så
  brukeren laster ikke originalen. Repoet blir likevel tungt.
- Artikkelbildet `dekkhotell.jpg` brukes av to artikler (`dekkhotell` og `sommerdekk`).

## 8. Interne lenker

- Forsiden lenker bare til `/bestilltime` (i tillegg til meny).
- `/tjenester` lenker bare til `/bestilltime` og til Statens vegvesen.
- `/miljo` lenkes bare fra bunnteksten.
- Artikler lenker ikke til tjenester, og tjenester lenker ikke til artikler.
- `/artikler` er eneste vei inn til artiklene.
- Mobilmenyen bruker `<button>` med `router.push`, ikke lenker. Desktop-menyen har ekte lenker
  og er alltid i HTML-en, så crawlere finner sidene.

## 9. Ytelse

- **Font:** Montserrat via `next/font/google` blir selvhostet med `font-display: swap`. Ok.
- **H1-animasjon:** `AnimatedText` server-rendrer hvert ord i H1 med `opacity:0`. Teksten er
  usynlig til JavaScript har lastet. H1 er ofte LCP-elementet på tekstsider.
- **JavaScript:** Framer Motion lastes på alle sider. Det er akseptabelt for denne siden.
  Å fjerne det ville vært en redesign.
- **Analyse:** To Google-tagger lastes `afterInteractive`. Ok.

## 10. Konkrete feil

1. `href={`tel:${+4762595733}`}` blir `tel:4762595733`. Unær `+` gjør tallet om til et
   tall og fjerner plusstegnet. Gjelder forsiden, menyen og kontaktsiden.
2. Telefonnummeret vises som «+47 625 95 733». Riktig visning er «62 59 57 33».
3. Bunnteksten viser «© 2023».
4. Forsiden har rundt 55 ord eget innhold.
5. Meta keywords-taggen finnes (se punkt 3).
6. `og:image` på forsiden er en død lenke.

## 11. Utenfor oppdraget, men notert

- Cookie-banneret og `/cookies` er på engelsk.
- Kontaktskjemaet viser `alert()` ved feil.

## 12. Verifisering av refaktoreringen

Fylles ut etter at `markdownToHtml` og `getImageDimensions` er flyttet ut av
`src/lib/articles.js`. Se avsnittet «Resultat» nederst.
