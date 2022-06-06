import "./navbar.css";
import image from "../../img/logo.png";
import profilePic from "../../img/Troll-face.png";
import { Link } from "react-router-dom";
import SearchBar from "../searchbar/SearchBar";
import SearchIcon from '@mui/icons-material/Search';

export default function Navbar() {
  let isUser = true;
  let isPhoneView = false;
  const handleRes = () => {
    if (window.innerWidth < 730) {
      isPhoneView = true;
      console.log("ppp");
    } else {
      isPhoneView = false;
    }
  };
  window.onresize = handleRes;
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
          {isUser ? (
            <>
              <Link to="/write">
                <div className="primary-btn create-post-btn">Create Post</div>
              </Link>
              <Link to='/login'>Log out</Link>
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
              <div className="nav-item">Log in</div>
              <div className="primary-btn">Create account</div>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
