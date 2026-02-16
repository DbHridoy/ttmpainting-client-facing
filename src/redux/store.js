
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "./slice/authSlice.js";
import { baseApi } from "./baseApi.js";

import { setupListeners } from "@reduxjs/toolkit/query";

const combinedReducer = combineReducers({
  auth: authReducer,
  [baseApi.reducerPath]: baseApi.reducer,
});

export const store = configureStore({
  reducer: combinedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

setupListeners(store.dispatch);
