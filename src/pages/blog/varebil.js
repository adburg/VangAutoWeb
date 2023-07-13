import Head from "next/head";
import Image from "next/image";
import React from "react";
import image from "../../../public/images/articles/varebil.png";
import { motion } from "framer-motion";
import Layout from "../../components/Layout";
import AnimatedText from "../../components/AnimatedText";

const FramerImage = motion(Image);

const varebil = () => {
  return (
    <>
      <Head>
        <title>Vang Auto | Blog - Vare- og Bobil</title>
        <meta name="description" content="any description" />
      </Head>
      <main className="flex w-full flex-col mb-16 items-center justify-center">
        <Layout className="pt-12 mt-8 flex items-center justify-center !p-4 !md:p-12 !lg:p-32">
          <div className="flex w-2/3 md:w-full flex-col mb-16 items-center">
            <AnimatedText
              text="Vi reparerer bobilen og varebilen din"
              className="mb-6 !text-3xl "
            />
            <div className="items-center border border-solid rounded-br-3xl rounded-3xl border-dark bg-light p-12 md:p-4 dark:border-light dark:bg-dark">
              <div className="w-full flex justify-center overflow-hidden rounded-lg ">
                <FramerImage
                  src={image}
                  alt="bobil"
                  priority={true}
                  className="w-full h-auto rounded-lg border-2 border-dark dark:border-light"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                />
              </div>

              <div className="w-full flex flex-col items-start justify-between mt-6">
                <p className="my-2 font-bold text-dark xs:text-sm dark:text-light">
                  -Vi har både utstyr, plass og kompetanse til å reparere og
                  vedlikeholde bobiler og varebiler på inntil 7,5 tonn, sier
                  daglig leder Per Asbjørn Berget hos Vang Auto AS.
                </p>
                <p className="my-2 font-medium text-dark xs:text-sm dark:text-light">
                  Uansett om bobilen din skal på vinterlagring, på langtur til
                  Spania eller ut på norsk vinterføre, er det viktig at den blir
                  tatt godt vare på.
                </p>
                <p className="my-2 font-medium text-dark xs:text-sm dark:text-light">
                  -Bobiler er egentlig en vanlig, stor varebil der lasterommet
                  er bygget om med en boenhet. Mellom 70 og 80 prosent av de
                  bobilene som selges i Norge er bygget på Fiat-chassis, men vi
                  kan ta service, vedlikehold og reparasjoner på alle merker og
                  modeller med de samme garantier som du får hos et
                  merkeverksted. Det samme gjelder selvsagt for varebiler, sier
                  Berget.
                </p>
                <p className="mt-4 font-bold text-xl text-dark xs:text-lg dark:text-light">
                  Merkbar økning
                </p>
                <p className="mb-2 font-medium text-dark xs:text-sm dark:text-light">
                  Salget av bobiler har økt kraftig de siste årene. Spesielt
                  under korona-pandemien var det mange som investerte i en slik
                  praktisk, men kostbar «hytte på hjul». Ifølge Campinbil.net er
                  det pris som teller mest når nordmenn sender bobil og
                  personbil på verksted. Om jobben gjøres på et merkeverksted
                  spiller mindre rolle. Det hevder nettstedet, og viser til en
                  måling som Autobransjens Leverandørforening nylig har
                  gjennomført.
                </p>

                <p className="my-2 font-medium text-dark xs:text-sm dark:text-light">
                  Per Asbjørn Berget forteller om en merkbar økning i pågangen
                  av bobiler til verkstedet.
                </p>
                <p className="my-2 font-medium text-dark xs:text-sm dark:text-light">
                  -Alle motoriserte kjøretøy krever regelmessig service,
                  vedlikehold og ettersyn. Det gjelder selvsagt også for bobiler
                  og varebiler, sier Berget. Han synes det er bra at også
                  bobileiere tar vare på investeringene sine.
                </p>

                <p className="my-2 font-medium text-dark xs:text-sm dark:text-light">
                  -Dette handler ikke bare om penger, selv om det selvsagt
                  lønner seg å holde kjøretøyet i orden. Men mest av alt handler
                  det om at man skal kunne kjøre trygt og sikkert på veiene.
                </p>
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default varebil;
