import AnimatedText from "../components/AnimatedText";
import Layout from "../components/Layout";
import Head from "next/head";
import React from "react";
import ArticleList from "../components/articles/ArticleList";
import FeaturedArticle from "../components/articles/FeaturedArticle";
import { getAllArticles } from "../lib/articles";

const Artikler = ({ featured, rest }) => {
  return (
    <>
      <Head>
        <title>Artikler om Bil & Verksted | Vang Auto Hamar</title>
        <meta
          name="description"
          content="Les nyttige artikler om bilstell, dekkskifte, EU-kontroll og service bil fra Vang Auto bilverksted nær Hamar, Løten og Elverum. Tips og råd fra ekspertene."
        />
        <meta
          name="keywords"
          content="bilartikler Hamar, dekkskifte tips, EU-kontroll informasjon, service bil råd, verksted Hamar, Vang Auto Hamar"
        />
        <meta property="og:title" content="Artikler om Bil & Verksted | Vang Auto Hamar" />
        <meta property="og:description" content="Les nyttige artikler om dekkskifte, EU-kontroll og service bil fra Vang Auto bilverksted nær Hamar, Løten og Elverum." />
        <meta property="og:type" content="website" />
        <meta name="geo.region" content="NO-INN" />
        <meta name="geo.placename" content="Hamar" />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light">
        <Layout className="pt-10">
          <AnimatedText
            text="Artikler"
            className="mb-16 sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
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
