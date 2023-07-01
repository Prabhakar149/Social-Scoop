
export const initialState = {
    allPosts: [],
    allUsers: [],
    likedPost:[],
}

export const dataReducer = (state, action) =>{
    switch(action.type){
        case "ALL_POSTS":
            return{
                ...state,
                allPosts: action.payload
            }
        case "ALL_USERS":
            return{
                ...state,
                allUsers: action.payload
            }
        case "LIKE_POST":
            return{
                ...state,
                likedPost: [...state.likedPost, action.payload]
            }
        case "DISLIKE_POST":
            return{
                ...state,
                likedPost: [...state.likedPost].filter(id=>id !== action.payload)
            }
        default:
            return state
    }
}