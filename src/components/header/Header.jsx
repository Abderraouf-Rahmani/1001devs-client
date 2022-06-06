import React from "react";
import { Link } from "react-router-dom";
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
            <Link to='register' ><button className="header-join-btn">Join US  </button></Link>
            <Link to='login'><button className="header-login-btn">Login</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
}
