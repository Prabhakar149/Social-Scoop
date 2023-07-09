import "../../Pages/commonStyle.css";
import Card from "../../Components/Card/Card";
import { useData } from "../../Contexts/dataContext";
import Loader from "../../Components/Loader/Loader";
import { useEffect } from "react";

const Explore = () => {
  const { allPosts, loader, setLoader, dark } = useData();

  useEffect(() => {
    window.scrollTo(0,0);
    setLoader(true);
    setTimeout(() => setLoader(false), 700);
  }, [setLoader]);

  return (
    <>
      {loader && <Loader />}
      <div className={`heading ${dark && "dark-background"}`}>
        <p className="page-heading">Explore</p>
      </div>

      {allPosts?.map((post) => (
        <div key={post._id} className={`cards ${dark && "dark-background-cards"}`}>
          <Card post={post} />
        </div>
      ))}
    </>
  );
};

export default Explore;
