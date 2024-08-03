import React from "react";
import { Login } from "../Register/Login";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { userLogin } from "../../Redux/Login/action";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const [model, setModel] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector((store) => store.login.token);

  const localStorageToken = localStorage.getItem("token");
  dispatch(userLogin(localStorageToken));

  const handleProfilePage = () => {
    document.getElementById("signsub").style.display = "block";
  };

  const handleLogout = () => {
    dispatch(userLogin({}));
    localStorage.setItem("token", "");
    localStorage.setItem("auth", "");
    navigate("/");
  };

  const cityData = localStorage.getItem("cityData");
  const city = JSON.parse(cityData);
  const [cities, setCities] = useState(city);

  return (
    <>
      <div className="container">
        <div className="navbar-main">
          <div className="logo">
            <Link to="/">
              <img
                src="https://im1.dineout.co.in/images/uploads/misc/2019/Jul/25/website-logo.png"
                alt="logo"
              />
            </Link>
          </div>
          <div className="select">
            <select name="city" id="city-select">
              <option value="volvo">
                {" "}
                {cities ? cities : setCities("NO City Found")}
              </option>
            </select>
          </div>

          <div className="list-items">
            <ul>
              <li>
                <Link to="/" className="home-btn">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/Booktable">Book a Table</Link>
              </li>
              <li>
                <Link to="">Dineout Pay</Link>
              </li>
              <li>
                <Link to="/Dineoutpassport">Dineout Passport</Link>
              </li>
              <li>
                <Link to="">Events</Link>
              </li>
              <li>
                <Link to="">Super Saver</Link>
              </li>
              <li>
                <Link to="">Blog</Link>
              </li>
            </ul>
          </div>
          <div className="btn">
            {!token ? (
              <button onClick={() => setModel(true)}>Login</button>
            ) : (
              <div className="profile">
                <p>
                  My Account{" "}
                  <span onClick={handleProfilePage}>
                    {<ArrowDropDownIcon />}
                  </span>
                </p>
                <div id="signsub">
                  <Link to={"/profile"}>
                    <p>Profile</p>
                  </Link>
                  <p>Coupon History</p>
                  <p onClick={handleLogout}>Logout</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {model ? <Login closeModel={setModel} /> : null}
    </>
  );
};

export default Navbar;
