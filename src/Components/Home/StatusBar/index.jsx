import React from "react";
import { View, StyleSheet, Image } from "react-native";

import { ProgressBar } from "react-native-paper";

export default function StatusBar({
  mindHabit,
  moneyHabit,
  bodyHabit,
  funHabit,
}) {
  return (
    <View style={styles.container}>
      <View style={styles.statusBarContainer}>
        <Image
          source={require("../../../assets/icons/educationIcon.png")}
          style={styles.icon}
        />
        <ProgressBar
          progress={mindHabit}
          color={"#90B7F3"}
          style={styles.progress}
        />
      </View>
      <View style={styles.statusBarContainer}>
        <Image
          source={require("../../../assets/icons/moneyIcon.png")}
          style={styles.icon}
        />
        <ProgressBar
          progress={moneyHabit}
          color={"#85BB65"}
          style={styles.progress}
        />
      </View>
      <View style={styles.statusBarContainer}>
        <Image
          source={require("../../../assets/icons/bodyIcon.png")}
          style={styles.icon}
        />
        <ProgressBar
          progress={bodyHabit}
          color={"#FF0043"}
          style={styles.progress}
        />
      </View>
      <View style={styles.statusBarContainer}>
        <Image
          source={require("../../../assets/icons/funIcon.png")}
          style={styles.icon}
        />
        <ProgressBar
          progress={funHabit}
          color={"#FE7F23"}
          style={styles.progress}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#151515",
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  statusBarContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 6,
  },
  progress: {
    borderRadius: 10,
    width: 250,
    height: 8,
  },
  icon: {
    width: 25,
    height: 25,
    marginRight: 5,
  },
});
