import React, { useEffect, useRef, useState, useCallback } from "react"
import { useHistory } from "react-router-dom"
import classNames from "classnames"

import NavControl from "components/navControl/NavControl"
import HomeSection from "sections/home/HomeSection"
import MusiciansSection from "sections/musicians/MusiciansSection"
import ProgramSection from "sections/program/ProgramSection"
import TicketsSection from "sections/tickets/TicketsSection"
import PartnersSection from "sections/partners/PartnersSection"
import AboutSection from "sections/about/AboutSection"
import ContactsSection from "sections/contacts/ContactsSection"
import { useCurrentSection } from "common/utils"
import { SECTION_NAMES } from "common/sectionNames"

import styles from "./HomePage.module.scss"
import parallaxStyles from "common/parallaxStyles.module.scss"

let animationFrame
let intersectionRatios = {}
let freezeHandleSectionChangeTimeout

const NAV_HEADER_HEIGHT = 110

const easeInOutSin = (t) => (1 + Math.sin(Math.PI * t - Math.PI / 2)) / 2

const HomePage = ({ lang, onChangeLang }) => {
  const history = useHistory()
  const scrollContainerRef = useRef()
  const [scrollAnimation, setScrollAnimation] = useState(null)
  const currentSection = useCurrentSection()
  const sectionName =
    SECTION_NAMES[currentSection.toUpperCase()] || SECTION_NAMES.HOME

  const [sectionRefs, setSectionRefs] = useState({})
  const [shouldHandleHistoryChange, setShouldHandleHistoryChange] = useState(
    true
  )

  const [currentSectionName, setCurrentSectionName] = useState()
  const [isReady, setIsReady] = useState()
  const [isHeaderCollapsed, setHeaderCollapsed] = useState(false)
  const [currentScrollAmount, setCurrentScrollAmount] = useState(1)

  const handleIntersection = (intersections) => {
    const visibleIntersection = intersections.find(
      ({ intersectionRect, rootBounds }) =>
        intersectionRect.height / rootBounds.height > 0.5
    )

    if (visibleIntersection) {
      const { target, intersectionRect, rootBounds } = visibleIntersection
      const sectionId = target.id || ""
      const prevIntersectionRatio = intersectionRatios[sectionId]
      const intersectionRatio = intersectionRect.height / rootBounds.height

      if (prevIntersectionRatio < intersectionRatio || !prevIntersectionRatio) {
        freezeHandleSectionChangeTimeout = setTimeout(
          () => setShouldHandleHistoryChange(true),
          500
        )
        intersectionRatios = {
          [sectionId]: intersectionRatio,
        }
        setShouldHandleHistoryChange(false)
        setCurrentSectionName(sectionId)
        history.push(sectionId)
      }
    } else {
      intersectionRatios = {
        ...intersectionRatios,
        ...intersections.reduce(
          (acc, curr) => ({
            acc,
            [curr.target.id]:
              curr.intersectionRect.height / curr.rootBounds.height,
          }),
          {}
        ),
      }
    }
  }

  const intersectionObserver = useRef(
    new IntersectionObserver(handleIntersection, {
      threshold: new Array(10).fill(null).map((_, i) => i / 10),
    })
  )

  useEffect(() => {
    if (shouldHandleHistoryChange && currentSectionName !== sectionName) {
      const destinationSection = sectionRefs[sectionName]

      if (
        scrollContainerRef.current &&
        destinationSection &&
        Object.keys(sectionRefs).length === Object.keys(SECTION_NAMES).length
      ) {
        setTimeout(() => {
          setScrollAnimation({
            from: scrollContainerRef.current.scrollTop,
            to: destinationSection.offsetTop - NAV_HEADER_HEIGHT,
            timeStart: Date.now(),
          })
        }, 500)
      }
    }
  }, [sectionName, currentSectionName, shouldHandleHistoryChange, sectionRefs])

  useEffect(() => () => clearTimeout(freezeHandleSectionChangeTimeout), [])

  const animateScroll = useCallback(() => {
    const dT = (Date.now() - scrollAnimation.timeStart) / 500

    if (dT >= 1) {
      scrollContainerRef.current.scrollTop = scrollAnimation.to
      window.test = scrollContainerRef.current
      setScrollAnimation(null)
      cancelAnimationFrame(animationFrame)

      if (!isReady) {
        setIsReady(true)
      }

      return
    }

    const easingTime = easeInOutSin(dT)

    scrollContainerRef.current.scrollTop =
      scrollAnimation.from +
      (scrollAnimation.to - scrollAnimation.from) * easingTime
    animationFrame = requestAnimationFrame(animateScroll)
  }, [isReady, scrollAnimation])

  useEffect(() => {
    if (scrollAnimation) {
      animationFrame = requestAnimationFrame(animateScroll)
    }

    return () => cancelAnimationFrame(animationFrame)
  }, [animateScroll, scrollAnimation])

  const sectionRefCallback = useCallback(
    (node) => {
      if (node && !sectionRefs[node.id]) {
        setSectionRefs({
          ...sectionRefs,
          [node.id]: node,
        })
      }
    },

    [sectionRefs, setSectionRefs]
  )

  useEffect(() => {
    const intersectionObserverRef = intersectionObserver.current

    if (isReady) {
      Object.values(sectionRefs).forEach(
        (sectionRef) =>
          sectionRef && intersectionObserverRef?.observe(sectionRef)
      )
    }
    return () => intersectionObserverRef?.disconnect()
  }, [sectionRefs, isReady])

  const handleScroll = (event) => {
    if (event.deltaY === 0) {
      return
    }

    if (event.deltaY * currentScrollAmount > 0) {
      setCurrentScrollAmount(currentScrollAmount + event.deltaY)
    } else {
      setCurrentScrollAmount(event.deltaY)
    }
  }

  useEffect(() => {
    if (currentScrollAmount > 10 && !isHeaderCollapsed) {
      setHeaderCollapsed(true)
    } else if (currentScrollAmount < -10 && isHeaderCollapsed) {
      setHeaderCollapsed(false)
    }
  }, [currentScrollAmount, isHeaderCollapsed])

  return (
    <>
      <NavControl
        lang={lang}
        onChangeLang={onChangeLang}
        collapsed={isHeaderCollapsed}
      />
      <div
        className={classNames(styles.appContainer, {
          [styles.isReady]: isReady,
        })}
        onWheel={handleScroll}
      >
        <div className={parallaxStyles.parallax} ref={scrollContainerRef}>
          <HomeSection onRef={sectionRefCallback} />
          <MusiciansSection onRef={sectionRefCallback} />

          <div
            className={classNames(
              parallaxStyles.parallaxGroup,
              styles.intermediateSection
            )}
          >
            <div
              className={classNames(
                parallaxStyles.parallaxLayer,
                parallaxStyles.parallaxLayerBack,
                styles.intermediateSectionBackground
              )}
            />
          </div>

          <ProgramSection onRef={sectionRefCallback} />
          <TicketsSection onRef={sectionRefCallback} />
          <PartnersSection onRef={sectionRefCallback} />
          <AboutSection onRef={sectionRefCallback} />
          <ContactsSection onRef={sectionRefCallback} />
        </div>
      </div>
    </>
  )
}

export default HomePage
