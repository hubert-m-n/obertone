import React, { useState } from "react"
import classNames from "classnames"

import styles from "./Category.module.scss"

export default ({ id, title, price, color, onChange, isSoldOut }) => {
  const [amount, setAmount] = useState(0)
  const [isInputFocused, setIsInputFocused] = useState(false)

  const handleAmountChange = (value) => {
    setAmount(value)
    onChange({ [id]: value })
  }

  return (
    <div>
      <div className={styles.container}>
        <div
          className={classNames(styles.category, {
            [styles.soldOut]: isSoldOut,
          })}
          onClick={() => handleAmountChange(amount + 1)}
        >
          <div className={styles.background} style={{ background: color }} />
          <span className={styles.titleWrapper}>{title}</span>
        </div>
        <label
          className={classNames(styles.inputWrapper, {
            [styles.hasValue]: isInputFocused || !!amount,
          })}
        >
          Anzahl:
          <input
            type="number"
            value={amount}
            onChange={({ target }) =>
              handleAmountChange(parseInt(target.value, 10))
            }
            className={classNames({ [styles.hasValue]: !!amount })}
            onFocus={() => setIsInputFocused(true)}
            onBlur={() => setIsInputFocused(false)}
          />
        </label>
        <span
          className={classNames(styles.priceWrapper, {
            [styles.priceHidden]: isSoldOut,
          })}
        >
          {price}
        </span>
      </div>
    </div>
  )
}
