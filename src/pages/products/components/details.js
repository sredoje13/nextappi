import {useState,useRef} from 'react'
import { urlFor } from 'lib/client'
import { useContext } from 'react'
import { CartContext } from 'store/context'
import Link from 'next/link'
import Image from 'next/image'
function Details(props) {

  const {additemone,cartitems,
    totalprice,
    setanimation,
    totalquantity,}=useContext(CartContext)
    console.log(totalquantity,cartitems)
  const [productqty,setproductqty]=useState(0)
    const {product}=props
     const [index,setindex]=useState(0)
 
  
     const imagess=product.image?.map((item,i)=>
     (<div key={i} onMouseEnter={()=>{setindex(i)}}>
  <Image width="300" height="300" className={index===i?"productdetails-images hoverimages": "productdetails-images"} src={urlFor(item).url()} alt='slicice'/>
  </div>
  )
 
     )
     const addoneitem=()=>{
      setproductqty((prevval)=>prevval+1)
     }
     const removeoneitem=()=>{
      if(productqty<=1){
        setproductqty(0)
      }
      else{setproductqty((prevval)=>prevval-1)}
      
     }
     const addinshoppingcart=()=>{
      additemone([product,productqty])
      setanimation(true)
      setproductqty(0)
     }
    
     
      return (
          <div className='productdetails'>
            
              <div className="productdetails-leftside">
              <p>{product.name}</p>
              <Image width="300" height="300" className="productdetails-image" src={ urlFor(product.image[index]).url()} alt="details"/>
             <div className="imagess-div">{imagess}</div>
              </div>
  
              <div className="productdetails-rightside">
              <div className='button-details-div'>
                <button className='button-details-left' onClick={removeoneitem} disabled={productqty<1}>-</button>
                <span>{productqty}</span>
                <button className='button-details-right' onClick={addoneitem}>+</button>
              </div>
              <button className='buttondetails-cart' onClick={addinshoppingcart} disabled={productqty<1}>Dodaj u korpu</button>
             <p className="detailsprice"> Cena:{product.price} RSD</p>
             <Link className='pushnote' href={`/ocene/${product.slug.current}`}>Ostavite komentar i ocenu</Link>
              </div>
          </div>
      );
  }
  export default Details
  
 