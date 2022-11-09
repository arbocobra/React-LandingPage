import { configureStore } from '@reduxjs/toolkit';
import tagsReducer from './features/tagSlice';
import todoReducer from './features/todoSlice';
import quoteReducer from './features/quoteSlice';
import weatherReducer from './features/weatherSlice';

export default configureStore({
  reducer: {
    tags: tagsReducer,
    todos: todoReducer,
    quote: quoteReducer,
    weather: weatherReducer
  }
});