import { useNavigate } from "react-router";
import { useAuth } from "../../Contexts/authContext";
import { followUser } from "../../services/userService";

const Followbar = ({ person }) => {
  const { avatarUrl, firstName, lastName, _id } = person;
  const { user, setUser, token } = useAuth();
  const navigate = useNavigate();

  const followBtn = user?.following?.find((p) => p._id === _id)
    ? "Unfollow"
    : "Follow";

  const followBtnHandler = (userId) => {
    followUser(token, userId, setUser);
  };

  const userClickHandler = () =>{
    navigate(`/user/${_id}`)
  }

  return (
    <>
      {followBtn === "Follow" ? (
        <div className="suggested-user-details">
          <div onClick={userClickHandler}>
            <img
              src={avatarUrl}
              alt="user"
              className="suggested-user-img"
            ></img>
            <p className="follow-user">
              {firstName} {lastName}
            </p>
          </div>

          <button className="follow-btn" onClick={() => followBtnHandler(_id)}>
            {followBtn}
          </button>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Followbar;
