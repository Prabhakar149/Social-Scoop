
export const editUser = async (data,token,setUser) =>{

    const userData = {
        userData:data
    }
    try{
        const response = await fetch("/api/users/edit",{
            method:"POST",
            headers:{
                authorization:token
            },
            body:JSON.stringify(userData)
        })
        const {user} = await response.json();
        setUser(user);
    }catch(err){
        console.error(err);
    }
}

export const followUser = async (token,userId,setUser) =>{
    try{
        const response = await fetch(`/api/users/follow/${userId}`,{
            method:"POST",
            headers:{
                authorization:token
            }
        });
        const res = await response.json();
        setUser(res.user);
    }catch(err){
        console.error(err)
    }
}

export const unfollowUser = async (token,userId,setUser) =>{
    try{
        const response = await fetch(`/api/users/unfollow/${userId}`,{
            method:"POST",
            headers:{
                authorization:token
            }
        });
        const res = await response.json();
        setUser(res.user);
    }catch(err){
        console.error(err)
    }
}