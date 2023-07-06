import "./Profile.css";
import "../commonStyle.css";
import { useData } from "../../Contexts/dataContext";
import { useAuth } from "../../Contexts/authContext";
import Card from "../../Components/Card/Card";
import { useEffect, useState } from "react";
import EditProfileModal from "./components/EditProfileModal";
import Loader from "../../Components/Loader/Loader";
import FollowModal from "./components/FollowModal";
import NewpostBox from "../../Components/NewpostBox/NewpostBox";

const Profile = () => {
  const [isModalOpen, setIsOpenModal] = useState(false);
  const [isFollowModal, setIsFollowModal] = useState(false);
  const { allPosts, loader, setLoader, dark } = useData();
  const { user } = useAuth();

  const userPosts = allPosts?.filter((post) => post.username === user.username);

  useEffect(() => {
    window.scrollTo(0,0);
    setLoader(true);
    setTimeout(() => setLoader(false), 500);
  }, [setLoader]);

  return (
    <>
      {loader && <Loader />}
      <div className={`heading ${dark && "dark-background"}`}>
        <p className="page-heading">My Profile</p>
      </div>
      <div className="profile-container">
        <img
          className="profile-avtar"
          src={user?.avatarUrl}
          alt={user?.username}
        ></img>

        <div className="profile-details">
          <p className="profile-name">
            <span>
              {" "}
              {user?.firstName} {user?.lastName}
            </span>
            <span className="edit-btn">
              <button
                onClick={() => {
                  setIsOpenModal(true);
                }}
              >
                Edit
              </button>
            </span>
          </p>
          <p className="profile-username">@{user.username}</p>
          <p className="user-details">{user.bio}</p>
          <p className="user-details user-profile-details">
            <span>{userPosts?.length} Posts</span>
            <span>0 Followers</span>
            <span
              className="following"
              onClick={() => setIsFollowModal(!isFollowModal)}
            >
              {user?.following.length} Following
            </span>
          </p>
          <a href={user?.website} target="_isBlank" className="user-link">
            {user.website}
          </a>
        </div>
      </div>

      <NewpostBox />

      {isModalOpen && (
        <EditProfileModal
          setIsOpenModal={setIsOpenModal}
          link={user.website}
          bio={user.bio}
        />
      )}

      {isFollowModal && (
        <>
          <FollowModal setIsFollowModal={setIsFollowModal} user={user} />
        </>
      )}

      {userPosts?.map((post) => (
        <div key={post._id} className={`cards ${dark && "dark-background-cards"}`}>
          <Card post={post} />
        </div>
      ))}
    </>
  );
};

export default Profile;
