import { applyMiddleware, createStore, Store } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";
import {composeWithDevTools} from "redux-devtools-extension";

export type RootState = ReturnType<typeof rootReducer>;

const store: Store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)) );

export default store;
