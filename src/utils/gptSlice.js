import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: 'gpt',
    initialState: {
        error: null,
        movieNames: null,
        movieResults: null
    },
    reducers: {
        addGptMovieResult: (state, action) => {
            const { movieNames, movieResults } = action.payload;
            state.movieNames = movieNames;
            state.movieResults = movieResults;
        },
        showError: (state, action) => {
            state.error = action.payload;
        }
    }
})

export const { addGptMovieResult, showError } = gptSlice.actions

export default gptSlice.reducer