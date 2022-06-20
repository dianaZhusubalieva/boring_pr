import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Product } from "../../api/types/types";
import { RootState } from "../../store/store";
import { putCurrentPostsForPagination } from "../../store/actionCreators/contentAC";
import { Pagination } from "react-bootstrap";
import "./componentsStyles.scss";

const MyPagination = () => {
  const dispatch = useDispatch();
  const products = useSelector<RootState, Product[]>(
    (state) => state.content.products
  );
  const [currentPage, setCurrentPage] = useState(1);
  const numberOfLastPost = currentPage * 8;
  const numberOfFirstPost = numberOfLastPost - 8;
  const numberOfLastPage = Math.ceil(products.length / 8);

  const currentPosts = useMemo(
    () => products.slice(numberOfFirstPost, numberOfLastPost),
    [products, currentPage]
  );
  const pageNumbers = [];
  const handlePage = (newPage: number) => {
    setCurrentPage(newPage);
  };

  useEffect(() => {
    dispatch(putCurrentPostsForPagination(currentPosts));
  }, [dispatch, currentPosts]);

  for (let i = 1; i <= Math.ceil(products.length / 8); i++) {
    pageNumbers.push(i);
  }

  return (
    <Pagination
      className="pagination-block"
      style={{ display: "flex", justifyContent: "center" }}
    >
      <Pagination.First
        onClick={() => {
          handlePage(1);
        }}
      />
      <Pagination.Prev
        onClick={() => {
          currentPage !== 1 && handlePage(currentPage - 1);
        }}
      />
      {pageNumbers.map((page) => (
        <Pagination.Item
          className={`pagination-btn ${
            currentPage === page && "pagination-btn__active"
          } `}
          onClick={() => {
            handlePage(page);
          }}
        >
          {page}
        </Pagination.Item>
      ))}
      <Pagination.Next
        onClick={() => {
          currentPage !== 3 && handlePage(currentPage + 1);
        }}
      />
      <Pagination.Last
        onClick={() => {
          handlePage(numberOfLastPage);
        }}
      />
    </Pagination>
  );
};

export default MyPagination;
