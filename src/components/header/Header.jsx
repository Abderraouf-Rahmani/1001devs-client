import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import HeaderImg from "../../img/home-header.png"
import "./header.css";

export default function Header() {
  const {user} = useContext(Context)

  return (
    <div className="header">
      <div className="container">
        {user ?
            <div className="header-in">
            <div className="welcoming">Good to see you <span>{user.username} 👋</span></div>
            <span className="quote">"By failing to prepare, you are preparing to fail."</span>
            <i className="quote-autho">- Benjamin Franklin</i>
            <div className="links">
            <Link to={'write'}>
              <button className="main-btn in">Create Post </button>
            </Link>
              <button className="sec-btn in">
            <Link to={user._id}>Profile <span className="moving-arrow">&rarr;</span></Link>
            </button>
            </div>
        </div>
        : 
          <div className="header-out">
          <div className="header-left">
              <h1>Publishing Platform for Developers and Tech Enthusiast</h1>
              <p>Create beautiful, independent online publication by writing faster and better than you ever have before</p>
              <Link to={'register'}>
                <button className="main-btn" >Get Started <div></div> it's free</button>
              </Link>
          </div>
          <div className="header-right">
            <img className="home-header-img" src={HeaderImg} alt="header image" />
          </div>
        </div>
        
        }
        
      </div>
    </div>
  );
}
