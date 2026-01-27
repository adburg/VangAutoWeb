import React from "react";
import { motion } from "framer-motion";

const encode = (data) => new URLSearchParams(data).toString();

const ContactFormEnv = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {};
    formData.forEach((value, key) => {
      data[key] = String(value);
    });

    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": form.getAttribute("name"),
          ...data,
        }),
      });

      if (!res.ok) {
        console.error("Netlify form submit failed:", res.status);
        return;
      }

      window.location.assign("/bestiltenv");
    } catch (err) {
      console.error("Netlify form submit error:", err);
    }
  };
  return (
    <>
      <form
        name="contactenv"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
        className="flex flex-col gap-y-8 pb-14 p-6 items-center rounded-2xl border-2 dark:border-light border-dark"
      >
        <input type="hidden" name="form-name" value="contactenv" />
        <input type="hidden" name="bot-field" />
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
