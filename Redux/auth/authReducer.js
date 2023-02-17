import {
  ADD_TO_CART,
  DECREASE_QUANTITY,
  DELETE_FROM_CART,
  INCREASE_QUANTITY,
  UPDATE_CART_ITEM,
} from "../cart/cartActionType";
import {
  ADD_IN_RECENTLY_WATCHED,
  AUTH_LOGIN,
  AUTH_LOGOUT,
  INC_COUNT,
} from "./authActionType";

const initialState = {
  currentUser: {
    name: "",
    email: "",
  },
  count: 0,
  isAuth: false,
  recentlyWatched: [],
  cart: [],
  totalPrice: 4,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_LOGIN: {
      return {
        ...state,
        currentUser: action.payload,
        isAuth: true,
      };
    }
    case INC_COUNT: {
      return {
        ...state,
        count: action.payload,
      };
    }
    case AUTH_LOGOUT: {
      return {
        ...state,
        currentUser: {
          name: "",
          email: "",
        },
        isAuth: false,
        recentlyWatched: [],
      };
    }
    case ADD_IN_RECENTLY_WATCHED: {
      return {
        ...state,
        recentlyWatched: [...state.recentlyWatched, action.payload],
      };
    }
    case ADD_TO_CART: {
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    }
    case DELETE_FROM_CART: {
      return {
        ...state,
        cart: state.cart.filter((el) => el.id !== action.payload),
      };
    }
    case INCREASE_QUANTITY: {
      return {
        ...state,
        totalPrice: state.totalPrice + action.payload,
      };
    }
    case DECREASE_QUANTITY: {
        return {
          ...state,
          totalPrice: state.totalPrice - action.payload,
        };
      }

    default: {
      return initialState;
    }
  }
};
