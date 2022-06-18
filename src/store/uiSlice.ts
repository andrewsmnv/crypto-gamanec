import { createSlice } from "@reduxjs/toolkit";

const initialUiState = {
  isDarkMode: false,
};
const uiSlice = createSlice({
  name: "ui",
  initialState: initialUiState,
  reducers: {
    switchMode(state) {
      state.isDarkMode = !state.isDarkMode;
    },
  },
});
export const uiSliceActions = uiSlice.actions;

export default uiSlice.reducer;
