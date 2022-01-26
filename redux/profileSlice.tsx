import createAuthAlert from "../components/AuthAlert";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User, SignUpPayload } from "./userTypes";
/**
 * Users are retrieved by their localId which is provided by firebase authentication
 */
type UserRef = String;
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
  aboutMe: String;
  firstName: String;
  lastName: String;
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

const profileInitialState: Profile = {
  aboutMe: "I am a new user.",
  firstName: "",
  lastName: "",
  profileImageURL:
    "https://cdn1.iconfinder.com/data/icons/app-user-interface-glyph/64/user_man_user_interface_app_person-512.png",
  facebook: "",
  twitter: "",
  youTube: "",
  tikTok: "",
  isCandidate: false,
  electionName: "",
  endorsed: [],
  endorsedBy: [],
};

export const editProfileThunk = createAsyncThunk(
  "profile/editProfile",
  async (signInData, thunkApi) => {
    let retrievedUserData;
    const { getState, rejectWithValue } = thunkApi;
    /*FIRST CHECK THE VOTER REGISTRATION INFORMATION */
    try {
      /* Sign In*/

      const authRes = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB8yqhlFD9mOTN368yRdT1ggtAEmG2wW7A",
        {
          method: "Post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: signInData.email,
            password: signInData.password,
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
      retrievedUserData = authData;
    } catch (error) {
      console.error(error);
    }
    /*Make User data 111259718*/
    try {
      const postUserPayload = await fetch(
        `https://quantum-hash-330314-default-rtdb.firebaseio.com/users/${retrievedUserData.localId}.json`
      );
      const jsonPayload = await postUserPayload.json();
      console.log({ jsonPayload });
      console.log("thunk again");
      const { name: dbUserId } = jsonPayload;
      console.log(
        ` PAYLOAD FROM REQUEST TO DB WITH LOCAL ID  ${JSON.stringify(
          jsonPayload
        )}`
      );
      return jsonPayload;
    } catch (error) {
      console.error(error);
    }
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
  },
  extraReducers: (builder) => {
    builder.addCase(editProfileThunk.rejected, (state, action) => {
      createAuthAlert("Error", action.payload);
      Object.assign(state, { error: action.payload });
    });
    builder.addCase(editProfileThunk.fulfilled, (state, action) => {
      Object.assign(state, action.payload);
    });
  },
});

// Action creators are generated for each case reducer function
export default profileSlice.reducer;
export const { setLastName, setFirstName } = profileSlice.actions;
