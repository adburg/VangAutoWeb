import Head from "next/head";
import React from "react";
import Layout from "../components/Layout";
import AnimatedText from "../components/AnimatedText";

const cookies = () => {
  return (
    <>
      <Head>
        <title>Vang Auto | Cookies</title>
        <meta name="robots" content="noindex" />
      </Head>

      <main className="flex w-full flex-col mb-16 items-center justify-center dark:text-light">
        <Layout className="pt-12 mt-8 flex items-center justify-center !p-4 !md:p-12 !lg:p-32 ">
          <div className="flex w-2/3 md:w-full flex-col mb-16 items-center ">
            <AnimatedText
              text="Cookie Policy for Vang Auto
              "
              className="mb-6 !text-3xl !normal-case"
            />
            <div className="items-center border border-solid rounded-br-3xl rounded-3xl border-dark bg-light p-12 md:p-4 dark:border-white dark:bg-dark">
              <div className="w-full flex justify-center overflow-hidden rounded-lg "></div>

              <div className="w-full flex flex-col items-start justify-between mt-2">
                <p className="my-2 font-bold text-dark dark:text-light xs:text-sm">
                  This is the Cookie Policy for Vang Auto, accessible from
                  vangauto.no
                </p>
                <p className="mt-4 font-bold text-xl xs:text-lg text-dark dark:text-light">
                  What Are Cookies
                </p>
                <p className="mb-2 font-medium text-dark xs:text-sm dark:text-light">
                  As is common practice with almost all professional websites
                  this site uses cookies, which are tiny files that are
                  downloaded to your computer, to improve your experience. This
                  page describes what information they gather, how we use it and
                  why we sometimes need to store these cookies. We will also
                  share how you can prevent these cookies from being stored
                  however this may downgrade or 'break' certain elements of the
                  sites functionality.
                </p>
                <p className="mt-4 font-bold text-xl xs:text-lg text-dark dark:text-light">
                  How We Use Cookies
                </p>
                <p className="mb-2 font-medium text-dark xs:text-sm dark:text-light">
                  We use cookies for a variety of reasons detailed below.
                  Unfortunately in most cases there are no industry standard
                  options for disabling cookies without completely disabling the
                  functionality and features they add to this site. It is
                  recommended that you leave on all cookies if you are not sure
                  whether you need them or not in case they are used to provide
                  a service that you use.
                </p>
                <p className="mt-4 font-bold text-xl xs:text-lg text-dark dark:text-light">
                  Disabling Cookies
                </p>
                <p className="mb-2 font-medium text-dark xs:text-sm dark:text-light">
                  You can prevent the setting of cookies by adjusting the
                  settings on your browser (see your browser Help for how to do
                  this). Be aware that disabling cookies will affect the
                  functionality of this and many other websites that you visit.
                  Disabling cookies will usually result in also disabling
                  certain functionality and features of the this site. Therefore
                  it is recommended that you do not disable cookies.
                </p>
                <p className="mt-4 font-bold text-xl xs:text-lg text-dark dark:text-light">
                  The Cookies We Set
                </p>
                <li className="my-2 font-medium text-dark xs:text-sm dark:text-light">
                  Site preferences cookies
                </li>
                <p className="mb-2 font-medium text-dark xs:text-sm dark:text-light">
                  In order to provide you with a great experience on this site
                  we provide the functionality to set your preferences for how
                  this site runs when you use it. In order to remember your
                  preferences we need to set cookies so that this information
                  can be called whenever you interact with a page is affected by
                  your preferences.
                </p>
                <p className="mt-4 font-bold text-xl xs:text-lg text-dark dark:text-light">
                  Third party cookies
                </p>
                <p className="my-2 font-medium text-dark xs:text-sm dark:text-light">
                  In some special cases we also use cookies provided by trusted
                  third parties. The following section details which third party
                  cookies you might encounter through this site.
                </p>
                <li className="my-2 font-medium text-dark xs:text-sm dark:text-light">
                  This site uses Google Analytics which is one of the most
                  widespread and trusted analytics solution on the web for
                  helping us to understand how you use the site and ways that we
                  can improve your experience. These cookies may track things
                  such as how long you spend on the site and the pages that you
                  visit so we can continue to produce engaging content.
                </li>
                <p className="mb-2 font-medium text-dark xs:text-sm dark:text-light">
                  For more information on Google Analytics cookies, see the
                  official Google Analytics page.
                </p>
                <p className="mt-4 font-bold text-xl xs:text-lg text-dark dark:text-light">
                  More Information
                </p>
                <p className="my-2 font-medium text-dark xs:text-sm dark:text-light">
                  Hopefully that has clarified things for you and as was
                  previously mentioned if there is something that you aren't
                  sure whether you need or not it's usually safer to leave
                  cookies enabled in case it does interact with one of the
                  features you use on our site.
                </p>
                <p className="my-2 font-medium text-dark xs:text-sm dark:text-light">
                  However if you are still looking for more information then you
                  can contact us through one of our preferred contact methods:
                </p>
                <li className="mb-2 font-medium text-dark xs:text-sm dark:text-light">
                  Phone: +4762595733
                </li>
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default cookies;
