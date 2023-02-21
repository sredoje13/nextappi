import { client } from 'lib/client'
import { Main } from 'practiceapp/components'
import Image1  from '../public/My project.png'
import  Image2  from '../public/arrow.png'
import Navbar from 'components/Navbar'
import { useContext,useState } from 'react'
import { CartContext } from 'store/context'
import clientPromise from '../utils/connect'

const Home=({product})=> {
  const [scrolltoelement,setscrolltoelement]=useState(false)

  const {showcart}=useContext(CartContext)

 
 const onBtnClick = () => {
  setscrolltoelement(true)
  console.log(scrolltoelement)
  setTimeout(() => {
   setscrolltoelement(false)
  }, 2000)
 }
 console.log(scrolltoelement)
 const scroll2El = () => {
  window.scrollTo({
    top: document.getElementById("scrollelement").offsetTop-20,
    behavior: 'smooth',
  });
};
 if(scrolltoelement){
  scroll2El()
 }
 



  return (<div  className={showcart?"page page-cart":"page" }>  
    
    <main className="main">
    
    
   <Navbar onBtnClick={onBtnClick} img1={Image2.src} img2={Image1.src}/>  
   <div id="scrollelement">
     <Main  product={product}></Main> </div>
  
  </main>  
  
 
   </div>
  )
}

export async function getServerSideProps() {
  const query='*[_type == "product"]' 
  const product=await client.fetch(query)
  const dataas = await clientPromise;

 
  
  return {props:{product}}

  }
  
  
  export default Home