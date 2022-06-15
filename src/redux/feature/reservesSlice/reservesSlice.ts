import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IReserves } from "../../types/reservesTypes";

interface ReservesState {
  AllReserves: IReserves[];
}

export const initialState: ReservesState = {
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
    createReserve: (
      reserves,
      action: PayloadAction<IReserves>
    ): ReservesState => ({
      ...reserves,
      ...action.payload,
    }),
    editReserve: (reserves, action): ReservesState => ({
      AllReserves: reserves.AllReserves.map((reserve) =>
        reserve._id === action.payload.id ? action.payload : reserve
      ),
    }),
    filterReserve: (reserves, action) => action.payload,
  },
});

export const {
  loadReserves: loadReservessActionCreator,
  deleteReserve: deleteReserveActionCreator,
  createReserve: createReserveActionCreator,
  filterReserve: filterReserveActionCreator,
  editReserve: editReserveActionCreator,
} = reservesSlice.actions;

export default reservesSlice.reducer;
