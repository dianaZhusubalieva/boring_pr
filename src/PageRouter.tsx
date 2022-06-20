import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AddPage from "./pages/AddPage";
import ProductsPage from "./pages/AllProducts/ProoductsPage";

const PageRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add" element={<AddPage />} />
        <Route path="/all_products" element={<ProductsPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default PageRouter;
