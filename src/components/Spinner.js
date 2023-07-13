import React from "react";
import { CircularText } from "./Icons";
import Link from "next/link";

const Spinner = () => {
  return (
    <div className="absolute left-4 bottom-8 flex items-center justify-center overflow-hidden md:right-4 md:left-auto md:top-0 md:bottom-auto">
      <div className="w-60 h-auto flex items-center justify-center relative md:w-24">
        <CircularText
          className={"fill-dark animate-spin-slow dark:fill-light"}
        />
      </div>
    </div>
  );
};

export default Spinner;
