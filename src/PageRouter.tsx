import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./views/HomePage";
import AddPage from "./views/AddPage";
import ProductsPage from "./views/AllProducts/ProoductsPage";
import PageNotFound from "./views/page_not_found/PageNotFound";
import * as urls from "./urls";
import FormToTest from "./views/FormToTest";

const PageRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={urls.HOME} element={<HomePage />} />
        <Route path={urls.ADD_PRODUCT} element={<AddPage />} />
        <Route path={urls.PRODUCTS} element={<ProductsPage />} />
        <Route path={"*"} element={<PageNotFound />} />
        <Route path={urls.FOR_TESTS} element={<FormToTest />} />
      </Routes>
    </BrowserRouter>
  );
};

export default PageRouter;
