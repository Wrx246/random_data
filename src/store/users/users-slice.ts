import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { usa } from "../../assets/regionsData";
import { RegionType } from "../../models/regions";

type usersType = {
    users: RegionType[],
    isLoading: boolean,
    error: string
}

const initialState: usersType = {
  users: usa,
  isLoading: false,
  error: "",
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    usersFetching(state) {
      state.isLoading = true;
    },
    usersFetchingSuccess(state, action: PayloadAction<RegionType[]>) {
      state.isLoading = false;
      state.error = "";
      state.users = action.payload;
    },
    usersFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default usersSlice.reducer;

export const usersActions = usersSlice.actions;