import axios from "axios";
import { correctAction } from "../../../modals/modals";
import {
  loadReservessActionCreator,
  deleteReserveActionCreator,
} from "../../feature/reservesSlice/reservesSlice";
import { AppDispatch } from "../../store/store";

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
      correctAction("CHECK DELETED");
    }
  };
