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
import { disLikePost, likePost } from "../../services/postService";
import EditDeleteModal from "./components/EditDeleteModal";


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
  const { allUsers,likedPost, dispatch, trending } = useData();
  const { user, token } = useAuth();

  // const userDetails = allUsers?.find((person) => person.username === username);

  const userDetails = username === user.username ? user : allUsers?.find((person) => person.username === username)

  const likedPostColor = likedPost?.find(p=> p === _id) ? "red" : "gray"

  const likeBtnHandler = () => {
    
    if (likedPostColor === "red") {
      disLikePost(_id, token, dispatch, trending);
      toast.warning("You disLiked this post !");
      dispatch({
        type:"DISLIKE_POST",
        payload: _id
      })
    } else {
      likePost(_id, token, dispatch, trending);
      toast.success("You liked this post !");
      dispatch({
        type:"LIKE_POST",
        payload: _id
      })
    }
    
  };

  return (
    <>
      <div className="card">
        <img
          className="avtar"
          src={userDetails.avatarUrl}
          alt={userDetails?.username}
        ></img>
        <div>
          <span className="name">
            {userDetails?.firstName} {userDetails?.lastName}
          </span>
          <span className="username">@{username}</span>
          {user.username === username && (
            <EditDeleteModal postId={_id}  content={content}/>
          )}
        </div>
        <p className="date">
          {day}/{month}/{year} {hour}:{minutes}
        </p>

        <p className="content">{content}</p>

        <div className="card-icons">
          <span onClick={likeBtnHandler}>
            <FontAwesomeIcon
              icon={faHeart}
              style={{ color: likedPostColor }}
            />
            <span className="count">{likeCount}</span>
          </span>
          <span>
            <FontAwesomeIcon icon={faComment} />
            <span className="count">{comments?.length}</span>
          </span>
          <span>
            <FontAwesomeIcon icon={faBookmark} />
          </span>
        </div>
      </div>
    </>
  );
};

export default Card;
