import { configureStore } from "@reduxjs/toolkit";
import getDataReducer from './apiSlice'
import {valutesApi} from "./api";

export const store = configureStore({
    reducer: {
        getData: getDataReducer,
        [valutesApi.reducerPath]: valutesApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(valutesApi.middleware)

})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch