import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
  userId: string;
  value: number;
  firstName: string;
  middleName: string;
  lastName: string;
  email: string;
  token: string;
}

const secondState: UserState = {
  value: 3,
  userId: "",
  firstName: "SECOND STATE",
  middleName: "hi",
  lastName: "",
  email: "",
  token: "",
};
const initialState: UserState = {
  value: 3,
  userId: "",
  firstName: "hi",
  middleName: "hi",
  lastName: "",
  email: "",
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
