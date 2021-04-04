import React from "react"
import classNames from "classnames"
import { SECTION_NAMES } from "common/sectionNames"
import LogoSrc from "images/Home_logo_dabeisein.svg"

import NavLink from "components/navControl/NavLink"

import styles from "./OrderNavControl.module.scss"

export default () => (
  <div className={styles.container}>
    <NavLink
      className={classNames(styles.navMenuItem)}
      path={SECTION_NAMES.HOME}
    >
      <img src={LogoSrc} />
      {/* <Logo /> */}
    </NavLink>
    <div className={classNames(styles.navMenuItem)} />
    <div className={classNames(styles.navMenuItem)} />
    <div className={classNames(styles.navMenuItem)} />
    <div className={classNames(styles.navMenuItem)} />
  </div>
)
