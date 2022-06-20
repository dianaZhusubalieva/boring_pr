import {createAction} from "../../utils/storeUtils";
import {
   FETCH_PRODUCTS_ERROR,
   FETCH_PRODUCTS_REQUEST,
   FETCH_PRODUCTS_SUCCESS, PUT_CURRENT_POSTS_FOR_PAGINATION,
   PUT_FOUND_PRODUCTS
} from "../actionTypes/contentActionTypes";
import {Product} from "../../api/types/types";


export const fetchProductsRequest = ()=> createAction(FETCH_PRODUCTS_REQUEST, undefined)
export const fetchProductsSuccess = (products : Product)=> createAction(FETCH_PRODUCTS_SUCCESS, products)
export const fetchProductsError = (error : string)=> createAction(FETCH_PRODUCTS_ERROR, error)
export const putFoundProducts = (products: Product[])=> createAction(PUT_FOUND_PRODUCTS,products)
export const putCurrentPostsForPagination = (products: Product[])=> createAction(PUT_CURRENT_POSTS_FOR_PAGINATION,products)


