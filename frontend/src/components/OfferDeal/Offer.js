import React, { useState } from 'react'
import Calendar1 from './Calender';
import { Counter } from './Counter';
import './Offer.css'
import { Link } from 'react-router-dom';

 

const Offer = () => {
    const[datetime,setdatetime] = useState("");
    const[guestname,setguestname] = useState("");
    const[guestmobile,setguestmobile] = useState("");
    const[counter,setcounter] = useState("");
    const saveGuestdata = () =>{

    //    var Guestdata = []
       const guestdata = {
           Datetime:datetime,
           Guestname:guestname,
           GuestMobile:guestmobile,
           Counter:counter
       }
    //    Guestdata.push(guestdata)
       localStorage.setItem("guestdata",JSON.stringify(guestdata))
    }

    const getvalue = (v) =>{
        setdatetime(v)
    }

    const getcounter = (c) =>{
        setcounter(c)
    }

   return(
       <>
        {/* <div className='blank'></div> */}
          
           <div className='Offer_deal1'>
               <div className='Select_offer1'>Select an a Offer or Deal</div>
           <Calendar1 getvalue = {getvalue} />
           <div className='Detail'>
           <label>Enter Guest Details</label>
           <br/>
           <input type="text" placeholder='Enter Your Name' className='detail_name' value={guestname} onChange={(e) =>{setguestname(e.target.value)}}></input>
           <br/>
           <input type="text" placeholder='Enter Your Number' className='detail_mobile' value={guestmobile} onChange={(e) => {setguestmobile(e.target.value)}}></input>
           <br/>
           <label className='detail_lable'>Select Guest/s</label>
           <p>Choose the number of guests going</p>
           <br/>
           <Counter getcounter={getcounter}/>
           <Link to="/Checkout"><button className='confirm_btn' onClick={saveGuestdata}>Continue</button></Link>
          
           </div>
           </div>
       </>
   )
}

export default Offer;