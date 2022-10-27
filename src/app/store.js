// import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import tagsReducer from './features/tagSlice'

export default configureStore({
  reducer: {
    tags: tagsReducer
  }
});