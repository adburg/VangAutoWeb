import React from "react";
import ServiceCard from "./ServiceCard";

// Desktop shows 3 columns, xl (<1280px) 2 columns and md (<768px) 1 column.
// A last card that would sit alone at the left of its row is centred instead.
const CENTER_IN_THREE = "col-start-2";
const CENTER_IN_TWO = "xl:col-start-1 xl:col-span-2 xl:mx-auto xl:w-[calc(50%_-_1.25rem)]";
const RESET_IN_TWO = "xl:col-start-auto";
const RESET_IN_ONE = "md:col-start-auto md:col-span-1 md:mx-0 md:w-full";

function lastItemClass(count) {
  const aloneInThree = count % 3 === 1;
  const aloneInTwo = count % 2 === 1;
  return [
    aloneInThree && CENTER_IN_THREE,
    aloneInTwo ? CENTER_IN_TWO : aloneInThree && RESET_IN_TWO,
    (aloneInThree || aloneInTwo) && RESET_IN_ONE
  ]
    .filter(Boolean)
    .join(" ");
}

/**
 * Grid of service cards, used on the front page and on /tjenester.
 */
const ServiceGrid = ({ services, headingLevel = "h2", priorityCount = 0 }) => {
  const lastClass = lastItemClass(services.length);

  return (
    <ul className="grid grid-cols-3 gap-12 gap-y-16 xl:grid-cols-2 xl:gap-x-10 md:grid-cols-1 md:gap-y-12">
      {services.map((service, index) => (
        <li
          key={service.slug}
          className={index === services.length - 1 ? lastClass : undefined}
        >
          <ServiceCard
            service={service}
            headingLevel={headingLevel}
            priority={index < priorityCount}
          />
        </li>
      ))}
    </ul>
  );
};

export default ServiceGrid;
