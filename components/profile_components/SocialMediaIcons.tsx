import * as React from "react";
import { Image, View, StyleSheet } from "react-native";

export default function SocialMediaIcons() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/youtube-icon.png")}
        fadeDuration={0}
        style={styles.image}
      />
      <Image
        source={require("../../assets/images/tiktok-icon.png")}
        fadeDuration={0}
        style={styles.image}
      />
      <Image
        source={require("../../assets/images/twitter-icon.png")}
        fadeDuration={0}
        style={styles.image}
      />
      <Image
        source={require("../../assets/images/facebook-icon.png")}
        fadeDuration={0}
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
    flexDirection: "row",
    backgroundColor: "#efefef22",
    borderRadius: 5,
  },
  image: {
    width: 30,
    height: 30,
    margin: 3,
  },
});
