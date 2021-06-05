import React, { useState, useCallback, useRef } from "react"
import classNames from "classnames"

import NavControl from "components/navControl/NavControl"
import Accordion from "components/accordion/Accordion"
import Slider from "./Slider"

import styles from "./AboutTeam.module.scss"

const AboutTeamPage = ({ lang, onChangeLang }) => {
  const [isHeaderCollapsed, setHeaderCollapsed] = useState(false)
  const currentScrollAmount = useRef(1)
  const prevPageY = useRef()
  const scrollContainerRef = useRef()

  const handleScroll = useCallback(() => {
    if (prevPageY.current === undefined) {
      prevPageY.current = scrollContainerRef.current.scrollTop
    }

    const deltaY = scrollContainerRef.current.scrollTop - prevPageY.current
    prevPageY.current = scrollContainerRef.current.scrollTop

    if (deltaY === 0) {
      return
    }

    if (deltaY * currentScrollAmount.current > 0) {
      currentScrollAmount.current += deltaY
    } else {
      currentScrollAmount.current = deltaY
    }

    if (currentScrollAmount.current > 10 && !isHeaderCollapsed) {
      setHeaderCollapsed(true)
    } else if (currentScrollAmount.current < -10 && isHeaderCollapsed) {
      setHeaderCollapsed(false)
    }
  }, [isHeaderCollapsed])

  return (
    <div
      onTouchMove={handleScroll}
      ref={scrollContainerRef}
      className={styles.aboutPageRoot}
    >
      <NavControl
        lang={lang}
        onChangeLang={onChangeLang}
        collapsed={isHeaderCollapsed}
      />
      <div className={styles.aboutTeamContainer}>
        <Accordion
          visibleContent={
            <>
              <p className={styles.aboutTeamSectionHeader}>DIE IDEE</p>
              „Menschen aller Erdteile, Zeiten und Epochen teilen die gleichen
              elementaren Gefühle. Obwohl Ausdrucksformen ständiger Wandlung
              unterworfen sind, können wir uns doch noch heute in den antiken
              Dramen{" "}
            </>
          }
          hiddenContent={
            <>
              und deren Helden wiederfinden. Sogar die Art, wie wir die großen
              Geschichten der Menschheit weitererzählen, scheint einem uns
              gegebenen Instinkt zu folgen. In der griechischen Tragödie, in
              Puppenspielen für Kinder, in klassischen Symphonien oder in
              Kinofilmen finden sich sehr ähnliche Spannungsverläufe.
              <p>
                Unter allen Künsten ist es wohl die Musik, die das Gemüt am
                unmittelbarsten zu bewegen vermag. Die Geschichten, die wir an
                den OBERTÖNE Kammermusiktagen erzählen werden, sollen vor allem
                Emotionen hervorrufen. Wortlos werden natürliche Themen des
                Menschseins beleuchtet, und obwohl jeder Zuhörer durch
                persönliche Erfahrungswelten individuell assoziiert, versteht
                doch der Einzelne deutlich den Kern der Botschaft.
              </p>
              <p>
                Nach und nach werden die Charaktere vorgestellt, zwischen denen
                sich die Geschichte entwickelt. Es gibt feierliche Szenen,
                intensive Diskussionen, große Monologe und berührende Romanzen.
                Jede auftretende Persönlichkeit bereichert die gemeinsam
                erzählte ‚Handlung‘ durch ihre ureigene Farbe. Gleichwohl sich
                ein großer Bogen über die ganze Konzertwoche spannt, wird auch
                jeder Abend für sich ein erlebenswerter Teil sein.“
              </p>
              <p className={styles.aboutTeamSectionFooter}>
                Mariya Nesterovska und Hubert Mittermayer Nesterovskiy –
                Künstlerische Leitung
              </p>
            </>
          }
        />

        <Slider
          images={[
            "about/slider-1/1401.jpg",
            "about/slider-1/1402.jpg",
            "about/slider-1/1403.jpg",
            "about/slider-1/1404.jpg",
            "about/slider-1/1501.jpg",
            "about/slider-1/1502.jpg",
            "about/slider-1/1503.jpg",
            "about/slider-1/1504.jpg",
            "about/slider-1/1601.jpg",
            "about/slider-1/1602.jpg",
            "about/slider-1/1603.jpg",
            "about/slider-1/1604.jpg",
            "about/slider-1/1701.jpg",
            "about/slider-1/1702.jpg",
            "about/slider-1/1703.jpg",
            "about/slider-1/1704.jpg",
            "about/slider-1/1801.jpg",
            "about/slider-1/1802.jpg",
            "about/slider-1/1803.jpg",
            "about/slider-1/1804.jpg",
            "about/slider-1/1901.jpg",
            "about/slider-1/1902.jpg",
            "about/slider-1/1903.jpg",
            "about/slider-1/1904.jpg",
            "about/slider-1/2001.jpg",
            "about/slider-1/2002.jpg",
            "about/slider-1/2003.jpg",
            "about/slider-1/2004.jpg",
          ]}
        />

        <Accordion
          visibleContent={
            <>
              <p
                className={styles.aboutTeamSectionHeader}
                style={{ maxWidth: "345px" }}
              >
                WAS BISHER GESCHAH
              </p>
              <p>
                Seit dem Gründungsjahr 2014 haben 24 Künstler aus elf Ländern
                das Publikum der OBERTÖNE begeistert:
              </p>
              Rafael Bonavita (Uruguay) – Gitarre / Barockgitarre
            </>
          }
          hiddenContent={
            <>
              <p>Alexandre Castro-Balbi (Frankreich) – Violoncello</p>
              <p>Francesco Corti (Italien) – Cembalo / Orgel</p>
              <p>Bruno Delepelaire (Frankreich) – Violoncello</p>
              <p>Vital Julian Frey (Schweiz) – Cembalo / Orgel</p>
              <p>François Guerrier (Frankreich) – Cembalo / Orgel</p>
              <p>Nicola Jovanović (Serbien) – Violoncello</p>
              <p>Markus Kuen (Österreich) – Trompete</p>
              <p>Nenad Lečić (Serbien) – Klavier</p>
              <p>Karl Markovics (Österreich) – Sprecher</p>
              <p>Hubert Mittermayer Nesterovskiy (Österreich) – Fagott</p>
              <p>Mariya Nesterovska (Ukraine) – Violine</p>
              <p>Marcelo Nisinman (Argentinien) – Bandoneon</p>
              <p>Chris Norz (Österreich) – Drums</p>
              <p>Andreas Oberaigner (Österreich) – Klarinette</p>
              <p>Michael Oberaigner (Österreich) – Schlagwerk</p>
              <p>Robert Oberaigner (Österreich) – Klarinette</p>
              <p>David Pia (Schweiz) – Violoncello</p>
              <p>Iwan Podjomow (Russland) – Oboe</p>
              <p>Leonhard Roczek (Österreich) – Violoncello</p>
              <p>Walter Rumer (Österreich) – Violone</p>
              <p>Gabriel Schwabe (Deutschland) – Violoncello</p>
              <p>Anton Mecht Spronk (Niederlande/Schweiz) – Violoncello</p>
              <p>Maurice Steger (Schweiz) – Blockflöte</p>
              <p>Tobias Steinberger (Österreich) – Perkussion</p>
              <p>Alexander Steixner (Österreich) – Posaune</p>
              <br />
              <br />
              <p>
                Dabei wurde an 24 Konzertabenden die Musik von 93 Komponisten
                zum Klingen gebracht:
              </p>
              <p>
                Johan Agrell, Adrienne Albert, Arno H. Babadschanjan, Johann
                Sebastian Bach, Béla Bartók, Ludwig van Beethoven, Alain
                Bernaud, Giovanni Antonio Bertoli, Germo di Blasio, William
                Bolcom, Roger Boutry, José Bragato, Barbara Brodi, Benjamin
                Britten, Dieterich Buxtehude, Samuel Capricornus, Pintín
                Castellanos, Fortunato Chelleri, Peter Child, Juan Carlos
                Cobián, Francesco Corbetta, François Couperin, Pedro Datta,
                Antoine Dard, George Enescu, Manuel de Falla, Andrea Falconieri,
                Johann Friedrich Fasch, Gabriel Fauré, Léo Ferré, Giovanni
                Battista Fontana, Jean Françaix, César Franck, Johann Joseph
                Fux, Carlos Gardel, Francesco Geminiani, George Gershwin,
                Alberto Ginastera, Michail Glinka, Edvard Grieg, Joseph Haydn,
                Kyle Hovatter, Johann Nepomuk Hummel, Leoš Janacek, Kaappo
                Järvinen, Antonio Carlos Jobim, Daniel Humberto Joze, Giya
                Kantscheli, Johann Hieronymus Kapsberger, Charles Koechlin,
                Fritz Kreisler, Konrad Lang, Györgi Ligeti, Pietro Locatelli,
                Celso Machado, Pedro Maffia, Marin Marais, Benedetto Marcello,
                Rosendo Mendizábal, Hubert Mittermayer Nesterovskiy, Mariano
                Mores, Gottlieb Muffat, Santiago de Murcia, Diego Ortiz,
                Giovanni Battista Pergolesi, Astor Piazzolla, Werner Pirchner,
                Johann Georg Pisendel, Francis Poulenc, Sergei Prokofjew,
                Gerardo M. Rodríguez, Camille Saint-Saens, Federico Maria
                Sardelli, Christoph Schaffrath, Johann H. Schmelzer, Franz
                Schubert, Robert Schumann, Bartolomeo de Selma y Salaverde,
                Gilles Silvestrini, Howard Skempton, Bedrich Smetana, Tobias
                Steinberger, Igor Strawinsky, Joseph Suk, Osvaldo Tarantino,
                Georg Philipp Telemann, Erkki-Sven Tüür, Francesco M. Veracini,
                Robert de Visée, Giovanni B. Vitali, Antonio Vivaldi, Carl Maria
                von Weber, Eugene Ysaye, Jan Dismas Zelenka.
              </p>
            </>
          }
        />

        <Slider
          images={[
            "about/slider-2/01.jpg",
            "about/slider-2/02.jpg",
            "about/slider-2/03.jpg",
            "about/slider-2/04.jpg",
            "about/slider-2/05.jpg",
            "about/slider-2/06.jpg",
            "about/slider-2/07.jpg",
            "about/slider-2/08.jpg",
            "about/slider-2/09.jpg",
            "about/slider-2/10.jpg",
            "about/slider-2/11.jpg",
            "about/slider-2/12.jpg",
            "about/slider-2/13.jpg",
            "about/slider-2/14.jpg",
            "about/slider-2/15.jpg",
            "about/slider-2/16.jpg",
            "about/slider-2/17.jpg",
            "about/slider-2/18.jpg",
            "about/slider-2/19.jpg",
            "about/slider-2/20.jpg",
            "about/slider-2/21.jpg",
            "about/slider-2/22.jpg",
            "about/slider-2/23.jpg",
            "about/slider-2/24.jpg",
            "about/slider-2/25.jpg",
            "about/slider-2/26.jpg",
          ]}
        />

        <Accordion
          visibleContent={
            <>
              <p className={styles.aboutTeamSectionHeader}>UNSER ZIEL</p>
              In außergewöhnlichen Konzerten möchte der OBERTÖNE
              Kammermusikverein einem breiten Publikum die Möglichkeit geben,
              einzigartigen Musikerpersönlichkeiten unmittelbar und in
              persönlichem Rahmen{" "}
            </>
          }
          hiddenContent={
            <>
              zu begegnen. Gleichzeitig fördert der Verein den internationalen
              künstlerischen Austausch zwischen Musikern im Bereich der
              Kammermusik.
            </>
          }
        />

        <div className={styles.teamContainer}>
          <img src="about/Team.jpg" className={styles.teamPicture} />
        </div>

        <Accordion
          visibleContent={
            <>
              <p className={styles.aboutTeamSectionHeader}>DAS TEAM</p>
              Obmann: Toni Innauer
              <br />
              Künstlerische Leitung: Mariya Nesterovska und Hubert Mittermayer
              Nesterovskiy
              <br />
              Konzertmanagement: Katharina Jeske
              <br />
              Künstlerisches Betriebsbüro: Alena Pardatscher
            </>
          }
        />

        <div className={styles.teamContainer}>
          <img src="about/Club.png" className={styles.teamPicture} />
        </div>

        <Accordion
          visibleContent={
            <>
              <p
                className={classNames(
                  styles.aboutTeamSectionHeader,
                  styles.clubLink
                )}
              >
                CLUB-MITGLIED WERDEN
              </p>
              Seien Sie noch näher dran und früher informiert! Das sind die
              Vorteile einer Mitgliedschaft im OBERTÖNE-Club:
              <br />
              <ul>
                <li> bis 20% Ermäßigung für unsere Konzerte </li>
                <li> Sonderveranstaltungen</li>
                exklusiv für Mitglieder
                <li>
                  {" "}
                  Frühzeitige Information über Konzerte, Programme, Künstler
                </li>
              </ul>
              <br />
              Jahresbeitrag:
              <ul>
                <li>Clubmitglied: ab € 20,–</li>
                <li>Förderndes Clubmitglied: ab € 100,-</li>
              </ul>
              Wenn Sie Interesse an einer Mitgliedschaft haben, bitte schreiben
              Sie uns ein Email an{" "}
              <a href="mailto:info@obertone.at">info@obertone.at </a>
              oder schließen Sie Ihre Mitgliedschaft direkt in unserem
              Ticketshop ab auf{" "}
              <a href="https://obertone.at/dabeisein/">
                www.obertone.at/dabeisein
              </a>
              !
            </>
          }
        />
      </div>
    </div>
  )
}

export default AboutTeamPage
