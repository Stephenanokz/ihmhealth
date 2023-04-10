import React from "react";
import "./footer.css";
import { FacebookRounded, WhatsApp, YouTube } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerContainer">
        <div className="footerSocials">
          <Link to="https://www.facebook.com/profile.php?id=100090901730751">
            <FacebookRounded className="icon"/>
          </Link>
          <Link to="https://www.youtube.com/channel/UC4C4U8tz1SeoaNx0oR98c_g">
            <YouTube className="icon"/>
          </Link>
          <Link to="https://wa.me/2349065498234">
            <WhatsApp className="icon"/>
          </Link>
        </div>
        <div className="footerLinks">
          <a href="/#about">
            <span>About us</span>
          </a>
          <a href="/#contact">
            <span>Contact us</span>
          </a>
          <Link to="/portal">
            <span>Portal</span>
          </Link>
        </div>
        <div className="footerCopyrightText">
          <span>&copy; 2023 Verbum Networks</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
