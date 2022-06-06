import { createSlice } from "@reduxjs/toolkit";
import { IReserves } from "../../types/reservesTypes";

interface ReservesState {
  reserves: IReserves[];
}

const initialState: ReservesState = {
  reserves: [],
};

const reservesSlice = createSlice({
  name: "reserves",
  initialState,
  reducers: {
    loadReserves: (checks, action): ReservesState => ({
      reserves: [...action.payload],
    }),
  },
});

export const { loadReserves: loadReservessActionCreator } =
  reservesSlice.actions;

export default reservesSlice.reducer;
