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
    loadReserves: (checks, action): ReservesState => ({
      AllReserves: [...action.payload],
    }),
  },
});

export const { loadReserves: loadReservessActionCreator } =
  reservesSlice.actions;

export default reservesSlice.reducer;
