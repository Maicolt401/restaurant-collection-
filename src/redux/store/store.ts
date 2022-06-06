import { configureStore } from "@reduxjs/toolkit";
import reservesReducer from "../feature/reservesSlice/reservesSlice";
import userReducer from "../feature/userSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    reserves: reservesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
