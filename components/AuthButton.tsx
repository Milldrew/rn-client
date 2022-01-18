import { Pressable, StyleSheet } from "react-native";
import { Text } from "./Themed";
import type { TextProps } from "./Themed";
import { useState } from "react";

export default function AuthButton(props: TextProps) {
  const [buttonBackgroundColor, setButtonBackgroundColor] = useState("#fa2");
  function ButtonPressOutAnimation() {
    setButtonBackgroundColor("#da2");
  }
  function ButtonPressInAnimation() {
    setButtonBackgroundColor("#dad");
  }
  return (
    <Pressable
      style={[styles.pressable, { backgroundColor: buttonBackgroundColor }]}
      onPressOut={ButtonPressOutAnimation}
      onPressIn={ButtonPressInAnimation}
    >
      <Text style={[styles.authButton]} {...props} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  authButton: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 30,
    color: "#fefefe",
  },
  pressable: {
    borderWidth: 1,
    width: 200,
    backgroundColor: "#fa2",
    marginTop: 30,
    paddingVertical: 10,
  },
});
