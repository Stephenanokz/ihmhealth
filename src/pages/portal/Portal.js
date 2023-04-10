import React from "react";
import "./portal.css";
import portalPatientImg from "../../img/portalPatient.jpg";
import portalStaffImg from "../../img/portalStaff.jpg";
import { Link } from "react-router-dom";
import { ArrowCircleLeft } from "@mui/icons-material";

const Portal = () => {
  return (
    <div className="portal">
      <div className="portalTitleContainer">
        <span></span>
        <h2 className="portalTitle">Our Portal</h2>
        <span></span>
      </div>
      <div className="portalContainer">
        <div className="portalItem portalStaff">
          <img src={portalStaffImg} alt="" />
          <span className="portalText">Staff Login</span>
          <Link to="/portal/staff">
            <button className="portalButton">Open</button>
          </Link>
        </div>
        <div className="portalItem portalPatient">
          <img src={portalPatientImg} alt="" />
          <span className="portalText">Patient's Login</span>
          <Link to="/portal/patient">
            <button className="portalButton">Open</button>
          </Link>
        </div>
      </div>
      <Link to="/" className="portalbackButton">
        <span>
          <ArrowCircleLeft className="backArrow"/>
          Back to website
        </span>
      </Link>
    </div>
  );
};

export default Portal;
