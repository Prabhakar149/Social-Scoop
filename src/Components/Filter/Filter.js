import "./Filter.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSort, faFireFlameCurved } from "@fortawesome/free-solid-svg-icons";
import { useData } from "../../Contexts/dataContext";


const Filter = () => {
  const { allPosts, dispatch, trending, setTrending, setLoader} = useData();

 

  const latestPostsHandle = () => {
    setLoader(true);
    setTimeout(() => setLoader(false), 500);
    setTrending(false);
    const sortedPostsByDate = [...allPosts].sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );
    dispatch({
      type: "ALL_POSTS",
      payload: sortedPostsByDate,
    });
  };

  const trendingPostHandle = () => {
    setLoader(true);
    setTimeout(() => setLoader(false), 500);
    setTrending(true);
    const sortedPostsByLikes = [...allPosts].sort(
      (a, b) => b.likes.likeCount - a.likes.likeCount
    );
    dispatch({
      type: "ALL_POSTS",
      payload: sortedPostsByLikes,
    });
  };

  return (
    <div className="filter-container">
      <div
        className="filter-label"
        onClick={latestPostsHandle}
        style={{ color: trending ? "" : "var(--secondary-color)" }}
      >
        <FontAwesomeIcon icon={faSort} />
        <span>Latest</span>
      </div>

      <div
        className="filter-label"
        onClick={trendingPostHandle}
        style={{ color: trending ? "var(--secondary-color)" : "" }}
      >
        <FontAwesomeIcon icon={faFireFlameCurved} />
        <span>Trending</span>
      </div>
    </div>
  );
};

export default Filter;
