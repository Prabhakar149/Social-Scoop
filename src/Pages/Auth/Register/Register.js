import "../../Auth/auth.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../../../Contexts/authContext";
import { toast } from "react-toastify";
import { useData } from "../../../Contexts/dataContext";
import logo from "../../../assets/social-scoop-logo1.png";

const Register = () => {
  const navigate = useNavigate();
  const { registerUser } = useAuth();
  const { setLoader } = useData();

  const [registerDetails, setRegisterDetails] = useState({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    avatarUrl:
      "https://res.cloudinary.com/dlni6frrw/image/upload/v1688453302/avatar1_kgypvo.png",
  });

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setRegisterDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const registerBtnHandler = () => {
    if (
      registerDetails.username &&
      registerDetails.password &&
      registerDetails.firstName &&
      registerDetails.lastName
    ) {
      toast.success("Successfully registered !");
      window.scrollTo(0,0);
      setLoader(true);
      setTimeout(() => setLoader(false), 1000);
      
      registerUser(
        registerDetails.username,
        registerDetails.password,
        registerDetails.firstName,
        registerDetails.lastName,
        registerDetails.avatarUrl
      );
      
    } else {
      toast.warning("Please fill all the details !");
    }
  };

  return (
    <div className="main-conatiner">
      <div className="auth-container register-auth-container">
        <div className="auth-heads">
          <img src={logo} alt="logo" className="logo auth-logo"></img>
          <h3 className="auth-heading">Sign up</h3>
        </div>

        <form className="auth-input" onSubmit={(e) => e.preventDefault()}>
          <div className="auth-div">
            <label>First name</label>
            <input
              type="text"
              placeholder="Test"
              value={registerDetails.firstName}
              name="firstName"
              autoComplete="off"
              onChange={inputChangeHandler}
              required
            ></input>
          </div>
          <div className="auth-div">
            <label>Last name</label>
            <input
              type="text"
              placeholder="User"
              value={registerDetails.lastName}
              name="lastName"
              autoComplete="off"
              onChange={inputChangeHandler}
              required
            ></input>
          </div>
          <div className="auth-div">
            <label>User Name</label>
            <input
              type="text"
              placeholder="test123"
              value={registerDetails.username}
              name="username"
              autoComplete="off"
              onChange={inputChangeHandler}
              required
            ></input>
          </div>
          <div className="auth-div">
            <label>Password</label>
            <input
              type="password"
              placeholder="******"
              value={registerDetails.password}
              name="password"
              autoComplete="off"
              onChange={inputChangeHandler}
              required
            ></input>
          </div>
          <div className="auth-btn">
            <button onClick={registerBtnHandler}>Register</button>
          </div>
          <div className="auth-text">
            <span onClick={() => navigate("/login")}>
              Already have an account? <FontAwesomeIcon icon={faChevronRight} />
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
