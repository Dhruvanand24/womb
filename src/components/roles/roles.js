import React from 'react'
import Sidebar from '../Sidebar';
import Banner from '../Banner';
import Searchbar from '../Searchbar';
import Table from '../Table';
import styles from "./css/roles.module.css"


const Roles = () => {
    
  return (
    <div style={{display: "flex"}}>
      <Sidebar type="Role"/>
      <div className={styles.right}>
      <Banner type="Role"/>
      <Searchbar />
      <Table type="Role"/>
      </div>
    </div>
  )
}

export default Roles