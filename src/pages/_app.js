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
  const id = process.env.GOOGLE_ID;
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Script
        id="googleads"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${id}`}
      />
      <Script id="google-ads" strategy="afterInteractive">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
      
        gtag('config', '${id}');
        `}
      </Script>

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
