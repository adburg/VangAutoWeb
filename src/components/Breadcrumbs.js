import Link from "next/link";
import React from "react";

/**
 * Visible breadcrumb trail. `items` is [{ name, path }, ...] from the front
 * page down to the current page; the last item is rendered as plain text.
 * The same items feed breadcrumbSchema() in src/lib/schema.js, so the
 * structured data always matches what is on the page.
 */
const Breadcrumbs = ({ items, className = "" }) => {
  if (!items?.length) return null;

  return (
    <nav aria-label="Brødsmuler" className={`w-full mb-6 ${className}`}>
      <ol className="flex flex-wrap items-center gap-x-2 text-sm font-medium text-dark/75 dark:text-light/75">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.path} className="flex items-center gap-x-2">
              {isLast ? (
                <span aria-current="page" className="text-dark dark:text-light">
                  {item.name}
                </span>
              ) : (
                <>
                  <Link href={item.path} className="underline underline-offset-2 hover:text-dark dark:hover:text-light">
                    {item.name}
                  </Link>
                  <span aria-hidden="true">›</span>
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
