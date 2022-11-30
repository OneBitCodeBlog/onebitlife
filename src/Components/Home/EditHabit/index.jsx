import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, StyleSheet, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import CheckService from "../../../Services/CheckService";

export default function ({ habit, frequency, habitArea, checkColor }) {
  const navigation = useNavigation();
  const [habitCheck, setHabitCheck] = useState();
  const [checkImage, setCheckImage] = useState(
    require("../../../assets/icons/Mind.png")
  );
  const checkData = new Date();
  const formatDate = `${checkData.getFullYear()}-${checkData.getMonth()}-${checkData.getDate()}`;

  function handleEdit() {
    navigation.navigate("HabitPage", {
      create: false,
      habit,
    });
  }

  function handleCheck() {
    if (habitCheck === 0) {
      CheckService.checkHabit({
        lastCheck: formatDate,
        habitIsChecked: 1,
        habitChecks: habit?.habitChecks + 1,
        habitArea: habit?.habitArea,
      });

      setHabitCheck(1);
    }
  }

  useEffect(() => {
    setHabitCheck(habit?.habitIsChecked);
    if (habit?.habitArea === "Financeiro") {
      setCheckImage(require("../../../assets/icons/Money.png"));
    }
    if (habit?.habitArea === "Corpo") {
      setCheckImage(require("../../../assets/icons/Body.png"));
    }
    if (habit?.habitArea === "Humor") {
      setCheckImage(require("../../../assets/icons/Fun.png"));
    }
  }, []);

  const textNotification =
    habit?.habitNotificationTime == null
      ? `Sem notificação - ${habit?.habitFrequency}`
      : `${habit?.habitNotificationTime} - ${habit?.habitFrequency}`;

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={styles.button}
      onPress={handleEdit}
    >
      <View style={styles.habitText}>
        <Text style={styles.habitTitle}>{habit?.habitName}</Text>
        <Text style={styles.habitFrequency}>{textNotification}</Text>
      </View>
      {habitCheck === 0 ? (
        <TouchableOpacity
          style={[styles.check, { borderColor: checkColor }]}
          onPress={handleCheck}
        />
      ) : (
        <TouchableOpacity onPress={handleCheck}>
          <Image source={checkImage} style={styles.checked} />
        </TouchableOpacity>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#151515",
    borderRadius: 5,
    width: 320,
    marginVertical: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  habitTitle: {
    color: "white",
    fontWeight: "bold",
  },

  habitFrequency: {
    color: "white",
  },
  check: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderRadius: 10,
  },
  checked: {
    width: 25,
    height: 25,
  },
});
