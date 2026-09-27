import Link from "next/link";
import React from "react";
import AnimatedText from "../components/AnimatedText";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

const LINKS = [
  { href: "/", label: "Til forsiden" },
  { href: "/tjenester", label: "Se tjenestene våre" },
  { href: "/artikler", label: "Les artiklene" },
  { href: "/bestilltime", label: "Bestill time" }
];

const NotFound = () => {
  return (
    <>
      <Seo title="Siden finnes ikke" noindex />
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Vi fant ikke siden"
            className="mb-6 sm:!text-6xl xs:!text-4xl"
          />
          <p className="text-center text-lg font-medium mb-10 md:text-base">
            Lenken kan være gammel, eller adressen kan være skrevet feil. Her er
            noen steder du kan gå videre.
          </p>
          <ul className="flex flex-wrap items-center justify-center gap-4">
            {LINKS.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="inline-block rounded-lg border-2 border-solid border-dark px-6 py-2.5 text-lg font-semibold
                  hover:bg-dark hover:text-light dark:border-light hover:dark:bg-light hover:dark:text-dark md:text-base"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </Layout>
      </main>
    </>
  );
};

export default NotFound;
