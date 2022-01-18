/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from "@react-navigation/native";
import * as Linking from "expo-linking";

import { RootStackParamList } from "../types";

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.makeUrl("/")],
  config: {
    screens: {
      Root: {
        screens: {
          Profile: {
            screens: {
              ProfileScreen: "profile",
            },
          },
          Candidates: {
            screens: {
              CandidatesScreen: "candidates",
            },
          },
          Surveys: {
            screens: {
              CandidatesScreen: "surveys",
            },
          },
          Elections: {
            screens: {
              CandidatesScreen: "elections",
            },
          },
          Settings: {
            screens: {
              CandidatesScreen: "Settings",
            },
          },
        },
      },
      Modal: "modal",
      ProfileEditor: "profile",
      NotFound: "*",
    },
  },
};

export default linking;
