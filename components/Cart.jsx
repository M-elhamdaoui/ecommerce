import React from 'react'
import CartProduct from '@/layout/cartProducts/CartProduct'

function Cart() {
  return (
    <div className='cart-container' >
      <CartProduct/>
      <CartProduct/>
      <CartProduct/>
    </div>
  )
}

export default Cart