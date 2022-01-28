import elections from "./elections.json";
import createAuthAlert from "../components/AuthAlert";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User, SignUpPayload } from "./userTypes";

/**
 * Users are retrieved by their localId which is provided by firebase authentication
 */
type UserRef = {
  localId: String;
  firstName: String;
  lastName: String;
};

type URL = String;
/**
 *  This is a list of localId values used to reference users.
 */
type EndorsedBy = UserRef[];
export type Election = {
  electionCode: String;
  name: String;
  date: String;
  year: String;
  candidates: Profile[];
  candidateSupport: { candidatesName: EndorsedBy }[];
};
export type Candidate = {
  firstName: String;
  lastName: String;
  election: Election;
};

export type Profile = {
  /**
   * provided by user
   */
  localId: String;
  aboutMe: String;
  firstName: String;
  lastName: String;
  congDistrict: Number;
  legDistrict: Number;
  /**
   * provided by user
   */
  profileImageURL: URL;
  /**
   * provided by user
   */
  facebook: URL;
  /**
   * provided by user
   */
  twitter: URL;
  /**
   * provided by user
   */
  youTube: URL;
  /**
   * provided by user
   */
  tikTok: URL;
  /**
   * provided by user
   */
  isCandidate: Boolean;
  /**
   * This item is collected by the user before they can become a candidte
   */
  electionName: String;
  endorsedBy: UserRef[];
  endorsed: UserRef[];
};

const electionsInitialState: Election = {
  elections: elections,
};

export electionThunk = createAsyncThunk(
  "profile/editProfileThunk",
  async (profileData, thunkApi) => {
    console.log("HELLO FROM PROFILE THUNK");
    const { getState, rejectWithValue } = thunkApi;
    console.log({ profileData });
    return profileData;
  }
);

function capitalize(word) {
  return word[0] + word.slice(1).toLowerCase();
}
export const profileSlice = createSlice({
  name: "profile",
  initialState: profileInitialState,
  reducers: {
    setLastName(state, action) {
      state.lastName = capitalize(action.payload);
    },
    setFirstName(state, action) {
      state.firstName = capitalize(action.payload);
    },
    setLegDistrict(state, action) {
      console.log("set leg");
      state.legDistrict = capitalize(action.payload);
    },
    setCongDistrict(state, action) {
      console.log("set cong");
      state.congDistrict = capitalize(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(editProfileThunk.rejected, (state, action) => {
      createAuthAlert("Error", action.payload);
      Object.assign(state, { error: action.payload });
    });
    builder.addCase(editProfileThunk.fulfilled, (state, action) => {
      console.log("hello from fulfiled");
      console.log(JSON.stringify(action.payload));
      Object.assign(state, action.payload);
    });
  },
});

// Action creators are generated for each case reducer function
export default profileSlice.reducer;
export const { setCongDistrict, setLegDistrict, setLastName, setFirstName } =
  profileSlice.actions;
