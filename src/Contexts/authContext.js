import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router";
import {toast} from "react-toastify";

const authContext = createContext();

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  const localToken = JSON.parse(localStorage.getItem("login"));
  const localUser = JSON.parse(localStorage.getItem("user"));
  const [token, setToken] = useState(localToken?.token);
  const [user, setUser] = useState(localUser?.user);

  const loginUser = async (userName, userPassword) => {
    if (userName !== "" && userPassword !== "") {
      const credentials = {
        username: userName,
        password: userPassword,
      };

      try {
        const response = await fetch("/api/auth/login", {
          method: "POST",
          body: JSON.stringify(credentials),
        });
        const { foundUser, encodedToken } = await response.json();

        if (response.status === 200 || response.status === 201) {
          localStorage.setItem(
            "login",
            JSON.stringify({ token: encodedToken })
          );
          localStorage.setItem("user", JSON.stringify({ user: foundUser }));
          setToken(encodedToken);
          setUser(foundUser);
          // console.log(foundUser)
          navigate("/");
        } else {
          console.log(response.statusText);
        }
      } catch (err) {
        console.error(err);
      }
    }
  };

  const registerUser = async (
    userName,
    userPassword,
    userFirstName,
    userLastName,
    userAvatar
  ) => {
    if (userName && userPassword && userFirstName && userLastName) {
      const newUserCredentials = {
        username: userName,
        password: userPassword,
        firstName: userFirstName,
        lastName: userLastName,
        avatarUrl: userAvatar
      };
      try {
        const response = await fetch("/api/auth/signup", {
          method: "POST",
          body: JSON.stringify(newUserCredentials),
        });
        const { createdUser, encodedToken } = await response.json();

        if (response.status === 200 || response.status === 201) {
          localStorage.setItem(
            "register",
            JSON.stringify({ token: encodedToken })
          );
          localStorage.setItem("user", JSON.stringify({ user: createdUser }));
          setToken(encodedToken);
          setUser(createdUser);
          navigate("/");
        } else {
          if(response.status === 422){
            toast.warning("username already exists !");
          }else{
            toast.warning(response.statusText);
          }
          
        }
      } catch (err) {
        console.error(err);
      }
    } else {
      toast.warning("Please fill all the details !");
    }
  };

  const logoutUser = () => {
    localStorage.removeItem("login");
    localStorage.removeItem("user");
    setToken("");
    setUser("");
    navigate("/login");
  };

  return (
    <authContext.Provider
      value={{ loginUser, registerUser, logoutUser, user, setUser, token }}
    >
      {children}
    </authContext.Provider>
  );
};

const useAuth = () => useContext(authContext);

export { useAuth, AuthProvider };
