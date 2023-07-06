import { useParams } from "react-router";
import { useData } from "../../Contexts/dataContext";
import Card from "../../Components/Card/Card";
import { useEffect } from "react";
import Loader from "../../Components/Loader/Loader";

const SinglePost = () => {
  const { allPosts, loader, setLoader, dark } = useData();

  useEffect(() => {
    window.scrollTo(0,0);
    setLoader(true);
    setTimeout(() => setLoader(false), 1500);
  }, [setLoader]);

  const { postId } = useParams();
  const singlePost = allPosts?.find((post) => post?._id === postId);

  return (
    <>
      {loader && <Loader />}
      <div className={`heading ${dark && "dark-background"}`}>
        <p className="page-heading">Post</p>
      </div>

      <div className="cards">
        {singlePost && <Card post={singlePost} isSinglePost />}
      </div>
    </>
  );
};

export default SinglePost;
