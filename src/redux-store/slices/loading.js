import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  GET_USER: false,
  PAGE_LOADING:false,
};
export const loading = createSlice({
  name: "loading",
  initialState,
  reducers: {
    setLoading(state, action) {
      state[action.payload[0]] = action.payload[1];
    },
  },
});

export const { setLoading } = loading.actions;
export default loading.reducer;
