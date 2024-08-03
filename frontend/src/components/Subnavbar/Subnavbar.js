import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
// import axios from 'axios'
import '../Subnavbar/Navbar1.css'
import {navItems} from './NavbarItems'
import Dropdown from './Dropdown';
import { Searchbar } from './Seachbar';



 

const Subnavbar = () => {
   const [selected,setselected] = React.useState("");
   const [show,setshow] = useState(false);


   return(
       <>
        <nav className='main_nav'>
           <div className='navbar1'>
           <Link to ="/"><img src="https://im1.dineout.co.in/images/uploads/misc/2019/Jul/25/website-logo.png" width="100px"></img></Link>
           
           <Dropdown selected={selected} setselected={setselected}/>
           <Searchbar/>
           <Link to=""><button className='log_button'>Login</button></Link>
           </div>

           
           <div className='navbar21'>
           <ul className='nav-items'>
              {navItems.map(item => {
                 return(
                <li key ={item.id} className={item.cName}>
                   <Link to={item.path} className="nav213">{item.title}</Link>
                </li>
                 )
              })}
           </ul>
           </div>
        </nav>
       </>
   )
}

export default Subnavbar;