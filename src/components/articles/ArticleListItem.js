import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { motion, useMotionValue } from "framer-motion";
import { formatNorwegianDate } from "../../lib/dates";

const FramerImage = motion(Image);

const MovingImg = ({ title, img, imgAlt, imgWidth, imgHeight, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);

  function handleMouse(event) {
    imgRef.current.style.display = "inline-block";
    x.set(event.pageX);
    y.set(-10);
  }

  function handleMouseLeave() {
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
        alt={imgAlt || title}
        width={imgWidth}
        height={imgHeight}
        className="w-96 z-10 h-auto hidden absolute rounded-lg md:!hidden"
      />
    </Link>
  );
};

/**
 * One row in the "Flere artikler" list on /artikler.
 */
const ArticleListItem = ({ article }) => {
  const { title, date, url, image, imageAlt, imageWidth, imageHeight } = article;

  return (
    <motion.li
      initial={{ y: 150 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      viewport={{ once: true }}
      className="relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light
      text-dark first:mt-0 border border-solid border-dark border-r-4 border-b-4 dark:border-light dark:bg-dark dark:text-light sm:flex-col"
    >
      <MovingImg
        title={title}
        img={image}
        imgAlt={imageAlt}
        imgWidth={imageWidth}
        imgHeight={imageHeight}
        link={url}
      />
      <span className="text-blue-900 font-semibold pl-4 dark:text-blue-500 sm:self-start sm:pl-0 xs:text-sm sm:mt-1">
        {formatNorwegianDate(date)}
      </span>
    </motion.li>
  );
};

export default ArticleListItem;
