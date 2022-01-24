import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User, SignUpPayload } from "./userTypes";

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

export const signUpUserThunk = createAsyncThunk(
  "user/signUpUser",
  async (userData, thunkApi) => {
    const { getState } = thunkApi;
    // realtime database name
    //https://quantum-hash-330314-default-rtdb.firebaseio.com/
    fetch(
      "https://quantum-hash-330314-default-rtdb.firebaseio.com/VoterRegistrationData.json"
    )
      .then((response) => response.json())
      .then((json) => console.log(json));

    fetch(
      "https://quantum-hash-330314-default-rtdb.firebaseio.com/users.json",
      {
        method: "Post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      }
    )
      .then((response) => response.json())
      .then((json) => console.log(json));
    console.log("thunk again");
    return userData;
  }
);
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
  extraReducers: (builder) => {
    builder.addCase(signUpUserThunk.fulfilled, (state, action) => {
      Object.assign(state, action.payload);
    });
  },
});

// Action creators are generated for each case reducer function
export const { signUpUser, increment, decrement, incrementByAmount } =
  userSlice.actions;

export default userSlice.reducer;
