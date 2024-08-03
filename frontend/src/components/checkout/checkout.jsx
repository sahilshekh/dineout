
import Subnavbar from "../Subnavbar/Subnavbar"
import './checkout.css'
import React, { useEffect, useState } from 'react';
function Checkout() {
  const [hotel, setHotel] = useState({})
  const [guest, setGuest] = useState({})

  useEffect(() => {
      setHotel(JSON.parse(localStorage.getItem("hotel")))
      setGuest(JSON.parse(localStorage.getItem("guestdata")))
    }, []);

    const {images,title,price,cityName,place,address,type,category} = hotel 

    const {Counter,Datetime,GuestMobile,Guestname} = guest

      //  console.log(guest)
  return (
    


    <div>
      <Subnavbar/>
   <div className='checki'>
           <div className='cheki1'><h1>{title}</h1>
                <p>{address}, {cityName}</p>
           </div><div className="hr"></div>
           <div className='cheki1_guest'>
             <h1>Guest Deatils</h1>
            <h2><span>Guest Name:</span><span>{Guestname}</span></h2>
            <h2><span>Phone no:</span><span>{GuestMobile}</span></h2>
           </div>
           <div className="hr"></div>
           <div className='cheki1_summery'>
             <h1>Booking  Summary</h1>
             <h2><span>Table Status - Confirmed</span><span>Your reservation is confirmed! Happy Dining</span></h2>
             <h2><span>Date & Time</span><span>{Datetime}</span></h2>
             <h2><span>Guests</span><span>{Counter}</span></h2>
             <h2><span>Name</span><span>{Guestname}</span></h2>
              <h3><span>ID</span><span>D015247509</span></h3>

           </div>
   </div>
      
 
      </div>


    
  )
}

export default Checkout

