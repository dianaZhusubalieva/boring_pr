import { ActionCreator, AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../store";
import { getProducts } from "../../api/mainAPI";
import {
  fetchProductsError,
  fetchProductsRequest,
  fetchProductsSuccess,
} from "../actionCreators/contentAC";

const fetchProductsThunk: ActionCreator<
  ThunkAction<void, RootState, {}, AnyAction>
> = () => (dispatch) => {
  dispatch(fetchProductsRequest());
  getProducts()
    .then((response) => {
      dispatch(fetchProductsSuccess(response.data));
    })
    .catch((e) => {
      fetchProductsError(e.message);
    });
};

export default fetchProductsThunk;

// WITH ASYNC AWAIT
// const fetchFactSThunk: ActionCreator<ThunkAction<void,AppState, {}, AnyAction>> = () => {
//     return async(dispatch) =>{
//         try{
//             dispatch(fetchFactsRequest());
//             const response = await getFacts();
//             dispatch(fetchProductsSuccess(response.data));
//         }catch(e){
//             console.log(e);
//         }
//     }
// }
