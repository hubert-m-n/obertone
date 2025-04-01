/* eslint-disable jsx-a11y/alt-text */
import React from "react"
import classNames from "classnames"

import { SECTION_NAMES } from "common/sectionNames"
import Program1Picture from "images/programs/mi.jpg"
import Program2Picture from "images/programs/do.jpg"
import Program3Picture from "images/programs/sa.jpg"
import Program4Picture from "images/programs/so.jpg"

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
            17. SEPTEMBER 2025
          </div>
          <div className={styles.programDescrciption}>
            <p>18 Uhr Bernardisaal, Stift Stams</p>
            <p>
              <b>
                scelsi.caldara
                <nobr>veracini.</nobr>
                <nobr>silwestrow.</nobr>
                <nobr>nisinman.</nobr>
                <nobr>brahms</nobr>
              </b>
            </p>
          </div>
          <div className={styles.programDescrciptionFooter}>
            Es spielen Mariya Nesterovska, Jan Krigovsky, Rafael Bonavita,
            Marcelo Nisinman, Nenad Le&#269;i&#263;, Yago Mahugo, Hubert Mittermayer
            Nesterovskiy.
          </div>
        </div>
        <div className={styles.programSection}>
          <b>Giacinto Scelsi:</b> &bdquo;Mantram&ldquo; f&uuml;r Kontrabass solo
          (1967)
          <br />
          <b>Antonio Caldara:</b> Trio in E-Dur op.&thinsp;2, Nr.&thinsp;11
          <br />
          <b>Walentin Silwestrow:</b> &bdquo;Hommage an
          J.&thinsp;S.&thinsp;B.&ldquo; f&uuml;r Violine und Klavier (Kyjiw,
          2009)
          <br />
          <b>Marcelo Nisinman:</b> Musik für Tangoensemble
          <br />
          <b>Johannes Brahms:</b> Trio op.&thinsp; f&uuml;r Violine, Fagott
          (Horn) und Klavier
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
            18. SEPTEMBER 2025
          </div>
          <div className={styles.programDescrciption}>
            <p>18 Uhr Bernardisaal, Stift Stams.</p>
            <p>
              <b>
                piazzolla.telemann.
                <nobr>mittermayer.</nobr>
                <nobr>schumann.</nobr>
                <nobr>pandolfi.</nobr>
                <nobr>nussio.</nobr>
                <nobr>nisinman</nobr>
              </b>
            </p>
          </div>
          <div className={styles.programDescrciptionFooter}>
            Es spielen Mariya Nesterovska, Marcelo Nisinman, Yago Mahugo,
            Rafael Bonavita, Hubert Mittermayer Nesterovskiy, Nenad
            Le&#269;i&#263;, Jan Krigovsky.
          </div>
        </div>
        <div className={styles.programSection}>
          <b>Astor Piazzolla:</b> &bdquo;Five Tango Sensations&ldquo; (arr. Nisinman)
          <br />
          <b>Georg Ph. Telemann:</b> Sonate in e-moll für Fagott und B.&thins;C. TWV41:e5
          <br />
          <b>Giovanni A. Pandolfi Mealli:</b> Sonate Nr.&thinsp;4 &bdquo;La castella&ldquo; f&uuml;r Violine und B.&thinsp;C.
          <br />
          <b>Otmar Nussio:</b> Variationen &uuml;ber eine Arietta von Pergolesi f&uuml;r Fagott und Klavier (1953)
          <br />
          <b>Marcelo Nisinman:</b> Musik f&uuml;r Tangoensemble
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
            20. SEPTEMBER 2025
          </div>
          <div className={styles.programDescrciption}>
            <p>18 Uhr Bernardisaal, Stift Stams.</p>
            <p>
              <b>
                die.geschichte.vom.soldaten
              </b>
            </p>
          </div>
          <div className={styles.programDescrciptionFooter}>
            Es spielen Karl Markovics, Mariya Nesterovska, Andreas Oberaigner, Hubert Mittermayer Nesterovskiy, Thomas Oberleitner, N.N., 
            Dragan Trajkovski, Michael Oberaigner.
          </div>
        </div>
        <div className={styles.programSection}>
          <b>Carl Maria v. Weber:</b> Overture zur Oper &bdquo;Abu Hassan&ldquo; J.&thinsp;106 (arr. Mittermayer Nesterovskiy)
          <br />
          <b>Igor Strawinsky:</b> &bdquo;Die Geschichte vom Soldaten&ldquo; Musiktheater in zwei Teilen
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
            21. SEPTEMBER 2025
          </div>
          <div className={styles.programDescrciption}>
            <p>18 Uhr Bernardisaal, Stift Stams.</p>
            <p>
              <b>
                galliard.matthusen.
                <nobr>maier.</nobr>
                <nobr>frescobaldi.</nobr>
                <nobr>child.</nobr>
                <nobr>veracini.</nobr>
                <nobr>spohr.</nobr>
                <nobr>vivaldi</nobr>

              </b>
            </p>
          </div>
          <div className={styles.programDescrciptionFooter}>
            Es spielen Mariya Nesterovska, Yago Mahugo, Nenad Le&#269;i&#263;, Rafael
            Bonavita, Hubert Mittermayer Nesterovskiy, Jan
            Krigovsky.
            <br />
            <br />
            <font size="3">
              Durch die TV-Aufzeichnung dieses Konzerts kann es an manchen
              Pl&auml;tzen zu eventuellen Sichtbeeintr&auml;chtigungen kommen.
              Danke f&uuml;r Ihr Verst&auml;ndnis!
            </font>
          </div>
        </div>
        <div className={styles.programSection}>
          <b>Johann Ernst Galliard:</b> Sonate Nr.&thinsp;6 in C-Dur f&uuml;r Fagott und B.&thinsp;C.
          <br />
          <b>Paula Matthusen:</b> &bdquo;In absentia&ldquo; f&uuml;r Violine, Klavier, Gl&auml;ser und Elektronik (2015)
          <br />
          <b>Amanda Maier:</b> Allegro vivace aus &bdquo;6 Pi&egrave;ces&ldquo; f&uuml;r Violine und Klavier
          <br />
          <b>Girolamo Fresobaldi:</b> Canzoni a due bassi, F8.17c und F8.16c
          <br />
          <b>Peter Child:</b> Fantasia f&uuml;r Cembalo solo (1980)
          <br />
          <b>Francesco Maria Veracini:</b> Sonate in g-moll f&uuml;r Violine und B.&thinsp;C. op.&thinsp;2, Nr.&thinsp;5
          <br />
          <b>Louis Spohr:</b> Adagio f&uuml;r Fagott und Klavier
          <br />
          <b>Antonio Vivaldi:</b> Triosonate in C-Dur, RV 801
        </div>
      </div>
      <p className={styles.dataprotectionText}>
        Hinweis: Bei unseren Veranstaltungen werden Foto-, Video- und
        Tonaufnahmen gemacht. Mit Buchung Ihres Tickets erkl&auml;ren Sie sich
        mit unseren{" "}
        <a href="https://www.obertone.at/Datenschutz.pdf">
          Datenschutzhinweisen
        </a>{" "}
        einverstanden.
      </p>
    </div>
  </div>
)
