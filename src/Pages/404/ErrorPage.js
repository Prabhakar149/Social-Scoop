import { useEffect } from "react";
import { useData } from "../../Contexts/dataContext";
import Loader from "../../Components/Loader/Loader";

const ErrorPage = () => {
  const { loader, setLoader } = useData();

  useEffect(() => {
    setLoader(true);
    setTimeout(() => setLoader(false), 1000);
  }, [setLoader]);

  return (
    <>
      {loader && <Loader />}
      <div className="heading">
        <p className="page-heading">
          Page Not Found <a href="/">Go to Home</a>
        </p>
      </div>
    </>
  );
};

export default ErrorPage;
