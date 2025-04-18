import AnimatedText from "../components/AnimatedText";
import Layout from "../components/Layout";
import Head from "next/head";
import React from "react";
import ContactFormEnv from "../components/ContactFormEnv";

const Miljo = () => {
  return (
    <>
      <Head>
        <title>Vang Auto | Miljø</title>
        <meta
          name="description"
          content="Vang Auto bilverksted mellom Hamar og Eleverum. 
          Ta kontakt for å få svar på dine spørsmål, eller bestill time nå."
        />
      </Head>
      <main className="w-full flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-10">
          <AnimatedText
            text="Miljøarbeid og bærekraft"
            className="mb-12 sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          {/** MAIN */}
          <div className="grid grid-cols-10 gap-12 sm:gap-8">
            {/** LEFT COLUMN */}
            <div
              className="col-span-6 lg:col-span-10 relative flex flex-col items-start justify-center 
               sm:order-1"
            >
              <h2 className="mb-2 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                Vårt arbeid mot en grønnere bedrift
              </h2>
              <p className="font-medium">
                {" "}
                Vang Auto jobber stadig med å bli mer miljøvennlig. I august
                2024 ble vi miljøfyrtåernsertifisert. Ved å sertifiseres sørger
                vi for at bedriften følger krav og anbefalinger som er satt i
                forbindelse med FNs bærekraftmål. Bilverksteder benytter seg av
                mye emballasje, farlig avfall, kjemikalier, transport og strøm.
                Vi ønsker å gjøre dette så effektivt og bærekraftig som mulig.
              </p>
              <h3 className="font-bold pt-3">Miljøfyrtårn</h3>
              <p className="font-medium">
                {" "}
                For å tilfredsstille kravene som miljøfyrtårn har Vang Auto et
                økt fokus på miljø generelt, samtidig som virksomhetens
                miljøpåvirkning dokumenteres og benyttes for å finne områder med
                forbedringspotensial. Vår miljøpolicy for de kommende årene har
                følgende fokusområder:
              </p>
              <ul className="list-disc list-inside pt-2 text-sm italic font-semibold">
                <li>
                  å tenke miljø som er en naturlig og integrert del av
                  virksomheten Vang Auto.
                </li>
                <li>
                  å tilfredsstille miljøkrav og reguleringer fra offentlige
                  myndigheter.
                </li>
                <li>
                  å identifisere og redusere mulige kilder til forurensning.
                </li>
                <li>
                  å etterstrebe en effektiv bruk av energi og minimum bruk av
                  forbruksmaterialer
                </li>
                <li>
                  å ha en Miljøfyrtårnhåndbok som gir gode retningslinjer for
                  den daglige virksomheten.
                </li>
              </ul>
              <h3 className="font-bold pt-3">Fremgang og resultater</h3>
              <p className="font-medium">
                For en mer konkret oversikt over vår progresjon og fremtidige
                mål, se lenkene nedenfor:
              </p>
              <a
                href="https://rapportering.miljofyrtarn.no/stats/163164"
                className="font-medium text-blue-700"
              >
                Innrapportering for 2023
              </a>
              <a
                href="https://rapportering.miljofyrtarn.no/stats/172251"
                className="font-medium text-blue-700"
              >
                Innrapportering for 2024
              </a>
            </div>
            {/** RIGHT COLUMN */}
            <div
              className="col-span-4 lg:col-span-10 justify-center items-center 
              sm:order-3 rounded-3xl border-2 border-solid border-dark bg-light 
              p-4 lg:p-8 sm:p-2 relative dark:bg-dark dark:border-light w-full h-full"
            >
              <div className="absolute top-0 -right-2 -z-10 w-[101%] h-[102%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light" />
              <ContactFormEnv />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default Miljo;
