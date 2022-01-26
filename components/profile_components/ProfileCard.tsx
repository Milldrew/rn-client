import Layout from "../../constants/Layout";
import * as React from "react";

import * as WebBrowser from "expo-web-browser";
import { Image, StyleSheet } from "react-native";

import Colors from "../../constants/Colors";
import { Text, View } from "../Themed";
import SocialMediaIcons from "./SocialMediaIcons";

export default function ProfileCard(props) {
  return (
    <View style={styles.profileBackground}>
      <Image
        style={styles.profileImage}
        source={{
          uri: props.profileData.profileImageURL,
        }}
      />

      <Text
        style={styles.userName}
        lightColor="rgba(0,0,0,0.8)"
        darkColor="rgba(255,255,255,0.8)"
      >
        {`${props.profileData.firstName} ${props.profileData.lastName}`}
      </Text>
      <Text
        style={styles.userStatus}
        lightColor={Colors.light.tint}
        darkColor={Colors.dark.tint}
      >
        User Type: {props.profileData.isCandidate ? "Candidate" : "Voter"}
      </Text>
      <SocialMediaIcons profileData={props.profileData} />
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <View style={styles.aboutMeContainer}>
        <Text
          style={styles.aboutMeHeader}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)"
        >
          About Me:
        </Text>
        <View style={styles.aboutMeContentContainer}>
          <Text style={styles.aboutMeContent}>
            {"\n"}

            {props.profileData.aboutMe}
          </Text>
        </View>
      </View>
    </View>
  );
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    "https://docs.expo.io/get-started/create-a-new-app/#opening-the-app-on-your-phonetablet"
  );
}

const styles = StyleSheet.create({
  profileBackground: {
    alignItems: "center",
    width: "100%",
    height: Layout.window.height,
  },
  aboutMeContent: {
    marginTop: 10,
    fontSize: 20,
    textAlign: "left",
  },
  aboutMeHeader: {
    marginTop: 10,
    fontWeight: "bold",
    fontSize: 24,
    textAlign: "center",
  },
  userStatus: {
    marginTop: 10,
    fontSize: 14,
    textAlign: "left",
  },
  userName: {
    marginTop: 10,
    fontWeight: "bold",
    fontSize: 24,
    textAlign: "center",
  },
  profileImage: {
    width: Layout.window.width * 0.5,
    height: Layout.window.width * 0.5,
    borderWidth: 1,
    borderRadius: 120,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "100%",
  },
  aboutMeContentContainer: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
    backgroundColor: Colors.neutral.forContrast,
    width: "100%",
    borderRadius: 20,
    textAlign: "left",
  },
  aboutMeContainer: {
    alignItems: "flex-start",
    backgroundColor: Colors.neutral.forContrast,
    width: "100%",
    padding: 20,
    marginHorizontal: 20,
    borderRadius: 20,
  },
  container: {
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
  },
});
