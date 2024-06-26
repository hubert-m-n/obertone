import React from "react"
import classNames from "classnames"

import { SECTION_NAMES } from "common/sectionNames"
import { ReactComponent as Logo } from "images/Home_logo.svg"
import { ReactComponent as LogoSommermusikSmall } from "images/logo_sommermusik_small.svg"
import { ReactComponent as LogoSommermusik } from "images/logo_sommermusik.svg"
import { langs, langLabels } from "common/localisation"
import NavLink from "./NavLink"

import styles from "./NavControl.module.scss"

export default ({ lang, onChangeLang, collapsed }) => {
  const handleChangeLang = () => {
    const langIndex = langs.indexOf(lang)
    const nextLangIndex = langIndex < langs.length - 1 ? langIndex + 1 : 0

    onChangeLang(langs[nextLangIndex])
  }

  return (
    <header
      className={classNames(styles.header, { [styles.collapsed]: collapsed })}
    >
      <div className={styles.headerContent}>
        <NavLink
          className={classNames(styles.logo, { [styles.collapsed]: collapsed })}
          path={SECTION_NAMES.HOME}
        >
          <Logo />
        </NavLink>
        <a
          className={classNames(styles.logoSommermusik, {
            [styles.collapsed]: collapsed,
          })}
          href="http://sommermusik.at"
        >
          <LogoSommermusikSmall className={styles.sommermusikIconSmall} />
          <LogoSommermusik className={styles.sommermusikIcon} />
        </a>
        <div
          className={classNames(styles.navLinks, {
            [styles.collapsed]: collapsed,
          })}
        >
          <div className={styles.navSpacer} />
          <div className={styles.navSpacer} />
          <NavLink className={styles.navLink} path={SECTION_NAMES.ARTISTS}>
            <span>K&uuml;nstlerInnen</span>
          </NavLink>
          <NavLink className={styles.navLink} path={SECTION_NAMES.PROGRAM}>
            <span>Programme</span>
          </NavLink>
          <NavLink className={styles.navLink} path={SECTION_NAMES.TICKETS}>
            <span>Tickets</span>
          </NavLink>
          <NavLink className={styles.navLink} path={SECTION_NAMES.PARTNERS}>
            <span>Partner &amp; wir</span>
          </NavLink>
          <NavLink className={styles.navLink} path={SECTION_NAMES.LISTEN}>
            <span className={styles.navLinkListenCompact}>Hören</span>
            <span className={styles.navLinkListen}>Rein- &amp; Nachhören</span>
          </NavLink>
          <div className={styles.navSpacer} />
          <div className={styles.navSpacer} />
          <div className={styles.langSwitch} onClick={handleChangeLang}>
            <span className={styles.langCompact}>{lang.toUpperCase()}</span>
            <span className={styles.lang}>{langLabels[lang]}</span>
          </div>
        </div>
      </div>
    </header>
  )
}
