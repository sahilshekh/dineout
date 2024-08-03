import React from 'react'
import  '../Booktable/Booktables'
import Navbar from '../Navbar/Navbar'
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaGreaterThan } from "react-icons/fa";

function Fast() {

    const [fastFood,setNorth]= useState([]);

  useEffect(() => {
    axios.get("https://dineout-project.herokuapp.com/fastfood").then((res) => {
      console.log(res.data);
      setNorth([...res.data]);
    });
  }, []);

  return (
    <>
        <Navbar/>
        <div className='main_Booktable'>
          <div className='sideBar'>
              <form>
                  <h3 className='h3'>Quick Filters<p1 className="substract">-</p1></h3>
                  <input type="search" placeholder='Search' className='serch'></input><br/><br/>
                  <Link to="/Dineout"><input type="checkbox" className='checkbox'></input></Link><span className='clor'>Dineout pay</span><br/><br/>
                  <Link to="/PureVeg"><input type="checkbox" className='checkbox'></input></Link><span className='clor'>Pure Veg</span><br/><br/>
                 <Link to="/Star"><input type="checkbox" className='checkbox'></input></Link><span className='clor'>5 Star</span><br/><br/>
                 <Link to="/Buffet"><input type="checkbox" className='checkbox'></input></Link><span className='clor'>Buffet</span><br/><br/>

                  <p className='more'>Show More (4)</p>

                  <hr className='horizLine'/>

                  <h3 className='h3'>Cuisines <p1 className="substract2">-</p1></h3>
                  <input type="search" placeholder='Search For Cuisine'className='serch'></input><br/><br/>
                  <Link to="/NorthIndia" style={{ textDecoration: 'none',color:"gray",marginLeft:"15px" }}>North Indian</Link><br /><br />
                  <Link to="/Chinese"style={{ textDecoration: 'none',color:"gray",marginLeft:"15px" }}><>Chinese</></Link><br /><br />
                  <Link to="/Fast"style={{ textDecoration: 'none',color:"gray",marginLeft:"15px" }}><>Fast Food</></Link><br/>
                  <p className='more'>Continental</p>
                  <p className='more'>Show More (60)</p>

                  <hr className='horizLine'/>

                  <h3 className='h3'>Tags<p1 className="substract3">-</p1></h3>
                  <input type="search" placeholder='Search' className='serch'></input><br/><br/>
                  <input type="checkbox"className='checkbox'></input><span><span className='clor'>Casual Dining</span></span><br /><br />
                  <input type="checkbox"className='checkbox'></input><span><span className='clor'>Break Fast</span></span><br /><br />
                  <input type="checkbox"className='checkbox'></input><span><span className='clor'>Best Pure Veg</span></span><br /><br />
                  <input type="checkbox"className='checkbox'></input><span><span className='clor'>Pure veg</span></span><br /><br />
                  <p className='more'>Show More (75)</p>
               <hr className='horizLine'/>
                 <h3 className='h3'>Features <p1 className="plus">+</p1></h3>
                 <hr className='horizLine'/>
                 <h3 className='h3'>Dineout Passport <p1 className="plus2">+</p1></h3>
                 <hr className='horizLine'/>

              </form>
              <p3 className="p2">Top 10 Restaurants in Mumbai</p3>
          </div>
          
          <div className='dataDiv'>

              <div>
                <p className='data_uppertext'>Dineout <span className='icon_ad'><FaGreaterThan/></span> Pune <span className='icon_ad'><FaGreaterThan/></span> Pune Restaurants</p>
                <div className='for_flex'>
                  <div className='data_title'><h1>Best Restaurants Near Me in Pune</h1></div>
                  <div className='select_div'>
                    <label className='sort_labl'>Sort by</label>
                    <select className='select_tag'>
                      <option>Popularity</option>
                      <option>Rating</option>
                      <option>Price Low to High</option>
                      <option>Price High to Low</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="hotelData">
                {fastFood
                  .map((el) => {
                    return (
                      <div className="hotelData-container" key={el._id}>
                        <img src={el.images} alt="Restaurant" />
                        <div className="hotelData-details">
                          <h3>{el.title}</h3>
                          <p>{el.address + ", " + el.place}</p>
                          <p>{el.price + ", " + el.type}</p>

                        </div>
                      </div>
                    );
                  })}
                  
              </div>
          </div>
        </div>
    </>
  )
}

export default Fast