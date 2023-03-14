import { createSlice } from "@reduxjs/toolkit";
import dayjs from "dayjs";

const initialState = {
  allCalls: [],
  nowDate: dayjs().format("YYYY-MM-DD"),
  defaultCountDays: dayjs().subtract(3, "days").format("YYYY-MM-DD"),
};

const tableCallsSlice = createSlice({
  name: "pageCalls",
  initialState,
  reducers: {
    getAllCalls: (state, action) => {
      state.allCalls = action.payload;
    },
    getIncomingCalls: (state, action) => {
      state.allCalls = action.payload;
    },
    getOutgoingCalls: (state, action) => {
      state.allCalls = action.payload;
    },
    getDefaultCountDays: (state) => {
      state.defaultCountDays = dayjs(state.nowDate).subtract(3, "days").format("YYYY-MM-DD");
    },
    getWeekCountDays: (state) => {
      state.defaultCountDays = dayjs(state.nowDate).subtract(7, "days").format("YYYY-MM-DD");
    },

  },
});

const { actions, reducer } = tableCallsSlice;

export default reducer;

export const {
  getAllCalls,
  getIncomingCalls,
  getOutgoingCalls,
  getDefaultCountDays,
  getWeekCountDays
} = actions;
