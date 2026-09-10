import Head from "next/head";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Layout from "../../components/Layout";
import AnimatedText from "../../components/AnimatedText";
import { getArticleBySlug, getArticleSlugs } from "../../lib/articles";
import { absoluteUrl } from "../../lib/site";

const FramerImage = motion(Image);

const ArticlePage = ({ article }) => {
  const {
    title,
    date,
    image,
    imageAlt,
    imageWidth,
    imageHeight,
    seoTitle,
    seoDescription,
    ogTitle,
    ogDescription,
    keywords,
    contentHtml,
    canonicalUrl,
    ogImage
  } = article;

  return (
    <>
      <Head>
        <title>{seoTitle}</title>
        <meta name="description" content={seoDescription} />
        {keywords.length > 0 && (
          <meta name="keywords" content={keywords.join(", ")} />
        )}
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={ogTitle} />
        <meta property="og:description" content={ogDescription} />
        {ogImage && <meta property="og:image" content={ogImage} />}
        {ogImage && <meta property="og:image:alt" content={imageAlt} />}
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="article:published_time" content={date} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={ogTitle} />
        <meta name="twitter:description" content={ogDescription} />
        {ogImage && <meta name="twitter:image" content={ogImage} />}
        <meta name="geo.region" content="NO-INN" />
        <meta name="geo.placename" content="Hamar" />
      </Head>
      <main className="flex w-full flex-col mb-16 items-center justify-center dark:text-light">
        <Layout className="pt-12 mt-8 flex items-center justify-center !p-4 !md:p-12 !lg:p-32">
          <div className="flex w-2/3 md:w-full flex-col mb-16 items-center">
            <AnimatedText text={title} className="mb-6 !text-3xl !normal-case" />
            <div className="items-center border border-solid rounded-br-3xl rounded-3xl border-dark bg-light p-12 md:p-4 dark:border-light dark:bg-dark">
              <div className="w-full flex justify-center overflow-hidden rounded-lg ">
                <FramerImage
                  src={image}
                  alt={imageAlt}
                  width={imageWidth}
                  height={imageHeight}
                  priority={true}
                  sizes="(max-width: 767px) 100vw, 66vw"
                  className="w-full h-auto rounded-lg border-2 border-dark dark:border-light"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                />
              </div>

              <div
                className="article-body w-full flex flex-col items-start justify-between mt-6"
                dangerouslySetInnerHTML={{ __html: contentHtml }}
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export async function getStaticPaths() {
  const slugs = await getArticleSlugs();

  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    // Every article is known at build time - anything else is a real 404.
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const article = await getArticleBySlug(params.slug);

  if (!article) return { notFound: true };

  return {
    props: {
      article: {
        ...article,
        canonicalUrl: absoluteUrl(article.url),
        // Facebook and other crawlers cannot resolve "/images/...".
        ogImage: article.image ? absoluteUrl(article.image) : ""
      }
    }
  };
}

export default ArticlePage;
