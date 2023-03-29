import Image from 'next/image'
import React from 'react'
import styles from "./cart.module.css"
import headphone from "../../public/images/headphone.png"
import { BsFillTrashFill } from "react-icons/bs"
function CartProduct({image,title,price,remove}) {
  return (
      <div className={styles.product}>
          <div className={styles.image} ><Image width={50}  height={50} src={headphone} alt="product" /></div>
          <div className={styles.info} >
              <h2>{"The best head".slice(0,15)}</h2>
              <p>99.99 DH </p>
          </div>
          <div className={styles.remove} >
                <BsFillTrashFill size={20} />
          </div>
      </div>
  )
}

export default CartProduct