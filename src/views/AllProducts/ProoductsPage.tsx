import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import ProductCard from "../../components/common/ProductCard";
import PageWrapper from "../../components/PageWrapper";
import { Product } from "../../api/types/types";
import "./ProductsPage.scss";
import { putFoundProducts } from "../../store/actionCreators/contentAC";
import Pagination from "../../components/common/Pagination";
import fetchProductsThunk from "../../store/middlewares/productMiddlewares";

const ProductsPage = () => {
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState("");
  const [filteredClothes, setFilteredClothes] = useState<any>([]);

  const products = useSelector<RootState, any[]>(
    (state) => state.content?.products
  );
  const productsAfterSearch = useSelector<RootState, any[]>(
    (state) => state.content?.foundProducts
  );
  const currentPostsForPagination = useSelector<RootState, Product[]>(
    (state) => state.content?.currentPosts
  );

  useEffect(() => {
    // @ts-ignore
    dispatch(fetchProductsThunk());
  }, [dispatch,filteredClothes]);

  useEffect(() => {
    if (Array.isArray(products)) {
      let filteredProducts = products.filter((product) => {
        let type = product.type.toLowerCase();
        return type.includes(inputValue);
      });
      setFilteredClothes(filteredProducts);
      dispatch(putFoundProducts(filteredProducts));
    }
  }, [inputValue]);

  return (
    <PageWrapper>
      <div className="main-block">
        {/* filter block*/}
        <div className="cntr">
          <label htmlFor="opt1" className="radio">
            <input
              type="radio"
              name="rdo"
              id="opt1"
              className="hidden"
              onClick={() => {
                setInputValue("tops");
              }}
            />
            <span className="label"></span>tops
          </label>

          <label htmlFor="opt2" className="radio">
            <input
              type="radio"
              name="rdo"
              id="opt2"
              className="hidden"
              onClick={() => {
                setInputValue("jacket");
              }}
            />
            <span className="label"></span>jacket
          </label>

          <label htmlFor="opt3" className="radio">
            <input
              type="radio"
              name="rdo"
              id="opt3"
              className="hidden"
              onClick={() => {
                setInputValue("pants");
              }}
            />
            <span className="label"></span>pants
          </label>

          <label htmlFor="opt4" className="radio">
            <input
              type="radio"
              name="rdo"
              id="opt4"
              className="hidden"
              onClick={() => {
                setInputValue("");
              }}
            />
            <span className="label"></span>else
          </label>
        </div>
        {/*!!!*/}

        {products ? (
          <div className="cards-wrapper">
            {!!productsAfterSearch.length ? (
              productsAfterSearch.map((product: Product) => (
                <ProductCard product={product} key={product.id} />
              ))
            ) : currentPostsForPagination ? (
              currentPostsForPagination.map((product: Product) => {
                return <ProductCard product={product} key={product.id} />;
              })
            ) : (
              <h3>o posts for pagination</h3>
            )}
          </div>
        ) : (
          <div>no products</div>
        )}
      </div>
      <Pagination />
    </PageWrapper>
  );
};

export default ProductsPage;
