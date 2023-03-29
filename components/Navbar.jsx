import React , {useState} from 'react'
import SearchBar from '@/layout/SearchBar/SearchBar'
import Icon from '@/layout/icon/Icon';
import { FaShoppingCart } from "react-icons/fa"
import { BsPersonFill } from "react-icons/bs"
import { GiHamburgerMenu } from "react-icons/gi"
import {HiX} from "react-icons/hi";
import {motion} from "framer-motion"
import {Cart } from "./"
import Link from 'next/link';


function Navbar() {
 const [toggle,setToggle] = useState(false)
 const [openCart,setOpenCart] = useState(false); 
 return (
    <div className='header' >
      <div className='container header-container' >
        <div className='logo' ><h1>STORE</h1></div>
        <div className='header-menu' >
          <div className='search' >
              <SearchBar/>
          </div>
          <div className='icons' >
              <Icon  Icon={FaShoppingCart} text="Cart" open={()=>setOpenCart(true)} />
              <Icon Icon={BsPersonFill} text="Account" />
          </div>
        </div>
        <div className='burgurIcon' >
          <div className='closeIcon' >

            <GiHamburgerMenu size={20} style={{ color: "#fff" }} onClick={()=>setToggle(true)} />
          </div>
           
            {
              toggle && (
              <motion.div className='side-menu-container' whileInView={{x:[300,0]}} transition={{duration:0.85,ease:"easeOut"}} >
               <div className='closeIcon' >

                <HiX size={20} style={{color:"#fff"}} onClick={() => setToggle(false)} />
               </div>
                  <div className='search' >
                    <SearchBar />
                  </div>
                  <div className='icons' >
                    <Icon Icon={FaShoppingCart} text="Cart" open={()=>{setOpenCart(true); setToggle(false)}} />
                    <Icon Icon={BsPersonFill} text="Account" />
                  </div>
              
                </motion.div>
              )
            }
            
        </div>
       {
         openCart && (
           <motion.div className='cart' whileInView={{ x: [300, 0] }} transition={{ duration: 0.85, ease: "easeOut" }}>
             <div className='closeIcon' >
               <HiX size={20} style={{ color: "#fff" }} onClick={() => setOpenCart(false)} />
             </div>
             <Cart />
             <Link href="#">Checkout</Link>
           </motion.div>
         )
       }

      </div>
    </div>
  )
}

export default Navbar