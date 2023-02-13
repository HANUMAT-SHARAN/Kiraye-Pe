import { createStore,combineReducers,compose,Middleware } from 'redux';
import { authReducer } from './auth/authReducer';

const composeEnhancer=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||compose


const rootReducer=combineReducers({
    authManager:authReducer
})

export const store=createStore(rootReducer)
