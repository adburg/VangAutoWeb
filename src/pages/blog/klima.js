import Head from "next/head";
import Image from "next/image";
import React from "react";
import image from "../../../public/images/articles/ac.jpg";
import { motion } from "framer-motion";
import Layout from "../../components/Layout";
import AnimatedText from "../../components/AnimatedText";

const FramerImage = motion(Image);

const klima = () => {
  return (
    <>
      <Head>
        <title>Vang Auto | Blogg - Air Condition</title>
        <meta
          name="description"
          content="Vang Auto Blogg. Les våre artikler for nyttig informasjon om bilen din, og bestill en time direkte i nettsiden eller ring oss."
        />
        <meta
          property="og:image"
          content="https://vangauto.no/images/articles/ac.jpg"
        />
      </Head>
      <main className="flex w-full flex-col mb-16 items-center justify-center">
        <Layout className="pt-12 mt-8 flex items-center justify-center !p-4 !md:p-12 !lg:p-32">
          <div className="flex w-2/3 md:w-full flex-col mb-16 items-center">
            <AnimatedText
              text="Er ditt AC-anlegg klart for sommeren?"
              className="mb-6 !text-3xl !normal-case"
            />
            <div className="items-center border border-solid rounded-br-3xl rounded-3xl border-dark bg-light p-12 md:p-4 dark:border-white dark:bg-dark">
              <div className="w-full flex justify-center overflow-hidden rounded-lg ">
                <FramerImage
                  src={image}
                  priority={true}
                  alt="klima"
                  className="w-full h-auto rounded-lg border-2 border-dark dark:border-light"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                />
              </div>

              <div className="w-full flex flex-col items-start justify-between mt-6">
                <p className="my-2 font-bold text-dark xs:text-sm dark:text-white">
                  Det er vanlig å tro at klimaanlegget får all oppmerksomheten
                  det trenger når bilen din er på en vanlig service. I følge
                  daglig leder hos Vang Auto, Per Asbjørn Berget er ikke dette
                  alltid tilfellet. Vi har flere tjenester som kan hjelpe deg
                  med enten reparasjon, eller forebygging av skader på
                  klimaanlegget i bilen din.
                </p>
                <p className="my-2 font-medium text-dark xs:text-sm dark:text-white">
                  -De fleste kjøretøy har ikke varsellamper for klimaanlegg,
                  sånn som de har på mye annet. Som regel merker man ingenting
                  før dette rett og slett slutter å kjøle. Derfor kan det være
                  lurt å sjekke at dette anlegget er i form til sommeren. Dette
                  er en lur investering, særlig på litt eldre biler. Med tiden
                  vil nemlig alle systemer begynne å lekke, sier Berget, som
                  også anbefaler regelmessig skifte av pollenfilter.
                </p>
                <p className="mt-4 font-bold text-xl text-dark xs:text-lg dark:text-white">
                  Service på klimaanlegg
                </p>
                <p className="mb-2 font-medium text-dark xs:text-sm dark:text-white">
                  -Regelmessig service på klimaanlegget i bilen din er viktig
                  for å sikre at det gir deg ren og frisk luft. En klimaservice
                  kan bidra til å oppdage eventuelle problemer og feil på et
                  tidlig stadium, før de blir større og mer omfattende.
                </p>
                <p className="my-2 font-medium text-dark xs:text-sm dark:text-white">
                  -Ved å investere i en klimaservice, kan du også sørge for at
                  klimaanlegget i bilen din har nok kuldemedium, som er det som
                  gir den kalde luften du trenger på varme dager. Et godt
                  vedlikeholdt klimaanlegg kan bidra til å spare deg for tid og
                  penger i det lange løp, og ubehagelig varme opplevelser på
                  sommerdager.
                </p>
                <p className="my-2 font-medium text-dark xs:text-sm dark:text-white">
                  -Hos Vang Auto tilbyr vi klimaservice til konkurransedyktige
                  priser. Vi vil gjerne hjelpe deg med å holde klimaanlegget i
                  bilen din i god stand, slik at du kan nyte en behagelig
                  kjøreopplevelse gjennom hele året.
                </p>
                <p className="mt-4 font-bold text-xl text-dark xs:text-lg dark:text-white">
                  Rens av AC anlegg
                </p>
                <p className="mb-2 font-medium text-dark xs:text-sm dark:text-white">
                  -Rens av AC-anlegget i bilen din bidrar til å fjerne støv,
                  smuss, mugg og bakterier som kan samle seg opp i systemet over
                  tid. Dette kan føre til dårlig lukt og redusert luftstrøm fra
                  klimaanlegget, noe som kan påvirke komforten og helsen til deg
                  og dine passasjerer.
                </p>
                <p className="my-2 font-medium text-dark xs:text-sm dark:text-white">
                  -Regelmessig rensing av AC-anlegget i bilen din kan også bidra
                  til å forlenge levetiden til systemet som igjen reduserer
                  risikoen for kostbare reparasjoner.
                </p>
                <p className="my-2 font-medium text-dark xs:text-sm dark:text-white">
                  -Hos oss kan du få AC-rengjøring til en pris som passer ditt
                  budsjett. Ved hjelp av profesjonelt utstyr og
                  rengjøringsmidler vil vi sørge for at AC-anlegget i bilen din
                  blir renset på en effektiv og skånsom måte. Slik at luften du
                  puster inn er trygg og ren.
                </p>
                <p className="mt-4 font-bold text-xl text-dark xs:text-lg dark:text-white">
                  Skifte av pollenfilter
                </p>
                <p className="mb-2 font-medium text-dark xs:text-sm dark:text-white">
                  -Pollenfilteret i bilen din spiller en viktig rolle for å
                  fjerne støv, pollen og andre partikler fra luften som kommer
                  inn i kupeen. Et skittent eller tett pollenfilter kan redusere
                  luft- strømmen og kvaliteten i bilen din, noe som kan føre til
                  dårlig lukt, irritasjon i øynene og nesen, og til og med
                  allergiske reaksjoner.
                </p>
                <p className="my-2 font-medium text-dark xs:text-sm  dark:text-white">
                  -Vår anbefaling er å skifte pollenfilteret hver hvert år. Ved
                  å bytte pollenfilteret jevnlig, kan du også bidra til å
                  forlenge levetiden til klimaanlegget i bilen din, ettersom at
                  et rent filter bidrar til å beskytte viftemotoren mot skader
                  og overoppheting.
                </p>
                <p className="my-2 font-medium text-dark xs:text-sm dark:text-white">
                  Hos Vang Auto vil våre dyktige teknikere vil sørge for å
                  skifte ut det gamle filteret med et nytt, høykvalitets filter
                  som er tilpasset din bil. Dette vil bidra til å sikre god
                  luftkvalitet og maksimal komfort i bilen din.
                </p>
                <p className="my-2 font-medium text-dark xs:text-sm dark:text-white">
                  Ikke la skitne filtre og dårlig klimaanlegg påvirke helsen og
                  komforten til deg og dine
                </p>
                <p className="mt-2 font-bold text-dark xs:text-sm dark:text-white">
                  -Kontakt oss uansett om du har spørsmål eller vil bestille en
                  time! Vi streber alltid etter på være behjelpelig med alle
                  tjenester, og tilbyr en hyggelig prat.
                </p>
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default klima;
