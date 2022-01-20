import { StyleSheet } from "react-native";
import { TextInput } from "./Themed";
import type { TextInputProps } from "./Themed";

export default function AuthTextInput(props: TextInputProps) {
  return (
    <TextInput
      placeholderTextColor="#909090"
      editable
      style={styles.input}
      {...props}
    ></TextInput>
  );
}
const styles = StyleSheet.create({
  input: {
    color: "#030303",
    backgroundColor: "#fefefe",
    marginVertical: 4,
    paddingVertical: 9,
    paddingHorizontal: 9,
    fontSize: 25,
    width: "80%",
    borderWidth: 1,
  },
});
