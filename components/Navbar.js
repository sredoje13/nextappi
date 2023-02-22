import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../store/context';
import classes from './navbar.module.css'
import Image from 'next/image'
function Navbar(props) {
   const{scrolltoel,scrolltoelement,
    unscroll}=useContext(CartContext);

   
    
  

    return (
        
        <div className={classes.navbar} >
            <h1>NAJBOLJE ZA VASE OCI</h1>
            <div onClick={props.onBtnClick} ><Image width="300" height="300"  className={classes.image1} src={props.img1} alt="naslovna"/>
            </div>
            <Image width="300" height="300" className={classes.image2} src={props.img2} alt="naslovna"/> 
             
        </div>
    );
}

export default Navbar;