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
            18 Uhr Bernardisaal,
            <br />
            <b>massenet.nisinman.scarlatti.schumann.brahms&hellip;</b>
          </div>
          <div className={styles.programDescrciptionFooter}>
            Es spielen Mariya Nesterovska, Nenad Lečić, François Guerrier,
            Marcelo Nisinman, Rafael Bonavita, Hubert Mittermayer Nesterovskiy,
            Jan Krigovsky.
          </div>
        </div>
        <div className={styles.programSection}>
          <b>Jules Massenet:</b> „Valse très lente“
          <br />
          <b>Marcelo Nisinman, Astor Piazzolla u.&thinsp;a.:</b> Tangomusik für
          Ensemble
          <br />
          <b>Domenico Scarlatti:</b> Sonaten K&thinsp;41 und K&thinsp;79 für
          Cembalo solo
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
            18 Uhr Bernardisaal, Stift Stams.
            <br />
            <b>chiabrano.nisinman.piazzolla.barriere.westhoff</b>
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
          <b>Astor Piazzolla, Marcelo Nisinman u.&thinsp;a:</b> Tangomusik für
          Ensemble
          <br />
          <b>Jean-Babtiste Barriere:</b> Sonate Nr.&thinsp;4 (Livré IV) in G-Dur
          für Violone und Cembalo
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
            18 Uhr Bernardisaal, Stift Stams.
            <br />
            <b>rachmaninow.vivaldi.breit.barriere.ponomarew.&shy;platti</b>
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
            18 Uhr Bernardisaal, Stift Stams.
            <br />
            <b>
              catala.bertoli.schostakowitsch.kantscheli.&shy;merula.&shy;dubois.&shy;murcia.&shy;bolling
            </b>
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
          chiesa e camera" Buch 3, Op.&thinsp;12"
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
