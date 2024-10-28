import Link from "next/link";
import React, { useState } from "react";
import Logo from "./Logo";
import { useRouter } from "next/router";
import { CallIcon, FacebookIcon, MoonIcon, SunIcon } from "./Icons";
import { motion } from "framer-motion";
import useThemeSwitcher from "./hooks/useThemeSwitcher";

const MotionLink = motion(Link);

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}

      <span
        className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full dark:bg-light transition-[width] ease duration-300 ${
          router.asPath === href ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  const router = useRouter();
  const handleClick = () => {
    toggle();
    router.push(href);
  };
  return (
    <button
      href={href}
      className={`${className} relative group text-light dark:text-dark my-2`}
      onClick={handleClick}
    >
      {title}

      <span
        className={`h-[1px] inline-block bg-light absolute left-0 -bottom-0.5 group-hover:w-full dark:bg-dark transition-[width] ease duration-300 ${
          router.asPath === href ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
    </button>
  );
};

const KontaktOssMobileLink = ({ href, title, className = "", toggle }) => {
  const router = useRouter();
  const handleClick = () => {
    toggle();
    router.push(href);
  };
  return (
    <button href={href} className={`${className} `} onClick={handleClick}>
      {title}
    </button>
  );
};

const NavBar = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const Router = useRouter();

  return (
    <header className="w-full px-16 py-10 font-medium flex items-center justify-between dark:text-light relative z-10 lg:px-16 md:px-12 sm:px-10">
      <button
        className="flex-col justify-center items-center hidden lg:flex"
        onClick={handleClick}
      >
        <span
          className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm  ${
            isOpen ? "rotate-45 translate-y-1 opacity-0" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm ${
            isOpen ? "-rotate-45 -translate-y-1 opacity-0" : "translate-y-0.5"
          }`}
        ></span>
      </button>

      <div className="w-full flex justify-between items-center lg:hidden">
        <nav>
          <CustomLink href="/" title="Hjem" className="mr-4" />
          <CustomLink href="/tjenester" title="Tjenester" className="mx-4" />
          <CustomLink href="/artikler" title="Artikler" className="mx-4" />
          <CustomLink href="/omoss" title="Om Oss" className="mx-4" />

          <CustomLink href="/kontaktoss" title="Kontakt Oss" className="ml-4" />
        </nav>

        <nav className="flex items-center justify-center flex-wrap">
          <motion.a
            href="https://facebook.com/vangauto"
            target={"_blank"}
            whileHover={{ y: -2 }}
            className="w-8 mr-3"
            whileTap={{ scale: 0.9 }}
          >
            <FacebookIcon />
          </motion.a>
          <motion.a
            href={`tel:${+4762595733}`}
            target={"_self"}
            whileHover={{ y: -2 }}
            className="w-8 mx-3 dark:invert rounded-2xl"
            whileTap={{ scale: 0.9 }}
          >
            <CallIcon />
          </motion.a>
          <MotionLink
            onClick={() => Router.push("/bestilltime")}
            href="bestilltime"
            className="mx-3 border-2 border-solid border-dark dark:border-white rounded-lg p-1"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            Bestill Time
          </MotionLink>

          <button
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className={`ml-3 flex items-center justify-center rounded-full p-1 
          ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}
          `}
          >
            {mode === "dark" ? (
              <SunIcon className={"fill-dark"} />
            ) : (
              <MoonIcon className={"fill-dark"} />
            )}
          </button>
        </nav>
      </div>

      {isOpen ? (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          className="min-w-[70vw] flex-col flex justify-between z-30 items-center fixed top-1/2 left-1/2
     -translate-x-1/2 -translate-y-1/2 bg-dark/90 dark:bg-light/75 rounded-lg backrop-blur-md py-32"
        >
          <nav className="flex items-center flex-col justify-center">
            <button
              className="flex-col justify-center left-2 fixed top-4 items-center "
              onClick={handleClick}
            >
              <span
                className={`bg-light dark:bg-dark transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm  ${
                  isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
                }`}
              ></span>
              <span
                className={`bg-light dark:bg-dark transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm my-0.5 ${
                  isOpen ? "opacity-0" : "opacity-100"
                }`}
              ></span>
              <span
                className={`bg-light dark:bg-dark transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm ${
                  isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
                }`}
              ></span>
            </button>

            <CustomMobileLink
              href="/"
              title="Hjem"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/tjenester"
              title="Tjenester"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/artikler"
              title="Artikler"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/omoss"
              title="Om oss"
              className=""
              toggle={handleClick}
            />

            <CustomMobileLink
              href="/kontaktoss"
              title="Kontakt Oss"
              className=""
              toggle={handleClick}
            />
          </nav>

          <nav className="flex items-center justify-center flex-wrap mt-2">
            <motion.a
              href="https://facebook.com/vangauto"
              target={"_blank"}
              whileHover={{ y: -2 }}
              className="w-8 mr-3 sm:mx-1"
              whileTap={{ scale: 0.9 }}
            >
              <FacebookIcon />
            </motion.a>
            <motion.a
              href={`tel:${+4762595733}`}
              target={"_self"}
              whileHover={{ y: -2 }}
              className="w-8 mx-3 invert dark:invert-0 rounded-2xl  sm:mx-1"
              whileTap={{ scale: 0.9 }}
            >
              <CallIcon />
            </motion.a>
            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }}>
              <KontaktOssMobileLink
                href="/bestilltime"
                title="Bestill Time"
                className="mx-3 sm:mx-1 border-2 border-solid  border-light text-light dark:border-dark dark:text-dark rounded-lg p-1"
                toggle={handleClick}
              />
            </motion.div>

            <button
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
              className={`ml-3 w-8 flex items-center justify-center rounded-full p-1 sm:mx-1
               ${
                 mode === "light" ? "bg-light text-dark" : "bg-dark text-light "
               }
              `}
            >
              {mode === "dark" ? (
                <SunIcon className={"fill-dark"} />
              ) : (
                <MoonIcon className={"fill-dark"} />
              )}
            </button>
          </nav>
        </motion.div>
      ) : null}

      <div className="absolute left-[50%]  translate-x-[-50%] flex items-center justify-center xl:opacity-0 lg:opacity-100">
        <Logo />

        {/** <Logo /> */}
      </div>
    </header>
  );
};

export default NavBar;
