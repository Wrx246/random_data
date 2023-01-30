import { API } from "../../api/api";
import { AppDispatch } from "../index";
import { usersSlice } from "./users-slice";

export const fetchUsers = (region: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(usersSlice.actions.usersFetching());
    const response = await API.post(`users`, { region });
    dispatch(usersSlice.actions.usersFetchingSuccess(response.data));
  } catch (error) {
    dispatch(usersSlice.actions.usersFetchingError(`Error`));
  }
};
