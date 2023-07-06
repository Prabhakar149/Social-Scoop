import "./EditProfileModal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX, faCamera } from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../../../Contexts/authContext";
import { useState } from "react";
import { editUser } from "../../../services/userService";
import { useData } from "../../../Contexts/dataContext";

const EditProfileModal = ({ setIsOpenModal, link, bio }) => {
  const { user, setUser, token } = useAuth();
  const { dark } = useData();
  const [userData, setUserData] = useState({
    avatarUrl: user.avatarUrl,
    website: user.website,
    bio: user.bio,
  });
  console.log(userData);

  const updateBtnHandler = () => {
    editUser(userData, token, setUser);
    setIsOpenModal(false);
  };

  const updateImageHandler = (e) => {
    const selectedImg = e.target.files[0];
    const imgURL = URL.createObjectURL(selectedImg);
    setUserData((prev) => ({
      ...prev,
      avatarUrl: imgURL,
    }));
  };

  console.log(userData);

  return (
    <>
      <div
        className="dark-bg"
        onClick={() => {
          setIsOpenModal(false);
        }}
      ></div>
      <div className={`modal-container ${dark && "dark-background"}`}>
        <div
          className="x-icon"
          onClick={() => {
            setIsOpenModal(false);
          }}
        >
          <FontAwesomeIcon icon={faX} />
        </div>

        <div className="edit-profile">
          <p>Avatar</p>
          <img
            className="edit-avtar"
            src={userData.avatarUrl}
            alt={user.username}
          ></img>
          <span className="camera-icon">
            <FontAwesomeIcon icon={faCamera} />
          </span>
          <span className="edit-image-input">
            <input
              type="file"
              accept="image/apng, image/avif, image/gif, image/jpeg, image/png, image/svg+xml, image/jpg,image/webp"
              onChange={updateImageHandler}
            ></input>
          </span>
        </div>

        <div className="edit-profile">
          <p>Link</p>
          <input
            type="text"
            className="edit-link"
            defaultValue={userData.website}
            name="website"
            onChange={(e) =>
              setUserData({ ...userData, website: e.target.value })
            }
          ></input>
        </div>

        <div className="edit-profile">
          <p>Bio</p>
          <textarea
            className="edit-bio"
            name="bio"
            defaultValue={userData.bio}
            onChange={(e) => setUserData({ ...userData, bio: e.target.value })}
          ></textarea>
        </div>

        <button className="update-btn" onClick={updateBtnHandler}>
          update
        </button>
      </div>
    </>
  );
};

export default EditProfileModal;
