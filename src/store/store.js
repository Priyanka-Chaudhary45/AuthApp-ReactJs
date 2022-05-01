// import { authReducer } from "../modules/auth";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    // loggedInUser: authReducer,
  },
});
