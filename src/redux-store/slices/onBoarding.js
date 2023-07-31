import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  loading: false,
};
export const onBoarding = createSlice({
  name: "onBoarding",
  initialState,
  reducers: {
    setLoading(state, action) {
      return {
        ...state,
        loading: action.payload,
      };
    },
  },
});

export const { setLoading } = onBoarding.actions;
export default onBoarding.reducer;
