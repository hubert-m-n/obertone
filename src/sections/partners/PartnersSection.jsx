import React, { useState, useMemo, useRef } from "react"
import classNames from "classnames"

// import PartnerA1Logo from "images/Partner_A1.png"
// import PartnerA2Logo from "images/Partner_A2.png"
// import PartnerA3Logo from "images/Partner_A3.png"

//size A (none)

// size B
import TirolLogo from "images/Tirol.png"
import InnsbruckLogo from "images/Innsbruck.png"
import OrtnerLogo from "images/Ortner.png"
import GurglCaratLogo from "images/GurglCarat.png"
import TiwagLogo from "images/Tiwag.png"
import HarrysHomeLogo from "images/HarrysHome.png"
import LLBLogo from "images/llb.png"



//size C
import PartnerC1Logo from "images/Schwarz.png"
import PartnerC2Logo from "images/E-Auto.png"
import PartnerC3Logo from "images/Stams.png"
import PartnerC4Logo from "images/StiftStams.png"
import PartnerC5Logo from "images/OE1.png"

import { SECTION_NAMES } from "common/sectionNames"

import styles from "./PartnersSection.module.scss"
import commonStyles from "../../common/commonStyles.module.scss"
import parallaxStyles from "../../common/parallaxStyles.module.scss"
import { useEffect } from "react"

export default ({ onRef }) => {
  const resizeTimeout = useRef()
  const contentPart1Ref = useRef()
  const contentPart2Ref = useRef()
  const contentPart3Ref = useRef()
  const [contentHeight, setContentHeight] = useState()

  const pageStyle = useMemo(
    () =>
      contentHeight && contentHeight > window.innerHeight
        ? { height: contentHeight }
        : {},
    [contentHeight]
  )

  const handleWindowResize = () =>
    setContentHeight(
      contentPart1Ref.current &&
        contentPart2Ref.current &&
        contentPart3Ref.current &&
        contentPart1Ref.current.getBoundingClientRect().height +
          contentPart2Ref.current.getBoundingClientRect().height +
          contentPart3Ref.current.getBoundingClientRect().height
    )

  useEffect(() => {
    resizeTimeout.current = setInterval(handleWindowResize, 250)

    return () => clearTimeout(resizeTimeout.current)
  }, [])

  return (
    <div
      id={SECTION_NAMES.PARTNERS}
      ref={onRef}
      className={classNames(
        parallaxStyles.parallaxGroup,
        commonStyles.sectionWrapper,
        styles.sectionWrapper
      )}
      style={pageStyle}
    >
      <div
        className={classNames(
          parallaxStyles.parallaxLayer,
          parallaxStyles.parallaxLayerBack,
          styles.sectionBackground
        )}
        style={pageStyle}
      />
      <div
        className={classNames(
          parallaxStyles.parallaxLayer,
          parallaxStyles.parallaxLayerBase,
          styles.partners
        )}
        style={pageStyle}
      >
        <h2 className={classNames(commonStyles.title, styles.title)}>
          Unsere Partner
          <div className={styles.subTitle}>
            machen die OBERT&Ouml;NE erst m&ouml;glich.
          </div>
        </h2>

        <div
          
          className={styles.partnersFirstSection} ref={contentPart1Ref}>
          <a href="https://www.tirol.gv.at/kunst-kultur/abteilung-kultur/">
            <img src={TirolLogo} />
          </a>
          <a href="http://innsbruck.info/">
            <img src={InnsbruckLogo} />
          </a>
          <a href="https://www.ortner-anlagen.at/">
            <img src={OrtnerLogo} />
          </a>
        </div>

        <div className={styles.partnersSecondSection} ref={contentPart2Ref}>
        <a href="https://llb.at/">
            <img src={LLBLogo} />
          </a>
          <a href="https://gurgl-carat.com/">
            <img src={GurglCaratLogo} />
          </a>
          <a href="https://www.tiwag.at/">
            <img src={TiwagLogo} />
          </a>
          <a href="https://harrys-home.com/telfs/">
            <img src={HarrysHomeLogo} />
          </a>
        </div>
        <div className={styles.partnersThirdSection} ref={contentPart3Ref}>
          <a href="https://www.e-auto.tirol/">
            <img src={PartnerC2Logo} />
          </a>
          <a href="https://www.schwarz.at/">
            <img src={PartnerC1Logo} />
          </a>
          <a href="https://www.stams.co.at/">
            <img src={PartnerC3Logo} />
          </a>
          <a href="https://www.stiftstams.at/">
            <img src={PartnerC4Logo} />
          </a>
          <a href="https://oe1.orf.at/">
            <img src={PartnerC5Logo} />
          </a>
        </div>
      </div>
    </div>
  )
}
