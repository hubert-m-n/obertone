import React, { useState, useEffect, useRef, useCallback } from "react"
import classNames from "classnames"

import infoIcon from "images/Infobutton.png"

import styles from "./MusiciansTile.module.scss"

export default ({ name, photo, info, useCondensedFont, ...props }) => {
  const [isInfoVisible, setIsInfoVisible] = useState()
  const infoPopoverRef = useRef()
  const infoIconRef = useRef()

  const handleDocumentMouseUp = (event) => {
    if (
      event.target !== infoPopoverRef.current &&
      event.target !== infoIconRef.current
    ) {
      setIsInfoVisible(false)
    }
  }

  useEffect(() => {
    if (isInfoVisible) {
      document.addEventListener("mouseup", handleDocumentMouseUp)
    }

    return () => document.removeEventListener("mouseup", handleDocumentMouseUp)
  }, [isInfoVisible])

  return (
    <div className={styles.tile} {...props}>
      <img className={styles.photo} src={photo} alt={name} />
      <div className={styles.footer}>
        <span
          className={classNames({ [styles.condensedText]: useCondensedFont })}
        >
          {name}
        </span>

        <img
          ref={infoIconRef}
          className={styles.infoIcon}
          onClick={() => setIsInfoVisible(!isInfoVisible)}
          src={infoIcon}
          alt="Info"
        />
        <div
          className={classNames(styles.infoWrapper, {
            [styles.visible]: isInfoVisible,
          })}
          ref={infoPopoverRef}
        >
          <div className={styles.info}>{info}</div>
        </div>
      </div>
    </div>
  )
}
