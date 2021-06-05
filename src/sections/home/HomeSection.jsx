import React, { useState, useCallback, useRef, useEffect } from "react"
import classNames from "classnames"

import videoSource1 from "./Backgroundvideo.mp4"
import videoSource2 from "./Backgroundvideo.webm"

import { SECTION_NAMES } from "common/sectionNames"

import styles from "./HomeSection.module.scss"
import commonStyles from "../../common/commonStyles.module.scss"
import parallaxStyles from "../../common/parallaxStyles.module.scss"

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
            16.–19. September 2021
          </div>
          <a
            href="http://www.obertone.at/test/dabeisein/"
            className={classNames(
              styles.ticketsLink,
              commonStyles.withRoundedBorder
            )}
          >
            Direkt zu den
            <div className={styles.ticketsLinkLargeText}>TICKETS</div>
          </a>
        </div>
      </div>
    </div>
  )
}
