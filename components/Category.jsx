import React from 'react'
import styles from "./category.module.css";
import CategoryCard from '@/layout/categoryCard/CategoryCard';
import headphones from "@/public/images/headphone.png"
import guitar from "@/public/images/back2.png"
import mic from "@/public/images/mic.png"
import piano from "@/public/images/piano.png"
function Category() {
  return (
    <div className={styles.categoryContainer+" container"} >
        <div className={styles.categories} >
          <CategoryCard text="HEADPHONES" image={headphones} />
          <CategoryCard text="GUITARS" image={guitar} />
          <CategoryCard text="PIANOS" image={piano} />
          <CategoryCard text="MICROPHONES" image={mic} />
        </div>
    </div>
  )
}

export default Category