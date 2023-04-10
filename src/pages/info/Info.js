import React, { useEffect, useState } from "react";
import "./info.css";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import founder from "../../img/founder.jpg";
import mother from "../../img/mother.jpg";
import adTeam from "../../img/adTeam.jpg";
import axios from "axios";
import { Link } from "react-router-dom";
import {baseUrl} from "../../baseUrl";

const Info = () => {
  const [personnels, setPersonnels] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const axiosInstance = axios.create({
    baseURL: baseUrl,
  });

  useEffect(() => {
    const getPersonnels = async () => {
      try {
        setIsLoading(true);
        const res = await axiosInstance.get("personnels", {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MDY1N2MwMmJmNjk4MDc4NGVhMTlmYiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3ODE0ODE3NCwiZXhwIjoxNjc4NzUyOTc0fQ.lm763FiQE_RRDZyFXn1oEj3O4P7s3Z7Ni_0EQ__LLDA",
          },
        });
        setPersonnels(res.data);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    };
    getPersonnels();
  }, []);

  const [CEO, CMO, ...otherPersonnels] = personnels;

  return isLoading ? (
    <div className="loading">Loading...</div>
  ) : (
    personnels && (
      <>
        <Navbar />
        <div className="info">
          <h2 className="infoTitle">All About Us</h2>
          <div className="infoContainer">
            <div className="infoItem">
              <h3>Important Figures and Dignitaries of IHM</h3>
              <div className="infoTeamMainContainer">
                <div className="infoTeamContainer">
                  <img src={founder} alt="" />
                  <span className="infoTeamName">
                    Archbishop Charles Heery. CSSp
                  </span>
                  <span className="infoTeamTitle">
                    Founder of the IHM Sisters
                  </span>
                </div>
                <div className="infoTeamContainer">
                  <img src={mother} alt="" />
                  <span className="infoTeamName">
                    Rev Mother Mary Claude Oguh, IHM
                  </span>
                  <span className="infoTeamTitle">Superior General</span>
                </div>
                <div className="infoTeamContainer wide">
                  <img src={adTeam} alt="" />
                  <span className="infoTeamName">
                    THE CENTRAL ADMINISTRATIVE TEAM
                  </span>
                </div>
              </div>
            </div>
            <div className="infoItem">
              <h3>HISTORY OF IMMACULATE HEART OF MARY SPECIALIST HOSIPITAL</h3>
              <p>
                Immaculate Heart Specialist Hospital Nkpor is owned by the
                Religious Institute of the Sisters of the Immaculate Heart of
                Mary Mother of Christ Nigeria. The hospital is a response to the
                demands of the Founder of the Religious Institute – Most Rev.
                Charles Heery,CSSP of blessed memory. He founded the Institute
                out of the compassion he felt for the sick and needy of our
                society. This drive he bequeathed to his daughters.
              </p>
            </div>
            <div className="infoItem">
              <div className="infoTeamMainContainer">
                <div className="infoTeamContainer">
                  <img src={CEO?.img} alt="" />
                  <span className="infoTeamName">{CEO?.fullName}</span>
                  <span className="infoTeamTitle">{CEO?.title}</span>
                </div>
                <div className="infoTeamContainer">
                  <img src={CMO?.img} alt="" />
                  <span className="infoTeamName">{CMO?.fullName}</span>
                  <span className="infoTeamTitle">{CMO?.title}</span>
                </div>
              </div>
              <Link to="/board" className="infoButton">
                Click to view all Board Members
              </Link>
            </div>
            <div className="infoItem">
              <h3>PHILOSOPHY</h3>
              <p>
                Provision of holistic health care services in the spirit of
                compassion and humility.
              </p>
            </div>
            <div className="infoItem">
              <h3>VISION STATEMENT</h3>
              <p>
                To excel in provision of holistic quality health care services
                as an embodiment of Christ’s compassion and humility.
              </p>
            </div>
            <div className="infoItem">
              <h3>MISSION STATEMENT</h3>
              <p>
                Sharing in the healing ministry of Jesus Christ by providing
                quality health services with respect to human life and dignity
                in the spirit of humility and compassion.
              </p>
            </div>
            <div className="infoItem">
              <h3>OUR CORE VALUES</h3>
              <p>Our core values are captured in the acronym “COMPASSION”.</p>
              <div className="compassionList">
                <span>C: COMMITMENT</span>
                <span>O: ONENESS</span>
                <span>M: MISSION </span>
                <span>P: PASSION </span>
                <span>A: ACCESSBILITY</span>
                <span>S: SERVICE</span>
                <span>S: SAFETY</span>
                <span>I: INTERGRITY</span>
                <span>O: OPPORTUNITY</span>
                <span>N: NON- ABANDOMENT</span>
              </div>
            </div>
            <div className="infoItem">
              <h3>Our Services</h3>
              <p>
                The hospital renders in-patient and out-patient services in the
                following areas:
              </p>
              <ul className="infoServicesList">
                <li className="infoServicesListItem">
                  <DoubleArrowIcon className="icon" />
                  Medical services: ophthalmology, orthopedic, cardiology,
                  neurology, ENT, Dental.
                </li>
                <li className="infoServicesListItem">
                  <DoubleArrowIcon className="icon" />
                  Obstetrics and gynecological services.
                </li>
                <li className="infoServicesListItem">
                  <DoubleArrowIcon className="icon" />
                  Pediatrics: Child and maternity care, immunization,
                  circumcision for males, ear piecing for girls.
                </li>
                <li className="infoServicesListItem">
                  <DoubleArrowIcon className="icon" />
                  Surgical services.
                </li>
                <li className="infoServicesListItem">
                  <DoubleArrowIcon className="icon" />
                  Diagnostics with Modern digital X-ray services, Laboratory and
                  blood banking, Mammogram, CT Scan and MRI, Ultra sound.
                </li>
                <li className="infoServicesListItem">
                  <DoubleArrowIcon className="icon" />
                  National health insurance scheme ( NHIS).
                </li>
                <li className="infoServicesListItem">
                  <DoubleArrowIcon className="icon" />
                  Heart2Heart/HCT - HIV counselling and testing.
                </li>
                <li className="infoServicesListItem">
                  <DoubleArrowIcon className="icon" />
                  Dialysis centre.
                </li>
                <li className="infoServicesListItem">
                  <DoubleArrowIcon className="icon" />
                  Physiotherapy services.
                </li>
                <li className="infoServicesListItem">
                  <DoubleArrowIcon className="icon" />
                  Food services.
                </li>
                <li className="infoServicesListItem">
                  <DoubleArrowIcon className="icon" />
                  Mortuary services.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Footer />
      </>
    )
  );
};

export default Info;
