import React, { useCallback, useEffect, useRef, useState } from "react"

import { SECTION_NAMES } from "common/sectionNames"
import classNames from "classnames"
import commonStyles from "../../common/commonStyles.module.scss"
import parallaxStyles from "../../common/parallaxStyles.module.scss"
import styles from "./HomeSection.module.scss"
import videoSource1 from "./Backgroundvideo.mp4"
import videoSource2 from "./Backgroundvideo.webm"

export default ({ onRef }) => {
  const [videoStyle, setVideoStyle] = useState({})
  const [videoRatio, setVideoRatio] = useState(0)

  const resizeVideo = (videoRatio) => {
    const windowWidth = window.innerWidth
    const windowHeight = window.innerHeight

    if (windowWidth * videoRatio < windowHeight) {
      setVideoStyle({ height: "100vh" })
    } else {
      setVideoStyle({ width: "100vw" })
    }
  }

  const handleWindowResize = useCallback(() => {
    if (!videoRatio) {
      return
    }

    resizeVideo(videoRatio)
  }, [videoRatio])

  const handleLoadedVideoMeta = ({ currentTarget }) => {
    const ratio = currentTarget.videoHeight / currentTarget.videoWidth
    setVideoRatio(ratio)
    resizeVideo(ratio)
  }

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize)
    return () => window.removeEventListener("resize", handleWindowResize)
  }, [handleWindowResize])

  return (
    <div
      id={SECTION_NAMES.HOME}
      ref={onRef}
      className={classNames(
        parallaxStyles.parallaxGroup,
        commonStyles.sectionWrapper,
        styles.sectionWrapper
      )}
    >
      <div
        className={classNames(
          parallaxStyles.parallaxLayer,
          parallaxStyles.parallaxLayerBack,
          styles.sectionBackground
        )}
      >
        <div className={styles.videoWrapper}>
          <div className={styles.videoOverlay}></div>
          <video
            style={videoStyle}
            className="videoTag"
            autoPlay
            loop
            muted
            onLoadedMetadata={handleLoadedVideoMeta}
          >
            <source src={videoSource1} type="video/mp4" />
            <source src={videoSource2} type="video/webm" />
          </video>
        </div>
      </div>
      <div
        className={classNames(
          parallaxStyles.parallaxLayer,
          parallaxStyles.parallaxLayerBase,
          styles.contentWrapper
        )}
      >
        <div
          className={classNames(
            parallaxStyles.parallaxGroup,
            styles.intermediateSection,
            styles.content
          )}
        >
          <div
            className={classNames(
              parallaxStyles.parallaxLayer,
              parallaxStyles.parallaxLayerBack,
              styles.intermediateSectionBackground
            )}
          />
          <div className={styles.homeSectionTitle}>
           CHAMBER MUSIC WONDERLAND
          </div>
          <div className={styles.homeSectionSubtitle}>
          11. OBERTÖNE Kammermusiktage
            <br />
            18.&mdash;22. September 2024
          </div>
          <a
            href="https://shop.ticketpay.de/U698P1XJ"
            className={classNames(
              styles.ticketsLink,
              commonStyles.withRoundedBorder
            )}
          >
            Sichern Sie sich ab 10.03. hier Ihre
            <div className={styles.ticketsLinkLargeText}>TICKETS</div>
          </a>
         
        </div>
      </div>
    </div>
  )
}
