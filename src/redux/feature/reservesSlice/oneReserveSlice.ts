import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IReserves } from "../../types/reservesTypes";

interface ReserveState {
  oneReserve: IReserves;
}

const initialState: ReserveState = {
  oneReserve: {
    _id: "",
    name: "",
    DNI: "",
    imageBackup: "",
    image: "",
    date: "",
    hour: 0,
    numberPersons: 0,
  },
};

const oneReserveSlice = createSlice({
  name: "reserve",
  initialState,
  reducers: {
    loadOneReserve: (reserve, action: PayloadAction<IReserves>) => ({
      oneReserve: { ...action.payload },
    }),
    blankState: () => initialState,
  },
});

export default oneReserveSlice.reducer;

export const {
  loadOneReserve: loadOneReserveActionCreator,
  blankState: blankStateActionCreator,
} = oneReserveSlice.actions;
