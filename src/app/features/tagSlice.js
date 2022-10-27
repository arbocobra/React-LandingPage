import { createSlice } from '@reduxjs/toolkit';
import tagData from '../tagData.js';

const TAGS = () => {
    const tagArray = [];
    do {
        const tagNum = Math.floor(Math.random() * tagData.length);
        const tag = tagData[tagNum].tag;
        const id = tagData[tagNum].id;
        let exists = tagArray.find(el => el[0] === tag);
        if (!exists) {
            tagArray.push([tag, id]);
        }  
    } while (tagArray.length < 3);
    return tagArray
    // const tagObject = tagArray.flatMap(item => ({tag: item[0], id: item[1], selected: false}));
    // return tagObject;
}

const initialState = TAGS.flatMap(tag => ({tag: tag[0], id: tag[1], selected: false}))

export const tagSlice = createSlice({
  name: 'tags',
  initialState: initialState,
  reducers: {
    chooseTag: (state, action) => {
      const id = action.payload.id;
      state.find(tag => tag.id === id).selected = true;
    }
  }
})

export const { chooseTag } = tagSlice.actions;
export const selectTags = (state) => state.tags;

export default tagSlice.reducer;