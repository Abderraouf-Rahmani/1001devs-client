import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./header.css";

export default function Header() {
  const {user} = useContext(Context)

  return (
    <div className="header">
      <div className="container">
        <div className="header-content">
        {user ? (<>
          <div className="header-title">
            Welcome back <span>{user.username}</span>
          </div>
          
          <div className="btns">
            <Link to='write' ><button className="header-join-btn">Create Post</button></Link>
            <Link to={user.username}><button className="header-login-btn">Profile</button></Link>


          </div>
        </>)
        :
        (<>
            <div className="header-title">
              Welcome to <span>1001DEVs</span>
            </div>
  
            <div className="header-desc">Join us and let's learn togather :)</div>
            <div className="btns">
              <Link to='register' ><button className="header-join-btn">Join US  </button></Link>
              <Link to='login'><button className="header-login-btn">Login</button></Link>
  
  
            </div>
        
        </>)}
        </div>
      </div>
    </div>
  );
}
