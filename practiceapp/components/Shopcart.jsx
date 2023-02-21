import React from 'react';
import { CartContext } from 'store/context';
import { useContext } from 'react';
import {VscChromeClose} from 'react-icons/vsc'
import {VscArrowLeft} from 'react-icons/vsc'
import {useRouter} from 'next/router'
import Link from 'next/link';
import {AiFillStar} from 'react-icons/ai'
import { toast } from 'react-hot-toast';
function Shopcart(props) {
    const router=useRouter()
   
   
    let nothaveproducts;
    const {cartitems,
        totalprice,
        closecartfunction,
        removeoneitem,
        totalquantity,
        addoneproduct,
        removeoneproduct,
        removeallitems
    }= useContext(CartContext)
        if(totalquantity===0){
            nothaveproducts=true
        }
        else{ nothaveproducts=false
        }

        
        const items=cartitems.map((item)=>(
           <div className={props.cartitem} key={item._id}> 
           
           <div className={props.cartitemupside}>
           
           <div className={props.cartitemleftside}>
           <p> <AiFillStar/> {item.name} </p> 
               
               
            </div>
           <div className={props.cartitemrightside}>
            <div className={props.cartitembuttons} >
               
            <button className="plus" onClick={()=>addoneproduct(item)} >+</button>
            <span>{item.quantityitem}</span>
            <button className="minus"onClick={()=>removeoneproduct(item)}>-</button>
             <button className='removeitem' onClick={()=>removeoneitem(item)}>Ukloni</button>
             </div>
           </div>
           </div>
           <div className={props.downside}>
            <p>Ukupno novca:{item.price*item.quantityitem}</p>
            
           </div>
           
            </div>
        ))
        const closecart=()=>{
            closecartfunction()
        }

        const removeall=()=>{
            removeallitems()
        }
        const byeitem=()=>{
            removeall()
            toast.success(`Uspesno poslata narudzbina od ${totalprice} RSD!!!`)
        }
    return (
        <div className={props.shopcart}>
           <div className={props.shopcartnavbar}>
           <button className={props.buttononcart} onClick={closecart}>
            <Link href={`/`}>
            <VscArrowLeft/></Link></button>
            <h3 style={{textAlign:"center"}}>TVOJA KORPA</h3>
            <button className={props.buttononcart}  onClick={closecart}><VscChromeClose/>
            </button>
           </div> 
         
         
          {!nothaveproducts&&<h2 className="h2allitems" style={{borderBottom:"1px solid white"}}><b>UKUPNO PROIZVODA: <span>{totalquantity}</span></b></h2>}
          {nothaveproducts&&<p style={{textAlign:"center"}}>Nemate proizvoda u korpi, <Link className='linkback' href="/">vratite se u kupovinu</Link> !!!</p>}
         <div className={props.divofoneitem}>
            {items}
         </div>
         <div style={{display:"flex",
         width:"100%",
         flexDirection:"column",
         alignItems:"center",
         justifyContent:"center"
        }}>
         {!nothaveproducts&&<p 
        >{totalprice} RSD</p>}
        {!nothaveproducts&&<button onClick={removeall} className='buttonrecyclebin'>Isprazni korpu</button>}       
        {!nothaveproducts&&<button onClick={byeitem} className='buttonrecyclebin'>Kupite</button>}       
        </div>
         </div>
    );
}

export default Shopcart;