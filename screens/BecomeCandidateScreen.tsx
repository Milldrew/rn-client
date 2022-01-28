import { editProfileThunk } from "../redux/profileSlice";
import SubmitButton from "../components/AuthButton.tsx";
import BecomeACandidate from "../components/AuthButton.tsx";
import Layout from "../constants/Layout";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  StyleSheet,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import OneLineTextInput from "../components/profile_components/OneLineTextInput";
import ProfileSwitch from "../components/profile_components/ProfileSwitch";

import EditScreenInfo from "../components/EditScreenInfo";
import { TextInput, Text, View } from "../components/Themed";

export default function BecomeCandidateScreen({ navigation }) {
  const [newProfileData, setNewProfileData] = useState({});
  const profile = useSelector((state: RootState) => state.profile);
  const dispatch = useDispatch();
  async function submitData() {
    setNewProfileData(newProfileData);
    console.log("hello");
    console.log(JSON.stringify(newProfileData));

    try {
      await dispatch(editProfileThunk(newProfileData));
      navigation.navigate("Root");
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <ScrollView>
      <KeyboardAvoidingView behavior="position">
        <View style={styles.container}></View>
        <View style={styles.inputs}>
          <OneLineTextInput
            onChangeText={(e) => Object.assign(newProfileData, { aboutMe: e })}
            placeholder="About me"
          />
          <OneLineTextInput
            onChangeText={(e) =>
              Object.assign(newProfileData, { profileImageURL: e })
            }
            placeholder="Profile Image URL"
          />
          <OneLineTextInput
            onChangeText={(e) => Object.assign(newProfileData, { facebook: e })}
            placeholder="Facebook URL"
          />
          <OneLineTextInput
            onChangeText={(e) => Object.assign(newProfileData, { twitter: e })}
            placeholder="Twitter URL"
          />
          <OneLineTextInput
            onChangeText={(e) => Object.assign(newProfileData, { tikTok: e })}
            placeholder="TikTok URL"
          />
          <OneLineTextInput
            onChangeText={(e) => Object.assign(newProfileData, { youTube: e })}
            placeholder="YouTube URL"
          />
          <BecomeACandidate>Become a candidate</BecomeACandidate>
          <Text>{JSON.stringify(profile)}</Text>
        </View>

        <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  inputs: {
    paddingTop: 50,
    alignItems: "center",
    justifyContent: "flex-start",
    height: Layout.window.height,
  },
  container: {
    alignItems: "center",
    justifyContent: "flex-start",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    height: 1,
    width: "80%",
  },
});
