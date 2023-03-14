import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  countCallsDays: 3,
};

const tableCallsSlice = createSlice({
  name: "filterCallsDays",
  initialState,
  reducers: {
    getCallsDays: (state, action) => {
      state.countCallsDays = action.payload;
    },
  },
});

const { actions, reducer } = tableCallsSlice;

export default reducer;

export const { getCallsDays } = actions;
