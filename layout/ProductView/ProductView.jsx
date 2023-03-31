import React, { useState } from 'react'
import piano from "@/public/images/piano.png"
import Image from 'next/image'
import styles from "./productView.module.css"

function ProductView({images}) {
  const [image,setImage]=useState(0);
  return (
    <div className={styles.pvContainer} >
        <div className={styles.images} >
           {images.map((elem,index)=>{
             return (<dir key={"elem/" + index} className={styles.subImg + " " + (image == index ? styles.active:"")} onClick={()=>setImage(index)} >
               <Image src={elem} alt="img" />
             </dir>)
           })}
            
        </div>
          <div className={styles.bigImg}>
              <Image src={images[image]} alt="img" />
        </div>
    </div>
  )
}

export default ProductView