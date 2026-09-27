# Søkeordskart for vangauto.no

Én primær søkefrase per side. Ingen side skal konkurrere med en annen side om samme primærfrase.
Artikler bruker lengre, sesongbaserte varianter (se `seo-kontrakt.md`, avsnitt 6).

En søkefrase er et stikkord, ikke et norsk uttrykk. I teksten skrives den som naturlig norsk:
«bilverkstedet vårt like utenfor Hamar», ikke «bilverksted Hamar».

Title og description for tjenestesidene står i frontmatter i `src/content/tjenester/<slug>.md`.
For de faste sidene står de i sidefilen i `src/pages/`. Tabellen under er en kopi til oversikt.
Endrer du én av dem, oppdater tabellen.

| Side | Primær søkefrase | Sekundære fraser | Title | Description |
| --- | --- | --- | --- | --- |
| `/` | bilverksted Hamar | reparasjon bil Hamar, verksted Løten, bilservice Elverum, MECA Hamar | Bilverksted like utenfor Hamar \| Vang Auto | Vang Auto er et MECA-verksted like utenfor Hamar. Vi tar service, reparasjon, EU-kontroll og dekkskift på bil, varebil og bobil. Over 60 år i bransjen. |
| `/tjenester` | verksted Hamar | alle tjenestenavnene | Verkstedtjenester i Hamar \| Vang Auto | Se alle tjenestene hos Vang Auto: EU-kontroll, service og reparasjon, AC-service, firehjulskontroll, dekkskift, karosseri og verksted for varebil og bobil. |
| `/tjenester/eu-kontroll` | EU-kontroll Hamar | EU-kontroll varebil, EU-kontroll bobil, kontrollfrist | EU-kontroll i Hamar \| Vang Auto | EU-kontroll av personbil, varebil, bobil og lett lastebil like utenfor Hamar. Hos Vang Auto får du beskjed om feil og kan få dem rettet på samme verksted. |
| `/tjenester/service-og-reparasjon` | bilservice Hamar | reparasjon bil Hamar, oljeskift, service nybilgaranti, fritt verkstedvalg, elbil verksted Hamar | Bilservice og reparasjon i Hamar \| Vang Auto | Service og reparasjon på alle bilmerker, også elbil og hybrid. Vang Auto følger produsentens krav, så nybilgarantien gjelder som før. Like utenfor Hamar. |
| `/tjenester/ac-service` | AC-service Hamar | klimaanlegg bil, pollenfilter | AC-service i Hamar \| Vang Auto | AC-service og kontroll av klimaanlegget i bilen. Vang Auto sjekker anlegget, fyller kuldemedium og skifter pollenfilter, like utenfor Hamar. |
| `/tjenester/firehjulskontroll` | firehjulskontroll Hamar | hjulstilling, skjev dekkslitasje | Firehjulskontroll i Hamar \| Vang Auto | Firehjulskontroll med 3D hjulinnstillingsapparat. Riktig hjulstilling gir jevnere dekkslitasje og bilen går rett. Vang Auto ligger like utenfor Hamar. |
| `/tjenester/dekkskift-og-dekkhotell` | dekkskift Hamar | dekkhotell Hamar, dekkskifte, Dekkpartner, felger | Dekkskift og dekkhotell i Hamar \| Vang Auto | Dekkskift og dekkhotell like utenfor Hamar. Vang Auto vasker og sjekker dekkene og lagrer dem til neste sesong. Nye dekk og felger via Dekkpartner. |
| `/tjenester/varebil-bobil-og-lastebil` | lastebilverksted Hamar | varebil verksted, bobilverksted Hamar, Iveco verksted, flåteverksted | Verksted for varebil, bobil og lastebil i Hamar \| Vang Auto | Service, reparasjon og EU-kontroll på varebil, bobil og lett lastebil inntil 7,5 tonn. Vang Auto er Iveco-serviceforhandler og flåteverksted ved Hamar. |
| `/tjenester/karosseri-og-frontrute` | karosseriverksted Hamar | steinsprut Hamar, rustreparasjon Hamar, bytte frontrute | Karosseri og frontrute i Hamar \| Vang Auto | Vang Auto retter bulker, reparerer rustskader og fikser steinsprut i frontruten. Egen karosseriavdeling like utenfor Hamar, også for bytte av hel frontrute. |
| `/omoss` | MECA Hamar | Iveco-serviceforhandler, Dekkpartner, Miljøfyrtårn | Om oss – MECA-verksted ved Hamar \| Vang Auto | Vang Auto har over 60 år i bransjen. Vi er MECA-verksted, Iveco-serviceforhandler, Dekkpartner og Miljøfyrtårn, like utenfor Hamar. |
| `/kontaktoss` | Vang Auto (merkevare) | verksted Løten, bilservice Elverum, åpningstider | Kontakt og åpningstider \| Vang Auto | Kontakt Vang Auto i Vindholvegen 1, 2324 Vang På Hedmark. Ring 62 59 57 33 eller send e-post. Åpent mandag til fredag 07.00–16.00, like utenfor Hamar. |
| `/bestilltime` | bestill time verksted | – | Bestill time på verkstedet \| Vang Auto | Bestill time hos Vang Auto for EU-kontroll, service, reparasjon eller dekkskift. Fyll ut skjemaet, så tar vi kontakt for å avtale et tidspunkt som passer. |
| `/artikler` | – (samleside) | – | Artikler om bil og verksted \| Vang Auto | Artikler fra Vang Auto om dekk, EU-kontroll, service og vedlikehold av bil. Praktiske råd fra et bilverksted like utenfor Hamar med over 60 år i bransjen. |
| `/miljo` | Miljøfyrtårn verksted | miljøsertifisert bilverksted | Miljøfyrtårn-sertifisert verksted \| Vang Auto | Vang Auto er sertifisert som Miljøfyrtårn. Les om miljøarbeidet på verkstedet, rapportene fra 2023 til 2025 og hvordan du kan komme med innspill. |
| `/blog/<slug>` | fra artikkelens `seoTitle` | fra `keywords` | `seoTitle` | `seoDescription` |

## Kjent overlapp som må løses i innholdskalenderen

- `/blog/service` hadde seoTitle «Service på Bil – Alle Merker & Elbil nær Hamar».
  Den er endret til en artikkelvinkel. Se `seo-kontrakt.md`, avsnitt 6.
- Innholdskalenderen i n8n bruker «bilservice Hamar» som primærfrase i flere måneder.
  Det er samme frase som `/tjenester/service-og-reparasjon` eier. Det løses i regnearket, ikke i repoet.
