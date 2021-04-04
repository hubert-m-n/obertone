import React from "react"
import classNames from "classnames"
import { Link } from "react-router-dom"

import { SECTION_NAMES } from "common/sectionNames"
import { ReactComponent as RouteIcon } from "images/GoogleMapsIcon.svg"

import styles from "./TicketsSection.module.scss"
import commonStyles from "../../common/commonStyles.module.scss"

export default ({ onRef }) => (
  <div
    id={SECTION_NAMES.TICKETS}
    ref={onRef}
    className={classNames(commonStyles.sectionWrapper, styles.sectionWrapper)}
  >
    <h2 className={classNames(commonStyles.title, styles.title)}>
      Sichern Sie sich jetzt Ihre Tickets
    </h2>
    <div className={styles.content}>
      <a
        href="http://www.obertone.at/dabeisein/"
        className={classNames(
          styles.linkButton,
          styles.ticketsPageLink,
          commonStyles.withRoundedBorder
        )}
      >
        Tickets hier bestellen
      </a>
      <div className={styles.subtitle}>Einzeltickets</div>
      je Konzert: 20. Juni oder 4. 2020
      <br />
      Kategorie A: € 45,– (Reihe 1–6)
      <br />
      Kategorie B: € 25,– (Reihe 7-11)
      <br />
      Kategorie C: € 10,– (Reihe 12)
      <br />
      <br />
      <div className={styles.subtitle}>Sommermusik-Pass</div>
      Beide Konzerte in der Kat. A: € 80,–
      <br />
      Beide Konzerte in der Kat. B: € 40,–
      <br />
      <br />
      <div className={styles.subtitle}>Ermäßigungen</div>
      OBERTÖNE-Clubmitglieder, Schüler, Studenten bis 30,
      <br />
      Menschen mit Handycap: 20% auf jedes Ticket.
      <br />
      Mitglieder im Ö1-Club: 10% auf jedes Ticket.
      <br />
      <br />
      <div className={styles.subtitle}>Mehr Info</div>
      <a href="tel:+43 681 8133 8493" className={styles.whiteLink}>
        +43 681 8133 8493
      </a>
      <br />
      <a href="mailto:info@sommermusik.at" className={styles.whiteLink}>
        info@sommermusik.at
      </a>
      <div className={styles.directionsTitle}>
        So kommen Sie nach Stams mit Bahn, Bus oder PKW:
      </div>
      <a
        href="https://www.google.com/maps/dir//Stift+Stams,+Stiftshof+1,+6422+Stams/@47.2775036,10.9822557,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x479d1ed817ca64fb:0x39c923db801706fc!2m2!1d10.9844444!2d47.2775"
        target="_blank"
        className={classNames(
          styles.linkButton,
          styles.directionsLink,
          commonStyles.withRoundedBorder
        )}
      >
        <div>
          <span>Anfahrt planen</span>
          <RouteIcon />
        </div>
      </a>
    </div>
  </div>
)
