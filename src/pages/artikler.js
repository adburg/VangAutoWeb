import AnimatedText from "../components/AnimatedText";
import Layout from "../components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import article1 from "../../public/images/articles/feriebil.jpg";
import article2 from "../../public/images/articles/varebil.png";
import article3 from "../../public/images/articles/ac.jpg";
import article4 from "../../public/images/articles/sommerdekk.jpg";
import article5 from "../../public/images/articles/dekk.jpg";
import article6 from "../../public/images/articles/sekstito.jpg";
import article7 from "../../public/images/articles/femtiaar.jpg";
import article8 from "../../public/images/articles/dekkhotell.jpg";
import { motion, useMotionValue } from "framer-motion";

const FramerImage = motion(Image);

const MovingImg = ({ title, img, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);

  function handleMouse(event) {
    imgRef.current.style.display = "inline-block";
    x.set(event.pageX);
    y.set(-10);
  }

  function handleMouseLeave(event) {
    imgRef.current.style.display = "none";
    x.set(0);
    y.set(0);
  }

  return (
    <Link
      href={link}
      target="_self"
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className="text-xl font-semibold hover:underline">{title}</h2>
      <FramerImage
        style={{ x: x, y: y }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.4 } }}
        ref={imgRef}
        src={img}
        alt={title}
        className="w-96 z-10 h-auto hidden absolute rounded-lg md:!hidden"
      />
    </Link>
  );
};

const Article = ({ img, title, date, link }) => {
  return (
    <motion.li
      initial={{ y: 150 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      viewport={{ once: true }}
      className="relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light 
      text-dark first:mt-0 border border-solid border-dark border-r-4 border-b-4 dark:border-light dark:bg-dark dark:text-light sm:flex-col"
    >
      <MovingImg title={title} img={img} link={link} />
      <span className="text-blue-900 font-semibold pl-4 dark:text-blue-500 sm:self-start sm:pl-0 xs:text-sm sm:mt-1">
        {date}
      </span>
    </motion.li>
  );
};

const FeaturedArticle = ({ img, title, date, summary, link }) => {
  return (
    <li className="relative col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl dark:bg-dark dark:border-light">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light" />
      <Link
        target="_self"
        href={link}
        className="w-full inline-block cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority={true}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </Link>
      <Link href={link} target="_self">
        <h2 className="text-2xl font-bold my-2 text-dark dark:text-light mt-4 hover:underline xs:text-lg">
          {title}
        </h2>
      </Link>
      <p className="font-medium mb-2 text-dark/90 dark:text-light/90 xl:text-sm md:text-md">
        {summary}
      </p>
      <span className="text-blue-800 font-semibold dark:text-blue-500">
        {date}
      </span>
    </li>
  );
};

const Artikler = () => {
  return (
    <>
      <Head>
        <title>Vang Auto | Artikler</title>
        <meta name="description" content="any description" />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light">
        <Layout className="pt-10">
          <AnimatedText
            text="Artikler"
            className="mb-16 sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <ul className="grid grid-cols-2 gap-16 lg:gap-8 md:gap-y-16 md:grid-cols-1">
            <FeaturedArticle
              title="Ferieklar bil?"
              summary="Når sommeren kommer, er det viktig å forberede bilen din for varmere temperaturer og lengre kjøreturer. 
              Enten du skal på en lang ferie eller bare bruke bilen til daglig, kan en grundig sjekk og service på bilen sørge 
              for at den fungerer optimalt og gir en trygg og behagelig kjøreopplevelse. Hos Vang Auto tilbyr vi en rekke tjenester 
              for å gjøre bilen din klar for sommeren."
              date="6. Juni 2023"
              link="/blog/ferieklar"
              img={article1}
            />
            <FeaturedArticle
              title="Vi reparerer bobilen og varebilen din"
              summary="Vi har både utstyr, plass og kompetanse til å reparere og vedlikeholde bobiler og varebiler på inntil 7,5 tonn, 
              sier daglig leder Per Asbjørn Berget hos Vang Auto AS. Uansett hvor du skal med bobilen din, er det viktig at den blir tatt godt vare på. 
              Vi kan ta service, vedlikehold og reparasjoner på alle merker og modeller. Det samme gjelder selvsagt for varebiler, sier Berget."
              date="4. Oktober 2022"
              link="/blog/varebil"
              img={article2}
            />
          </ul>
          <h2 className="font-bold text-4xl w-full text-center my-16 mt-32">
            Flere artikler
          </h2>
          <ul>
            <Article
              title="Er ditt AC-anlegg klart for sommeren?"
              img={article3}
              date="9. Mai 2023"
              link="/blog/klima"
            />
            <Article
              title="Våren og sommerdekkene er rett rundt hjørnet"
              img={article4}
              date="20. Mars 2023"
              link="/blog/sommerdekk"
            />
            <Article
              title="Vi tar service på bilen din – også elbil
              "
              img={article5}
              date="13. September 2022"
              link="/blog/service"
            />
            <Article
              title="62 begivenhetsrike år"
              img={article6}
              date="30. Mai 2022"
              link="/blog/sekstitoaar"
            />
            <Article
              title="Femtiårsjubileum for en evigung mekanikerveteran
              "
              img={article7}
              date="28. Oktober 2021"
              link="/blog/femtiaar"
            />
            <Article
              title="Dekkhotell - bildekk på spa"
              img={article8}
              date="2. Oktober 2020"
              link="/blog/dekkhotell"
            />
          </ul>
        </Layout>
      </main>
    </>
  );
};

export default Artikler;
