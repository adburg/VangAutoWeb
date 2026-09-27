import AnimatedText from "../components/AnimatedText";
import Layout from "../components/Layout";
import MapEmbed from "../components/MapEmbed";
import Seo from "../components/Seo";
import React from "react";
import tlfPic from "../../public/images/contact/phoneicon.png";
import mailPic from "../../public/images/contact/mailicon.png";
import addressPic from "../../public/images/contact/addressicon.png";
import openingPic from "../../public/images/contact/opening.png";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "../components/ContactForm";
import {
  BUSINESS,
  EMAIL_HREF,
  FULL_ADDRESS,
  MAPS_URL,
  PHONE_HREF
} from "../lib/business";

const ContactCard = ({ icon, heading, children }) => {
  return (
    <div
      className="flex flex-col items-center justify-center
      rounded-3xl border-2 border-solid border-dark bg-light p-6 relative
      dark:bg-dark dark:border-light w-full h-full"
    >
      <div className="absolute top-0 -right-3 -z-10 w-[103%] h-[104%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light" />
      {/* The icons are decorative; the heading says what the card is. */}
      <Image src={icon} alt="" className="w-16 h-auto dark:invert" />
      <h2 className="font-bold text-lg my-4">{heading}</h2>
      <div className="text-md text-center font-medium text-dark dark:text-light">
        {children}
      </div>
    </div>
  );
};

const Kontaktoss = () => {
  return (
    <>
      <Seo
        title="Kontakt og åpningstider"
        description="Kontakt Vang Auto i Vindholvegen 1, 2324 Vang På Hedmark. Ring 62 59 57 33 eller send e-post. Åpent mandag til fredag 07.00–16.00, like utenfor Hamar."
        path="/kontaktoss"
      />
      <main className="w-full flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-10">
          <AnimatedText
            text="Kontakt Vang Auto"
            className="mb-6 !normal-case sm:!text-6xl xs:!text-4xl"
          />
          <p className="mx-auto mb-12 max-w-3xl text-center text-lg font-medium md:text-base">
            Verkstedet ligger like utenfor Hamar, med kort vei fra Løten og Elverum.
            Ring, send e-post eller bruk skjemaet. Vil du bestille en jobb, kan du
            bruke{" "}
            <Link href={BUSINESS.bookingPath} className="font-semibold underline underline-offset-2">
              bestillingsskjemaet
            </Link>
            .
          </p>
          <div className="grid grid-cols-10 gap-12 sm:gap-8">
            <div
              className="col-span-3 gap-8 flex flex-col items-center
                 justify-center h-full sm:order-2 sm:col-span-10 lg:col-span-5"
            >
              <ContactCard icon={addressPic} heading="Adresse">
                <p>{BUSINESS.legalName}</p>
                <p>{FULL_ADDRESS}</p>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block underline"
                >
                  Veibeskrivelse i Google Maps
                </a>
              </ContactCard>
              <ContactCard icon={mailPic} heading="E-post">
                <a href={EMAIL_HREF} className="underline">
                  {BUSINESS.email}
                </a>
              </ContactCard>
            </div>
            <div
              className="col-span-3 gap-8 relative flex flex-col items-center justify-center h-full
               sm:order-1 sm:col-span-10 lg:col-span-5"
            >
              <ContactCard icon={openingPic} heading="Åpningstider">
                <p>{BUSINESS.openingHours.display}</p>
                <p>{BUSINESS.openingHours.closedDisplay}</p>
              </ContactCard>
              <ContactCard icon={tlfPic} heading="Telefon">
                <a href={PHONE_HREF} className="underline">
                  {BUSINESS.phone.display}
                </a>
              </ContactCard>
            </div>
            <div
              className="col-span-4 lg:col-span-10 justify-center items-center
              sm:order-3 rounded-3xl border-2 border-solid border-dark bg-light
              p-4 lg:p-8 sm:p-2 relative dark:bg-dark dark:border-light w-full h-full"
            >
              <div className="absolute top-0 -right-2 -z-10 w-[101%] h-[102%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light" />
              <ContactForm />
            </div>
          </div>

          <section className="mt-24 md:mt-16">
            <h2 className="mb-6 text-4xl font-bold md:text-3xl">Finn fram til verkstedet</h2>
            <MapEmbed />
          </section>
        </Layout>
      </main>
    </>
  );
};

export default Kontaktoss;
