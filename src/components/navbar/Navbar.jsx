import "./navbar.css";
import image from "../../img/logo.png";
import profilePic from "../../img/Troll-face.png";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import LunchDiningIcon from "@mui/icons-material/LunchDining";

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
          <div className="nav-icon-container">
            <LunchDiningIcon className="nav-icon" />
          </div>
          <div className="nav-icon">
            <img className="logo" src={image} alt="logo" />
          </div>
          <div className="nav-search-container">
            <form action="#" className="nav-search-form">
              <input
                type="text"
                name="search"
                id="search"
                className="search"
                placeholder="Search..."
              />
              <button type="submit" className="search-submit-btn">
                <SearchIcon className="nav-icon" />
              </button>
            </form>
          </div>
        </div>

        <div className="right">
          {/* IF THE USER IS LOGGED IN */}

          {isUser ? (
            <>
              <div className="primary-btn">Create Post</div>
              <div className="nav-icon-container">
                <NotificationsNoneIcon className="nav-icon" />
              </div>
              <div className="profile-icon">
                <img
                  src={profilePic}
                  alt="profile pic"
                  className="profil-pic"
                />
              </div>
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
