import React, { useEffect } from "react";
import "./home.scss";
import { useDispatch } from "react-redux";
import fetchProductsThunk from "../store/middlewares/productMiddlewares";
import PageWrapper from "../components/PageWrapper";
import MainPageContent from "../components/common/MainPageContent";

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // @ts-ignore
    dispatch(fetchProductsThunk());
  }, [dispatch]);

  return (
    <>
      <PageWrapper>
        <MainPageContent />
      </PageWrapper>
    </>
  );
};

export default HomePage;
