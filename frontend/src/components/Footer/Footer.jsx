import React from "react";
import styled from "styled-components";
import logo from "../Images/logo.svg";
import youtube from "../Images/Youtube.png";
import facebook from "../Images/Facebook.png";
import twitter from "../Images/Twitter.png";
import insta from "../Images/Instagram.png";
import google from "../Images/Google.png";

const FooterStyle = styled.div`
  .container-footer {
    width: 85%;
    margin: auto;
  }
  .main-heading {
    display: flex;
    flex-direction: column;
    align-items: left;
    h3 {
      font-weight: bold;
      font-size: 16px;
      line-height: 20px;
      color: #ff645a;
    }
    div {
      width: 40px;
      height: 2px;
      background: #ff645a;
      margin-bottom: 10px;
      margin-top: -8px;
    }
  }
  .footer-rows {
    display: flex;
    justify-content: space-around;
    .itemsnames {
      display: flex;
      width: 20%;
      flex-direction: column;
    }
    p {
      font-size: 13px;
      color: #797979;
      cursor: pointer;
      margin: 4px;
    }
    p:hover {
      color: black;
    }
  }
  .container-heading-part {
    height: 48px;
  }
  .footer_end_div {
    background: white;
    text-align: center;
    margin-bottom: 26px;
    .footerlogodiv {
      height: 32px;
      width: 96px;
      margin: auto;
      margin-top: 30px;
    }
    p {
      font-weight: 500;
      font-size: 12px;
      line-height: 20px;
      color: #797979;
      margin: 10px;
      cursor: pointer;
    }
    .sociallinks {
      display: flex;
      gap: 10px;
      width: 300px;
      margin: auto;
      justify-content: center;
    }
  }
  hr {
    margin: 30px 0 20px 0px;
  }
`;

export default function Footer() {
  return (
    <>
      <FooterStyle>
        <div className="container-footer">
          <div className="main-heading">
            <h3>Available in</h3>
            <div></div>
          </div>
          <div className="footer-rows">
            <div className="itemsnames">
              <p>Delhi</p>
              <p>Pune</p>
              <p>Jaipur</p>
              <p>Vadodara</p>
            </div>
            <div className="itemsnames">
              <p>Mumbai</p>
              <p>Kolkata</p>
              <p>Lucknow</p>
              <p>Nagpur</p>
            </div>
            <div className="itemsnames">
              <p>Banglore</p>
              <p>Ahemdabad</p>
              <p>Indore</p>
              <p>Kochi</p>
            </div>
            <div className="itemsnames">
              <p>Chennai</p>
              <p>Chandigarh</p>
              <p>Udaipur</p>
              <p>Surat</p>
            </div>
            <div className="itemsnames">
              <p>Hydrabad</p>
              <p>Goa</p>
              <p>Agra</p>
              <p>Ludhiana</p>
            </div>
            {/* hello */}
          </div>
          <hr />
          <div className="footer-rows">
            <div className="itemsnames">
              <div className="main-heading">
                <h3>Discover</h3>
                <div></div>
              </div>
              <p>Trending Restaurants</p>
              <p>Super Savers</p>
              <p>Dineout Pay</p>
              <p>Dineout Passport</p>
              <p>Contactless Dining</p>
            </div>
            <div className="itemsnames">
              <div className="main-heading">
                <h3>About</h3>
                <div></div>
              </div>
              <p>About Us</p>
              <p>Blog</p>
              <p>Dineout For Business</p>
              <p>Add Restaurants</p>
              <p>Terms & Conditions</p>
              <p>Privacy Policy</p>
            </div>
            <div className="itemsnames">
              <div className="main-heading">
                <h3>Top Cuisines</h3>
                <div></div>
              </div>
              <p>Chinese</p>
              <p>Italian</p>
              <p>South Indian</p>
              <p>Mexican</p>
              <p>Continental</p>
              <p>Mughlai</p>
            </div>
            <div className="itemsnames">
              <div className="main-heading">
                <h3>Top Facilities</h3>
                <div></div>
              </div>
              <p>Romantic</p>
              <p>Fine Dining</p>
              <p>Buffet</p>
              <p>5 Star</p>
              <p>Pure Veg</p>
              <p>Sea Food</p>
            </div>
            <div className="itemsnames">
              <div className="main-heading">
                <h3>Top Locations</h3>
                <div></div>
              </div>
              <p>Salt Lake</p>
              <p>Ballygunge</p>
              <p>Park Street</p>
              <p>Gariahat</p>
              <p>Behala</p>
              <p>Chandni Chowk</p>
            </div>
          </div>
          <hr />
          <div className="footer_end_div">
            <div className="footerlogodiv">
              <img src={logo} alt="" />
            </div>
            <p>Find the best Restaurants, Discounts, Deals, Offers</p>
            <p>Contact: +91-911166642</p>
            <div className="sociallinks">
              <img src={youtube} alt="" />
              <img src={twitter} alt="" />
              <img src={facebook} alt="" />
              <img src={insta} alt="" />
              <img src={google} alt="" />
            </div>
            <p>© 2017, Dineout.co.in All Rights Reserved</p>
          </div>
        </div>
      </FooterStyle>
    </>
  );
}
