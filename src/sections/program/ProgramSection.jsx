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
            styles.programPictureSection,
          )}
        >
          <img src={Program1Picture} className={styles.programPicture} />
        </div>
        <div className={styles.programSection}>
          <div className={styles.programTitle}>
            MITTWOCH
            <br />
            16. SEPTEMBER 2026
          </div>
          <div className={styles.programDescrciption}>
            <p>18 Uhr Bernardisaal, Stift Stams</p>
            <p>
              <b>
                schmelzer.cazzati.
                <nobr>bratbury.</nobr>
                <nobr>veracini.</nobr>
                <nobr>mozart</nobr>
              </b>
            </p>
          </div>
          <div className={styles.programDescrciptionFooter}>
            Es spielen Mariya Nesterovska, Nenad Le&#269;i&#263;, Rafael
            Bonavita, Bertrand Cuiller, Jan Krigovsky, Giorgi Gvantseladze,
            Victor Rubio Aparici, Felipe Freitas und Hubert Mittermayer
            Nesterovskiy.
          </div>
        </div>
        <div className={styles.programSection}>
          <b>Johann Heinrich Schmelzer:</b> Triosonate &bdquo;Pastorella&ldquo;
          (Codex Rost XIII)
          <br />
          <b>Maurizio Cazzati:</b> Triosonate &bdquo;La Calcagnina&ldquo; (Codex
          Rost LVI)
          <br />
          <b>William Bradbury:</b>
          &ensp;5&thinsp;&bull;&thinsp;4&thinsp;&bull;&thinsp;3&ensp;(except
          after C)&ensp;f&uuml;r Oboe, Klarinette und Fagott (2019)
          <br />
          <b>Francesco Maria Veracini:</b> Sonate in d-moll f&uuml;r Violine und
          Basso contunuo, I.A.2.D2
          <br />
          <b>Wolfgang Amadeus Mozart:</b> Quintett in Es-Dur,{" "}
          <nobr>KV&thinsp;452</nobr>&ensp;f&uuml;r Klavier, Oboe, Klarinette,
          Fagott und Horn
        </div>
      </div>
      {/* Program 2 */}
      <div className={styles.program}>
        <div
          className={classNames(
            styles.programSection,
            styles.programPictureSection,
          )}
        >
          <img src={Program2Picture} className={styles.programPicture} />
        </div>
        <div className={styles.programSection}>
          <div className={styles.programTitle}>
            DONNERSTAG
            <br />
            17. SEPTEMBER 2026
          </div>
          <div className={styles.programDescrciption}>
            <p>18 Uhr Bernardisaal, Stift Stams.</p>
            <p>
              <b>
                beethoven.rolnick.
                <nobr>falconieri.</nobr>
                <nobr>ortiz.</nobr>
                <nobr>pandolfi.</nobr>
                <nobr>pärt.</nobr>
                <nobr>hamasyan.</nobr>
                <nobr>caldara</nobr>
              </b>
            </p>
          </div>
          <div className={styles.programDescrciptionFooter}>
            Es spielen Mariya Nesterovska, Nenad Le&#269;i&#263;, Jan Krigovsky,
            Rafael Bonavita, Bertrand Cuiller, Giorgi Gvantseladze, Victor Rubio
            Aparici, Felipe Freitas und Hubert Mittermayer Nesterovskiy.
          </div>
        </div>
        <div className={styles.programSection}>
          <b>Ludwig van Beethoven:</b> Quintett in Es-Dur, op 16&ensp;f&uuml;r
          Klavier, Oboe, Klarinette, Fagott und Horn
          <br />
          <b>Neil Rolnick:</b> &bdquo;Fiddle-Faddle&ldquo; f&uuml;r Violine und
          Elektronik (2003)
          <br />
          <b>Andrea Falconieri:</b> Passacalle in g-moll
          <br />
          <b>Diego Ortiz:</b> Recercada Quarta sobre &bdquo;La Folia&ldquo; und
          Recercada Primera sobre &bdquo;El Passamezzo Antiguo&ldquo;
          <br />
          <b>Giovanni A. Pandolfi Mealli:</b> Sonate Nr.&thinsp;6{" "}
          <nobr>&bdquo;La Sabattina&ldquo;</nobr> f&uuml;r Violine und
          B.&thinsp;C.
          <br />
          <b>Arvo P&auml;rt:</b> &bdquo;F&uuml;r Alina&ldquo; f&uuml;r Klavier
          solo (1976)
          <br />
          <b>Tigran Hamasyan:</b> Et&uuml;de Nr.&thinsp;1 f&uuml;r Klavier solo
          (1976)
          <br />
          <b>Antonio Caldara:</b> Triosonate in B-Dur op.&thinsp;2, Nr.&thinsp;2
        </div>
      </div>
      {/* Program 3 */}
      <div className={styles.program}>
        <div
          className={classNames(
            styles.programSection,
            styles.programPictureSection,
          )}
        >
          <img src={Program3Picture} className={styles.programPicture} />
        </div>
        <div className={styles.programSection}>
          <div className={styles.programTitle}>
            SAMSTAG
            <br />
            19. SEPTEMBER 2026
          </div>
          <div className={styles.programDescrciption}>
            <p>18 Uhr Bernardisaal, Stift Stams.</p>
            <p>
              <b>
                ligeti.marcello.
                <nobr>falconieri.</nobr>
                <nobr>richter.</nobr>
                <nobr>murcia.</nobr>
                <nobr>oconnor.</nobr>
                <nobr>piazzolla.</nobr>
                <nobr>nisinman.</nobr>
                <nobr>weill.</nobr>
                <nobr>fitkin</nobr>
              </b>
            </p>
          </div>
          <div className={styles.programDescrciptionFooter}>
            Es spielen Mariya Nesterovska, Bertrand Cuiller, Marcelo Nisinman,
            Rafael Bonavita, Nenad Le&#269;i&#263;, Hubert Mittermayer
            Nesterovskiy, Jan Krigovsky.
          </div>
        </div>
        <div className={styles.programSection}>
          <b>György Ligeti:</b> &bdquo;Hungarian Rock&ldquo; f&uuml;r Cembalo
          solo (1978)
          <br />
          <b>Benedetto Marcello:</b> Sonate Nr.&thinsp;5 in C-Dur f&uuml;r
          Fagott und Basso continuo
          <br />
          <b>Max Richter:</b> &bdquo;Mercy&ldquo; f&uuml;r Violine und Klavier
          (2020)
          <br />
          <b>Santiago de Murcia:</b> Fandango
          <br />
          <b>Mark O'Connor:</b> &bdquo;Butterfly's Day Out&ldquo; und
          &bdquo;College Hornpipe&ldquo; (1994; arr. Mittermayer Nesterovskiy
          2026)
          <br />
          <b>Astor Piazzolla:</b> &bdquo;Romance del diablo&ldquo; (1965)
          <br />
          <b>Marcelo Nisinman:</b> &bdquo;Milonga Obsesiva&ldquo; (2025;
          &Ouml;E) f&uuml;r Ensemble
          <br />
          <b>Kurt Weill:</b> &bdquo;Youkali&ldquo; f&uuml;r Violine und
          Bandoneon (1946; arr. Ninsinman 2020)
          <br />
          <b>Graham Fitkin:</b> &bdquo;Wiring&ldquo; und &bdquo;Bob&ldquo;
          f&uuml;r Fagott und Klavier (2016/1996; arr. Mittermayer Nesterovskiy
          2026)
          <br />
          <b>Astor Piazzolla:</b> Fuga y Misterio (1968; arr. Nisinman 2022)
        </div>
      </div>
      {/* Program 4 */}
      <div className={styles.program}>
        <div
          className={classNames(
            styles.programSection,
            styles.programPictureSection,
          )}
        >
          <img src={Program4Picture} className={styles.programPicture} />
        </div>
        <div className={styles.programSection}>
          <div className={styles.programTitle}>
            SONNTAG
            <br />
            20. SEPTEMBER 2026
          </div>
          <div className={styles.programDescrciption}>
            <p>18 Uhr Bernardisaal, Stift Stams.</p>
            <p>
              <b>
                reich.platti.
                <nobr>nisinman.</nobr>
                <nobr>piazzolla.</nobr>
                <nobr>adams.</nobr>
                <nobr>nicolai.</nobr>
                <nobr>fischer</nobr>
              </b>
            </p>
          </div>
          <div className={styles.programDescrciptionFooter}>
            Es spielen Mariya Nesterovska, Marcelo Nisinman, Nenad
            Le&#269;i&#263;, Jan Krigovsky, Hubert Mittermayer Nesterovskiy,
            Rafael Bonavita, Bertrand Cuiller.
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
          <b>Steve Reich:</b> &bdquo;Violin Phase&ldquo; f&uuml;r Violine und
          Elektronik (1967)
          <br />
          <b>Giovanni Benedetto Platti:</b> Sonata &agrave; 3 in A-Dur, <nobr>WD 683</nobr>
          <br />
          <b>Marcelo Nisinman:</b> &bdquo;Chen's Tango&ldquo; (2010)
          <br />
          <b>Astor Piazzolla:</b> &bdquo;Extasis&ldquo; (1963)
          <br />
          <b>John Adams:</b> &bdquo;China Gates&ldquo; f&uuml;r Klavier solo (1977)
          <br />
          <b>Johann Michael Nicolai:</b> Sonata a due bassi in a-moll
          <br />
          <b>Johann Fischer:</b> &bdquo;Unterschied zwischen einen rechten Violinist und
          gemeinen Bauern-Fiedler&ldquo; (aus Musicalische Fürsten-Lust)
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
