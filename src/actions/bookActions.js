// ./src/actions/bookActions.js
// API URL

import Axios from 'axios';

const apiUrl = 'http://58bb6f69673bee120092eea5.mockapi.io/books';
// Sync Action
export const fetchBooksSuccess = (books) => {
  return {
    type: 'FETCH_BOOKS_SUCCESS',
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
    type: 'CREATE_BOOK_SUCCESS',
    book
  }
};

// ./src/actions/bookActions.js
// Sync Action
export const fetchBookByIdSuccess = (book) => {
  return {
    type: actionTypes.FETCH_BOOK_BY_ID_SUCCESS,
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
