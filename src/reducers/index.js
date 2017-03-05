// ./src/reducers/index.js
import { combineReducers } from 'redux';
import { booksReducer, bookReducer } from './bookReducers'
import cart from './cartReducers';

export default combineReducers({
  books: booksReducer,
  book: bookReducer,
  cart
});
