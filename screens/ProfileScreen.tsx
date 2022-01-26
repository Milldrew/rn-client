import Layout from "../constants/Layout";
import { useSelector, useDispatch } from "react-redux";
import { ScrollView, StyleSheet } from "react-native";

import ProfileCard from "../components/profile_components/ProfileCard";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";

export default function ProfileScreen({
  navigation,
}: RootTabScreenProps<"Profile">) {
  const profile = useSelector((state: RootState) => state.profile);
  return (
    <ScrollView>
      <View style={styles.container}>
        <ProfileCard profileData={profile} />
        <Text>{JSON.stringify(profile)}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    height: Layout.window.height,
    paddingTop: 20,
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
