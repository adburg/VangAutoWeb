import Image from "next/image";
import Link from "next/link";
import React from "react";
import AnimatedText from "../../components/AnimatedText";
import BookingCta from "../../components/BookingCta";
import Breadcrumbs from "../../components/Breadcrumbs";
import Layout from "../../components/Layout";
import Seo from "../../components/Seo";
import { formatNorwegianDate } from "../../lib/dates";
import { breadcrumbSchema, serviceSchema } from "../../lib/schema";
import { inSentence } from "../../lib/text";
import {
  getAllServices,
  getRelatedArticles,
  getServiceBySlug
} from "../../lib/services";

const ServicePage = ({ service, relatedServices, relatedArticles, breadcrumbs }) => {
  const {
    name,
    title,
    seoTitle,
    seoDescription,
    url,
    image,
    imageAlt,
    imageWidth,
    imageHeight,
    contentHtml,
    faq
  } = service;

  return (
    <>
      <Seo
        title={seoTitle}
        description={seoDescription}
        path={url}
        image={image}
        imageAlt={imageAlt}
        jsonLd={[serviceSchema(service), breadcrumbSchema(breadcrumbs)]}
      />
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-10">
          <div className="mx-auto w-full max-w-4xl">
            <Breadcrumbs items={breadcrumbs} />
            <AnimatedText
              text={title}
              className="mb-8 !text-5xl !text-left !normal-case lg:!text-4xl sm:!text-3xl"
            />

            <div className="w-full overflow-hidden rounded-2xl border-2 border-solid border-dark dark:border-light">
              <Image
                src={image}
                alt={imageAlt}
                width={imageWidth}
                height={imageHeight}
                priority={true}
                sizes="(max-width: 1023px) 100vw, 896px"
                className="aspect-[16/9] w-full object-cover"
              />
            </div>

            <div
              className="article-body mt-8 w-full"
              dangerouslySetInnerHTML={{ __html: contentHtml }}
            />

            {faq.length > 0 && (
              <section className="mt-12">
                <h2 className="text-3xl font-bold text-dark dark:text-light md:text-2xl">
                  Vanlige spørsmål om {inSentence(name)}
                </h2>
                <div className="mt-4 divide-y divide-dark/20 dark:divide-light/20">
                  {faq.map(({ q, a }) => (
                    <div key={q} className="py-4">
                      <h3 className="text-xl font-bold text-dark dark:text-light xs:text-lg">{q}</h3>
                      <p className="mt-1 font-medium text-dark/90 dark:text-light/90 xs:text-sm">{a}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            <BookingCta
              className="mt-12"
              heading={`Bestill time for ${inSentence(name)}`}
              text="Fyll ut skjemaet med registreringsnummer og hva du trenger hjelp til. Du kan også ringe verkstedet."
            />

            {relatedServices.length > 0 && (
              <section className="mt-12">
                <h2 className="text-3xl font-bold text-dark dark:text-light md:text-2xl">
                  Relaterte tjenester
                </h2>
                <ul className="mt-4 grid grid-cols-3 gap-4 md:grid-cols-1">
                  {relatedServices.map((related) => (
                    <li key={related.slug}>
                      <Link
                        href={related.url}
                        className="flex h-full flex-col rounded-xl border border-solid border-dark p-4 hover:bg-dark/5 dark:border-light dark:hover:bg-light/5"
                      >
                        <span className="text-lg font-bold text-blue-800 dark:text-blue-500">
                          {related.name}
                        </span>
                        <span className="mt-1 text-sm font-medium text-dark/90 dark:text-light/90">
                          {related.summary}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {relatedArticles.length > 0 && (
              <section className="mt-12">
                <h2 className="text-3xl font-bold text-dark dark:text-light md:text-2xl">Les også</h2>
                <ul className="mt-4">
                  {relatedArticles.map((article) => (
                    <li
                      key={article.slug}
                      className="flex items-center justify-between gap-4 border-b border-dark/20 py-3 dark:border-light/20 sm:flex-col sm:items-start sm:gap-1"
                    >
                      <Link href={article.url} className="text-lg font-semibold hover:underline">
                        {article.title}
                      </Link>
                      <span className="shrink-0 text-sm font-semibold text-blue-800 dark:text-blue-500">
                        {formatNorwegianDate(article.date)}
                      </span>
                    </li>
                  ))}
                </ul>
                <Link href="/artikler" className="mt-4 inline-block font-semibold underline underline-offset-2">
                  Alle artikler
                </Link>
              </section>
            )}
          </div>
        </Layout>
      </main>
    </>
  );
};

export async function getStaticPaths() {
  const services = await getAllServices();

  return {
    paths: services.map((service) => ({ params: { slug: service.slug } })),
    // Every service page is known at build time - anything else is a real 404.
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const service = await getServiceBySlug(params.slug);
  if (!service) return { notFound: true };

  const allServices = await getAllServices();
  const relatedServices = service.relatedServices
    .map((slug) => allServices.find((candidate) => candidate.slug === slug))
    .filter(Boolean)
    .map(({ slug, url, name, summary }) => ({ slug, url, name, summary }));

  return {
    props: {
      service,
      relatedServices,
      relatedArticles: await getRelatedArticles(service.articleTerms),
      breadcrumbs: [
        { name: "Hjem", path: "/" },
        { name: "Tjenester", path: "/tjenester" },
        { name: service.name, path: service.url }
      ]
    }
  };
}

export default ServicePage;
