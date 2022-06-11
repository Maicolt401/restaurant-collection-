import axios from "axios";
import jwtDecode from "jwt-decode";
import { correctAction } from "../../../modals/modals";
import {
  loadReservessActionCreator,
  deleteReserveActionCreator,
  createReserveActionCreator,
} from "../../feature/reservesSlice/reservesSlice";
import { AppDispatch } from "../../store/store";
import { IReserves } from "../../types/reservesTypes";

export const loadReservesThunks = () => async (dispatch: AppDispatch) => {
  const token = localStorage.getItem("token");

  if (token) {
    const {
      data: { reserves },
    } = await axios.get(`${process.env.REACT_APP_API_URL}/reserves`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    dispatch(loadReservessActionCreator(reserves));
  }
};

export const deleteReserveThunk =
  (id: string) => async (dispatch: AppDispatch) => {
    const token = localStorage.getItem("token");

    const { status } = await axios.delete(
      `${process.env.REACT_APP_API_URL}/reserves/${id}`,
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    );

    if (status === 200) {
      dispatch(deleteReserveActionCreator(id));
      correctAction("RESERVE CANCELATE");
    }
  };

export const createReserveThunk =
  (userData: any) => async (dispatch: AppDispatch) => {
    try {
      const token = localStorage.getItem("token");
      const { data } = await axios.post(
        `${process.env.REACT_APP_API_URL}/reserves/create`,
        userData,
        {
          headers: {
            authorization: `Bearer ${token}`,
            "Content-Type": "mutipart/form-data",
          },
        }
      );
      const userInfo: IReserves = jwtDecode(data.token);
      localStorage.setItem("token", data.token);

      dispatch(createReserveActionCreator(userInfo));
      correctAction("NEW RESERVE CREATED");
    } catch (error) {}
  };
