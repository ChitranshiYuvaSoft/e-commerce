import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


interface LineChartData {

    sales : string;
    purchase : string;
    month : string;
}

interface InitialState {
  lineChartData: LineChartData[];
  isSuccess: boolean;
  isLoading: boolean;
  isError: boolean;
}

const initialState: InitialState = {
  lineChartData: [
    { sales: '4', purchase:'6', month:"March"},
    { sales:'8', purchase:'4', month:"June"},
    {sales: '6', purchase:'8', month:"January"},
  ],
  isSuccess: false,
  isLoading: false,
  isError: false,
};

const chartSlice = createSlice({
  name: "chart",
  initialState,
  reducers: {
    createChartValue : (state, action) => {
        console.log(action.payload, "chart slice")
        return {
            ...state,
            lineChartData : [...state.lineChartData, action.payload],
        }
    }
  },
  extraReducers: (builder) => {
    builder;
  },
});


export const {createChartValue} = chartSlice.actions;

export default chartSlice.reducer;
