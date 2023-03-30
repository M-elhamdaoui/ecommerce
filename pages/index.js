import React from 'react'
import {Banner , Footer,Category,Navbar} from "../components"

function Index() {
  return (
    <>
    <Navbar/>
      <Banner/>
      <Category/>
      <div  className='container' >
        <h1>Promo of the week</h1>
        <h2>Product</h2>
      </div>
      <Footer/>
    </>
  )
}

export default Index