import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ happening, time, details }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
        viewport={{ once: true }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {happening}
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time}
        </span>
        <p className="font-medium w-full md:text-sm">{details}</p>
      </motion.div>
    </li>
  );
};

const Historie = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"]
  });
  return (
    <div className="my-64 md:my-32">
      <h2 className="font-bold text-7xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Historie
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-1 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            happening="Medlem av Meca"
            time="2015"
            details="Verkstedet velger å gjøre en overgang til Meca-kjeden. Dette medfører en kvalitetsstandard når det gjelder bildeler, samt. bruk av riktig utstyr og systemer."
          />
          <Details
            happening="Starter med Iveco"
            time="2013"
            details="Vi begynner med kjøp, salg, reparasjoner, service og vedlikehold av alle Iveco-merker. Vang Auto er et av totalt 21 autoriserte serviceverksteder for Iveco på landsbasis."
          />
          <Details
            happening="Familiebedriften går videre"
            time="2006"
            details="Sønn av Gunnar Berget, Per Asbjørn, tar over rollen som daglig leder etter flere år i bedriften. Gunnar fortsetter å være en viktig brikke for bedriften i mange år til tross for pensjonsalder."
          />
          <Details
            happening="Flytting til Rv25"
            time="1965"
            details="Grunnet en brannulykke flyttes Vang Auto til nye større lokaler på en bedre lokasjon ved Rv25. Det nye lokalet gir muligheter for et moderne verksted med bedre utstyr, egen avdeling for lastebil og generelt økt kapasitet."
          />
          <Details
            happening="Vang Auto etableres"
            time="1960"
            details="Gunnar Berget og Reidar Tangen åpner dørene hos Vang Auto for første gang. Gunnar, far av Per Asbjørn var daglig leder for bedriften i årene som ventet, sammen men kompanjong Reidar."
          />
        </ul>
      </div>
    </div>
  );
};

export default Historie;
