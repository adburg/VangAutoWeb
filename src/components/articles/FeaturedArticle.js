import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { formatNorwegianDate } from "../../lib/dates";

const FramerImage = motion(Image);

/**
 * The large image card used for the two newest articles on /artikler.
 * Everything comes from the article's markdown frontmatter.
 *
 * The two cards sit side by side, so the card is a flex column with a
 * fixed-ratio image box and the date pushed to the bottom. That keeps the
 * image, the title and the date aligned across both cards no matter how tall
 * the source image or how long the excerpt is.
 */
const FeaturedArticle = ({ article }) => {
  const { title, excerpt, date, url, image, imageAlt, imageWidth, imageHeight } =
    article;

  return (
    <li className="relative col-span-1 w-full h-full flex flex-col p-4 bg-light border border-solid border-dark rounded-2xl dark:bg-dark dark:border-light">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light" />
      <Link
        target="_self"
        href={url}
        className="w-full block aspect-[3/2] cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={image}
          alt={imageAlt || title}
          width={imageWidth}
          height={imageHeight}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority={true}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </Link>
      <Link href={url} target="_self">
        <h2 className="text-2xl font-bold my-2 text-dark dark:text-light mt-4 hover:underline xs:text-lg min-h-[2lh]">
          {title}
        </h2>
      </Link>
      <p className="font-medium mb-4 text-dark/90 dark:text-light/90 xl:text-sm md:text-md">
        {excerpt}
      </p>
      <span className="mt-auto text-blue-800 font-semibold dark:text-blue-500">
        {formatNorwegianDate(date)}
      </span>
    </li>
  );
};

export default FeaturedArticle;
