import "./navbar.css";
import image from "../../img/logo.png";
import profilePic from "../../img/Troll-face.png";
import { Link } from "react-router-dom";
import SearchBar from "../searchbar/SearchBar";
import SearchIcon from '@mui/icons-material/Search';
import { useContext } from "react";
import { Context } from "../../context/Context";

export default function Navbar() {
  const {user, dispatch} = useContext(Context)
  const handleLogout = ()=>{
    dispatch({type: "LOGOUT"})
    window.location.href = "/login";
  }
  return (
    <nav className="navbar">
      <div className="container">
        <div className="left">
          <Link to="/">
            <div className="nav-icon">
              <img className="logo" src={image} alt="logo" />
            </div>
          </Link>
          <div className="nav-search-container">

          <SearchBar />
          </div>
        </div>

        <div className="right">
          {/* IF THE USER IS LOGGED IN */}
          <div className="responsive-search-icon ">
            <Link to='search'>
              <SearchIcon />
            </Link>
          </div>
          {user ? (
            <>
              <Link to="/write">
                <div className="primary-btn create-post-btn">Create Post</div>
              </Link>
              <div className="nav-item" onClick={handleLogout}>Log out</div>
              <Link to="/abdu">
                <div className="profile-icon">
                  <img
                    src={profilePic}
                    alt="profile pic"
                    className="profil-pic"
                  />
                </div>
              </Link>
            </>
          ) : (
            <>
            <Link to="/login">
              <div className="nav-item">Log in</div>
            </Link>
            <Link to="/register">
              <div className="primary-btn">Create account</div>
            </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
