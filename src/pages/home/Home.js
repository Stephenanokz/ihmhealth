import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

const Home = ({ landingText }) => {
  return (
    landingText && (
      <div className="home" id="home">
        <div className="homeBgImg">
          <div className="overlay"></div>

          <div className="homeContent">
            <div className="homeContentText">
              <h2 className="homeSubTitle">Welcome</h2>
              <h3 className="homeToText">to</h3>
              <h1 className="homeTitle">{landingText.title}</h1>
              <p className="homeMessage">{landingText.subtitle}</p>
            </div>
            <Link to="/portal">
              <button className="homePortalButton">Join Us</button>
            </Link>
          </div>
        </div>
      </div>
    )
  );
};

export default Home;
