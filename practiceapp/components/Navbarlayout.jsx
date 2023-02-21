import React from 'react';
import {TiShoppingCart} from 'react-icons/ti'
import { CartContext } from 'store/context';
import { useContext,useState ,useEffect} from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
function Navbarlayout(props) {
    const {showcartfunction,
        totalquantity,
        setanimation,
        animation,
        windowSize
        
        }=useContext(CartContext)
    let location;

    const router=useRouter()
    if(router.pathname==="/"||windowSize.width<1096)
    {location=true}
    
    else {
        location=false
    }  
    console.log(location)
    let shopcartanimation=false;
console.log(windowSize.width)

if(animation){shopcartanimation=true}
    useEffect(() => {
        const interval = setInterval(() => {
         shopcartanimation=false
         setanimation(false)

        }, 300);
        return () => clearInterval(interval);
      },[]);





   const showcarte=()=>{
    
    showcartfunction()
    
   }
    return (
        <div className='navbarlayout'>
           
            <div style={{width:"80%", overflow:"hidden",display:"flex"}}>
            <div className='navbarlayout-title'>
            DOBRODOSLI U NASU PRODAVNICU!!!
            </div> 
           <div className='navbarlayout-title'>
            DOBRODOSLI U NASU PRODAVNICU!!!
            </div> 
            <div className='navbarlayout-title' >
            DOBRODOSLI U NASU PRODAVNICU!!!
            </div> 
            <div className='navbarlayout-title' >
            DOBRODOSLI U NASU PRODAVNICU!!!
            </div> 
            <div className='navbarlayout-title' >
            DOBRODOSLI U NASU PRODAVNICU!!!
            </div> 
            </div>
        {!location&&<div className={shopcartanimation?'navbarlayout-shopcart navbarlayout-shopcart-scale':"navbarlayout-shopcart"} onClick={showcarte}><TiShoppingCart/><p className='navbarlayout-span'>{totalquantity}</p></div>}           
       {location&&<Link style={{textDecoration:"none"}} href="/shopcart2" className={shopcartanimation?'navbarlayout-shopcart navbarlayout-shopcart-scale':"navbarlayout-shopcart"} ><TiShoppingCart/><p className='navbarlayout-span'>{totalquantity}</p></Link>}
        </div>
    );
}

export default Navbarlayout;