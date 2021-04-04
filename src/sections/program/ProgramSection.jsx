/* eslint-disable jsx-a11y/alt-text */
import React from "react"
import classNames from "classnames"

import { SECTION_NAMES } from "common/sectionNames"
import Program1Picture from "images/programs/program_1.jpg"
import Program2Picture from "images/programs/program_2.jpg"
import Program3Picture from "images/programs/program_3.jpg"
import Program4Picture from "images/programs/program_4.jpg"

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
            DONNERSTAG
            <br />
            15. SEPTEMBER 2021
          </div>
          <div className={styles.programDescrciption}>
            18 Uhr Bernardisaal, Stift Stams.
            <b>piazzolla.gardel.nisinman.chopin.cobian.mozart</b>
          </div>
          <div className={styles.programDescrciptionFooter}>
            Es spielen Mariya Nesterovska, Marcelo Nisinman, Nenad Lecic, Dragan
            Trajkovski.
          </div>
        </div>
        <div className={styles.programSection}>
          <b>Astor Piazzolla:</b> „Bordello 1900“ aus „Histoire du Tango“
          <br />
          <b>Carlos Gardel/Marcelo Nisinman:</b> „Cuando tu no estas“
          <br />
          <b>Astor Piazzolla:</b> „Bordello 1960“ aus „Histoire du Tango“
          <br />
          <b>Frederic Chopin:</b> Nocturne op. 27 für Klavier solo
          <br />
          <b>Juan Carlos Cobián/Marcelo Nisinman:</b> „Los Maredos“
          <br />
          ---
          <br />
          <b>Wolfgang A. Mozart:</b> Violinsonate in F-Dur KV 377
          <b>Léo Ferré/Marcelo Nisinman:</b> „Avec le temps“
          <b>Salieri/Mozart/Cornetti/Nisinman:</b> „Per la ricuperata salute di
          Ofelia“
          <b>Astor Piazzolla:</b> Concierto para Quinteto
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
            <b>piazzolla.gardel.nisinman.chopin.cobian.mozart</b>
          </div>
          <div className={styles.programDescrciptionFooter}>
            Es spielen Mariya Nesterovska, Marcelo Nisinman, Nenad Lecic, Dragan
            Trajkovski.
          </div>
        </div>
        <div className={styles.programSection}>
          <b>Astor Piazzolla:</b> „Bordello 1900“ aus „Histoire du Tango“
          <br />
          <b>Carlos Gardel/Marcelo Nisinman:</b> „Cuando tu no estas“
          <br />
          <b>Astor Piazzolla:</b> „Bordello 1960“ aus „Histoire du Tango“
          <br />
          <b>Frederic Chopin:</b> Nocturne op. 27 für Klavier solo
          <br />
          <b>Juan Carlos Cobián/Marcelo Nisinman:</b> „Los Maredos“
          <br />
          ---
          <br />
          <b>Wolfgang A. Mozart:</b> Violinsonate in F-Dur KV 377
          <b>Léo Ferré/Marcelo Nisinman:</b> „Avec le temps“
          <b>Salieri/Mozart/Cornetti/Nisinman:</b> „Per la ricuperata salute di
          Ofelia“
          <b>Astor Piazzolla:</b> Concierto para Quinteto
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
            DONNERSTAG
            <br />
            18. SEPTEMBER 2021
          </div>
          <div className={styles.programDescrciption}>
            18 Uhr Bernardisaal, Stift Stams.
            <b>piazzolla.gardel.nisinman.chopin.cobian.mozart</b>
          </div>
          <div className={styles.programDescrciptionFooter}>
            Es spielen Mariya Nesterovska, Marcelo Nisinman, Nenad Lecic, Dragan
            Trajkovski.
          </div>
        </div>
        <div className={styles.programSection}>
          <b>Astor Piazzolla:</b> „Bordello 1900“ aus „Histoire du Tango“
          <br />
          <b>Carlos Gardel/Marcelo Nisinman:</b> „Cuando tu no estas“
          <br />
          <b>Astor Piazzolla:</b> „Bordello 1960“ aus „Histoire du Tango“
          <br />
          <b>Frederic Chopin:</b> Nocturne op. 27 für Klavier solo
          <br />
          <b>Juan Carlos Cobián/Marcelo Nisinman:</b> „Los Maredos“
          <br />
          ---
          <br />
          <b>Wolfgang A. Mozart:</b> Violinsonate in F-Dur KV 377
          <b>Léo Ferré/Marcelo Nisinman:</b> „Avec le temps“
          <b>Salieri/Mozart/Cornetti/Nisinman:</b> „Per la ricuperata salute di
          Ofelia“
          <b>Astor Piazzolla:</b> Concierto para Quinteto
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
            DONNERSTAG
            <br />
            19. SEPTEMBER 2021
          </div>
          <div className={styles.programDescrciption}>
            18 Uhr Bernardisaal, Stift Stams.
            <b>piazzolla.gardel.nisinman.chopin.cobian.mozart</b>
          </div>
          <div className={styles.programDescrciptionFooter}>
            Es spielen Mariya Nesterovska, Marcelo Nisinman, Nenad Lecic, Dragan
            Trajkovski.
          </div>
        </div>
        <div className={styles.programSection}>
          <b>Astor Piazzolla:</b> „Bordello 1900“ aus „Histoire du Tango“
          <br />
          <b>Carlos Gardel/Marcelo Nisinman:</b> „Cuando tu no estas“
          <br />
          <b>Astor Piazzolla:</b> „Bordello 1960“ aus „Histoire du Tango“
          <br />
          <b>Frederic Chopin:</b> Nocturne op. 27 für Klavier solo
          <br />
          <b>Juan Carlos Cobián/Marcelo Nisinman:</b> „Los Maredos“
          <br />
          ---
          <br />
          <b>Wolfgang A. Mozart:</b> Violinsonate in F-Dur KV 377
          <b>Léo Ferré/Marcelo Nisinman:</b> „Avec le temps“
          <b>Salieri/Mozart/Cornetti/Nisinman:</b> „Per la ricuperata salute di
          Ofelia“
          <b>Astor Piazzolla:</b> Concierto para Quinteto
        </div>
      </div>
    </div>
  </div>
)
