import React from 'react'
import {Banner , Footer,Category,Navbar, Product} from "../components"

function Index() {
  return (
    <>
      <Navbar />
      <Banner />
      <Category />
      <div className='container promo'>
        <h1>PROMO OF THE WEEK</h1>
      </div>
      <Product />
      <Footer />
    </>
  );
}

export default Index