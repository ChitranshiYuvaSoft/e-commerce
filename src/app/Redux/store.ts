"use client"

import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./auth/authSlice";
import dataReducer from "./data/dataSlice";
import coinReducer from "./coin/coinSlice";
import chartReducer from "./chart/chartSlice";


export const store = () => {
  return configureStore({
    reducer: {
      auth: authReducer,
      data: dataReducer,
      coin: coinReducer,
      chart: chartReducer,
    },
  });
};
export type AppStore = ReturnType<typeof store>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
