import React from "react"
import classNames from "classnames"

import { SECTION_NAMES } from "common/sectionNames"
import albumCoverImage from "images/listen.jpg"

import styles from "./ContactsSection.module.scss"
import commonStyles from "../../common/commonStyles.module.scss"

export default ({ onRef }) => (
  <div id={SECTION_NAMES.LISTEN} className={styles.sectionWrapper} ref={onRef}>
    <h2
      className={classNames(
        commonStyles.titleWithBackground,
        styles.contactsSectionTitle
      )}
    >
      Reinh&ouml;ren und Nachh&ouml;ren
    </h2>

    <div className={styles.content}>
      <img src={albumCoverImage} className={styles.albumCover} alt="listen" />
      <div className={styles.mainSection}>
        Wollen Sie die Musik der OBERT&Ouml;NE auch zu Hause oder unterwegs
        h&ouml;ren? M&ouml;chten Sie Emanuel Altenburgers Doku-Film sehen? Hier
        finden Sie bald alle Infos über das Bestellen, Laden oder Streamen:
      </div>
      {/* <a
        href="https://obertone.at/#/media"
        className={classNames(
          styles.assetsLink,
          commonStyles.withRoundedBorder
        )}
      >
        OBERTÖNE@home
        <div className={styles.assetsLinkSmallText}>
          bald hier: Live-CDs, Streams, Doku-Film
        </div>
      </a> */}
      <div
        className={classNames(
          styles.assetsLink,
          commonStyles.withRoundedBorder
        )}
      >
        OBERTÖNE@home
        <div className={styles.assetsLinkSmallText}>
          bald hier: Live-CDs, Streams, Doku-Film
        </div>
      </div>
      <div className={styles.mainSection}>
        Folgen Sie uns auch auf Social Media und den Streaming-Plattformen:
      </div>
      <br />

      <div
        className={styles.socialLinks}
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "36px",
        }}
      >
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          <a
            href="https://www.facebook.com/obertonemusik"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: "none",
              border: 0,
              width: "64px",
              height: "64px",
              padding: "2px",
              margin: "5px",
              color: "#fffefa",
              borderRadius: "50%",
              backgroundColor: "#e6d430",
            }}
          >
            <svg
              className="niftybutton-facebook"
              style={{ display: "block", fill: "currentColor" }}
              data-tag="fac"
              data-name="Facebook"
              viewBox="0 0 512 512"
              preserveAspectRatio="xMidYMid meet"
            >
              <path d="M211.9 197.4h-36.7v59.9h36.7V433.1h70.5V256.5h49.2l5.2-59.1h-54.4c0 0 0-22.1 0-33.7 0-13.9 2.8-19.5 16.3-19.5 10.9 0 38.2 0 38.2 0V82.9c0 0-40.2 0-48.8 0 -52.5 0-76.1 23.1-76.1 67.3C211.9 188.8 211.9 197.4 211.9 197.4z"></path>
            </svg>
          </a>
          <a
            href="https://www.instagram.com/obertonemusik/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: "none",
              border: 0,
              width: "64px",
              height: "64px",
              padding: "2px",
              margin: "5px",
              color: "#fffefa",
              borderRadius: "50%",
              backgroundColor: "#e6d430",
            }}
          >
            <svg
              className="niftybutton-instagram"
              style={{ display: "block", fill: "currentColor" }}
              data-tag="ins"
              data-name="Instagram"
              viewBox="0 0 512 512"
              preserveAspectRatio="xMidYMid meet"
            >
              <path d="M256 109.3c47.8 0 53.4 0.2 72.3 1 17.4 0.8 26.9 3.7 33.2 6.2 8.4 3.2 14.3 7.1 20.6 13.4 6.3 6.3 10.1 12.2 13.4 20.6 2.5 6.3 5.4 15.8 6.2 33.2 0.9 18.9 1 24.5 1 72.3s-0.2 53.4-1 72.3c-0.8 17.4-3.7 26.9-6.2 33.2 -3.2 8.4-7.1 14.3-13.4 20.6 -6.3 6.3-12.2 10.1-20.6 13.4 -6.3 2.5-15.8 5.4-33.2 6.2 -18.9 0.9-24.5 1-72.3 1s-53.4-0.2-72.3-1c-17.4-0.8-26.9-3.7-33.2-6.2 -8.4-3.2-14.3-7.1-20.6-13.4 -6.3-6.3-10.1-12.2-13.4-20.6 -2.5-6.3-5.4-15.8-6.2-33.2 -0.9-18.9-1-24.5-1-72.3s0.2-53.4 1-72.3c0.8-17.4 3.7-26.9 6.2-33.2 3.2-8.4 7.1-14.3 13.4-20.6 6.3-6.3 12.2-10.1 20.6-13.4 6.3-2.5 15.8-5.4 33.2-6.2C202.6 109.5 208.2 109.3 256 109.3M256 77.1c-48.6 0-54.7 0.2-73.8 1.1 -19 0.9-32.1 3.9-43.4 8.3 -11.8 4.6-21.7 10.7-31.7 20.6 -9.9 9.9-16.1 19.9-20.6 31.7 -4.4 11.4-7.4 24.4-8.3 43.4 -0.9 19.1-1.1 25.2-1.1 73.8 0 48.6 0.2 54.7 1.1 73.8 0.9 19 3.9 32.1 8.3 43.4 4.6 11.8 10.7 21.7 20.6 31.7 9.9 9.9 19.9 16.1 31.7 20.6 11.4 4.4 24.4 7.4 43.4 8.3 19.1 0.9 25.2 1.1 73.8 1.1s54.7-0.2 73.8-1.1c19-0.9 32.1-3.9 43.4-8.3 11.8-4.6 21.7-10.7 31.7-20.6 9.9-9.9 16.1-19.9 20.6-31.7 4.4-11.4 7.4-24.4 8.3-43.4 0.9-19.1 1.1-25.2 1.1-73.8s-0.2-54.7-1.1-73.8c-0.9-19-3.9-32.1-8.3-43.4 -4.6-11.8-10.7-21.7-20.6-31.7 -9.9-9.9-19.9-16.1-31.7-20.6 -11.4-4.4-24.4-7.4-43.4-8.3C310.7 77.3 304.6 77.1 256 77.1L256 77.1z"></path>
              <path d="M256 164.1c-50.7 0-91.9 41.1-91.9 91.9s41.1 91.9 91.9 91.9 91.9-41.1 91.9-91.9S306.7 164.1 256 164.1zM256 315.6c-32.9 0-59.6-26.7-59.6-59.6s26.7-59.6 59.6-59.6 59.6 26.7 59.6 59.6S288.9 315.6 256 315.6z"></path>
              <circle cx="351.5" cy="160.5" r="21.5"></circle>
            </svg>
          </a>
          <a
            href="true"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: "none",
              border: 0,
              width: "64px",
              height: "64px",
              padding: "2px",
              margin: "5px",
              color: "#fffefa",
              borderRadius: "50%",
              backgroundColor: "#e6d430",
            }}
          >
            <svg
              className="niftybutton-itunes"
              style={{ display: "block", fill: "currentColor" }}
              data-donate="true"
              data-tag="itu"
              data-name="iTunes"
              viewBox="0 0 512 512"
              preserveAspectRatio="xMidYMid meet"
            >
              <path d="M183.38 344.61c-14.25 1.85-75.76 10.56-66.3 55.77 11.14 53.28 101.6 40.89 100.99-21.68-.42-42.76 0-171.64 0-171.64s-1.22-11.77 10.53-14.25l135.7-27.88s11.16-2.48 11.16 8.67v120.82s1.22 11.16-12.4 13.64c-13.64 2.47-73.73 7.43-68.78 53.28 5.77 53.34 101.62 45.85 101.62-16.74V91.79s.61-17.37-19.2-13.01l-164.82 33.47s-14.25 3.1-14.25 17.35v198.27c0 .01 0 14.87-14.25 16.74z"></path>
            </svg>
          </a>
          <a
            href="https://open.spotify.com/album/0qM6xRcPGjyjS8rJFidL1M"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: "none",
              border: 0,
              width: "64px",
              height: "64px",
              padding: "2px",
              margin: "5px",
              color: "#fffefa",
              borderRadius: "50%",
              backgroundColor: "#e6d430",
            }}
          >
            <svg
              className="niftybutton-spotify"
              style={{ display: "block", fill: "currentColor" }}
              data-donate="true"
              data-tag="spo"
              data-name="Spotify"
              viewBox="0 0 512 512"
              preserveAspectRatio="xMidYMid meet"
            >
              <path d="M256 78c-98.3 0-178 79.7-178 178 0 98.31 79.7 178 178 178 98.31 0 178-79.69 178-178 0-98.3-79.69-178-178-178zm81.63 256.73a11.09 11.09 0 0 1-15.26 3.68c-41.8-25.53-94.4-31.31-156.37-17.16a11.1 11.1 0 0 1-4.93-21.64c67.8-15.49 125.96-8.82 172.88 19.86a11.1 11.1 0 0 1 3.68 15.26zm21.79-48.47a13.88 13.88 0 0 1-19.1 4.57c-47.84-29.4-120.77-37.92-177.36-20.74a13.9 13.9 0 0 1-17.32-9.25 13.9 13.9 0 0 1 9.25-17.3c64.65-19.62 145.01-10.12 199.96 23.64a13.87 13.87 0 0 1 4.56 19.08zm1.87-50.47c-57.37-34.07-152.02-37.2-206.8-20.58a16.65 16.65 0 1 1-9.66-31.87c62.88-19.08 167.4-15.4 233.45 23.81a16.63 16.63 0 0 1 5.82 22.82 16.63 16.63 0 0 1-22.8 5.82h-.01z"></path>
            </svg>
          </a>
          <a
            href="https://www.youtube.com/user/obertonemusik"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: "none",
              border: 0,
              width: "64px",
              height: "64px",
              padding: "2px",
              margin: "5px",
              color: "#fffefa",
              borderRadius: "50%",
              backgroundColor: "#e6d430",
            }}
          >
            <svg
              className="niftybutton-youtube"
              style={{ display: "block", fill: "currentColor" }}
              data-donate="true"
              data-tag="you"
              data-name="YouTube"
              viewBox="0 0 512 512"
              preserveAspectRatio="xMidYMid meet"
            >
              <path d="M422.6 193.6c-5.3-45.3-23.3-51.6-59-54 -50.8-3.5-164.3-3.5-215.1 0 -35.7 2.4-53.7 8.7-59 54 -4 33.6-4 91.1 0 124.8 5.3 45.3 23.3 51.6 59 54 50.9 3.5 164.3 3.5 215.1 0 35.7-2.4 53.7-8.7 59-54C426.6 284.8 426.6 227.3 422.6 193.6zM222.2 303.4v-94.6l90.7 47.3L222.2 303.4z"></path>
            </svg>
          </a>
        </div>
      </div>

      <div className={styles.section}>
        Änderungen in Programm und Besetzung vorbehalten. Aufgrund der Aktuellen
        pandemischen Situation können sich auch genauer Aufführungsort oder
        Konzertdatum und -zeit ändern.
      </div>

      <div className={styles.section}>
        <div>Für den Inhalt verantwortlich:</div>
        OBERT&Ouml;NE Kammermusikverein
        <br />
        Obmann:&ensp;Toni Innauer
        <br />
        K&uuml;nstlerische Leitung:&ensp;Mariya&nbsp;Nesterovska und
        Hubert&nbsp;Mittermayer&nbsp;Nesterovskiy
        <br />
        Postfach 04, 6029 Innsbruck
        <br />
        <a href="mailto:info@obertone.at" className={styles.obertoneLink}>
          info@obertone.at
        </a>
        <br />
      </div>

      <div className={styles.section}>
        <p>
          Bildnachweis: Bewegte Bilder von Emanuel&nbsp;Altenburger. Fotos:
          „Unsere Partner" / „Wir machen..." / „Toni&nbsp;Innauer" / von
          Heinz&nbsp;Zak, „David Bergmüller" von Theresa Pewal, „Stephan
          Moosmann" von TENM. Alle anderen Fotos von Mariya&nbsp;Nesterovska.
          <br />
          Design: Hubert&nbsp;Mittermayer&nbsp;Nesterovskiy
          <br />
          Programmierung: Andrey Filenko
        </p>
        ©2023 OBERT&Ouml;NE Kammermusikverein
      </div>
    </div>
  </div>
)
