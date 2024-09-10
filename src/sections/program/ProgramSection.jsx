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
            18. SEPTEMBER 2024
          </div>
          <div className={styles.programDescrciption}>
            <p>18 Uhr Bernardisaal, Stift Stams</p>
            <p>
              <b>
                fischer.bozza.
                <nobr>veracini.</nobr>
                <nobr>corbetta.</nobr>
                <nobr>catala.</nobr>
                <nobr>buxtehude.</nobr>
                <nobr>finger</nobr>
              </b>
            </p>
          </div>
          <div className={styles.programDescrciptionFooter}>
            Es spielen Mariya Nesterovska, Rafael Bonavita, Hubert Mittermayer
            Nesterovskiy, Nenad Le&#269;i&#263;, François Guerrier, Jan
            Krigovsky, Tobias Steinberger.
          </div>
        </div>
        <div className={styles.programSection}>
          <b>Johann Fischer:</b> Suite in G-Dur aus &bdquo;Musicalische
          Fürstenlust&ldquo;
          <br />
          <b>Eug&egrave;ne Bozza:</b> Fantaisie f&uuml;r Fagott und Klavier
          (1945)
          <br />
          <b>Francesco Veracini:</b> Sonate in c-moll f&uuml;r Violine und Basso
          continuo
          <br />
          <b>Francesco Corbetta:</b> Caprice de Chaconne f&uuml;r Gitarre solo
          <br />
          <b>Rafael Catal&aacute;:</b> &bdquo;Brujerias&ldquo; f&uuml;r
          Kontrabass, pr&auml;pariertes Klavier und Percussion (2013/2024)
          <br />
          <b>Dieterich Buxtehude:</b> Triosonate in g-moll{" "}
          <nobr>op.&thinsp;2, Nr.&thinsp;3</nobr>
          <br />
          <b>Gottfried Finger:</b> Triosonate Nr.&thinsp;3 in A-Dur
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
            19. SEPTEMBER 2024
          </div>
          <div className={styles.programDescrciption}>
            <p>18 Uhr Bernardisaal, Stift Stams.</p>
            <p>
              <b>
                piazzolla.scarlatti.
                <nobr>mittermayer.</nobr>
                <nobr>biber.</nobr>
                <nobr>nisinman.</nobr>
                <nobr>merci.</nobr>
                <nobr>scharwenka</nobr>
              </b>
            </p>
          </div>
          <div className={styles.programDescrciptionFooter}>
            Es spielen Mariya Nesterovska, Marcelo Nisinman, François Guerrier,
            Rafael Bonavita, Hubert Mittermayer Nesterovskiy, Nenad
            Le&#269;i&#263;, Jan Krigovsky.
          </div>
        </div>
        <div className={styles.programSection}>
          <b>Astor Piazzolla:</b> Primavera Porte&ntilde;a & Verano
          Porte&ntilde;o (1970/1965) f&uuml;r Tangoquintett
          <br />
          <b>Domenico Scarlatti:</b> Sonaten K.&thinsp;61, a-moll und
          K.&thinsp;33, D-Dur f&uuml;r Cembalo solo
          <br />
          <b>Hubert Mittermayer Nesterovskiy:</b> &bdquo;In long dimension
          creeps with sinuous trace&#8230;&ldquo; f&uuml;r Bandoneon, Fagott,
          Klavier und Kontrabass (2024, UA)
          <br />
          <b>Heinrich I.&thinsp;F.&thinsp;v.&thinsp;Biber:</b> Sonate
          Nr.&thinsp;8 in A-Dur f&uuml;r Violine und Basso continuo
          <br />
          <b>Maurice Ravel/Marcelo Nisinman:</b> &bdquo;The Kaddish&ldquo;
          f&uuml;r Bandoneon solo (1914/2024)
          <br />
          <b>Ennio Morricone/Marcelo Nisinman:</b> &ldquo;Le clan des
          Siciliens&bdquo; f&uuml;r Tangoensemble (1969/2024; UA)
          <br />
          <b>Luigi Merci:</b> Sonate Nr.&thinsp;3 in Es-Dur f&uuml;r Fagott und
          Basso continuo
          <br />
          <b>Philipp Scharwenka:</b> &bdquo;Intermezzo&ldquo; & &bdquo;Recitativ
          und Tarantella&ldquo; aus der Suite für Violine und Klavier
          op.&thinsp;99 (1896)
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
            21. SEPTEMBER 2024
          </div>
          <div className={styles.programDescrciption}>
            <p>18 Uhr Bernardisaal, Stift Stams.</p>
            <p>
              <b>
                janacek.matteis.
                <nobr>boismortier.</nobr>
                <nobr>poljowa.</nobr>
                <nobr>ligeti.</nobr>
                <nobr>merci.</nobr>
                <nobr>piazzolla</nobr>
              </b>
            </p>
          </div>
          <div className={styles.programDescrciptionFooter}>
            Es spielen Mariya Nesterovska, Nenad Le&#269;i&#263;, Marcelo
            Nisinman, François Guerrier, Hubert Mittermayer Nesterovskiy, Rafael
            Bonavita, Jan Krigovsky.
          </div>
        </div>
        <div className={styles.programSection}>
          <b>Leo&scaron; Jan&aacute;&#269;ek:</b>{" "}
          &bdquo;1.&thinsp;X.&thinsp;1905&ldquo; (&bdquo;From the
          Streets&ldquo;) f&uuml;r Klavier solo
          <br />
          <b>Nicola Matteis:</b> Fantasia in a-moll f&uuml; Violine solo
          <br />
          <b>Joseph Bodin de Boismortier:</b> Sonate Nr.&thinsp;6 in C-Dur für 2
          B&auml;sse PB 306
          <br />
          <b>Wiktorija Poljowa:</b> &bdquo;Liebesbotschaft&ldquo; f&uuml;r
          Violine und Klavier (2011, &Ouml;E)
          <br />
          <b>Gy&ouml;rgi Ligeti:</b> &bdquo;Hungarian Rock&ldquo; Chaconne
          f&uuml;r Cembalo solo (1978)
          <br />
          <b>Luigi Merci:</b> Sonata G-Dur f&uuml;r Fagott und Basso continuo
          <br />
          <b>Astor Piazzolla:</b> Oto&ntilde;o Porte&ntilde;o & Invierno
          Porte&ntilde;o (1969/1970) f&uuml;r Tangoquintett
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
            22. SEPTEMBER 2024
          </div>
          <div className={styles.programDescrciption}>
            <p>18 Uhr Bernardisaal, Stift Stams.</p>
            <p>
              <b>
                marais.ligeti.
                <nobr>albinoni.</nobr>
                <nobr>galliard.</nobr>
                <nobr>capricornus.</nobr>
                <nobr>westhoff.</nobr>
                <nobr>vitali</nobr>
              </b>
            </p>
          </div>
          <div className={styles.programDescrciptionFooter}>
            Es spielen Mariya Nesterovska, Nenad Le&#269;i&#263;, Rafael
            Bonavita, François Guerrier, Hubert Mittermayer Nesterovskiy, Jan
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
          <b>Marin Marais:</b> &bdquo;Sonnerie de Sainte Genevi&egrave;ve du
          Mont-de-Paris&ldquo;
          <br />
          <b>Claude Debussy:</b> &bdquo;Des pas sur la neige&ldquo; aus Préludes
          f&uuml;r Klavier solo Livre 1, L.117 (1909&ndash;1910)
          <br />
          <b>Antonio Vivaldi:</b> Sonate in D-Dur &bdquo;per Monsieur
          Pisendel&ldquo; f&uuml;r Violine und Basso continuo, RV 29
          <br />
          <b>Gy&ouml;rgi Ligeti:</b> Musica Ricercata Nr.&thinsp;9 f&uuml;r
          Klavier solo (1951&ndash;1953)
          <br />
          <b>Johann Ernst Galliard:</b> Sonate Nr.&thinsp;4 in F-Dur f&uuml;r
          Fagott und Basso continuo
          <br />
          <b>Claude Debussy:</b> &bdquo;La danse de Puck&ldquo; aus Préludes
          f&uuml;r Klavier solo Livre 1, L.117
          <br />
          <b>Samuel Capricornus:</b> Sonate Nr.&thinsp;3 &agrave; 3 in a-moll
          aus &bdquo;Prothimia Suavissima&ldquo;
          <br />
          <b>Gy&ouml;rgi Ligeti:</b> Musica Ricercata Nr.&thinsp;1 f&uuml;r
          Klavier solo (1951&ndash;1953)
          <br />
          <b>Johann P.&thinsp;v.&thinsp;Westhoff:</b> Sonate Nr.&thinsp;5 in
          g-moll f&uuml;r Violine und Basso continuo
          <br />
          <b>Giovanni B.&thinsp;Vitali:</b> Ciaccona in C-Dur
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
