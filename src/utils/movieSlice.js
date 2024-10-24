import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: 'movie',
    initialState: {
        playMovie: null,
        trailerVideo: null,
        nowPlayingMovies: null,
        popularMovies: null,
        topRatedMovies: null,
        upcomingMovies: null
    },
    reducers: {
        addPlayMovie: (state,action) => {
            state.playMovie = action.payload
        },
        addTrailerVideo: (state,action) => {
            state.trailerVideo = action.payload
        },
        addNowPlayingMovies: (state,action) => {
            state.nowPlayingMovies = action.payload
        },
        addPopularMovies: (state,action) => {
            state.popularMovies = action.payload
        },
        addTopRatedMovies: (state,action) => {
            state.topRatedMovies = action.payload
        },
        addUpcomingMovies: (state,action) => {
            state.upcomingMovies = action.payload
        }
    }
})

export const { addPlayMovie, addTrailerVideo, addNowPlayingMovies, addPopularMovies, addTopRatedMovies, addUpcomingMovies } = movieSlice.actions

export default movieSlice.reducer