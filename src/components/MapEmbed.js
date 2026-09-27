import React, { useState } from "react";
import { BUSINESS, FULL_ADDRESS, MAPS_URL } from "../lib/business";

/**
 * Google Maps embed that loads only when the visitor asks for it. Until then
 * no request goes to Google, so the page stays light and no third-party
 * cookies are set without a click.
 */
const MapEmbed = ({ className = "" }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const query = encodeURIComponent(`${BUSINESS.legalName}, ${FULL_ADDRESS}`);

  return (
    <div
      className={`relative aspect-[16/9] w-full overflow-hidden rounded-2xl border-2 border-solid border-dark dark:border-light md:aspect-[4/3] ${className}`}
    >
      {isLoaded ? (
        <iframe
          title={`Kart som viser ${BUSINESS.legalName}, ${FULL_ADDRESS}`}
          src={`https://www.google.com/maps?q=${query}&z=14&output=embed`}
          className="absolute inset-0 h-full w-full"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-dark/5 p-6 text-center dark:bg-light/5">
          <p className="max-w-md font-medium">
            Kartet hentes fra Google når du klikker. Google kan da lagre
            informasjonskapsler.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => setIsLoaded(true)}
              className="rounded-lg border-2 border-solid border-transparent bg-dark px-6 py-2.5 text-lg font-semibold text-light
              hover:border-dark hover:bg-light hover:text-dark dark:bg-light dark:text-dark
              hover:dark:border-light hover:dark:bg-dark hover:dark:text-light md:text-base"
            >
              Vis kart
            </button>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-semibold underline underline-offset-2 md:text-base"
            >
              Åpne i Google Maps
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default MapEmbed;
