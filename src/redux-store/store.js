import { configureStore } from "@reduxjs/toolkit";
import onBoardingReducer from "./slices/onBoarding";
import userReducer from "./slices/user";
import loadingReducer from "./slices/loading";

export const store = configureStore({
  reducer: {
    onBoarding: onBoardingReducer,
    user: userReducer,
    loading: loadingReducer,
  },
});
