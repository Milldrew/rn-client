import AuthButton from "../components/AuthButton";
import {
  KeyboardAvoidingView,
  Button,
  ScrollView,
  StyleSheet,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, setFirstName } from "../redux/userSlice";

import ProfileCard from "../components/profile_components/ProfileCard";
import { Text, View } from "../components/Themed";
import AuthTextInput from "../components/AuthTextInput";
import { RootTabScreenProps } from "../types";

export default function AuthenticationScreen({
  navigation,
}: RootTabScreenProps<"Profile">) {
  const user = useSelector((state: RootState) => state.user.value);
  const firstName = useSelector((state: RootState) => state.user.firstName);
  const dispatch = useDispatch();
  return (
    <ScrollView>
      <KeyboardAvoidingView behavior="position">
        <View style={styles.container}>
          <Text style={{ marginBottom: 20, fontSize: 99 }}>🗳</Text>
          <AuthTextInput placeholder="Email"></AuthTextInput>
          <AuthTextInput placeholder="Password"></AuthTextInput>
          <AuthButton onPress={() => navigation.navigate("Root")}>
            Sign In
          </AuthButton>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingBottom: 130,
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
