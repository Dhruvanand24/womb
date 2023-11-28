import React from 'react'
import styles from "./css/Tablecomponent.module.css";

const Tablecomponent = (props) => {
    const type = props.type;
    if(type==="Admin"){
  return (
    <div className={styles.content}>
        <div className={styles.eachitem}>
            <img src='/images/small.png' alt=''></img>
            <p style={{marginLeft: "8px"}}>{props.data.fullname}</p>
        </div>
        <div className={styles.eachitem}>
            
            <p>{props.data.email}</p>
        </div>
        <div className={styles.eachitem}>
            
            <p>{props.data.contact}</p>
        </div>
        <div className={styles.eachitem}>
            
            <p>Role Management</p>
        </div>
        <div className={styles.eachitem}>
            <div className={styles.button}>
            {props.data.status==="Active"?"Active":<span style={{color: "red"}}>Inactive</span>}
            </div>
        </div>
        <div className={styles.eachitem}>
            <div className={styles.view}>View</div>
            <div className={styles.edit}>Edit</div>
            <img  style={{cursor: "pointer"}} src='/images/ICONDELETE.png' alt=''></img>
            
        </div>
      
    </div>
  )}
  else {
    return (
        <div className={styles.content}>
        <div className={styles.eachitemrole}>
            <p>{props.data.fullname}</p>
        </div>
        <div className={styles.eachitemrole}>
            
            <p>{props.data.users}</p>
        </div>
        
        <div className={styles.eachitemrole}>
            <div className={styles.view}>View</div>
            <div className={styles.edit}>Edit</div>
            <img src='/images/ICONDELETE.png' alt=''></img>
            
        </div>
      
    </div>
    )
  }
}

export default Tablecomponent
