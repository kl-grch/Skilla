import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import dayjs from "dayjs";
import { useFetch } from "../../components/hooks/useFetch.hooks";

const initialState = {
  allCalls: [],
  callsLoadingStatus: true,
  callsErrorStatus: false,
  toDate: dayjs().format("YYYY-MM-DD"),
  fromDate: dayjs().subtract(3, "days").format("YYYY-MM-DD"),
};

export const fetchAllCalls = createAsyncThunk("calls/fetchAllCalls", async () => {
  const { request } = useFetch();
  return await request(
    `https://api.skilla.ru/mango/getList?date_start=${initialState.fromDate}&date_end=${initialState.toDate}`
  );
});

const pageCallsSlice = createSlice({
  name: "calls",
  initialState,
  reducers: {
    allCalls: (state, action) => {
      state.allCalls = action.payload;
    },
    incomingCalls: (state, action) => {
      state.allCalls = action.payload;
    },
    outgoingCalls: (state, action) => {
      state.allCalls = action.payload;
    },
    defaultCountDays: (state) => {
      state.fromDate = dayjs(state.toDate)
        .subtract(3, "days")
        .format("YYYY-MM-DD");
    },
    weekCountDays: (state) => {
      state.fromDate = dayjs(state.toDate)
        .subtract(7, "days")
        .format("YYYY-MM-DD");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllCalls.pending, (state) => {
        state.callsLoadingStatus = true;
        state.callsErrorStatus = false;
      })
      .addCase(fetchAllCalls.fulfilled, (state, action) => {
        state.callsLoadingStatus = false;
        state.callsErrorStatus = false;
        state.allCalls = action.payload;
      })
      .addCase(fetchAllCalls.rejected, (state) => {
        state.callsLoadingStatus = true;
        state.callsErrorStatus = true;
      })
      .addDefaultCase(() => {})
  },
});

const { actions, reducer } = pageCallsSlice;

export default reducer;

export const {
  allCalls,
  incomingCalls,
  outgoingCalls,
  defaultCountDays,
  weekCountDays,
  callsFetched,
  callsFetching,
  callsFetchingError,
} = actions;
