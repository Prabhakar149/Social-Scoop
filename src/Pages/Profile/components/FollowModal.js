import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router";
import { unfollowUser } from "../../../services/userService";
import { useAuth } from "../../../Contexts/authContext";
import { toast } from "react-toastify";

const FollowModal = ({ setIsFollowModal, user }) => {
  const navigate = useNavigate();
  const { setUser, token } = useAuth();

  const clickHandler = (id) => {
    navigate(`/user/${id}`);
    setIsFollowModal(false);
  };

  const unFollowBtnHandler = (userId, name) => {
    unfollowUser(token, userId, setUser);
    toast.error("You unfollowed," + name);
  };

  return (
    <>
      <div
        className="dark-bg"
        onClick={() => {
          setIsFollowModal(false);
        }}
      ></div>

      <div className="follow-modal">
        <div
          className="x-icon"
          onClick={() => {
            setIsFollowModal(false);
          }}
        >
          <FontAwesomeIcon icon={faX} />
        </div>
        <div className="scroll-container">
          {user?.following.length === 0 ? (
            <p style={{ color: "gray", textAlign: "center" }}>
              You don't Follow anyone !
            </p>
          ) : (
            <>
              <p style={{ color: "gray", textAlign: "center" }}>
                You Follow below users !
              </p>
              {user?.following?.map((person) => (
                <div key={person._id}>
                  <div className="suggested-user-details">
                    <div onClick={() => clickHandler(person._id)}>
                      <img
                        src={person.avatarUrl}
                        alt="user"
                        className="suggested-user-img"
                      ></img>
                      <p className="follow-user">
                        {person.firstName} {person.lastName}
                      </p>
                    </div>
                    <button
                      className="follow-btn"
                      onClick={() =>
                        unFollowBtnHandler(person._id, person.firstName)
                      }
                    >
                      Unfollow
                    </button>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default FollowModal;
