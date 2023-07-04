import { useEffect } from "react";
import Card from "../../Components/Card/Card";
import { useData } from "../../Contexts/dataContext";
import Loader from "../../Components/Loader/Loader";



const Bookmark = () =>{

    const {bookMarkedPost,allPosts,loader,setLoader} = useData();

    const posts = bookMarkedPost.map(post=> allPosts.find(p=>p._id === post._id))

    useEffect(()=>{
        setLoader(true);
        setTimeout(()=>setLoader(false),500);
    },[setLoader])

    return(
        <>
            {loader && <Loader/>}
            {
                posts.length === 0 ? <p className="bookmark-txt">NO BOOKMARKED POST</p> :
                <>
                <p className="bookmark-txt">BOOKMARKED POSTS</p>
                {
                posts?.map(post =>(
                    <div key={post._id} className="cards">
                        <Card post={post}/>
                    </div>
                ))
                }
                </>
            }
        </>
    )
}

export default Bookmark;