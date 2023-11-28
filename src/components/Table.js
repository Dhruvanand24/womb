import React from 'react';
import styles from "./css/Table.module.css";
import Tableheader from './Tableheader';
import Tablecomponent from './Tablecomponent';
import admindata from './dummydata/admin.data';

const Table = (props) => {
   const type = props.type;
  return (
    <div className={styles.fulltable}>
        <Tableheader type={type}/>
        {admindata.map((item, index) => (
        <Tablecomponent key={index} data={item} type={type} />
      ))}
      
    </div>
  )
}

export default Table
