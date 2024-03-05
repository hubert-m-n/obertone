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
        href="https://shop.ticketpay.de/organizer/XTVVA6UY?view=home"
        target="_blank"
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
      Kaufen Sie gleich hier Ihre Tickets, zahlen bequem mit Sofort&uuml;berweisung,
      Kreditkarte oder PayPal und erhalten direkt Ihr Ticket zum Ausdrucken.
      Oder lassen Sie es sich auf Wunsch gegen Aufpreis per Post zuschicken.
      <br />
      <br />
      <br />
      <div className={styles.subtitle}>***Jetzt neu: Sitzplatzreservierung***</div>
      Schon direkt beim Ticketkauf k&ouml;nnen Sie sich über die Saalplanbuchung 
      Ihren Lieblingsplatz sichern. Für den OBERT&Ouml;NE-Pass sind spezielle
      Pl&auml;tze reserviert.
      <br />
      <br />
      <br />
      {/* Tickets Info 2 */}
      <div className={styles.subtitle}>Der OBERT&Ouml;NE-Pass</div>
      f&uuml;r das volle Erlebnis von 18. bis 22. September 2024
      <br />
      <p>
        Kategorie A: €&nbsp;140,&mdash;
        <br />
        Kategorie B: €&nbsp;90,&mdash;
      </p>
      <div className={styles.subtitle}>Einzeltickets</div>
      je Konzert: 18./&thinsp;19./&thinsp;21./&thinsp;22. September 2023
      <br />
      <p>
        Kategorie&nbsp;A: €&nbsp;45,&mdash;
        <br />
        Kategorie&nbsp;B: €&nbsp;25,&mdash;
        <br />
        Kategorie&nbsp;C: €&nbsp;10,&mdash;
      </p>
      <br />
      {/* Tickets Info 3 */}
      <div className={styles.subtitle}>Ermäßigungen</div>
      <p>
        &#9679; OBERT&Ouml;NE-Clubmitglieder, Sch&uuml;lerInnen, Studierende bis 30,
        Menschen&nbsp;mit&nbsp;Handicap: bis zu 20%
      </p>
      <p>
        &#9679; Mitglieder im &Ouml;1-Club: 10%
      </p>
      <p>
        &#9679; Mitglieder &Ouml;1-Intro: 30%
      </p>
      <p>
        &#9679; F&uuml;r BesitzerInnen des Hunger-auf-Kunst-und-Kultur-Passes gibt es ein 
        Kontingent an kostenlosen Karten in <nobr>Kategorie C.</nobr>
      </p>
      <p>
       Die Berechtigung zur Erm&auml;ßigung kann beim Eintritt kontrolliert werden. Bitte nehmen Sie
        eine entsprechende Best&auml;tigung mit, da ansonsten eine Nachzahlung
        der Preisdifferenz f&auml;llig werden kann.
      </p>
      <br />
      <br />
      {/* Tickets Info 4 */}
      <div className={styles.subtitle}>Menschen mit Handicap</div>

      <p>
      Menschen mit Handicap und deren Begleitung möchten wir gerne bei der Ticketbuchung unterst&uuml;tzen. 
      Bitte schreiben Sie uns ein kurzes Mail an info@obertone.at, welche Kategorie Sie gerne f&uuml;r welche 
      Konzerte buchen wollen. Gemeinsam mit Ihnen k&ouml;nnen wir dann bequem zug&auml;ngliche Pl&auml;tze
      ausw&auml;hlen und f&uuml;r Sie buchen!
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
