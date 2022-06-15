import { createSlice } from "@reduxjs/toolkit";
import { IReserveDetail } from "../../types/reservesTypes";

const initialState: IReserveDetail = {
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
    loadOneReserve: (reserve, action) => ({
      oneReserve: { ...action.payload },
    }),
    // blankState: () => initialState,
  },
});

export default oneReserveSlice.reducer;

export const {
  loadOneReserve: loadOneReserveActionCreator,
  // blankState: blankStateActionCreator,
} = oneReserveSlice.actions;
