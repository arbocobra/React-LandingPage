import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const loadQuote = createAsyncThunk(
    'quote/loadQuote',
    async () => {
        const response = await fetch('https://api.quotable.io/random');
        const data = await response.json();
        return data;
    }
)

const sliceOptions = {
    name: 'quote',
    initialState: {
        content: {},
        isLoading: false,
        hasError: false
    },
    reducers: {},
    extraReducers: {
        [loadQuote.pending]: (state, action) => {
            state.isLoading = true;
            state.hasError = false;
        },
        [loadQuote.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.hasError = false;
            state.content = {text: action.payload.content, author: action.payload.author}
        },
        [loadQuote.rejected]: (state, action) => {
            state.isLoading = false;
            state.hasError = true;
        }
    }
}

export const quoteSlice = createSlice(sliceOptions);
export const selectQuote = (state) => state.quote.content;
export default quoteSlice.reducer;