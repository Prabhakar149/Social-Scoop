import "./EditDeleteModal.css";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsisVertical,
  faPenToSquare,
  faTrash,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { deletePost } from "../../../services/postService";
import { useAuth } from "../../../Contexts/authContext";
import { useData } from "../../../Contexts/dataContext";
import Modal from "../../Modal/Modal";
import { useNavigate } from "react-router";

const EditDeleteModal = ({ postId, content, isSinglePost }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { token } = useAuth();
  const { dispatch, trending, dark } = useData();
  const navigate = useNavigate();

  const modalHandler = () => {
    setIsModalOpen(!isModalOpen);
  };

  const deletePostHandler = () => {
    setIsModalOpen(false);
    deletePost(token, postId, dispatch, trending);
    toast.error("Your post deleted !");
    if (isSinglePost) {
      navigate("/");
    }
  };

  return (
    <>
      <p className="dot-icon" onClick={modalHandler}>
        <FontAwesomeIcon className="icon" icon={faEllipsisVertical} />
      </p>

      {isModalOpen && (
        <>
          <div
            className="dark-bg"
            onClick={() => {
                setIsModalOpen(!isModalOpen);
              }}
          >
            {" "}
          </div>
          <div className={`modal ${dark && "dark-background"}`}>
            <FontAwesomeIcon
              icon={faX}
              className="edit-x-icon"
              onClick={() => {
                setIsModalOpen(!isModalOpen);
              }}
            />
            <p
              className="modal-body"
              onClick={() => {
                setIsOpen(!isOpen);
                setIsModalOpen(false);
              }}
            >
              <span>
                <FontAwesomeIcon icon={faPenToSquare} />
              </span>
              <span>Edit</span>
            </p>
            <p className="modal-body" onClick={deletePostHandler}>
              <span>
                <FontAwesomeIcon icon={faTrash} />
              </span>
              <span>Delete</span>
            </p>
          </div>
        </>
      )}
      {isOpen && (
        <Modal setIsOpen={setIsOpen} content={content} postId={postId} />
      )}
    </>
  );
};

export default EditDeleteModal;
