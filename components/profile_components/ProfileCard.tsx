import * as React from "react";
import { Button } from "react-native";
import { Video, AVPlaybackStatus } from "expo-av";

import * as WebBrowser from "expo-web-browser";
import { Image, StyleSheet, TouchableOpacity } from "react-native";

import Colors from "../../constants/Colors";
import { MonoText } from "../StyledText";
import { Text, View } from "../Themed";
import SocialMediaIcons from "./SocialMediaIcons";

export default function ProfileCard(props) {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});

  return (
    <View style={styles.profileBackground}>
      <Image
        style={styles.profileImage}
        source={{
          uri: props.profileData.profileImageURL,
        }}
      />

      <Text
        style={styles.getStartedText}
        lightColor="rgba(0,0,0,0.8)"
        darkColor="rgba(255,255,255,0.8)"
      >
        {`${props.profileData.firstName} ${props.profileData.lastName}`}
      </Text>
      <SocialMediaIcons />
      <View style={styles.userStatusContainer}></View>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
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
    marginHorizontal: 50,
    width: "100%",
  },
  userStatusContainer: {
    alignItems: "flex-start",
    marginHorizontal: 50,
    width: "100%",
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  userStatusText: {
    fontWeight: "normal",
    fontSize: 17,
    textAlign: "center",
    paddingLeft: 20,
  },
  getStartedText: {
    marginTop: 10,
    fontWeight: "bold",
    fontSize: 17,
    lineHeight: 24,
    textAlign: "center",
  },
  helpContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: "center",
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    textAlign: "center",
  },
  profileImage: { width: 150, height: 150, borderRadius: 100 },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "100%",
  },
  videoContainer: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
    borderRadius: 10,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
  },
  video: {
    alignSelf: "center",
    width: 320,
    height: 200,
    borderRadius: 8,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
