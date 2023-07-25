import Script from "next/script";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import "../styles/globals.css";
import { Montserrat } from "next/font/google";
import Head from "next/head";
import { useRouter } from "next/router";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont"
});

export default function App({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
      <Script
        strategy="afterInteractive"
        id="google-tag-analytics"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      <Script strategy="afterInteractive" id="google-analytics">
        {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                    page_path: window.location.pathname,
                    });
        `}
      </Script>
      <Script
        strategy="afterInteractive"
        id="google-tag-ads"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ADS}`}
      />
      <Script strategy="afterInteractive" id="google-ads">
        {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ADS}', {
                    page_path: window.location.pathname,
                    });
        `}
      </Script>

      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main
        className={
          "${montserrat.variable} font-mont bg-light dark:bg-dark w-full min-h-screen"
        }
      >
        <NavBar />

        <Component key={router.asPath} {...pageProps} />

        <Footer />
      </main>
    </>
  );
}
