import { ADD_IN_RECENTLY_WATCHED, AUTH_LOGIN, AUTH_LOGOUT, INC_COUNT } from "./authActionType";

export const increaseCount=(data)=>({
type:INC_COUNT,payload:data
})


export const setLoginedUser=(data)=>({
    type:AUTH_LOGIN,
    payload:data
})
export const logoutUser=()=>({
    type:AUTH_LOGOUT,
   
})
export const addInRecentlyWatched=(data)=>({
    type:ADD_IN_RECENTLY_WATCHED,
    payload:data

   
})