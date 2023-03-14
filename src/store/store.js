import { configureStore } from "@reduxjs/toolkit";
import tableCalls from "../components/tableCalls/tableCallsSlice";
import pageCalls from "../pages/pageCalls/pageCallsSlice";
import filterCallsDays from "../components/filterCallsDays/filterCallsDaysSlice";

const stringMiddleware = () => (next) => (action) => {
  if (typeof action === "string") {
    return next({
      type: action,
    });
  }
  return next(action);
};

const store = configureStore({
  reducer: { tableCalls, pageCalls, filterCallsDays },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(stringMiddleware),
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
