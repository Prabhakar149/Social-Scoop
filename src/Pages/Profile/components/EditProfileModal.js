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

  const avatars = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR--L4LzR5aY8SMjeSy4NreBVChBQ71_KnRKw&usqp=CAU",
    "https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80",
    "https://seeklogo.com/images/P/pokeball-logo-DC23868CA1-seeklogo.com.png",
    "https://cdn.pixabay.com/photo/2020/05/11/15/38/tom-5158824_1280.png",
    "https://www.giantbomb.com/a/uploads/scale_small/0/6087/2437349-pikachu.png",
    "https://w0.peakpx.com/wallpaper/204/837/HD-wallpaper-gengar-ghost-pokemon.jpg",
    "https://d26oc3sg82pgk3.cloudfront.net/files/media/edit/image/47148/article_aligned%402x.jpg",
    "https://www.pngmart.com/files/22/Charizard-Pokemon-Download-PNG-Image.png",
  ];

  const updateAvtar = (newAvtar) =>{
    setUserData((prev) => ({
      ...prev,
      avatarUrl: newAvtar,
    }));
  }

  const updateImageHandler = (e) => {
    const selectedImg = e.target.files[0];
    const imgURL = URL.createObjectURL(selectedImg);
    setUserData((prev) => ({
      ...prev,
      avatarUrl: imgURL,
    }));
  };

  const updateBtnHandler = () => {
    editUser(userData, token, setUser);
    setIsOpenModal(false);
  };

  return (
    <>
      <div
        className="dark-bg"
        onClick={() => {
          setIsOpenModal(false);
        }}
      ></div>
      <div className={`edit-profile-container ${dark && "dark-background"}`}>
        <div
          className="x-icon"
          onClick={() => {
            setIsOpenModal(false);
          }}
        >
          <FontAwesomeIcon icon={faX} />
        </div>

        <div className="avatar-text">
          <p>Select Your Avatar</p>
        </div>

        <div className="avtar-images">
          {avatars.map((avatarURL, index) => (
            <div key={index} className="my-avtar" onClick={()=>updateAvtar(avatarURL)}>
              <img
                className="avtar-img"
                src={avatarURL}
                alt="avtar"
              ></img>
            </div>
          ))}
        </div>

        <div className="edit-profile">
          <p>Profile</p>
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
