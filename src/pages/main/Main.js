import React, { useEffect, useState } from "react";
import "./main.css";
import About from "../about/About";
import Contact from "../contact/Contact";
import Home from "../home/Home";
import Services from "../services/Services";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import Nande from "../nande/Nande";
import axios from "axios";
import {baseUrl} from "../../baseUrl";

const Main = () => {
  const [landingText, setLandingText] = useState();
  const [aboutItem, setAboutItem] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const axiosInstance = axios.create({
    baseURL: baseUrl,
  });

  useEffect(() => {
    const getLandingText = async () => {
      try {
        setIsLoading(true);
        const res = await axiosInstance.get("landing", {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MDY1N2MwMmJmNjk4MDc4NGVhMTlmYiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3OTgyMzkxOCwiZXhwIjoxNjgwNDI4NzE4fQ.LnWXmsRhw50dPCc8Eo6D_me2Q7Gfw0Tljmtiv9f0Dso",
          },
        });
        setLandingText(res.data[0]);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    };
    const getAboutItem = async () => {
      try {
        const res = await axiosInstance.get("about", {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MDY1N2MwMmJmNjk4MDc4NGVhMTlmYiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3OTgyMzkxOCwiZXhwIjoxNjgwNDI4NzE4fQ.LnWXmsRhw50dPCc8Eo6D_me2Q7Gfw0Tljmtiv9f0Dso",
          },
        });
        setAboutItem(res.data[0]);
      } catch (error) {
        console.log(error);
      }
    };
    getLandingText();
    getAboutItem();
  }, []);

  return isLoading ? (
    <div className="loading">Loading...</div>
  ) : (
    landingText && aboutItem && (
      <div className="main">
        <Navbar />
        <Home landingText={landingText} />
        <About aboutItem={aboutItem} />
        <Services />
        <Nande />
        <Contact />
        <Footer />
      </div>
    )
  );
};

export default Main;
