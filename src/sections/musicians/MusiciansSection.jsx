import React from "react"
import classNames from "classnames"

import RafaelBonavitaPhoto from "images/musicians/RafaelBonavita.jpg"
import BertrandCuillerPhoto from "images/musicians/BertrandCullier.jpg"
import HubertMittermayerNesterovskiyPhoto from "images/musicians/HubertMittermayerNesterovskiy.jpg"
import JanKrigovskyPhoto from "images/musicians/JanKrigovsky.jpg"
import MarceloNisinmanPhoto from "images/musicians/MarceloNisinman.jpg"
import MariyaNesterovskaPhoto from "images/musicians/MariyaNesterovska.jpg"
import NenadLecicPhoto from "images/musicians/NenadLecic.jpg"
import GiorgiGvantseladzePhoto from "images/musicians/GiorgiGvantseladze.jpg"
import VictorApariciPhoto from "images/musicians/VictorAparici.jpg"
import FelipeFreitasPhoto from "images/musicians/FelipeFreitas.jpg"

import MusicianTile from "./tile/MusicianTile"
import { SECTION_NAMES } from "common/sectionNames"

import styles from "./MusiciansSection.module.scss"
import commonStyles from "../../common/commonStyles.module.scss"

const musicians = [
  {
    name: "Mariya Nesterovska",
    photo: MariyaNesterovskaPhoto,
    info: `Mariya Nesterovska, Violine (UA) – Geboren in Kiew. Studium in Kiew, Hamburg, Köln und Gent u.a. bei Ludmilla Ovcharenko und 
    Mikhail Bezverkhny. Als Solistin und Kammermusikerin bereits in jungen Jahren vielfache Preisträgerin 
    internationaler Wettbewerbe u.a. in Paris, Belgrad, Covilha, Atri, Ragusa / New York. Konzerte in 
    ganz Europa. CDs mit Werken von Skoryk, Schnittke, Franck, Telemann und Kantscheli.`,
  },
  {
    name: "Rafael Bonavita",
    photo: RafaelBonavitaPhoto,
    info: `Rafael Bonavita, Gitarren (URY) – Geboren in Montevideo. Studium der klassischen Gitarre bei Alvaro Pierri 
    und historischer 
    Lauten und Gitarren bei Hopkinson Smith. Weltweite Konzerttätigkeit u.a. mit Jordi Savall, 
    René Jacobs und Marc Minkovski. Zahlreiche Aufnahmen für Radio und Fernsehen in Europa und Asien. 
    CD-Einspielungen für das Label Enchiriadis mit Musik von Bach, Bartolotti, de Murcia und 
    Sanz sowie Eigenkompositionen.`,
  },
  {
    name: "Nenad Lečić",
    photo: NenadLecicPhoto,
    info: `Nenad Lečić, Klavier (SRB) – Geboren in Čačak. Studium in Belgrad und Köln bei Igor Lasko, Arbo Valdma und 
    Pierre-Laurent Aimard. Debüt mit Orchester mit 11 Jahren. Young-European-Talent der RAI. 
    Preisträger zahlreicher internationaler Wettbewerbe. Konzerte in ganz Europa im Rahmen 
    renommierter Konzertreihen wie Salzburger Festspiele, Klavierfestival Ruhr, Pianorama (WDR). 
    Dozent der Musikhochschule Köln.`,
  },
  {
    name: "Hubert Mittermayer Nesterovskiy",
    photo: HubertMittermayerNesterovskiyPhoto,
    info: `Hubert Mittermayer Nesterovskiy, Fagott (A) – Geboren in Innsbruck. Studium bei G. Klütsch (Weimar / Köln). 
    Solofagott in Orchestern in San Sebastian, 
    Rotterdam, Köln, Turin, Mahler Chamber Orchestra u. Ensemble Modern mit Dirigenten wie Sir C. Davis, 
    L. Maazel, P. Järvi, Chr. Eschenbach und P. Boulez. Solist mit Orquesta Filarmónica de Buenos Aires 
    und Capella Istropolitana. Festivals Luzern, Ludwigsburg und Schleswig-Holstein.`,
    useCondensedFont: true,
  },
  {
    name: "Ján Krigovský",
    photo: JanKrigovskyPhoto,
    info: `Ján Krigovský, Violone/Kontrabass (SVK) – Geboren in Spisska.
        Kontrabassstudium in Košice und Bratislava bei T. Trn und R. Šašina.
        Gustav Mahler Jugendorchester und Solobass im staatlichen Kammerorchester Žilina.
        Studium der Violone an der Schola Cantorum Basiliensis bei David Sinclair.
        Regelmäßiger Gast und Solist bei Wiener Akademie, Capella Istropolitana und Freitagsakademie Bern.
        Professor am Konservatorium Bratislava. Mitglied der Ars Antiqua Austria.`,
  },
  {
    name: "Bertrand Cuiller",
    photo: BertrandCuillerPhoto,
    info: `Bertrand Cuiller, Cembalo/Orgel – Geboren in ein Musikerfamilie. Studium bei Pierre Hantaï und Christophe Rousset
    in Paris. Preisträger der internat. Cembalowettbewerbes in Brügge, weltweite Konzerttätigkeit als Solist und Kammermusiker mit 
    Les Arts Florissants, Le Concert Spirituel u.a. Gründer und Leiter des Ensembles Le Caravansérail. Prämierte Einspielungen, u.a. 
    der Gesamtwerke von Jean-Philippe Rameau und François Couperin.`,
  },
  {
    name: "Marcelo Nisinman",
    photo: MarceloNisinmanPhoto,
    info: `Marcelo Nisinman, Bandoneon (ARG) – Geboren in Buenos Aires, Argentinien. Studium des Bandoneons bei Julio Pane, Komposition bei 
    Detlev Müller-Siemens. Internationale Konzerttätigkeit u.a. mit Gidon Kremer, Gary Burton, 
    Fernando Suarez Paz. Gast auf Musikfestivals in ganz Europa, sowie Solist vor zahlreichen Orchestern. 
    Komposition von Kammer- und symphon. Musik, einer Kammeroper und einer Neufassung von „Maria de Buenos Aires”.`,
  },
  {
    name: "Giorgi Gvantseladze",
    photo: GiorgiGvantseladzePhoto,
    info: `Giorgi Gvantseladze, Oboe (GE) – Geboren in Tiflis, Studium ebendort bei Giorgi Beridze sowie in 
    München und Salzburg bei François Leleux und Stefan Schilli. Früher Solooboist des Georgischen Nationalen 
    Symphonieorchesters sowie des Frankfurter Opern- und Museumsorchesters, seit 2010 an gleicher Position 
    an der Bayerischen Staatsoper. Als Solist, Orchester- und Kammermusiker weltweite Konzerttätigkeit, 
    u.a.m. Berliner Philharmonikern u.d. Chamber Orchestra of Europe. 
    `,
  },
  {
    name: "Victor Rubio Aparici",
    photo: VictorApariciPhoto,
    info: `Victor Rubio Aparici, Klarinette (ESP).`,
  },

  {
    name: "Felipe Freitas",
    photo: FelipeFreitasPhoto,
    info: `Felipe Freitas, Horn (BRA) – Geboren in Rio de Janeiro, Studium ebendort bei Philip Doyle sowie in Karlsruhe 
    bei Will Sanders. Preisträger der internationalen Wettbewerbe von Prag, Markneukirchen und Porcia. 
    Seit 2023 Solohornist des Rotterdams Philharmonisch Orkest. Weltweite Konzerttätigkeit. Gründer der Plattform 
    Trompa Brasilis zur Förderung brasilianischer HornistInnen.`,
  },
]

export default ({ onRef }) => (
  <div
    id={SECTION_NAMES.ARTISTS}
    ref={onRef}
    className={classNames(commonStyles.sectionWrapper, styles.sectionWrapper)}
  >
    <h2 className={commonStyles.titleWithBackground}>
      K&Uuml;NSTLERiNNEN AUS ZEHN L&Auml;NDERN
    </h2>
    <div className={styles.musicians}>
      {musicians.map((musician, i) => (
        <MusicianTile
          key={`musician-${i}`}
          {...musician}
          style={{ zIndex: musicians.length - i }}
        />
      ))}
    </div>
  </div>
)
