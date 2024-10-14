import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
import dataReducer from "./data/dataSlice";
import coinReducer from "./coin/coinSlice";
import chartReducer from "./chart/chartSlice";

const reducer = combineReducers({
  auth: authReducer,
  data: dataReducer,
  coin: coinReducer,
  chart: chartReducer,
});


export default reducer;