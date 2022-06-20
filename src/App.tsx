import React from 'react';

import {Provider} from "react-redux";
import store from "./store/store";

import "./global.scss"
import PageRouter from "./PageRouter";


function App() {

    return (
        <Provider store={store}>
            <PageRouter />
        </Provider>
    );
}

export default App;
