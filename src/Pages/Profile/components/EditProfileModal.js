import "./EditProfileModal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX, faCamera } from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../../../Contexts/authContext";
import { useState } from "react";
import { editUser } from "../../../services/userService";

const EditProfileModal = ({ setIsOpenModal, link, bio }) => {
  const { user, setUser, token } = useAuth();
  const [userData, setUserData] = useState("");
  const [imageLoader, setImageLoader] = useState(false);

  const updateBtnHandler = () => {
    editUser(userData, token, setUser);
    setIsOpenModal(false);
  };

  const updateImageHandler = async (img) => {
    try {
      const data = new FormData();
      data.append("file", img);
      data.append("upload_preset", "xaywyfck");

      setImageLoader(true)
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/dlni6frrw/image/upload",
        {
          method: "POST",
          body: data,
        }
      );
      const { url } = await res.json();
      setImageLoader(false)
      setUser({ ...user, avatarUrl: url });
      setUserData({ ...userData, avatarUrl: url });
      
    } catch (err) {
      console.error("why:", err);
    }
  };

  return (
    <>
      <div
        className="dark-bg"
        onClick={() => {
          setIsOpenModal(false);
        }}
      ></div>
      <div className="modal-container">
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
          {imageLoader ? (
            <p>Updating..</p>
          ) : (
            <>
              <img
                className="edit-avtar"
                src={user.avatarUrl}
                alt={user.username}
              ></img>
              <span className="camera-icon">
                <FontAwesomeIcon icon={faCamera} />
              </span>
              <span className="edit-image-input">
                <input
                  type="file"
                  accept="image/apng, image/avif, image/gif, image/jpeg, image/png, image/svg+xml, image/jpg,image/webp"
                  onChange={(e) => updateImageHandler(e.target.files[0])}
                ></input>
              </span>
            </>
          )}
        </div>

        <div className="edit-profile">
          <p>Link</p>
          <input
            type="text"
            className="edit-link"
            defaultValue={link}
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
            defaultValue={bio}
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
