import Layout from "../constants/Layout";
import AuthButton from "../components/AuthButton";
import {
  KeyboardAvoidingView,
  Button,
  ScrollView,
  StyleSheet,
} from "react-native";
import { signUpUserThunk, signUpUser } from "../redux/userSlice";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import ProfileCard from "../components/profile_components/ProfileCard";
import { Text, View } from "../components/Themed";
import AuthTextInput from "../components/AuthTextInput";
import { RootTabScreenProps } from "../types";

export default function SignUpModal({
  navigation,
}: RootTabScreenProps<"Profile">) {
  let user = useSelector((state: RootState) => state.user);
  user = JSON.stringify(user);
  const dispatch = useDispatch();
  const [newUser, setNewUser] = useState({});
  const [authButtonColor, setAuthButtonColor] = useState("#da2");
  async function handleSubmit(e) {
    const payload = await dispatch(signUpUserThunk(newUser)).unwrap();
    user = JSON.stringify(user);
  }
  useEffect(() => {
    if (!!user.localId) {
      console.log("AUTHENTICATED");
      navigation.navigate("Root");
    } else {
      console.log("NOT AUTHENTICATED");
    }
  }, [user]);
  return (
    <ScrollView>
      <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={10}>
        <View style={styles.container}>
          <Text style={{ marginBottom: 20, fontSize: 99 }}>🗳</Text>
          <AuthTextInput
            onChangeText={(e) => setNewUser({ ...newUser, voterId: e })}
            placeholder="Voter ID"
          ></AuthTextInput>
          <AuthTextInput
            onChangeText={(e) => setNewUser({ ...newUser, email: e })}
            placeholder="Email"
          ></AuthTextInput>
          <AuthTextInput
            secureTextEntry
            onChangeText={(e) => setNewUser({ ...newUser, password: e })}
            placeholder="Password"
          ></AuthTextInput>
          <AuthButton onPress={(e) => handleSubmit(e)}>Sign Up</AuthButton>

          <Text style={{ fontSize: 20 }}>{user}</Text>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  textInputs: {
    paddingTop: 40,
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  container: {
    paddingTop: 30,
    paddingBottom: 70,
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    height: Layout.window.height,
  },
});
