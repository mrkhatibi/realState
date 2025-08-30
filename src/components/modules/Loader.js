"use client"

import { Blocks } from "react-loader-spinner"
import styles from "./Loader.module.css"
function Loader() {
  return (
    <div className={styles.loader}>
      
      <Blocks
  
    height="80"
    width="80"
    color="#4fa94d"
    ariaLabel="blocks-loading"
    wrapperStyle={{}}
    wrapperClass="blocks-wrapper"
    visible={true}
    />
    </div>
  )
}

export default Loader