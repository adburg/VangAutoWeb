import React, { useEffect, useState } from "react";
import AnimatedText from "../components/AnimatedText";
import Head from "next/head";
import Layout from "../components/Layout";
import Confetti from "react-confetti";
import Script from "next/script";

const Bestilt = () => {
  const id = process.env.GOOGLE_ID;
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0
  });
  const [isClient, setClient] = useState(false);
  useEffect(() => {
    const { innerWidth: width, innerHeight: height } = window;
    setDimensions({
      width,
      height
    });
    setClient(true);
  }, []);

  return (
    <>
      <Head>
        <title>Vang Auto | Bestilt </title>
        <meta name="robots" content="noindex" />
      </Head>
      <Script strategy="afterInteractive" id="ads">
        {`
          gtag('event', 'conversion', {'send_to': 'AW-11095667432/9zRMCL_52sAYEOjl6aop'});
        `}
      </Script>
      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light">
        <Layout className="pt-16 min-h-screen">
          <AnimatedText
            text="Takk for din bestilling!"
            className="sm:!text-6xl xs:!text-4xl xs:mb-2"
          />
          <p className="font-bold text-xl text-center text-dark dark:text-light">
            Vi ringer deg opp på angitt telfonnummer for å avtale tidspunkt,
            tjeneste og levering av bil!
          </p>
          <div className="flex items-center justify-center w-full">
            <Confetti width={dimensions.width} height={dimensions.height} />
          </div>
        </Layout>
      </main>
    </>
  );
};

export default Bestilt;
