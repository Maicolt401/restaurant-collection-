import axios from "axios";
import { loadReservessActionCreator } from "../../feature/reservesSlice/reservesSlice";
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
