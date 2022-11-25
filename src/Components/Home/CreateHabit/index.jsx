import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function CreateHabit({ habitArea, borderColor }) {
  const navigation = useNavigation();

  function handleCreate() {
    navigation.navigate("HabitPage", {
      create: true,
      habit: { habitArea: habitArea },
    });
  }

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[styles.button, { borderColor: borderColor }]}
      onPress={handleCreate}
    >
      <Text style={styles.habitTitle}>
        Adicionar meta {habitArea === "Mente" ? "da" : "do"} {habitArea}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 315,
    marginVertical: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 2,
    borderStyle: "dotted",
    borderColor: "white",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  habitTitle: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
