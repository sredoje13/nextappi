import React from 'react';
import Image from 'next/image';
import Link from 'next/link'
import { urlFor } from '../../lib/client';
import {BsSunglasses} from 'react-icons/bs'
import { motion } from 'framer-motion';
function Products(props) {
  
    return (
        <motion.div
        initial={{ opacity: 0,
            transform:"translateY(50%)",
            
         }}
        whileInView={{ opacity: 1,
            transform:"translateY(0%)",
            transition:"transform 1s"
         }}
        className='product'
        >
            <Link style={{textDecoration:"none"}} href={`/products/${props.slug}`}>
            <h1 className="product-h1">
            {props.name}
            </h1>
            <img src={props.src} alt="naocare"/> 
            <div className="product-description"><BsSunglasses fontSize={35}
            style={{marginBottom:"10px"}}
            /><br></br> {props.description}</div>
            <p className="product-price"><b>{props.price} RSD </b></p>
            </Link>
        </motion.div>
    );
}

export default Products;