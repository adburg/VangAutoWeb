import React, { useState } from "react";
import ArticleListItem from "./ArticleListItem";

const DEFAULT_VISIBLE = 10;
const STEP = DEFAULT_VISIBLE;

/**
 * The "Flere artikler" list. Shows the first `initialVisible` articles and
 * reveals another batch each time "Vis flere" is clicked.
 */
const ArticleList = ({ articles, initialVisible = DEFAULT_VISIBLE }) => {
  const [visibleCount, setVisibleCount] = useState(initialVisible);

  if (!articles.length) return null;

  const visibleArticles = articles.slice(0, visibleCount);
  const hiddenCount = articles.length - visibleArticles.length;

  return (
    <>
      <ul>
        {visibleArticles.map((article) => (
          <ArticleListItem key={article.slug} article={article} />
        ))}
      </ul>
      {hiddenCount > 0 && (
        <div className="w-full flex items-center justify-center mt-8">
          <button
            type="button"
            onClick={() => setVisibleCount((count) => count + STEP)}
            className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold
            hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark
            dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light
            md:p-2 md:px-4 md:text-base"
          >
            Vis flere
          </button>
        </div>
      )}
    </>
  );
};

export default ArticleList;
