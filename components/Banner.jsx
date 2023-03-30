import Image from 'next/image';
import React from 'react'
import styles from "./Banner.module.css";
import back1 from "../public/images/back.png"
import back2 from "../public/images/back2.png"
import back3 from "../public/images/headphone.png"
import Link from 'next/link';
function Banner() {
  return (
    <div  className={styles.container +" container"} >
      <div className={styles.banner} >
        <div className={styles.void} ></div>
       <div className={styles.bannerContainer} >
          <div className={styles.left}>
            <div className={styles.back1} >
              <Image src={back1} alt="back1" />
            </div>
            <div className={styles.back2} >
              <Image src={back2} alt="guitar" />
            </div>
            <div className={styles.back3} >
              <Image priority src={back3} alt="headphone" />
            </div>
          </div>
          <div className={styles.right} >
            <h1>MAKE YOUR <span>INSTRUMENT</span></h1>
            <p>The best instrument is our  pride , so make your music</p>
            <Link href="#" className={styles.link} >DISCOVER</Link>
          </div>
       </div>
      </div>
    </div>
  )
}

export default Banner