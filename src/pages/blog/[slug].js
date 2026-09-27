import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import Layout from "../../components/Layout";
import AnimatedText from "../../components/AnimatedText";
import BookingCta from "../../components/BookingCta";
import Breadcrumbs from "../../components/Breadcrumbs";
import Seo from "../../components/Seo";
import { getArticleBySlug, getArticleSlugs } from "../../lib/articles";
import { blogPostingSchema, breadcrumbSchema } from "../../lib/schema";
import { getServicesForArticle } from "../../lib/services";

const FramerImage = motion(Image);

const ArticlePage = ({ article, services }) => {
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
    contentHtml,
    url
  } = article;

  const breadcrumbs = [
    { name: "Hjem", path: "/" },
    { name: "Artikler", path: "/artikler" },
    { name: title, path: url }
  ];

  return (
    <>
      <Seo
        title={seoTitle}
        description={seoDescription}
        path={url}
        image={image}
        imageAlt={imageAlt}
        type="article"
        publishedTime={date}
        ogTitle={ogTitle}
        ogDescription={ogDescription}
        jsonLd={[blogPostingSchema(article), breadcrumbSchema(breadcrumbs)]}
      />
      <main className="flex w-full flex-col mb-16 items-center justify-center dark:text-light">
        <Layout className="pt-12 mt-8 flex items-center justify-center !p-4 !md:p-12 !lg:p-32">
          <div className="flex w-2/3 md:w-full flex-col mb-16 items-center">
            <Breadcrumbs items={breadcrumbs} />
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

            {services.length > 0 && (
              <section className="mt-12 w-full">
                <h2 className="text-2xl font-bold text-dark dark:text-light">Aktuelle tjenester</h2>
                <ul className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-1">
                  {services.map((service) => (
                    <li key={service.slug}>
                      <Link
                        href={service.url}
                        className="flex h-full flex-col rounded-xl border border-solid border-dark p-4 hover:bg-dark/5 dark:border-light dark:hover:bg-light/5"
                      >
                        <span className="text-lg font-bold text-blue-800 dark:text-blue-500">
                          {service.name}
                        </span>
                        <span className="mt-1 text-sm font-medium text-dark/90 dark:text-light/90">
                          {service.summary}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            <BookingCta className="mt-12" />
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
      article,
      services: await getServicesForArticle(article)
    }
  };
}

export default ArticlePage;
