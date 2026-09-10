# Artikler – slik legger du til en ny artikkel

Hver artikkel er **én markdown-fil** i denne mappen. Filen er eneste kilde til
sannhet: den driver artikkelsiden, kortene på `/artikler`, sorteringen og all
SEO-/Open Graph-metadata.

**Ingen applikasjonskode skal endres når du legger til en artikkel.** Ingen
registre, ingen arrays, ingen imports, ingen ruter, ingen sitemap.

---

## 1. Hvor filene ligger

| Innhold | Plassering | Eksempel |
| --- | --- | --- |
| Artikkeltekst | `src/content/articles/<slug>.md` | `src/content/articles/ferieklar.md` |
| Artikkelbilde | `public/images/articles/<filnavn>` | `public/images/articles/feriebil.jpg` |

Denne filen (`src/content/README.md`) er dokumentasjon og ligger med vilje
utenfor `articles/`, slik at den aldri leses som en artikkel.

Filnavnet bør være det samme som `slug`. Feltet `slug` i frontmatter er det som
faktisk bestemmer URL-en; mangler det, brukes filnavnet.

Nettadressen blir alltid:

```
slug: "ferieklar"   ->   https://vangauto.no/blog/ferieklar
```

Endrer du `slug` på en publisert artikkel, endrer du en offentlig URL og bryter
eksisterende lenker fra Facebook og Google. Ikke gjør det uten grunn.

---

## 2. Formatet

```markdown
---
title: "Ferieklar bil?"
slug: "ferieklar"
date: "2023-06-06"
excerpt: "Kort ingress som vises på det store kortet på /artikler."
image: "/images/articles/feriebil.jpg"
imageAlt: "Bil klar for sommerferie"
seoTitle: "Ferieklar Bil – Bilservice & Sjekk nær Hamar | Vang Auto"
seoDescription: "Meta-beskrivelse for Google, ca. 150–160 tegn."
keywords:
  - "ferieklar bil Hamar"
  - "service bil Hamar"
---

**Første avsnitt står i fet skrift og fungerer som ingress.**

Vanlig brødtekst.

## En mellomtittel

Mer brødtekst, med **fet tekst**, *kursiv* og [lenker](/tjenester).

- punkt i liste
- nok et punkt
```

### Påkrevde felt

| Felt | Beskrivelse |
| --- | --- |
| `title` | Artikkelens overskrift. Brukes som H1 på artikkelsiden og som tittel på kort/liste. |
| `date` | Publiseringsdato, **alltid** `YYYY-MM-DD` i anførselstegn. Styrer sortering. |
| `image` | Prosjektrelativ sti til bildet, alltid `/images/articles/...`. |

Bygget stopper med en tydelig feilmelding hvis `title`, `date` eller `slug`
mangler eller er ugyldig, slik at en ødelagt artikkel aldri havner på nett.

### Valgfrie felt

| Felt | Standardverdi hvis utelatt |
| --- | --- |
| `slug` | Filnavnet uten `.md`. Kun små bokstaver, tall og bindestrek. |
| `excerpt` | Første avsnitt i brødteksten, uten markdown-tegn. |
| `imageAlt` | `title`. Skriv en beskrivende alt-tekst når du kan. |
| `seoTitle` | `title`. |
| `seoDescription` | `excerpt`. |
| `ogTitle` | `seoTitle`. Bruk bare hvis Facebook-tittelen skal avvike. |
| `ogDescription` | `seoDescription`. Ofte en kortere variant. |
| `keywords` | Tom liste. YAML-liste eller kommaseparert streng. |
| `draft` | `false`. Sett `draft: true` for å holde artikkelen borte fra nettstedet. |

---

## 3. Datoformat og rekkefølge

* Datoer lagres **kun** maskinlesbart: `date: "2024-10-28"`.
* Den norske visningsformen (`28. Oktober 2024`) genereres av nettsiden
  (`src/lib/dates.js`). Ikke skriv den i markdown.
* Sorteringen er **helt automatisk**: alle artikler sorteres på dato, nyeste
  først (lik dato brytes alfabetisk på slug).
* **De to nyeste artiklene blir automatisk de store kortene** øverst på
  `/artikler`. Featured-artikler velges aldri manuelt.
* Alle øvrige artikler havner i listen «Flere artikler», også nyeste først.
  De ti første vises med én gang; finnes det flere, dukker knappen «Vis flere»
  opp.

---

## 4. Bilder og deling på Facebook

Markdown lagrer **kun** den prosjektrelative stien:

```yaml
image: "/images/articles/feriebil.jpg"
```

Nettsiden bruker den stien direkte i `next/image`. Til Open Graph og Twitter
gjøres den om til en absolutt URL av `absoluteUrl()` i `src/lib/site.js`:

```
/images/articles/feriebil.jpg
        ->  https://vangauto.no/images/articles/feriebil.jpg
```

Basis-URL-en kommer fra miljøvariabelen `NEXT_PUBLIC_SITE_URL` med
`https://vangauto.no` som standard for produksjon. Du skal altså **aldri** lagre
to varianter av bildestien i en artikkel.

Bildet må ligge i `public/images/articles/` og være committet i samme endring som
markdown-filen. Bredde/høyde leses automatisk fra bildefilen under bygg.

---

## 5. Hva markdown støtter

Avsnitt, mellomtitler (`##`), fet (`**`), kursiv (`*`), lister, sitater,
tabeller, horisontale streker og lenker. Interne lenker skrives relativt:
`[klikk her](/miljo)`.

Rå HTML i markdown blir fjernet av sikkerhetsgrunner – bruk markdown.

---

## 6. Sjekkliste for en ny artikkel

1. Legg bildet i `public/images/articles/`.
2. Opprett `src/content/articles/<slug>.md` med frontmatter over.
3. Commit begge filene.
4. Deploy.

Artikkelen dukker da opp på `/blog/<slug>`, legger seg riktig i rekkefølgen på
`/artikler`, og deles korrekt på Facebook. Ingenting annet må endres.
