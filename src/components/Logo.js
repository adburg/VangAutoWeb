import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import logoPic from "../../public/images/svgs/logo.png";

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className="flex items-center justify-center mt-2">
      <MotionLink
        href="/"
        className="w-28 h-22 dark:bg-light flex items-center justify-center rounded-3xl mt-1"
        whileHover={{
          backgroundColor: [
            "#f5f5f5",
            "rgba(12,27,110,255)",
            "rgba(254,0,0,255)",
            "rgba(254,0,0,255)",
            "rgba(12,27,110,255)",
            "#f5f5f5"
          ],
          transition: { duration: 3, repeat: Infinity }
        }}
      >
        <Image
          src={logoPic}
          priority={true}
          alt="logo"
          className="mt-2 ml-2 "
        />
      </MotionLink>
    </div>
  );
};

export default Logo;
