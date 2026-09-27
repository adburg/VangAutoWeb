import Link from "next/link";
import React from "react";
import AnimatedText from "../../components/AnimatedText";
import BookingCta from "../../components/BookingCta";
import Breadcrumbs from "../../components/Breadcrumbs";
import { LinkArrow } from "../../components/Icons";
import Layout from "../../components/Layout";
import Seo from "../../components/Seo";
import ServiceGrid from "../../components/ServiceGrid";
import { breadcrumbSchema } from "../../lib/schema";
import { getAllServices } from "../../lib/services";

const KONTROLLFRIST_URL =
  "https://www.vegvesen.no/kjoretoy/eie-og-vedlikeholde/eu-kontroll/kontrollfrist/";

const BREADCRUMBS = [
  { name: "Hjem", path: "/" },
  { name: "Tjenester", path: "/tjenester" }
];

const Tjenester = ({ services }) => {
  return (
    <>
      <Seo
        title="Verkstedtjenester i Hamar"
        description="Se alle tjenestene hos Vang Auto: EU-kontroll, service og reparasjon, AC-service, firehjulskontroll, dekkskift, karosseri og verksted for varebil og bobil."
        path="/tjenester"
        jsonLd={[breadcrumbSchema(BREADCRUMBS)]}
      />
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-10">
          <Breadcrumbs items={BREADCRUMBS} />
          <AnimatedText
            text="Tjenester for bil, varebil og bobil"
            className="mb-6 !normal-case sm:!text-5xl xs:!text-4xl"
          />
          <div className="mx-auto mb-12 max-w-3xl text-center text-lg font-medium text-dark dark:text-light md:text-base">
            <p>
              Hos Vang Auto får du service, reparasjon og kontroll på alle bilmerker,
              også elbil og hybrid. Verkstedet ligger like utenfor Hamar, med kort vei
              fra Løten og Elverum.
            </p>
            <p className="mt-3">
              Du står fritt til å velge verksted. Nybilgarantien gjelder som før når
              arbeidet utføres og dokumenteres etter produsentens krav.
            </p>
            <p className="mt-3">
              Usikker på når bilen skal på EU-kontroll?{" "}
              <Link
                href={KONTROLLFRIST_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center font-semibold underline underline-offset-2"
              >
                Sjekk fristen hos Statens vegvesen
                <LinkArrow className="ml-1 h-auto w-4" />
              </Link>
            </p>
          </div>

          <ServiceGrid services={services} headingLevel="h2" priorityCount={3} />

          <BookingCta
            className="mx-auto mt-36 max-w-3xl md:mt-24"
            text="Fyll ut skjemaet med registreringsnummer og hva du trenger hjelp til, så tar vi kontakt for å avtale tidspunkt."
          />
        </Layout>
      </main>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: {
      services: await getAllServices()
    }
  };
}

export default Tjenester;
