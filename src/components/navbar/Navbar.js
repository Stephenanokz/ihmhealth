import React from "react";
import logo from "../../img/logo.jpg";
import "./navbar.css";
import GiteIcon from "@mui/icons-material/Gite";
import InfoIcon from "@mui/icons-material/Info";
import WheelchairPickupIcon from "@mui/icons-material/WheelchairPickup";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__border">
        <nav className="nav container">
          <div className="nav__logo">
            <Link to="/" className="nav__logo-link">
              <img src={logo} alt="logo" />
              <span>IHM HEALTH</span>
            </Link>
          </div>
          <div className="nav__menu">
            <ul className="nav__list">
              <li className="nav__item">
                <a href="/" className="nav__link">
                  <GiteIcon className="nav__link-icon" />
                  <span>Home</span>
                </a>
              </li>
              <li className="nav__item">
                <a href="/#about" className="nav__link">
                  <InfoIcon className="nav__link-icon" />
                  <span>About</span>
                </a>
              </li>
              <li className="nav__item">
                <a href="/#services" className="nav__link">
                  <WheelchairPickupIcon className="nav__link-icon" />
                  <span>Services</span>
                </a>
              </li>
              <li className="nav__item">
                <a href="/#contact" className="nav__link">
                  <PhoneEnabledIcon className="nav__link-icon" />
                  <span>Contact</span>
                </a>
              </li>
              <li className="nav__item">
                <Link to="/portal" className="nav__link">
                  <AssignmentIndIcon className="nav__link-icon" />
                  <span>Portal</span>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
