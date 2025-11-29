import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "open",
  report: [],
};

const reportSlice = createSlice({
  name: "report",
  initialState,
  reducers: {
    updateReportStatus: (state, action) => {
      state.status = action.payload;
    },
  },
});

export const { updateReportStatus } = reportSlice.actions;

export default reportSlice.reducer;
