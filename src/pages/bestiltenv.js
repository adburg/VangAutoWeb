import React, { useEffect, useState } from "react";
import AnimatedText from "../components/AnimatedText";
import Head from "next/head";
import Layout from "../components/Layout";
import Confetti from "react-confetti";

const Bestiltenv = () => {
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
  });
  const [isClient, setClient] = useState(false);
  useEffect(() => {
    const { innerWidth: width, innerHeight: height } = window;
    setDimensions({
      width,
      height,
    });
    setClient(true);
  }, []);

  return (
    <>
      <Head>
        <title>Vang Auto | Mottatt </title>
        <meta name="robots" content="noindex" />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light">
        <Layout className="pt-16 min-h-screen">
          <AnimatedText
            text="Takk for din henvendelse!"
            className="sm:!text-6xl xs:!text-4xl xs:mb-2"
          />
          <p className="font-bold text-xl text-center text-dark dark:text-light">
            Vi skal prøve så godt vi kan å ta ditt innspill til betraktning for
            å bli en mer miljøvennlig bedrift!
          </p>
          <div className="flex items-center justify-center w-full">
            <Confetti width={dimensions.width} height={dimensions.height} />
          </div>
        </Layout>
      </main>
    </>
  );
};

export default Bestiltenv;
