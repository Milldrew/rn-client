import { Alert } from "react-native";

export default function createAuthAlert(alertTitle, alertMessage) {
  console.log("heelo from alert function");
  Alert.alert(alertTitle, alertMessage, [
    { text: "OK", onPress: () => console.log("Alert dismissed") },
  ]);
}
