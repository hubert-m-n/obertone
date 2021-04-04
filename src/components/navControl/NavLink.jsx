import React, { useRef, useState, useEffect } from "react"
import { Link } from "react-router-dom"
import classNames from "classnames"

import { useCurrentSection } from "common/utils"
import styles from "./NavControl.module.scss"

export default ({ path, children, isDisabled, className }) => {
  const currentSection = useCurrentSection()

  const timeoutToClear = useRef(null)
  const [isClicked, setIsClicked] = useState()

  const handleClick = () => {
    setIsClicked(true)

    timeoutToClear.current = setTimeout(() => setIsClicked(false), 1100)
  }

  useEffect(() => () => clearTimeout(timeoutToClear.current), [])

  return (
    <Link
      to={path}
      className={classNames(className, {
        [styles.active]: currentSection === path || isClicked,
        [styles.disabled]: isDisabled && !isClicked,
      })}
      onClick={handleClick}
    >
      {children}
    </Link>
  )
}
