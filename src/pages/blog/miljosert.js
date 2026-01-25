import Head from "next/head";
import Image from "next/image";
import React from "react";
import image from "../../../public/images/articles/miljofyrtarn.jpg";
import { motion } from "framer-motion";
import Layout from "../../components/Layout";
import AnimatedText from "../../components/AnimatedText";
import Link from "next/link";

const FramerImage = motion(Image);

const miljosert = () => {
  return (
    <>
      <Head>
        <title>Vang Auto | Blogg - Miljøsertifisering</title>
        <meta
          name="description"
          content="Vang Auto Blogg. Les våre artikler for nyttig informasjon om bilen din, og bestill en time direkte i nettsiden eller ring oss."
        />
        <meta
          property="og:image"
          content="https://vangauto.no/images/articles/miljofyrtarn.jpg"
        />
      </Head>

      <main className="flex w-full flex-col mb-16 items-center justify-center dark:text-light">
        <Layout className="pt-12 mt-8 flex items-center justify-center !p-4 !md:p-12 !lg:p-32 ">
          <div className="flex w-2/3 md:w-full flex-col mb-16 items-center ">
            <AnimatedText
              text="Vang Auto har blitt Miljøfyrtårn! 
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
                  Vang Auto er stolte av å annonsere at vi nå er
                  miljøsertifisert! Etter en omfattende prosess gjennom hele
                  2024, som ble fullført i august, kan vi endelig tilby våre
                  tjenester med en grønnere profil. Vi har jobbet systematisk
                  for å redusere vårt miljøavtrykk og har implementert nye,
                  bærekraftige tiltak på verkstedet. Dette er et stort steg for
                  oss, og vi er glade for å kunne være et tryggere valg for våre
                  kunder som ønsker miljøvennlige løsninger.
                </p>
                <p className="mt-4 font-bold text-xl xs:text-lg text-dark dark:text-light">
                  Et målrettet arbeid mot sertifiseringen
                </p>
                <p className="mb-2 font-medium text-dark xs:text-sm dark:text-light">
                  – Hvordan har arbeidet mot en slik sertifisering vært for
                  bedriften?
                </p>
                <p className="my-2 font-medium text-dark xs:text-sm dark:text-light">
                  – Det har vært en lærerik reise, sier daglig leder Per Asbjørn
                  Berget. &quot;Vi har jobbet grundig med å implementere tiltak
                  som reduserer vår påvirkning på miljøet, fra smartere
                  energibruk til strengere avfallshåndtering.&quot; Berget
                  påpeker at miljøsertifiseringen ikke bare handler om endring i
                  rutiner, men også et steg mot å møte forventningene til
                  miljøbevisste kunder. &quot;Vi ønsker å gjøre vårt for
                  miljøet, og dette viser at vi tar det på alvor,&quot;
                  forklarer han. &quot;Det er viktig for oss å være et ansvarlig
                  valg for våre kunder.&quot;
                </p>
                <p className="mt-4 font-bold text-xl xs:text-lg text-dark dark:text-light">
                  Sammen for en grønnere fremtid
                </p>
                <p className="my-2 font-medium xs:text-sm text-dark dark:text-light">
                  -For Vang Auto handler miljøsertifiseringen ikke bare om å
                  tilfredsstille krav; det er et verdigrunnlag som vi vil bygge
                  videre på. Vi har gjennomført konkrete tiltak som påvirker
                  både hverdagen i verkstedet og den langsiktige driften, med
                  fokus på bærekraft og ansvarlig ressursbruk. Dette innebærer
                  blant annet redusert energiforbruk, bærekraftige materialvalg,
                  og en forbedret avfallshåndtering. Vi ønsker å være et
                  attraktivt valg både for private kunder og bedrifter som
                  prioriterer grønnere alternativer.
                </p>
                <p className="mt-4 font-bold text-xl xs:text-lg text-dark dark:text-light">
                  Velkommen til et mer miljøvennlig verksted
                </p>
                <p className="my-2 font-medium xs:text-sm text-dark dark:text-light">
                  Vang Auto er dedikert til å hjelpe sine kunder med å gjøre
                  miljøbevisste valg. Vi tror at en miljøsertifisering ikke bare
                  gir oss bedre verktøy til å drifte verkstedet, men også
                  muligheten til å tilby våre kunder en grønnere opplevelse. Hos
                  oss kan du nå få bilservicen din utført med en trygghet om at
                  vi har miljøet i fokus. Enten du er privatkunde eller
                  representerer en bedrift, ønsker vi deg velkommen til et
                  verksted som tar miljøansvar på alvor.
                </p>
                <p className="my-2 font-medium xs:text-sm text-dark dark:text-light">
                  For mer informasjon om Vang Auto sitt arbeid med miljø:{" "}
                  <Link
                    href="/miljo"
                    target={"_self"}
                    className="text-blue-600 hover:underline"
                  >
                    klikk her
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default miljosert;
