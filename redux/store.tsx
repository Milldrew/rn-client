import electionReducer from "./electionSlice";
import profileReducer from "./profileSlice";
import userReducer from "./userSlice";
import { configureStore } from "@reduxjs/toolkit";
export const store = configureStore({
  reducer: {
    user: userReducer,
    profile: profileReducer,
    elections: electionReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
