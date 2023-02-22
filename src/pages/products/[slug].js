"use client"
import Details from './components/details'
import Maybe from './components/maybe'
import { client } from 'lib/client'
import { Shopcart } from 'practiceapp/components'
import {useContext} from 'react'
import { CartContext } from 'store/context'
import Link from 'next/dist/client/link'
import { useRouter } from 'next/dist/client/router'
const Pagee=({product,products})=>{
    const router=useRouter()
    console.log(router)
  const{showcart,windowSize}=useContext(CartContext)

return (
    <div style={{marginTop:"10px"}}> 
        <Link href="/" style={{ 
        width:"100%",
        color:"grey",
        marginLeft:"20px",
        
        }
    }
        className="linkic"
        >
        Vratite se u prodavnicu
     </Link>
    <div style={{display:"flex", flexDirection:"row",
    width:"100%", overflowX:"hidden"
   
    }}>
        
         <div style={{width:"100%"}}>
 <div>

 <Details product={product}/>  
 </div>
 <div style={{
   display:"flex",
   flexDirection:"column",
   justifyContent:"center",
   alignItems:"center"}}>
 <p className="pagedetails-p">MOZDA ZELITE POGLEDATI SLEDECE PROIZVODE</p>
 <div className="marquee">
  <Maybe products={products}/> </div>
 </div></div>
 <div>{showcart&&windowSize.width>1095&&
 <Shopcart buttononcart="buttononcart"
 shopcartnavbar="shopcart-navbar"
 shopcart="shopcart"
 downside="downside"
 cartitembuttons="cartitem-buttons"
 cartitemrightside="cartitem-rightside"
 cartitemleftside="cartitem-leftside"
 cartitemupside="cartitem-upside"
 cartitem="cartitem"
 divofoneitem="divofoneitem"
 
 />}</div>
 
 </div></div>
)
}
export default Pagee

export const getStaticPaths=async()=>{
    const query=`*[_type=="product"]{
slug{
    current
}}`
    const products=await client.fetch(query)
    const paths=products.map((product)=>({
        params:{
            slug:product.slug.current
        }
    }))
    return {paths,
    fallback:"blocking"}
 }
export const  getStaticProps=async({params:{slug}})=>{
    const query=`*[_type == "product"&& slug.current=="${slug}"][0]` 
    const productsQuery='*[_type == "product"]' 
    const product=await client.fetch(query)
    const products=await client.fetch(productsQuery)
    
 
    return {props:{products,product}}
    }
  