import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import "./Home.css";
import axios from "axios";
import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://dineout-project.herokuapp.com/products").then((res) => {
      console.log(res.data);
      setProducts([...res.data]);
    });
  }, []);

  const handleHotel = (e) => {
    localStorage.setItem("hotel", JSON.stringify(e));
    navigate(`/Booktable/${e.title}`);
  };

  return (
    <>
      <div className="navbar">
        <Navbar />
      </div>
      <div className="homepage-container">
        <div className="bestoffer">
          <h2>Best Offers</h2>
          <div className="best-img">
            <img
              src="https://im1.dineout.co.in/images/uploads/misc/2020/Aug/12/25offid.png?tr=tr:n-small"
              alt="10% Offer"
            />
            <img
              src="https://im1.dineout.co.in/images/uploads/misc/2020/Nov/20/30offid.png?tr=tr:n-small"
              alt="20% Offer"
            />
            <img
              src="https://im1.dineout.co.in/images/uploads/misc/2020/Aug/12/20offid.png?tr=tr:n-small"
              alt="10% Offer"
            />

            <img
              src="https://im1.dineout.co.in/images/uploads/misc/2020/Aug/12/10offid.png?tr=tr:n-small"
              alt="10% Offer"
            />
          </div>
        </div>

        <div className="nearyou">
          <h2>Restaurants Near You</h2>
          <div className="near-res">
            {products
              .filter((_, index) => index % 6 === 0)
              .map((el) => {
                return (
                  <div
                    className="near-res-container"
                    onClick={() => handleHotel(el)}
                    key={el._id}
                  >
                    <div className="near-img">
                      <img src={el.images} alt="Restaurant" />
                    </div>
                    <div className="near-res-details">
                      <h3>{el.title}</h3>
                      <p>{el.address + ", " + el.place}</p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>

        {/* featured */}
        <div className="featured-restaurant">
          <h2>Featured Restaurants</h2>
          <div className="near-res">
            {products
              .filter((_, index) => index % 6 === 1)
              .map((el) => {
                return (
                  <div
                    className="near-res-container"
                    onClick={() => handleHotel(el)}
                    key={el._id}
                  >
                    <div className="near-img">
                      <img src={el.images} alt="Restaurant" />
                    </div>
                    <div className="near-res-details">
                      <h3>{el.title}</h3>
                      <p>{el.address + ", " + el.place}</p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>

        {/* popular */}
        <div className="offer-restaurant">
          <div className="label">
            <img
              src="https://im1.dineout.co.in/images/uploads/misc/2020/Sep/9/artboard.png?tr=tr:n-large"
              alt=""
            />
          </div>
          <div className="offer-res">
            {products
              .filter((_, index) => index % 6 === 1)
              .map((el) => {
                return (
                  <div
                    className="offer-res-container"
                    onClick={() => handleHotel(el)}
                    key={el._id}
                  >
                    <div className="offer-img">
                      <img src={el.images} alt="Restaurant" />
                    </div>
                    <div className="offer-res-details">
                      <h3>{el.title}</h3>
                      <p>{el.address + ", " + el.place}</p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      <div className="footer">
        <Footer />
        <br />
        <br />
      </div>
    </>
  );
};

export default Home;
