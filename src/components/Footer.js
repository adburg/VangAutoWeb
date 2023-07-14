import React from "react";
import Layout from "./Layout";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light sm:text-base">
      <Layout className="py-8 flex items-center justify-between lg:flex-col lg:py-6">
        <span>&copy; 2023 Copyright Vang Auto AS</span>
        <div className="flex items center pt-2">
          Skapt av
          <span className="text-dark dark:text-light text-2xl px-1">
            &#174;
          </span>
          <Link
            href="https://bergetconsulting.no"
            target={"_blank"}
            className="underline underline-offset-2"
          >
            Berget Consulting
          </Link>
        </div>
        <Link
          href="https://portfolio-c91b3.web.app"
          target={"_blank"}
          className="underline underline-offset-2"
        >
          Kontakt Utvikler
        </Link>
      </Layout>
    </footer>
  );
};

export default Footer;
