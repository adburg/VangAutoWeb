import Link from "next/link";
import React from "react";
import { BUSINESS, PHONE_HREF } from "../lib/business";

/**
 * Call to action used at the bottom of service and article pages: booking
 * link, phone number and opening hours, all from src/lib/business.js.
 */
const BookingCta = ({ heading = "Bestill time", text, className = "" }) => {
  return (
    <section
      className={`w-full rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:border-light dark:bg-dark md:p-6 ${className}`}
    >
      <h2 className="text-2xl font-bold text-dark dark:text-light md:text-xl">{heading}</h2>
      {text && <p className="mt-2 font-medium text-dark/90 dark:text-light/90">{text}</p>}
      <div className="mt-4 flex flex-wrap items-center gap-4">
        <Link
          href={BUSINESS.bookingPath}
          className="rounded-lg border-2 border-solid border-transparent bg-dark px-6 py-2.5 text-lg font-semibold text-light
          hover:border-dark hover:bg-light hover:text-dark dark:bg-light dark:text-dark
          hover:dark:border-light hover:dark:bg-dark hover:dark:text-light md:text-base"
        >
          Bestill time
        </Link>
        <a href={PHONE_HREF} className="text-lg font-semibold underline underline-offset-2 md:text-base">
          Ring {BUSINESS.phone.display}
        </a>
      </div>
      <p className="mt-3 text-sm font-medium text-dark/75 dark:text-light/75">
        {BUSINESS.openingHours.display}. {BUSINESS.openingHours.closedDisplay}.
      </p>
    </section>
  );
};

export default BookingCta;
