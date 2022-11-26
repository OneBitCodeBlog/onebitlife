import React, { useEffect, useState } from "react";
import { Image, View, StyleSheet } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";

export default function SelectFrequency({ habitFrequency, frequencyInput }) {
  const [selected, setSelected] = useState(
    habitFrequency ? habitFrequency : "-"
  );

  const data = [
    { key: "Diário", value: "Diário" },
    { key: "Semanal", value: "Semanal" },
    { key: "Mensal", value: "Mensal" },
  ];
  useEffect(() => {
    frequencyInput(habitFrequency ? habitFrequency : undefined);
  }, []);

  return (
    <View style={{ marginBottom: 20 }}>
      <SelectList
        data={data}
        search={false}
        setSelected={setSelected}
        onSelect={() => {
          alert(selected);
          frequencyInput(selected);
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
    </View>
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
