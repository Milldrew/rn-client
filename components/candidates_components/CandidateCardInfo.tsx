import { useState } from "react";
import { Image, Pressable, ScrollView, StyleSheet } from "react-native";
import layout from "../../constants/Layout";
import { Text, View } from "../../components/Themed";

export default function CandidateCard(props) {
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
          >
            <Image
              style={styles.candidatesImage}
              source={{
                uri: "https://npr.brightspotcdn.com/dims4/default/7f66e80/2147483647/strip/true/crop/2238x2310+0+0/resize/880x908!/quality/90/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2Flegacy%2Fsites%2Fidaho%2Ffiles%2F201902%2FMike_Crapo_official_photo.jpg",
              }}
            ></Image>

            <View style={styles.textWrapper}>
              <Text style={styles.candidatesName}>{props.candidateName}</Text>
              <Text style={styles.candidatesElection}>
                {props.candidatesElection}
              </Text>
            </View>
          </View>
        </Pressable>
      </View>
      <View style={styles.cardContainer}>
        <Pressable>
          <View
            darkColor={"#575757"}
            lightColor={"#efefef"}
            style={[
              styles.card,
              { shadowOffset: { height: 1, width: shadowWidth } },
            ]}
          >
            <Image
              style={styles.candidatesImage}
              source={{
                uri: "https://npr.brightspotcdn.com/dims4/default/7f66e80/2147483647/strip/true/crop/2238x2310+0+0/resize/880x908!/quality/90/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2Flegacy%2Fsites%2Fidaho%2Ffiles%2F201902%2FMike_Crapo_official_photo.jpg",
              }}
            ></Image>

            <View style={styles.textWrapper}>
              <Text style={styles.candidatesName}>{props.candidateName}</Text>
              <Text style={styles.candidatesElection}>
                {props.candidatesElection}
              </Text>
            </View>
          </View>
        </Pressable>
      </View>
    </ScrollView>
  );
}

/*
 * TODO:
 *  Candidate Name
 *  Candidate Image
 *  Candidate Election
 */
const styles = StyleSheet.create({
  textWrapper: {
    width: "90%",
    backgroundColor: "#00000000",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  candidatesElection: {
    fontWeight: "300",
    fontSize: 20,
  },
  candidatesImage: {
    width: layout.window.width * 0.8,
    height: layout.window.width * 0.8,
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
  },
  candidatesName: {
    fontWeight: "400",
    fontSize: 24,
  },
  cardContainer: {
    width: layout.window.width,
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    margin: 16,
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    borderBottomStartRadius: 20,
    borderBottomEndRadius: 20,
    shadowColor: "white",
    shadowOpacity: 0.3,
    shadowRadius: 1,
    shadowOffset: { height: 1, width: 0.3 },
    alignItems: "center",
  },
});
