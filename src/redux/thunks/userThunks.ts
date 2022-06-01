import axios from "axios";
import { AppDispatch } from "../store/store";
import { ResponseData, UserData } from "../types/userTypes";

export const registerThunk =
  (userData: UserData) => async (dispatch: AppDispatch) => {
    await axios.post<ResponseData>(
      `${process.env.REACT_APP_API_URL}/clients/register`,
      userData
    );
  };
