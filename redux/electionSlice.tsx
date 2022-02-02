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

const electionsInitialState: Election[] = [
  {
    name: "mock election",
    date: "election date",
    year: "election year",
    candidates: ["candidate profile"],
    candidateSupport: { candidatesName: "array of endorsments" },
  },
];

export const getElectionsThunk = createAsyncThunk(
  "election/getElectionsThunk",
  async (profileData, thunkApi) => {
    console.log("HELLO FROM GET ELECTION THUNK");

    const { getState, rejectWithValue } = thunkApi;
    console.log("state logged bellow");
    const { profile, user } = getState;
    console.log(JSON.stringify(getState()));
    const postUserPayload = await fetch(
      `https://quantum-hash-330314-default-rtdb.firebaseio.com/users/${userData.localId}.json`,
      {
        method: "Put",
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
  }
);

function capitalize(word) {
  return word[0] + word.slice(1).toLowerCase();
}
export const electionSlice = createSlice({
  name: "elections",
  initialState: electionsInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getElectionsThunk.rejected, (state, action) => {
      console.log("Hellof rom rejected reducer");
      createAuthAlert("Error", action.payload);
      Object.assign(state, { error: action.payload });
    });
    builder.addCase(getElectionsThunk.fulfilled, (state, action) => {
      console.log("hello from fulfiled");
      console.log(JSON.stringify(action.payload));
      Object.assign(state, action.payload);
    });
  },
});

// Action creators are generated for each case reducer function
export default electionSlice.reducer;
// export const { setCongDistrict, setLegDistrict, setLastName, setFirstName } =
electionSlice.actions;
