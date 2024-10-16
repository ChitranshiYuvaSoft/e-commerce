import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import client from "../apollo-client";
import authServices from "./authService";

interface UserData {
  email: string;
  password: string;
}

interface RegisterUser {
  name: string;
  email: string;
  password: string;
}

interface verifyData {
  emailVerificationTOken: string;
  id: string;
}
interface InitialState {
  user: any;
  registerUser: any;
  verificationMessage: string;
  isSuccess: boolean;
  isLoading: boolean;
  isError: boolean;
  message: string;
  token: string;
}

const initialState: InitialState = {
  user: {},
  registerUser: {},
  verificationMessage: "",
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
        state.isSuccess = true;
        state.isLoading = false;
        state.user = action.payload;

        localStorage.setItem("token", action.payload?.token);
        state.token = action.payload?.token;
      })
      .addCase(login.rejected, (state, action: PayloadAction<any>) => {
        state.isSuccess = false;
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload.message;
      })

      .addCase(register.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
      })
      .addCase(register.fulfilled, (state, action: PayloadAction<{}>) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.registerUser = action.payload;
      })
      .addCase(register.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload.message;
      })

      .addCase(emailVerification.pending, (state, action) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
      })
      .addCase(emailVerification.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.verificationMessage = action.payload;
        state.isError = false;
      })
      .addCase(
        emailVerification.rejected,
        (state, action: PayloadAction<any>) => {
          state.isLoading = false;
          state.isSuccess = false;
          state.isError = action.payload;
        }
      );
  },
});

export const login = createAsyncThunk(
  "LOGIN/USER",
  async ({ email, password }: UserData) => {
    try {
      return await authServices.loginUser({ email, password });
    } catch (error) {
      console.log(error);
    }
  }
);

export const register = createAsyncThunk(
  "REGISTER/USER",
  async ({ name, email, password }: RegisterUser) => {
    try {
      return await authServices.registerUser({ name, email, password });
    } catch (error) {
      console.log(error);
    }
  }
);

export const emailVerification = createAsyncThunk(
  "EMAIL/VERIFICATION",
  async (data: verifyData) => {
    try {
      return await authServices.verification(data);
    } catch (error) {
      console.log(error);
    }
  }
);

export default authSlice.reducer;
