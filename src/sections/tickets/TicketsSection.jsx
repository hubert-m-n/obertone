import { Link } from "react-router-dom"
import React from "react"
import { ReactComponent as RouteIcon } from "images/GoogleMapsIcon.svg"
import { SECTION_NAMES } from "common/sectionNames"
import classNames from "classnames"
import commonStyles from "../../common/commonStyles.module.scss"
import styles from "./TicketsSection.module.scss"

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
        href="https://shop.ticketpay.de/organizer/XTVVA6UY?view=list" target="_blank"
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
      <div className={styles.subtitle}>*Jubil&auml;ums-*OBERT&Ouml;NE-Pass</div>
      das volle Erlebnis von 13. bis 17. September 2023
      <br />
      <p>
        Kategorie A: €&nbsp;140,– (Reihe 1–6)
        <br />
        Kategorie B: €&nbsp;90,– (Reihe 7–11)
      </p>
      <div className={styles.subtitle}>Einzeltickets</div>
      je Konzert: 13./&thinsp;14./&thinsp;16./&thinsp;17. September 2023
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
        &#9679; OBERT&Ouml;NE-Clubmitglieder, Schu&uuml;ler, Studenten bis 30,
        Menschen&nbsp;mit&nbsp;Handycap: bis zu 20% auf jedes Ticket.
        <br />
        [Rabattcode: „CLUB"]
      </p>
      <p>
        &#9679; Mitglieder im &Ouml;1-Club: 10% auf jedes Ticket.
        <br />
        [Rabattcode: „&Ouml;1CLUB"]
      </p>
      <p>
        &#9679; Mitglieder &Ouml;1-Intro: 30% auf jedes Ticket.
        <br />
        [Rabattcode: „&Ouml;1INTRO"]
      </p>
      <p>
        Für die Buchung erm&auml;ßigter Tickets geben Sie bitte den entsprechenden
        Rabattcode am Beginn des Ticketshops an! So k&ouml;nnen Sie bis zu zwei Tickets erm&auml;ßigt buchen.</p><p>
        Die Berechtigung zur Erm&auml;ßigung kann beim Eintritt kontrolliert werden.
        Bitte nehmen Sie eine entsprechende Best&auml;tigung mit, da ansonsten eine
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
