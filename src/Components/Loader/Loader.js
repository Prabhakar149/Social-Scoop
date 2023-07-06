import "./Loader.css";
import loader from "../../assets/Spinner.svg";
import { useData } from "../../Contexts/dataContext";

const Loader = () => {
  const {dark} = useData();
  return (
    <div className={`loader-div ${dark && "dark-background"}`}>
      <img src={loader} className="loader" alt="loader"></img>
    </div>
  );
};

export default Loader;