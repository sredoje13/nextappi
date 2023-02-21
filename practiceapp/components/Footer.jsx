import React from 'react';
import {GoLocation} from 'react-icons/go'
import { useRef,useState } from 'react';
import emailjs from 'emailjs-com';
import { toast } from 'react-hot-toast';
function Footer(props) {
    const[mailvalue,setmailvalue]=useState("")
    const[valid,setisvalid]=useState(true)

const changeinputmail=(e)=>{
        setmailvalue(e.target.value)
        if(e.target.value.trim()!==""&&e.target.value.includes("@")){
          setisvalid(true)
        }
} 
    const sendEmail = (e) => {
       e.preventDefault()
       if(mailvalue.trim()!==""&&mailvalue.includes("@")){
       setisvalid(true)

        emailjs
          .sendForm(
            "service_zpqksyo",
            "template_qnafjco",
            e.target,
            "DMF8J-AVRLhD4fXQy"
          )
          .then(
            (result) => {
              alert(result.text);
            },
            (error) => {
              alert(error.text);
            }
          )
          setmailvalue("")
          toast.success('Uspesno poslato!')
        }
          else {
            toast.error("Popunite polje e-mail!!!")
            toast.error("E-mail mora sadrzati @ !!!")
            setisvalid(false )
            return;
          }
      };
      const emailjsinput=valid?"emailjsinput":"emailjserror"
       
 return (
        <div className="footer">
            <div className="footer-div">
            <h2><b>Nas shop</b></h2>
          <p>
            <b>Radno vreme:</b>
            <span>Pon-Sub/ 07:00-15:00</span>
          </p>
          <p>
            <b>Adresa:</b>
            <span><GoLocation/> Zmaj Jove Jovanovica 24g, Pancevo</span>
          </p>
          <p>
            <b>E-mail:</b>
            <span>popovicccjelena997@gmail.com</span>
          </p>
            </div>
            <div className="footer-div">

            <h2><b>Vazno obavestenje</b></h2>
            
            <p>Za razliku od drugih koji vam iste ili slične proizvode nude preko raznih društvenih mreža i oglasa, u Nasem Shop-u svaki kupljeni proizvod možete zameniti ili vratiti uz povraćaj novca u 
                 <b> roku od 5 dana.</b>
                </p>
            </div>
            <div className="footer-div"
            style={{borderRight:"0px"}}>
          <h2>Prijava i obavestenja</h2>
          <p>
          Informišite se o aktuelnim promocijama i popustima.
          Promotivni mail poslat na Vašu e-mail adresu u ime posiljaoca Nas shop.
          </p>
          <form   onSubmit={sendEmail}>
          <input className={emailjsinput} value={mailvalue} onChange={changeinputmail}  name="e-mail"   type="text" placeholder='e-mail'/>
         <button className='emailjsbutton'>Posalji</button>
          </form>
          
            </div>
        </div>
    );
}

export default Footer;