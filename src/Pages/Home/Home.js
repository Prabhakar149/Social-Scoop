import "./Home.css";
import { useEffect } from "react";
import Card from "../../Components/Card/Card";
import Filter from "../../Components/Filter/Filter";
import NewpostBox from "../../Components/NewpostBox/NewpostBox";
import { useAuth } from "../../Contexts/authContext";
import { useData } from "../../Contexts/dataContext";
import Loader from "../../Components/Loader/Loader";

const Home = () => {
  const { allPosts, loader, setLoader, dark } = useData();
  const { user } = useAuth();

  const userPosts = allPosts?.filter(
    (post) =>
      post?.username === user?.username ||
      user?.following?.find((el) => post?.username === el?.username)
  );

  useEffect(() => {
    window.scrollTo(0,0);
    setLoader(true);
    setTimeout(() => setLoader(false), 1000);
  }, [setLoader]);
  
  return (
    <>
      {loader && <Loader />}
      <div className={`heading ${dark && "dark-background"}`}>
        <p className="page-heading">Home</p>
      </div>

      <NewpostBox />
      <Filter />
      {userPosts.length === 0 ? (
        <p className="no-post-text">Follow some users to see feed</p>
      ) : (
        <>
          {userPosts?.map((post) => (
            <div key={post._id} className={`cards ${dark && "dark-background-cards"}`}>
              <Card post={post} />
            </div>
          ))}
        </>
      )}
    </>
  );
};

export default Home;
