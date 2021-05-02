/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState, useRef, useCallback } from "react"

import styles from "./Slider.module.scss"

export const Slider = ({ images, offsetClass, imageClass }) => {
  const animatinoTimeout = useRef(null)
  const [animationParams, setAnimationParams] = useState({
    order: images.map((_, i) => i),
    containerClassName: styles.noOffset,
  })

  const startAnimation = useCallback((hasOffset) => {
    hasOffset
      ? setAnimationParams((prev) => ({
          ...prev,
          hasOffset,
        }))
      : setAnimationParams((prev) => ({
          order: [...prev.order.slice(1, prev.order.length), prev.order[0]],
          hasOffset,
        }))

    animatinoTimeout.current = setTimeout(
      () => startAnimation(!hasOffset),
      hasOffset ? 4700 : 100
    )
  }, [])

  useEffect(() => {
    animatinoTimeout.current = setTimeout(() => startAnimation(true), 3000)

    return () => clearInterval(animatinoTimeout.current)
  }, [startAnimation])

  return (
    <div className={styles.imagesSlider}>
      <div
        className={animationParams.hasOffset ? offsetClass : styles.noOffset}
      >
        {animationParams.order.map((i) => (
          <img className={imageClass} key={images[i]} src={images[i]} />
        ))}
      </div>
    </div>
  )
}

export default Slider
