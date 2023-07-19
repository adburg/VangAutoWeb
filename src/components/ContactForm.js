import React, { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

const ContactForm = () => {
  return (
    <>
      <input type="hidden" name="form-name" value="contact" />
      <form
        action="/bestilt"
        name="contact"
        method="POST"
        onSubmit="submit"
        className="flex flex-col gap-y-8 pb-14 p-6 items-center rounded-2xl border-2 dark:border-light border-dark"
        data-netlify="true"
      >
        <p className="font-bold text-lg text-dark !text-center">
          Kontaktskjema
        </p>
        <select
          name="type"
          className="bg-transparent border-2 p-2 border-dark rounded-xl w-full font-medium text-dark/75 focus:border-blue-400 dark:border-light dark:text-light/75"
          defaultValue={"DEFAULT"}
        >
          <option value="DEFAULT" disabled>
            Type Oppdrag
          </option>
          <option value="EU-Kontroll">EU-Kontroll</option>
          <option value="Service/Reparasjon">Service/Reparasjon</option>
          <option value="Firehjulskontroll">Firehjulskontroll</option>
          <option value="AC-Service">AC-service</option>
          <option value="Dekkskift/Dekkhotell">Dekkskift/Dekkhotell</option>
          <option value="Varebil/Bobil">Varebil/Bobil</option>
          <option value="Annet">Annet</option>
        </select>
        <input
          name="name"
          required
          type="text"
          placeholder="Navn"
          className="bg-transparent border-2 p-2 border-dark rounded-xl w-full placeholder:font-medium font-medium text-dark dark:text-light placeholder:text-dark/75 focus:border-blue-400 dark:border-light dark:placeholder:text-light/75"
        />
        <input
          name="phone"
          required
          minLength={8}
          maxLength={14}
          type="text"
          placeholder="Telefon"
          className="bg-transparent border-2 p-2 border-dark rounded-xl w-full placeholder:font-medium font-medium text-dark dark:text-light placeholder:text-dark/75 focus:border-blue-400 dark:border-light dark:placeholder:text-light/75"
        />
        <input
          name="regNr"
          type="text"
          required
          minLength={7}
          maxLength={8}
          placeholder="Reg-Nr"
          className="bg-transparent border-2 p-2 border-dark rounded-xl w-full placeholder:font-medium font-medium text-dark dark:text-light placeholder:text-dark/75 focus:border-blue-400 dark:border-light dark:placeholder:text-light/75"
        />
        <textarea
          name="message"
          placeholder="Om Oppdraget"
          className="bg-transparent border-2 pb-8 px-2 resize-none mb-4 border-dark rounded-xl w-full placeholder:font-medium font-medium text-dark dark:text-light placeholder:text-dark/75 focus:border-blue-400 dark:border-light dark:placeholder:text-light/75"
        ></textarea>
        <motion.button
          name="submit"
          type="submit"
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.95 }}
          className="w-full border-2 border-solid bg-blue-800 dark:bg-light text-light font-bold dark:text-dark border-dark dark:border-blue-500 rounded-lg p-1"
        >
          Send Inn
        </motion.button>
      </form>
    </>
  );
};

export default ContactForm;
