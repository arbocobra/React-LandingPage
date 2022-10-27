import { createSlice } from '@reduxjs/toolkit';
import tagData from '../tagData.js';

const createTags = () => {
    const tagArray = [];
    do {
        const tagNum = Math.floor(Math.random() * tagData.length);
        const tag = tagData[tagNum]
        const name = tag.name
        let exists = tagArray.find(element => element.name == name);

        if (!exists) {
          tag.selected = false;
          tagArray.push(tag);
        }  
    } while (tagArray.length < 3);
    return tagArray
}

const imageTags = createTags();

export const tagSlice = createSlice(
  {
    name: 'tags',
    initialState: [],
    reducers: {
      loadTags: (state, action) => {
        if (!state.length) {
          imageTags.map(tag => state.push(tag))
        }
      },
      pickTag: (state, action) => {
        const selectedTag = action.payload.name;   
        const index = state.map(object => object.name).indexOf(selectedTag)
        state[index].selected = true;
      }
    }
  })

export const { loadTags, pickTag } = tagSlice.actions;
export const selectTags = (state) => {
  // console.log(TAG())
  // console.log(state.tags);
  return state.tags
};

export default tagSlice.reducer;

// 



// export const allMoviesSlice = createSlice(
//     {
//         name: 'allMovies',
//         initialState: [],
//         reducers: {
//             loadData: (state, action) => {
//                 if (!state.length) {
//                     movieData.map(movie => state.push(movie))
//                 }
//             }
//         }
//     }
// )

// export const {
//     loadData,
//     addFavorite
//  } = allMoviesSlice.actions;

// const selectAllMovies = (state) => state.allMovies

// export const selectFilteredAllMovies = (state) => {
//     const favoriteMovies = state.favoriteMovies;

//     if (favoriteMovies.length == 0) {
//         return selectAllMovies(state);
//     } else {
//         let allMovies = selectAllMovies(state);
//         for (const fav of favoriteMovies) {
//             allMovies = allMovies.filter(movie => movie.id !== fav.id);
//         }
//         return allMovies;
//     }
// }

// export default allMoviesSlice.reducer;