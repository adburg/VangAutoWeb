import React from "react";
import Layout from "./Layout";
import Link from "next/link";
import Image from "next/image";
import miljoPic from "../../public/images/miljo/miljofyrtaarn.webp";
import { BUSINESS, EMAIL_HREF, MAPS_URL, PHONE_HREF } from "../lib/business";

const FOOTER_LINKS = [
  { href: "/tjenester", label: "Tjenester" },
  { href: "/artikler", label: "Artikler" },
  { href: "/omoss", label: "Om oss" },
  { href: "/kontaktoss", label: "Kontakt oss" },
  { href: BUSINESS.bookingPath, label: "Bestill time" },
  { href: "/cookies", label: "Informasjonskapsler" }
];

const PROFILE_LINKS = [
  { href: BUSINESS.profiles.google, label: "Vang Auto på Google" },
  { href: BUSINESS.profiles.facebook, label: "Vang Auto på Facebook" }
].filter(({ href }) => href);

// Every column shares these, so headings line up and the grid stays symmetric.
const columnClass = "flex flex-col items-center text-center";
const headingClass =
  "mb-4 text-base font-bold uppercase tracking-wide text-dark/75 dark:text-light/75";
const listClass = "space-y-1";
const linkClass = "underline underline-offset-2 hover:text-dark/75 dark:hover:text-light/75";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light sm:text-base">
      <Layout className="!py-12 lg:!py-10">
        <div className="grid grid-cols-4 gap-10 lg:grid-cols-2 lg:gap-y-12 sm:grid-cols-1">
          <div className={columnClass}>
            <h2 className={headingClass}>{BUSINESS.legalName}</h2>
            <address className={`not-italic ${listClass}`}>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:underline"
              >
                {BUSINESS.address.street}
                <br />
                {BUSINESS.address.postalCode} {BUSINESS.address.locality}
              </a>
              <a href={PHONE_HREF} className={`block ${linkClass}`}>
                {BUSINESS.phone.display}
              </a>
              <a href={EMAIL_HREF} className={`block ${linkClass}`}>
                {BUSINESS.email}
              </a>
            </address>
          </div>

          <div className={columnClass}>
            <h2 className={headingClass}>Åpningstider</h2>
            <ul className={listClass}>
              <li>{BUSINESS.openingHours.display}</li>
              <li>{BUSINESS.openingHours.closedDisplay}</li>
            </ul>
            {PROFILE_LINKS.length > 0 && (
              <ul className={`mt-4 ${listClass}`}>
                {PROFILE_LINKS.map(({ href, label }) => (
                  <li key={href}>
                    <a href={href} target="_blank" rel="noopener noreferrer" className={linkClass}>
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <nav aria-label="Bunntekst" className={columnClass}>
            <h2 className={headingClass}>Snarveier</h2>
            <ul className={listClass}>
              {FOOTER_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className={linkClass}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className={columnClass}>
            <h2 className={headingClass}>Miljøfyrtårn</h2>
            <Link href="/miljo" className="group flex flex-col items-center">
              <Image
                src={miljoPic}
                alt="Miljøfyrtårn-logo"
                className="h-auto w-32 lg:w-28 sm:w-24"
                sizes="128px"
              />
              <span className={`mt-3 ${linkClass}`}>Les om miljøarbeidet</span>
            </Link>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center gap-1 border-t border-dark/20 pt-6 text-center text-base dark:border-light/20">
          <span>
            &copy; {year} {BUSINESS.legalName}
          </span>
          <span className="flex items-center">
            Skapt av
            <span className="px-1 text-2xl text-dark dark:text-light">&#174;</span>
            <Link href="https://bergetconsulting.no" target={"_blank"} className={linkClass}>
              Berget Consulting
            </Link>
          </span>
        </div>
      </Layout>
    </footer>
  );
};

export default Footer;
