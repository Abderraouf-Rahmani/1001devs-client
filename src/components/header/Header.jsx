import React from "react";
import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="container">
        <div className="header-content">
          <div className="header-title">
            Welcome to <span>1001DEVs</span>
          </div>
          <div className="header-desc">Join us and let's learn togather :)</div>
          <div className="btns">
            <button className="header-join-btn">Join US</button>
            <button className="header-login-btn">Login</button>
          </div>
        </div>
      </div>
    </div>
  );
}
