import Image from "next/image";
import Link from "next/link";
import React from "react";
import mechanicPic from "../../public/images/profile/mechanic-animated.png";
import mecaIveco from "../../public/images/svgs/meca-iveco.png";
import AnimatedText from "../components/AnimatedText";
import BookingCta from "../components/BookingCta";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import ServiceCard from "../components/ServiceCard";
import Spinner from "../components/Spinner";
import { getAllArticles } from "../lib/articles";
import {
  BUSINESS,
  EMAIL_HREF,
  FULL_ADDRESS,
  MAPS_URL,
  PHONE_HREF
} from "../lib/business";
import { formatNorwegianDate } from "../lib/dates";
import { autoRepairSchema, websiteSchema } from "../lib/schema";
import { getAllServices } from "../lib/services";

const LATEST_ARTICLE_COUNT = 3;

const VALUE_POINTS = [
  {
    heading: "Fritt verkstedvalg",
    text: "Du velger verksted selv, også når bilen er ny. Nybilgarantien gjelder som før når arbeidet utføres og dokumenteres etter produsentens krav."
  },
  {
    heading: "MECA-verksted",
    text: "Vang Auto er et offentlig godkjent MECA-verksted. Arbeidet dokumenteres, og delene holder original kvalitet. Ved service får du 12 måneders MECA Veihjelp inkludert, uten egenandel."
  },
  {
    heading: "Dekkpartner",
    text: "Som Dekkpartner har Vang Auto et bredt utvalg av dekk og felger. Du kan også bestille på dekkpartner.no og få dem montert på verkstedet."
  },
  {
    heading: "Elbil, varebil og Iveco",
    text: "Verkstedet er elbilsertifisert gjennom MECA, Iveco-serviceforhandler og flåteverksted. Varebil, bobil og lastebil inntil 7,5 tonn tas også inn."
  }
];

const buttonClass = `inline-flex items-center rounded-lg border-2 border-solid border-transparent bg-dark px-6 py-2.5
  text-lg font-semibold text-light hover:border-dark hover:bg-light hover:text-dark dark:bg-light dark:text-dark
  hover:dark:border-light hover:dark:bg-dark hover:dark:text-light md:px-4 md:py-2 md:text-base`;

export default function Home({ services, latestArticles }) {
  return (
    <>
      <Seo
        title="Bilverksted like utenfor Hamar"
        description="Vang Auto er et MECA-verksted like utenfor Hamar. Vi tar service, reparasjon, EU-kontroll og dekkskift på bil, varebil og bobil. Over 60 år i bransjen."
        path="/"
        jsonLd={[autoRepairSchema(), websiteSchema()]}
      />

      <main className="w-full text-dark dark:text-light">
        <section className="relative flex min-h-screen w-full items-center">
          <Layout className="pt-0 xl:-mt-32">
            <div className="flex w-full items-center justify-between lg:flex-col">
              <div className="w-1/2 md:w-full">
                <Image
                  src={mechanicPic}
                  alt="Tegnet mekaniker i kjeledress som holder en fastnøkkel i hver hånd"
                  className="h-auto w-full lg:hidden md:inline-block md:w-full"
                  priority={true}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="flex w-1/2 flex-col items-center self-center lg:w-full lg:text-center">
                <AnimatedText
                  text="Bilverkstedet like utenfor Hamar"
                  className="!text-7xl !text-left !normal-case xl:!text-6xl lg:!text-center lg:mb-2 md:mb-0 md:!text-5xl sm:!text-4xl"
                />
                <p className="my-4 text-lg font-medium md:text-base">
                  Vang Auto tar service, reparasjon og EU-kontroll på personbil,
                  varebil og bobil av alle merker. Verkstedet er MECA-verksted,
                  Iveco-serviceforhandler og Dekkpartner, med over 60 år i bransjen.
                </p>
                <div className="mt-2 flex items-center self-start lg:self-center">
                  <Link href={BUSINESS.bookingPath} className={buttonClass}>
                    Bestill time
                  </Link>
                  <a
                    href={PHONE_HREF}
                    className="ml-6 text-lg font-medium text-dark underline dark:text-light md:text-base"
                  >
                    {BUSINESS.phone.display}
                  </a>
                </div>
              </div>
            </div>
          </Layout>
          <Spinner />
          <div className="absolute right-8 bottom-8 inline-block w-36 md:hidden">
            <Image src={mecaIveco} alt="Logoene til MECA og Iveco" className="h-auto w-full" />
          </div>
        </section>

        <Layout className="!pt-0">
          <section aria-labelledby="tjenester-overskrift">
            <h2
              id="tjenester-overskrift"
              className="mb-4 text-center text-5xl font-bold md:text-4xl xs:text-3xl"
            >
              Dette hjelper vi deg med
            </h2>
            <p className="mx-auto mb-12 max-w-3xl text-center text-lg font-medium md:text-base">
              Fra EU-kontroll og dekkskift til karosseri og reparasjon av varebil.
              Hver tjeneste har en egen side med det du trenger å vite.
            </p>
            <ul className="grid grid-cols-3 gap-12 gap-y-16 xl:grid-cols-2 xl:gap-x-10 md:grid-cols-1 md:gap-y-12">
              {services.map((service) => (
                <li key={service.slug}>
                  <ServiceCard service={service} headingLevel="h3" />
                </li>
              ))}
            </ul>
            <div className="mt-12 text-center">
              <Link href="/tjenester" className="text-lg font-semibold underline underline-offset-2">
                Se alle tjenestene
              </Link>
            </div>
          </section>

          <section className="mt-32 grid grid-cols-2 gap-16 lg:grid-cols-1 lg:gap-10 md:mt-20">
            <div>
              <h2 className="text-4xl font-bold md:text-3xl">Et lokalt verksted med lang erfaring</h2>
              <p className="mt-4 text-lg font-medium md:text-base">
                Verkstedet ligger langs riksvei 25, like utenfor Hamar, med kort vei
                fra Løten og Elverum. Vang Auto har over 60 år i bransjen og har egen
                karosseriavdeling. Det er god plass til parkering.
              </p>
              <p className="mt-4 text-lg font-medium md:text-base">
                Vi i Vang Auto tar imot personbiler, varebiler og bobiler av alle
                merker. Du kan levere bilen til service, dekkskift og EU-kontroll på
                samme sted. Les mer{" "}
                <Link href="/omoss" className="font-semibold underline underline-offset-2">
                  om verkstedet
                </Link>{" "}
                og{" "}
                <Link href="/miljo" className="font-semibold underline underline-offset-2">
                  miljøarbeidet som Miljøfyrtårn
                </Link>
                .
              </p>
            </div>
            <ul className="grid grid-cols-2 gap-6 sm:grid-cols-1">
              {VALUE_POINTS.map(({ heading, text }) => (
                <li
                  key={heading}
                  className="rounded-2xl border-2 border-solid border-dark p-5 dark:border-light"
                >
                  <h3 className="text-xl font-bold text-blue-800 dark:text-blue-500">{heading}</h3>
                  <p className="mt-2 font-medium md:text-sm">{text}</p>
                </li>
              ))}
            </ul>
          </section>

          {latestArticles.length > 0 && (
            <section className="mt-32 md:mt-20" aria-labelledby="artikler-overskrift">
              <h2
                id="artikler-overskrift"
                className="mb-10 text-center text-5xl font-bold md:text-4xl xs:text-3xl"
              >
                Siste artikler
              </h2>
              <ul className="grid grid-cols-3 gap-10 lg:grid-cols-1">
                {latestArticles.map((article) => (
                  <li
                    key={article.slug}
                    className="flex flex-col rounded-2xl border border-solid border-dark p-4 dark:border-light"
                  >
                    <Link href={article.url} className="block aspect-[3/2] w-full overflow-hidden rounded-lg" tabIndex={-1}>
                      <Image
                        src={article.image}
                        alt={article.imageAlt}
                        width={article.imageWidth}
                        height={article.imageHeight}
                        sizes="(max-width: 1023px) 100vw, 33vw"
                        className="h-full w-full object-cover"
                      />
                    </Link>
                    <h3 className="mt-4 text-xl font-bold">
                      <Link href={article.url} className="hover:underline">
                        {article.title}
                      </Link>
                    </h3>
                    <span className="mt-auto pt-2 font-semibold text-blue-800 dark:text-blue-500">
                      {formatNorwegianDate(article.date)}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-10 text-center">
                <Link href="/artikler" className="text-lg font-semibold underline underline-offset-2">
                  Alle artikler
                </Link>
              </div>
            </section>
          )}

          <section className="mt-32 grid grid-cols-2 gap-16 lg:grid-cols-1 lg:gap-10 md:mt-20">
            <div>
              <h2 className="text-4xl font-bold md:text-3xl">Kontakt og åpningstider</h2>
              <dl className="mt-6 space-y-4 text-lg font-medium md:text-base">
                <div>
                  <dt className="font-bold">Adresse</dt>
                  <dd>
                    {BUSINESS.legalName}, {FULL_ADDRESS}.{" "}
                    <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">
                      Vis i kart
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-bold">Telefon</dt>
                  <dd>
                    <a href={PHONE_HREF} className="underline underline-offset-2">
                      {BUSINESS.phone.display}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-bold">E-post</dt>
                  <dd>
                    <a href={EMAIL_HREF} className="underline underline-offset-2">
                      {BUSINESS.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-bold">Åpningstider</dt>
                  <dd>
                    {BUSINESS.openingHours.display}. {BUSINESS.openingHours.closedDisplay}.
                  </dd>
                </div>
              </dl>
            </div>
            <BookingCta
              className="self-center"
              text="Fyll ut skjemaet med registreringsnummer og hva du trenger hjelp til, så tar vi kontakt for å avtale tidspunkt."
            />
          </section>
        </Layout>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const [services, articles] = await Promise.all([getAllServices(), getAllArticles()]);

  return {
    props: {
      services,
      latestArticles: articles
        .slice(0, LATEST_ARTICLE_COUNT)
        .map(({ slug, url, title, date, image, imageAlt, imageWidth, imageHeight }) => ({
          slug,
          url,
          title,
          date,
          image,
          imageAlt,
          imageWidth,
          imageHeight
        }))
    }
  };
}
