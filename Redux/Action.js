import { PRODUCT_DATA, SET_CATEGORIES, SEARCH_PRODUCT, SET_CATEGORIES_LIST } from "./constants";
import { FetchApiMethod } from "./fetchApi/fetchApi";

export const ProductList = (list) => ({
  type: PRODUCT_DATA,
  payload: list,
});

export const fetchDataFromProductList = (skip) => {
  return async (dispatch) => {
    try {
      const data = await FetchApiMethod(
        `https://dummyjson.com/products?limit=20&skip=${skip}`
      );
      dispatch(ProductList(data.products));
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };
};

export const searchProducts = (query) => {
  return async (dispatch) => {
    try {
      const response = await FetchApiMethod(
        `https://dummyjson.com/products/search?q=${query}`
      );
      dispatch({
        type: SEARCH_PRODUCT,
        payload: response.products,
      });
    } catch (error) {
      console.log("Error by searchProducts:", error);
    }
  };
};

export const fetchCategories = () => {
  return async (dispatch) => {
    try {
      const data = await FetchApiMethod(`https://dummyjson.com/products/categories`);
      dispatch({ type: SET_CATEGORIES, payload: data });
      // console.log("catcsfcatts",data)
    } catch (error) {
      console.log("Error fetching categories:", error);
    }
  };
};

export const categoriesList = (category) => {
  return async (dispatch) => {
    try {
      const categorydata = await FetchApiMethod(`https://dummyjson.com/products/category/${category}`);
      dispatch({ type: SET_CATEGORIES_LIST, payload: categorydata.products, });
    } catch (error) {
      console.log("Error by categoriesList:", error);
    }
  };
};
