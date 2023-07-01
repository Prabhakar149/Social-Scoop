import "../../Auth/auth.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../../../Contexts/authContext";

const Register = () => {
  const navigate = useNavigate();
  const { registerUser } = useAuth();

  const [registerDetails, setRegisterDetails] = useState({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
  });

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setRegisterDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const registerBtnHandler = () => {
    if ( registerDetails.username && registerDetails.password && registerDetails.firstName &&registerDetails.lastName
    ) {
      registerUser(
        registerDetails.username,
        registerDetails.password,
        registerDetails.firstName,
        registerDetails.lastName
      );
    } else {
      alert("Please fill all the details !");
    }
  };

  return (
    <div className="auth-container register-auth-container">
      <div>
        <h2 className="auth-heading">Social Scoop</h2>
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
  );
};

export default Register;
