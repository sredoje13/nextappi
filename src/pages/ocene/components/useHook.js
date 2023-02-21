
import { useState } from 'react'
const useHook=()=>{
    const [istouched,setistouched]=useState(false)
   const [currvalue,setcurrvalue]=useState("")
const onChangeinput=(e)=>{
   setcurrvalue(e.target.value)
   setistouched(true)

}
const onBlurinput=()=>{
    setistouched(true)

}
const onRestatrt=()=>{
    setistouched(false)
    setcurrvalue("")
}

let isvalid=true;
if(currvalue.length===0){
    isvalid=false
    
}


const error= !isvalid&&istouched

return {
    isvalidate:isvalid,
    error:error,
    enterinput:currvalue,
    onBlurinput:onBlurinput,
    onRestatrt:onRestatrt,
    onChangeinput:onChangeinput

}
}
export default useHook