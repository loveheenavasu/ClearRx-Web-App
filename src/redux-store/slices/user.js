import { createSlice, current } from "@reduxjs/toolkit";
const initialState = {
  data: [],
  loading: false,
};
export const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLoading(state, action) {
      return {
        ...state,
        loading: action.payload,
      };
    },
    getUser(state, action) {
      state.data = action.payload;
    },
  },
});

export const { setLoading, getUser } = user.actions;
export default user.reducer;
