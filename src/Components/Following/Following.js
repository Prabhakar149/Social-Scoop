import { useAuth } from "../../Contexts/authContext";
import { useData } from "../../Contexts/dataContext";
import Followbar from "./Followbar";
import "./Following.css";

const Following = () => {
  const { allUsers } = useData();
  const { user } = useAuth();

  const suggestedUsers = allUsers?.filter(
    (person) => person?._id !== user?._id
  );

  return (
    <div className="following-container">
      <p className="followBar-head">Suggested Users</p>
      <hr />
      {suggestedUsers.length === user?.following.length ? (
        <div className="no-suggest-txt">No suggestions</div>
      ) : (
        <div className="scroll-container">
          {suggestedUsers.map((person) => (
            <div key={person._id}>
              <Followbar person={person} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Following;
