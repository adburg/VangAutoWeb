import React from "react";
import Layout from "./Layout";
import Link from "next/link";
import Image from "next/image";
import miljoPic from "../../public/images/miljo/miljofyrtaarn.webp";
import {
  BUSINESS,
  EMAIL_HREF,
  FULL_ADDRESS,
  MAPS_URL,
  PHONE_HREF
} from "../lib/business";

const FOOTER_LINKS = [
  { href: "/tjenester", label: "Tjenester" },
  { href: "/artikler", label: "Artikler" },
  { href: "/omoss", label: "Om oss" },
  { href: "/kontaktoss", label: "Kontakt oss" },
  { href: BUSINESS.bookingPath, label: "Bestill time" },
  { href: "/cookies", label: "Informasjonskapsler" }
];

const headingClass = "mb-3 text-base font-bold uppercase text-dark/75 dark:text-light/75";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light sm:text-base">
      <Layout className="!py-12 lg:!py-8">
        <div className="grid grid-cols-4 gap-10 lg:grid-cols-2 sm:grid-cols-1">
          <div>
            <h2 className={headingClass}>{BUSINESS.legalName}</h2>
            <address className="not-italic">
              <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="hover:underline">
                {FULL_ADDRESS}
              </a>
              <br />
              <a href={PHONE_HREF} className="underline underline-offset-2">
                {BUSINESS.phone.display}
              </a>
              <br />
              <a href={EMAIL_HREF} className="underline underline-offset-2">
                {BUSINESS.email}
              </a>
            </address>
          </div>

          <div>
            <h2 className={headingClass}>Åpningstider</h2>
            <p>{BUSINESS.openingHours.display}</p>
            <p>{BUSINESS.openingHours.closedDisplay}</p>
            {BUSINESS.profiles.google && (
              <a
                href={BUSINESS.profiles.google}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block underline underline-offset-2"
              >
                Vang Auto på Google
              </a>
            )}
            {BUSINESS.profiles.facebook && (
              <a
                href={BUSINESS.profiles.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 block underline underline-offset-2"
              >
                Vang Auto på Facebook
              </a>
            )}
          </div>

          <nav aria-label="Bunntekst">
            <h2 className={headingClass}>Snarveier</h2>
            <ul className="space-y-1">
              {FOOTER_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="underline underline-offset-2">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <Link href="/miljo" className="flex flex-col items-start">
              <Image
                src={miljoPic}
                alt="Miljøfyrtårn-logo"
                className="w-14"
                sizes="56px"
              />
              <span className="mt-2 underline underline-offset-2">Miljøarbeid</span>
            </Link>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-dark/20 pt-6 text-base dark:border-light/20">
          <span>
            &copy; {year} {BUSINESS.legalName}
          </span>
          <span className="flex items-center">
            Skapt av
            <span className="text-dark dark:text-light text-2xl px-1">&#174;</span>
            <Link
              href="https://bergetconsulting.no"
              target={"_blank"}
              className="underline underline-offset-2"
            >
              Berget Consulting
            </Link>
          </span>
        </div>
      </Layout>
    </footer>
  );
};

export default Footer;
