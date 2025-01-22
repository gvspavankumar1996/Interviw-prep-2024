import React, { useEffect, useReducer } from "react";
import axios from "axios";
import "./index.css";
import { cartReducer } from "./reducers/cartReducer";
import Products from "./Products";
import Cart from "./Cart";

const ShoppingCart = () => {
  const [state, dispatch] = useReducer(cartReducer, {
    cart: [],
    products: [],
  });
  const fetchProducts = async () => {
    const { data } = await axios.get("https://dummyjson.com/products");
    dispatch({ type: "ADD_PRODUCTS", payload: data?.products });
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div style={{ display: "flex" }}>
      <Products state={state} dispatch={dispatch} />
      <Cart state={state} dispatch={dispatch} />
    </div>
  );
};

export default ShoppingCart;
