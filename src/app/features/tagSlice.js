import { createSlice } from '@reduxjs/toolkit';
import tagData from '../tagData.js';

const createTags = () => {
    const tagArray = [];
    do {
        const tagNum = Math.floor(Math.random() * tagData.length);
        const tag = tagData[tagNum]
        const name = tag.name
        let exists = tagArray.find(element => element.name === name);

        if (!exists) {
          tag.selected = false;
          tagArray.push(tag);
        }  
    } while (tagArray.length < 4);
    return tagArray
}

const imageTags = createTags();

export const tagSlice = createSlice(
  {
    name: 'tags',
    initialState: [],
    reducers: {
      loadTags: (state) => {
        if (!state.length) {
          imageTags.map(tag => state.push(tag))
        }
      },
      pickTag: (state, action) => {
        const selectedTag = action.payload.name;   
        const index = state.map(object => object.name).indexOf(selectedTag)
        state[index].selected = true;
      },
      reload: (state) => {
        return state.filter(tag => tag.selected === false);
      }
    }
  })

export const { loadTags, pickTag, reload } = tagSlice.actions;
export const selectTags = (state) => {
  return state.tags
};

export default tagSlice.reducer;