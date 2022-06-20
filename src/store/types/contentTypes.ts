import {InferValueTypes} from "./index";
import * as contentActions from "../actionCreators/contentAC"
import {Product} from "../../api/types/types";

export interface ContentState {
    readonly products: Product[];
    readonly foundProducts: Product[];
    readonly currentPosts : Product[];
}

export type ContentAction = ReturnType<InferValueTypes<typeof contentActions>>;
