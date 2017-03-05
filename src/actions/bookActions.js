// ./src/actions/bookActions.js
// API URL
import {CREATE_BOOK_SUCCESS, FETCH_BOOKS_SUCCESS, FETCH_BOOK_BY_ID_SUCCESS, ADD_TO_CART_SUCCESS, FETCH_CART_SUCCESS } from '../actions/actionTypes';

import Axios from 'axios';

const apiUrl = 'http://58bb6f69673bee120092eea5.mockapi.io/books';
// Sync Action
export const fetchBooksSuccess = (books) => {
  return {
    type: FETCH_BOOKS_SUCCESS,
    books
  }
};
//Async Action
export const fetchBooks = () => {
  // Returns a dispatcher function
  // that dispatches an action at a later time
  return (dispatch) => {
    // Returns a promise
    return Axios.get(apiUrl)
      .then(response => {
        // Dispatch another action
        // to consume data
        dispatch(fetchBooksSuccess(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const createBook = (book) => {
  return (dispatch) => {
    return Axios.post(apiUrl, book)
      .then(response => {
        // Dispatch a synchronous action
        // to handle data
        dispatch(createBookSuccess(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};

// ./src/actions/bookActions.js
export const createBookSuccess = (book) => {
  return {
    type: CREATE_BOOK_SUCCESS,
    book
  }
};

// ./src/actions/bookActions.js
// Sync Action
export const fetchBookByIdSuccess = (book) => {
  return {
    type: FETCH_BOOK_BY_ID_SUCCESS,
    book
  }
};
// Async Action
export const fetchBookById = (bookId) => {
  return (dispatch) => {
    return Axios.get(apiUrl + '/' +bookId)
      .then(response => {
        // Handle data with sync action
        dispatch(fetchBookByIdSuccess(response.data));
      })
      .catch(error => {
        throw(error);
      });
  };
};

// Sync add to cart
export const addToCartSuccess = (item) => {
  return {
    type: 'ADD_TO_CART_SUCCESS',
    item
  }
};
// Async add to cart
export const addToCart = (item) => {
  return (dispatch) => {
    return Axios.post('http://58bb6f69673bee120092eea5.mockapi.io/cart', item)
      .then(response => {
        dispatch(addToCartSuccess(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};
// Sync load cart
export const fetchCartSuccess = (items) => {
  return {
    type: 'FETCH_CART_SUCCESS',
    items
  }
};
// Async load cart
export const fetchCart = () => {
  return (dispatch) => {
    return Axios.get('http://58bb6f69673bee120092eea5.mockapi.io/cart')
      .then(response => {
        dispatch(fetchCartSuccess(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};
