import AnimatedText from "../components/AnimatedText";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import React from "react";
import tlfPic from "../../public/images/contact/phoneicon.png";
import mailPic from "../../public/images/contact/mailicon.png";
import addressPic from "../../public/images/contact/addressicon.png";
import openingPic from "../../public/images/contact/opening.png";
import Image from "next/image";
import ContactForm from "../components/ContactForm";
import { BUSINESS, PHONE_HREF } from "../lib/business";

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
            text="Kontakt Oss"
            className="mb-12 sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          {/** MAIN */}
          <div className="grid grid-cols-10 gap-12 sm:gap-8">
            {/** LEFT COLUMN */}
            <div
              className="col-span-3 gap-8 flex flex-col items-center 
                 justify-center h-full sm:order-2 sm:col-span-10 lg:col-span-5"
            >
              <div
                className="flex flex-col items-center justify-center 
                rounded-3xl border-2 border-solid border-dark bg-light p-6 relative
              dark:bg-dark dark:border-light w-full h-full"
              >
                <div className="absolute top-0 -right-3 -z-10 w-[103%] h-[104%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light" />

                <Image
                  src={addressPic}
                  alt="phone"
                  priority={true}
                  className="w-16 h-auto dark:invert"
                />
                <p className="font-bold text-lg my-4">Adresse</p>
                <p className="text-md font-medium text-center text-dark dark:text-light">
                  Vindholvegen 1 - 2324 Vang På Hedmark
                </p>
              </div>
              <div
                className="flex flex-col items-center justify-center 
                rounded-3xl border-2 border-solid border-dark bg-light p-6 relative
              dark:bg-dark dark:border-light w-full h-full"
              >
                <div className="absolute top-0 -right-3 -z-10 w-[103%] h-[104%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light" />

                <Image
                  src={mailPic}
                  alt="phone"
                  priority={true}
                  className="w-16 h-auto dark:invert"
                />
                <p className="font-bold text-lg my-4">E-mail</p>
                <a
                  href="mailto:post@vangauto.no"
                  target={"_self"}
                  className="text-md font-medium text-dark underline dark:text-light"
                >
                  post@vangauto.no
                </a>
              </div>
            </div>
            {/** MID COLUMN */}
            <div
              className="col-span-3 gap-8 relative flex flex-col items-center justify-center h-full  
               sm:order-1 sm:col-span-10 lg:col-span-5"
            >
              <div
                className="flex flex-col items-center justify-center 
                rounded-3xl border-2 border-solid border-dark bg-light p-6 relative
              dark:bg-dark dark:border-light w-full h-full"
              >
                <div className="absolute top-0 -right-3 -z-10 w-[103%] h-[104%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light" />

                <Image
                  src={openingPic}
                  alt="phone"
                  priority={true}
                  className="w-16 h-auto dark:invert"
                />
                <p className="font-bold text-lg my-4">Åpningstider</p>
                <p className="text-md text-center font-medium text-dark dark:text-light">
                  Man-Fre: 07.00-16.00 | Lør-Søn: Stengt
                </p>
                <p className="text-md text-center font-medium text-dark dark:text-light"></p>
              </div>
              <div
                className="
                 flex flex-col items-center justify-center 
                 rounded-3xl border-2 border-solid border-dark bg-light p-6  relative
               dark:bg-dark dark:border-light w-full h-full"
              >
                <div className="absolute top-0 -right-3 -z-10 w-[103%] h-[104%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light" />

                <Image
                  src={tlfPic}
                  priority={true}
                  alt="phone"
                  className="w-16 h-auto dark:invert"
                />
                <p className="font-bold text-lg my-4">Ring Oss</p>
                <a
                  href={PHONE_HREF}
                  target={"_self"}
                  className="text-md font-medium capitalize text-dark underline dark:text-light"
                >
                  {BUSINESS.phone.display}
                </a>
              </div>
            </div>
            {/** RIGHT COLUMN */}
            <div
              className="col-span-4 lg:col-span-10 justify-center items-center 
              sm:order-3 rounded-3xl border-2 border-solid border-dark bg-light 
              p-4 lg:p-8 sm:p-2 relative dark:bg-dark dark:border-light w-full h-full"
            >
              <div className="absolute top-0 -right-2 -z-10 w-[101%] h-[102%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light" />
              <ContactForm />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default Kontaktoss;
