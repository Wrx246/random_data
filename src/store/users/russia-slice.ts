import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RegionType } from "../../models/regions";

type RussiaType = {
    users: RegionType[],
    isLoading: boolean,
    error: string
}

const initialState: RussiaType = {
  users: [],
  isLoading: false,
  error: "",
};

export const russiaSlice = createSlice({
  name: "russia",
  initialState,
  reducers: {
    russiaFetching(state) {
      state.isLoading = true;
    },
    russiaFetchingSuccess(state, action: PayloadAction<RegionType[]>) {
      state.isLoading = false;
      state.error = "";
      state.users = action.payload;
    },
    russiaFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default russiaSlice.reducer;

export const russiaActions = russiaSlice.actions;