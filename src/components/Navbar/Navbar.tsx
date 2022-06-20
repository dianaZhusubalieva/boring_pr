import React, {useState} from "react";
import "./navbar.scss";
import {putFoundProducts} from "../../store/actionCreators/contentAC";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store/store";
import {Product} from "../../api/types/types";
import {Link} from "react-router-dom";
import {ALL_PRODUCTS, HOME} from "../../utils/urls";

const MainNavbar = () => {
  const [inputValue, setInputValue] = useState("");
  const products = useSelector<RootState, Product>(
    (state) => state.content.products
  );
  const dispatch = useDispatch();

  //!!!  SEARCH / FILTER

  const handleChange = () => {
    if (Array.isArray(products)) {
      let foundClothes = products.filter((product) => {
        let type = product.type.toLowerCase();
        return type.includes(inputValue);
      });
      dispatch(putFoundProducts(foundClothes));
      //then map this array of found products
    }
  };

  return (
    <>
      <header>
        <section>
          <div className="main-navbar-block">
            <div id="container">
              <div id="shopName">
                <Link to={HOME}>
                  <b>SHOP</b>LANE
                </Link>
              </div>
              <div id="collection">
                <div id="clothing">
                  <Link to={ALL_PRODUCTS}>PRODUCTS</Link>
                </div>
                <div id="accessories">
                  <a href="accessories.html"> NEW ARRIVALS </a>
                </div>
              </div>
              <div id="search">
                <input
                  type="text"
                  id="input"
                  name="searchBox"
                  placeholder="Search for Clothing and Accessories"
                  onChange={handleChange}
                />
              </div>
              <div id="user">
                <a href="cart.html">cart</a>
                <a href="./Navbar#">
                  {" "}
                  <i className="fas fa-user-circle userIcon"></i>{" "}
                </a>
              </div>
            </div>
          </div>
        </section>
      </header>
    </>
  );
};

export default MainNavbar;
