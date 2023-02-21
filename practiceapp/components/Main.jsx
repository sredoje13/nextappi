import React from 'react';
import Products from './Products';
import { urlFor } from 'lib/client';

function Main({product}) {
   
    
  
    const allproducts=product.map((item)=>(
        <Products 
        src={urlFor(item.image[0]).url()}
         name={item.name} 
         description={item.description}
         price={item.price}
         slug={item.slug.current}
         key={item._id}/>
         
    ))
    return (
        <div 
       
        className='allproducts'>
            {allproducts}
        </div>
    );
}

export default Main;