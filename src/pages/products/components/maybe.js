import Image from 'next/image';
import React from 'react';
import {useState,useRef} from 'react'
import { urlFor } from 'lib/client';
import Link from 'next/link';
export const Maybe=(props)=>{
    const{products}=props
    const other=products.map((product,i)=>(
    <div className="other-div"key={i}>
    <Link style={{textDecoration:"none",color:"black"}} href={`/products/${product.slug.current}`}>
       <img src={`${urlFor(product.image[0])}`}/>
        <p>{product.name}</p>
        </Link>
    </div>
    ))
    const other2=products.map((product,i)=>(
        <div className="other-div"key={i}>
        <Link style={{textDecoration:"none",color:"black"}} href={`/products/${product.slug.current}`}>
            <img  src={`${urlFor(product.image[1])}`}/>
            <p>{product.name}</p>
            </Link>
        </div>
        ))
        const others=[other,other2]
    return (
       
        <div className="other track">
    
    {others}
    
        </div>
       
    )
    }
 