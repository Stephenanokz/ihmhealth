import React, { useEffect, useState } from "react";
import "./nandeInfo.css";
import Navbar from "../../components/navbar/Navbar";
import axios from "axios";
import Footer from "../../components/footer/Footer";
import PagesIcon from "@mui/icons-material/Pages";
import {baseUrl} from "../../baseUrl";

const NandeInfo = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const axiosInstance = axios.create({
    baseURL: baseUrl,
  });

  useEffect(() => {
    const getPosts = async () => {
      try {
        setIsLoading(true);
        const res = await axiosInstance.get("posts", {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MDY1N2MwMmJmNjk4MDc4NGVhMTlmYiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3OTgyMzkxOCwiZXhwIjoxNjgwNDI4NzE4fQ.LnWXmsRhw50dPCc8Eo6D_me2Q7Gfw0Tljmtiv9f0Dso",
          },
        });
        setPosts(res.data);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    };
    getPosts();
  }, []);

  return isLoading ? (
    <div className="loading">Loading...</div>
  ) : (
    <>
      <Navbar />
      <div className="nandeInfo">
        <div className="nandeInfoTitle">
          <h1>News And Events</h1>
        </div>
        <div className="nandeInfoContainer">
          {posts.map((post) => (
            <div className="nandeInfoItem" key={post._id}>
              <h3>{post.title}</h3>
              {post.img && <img src={post.img} alt="" />}
              <p>{post.message}</p>
              <span className="postAuthor">
                <PagesIcon className="postIcon" />
                Posted by Admin
              </span>
              <span className="postDate">{post.createdAt.slice(0, 10)}</span>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NandeInfo;
