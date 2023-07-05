import { useData } from "../../Contexts/dataContext";
import "./Card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { toast } from "react-toastify";
import {
  faHeart,
  faComment,
  faBookmark,
} from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../../Contexts/authContext";
import {
  addPostToBookmark,
  disLikePost,
  likePost,
  removePostFromBookmark,
} from "../../services/postService";
import EditDeleteModal from "./components/EditDeleteModal";
import { useNavigate } from "react-router";


const Card = ({ post }) => {
  const {
    _id,
    content,
    likes: { likeCount },
    comments,
    username,
    createdAt,
  } = post;

  const date = new Date(createdAt);
  const [month, day, year, hour, minutes] = [
    date.getMonth(),
    date.getDate(),
    date.getFullYear(),
    date.getHours(),
    date.getMinutes(),
  ];
  const { allUsers, likedPost, bookMarkedPost, dispatch, trending, setLoader } = useData();
  const { user, token } = useAuth();
  const navigate = useNavigate();

  // const userDetails = allUsers?.find((person) => person.username === username);

  const userDetails =
    username === user.username
      ? user
      : allUsers?.find((person) => person.username === username);

  const likedPostColor = likedPost?.find((p) => p === _id) ? "red" : "";

  const bookmarkPostColor = bookMarkedPost?.find((p) => p._id === _id)
    ? "var(--secondary-color)"
    : "";

  const profileClickHandler = (userDetail) =>{
    setLoader(true);
    setTimeout(()=>setLoader(false),500);
    if(userDetail._id === user._id){
      navigate("/profile");
    }else{
      navigate(`/user/${userDetail._id}`);
    }
  }

  const likeBtnHandler = () => {
    if (likedPostColor === "red") {
      disLikePost(_id, token, dispatch, trending);
      toast.warning("You disLiked this post !");
      dispatch({
        type: "DISLIKE_POST",
        payload: _id,
      });
    } else {
      likePost(_id, token, dispatch, trending);
      toast.success("You liked this post !");
      dispatch({
        type: "LIKE_POST",
        payload: _id,
      });
    }
  };

  const bookmarkBtnHandler = () => {
    if (bookmarkPostColor === "var(--secondary-color)") {
      removePostFromBookmark(_id, token, dispatch);
      toast.warning("Removed this post from bookmark!");   
    } else {
      addPostToBookmark(_id, token, dispatch);
      toast.success("Added this post to bookmark!");
    }
  };

  return (
    <>
      <div className="card">
        <img
          className="avtar"
          src={userDetails.avatarUrl}
          alt={userDetails?.username}
          onClick={()=>profileClickHandler(userDetails)}
        ></img>
        <div>
          <span className="name" onClick={()=>profileClickHandler(userDetails)}>
            {userDetails?.firstName} {userDetails?.lastName}
          </span>
          <span className="username" onClick={()=>profileClickHandler(userDetails)}>@{username}</span>
          {user.username === username && (
            <EditDeleteModal postId={_id} content={content} />
          )}
        </div>
        <p className="date">
          {day}/{month}/{year} {hour}:{minutes}
        </p>

        <p className="content">{content}</p>

        <div className="card-icons">
          <span onClick={likeBtnHandler} className="icons">
            <FontAwesomeIcon icon={faHeart} style={{ color: likedPostColor }} />
            <span className="count">{likeCount}</span>
          </span>
          <span className="icons">
            <FontAwesomeIcon icon={faComment} />
            <span className="count">{comments?.length}</span>
          </span>
          <span onClick={bookmarkBtnHandler} className="icons">
            <FontAwesomeIcon
              icon={faBookmark}
              style={{ color: bookmarkPostColor }}
            />
          </span>
        </div>
      </div>
    </>
  );
};

export default Card;
