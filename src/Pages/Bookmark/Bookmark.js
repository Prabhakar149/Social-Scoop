import { useEffect } from "react";
import Card from "../../Components/Card/Card";
import { useData } from "../../Contexts/dataContext";
import Loader from "../../Components/Loader/Loader";

const Bookmark = () => {
  const { bookMarkedPost, allPosts, loader, setLoader, dark } = useData();

  const posts = bookMarkedPost.map((post) =>
    allPosts.find((p) => p._id === post._id)
  );

  useEffect(() => {
    window.scrollTo(0,0);
    setLoader(true);
    setTimeout(() => setLoader(false), 700);
  }, [setLoader]);

  return (
    <>
      {loader && <Loader />}
      <div className="bookmark-container">
        {posts.length === 0 ? (
          <div className={`heading ${dark && "dark-background"}`}>
            <p className="page-heading">
              You haven't bookmarked any post yet !
            </p>
          </div>
        ) : (
          <>
            <div className={`heading ${dark && "dark-background"}`}>
              <p className="page-heading">Bookmarked posts</p>
            </div>

            {posts?.map((post) => (
              <div key={post._id} className={`cards ${dark && "dark-background-cards"}`}>
                <Card post={post} />
              </div>
            ))}
          </>
        )}
      </div>
    </>
  );
};

export default Bookmark;
