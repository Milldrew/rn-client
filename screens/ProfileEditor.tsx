import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { TextInput, Platform, StyleSheet } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";

export default function ModalScreen() {
  return (
    <>
      <View style={styles.container}></View>
      <View style={styles.inputs}>
        <TextInput style={styles.input} placeholder="About Me" />
        <TextInput style={styles.input} placeholder="Profile Image URL" />
        <TextInput style={styles.input} placeholder="Facebook URL" />
        <TextInput style={styles.input} placeholder="Twitter URL" />
        <TextInput style={styles.input} placeholder="TikTok URL" />
        <TextInput style={styles.input} placeholder="YouTube URL" />
      </View>
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: "80%",
    margin: 12,
    padding: 10,
    borderBottomWidth: 1,
  },
  inputs: {
    flex: 6,
    alignItems: "center",
  },
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
    height: 1,
    width: "80%",
  },
});
