import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./nande.css";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import divider from "../../img/sharp-paper-top.svg";
import axios from "axios";
import {baseUrl} from "../../baseUrl";

const Nande = () => {
  const [featuredPost, setFeaturedPost] = useState(null);
  const [latestPosts, setLatestPosts] = useState([]);
  const axiosInstance = axios.create({
    baseURL: baseUrl,
  });

  useEffect(() => {
    const getPosts = async () => {
      try {
        const res = await axiosInstance.get("posts?new=true", {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MDY1N2MwMmJmNjk4MDc4NGVhMTlmYiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3OTgyMzkxOCwiZXhwIjoxNjgwNDI4NzE4fQ.LnWXmsRhw50dPCc8Eo6D_me2Q7Gfw0Tljmtiv9f0Dso",
          },
        });
        setLatestPosts(res.data.slice(0, 5));
        setFeaturedPost(res.data[0]);
      } catch (error) {
        console.log(error);
      }
    };
    getPosts();
  }, []);

  const truncateString = (str, num) => {
    if (str.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  return (
    featuredPost && (
      <div className="nande">
        <img src={divider} alt="" className="nandeDivider" />
        <div className="nandeContainer">
          <div className="nandeLeft">
            <span>News & Events</span>
          </div>
          <div className="nandeRight">
            <ArrowCircleRightIcon className="icon" />
            <ul className="nandePostList">
              {latestPosts.map((latestPost) => (
                <Link to="/newsandevents" key={latestPost._id}>
                  <li className="nandePostListItem">
                    <b>{latestPost.title}</b> -{" "}
                    {truncateString(latestPost.message, 50)}
                  </li>
                </Link>
              ))}
            </ul>
            <Link to="/newsandevents">
              <span className="nandeReadmoreLink">See All</span>
            </Link>
            {/* <p>
              {truncateString(featuredPost.message, 340)}
            </p> */}
//             <span className="opening">
//               Upcoming Event – Official Opening of the New Hospital is scheduled
//               to take place on the 11th April 2023 (Easter Tuesday).
//             </span>
          </div>
        </div>
      </div>
    )
  );
};

export default Nande;
