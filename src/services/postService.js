
export const likePost = async (postId,token,dispatch,trending) =>{
    try{
        const response = await fetch(`/api/posts/like/${postId}`,{
            method : "POST",
            headers:{
                authorization: token
            }
        })
        const {posts} = await response.json()
        if(trending){
            dispatch({
                type:"ALL_POSTS",
                payload: posts.sort(
                    (a, b) => b.likes.likeCount - a.likes.likeCount
                  )
              })
        }else{
            dispatch({
                type:"ALL_POSTS",
                payload: [...posts].sort(
                    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
                  )
              })
        }
       
    }
    catch(err){
        console.error(err);
    }
}


export const disLikePost = async (postId,token,dispatch,trending) =>{
    try{
        const response = await fetch(`/api/posts/dislike/${postId}`,{
            method : "POST",
            headers:{
                authorization: token
            }
        })
        const {posts} = await response.json()
        if(trending){
            dispatch({
                type:"ALL_POSTS",
                payload: posts.sort(
                    (a, b) => b.likes.likeCount - a.likes.likeCount
                  )
              })
        }else{
            dispatch({
                type:"ALL_POSTS",
                payload: [...posts].sort(
                    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
                  )
              })
        }
    }
    catch(err){
        console.error(err);
    }
}

export const newPost = async (post,token,dispatch,trending) =>{

    const data = {
        postData: post
    }
    try{
        const response = await fetch("/api/posts",{
            method: "POST",
            headers:{
                authorization:token
            },
            body: JSON.stringify(data)
        })
        const {posts} = await response.json();
        if(trending){
            dispatch({
                type:"ALL_POSTS",
                payload: posts.sort(
                    (a, b) => b.likes.likeCount - a.likes.likeCount
                  )
              })
        }else{
            dispatch({
                type:"ALL_POSTS",
                payload: [...posts].sort(
                    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
                  )
              })
        }
    }catch(err){
        console.error(err);
    }
}


export const editPost = async (post,token,postId,dispatch,trending) => {
    const data = {
        postData: post
    }
    try{
        const response = await fetch(`/api/posts/edit/${postId}`,{
            method: "POST",
            headers:{
                authorization:token
            },
            body: JSON.stringify(data)
        })
        const {posts} = await response.json();
        if(trending){
            dispatch({
                type:"ALL_POSTS",
                payload: posts.sort(
                    (a, b) => b.likes.likeCount - a.likes.likeCount
                  )
              })
        }else{
            dispatch({
                type:"ALL_POSTS",
                payload: [...posts].sort(
                    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
                  )
              })
        }
    }catch(err){
        console.error(err);
    }
}

export const deletePost = async (token,postId,dispatch,trending) =>{
    try{
        const response = await fetch(`/api/posts/${postId}`,{
            method: "DELETE",
            headers : {
                authorization: token
            }
        })
        const {posts} = await response.json();
        if(trending){
            dispatch({
                type:"ALL_POSTS",
                payload: posts.sort(
                    (a, b) => b.likes.likeCount - a.likes.likeCount
                  )
              })
        }else{
            dispatch({
                type:"ALL_POSTS",
                payload: [...posts].sort(
                    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
                  )
              })
        }
    }catch(err){
        console.error(err);
    }
}
