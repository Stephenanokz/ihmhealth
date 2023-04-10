import React, { useEffect, useState } from "react";
import "./board.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import axios from "axios";

const Board = () => {
  const [personnels, setPersonnels] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
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

  const [CEO, ...others] = personnels;

  return isLoading ? (
    <div className="loading">Loading...</div>
  ) : (
    <>
      <Navbar />
      <div className="board">
        <div className="title">
          <h1>Meet the board</h1>
        </div>
        <div className="ceo">
          <img src={CEO?.img} alt="chief executive officer" />
          <span className="staffName">{CEO?.fullName}</span>
          <span className="staffTitle">{CEO?.title}</span>
        </div>
        <div className="others">
          {others?.map((item) => (
            <div className="staffItem" key={item._id}>
              <img src={item?.img} alt="chief executive officer" />
              <span className="staffName">{item?.fullName}</span>
              {item?.title && <span className="staffTitle">{item?.title}</span>}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Board;
