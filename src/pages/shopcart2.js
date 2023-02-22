import { Shopcart } from "../../practiceapp/components";
import Aos from "aos";
import { useEffect } from "react";
import Image2 from '../../components/My project (1).png'
import { useContext, useState } from "react";
import { CartContext } from "../../store/context";
import Image from "next/image";
import 'aos/dist/aos.css';
import Link from "next/dist/client/link"
const Shopcart2=(props)=>{
let nocartitems;

    const {cartitems,windowSize}=useContext(CartContext)
    console.log(windowSize)
    if(cartitems.length===0){
        nocartitems=true
    }
    else nocartitems=false
    useEffect(()=>{
        Aos.init();
    })
  console.log(nocartitems,cartitems)
    return (
        <div style={{marginTop:"20px"}}><Link href="/" style={{ 
            width:"100%",
            color:"grey",
            marginLeft:"20px",
            
            }
        }
            className="linkic"
            >
            Vratite se u prodavnicu
         </Link>
        <div 
        data-aos-duration="1000"
        data-aos="zoom-in" 
        style={{justifyContent:"center", display:"flex"}}
        
        
        >
            <Shopcart buttononcart="buttononcart2"
 shopcartnavbar="shopcart-navbar2"
 shopcart="shopcart2"
 downside="downside2"
 cartitembuttons="cartitem-buttons2"
 cartitemrightside="cartitem-rightside2"
 cartitemleftside="cartitem-leftside2"
 cartitemupside="cartitem-upside2"
 cartitem="cartitem2"
 divofoneitem="divofoneitem2"
 />
{nocartitems&&<Image width="300" alt="/" height="300" className="shopcartimage" src={Image2.src} href="slika"/>}
        </div></div>
    )
}
export default Shopcart2