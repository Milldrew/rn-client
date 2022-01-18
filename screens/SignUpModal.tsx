import AuthButton from "../components/AuthButton";
import { Button, ScrollView, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, setFirstName } from "../redux/userSlice";

import ProfileCard from "../components/profile_components/ProfileCard";
import { Text, View } from "../components/Themed";
import AuthTextInput from "../components/AuthTextInput";
import { RootTabScreenProps } from "../types";

export default function SignUpModal({
  navigation,
}: RootTabScreenProps<"Profile">) {
  const user = useSelector((state: RootState) => state.user.value);
  const firstName = useSelector((state: RootState) => state.user.firstName);
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <Text style={{ marginBottom: 20, fontSize: 99 }}>🗳</Text>
      <AuthTextInput placeholder="First Name"></AuthTextInput>
      <AuthTextInput placeholder="Last Name"></AuthTextInput>
      <AuthTextInput placeholder="Phone Number"></AuthTextInput>
      <AuthTextInput placeholder="Email"></AuthTextInput>
      <AuthTextInput placeholder="Password"></AuthTextInput>
      <AuthButton>Sign Up</AuthButton>
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
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
