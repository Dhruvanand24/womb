import React from 'react'
import styles from "./css/Banner.module.css";
const Banner = (props) => {
  return (
    <div className={styles.banner}>
        <div className={styles.gradient}></div>
        
       <img src='/images/BANNER.png' alt=''></img>
       <h1 className={styles.title}>{props.type==="Admin"?"Admin Managemment": "Role Management"}</h1>
        <h2 className={styles.subheading}>Dash Board</h2>
        <h2 className={styles.subheading2}>{props.type==="Admin"?" . Admin Managemment": " . Role Management"}</h2>
       
    </div>
  )
}

export default Banner
