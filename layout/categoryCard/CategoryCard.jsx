import Image from 'next/image'
import React from 'react'
import styles from "./CategoryCard.module.css"

function CategoryCard({image,text}) {
  return (
    <div className={styles.card} >
        <div className={styles.image} >
              <Image priority src={image} alt="category1"  />
        </div>
        <div className={styles.cateName} >
            {text}
        </div>
    </div>
  )
}

export default CategoryCard