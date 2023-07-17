import Head from "next/head";
import Image from "next/image";
import React from "react";
import image from "../../../public/images/articles/femtiaar.jpg";
import { motion } from "framer-motion";
import Layout from "../../components/Layout";
import AnimatedText from "../../components/AnimatedText";

const FramerImage = motion(Image);

const femtiaar = () => {
  return (
    <>
      <Head>
        <title>Vang Auto | Blogg - Femtiårsjubileum</title>
        <meta
          name="description"
          content="Vang Auto Blogg. Les våre artikler for nyttig informasjon om bilen din, og bestill en time direkte i nettsiden eller ring oss."
        />
      </Head>
      <main className="flex w-full flex-col mb-16 items-center justify-center">
        <Layout className="pt-12 mt-8 flex items-center justify-center !p-4 !md:p-12 !lg:p-32">
          <div className="flex w-2/3 md:w-full flex-col mb-16 items-center">
            <AnimatedText
              text="Femtiårsjubileum for en evigung mekanikerveteran
              "
              className="mb-6 !text-3xl !normal-case"
            />
            <div className="items-center border border-solid rounded-br-3xl rounded-3xl border-dark bg-light p-12 md:p-4 dark:border-white dark:bg-dark">
              <div className="w-full flex justify-center overflow-hidden rounded-lg ">
                <FramerImage
                  src={image}
                  alt="femti år"
                  priority={true}
                  className="w-full h-auto rounded-lg border-2 border-dark dark:border-light"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                />
              </div>

              <div className="w-full flex flex-col items-start justify-between mt-6">
                <p className="my-2 font-bold text-dark xs:text-sm dark:text-white">
                  Den første august var det 50 år siden Geir Bjørnstad begynte å
                  jobbe på verkstedet til Vang Auto AS. Det vanket både kaffe,
                  kaker og godord til den evigunge mekanikerveteranen.
                </p>
                <p className="my-2 font-medium text-dark xs:text-sm dark:text-white">
                  -Jeg hadde gått første året på yrkesskolen, og hadde egentlig
                  tenkt å utdanne meg til bilmekaniker. Men så fikk jeg
                  sommerjobb her, og Gunnar, faren til Per Asbjørn Berget, som
                  er sjef her nå, mente at jeg bare kunne fortsette å jobbe her
                  på verkstedet. Jeg kom til å lære alt jeg trengte her, sa han.
                  Og sånn ble det. Det har jeg ikke angret på et sekund, sier
                  jubilanten.
                </p>
                <p className="mt-4 font-bold text-xl text-dark xs:text-lg dark:text-white">
                  En gørfin arbeidsplass
                </p>
                <p className="mb-2 font-medium text-dark xs:text-sm dark:text-white">
                  Det har vært 50 flotte år på verkstedet til Vang Auto AS,
                  synes Geir Bjørnstad, men bransjen har forandret seg nesten
                  til det ugjenkjennelige i løpet av det halve århundret.
                </p>
                <p className="my-2 font-medium text-dark xs:text-sm dark:text-white">
                  -Ja, det skal jeg si er stor forskjell. Nå får en jo omtrent
                  ikke neven nedi motorrommet lenger. Og skriften på
                  koblingsskjemaene, den er blitt gørlei. Den er blitt så liten,
                  at en må bruke briller for å se de små bokstavene. Sånn var
                  det ikke før, sier veteranen, som ikke henger med hodet av den
                  grunn.
                </p>
                <p className="my-2 font-medium text-dark xs:text-sm dark:text-white">
                  -Nei, har en ikke annet å klage på, så får det være bra. En
                  kjenner at en har trått på et betonggulv det meste av livet,
                  men her har vi det både fritt og fint. Vang Auto er en gørfin
                  arbeidsplass.
                </p>
                <p className="mt-4 font-bold text-xl text-dark xs:text-lg dark:text-white">
                  Nok å fylle tiden med
                </p>
                <p className="mb-2 font-medium text-dark xs:text-sm dark:text-white">
                  Geir Bjørnstad er i sitt 66 år, men han har ingen planer om å
                  trekke seg tilbake fra arbeidslivet.
                </p>
                <p className="my-2 font-medium text-dark xs:text-sm dark:text-white">
                  -Nei, den tid den sorg. Jeg er altfor rastløs til å sette meg
                  ned på en stol. Selv om det ikke er hver dag som er like
                  spennende, synes det er helt greit å møte på jobb om morran.
                  Vi har det som sagt fritt og fint, og det er alltid artig å
                  være her, sier veteranen.
                </p>
                <p className="my-2 font-medium text-dark xs:text-sm dark:text-white">
                  Han ”gidder ikke stå i ladekø”, som han sier, og er derfor
                  avventende med elektriske biler, selv om kona har skaffet seg
                  en ladbar Volvo-hybrid. Med den trofaste Toyota Landcruiseren
                  bruker ikke tobarnsfaren mer enn 10 minutter til og fra
                  hjemmet på Ådalsbruk, og han har ingen problemer med å fylle
                  det som er av fritid.
                </p>
                <p className="mt-2 font-medium text-dark xs:text-sm dark:text-white">
                  -Det er alltid noe å ordne med. Jeg liker å fiske, og så har
                  jeg to barnebarn som bor i nærheten. Jeg synes det er utrolig
                  artig å se guttunga spille fotball.
                </p>
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default femtiaar;
