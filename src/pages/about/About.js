import React from "react";
import "./about.css";
import waveSvg from "../../img/wavy-dashed-bottom.svg";
import {Link} from "react-router-dom";

const About = ({aboutItem}) => {
  
  return (
    aboutItem && (
      <div className="about" id="about">
        <div className="aboutTop">
          <img src={aboutItem.img} alt="" />
        </div>
        <div className="aboutBottom">
          <div className="aboutTitle">
            <h3>{aboutItem.name}</h3>
            <h2>{aboutItem.title}</h2>
          </div>
          <div className="aboutDesc">
            <p>
              {aboutItem.body}
            </p>
          </div>
          <Link to="/info">
            <button className="aboutButton">Learn More</button>
          </Link>
        </div>
        <img src={waveSvg} alt="" className="aboutDivider" />
      </div>
    )
  );
};

export default About;
