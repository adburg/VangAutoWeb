import AnimatedText from "../components/AnimatedText";
import Layout from "../components/Layout";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import EUimage from "../../public/images/projects/EUanimated.jpg";
import dekkimage from "../../public/images/projects/dekkhotell.jpg";
import hjulimage from "../../public/images/projects/firehjuls.jpg";
import oljeimage from "../../public/images/projects/olje.jpg";
import karosseriimage from "../../public/images/projects/EU-kontroll.jpg";
import acimage from "../../public/images/projects/ac.jpg";
import serviceimage from "../../public/images/projects/service.jpg";
import { motion } from "framer-motion";
import { LinkArrow } from "../components/Icons";
import TransitionEffect from "../components/TransitionEffect";

const FramerImage = motion(Image);

const FeaturedService = ({ type, title, summary, img, link, link2 }) => {
  return (
    <article
      className="w-full flex items-center justify-between relative rounded-br-2xl rounded-3xl border border-solid 
    border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-bre-3x xs:p-4"
    >
      <div className="absolute top-0 -right-5 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]" />
      <div className="w-1/2 overflow-hidden rounded-lg lg:w-full ">
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority={true}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </div>

      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-blue-800 font-medium text-xl dark:text-blue-500 xs:text-sm ">
          {type}
        </span>
        <div>
          <h2 className="my-2 w-full text-left text-4xl font-bold text-dark dark:text-light md:text-2xl xs:text-lg md:my-0">
            {title}
          </h2>
        </div>

        <p className="my-2 font-medium text-dark/90 dark:text-light/90 md:text-sm sm:text-xs sm:my-1">
          {summary}
        </p>
        <div className="mt-2 gap-3 flex items-center">
          <Link
            href={link}
            target="_self"
            className="rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold
             hover:bg-light hover:text-dark border-2 border-solid dark:bg-light
              dark:text-dark border-transparent hover:border-dark hover:dark:bg-dark
              hover:dark:text-light hover:dark:border-light sm:px-4 sm:text-base"
          >
            Bestill time
          </Link>
          <Link
            href={link2}
            target="_blank"
            className="flex items-center  text-dark p-1 rounded-lg text-lg font-semibold border-2 border-solid border-dark
              dark:bg-dark dark:text-light dark:border-light sm:text-base
          "
          >
            Sjekk Frist <LinkArrow className={"w-4 h-auto ml-1"} />
          </Link>
        </div>
      </div>
    </article>
  );
};

const Service = ({ title, summary, img, link }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]" />
      <div className="w-full overflow-hidden rounded-lg ">
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          priority={true}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </div>

      <div className="w-full flex flex-col items-start justify-between mt-2">
        <div>
          <h2 className="my-1 w-full text-left text-2xl font-bold text-blue-800 dark:text-blue-500 lg:text-xl md:text-lg">
            {title}
          </h2>
        </div>
        <div>
          <p className="my-2 font-medium text-dark/90 dark:text-light/90 md:text-sm sm:text-xs md:my-0">
            {summary}
          </p>
        </div>
        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target="_self"
            className="text-lg font-semibold underline md:text-base"
          >
            Bestill
          </Link>
        </div>
      </div>
    </article>
  );
};

const Tjenester = () => {
  return (
    <>
      <Head>
        <title>Vang Auto | Tjenester</title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-cener justify-center dark:text-light">
        <Layout className="pt-10">
          <AnimatedText
            text="Tjenester"
            className="mb-2 sm:mb-3 xs:mb-1 sm:!text-6xl xs:!text-4xl"
          />
          <p className=" font-extrabold capitalize text-lg mt-6 md:mt-3 text-center sm:mt-2 sm:mb-3 text-dark lg:text-md md:text-sm sm:text-xs dark:text-light">
            {" "}
            EU-kontroll - Reparasjon/Service - AC-Service - Firehjulskontroll -
            Dekkskift/dekkhotell - Flushing Og Oljeskift - Karosseri Og
            Frontrute
          </p>
          <p className="font-semibold  text-lg mb-6 md:mb-3 mt-2 md:mt-1 text-center sm:hidden text-dark lg:text-base md:text-sm sm:text-xs dark:text-light">
            {" "}
            Vi utfører service og reparasjoner på bilen din uansett bilmerke. Vi
            tar også alle El- og hybridbiler. Bileiere velger selv hvilket
            verksted de vil benytte seg av for kontroller, reparasjoner og
            vedlikehold. Velger du oss foran et merkeverksted, beholder du de
            samme garantiene og kvaliteten, men prisen kan være litt
            hyggeligere.
          </p>

          <div className="grid grid-cols-12  gap-24 gap-y-28 xl:gap-x-16 lg:gap-x-8 md:gap-y-16 sm:gap-y-12 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedService
                title="EU-Kontroll"
                img={EUimage}
                summary="Vi utfører lovpålagt EU-Kontroll på alle biler, varebiler og lette lastebiler. Vi kan også utføre EU kontroll på bobiler.
                 Det er bileieren sin plikt å få denne utført tidsnok. Du kan sjekke kontrollfristen for din bil ved å følge lenken under."
                link="/bestilltime"
                type="Rutinemessig kontroll"
                link2={
                  "https://www.vegvesen.no/kjoretoy/eie-og-vedlikeholde/eu-kontroll/kontrollfrist/"
                }
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Service
                title="Reparasjon/Service"
                img={serviceimage}
                link="/bestilltime"
                summary="I vårt verksted utfører vi reparasjoner og service på alle person- og varebiler, 
                herunder også bobiler. I tillegg er vi serviceforhandler for Iveco vare- og lastebiler. 
                Vi har dyktige mekanikere som gjør sitt ytterste for at kjøretøyet ditt skal bli best mulig ivaretatt, og du beholder garantien på bilen din."
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Service
                title="AC-Service"
                img={acimage}
                link="/bestilltime"
                summary="Aircondition eller Klimaanlegg er nå standard i alle moderne biler og bør få 
                regelmessig kontroll for å sikre optimal drift og lang levetid. Stabil temperatur og fuktighet 
                er viktig for bilførerens konsentrasjon, yteevne og trivsel. Vi anbefaler kontroll og service på klimaanlegget hvert år."
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Service
                title="Firehjulskontroll"
                img={hjulimage}
                link="/bestilltime"
                summary="Vi utfører firehjulskontroll på alle vare- og personbiler. Er hjulstillingen på bilen din skjev eller feil, kan ett eller flere av dekkene få en skjev belastning.
                Dette kan i løpet av kort tid slite ut de berørte dekkene, og bli dyrt i lengden. Sjekk derfor hjulstillingen om du er usikker. 
                Vi har et moderne 3D hjul-innstillingsapparat for denne jobben, som sikrer høy presisjon."
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Service
                title="Dekkskift/Dekkhotell"
                img={dekkimage}
                link="/bestilltime"
                summary="Vi skifter dekkene, vasker de grundig, og oppbevarer de for deg gjennom sesongen. Vi går også 
                over dekkenes tilstand, og ser at de er i forsvarlig stand. Dersom det skulle vise seg at de begynner å bli såpass slitte at de 
                ikke holder ut neste sesong, gir vi deg beskjed om dette, og kan tilby gode priser på et bredt utvalg av dekk gjennom vår avtale med Dekkpartner."
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Service
                title="Flushing Av Girkasse"
                img={oljeimage}
                link="/bestilltime"
                summary="De fleste nyere biler er utstyrt med en automat girkasse. For å opprettholde girkassens normale funksjon,
                er det anbefalt å flushe girkassen ca. hver 60 000 kilometer, men de enkelte produsentene har ulike anbefalinger. 
                Denne prosessen innebærer at vi tømmer girkassen for gammel girolje ved å spyle den innvendig, og deretter fyller på ny. "
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Service
                title="Karosseri Og Frontrute"
                img={karosseriimage}
                link="/bestilltime"
                summary="Hos oss er det mulig å utføre flere typer karosserireparasjoner. Dette innebærer blant annet at vi kan rette
                ut bulker i karosseriet på bilen din. Rustskader på bilen er et vanlig problem, og dette kan vi reparere for deg. Vi utfører også reparasjon
                av steinsprutskader i frontrute. Ønsker du å bytte hele frontruten kan vi også gjøre dette."
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};
export default Tjenester;
