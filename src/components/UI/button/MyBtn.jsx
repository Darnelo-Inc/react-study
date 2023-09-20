import React from "react"
import styles from "./MyBtn.module.css"

function MyBtn({ children, ...props }) {
  return (
    <button {...props} className={styles.myBtn}>
      {children}
    </button>
  )
}

export default MyBtn
