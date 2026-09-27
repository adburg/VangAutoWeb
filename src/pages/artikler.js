import AnimatedText from "../components/AnimatedText";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import React from "react";
import ArticleList from "../components/articles/ArticleList";
import FeaturedArticle from "../components/articles/FeaturedArticle";
import { getAllArticles } from "../lib/articles";

const Artikler = ({ featured, rest }) => {
  return (
    <>
      <Seo
        title="Artikler om bil og verksted"
        description="Artikler fra Vang Auto om dekk, EU-kontroll, service og vedlikehold av bil. Praktiske råd fra et bilverksted like utenfor Hamar med over 60 år i bransjen."
        path="/artikler"
      />
      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light">
        <Layout className="pt-10">
          <AnimatedText
            text="Artikler om bil og verksted"
            className="mb-6 !normal-case sm:mb-4 sm:!text-6xl xs:!text-4xl"
          />
          <p className="mx-auto mb-16 max-w-3xl text-center text-lg font-medium md:text-base sm:mb-8">
            Råd om dekk, EU-kontroll, service og vedlikehold fra verkstedet like
            utenfor Hamar. Nyeste artikler står først.
          </p>
          <ul className="grid grid-cols-2 gap-16 lg:gap-8 md:gap-y-16 md:grid-cols-1">
            {featured.map((article) => (
              <FeaturedArticle key={article.slug} article={article} />
            ))}
          </ul>
          {rest.length > 0 && (
            <>
              <h2 className="font-bold text-4xl w-full text-center my-16 mt-32">
                Flere artikler
              </h2>
              <ArticleList articles={rest} />
            </>
          )}
        </Layout>
      </main>
    </>
  );
};

export async function getStaticProps() {
  // Single source of truth: the markdown files, newest first. The two newest
  // articles automatically become the featured cards.
  const articles = await getAllArticles();

  return {
    props: {
      featured: articles.slice(0, 2),
      rest: articles.slice(2)
    }
  };
}

export default Artikler;
