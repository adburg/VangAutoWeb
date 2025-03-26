import Head from "next/head";
import Image from "next/image";
import React from "react";
import image from "../../../public/images/articles/dekkhotell.jpg";
import { motion } from "framer-motion";
import Layout from "../../components/Layout";
import AnimatedText from "../../components/AnimatedText";

const FramerImage = motion(Image);

const dekkhotell = () => {
  return (
    <>
      <Head>
        <title>Vang Auto | Blogg - Dekkhotell</title>
        <meta
          name="description"
          content="Vang Auto Blogg. Les våre artikler for nyttig informasjon om bilen din, og bestill en time direkte i nettsiden eller ring oss."
        />
        <meta
          property="og:image"
          content="https://vangauto.no/images/articles/dekkhotell.jpg"        
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </Head>

      <main className="flex w-full flex-col mb-16 items-center justify-center dark:text-light">
        <Layout className="pt-12 mt-8 flex items-center justify-center !p-4 !md:p-12 !lg:p-32 ">
          <div className="flex w-2/3 md:w-full flex-col mb-16 items-center ">
            <AnimatedText
              text="Dekkhotell - bildekk på spa
              "
              className="mb-6 !text-3xl !normal-case"
            />
            <div className="items-center border border-solid rounded-br-3xl rounded-3xl border-dark bg-light p-12 md:p-4 dark:border-white dark:bg-dark">
              <div className="w-full flex justify-center overflow-hidden rounded-lg ">
                <FramerImage
                  src={image}
                  alt="dekkhotell"
                  className="w-full h-auto rounded-lg border-2 border-dark dark:border-light"
                  whileHover={{ scale: 1.05 }}
                  priority={true}
                  transition={{ duration: 0.2 }}
                />
              </div>

              <div className="w-full flex flex-col items-start justify-between mt-6">
                <p className="my-2 font-bold text-dark dark:text-light xs:text-sm">
                  Hos Vang Auto kan du nå sjekke inn på dekkhotell. Jeg ser for
                  meg at bildekk er litt i samme kategori som føtter, at de kan
                  bli litt neglisjert. Vi er kanskje flinkere til å ta vare på
                  overstellet enn understellet. Dette kan du nå gjøre noe med
                  ved å overlate dekkene dine til daglig leder Per Asbjørn
                  Berget på «hotellet» hans.
                </p>
                <p className="mt-4 font-bold text-xl xs:text-lg text-dark dark:text-light">
                  Utvidet tilbud
                </p>
                <p className="mb-2 font-medium text-dark xs:text-sm dark:text-light">
                  – Hvorfor satte du i gang dette?
                </p>
                <p className="my-2 font-medium text-dark xs:text-sm dark:text-light">
                  – Vi ønsket å utvide tilbudet vårt med et dekkhotell. Nå har
                  vi bygget det slik at vi har alt på en flate, så og si, og da
                  er det lett å håndtere.
                </p>
                <p className="mt-4 font-bold text-xl xs:text-lg text-dark dark:text-light">
                  Grundig behandling
                </p>
                <p className="mb-2 font-medium xs:text-sm text-dark dark:text-light">
                  – Hva skjer egentlig med dekkene på et dekkhotell da?
                </p>
                <p className="my-2 font-medium xs:text-sm text-dark dark:text-light">
                  – Vi skifter sommer- og vinterdekk, vasker dem grundig, og
                  oppbevarer dekkene for deg gjennom sesongen. Vi går samtidig
                  over dekkenes tilstand, og ser at de er i forsvarlig stand.
                  Dersom det skulle vise seg at de begynner å bli såpass slitte
                  at de neppe holder ut neste sesong, gir vi kundene beskjed om
                  dette og gir eventuelt et tilbud om nye dekk hos oss, som de
                  naturligvis står fritt til å velge å ta imot.
                </p>
                <p className="mt-4 font-bold text-xl xs:text-lg text-dark dark:text-light">
                  Praktisk og trygt
                </p>
                <p className="mb-2 font-medium xs:text-sm text-dark dark:text-light">
                  – Hvilke fordeler gir et dekkhotell?
                </p>
                <p className="my-2 font-medium xs:text-sm text-dark dark:text-light">
                  – Alt som dreier seg om bildekk blir jo enklere og mer
                  praktisk for kunden. Skal du skifte dekk selv, må du ha både
                  verktøy og plass og fysikk til å ordne det. Setter du dekkene
                  på et dekkhotell, gjør vi jobben for deg fra A til Å. Du
                  sparer plass til oppbevaring hjemme, du sparer ryggen din, du
                  sparer tid, og du kan føle deg trygg på at jobben som gjøres
                  her blir profesjonelt utført. Mange synes det er deilig å
                  slippe alt styret. Sikkerheten er også vesentlig. Når vi
                  skifter dekkene, har vi også et blikk på bremser og
                  hjuloppheng. Hvis vi for eksempel oppdager at det er noe galt
                  med bremsene, eller med for- og bakstillingen, gir vi beskjed
                  til kunden om dette.
                </p>
                <p className="mt-4 font-bold text-xl xs:text-lg text-dark dark:text-light">
                  Dobler gjerne
                </p>
                <p className="mb-2 font-medium xs:text-sm text-dark dark:text-light">
                  – Hvor stor kapasitet har du på hotellet?
                </p>
                <p className="my-2 font-medium xs:text-sm text-dark dark:text-light">
                  – Vi er ikke så store på dette nå, og foreløpig har vi cirka
                  hundre dekk til tjuefem biler. Men jeg har et ønske om å kunne
                  doble dette i hvert fall. Vi har mange faste kunder, og også
                  noe drop in. Vi ligger langs riksvei 25 i retning Elverum, øst
                  for Hamar, og ligger dermed langs en trafikkert hovedåre, og
                  kan i utgangspunktet favne bredt. Vi har bra med parkering,
                  kan tilby leiebil, og vi kan også kjøre kunden tilbake til
                  jobb for eksempel, dersom bilen skal stå her.
                </p>
                <p className="mt-4 font-bold text-xl xs:text-lg text-dark dark:text-light">
                  Letter hverdagen for folk
                </p>
                <p className="mb-2 font-medium xs:text-sm text-dark dark:text-light">
                  – Jeg regner med at du vil anbefale at jeg sjekker inn på
                  dekkhotellet ditt?
                </p>
                <p className="mt-2 font-medium xs:text-sm text-dark dark:text-light">
                  – Ja, det kan du trygt gjøre. Et dekkhotell letter hverdagen
                  for folk, slik at du heller kan konsentrere deg om andre ting
                  som kanskje er viktigere for deg, så hjertelig velkommen -
                  avrunder Per Asbjørn.
                </p>
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: {}, // Add props here later if needed
  };
}

export default dekkhotell;
