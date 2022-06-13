import axios from "axios";
import jwtDecode from "jwt-decode";
import { correctAction, wrongAction } from "../../modals/modals";
import { loginActionCreator } from "../feature/userSlice";
import { AppDispatch } from "../store/store";
import { ResponseData, UserData, UserLogin } from "../types/userTypes";

export const registerThunk =
  (userData: UserData) => async (dispatch: AppDispatch) => {
    try {
      await axios.post<ResponseData>(
        `${process.env.REACT_APP_API_URL}/clients/register`,
        userData
      );
      correctAction("USER CREATED");
    } catch {
      wrongAction("THIS USERNAME IS USED");
    }
  };

export const loginThunk =
  (userData: UserLogin) => async (dispatch: AppDispatch) => {
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_API_URL}/clients/login`,
        userData
      );

      const userInfo: UserData = jwtDecode(data.token);
      localStorage.setItem("token", data.token);

      dispatch(loginActionCreator(userInfo));
    } catch {
      wrongAction("WRONG USERNAME OR PASSWORD");
    }
  };
