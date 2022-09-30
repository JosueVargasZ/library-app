import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/authorization/authSlice';
import booksReducer from '../features/books/booksSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    books: booksReducer
  },
});
