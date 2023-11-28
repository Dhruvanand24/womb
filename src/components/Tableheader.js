import React from 'react'
import styles from "./css/Tableheader.module.css";

const Tableheader = (props) => {
    const type = props.type;
    if(type==="Admin"){
  return (
    <div className={styles.header}>
        <div className={styles.eachitem}>
            <img src='/images/updown.png' alt=''></img>
            <p>Full Name</p>
        </div>
        <div className={styles.eachitem}>
            <img src='/images/updown.png' alt=''></img>
            <p>Email</p>
        </div>
        <div className={styles.eachitem}>
            <img src='/images/updown.png' alt=''></img>
            <p>Contact No.</p>
        </div>
        <div className={styles.eachitem}>
            <img src='/images/updown.png' alt=''></img>
            <p>Role</p>
        </div>
        <div className={styles.eachitem}>
            <img src='/images/updown.png' alt=''></img>
            <p>Status</p>
        </div>
        <div className={styles.eachitem}>
            <img src='/images/updown.png' alt=''></img>
            <p>Action</p>
        </div>
      
    </div>
  )}
  else {
    return (
        <div className={styles.header}>
            <div className={styles.eachitemrole}>
                <img src='/images/updown.png' alt=''></img>
                <p>Role Name</p>
            </div>
            <div className={styles.eachitemrole}>
                <img src='/images/updown.png' alt=''></img>
                <p>No. of Users</p>
            </div>
            <div className={styles.eachitemrole}>
                <img src='/images/updown.png' alt=''></img>
                <p>Actions</p>
            </div>
            
          
          
        </div>
      )
  }
}

export default Tableheader
