import React from 'react'
import Sidebar from '../Sidebar';
import Banner from '../Banner';
import styles from './css/admin.module.css';
import Searchbar from '../Searchbar';
import Table from '../Table';

const Admin = () => {

  return (
    <div style={{display: "flex"}}>
      <Sidebar type="Admin"/>
      <div className={styles.right}>
      <Banner type="Admin" />
      <Searchbar />
      <Table type="Admin"/>
      </div>
    </div>
  )
}

export default Admin
