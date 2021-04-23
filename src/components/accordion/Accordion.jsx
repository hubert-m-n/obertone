import React, { useState } from "react"

import styles from "./Accordion.module.scss"

export const Accordion = ({ visibleContent, hiddenContent }) => {
  const [isExpanded, setExpanded] = useState(false)

  return (
    <div className={styles.accordion}>
      {visibleContent}

      {!!hiddenContent && (
        <>
          {!isExpanded && (
            <span onClick={() => setExpanded(true)}>
              &hellip;&nbsp;
              <span className={styles.expandButton}>weiterlesen</span>
            </span>
          )}
          {isExpanded && hiddenContent}
        </>
      )}
    </div>
  )
}

export default Accordion
