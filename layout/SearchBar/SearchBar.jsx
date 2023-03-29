import React from 'react'
import styles from "./SearchBar.module.css";
import { FaSearch } from "react-icons/fa"

function SearchBar() {
  return (
    <form className={styles.search} >
    
            <input placeholder='Search' name='search' type="text" className={styles.searchInput} />
          <button className={styles.searchIcon} type="submit" ><FaSearch className={styles.icon} style={{ color:"#261C15"}} size={18}/></button>
    </form>
  )
}

export default SearchBar