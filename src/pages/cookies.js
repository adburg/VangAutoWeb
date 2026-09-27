import Seo from "../components/Seo";
import React from "react";
import Layout from "../components/Layout";
import AnimatedText from "../components/AnimatedText";
import { BUSINESS, EMAIL_HREF, PHONE_HREF } from "../lib/business";

const headingClass = "mt-4 font-bold text-xl xs:text-lg text-dark dark:text-light";
const textClass = "mb-2 font-medium text-dark xs:text-sm dark:text-light";
const listClass = "my-2 list-disc pl-6 font-medium text-dark xs:text-sm dark:text-light";

const cookies = () => {
  return (
    <>
      <Seo title="Informasjonskapsler" path="/cookies" noindex />

      <main className="flex w-full flex-col mb-16 items-center justify-center dark:text-light">
        <Layout className="pt-12 mt-8 flex items-center justify-center !p-4 !md:p-12 !lg:p-32 ">
          <div className="flex w-2/3 md:w-full flex-col mb-16 items-center ">
            <AnimatedText
              text="Informasjonskapsler på vangauto.no"
              className="mb-6 !text-3xl !normal-case"
            />
            <div className="items-center border border-solid rounded-br-3xl rounded-3xl border-dark bg-light p-12 md:p-4 dark:border-white dark:bg-dark">
              <div className="w-full flex flex-col items-start justify-between mt-2">
                <p className="my-2 font-bold text-dark dark:text-light xs:text-sm">
                  Dette er erklæringen om informasjonskapsler (cookies) for{" "}
                  {BUSINESS.legalName} på vangauto.no.
                </p>

                <h2 className={headingClass}>Hva er informasjonskapsler?</h2>
                <p className={textClass}>
                  Informasjonskapsler er små tekstfiler som lagres i nettleseren
                  din når du besøker et nettsted. Denne siden forklarer hvilke
                  informasjonskapsler vangauto.no bruker, hva de brukes til, og
                  hvordan du kan hindre at de lagres. Hvis du blokkerer dem, kan
                  enkelte funksjoner på nettstedet slutte å virke.
                </p>

                <h2 className={headingClass}>Hvordan vi bruker informasjonskapsler</h2>
                <p className={textClass}>
                  Vi bruker informasjonskapsler av grunnene som er beskrevet
                  nedenfor. Det finnes ofte ingen standard måte å slå dem av på
                  uten at funksjonene de støtter, også slutter å virke.
                </p>

                <h2 className={headingClass}>Slik slår du av informasjonskapsler</h2>
                <p className={textClass}>
                  Du kan hindre at informasjonskapsler lagres ved å endre
                  innstillingene i nettleseren din. Se hjelpesidene for nettleseren
                  din for hvordan du gjør det. Vær oppmerksom på at det kan påvirke
                  hvordan dette og andre nettsteder fungerer.
                </p>

                <h2 className={headingClass}>Informasjonskapsler vi setter</h2>
                <ul className={listClass}>
                  <li>Innstillinger for nettstedet</li>
                </ul>
                <p className={textClass}>
                  Nettstedet husker valgene dine, for eksempel lyst eller mørkt
                  tema og om du har godtatt informasjonskapsler. Da slipper du å
                  velge på nytt hver gang du kommer tilbake.
                </p>

                <h2 className={headingClass}>Informasjonskapsler fra tredjeparter</h2>
                <p className={textClass}>
                  I noen tilfeller bruker vi informasjonskapsler fra tredjeparter vi
                  stoler på. Disse kan du møte på nettstedet:
                </p>
                <ul className={listClass}>
                  <li>
                    Google Analytics, som hjelper oss å forstå hvordan nettstedet
                    brukes, slik at vi kan gjøre det bedre. Informasjonskapslene kan
                    for eksempel registrere hvor lenge du er på nettstedet og hvilke
                    sider du besøker. De settes bare hvis du har godtatt dem i
                    banneret.
                  </li>
                  <li>
                    Google Maps på kontaktsiden. Kartet lastes bare hvis du klikker
                    «Vis kart», og Google kan da lagre informasjonskapsler.
                  </li>
                </ul>
                <p className={textClass}>
                  Mer informasjon om informasjonskapslene til Google Analytics finner
                  du på Googles egne sider.
                </p>

                <h2 className={headingClass}>Mer informasjon</h2>
                <p className={textClass}>
                  Har du spørsmål om informasjonskapsler på nettstedet, kan du ta
                  kontakt med oss:
                </p>
                <ul className={listClass}>
                  <li>
                    Telefon:{" "}
                    <a href={PHONE_HREF} className="underline">
                      {BUSINESS.phone.display}
                    </a>
                  </li>
                  <li>
                    E-post:{" "}
                    <a href={EMAIL_HREF} className="underline">
                      {BUSINESS.email}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default cookies;
