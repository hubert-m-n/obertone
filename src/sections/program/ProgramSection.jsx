/* eslint-disable jsx-a11y/alt-text */
import React from "react"
import classNames from "classnames"

import { SECTION_NAMES } from "common/sectionNames"
import Program1Picture from "images/programs/mi.gif"
import Program2Picture from "images/programs/do.gif"
import Program3Picture from "images/programs/sa.gif"
import Program4Picture from "images/programs/so.gif"

import styles from "./ProgramSection.module.scss"
import commonStyles from "../../common/commonStyles.module.scss"

export default ({ onRef }) => (
  <div
    id={SECTION_NAMES.PROGRAM}
    ref={onRef}
    className={classNames(commonStyles.sectionWrapper, styles.sectionWrapper)}
  >
    <h2 className={commonStyles.titleWithBackground}>
      MUSIK AUS FÜNF JAHRHUNDERTEN
    </h2>
    <div className={styles.content}>
      {/* Program 1 */}
      <div className={styles.program}>
        <div
          className={classNames(
            styles.programSection,
            styles.programPictureSection
          )}
        >
          <img src={Program1Picture} className={styles.programPicture} />
        </div>
        <div className={styles.programSection}>
          <div className={styles.programTitle}>
            MITTWOCH
            <br />
            15. SEPTEMBER 2021
          </div>
          <div className={styles.programDescrciption}>
            <p>18 Uhr Bernardisaal, Stift Stams</p>
            <p>
              <b>
                massenet.decaro.piazzolla.scarlatti.<nobr>gardel.</nobr>
                <nobr>nisinman.</nobr>
                <nobr>schumann.</nobr>
                <nobr>brahms</nobr>
              </b>
            </p>
          </div>
          <div className={styles.programDescrciptionFooter}>
            Es spielen Mariya Nesterovska, Nenad Lečić, François Guerrier,
            Marcelo Nisinman, Rafael Bonavita, Hubert Mittermayer Nesterovskiy,
            Jan Krigovsky.
          </div>
        </div>
        <div className={styles.programSection}>
          <b>Jules Massenet:</b> „Valse très lente“ für Klavier solo
          <br />
          <b>Julio de Caro:</b> „Boedo“ für Bandoneon und Fagott (arr. M.
          Nisinman)
          <br />
          <b>Astor Piazzolla:</b> „Milonga del Angel“ für Violine, Bandoneon,
          Fagott, Gitarre, Klavier und Kontrabass (arr. Nisinman)
          <br />
          <b>Domenico Scarlatti:</b> Sonaten K&thinsp;41 und K&thinsp;79 für
          Cembalo solo
          <br />
          <b>Johann Ernst Galliard:</b> Sonate Nr.&thinsp;6 in C-Dur für Fagott
          und B.&thinsp;C.
          <br />
          <b>Carlos Gardel:</b> „Soledad“ für Bandoneon solo (arr. Nisinman)
          <br />
          <b>Marcelo Nisinman:</b> „El Tango“ für Fagott, Bandoneon, Klavier und
          Kontrabass
          <br />
          (Aus der F.A.E.-Sonate:)
          <br />
          <b>Robert Schumann:</b> Intermezzo für Violine und Klavier
          <br />
          <b>Johannes Brahms:</b> Scherzo für Violine und Klavier
        </div>
      </div>
      {/* Program 2 */}
      <div className={styles.program}>
        <div
          className={classNames(
            styles.programSection,
            styles.programPictureSection
          )}
        >
          <img src={Program2Picture} className={styles.programPicture} />
        </div>
        <div className={styles.programSection}>
          <div className={styles.programTitle}>
            DONNERSTAG
            <br />
            16. SEPTEMBER 2021
          </div>
          <div className={styles.programDescrciption}>
            <p>18 Uhr Bernardisaal, Stift Stams.</p>
            <p>
              <b>
                chiabrano.murcia.nisinman.<nobr>piazzolla.</nobr>
                <nobr>barriere.</nobr>
                <nobr>westhoff</nobr>
              </b>
            </p>
          </div>
          <div className={styles.programDescrciptionFooter}>
            Es spielen Mariya Nesterovska, Marcelo Nisinman, Rafael Bonavita,
            Nenad Lečić, Hubert Mittermayer Nesterovskiy, François Guerrier, Jan
            Krigovsky.
          </div>
        </div>
        <div className={styles.programSection}>
          <b>Gaetano Chiabrano:</b> Sonate in D-Dur für Fagott und B.&thinsp;C.
          <br />
          <b>Santiago de Murcia:</b> „Marizápalos“ für Gitarre solo
          <br />
          <b>Astor Piazzolla&thinsp;/&thinsp; Marcelo Nisinman:</b> „Otoño
          Porteño“ für Klavier solo
          <br />
          <b>Astor Piazzolla:</b> „Asleep“ aus „Five Tango Sensations“ für
          Violine, Bandoneon, Orgel und Kontrabass (arr. Nisinman)
          <br />
          <b>Jean-Babtiste Barriere:</b> Sonate Nr.&thinsp;4 (Livré IV) in G-Dur
          für Violone und Cembalo
          <br />
          <b>Kurt Weill:</b> „Youkali“ für Violine und Bandoneon (arr. Nisinman)
          <br />
          <b>Marcelo Nisinman:</b> „Gerard's Tango“ für Fagott, Bandoneon,
          Gitarre, Violine, Klavier und Kontrabass
          <br />
          <b>Johann P. v. Westhoff:</b> Sonate Nr.&thinsp;3 in d-moll für
          Violine und B.&thinsp;C.
        </div>
      </div>
      {/* Program 3 */}
      <div className={styles.program}>
        <div
          className={classNames(
            styles.programSection,
            styles.programPictureSection
          )}
        >
          <img src={Program3Picture} className={styles.programPicture} />
        </div>
        <div className={styles.programSection}>
          <div className={styles.programTitle}>
            SAMSTAG
            <br />
            18. SEPTEMBER 2021
          </div>
          <div className={styles.programDescrciption}>
            <p>18 Uhr Bernardisaal, Stift Stams.</p>
            <p>
              <b>
                rachmaninow.vivaldi.breit.<nobr>barriere.</nobr>
                <nobr>ponomarew.</nobr>
                <nobr>platti</nobr>
              </b>
            </p>
          </div>
          <div className={styles.programDescrciptionFooter}>
            Es spielen Mariya Nesterovska, Leonhard Roczek, Nenad Lečić, Hubert
            Mittermayer Nesterovskiy, Rafael Bonavita, François Guerrier, Jan
            Krigovsky.
          </div>
        </div>
        <div className={styles.programSection}>
          <b>Sergei Rachmaninow:</b> „Trio élégiaque“ Nr.&thinsp;1 in g-moll für
          Klavier, Violine und Violoncello
          <br />
          <b>Antonio Vivaldi:</b> Sonate in B-Dur für Fagott und B.&thinsp;C.
          RV&thinsp;47
          <br />
          <b>Bert Breit:</b> Cadenza für Violine solo
          <br />
          <b>Jean-Baptiste Barriere:</b> Sonata a tre Nr.&thinsp;2 (Livre III)
          d-moll
          <br />
          <b>Dmitri Ponomarew</b> „Elysium“ und „Three stories from a family
          album“ aus den „Forget-me-nots" für Violoncello und Klavier
          <br />
          <b>Giovanni B. Platti:</b> Sonata a tre in D-Dur WD&thinsp;681
        </div>
      </div>
      {/* Program 4 */}
      <div className={styles.program}>
        <div
          className={classNames(
            styles.programSection,
            styles.programPictureSection
          )}
        >
          <img src={Program4Picture} className={styles.programPicture} />
        </div>
        <div className={styles.programSection}>
          <div className={styles.programTitle}>
            SONNTAG
            <br />
            19. SEPTEMBER 2021
          </div>
          <div className={styles.programDescrciption}>
            <p>18 Uhr Bernardisaal, Stift Stams.</p>
            <p>
              <b>
                catala.bertoli.schostakowitsch.<nobr>merula.</nobr>
                <nobr>kantscheli.</nobr>
                <nobr>merula.</nobr>
                <nobr>steinberger.norz.</nobr>
                <nobr>dubois.</nobr>
                <nobr>murcia.</nobr>murcia.<nobr>dubois</nobr>
              </b>
            </p>
          </div>
          <div className={styles.programDescrciptionFooter}>
            Es spielen Mariya Nesterovska, Hubert Mittermayer Nesterovskiy,
            Nenad Lečić, Rafael Bonavita, François Guerrier, Jan Krigovsky,
            Tobias Steinberger, Chris&nbsp;Norz.
          </div>
        </div>
        <div className={styles.programSection}>
          <b>Rafael Catalá:</b> „Esperando al minotauro“ (arr. H. Mittermayer
          Nesterovskiy)
          <br />
          <b>Giovanni A. Bertoli:</b> Sonate Nr.&thinsp;6 a-moll für Fagott und
          B.&thinsp;C.
          <br />
          <b>Dmitri Schostakowitsch:</b> Preludium und Fuge Nr.&thinsp;2 für
          Klavier solo
          <br />
          <b>Gija Kantscheli:</b> Miniaturen Nr.&thinsp;10, 15 und 13 für
          Violine und Klavier
          <br />
          <b>Tarquinio Merula:</b> aus „Canzoni overo sonate concertate per
          chiesa e camera" Buch 3, Op.&thinsp;12
          <br />
          <b>Tobias Steinberger & Chris Norz:</b> „Go ahead“ für zwei
          Perkussionisten
          <br />
          <b>Pierre-Max Dubois:</b> „Sonatine tango" für Fagott und Klavier
          <br />
          <b>Santiago de Murcia:</b> „Bailad Caracoles“
          <br />
          <b>Claude Bolling:</b> „Hora“ aus der Suite für Violine und Trio
        </div>
      </div>
    </div>
  </div>
)
