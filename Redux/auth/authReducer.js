import { AUTH_LOGIN } from "./authActionType"

const initialState={
   currentUser:{
    name:"",
    email:'',

   },
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
         default :{

            return initialState
        }
    }
}