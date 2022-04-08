import { Actiontypes } from "../constants/action-types";

const initialState = {
  products: [],
  liked: [],
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actiontypes.SET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };

    case Actiontypes.ADD_TO_LIKED:
      return {
        ...state,
        liked: [...state.liked, action.payload],
      };
    case Actiontypes.REMOVE_FROM_LIKES:
      return {
        ...state,
        liked: [...state.liked.filter((item) => item.image !== action.payload)],
      };
    default:
      return state;
  }
};
