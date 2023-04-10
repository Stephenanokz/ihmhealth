import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import "./portalForm.css";

const PortalForm = ({ personnel }) => {
  return (
    <>
      <div className="portalForm">
        <Navbar />
        <form className="portalFormForm">
          <h2 className="portalFormTitle">IHM Health</h2>
          <div className="portalFormInputDetails">
            <input
              type="text"
              placeholder={`${personnel
                .charAt(0)
                .toUpperCase()}${personnel.slice(1)}  ID`}
              className="portalFormInput"
            />
            <input
              type="email"
              placeholder="Email"
              className="portalFormInput"
            />
            <input
              type="password"
              placeholder="Password"
              className="portalFormInput"
            />
            <button className="portalFormButton">Sign Up</button>
            <span>
              By creating an account, you agree and accept our Terms and Privacy
              Policy.
            </span>
          </div>
          <span>
            Already have an account?{" "}
            <Link className="portalFormLoginLink" to="/login">
              Sign in
            </Link>
          </span>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default PortalForm;
