import { createContext, useContext, useEffect, useReducer, useState } from "react";
import { dataReducer, initialState } from "../Reducers/dataReducer";


const dataContext = createContext();

const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dataReducer, initialState);
  const [trending,setTrending] = useState(false);
  const [loader,setLoader] = useState(false);
  const [dark,setDark] = useState(false);

  const fetchAllPosts = async () => {

    try {
      const response = await fetch("/api/posts");
      const { posts } = await response.json();
      dispatch({
        type:"ALL_POSTS",
        payload: [...posts].sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        )
      })
    } catch (err) {
      console.error(err);
    }
  };

   const getAllUsers = async () =>{
    try{
      const response = await fetch("/api/users");
      const {users} = await response.json();
      dispatch({
        type:"ALL_USERS",
        payload: users
      })
    }catch(err){
      console.error(err);
    }
    
  }


  useEffect(() => {
    fetchAllPosts();
    getAllUsers();
  }, []);

  // console.log(state);

  return (
    <dataContext.Provider
      value={{
        allPosts: state.allPosts,
        allUsers: state.allUsers,
        likedPost:state.likedPost,
        bookMarkedPost:state.bookMarkedPost,
        dispatch,
        trending,
        setTrending,
        loader,
        setLoader,
        dark,
        setDark
      }}
    >
      {children}
    </dataContext.Provider>
  );
};

const useData = () => useContext(dataContext);

export { useData, DataProvider };
