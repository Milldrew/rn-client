import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
  userId: string;
  voterId: string;
  firstName: string;
  zipCode: number;
  age: number;
  lastName: string;
  email: string;
  password: string;
  token: string;
}

const initialState: UserState = {
  userId: "",
  voterId: "",
  firstName: "",
  zipCode: NaN,
  age: NaN,
  lastName: "",
  email: "",
  password: "",
  token: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    signUpUser: (state, action: PayloadAction<UserState>) => {
      Object.assign(state, action.payload);
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
export const { signUpUser, increment, decrement, incrementByAmount } =
  userSlice.actions;

export default userSlice.reducer;
