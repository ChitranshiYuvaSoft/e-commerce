import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import client from "../apollo-client";
import authServices from "./authService";

interface UserData {
  email: string;
  password: string;
}

// interface User {
//   name: string;
//   email: string;
//   token: string;
// }
interface InitialState {
  user: any;
  isSuccess: boolean;
  isLoading: boolean;
  isError: boolean;
  message: string;
  token: string;
}

const initialState: InitialState = {
  user: {},
  isSuccess: false,
  isLoading: false,
  isError: false,
  message: "",
  token: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isSuccess = false;
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        console.log(action.payload, "auth token")
        state.isSuccess = true;
        state.isLoading = false;
        state.user = action.payload;
        console.log(state.user, "user data");
        state.token = action.payload.token;
        localStorage.setItem("name", state.user.name);
        localStorage.setItem("email", state.user.email);
        localStorage.setItem("token", state.user.token);
      })
      .addCase(login.rejected, (state, action: any) => {
        state.isSuccess = false;
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload.message;
      });
  },
});

// export const login = createAsyncThunk(
//   "LOGIN/USER",
//   async ({ email, password }: UserData) => {
//     const response = await client.mutate({
//       mutation: authServices.LOGIN_USER,
//       mutation: authServices.LOGIN_USER,
//       variables: { email, password },
//     });
//     return response.data.login;
//   }
// );

export const login = createAsyncThunk("LOGIN/USER", async({ email, password }: UserData) => {
  try {
    return await authServices.loginUser({email, password});
  } catch (error) {
    console.log(error);
  }
})

export default authSlice.reducer;
