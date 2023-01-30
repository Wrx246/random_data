import { API } from "../../api/api";
import { AppDispatch } from "../index";
import { russiaSlice } from "./russia-slice";

export const fetchRussia = (name: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(russiaSlice.actions.russiaFetching());
    const response = await API.post(`russia`, { name });
    dispatch(russiaSlice.actions.russiaFetchingSuccess(response.data));
  } catch (error) {
    dispatch(russiaSlice.actions.russiaFetchingError(`Error`));
  }
};
