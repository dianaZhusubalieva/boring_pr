import {useDispatch} from "react-redux";
import Middlewares from "../store/middlewares/allMIddlewares";
import {bindActionCreators} from "redux";


export const useActions=  ()=>{
    const dispatch = useDispatch()
    return bindActionCreators(Middlewares,dispatch)
}

//hook useAction makes code more simple, to call action creator without dispatch
// for example in userList.ts