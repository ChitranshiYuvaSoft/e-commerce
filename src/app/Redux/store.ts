"use client"

import { configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducer from "./auth/authSlice";
import dataReducer from "./data/dataSlice";
import coinReducer from "./coin/coinSlice";
import chartReducer from "./chart/chartSlice";
import rootReducer from "./combineReducer";
import persistStore from "redux-persist/es/persistStore";


const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const store = () => {
//   return configureStore({
//     reducer: persistedReducer,
//     middleware: (getDefaultMiddleware) =>
//       getDefaultMiddleware({
//         serializableCheck: false,
//       }),
//   });
// };


export const store = configureStore({reducer : persistedReducer});
export const persistor = persistStore(store);

export type AppStore = ReturnType<typeof store.getState>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = typeof store.dispatch;

