"use client"
import { client } from "lib/client"
import { toast } from "react-hot-toast"
import useHook from "./components/useHook"
import Comments from "./components/Comments"
import clientPromise from "../../utils/connect"
import Cart from "./components/Cartforupdate"
import { useContext,useEffect ,useState} from "react"
import { CartContext } from "../../../store/context"
import Loadingspiner from "../../../components/Lodingspiner"
import Link from "next/dist/client/link"

const Note=({product,commentss})=>{
    
    const[loading,setloading]=useState(true)

  useEffect(() => {
  
    const timeout = setTimeout(() => {
       setloading(false)
 }, 2000);

    return () => {
      // clears timeout before running the new effect
      clearTimeout(timeout);
    };
  }, [loading]);
  const {update,showupdatecart}=useContext(CartContext)
let isvalid=false
console.log(product)
const {
    isvalidate:isvalidinput,
    error:inputerror,
    enterinput:inputvalue,
    onBlurinput:blurvalue,
    onRestatrt:onRestatrt,
    onChangeinput:changeinput
}=useHook()

const {
    isvalidate:isvalidarea,
    error:areaerror,
    enterinput:areavalue,
    onBlurinput:blurarea,
    onRestatrt:onRestatrtarea,
    onChangeinput:changearea
}=useHook()


const {
    isvalidate:isvalidnote,
    error:noteerror,
    enterinput:inputnote,
    onBlurinput:blurnote,
    onRestatrt:onRestatrtnote,
    onChangeinput:changenote
}=useHook()

if(isvalidarea&&isvalidinput&&isvalidnote){
    isvalid=true
}
   
const postcomment=async()=>{
        if(isvalid){
            let res = await fetch(`/api/${product.slug.current}`, {
                method: "POST",
                body: JSON.stringify({
                 note:inputnote,
                 comment:areavalue,
                 name:inputvalue,
                 
                }),
              });
              res = await res.json();
    onRestatrt();
    onRestatrtarea();
    onRestatrtnote();
    toast.success("Vas komentar i osena su posalti!!!")
    window.location.reload()
}
   
else{   toast.error("Morate popouniti sva polja!! ")}


         
    }
   
     

    const klassinput=inputerror?"input-error":"input"
    const klassarea=areaerror?"input-error":"input"
    const classnote=noteerror?"input-error":"input"
    return(
<div className="form-div">
<Link href="/" style={{ 
        width:"100%",
        color:"grey",
        marginLeft:"20px",
        marginTop:"10px"
        }
    }
        className="linkic"
        >
        Vratite se u prodavnicu
     </Link>
    <h1 className="form-h1">Ostavite komentar za {product.name}</h1>
 
<div className="form" >
    <p >Ime i prezime:</p>
    <input onChange={changeinput}
    value={inputvalue}
    onBlur={blurvalue}
    
    className={klassinput} placeholder="Ime i prezime" />
  <p >Komentar:</p>
    <textarea 
    onChange={changearea}
    value={areavalue}
    onBlur={blurarea}
    className={klassarea} style={{height:"60px"}}
    
    placeholder="Komentar"/>
    <p >Ocena:</p>
    <input
    onChange={changenote}
    value={inputnote}
    onBlur={blurnote}
    className={classnote} type="number" min={1} max={5}
    />
    <br></br>
   <button className="formbutton" onClick={postcomment} >Posalji</button>
</div>
<h1 style={{marginTop:"40px", fontFamily:"'Anton', sans-serif"}}>KOMENTARI</h1> 
{showupdatecart&&<Cart
 note={update.note} 
 comment={update.comment}
_id={update._id}
name={update.name}
slug={product.slug.current} 

/>}
{!loading&&<Comments slug={product.slug.current} products={commentss}/>
} 
{loading&&<Loadingspiner/>}   
</div>
    )
}


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
    const product=await client.fetch(query)
    const datas=await clientPromise;
  const datasdb=datas.db("Comments")
    const alldatas= await datasdb.collection(`${slug}`).find({}).toArray();
 const commentss= JSON.parse(JSON.stringify(alldatas));  

    return {props:{product,commentss}}
    }
    export default Note