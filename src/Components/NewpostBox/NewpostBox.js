
import { useState } from "react";
import { useAuth } from "../../Contexts/authContext";
import "./NewpostBox.css";
import Modal from "../Modal/Modal";

const NewpostBox = () => {
  const { user } = useAuth();
  const [isOpen,setIsOpen] = useState(false);

  const newPostModalClickHandler = () =>{
    setIsOpen(true)
  }

  return (
    <>
      <div className="newPost-container" onClick={newPostModalClickHandler}>
        <img
          className="user-img"
          src={user?.avatarUrl}
          alt={user?.username}
        ></img>
        <p className="newPost-text">What's on your mind, {user?.firstName} ?</p>
        <p className="newPost-btn">+</p>
      </div>

      {
        isOpen && <Modal setIsOpen={setIsOpen}/>
      }
     
    </>
  );
};

export default NewpostBox;
