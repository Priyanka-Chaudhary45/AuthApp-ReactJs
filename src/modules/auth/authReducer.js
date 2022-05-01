import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import ApiHelper from "../../utils/ApiHelper";
import { ApiStatus } from "../../constants/appConstants";

const initialState = {
  status: ApiStatus.idle,
  user: null,
  authError: {},
};

// Login Reducer
export const loginUser = createAsyncThunk(
  "auth/login",
  async ({ email, password, rememberPassword }) => {
    try {
      const { data } = await ApiHelper.post("/rest/user/login", {
        email,
        password,
      });

      if (data.error) {
        return data;
      } else {
        return { ...data.data, rememberPassword };
      }
    } catch (e) {
      return { error: true, message: "Something Went wrong!!" };
    }
  }
);

// Initialize Reducer
export const initializeAuth = createAsyncThunk("auth/initialize", async () => {
  const { data } = await ApiHelper.get("/rest/user/initialise", {});
  return { ...data.data };
});

// Authentication Slice
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // When Login is success
    const loginFulfilled = (state, action) => {
      if (action.payload.error) {
        state.status = ApiStatus.error;
        state.authError = {
          message: action.payload.message + " Please try again.",
        };
      } else {
        state.status = ApiStatus.success;
        state.user = action.payload;
        state.authError = {};

        if (action.payload.rememberPassword) {
          localStorage.setItem(
            "loggedInUser",
            JSON.stringify(action.payload.user.token)
          );
        }
      }
    };

    builder
      // Login Pending action
      .addCase(loginUser.pending, (state) => {
        state.status = ApiStatus.loading;
      })
      // Login Success action
      .addCase(loginUser.fulfilled, (state, action) => {
        loginFulfilled(state, action);
      })
      // Login Error action
      .addCase(loginUser.rejected, (state) => {
        state.status = ApiStatus.error;
        state.authError = {
          message: "Something went wrong!! Please try again later!!",
        };
      });
  },
});

export default authSlice.reducer;
