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
            14. SEPTEMBER 2022
          </div>
          <div className={styles.programDescrciption}>
            <p>18 Uhr Bernardisaal, Stift Stams</p>
            <p>
              <b>
                biber.galliard.piazzolla.nisinman.
                <nobr>brahms.</nobr>
                <nobr>buxtehude</nobr>
              </b>
            </p>
          </div>
          <div className={styles.programDescrciptionFooter}>
            Es spielen Mariya Nesterovska, Mikhail Mordvinov, Marcelo Nisinman,
            François Guerrier, Rafael Bonavita, Hubert Mittermayer Nesterovskiy,
            Jan Krigovsky.
          </div>
        </div>
        <div className={styles.programSection}>
          <b>Heinrich I.&thinsp;F. von Biber:</b> Passacaglia f&uuml;r Violine
          solo
          <br />
          <b>Johann Ernst Galliard:</b> Sonate Nr.&thinsp;2 in G-Dur f&uuml;r
          Fagott und B.&thinsp;C.
          <br />
          <b>Astor Piazzolla:</b> „Fuga y Misterio“ für Tangoensemble (1968,
          arr. Nisinman 2022)
          <br />
          <b>
            Marcelo Nisinman & Hubert Mittermayer <nobr>Nesterovskiy:</nobr>
          </b>{" "}
          „One Cuckoo Flew out of the Nest“ f&uuml;r Bandoneon und Fagott
          (2022; UA)
          <br />
          <b>Marcelo Nisinman:</b> „Hereticus“ f&uuml;r Tangoensemble (2018)
          <br />
          <b>Johannes Brahms:</b> Vier Klavierstücke op.&thinsp;119
          <br />
          <b>Dieterich Buxtehude:</b> Sonate in D-Dur op.&thinsp;2 Nr.&thinsp;2
          BuxWV&thinsp;260
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
            15. SEPTEMBER 2022
          </div>
          <div className={styles.programDescrciption}>
            <p>18 Uhr Bernardisaal, Stift Stams.</p>
            <p>
              <b>
                dutilleux.murcia.<nobr>piazzolla</nobr>
              </b>
            </p>
          </div>
          <div className={styles.programDescrciptionFooter}>
            Es spielen Mariya Nesterovska, Marcelo Nisinman, Rafael Bonavita,
            Hubert Mittermayer Nesterovskiy, François Guerrier, Mikhail
            Mordvinov, Jan Krigovsky.
          </div>
        </div>
        <div className={styles.programSection}>
          <b>Henri Dutilleux:</b> Sarabande et Cortege f&uuml;r Fagott und
          Klavier (1950)
          <br />
          <b>Astor Piazzolla:</b> „El penúltimo“ f&uuml;r Tangoensemble (1973;
          arr.&nbsp;Nisinman 2019)
          <br />
          <b>Santiago de Murcia:</b> „Jaracas de la Costa“ f&uuml;r
          Gitarre&nbsp;solo
          <br />
          <b>Astor Piazzolla:</b> „Five Tango Sensations“ (1989,
          arr.&nbsp;Nisinman 2020)
          <br />
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
            17. SEPTEMBER 2022
          </div>
          <div className={styles.programDescrciption}>
            <p>18 Uhr Bernardisaal, Stift Stams.</p>
            <p>
              <b>
                roman.defesch.silwestrow.<nobr>carolo.</nobr>
                <nobr>vitali.</nobr>
                <nobr>mittermayer.</nobr>
                <nobr>erlebach</nobr>
              </b>
            </p>
          </div>
          <div className={styles.programDescrciptionFooter}>
            Es spielen Mariya Nesterovska, Nenad Lečić, Hubert Mittermayer
            Nesterovskiy, Rafael Bonavita, François Guerrier, Jan Krigovsky,
            Tobias Steinberger.
          </div>
        </div>
        <div className={styles.programSection}>
          <b>Elliot Roman:</b> „Signal" f&uuml;r Klavier und Elektronik (2021;
          europ. EA)
          <br />
          <b>Willem de Fesch:</b> Sonate in D-Dur f&uuml;r Fagott und B.C.
          op.&thinsp;8b Nr.&thinsp;1
          <br />
          <b>Valentin Silwestrow:</b> „Hommage
          &aacute;&ensp;J.&thinsp;S.&thinsp;B.“ f&uuml;r Violine und Klavier
          (2009)
          <br />
          <b>Mr.&thinsp;Carolo:</b> Triosonate Nr.&thinsp;9 C-Dur
          <br />
          <b>Tomaso Antonio Vitali:</b> Ciaccona „Parte del Tomaso Vitalino"
          f&uuml;r Violine und B.&nbsp;C.
          <br />
          <b>Hubert Mittermayer Nesterovskiy:</b> Passacaglia „Viaggio del
          Umberto M.&thinsp;N." f&uuml;r Fagott und Looper (2022)
          <br />
          <b>Philipp Heinrich Erlebach:</b> Trio A-Dur Nr.&thinsp;3
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
            18. SEPTEMBER 2022
          </div>
          <div className={styles.programDescrciption}>
            <p>18 Uhr Bernardisaal, Stift Stams.</p>
            <p>
              <b>
                hummel.child.p&auml;rt.
                <nobr>corrette.</nobr>
                <nobr>adams.</nobr>
                <nobr>buxtehude</nobr>
              </b>
            </p>
          </div>
          <div className={styles.programDescrciptionFooter}>
            Es spielen Mariya Nesterovska, Nenad Lečić, François Guerrier,
            Hubert Mittermayer Nesterovskiy, Paul Moosbrugger, Rafael Bonavita,
            Jan Krigovsky.
          </div>
        </div>
        <div className={styles.programSection}>
          <b>Johann Nepomuk Hummel:</b> Serenade in C-Dur{" "}
          <nobr>op.&thinsp;66</nobr>&ensp;f&uuml;r Violine, Klarinette, Fagott,
          Gitarre und Klavier
          <br />
          <b>Peter Child:</b> Toccata und Rag aus der Fantasie f&uuml;r Cembalo
          solo (2003)
          <br />
          <b>Arvo P&auml;rt:</b> „Spiegel im Spiegel" f&uuml;r Violine und
          Klavier
          <br />
          <b>Michel Corrette:</b> Sonate Nr.&thinsp;5 G-Dur aus „Les delices de
          la solitude"
          <br />
          <b>John Adams:</b> „China Gates" f&uuml;r Klavier solo
          <br />
          <b>Dieterich Buxtehude:</b> Triosonate A-Dur op.&thinsp;2 Nr.&thinsp;5
        </div>
      </div>
    </div>
  </div>
)
