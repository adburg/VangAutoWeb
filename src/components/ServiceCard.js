import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { inSentence } from "../lib/text";

const FramerImage = motion(Image);


/**
 * Card linking to one service page. Used on /tjenester and on the front page;
 * `headingLevel` keeps the heading order right on each page.
 */
const ServiceCard = ({ service, headingLevel = "h2", priority = false }) => {
  const { url, name, summary, image, imageAlt, imageWidth, imageHeight } = service;
  const Heading = headingLevel;

  return (
    <article className="relative flex h-full w-full flex-col rounded-2xl border border-solid border-dark bg-light p-6 dark:border-light dark:bg-dark xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 h-[103%] w-[101%] rounded-[2rem] rounded-br-3xl bg-dark dark:bg-light md:-right-2 xs:h-[102%] xs:rounded-[1.5rem]" />
      <Link href={url} className="block aspect-[3/2] w-full overflow-hidden rounded-lg" tabIndex={-1}>
        <FramerImage
          src={image}
          alt={imageAlt}
          width={imageWidth}
          height={imageHeight}
          className="h-full w-full object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority={priority}
          sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw"
        />
      </Link>
      <Heading className="mt-4 text-2xl font-bold text-blue-800 dark:text-blue-500 lg:text-xl md:text-lg">
        <Link href={url} className="hover:underline">
          {name}
        </Link>
      </Heading>
      <p className="my-2 font-medium text-dark/90 dark:text-light/90 md:text-sm">{summary}</p>
      <Link href={url} className="mt-auto pt-2 text-lg font-semibold underline underline-offset-2 md:text-base">
        Les mer om {inSentence(name)}
      </Link>
    </article>
  );
};

export default ServiceCard;
