import { INC_COUNT } from "./authActionType";

export const increaseCount=(data)=>({
type:INC_COUNT,payload:data
})