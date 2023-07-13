import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light 
      py-3 px-6 shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light 
      lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent
      xs:text-dark xs:dark:text-light xs:font-bold"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-7xl mt-64 w-full mb-8 text-center md:text-6xl xs:text-4xl md:mt-32">
        Hva tilbyr vi?
      </h2>
      <div
        className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark
      lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] 
      lg:bg-circularLightLg lg:dark:bg-circularDarkLg
      md:bg-circularLightMd md:dark:bg-circularDarkMd
      sm:bg-circularLightSm sm:dark:bg-circularDarkSm"
      >
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark
           text-light p-6 shadow-dark cursor-pointer  dark:text-dark dark:bg-light lg:p-6 md:p-4 xs:text-xs xs:p-2"
          whileHover={{ scale: 1.05 }}
        >
          Verksted
        </motion.div>
        <Skill name="EU-kontroll" x="-20vw" y="4vw" />
        <Skill name="Service" x="0vw" y="-10vw" />
        <Skill name="Reparasjon" x="23vw" y="6vw" />
        <Skill name="Firehjulskontroll" x="0vw" y="22vw" />
        <Skill name="AC-service" x="-25vw" y="-16vw" />
        <Skill name="Oljeskift/flushing" x="22vw" y="-15vw" />
        <Skill name="Lett lastebil" x="30vw" y="-5vw" />
        <Skill name="Karosseri" x="0vw" y="-20vw" />
        <Skill name="Dekkpartner" x="-22vw" y="17vw" />
        <Skill name="Klimaannlegg" x="22vw" y="17vw" />
        <Skill name="Dekkhotell" x="-37vw" y="0vw" />
      </div>
    </>
  );
};

export default Skills;
