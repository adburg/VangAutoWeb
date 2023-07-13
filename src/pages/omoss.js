import React, { useEffect, useRef } from "react";
import Head from "next/head";
import AnimatedText from "../components/AnimatedText";
import Layout from "../components/Layout";
import omPic from "../../public/images/profile/omoss.jpg";
import Image from "next/image";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "../components/Skills";
import Historie from "../components/Historie";
import TransitionEffect from "../components/TransitionEffect";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const Omoss = () => {
  return (
    <>
      <Head>
        <title>Vang Auto | Om oss</title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-10">
          <AnimatedText
            text="Om Vang Auto"
            className="mb-16 sm:!text-6xl xs:!text-4xl xs:mb-2"
          />
          <div className="grid w-full grid-cols-9 gap-8 sm:gap-8">
            <div className="col-span-3 flex flex-col md:text-md lg:text-sm items-start justify-center 2xl:col-span-5 md:order-2 md:col-span-9">
              <h2 className="mb-2 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                Om Verkstedet
              </h2>
              <p className="font-medium mb-4">
                {" "}
                Vang Auto AS er et privat eid firma som ble etablert i 1960 og
                som i dag teller 11 medarbeidere. Vi holder til i tidsmessige
                lokaler og har et velutrustet verksted både for personbiler og
                varebiler. I tillegg har vi egen karosseriavdeling hvor vi også
                kan skifte og reparere bilruter.
              </p>
              <h3 className="font-bold">Iveco</h3>
              <p className="font-medium mb-4">
                {" "}
                Vi er en Iveco service forhandler som utfører alt av
                reparasjoner og service på merket, herunder også
                garanti-reparasjoner. Vi formidler også kontakt i forbindelse
                med kjøp og salg av nye og brukte Iveco-kjøretøy.
              </p>
              <h3 className="font-bold">Meca</h3>
              <p className="font-medium">
                Vi er tilknyttet Meca verkstedkjeden som har bilverksteder
                utover hele landet. Dette medfører at vi oppfyller en
                kvalitetsstandard bestemt av Meca. Vi benytter deler fra Meca
                som tilfredsstiler original kvalitet eller tilsvarende, noe som
                gjør at delenes kan leveres med garanti som gir trygghet for deg
                som kunde.
              </p>
            </div>

            <div className="col-span-4 mt-4 xl:mt-8 2xl:mt-1 lg:mt-24 md:mt-8 sm:mt-4 relative flex justify-center h-max rounded-3xl border-2 border-solid border-dark dark:border-light bg-light p-4 sm:p-2 dark:bg-dark 2xl:col-span-4 md:order-1 md:col-span-9">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
              <Image
                src={omPic}
                alt="Vang Auto"
                className="w-full h-auto rounded-2xl "
                priority={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="col-span-2 2xl:col-span-9 2xl:flex-row flex flex-col items-end justify-between 2xl:items-center md:order-3 md:col-span-9">
              <div className="flex flex-col items-end justify-center xl:items-center ">
                <span className="inline-block text-7xl font-bold lg:text-6xl md:text-5xl sm:text-4xl xs:text-3xl">
                  <AnimatedNumbers value={60} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Års bransjeerfaring
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold lg:text-6xl md:text-5xl sm:text-4xl xs:text-3xl">
                  <AnimatedNumbers value={10} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75  xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Sertifiserte mekanikere
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold lg:text-6xl md:text-5xl sm:text-4xl xs:text-3xl">
                  <AnimatedNumbers value={100} />
                  k+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Reparerte kjøretøy
                </h2>
              </div>
            </div>
          </div>
          <Skills />
          <Historie />
        </Layout>
      </main>
    </>
  );
};

export default Omoss;
