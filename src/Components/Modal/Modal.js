import "./Modal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import {toast} from "react-toastify";
import { editPost, newPost } from "../../services/postService";
import { useAuth } from "../../Contexts/authContext";
import { useData } from "../../Contexts/dataContext";

const Modal = ({ setIsOpen, content, postId }) => {
  const { token } = useAuth();
  const { dispatch, trending, dark } = useData();
  const [postData, setPostData] = useState(content);

  const inputChangeHandler = (e) => {
    setPostData(e.target.value);
  };

  const postBtnClickHandler = () => {
    
    if(postData === undefined){
      toast.warning("Please give some content !")
    }
    else{
    newPost(postData, token, dispatch, trending);
    setIsOpen(false);
    toast.success("Successfully posted !");
    }
    
  };

  const editPostHandler = () => {
    editPost(postData, token, postId, dispatch, trending);
    setIsOpen(false);
    toast.success("Successfully updated !");
  };

  return (
    <>
      <div
        className="dark-bg"
        onClick={() => {
          setIsOpen(false);
        }}
      >
        {" "}
      </div>
      <div className={`modal-container ${dark && "dark-background"}`}>
        <div
          onClick={() => {
            setIsOpen(false);
          }}
          className="x-icon"
        >
          <FontAwesomeIcon icon={faX} />
        </div>

        <div>
          <textarea
            className="text-area"
            placeholder="What's on your mind"
            onChange={inputChangeHandler}
            defaultValue={content}
          >
          </textarea>
        </div>
        <button
          className="post-btn"
          onClick={content ? editPostHandler : postBtnClickHandler}
        >
          Post
        </button>
      </div>
    </>
  );
};

export default Modal;
