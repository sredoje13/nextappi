"use client"

import {BsFillTrashFill} from 'react-icons/bs'
import {AiOutlineStar} from 'react-icons/ai'
import {AiFillStar} from 'react-icons/ai'
import { useContext } from 'react'
import { CartContext } from '../../../../store/context'
import axios from 'axios'
const Comments=(props)=>{
const {updateitem}=useContext(CartContext)
   const {products,slug}=props
  

const star1=<AiFillStar  style={{color:"#7a941a"}}/>
const star2=<AiOutlineStar style={{color:"#7a941a"}}/>
const stars=[star2,star2,star2,star2,star2]
const fillstars=[star1,star1,star1,star1,star1]
const deleteitems=(id)=>{
    
   
    try {
        axios.delete(`/api/${slug}`,{
            params:{id}},
         
       );
       window.location.reload()
     } catch (error) {
       console.log("An error occurred while deleting ", error);
     }
   }
console.log(products)
 const alldatas=products.map((item)=>
 
  ( <div className='comments' key={item._id}>
        <h3 className='comments-name'>{item.name.toUpperCase()}</h3>
        <div className='comments-comment'>
           <p className="commentscomment">{item.comment[0].toUpperCase()}{item.comment.slice(1)}!</p> 
           <button className='deletebutton' onClick={()=>deleteitems(item._id)}><BsFillTrashFill  style={{marginBottom:"-2px"}}  /></button>
           <button className='updatebutton' onClick={()=>updateitem(item)}>Ispravi</button> 
        </div>
        <p className='comments-note'>
            {fillstars.slice(0,item.note)}
            {stars.slice(item.note,5)}
            
        </p>

    </div>)
) 


return(
<div className='comment-div'>
  
 {alldatas} 

</div>
)

 }
 export default Comments
 