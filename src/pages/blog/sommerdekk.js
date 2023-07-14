import Head from "next/head";
import Image from "next/image";
import React from "react";
import image from "../../../public/images/articles/sommerdekk.jpg";
import { motion } from "framer-motion";
import Layout from "../../components/Layout";
import AnimatedText from "../../components/AnimatedText";

const FramerImage = motion(Image);

const sommerdekk = () => {
  return (
    <>
      <Head>
        <title>Vang Auto | Blog - Sommerdekk</title>
        <meta name="description" content="any description" />
      </Head>
      <main className="flex w-full flex-col mb-16 items-center justify-center">
        <Layout className="pt-12 mt-8 flex items-center justify-center !p-4 !md:p-12 !lg:p-32">
          <div className="flex w-2/3 md:w-full flex-col mb-16 items-center">
            <AnimatedText
              text="Våren og sommerdekkene er rett rundt hjørnet"
              className="mb-6 !text-3xl !normal-case"
            />
            <div className="items-center border border-solid rounded-br-3xl rounded-3xl border-dark bg-light p-12 md:p-4 dark:border-light dark:bg-dark">
              <div className="w-full flex justify-center overflow-hidden rounded-lg ">
                <FramerImage
                  src={image}
                  alt="sommerdekk"
                  priority={true}
                  className="w-full h-auto rounded-lg border-2 border-dark dark:border-light"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                />
              </div>

              <div className="w-full flex flex-col items-start justify-between mt-6">
                <p className="my-2 font-bold text-dark xs:text-sm dark:text-light">
                  Til tross for at snøen fortsatt ligger her på Østlandet,
                  begynner vi å nærme oss våren og varmere tider. Dette betyr at
                  det snart er på tide med dekkskift. Vi anbefaler å planlegge i
                  god tid, slik at du både følger loven, og gjør det som er best
                  for bilen din
                </p>
                <p className="my-2 font-medium text-dark xs:text-sm dark:text-light">
                  -Piggdekkene skal være av senest første søndag etter påske,
                  som i år er 16 april så sant forholdene ikke tilsier noe
                  annet, sier daglig leder Per Asbjørn Berget hos Vang Auto AS.
                  Han sier videre at hvis du kjører vinterdekk uten pigger kan
                  du skifte mer etter behov, men anbefaler ikke å bruke
                  vinterdekk lengre enn nødvendig.
                </p>
                <p className="mt-4 font-bold text-xl text-dark xs:text-lg dark:text-light">
                  Vang Auto er Dekkpartner
                </p>
                <p className="mb-2 font-medium text-dark xs:text-sm dark:text-light">
                  – Har du dekkhotell hos oss, trenger du ikke tenke på noe
                  annet enn å bestille tid for dekkskift. Da sjekker vi at
                  sommerdekkene dine har tilstrekkelig mønsterdybde og at de
                  ellers er i forsvarlig stand slik at du kan gå den lyse
                  årstiden trygt i møte. Neste sesong når vinterdekkene skal på
                  igjen sjekker vi det samme, slik at det hele går sømløst for
                  deg som kunde, sier Per Asbjørn.
                </p>
                <p className="my-2 font-medium text-dark xs:text-sm dark:text-light">
                  Vang Auto er også offisiell Dekkpartner, noe som innebærer at
                  vi har den nødvendige ekspertisen som kreves for å ta vare på
                  dine dekk. I tillegg til dette betyr det også at vi kan tilby
                  ekstra hyggelige priser på nye dekk, når dette er nødvendig.
                  Dette gjelder både om du ønsker du deg premium dekk, eller om
                  du er ute etter rimeligere alternativer.
                </p>
                <p className="my-2 font-medium text-dark xs:text-sm dark:text-light">
                  Mønsterdybden på sommerdekkene skal være minimum 1,6
                  millimeter.
                </p>
                <p className="my-2 font-medium text-dark xs:text-sm dark:text-light">
                  Det er Statens Vegvesen som har bestemt at piggdekkene skal av
                  første søndag etter påske, og ikke på igjen før 1. november i
                  vår del av landet.
                </p>
                <p className="my-2 font-medium text-dark xs:text-sm dark:text-light">
                  Mens det bare er tillatt å bruke piggdekk fra 1. november til
                  første søndag etter påske, kan du i prinsippet benytte
                  piggfrie vinterdekk hele året. Dette er likevel en svært
                  dårlig løsning, ifølge Berget.
                </p>
                <p className="my-2 font-medium text-dark xs:text-sm dark:text-light">
                  – Piggfrie vinterdekk har en annen type gummi enn sommerdekk,
                  først og fremst for at den skal ivareta gripeevnen når det er
                  kaldt. På sommerføre blir vintergummien altfor myk. De
                  piggfrie vinterdekkene har også dårligere stabilitet og
                  vanndrenering i forhold til med sommerdekk.
                </p>
                <p className="mt-4 font-bold text-xl text-dark xs:text-lg dark:text-light">
                  Dekkhotell hos oss er verdt hver eneste krone
                </p>
                <p className="mb-2 font-medium text-dark xs:text-sm dark:text-light">
                  Per Asbjørn Berget forteller at det er stadig flere som finner
                  ut at dekkhotell hos Vang Auto er en grei og fleksibel
                  løsning.
                </p>
                <p className="mt-2 font-medium text-dark xs:text-sm dark:text-light">
                  -Vi ser at hjulene tar mer og mer plass i og med at
                  dekkdimensjonene blir større og større på nyere biler. Med
                  dekkhotell sparer du både ryggen og får mer plass i garasjen.
                  Med denne tjenesten skifter vi sommer- og vinterdekk, vasker
                  dem grundig, og oppbevarer dekkene for deg gjennom sesongen.
                  Vi går samtidig over dekkenes tilstand, og ser at de er i
                  forsvarlig stand. Det er ikke bare mønsterdybden det handler
                  om. De bør heller ikke være for gamle. Dekk er nemlig
                  ferskvare, og med årene mister de viktige egenskaper. Dersom
                  det skulle vise seg at dekkene dine begynner å bli såpass
                  gamle eller slitte at de neppe holder ut neste sesong, gir vi
                  deg beskjed om dette. I så fall får du også et bra tilbud om
                  nye dekk om du skulle ønske det, sier Per Asbjørn Berget.
                </p>
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default sommerdekk;
