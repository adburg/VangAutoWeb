import Head from "next/head";
import Image from "next/image";
import React from "react";
import image from "../../../public/images/articles/sekstito.jpg";
import { motion } from "framer-motion";
import Layout from "../../components/Layout";
import AnimatedText from "../../components/AnimatedText";

const FramerImage = motion(Image);

const sekstitoaar = () => {
  return (
    <>
      <Head>
        <title>Vang Auto | Blogg - 62 År</title>
        <meta
          name="description"
          content="Vang Auto Blogg. Les våre artikler for nyttig informasjon om bilen din, og bestill en time direkte i nettsiden eller ring oss."
        />
      </Head>
      <main className="flex w-full flex-col mb-16 items-center justify-center">
        <Layout className="pt-12 mt-8 flex items-center justify-center !p-4 !md:p-12 !lg:p-32">
          <div className="flex w-2/3 md:w-full flex-col mb-16 items-center">
            <AnimatedText
              text="62 begivenhetsrike år
              "
              className="mb-6 !text-3xl !normal-case"
            />
            <div className="items-center border border-solid rounded-br-3xl rounded-3xl border-dark bg-light p-12 md:p-4 dark:border-light dark:bg-dark">
              <div className="w-full flex justify-center overflow-hidden rounded-lg ">
                <FramerImage
                  src={image}
                  alt="62 år"
                  priority={true}
                  className="w-full h-auto rounded-lg border-2 border-dark dark:border-light"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                />
              </div>

              <div className="w-full flex flex-col items-start justify-between mt-6">
                <p className="my-2 font-bold text-dark xs:text-sm dark:text-white">
                  Det er 16 gode og krevende år siden Per Asbjørn Berget overtok
                  den daglige ledelsen av Vang Auto AS. Men det er lenge igjen
                  til han kan måle seg med faren Gunnar, som drev
                  familiebedriften i hele 46 år.
                </p>
                <p className="my-2 font-medium text-dark xs:text-sm dark:text-white">
                  -Det vil alltid være noen humper i veien når en driver et lite
                  verksted i distriktet. Det er mye jobb å drive en liten
                  bedrift, og det er mye en skal håndtere i løpet av en dag.
                  Uten så mange dyktige og lojale medarbeidere og trofaste
                  kunder ville vi ikke stått så sterkt som vi fremdeles gjør
                  etter mer enn 60 år, sier Per Asbjørn Berget.
                </p>
                <p className="mt-4 font-bold text-xl text-dark xs:text-lg dark:text-white">
                  Brant i 1964
                </p>
                <p className="mb-2 font-medium text-dark xs:text-sm dark:text-white">
                  Det var i mai 1960 at Gunnar Berget og kompanjongen Reidar
                  Tangen bestemte seg for å starte for seg selv.
                </p>
                <p className="my-2 font-medium text-dark xs:text-sm dark:text-white">
                  -Far begynte å jobbe på Oustad verksted rett etter krigen, i
                  1946. Det gikk mye i amerikanske biler på den tiden. Jeg
                  husker fortsatt at han viste meg en av de første lønnslippene,
                  da tjente han 98 øre i timen, forteller Per Asbjørn Berget.
                </p>
                <p className="my-2 font-medium text-dark xs:text-sm dark:text-white">
                  Det første verkstedet til Vang Auto lå «noen kilometer lenger
                  opp i veien», men gikk med i en brann i 1964. Da kjøpte Berget
                  og Tangen eiendommen der verkstedet ligger nå, og i løpet av
                  ganske kort tid var verkstedet i full drift igjen.
                </p>
                <p className="my-2 font-medium text-dark xs:text-sm dark:text-white">
                  -De hadde virkelig pågangsmot. De lot seg ikke stoppe av noe
                  som helst. Det står det respekt av.
                </p>
                <p className="mt-4 font-bold text-xl text-dark xs:text-lg dark:text-white">
                  Trivdes godt i Oslo
                </p>
                <p className="mb-2 font-medium text-dark xs:text-sm dark:text-white">
                  Per Asbjørn Berget er mer eller mindre født og oppvokst på
                  verkstedet til faren, og fikk interessen for teknikk og
                  mekanikk inn med morsmelken. Det var aldri noen tvil om at det
                  var biler han skulle jobbe med. Men at han en gang skulle
                  overta familiebedriften, lå slett ikke i kortene.
                </p>
                <p className="my-2 font-medium text-dark xs:text-sm dark:text-white">
                  -Jeg trivdes veldig godt i Oslo. Jeg hadde givende jobber,
                  først i NAF og senere i Møllerkonsernet på Frysja. Da far
                  begynte å slite med alderen og helsa, måtte jeg tenke meg om
                  flere ganger. Jeg visste godt hvor arbeidskrevende det hadde
                  vært for faren min. Det var ikke så lett å si takk for meg til
                  en god og sikker jobb til fordel for det jeg visste kom til å
                  bli mer krevende dager, sier Per Asbjørn Berget, som
                  understreker at han slett ikke angrer på det valget han gjorde
                  den gang ved tusenårsskiftet.
                </p>
                <p className="mt-4 font-bold text-xl text-dark xs:text-lg dark:text-white">
                  Familiebedrift siden 1995
                </p>
                <p className="mb-2 font-medium text-dark xs:text-sm dark:text-white">
                  90-tallet var et begivenhetsrikt tiår for Vang Auto. Det var
                  blant annet på den tiden at bensinstasjonen ble faset ut.
                </p>
                <p className="my-2 font-medium text-dark xs:text-sm dark:text-white">
                  -Tidligere var det ikke uvanlig at verksteder og
                  bensinstasjoner drev sammen. Vi drev sammen med Gulf, som
                  etter hvert endret navn til Texaco og senere Hydro/Texaco. Det
                  var på den tiden man kunne svinge innom bensinstasjonen for å
                  få peilet oljen, skiftet vindusvisker eller pære. Slik var det
                  i alle fall hos oss, forteller Per Asbjørn Berget.
                </p>
                <p className="my-2 font-medium text-dark xs:text-sm dark:text-white">
                  Hos Vang Auto har de ennå det gamle Gulf-skiltet som minne om
                  tidligere tider.
                </p>
                <p className="my-2 font-medium text-dark xs:text-sm dark:text-white">
                  En enda større omlegging var det at Reidar Tangen, som hadde
                  vært med helt siden starten, ønsket å trekke seg tilbake og
                  ble kjøpt ut i 1995. Vang Auto ble en ren familiebedrift. Per
                  Asbjørn Berget ble selv medeier, men begynte ikke å jobbe for
                  fullt i verkstedet før han flyttet fra Oslo og tilbake til
                  røttene i august 2000.
                </p>
                <p className="mt-4 font-bold text-xl text-dark xs:text-lg dark:text-white">
                  Lastebiler i flere omganger
                </p>
                <p className="mb-2 font-medium text-dark xs:text-sm dark:text-white">
                  I 2013 ble Vang Auto autorisert som spesialverksted for Iveco
                  lastebil. Men det er slett ikke første gang man har drevet med
                  tunge kjøretøy i familiebedriften. Allerede på 90-tallet drev
                  Vang Auto med salg og reparasjoner av Nissan vare- og
                  lastebiler. I årene 1995 til 2009 hadde en lastebilselger
                  kontor hos Vang Auto.
                </p>
                <p className="my-2 font-medium text-dark xs:text-sm dark:text-white">
                  -Virksomheten med Nissan begynte å bli faset ut ganske kort
                  tid etter årtusenskiftet. Renault Trucks hadde i mellomtiden
                  kjøpt opp agenturet, og de viste liten interesse for å møte de
                  stadig strengere miljøkravene som EU kom med. Det ble i stedet
                  fullt fokus på Renault lastebiler. Da finanskrisen herjet som
                  verst i 2009 ble Renaultselgeren vår fjernet av importøren,
                  forteller Per Asbjørn Berget, som overtok som daglig leder for
                  Vang Auto i 2006.
                </p>
                <p className="my-2 font-medium text-dark xs:text-sm dark:text-white">
                  Da ble også verkstedet omdannet til aksjeselskap, etter å ha
                  vært drevet som ANS helt siden starten i 1960.
                </p>
                <p className="my-2 font-medium text-dark xs:text-sm dark:text-white">
                  -Men far var med på verkstedet så mye han klarte helt til han
                  gikk bort i januar 2011, 80 år gammel.
                </p>
                <p className="mt-4 font-bold text-xl text-dark xs:text-lg dark:text-white">
                  Enorme forandringer
                </p>
                <p className="mb-2 font-medium text-dark xs:text-sm dark:text-white">
                  Da Per Asbjørn Berget tok fagbrevet i 1988, var det ingen som
                  kunne ane at biler om noen år skulle gå på strøm. «Ingen»
                  hadde hørt om canbus og airbag, og at det en gang i fremtiden
                  skulle bli mulig å diagnostisere en bil med et tastetrykk, var
                  det ingen som drømte om engang. Det er få bransjer som har
                  vært gjennom større omstillinger enn bilbransjen.
                </p>
                <p className="my-2 font-medium text-dark xs:text-sm dark:text-white">
                  -Vi har massive forandringer både bak oss og foran oss. Det er
                  mye om fremtiden vi ikke kan ane noe som helst om, sier Per
                  Asbjørn Berget, som håper han slipper flere opplevelser som da
                  koronaen skylte inn over distriktet våren `20.
                </p>
                <p className="mt-2 font-medium text-dark xs:text-sm dark:text-white">
                  -Vi har hatt noen nervøse perioder tidligere også, men dagene
                  etter talen til Erna Solberg i mars i forfjor er de tøffeste
                  jeg har opplevd i min tid som leder. Det var ikke en eneste
                  telefon i løpet av de to første ukene, og det gikk så langt at
                  jeg for første gang måtte permittere ansatte. Heldigvis løsnet
                  det rett etter påske, og siden den gang har det vært full gass
                  her hos oss. Slik håper jeg det fortsetter i fremtiden også.
                </p>
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default sekstitoaar;
