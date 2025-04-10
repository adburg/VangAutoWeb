import Layout from "../components/Layout";
import Head from "next/head";
import mechanicPic from "../../public/images/profile/mechanic-animated.png";
import Image from "next/image";
import AnimatedText from "../components/AnimatedText";
import Link from "next/link";
import Spinner from "../components/Spinner";
import mecaIveco from "../../public/images/svgs/meca-iveco.png";

export default function Home() {
  return (
    <>
      <Head>
        <title>Vang Auto</title>
        <meta
          name="description"
          content="Vang Auto - lett tilgjengelig fra både Hamar,
                Løten og Elverum. Reparasjon av biler, bobiler og
                lette lastebiler."
        />
        <meta
          property="og:image"
          content="https://vangauto.no/images/articles/mechanic-animated.png"
        />
      </Head>

      <main className="flex items-center text-dark w-full min-h-screen dark:text-light">
        <Layout className="pt-0 xl:-mt-32">
          <div className="flex items-center  justify-between w-full lg:flex-col">
            <div className="w-1/2 md:w-full">
              <Image
                src={mechanicPic}
                alt="VangAuto"
                className="w-full h-auto lg:hidden md:inline-block md:w-full"
                priority={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                text="Vang Auto bilverksted"
                className="!text-8xl !text-left xl:!text-6xl lg:!text-center lg:!text-7xl lg:mb-2 md:mb-0 md:!text-5xl sm:!text-3xl"
              />
              <p className="my-4 text-base font-medium md:text-sm">
                Vang Auto er et bilverksted lett tilgjengelig fra både Hamar,
                Løten og Elverum, som leverer reparasjon av biler, bobiler og
                lette lastebiler. Vi er Iveco- og Mecaverksted, samt
                Dekkpartner, og har over 60 års erfaring i bransjen.
              </p>
              <div className="flex items-center self-start mt-2 lg:self-center">
                <Link
                  href="/bestilltime"
                  target={"_self"}
                  className="flex items-center bg-dark text-light p-2.5
                   px-6 rounded-lg text-lg font-semibold hover:bg-light
                   hover:text-dark border-2 border-solid border-transparent
                    hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark 
                   hover:dark:text-light hover:dark:border-light md:p-2 md:px-4 md:text-base"
                >
                  Bestill Time
                </Link>
                <a
                  href={`tel:${+4762595733}`}
                  target={"_self"}
                  className="ml-6 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base"
                >
                  +47 625 95 733
                </a>
              </div>
            </div>
          </div>
        </Layout>
        <Spinner />
        <div className="absolute right-8 bottom-8 inline-block w-36 md:hidden">
          <Image
            src={mecaIveco}
            alt="Vang Auto"
            className="w-full h-auto "
          ></Image>
        </div>
      </main>
    </>
  );
}
