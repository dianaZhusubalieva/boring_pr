import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AddPage from "./pages/AddPage";
import ProductsPage from "./pages/AllProducts/ProoductsPage";
import PageNotFound from "./pages/page_not_found/PageNotFound";
import * as urls from "./urls";

const PageRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={urls.HOME} element={<HomePage />} />
        <Route path={urls.ADD_PRODUCT} element={<AddPage />} />
        <Route path={urls.PRODUCTS} element={<ProductsPage />} />
        <Route path={"*"} element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default PageRouter;
