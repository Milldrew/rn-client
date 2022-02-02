import { getElectionsThunk } from "../redux/electionSlice";
import { useEffect } from "react";
import React from "react";
import { SectionList, StyleSheet, Text, View } from "react-native";

import { useDispatch, useSelector } from "react-redux";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: "bold",
    backgroundColor: "rgba(247,247,247,1.0)",
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

const SectionListBasics = () => {
  const dispatch = useDispatch();
  const elections = useSelector((state: RootState) => state.elections);
  useEffect(() => {
    dispatch(getElectionsThunk());
  }, [elections]);
  return (
    <View style={styles.container}>
      <SectionList
        sections={[
          { title: "Federal", data: ["Devin", "Dan", "Dominic"] },
          {
            title: "State",
            data: [
              "Jackson",
              "James",
              "Jillian",
              "Jimmy",
              "Joel",
              "John",
              "Julie",
            ],
          },
        ]}
        renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
        renderSectionHeader={({ section }) => (
          <Text style={styles.sectionHeader}>{section.title}</Text>
        )}
        keyExtractor={(item, index) => index}
      />
      <Text>{JSON.stringify(elections)}</Text>
    </View>
  );
};

export default SectionListBasics;
