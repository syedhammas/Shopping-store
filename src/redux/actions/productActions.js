import axios from "axios";
import { ActionTypes } from "../constants/action-types";

export const fetchProducts = async (dispatch) => {
  try {
    const response = await axios.get("https://fakestoreapi.com/products");
    dispatch({ 
      type: ActionTypes.FETCH_PRODUCTS, 
      payload: response.data 
    });
  } catch (error) {
    console.log("Error: ", error);
  }
};

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};

export const removeSelectedProduct = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};