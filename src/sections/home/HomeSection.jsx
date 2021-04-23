import React, { useState, useMemo, useRef, useEffect } from "react"
import classNames from "classnames"
import { Link } from "react-router-dom"

import { SECTION_NAMES } from "common/sectionNames"

import styles from "./HomeSection.module.scss"
import commonStyles from "../../common/commonStyles.module.scss"
import parallaxStyles from "../../common/parallaxStyles.module.scss"

export default ({ onRef }) => {
  const resizeTimeout = useRef()
  const contentRef = useRef()
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
      contentRef.current && contentRef.current.getBoundingClientRect().height
    )

  useEffect(() => {
    resizeTimeout.current = setInterval(handleWindowResize, 250)

    return () => clearTimeout(resizeTimeout.current)
  }, [])

  return (
    <div
      id={SECTION_NAMES.HOME}
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
          styles.contentWrapper
        )}
        style={pageStyle}
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
          <div className={styles.homeSectiontitle}>
            CHAMBER MUSIC WONDERLAND
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
