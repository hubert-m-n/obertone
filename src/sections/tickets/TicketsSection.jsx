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
        href="https://shop.ticketpay.de/organizer/XTVVA6UY?view=grid"
        target="_blank"
        className={classNames(
          styles.linkButton,
          styles.ticketsPageLink,
          commonStyles.withRoundedBorder
        )}
      >
        Tickets direkt hier bestellen
      </a>
      <br />
      <br />
      {/* Tickets Info 1 */}
      <div className={styles.subtitle}>
        Bequem buchen und entspannt ins Konzert!
      </div>
      Suchen Sie sich den besten Platz aus, zahlen mit Sofort&uuml;berweisung,
      Kreditkarte oder PayPal und erhalten direkt Ihr Ticket zum Ausdrucken.
      Oder besuchen Sie eine unserer Vorverkaufsstellen:&ensp;
      <a
        href="https://www.innsbruck.info/sehen-und-erleben/shopping/shopsuche/detail/infrastruktur/klosterladen-im-stift-stams-stams.html"
        target="_blank"
        className={classNames(styles.whiteLinkunderlined)}
      >
        Klosterladen Stams
      </a>
      , Tourismusinfos{" "}
      <a
        href="https://www.telfs.at/Innsbruck_Tourismus_-_Tourismusinformation_Telfs"
        target="_blank"
        className={classNames(styles.whiteLinkunderlined)}
      >
        Telfs
      </a>
      ,{" "}
      <a
        href="https://www.innsbruck.info/wandern/wandern/familienwanderungen/touren/tourismus-information-mieming-i.html"
        target="_blank"
        className={classNames(styles.whiteLinkunderlined)}
      >
        Mieming</a>{" "}
      und&nbsp;
      <a
        href="https://www.innsbruck.info/destination/tourismus-information.html"
        target="_blank"
        className={classNames(styles.whiteLinkunderlined)}
      >Innsbruck
      </a>
      .
      <br />
      <br />
      {/* Tickets Info 1b */}
      <div className={styles.subtitle}>Saalplanbuchung</div>
      Direkt bei der Ticketbuchung können Sie sich Ihren Lieblingsplatz
      aussuchen und Sie wissen genau, wo im Saal Sie sitzen werden. F&uuml;r den
      OBERT&Ouml;NE-Pass sind spezielle Pl&auml;tze reserviert.
      <br />
      <br />
      {/* Tickets Info 1b */}
      <div className={styles.subtitle}>Preisanpassung</div>
      Lange Zeit haben wir unsere Preise nicht erh&ouml;ht &ndash; der Großteil
      der Tickets kostete &uuml;ber ein Jahrzehnt gleich viel, wie bei unserer
      Gr&uuml;ndung 2014. F&uuml;r 2025 ist es notwendig, die Preise in den
      Kategorien A und B der Situation anzupassen; die Preise der Kategorie C
      bleiben unverändert &mdash; aus unserer Sicht die fairste L&ouml;sung. Wir
      danken f&uuml;r Ihr Verst&auml;ndnis und Ihren Zuspruch!
      <br />
      <br />
      {/* Tickets Info 2 */}
      <div className={styles.subtitle}>Der OBERT&Ouml;NE-Pass</div>
      f&uuml;r das volle Erlebnis und vier Konzertabende<br /> 
      von 17. bis 21. September 2025
      <br />
      <p>
        Kategorie A: €&nbsp;170,&mdash;
        <br />
        Kategorie B: €&nbsp;110,&mdash;
      </p>
      <div className={styles.subtitle}>Einzeltickets</div>
      je Konzert: 17./&thinsp;18./&thinsp;20./&thinsp;21. September 2025
      <br />
      <p>
        Kategorie&nbsp;A: €&nbsp;53,&mdash;
        <br />
        Kategorie&nbsp;B: €&nbsp;34,&mdash;
        <br />
        Kategorie&nbsp;C: €&nbsp;10,&mdash;
      </p>
      <br />
      {/* Tickets Info 3 */}
      <div className={styles.subtitle}>Ermäßigungen</div>
      <p>
        &#9679; OBERT&Ouml;NE-Clubmitglieder, Sch&uuml;lerInnen, Studierende bis
        30, Menschen&nbsp;mit&nbsp;Behinderung: bis zu 20%
      </p>
      <p>&#9679; Mitglieder im &Ouml;1-Club: 10%</p>
      <p>&#9679; Mitglieder &Ouml;1-Intro: 30%</p>
      <p>
        &#9679; F&uuml;r BesitzerInnen des Hunger-auf-Kunst-und-Kultur-Passes
        gibt es ein Kontingent an kostenlosen Karten in{" "}
        <nobr>Kategorie C.</nobr>
      </p>
      <p>
        Die Berechtigung zur Erm&auml;ßigung kann beim Eintritt kontrolliert
        werden. Bitte nehmen Sie eine entsprechende Best&auml;tigung mit, da
        ansonsten eine Nachzahlung der Preisdifferenz f&auml;llig werden kann.
      </p>
      <br />
      <br />
      {/* Tickets Info 4 */}
      <div className={styles.subtitle}>Menschen mit Behinderung</div>
      <p>
        Menschen mit Behinderung und deren Begleitung möchten wir gerne bei der
        Ticketbuchung unterst&uuml;tzen. Bitte schreiben Sie uns ein kurzes Mail
        an info@obertone.at, welche Kategorie Sie gerne f&uuml;r welche Konzerte
        buchen wollen. Gemeinsam mit Ihnen k&ouml;nnen wir dann bequem
        zug&auml;ngliche Pl&auml;tze ausw&auml;hlen und f&uuml;r Sie buchen!
      </p>
      <br />
      <br />
      {/* Tickets Info 5 */}
      <div className={styles.subtitle}>Datenschutz</div>
      <p>
        Wir gehen mit den Daten sorgsam um, die f&uuml;r Ihre Buchung, Ihre
        Mitgliedschaft oder zur Newsletter-Anmeldung erhoben werden. Dazu und
        bez&uuml;glich Bild- und Tonaufnahmen bei den Konzerten beachten Sie
        bitte unsere&ensp;
        <a
          href="https://www.obertone.at/datenschutz.pdf"
          className={styles.whiteLinkunderlined}
        >
          Datenschutzhinweise.
        </a>
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
