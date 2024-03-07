import React from "react"
import classNames from "classnames"

import RafaelBonavitaPhoto from "images/musicians/RafaelBonavita.jpg"
import FrancoisGuerrierPhoto from "images/musicians/FrancoisGuerrier.jpg"
import HubertMittermayerNesterovskiyPhoto from "images/musicians/HubertMittermayerNesterovskiy.jpg"
import JanKrigovskyPhoto from "images/musicians/JanKrigovsky.jpg"
import MarceloNisinmanPhoto from "images/musicians/MarceloNisinman.jpg"
import MariyaNesterovskaPhoto from "images/musicians/MariyaNesterovska.jpg"
import NenadLecicPhoto from "images/musicians/NenadLecic.jpg"
import TobiasSteinbergerPhoto from "images/musicians/TobiasSteinberger.jpg"

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
    name: "François Guerrier",
    photo: FrancoisGuerrierPhoto,
    info: `François Guerrier, Cembalo/Orgel (F) – Geboren in Caen. Studium am Conservatoire Superieur de Paris bei Pierre Hantaï, 
    Elisabeth Joyé, Christophe Rousset und Kenneth Weiss. Preisträger des Internationalen Bach-Wettbewerbs 
    Leipzig 2006. Konzertreisen als Solist und Kammermusiker in Europa, Amerika und Asien mit Partnern wie 
    Stéphanie-Marie Degand, Ricercar Consort und Il Gardellino. CD-Einspielungen mit Werken von Couperin, 
    Mazzocchi und Bach.
    `,
  },
  {
    name: "Jan Krigovsky",
    photo: JanKrigovskyPhoto,
    info: `Jan Krigovsky, Violone/Kontrabass (SVK) – Geboren in Spisska.
        Kontrabassstudium in Košice und Bratislava bei T. Trn und R. Šašina.
        Gustav Mahler Jugendorchester und Solobass im staatlichen Kammerorchester Žilina.
        Studium der Violone an der Schola Cantorum Basiliensis bei David Sinclair.
        Regelmäßiger Gast und Solist bei Wiener Akademie, Capella Istropolitana und Freitagsakademie Bern.
        Professor am Konservatorium Bratislava. Mitglied der Ars Antiqua Austria.`,
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
    name: "Tobias Steinberger",
    photo: TobiasSteinbergerPhoto,
    info: `Tobias Steinberger, Percussion (A) – Geboren in Tirol. Studium von Klassik und Jazz in Salzburg, Innsbruck 
    und Linz bei Gunnar Fras, Georg Tausch und Stephan Maass. Schwerpunkt auf der Rahmentrommel und 
    Handperkussioninstrumenten. Internationale Konzerttätigkeit auf Festivals von Alter Musik bis 
    World Music mit Partnern wie dem Rolf Lieslevand Ensemble, I Barocchisti, Freiburger Barockorchester, 
    und Jarrod Cagwin.`,
  },
]

export default ({ onRef }) => (
  <div
    id={SECTION_NAMES.ARTISTS}
    ref={onRef}
    className={classNames(commonStyles.sectionWrapper, styles.sectionWrapper)}
  >
    <h2 className={commonStyles.titleWithBackground}>
      K&Uuml;NSTLER AUS SIEBEN L&Auml;NDERN
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
