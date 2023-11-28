import React, { useState } from 'react'
import styles from "./css/Searchbar.module.css";

const Searchbar = () => {
    const[search, setSearch] = useState('');
  return (
    <div className={styles.Searchbarcontainer}>
         <div className={styles.inputgroup}>
        
        <input type="text"value={search} onChange={(event)=> setSearch(event.target.value)} placeholder="Search...." />
        <div className={styles.icon}>
          <img style={{cursor:"pointer"}} src='/images/search.png'alt=''></img>
        </div>
      </div>
      <div className={styles.addbutton}>
        <p>Add</p>
        <img src='/images/Iconadd.png'alt=''></img>
      </div>
      
    </div>
  )
}

export default Searchbar
