import React, { useState } from "react"

import Category from "./Category"

import styles from "./Event.module.scss"
import commonStyles from "../../OrderPage.module.scss"

export default ({
  id,
  date,
  place,
  program,
  onChange,
  isCategoryASoldOut,
  isCategoryBSoldOut,
  isCategoryCSoldOut,
}) => {
  const [data, setData] = useState({})
  const handleChange = (categoryData) => {
    const newData = {
      ...data,
      ...categoryData,
    }

    setData(newData)

    onChange({
      program: id,
      ...newData,
    })
  }

  return (
    <div>
      <p className={commonStyles.sectionTitle}>{date}</p>
      {place}
      <div className={styles.program}>{program}</div>
      <Category
        id="catA"
        title="Kat A"
        price="(je € 45)"
        color="#dd055a"
        onChange={handleChange}
        isSoldOut={isCategoryASoldOut}
      />
      <Category
        id="catB"
        title="Kat B"
        price="(je € 25)"
        color="#54be9b"
        onChange={handleChange}
        isSoldOut={isCategoryBSoldOut}
      />
      <Category
        id="catC"
        title="Kat C"
        price="(je € 10)"
        color="#e2de33"
        onChange={handleChange}
        isSoldOut={isCategoryCSoldOut}
      />
    </div>
  )
}
