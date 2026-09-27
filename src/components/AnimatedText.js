import React from "react";

/**
 * The page H1 with the word-by-word rise-in effect.
 *
 * The animation is plain CSS (.animated-word in globals.css) rather than
 * Framer Motion, so the heading starts animating on first paint instead of
 * waiting for JavaScript to hydrate. That keeps the H1 - often the largest
 * element on the page - from holding back Largest Contentful Paint.
 */
const WORD_DELAY_SECONDS = 0.08;
const START_DELAY_SECONDS = 0.1;

const AnimatedText = ({ text, className = "" }) => {
  return (
    <div className="w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden sm:py-0">
      <h1
        className={`inline-block w-full text-blue-800 font-bold dark:text-light capitalize text-7xl ${className}`}
      >
        {text.split(" ").map((word, index) => (
          <span
            key={word + "-" + index}
            className="animated-word"
            style={{
              animationDelay: `${START_DELAY_SECONDS + index * WORD_DELAY_SECONDS}s`
            }}
          >
            {word}&nbsp;
          </span>
        ))}
      </h1>
    </div>
  );
};

export default AnimatedText;
