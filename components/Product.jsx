import ProductView from '@/layout/ProductView/ProductView'
import React from 'react'
import styles from "./product.module.css"
import images from "@/public/images/guitar"
import ProductDesc from '@/layout/ProductDesc/ProductDesc'
function Product() {
  return (
    <div className={styles.productContainer+" container"} >
      <ProductView images={images} />
      <ProductDesc/>
    </div>
  )
}

export default Product