import React from "react"
import classNames from "classnames"

import RafaelBonavitaPhoto from "images/musicians/RafaelBonavita.jpg"
import FrancoisGuerrierPhoto from "images/musicians/FrancoisGuerrier.jpg"
import HubertMittermayerNesterovskiyPhoto from "images/musicians/HubertMittermayerNesterovskiy.jpg"
import JanKrigovskyPhoto from "images/musicians/JanKrigovsky.jpg"
import MarceloNisinmanPhoto from "images/musicians/MarceloNisinman.jpg"
import MariyaNesterovskaPhoto from "images/musicians/MariyaNesterovska.jpg"
import NenadLecicPhoto from "images/musicians/NenadLecic.jpg"
import KarlMarkovicsPhoto from "images/musicians/KarlMarkovics.jpg"
import AndreasOberaignerPhoto from "images/musicians/AndreasOberaigner.jpg"
import MichaelOberaignerPhoto from "images/musicians/MichaelOberaigner.jpg"
import ThomasOberleitnerPhoto from "images/musicians/ThomasOberleitner.jpg"
import DraganTrajkovskiPhoto from "images/musicians/DraganTrajkovski.jpg"
import YagoMahugoPhoto from "images/musicians/YagoMahugo.jpg"


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
    name: "Yago Mahúgo",
    photo: YagoMahugoPhoto,
    info: `Yago Mahúgo, Cembalo/Orgel – Geboren in Madrid, dort Klavierstudium, dann historische Tasteninstrumente
     bei Tibor Szász in Freibunrg sowie bei Christophe Rousset, Kenneth Gilbert und Malcom Bilson. Preisträger der 
     Cembalowettbewerbe von Budapest und Brügge. Konzerttätigkeit in Europa und Amerika als Solist und geschätzter
     Continuospieler. Vielbeachtete Aufnahmen mit Musik von Cimarosa, Rameau, Couperin. Professor des königlischen 
     Konservatoriums Madrid. `,
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
    name: "Karl Markovics",
    photo: KarlMarkovicsPhoto,
    info: `Karl Markovics, Sprecher (A) – geboren in Wien, eine der facettenreichsten Personen der deutschsprachigen 
    Film- und Theaterwelt. Schauspieler auf den großen und kleinen Bühnen, sowie in erfolgreichen internationalen TV- und Kinoproduktionen, wie dem 
    Oscar-Prämierten Film »Die Fälscher«. Regisseur von beachteten Theater- und Operproduktionen sowie aufsehenerregenden Filme wie »Atmen«. 
    Vielfältige Projekte, die Sprache und Musik miteinander verbinden. `,
  },
  {
    name: "Andreas Oberaigner",
    photo: AndreasOberaignerPhoto,
    info: `Andreas Oberaigner, Klarinette (A) – geboren in Hall in Tirol, Studium in Wien und Hannover 
    bei Horst Hajek und Johannes Peitz. Konzerte in Europa und Asien u.a. mit Staatskapelle Dresden, 
    Wiener Philharmoniker, Oper Frankfurt. Erste Preise bei nationalen Wettbewerben als Kammermusiker 
    und Solist. Ab 2006 Stv. Soloklarinette der Duisburger Philharmoniker, seit 2024 an gleicher 
    Position beim Gürzenichorchester Köln.`,
  },
  {
    name: "Thomas Oberleitner",
    photo: ThomasOberleitnerPhoto,
    info: `Thomas Oberleitner, Kornett (A) - geboren in Tirol, Studium bei Hannes Buchegger, 
    Andreas Öttl und Florian Klingler in Salzburg und Linz. 2019–2021 Akademist der Bayerischen 
    Staatsoper. Derzeit Solo-Trompeter im Mozarteumsorchester Salzburg (Zeitvertrag). 
    Erste Preise bei Wettbewerben, Gast der Deutschen Radiophilharmonie, Rundfunk-Sinfonieorchester Berlin, 
    im Gärtnerplatztheater München und der Camerata Salzburg.`,
  },
  {
    name: "Dragan Trajkovski",
    photo: DraganTrajkovskiPhoto,
    info: `Dragan Trajkovski, Kontrabass (NMK) - Geboren in Skopje, Studium bei Velko Todevski und 
    Veit Peter Schüßler in Skopje und Köln. Gewinner des Musikwettbewerbes der Jeunesse Musicales, 
    Belgrad 1998. Gast in den Orchestern von Skopje, Hannover, Essen sowie Bassist verschiedenster 
    Ensembles und Bands in Klassik und Jazz. Solokontrabassist des Tiroler Symphonieorchesters Innsbruck.`,
  },
  {
    name: "Michael Oberaigner",
    photo: MichaelOberaignerPhoto,
    info: `Michael Oberaigner, Schlagwerk (A) – geboren in Hall in Tirol, Studium in Innsbruck sowie München 
    bei Raymond Curfs. Seit 2009 Solopauker des Konzerhausorchester Berlin. Gast bei Wiener Philharmonikern, 
    Philharmonia Orchestra London, Seoul Philharmonic Orchestra, Münchner Kammerorchester Wiener-, Berliner- 
    und Bayerischer Staatsoper, den Rundfunkorchestern von Berlin, Stuttgart und Hamburg sowie dem Budapest 
    Festival Orchestra. `,
  },

]

export default ({ onRef }) => (
  <div
    id={SECTION_NAMES.ARTISTS}
    ref={onRef}
    className={classNames(commonStyles.sectionWrapper, styles.sectionWrapper)}
  >
    <h2 className={commonStyles.titleWithBackground}>
      K&Uuml;NSTLERiNNEN AUS ACHT L&Auml;NDERN
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
