import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import client from "../apollo-client";
import dataServices from "./dataService";

interface SingleUser{
    totalRecords : string;
    data : any;
}

interface InitialState {
  allUsers: SingleUser[];
  isSuccess: boolean;
  isLoading: boolean;
  isError: boolean;
}
const initialState: InitialState = {
  allUsers: [],
  isSuccess: false,
  isLoading: false,
  isError: false,
};

interface AllUsers {
  page: string;
  size: string;
}

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(users.pending, (state) => {
        state.isSuccess = false;
        state.isLoading = true;
      })
      .addCase(users.fulfilled, (state, action) => {
        console.log(action.payload, "dataSlice From")
        state.isSuccess = true;
        state.isLoading = false;
        state.allUsers = action.payload;
      })
      .addCase(users.rejected, (state, action: any) => {
        state.isSuccess = false;
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const users = createAsyncThunk(
  "ALL/USERS",
  async ({ page, size }: AllUsers) => {
    const response = await client.mutate({
      mutation: dataServices.ALL_USERS,
      variables: { page, size },
      // variables: { page : "1", size: "10" },
    });
    return response.data.users.data;
  }
);

export default dataSlice.reducer;
