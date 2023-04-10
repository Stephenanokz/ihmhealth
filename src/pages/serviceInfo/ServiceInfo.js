import React, { useEffect, useState } from "react";
import "./serviceInfo.css";
import NavBar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import axios from "axios";
// import { Link } from "react-router-dom";
import genPop from "../../img/servicesTopImg.jpg";
import paediatrics from "../../img/pediatrics.jpg";
import surgery from "../../img/surgery.jpg";

const ServiceInfo = () => {
  const [services, setServices] = useState([]);
  const [isHovered, setIsHovered] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
  });

  const [hoveredItemIds, setHoveredItemIds] = useState({});

  const handleMouseOver = (id) => {
    setHoveredItemIds((prevState) => ({ ...prevState, [id]: true }));
  };

  const handleMouseLeave = (id) => {
    setHoveredItemIds((prevState) => ({ ...prevState, [id]: false }));
  };

  useEffect(() => {
    const getServices = async () => {
      try {
        setIsLoading(true);
        const res = await axiosInstance.get("services", {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MDY1N2MwMmJmNjk4MDc4NGVhMTlmYiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3OTgyMzkxOCwiZXhwIjoxNjgwNDI4NzE4fQ.LnWXmsRhw50dPCc8Eo6D_me2Q7Gfw0Tljmtiv9f0Dso",
          },
        });
        setServices(res.data);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    };
    getServices();
  }, []);

  return isLoading ? (
    <div className="loading">Loading...</div>
  ) : (
    <>
      <NavBar />
      {services && (
        <div className="serviceInfo">
          <div className="title">
            <h1>Services</h1>
            <span className="quote">
              <b>"</b> When wealth is lost, nothing is lost; when health is
              lost, something is lost; when character is lost, all is lost.
              <b>"</b>
            </span>
            <span className="author"> - Billy Graham</span>
          </div>
          <div className="serviceList">
            {services?.map((service) => (
              // <Link to={`/service/${service._id}`} key={service._id}>
                <div
                  className="serviceItem"
                  key={service._id}
                  onMouseOver={() => handleMouseOver(service._id)}
                  onMouseLeave={() => handleMouseLeave(service._id)}
                >
                  <h3 className="serviceItemTitle">{service?.title}</h3>
                  <img src={service?.img} alt="" />
                  {hoveredItemIds[service._id] && (
                    <div className="desc">{service?.desc}</div>
                  )}
                </div>
              // </Link>
            ))}
          </div>
          <div className="specialties">
            <div className="top">
              <h2>Our Specialties</h2>
              <span>
                We offer quality healthcare services in all fields of Medicine,
                Surgery, Obstetrics & Gynaecology and Paediatrics with up to
                date and state of the art facilities to render full evaluation
                and comprehensive diagnoses and treatment.
              </span>
            </div>
            <div className="bottom">
              <div className="specialtyList">
                <div className="specialtyItem">
                  <img src={genPop} alt="" />
                  <div className="desc">
                    <span className="title">General Medicine & Surgery</span>
                    <span className="body">
                      All our patients who don't report in accident and
                      emergency unit go to the General Outpatient Department
                      where we have consultation days for Medical Officers and
                      Consultants from Monday to Saturday.
                    </span>
                  </div>
                </div>
                <div className="specialtyItem">
                  <img src={paediatrics} alt="" />
                  <div className="desc">
                    <span className="title">Pediatrics</span>
                    <span className="body">
                      The children's outpatient unit hosts a variety of
                      services. These cover both general paediatric and
                      specialist services.
                    </span>
                  </div>
                </div>
                <div className="specialtyItem">
                  <img src={surgery} alt="" />
                  <div className="desc">
                    <span className="title">Surgical Unit</span>
                    <span className="body">
                      We offer a variety of surgical procedures which include
                      Orthopedics, Otorhinolaryngology (ENT), Eye Care (Cataract
                      Surgery Inclusive) and many other general surgeries.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default ServiceInfo;
