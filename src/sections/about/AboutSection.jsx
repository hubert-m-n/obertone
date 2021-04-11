import React from "react"
import classNames from "classnames"

import { SECTION_NAMES } from "common/sectionNames"

import styles from "./AboutSection.module.scss"
import commonStyles from "../../common/commonStyles.module.scss"

export default ({ onRef }) => {
  return (
    <div
      id={SECTION_NAMES.ABOUT}
      ref={onRef}
      className={classNames(commonStyles.sectionWrapper, styles.sectionWrapper)}
    >
      <h2
        className={classNames(
          commonStyles.titleWithBackground,
          styles.titleWithBackground
        )}
      >
        Wir machen die OBERTÖNE
      </h2>
      <div className={styles.aboutSectionContent}>
        <a
          href="https://www.obertone.at/ueberuns/"
          className={classNames(
            styles.obertoneLink,
            commonStyles.withRoundedBorder
          )}
        >
          Mehr über die OBERTÖNE
          <div className={styles.obertineLinkSmallText}>
            Die Idee, das Team, die Geschichte, der Club
          </div>
        </a>
      </div>
    </div>
  )
}
