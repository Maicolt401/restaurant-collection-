import { createSlice } from "@reduxjs/toolkit";
import { IReserves } from "../../types/reservesTypes";

interface ReservesState {
  AllReserves: IReserves[];
}

const initialState: ReservesState = {
  AllReserves: [],
};

const reservesSlice = createSlice({
  name: "reserves",
  initialState,
  reducers: {
    loadReserves: (reserves, action): ReservesState => ({
      AllReserves: [...action.payload],
    }),
    deleteReserve: (reserves, action): ReservesState => ({
      AllReserves: reserves.AllReserves.filter(
        (reserve: IReserves) => reserve._id !== action.payload
      ),
    }),
  },
});

export const {
  loadReserves: loadReservessActionCreator,
  deleteReserve: deleteReserveActionCreator,
} = reservesSlice.actions;

export default reservesSlice.reducer;
