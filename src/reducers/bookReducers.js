// ./src/reducers/bookReducers.js
// For handling array of books

import {CREATE_BOOK_SUCCESS, FETCH_BOOKS_SUCCESS, FETCH_BOOK_BY_ID_SUCCESS, ADD_TO_CART_SUCCESS, FETCH_CART_SUCCESS } from '../actions/actionTypes';

export const booksReducer = (state = [], action) => {
  switch (action.type) {
    case CREATE_BOOK_SUCCESS:
        return [
          ...state,
          Object.assign({}, action.book)
        ];
    case FETCH_BOOKS_SUCCESS:
          return action.books;
    default:
          return state;
  }
};

// For handling a single book
export const bookReducer = (state = [], action) => {
  switch (action.type) {
    // Handle fetch by Id
    case FETCH_BOOK_BY_ID_SUCCESS:
      return action.book;
    default:
      return state;
  }
};
