import {
  FETCH_PRODUCTS_SUCCESS,
  PUT_CURRENT_POSTS_FOR_PAGINATION,
  PUT_FOUND_PRODUCTS
} from "../actionTypes/contentActionTypes";
import {Reducer} from "react";
import {ContentAction, ContentState} from "../types/contentTypes";

export const initialState: ContentState = {
  products: [],
  foundProducts: [],
  currentPosts: [],
};

const contentReducer: Reducer<any, ContentAction> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload,
      };
    case PUT_FOUND_PRODUCTS:
      return{
        ...state,
        foundProducts: action.payload,
      }

    case PUT_CURRENT_POSTS_FOR_PAGINATION:
      return{
        ...state,
        currentPosts: action.payload,
      }
    default:
      return state;
  }
};

export default contentReducer;
