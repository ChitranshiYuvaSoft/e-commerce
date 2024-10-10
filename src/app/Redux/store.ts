"use client"

import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
import dataReducer from "./data/dataSlice";
export const store = () => {
  return configureStore({
    reducer: {
      auth: authReducer,
      data: dataReducer,
    },
  });
};
export type AppStore = ReturnType<typeof store>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
