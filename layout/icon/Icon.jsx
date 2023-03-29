import React from 'react'
import styles from "./icon.module.css"

function Icon({Icon , text ,open}) {
  return (
    <div className={styles.icon} onClick={open} >
        <div className={styles.iconContainer} >
            <Icon size={17} style={{color:"#fff"}} />
        </div>
        <div>
            {text}
        </div>
    </div>
  )
}

export default Icon