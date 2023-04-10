import React, { useEffect, useState } from "react";
import "./services.css";
// import { Link } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import {baseUrl} from "../../baseUrl";

const Services = () => {
  const [services, setServices] = useState([]);
  const axiosInstance = axios.create({
    baseURL: baseUrl,
  });

  useEffect(() => {
    const getServices = async () => {
      try {
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
    };
    getServices();
  }, []);

  const selectedServices = services.slice(0,6)

  return (
    <div className="services" id="services">
      <div className="servicesTop">
        <div className="overlay">
          <h2>The best services</h2>
          <p>
            We are prompt in attending to patients as they come and we treat
            them without queuing up.
          </p>
        </div>
      </div>
      <div className="servicesBottom" id="servicesBottom">
        <div className="servicesDescTitle">
          <span></span>
          <h2>Our Units & Services</h2>
          <span></span>
        </div>
        <div className="servicesDescContainer">
          {selectedServices.map((service) => (
            // <Link to={`/services/${service._id}`} key={service._id}>
            <div className="servicesDescItem" key={service._id}>
              <img src={service.img} alt="X-ray" />
              <div className="servicesDescText">
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </div>
            </div>
            // </Link>
          ))}
        </div>
        <Link to="/services" className="moreServices">
          View all services
        </Link>
      </div>
    </div>
  );
};

export default Services;
