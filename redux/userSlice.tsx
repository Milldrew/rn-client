import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
  userId: string;
  value: number;
  firstName: string;
  lastName: string;
  email: string;
  token: string;
}

const initialState: UserState = {
  value: 3,
  userId: "",
  firstName: "",
  lastName: "",
  email: "",
  token: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    setFirstName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setFirstName, increment, decrement, incrementByAmount } =
  userSlice.actions;

export default userSlice.reducer;
