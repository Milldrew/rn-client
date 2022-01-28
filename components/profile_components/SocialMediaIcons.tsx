import * as WebBrowser from "expo-web-browser";
import { Text, View } from "../Themed";
import Colors from "../../constants/Colors";
import * as React from "react";
import { Platform, Pressable, Image, StyleSheet } from "react-native";

export default function SocialMediaIcons(props) {
  if (Platform.OS === "ios") {
    WebBrowser.dismissBrowser();
  }
  function followLink(link) {
    WebBrowser.openBrowserAsync(link);
  }
  return (
    <View
      style={styles.container}
      lightColor={"#fff"}
      darkColor={Colors.neutral.forContrast}
    >
      <Pressable onPress={() => followLink(props.profileData.facebook)}>
        <Image
          source={require("../../assets/images/facebook-icon.png")}
          fadeDuration={0}
          style={styles.image}
        />
      </Pressable>
      <Pressable onPress={() => followLink(props.profileData.youTube)}>
        <Image
          source={require("../../assets/images/youtube-icon.png")}
          fadeDuration={0}
          style={styles.image}
        />
      </Pressable>
      <Pressable onPress={() => followLink(props.profileData.twitter)}>
        <Image
          source={require("../../assets/images/twitter-icon.png")}
          fadeDuration={0}
          style={styles.image}
        />
      </Pressable>
      <Pressable onPress={() => followLink(props.profileData.tikTok)}>
        <Image
          source={require("../../assets/images/tiktok-icon.png")}
          fadeDuration={0}
          style={styles.image}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 5,
    padding: 6,
    width: "95%",
  },
  image: {
    marginHorizontal: 6,
    width: 30,
    height: 30,
    margin: 3,
  },
});
