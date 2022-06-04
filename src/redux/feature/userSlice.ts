import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserData } from "../types/userTypes";

interface userState {
  username: string;
  logged: boolean;
}

const initialState: userState = {
  username: "",
  logged: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (user: userState, action: PayloadAction<UserData>) => ({
      ...action.payload,
      logged: true,
    }),
    logout: () => ({
      username: "",
      id: "",
      logged: false,
    }),
  },
});

export const { login: loginActionCreator, logout: logouActionCreator } =
  userSlice.actions;

export default userSlice.reducer;
