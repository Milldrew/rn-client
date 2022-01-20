import AuthButton from "../components/AuthButton";
import {
  KeyboardAvoidingView,
  Button,
  ScrollView,
  StyleSheet,
} from "react-native";
import { signUpUserThunk, signUpUser } from "../redux/userSlice";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import ProfileCard from "../components/profile_components/ProfileCard";
import { Text, View } from "../components/Themed";
import AuthTextInput from "../components/AuthTextInput";
import { RootTabScreenProps } from "../types";

export default function SignUpModal({
  navigation,
}: RootTabScreenProps<"Profile">) {
  let firstName = useSelector((state: RootState) => state.user);
  firstName = JSON.stringify(firstName);
  const dispatch = useDispatch();
  const [newUser, setNewUser] = useState({});
  const [authButtonColor, setAuthButtonColor] = useState("#da2");
  async function handleSubmit(e) {
    const payload = await dispatch(signUpUserThunk(newUser)).unwrap();
    firstName = JSON.stringify(firstName);
  }
  return (
    <ScrollView>
      <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={10}>
        <View style={styles.container}>
          <Text style={{ marginBottom: 20, fontSize: 99 }}>🗳</Text>
          <AuthTextInput
            onChangeText={(e) => setNewUser({ ...newUser, firstName: e })}
            placeholder="First Name"
          ></AuthTextInput>
          <AuthTextInput
            onChangeText={(e) => setNewUser({ ...newUser, lastName: e })}
            placeholder="Last Name"
          ></AuthTextInput>
          <AuthTextInput
            onChangeText={(e) => setNewUser({ ...newUser, age: e })}
            placeholder="Age"
          ></AuthTextInput>
          <AuthTextInput
            onChangeText={(e) => setNewUser({ ...newUser, zipCode: e })}
            placeholder="Zip Code (5 digits)"
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

          {/*
            <Text style={{ fontSize: 30 }}>{firstName}</Text>
         */}
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
  },
});
