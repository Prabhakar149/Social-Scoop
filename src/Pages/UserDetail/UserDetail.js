import { useParams } from "react-router";
import "./UserDetail.css";
import { useData } from "../../Contexts/dataContext";
import Card from "../../Components/Card/Card";
import Loader from "../../Components/Loader/Loader";
import { useAuth } from "../../Contexts/authContext";
import { followUser, unfollowUser } from "../../services/userService";
import { toast } from "react-toastify";
import { useEffect } from "react";

const UserDetail = () => {
  const { userId } = useParams();
  const { allPosts, allUsers, loader, setLoader, dark } = useData();
  const { user, setUser, token } = useAuth();

  const userProfile = allUsers?.find((person) => person._id === userId);
  const userPosts = allPosts?.filter(
    (post) => post?.username === userProfile?.username
  );

  const followBtn = user?.following?.find((f) => f._id === userId)
    ? "Unfollow"
    : "Follow";
  const followers = followBtn === "Unfollow" ? 1 : 0;

  useEffect(() => {
    window.scrollTo(0,0);
    setLoader(true);
    setTimeout(() => setLoader(false), 700);
  }, [setLoader]);

  const followBtnHandler = (name) => {
    if (followBtn === "Follow") {
      followUser(token, userId, setUser);
      toast.success("You followed," + name);
    } else {
      unfollowUser(token, userId, setUser);
      toast.error("You unfollowed," + name);
    }
  };

  return (
    <>
      {loader && <Loader />}
      <div className={`heading ${dark && "dark-background"}`}>
        <p className="page-heading">User Profile</p>
      </div>
      <div className="profile-container">
        <img
          className="profile-avtar"
          src={userProfile?.avatarUrl}
          alt={userProfile?.username}
        ></img>

        <div className="profile-details">
          <p className="profile-name">
            <span>
              {" "}
              {userProfile?.firstName} {userProfile?.lastName}
            </span>
            <span className="edit-btn">
              <button onClick={() => followBtnHandler(userProfile.firstName)}>
                {followBtn}
              </button>
            </span>
          </p>
          <p className="profile-username">@{userProfile?.username}</p>
          <p className="user-details">{userProfile?.bio}</p>
          <p className="user-details user-profile-details">
            <span>{userPosts.length} Posts</span>
            <span>{followers} Followers</span>
            <span>{userProfile?.following.length} Following</span>
          </p>
          <a
            href={userProfile?.website}
            target="_isBlank"
            className="user-link"
          >
            {userProfile?.website}
          </a>
        </div>
      </div>

      {userPosts?.map((post) => (
        <div key={post._id} className={`cards ${dark && "dark-background-cards"}`}>
          <Card post={post} />
        </div>
      ))}
    </>
  );
};
export default UserDetail;
