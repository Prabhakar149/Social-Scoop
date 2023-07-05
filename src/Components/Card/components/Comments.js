import { useAuth } from "../../../Contexts/authContext";
import { useData } from "../../../Contexts/dataContext";
import "./Comment.css";

const Comments = ({ comment, profileClickHandler }) => {
  const { text, username } = comment;
  const { allUsers } = useData();
  const { user } = useAuth();

  const commentUserDetails =
    username === user.username
      ? user
      : allUsers?.find((person) => person.username === username);

  return (
    <div className="comment-container">
      <img
        className="avtar comment-avtar"
        src={commentUserDetails?.avatarUrl}
        alt={commentUserDetails?.username}
        onClick={() => profileClickHandler(commentUserDetails)}
      ></img>
      <div onClick={() => profileClickHandler(commentUserDetails)}>
        <span className="name">
          {commentUserDetails?.firstName} {commentUserDetails?.lastName}
        </span>
        <span
          className="username"
        >
          @{username}
        </span>
      </div>

      <p className="comment-text">{text}</p>
    </div>
  );
};

export default Comments;
