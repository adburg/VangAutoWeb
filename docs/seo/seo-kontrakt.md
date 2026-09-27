# SEO-kontrakt for vangauto.no

Denne filen beskriver hva alle framtidige endringer må bevare. Den gjelder for mennesker og
for AI-agenter som endrer koden eller skriver tekst til nettstedet.
Les også `CLAUDE.md` og `src/content/README.md`.

Sist oppdatert: 27. september 2026.

---

## 1. Artikkelkontrakten (n8n)

Artikler kommer automatisk fra en n8n-arbeidsflyt. Den committer nøyaktig to filer:

```
src/content/articles/<slug>.md
public/images/articles/<slug>.<ext>
```

Dette skal alltid være nok. Å legge til en artikkel skal aldri kreve kodeendringer.

**Må ikke endres:**

- Feltnavnene i frontmatter: `title`, `slug`, `date`, `excerpt`, `image`, `imageAlt`,
  `seoTitle`, `seoDescription`, `keywords`, `draft`. (`ogTitle` og `ogDescription` leses også,
  men n8n produserer dem ikke. Ikke gjør dem påkrevd.)
- Oppdagelse og sortering i `src/lib/articles.js` (dato synkende, lik dato brytes på slug).
- Rutene `/blog/[slug]` og `/artikler`.
- Eksisterende slugs. Ingen redirects på gamle artikler.
- Byggefeil ved ugyldig artikkel: manglende `title`, ugyldig `date`, ugyldig eller duplisert
  `slug` skal fortsatt stoppe bygget.

**Toleranse for n8n-data:**

- n8n validerer `seoDescription` til 100–175 tegn. Nettstedet skal tåle hele dette spennet:
  ingen byggefeil, ingen advarsel og ingen automatisk kutting.
- 120–160 tegn gjelder bare sidene vi skriver selv (forside, tjenester, om oss, kontakt, miljø).
- Alle valgfrie felt kan mangle. SEO-koden faller tilbake til `title`/`excerpt`.
- `draft: true` holder artikkelen borte fra sidene og fra `sitemap.xml`.

**Hva som skjer automatisk med en ny artikkel:**

- Den får egen side på `/blog/<slug>` med canonical, Open Graph, `BlogPosting` og brødsmuler.
- Den havner på `/artikler`, blant «Siste artikler» på forsiden og i `sitemap.xml`.
- Den vises under «Les også» på tjenestesider der `articleTerms` treffer tittel, `keywords` eller
  `excerpt`. Artikkelsiden viser tilsvarende «Aktuelle tjenester».

---

## 2. NAP – navn, adresse, telefon

Strengene står **ett sted**: `src/lib/business.js`. Bunntekst, kontaktside, forside og JSON-LD
leser derfra. Skriv dem aldri inn på nytt i en komponent.

| Felt | Verdi |
| --- | --- |
| Juridisk navn | Vang Auto AS |
| Navn i løpende tekst | Vang Auto |
| Adresse | Vindholvegen 1, 2324 Vang På Hedmark |
| Telefon (visning) | 62 59 57 33 |
| Telefon (lenke) | `tel:+4762595733` |
| E-post | post@vangauto.no |
| Åpningstid | man–fre 07.00–16.00, lør og søn stengt |
| Bestilling | https://vangauto.no/bestilltime |
| Koordinater | 60.8268862, 11.2526382 |

Navnet er **aldri** «Vang Auto Hamar».

Geografi: Hamar er hovedmålet, Løten og Elverum er sekundære. Vang på Hedmarken er bare adressen.
Standardformulering: «like utenfor Hamar, med kort vei fra Løten og Elverum».

---

## 3. Title og description

- **Title-mønster for tjenestesider:** «Tjeneste i Hamar | Vang Auto». Maks 60 tegn.
- **Andre sider:** kort beskrivelse + « | Vang Auto». `buildTitle()` i `src/lib/seo.js` legger
  til suffikset hvis det mangler.
- **Description:** 120–160 tegn på egne sider. Artikler: se avsnitt 1.
- **H1:** én per side, skrevet som en naturlig setning eller frase, ikke som en søkefrase.
- **Meta keywords** brukes ikke. Ikke legg taggen tilbake.
- **Canonical:** absolutt URL uten avsluttende skråstrek (`https://vangauto.no/tjenester`).
  Forsiden er `https://vangauto.no`. Netlify sender `www` og `http` videre til denne formen.

---

## 4. Navneformer og tone

Bruk én av tre former om bedriften, og varier mellom dem:

- «Hos Vang Auto …»
- «Vi i Vang Auto …»
- «Vang Auto …»

Aldri «Hos oss i Vang Auto» eller «Vi hos Vang Auto».

Tone: norsk bokmål, rolig, konkret og lite selgende. Korte setninger, 15–20 ord, ingen over 30.
Vær konkret («viskerbladene», «lyktene»), ikke vag.

Søkefraser er stikkord, ikke norske uttrykk. Skriv «bilverkstedet vårt like utenfor Hamar»,
ikke «bilverksted Hamar» midt i en setning. Bruk både «dekkskift» og «dekkskifte».
Nevn Hamar et par ganger per side, Løten og Elverum høyst én gang hver. Ingen søkeordstapling.

---

## 5. Forbud

Gjelder all tekst på nettstedet, også frontmatter og alt-tekster.

- Ingen priser, tilbud, kampanjer eller rabatter.
- Ingen løfter om ventetid, kapasitet eller hvor fort noe går.
- Ingen garantier utover at nybilgarantien beholdes.
- Ingen oppdiktede ansatte, kundehistorier, tall eller bedriftshistorie.
- Lovkrav, frister og mønsterdybder bare med kilde fra Statens vegvesen. Kildene som er brukt:
  - https://www.vegvesen.no/kjoretoy/eie-og-vedlikeholde/eu-kontroll/nar-kan-du-ta-eu-kontroll/
  - https://www.vegvesen.no/kjoretoy/eie-og-vedlikeholde/eu-kontroll/hva-sjekkes/
  - https://www.vegvesen.no/kjoretoy/eie-og-vedlikeholde/dekk-og-kjetting/
- Ikke skriv «Iveco siden 2013».
- Ikke skriv noe om EU-kontroll eller verkstedarbeid på kjøretøy over 7,5 tonn.
- Mangler et faktum: spør. Ikke gjett.

**Verdiargumenter som kan brukes:**

- **Fritt verkstedvalg:** nybilgarantien gjelder som før når arbeidet utføres og dokumenteres etter
  produsentens krav.
- **MECA:** offentlig godkjent verksted, deler av original kvalitet, dokumentert arbeid, 12 måneders
  MECA Veihjelp inkludert ved service, uten egenandel.
- **Dekkpartner:** bredt utvalg dekk og felger. Kan bestilles på dekkpartner.no og monteres hos Vang Auto.

---

## 6. Arbeidsdeling mellom tjenestesider og artikler

Tjenestesidene eier de korte hovedfrasene. Én frase per side:

| Tjenesteside | Eier frasen |
| --- | --- |
| `/` | bilverksted Hamar |
| `/tjenester` | verksted Hamar |
| `/tjenester/eu-kontroll` | EU-kontroll Hamar |
| `/tjenester/service-og-reparasjon` | bilservice Hamar |
| `/tjenester/ac-service` | AC-service Hamar |
| `/tjenester/firehjulskontroll` | firehjulskontroll Hamar |
| `/tjenester/dekkskift-og-dekkhotell` | dekkskift Hamar |
| `/tjenester/varebil-bobil-og-lastebil` | lastebilverksted Hamar |
| `/tjenester/karosseri-og-frontrute` | karosseriverksted Hamar |

**Regel:** Artikler bruker ikke disse hovedfrasene som primærfrase. De bruker lengre, sesongbaserte
varianter, for eksempel «når bør du bytte til vinterdekk», «EU-kontroll av bobil før sommeren» eller
«service på elbil før vinteren». Artikkelen lenker gjerne til tjenestesiden som eier hovedfrasen.

**Merk:** Dette må speiles i fanen «Sesongskalender» i regnearket «Vang Auto content calendar».
Kalenderen bruker i dag «bilservice Hamar» som primærfrase i flere måneder. Det er samme frase som
`/tjenester/service-og-reparasjon` eier, og det må rettes i regnearket.

---

## 7. FAQ og strukturert data

- Spørsmål og svar på tjenestesidene er **synlig tekst**. Det legges ikke til `FAQPage`-schema.
  Google fjernet FAQ-rike resultater 7. mai 2026.
- All JSON-LD bygges i `src/lib/schema.js` og skal alltid stemme med synlig innhold.
- Ingen priser i schema. Ingen `aggregateRating` (nettstedet har ikke egne anmeldelser).
- `sameAs` og `geo` hentes fra `src/lib/business.js`.

---

## 8. Teknisk

- Alle sider bruker `<Seo>` fra `src/components/Seo.js`. Ingen side skal ha egen `<Head>` med
  title/description/og-tagger.
- `sitemap.xml` og `robots.txt` genereres av `scripts/generate-seo-files.mjs` (`postbuild`) inn i
  `public/`. Filene er gitignored. Artikler og tjenester hentes fra `getAllArticles()` og
  `getAllServices()`. Netlify må bygge med `npm run build`, ellers kjøres ikke `postbuild`.
- Filene i `src/lib/` som skriptet laster, må importere hverandre **med** `.js`-endelse
  (`./markdown.js`), fordi skriptet kjører dem som ren Node ESM.
- **Ny tjenesteside:** legg en `.md`-fil i `src/content/tjenester/` med feltene som er beskrevet i
  `src/lib/services.js`. Siden, hub-kortet, forsidegriddet og sitemap kommer automatisk.

---

## 9. Må verifiseres

- **Tall og historie på `/omoss` og i Historie-komponenten** (11 medarbeidere, 10+ sertifiserte
  mekanikere, 100k+ reparerte kjøretøy, «Starter med Iveco 2013», «ett av totalt 21 autoriserte
  serviceverksteder», tidslinjen fra 1960). Eier har sagt at eksisterende tekst regnes som fakta og
  ikke skal røres. Tallene gjenbrukes likevel ikke i ny tekst før daglig leder har bekreftet dem.
  Oppdraget sier at «Iveco siden 2013» ikke er bekreftet, mens tidslinjen viser 2013. Det må avklares.
