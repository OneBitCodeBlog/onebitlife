import React, { useEffect, useState } from "react";
import { Image, StyleSheet } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import HabitsData from "../../../Database/HabitsData";

export default function SelectHabit({ habit, habitInput }) {
  const [selected, setSelected] = useState(
    habit?.habitName ? habit?.habitName : "-"
  );
  const [data, setData] = useState();

  useEffect(() => {
    if (habit?.habitArea === "Mente") {
      setData(HabitsData.dataMind);
    }
    if (habit?.habitArea === "Financeiro") {
      setData(HabitsData.dataMoney);
    }
    if (habit?.habitArea === "Corpo") {
      setData(HabitsData.dataBody);
    }
    if (habit?.habitArea === "Humor") {
      setData(HabitsData.dataFun);
    }
    habitInput(habit?.habitName ? habit?.habitName : undefined);
  }, []);

  return (
    <>
      <SelectList
        setSelected={setSelected}
        data={data}
        search={false}
        onSelect={() => {
          habitInput(selected);
        }}
        placeholder={selected}
        boxStyles={styles.boxStyle}
        inputStyles={styles.inputStyle}
        dropdownStyles={styles.dropdownStyle}
        dropdownItemStyles={styles.dropdownItemStyle}
        dropdownTextStyles={styles.dropdownTextStyle}
        arrowicon={
          <Image
            source={require("../../../assets/icons/arrowDropdown.png")}
            style={styles.arrow}
          />
        }
      />
    </>
  );
}

const styles = StyleSheet.create({
  boxStyle: {
    borderWidth: 1,
    borderColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  inputStyle: {
    color: "white",
  },
  dropdownStyle: {
    borderWidth: 0,
  },
  dropdownItemStyle: {
    borderWidth: 1,
    borderColor: "#BBBB",
    borderRadius: 10,
    marginBottom: 15,
  },
  dropdownTextStyle: {
    color: "#BBBBBB",
  },
  arrow: {
    width: 20,
    height: 20,
  },
});
