import React from "react";
import Layout from "./Layout";
import Link from "next/link";
import Image from "next/image";
import miljoPic from "../../public/images/miljo/miljofyrtaarn.webp";

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
          href="/cookies"
          target={"_self"}
          className="underline underline-offset-2"
        >
          Cookie Policy
        </Link>
        <Link
          href="/miljo"
          target={"_self"}
          className="flex flex-col items-center justify-center pt-4"
        >
          <Image src={miljoPic} alt="phone" priority={true} className="w-14" />
          <p className="underline underline-offset-2">Miljøarbeid</p>
        </Link>
      </Layout>
    </footer>
  );
};

export default Footer;
