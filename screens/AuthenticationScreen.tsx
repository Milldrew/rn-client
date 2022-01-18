import { ScrollView, StyleSheet } from "react-native";

import ProfileCard from "../components/profile_components/ProfileCard";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";

export default function AuthenticationScreen({
  navigation,
}: RootTabScreenProps<"Profile">) {
  return (
    <View style={styles.container}>
      <Text>Sign In screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
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
