import { useState } from "react";
import { Pressable, ScrollView, StyleSheet } from "react-native";
import layout from "../../constants/Layout";
import { Text, View } from "../../components/Themed";

export default function CandidateCard() {
  const [shadowWidth, setShadowWidth] = useState(0.3);
  return (
    <ScrollView horizontal={true} pagingEnabled={true}>
      <View style={styles.cardContainer}>
        <Pressable>
          <View
            darkColor={"#575757"}
            lightColor={"#efefef"}
            style={[
              styles.card,
              { shadowOffset: { height: 1, width: shadowWidth } },
            ]}
          ></View>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    width: layout.window.width,
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    width: layout.window.width * 0.6,
    height: layout.window.width * 0.6,
    margin: 16,
    borderRadius: 2,
    shadowColor: "white",
    shadowOpacity: 0.3,
    shadowRadius: 1,
    shadowOffset: { height: 1, width: 0.3 },
  },
});
