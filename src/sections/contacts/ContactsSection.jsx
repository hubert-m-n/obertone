import React from "react"
import classNames from "classnames"

import { SECTION_NAMES } from "common/sectionNames"
import albumCoverImage from "images/listen.jpg"

import styles from "./ContactsSection.module.scss"
import commonStyles from "../../common/commonStyles.module.scss"

export default ({ onRef }) => (
  <div id={SECTION_NAMES.LISTEN} className={styles.sectionWrapper} ref={onRef}>
    <h2
      className={classNames(
        commonStyles.titleWithBackground,
        styles.contactsSectionTitle
      )}
    >
      Reinhören und Nachhören
    </h2>

    <div className={styles.content}>
      <img src={albumCoverImage} className={styles.albumCover} alt="listen" />
      <div className={styles.mainSection}>
        Wollen Sie die Musik der OBERTÖNE auch zu Hause oder unterwegs hören?
        Möchten Sie Emanuel Altenburgers Doku-Film sehen? Hier finden Sie alle
        Infos über das Bestellen, Laden oder Streamen:
      </div>
      <a
        href="https://www.obertone.at/ueberuns/"
        className={classNames(
          styles.assetsLink,
          commonStyles.withRoundedBorder
        )}
      >
        OBERTÖNE@home
        <div className={styles.assetsLinkSmallText}>
          Live-CDs, Streams, Doku-Film
        </div>
      </a>

      <div className={styles.section}>
        Änderungen in Programm und Besetzung vorbehalten. Aufgrund der Aktuellen
        pandemischen Situation können sich auch genauer Aufführungsort oder
        Konzertdatum und -zeit ändern.
      </div>

      <div className={styles.section}>
        <div>Für den Inhalt verantwortlich:</div>
        OBERT&Ouml;NE Kammermusikverein
        <br />
        Obmann:&ensp;Toni Innauer
        <br />
        K&uuml;nstlerische Leitung:&ensp;Mariya Nesterovska und Hubert
        Mittermayer Nesterovskiy
        <br />
        Postfach 04, 6029 Innsbruck
        <br />
        <a href="mailto:info@obertone.at" className={styles.obertoneLink}>
          info@obertone.at
        </a>
        <br />
      </div>

      <div className={styles.section}>
        <p>
          Bildnachweis: Alle Fotos von Mariya Nesterovska (außer „Mariya
          Nesterovska" von <nobr>Emanuel Altenburger</nobr> und „Sebastian
          Wienand" von <nobr>Sebastian Wienand</nobr>)
          <br />
          Design: Hubert Mittermayer Nesterovskiy
          <br />
          Programmierung: Andrey Filenko
        </p>
        ©2021 OBERT&Ouml;NE Kammermusikverein
      </div>
    </div>
  </div>
)
