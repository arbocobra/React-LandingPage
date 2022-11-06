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
        const selectedTag = action.payload.id;
        const index = state.map(object => object.id).indexOf(selectedTag);

        state[index].selected = true;
      },
      reselect: (state, action) => {
        const selectedTag = action.payload.id;
        const index = state.map(object => object.id).indexOf(selectedTag);
        state.forEach((tag, i) => {
          tag.selected = (i === index) ? true : false;
        });

      }
      // reload: (state) => {
      //   state.map(tag => {
      //     if ()
      //   })
      //   const reloadTags = state.filter(tag => tag.selected === false);
      //   console.log(reloadTags);
      //   return reloadTags;
      // }
    }
  })

// export const { loadTags, pickTag, reload } = tagSlice.actions;
export const { loadTags, pickTag, reselect } = tagSlice.actions;
export const selectTags = (state) => {
  return state.tags
};

export default tagSlice.reducer;