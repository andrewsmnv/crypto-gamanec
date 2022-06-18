import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import coinsListSlice from "./coinsListSlice";
import notificationSlice from "./notificationSlice";
import uiSlice from "./uiSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    coinsList: coinsListSlice,
    notification: notificationSlice,
    ui: uiSlice,
  },
});

export default store;
