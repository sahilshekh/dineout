import React, { useEffect, useState } from 'react';
import Overview from './Overview';
import './Hotel.css'

import Subnavbar from '../Subnavbar/Subnavbar';
import '../Subnavbar/Navbar1.css'
import Offer from '../OfferDeal/Offer';
// import "../Offer.css"
// import Offer from "./components/OfferDeal/Offer";

const Hotel = () => {

    const [hotel, setHotel] = useState({})

    useEffect(() => {
        setHotel(JSON.parse(localStorage.getItem("hotel")))
      }, []);

      const {images,title,price,cityName,place,address,type,category} = hotel 

    return (
        
        <>
         <Subnavbar/>
        <div className='Hotel-container'>
       
    <div className='leftinav'>
            <div className='upperone'><span>{category} > {cityName} > {place} > {address} > {title}</span></div>
            <div className='image'><img src={images} alt="" /></div>
            <div className='details'>
            <div className='title'><h2>{title}</h2></div>
            <div className='price'>{price} | {type}</div>
            <div className='address'>{address} | {place} | {cityName} | <b>Get Direction</b></div>
            <div className='time'><span>Time : 12:00 PM to 01:00AM <b>(Open Now)</b></span></div>
            </div>
            
            
         <Offer/>
            
            </div>
            <Overview/>
            
            
        </div>
        
        </>
    );
};

export default Hotel;