import "./Header.css";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/social-scoop-logo4.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faCompass,
  faBookmark,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../../Contexts/authContext";

const Header = () => {
  const { user, logoutUser } = useAuth();
  const navigate = useNavigate();

  const customStyle = ({ isActive }) => {
    return {
      color: isActive ? "gray" : "var(--secondary-color)",
    };
  };

  return (
    <div className="header">
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
