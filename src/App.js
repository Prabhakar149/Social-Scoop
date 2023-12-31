import "./App.css";
import Mockman from "mockman-js";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Auth/Login/Login";
import Register from "./Pages/Auth/Register/Register";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Explore from "./Pages/Explore/Explore";
import Bookmark from "./Pages/Bookmark/Bookmark";
import Profile from "./Pages/Profile/Profile";
import Header from "./Components/Header/Header";
import { useAuth } from "./Contexts/authContext";
import Following from "./Components/Following/Following";
import UserDetail from "./Pages/UserDetail/UserDetail";
import SinglePost from "./Pages/SinglePost/SinglePost";
import ErrorPage from "./Pages/404/ErrorPage";
import { useData } from "./Contexts/dataContext";

function App() {
  const {token} = useAuth();
  const {dark} = useData()
  return (
    <>
      
      {token && <Header />}
      {token && <Following />}
      <div className={`app ${dark && "dark-background"}`}>
        <ToastContainer
          position="top-right"
          autoClose="1000"
          // limit="1"
          style={{ top: "5rem", right: "0rem" }}
        />
        
        <Routes>
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route
            path="/explore"
            element={
              <PrivateRoute>
                <Explore />
              </PrivateRoute>
            }
          />
          <Route
            path="/bookmark"
            element={
              <PrivateRoute>
                <Bookmark />
              </PrivateRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />
          <Route
            path="/user/:userId"
            element={
              <PrivateRoute>
                <UserDetail />
              </PrivateRoute>
            }
          />
          <Route
            path="/post/:postId"
            element={
              <PrivateRoute>
                <SinglePost/>
              </PrivateRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/mockman" element={<Mockman />} />
          <Route path="*" element={<ErrorPage/>} />
        </Routes>
      </div>
      
    </>
  );
}

export default App;
