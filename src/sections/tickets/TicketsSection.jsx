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
      <br />
      <br />
      {/* Tickets Info 1 */}
      <div className={styles.subtitle}>Entspannt ins Konzert</div>
      Kaufen Sie gleich hier Ihre Tickets, zahlen bequem mit Sofortüberweisung,
      Kreditkarte oder PayPal und erhalten direkt Ihr Ticket zum Ausdrucken.
      Oder lassen Sie es sich auf Wunsch gegen Aufpreis per Post zuschicken.
      <br />
      <br />
      <br />
      {/* Tickets Info 2 */}
      <div className={styles.subtitle}>OBERT&Ouml;NE-Pass</div>
      das volle Erlebnis von 15. bis 19. September 2021
      <br />
      <p>
        Kategorie A: €&nbsp;140,– (Reihe 1–6)
        <br />
        Kategorie B: €&nbsp;90,– (Reihe 7–11)
      </p>
      <div className={styles.subtitle}>Einzeltickets</div>
      je Konzert: 15./&thinsp;16./&thinsp;18./&thinsp;19. September 2021
      <br />
      <p>
        Kategorie&nbsp;A: €&nbsp;45,– (Reihe 1–6)
        <br />
        Kategorie&nbsp;B: €&nbsp;25,– (Reihe 7–11)
        <br />
        Kategorie&nbsp;C: €&nbsp;10,– (Reihe 12)
      </p>
      <br />
      <br />
      {/* Tickets Info 3 */}
      <div className={styles.subtitle}>Ermäßigungen</div>
      <p>
        &#9679; OBERTÖNE-Clubmitglieder, Schüler, Studenten bis 30,
        Menschen&nbsp;mit&nbsp;Handycap: 20% auf jedes Ticket &ndash; <nobr>außer Pass Kat. A 10%.</nobr>
        <br />
        [Rabattcode: „Club"]
      </p>
      <p>
        &#9679; Mitglieder im Ö1-Club: 10% auf jedes Ticket.
        <br />
        [Rabattcode: „Ö1-Club"]
      </p>
      <p>
        &#9679; Mitglieder Ö1-Intro: 30% auf jedes Ticket.
        <br />
        [Rabattcode: „Ö1-Intro"]
      </p>
      <p>
        Für die Buchung ermäßigter Tickets geben Sie bitte den entsprechenden
        Rabattcode am Beginn des Ticketshops an! Mit Rabattcode ist für Sie
        jedes Ticket nur einmal&nbsp;buchbar. <br />
        Die Berechtigung zur Ermäßigung kann beim Eintritt kontrolliert werden.
        Bitte nehmen Sie eine entsprechende Bestätigung mit, da ansonsten eine
        Nachzahlung der Preisdifferenz fällig werden kann.
      </p>
      <br />
      <br />
      <div className={styles.subtitle}>Mehr Info</div>
      <a href="mailto:info@sommermusik.at" className={styles.whiteLink}>
        info@obertone.at
      </a>
      <br />
      <a href="tel:+43 512 312 306" className={styles.whiteLink}>
        +43 512 312 306
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
