import CandidateCard from "../components/candidates_components/CandidateCard";
import CandidateCardInfo from "../components/candidates_components/CandidateCardInfo";
import { ScrollView, StyleSheet } from "react-native";
import layout from "../constants/Layout";
import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <CandidateCardInfo
        candidateName={"Mike Crapo"}
        candidatesElection={"United States Senate"}
      />
      {/*<CandidateCard/>*/}
    </View>
  );
}

const styles = StyleSheet.create({
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
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
