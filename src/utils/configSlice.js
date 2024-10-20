import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
    name: 'config',
    initialState: {
        language: "en",
        url: "landing"
    },
    reducers: {
        changeLanguage: (state,action) => {
            state.language = action.payload
        },
        changeUrl: (state,action) => {
            state.url = action.payload
        }
    }
})

export const { changeLanguage, changeUrl } = configSlice.actions

export default configSlice.reducer