import { AUTH_LOGIN, INC_COUNT } from "./authActionType"

const initialState={
   currentUser:{
    name:"",
    email:'',

   },
   count:0,
    isAuth:false,
}

export const authReducer=(state=initialState,action)=>{


    switch(action.type){
        case AUTH_LOGIN:{
            return {
                ...state,
                currentUser:action.payload,
                isAuth:true
            }
        }
        case INC_COUNT:{
            return {
                ...state,
                count:action.payload
            }
        }
         default :{

            return initialState
        }
    }
}