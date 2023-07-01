import "../../Pages/commonStyle.css";
import Card from "../../Components/Card/Card";
import { useData } from "../../Contexts/dataContext";
import Loader from "../../Components/Loader/Loader";
import { useEffect } from "react";



const Explore = () =>{

    const { allPosts,loader,setLoader } = useData();

    useEffect(()=>{
        setLoader(true);
        setTimeout(()=>setLoader(false),500);
    },[setLoader])

    return(
        <>
        {loader && <Loader/>}
            {
                allPosts?.map(post =>(
                    <div key={post._id} className="cards">
                        <Card post={post}/>
                    </div>
                ))
            }
        </>
    )
}

export default Explore;