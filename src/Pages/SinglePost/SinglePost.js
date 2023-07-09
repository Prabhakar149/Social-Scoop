import "./SinglePost.css";
import { useLocation, useNavigate, useParams } from "react-router";
import { useData } from "../../Contexts/dataContext";
import Card from "../../Components/Card/Card";
import { useEffect } from "react";
import Loader from "../../Components/Loader/Loader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft
} from "@fortawesome/free-solid-svg-icons"; 

const SinglePost = () => {
  const { allPosts, loader, setLoader, dark } = useData();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0,0);
    setLoader(true);
    setTimeout(() => setLoader(false), 1000);
  }, [setLoader]);

  const { postId } = useParams();
  const singlePost = allPosts?.find((post) => post?.id === postId);

  return (
    <>
      {loader && <Loader />}
      <FontAwesomeIcon icon={faArrowLeft} className="x-icon back-btn" onClick={()=>navigate(location?.state?.from?.pathname || "/")}/>
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
