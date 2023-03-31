import { Rating } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import styles from "./productDesc.module.css"

function ProductDesc() {
  return (
    <div className={styles.productDesc} >
        <div className={styles.title} >
            <h1>CORDOBA C5 CE CD</h1>
            <div className={styles.inStock} >IN STOCK</div>
        </div>
        <div className={styles.rating} >
                <div className={styles.stars} >
                  <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                </div>
                <div className={styles.ratinNum} >
                    128 rating
                </div>
        </div>
        <div className={styles.desc} >
              A staple in the Iberia series, the C5-CE features a solid Canadian cedar top and mahogany back and sides.
        </div>
        <div className={styles.prices} >
            <div className={styles.oldPrice} >4600DH</div>
            <div className={styles.newPrice}>3600DH</div>
        </div>
        <div className={styles.buttons} >
                <button className={styles.addCart} > 
                    ADD TO CART
                </button>
                <Link href="#" >DETAILS</Link>
        </div>

        </div>
  )
}

export default ProductDesc