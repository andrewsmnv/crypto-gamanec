import { createSlice } from "@reduxjs/toolkit";

const initialState: { notification: any } = {
  notification: {},
};

const notificationSlice = createSlice({
  name: "notification",
  initialState: initialState,
  reducers: {
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        message: action.payload.message,
      };
    },
    hideNotification(state) {
      state.notification = null;
    },
  },
});

export const notificationActions = notificationSlice.actions;

export default notificationSlice.reducer;
