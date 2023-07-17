import Head from "next/head";
import Image from "next/image";
import React from "react";
import image from "../../../public/images/articles/dekk.jpg";
import { motion } from "framer-motion";
import Layout from "../../components/Layout";
import AnimatedText from "../../components/AnimatedText";

const FramerImage = motion(Image);

const service = () => {
  return (
    <>
      <Head>
        <title>Vang Auto | Blogg - Service</title>
        <meta
          name="description"
          content="Vang Auto Blogg. Les våre artikler for nyttig informasjon om bilen din, og bestill en time direkte i nettsiden eller ring oss."
        />
      </Head>
      <main className="flex w-full flex-col mb-16 items-center justify-center">
        <Layout className="pt-12 mt-8 flex items-center justify-center !p-4 !md:p-12 !lg:p-32">
          <div className="flex w-2/3 md:w-full flex-col mb-16 items-center">
            <AnimatedText
              text="Vi tar service på bilen din – også elbil
              "
              className="mb-6 !text-3xl !normal-case"
            />
            <div className="items-center border border-solid rounded-br-3xl rounded-3xl border-dark bg-light p-12 md:p-4 dark:border-light dark:bg-dark">
              <div className="w-full flex justify-center overflow-hidden rounded-lg ">
                <FramerImage
                  src={image}
                  alt="service"
                  priority={true}
                  className="w-full h-auto rounded-lg border-2 border-dark dark:border-light"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                />
              </div>

              <div className="w-full flex flex-col items-start justify-between mt-6">
                <p className="my-2 font-bold text-dark xs:text-sm dark:text-light">
                  Vi reparerer og utfører service på alle biler, fossile som
                  elektriske, sier kundemottaker John Kverneng hos Vang Auto AS.
                </p>
                <p className="my-2 font-medium text-dark xs:text-sm dark:text-light">
                  Du kan trygt ta service eller reparasjon på både elbil og
                  hybrid hos oss. Vårt verksted er elbil-sertifisert av MECA, og
                  har kompetanse og sikkerhetsutstyr for å utføre arbeid på
                  elbiler. Er bilen dekket av nybilgaranti – gjelder denne også
                  etter service hos oss.
                </p>

                <p className="my-2 font-medium text-dark xs:text-sm dark:text-light">
                  Det er mange som tror de må på merkeverksted med elbilen sin.
                  Det er helt feil. Vi har kompetanse, utstyr og godkjenning for
                  å utføre både reparasjoner, service og EU-kontroll på alle
                  elbiler, og vi har de samme, lave prisene uansett hva slags
                  type bil det er snakk om, forteller Kverneng.
                </p>
                <p className="my-2 font-medium text-dark xs:text-sm dark:text-light">
                  Når du tar service på bilen din på et av våre bilverksteder,
                  inngår ett års MECA Veihjelp. Er du uheldig og får en teknisk
                  feil, går tom for drivstoff, punkterer, mister nøkkelen eller
                  låser deg ute av bilen, kommer vi og hjelper deg. Vi frakter
                  deg og bilen din til nærmeste verksted – uten kostnad.
                </p>

                <p className="my-2 font-medium text-dark xs:text-sm dark:text-light">
                  Vi tilbyr også gunstige og fleksible betalingsløsninger
                  gjennom Meca konto.
                </p>
                <p className="mt-2 font-bold text-dark xs:text-sm dark:text-light">
                  Ta gjerne kontakt med oss for tilbud og time.
                </p>
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default service;
