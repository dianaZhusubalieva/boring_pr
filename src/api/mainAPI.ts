import axios from "axios";
import { ProductValues } from "../pages/AddPage";
import fetchProductsThunk from "../store/middlewares/productMiddlewares";

const API = "http://localhost:8000/clothes";

export const getProducts = () => {
  return axios(API);
};

export const postProduct = async (product: ProductValues) => {
  try {
    await axios.post(API, product);
    fetchProductsThunk();
    console.log("successfully created");
  } catch (e) {
    console.log(e);
  }
};
