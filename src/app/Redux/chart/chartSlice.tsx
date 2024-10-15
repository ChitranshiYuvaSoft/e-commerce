import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface LineChartData {
  id: string;
  sales: string;
  purchase: string;
  month: string;
}

interface InitialState {
  lineChartData: LineChartData[];
  pieChartData: Number[];
  isSuccess: boolean;
  isLoading: boolean;
  isError: boolean;
  editChartData: {};
  existingMonth: string;
}

const initialState: InitialState = {
  lineChartData: [
    { id: "1", sales: "4", purchase: "6", month: "March" },
    { id: "2", sales: "8", purchase: "4", month: "June" },
    { id: "3", sales: "6", purchase: "8", month: "January" },
  ],
  pieChartData: [15000, 10000, 5000],
  isSuccess: false,
  isLoading: false,
  isError: false,
  editChartData: { chartData: {}, isEdit: false },
  existingMonth: "",
};

const chartSlice = createSlice({
  name: "chart",
  initialState,
  reducers: {
    createChartValue: (state, action) => {
      console.log(action.payload, "chart slice");

      const find = state.lineChartData.find(
        (item) => item.month === action.payload.month
      );

      if (find) {
        find.sales = action.payload.sales;
        find.purchase = action.payload.purchase;
      } else {
        state.lineChartData.push(action.payload);
      }
      // return {
      //   ...state,
      //   lineChartData: [action.payload, ...state.lineChartData],
      // };
    },
    removeChartValue: (state, action) => {
      console.log(action.payload);
      const index = action.payload;
      const data = [...state.lineChartData];
      data.splice(index, 1);
      console.log(data, "slice");
      return {
        ...state,
        lineChartData: data,
      };
    },
    editChartValue: (state, action) => {
      return {
        ...state,
        editChartData: { chartData: action.payload, isEdit: true },
      };
    },
  },
  extraReducers: (builder) => {
    builder;
  },
});

export const { createChartValue, removeChartValue, editChartValue } =
  chartSlice.actions;

export default chartSlice.reducer;
