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
    const { getState, rejectWithValue } = thunkApi;
    /*FIRST CHECK THE VOTER REGISTRATION INFORMATION */
    try {
      const payload = await fetch(
        `https://quantum-hash-330314-default-rtdb.firebaseio.com/voterRegistrations/${userData.voterId}.json`
      );
      const userVoterRegistration = await payload.json();
      console.log({ userVoterRegistration });
      if (userVoterRegistration === null) {
        const voterIdError = new Error("Voter ID number not found");
        /* IF UNREGISTERED ALLOW  SEND ERROR MESSAGE TO USER*/
        return rejectWithValue(voterIdError.message);
      }
      Object.assign(userData, userVoterRegistration);
      console.log({ userData });
    } catch (error) {
      console.error(`ERROR MESSAGE: ${error.message}`);
      if (error.message === "Voter ID number not found") {
        console.error(error.message);
      }
    }
    try {
      /* IF REGISTERED ALLOW SIGN UP*/
      const authRes = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB8yqhlFD9mOTN368yRdT1ggtAEmG2wW7A",
        {
          method: "Post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: userData.email,
            password: userData.password,
            returnSecureToken: true,
          }),
        }
      );
      const authData = await authRes
        .json()
        .catch((error) => console.error(error));
      console.log({ authData });
      if (authData.error) {
        console.error("IT WAS ME AUTH DATA ERROR");
        return rejectWithValue(authData.error.message);
      }
      Object.assign(userData, authData);
    } catch (error) {
      console.error(error);
    }
    /*Make User data 111259718*/
    const postUserPayload = await fetch(
      "https://quantum-hash-330314-default-rtdb.firebaseio.com/users.json",
      {
        method: "Post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      }
    );
    const jsonPayload = await postUserPayload.json();
    console.log({ jsonPayload });
    console.log("thunk again");
    const { name: dbUserId } = jsonPayload;
    Object.assign(userData, { dbUserId });
    console.log(
      `USERDATA GOIN INTO DISK SPACE DATABASE ${JSON.stringify(userData)}`
    );
    return userData;
  }
);
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signUpUser: (state, action: PayloadAction<UserState>) => {
      Object.assign(state, action.payload);
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signUpUserThunk.rejected, (state, action) => {
      console.log("HELLO FROM REJECTED");
      console.log(action.payload);
      return Object.assign(state, { error: action.payload });
    });
    builder.addCase(signUpUserThunk.fulfilled, (state, action) => {
      Object.assign(state, action.payload);
    });
  },
});

// Action creators are generated for each case reducer function
export const { signUpUser, increment, decrement, incrementByAmount } =
  userSlice.actions;

export default userSlice.reducer;
