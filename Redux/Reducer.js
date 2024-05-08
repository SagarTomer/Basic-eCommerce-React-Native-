import { PRODUCT_DATA, SET_CATEGORIES, SEARCH_PRODUCT, SET_CATEGORIES_LIST } from "./constants";

const initialState = {
  list: [],
  categories: [],
  searchResults: [],
  selectedCategory: null,
};

export const DataReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_DATA:
      return {
        ...state,
        list: [...state.list,...action.payload],
      };

    case SEARCH_PRODUCT:
      return {
        ...state,
        searchResults: action.payload,
      };

    case SET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };

    case SET_CATEGORIES_LIST:
      return {
        ...state,
        list: action.payload,
        selectedCategory: action.category,
      };

    default:
      return state;
  }
};
