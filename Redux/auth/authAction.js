import { AUTH_LOGIN, INC_COUNT } from "./authActionType";

export const increaseCount=(data)=>({
type:INC_COUNT,payload:data
})


export const setLoginedUser=(data)=>({
    type:AUTH_LOGIN,
    payload:data
})