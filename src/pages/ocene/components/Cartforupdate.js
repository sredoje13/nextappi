import axios from "axios"
import { useState ,useRef} from "react"
import { toast } from "react-hot-toast"
const Cart=(props)=>{

    const refcomment=useRef()
    const refnote=useRef()
    const [inputnote,setnote]=useState("")
    const [inputcomment,setcomment]=useState("")
    const [changingnote,setChangingnote]=useState(false);
    const [changingcomment, setchangingcomment]=useState(false)
    const {note,name,comment,_id,slug}=props
let isvalid=false;

   const blurcomment=()=>{
    setchangingcomment(true)
    setcomment(refcomment.current.value)
   
   }
   const blurnote=()=>{
    setChangingnote(true)
    setnote(refnote.current.value)
    console.log(inputnote)
   }
   if(changingcomment&& changingnote){
   isvalid=true
   }
    const changecomment=()=>{
    setcomment(refcomment.current.value)
    }

    const changenote=()=>{
        setnote(refnote.current.value)
        }
    

   
const updateitems=async(id)=>{
    if(isvalid){
    axios.put(`/api/${slug}`,
    {note:inputnote,
    comment:inputcomment
},
    {  params:{id}}
    )
    toast.success("Uspesno izmenjen komentar!!!")
    window.location.reload()
}
else {
toast.error("Morate promeniti i komentar i ocenu!!!")
return }
}
const classnameforinput=!changingcomment?"errorcomment":"normalinput"
const classnamefornote=!changingnote?"errorcomment":"normalinput"


    return(
<div className="updatedcart">
<input className="inputupdatename" disabled  type="text"defaultValue={name}/>

<input className={classnameforinput} ref={refcomment} onBlur={blurcomment} onChange={changecomment} type="text"defaultValue={comment}/>

<input className={classnamefornote} ref={refnote} onBlur={blurnote} onChange={changenote} type="number"defaultValue={note}/>
<button className="updatecartitembutton" onClick={()=>updateitems(_id)}>
Izmeni
</button>
</div>

    )
}
export default Cart