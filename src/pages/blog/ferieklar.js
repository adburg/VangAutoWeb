import Head from "next/head";
import Image from "next/image";
import React from "react";
import image from "../../../public/images/articles/feriebil.jpg";
import { motion } from "framer-motion";
import Layout from "../../components/Layout";
import AnimatedText from "../../components/AnimatedText";

const FramerImage = motion(Image);

const ferieklar = () => {
  return (
    <>
      <Head>
        <title>Vang Auto | Blogg - Ferieklar bil </title>
        <meta
          name="description"
          content="Vang Auto Blogg. Les våre artikler for nyttig informasjon om bilen din, og bestill en time direkte i nettsiden eller ring oss."
        />
        <meta
          property="og:image"
          content="https://vangauto.no/images/articles/feriebil.jpg"
        />
      </Head>
      <main className="flex w-full flex-col mb-16 items-center justify-center">
        <Layout className="pt-12 mt-8 flex items-center justify-center !p-4 !md:p-12 !lg:p-32">
          <div className="flex w-2/3 md:w-full flex-col mb-16 items-center">
            <AnimatedText
              text="Ferieklar bil?"
              className="mb-8 !text-3xl !normal-case"
            />
            <div className="items-center border border-solid rounded-br-3xl rounded-3xl border-dark bg-light p-12 md:p-4 dark:border-white dark:bg-dark">
              <div className="w-full flex justify-center overflow-hidden rounded-lg ">
                <FramerImage
                  src={image}
                  priority={true}
                  alt="sommerdekk"
                  className="w-full h-auto rounded-lg border-2 border-dark dark:border-light"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                />
              </div>

              <div className="w-full flex flex-col items-start justify-between mt-6">
                <p className="my-2 font-bold text-dark xs:text-sm dark:text-white">
                  Når sommeren kommer, er det viktig å forberede bilen din for
                  varmere temperaturer og lengre kjøreturer. Enten du skal på en
                  lang ferie eller bare bruke bilen til daglig, kan en grundig
                  sjekk og service på bilen sørge for at den fungerer optimalt
                  og gir en trygg og behagelig kjøreopplevelse. Hos Vang Auto
                  tilbyr vi en rekke tjenester for å gjøre bilen din klar for
                  sommeren.
                </p>
                <p className="my-2 font-medium text-dark xs:text-sm dark:text-white">
                  -Det kan være lurt å ta en ekstra titt på alt fra dekk og
                  bremser til væskenivåer og klimaanlegg før sommeren, sier
                  daglig leder Per Asbjørn Berget.
                </p>
                <p className="mt-4 font-bold text-xl text-dark xs:text-lg dark:text-white">
                  Dekk og bremser
                </p>
                <p className="mb-2 font-medium text-dark xs:text-sm dark:text-white">
                  Før sommeren er det viktig å sjekke dekkene og bremsene på
                  bilen din. Dette er to av de mest kritiske komponentene på
                  bilen som kan påvirke kjøresikkerheten din. Når det gjelder
                  dekkene, er det viktig å sjekke mønsterdybden og dekktrykket.
                  Riktig dekktrykk kan forbedre bilens kjøreegenskaper, redusere
                  slitasje på dekkene og gi bedre drivstofføkonomi. Dette er
                  ekstra viktig på bilferier med full lastet bil.
                </p>
                <p className="my-2 font-medium text-dark xs:text-sm dark:text-white">
                  {" "}
                  -Bremser er også en viktig komponent som du bør sjekke før du
                  drar ut på sommerveiene. Hvis du hører skrapelyder når du
                  bremser, eller hvis bremsene føles slappe eller ujevne, kan
                  det hende du trenger bremseservice. Vi sjekker kokepunkt på
                  bremsevæske, og tilstand på bremseklosser og bremseskiver,
                  slik at du kan garanteres en trygg nedbremsing.
                </p>
                <p className="mt-4 font-bold text-xl text-dark xs:text-lg dark:text-white">
                  Kontroll av olje- og væskenivåer
                </p>
                <p className="mb-2 font-medium text-dark xs:text-sm dark:text-white">
                  En grundig sjekk av oljenivået og andre væsker i bilen er en
                  viktig del av forberedelsene til sommeren. Oljen er utrolig
                  viktig for motoren i bilen, og hvis du har lite eller
                  forurenset olje, kan det føre til alvorlige skader på motoren.
                  Derfor bør du alltid sjekke oljenivået og skifte oljen før
                  lange kjøreturer, spesielt hvis bilen din har gått en stund
                  siden siste oljeskift.
                </p>
                <p className="my-2 font-medium text-dark xs:text-sm dark:text-white">
                  -I tillegg bør du, hvis det er en stund siden sist, sjekke
                  bremsevæsken, girolje, spylervæske og frostvæske slik at både
                  du og bilen din koser deg på tur.
                </p>
                <p className="mt-4 font-bold text-xl text-dark xs:text-lg dark:text-white">
                  Service/rens på klimaanlegg, eller skifte av pollenfilter?
                </p>
                <p className="mb-2 font-medium text-dark xs:text-sm dark:text-white">
                  En annen viktig del av å gjøre bilen klar for sommeren er å
                  sørge for at hele klimaanlegget fungerer som det skal. Hvis
                  klimaanlegget ikke fungerer optimalt, kan det føre til
                  ubehagelig varme og dårlig luftkvalitet inne i bilen.
                </p>
                <p className="mt-4 font-bold text-xl text-dark xs:text-lg dark:text-white">
                  Bestill time tidlig
                </p>
                <p className="mb-2 font-medium text-dark xs:text-sm dark:text-white">
                  -Hvis du gjennomfører en service hos oss før ferien, forsikrer
                  du deg om at disse viktige behovene for bilen din er
                  ivaretatt, og sørger for at bilen din er klar for sommeren.
                </p>
                <p className="my-2 font-bold text-dark xs:text-sm dark:text-white">
                  -Har du spørsmål eller ønsker en time hos oss, er det bare å
                  ta kontakt! Verkstedet fyller seg ofte opp rett før sommeren,
                  så det er lurt å være tidlig ute.
                </p>
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default ferieklar;
