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
      MUSIK AUS F&Uuml;NF JAHRHUNDERTEN
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
            13. SEPTEMBER 2023
          </div>
          <div className={styles.programDescrciption}>
            <p>18 Uhr Bernardisaal, Stift Stams</p>
            <p>
              <b>
                telemann.brahms.mittermayer.lecic.
                <nobr>pisendel.</nobr>
                <nobr>nisinman</nobr>
              </b>
            </p>
          </div>
          <div className={styles.programDescrciptionFooter}>
            Es spielen Mariya Nesterovska, Nenad Le&#269;i&#263;, Marcelo
            Nisinman, François Guerrier, Rafael Bonavita, Hubert Mittermayer
            Nesterovskiy, Jan Krigovsky.
          </div>
        </div>
        <div className={styles.programSection}>
          <b>Georg Philipp Telemann:</b> Triosonate in F-Dur TWV 42:F10
          <br />
          <b>Johannes Brahms:</b> Drei Intermezzi f&uuml;r Klavier
          op.&thinsp;117
          <br />
          <b>Hubert Mittermayer Nesterovskiy/Nenad Le&#269;i&#263;:</b>{" "}
          „Reazione“ f&uuml;r Fagott und Klavier (2023; UA)
          <br />
          <b>Johann Georg Pisendel:</b> Sonate in D-Dur f&uuml;r Violine und
          B.&nbsp;C.
          <br />
          <b>Marcelo Nisinman:</b> „Argentinos en Europa“ f&uuml;r Bandoneon
          solo (2012)
          <br />
          <b>Marcelo Nisinman:</b> „Erasmus“ f&uuml;r Bandoneon, Violine,
          Klavier und Kontrabass
          <br />
          <b>Georg Philipp Telemann:</b> Triosonate in B-Dur TWV 42:B1
          <br />
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
            14. SEPTEMBER 2023
          </div>
          <div className={styles.programDescrciption}>
            <p>18 Uhr Bernardisaal, Stift Stams.</p>
            <p>
              <b>
                piazzolla.defesch.couperin.
                <nobr>califano.</nobr>
                <nobr>martinu.</nobr>
                <nobr>nisinman</nobr>
              </b>
            </p>
          </div>
          <div className={styles.programDescrciptionFooter}>
            Es spielen Mariya Nesterovska, François Guerrier, Marcelo Nisinman,
            Rafael Bonavita, Hubert Mittermayer Nesterovskiy, Nenad
            Le&#269;i&#263;, Jan Krigovsky.
          </div>
        </div>
        <div className={styles.programSection}>
          <b>Astor Piazzolla:</b> „Histoire du Tango“ (1933; arr. f&uuml;r
          Tangoquartett v. M.&nbsp;Nisinman, 2010)
          <br />
          <b>Igo Kranowsi/Henryk Schnapper:</b> „Bajka“ (1985; arr. f&uuml;r
          Klavier solo Nisinman 2018, ÖE)
          <br />
          <b>Willem de Fesch:</b> Sonate Nr.&nbsp;2 in B-Dur op.&nbsp;88
          f&uuml;r Fagott und B.&nbsp;C.
          <br />
          <b>François Couperin:</b> Vier St&uuml;cke aus Livre III Ordre 18
          f&uuml;r Cembalo solo
          <br />
          <b>Arcangelo Califano:</b> Triosonate in F-Dur
          <br />
          <b>Bohuslav Martinů:</b> Drei Arabesken aus H. 201 f&uuml;r Violine
          und Klavier
          <br />
          <b>Astor Piazzolla:</b> „Kicho“ f&uuml;r Tangoensemble (1993)
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
            16. SEPTEMBER 2023
          </div>
          <div className={styles.programDescrciption}>
            <p>18 Uhr Bernardisaal, Stift Stams.</p>
            <p>
              <b>
                roman.cazzati.lotti.boutry.
                <nobr>bartolotti.</nobr>
                <nobr>bertali.</nobr>
                <nobr>tartini</nobr>
              </b>
            </p>
          </div>
          <div className={styles.programDescrciptionFooter}>
            Es spielen Mariya Nesterovska, Hubert Mittermayer Nesterovskiy,
            Nenad Le&#269;i&#263;, Rafael Bonavita, François Guerrier, Jan
            Krigovsky, Tobias Steinberger.
          </div>
        </div>
        <div className={styles.programSection}>
          <b>Elliot Roman:</b> „Signal" f&uuml;r Klavier und Tonband (2021; EA)
          <br />
          <b>Maurizio Cazzati:</b> Passacaglia und Capriccio sopra 12 note
          <br />
          <b>Antonio Lotti:</b> Triosonate in A-Dur
          <br />
          <b>Roger Boutry:</b> „Interférences I" f&uuml;r Fagott und Klavier
          (1972)
          <br />
          <b>Angelo M. Bartolotti:</b> Ciaccona in C-Dur für Gitarre solo
          <br />
          <b>Antonio Bertali:</b> Sonata a tre N.&thinsp;1, d-moll
          <br />
          <b>Giuseppe Tartini:</b> Sonate in g-moll „Il Trillo del Diavolo"
          f&uuml;r Violine und B.&thinsp;C.
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
            17. SEPTEMBER 2023
          </div>
          <div className={styles.programDescrciption}>
            <p>18 Uhr Bernardisaal, Stift Stams.</p>
            <p>
              <b>
                hummel.mittermayer.biber.marcello.
                <nobr>matthusen.</nobr>
                <nobr>skoryk.</nobr>
                <nobr>vivaldi</nobr>
              </b>
            </p>
          </div>
          <div className={styles.programDescrciptionFooter}>
            Es spielen Mariya Nesterovska, Nenad Le&#269;i&#263;, Rafael
            Bonavita, François Guerrier, Stephan Moosmann, Hubert Mittermayer
            Nesterovskiy, Jan Krigovsky.
          </div>
        </div>
        <div className={styles.programSection}>
          <b>Johann N. Hummel:</b> Grande Serenade in C-Dur f&uuml;r Violine,
          Klarinette, Fagott, Gitarre und Klavier, op.&thinsp;66
          <br />
          <b>Hubert Mittermayer Nesterovskiy:</b> „Cleavage" f&uuml;r Fagott
          solo (2023; UA)
          <br />
          <b>Heinrich I.F.&thinsp;v. Biber:</b> Sonate Nr.&thinsp;5 in e-moll
          f&uuml;r Violine und B.&thinsp;C.
          <br />
          <b>Benedetto Marcello:</b> Sonate Nr.&thinsp;1 in F-Dur f&uuml;r
          Fagott und B.&thinsp;C.
          <br />
          <b>Myroslaw Skoryk:</b> Allegretto und Dance aus „Hutsul Triptych”
          f&uuml;r Violine und Klavier (2013; ÖE)
          <br />
          <b>Antonio Vivaldi:</b> Triosonate in G-Dur, RV&nbsp;820
        </div>
      </div>
    </div>
  </div>
)
