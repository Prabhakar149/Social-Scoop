import "./Header.css";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/social-scoop-logo1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faCompass,
  faBookmark,
  faRightFromBracket,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../../Contexts/authContext";
import { useData } from "../../Contexts/dataContext";

const Header = () => {
  const { user, logoutUser } = useAuth();
  const {dark,setDark} = useData()
  const navigate = useNavigate();

  const customStyle = ({ isActive }) => {
    return {
      color: isActive ? "gray" : "var(--secondary-color)",
    };
  };

  return (
    <div className={`header ${dark && "dark-background"}`}>
      <div className="header-left" onClick={() => navigate("/")}>
        <img src={logo} alt="logo" className="logo"></img>
      </div>

      <div className="header-right">
        <NavLink to="/" style={customStyle}>
          <FontAwesomeIcon icon={faHouse} className="icon" title="Home" />
        </NavLink>
        <NavLink to="/explore" style={customStyle}>
          <FontAwesomeIcon icon={faCompass} className="icon" title="Explore" />
        </NavLink>
        <NavLink to="/bookmark" style={customStyle}>
          <FontAwesomeIcon
            icon={faBookmark}
            className="icon"
            title="Bookmark"
          />
        </NavLink>

        <NavLink style={customStyle}>
          <span onClick={()=>{setDark(!dark)}}>
            <FontAwesomeIcon
              icon={faSun}
              className="icon theme-icon"
              title="Theme"
            />
          </span>
        </NavLink>

        <NavLink
          onClick={logoutUser}
          style={{ color: "var(--secondary-color)" }}
        >
          <FontAwesomeIcon
            icon={faRightFromBracket}
            className="icon"
            title="Log out"
          />
        </NavLink>

        <div
          className="profile"
          onClick={() => {
            navigate("/profile");
          }}
        >
          <img src={user?.avatarUrl} alt="profile-img"></img>
          <p>{user?.firstName}</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
