import AuthButton from "../components/AuthButton";
import { Button, ScrollView, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, setFirstName } from "../redux/userSlice";
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
  console.debug(firstName);
  const dispatch = useDispatch();
  const [newUser, setNewUser] = useState({});
  const [authButtonColor, setAuthButtonColor] = useState("#da2");
  console.log(newUser);
  function handleSubmit(e) {
    console.log(newUser);
    dispatch({ type: "user/signUpUser", payload: newUser });
    firstName = JSON.stringify(firstName);
  }
  return (
    <View style={styles.container}>
      <Text style={{ marginBottom: 20, fontSize: 99 }}>🗳</Text>
      <AuthTextInput
        onChangeText={(e) =>
          dispatch({ type: "user/setFirstName", payload: newUser })
        }
        placeholder="First Name"
      ></AuthTextInput>
      <AuthTextInput
        onChangeText={(e) => setNewUser({ ...newUser, middleName: e })}
        placeholder="Middle Name"
      ></AuthTextInput>
      <AuthTextInput
        onChangeText={(e) => setNewUser({ ...newUser, lastName: e })}
        placeholder="Last Name"
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
      <Text style={{ fontSize: 30 }}>{firstName}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  onSubmitPressable: {
    marginVertical: 30,
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
