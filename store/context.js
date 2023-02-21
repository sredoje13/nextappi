import React from "react";
import { createContext,useState,useEffect } from "react";
const CartContext=createContext()
const Provider=({children})=>{
const [cartitems,setcartitems]=useState([])
const [totalquantity,settotalquantity]=useState(0)
const [totalprice,settotalprice]=useState(0)
const [showcart,setshowcart]=useState(false)
const[animation,setanimation]=useState(false)
const[update, setupdateditems]=useState({})
const [showupdatecart,setshowupdatecart]=useState(false)


const additemone=([item,quantity])=>{
console.log(quantity)
let oneprqty=quantity
settotalquantity((prevval)=>prevval+oneprqty)
settotalprice((prevval)=>prevval+oneprqty*item.price)

const finditem=cartitems.findIndex((pr)=>pr._id===item._id)
console.log(finditem)
if(finditem>=0){
  let uloaditem=[...cartitems]
 const newitem={...item,...item.quantityitem+quantity}
 uloaditem[finditem]=newitem
setcartitems(uloaditem)
console.log(cartitems,totalprice)
}
else{
  
  item.quantityitem=quantity
  
   setcartitems([...cartitems,{...item}])
  
   console.log("total",cartitems)
}


}
const removeoneitem=(product)=>{
  settotalprice((prevval)=>prevval-product.quantityitem*product.price)
  settotalquantity((prevval)=>prevval-product.quantityitem)
  
  const finditem=cartitems.filter((item)=>item._id!==product._id);
  setcartitems(finditem)
}
const removeoneproduct=(item)=>{
  settotalprice((prevval)=>prevval-item.price);
  settotalquantity((prevval)=>prevval-1)
  const finditem=cartitems.findIndex((items)=>items._id===item._id)

  if(cartitems[finditem].quantityitem===1){
    const filtering=cartitems.filter((items)=>items._id!==item._id);
  setcartitems(filtering)
  }
  else{
  cartitems[finditem].quantityitem--;
  }

}
const addoneproduct=(item)=>{
  settotalprice((prevval)=>prevval+item.price);
  settotalquantity((prevval)=>prevval+1)
  const finditem=cartitems.findIndex((items)=>items._id===item._id)
 cartitems[finditem].quantityitem++
 
}

const removeallitems=()=>{
  setcartitems([])
  settotalprice(0)
  settotalquantity(0)
}
const showcartfunction=()=>{
  setshowcart(true)
}
const closecartfunction=()=>{
  setshowcart(false)
}


const updateitem=(item)=>{
  setupdateditems(item)
  setshowupdatecart(true)
}
const [windowSize, setWindowSize] = useState({
  width: undefined,
  height: undefined,
});

useEffect(() => {
 
  function handleResize() {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
    
  }

  window.addEventListener("resize", handleResize);
       handleResize();
  
  return () => window.removeEventListener("resize", handleResize);
}, []);
const mn={
showcart,
cartitems,
totalprice,
totalquantity,

animation,

additemone,
removeoneitem,
showcartfunction,
closecartfunction,
addoneproduct,
removeoneproduct,
setanimation,
updateitem,
update,
showupdatecart,
windowSize,
removeallitems

}

    return (
      <CartContext.Provider value={mn}>
        {children}
      </CartContext.Provider>)
    
}
export {Provider,CartContext}