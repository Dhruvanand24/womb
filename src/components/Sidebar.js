import React, { useState } from 'react'
import styles from "./css/Sidebar.module.css";
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
    const navigate = useNavigate();
    const logout = ()=> {
        window.localStorage.setItem("isLoggedIn", "false");
        navigate("/");

    }
    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionClick = (option) => {
      setSelectedOption(option);
    };

  return (
    <div className={styles.sidebar}>
     <div className={styles.top}>
        <h2 className={styles.womb}>Womb</h2>
        <img src="/images/profile.png" alt="" />
        <h2 style={{color:"white", fontSize: "15px"}}>Alexandra Robert</h2>
        <p style={{color:"#FFFFFF", fontSize: "15px", fontWeight:"normal", marginTop: "-6px"}}>alexandrarobert@gmail.com</p>
        
     </div>
     <hr
        style={{
          background: 'grey',
          color: 'grey',
          borderColor: 'grey',
          height: '0.5px',
          width: "100%",
          marginTop: "10px"
        }}
      />

<div
        className={`${styles.sidebutton} ${selectedOption === 'Admin' ? styles.selected : ''}`}
        onClick={() => handleOptionClick('Admin')}
      >
        <img className={styles.icon} src='/images/ADMINMANAGEMENT.png' alt='' />
        Admin Management
      </div>
      <div
        className={`${styles.sidebutton} ${selectedOption === 'Role' ? styles.selected : ''}`}
        onClick={() => handleOptionClick('Role')}
      >
        <img className={styles.icon} src='/images/ROLEMANAGEMENT.png' alt='' />
        Role Management
      </div>
      <div className={`${styles.sidebutton} ${selectedOption === 'Logout' ? styles.selected : ''}`} onClick={logout}>
        <img className={styles.icon} src='/images/LOGOUT.png' alt='' />
        Logout
      </div>
      
    </div>
  )
}

export default Sidebar

