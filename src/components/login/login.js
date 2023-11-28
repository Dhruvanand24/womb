import React from 'react'
import styles from "./css/login.module.css";
import Form from "./form.js";
const Login = () => {

  

  
  return (
    <div className={styles.mainContainer}>
      <div className={styles.left}>
        
      <div className={styles.images}>
        <img className={styles.logo} src="/images/WOMBLOGO.png" alt="Logo" />
        <img className={styles.flower} src="/images/FLOWER.png" alt="Flower" />
      </div>
      <div className={styles.form}>
         <h1 style={{userSelect: 'none'}}>Login to your account</h1>
         <Form />
      </div>
      </div>
      <div className={styles.right}>
        
           <img src="/images/women.png" alt="" />
      </div>
    </div>
  )
}

export default Login
