import React, { useEffect, useState } from 'react';
import axios from 'axios'
import './Overview.css'
import review from './chrome-capture (21).jpg'
import { useNavigate } from 'react-router';

const Overview = () => {

    // const [state, setState] = useState([])

    // const [randomarr, setRandomarr] = useState([])

// <<<<<<< HEAD
    // useEffect(() => {
    //     fetch("https://dineout-project.herokuapp.com/products")
    //     .then((res) => res.json())
    //     .then((res)=> {
    //         setState([...res])
// =======
//     useEffect(() => {
//         fetch("https://dineout-project.herokuapp.com/products")
//         .then((res) => res.json())
//         .then((res)=> {
//             setState([...res])
// >>>>>>> 76ed6b352071f5d3117587d816b017b589cecb4a
        
    //     });
    //   }, []);

    //   useEffect(()=>{
    //     getRandom()
    //   },[state])

    //   const getRandom = () => {
    //       let a1 = Math.floor(Math.random()*state.length)
    //       let a2  = Math.floor(Math.random()*state.length)
    //       let a3 = Math.floor(Math.random()*state.length)
    //         setRandomarr([...randomarr,state[a1]])
    //         setRandomarr([...randomarr,state[a2]])
    //         setRandomarr([...randomarr,state[a3]])
    //         console.log(state[a1],state[a2],state[a3])
    //     }

    //     const {images,title,place} = randomarr
    const [products, setProducts] = useState([]);

    useEffect(() => {
      axios.get("https://dineout-project.herokuapp.com/products").then((res) => {
        console.log(res.data);
        setProducts([...res.data]);
      });
    }, []);

    const navigate = useNavigate();

    const handleHotel = (e) => {
        localStorage.setItem("hotel", JSON.stringify(e));
        navigate(`/Booktable/${e.title}`);
      };

    return (
    <div className='overview'>

        <div className='first'>
            <div><h3>Overview</h3></div>
            <div><h3>Menu</h3></div>
            <div><h3>About</h3></div>
            <div><h3>Reviews (55)</h3></div>
            <div><h3>Help</h3></div>
        </div>

        <div className='second'>
            <div><img src="https://im1.dineout.co.in/images/uploads/mailer/2019/Jul/11/gp-logo.png?tr=tr:n-medium" alt="" /></div>
            <div><p>Combine any offer with Dineout Pay to <b>save up to 10%</b> more on your bill and also get <b>20%</b> cashback.</p></div>
        </div>

        <div className='othree'>
            <div><h3>Dineout Passport</h3></div>
            <div className='member'>
                <div><h3>Flat 25% Off the Total Bill</h3>
                     <p className='onlymember'><sup>Only for members</sup> <img src="https://im1.dineout.co.in/images/uploads/misc/2020/Sep/3/dp_light_medium_logo.png" alt=""/></p>
                </div>
                <div><button className='buymem'>Buy Membership</button></div>
            </div>
        </div>

        <div className='four'>
            <h3>Menu</h3>
            <div className='four-one'>
                <div>
                    <img src="https://im1.dineout.co.in/images/uploads/restaurant/sharpen/3/d/f/m3770-15734608865dc91b9677cea.jpg?tr=tr:n-small" alt="" />
                    <p>Sunday Brunch</p>
                </div>
                <div>
                    <img src="https://im1.dineout.co.in/images/uploads/restaurant/sharpen/3/l/h/m3770-15669935405d666c84a1ffc.jpg?tr=tr:n-small" alt="" />
                    <p>Food Menu (17)</p>
                </div>
                <div>
                    <img src="https://im1.dineout.co.in/images/uploads/restaurant/sharpen/3/c/k/m3770-16082108435fdb599b27792.jpg?tr=tr:n-small" alt="" />
                    <p>Bar menu (7)</p>
                </div>
            </div>
        </div>
        
        <div className='ofive'>
            <h3>About</h3>
            <p className='five-one'>SKYE at Eternia RoofTop is a rooftop restaurant that offers delicious food of multi-cuisines at pock... <a href="">Read more</a></p>
            <div>
                <div className='advantages'>
                    <div><img src="https://im1.dineout.co.in/images/uploads/misc/2019/Jun/19/group_30.png" alt="" /></div>
                    <div><p className='type'>CUISINE</p>
                    <p>North Indian, Italian, Chinese, Continental, Desserts</p></div>
                
                </div>
                <div className='advantages'>
                    <div><img src="https://im1.dineout.co.in/images/uploads/misc/2019/Jun/19/group_5.png" alt="" /></div>
                    <div><p className='type'>TYPE</p>
                    <p>Casual Dining, Nightlife</p></div>
                
                </div>
                <div className='advantages'>
                    <div><img src="https://im1.dineout.co.in/images/uploads/misc/2019/Jun/19/grouprupee.png" alt="" /></div>
                    <div><p className='type'>AVERAGE COST</p>
                    <p>2,000 for two people</p></div>
                
                </div>
                <div className='advantages'>
                    <div><img src="https://im1.dineout.co.in/images/uploads/misc/2019/Jun/19/group_3.png" alt="" /></div>
                    <div><p className='type'>BESTSELLING ITEMS</p>
                    <p>Pasta Eternia, Roasted Chicken Salad, Mango Pastry, Chura Paratha, Bloody Mary, Butter Chapati.</p></div>
                
                </div>
                <div className='advantages'>
                    <div><img src="https://im1.dineout.co.in/images/uploads/misc/2019/Jun/19/group_2.png" alt="" /></div>
                    <div><p className='type'>FACILITIES & FEATURES</p>
                   </div>
                
                </div>
            </div>
            <div className='fuckindiv'>
                <div>
                    <p className='facilities'><img src="https://im1.dineout.co.in/images/uploads/misc/2019/Jul/1/17.png" alt="" /><span>Smoking Area</span></p>
                    <p className='facilities'><img src="https://im1.dineout.co.in/images/uploads/misc/2019/Jul/1/18.png" alt="" /><span>Lift</span></p>
                    <p className='facilities'><img src="https://im1.dineout.co.in/images/uploads/misc/2019/Jul/1/27.png" alt="" /><span>Live Performance</span></p>
                    <p className='facilities'><img src="https://im1.dineout.co.in/images/uploads/misc/2019/Jul/1/16.png" alt="" /><span>Outdoor Seating</span></p>
                    <p className='facilities'><img src="https://im1.dineout.co.in/images/uploads/misc/2019/Jul/1/2.png" alt="" /><span>Wallet Accepted</span></p>
                </div>
                <div>
                    <p className='facilities'><img src="https://im1.dineout.co.in/images/uploads/misc/2019/Jul/1/7.png" alt="" /><span>Air Conditioned</span></p>
                    <p className='facilities'><img src="https://im1.dineout.co.in/images/uploads/misc/2019/Jul/1/21.png" alt="" /><span>Valet Available</span></p>
                    <p className='facilities'><img src="https://im1.dineout.co.in/images/uploads/misc/2019/Jul/1/13.png" alt="" /><span>Cards Accepted</span></p>
                    <p className='facilities'><img src="https://im1.dineout.co.in/images/uploads/misc/2019/Jul/1/6.png" alt="" /><span>Roof Top</span></p>
                </div>
                <div>
                    <p className='facilities'><img src="https://im1.dineout.co.in/images/uploads/misc/2019/Jul/1/19.png" alt="" /><span>DJ</span></p>
                    <p className='facilities'><img src="https://im1.dineout.co.in/images/uploads/misc/2019/Jul/1/11.png" alt="" /><span>Parking</span></p>
                    <p className='facilities'><img src="https://im1.dineout.co.in/images/uploads/misc/2019/Jul/1/15.png" alt="" /><span>Full Bar Available</span></p>
                    <p className='facilities'><img src="https://im1.dineout.co.in/images/uploads/misc/2019/Jul/1/1.png" alt="" /><span>Live Screening</span></p>
                </div>
            </div>
        </div>

        <div className='six'>
            <h3>You May Also Like</h3>
            <p>Checkout these great resturants</p>
            <div className='maylike'>
            {products
              .filter((_, index) => index % 8 === 5 )
              .map((el) => {
                return (
                  <div
                    className="random"
                    key={el._id}
                    onClick={() => handleHotel(el)}
                  >
                    <div className="random-img">
                      <img src={el.images} alt="Restaurant" />
                    </div>
                    <div className="random-details">
                      <h3>{el.title}</h3>
                      <p>{el.address}</p>
                    </div>
                  </div>
                );
              })}
            </div>
        </div>

        <div className='seven'>
                <div><h3>Missing some information?</h3><button>Add Now</button></div>
        </div>

        <div className='eight'>
            <img src={review} alt="" />
        </div>

        <div className='nine'>
            <h3>We're always here to help</h3>
            <div className='nine-one'>
                <div><p className='help'><img src="https://im1.dineout.co.in/images/uploads/mailer/2019/Jun/19/group_74.png" alt="" />
                    <span><p>Call Us</p><p>+91 9212340202</p></span>
                </p></div>
                <div><p className='help'><img src="https://im1.dineout.co.in/images/uploads/mailer/2019/Jun/19/group_74.png" alt="" />
                    <span><p>Call Us</p><p>+91 9212340202</p></span>
                </p></div>

            </div>
        </div>

    </div>
    );
};

export default Overview;