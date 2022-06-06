import React from "react";
import "./profile.css";
import SearchCard from "../../components/searchcard/SearchCard";
import image from "../../img/Troll-face.png";
import CakeIcon from "@mui/icons-material/Cake";

export default function Profile() {
  return (
    <div className="profile">
      <div className="cover"></div>
      <div className="profile-container">
        <div className="profile-header">
          <div className="profile-pic-container">
            <img src={image} alt="profile pic" className="profile-pic" />
          </div>
          <h3 className="name">Abderraouf Rahmani</h3>
          <div className="about">
            Hi, I'm Abderraouf, you can call me Abdu, I love Coding and problem
            solving in genera
          </div>
          <div className="joined-date">
            <CakeIcon /> Joined on Aug 31, 2021
          </div>
        </div>
        <div className="settings-btn">Edit profile</div>
        <div className="profile-infos">
          <div className="skills-container">
            <div className="skills">
              <h3 className="skills-title">Skills/Languages</h3>
              <div className="the-skills">
                <p>
                  beside the obvious (HTML & CSS), JavaScript, React, NodeJs,
                  ExpressJs, MongoDB, MySQL.
                </p>
              </div>
            </div>
          </div>
          <div className="post-hist">
            <SearchCard />
            <SearchCard />
            <SearchCard />
          </div>
        </div>
      </div>
    </div>
  );
}
