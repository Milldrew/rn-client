import * as React from "react";
import { Button } from "react-native";
import { Video, AVPlaybackStatus } from "expo-av";

import * as WebBrowser from "expo-web-browser";
import { Image, StyleSheet, TouchableOpacity } from "react-native";

import Colors from "../../constants/Colors";
import { MonoText } from "../StyledText";
import { Text, View } from "../Themed";

export default function ProfileCard() {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  return (
    <View style={styles.profileBackground}>
      <Image
        style={styles.profileImage}
        source={{
          uri: "https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/cat-wearing-sunglasses-wiston-casco.jpg",
        }}
      />

      <Text
        style={styles.getStartedText}
        lightColor="rgba(0,0,0,0.8)"
        darkColor="rgba(255,255,255,0.8)"
      >
        Cool Catherine Cat
      </Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <View style={styles.userStatusContainer}>
        <Text style={styles.userStatusText}>User Status: Candidate</Text>
      </View>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <View style={styles.container}>
        <Video
          ref={video}
          style={styles.video}
          source={{
            uri: "https://v16-webapp.tiktok.com/1738dee2d093ed60ba63252c272abfe0/61e638ca/video/tos/useast5/tos-useast5-pve-0068-tx/9527ccbafe694b3d82f4e33e72c2f464/?a=1988&br=2670&bt=1335&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_FGgkag3-I&l=20220117214920010223021028272F515C&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M3hsNDg6Zm82OTMzZzczNEApOGQ7aDM6N2RoNzk1M2Y0NmctNXEwcjRfbi1gLS1kMS9zc2BeLmMvNGNeMS4uLWFiYjM6Yw%3D%3D&vl=&vr=",
          }}
          useNativeControls
          resizeMode="contain"
          isLooping
          onPlaybackStatusUpdate={(status) => setStatus(() => status)}
        />
        <View style={styles.buttons}>
          <Button
            title={status.isPlaying ? "Pause" : "Play"}
            onPress={() =>
              status.isPlaying
                ? video.current.pauseAsync()
                : video.current.playAsync()
            }
          />
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
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
  },
  video: {
    alignSelf: "center",
    width: 320,
    height: 200,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
