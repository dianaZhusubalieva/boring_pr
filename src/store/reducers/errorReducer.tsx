import React, {Reducer} from 'react';
import {Action} from "../types";
import {ErrorState} from "../types/loadingTypes";

const initialState : ErrorState = {

    FETCH_PRODUCTS: ""
}

const ErrorReducer : Reducer<ErrorState, Action<string,string>> = (state= initialState,action) => {
    const {type, payload} = action ;
    const matches = /(.*)_(REQUEST|ERROR)/.exec(type);

    if (!matches) return state;

    const [, requestName, requestState] = matches;

    return {
        ...state,
        [requestName]: requestState === "ERROR" ? payload : "",
    };
};

export default ErrorReducer;