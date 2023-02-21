import classes from './navbar.module.css'
import {IoReloadSharp} from 'react-icons/io5'
const Loadingspiner=()=>{
return(
    <div style={{marginTop:"10%"}}>
<IoReloadSharp className={classes.spiner}/>
    </div>
)
}
export default Loadingspiner