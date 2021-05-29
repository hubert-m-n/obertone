/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState, useRef, useCallback } from "react"

import styles from "./Slider.module.scss"

export const Slider = ({ images }) => {
  const imageRef = useRef(null)
  const frameAnimationRef = useRef()
  const [animationParams, setAnimationParams] = useState({
    order: images.map((_, i) => i),
    offset: 0,
  })

  const animate = useCallback(() => {
    setAnimationParams(({ order, offset }) => {
      let newOffset = offset - 0.25

      if (newOffset < -imageRef.current.width) {
        newOffset += imageRef.current.width

        return {
          order: [...order.slice(1, order.length), order[0]],
          offset: newOffset,
        }
      }

      return {
        order,
        offset: newOffset,
      }
    })

    frameAnimationRef.current = requestAnimationFrame(animate)
  }, [])

  useEffect(() => {
    const timeout = setTimeout(
      () => (frameAnimationRef.current = requestAnimationFrame(animate)),
      2000
    )

    return () => {
      clearTimeout(timeout)
      cancelAnimationFrame(frameAnimationRef.current)
    }
  }, [animate])

  return (
    <div className={styles.imagesSlider}>
      <div style={{ transform: `translateX(${animationParams.offset}px)` }}>
        {animationParams.order.map((i) => (
          <img ref={imageRef} key={images[i]} src={images[i]} />
        ))}
      </div>
    </div>
  )
}

export default Slider
