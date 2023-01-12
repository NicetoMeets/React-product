import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
    limit: 10,

}

const pageSlice = createSlice({
    name: 'page',
    initialState,
})

export default configureStore({
    reducer: pageSlice.reducer,
})