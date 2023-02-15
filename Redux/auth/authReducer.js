import { ADD_IN_RECENTLY_WATCHED, AUTH_LOGIN, AUTH_LOGOUT, INC_COUNT } from "./authActionType"

const initialState={
   currentUser:{
    name:"",
    email:'',

   },
   count:0,
    isAuth:false,
    recentlyWatched:[]
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
        case AUTH_LOGOUT:{
            return {
                ...state,
                currentUser:{
                    name:"",
                    email:'',
                
                   },
                isAuth:false
            }
        }
        case ADD_IN_RECENTLY_WATCHED:{
            return {
                ...state,
                recentlyWatched:[...state.recentlyWatched,action.payload]
            }
        }
         default :{

            return initialState
        }
    }
}