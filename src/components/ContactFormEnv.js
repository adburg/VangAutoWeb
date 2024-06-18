import React from "react";
import { motion } from "framer-motion";

const ContactFormEnv = () => {
  return (
    <>
      <form
        action="/bestiltenv"
        name="contactenv"
        method="post"
        className="flex flex-col gap-y-8 pb-14 p-6 items-center rounded-2xl border-2 dark:border-light border-dark"
        data-netlify="true"
      >
        <input type="hidden" name="form-name-miljo" value="contact" />
        <p className="font-bold text-lg text-dark !text-center">
          Kom med innspill på vårt klimaarbeid
        </p>

        <input
          name="name"
          required
          type="text"
          placeholder="Navn/bedriftsnavn"
          className="bg-transparent border-2 p-2 border-dark rounded-xl w-full placeholder:font-medium font-medium text-dark dark:text-light placeholder:text-dark/75 focus:border-blue-400 dark:border-light dark:placeholder:text-light/75"
        />
        <input
          name="email"
          type="email"
          placeholder="E-post"
          className="bg-transparent border-2 p-2 border-dark rounded-xl w-full placeholder:font-medium font-medium text-dark dark:text-light placeholder:text-dark/75 focus:border-blue-400 dark:border-light dark:placeholder:text-light/75"
        />
        <textarea
          name="message"
          placeholder="Tilbakemelding"
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

export default ContactFormEnv;
