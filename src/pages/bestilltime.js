import AnimatedText from "../components/AnimatedText";
import ContactForm from "../components/ContactForm";
import Layout from "../components/Layout";
import Head from "next/head";
import React from "react";
import TransitionEffect from "../components/TransitionEffect";

const bestilltime = () => {
  return (
    <>
      <Head>
        <title>Vang Auto | Bestill Time</title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffect />
      <main className="flex items-center w-full justify-center text-dark min-h-screen dark:text-light">
        <Layout className="pt-12">
          <div className="flex w-full items-center justify-center flex-col">
            <div className="w-full flex mb-12 flex-col items-center justify-center">
              <AnimatedText
                text="Bestill Time"
                className="!text-center sm:!text-6xl xs:!text-4xl xs:mb-2"
              />
              <p className="font-bold sm:-mb-8 text-xl text-center md:text-lg sm:text-sm text-dark dark:text-light">
                Vi kontakter deg så fort som mulig for å avtale tidspunkt.
              </p>
            </div>
            <div className=" w-1/3 xl:w-1/2 md:w-full items-center justify-center">
              <ContactForm />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default bestilltime;
