import {FETCH_PRODUCTS} from "../actionTypes/contentActionTypes";


export type LoadingKeys = typeof FETCH_PRODUCTS;
export type ErrorKeys = LoadingKeys;

export type LoadingState = {
    readonly [K in LoadingKeys]: boolean;
};

export type ErrorState = {
    readonly [K in ErrorKeys]: string;
};
