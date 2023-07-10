import "../../Auth/auth.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../../../Contexts/authContext";
import { toast } from "react-toastify";
import { useData } from "../../../Contexts/dataContext";
import logo from "../../../assets/social-scoop-logo1.png";

const Login = () => {
  const navigate = useNavigate();
  const { loginUser } = useAuth();
  const { setLoader } = useData();

  const [loginDetails, setLoginDtails] = useState({
    userName: "",
    password: "",
  });

  useEffect(() => {
    loginUser(loginDetails.userName, loginDetails.password);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loginDetails.userName, loginDetails.password]);

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setLoginDtails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const loginButtonHandle = () => {
    toast.success("Successfully logged In !");
    window.scrollTo(0,0);
    setLoader(true);
    setTimeout(() => setLoader(false), 1000);
    setLoginDtails((prev) => {
      return {
        ...prev,
        userName: "adarshbalak",
        password: "adarshBalak123",
      };
    });
  };

  return (
    <div className="main-conatiner">
      <div className="auth-container">
        <div className="auth-heads">
          <img src={logo} alt="logo" className="logo auth-logo"></img>
          <h3 className="auth-heading">Sign in</h3>
        </div>

        <form className="auth-input" onSubmit={(e) => e.preventDefault()}>
          <div className="auth-div">
            <label>User Name</label>
            <input
              type="text"
              placeholder="test123"
              value={loginDetails.userName}
              name="userName"
              autoComplete="off"
              required
              onChange={inputChangeHandler}
            ></input>
          </div>
          <div className="auth-div">
            <label>Password</label>
            <input
              type="password"
              placeholder="********"
              value={loginDetails.password}
              name="password"
              required
              onChange={inputChangeHandler}
            ></input>
          </div>

          <div className="auth-btn">
            <button onClick={loginButtonHandle}>
              Login with Test Credentials
            </button>
          </div>
          <div className="auth-text">
            <span onClick={() => navigate("/register")}>
              Create new account <FontAwesomeIcon icon={faChevronRight} />
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
